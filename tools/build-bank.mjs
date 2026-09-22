#!/usr/bin/env node
/**
 * 题库构建脚本
 *   读取 data/*.json（各品类题库）→ 校验 → 合并输出 assets/js/core/bank.js
 *
 * 用法：
 *   node tools/build-bank.mjs            # 构建
 *   node tools/build-bank.mjs --check    # 只校验，不写文件
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'data');
const outFile = path.join(root, 'assets', 'js', 'core', 'bank.js');
const checkOnly = process.argv.includes('--check');

const CATS = ['servo', 'inverter', 'plc', 'hmi', 'io'];
const TYPES = ['single', 'multi', 'judge', 'fill', 'short', 'scenario'];
const SECS = ['public', 'internal', 'confidential'];
const OBJECTIVE = ['single', 'multi', 'judge', 'fill'];
const OBJECTIVE_ONLY_ROLES = ['sales', 'purchase'];
const PREFIX = { servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' };

const errors = [];
const warns = [];
const all = [];

function validate(q, file, i) {
  const tag = `${path.basename(file)}[${i}]${q && q.id ? ' ' + q.id : ''}`;
  if (!q || typeof q !== 'object') return errors.push(`${tag}: 不是对象`);
  if (!q.id) return errors.push(`${tag}: 缺少 id`);
  if (!CATS.includes(q.category)) return errors.push(`${tag}: category 非法（${q.category}）`);
  if (!TYPES.includes(q.type)) return errors.push(`${tag}: type 非法（${q.type}）`);
  if (![1, 2, 3].includes(Number(q.difficulty))) return errors.push(`${tag}: difficulty 必须为 1/2/3`);
  if (!q.stem || String(q.stem).trim().length < 5) return errors.push(`${tag}: 题干缺失或过短`);
  if (!q.analysis || String(q.analysis).trim().length < 15) warns.push(`${tag}: 解析过短`);
  if (!q.source || !q.source.title) warns.push(`${tag}: 缺少资料溯源`);
  if (!SECS.includes(q.security)) { warns.push(`${tag}: security 非法，按 public 处理`); q.security = 'public'; }
  if (!Array.isArray(q.roles) || !q.roles.length) { warns.push(`${tag}: 未标注适用人群，按 engineer 处理`); q.roles = ['engineer']; }

  if (q.type === 'single' || q.type === 'multi') {
    if (!q.options || typeof q.options !== 'object' || Object.keys(q.options).length < 2) return errors.push(`${tag}: 选项不足`);
    if (!Array.isArray(q.answer) || !q.answer.length) return errors.push(`${tag}: answer 必须为非空数组`);
    const bad = q.answer.filter((k) => !(k in q.options));
    if (bad.length) return errors.push(`${tag}: 答案 ${bad.join('/')} 不在选项内`);
    if (q.type === 'multi' && q.answer.length < 2) return errors.push(`${tag}: 多选题答案需 ≥2 项`);
    if (q.type === 'single' && q.answer.length !== 1) return errors.push(`${tag}: 单选题答案只能 1 项`);
  } else if (q.type === 'judge') {
    if (!Array.isArray(q.answer) || !['T', 'F'].includes(q.answer[0])) return errors.push(`${tag}: 判断题答案需为 ["T"] 或 ["F"]`);
  } else if (q.type === 'fill') {
    if (!Array.isArray(q.answer) || !q.answer.length || q.answer.length > 3
      || q.answer.some((a) => typeof a !== 'string' || !a.trim())) {
      return errors.push(`${tag}: 填空题 answer 需为 1–3 个非空字符串（按空位顺序）`);
    }
    const blanks = (String(q.stem).match(/_{3,}/g) || []).length;
    if (blanks !== q.answer.length) errors.push(`${tag}: 填空题空位数(${blanks})与答案数(${q.answer.length})不一致`);
    if (q.options != null) { warns.push(`${tag}: 填空题 options 应为 null`); q.options = null; }
  } else {
    if (typeof q.answer !== 'string' || q.answer.trim().length < 5) return errors.push(`${tag}: 简答/场景题 answer 需为参考答案文本`);
    if (q.options != null) { warns.push(`${tag}: 简答/场景题 options 应为 null`); q.options = null; }
  }
  // 人群 × 题型约束：销售与采购只考查客观题（单选 / 多选 / 判断 / 填空）
  if (!OBJECTIVE.includes(q.type) && Array.isArray(q.roles) && q.roles.some((r) => OBJECTIVE_ONLY_ROLES.includes(r))) {
    errors.push(`${tag}: 销售/采购人群只允许客观题，当前为 ${q.type}`);
  }
  all.push(q);
}

function main() {
  if (!fs.existsSync(dataDir)) {
    console.error(`× 题库目录不存在：${dataDir}`);
    process.exit(1);
  }
  const files = fs.readdirSync(dataDir).filter((f) => f.toLowerCase().endsWith('.json'));
  if (!files.length) {
    console.warn('! data/ 目录下没有 .json 题库文件，将生成空题库。');
  }

  const seen = new Map();
  for (const f of files) {
    const full = path.join(dataDir, f);
    let raw;
    try {
      raw = fs.readFileSync(full, 'utf8').replace(/^\ufeff/, '');
    } catch (e) {
      errors.push(`${f}: 读取失败 ${e.message}`);
      continue;
    }
    let list;
    try {
      list = JSON.parse(raw);
    } catch (e) {
      errors.push(`${f}: JSON 解析失败 → ${e.message}`);
      continue;
    }
    if (!Array.isArray(list)) {
      errors.push(`${f}: 顶层必须是数组`);
      continue;
    }
    list.forEach((q, i) => {
      validate(q, f, i);
      if (q && q.id) {
        if (seen.has(q.id)) errors.push(`${f}: 题号重复 ${q.id}（已在 ${seen.get(q.id)} 出现）`);
        else seen.set(q.id, f);
      }
    });
    console.log(`  · ${f.padEnd(16)} ${String(list.length).padStart(3)} 题`);
  }

  // 排序：品类顺序 → 难度 → 题号
  all.sort((a, b) => {
    const ca = CATS.indexOf(a.category), cb = CATS.indexOf(b.category);
    return ca - cb || Number(a.difficulty) - Number(b.difficulty) || String(a.id).localeCompare(String(b.id), 'zh');
  });

  // 统计
  const stat = {};
  CATS.forEach((c) => {
    stat[c] = { total: 0, single: 0, multi: 0, judge: 0, fill: 0, short: 0, scenario: 0, public: 0, internal: 0, confidential: 0, d1: 0, d2: 0, d3: 0 };
  });
  all.forEach((q) => {
    const s = stat[q.category];
    if (!s) return;
    s.total++;
    s[q.type] = (s[q.type] || 0) + 1;
    s[q.security] = (s[q.security] || 0) + 1;
    s['d' + q.difficulty] = (s['d' + q.difficulty] || 0) + 1;
  });

  console.log('\n=== 题库统计 ===');
  console.log('品类'.padEnd(12) + '题量  单选 多选 判断 填空 简答 场景 | 公开 内部 涉密 | 初 中 高');
  CATS.forEach((c) => {
    const s = stat[c];
    console.log(
      `${(PREFIX[c] + ' ' + c).padEnd(12)}${String(s.total).padStart(3)}  ${String(s.single).padStart(3)} ${String(s.multi).padStart(4)} ${String(s.judge).padStart(4)} ${String(s.fill).padStart(4)} ${String(s.short).padStart(4)} ${String(s.scenario).padStart(4)} | ${String(s.public).padStart(4)} ${String(s.internal).padStart(4)} ${String(s.confidential).padStart(4)} | ${String(s.d1).padStart(2)} ${String(s.d2).padStart(2)} ${String(s.d3).padStart(2)}`
    );
  });
  console.log(`合计：${all.length} 题`);

  if (warns.length) {
    console.log(`\n=== 提示（${warns.length} 条，不影响构建）===`);
    warns.slice(0, 20).forEach((w) => console.log('  ! ' + w));
    if (warns.length > 20) console.log(`  … 其余 ${warns.length - 20} 条省略`);
  }

  /* ---------------- 题库质量体检（重复检测 + 分步合理性） ---------------- */
  const normStem = (s) => String(s || '').replace(/[\s，。、；：（）()【】《》"'？！?！,.;:!！\-—]/g, '');
  const dice = (a, b) => {
    if (!a || !b) return 0;
    if (a === b) return 1;
    const grams = (s) => {
      const m = new Map();
      for (let i = 0; i < s.length - 1; i++) {
        const g = s.slice(i, i + 2);
        m.set(g, (m.get(g) || 0) + 1);
      }
      return m;
    };
    const ma = grams(a), mb = grams(b);
    if (!ma.size || !mb.size) return 0;
    let inter = 0;
    for (const k of ma.keys()) if (mb.has(k)) inter++;
    return (2 * inter) / (ma.size + mb.size);
  };

  const exactMap = new Map();
  all.forEach((q) => {
    const k = normStem(q.stem);
    if (!exactMap.has(k)) exactMap.set(k, []);
    exactMap.get(k).push(q.id);
  });
  const exactDups = [...exactMap.entries()].filter(([, ids]) => ids.length > 1);

  const nearDups = [];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      const A = all[i], B = all[j];
      if (A.category !== B.category) continue;
      const a = normStem(A.stem), b = normStem(B.stem);
      if (a === b) continue;
      if (Math.abs(a.length - b.length) > 12) continue;
      const s = dice(a, b);
      if (s >= 0.88) nearDups.push({ a: A.id, b: B.id, score: s });
    }
  }

  console.log('\n=== 质量体检 ===');
  if (exactDups.length) {
    console.log(`  × 题干完全重复 ${exactDups.length} 组：`);
    exactDups.slice(0, 10).forEach(([stem, ids]) => console.log(`      ${ids.join(' / ')}　${stem.slice(0, 40)}…`));
  } else {
    console.log('  ✓ 无题干完全重复的题目');
  }
  if (nearDups.length) {
    console.log(`  ! 高度相似 ${nearDups.length} 组（相似度 ≥88%，建议人工复核）：`);
    nearDups.slice(0, 10).forEach((d) => console.log(`      ${d.a} ↔ ${d.b}　相似度 ${Math.round(d.score * 100)}%`));
  } else {
    console.log('  ✓ 无高度相似（≥88%）的题目');
  }
  // 分布合理性
  const total = all.length || 1;
  const diffRatio = [1, 2, 3].map((d) => Math.round((all.filter((q) => Number(q.difficulty) === d).length / total) * 100));
  const secConf = Math.round((all.filter((q) => q.security === 'confidential').length / total) * 100);
  console.log(`  难度配比：入门 ${diffRatio[0]}% / 中级 ${diffRatio[1]}% / 高级 ${diffRatio[2]}%（建议 40/40/20）`);
  console.log(`  涉密占比：${secConf}%（建议 ≤15%）`);
  const diffWarn = Math.abs(diffRatio[0] - 40) > 12 || Math.abs(diffRatio[2] - 20) > 12;
  if (diffWarn) console.log('  ! 难度配比偏离建议值较多，建议补充相应难度的题目');
  if (secConf > 15) console.log('  ! 涉密题占比偏高，建议下调密级或补充公开题');

  if (errors.length) {
    console.error(`\n=== 错误（${errors.length} 条，构建中止）===`);
    errors.slice(0, 40).forEach((e) => console.error('  × ' + e));
    if (errors.length > 40) console.error(`  … 其余 ${errors.length - 40} 条省略`);
    process.exit(1);
  }

  if (checkOnly) {
    console.log('\n✓ 校验通过（--check 模式，未写入文件）');
    return;
  }

  const banner = `/* 题库数据产物（由 tools/build-bank.mjs 生成，请勿手工编辑）\n` +
    `   生成时间：${new Date().toLocaleString('zh-CN')}\n` +
    `   题目总数：${all.length}\n` +
    `   数据来源：data/*.json */\n`;
  const content = `${banner}window.INOVANCE_BANK = ${JSON.stringify(all, null, 2)};\n`;
  fs.writeFileSync(outFile, content, 'utf8');
  const kb = (Buffer.byteLength(content, 'utf8') / 1024).toFixed(1);
  console.log(`\n✓ 已生成 ${path.relative(root, outFile)}（${all.length} 题，${kb} KB）`);
}

main();
