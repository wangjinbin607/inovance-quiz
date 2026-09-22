#!/usr/bin/env node
/**
 * 知识库构建 + 校验
 *   data/knowledge/*.json  →  assets/js/core/knowledge.js
 *
 * 用法：
 *   node tools/build-knowledge.mjs           校验并写出产物
 *   node tools/build-knowledge.mjs --check   只校验（CI / 提交前自检）
 *
 * 规格依据：docs/知识库模块设计.md
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'data', 'knowledge');
const bankDir = path.join(root, 'data');
const outFile = path.join(root, 'assets', 'js', 'core', 'knowledge.js');
const checkOnly = process.argv.includes('--check');

const CATS = ['servo', 'inverter', 'plc', 'hmi', 'io'];
const PREFIX = { servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' };
const TOPICS = ['intro', 'selection', 'param', 'install', 'fault', 'faq', 'script'];
const TOPIC_NAME = {
  intro: '产品介绍', selection: '选型知识', param: '参数设置', install: '安装调试',
  fault: '常见故障', faq: '客户高频问答', script: '行业应用话术'
};
const SECS = ['public', 'internal', 'confidential'];
const ROLES = ['sales', 'engineer', 'purchase', 'partner'];
const BLOCK_TYPES = ['h', 'p', 'list', 'table', 'tip', 'steps', 'faq', 'script', 'code', 'img'];
const NO_RE = /^KB-(SRV|INV|PLC|HMI|IO)-\d{3}$/;

const errors = [];
const warns = [];
const all = [];

/** 题库中真实存在的题号（用于校验 relatedQuestions） */
function loadQuestionIds() {
  const ids = new Set();
  if (!fs.existsSync(bankDir)) return ids;
  for (const f of fs.readdirSync(bankDir)) {
    if (!f.toLowerCase().endsWith('.json')) continue;
    const full = path.join(bankDir, f);
    if (fs.statSync(full).isDirectory()) continue;
    try {
      const list = JSON.parse(fs.readFileSync(full, 'utf8').replace(/^\ufeff/, ''));
      if (Array.isArray(list)) list.forEach((q) => { if (q && q.id) ids.add(String(q.id)); });
    } catch { /* 题库文件问题由 build-bank.mjs 负责 */ }
  }
  return ids;
}

function checkBlock(b, tag) {
  if (!b || typeof b !== 'object') return errors.push(`${tag}: content 元素不是对象`);
  if (!BLOCK_TYPES.includes(b.type)) return errors.push(`${tag}: 内容块类型非法（${b.type}）`);
  switch (b.type) {
    case 'h':
    case 'p':
    case 'tip':
    case 'code':
      if (typeof b.text !== 'string' || !b.text.trim()) errors.push(`${tag}: ${b.type} 块缺少 text`);
      break;
    case 'list':
    case 'steps':
      if (!Array.isArray(b.items) || !b.items.length) errors.push(`${tag}: ${b.type} 块缺少 items`);
      break;
    case 'table':
      if (!Array.isArray(b.head) || !b.head.length) errors.push(`${tag}: table 块缺少 head`);
      if (!Array.isArray(b.rows) || !b.rows.length) errors.push(`${tag}: table 块缺少 rows`);
      else if (b.rows.some((r) => !Array.isArray(r) || r.length !== b.head.length)) {
        errors.push(`${tag}: table 块存在列数与表头不一致的行`);
      }
      break;
    case 'faq':
      if (!b.q || !b.a) errors.push(`${tag}: faq 块需同时提供 q 与 a`);
      break;
    case 'script':
      if (!b.scene || !b.good) errors.push(`${tag}: script 块需提供 scene 与 good`);
      break;
    case 'img':
      if (!b.src) errors.push(`${tag}: img 块缺少 src`);
      break;
    default:
      break;
  }
}

function validate(item, file, i, questionIds) {
  const tag = `${path.basename(file)}[${i}]${item && item.id ? ' ' + item.id : ''}`;
  if (!item || typeof item !== 'object') return errors.push(`${tag}: 不是对象`);
  if (!item.id) return errors.push(`${tag}: 缺少 id`);
  if (!NO_RE.test(item.id)) return errors.push(`${tag}: 知识编号格式非法（应为 KB-XXX-000）`);
  if (!CATS.includes(item.category)) return errors.push(`${tag}: category 非法（${item.category}）`);
  if (!item.id.startsWith('KB-' + PREFIX[item.category] + '-')) {
    return errors.push(`${tag}: 编号前缀与品类不一致（${item.category}）`);
  }
  if (!TOPICS.includes(item.topic)) return errors.push(`${tag}: topic 非法（${item.topic}）`);
  if (!item.title || String(item.title).trim().length < 6) return errors.push(`${tag}: 标题缺失或过短`);
  if (String(item.title).length > 60) warns.push(`${tag}: 标题超过 60 字（当前 ${String(item.title).length}）`);
  if (!item.summary || String(item.summary).trim().length < 10) return errors.push(`${tag}: 摘要缺失或过短`);
  if (String(item.summary).length > 90) warns.push(`${tag}: 摘要超过 80 字（当前 ${String(item.summary).length}）`);
  if (!Array.isArray(item.tags) || item.tags.length < 2 || item.tags.length > 6) {
    warns.push(`${tag}: 标签数量建议 2–6 个（当前 ${Array.isArray(item.tags) ? item.tags.length : 0}）`);
  }
  if (!Array.isArray(item.roles) || !item.roles.length) {
    warns.push(`${tag}: 未标注适用人群，按 engineer 处理`);
    item.roles = ['engineer'];
  }
  const badRole = item.roles.filter((r) => !ROLES.includes(r));
  if (badRole.length) errors.push(`${tag}: 适用人群非法（${badRole.join('/')}）`);
  if (!SECS.includes(item.security)) {
    warns.push(`${tag}: security 非法，按 public 处理`);
    item.security = 'public';
  }
  if (item.roles.includes('partner') && item.security !== 'public') {
    errors.push(`${tag}: 含 partner 人群的条目密级必须为 public`);
  }
  if (!Array.isArray(item.content) || !item.content.length) return errors.push(`${tag}: content 为空`);
  item.content.forEach((b) => checkBlock(b, tag));
  const plainLen = JSON.stringify(item.content).length;
  if (plainLen < 400) warns.push(`${tag}: 正文偏短（约 ${plainLen} 字符），建议补充细节`);
  if (!Array.isArray(item.relatedQuestions)) {
    warns.push(`${tag}: 未关联题目`);
    item.relatedQuestions = [];
  } else {
    const miss = item.relatedQuestions.filter((q) => !questionIds.has(String(q)));
    if (miss.length) errors.push(`${tag}: 关联题号在题库中不存在（${miss.join('/')}）`);
  }
  if (!item.source || !item.source.title) warns.push(`${tag}: 缺少资料溯源`);
  if (!Number(item.readMinutes)) item.readMinutes = Math.max(3, Math.round(plainLen / 500));
  if (![1, 2, 3].includes(Number(item.level))) item.level = 1;
  if (!Number.isFinite(Number(item.sortOrder))) item.sortOrder = 999;
  if (!item.updatedAt) item.updatedAt = new Date().toISOString().slice(0, 10);
  all.push(item);
}

function main() {
  if (!fs.existsSync(dataDir)) {
    console.error(`× 知识库目录不存在：${dataDir}`);
    process.exit(1);
  }
  const questionIds = loadQuestionIds();
  const files = fs.readdirSync(dataDir).filter((f) => f.toLowerCase().endsWith('.json')).sort();
  if (!files.length) console.warn('! data/knowledge/ 下没有 .json 文件，将生成空知识库。');

  const seen = new Map();
  console.log('=== 知识库文件 ===');
  for (const f of files) {
    const full = path.join(dataDir, f);
    let list;
    try {
      const raw = fs.readFileSync(full, 'utf8').replace(/^\ufeff/, '');
      list = JSON.parse(raw);
    } catch (e) {
      errors.push(`${f}: JSON 解析失败（${e.message}）`);
      continue;
    }
    if (!Array.isArray(list)) {
      errors.push(`${f}: 顶层必须是数组`);
      continue;
    }
    list.forEach((item, i) => {
      validate(item, f, i, questionIds);
      if (item && item.id) {
        if (seen.has(item.id)) errors.push(`${f}: 知识编号重复 ${item.id}（已在 ${seen.get(item.id)} 出现）`);
        else seen.set(item.id, f);
      }
    });
    console.log(`  · ${f.padEnd(16)} ${String(list.length).padStart(3)} 篇`);
  }

  all.sort((a, b) => Number(a.sortOrder) - Number(b.sortOrder)
    || CATS.indexOf(a.category) - CATS.indexOf(b.category)
    || String(a.id).localeCompare(String(b.id), 'zh'));

  // 统计
  const stat = {};
  CATS.forEach((c) => { stat[c] = { total: 0 }; TOPICS.forEach((t) => { stat[c][t] = 0; }); });
  const topicTotal = {}, secTotal = {}, roleTotal = {};
  all.forEach((it) => {
    if (stat[it.category]) {
      stat[it.category].total++;
      stat[it.category][it.topic]++;
    }
    topicTotal[it.topic] = (topicTotal[it.topic] || 0) + 1;
    secTotal[it.security] = (secTotal[it.security] || 0) + 1;
    it.roles.forEach((r) => { roleTotal[r] = (roleTotal[r] || 0) + 1; });
  });

  console.log('\n=== 知识库统计 ===');
  console.log('品类'.padEnd(12) + '篇数  ' + TOPICS.map((t) => TOPIC_NAME[t].slice(0, 2)).join('  '));
  CATS.forEach((c) => {
    const s = stat[c];
    console.log(`${(PREFIX[c] + ' ' + c).padEnd(12)}${String(s.total).padStart(3)}  `
      + TOPICS.map((t) => String(s[t]).padStart(2)).join('  '));
  });
  console.log(`合计：${all.length} 篇`);
  console.log('主题分布：' + TOPICS.map((t) => `${TOPIC_NAME[t]} ${topicTotal[t] || 0}`).join(' · '));
  console.log('密级分布：' + SECS.map((s) => `${s} ${secTotal[s] || 0}`).join(' · '));
  console.log('人群分布：' + ROLES.map((r) => `${r} ${roleTotal[r] || 0}`).join(' · '));

  if (warns.length) {
    console.log(`\n=== 提示（${warns.length} 条，不影响构建）===`);
    warns.slice(0, 20).forEach((w) => console.log('  ! ' + w));
    if (warns.length > 20) console.log(`  … 其余 ${warns.length - 20} 条省略`);
  }
  if (errors.length) {
    console.log(`\n=== 错误（${errors.length} 条）===`);
    errors.slice(0, 40).forEach((e) => console.log('  × ' + e));
    if (errors.length > 40) console.log(`  … 其余 ${errors.length - 40} 条省略`);
    console.error(`\n× 校验失败，共 ${errors.length} 条错误`);
    process.exit(1);
  }

  if (checkOnly) {
    console.log('\n✓ 校验通过（--check 模式，未写入文件）');
    return;
  }
  const banner = '/**\n'
    + ' * 知识库数据产物（由 tools/build-knowledge.mjs 生成，请勿手改）\n'
    + ` * 生成时间：${new Date().toLocaleString('zh-CN')}\n`
    + ` * 条目数：${all.length}\n`
    + ' */\n';
  fs.writeFileSync(outFile, banner + 'window.IqKnowledgeData = ' + JSON.stringify(all, null, 1) + ';\n', 'utf8');
  console.log('\n✓ 已生成 ' + path.relative(root, outFile) + '（' + all.length + ' 篇，'
    + (fs.statSync(outFile).size / 1024).toFixed(1) + ' KB）');
}

main();
