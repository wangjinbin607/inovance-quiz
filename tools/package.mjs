#!/usr/bin/env node
/**
 * 可移植文件打包脚本
 *
 * 产出（默认输出到 inovance-quiz/dist/）：
 *   1. 汇川产品刷题工具-单文件版.html        题库 / 样式 / 脚本全部内联，双击即用（刷题端）
 *   2. 汇川产品刷题工具-管理端-单文件版.html  同上（管理后台）
 *   3. inovance-quiz/                       完整可移植目录（含后端参考实现与工具）
 *   4. 快速开始.txt                          便携包使用说明（放在 3 的根目录）
 *
 * 用法：
 *   node tools/package.mjs            生成 dist/
 *   node tools/package.mjs --clean    先清空 dist/ 再生成
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const portableDir = path.join(distDir, 'inovance-quiz');

/** 拷贝完整目录时排除的内容 */
const EXCLUDE_DIRS = new Set(['dist', 'node_modules', '.git', '__pycache__', '.pylibs']);
const EXCLUDE_FILES = new Set(['.DS_Store', 'Thumbs.db']);
/** 运行时数据库文件（quiz.db / quiz.db-shm / quiz.db-wal）不进便携包 */
const EXCLUDE_PREFIX = ['quiz.db'];
const EXCLUDE_EXT = new Set(['.log', '.tmp']);

function readText(p) {
  return fs.readFileSync(p, 'utf8').replace(/^\ufeff/, '');
}

function kb(n) {
  return (n / 1024).toFixed(1) + ' KB';
}

/** 把入口 HTML 的 <link>/<script> 外链替换为内联内容 */
function bundle(entryFile, outFile, appName) {
  const entryPath = path.join(root, entryFile);
  let html = readText(entryPath);
  const stats = { css: 0, js: 0, files: [] };

  html = html.replace(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, (_m, href) => {
    const css = readText(path.join(root, href));
    stats.css++;
    stats.files.push(href);
    return '<style>\n/* ===== ' + href + ' ===== */\n' + css + '\n</style>';
  });

  html = html.replace(/<script\s+src="([^"]+)"\s*><\/script>/g, (_m, src) => {
    const js = readText(path.join(root, src)).replace(/<\/script>/gi, '<\\/script>');
    stats.js++;
    stats.files.push(src);
    return '<script>\n/* ===== ' + src + ' ===== */\n' + js + '\n</script>';
  });

  const banner = '<!--\n  ' + appName + ' · 单文件可移植版\n'
    + '  生成时间：' + new Date().toLocaleString('zh-CN') + '\n'
    + '  内联资源：' + stats.files.join('、') + '\n'
    + '  用法：直接双击打开即可（数据存本机浏览器 localStorage）；\n'
    + '        需要连接后端时在地址后加 ?api=1，并先执行 server/app.mjs。\n-->\n';
  html = html.replace(/^<!DOCTYPE html>\s*/i, (m) => m + banner);

  const outPath = path.join(distDir, outFile);
  fs.writeFileSync(outPath, html, 'utf8');
  return { outPath, size: Buffer.byteLength(html, 'utf8'), stats };
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let copied = 0;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      copied += copyDir(path.join(src, entry.name), path.join(dest, entry.name));
    } else {
      if (EXCLUDE_FILES.has(entry.name)) continue;
      if (EXCLUDE_PREFIX.some((p) => entry.name.startsWith(p))) continue;
      if (EXCLUDE_EXT.has(path.extname(entry.name).toLowerCase())) continue;
      fs.copyFileSync(path.join(src, entry.name), path.join(dest, entry.name));
      copied++;
    }
  }
  return copied;
}

function dirSize(dir) {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    total += entry.isDirectory() ? dirSize(full) : fs.statSync(full).size;
  }
  return total;
}

function quickStart() {
  return [
    '汇川产品刷题工具 · 可移植包使用说明',
    '=====================================',
    '',
    '【最快上手】双击打开下面任一文件，无需安装任何环境：',
    '  · 汇川产品刷题工具-单文件版.html        （刷题端，题库已内置）',
    '  · 汇川产品刷题工具-管理端-单文件版.html  （管理后台）',
    '  数据保存在本机浏览器 localStorage，换浏览器或清缓存会重新开始。',
    '',
    '【多人共用 / 局域网访问】把 inovance-quiz 目录整体拷贝到任意装有 Node.js 的机器：',
    '  cd inovance-quiz',
    '  node tools/serve.mjs 8080',
    '  浏览器访问 http://<本机IP>:8080/index.html',
    '',
    '【带后端（多端同步、服务端判分）】需要 Node.js 22 以上（使用内置 node:sqlite，零依赖）：',
    '  终端 1：node server/app.mjs 8090',
    '  终端 2：node tools/serve.mjs 8123',
    '  浏览器访问 http://localhost:8123/index.html?api=1',
    '  演示账号：admin/Admin@123（超管）、trainer01/Trainer@123（讲师）、',
    '            engineer01/Engineer@123、sales01/Sales@123、partner01/Partner@123',
    '',
    '【常用命令】',
    '  node tools/build-bank.mjs --check   # 题库校验（330 题，0 错误）',
    '  node tools/build-bank.mjs           # 改完 data/*.json 后重建题库',
    '  node server/smoke-test.mjs          # 后端接口冒烟测试（89 项断言）',
    '',
    '【内容清单】',
    '  index.html / admin.html   刷题端与管理端入口',
    '  assets/                   样式与脚本（含试卷导出 paper.js）',
    '  data/                     题库源文件（15 个 JSON，共 330 题）',
    '  server/                   后端参考实现（Node 零依赖）',
    '  tools/                    构建、校验、迁移、本地服务等脚本',
    '  docs/                     规划、后端规格书、联调自测报告、交接文档',
    '',
    '详细说明见 README.md；交接与排障见 docs/交接文档.md。',
    ''
  ].join('\r\n');
}

function main() {
  if (process.argv.includes('--clean') && fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  const quiz = bundle('index.html', '汇川产品刷题工具-单文件版.html', '刷题端');
  const admin = bundle('admin.html', '汇川产品刷题工具-管理端-单文件版.html', '管理端');

  const copied = copyDir(root, portableDir);
  fs.writeFileSync(path.join(portableDir, '快速开始.txt'), quickStart(), 'utf8');

  console.log('=== 单文件版 ===');
  console.log(`  ✓ ${path.basename(quiz.outPath)}  ${kb(quiz.size)}（内联 ${quiz.stats.css} 个 CSS、${quiz.stats.js} 个 JS）`);
  console.log(`  ✓ ${path.basename(admin.outPath)}  ${kb(admin.size)}（内联 ${admin.stats.css} 个 CSS、${admin.stats.js} 个 JS）`);
  console.log('=== 完整可移植目录 ===');
  console.log(`  ✓ ${path.relative(root, portableDir)}  ${copied} 个文件 / ${kb(dirSize(portableDir))}`);
  console.log(`\n输出目录：${distDir}`);
}

main();
