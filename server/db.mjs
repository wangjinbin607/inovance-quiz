/**
 * 数据库层：连接、建表、种子数据
 * 使用 Node 24 内置 node:sqlite（零依赖）
 */
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import crypto from 'node:crypto';

const here = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, '..');

/* ---------------------------------------------------------------------------
   角色与权限（与前端 store.js 的 ROLE_DEFS 完全一致）
   --------------------------------------------------------------------------- */
export const ROLE_DEFS = {
  super_admin: {
    label: '超级管理员',
    perms: ['quiz', 'exam', 'bank.read', 'bank.write', 'bank.review', 'bank.import',
      'task.write', 'report.all', 'report.self', 'user.manage',
      'security.public', 'security.internal', 'security.confidential']
  },
  trainer: {
    label: '培训讲师',
    perms: ['quiz', 'exam', 'bank.read', 'bank.write', 'bank.review', 'bank.import',
      'task.write', 'report.all', 'report.self',
      'security.public', 'security.internal', 'security.confidential']
  },
  employee: {
    label: '内部员工',
    perms: ['quiz', 'exam', 'report.self', 'security.public', 'security.internal']
  },
  partner: {
    label: '代理商 / 客户',
    perms: ['quiz', 'exam', 'report.self', 'security.public']
  }
};

export const CATEGORIES = [
  { key: 'servo', name: '伺服系统', short: '伺服', color: '#1a72cf' },
  { key: 'inverter', name: '变频器', short: '变频器', color: '#12996b' },
  { key: 'plc', name: '可编程逻辑控制器', short: 'PLC', color: '#7a5af5' },
  { key: 'hmi', name: 'HMI 人机界面', short: 'HMI', color: '#d98412' },
  { key: 'io', name: 'IO 系统', short: 'IO', color: '#0e9aa7' }
];

export const TYPES = [
  { key: 'single', name: '单选题' }, { key: 'multi', name: '多选题' },
  { key: 'judge', name: '判断题' }, { key: 'fill', name: '填空题' },
  { key: 'short', name: '简答题' }, { key: 'scenario', name: '场景分析题' }
];

export const DIFFICULTIES = [
  { key: 'beginner', name: '入门' }, { key: 'intermediate', name: '中级' }, { key: 'advanced', name: '高级' }
];

export const SECURITY_LEVELS = [
  { key: 'public', name: '公开' }, { key: 'internal', name: '内部' }, { key: 'confidential', name: '涉密' }
];

export const AUDIENCES = [
  { key: 'sales', name: '销售' }, { key: 'engineer', name: '技术' },
  { key: 'purchase', name: '采购' }, { key: 'partner', name: '合作客户' }
];

export const TYPE_SCORES = { single: 1, multi: 1.5, judge: 1, fill: 1.5, short: 2, scenario: 3 };

/* ---------------------------------------------------------------------------
   知识库枚举（见 docs/知识库模块设计.md §2.1 / §2.2 / §3）
   --------------------------------------------------------------------------- */

/** 一级分类前缀 → 品类（知识编号 KB-SRV-001 中的 SRV） */
export const KB_CATEGORY_CODES = { servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' };

/** 知识编号格式：KB-(SRV|INV|PLC|HMI|IO)-三位序号 */
export const KB_NO_RE = /^KB-(SRV|INV|PLC|HMI|IO)-\d{3}$/;

export const KB_TOPICS = [
  { key: 'intro', name: '产品介绍' },
  { key: 'selection', name: '选型知识' },
  { key: 'param', name: '参数设置' },
  { key: 'install', name: '安装调试' },
  { key: 'fault', name: '常见故障' },
  { key: 'faq', name: '客户高频问答' },
  { key: 'script', name: '行业应用话术' }
];
export const KB_TOPIC_KEYS = KB_TOPICS.map(t => t.key);

export const KB_STATUSES = [
  { key: 'draft', name: '草稿' }, { key: 'published', name: '已上线' }, { key: 'archived', name: '已归档' }
];
export const KB_STATUS_KEYS = KB_STATUSES.map(s => s.key);

/** 内容块类型（§2.3） */
export const KB_CONTENT_TYPES = ['h', 'p', 'list', 'table', 'tip', 'steps', 'faq', 'script', 'code', 'img'];

/** 新人学习路线三阶段（按 level 划分，§3.1 GET /api/knowledge/route） */
export const KB_STAGES = [
  { key: 'beginner', title: '入门必学', desc: '先建立产品与选型的整体认知，入职第一周读完', level: 1 },
  { key: 'intermediate', title: '进阶提升', desc: '掌握参数、安装与调试方法，能独立处理常见问题', level: 2 },
  { key: 'advanced', title: '深入拓展', desc: '面向复杂场景与行业话术，进阶为方案型角色', level: 3 }
];

export const KB_LEVELS = [
  { key: 1, name: '入门' }, { key: 2, name: '进阶' }, { key: 3, name: '深入' }
];

/** 客观题题型：销售与采购只考查这些（见 BANK_SCHEMA.md §2.1） */
export const OBJECTIVE_TYPES = ['single', 'multi', 'judge', 'fill'];
export const OBJECTIVE_ONLY_ROLES = ['sales', 'purchase'];

/** 角色 → 可见密级（权限过滤的唯一权威来源，见规格书 §4.1.2） */
export function securityScopeOf(role) {
  switch (role) {
    case 'super_admin':
    case 'trainer': return ['public', 'internal', 'confidential'];
    case 'employee': return ['public', 'internal'];
    case 'partner': return ['public'];
    default: return ['public'];
  }
}

export function permissionsOf(role) {
  return (ROLE_DEFS[role] || ROLE_DEFS.partner).perms.slice();
}

export function roleLabelOf(role) {
  return (ROLE_DEFS[role] || {}).label || role;
}

/* ---------------------------------------------------------------------------
   工具
   --------------------------------------------------------------------------- */
export function now() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

export function hashPassword(password, salt) {
  const s = salt || crypto.randomBytes(16).toString('hex');
  const h = crypto.pbkdf2Sync(password, s, 100000, 32, 'sha256').toString('hex');
  return `pbkdf2$${s}$${h}`;
}

export function verifyPassword(password, stored) {
  const [, salt, hash] = String(stored).split('$');
  if (!salt || !hash) return false;
  const calc = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256').toString('hex');
  return crypto.timingSafeEqual(Buffer.from(calc, 'hex'), Buffer.from(hash, 'hex'));
}

/* ---------------------------------------------------------------------------
   连接与初始化
   --------------------------------------------------------------------------- */
export function openDb(dbFile) {
  const db = new DatabaseSync(dbFile);
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec('PRAGMA foreign_keys = ON;');
  return db;
}

export function initSchema(db) {
  const sql = fs.readFileSync(path.join(here, 'schema.sql'), 'utf8');
  db.exec(sql);
  migrate(db, sql);
}

/** 从 schema.sql 中提取某张表的建表语句与索引语句（用于重建表时复用权威 DDL） */
function extractDdl(schemaSql, table) {
  const tableRe = new RegExp(`CREATE TABLE IF NOT EXISTS ${table} \\([\\s\\S]*?\\n\\);`);
  const m = schemaSql.match(tableRe);
  return m ? m[0] : null;
}
function extractIndexes(schemaSql, table) {
  const re = new RegExp(`CREATE (?:UNIQUE )?INDEX IF NOT EXISTS [\\s\\S]*? ON ${table}[\\s\\S]*?;`, 'g');
  return schemaSql.match(re) || [];
}

/** 轻量迁移：补齐后加的列；题型/状态等枚举扩容时重建表（SQLite 无法直接改 CHECK 约束） */
function migrate(db, schemaSql) {
  const cols = (table) => db.prepare(`PRAGMA table_info(${table})`).all().map((c) => c.name);
  const addIfMissing = (table, col, ddl) => {
    if (!cols(table).includes(col)) {
      db.exec(`ALTER TABLE ${table} ADD COLUMN ${col} ${ddl}`);
      console.log(`[migrate] ${table}.${col} 已补齐`);
    }
  };
  addIfMissing('user', 'deleted_at', 'TEXT');
  addIfMissing('user', 'last_login_at', 'TEXT');
  addIfMissing('user', 'ext_json', 'TEXT');
  addIfMissing('question', 'deleted_at', 'TEXT');
  addIfMissing('question', 'ext_json', 'TEXT');
  addIfMissing('exam', 'deleted_at', 'TEXT');
  addIfMissing('exam', 'difficulty_scope', 'TEXT');
  addIfMissing('exam', 'type_scope', 'TEXT');
  addIfMissing('exam_record', 'answers', 'TEXT');
  addIfMissing('exam_record', 'auto_submit', 'INTEGER NOT NULL DEFAULT 0');

  /* 题型新增 fill 后，旧库的 CHECK(type IN (...)) 会拒绝新题型 → 重建 question 表
     （user_answer.type 无 CHECK 约束，无需重建） */
  ['question'].forEach((table) => {
    const row = db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name=?").get(table);
    if (!row || !row.sql || row.sql.includes("'fill'")) return;
    const ddl = extractDdl(schemaSql, table);
    if (!ddl) return;
    const existing = cols(table);
    const tmp = `${table}__migrating`;
    console.log(`[migrate] ${table} 表需支持新题型 fill，正在重建…`);
    db.exec('PRAGMA foreign_keys=OFF');
    db.exec('BEGIN');
    try {
      db.exec(`ALTER TABLE ${table} RENAME TO ${tmp}`);
      db.exec(ddl);
      db.exec(`INSERT INTO ${table} (${existing.join(',')}) SELECT ${existing.join(',')} FROM ${tmp}`);
      db.exec(`DROP TABLE ${tmp}`);
      db.exec('COMMIT');
      extractIndexes(schemaSql, table).forEach((ix) => db.exec(ix));
      console.log(`[migrate] ${table} 重建完成，索引已恢复`);
    } catch (e) {
      db.exec('ROLLBACK');
      console.error(`[migrate] ${table} 重建失败：${e.message}`);
    } finally {
      db.exec('PRAGMA foreign_keys=ON');
    }
  });
}

/** 题库导入：data/*.json → question 表（对应规格书 §2.4 的批量导入逻辑）
 *  读取 data/ 下**全部** .json（含分批扩充文件如 servo-2.json），与 build-bank.mjs 保持一致 */
export function seedQuestions(db, { quiet } = {}) {
  const DIFF = { 1: 'beginner', 2: 'intermediate', 3: 'advanced' };
  const dataDir = path.join(projectRoot, 'data');
  const files = fs.readdirSync(dataDir)
    .filter((f) => f.toLowerCase().endsWith('.json'))
    .sort();
  const ts = now();
  let imported = 0, updated = 0, skipped = 0;
  const errors = [];

  const insert = db.prepare(`INSERT INTO question
    (question_no, category, type, difficulty, security, status, stem, options, answer, explanation,
     source_title, source_chapter, source_url, tags, audience, score_weight, created_by, created_at, updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  const update = db.prepare(`UPDATE question SET
     category=?, type=?, difficulty=?, security=?, status=?, stem=?, options=?, answer=?, explanation=?,
     source_title=?, source_chapter=?, source_url=?, tags=?, audience=?, score_weight=?, updated_at=?, version=version+1
     WHERE question_no=?`);
  const exists = db.prepare('SELECT id FROM question WHERE question_no=?');

  for (const f of files) {
    const file = path.join(dataDir, f);
    if (!fs.existsSync(file)) { errors.push(`缺少题库文件 ${f}`); continue; }
    let list;
    try { list = JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\ufeff/, '')); }
    catch (e) { errors.push(`${f} 解析失败：${e.message}`); continue; }
    if (!Array.isArray(list)) { errors.push(`${f} 顶层不是数组`); continue; }

    for (const q of list) {
      // ---- 校验（与规格书 §2.4.2 一致的核心规则）----
      if (!q.id || !/^[A-Z]+-\d+$/.test(q.id)) { errors.push(`${q.id || '(无题号)'}：题号格式非法`); continue; }
      if (!CATEGORIES.some(c => c.key === q.category)) { errors.push(`${q.id}：品类非法`); continue; }
      if (!TYPES.some(t => t.key === q.type)) { errors.push(`${q.id}：题型非法`); continue; }
      const diff = DIFF[q.difficulty];
      if (!diff) { errors.push(`${q.id}：难度非法`); continue; }
      const sec = ['public', 'internal', 'confidential'].includes(q.security) ? q.security : 'public';

      // 人群归一化：历史 service（售后运维）并入 engineer（技术），并按规则去重
      if (Array.isArray(q.roles)) {
        q.roles = q.roles
          .map((r) => (r === 'service' ? 'engineer' : r))
          .filter((r, i, a) => a.indexOf(r) === i);
      } else {
        q.roles = ['engineer'];
      }
      // 人群 × 题型约束：销售与采购只考查客观题（BANK_SCHEMA.md §2.1）
      if (q.roles.some((r) => OBJECTIVE_ONLY_ROLES.includes(r)) && !OBJECTIVE_TYPES.includes(q.type)) {
        errors.push(`${q.id}：销售/采购人群只允许客观题，当前为 ${q.type}`);
        continue;
      }

      if (q.type === 'single' || q.type === 'multi') {
        if (!q.options || Object.keys(q.options).length < 2) { errors.push(`${q.id}：选项不足 2 个`); continue; }
        if (!Array.isArray(q.answer) || !q.answer.length) { errors.push(`${q.id}：答案缺失`); continue; }
        if (q.answer.some(k => !(k in q.options))) { errors.push(`${q.id}：答案键不在选项内`); continue; }
        if (q.type === 'multi' && q.answer.length < 2) { errors.push(`${q.id}：多选题答案需 ≥2 项`); continue; }
      } else if (q.type === 'judge') {
        if (!Array.isArray(q.answer) || !['T', 'F'].includes(q.answer[0])) { errors.push(`${q.id}：判断题答案非法`); continue; }
      } else if (q.type === 'fill') {
        if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((a) => typeof a !== 'string' || !a.trim())) {
          errors.push(`${q.id}：填空题答案需为非空字符串数组`); continue;
        }
        if (!/_{3,}/.test(String(q.stem))) { errors.push(`${q.id}：填空题题干需用 ____ 标记空位`); continue; }
      } else if (typeof q.answer !== 'string' || q.answer.trim().length < 5) {
        errors.push(`${q.id}：简答/场景题需参考答案文本`); continue;
      }
      if (!q.stem || q.stem.trim().length < 5) { errors.push(`${q.id}：题干过短`); continue; }

      const optionsJson = (q.type === 'single' || q.type === 'multi')
        ? JSON.stringify(Object.keys(q.options).map(k => ({ key: k, text: q.options[k] })))
        : null;
      const answerJson = JSON.stringify(q.answer);
      const tagsJson = JSON.stringify(q.tags || []);
      const audienceJson = JSON.stringify(q.roles || []);
      const src = q.source || {};
      const weight = TYPE_SCORES[q.type] || 1;

      if (exists.get(q.id)) {
        update.run(q.category, q.type, diff, sec, 'published', q.stem, optionsJson, answerJson,
          q.analysis || '', src.title || null, src.chapter || null, src.url || null,
          tagsJson, audienceJson, weight, ts, q.id);
        updated++;
      } else {
        insert.run(q.id, q.category, q.type, diff, sec, 'published', q.stem, optionsJson, answerJson,
          q.analysis || '', src.title || null, src.chapter || null, src.url || null,
          tagsJson, audienceJson, weight, 1, ts, ts);
        imported++;
      }
    }
  }
  if (!quiet) console.log(`[seed] 题库导入完成：新增 ${imported}，更新 ${updated}${errors.length ? '，错误 ' + errors.length : ''}`);
  if (errors.length && !quiet) errors.slice(0, 10).forEach(e => console.log('  × ' + e));
  return { imported, updated, skipped, errors };
}

/** 校验单条知识条目（与设计文档 §2.2 / §2.3 / §3 校验规则一致）
 *  返回 { errors: string[], warnings: string[], row?: 入库行对象, related: [] }
 *  供种子导入与错误提示复用；管理端接口使用 app.mjs 中的 knowledgeValidate（错误结构不同） */
export function knowledgeValidate(item, index = 1, db = null) {
  const errors = [], warnings = [];
  const tag = `第 ${index} 条`;
  if (!item || typeof item !== 'object' || Array.isArray(item)) {
    return { errors: [`${tag}：不是合法的知识条目对象`], warnings, row: null, related: [] };
  }
  const no = item.knowledgeNo || item.id;
  const label = `${tag}${no ? '（' + no + '）' : ''}`;

  if (!no || !KB_NO_RE.test(String(no))) { errors.push(`${label}：知识编号格式应为 KB-(SRV|INV|PLC|HMI|IO)-三位序号`); return { errors, warnings, row: null, related: [] }; }
  if (!CATEGORIES.some(c => c.key === item.category)) errors.push(`${label}：category 非法（应为 servo/inverter/plc/hmi/io）`);
  if (!KB_TOPIC_KEYS.includes(item.topic)) errors.push(`${label}：topic 非法（应为 ${KB_TOPIC_KEYS.join('/')}）`);
  if (!CATEGORIES.some(c => c.key === item.category) || !KB_TOPIC_KEYS.includes(item.topic)) return { errors, warnings, row: null, related: [] };

  const code = KB_CATEGORY_CODES[item.category];
  if (String(no).slice(3, 3 + code.length) !== code) {
    warnings.push(`${label}：编号前缀与品类不一致（建议改为 KB-${code}-xxx）`);
  }

  const security = item.security || 'public';
  if (!['public', 'internal', 'confidential'].includes(security)) errors.push(`${label}：security 非法（应为 public/internal/confidential）`);
  const status = item.status || 'published';
  if (!KB_STATUS_KEYS.includes(status)) errors.push(`${label}：status 非法（应为 ${KB_STATUS_KEYS.join('/')}）`);

  const title = String(item.title || '').trim();
  if (!title) errors.push(`${label}：title 不能为空`);
  else if (title.length > 60) errors.push(`${label}：title 超过 60 字（当前 ${title.length} 字）`);
  const summary = String(item.summary || '').trim();
  if (!summary) warnings.push(`${label}：缺少 summary`);
  else if (summary.length > 80) warnings.push(`${label}：summary 超过 80 字`);

  const content = item.content;
  if (!Array.isArray(content) || !content.length) {
    errors.push(`${label}：content 必须为非空数组`);
  } else {
    content.forEach((b, bi) => {
      if (!b || typeof b !== 'object') return errors.push(`${label}：content[${bi}] 不是对象`);
      if (!KB_CONTENT_TYPES.includes(b.type)) errors.push(`${label}：content[${bi}].type 非法（${b.type}）`);
      else if (b.type === 'table' && (!Array.isArray(b.head) || !Array.isArray(b.rows) || b.rows.some(r => !Array.isArray(r) || r.length !== b.head.length))) {
        errors.push(`${label}：content[${bi}] 表格列数与表头不一致`);
      } else if (b.type === 'list' && !Array.isArray(b.items)) errors.push(`${label}：content[${bi}] list.items 必须为数组`);
      else if (b.type === 'faq' && (!b.q || !b.a)) errors.push(`${label}：content[${bi}] faq 需同时提供 q 与 a`);
      else if (b.type === 'script' && (!b.scene || !b.good)) errors.push(`${label}：content[${bi}] script 需提供 scene 与 good`);
    });
  }

  const tags = Array.isArray(item.tags) ? item.tags.slice() : [];
  if (tags.length < 2 || tags.length > 6) errors.push(`${label}：tags 需 2–6 个（当前 ${tags.length} 个）`);
  const audience = Array.isArray(item.roles) ? item.roles.slice()
    : (Array.isArray(item.audience) ? item.audience.slice() : ['engineer']);
  const badAud = audience.filter(a => !AUDIENCES.some(x => x.key === a));
  if (badAud.length) errors.push(`${label}：roles 含非法值 ${badAud.join('/')}（应为 sales/engineer/purchase/partner）`);
  if (audience.includes('partner') && security !== 'public') {
    errors.push(`${label}：roles 含 partner 时 security 必须为 public（当前 ${security}）`);
  }
  if (errors.length) return { errors, warnings, row: null, related: [] };

  // 关联题号：逐条回查 question 表，不存在的剔除并提示（不阻断导入）
  const related = [];
  const inRelated = Array.isArray(item.relatedQuestions) ? item.relatedQuestions : [];
  for (const qno of inRelated) {
    const q = db && db.prepare('SELECT question_no FROM question WHERE question_no=? AND deleted_at IS NULL').get(String(qno));
    if (q) related.push(q.question_no);
    else warnings.push(`${label}：关联题号 ${qno} 在题库中不存在，已剔除`);
  }

  const level = Number(item.level) || 1;
  const row = {
    knowledge_no: String(no),
    category: item.category,
    topic: item.topic,
    title,
    summary,
    content: JSON.stringify(content),
    tags: JSON.stringify(tags),
    audience: JSON.stringify(audience),
    related_questions: JSON.stringify(related),
    security,
    status,
    read_minutes: Math.max(1, Number(item.readMinutes) || 5),
    level: (level >= 1 && level <= 3) ? level : 1,
    sort_order: item.sortOrder == null ? null : Number(item.sortOrder),
    source_title: (item.source || {}).title || null,
    source_url: (item.source || {}).url || null,
    updated_at: String(item.updatedAt || now())
  };
  return { errors, warnings, row, related };
}

/** 知识库种子导入：data/knowledge/*.json → knowledge 表（设计文档 §7）
 *  目录不存在或为空时安全跳过；按 knowledge_no upsert，软删条目自动恢复 */
export function seedKnowledge(db, { quiet } = {}) {
  const dataDir = path.join(projectRoot, 'data', 'knowledge');
  const errors = [];
  let imported = 0, updated = 0, skipped = 0;
  const ts = now();

  let files = [];
  try {
    files = fs.readdirSync(dataDir).filter(f => f.toLowerCase().endsWith('.json')).sort();
  } catch {
    if (!quiet) console.log('[seed] 知识库：data/knowledge 目录不存在，跳过（内容生产完成后重启服务即自动导入）');
    return { imported, updated, skipped, errors };
  }
  if (!files.length) {
    if (!quiet) console.log('[seed] 知识库：data/knowledge 暂无 JSON 文件，跳过');
    return { imported, updated, skipped, errors };
  }

  const insert = db.prepare(`INSERT INTO knowledge
    (knowledge_no,category,topic,title,summary,content,tags,audience,related_questions,security,status,
     read_minutes,level,sort_order,source_title,source_url,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  const update = db.prepare(`UPDATE knowledge SET
      category=?,topic=?,title=?,summary=?,content=?,tags=?,audience=?,related_questions=?,security=?,status=?,
      read_minutes=?,level=?,sort_order=?,source_title=?,source_url=?,deleted_at=NULL,updated_at=?,version=version+1
    WHERE knowledge_no=?`);
  const exists = db.prepare('SELECT id FROM knowledge WHERE knowledge_no=?');

  for (const f of files) {
    const file = path.join(dataDir, f);
    let list;
    try { list = JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\ufeff/, '')); }
    catch (e) { errors.push(`${f} 解析失败：${e.message}`); continue; }
    if (!Array.isArray(list)) { errors.push(`${f} 顶层不是数组`); continue; }

    list.forEach((item, i) => {
      const v = knowledgeValidate(item, i + 1, db);
      v.warnings.forEach(w => errors.push(`${f} ${w}`));
      if (!v.row) { if (v.errors.length) { skipped++; v.errors.forEach(e => errors.push(`${f} ${e}`)); } return; }
      const r = v.row;
      if (exists.get(r.knowledge_no)) {
        update.run(r.category, r.topic, r.title, r.summary, r.content, r.tags, r.audience, r.related_questions,
          r.security, r.status, r.read_minutes, r.level, r.sort_order, r.source_title, r.source_url, ts, r.knowledge_no);
        updated++;
      } else {
        insert.run(r.knowledge_no, r.category, r.topic, r.title, r.summary, r.content, r.tags, r.audience,
          r.related_questions, r.security, r.status, r.read_minutes, r.level, r.sort_order,
          r.source_title, r.source_url, ts, ts);
        imported++;
      }
    });
  }
  if (!quiet) console.log(`[seed] 知识库导入完成：新增 ${imported}，更新 ${updated}${errors.length ? '，提示 ' + errors.length : ''}`);
  if (errors.length && !quiet) errors.slice(0, 10).forEach(e => console.log('  × ' + e));
  return { imported, updated, skipped, errors };
}

/** 演示账号（与前端四种角色一一对应） */
export function seedUsers(db) {
  const ts = now();
  const accounts = [
    ['admin', 'Admin@123', '初始超级管理员', 'super_admin', '产品培训部'],
    ['trainer01', 'Trainer@123', '李讲师', 'trainer', '产品培训部'],
    ['engineer01', 'Engineer@123', '张工', 'employee', '华东技术服务部'],
    ['sales01', 'Sales@123', '王销售', 'employee', '华东销售部'],
    ['partner01', 'Partner@123', '代理商A', 'partner', '华东某代理商']
  ];
  const ins = db.prepare(`INSERT OR IGNORE INTO user
    (username,password_hash,name,role,dept,status,created_at,updated_at) VALUES (?,?,?,?,?,1,?,?)`);
  const insSet = db.prepare('INSERT OR IGNORE INTO user_settings (user_id,daily_goal,instant_judge,shuffle_options,updated_at) VALUES (?,20,1,0,?)');
  const find = db.prepare('SELECT id FROM user WHERE username=?');
  const created = [];
  for (const [username, pwd, name, role, dept] of accounts) {
    const r = ins.run(username, hashPassword(pwd), name, role, dept, ts, ts);
    const id = find.get(username).id;
    insSet.run(id, ts);
    if (r.changes) created.push(`${username} / ${pwd}（${name} · ${role}）`);
  }
  return created;
}

/** 演示考试任务 */
export function seedTasks(db) {
  const ts = now();
  const admin = db.prepare("SELECT id FROM user WHERE username='admin'").get();
  const cnt = db.prepare('SELECT COUNT(*) AS n FROM exam').get().n;
  if (cnt > 0) return false;
  db.prepare(`INSERT INTO exam (title,category,difficulty_scope,type_scope,question_count,minutes,pass_score,deadline,roles,allow_retake,status,created_by,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
    '2026 年新员工产品知识摸底考', 'all', null, null, 20, 30, 60,
    '2026-12-31 23:59:59', JSON.stringify(['employee', 'partner']), 1, 'open', admin.id, ts, ts);
  return true;
}

export { projectRoot };
