#!/usr/bin/env node
/**
 * Material You (MD3) 设计令牌生成器
 *
 * 设计意图：Material You 的调色板由**种子色**推导，而不是手写一堆色值。
 * 把推导过程固化成脚本后，「换品牌色」= 改下面 SEED 常量 + 重跑本脚本，
 * 参考调色板与浅/深两套语义令牌会同步刷新，组件层无需改动。
 *
 * 用法：
 *   node tools/gen-md3-tokens.mjs            # 生成 assets/css/md3-tokens.css
 *   node tools/gen-md3-tokens.mjs --check    # 只校验产物是否为最新（CI 用）
 *
 * 说明：MD3 官方用 HCT 色彩空间；这里用 HSL 做近似（色相恒定、按 tone 调整明度与彩度），
 *      在内网老浏览器上无需 color-mix() 等新特性即可直接使用预计算的十六进制值。
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const outFile = path.join(root, 'assets', 'css', 'md3-tokens.css');
const checkOnly = process.argv.includes('--check');

/* ============================ 种子色 ============================ */

/** 品牌种子色：汇川蓝。改这一行即可让整套调色板跟着变 */
const SEED = '#0b5cab';

/** 各色系相对种子的色相偏移（度）与彩度基调 */
const SCHEMES = {
  primary: { hue: 0, sat: 1.00 },     // 品牌主色
  secondary: { hue: 0, sat: 0.42 },   // 柔和的主色，用于次要操作
  tertiary: { hue: 55, sat: 0.62 },   // 互补强调色（蓝 → 蓝紫），用于 FAB / 重点强调
  neutral: { hue: 0, sat: 0.11 },     // 表面中性色（带一丝种子色相，即 MD3 的「色调表面」）
  neutralVariant: { hue: 0, sat: 0.20 }, // 描边与次要文字
  error: { hue: 357, sat: 0.72, absolute: true }, // 错误/危险色：固定为红（不随种子色相漂移）
  // ↓ MD3 规范未定义、但培训考核业务必需的两个扩展语义色（与 error 同一明度体系）
  success: { hue: 152, sat: 0.58, absolute: true },
  warning: { hue: 38, sat: 0.90, absolute: true }
};

/** MD3 标准 tone 阶梯 */
const TONES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

/**
 * tone → HSL 明度。
 * 关键设计决策：把 **tone 40 锚定在种子色自身的明度上**，
 * 这样 --md-sys-color-primary（= primary-40）与品牌色逐位相同，
 * 其余 tone 按 MD3 的相对明度增量展开，既保留品牌识别又符合色调阶梯。
 */
const TONE_DELTA = { 0: null, 10: -26, 20: -16, 30: -6, 40: 0, 50: 10, 60: 20, 70: 31, 80: 44, 90: 55, 95: 61, 99: 64, 100: null };

function lOfTone(tone, seedL) {
  if (tone <= 0) return 0;
  if (tone >= 100) return 1;
  const base = seedL * 100;
  const delta = TONE_DELTA[tone] !== undefined ? TONE_DELTA[tone] : (tone - 40) * 1.06;
  return Math.min(1, Math.max(0, (base + delta) / 100));
}

/* ============================ 色彩工具 ============================ */

function hexToHsl(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = 60 * (((g - b) / d) % 6);
    else if (max === g) h = 60 * ((b - r) / d + 2);
    else h = 60 * ((r - g) / d + 4);
  }
  if (h < 0) h += 360;
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return { h, s, l };
}

function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s = Math.min(1, Math.max(0, s));
  l = Math.min(1, Math.max(0, l));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let rgb;
  if (h < 60) rgb = [c, x, 0];
  else if (h < 120) rgb = [x, c, 0];
  else if (h < 180) rgb = [0, c, x];
  else if (h < 240) rgb = [0, x, c];
  else if (h < 300) rgb = [x, 0, c];
  else rgb = [c, 0, x];
  return '#' + rgb.map((v) => {
    const n = Math.round((v + m) * 255);
    return (n < 16 ? '0' : '') + n.toString(16);
  }).join('').toUpperCase();
}

/**
 * 彩度曲线：MD3 的中段最饱满、极亮端偏柔和、极暗端略降，
 * 避免出现「荧光色」和「死黑」，保持 Material You 的柔和感。
 */
function satAt(tone, base) {
  let k;
  if (tone <= 10) k = 1.05;
  else if (tone <= 40) k = 1.0;
  else if (tone <= 70) k = 0.92;
  else if (tone <= 90) k = 0.78;
  else k = 0.62;
  return Math.min(1, base * k);
}

/* ============================ 生成调色板 ============================ */

const seedHsl = hexToHsl(SEED);
const palettes = {};

for (const [name, cfg] of Object.entries(SCHEMES)) {
  const hue = cfg.absolute ? cfg.hue : seedHsl.h + cfg.hue;
  const satBase = cfg.absolute ? cfg.sat : seedHsl.s * cfg.sat;
  palettes[name] = {};
  TONES.forEach((tone) => {
    palettes[name][tone] = hslToHex(hue, satAt(tone, satBase), lOfTone(tone, seedHsl.l));
  });
}

/**
 * 便捷取值：按需计算任意 tone（不限于标准阶梯）。
 * 语义层会用到 94/96/92 这类中间 tone，必须现算，否则会出现 undefined。
 */
function P(schemeName, tone) {
  const cfg = SCHEMES[schemeName];
  const hue = cfg.absolute ? cfg.hue : seedHsl.h + cfg.hue;
  const satBase = cfg.absolute ? cfg.sat : seedHsl.s * cfg.sat;
  return hslToHex(hue, satAt(tone, satBase), lOfTone(tone, seedHsl.l));
}

/* ============================ 语义令牌 ============================ */

/** 浅色模式语义令牌（MD3 light scheme） */
const LIGHT = {
  primary: P('primary', 40),
  onPrimary: P('primary', 100),
  primaryContainer: P('primary', 90),
  onPrimaryContainer: P('primary', 10),
  secondary: P('secondary', 40),
  onSecondary: P('secondary', 100),
  secondaryContainer: P('secondary', 90),
  onSecondaryContainer: P('secondary', 10),
  tertiary: P('tertiary', 40),
  onTertiary: P('tertiary', 100),
  tertiaryContainer: P('tertiary', 90),
  onTertiaryContainer: P('tertiary', 10),
  error: P('error', 40),
  onError: P('error', 100),
  errorContainer: P('error', 90),
  onErrorContainer: P('error', 10),
  /* 扩展语义色（MD3 未定义，业务需要） */
  success: P('success', 40),
  onSuccess: P('success', 100),
  successContainer: P('success', 90),
  onSuccessContainer: P('success', 10),
  warning: P('warning', 40),
  onWarning: P('warning', 100),
  warningContainer: P('warning', 90),
  onWarningContainer: P('warning', 10),
  surface: P('neutral', 99),
  surfaceDim: P('neutral', 87),
  surfaceBright: P('neutral', 99),
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: P('neutral', 96),
  surfaceContainer: P('neutral', 94),
  surfaceContainerHigh: P('neutral', 92),
  surfaceContainerHighest: P('neutral', 90),
  onSurface: P('neutral', 10),
  onSurfaceVariant: P('neutralVariant', 30),
  outline: P('neutralVariant', 50),
  outlineVariant: P('neutralVariant', 80),
  inverseSurface: P('neutral', 20),
  inverseOnSurface: P('neutral', 95),
  scrim: P('neutral', 0)
};

/** 深色模式语义令牌（MD3 dark scheme：主色改用 tone 80，保证暗底上的对比度） */
const DARK = {
  primary: P('primary', 80),
  onPrimary: P('primary', 20),
  primaryContainer: P('primary', 30),
  onPrimaryContainer: P('primary', 90),
  secondary: P('secondary', 80),
  onSecondary: P('secondary', 20),
  secondaryContainer: P('secondary', 30),
  onSecondaryContainer: P('secondary', 90),
  tertiary: P('tertiary', 80),
  onTertiary: P('tertiary', 20),
  tertiaryContainer: P('tertiary', 30),
  onTertiaryContainer: P('tertiary', 90),
  error: P('error', 80),
  onError: P('error', 20),
  errorContainer: P('error', 30),
  onErrorContainer: P('error', 90),
  /* 扩展语义色（MD3 未定义，业务需要） */
  success: P('success', 80),
  onSuccess: P('success', 20),
  successContainer: P('success', 30),
  onSuccessContainer: P('success', 90),
  warning: P('warning', 80),
  onWarning: P('warning', 20),
  warningContainer: P('warning', 30),
  onWarningContainer: P('warning', 90),
  // 深色表面：MD3 深色模式的表面是绝对低明度（4%–24%），与种子色明度无关
  surface: darkSurface(6),
  surfaceDim: darkSurface(6),
  surfaceBright: darkSurface(24),
  surfaceContainerLowest: darkSurface(4),
  surfaceContainerLow: darkSurface(10),
  surfaceContainer: darkSurface(12),
  surfaceContainerHigh: darkSurface(17),
  surfaceContainerHighest: darkSurface(22),
  onSurface: P('neutral', 90),
  onSurfaceVariant: P('neutralVariant', 80),
  outline: P('neutralVariant', 60),
  outlineVariant: P('neutralVariant', 30),
  inverseSurface: P('neutral', 90),
  inverseOnSurface: P('neutral', 20),
  scrim: P('neutral', 0)
};

/** 深色模式的低明度表面：4%–24% 绝对明度，与种子色明度无关 */
function darkSurface(tone) {
  return hslToHex(seedHsl.h, satAt(tone, seedHsl.s * SCHEMES.neutral.sat), tone / 100);
}

/* ============================ 输出 CSS ============================ */

function refBlock() {
  const lines = [];
  for (const [name, tones] of Object.entries(palettes)) {
    const kebab = name.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
    lines.push(`  /* ${kebab} */`);
    for (const tone of TONES) {
      lines.push(`  --md-ref-${kebab}-${tone}: ${tones[tone]};`);
    }
  }
  return lines.join('\n');
}

function sysBlock(scheme) {
  return Object.entries(scheme)
    .map(([k, v]) => {
      const kebab = k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
      return `  --md-sys-color-${kebab}: ${v};`;
    })
    .join('\n');
}

const css = `/* ==========================================================================
   Material You (Material Design 3) 设计令牌
   —— 由 tools/gen-md3-tokens.mjs 自动生成，请勿手改本文件
   种子色（seed）：${SEED}   生成时间：${new Date().toLocaleString('zh-CN')}

   分层约定（与 MD3 官方一致）：
     ① 参考调色板 --md-ref-*    ：由种子色推导的 tone 阶梯
     ② 语义令牌   --md-sys-*    ：组件只允许引用这一层
     ③ 形状/动效/状态            ：跨组件复用的非颜色令牌
   换品牌色：改 tools/gen-md3-tokens.mjs 里的 SEED 常量并重跑即可。
   ========================================================================== */

:root {
  /* ========== ① 参考调色板（tone 0–100，勿在组件中直接引用） ========== */
${refBlock()}

  /* ========== ③ 形状（MD3 shape scale） ========== */
  --md-sys-shape-corner-none: 0;
  --md-sys-shape-corner-xs: 8px;
  --md-sys-shape-corner-sm: 12px;
  --md-sys-shape-corner-md: 16px;
  --md-sys-shape-corner-lg: 24px;
  --md-sys-shape-corner-xl: 28px;
  --md-sys-shape-corner-2xl: 32px;
  --md-sys-shape-corner-3xl: 48px;
  --md-sys-shape-corner-full: 9999px;

  /* ========== ③ 高程（MD3 elevation：与色调表面配合，而非单纯投影） ========== */
  --md-sys-elevation-0: none;
  --md-sys-elevation-1: 0 1px 2px rgba(0, 0, 0, .10), 0 1px 3px 1px rgba(0, 0, 0, .06);
  --md-sys-elevation-2: 0 1px 2px rgba(0, 0, 0, .10), 0 2px 6px 2px rgba(0, 0, 0, .07);
  --md-sys-elevation-3: 0 4px 8px 3px rgba(0, 0, 0, .08), 0 1px 3px rgba(0, 0, 0, .12);
  --md-sys-elevation-4: 0 6px 10px 4px rgba(0, 0, 0, .08), 0 2px 3px rgba(0, 0, 0, .12);
  --md-sys-elevation-5: 0 8px 12px 6px rgba(0, 0, 0, .08), 0 4px 4px rgba(0, 0, 0, .12);

  /* ========== ③ 动效（MD3 motion） ========== */
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-duration-short: 200ms;
  --md-sys-motion-duration-medium: 300ms;
  --md-sys-motion-duration-long: 450ms;

  /* ========== ③ 状态层（MD3 state layer：叠加不透明度，而非改颜色） ========== */
  --md-sys-state-hover-opacity: 0.08;
  --md-sys-state-focus-opacity: 0.10;
  --md-sys-state-pressed-opacity: 0.10;
  --md-sys-state-disabled-opacity: 0.38;
  --md-sys-state-disabled-container-opacity: 0.12;

  /* ========== ③ 字体（Roboto 优先，中文回落到系统字体，离线可用） ========== */
  --md-sys-typescale-font: Roboto, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Source Han Sans SC", system-ui, -apple-system, "Segoe UI", sans-serif;
  --md-sys-typescale-font-mono: "Roboto Mono", "JetBrains Mono", "Cascadia Mono", Consolas, "Courier New", monospace;
  /* 字号阶梯：display 56 / headline 32 / title 24 / body 16 / label 14 */
  --md-sys-typescale-display-large: 3.5rem;
  --md-sys-typescale-headline-large: 2rem;
  --md-sys-typescale-headline-small: 1.5rem;
  --md-sys-typescale-title-large: 1.375rem;
  --md-sys-typescale-title-medium: 1rem;
  --md-sys-typescale-body-large: 1rem;
  --md-sys-typescale-body-medium: 0.9375rem;
  --md-sys-typescale-label-large: 0.875rem;
  --md-sys-typescale-label-small: 0.75rem;

  /* ========== ② 语义令牌 · 浅色模式 ========== */
${sysBlock(LIGHT)}
}

/* ========== ② 语义令牌 · 深色模式（MD3 dark scheme）
   选择器与现有实现对齐：ui.js 的主题切换给 body 加 .dark 类 ========== */
body.dark,
[data-theme="dark"] {
${sysBlock(DARK)}
}

/* ========== 无障碍：尊重系统的「减少动态效果」偏好 ========== */
@media (prefers-reduced-motion: reduce) {
  :root {
    --md-sys-motion-duration-short: 0.01ms;
    --md-sys-motion-duration-medium: 0.01ms;
    --md-sys-motion-duration-long: 0.01ms;
  }
}
`;

if (css.includes('undefined')) {
  console.error('× 生成结果含 undefined：语义令牌引用了无法计算的 tone，请检查 P() / darkSurface() 的参数');
  process.exit(1);
}

if (checkOnly) {
  const current = fs.existsSync(outFile) ? fs.readFileSync(outFile, 'utf8') : '';
  const same = current.includes(`种子色（seed）：${SEED}`);
  console.log(same ? '✓ 令牌文件与种子色一致' : '× 令牌文件已过期，请重跑 node tools/gen-md3-tokens.mjs');
  process.exit(same ? 0 : 1);
}

fs.writeFileSync(outFile, css, 'utf8');
console.log('✓ 已生成 ' + path.relative(root, outFile)
  + '（' + (Buffer.byteLength(css, 'utf8') / 1024).toFixed(1) + ' KB，种子色 ' + SEED + '）');
console.log('  主色 primary-40 = ' + P('primary', 40)
  + ' ｜ primary-80 = ' + P('primary', 80)
  + ' ｜ tertiary-40 = ' + P('tertiary', 40)
  + ' ｜ surface = ' + LIGHT.surface);
