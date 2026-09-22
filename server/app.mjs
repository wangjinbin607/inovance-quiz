/**
 * 汇川产品刷题工具 · 后端参考实现（Node.js 零依赖）
 *
 * 接口契约与《后端开发规格说明书》第三章一致，用于前后端联调自测。
 * 生产环境请按规格书使用 MySQL + Spring Boot 实现（本实现的 SQL 层已按同构模型设计）。
 *
 * 启动：node server/app.mjs [端口]
 */
import http from 'node:http';
import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {
  openDb, initSchema, seedQuestions, seedUsers, seedTasks, seedKnowledge,
  CATEGORIES, TYPES, DIFFICULTIES, SECURITY_LEVELS, AUDIENCES, TYPE_SCORES,
  OBJECTIVE_TYPES, OBJECTIVE_ONLY_ROLES,
  KB_NO_RE, KB_TOPICS, KB_TOPIC_KEYS, KB_STATUSES, KB_STATUS_KEYS,
  KB_CONTENT_TYPES, KB_STAGES, KB_LEVELS,
  securityScopeOf, permissionsOf, roleLabelOf, hashPassword, verifyPassword, now, projectRoot
} from './db.mjs';

const here = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = Number(process.argv[2] || process.env.PORT || 8090);
const SECRET = process.env.IQZ_SECRET || 'iqz-dev-secret';
const DB_FILE = process.env.IQZ_DB || path.join(here, 'quiz.db');
const TOKEN_TTL_SEC = 7200;

/* ============================ 基础设施 ============================ */

const db = openDb(DB_FILE);
initSchema(db);
const seeded = seedUsers(db);
const qres = seedQuestions(db, { quiet: true });
const kres = seedKnowledge(db, { quiet: true });
const taskSeeded = seedTasks(db);

/* ---------------------------- 响应封装 ---------------------------- */
const CODES = { OK: 0, PARAM: 1001, UNAUTH: 1002, FORBIDDEN: 1003, NOTFOUND: 1004, CONFLICT: 1005, SERVER: 2001 };

function send(res, httpStatus, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(httpStatus, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  });
  res.end(body);
}
const ok = (res, data) => send(res, 200, { code: 0, message: 'ok', data });
const err = (res, code, message, httpStatus = 400) => send(res, httpStatus, { code, message, data: null });

function readBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (c) => { raw += c; if (raw.length > 5e6) req.destroy(); });
    req.on('end', () => {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch { resolve(null); }
    });
  });
}

/* ---------------------------- 认证 ---------------------------- */
function b64url(buf) { return Buffer.from(buf).toString('base64url'); }

function signToken(user) {
  const payload = { uid: user.id, role: user.role, exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SEC };
  const p = b64url(JSON.stringify(payload));
  const sig = crypto.createHmac('sha256', SECRET).update(p).digest('base64url');
  return `${p}.${sig}`;
}

function verifyToken(token) {
  if (!token || token.indexOf('.') < 0) return null;
  const [p, sig] = token.split('.');
  const expect = crypto.createHmac('sha256', SECRET).update(p).digest('base64url');
  if (sig !== expect) return null;
  try {
    const payload = JSON.parse(Buffer.from(p, 'base64url').toString('utf8'));
    if (payload.exp * 1000 < Date.now()) return null;
    return payload;
  } catch { return null; }
}

function currentUser(req) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  const payload = verifyToken(token);
  if (!payload) return null;
  const row = db.prepare('SELECT * FROM user WHERE id=? AND status=1 AND deleted_at IS NULL').get(payload.uid);
  return row || null;
}

function publicUser(u) {
  return {
    id: u.id, username: u.username, name: u.name, role: u.role,
    roleLabel: roleLabelOf(u.role), dept: u.dept,
    permissions: permissionsOf(u.role), securityScope: securityScopeOf(u.role)
  };
}

/* ---------------------------- 权限 ---------------------------- */
function can(user, perm) { return permissionsOf(user.role).includes(perm); }

/* ---------------------------- 题目映射 ---------------------------- */
function parseJson(s, fallback) {
  if (s == null) return fallback;
  try { return JSON.parse(s); } catch { return fallback; }
}

/** DB 行 → 题目对象；withAnswer=false 时不返回答案与解析（规格书 §4.4） */
function mapQuestion(row, withAnswer) {
  const q = {
    questionId: row.id,
    questionNo: row.question_no,
    category: row.category,
    categoryName: (CATEGORIES.find(c => c.key === row.category) || {}).name || row.category,
    type: row.type,
    typeName: (TYPES.find(t => t.key === row.type) || {}).name || row.type,
    difficulty: row.difficulty,
    difficultyName: (DIFFICULTIES.find(d => d.key === row.difficulty) || {}).name || row.difficulty,
    security: row.security,
    securityName: (SECURITY_LEVELS.find(s => s.key === row.security) || {}).name || row.security,
    status: row.status,
    stem: row.stem,
    options: parseJson(row.options, null),
    tags: parseJson(row.tags, []),
    audience: parseJson(row.audience, []),
    scoreWeight: row.score_weight,
    usageCount: row.usage_count,
    rightCount: row.right_count,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
  if (withAnswer) {
    q.answer = parseJson(row.answer, null);
    q.explanation = row.explanation;
    q.source = { title: row.source_title, chapter: row.source_chapter, url: row.source_url };
  }
  return q;
}

/** 密级过滤 SQL 片段 + 参数（所有题目查询必须经过此处） */
function scopeClause(user, alias = 'q') {
  const scope = securityScopeOf(user.role);
  return { sql: `${alias}.security IN (${scope.map(() => '?').join(',')})`, params: scope };
}

/* ---------------------------- 知识库映射（见 docs/知识库模块设计.md §2.4） ---------------------------- */
const KB_TOPIC_NAME = (key) => (KB_TOPICS.find(t => t.key === key) || {}).name || key;
const KB_STATUS_NAME = (key) => (KB_STATUSES.find(s => s.key === key) || {}).name || key;
const KB_CATEGORY_NAME = (key) => (CATEGORIES.find(c => c.key === key) || {}).name || key;
const KB_LEVEL_NAME = (key) => (KB_LEVELS.find(l => l.key === Number(key)) || {}).name || '入门';

function truncate(s, n) {
  const t = String(s == null ? '' : s);
  return t.length > n ? t.slice(0, n) + '…' : t;
}

/** 正文首个 p / tip 块 → 列表页摘要前缀（列表不下发 content，减小载荷） */
function contentExcerpt(content, n = 80) {
  const block = (content || []).find(b => b && (b.type === 'p' || b.type === 'tip') && b.text);
  return block ? truncate(block.text, n) : '';
}

/**
 * DB 行 → 知识条目对象
 * withContent=false（列表/路线）：只返回元信息 + 学习状态，不含 content 正文
 * withContent=true（详情/管理端编辑）：返回全量字段
 */
function mapKnowledge(row, withContent) {
  const rec = row.rec_id == null ? null : row;
  const k = {
    knowledgeNo: row.knowledge_no,
    category: row.category,
    categoryName: KB_CATEGORY_NAME(row.category),
    topic: row.topic,
    topicName: KB_TOPIC_NAME(row.topic),
    title: row.title,
    summary: row.summary,
    tags: parseJson(row.tags, []),
    audience: parseJson(row.audience, []),
    security: row.security,
    securityName: (SECURITY_LEVELS.find(s => s.key === row.security) || {}).name || row.security,
    status: row.status,
    statusName: KB_STATUS_NAME(row.status),
    level: row.level,
    levelName: KB_LEVEL_NAME(row.level),
    readMinutes: row.read_minutes,
    sortOrder: row.sort_order,
    source: { title: row.source_title, url: row.source_url },
    readCount: row.read_count || 0,
    version: row.version,
    updatedAt: row.updated_at,
    createdAt: row.created_at,
    // 当前用户学习状态（未登录或无记录时为默认值）
    myFinished: !!(rec && rec.finished),
    myFav: !!(rec && rec.fav),
    myReadSeconds: rec ? rec.read_seconds : 0,
    myReadCount: rec ? rec.read_count : 0,
    myLastReadAt: rec ? rec.last_read_at : null
  };
  if (withContent) {
    const content = parseJson(row.content, []);
    k.content = content;
    k.relatedQuestions = parseJson(row.related_questions, []);
    k.excerpt = contentExcerpt(content);
  } else {
    k.excerpt = contentExcerpt(parseJson(row.content, []));
  }
  return k;
}

/** 知识条目查询基类条件：软删过滤 + 密级过滤（复用 scopeClause，SQL 层强制） */
function knowledgeScope(user, { publishedOnly, alias = 'k' } = {}) {
  const scope = scopeClause(user, alias);
  const sql = [`${alias}.deleted_at IS NULL`, scope.sql];
  if (publishedOnly) sql.push(`${alias}.status='published'`);
  return { sql: sql.join(' AND '), params: scope.params.slice() };
}

/** 取一条用户可见的知识条目（用户端；不可见与不存在同样返回 null，避免探测） */
function getVisibleKnowledge(user, no, { publishedOnly }) {
  const w = knowledgeScope(user, { publishedOnly });
  return db.prepare(`SELECT k.* FROM knowledge k WHERE k.knowledge_no=? AND ${w.sql}`).get(String(no), ...w.params) || null;
}

/** 知识条目是否存在（不限密级，仅用于管理端冲突判定） */
function knowledgeRowByNo(no) {
  return db.prepare('SELECT * FROM knowledge WHERE knowledge_no=?').get(String(no)) || null;
}

/** 关联题号 → 题目摘要；题目不存在、已软删、未上线或**越权**的一律不下发摘要 */
function relatedQuestionSummaries(user, list) {
  const out = [];
  for (const qno of list || []) {
    const w = knowledgeScope(user, { publishedOnly: false, alias: 'q' });
    const row = db.prepare(`SELECT q.id,q.question_no,q.stem,q.type,q.difficulty FROM question q
       WHERE q.question_no=? AND q.status='published' AND q.deleted_at IS NULL AND ${w.sql}`)
      .get(String(qno), ...w.params);
    if (!row) continue;
    out.push({
      questionNo: row.question_no, stem: row.stem, type: row.type,
      typeName: (TYPES.find(t => t.key === row.type) || {}).name || row.type,
      difficulty: row.difficulty,
      difficultyName: (DIFFICULTIES.find(d => d.key === row.difficulty) || {}).name || row.difficulty
    });
  }
  return out;
}

/** 用户知识学习记录（不存在则返回 null） */
function knowledgeRecordOf(userId, knowledgeId) {
  return db.prepare('SELECT * FROM user_knowledge_record WHERE user_id=? AND knowledge_id=?').get(userId, knowledgeId) || null;
}

/** 读取或初始化用户知识学习记录（读上报 / 收藏共用） */
function ensureKnowledgeRecord(user, knowledgeId, knowledgeNo, ts) {
  const cur = knowledgeRecordOf(user.id, knowledgeId);
  if (cur) return cur;
  db.prepare(`INSERT INTO user_knowledge_record
    (user_id,knowledge_id,knowledge_no,first_read_at,last_read_at,read_seconds,read_count,finished,fav,created_at,updated_at)
    VALUES (?,?,?,NULL,NULL,0,0,0,0,?,?)`).run(user.id, knowledgeId, knowledgeNo, ts, ts);
  return knowledgeRecordOf(user.id, knowledgeId);
}

/** 知识条目「对外/入库」行对象（种子与管理端共用字段口径） */
function knowledgeValues(b) {
  return {
    category: b.category,
    topic: b.topic,
    title: String(b.title || '').trim(),
    summary: String(b.summary || '').trim(),
    content: JSON.stringify(b.content),
    tags: JSON.stringify(Array.isArray(b.tags) ? b.tags : []),
    audience: JSON.stringify(Array.isArray(b.roles) ? b.roles : (Array.isArray(b.audience) ? b.audience : ['engineer'])),
    related: JSON.stringify(Array.isArray(b.relatedQuestions) ? b.relatedQuestions : []),
    security: b.security || 'public',
    status: KB_STATUS_KEYS.includes(b.status) ? b.status : 'published',
    read_minutes: Math.max(1, Number(b.readMinutes) || 5),
    level: [1, 2, 3].includes(Number(b.level)) ? Number(b.level) : 1,
    sort_order: b.sortOrder == null ? null : Number(b.sortOrder),
    source_title: (b.source || {}).title || null,
    source_url: (b.source || {}).url || null
  };
}

/**
 * 管理端知识条目校验（设计文档 §3 校验规则 1–5）
 * partial=true 时只校验请求体中出现的字段（PUT 局部更新）
 * 返回 { errors:[{field,message}], warnings:[{field,message}], row }
 */
function knowledgeValidate(b, { partial } = {}) {
  const errors = [], warnings = [];
  const has = (k) => !partial || (b[k] !== undefined);
  const no = String((b && (b.knowledgeNo || b.id)) || '');

  if (!partial) {
    if (!no) errors.push({ field: 'knowledgeNo', message: '知识编号不能为空' });
    else if (!KB_NO_RE.test(no)) errors.push({ field: 'knowledgeNo', message: '知识编号格式应为 KB-(SRV|INV|PLC|HMI|IO)-三位序号' });
  }
  if (has('category') && !CATEGORIES.some(c => c.key === b.category)) {
    errors.push({ field: 'category', message: 'category 非法，应为 servo/inverter/plc/hmi/io' });
  }
  if (has('topic') && !KB_TOPIC_KEYS.includes(b.topic)) {
    errors.push({ field: 'topic', message: `topic 非法，应为 ${KB_TOPIC_KEYS.join('/')}` });
  }
  if (has('security') && b.security != null && !['public', 'internal', 'confidential'].includes(b.security)) {
    errors.push({ field: 'security', message: 'security 非法，应为 public/internal/confidential' });
  }
  if (has('status') && b.status != null && !KB_STATUS_KEYS.includes(b.status)) {
    errors.push({ field: 'status', message: `status 非法，应为 ${KB_STATUS_KEYS.join('/')}` });
  }
  if (has('title')) {
    const t = String(b.title || '').trim();
    if (!t) errors.push({ field: 'title', message: 'title 不能为空' });
    else if (t.length > 60) errors.push({ field: 'title', message: `title 超过 60 字（当前 ${t.length} 字）` });
  }
  if (has('summary') && String(b.summary || '').trim().length > 80) {
    warnings.push({ field: 'summary', message: 'summary 超过 80 字，前端卡片会截断' });
  }
  if (has('content')) {
    if (!Array.isArray(b.content) || !b.content.length) {
      errors.push({ field: 'content', message: 'content 必须为非空数组' });
    } else {
      b.content.forEach((blk, i) => {
        if (!blk || typeof blk !== 'object') return errors.push({ field: 'content', message: `content[${i}] 不是对象` });
        if (!KB_CONTENT_TYPES.includes(blk.type)) return errors.push({ field: 'content', message: `content[${i}].type 非法（${blk.type}），支持 ${KB_CONTENT_TYPES.join('/')}` });
        if (blk.type === 'table' && (!Array.isArray(blk.head) || !Array.isArray(blk.rows) || blk.rows.some(r => !Array.isArray(r) || r.length !== blk.head.length))) {
          errors.push({ field: 'content', message: `content[${i}] 表格列数与表头不一致` });
        } else if (blk.type === 'list' && !Array.isArray(blk.items)) {
          errors.push({ field: 'content', message: `content[${i}] list.items 必须为数组` });
        } else if (blk.type === 'faq' && (!blk.q || !blk.a)) {
          errors.push({ field: 'content', message: `content[${i}] faq 需同时提供 q 与 a` });
        } else if (blk.type === 'script' && (!blk.scene || !blk.good)) {
          errors.push({ field: 'content', message: `content[${i}] script 需提供 scene 与 good` });
        }
      });
    }
  }
  if (has('tags')) {
    const tags = Array.isArray(b.tags) ? b.tags : [];
    if (tags.length < 2 || tags.length > 6) errors.push({ field: 'tags', message: `tags 需 2–6 个（当前 ${tags.length} 个）` });
  }
  if (has('roles')) {
    const roles = Array.isArray(b.roles) ? b.roles : [];
    const bad = roles.filter(r => !AUDIENCES.some(a => a.key === r));
    if (bad.length) errors.push({ field: 'roles', message: `roles 含非法值 ${bad.join('/')}，应为 sales/engineer/purchase/partner` });
  }
  // roles 含 partner 时 security 必须为 public（校验规则 5）
  for (const key of ['roles', 'audience']) {
    if (has(key) && Array.isArray(b[key]) && b[key].includes('partner') && (b.security || 'public') !== 'public') {
      errors.push({ field: 'security', message: 'roles 含 partner 时 security 必须为 public' });
    }
  }
  if (has('level') && b.level != null && ![1, 2, 3].includes(Number(b.level))) {
    errors.push({ field: 'level', message: 'level 必须为 1（入门）/ 2（进阶）/ 3（深入）' });
  }
  if (!errors.length) {
    const row = knowledgeValues(b);
    // 关联题号：不存在的剔除并提示（校验规则 4，不阻断导入）；未提供时不改动（PUT 局部更新）
    if (Array.isArray(b.relatedQuestions)) {
      const kept = [];
      for (const qno of b.relatedQuestions) {
        const q = db.prepare('SELECT question_no FROM question WHERE question_no=? AND deleted_at IS NULL').get(String(qno));
        if (q) kept.push(q.question_no);
        else warnings.push({ field: 'relatedQuestions', message: `关联题号 ${qno} 在题库中不存在，已剔除` });
      }
      row.related = JSON.stringify(kept);
    }
    return { errors, warnings, row };
  }
  return { errors, warnings, row: null };
}

/** 管理端 PUT 局部更新：请求体中出现的字段采用新值，未出现的沿用库中现值 */
function mergeKnowledgeRow(row, body) {
  return {
    knowledgeNo: row.knowledge_no,
    category: body.category !== undefined ? body.category : row.category,
    topic: body.topic !== undefined ? body.topic : row.topic,
    title: body.title !== undefined ? body.title : row.title,
    summary: body.summary !== undefined ? body.summary : row.summary,
    content: body.content !== undefined ? body.content : parseJson(row.content, []),
    tags: body.tags !== undefined ? body.tags : parseJson(row.tags, []),
    roles: body.roles !== undefined ? body.roles : parseJson(row.audience, []),
    security: body.security !== undefined ? body.security : row.security,
    status: body.status !== undefined ? body.status : row.status,
    readMinutes: body.readMinutes !== undefined ? body.readMinutes : row.read_minutes,
    level: body.level !== undefined ? body.level : row.level,
    sortOrder: body.sortOrder !== undefined ? body.sortOrder : row.sort_order,
    relatedQuestions: body.relatedQuestions !== undefined ? body.relatedQuestions : parseJson(row.related_questions, []),
    source: body.source !== undefined ? body.source : { title: row.source_title, url: row.source_url }
  };
}

/* ---------------------------- 判题（服务端唯一权威） ---------------------------- */
function normalizeAnswer(type, ans) {
  if (type === 'short' || type === 'scenario') return ans == null ? '' : String(ans).trim();
  if (type === 'fill') {
    if (ans == null) return [];
    return (Array.isArray(ans) ? ans : [ans]).map((x) => String(x == null ? '' : x));
  }
  if (ans == null) return [];
  const arr = Array.isArray(ans) ? ans.slice() : [String(ans)];
  return arr.map(x => String(x).trim()).filter(Boolean).sort();
}

/** 填空答案标准化：去空白、全角转半角、忽略大小写 */
function normFillText(s) {
  return String(s == null ? '' : s)
    .replace(/\s+/g, '')
    .replace(/[Ａ-Ｚａ-ｚ０-９（）]/g, (c) => {
      if (c === '（') return '(';
      if (c === '）') return ')';
      return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
    })
    .toLowerCase();
}

function judge(type, correctAnswer, userAnswer) {
  if (type === 'short' || type === 'scenario') return { gradable: false, isCorrect: null };
  if (type === 'fill') {
    const stdArr = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
    const userArr = Array.isArray(userAnswer) ? userAnswer : (userAnswer == null ? [] : [userAnswer]);
    const detail = stdArr.map((a, i) => {
      const un = normFillText(userArr[i]);
      const an = normFillText(a);
      // 完全一致，或用户多写了少量单位/说明（长度差 ≤4 且包含标准答案）
      const ok = un === an || (un.length > an.length && un.indexOf(an) >= 0 && un.length - an.length <= 4);
      return { index: i + 1, user: userArr[i] == null ? '' : String(userArr[i]), standard: String(a), correct: ok };
    });
    const allRight = detail.length > 0 && detail.every((d) => d.correct);
    return { gradable: true, isCorrect: allRight, detail };
  }
  const a = normalizeAnswer(type, userAnswer);
  const b = normalizeAnswer(type, correctAnswer);
  return { gradable: true, isCorrect: a.length === b.length && a.every((x, i) => x === b[i]) };
}

/* ============================ 业务：统计 ============================ */

function userStats(user) {
  const scope = scopeClause(user);
  const bankTotal = db.prepare(`SELECT COUNT(*) AS n FROM question q
     WHERE q.status='published' AND q.deleted_at IS NULL AND ${scope.sql}`).get(...scope.params).n;

  const agg = db.prepare(`SELECT
      COUNT(*) AS answered,
      SUM(CASE WHEN is_correct=1 THEN 1 ELSE 0 END) AS rightCnt,
      SUM(CASE WHEN is_correct=0 THEN 1 ELSE 0 END) AS wrongCnt,
      COUNT(DISTINCT question_id) AS covered
    FROM user_answer WHERE user_id=?`).get(user.id);

  const wrongOpen = db.prepare("SELECT COUNT(*) AS n FROM wrong_book WHERE user_id=? AND status='open'").get(user.id).n;
  const wrongAll = db.prepare('SELECT COUNT(*) AS n FROM wrong_book WHERE user_id=?').get(user.id).n;
  const favCount = db.prepare('SELECT COUNT(*) AS n FROM favorite WHERE user_id=?').get(user.id).n;
  const examCount = db.prepare("SELECT COUNT(*) AS n FROM exam_record WHERE user_id=? AND status='submitted'").get(user.id).n;
  const practiceCount = db.prepare('SELECT COUNT(*) AS n FROM practice_session WHERE user_id=? AND ended_at IS NOT NULL').get(user.id).n;

  const today = now().slice(0, 10);
  const todayAnswered = db.prepare("SELECT COUNT(*) AS n FROM user_answer WHERE user_id=? AND substr(answered_at,1,10)=?").get(user.id, today).n;

  const days = db.prepare("SELECT DISTINCT substr(answered_at,1,10) AS d FROM user_answer WHERE user_id=? ORDER BY d DESC").all(user.id).map(r => r.d);
  let streak = 0;
  if (days.length) {
    const d = new Date();
    const key = (dt) => `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
    if (days[0] === key(d) || days[0] === key(new Date(d.getTime() - 86400000))) {
      let cursor = new Date(days[0] === key(d) ? d : new Date(d.getTime() - 86400000));
      for (let i = 0; i < 400; i++) {
        if (days.includes(key(cursor))) { streak++; cursor = new Date(cursor.getTime() - 86400000); }
        else break;
      }
    }
  }

  const st = db.prepare('SELECT * FROM user_settings WHERE user_id=?').get(user.id) || { daily_goal: 20 };
  const answered = agg.answered || 0;
  return {
    bankTotal,
    coveredCount: agg.covered || 0,
    coverage: bankTotal ? Math.round((agg.covered || 0) / bankTotal * 1000) / 10 : 0,
    answeredTotal: answered,
    rightTotal: agg.rightCnt || 0,
    wrongTotal: agg.wrongCnt || 0,
    rate: answered ? Math.round((agg.rightCnt || 0) / answered * 1000) / 10 : null,
    wrongOpen, wrongAll, favCount, examCount, practiceCount, todayAnswered,
    dailyGoal: st.daily_goal, goalPercent: Math.min(100, Math.round(todayAnswered / (st.daily_goal || 20) * 100)),
    streak
  };
}

/** 五品类正确率（未作答返回 null，规格书 §4.3） */
function categoryStats(user) {
  const rows = db.prepare(`SELECT category,
      COUNT(*) AS answered,
      SUM(CASE WHEN is_correct=1 THEN 1 ELSE 0 END) AS rightCnt,
      SUM(CASE WHEN is_correct=0 THEN 1 ELSE 0 END) AS wrongCnt
    FROM user_answer WHERE user_id=? AND is_correct IS NOT NULL GROUP BY category`).all(user.id);
  const map = {};
  rows.forEach(r => {
    map[r.category] = {
      answered: r.answered, right: r.rightCnt || 0, wrong: r.wrongCnt || 0,
      rate: r.answered ? Math.round((r.rightCnt || 0) / r.answered * 1000) / 10 : null
    };
  });
  const scope = scopeClause(user);
  const totals = {};
  db.prepare(`SELECT q.category, COUNT(*) AS n,
      SUM(CASE WHEN EXISTS(SELECT 1 FROM user_answer ua WHERE ua.question_id=q.id AND ua.user_id=?) THEN 1 ELSE 0 END) AS seen
    FROM question q WHERE q.status='published' AND q.deleted_at IS NULL AND ${scope.sql}
    GROUP BY q.category`).all(user.id, ...scope.params).forEach(r => {
    totals[r.category] = { total: r.n, seen: r.seen || 0 };
  });

  return CATEGORIES.map(c => {
    const s = map[c.key] || { answered: 0, right: 0, wrong: 0, rate: null };
    const t = totals[c.key] || { total: 0, seen: 0 };
    const openWrong = db.prepare(`SELECT COUNT(*) AS n FROM wrong_book WHERE user_id=? AND category=? AND status='open'`).get(user.id, c.key).n;
    return {
      category: c.key, name: c.name, short: c.short, color: c.color,
      total: t.total, seen: t.seen,
      coverage: t.total ? Math.round(t.seen / t.total * 1000) / 10 : 0,
      answered: s.answered, right: s.right, wrong: s.wrong, rate: s.rate, wrongOpen: openWrong
    };
  });
}

function openExamTasks(user) {
  const scope = scopeClause(user);
  return db.prepare(`SELECT e.*, u.name AS creator FROM exam e
      LEFT JOIN user u ON u.id=e.created_by
     WHERE e.status='open' AND e.deleted_at IS NULL ORDER BY e.created_at DESC`).all()
    .filter(t => {
      const roles = parseJson(t.roles, []);
      return !roles.length || roles.includes(user.role) || user.role === 'super_admin';
    })
    .map(t => {
      const attempts = db.prepare(`SELECT id,percent,passed,submitted_at FROM exam_record
         WHERE exam_id=? AND user_id=? AND status='submitted' ORDER BY percent DESC`).all(t.id, user.id);
      const best = attempts.length ? attempts[0].percent : null;
      let canStart = true, blockedReason = null;
      if (t.deadline && t.deadline < now()) { canStart = false; blockedReason = '已过截止时间'; }
      if (attempts.length && !t.allow_retake) { canStart = false; blockedReason = '已交卷且不允许重考'; }
      return {
        taskId: t.id, title: t.title,
        category: t.category,
        categoryName: t.category === 'all' ? '综合' : (CATEGORIES.find(c => c.key === t.category) || {}).name,
        questionCount: t.question_count, minutes: t.minutes, passScore: t.pass_score,
        deadline: t.deadline, allowRetake: !!t.allow_retake, status: t.status,
        createdBy: t.creator || '', createdAt: t.created_at,
        myAttempts: attempts.map(a => ({ recordId: a.id, percent: a.percent, passed: !!a.passed, submittedAt: a.submitted_at })),
        bestScore: best, canStart, blockedReason
      };
    });
}

/* ============================ 业务：抽题 ============================ */

function buildPaper(user, opts) {
  const scope = scopeClause(user);
  let sql = `SELECT q.* FROM question q WHERE q.status='published' AND q.deleted_at IS NULL AND ${scope.sql}`;
  const params = scope.params.slice();

  if (opts.categories && opts.categories.length) {
    sql += ` AND q.category IN (${opts.categories.map(() => '?').join(',')})`;
    params.push(...opts.categories);
  }
  if (opts.difficulties && opts.difficulties.length) {
    sql += ` AND q.difficulty IN (${opts.difficulties.map(() => '?').join(',')})`;
    params.push(...opts.difficulties);
  }
  if (opts.types && opts.types.length) {
    sql += ` AND q.type IN (${opts.types.map(() => '?').join(',')})`;
    params.push(...opts.types);
  }
  let rows = db.prepare(sql).all(...params);

  // 适用人群过滤（audience 存 JSON，JS 层判断）
  if (opts.audiences && opts.audiences.length) {
    rows = rows.filter(r => {
      const aud = parseJson(r.audience, []);
      return !aud.length || aud.some(a => opts.audiences.includes(a));
    });
  }

  const mode = opts.mode || 'random';
  if (mode === 'wrong') {
    const ids = db.prepare("SELECT question_id FROM wrong_book WHERE user_id=? AND status='open'").all(user.id).map(r => r.question_id);
    rows = rows.filter(r => ids.includes(r.id));
  } else if (mode === 'fav') {
    const ids = db.prepare('SELECT question_id FROM favorite WHERE user_id=?').all(user.id).map(r => r.question_id);
    rows = rows.filter(r => ids.includes(r.id));
  } else if (mode === 'weak') {
    // 薄弱强化：按品类正确率升序，优先薄弱品类（规格书 §4.2）
    const cats = categoryStats(user).filter(c => c.rate != null).sort((a, b) => a.rate - b.rate);
    const weakCats = cats.filter(c => c.answered >= 5 && c.rate < 60).map(c => c.category);
    const priority = weakCats.length ? weakCats : cats.map(c => c.category);
    const wrongIds = new Set(db.prepare("SELECT question_id FROM wrong_book WHERE user_id=? AND status='open'").all(user.id).map(r => r.question_id));
    const seenIds = new Set(db.prepare('SELECT DISTINCT question_id FROM user_answer WHERE user_id=?').all(user.id).map(r => r.question_id));
    rows = rows.slice().sort((a, b) => {
      const pa = (priority.indexOf(a.category) >= 0 ? 0 : 100) + (wrongIds.has(a.id) ? 0 : 10) + (seenIds.has(a.id) ? 5 : 0);
      const pb = (priority.indexOf(b.category) >= 0 ? 0 : 100) + (wrongIds.has(b.id) ? 0 : 10) + (seenIds.has(b.id) ? 5 : 0);
      return pa - pb || Math.random() - 0.5;
    });
  } else if (mode === 'sequential') {
    rows.sort((a, b) => {
      const ca = CATEGORIES.findIndex(c => c.key === a.category) - CATEGORIES.findIndex(c => c.key === b.category);
      return ca || DIFFICULTIES.findIndex(d => d.key === a.difficulty) - DIFFICULTIES.findIndex(d => d.key === b.difficulty) || a.question_no.localeCompare(b.question_no);
    });
  } else {
    rows = rows.slice().sort(() => Math.random() - 0.5);
  }

  const poolSize = rows.length;
  let count = Number(opts.count || 0);
  if (count > 0 && rows.length > count) rows = balancedSample(rows, count);
  return { rows, poolSize };
}

/** 按题型比例均衡抽题（避免抽到的全是单选） */
function balancedSample(rows, n) {
  const byType = {};
  rows.forEach(r => { (byType[r.type] = byType[r.type] || []).push(r); });
  const keys = Object.keys(byType);
  if (keys.length <= 1) return rows.slice(0, n);
  const total = rows.length;
  let picked = [];
  keys.forEach(k => {
    const quota = Math.max(1, Math.round(n * byType[k].length / total));
    picked = picked.concat(byType[k].sort(() => Math.random() - 0.5).slice(0, quota));
  });
  if (picked.length > n) picked = picked.sort(() => Math.random() - 0.5).slice(0, n);
  if (picked.length < n) {
    const ids = new Set(picked.map(p => p.id));
    picked = picked.concat(rows.filter(r => !ids.has(r.id)).sort(() => Math.random() - 0.5).slice(0, n - picked.length));
  }
  return picked.sort(() => Math.random() - 0.5);
}

function logAudit(user, action, entity, entityId, details) {
  db.prepare(`INSERT INTO audit_log (actor_id,actor_name,action,entity,entity_id,details,created_at)
    VALUES (?,?,?,?,?,?,?)`).run(user.id, user.name, action, entity, entityId == null ? null : String(entityId),
    JSON.stringify(details || {}), now());
}

/* ============================ 路由表 ============================ */
/**
 * routes: { method, pattern, perm?, handler(ctx) }
 * ctx = { req, res, user, params, query, body }
 */
const routes = [];
const route = (method, pattern, perm, handler, opts) => routes.push({
  method, pattern, perm, handler,
  isPublic: !!(opts && opts.isPublic)   // 匿名可访问（如登录接口）
});

/* ---------------- 认证 ---------------- */
route('POST', /^\/api\/auth\/login$/, null, async ({ res, body }) => {
  if (!body || !body.username || !body.password) return err(res, CODES.PARAM, '用户名与密码不能为空');
  const u = db.prepare('SELECT * FROM user WHERE username=? AND deleted_at IS NULL').get(String(body.username).trim());
  if (!u || !u.status) return err(res, CODES.UNAUTH, '用户名、密码错误或账号已停用', 401);
  if (!verifyPassword(String(body.password), u.password_hash)) return err(res, CODES.UNAUTH, '用户名、密码错误或账号已停用', 401);
  db.prepare('UPDATE user SET last_login_at=? WHERE id=?').run(now(), u.id);
  logAudit(u, 'auth.login', 'user', u.id, {});
  const st = db.prepare('SELECT * FROM user_settings WHERE user_id=?').get(u.id) || { daily_goal: 20, instant_judge: 1, shuffle_options: 0 };
  ok(res, {
    token: signToken(u), expiresIn: TOKEN_TTL_SEC,
    user: Object.assign(publicUser(u), {
      settings: { dailyGoal: st.daily_goal, instantJudge: !!st.instant_judge, shuffleOptions: !!st.shuffle_options }
    })
  });
}, { isPublic: true });

route('POST', /^\/api\/auth\/logout$/, null, async ({ res, user }) => {
  if (user) logAudit(user, 'auth.logout', 'user', user.id, {});
  ok(res, null);
});

route('GET', /^\/api\/auth\/me$/, null, async ({ res, user }) => {
  const st = db.prepare('SELECT * FROM user_settings WHERE user_id=?').get(user.id) || { daily_goal: 20, instant_judge: 1, shuffle_options: 0 };
  ok(res, Object.assign(publicUser(user), {
    settings: { dailyGoal: st.daily_goal, instantJudge: !!st.instant_judge, shuffleOptions: !!st.shuffle_options }
  }));
});

route('PUT', /^\/api\/user\/settings$/, null, async ({ res, user, body }) => {
  const cur = db.prepare('SELECT * FROM user_settings WHERE user_id=?').get(user.id) || { daily_goal: 20, instant_judge: 1, shuffle_options: 0 };
  const goal = body.dailyGoal != null ? Number(body.dailyGoal) : cur.daily_goal;
  const ij = body.instantJudge != null ? (body.instantJudge ? 1 : 0) : cur.instant_judge;
  const so = body.shuffleOptions != null ? (body.shuffleOptions ? 1 : 0) : cur.shuffle_options;
  db.prepare(`INSERT INTO user_settings (user_id,daily_goal,instant_judge,shuffle_options,updated_at) VALUES (?,?,?,?,?)
    ON CONFLICT(user_id) DO UPDATE SET daily_goal=excluded.daily_goal, instant_judge=excluded.instant_judge,
    shuffle_options=excluded.shuffle_options, updated_at=excluded.updated_at`).run(user.id, goal, ij, so, now());
  ok(res, { dailyGoal: goal, instantJudge: !!ij, shuffleOptions: !!so });
});

route('GET', /^\/api\/meta$/, null, async ({ res }) => {
  ok(res, {
    version: '1.0-ref', database: 'SQLite',
    categories: CATEGORIES, types: TYPES, difficulties: DIFFICULTIES,
    securityLevels: SECURITY_LEVELS, audiences: AUDIENCES, typeScores: TYPE_SCORES
  });
});

/* ---------------- 仪表盘 ---------------- */
route('GET', /^\/api\/dashboard\/summary$/, 'quiz', async ({ res, user }) => {
  const s = userStats(user);
  s.pendingExamTasks = openExamTasks(user).filter(t => t.canStart || t.myAttempts.length === 0).slice(0, 3);
  ok(res, s);
});

route('GET', /^\/api\/dashboard\/analytics$/, 'quiz', async ({ res, user, query }) => {
  const days = Math.min(60, Math.max(7, Number(query.trendDays || 14)));
  const cats = categoryStats(user);
  const trend = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const r = db.prepare(`SELECT
        SUM(CASE WHEN is_correct=1 THEN 1 ELSE 0 END) AS rightCnt,
        SUM(CASE WHEN is_correct=0 THEN 1 ELSE 0 END) AS wrongCnt,
        COUNT(*) AS total FROM user_answer WHERE user_id=? AND substr(answered_at,1,10)=?`).get(user.id, key);
    trend.push({ date: key, right: r.rightCnt || 0, wrong: r.wrongCnt || 0, total: r.total || 0 });
  }
  const wrongByCategory = {};
  CATEGORIES.forEach(c => { wrongByCategory[c.key] = 0; });
  db.prepare("SELECT category, COUNT(*) AS n FROM wrong_book WHERE user_id=? AND status='open' GROUP BY category")
    .all(user.id).forEach(r => { wrongByCategory[r.category] = r.n; });
  ok(res, {
    radar: cats.map(c => ({ category: c.category, name: c.name, short: c.short, rate: c.rate, answered: c.answered, coverage: c.coverage })),
    trend, categoryDetail: cats, wrongByCategory
  });
});

route('GET', /^\/api\/dashboard\/recommend$/, 'quiz', async ({ res, user, query }) => {
  const limit = Math.min(50, Math.max(1, Number(query.limit || 10)));
  const strategy = query.strategy || 'weak';
  const wrongIds = new Set(db.prepare("SELECT question_id FROM wrong_book WHERE user_id=? AND status='open'").all(user.id).map(r => r.question_id));
  const seenIds = new Set(db.prepare('SELECT DISTINCT question_id FROM user_answer WHERE user_id=?').all(user.id).map(r => r.question_id));
  const cats = categoryStats(user);
  const weak = cats.filter(c => c.rate != null && c.answered >= 5 && c.rate < 60).sort((a, b) => a.rate - b.rate);
  const scope = scopeClause(user);
  let rows = db.prepare(`SELECT q.* FROM question q WHERE q.status='published' AND q.deleted_at IS NULL AND ${scope.sql}`).all(...scope.params);

  const score = (r) => {
    let s = 0;
    if (weak.some(w => w.category === r.category)) s += 100;
    if (wrongIds.has(r.id)) s += 50;
    if (!seenIds.has(r.id)) s += 30;
    return s;
  };
  if (strategy === 'unseen') rows = rows.filter(r => !seenIds.has(r.id)).sort(() => Math.random() - 0.5);
  else rows = rows.slice().sort((a, b) => score(b) - score(a) || Math.random() - 0.5);

  ok(res, {
    strategy,
    items: rows.slice(0, limit).map(r => {
      const c = cats.find(x => x.category === r.category) || {};
      const reason = weak.some(w => w.category === r.category)
        ? `该品类正确率 ${c.rate}%，低于 60% 阈值`
        : (wrongIds.has(r.id) ? '你曾答错该题' : (!seenIds.has(r.id) ? '你尚未练习过该题' : '巩固练习'));
      return Object.assign(mapQuestion(r, false), {
        reason, userRate: c.rate == null ? null : c.rate,
        wrongCount: wrongIds.has(r.id) ? db.prepare('SELECT wrong_count AS n FROM wrong_book WHERE user_id=? AND question_id=?').get(user.id, r.id).n : 0
      });
    })
  });
});

/* ---------------- 个人数据与题库（服务于现有前端的适配接口） ---------------- */
/**
 * 一次性返回前端渲染所需的全部个人数据。
 * 现有前端各页面同步读取 IqStore.state，本接口让适配层可一次预加载，
 * 避免页面组件改为异步（见 docs/后端开发规格说明书.md §3.8）。
 */
route('GET', /^\/api\/me\/state$/, 'quiz', async ({ res, user }) => {
  const prog = {};
  db.prepare(`SELECT question_no,
      COUNT(*) AS seen,
      SUM(CASE WHEN is_correct=1 THEN 1 ELSE 0 END) AS rc,
      SUM(CASE WHEN is_correct=0 THEN 1 ELSE 0 END) AS wc,
      MAX(answered_at) AS last_at
    FROM user_answer WHERE user_id=? GROUP BY question_no`).all(user.id)
    .forEach(r => {
      prog[r.question_no] = {
        seen: r.seen, right: r.rc || 0, wrong: r.wc || 0,
        fav: false, lastAt: r.last_at, lastResult: null
      };
    });

  const wrong = {};
  db.prepare('SELECT question_no, wrong_count, last_wrong_at, status FROM wrong_book WHERE user_id=?').all(user.id)
    .forEach(r => {
      wrong[r.question_no] = {
        count: r.wrong_count, lastAt: r.last_wrong_at,
        resolved: r.status === 'mastered', note: ''
      };
    });

  const favorites = db.prepare(`SELECT q.question_no AS no FROM favorite f JOIN question q ON q.id=f.question_id
     WHERE f.user_id=? AND q.deleted_at IS NULL`).all(user.id).map(r => r.no);

  const notes = {};
  db.prepare(`SELECT q.question_no AS no, n.content FROM note n JOIN question q ON q.id=n.question_id
     WHERE n.user_id=?`).all(user.id).forEach(r => { notes[r.no] = r.content; });

  const exams = db.prepare(`SELECT * FROM exam_record WHERE user_id=? AND status='submitted'
     ORDER BY submitted_at DESC LIMIT 100`).all(user.id).map(r => ({
    id: r.id, taskId: r.exam_id, scope: r.scope, total: r.question_count,
    right: r.right_count, wrong: r.wrong_count, pending: r.pending_count,
    got: r.score_got, full: r.score_full, percent: r.percent, passLine: r.pass_score,
    passed: !!r.passed, durationSec: r.duration_sec, autoSubmit: !!r.auto_submit,
    submittedAt: r.submitted_at,
    detail: (parseJson(r.detail, []) || []).map(d => ({
      questionNo: d.questionNo, category: d.category, type: d.type,
      userAnswer: d.userAnswer, isCorrect: d.isCorrect
    }))
  }));

  const tasks = openExamTasks(user).map(t => ({
    id: t.taskId, title: t.title, category: t.category, count: t.questionCount,
    minutes: t.minutes, passScore: t.passScore, deadline: t.deadline,
    roles: [], allowRetake: t.allowRetake, status: t.status,
    createdBy: t.createdBy, createdAt: t.createdAt
  }));

  const practiceLog = db.prepare(`SELECT * FROM practice_session WHERE user_id=? AND ended_at IS NOT NULL
     ORDER BY ended_at DESC LIMIT 100`).all(user.id).map(r => ({
    id: r.session_id, mode: r.mode, scope: r.scope, total: r.total,
    right: r.right_count, wrong: r.wrong_count, pending: r.pending_count,
    durationSec: r.duration_sec, endedAt: r.ended_at
  }));

  const s = userStats(user);
  ok(res, {
    progress: prog, wrong, favorites, notes, exams, tasks, practiceLog,
    streak: s.streak, lastActiveDate: now().slice(0, 10),
    summary: s
  });
});

/** 普通角色可访问的题库列表（按密级过滤）
 *  withAnswer=true 时返回答案与解析：现有前端在练习模式下做本地即时判题与解析展示，
 *  需要题目自带答案；考试流程不受影响（/api/exams/start 下发的试卷始终不含答案，交卷由服务端判分）。
 */
route('GET', /^\/api\/questions$/, 'quiz', async ({ res, user, query }) => {
  const scope = scopeClause(user);
  let sql = `SELECT q.* FROM question q WHERE q.status='published' AND q.deleted_at IS NULL AND ${scope.sql}`;
  const params = scope.params.slice();
  if (query.category) { sql += ' AND q.category=?'; params.push(query.category); }
  if (query.type) { sql += ' AND q.type=?'; params.push(query.type); }
  if (query.difficulty) { sql += ' AND q.difficulty=?'; params.push(query.difficulty); }
  if (query.security) { sql += ' AND q.security=?'; params.push(query.security); }
  if (query.keyword) {
    sql += ' AND (q.question_no LIKE ? OR q.stem LIKE ? OR q.tags LIKE ?)';
    const kw = `%${query.keyword}%`; params.push(kw, kw, kw);
  }
  sql += ' ORDER BY q.category, q.difficulty, q.question_no';
  let rows = db.prepare(sql).all(...params);
  const total = rows.length;
  const page = Math.max(1, Number(query.page || 1));
  const size = Math.min(200, Math.max(1, Number(query.page_size || 200)));
  rows = rows.slice((page - 1) * size, page * size);
  const withAnswer = query.withAnswer === 'true';
  if (withAnswer) logAudit(user, 'question.bank_load', 'question', null, { withAnswer: true, count: rows.length });
  ok(res, { page, page_size: size, total, items: rows.map(r => mapQuestion(r, withAnswer)) });
});

/* ---------------- 题目 ---------------- */
route('GET', /^\/api\/questions\/(\d+)$/, 'quiz', async ({ res, user, params, query }) => {
  const row = db.prepare('SELECT * FROM question WHERE id=? AND deleted_at IS NULL').get(Number(params[0]));
  if (!row) return err(res, CODES.NOTFOUND, '题目不存在', 404);
  if (!securityScopeOf(user.role).includes(row.security)) {
    logAudit(user, 'security.denied', 'question', row.id, { security: row.security });
    return err(res, CODES.FORBIDDEN, '无权访问该题目', 403);
  }
  const withAnswer = query.withAnswer !== 'false';
  ok(res, mapQuestion(row, withAnswer));
});

/* ---------------- 刷题 ---------------- */
route('POST', /^\/api\/practice\/paper$/, 'quiz', async ({ res, user, body }) => {
  const sessionId = String(body.sessionId || `s_${Date.now()}`);
  const { rows, poolSize } = buildPaper(user, body);
  if (!rows.length) return err(res, CODES.PARAM, '当前条件下没有可练习的题目');
  const ts = now();
  db.prepare(`INSERT INTO practice_session (session_id,user_id,mode,scope,total,started_at,question_ids)
    VALUES (?,?,?,?,?,?,?)
    ON CONFLICT(session_id) DO UPDATE SET total=excluded.total, question_ids=excluded.question_ids`)
    .run(sessionId, user.id, body.mode || 'random', String(body.scope || ''), rows.length, ts, JSON.stringify(rows.map(r => r.id)));

  const wrongIds = new Set(db.prepare('SELECT question_id FROM wrong_book WHERE user_id=?').all(user.id).map(r => r.question_id));
  const favIds = new Set(db.prepare('SELECT question_id FROM favorite WHERE user_id=?').all(user.id).map(r => r.question_id));
  ok(res, {
    sessionId, total: rows.length, poolSize,
    items: rows.map(r => {
      const h = db.prepare(`SELECT COUNT(*) AS seen,
          SUM(CASE WHEN is_correct=1 THEN 1 ELSE 0 END) AS r,
          SUM(CASE WHEN is_correct=0 THEN 1 ELSE 0 END) AS w
        FROM user_answer WHERE user_id=? AND question_id=?`).get(user.id, r.id);
      return Object.assign(mapQuestion(r, false), {
        isFavorite: favIds.has(r.id),
        inWrongBook: wrongIds.has(r.id),
        history: { seen: h.seen || 0, right: h.r || 0, wrong: h.w || 0 }
      });
    })
  });
});

route('POST', /^\/api\/practice\/answer$/, 'quiz', async ({ res, user, body }) => {
  const row = db.prepare('SELECT * FROM question WHERE id=? AND deleted_at IS NULL').get(Number(body.questionId));
  if (!row) return err(res, CODES.NOTFOUND, '题目不存在', 404);
  if (!securityScopeOf(user.role).includes(row.security)) {
    logAudit(user, 'security.denied', 'question', row.id, { security: row.security });
    return err(res, CODES.FORBIDDEN, '无权访问该题目', 403);
  }
  const correct = parseJson(row.answer, null);
  const ts = now();
  const isSubjective = row.type === 'short' || row.type === 'scenario';
  let isCorrect = null, scoreGot = 0;

  if (isSubjective) {
    if (body.selfGrade === true || body.selfGrade === false) {
      isCorrect = body.selfGrade ? 1 : 0;
      scoreGot = body.selfGrade ? row.score_weight : 0;
    }
  } else {
    const j = judge(row.type, correct, body.userAnswer);
    isCorrect = j.isCorrect ? 1 : 0;
    scoreGot = j.isCorrect ? row.score_weight : 0;
  }

  // 事务：答题记录 + 题目统计 + 错题本（规格书 §4.5.3）
  db.exec('BEGIN');
  try {
    db.prepare(`INSERT INTO user_answer
      (user_id,question_id,question_no,category,type,difficulty,mode,user_answer,correct_answer,is_correct,score_got,duration_sec,session_id,answered_at)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
      user.id, row.id, row.question_no, row.category, row.type, row.difficulty,
      body.mode || 'practice', JSON.stringify(body.userAnswer ?? null), JSON.stringify(correct),
      isCorrect, scoreGot, Number(body.durationSec || 0), body.sessionId || null, ts);
    db.prepare('UPDATE question SET usage_count=usage_count+1, right_count=right_count+? WHERE id=?')
      .run(isCorrect === 1 ? 1 : 0, row.id);

    if (isCorrect === 0) {
      const ex = db.prepare('SELECT * FROM wrong_book WHERE user_id=? AND question_id=?').get(user.id, row.id);
      if (ex) {
        db.prepare(`UPDATE wrong_book SET wrong_count=wrong_count+1,last_wrong_answer=?,last_wrong_at=?,status='open',mastered_at=NULL,updated_at=? WHERE id=?`)
          .run(JSON.stringify(body.userAnswer ?? null), ts, ts, ex.id);
      } else {
        db.prepare(`INSERT INTO wrong_book (user_id,question_id,question_no,category,wrong_count,last_wrong_answer,first_wrong_at,last_wrong_at,status,created_at,updated_at)
          VALUES (?,?,?,?,1,?,?,?,'open',?,?)`).run(user.id, row.id, row.question_no, row.category, JSON.stringify(body.userAnswer ?? null), ts, ts, ts, ts);
      }
    } else if (isCorrect === 1) {
      db.prepare(`UPDATE wrong_book SET status='mastered',mastered_at=?,updated_at=? WHERE user_id=? AND question_id=? AND status='open'`)
        .run(ts, ts, user.id, row.id);
    }
    db.exec('COMMIT');
  } catch (e) {
    db.exec('ROLLBACK');
    throw e;
  }

  const wb = db.prepare('SELECT * FROM wrong_book WHERE user_id=? AND question_id=?').get(user.id, row.id);
  ok(res, {
    questionId: row.id, questionNo: row.question_no,
    isCorrect: isCorrect === null ? null : isCorrect === 1,
    correctAnswer: correct,
    scoreGot,
    needsSelfGrade: isSubjective && isCorrect === null,
    explanation: row.explanation,
    source: { title: row.source_title, chapter: row.source_chapter, url: row.source_url },
    wrongBook: wb
      ? { inWrongBook: wb.status === 'open', wrongCount: wb.wrong_count, status: wb.status }
      : { inWrongBook: false, wrongCount: 0, status: null }
  });
});

route('POST', /^\/api\/practice\/sessions\/([\w-]+)\/finish$/, 'quiz', async ({ res, user, params, body }) => {
  const sessionId = params[0];
  const rows = db.prepare('SELECT * FROM user_answer WHERE user_id=? AND session_id=?').all(user.id, sessionId);
  let sess = db.prepare('SELECT * FROM practice_session WHERE session_id=? AND user_id=?').get(sessionId, user.id);
  // 兼容：现有前端在本地组卷（未调用 /api/practice/paper），此处自动补建会话记录
  if (!sess) {
    const first = rows.length ? rows[0].answered_at : now();
    db.prepare(`INSERT INTO practice_session (session_id,user_id,mode,scope,total,started_at,question_ids)
      VALUES (?,?,?,?,?,?,?)`).run(
      sessionId, user.id, (body && body.mode) || 'practice', (body && body.scope) || '',
      rows.length, first, JSON.stringify(rows.map(r => r.question_id)));
    sess = db.prepare('SELECT * FROM practice_session WHERE session_id=?').get(sessionId);
  }
  const detail = rows.map(r => ({
    questionId: r.question_id, questionNo: r.question_no,
    isCorrect: r.is_correct === null ? null : r.is_correct === 1,
    scoreGot: r.score_got
  }));
  // 主观题自评补录
  if (body && body.selfGrades) {
    for (const [qid, grade] of Object.entries(body.selfGrades)) {
      const row = db.prepare('SELECT * FROM question WHERE id=?').get(Number(qid));
      if (!row) continue;
      const ua = db.prepare('SELECT * FROM user_answer WHERE user_id=? AND question_id=? AND session_id=? ORDER BY id DESC LIMIT 1').get(user.id, row.id, sessionId);
      if (!ua || ua.is_correct !== null) continue;
      const isCorrect = grade ? 1 : 0;
      db.prepare('UPDATE user_answer SET is_correct=?, score_got=? WHERE id=?').run(isCorrect, isCorrect ? row.score_weight : 0, ua.id);
      const d = detail.find(x => x.questionId === row.id);
      if (d) { d.isCorrect = !!grade; d.scoreGot = isCorrect ? row.score_weight : 0; }
      if (isCorrect === 0) {
        const ex = db.prepare('SELECT * FROM wrong_book WHERE user_id=? AND question_id=?').get(user.id, row.id);
        if (ex) db.prepare(`UPDATE wrong_book SET wrong_count=wrong_count+1,last_wrong_at=?,status='open',mastered_at=NULL WHERE id=?`).run(now(), ex.id);
        else db.prepare(`INSERT INTO wrong_book (user_id,question_id,question_no,category,wrong_count,first_wrong_at,last_wrong_at,status,created_at,updated_at)
          VALUES (?,?,?,?,1,?,?, 'open',?,?)`).run(user.id, row.id, row.question_no, row.category, now(), now(), now(), now());
      }
    }
  }
  const right = detail.filter(d => d.isCorrect === true).length;
  const wrong = detail.filter(d => d.isCorrect === false).length;
  const pending = detail.filter(d => d.isCorrect === null).length;
  const full = rows.reduce((s, r) => {
    const q = db.prepare('SELECT score_weight FROM question WHERE id=?').get(r.question_id);
    return s + (q ? q.score_weight : 1);
  }, 0);
  const got = detail.reduce((s, d) => s + (d.scoreGot || 0), 0);
  const duration = Number(body && body.durationSec || (sess ? Math.max(0, (Date.now() - new Date(sess.started_at.replace(' ', 'T')).getTime()) / 1000) : 0));

  db.prepare(`UPDATE practice_session SET right_count=?,wrong_count=?,pending_count=?,score_got=?,score_full=?,duration_sec=?,ended_at=? WHERE session_id=?`)
    .run(right, wrong, pending, got, full, Math.round(duration), now(), sessionId);

  ok(res, {
    sessionId, scope: sess ? sess.scope : '', total: rows.length,
    right, wrong, pending, scoreGot: got, scoreFull: full,
    percent: full ? Math.round(got / full * 1000) / 10 : 0,
    durationSec: Math.round(duration),
    wrongItems: detail.filter(d => d.isCorrect === false).map(d => {
      const r = rows.find(x => x.question_id === d.questionId);
      return { questionId: d.questionId, questionNo: d.questionNo, userAnswer: parseJson(r.user_answer, null), correctAnswer: parseJson(r.correct_answer, null) };
    })
  });
});

/* ---------------- 错题本 / 收藏 / 笔记 ---------------- */
route('GET', /^\/api\/wrong-book$/, 'quiz', async ({ res, user, query }) => {
  const status = query.status || 'open';
  const scope = scopeClause(user);
  let sql = `SELECT w.*, q.stem, q.options, q.answer AS correct_answer, q.explanation, q.type, q.difficulty,
      q.source_title, q.source_chapter, q.source_url
    FROM wrong_book w JOIN question q ON q.id=w.question_id
    WHERE w.user_id=? AND q.deleted_at IS NULL AND ${scope.sql}`;
  const params = [user.id, ...scope.params];
  if (status !== 'all') { sql += ' AND w.status=?'; params.push(status); }
  if (query.category) { sql += ' AND w.category=?'; params.push(query.category); }
  sql += ' ORDER BY w.last_wrong_at DESC';
  const rows = db.prepare(sql).all(...params);

  const summary = {
    openCount: db.prepare("SELECT COUNT(*) AS n FROM wrong_book WHERE user_id=? AND status='open'").get(user.id).n,
    masteredCount: db.prepare("SELECT COUNT(*) AS n FROM wrong_book WHERE user_id=? AND status='mastered'").get(user.id).n,
    highFrequencyCount: db.prepare('SELECT COUNT(*) AS n FROM wrong_book WHERE user_id=? AND wrong_count>=2').get(user.id).n,
    categoryCount: new Set(rows.map(r => r.category)).size
  };
  ok(res, {
    total: rows.length, summary,
    items: rows.map(r => ({
      questionId: r.question_id, questionNo: r.question_no, category: r.category,
      categoryName: (CATEGORIES.find(c => c.key === r.category) || {}).name,
      type: r.type, typeName: (TYPES.find(t => t.key === r.type) || {}).name,
      difficulty: r.difficulty, difficultyName: (DIFFICULTIES.find(d => d.key === r.difficulty) || {}).name,
      stem: r.stem, options: parseJson(r.options, null),
      correctAnswer: parseJson(r.correct_answer, null),
      explanation: r.explanation,
      source: { title: r.source_title, chapter: r.source_chapter, url: r.source_url },
      wrongCount: r.wrong_count, lastWrongAt: r.last_wrong_at, status: r.status
    }))
  });
});

route('DELETE', /^\/api\/wrong-book\/(\d+)$/, 'quiz', async ({ res, user, params }) => {
  const r = db.prepare('DELETE FROM wrong_book WHERE user_id=? AND question_id=?').run(user.id, Number(params[0]));
  ok(res, { removed: r.changes > 0, questionId: Number(params[0]) });
});

route('GET', /^\/api\/favorites$/, 'quiz', async ({ res, user }) => {
  const scope = scopeClause(user);
  const rows = db.prepare(`SELECT f.question_id, f.created_at, q.* FROM favorite f JOIN question q ON q.id=f.question_id
    WHERE f.user_id=? AND q.deleted_at IS NULL AND ${scope.sql} ORDER BY f.created_at DESC`).all(user.id, ...scope.params);
  ok(res, {
    total: rows.length,
    items: rows.map(r => Object.assign(mapQuestion(r, false), { createdAt: r.created_at }))
  });
});

route('POST', /^\/api\/favorites$/, 'quiz', async ({ res, user, body }) => {
  const row = db.prepare('SELECT * FROM question WHERE id=? AND deleted_at IS NULL').get(Number(body.questionId));
  if (!row) return err(res, CODES.NOTFOUND, '题目不存在', 404);
  if (!securityScopeOf(user.role).includes(row.security)) return err(res, CODES.FORBIDDEN, '无权访问该题目', 403);
  db.prepare('INSERT OR IGNORE INTO favorite (user_id,question_id,category,created_at) VALUES (?,?,?,?)')
    .run(user.id, row.id, row.category, now());
  ok(res, { favorited: true, questionId: row.id });
});

route('DELETE', /^\/api\/favorites\/(\d+)$/, 'quiz', async ({ res, user, params }) => {
  const r = db.prepare('DELETE FROM favorite WHERE user_id=? AND question_id=?').run(user.id, Number(params[0]));
  ok(res, { removed: r.changes > 0, questionId: Number(params[0]) });
});

route('GET', /^\/api\/notes\/(\d+)$/, 'quiz', async ({ res, user, params }) => {
  const r = db.prepare('SELECT * FROM note WHERE user_id=? AND question_id=?').get(user.id, Number(params[0]));
  ok(res, r ? { questionId: r.question_id, content: r.content, updatedAt: r.updated_at } : { questionId: Number(params[0]), content: '', updatedAt: null });
});

route('PUT', /^\/api\/notes\/(\d+)$/, 'quiz', async ({ res, user, params, body }) => {
  const qid = Number(params[0]);
  const content = String(body.content || '').trim();
  const ts = now();
  if (!content) {
    db.prepare('DELETE FROM note WHERE user_id=? AND question_id=?').run(user.id, qid);
    return ok(res, { questionId: qid, content: '', updatedAt: ts });
  }
  db.prepare(`INSERT INTO note (user_id,question_id,content,created_at,updated_at) VALUES (?,?,?,?,?)
    ON CONFLICT(user_id,question_id) DO UPDATE SET content=excluded.content, updated_at=excluded.updated_at`)
    .run(user.id, qid, content, ts, ts);
  ok(res, { questionId: qid, content, updatedAt: ts });
});

/* ---------------- 知识库（用户端，见 docs/知识库模块设计.md §3.1） ----------------
   注意：/api/knowledge/meta 与 /api/knowledge/route 必须注册在 /api/knowledge/:no 之前，
   否则会被参数路由吃掉（route() 采用注册顺序优先匹配）。 */

/** 知识库列表 WHERE 构造（密级过滤复用 scopeClause，在 SQL 层强制） */
function kbCond(user, query, { publishedOnly, admin }) {
  const conds = [], params = [];
  if (admin) {
    conds.push('k.deleted_at IS NULL');
  } else {
    const w = knowledgeScope(user, { publishedOnly });
    conds.push(w.sql);
    params.push(...w.params);
  }
  if (query.category) { conds.push('k.category=?'); params.push(String(query.category)); }
  if (query.topic) { conds.push('k.topic=?'); params.push(String(query.topic)); }
  if (admin && query.security) { conds.push('k.security=?'); params.push(String(query.security)); }
  if (admin && query.status) { conds.push('k.status=?'); params.push(String(query.status)); }
  if (query.tag) {
    conds.push(`EXISTS (SELECT 1 FROM json_each(COALESCE(k.tags,'[]')) t WHERE t.value=?)`);
    params.push(String(query.tag));
  }
  if (query.level) { conds.push('k.level=?'); params.push(Number(query.level)); }
  if (query.keyword) {
    // 关键词覆盖：编号 / 标题 / 摘要 / 标签 / 关联题号 / 正文（content 以 JSON 文本存储）
    const kw = `%${String(query.keyword)}%`;
    conds.push(`(k.knowledge_no LIKE ? OR k.title LIKE ? OR k.summary LIKE ? OR k.tags LIKE ? OR k.related_questions LIKE ? OR k.content LIKE ?)`);
    params.push(kw, kw, kw, kw, kw, kw);
  }
  return { sql: conds.join(' AND '), params };
}

/** 列表排序：sort_order 升序（未设置排最后），再按编号稳定排序 */
const KB_ORDER = ' ORDER BY (k.sort_order IS NULL), k.sort_order ASC, k.knowledge_no ASC';

route('GET', /^\/api\/knowledge$/, 'quiz', async ({ res, user, query }) => {
  const w = kbCond(user, query, { publishedOnly: true });
  const total = db.prepare(`SELECT COUNT(*) AS n FROM knowledge k WHERE ${w.sql}`).get(...w.params).n;
  const page = Math.max(1, Number(query.page || 1));
  const size = Math.min(200, Math.max(1, Number(query.page_size || 20)));
  const rows = db.prepare(`SELECT k.*, r.id AS rec_id, r.finished, r.fav, r.read_seconds, r.read_count, r.last_read_at
      FROM knowledge k
      LEFT JOIN user_knowledge_record r ON r.knowledge_id=k.id AND r.user_id=?
     WHERE ${w.sql}${KB_ORDER} LIMIT ? OFFSET ?`).all(user.id, ...w.params, size, (page - 1) * size);
  ok(res, { page, page_size: size, total, items: rows.map(r => mapKnowledge(r, false)) });
});

route('GET', /^\/api\/knowledge\/meta$/, 'quiz', async ({ res, user }) => {
  const w = knowledgeScope(user, { publishedOnly: true });
  const rows = db.prepare(`SELECT k.category, k.topic, k.security, k.tags FROM knowledge k WHERE ${w.sql}`).all(...w.params);

  const catCount = {}, topCount = {}, secCount = {}, tagCount = {};
  rows.forEach(r => {
    catCount[r.category] = (catCount[r.category] || 0) + 1;
    topCount[r.topic] = (topCount[r.topic] || 0) + 1;
    secCount[r.security] = (secCount[r.security] || 0) + 1;
    parseJson(r.tags, []).forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; });
  });
  const mineScope = scopeClause(user, 'k');
  const mine = db.prepare(`SELECT
      COUNT(*) AS readCnt,
      SUM(CASE WHEN r.finished=1 THEN 1 ELSE 0 END) AS finishedCnt
    FROM user_knowledge_record r JOIN knowledge k ON k.id=r.knowledge_id
    WHERE r.user_id=? AND k.deleted_at IS NULL AND k.status='published' AND ${mineScope.sql}`)
    .get(user.id, ...mineScope.params);

  ok(res, {
    categories: CATEGORIES.map(c => ({ key: c.key, name: c.name, short: c.short, color: c.color, count: catCount[c.key] || 0 })),
    topics: KB_TOPICS.map(t => ({ key: t.key, name: t.name, count: topCount[t.key] || 0 })),
    tags: Object.keys(tagCount).sort((a, b) => tagCount[b] - tagCount[a] || a.localeCompare(b)).map(t => ({ key: t, name: t, count: tagCount[t] })),
    levels: KB_LEVELS.map(l => ({ key: l.key, name: l.name })),
    stats: {
      total: rows.length,
      byCategory: catCount, byTopic: topCount, bySecurity: secCount,
      myFinished: mine.finishedCnt || 0, myRead: mine.readCnt || 0
    }
  });
});

route('GET', /^\/api\/knowledge\/route$/, 'quiz', async ({ res, user }) => {
  const w = knowledgeScope(user, { publishedOnly: true });
  // sort_order 未设置（NULL）排最后，再按编号稳定排序
  const rows = db.prepare(`SELECT k.*, r.id AS rec_id, r.finished, r.fav, r.read_seconds, r.read_count, r.last_read_at
      FROM knowledge k
      LEFT JOIN user_knowledge_record r ON r.knowledge_id=k.id AND r.user_id=?
     WHERE ${w.sql}${KB_ORDER}`).all(user.id, ...w.params);

  const stages = KB_STAGES.map(st => {
    const list = rows.filter(r => Number(r.level) === st.level);
    return {
      key: st.key, title: st.title, desc: st.desc, level: st.level,
      total: list.length,
      finishedCount: list.filter(r => r.finished).length,
      items: list.map(r => ({
        knowledgeNo: r.knowledge_no, title: r.title, category: r.category,
        categoryName: KB_CATEGORY_NAME(r.category), topic: r.topic, topicName: KB_TOPIC_NAME(r.topic),
        readMinutes: r.read_minutes, level: r.level, finished: !!r.finished
      }))
    };
  });
  ok(res, { stages, total: rows.length });
});

route('GET', /^\/api\/knowledge\/(KB-[A-Z]+-\d+)$/, 'quiz', async ({ res, user, params }) => {
  const row = getVisibleKnowledge(user, params[0], { publishedOnly: true });
  if (!row) return err(res, CODES.NOTFOUND, '知识条目不存在或无权访问', 404);
  const k = mapKnowledge(row, true);
  k.relatedQuestions = relatedQuestionSummaries(user, k.relatedQuestions);
  const rec = knowledgeRecordOf(user.id, row.id);
  k.record = rec ? {
    readSeconds: rec.read_seconds, readCount: rec.read_count,
    finished: !!rec.finished, fav: !!rec.fav, lastReadAt: rec.last_read_at
  } : { readSeconds: 0, readCount: 0, finished: false, fav: false, lastReadAt: null };
  ok(res, k);
});

route('POST', /^\/api\/knowledge\/(KB-[A-Z]+-\d+)\/read$/, 'quiz', async ({ res, user, params, body }) => {
  const row = getVisibleKnowledge(user, params[0], { publishedOnly: true });
  if (!row) return err(res, CODES.NOTFOUND, '知识条目不存在或无权访问', 404);
  const seconds = Math.min(86400, Math.max(0, Math.round(Number((body && body.seconds) || 0))));
  const finished = !!(body && body.finished);
  const ts = now();
  const cur = ensureKnowledgeRecord(user, row.id, row.knowledge_no, ts);
  db.prepare(`UPDATE user_knowledge_record SET
      first_read_at=COALESCE(first_read_at,?), last_read_at=?,
      read_seconds=read_seconds+?, read_count=read_count+?,
      finished=CASE WHEN ?=1 THEN 1 ELSE finished END,
      finished_at=CASE WHEN ?=1 THEN ? ELSE finished_at END,
      updated_at=? WHERE id=?`)
    .run(ts, ts, seconds, 1, finished ? 1 : 0, finished ? 1 : 0, ts, ts, cur.id);
  const rec = knowledgeRecordOf(user.id, row.id);
  ok(res, {
    knowledgeNo: row.knowledge_no,
    record: {
      readSeconds: rec.read_seconds, readCount: rec.read_count,
      finished: !!rec.finished, finishedAt: rec.finished_at, lastReadAt: rec.last_read_at
    }
  });
});

route('POST', /^\/api\/knowledge\/(KB-[A-Z]+-\d+)\/fav$/, 'quiz', async ({ res, user, params, body }) => {
  const row = getVisibleKnowledge(user, params[0], { publishedOnly: true });
  if (!row) return err(res, CODES.NOTFOUND, '知识条目不存在或无权访问', 404);
  const ts = now();
  const fav = !!(body && body.fav);
  const cur = ensureKnowledgeRecord(user, row.id, row.knowledge_no, ts);
  db.prepare('UPDATE user_knowledge_record SET fav=?, updated_at=? WHERE id=?').run(fav ? 1 : 0, ts, cur.id);
  logAudit(user, fav ? 'knowledge.fav' : 'knowledge.unfav', 'knowledge', row.knowledge_no, {});
  ok(res, { knowledgeNo: row.knowledge_no, fav });
});

route('GET', /^\/api\/me\/knowledge$/, 'quiz', async ({ res, user, query }) => {
  const recentLimit = Math.min(50, Math.max(1, Number(query.recent || 10)));
  const w = knowledgeScope(user, { publishedOnly: true, alias: 'k' });
  const rows = db.prepare(`SELECT k.*, r.id AS rec_id, r.finished, r.fav, r.read_seconds, r.read_count, r.last_read_at
      FROM user_knowledge_record r JOIN knowledge k ON k.id=r.knowledge_id
     WHERE r.user_id=? AND ${w.sql}`).all(user.id, ...w.params);
  const items = rows.map(r => mapKnowledge(r, false));
  const stats = {
    readCount: items.filter(i => i.myReadCount > 0).length,
    favCount: items.filter(i => i.myFav).length,
    finishedCount: items.filter(i => i.myFinished).length,
    totalSeconds: items.reduce((s, i) => s + i.myReadSeconds, 0)
  };
  ok(res, {
    records: items.slice().sort((a, b) => String(b.myLastReadAt || '').localeCompare(String(a.myLastReadAt || ''))),
    favs: items.filter(i => i.myFav).sort((a, b) => String(b.myLastReadAt || '').localeCompare(String(a.myLastReadAt || ''))),
    recent: items.filter(i => i.myLastReadAt)
      .sort((a, b) => String(b.myLastReadAt).localeCompare(String(a.myLastReadAt))).slice(0, recentLimit),
    stats
  });
});

/* ---------------- 考试 ---------------- */
route('GET', /^\/api\/exam-tasks$/, 'exam', async ({ res, user }) => {
  ok(res, { items: openExamTasks(user) });
});

route('POST', /^\/api\/exams\/start$/, 'exam', async ({ res, user, body }) => {
  let task = null;
  if (body.taskId) {
    task = db.prepare('SELECT * FROM exam WHERE id=? AND deleted_at IS NULL').get(Number(body.taskId));
    if (!task) return err(res, CODES.NOTFOUND, '考试任务不存在', 404);
    const roles = parseJson(task.roles, []);
    if (roles.length && !roles.includes(user.role) && user.role !== 'super_admin') return err(res, CODES.FORBIDDEN, '无权参加该考试', 403);
    if (task.deadline && task.deadline < now()) return err(res, CODES.PARAM, '该考试已过截止时间');
    const attempts = db.prepare("SELECT COUNT(*) AS n FROM exam_record WHERE exam_id=? AND user_id=? AND status='submitted'").get(task.id, user.id).n;
    if (attempts && !task.allow_retake) return err(res, CODES.PARAM, '该考试不允许重考');
  }
  const opts = task
    ? { mode: 'random', categories: task.category === 'all' ? [] : [task.category], difficulties: parseJson(task.difficulty_scope, []) || [], types: parseJson(task.type_scope, []) || [], count: task.question_count }
    : { mode: 'random', categories: body.category && body.category !== 'all' ? [body.category] : [], count: Number(body.count || 20) };

  const { rows } = buildPaper(user, opts);
  if (!rows.length) return err(res, CODES.PARAM, '该范围暂无可用题目');
  const minutes = task ? task.minutes : Number(body.minutes || 30);
  const passScore = task ? task.pass_score : Number(body.passScore || 60);
  const scope = task ? task.title : String(body.scope || (body.category && body.category !== 'all'
    ? (CATEGORIES.find(c => c.key === body.category) || {}).name + ' 专项模拟考试' : '综合模拟考试'));
  const ts = now();
  const deadlineAt = new Date(Date.now() + minutes * 60000);
  const p = (n) => String(n).padStart(2, '0');
  const deadlineStr = `${deadlineAt.getFullYear()}-${p(deadlineAt.getMonth() + 1)}-${p(deadlineAt.getDate())} ${p(deadlineAt.getHours())}:${p(deadlineAt.getMinutes())}:${p(deadlineAt.getSeconds())}`;

  const snapshot = rows.map(r => ({ questionId: r.id, questionNo: r.question_no, category: r.category, type: r.type, difficulty: r.difficulty, scoreWeight: r.score_weight }));
  const r = db.prepare(`INSERT INTO exam_record
    (exam_id,user_id,scope,question_count,minutes,pass_score,paper_snapshot,status,started_at,deadline_at,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?, 'in_progress',?,?,?,?)`).run(
    task ? task.id : null, user.id, scope, rows.length, minutes, passScore, JSON.stringify(snapshot), ts, deadlineStr, ts, ts);

  ok(res, {
    recordId: Number(r.lastInsertRowid), taskId: task ? task.id : null, scope,
    total: rows.length, minutes, passScore, startedAt: ts, deadlineAt: deadlineStr,
    remainingSec: minutes * 60,
    items: rows.map(x => mapQuestion(x, false))
  });
});

function loadRecord(user, id) {
  const rec = db.prepare('SELECT * FROM exam_record WHERE id=? AND user_id=?').get(Number(id), user.id);
  if (!rec) return null;
  return rec;
}

route('PUT', /^\/api\/exams\/(\d+)\/answers$/, 'exam', async ({ res, user, params, body }) => {
  const rec = loadRecord(user, params[0]);
  if (!rec) return err(res, CODES.NOTFOUND, '答卷不存在', 404);
  if (rec.status === 'submitted') return err(res, CODES.PARAM, '该试卷已交卷');
  const answers = body.answers || {};
  const answeredCount = Object.values(answers).filter(v => (Array.isArray(v) ? v.length : String(v || '').trim())).length;
  db.prepare('UPDATE exam_record SET answers=?, updated_at=? WHERE id=?').run(JSON.stringify(answers), now(), rec.id);
  const remain = Math.max(0, Math.round((new Date(rec.deadline_at.replace(' ', 'T')).getTime() - Date.now()) / 1000));
  ok(res, { saved: true, answeredCount, remainingSec: remain });
});

route('GET', /^\/api\/exams\/(\d+)$/, 'exam', async ({ res, user, params }) => {
  const rec = loadRecord(user, params[0]);
  if (!rec) return err(res, CODES.NOTFOUND, '答卷不存在', 404);
  const snap = parseJson(rec.paper_snapshot, []);
  const rows = snap.map(s => db.prepare('SELECT * FROM question WHERE id=?').get(s.questionId)).filter(Boolean);
  const remain = Math.max(0, Math.round((new Date(rec.deadline_at.replace(' ', 'T')).getTime() - Date.now()) / 1000));
  ok(res, {
    recordId: rec.id, taskId: rec.exam_id, scope: rec.scope, status: rec.status,
    total: rec.question_count, minutes: rec.minutes, passScore: rec.pass_score,
    startedAt: rec.started_at, deadlineAt: rec.deadline_at, remainingSec: remain,
    answers: parseJson(rec.answers, {}),
    items: rows.map(x => mapQuestion(x, false))
  });
});

function gradeRecord(rec, user, { autoSubmit }) {
  const snap = parseJson(rec.paper_snapshot, []);
  const answers = parseJson(rec.answers, {}) || {};
  const detail = [];
  let got = 0, full = 0, right = 0, wrong = 0, pending = 0;
  const ts = now();

  snap.forEach(s => {
    const row = db.prepare('SELECT * FROM question WHERE id=?').get(s.questionId);
    if (!row) return;
    const correct = parseJson(row.answer, null);
    const ua = answers[String(row.id)] ?? answers[row.question_no] ?? null;
    const isSubjective = row.type === 'short' || row.type === 'scenario';
    let isCorrect = null, scoreGot = 0;
    if (isSubjective) {
      pending++;
    } else {
      const j = judge(row.type, correct, ua);
      isCorrect = j.isCorrect ? 1 : 0;
      scoreGot = j.isCorrect ? row.score_weight : 0;
      if (j.isCorrect) right++; else wrong++;
    }
    got += scoreGot; full += row.score_weight;
    detail.push({
      questionId: row.id, questionNo: row.question_no, category: row.category, type: row.type,
      userAnswer: ua, correctAnswer: correct, isCorrect: isCorrect === null ? null : isCorrect === 1, scoreGot
    });
    db.prepare(`INSERT INTO user_answer
      (user_id,question_id,question_no,category,type,difficulty,mode,user_answer,correct_answer,is_correct,score_got,exam_record_id,answered_at)
      VALUES (?,?,?,?,?,?, 'exam',?,?,?,?,?,?)`).run(
      user.id, row.id, row.question_no, row.category, row.type, row.difficulty,
      JSON.stringify(ua), JSON.stringify(correct), isCorrect, scoreGot, rec.id, ts);
    db.prepare('UPDATE question SET usage_count=usage_count+1, right_count=right_count+? WHERE id=?').run(isCorrect === 1 ? 1 : 0, row.id);
    if (isCorrect === 0) {
      const ex = db.prepare('SELECT * FROM wrong_book WHERE user_id=? AND question_id=?').get(user.id, row.id);
      if (ex) db.prepare(`UPDATE wrong_book SET wrong_count=wrong_count+1,last_wrong_answer=?,last_wrong_at=?,status='open',mastered_at=NULL,updated_at=? WHERE id=?`)
        .run(JSON.stringify(ua), ts, ts, ex.id);
      else db.prepare(`INSERT INTO wrong_book (user_id,question_id,question_no,category,wrong_count,last_wrong_answer,first_wrong_at,last_wrong_at,status,created_at,updated_at)
        VALUES (?,?,?,?,1,?,?,?,'open',?,?)`).run(user.id, row.id, row.question_no, row.category, JSON.stringify(ua), ts, ts, ts, ts);
    } else if (isCorrect === 1) {
      db.prepare(`UPDATE wrong_book SET status='mastered',mastered_at=?,updated_at=? WHERE user_id=? AND question_id=? AND status='open'`)
        .run(ts, ts, user.id, row.id);
    }
  });

  const percent = full ? Math.round(got / full * 1000) / 10 : 0;
  const duration = Math.max(0, Math.round((Date.now() - new Date(rec.started_at.replace(' ', 'T')).getTime()) / 1000));
  db.prepare(`UPDATE exam_record SET detail=?,score_got=?,score_full=?,percent=?,right_count=?,wrong_count=?,pending_count=?,
      passed=?,status='submitted',submitted_at=?,duration_sec=?,auto_submit=?,answers=?,updated_at=? WHERE id=?`).run(
    JSON.stringify(detail), got, full, percent, right, wrong, pending,
    percent >= rec.pass_score ? 1 : 0, ts, duration, autoSubmit ? 1 : 0, JSON.stringify(answers), ts, rec.id);

  return { detail, got, full, percent, right, wrong, pending, duration, ts };
}

route('POST', /^\/api\/exams\/(\d+)\/submit$/, 'exam', async ({ res, user, params, body }) => {
  const rec = loadRecord(user, params[0]);
  if (!rec) return err(res, CODES.NOTFOUND, '答卷不存在', 404);
  if (rec.status === 'submitted') return err(res, CODES.PARAM, '该试卷已交卷');
  if (body.answers) {
    const merged = Object.assign(parseJson(rec.answers, {}) || {}, body.answers);
    db.prepare('UPDATE exam_record SET answers=? WHERE id=?').run(JSON.stringify(merged), rec.id);
    rec.answers = JSON.stringify(merged);
  }
  const g = gradeRecord(rec, user, { autoSubmit: !!body.autoSubmit });
  const pendingItems = g.detail.filter(d => d.isCorrect === null).map(d => {
    const row = db.prepare('SELECT * FROM question WHERE id=?').get(d.questionId);
    return {
      questionId: d.questionId, questionNo: d.questionNo, stem: row.stem,
      userAnswer: d.userAnswer, referenceAnswer: row.answer ? parseJson(row.answer, '') : ''
    };
  });
  ok(res, {
    recordId: rec.id, percent: g.percent, scoreGot: g.got, scoreFull: g.full,
    right: g.right, wrong: g.wrong, pending: g.pending,
    passScore: rec.pass_score, passed: g.percent >= rec.pass_score,
    durationSec: g.duration, autoSubmit: !!body.autoSubmit, pendingItems
  });
});

route('POST', /^\/api\/exams\/(\d+)\/self-grade$/, 'exam', async ({ res, user, params, body }) => {
  const rec = loadRecord(user, params[0]);
  if (!rec) return err(res, CODES.NOTFOUND, '答卷不存在', 404);
  if (rec.status !== 'submitted') return err(res, CODES.PARAM, '请先交卷再自评');
  const detail = parseJson(rec.detail, []) || [];
  const grades = body.grades || [];
  grades.forEach(g => {
    const d = detail.find(x => x.questionId === Number(g.questionId));
    if (!d || d.isCorrect !== null) return;
    const row = db.prepare('SELECT * FROM question WHERE id=?').get(d.questionId);
    d.isCorrect = !!g.isCorrect;
    d.scoreGot = g.isCorrect ? row.score_weight : 0;
    db.prepare('UPDATE user_answer SET is_correct=?, score_got=? WHERE exam_record_id=? AND question_id=?')
      .run(d.isCorrect ? 1 : 0, d.scoreGot, rec.id, d.questionId);
    if (!d.isCorrect) {
      const ts = now();
      const ex = db.prepare('SELECT * FROM wrong_book WHERE user_id=? AND question_id=?').get(user.id, d.questionId);
      if (ex) db.prepare(`UPDATE wrong_book SET wrong_count=wrong_count+1,last_wrong_at=?,status='open',mastered_at=NULL WHERE id=?`).run(ts, ex.id);
      else db.prepare(`INSERT INTO wrong_book (user_id,question_id,question_no,category,wrong_count,first_wrong_at,last_wrong_at,status,created_at,updated_at)
        VALUES (?,?,?,?,1,?,?,'open',?,?)`).run(user.id, d.questionId, d.questionNo, d.category, ts, ts, ts, ts);
    } else {
      db.prepare(`UPDATE wrong_book SET status='mastered',mastered_at=? WHERE user_id=? AND question_id=? AND status='open'`)
        .run(now(), user.id, d.questionId);
    }
  });
  const right = detail.filter(d => d.isCorrect === true).length;
  const wrong = detail.filter(d => d.isCorrect === false).length;
  const pending = detail.filter(d => d.isCorrect === null).length;
  const got = detail.reduce((s, d) => s + (d.scoreGot || 0), 0);
  const full = detail.reduce((s, d) => {
    const row = db.prepare('SELECT score_weight FROM question WHERE id=?').get(d.questionId);
    return s + (row ? row.score_weight : 1);
  }, 0);
  const percent = full ? Math.round(got / full * 1000) / 10 : 0;
  db.prepare('UPDATE exam_record SET detail=?,score_got=?,score_full=?,percent=?,right_count=?,wrong_count=?,pending_count=?,passed=?,updated_at=? WHERE id=?')
    .run(JSON.stringify(detail), got, full, percent, right, wrong, pending, percent >= rec.pass_score ? 1 : 0, now(), rec.id);
  ok(res, { recordId: rec.id, percent, passed: percent >= rec.pass_score, right, wrong, pending, updatedAt: now() });
});

route('GET', /^\/api\/exams\/(\d+)\/report$/, 'exam', async ({ res, user, params }) => {
  const rec = loadRecord(user, params[0]);
  if (!rec) return err(res, CODES.NOTFOUND, '答卷不存在', 404);
  const detail = parseJson(rec.detail, []) || [];
  const byCat = {};
  detail.forEach(d => {
    byCat[d.category] = byCat[d.category] || { right: 0, wrong: 0 };
    if (d.isCorrect === true) byCat[d.category].right++;
    else if (d.isCorrect === false) byCat[d.category].wrong++;
  });
  ok(res, {
    recordId: rec.id, taskTitle: rec.scope, percent: rec.percent, passed: !!rec.passed, passScore: rec.pass_score,
    right: rec.right_count, wrong: rec.wrong_count, pending: rec.pending_count,
    durationSec: rec.duration_sec, submittedAt: rec.submitted_at, autoSubmit: !!rec.auto_submit,
    categoryBreakdown: Object.keys(byCat).map(k => ({
      category: k, name: (CATEGORIES.find(c => c.key === k) || {}).name,
      right: byCat[k].right, wrong: byCat[k].wrong,
      rate: (byCat[k].right + byCat[k].wrong) ? Math.round(byCat[k].right / (byCat[k].right + byCat[k].wrong) * 1000) / 10 : null
    })),
    details: detail.map(d => {
      const row = db.prepare('SELECT * FROM question WHERE id=?').get(d.questionId);
      return Object.assign({}, d, {
        stem: row ? row.stem : '', typeName: (TYPES.find(t => t.key === d.type) || {}).name,
        explanation: row ? row.explanation : '',
        source: row ? { title: row.source_title, chapter: row.source_chapter, url: row.source_url } : null
      });
    })
  });
});

route('GET', /^\/api\/exams\/records$/, 'exam', async ({ res, user, query }) => {
  const rows = db.prepare(`SELECT * FROM exam_record WHERE user_id=? AND status='submitted' ORDER BY submitted_at DESC LIMIT 50`).all(user.id);
  ok(res, {
    total: rows.length,
    items: rows.map(r => ({
      recordId: r.id, taskId: r.exam_id, scope: r.scope, total: r.question_count,
      percent: r.percent, passScore: r.pass_score, passed: !!r.passed,
      durationSec: r.duration_sec, submittedAt: r.submitted_at, autoSubmit: !!r.auto_submit
    }))
  });
});

/* ---------------- 题目反馈（学员报错 → 题库质量治理） ---------------- */
route('POST', /^\/api\/feedback$/, 'quiz', async ({ res, user, body }) => {
  const row = db.prepare('SELECT * FROM question WHERE id=? AND deleted_at IS NULL').get(Number(body.questionId));
  if (!row) return err(res, CODES.NOTFOUND, '题目不存在', 404);
  if (!securityScopeOf(user.role).includes(row.security)) return err(res, CODES.FORBIDDEN, '无权访问该题目', 403);
  const content = String(body.content || '').trim();
  if (content.length < 4) return err(res, CODES.PARAM, '请填写至少 4 个字的反馈说明');
  const types = ['wrong_answer', 'typo', 'unclear', 'outdated', 'other'];
  const type = types.includes(body.type) ? body.type : 'other';
  const r = db.prepare(`INSERT INTO question_feedback
    (question_id,question_no,user_id,user_name,type,content,status,created_at)
    VALUES (?,?,?,?,?,?, 'open', ?)`).run(row.id, row.question_no, user.id, user.name, type, content, now());
  logAudit(user, 'feedback.create', 'question', row.question_no, { type });
  ok(res, { feedbackId: Number(r.lastInsertRowid), questionNo: row.question_no, type, status: 'open' });
});

route('GET', /^\/api\/admin\/feedback$/, 'bank.read', async ({ res, query }) => {
  const status = query.status || 'open';
  const scope = scopeClause({ role: 'super_admin' });
  let sql = `SELECT f.*, q.stem, q.security, q.category FROM question_feedback f
      LEFT JOIN question q ON q.id=f.question_id WHERE 1=1`;
  const params = [];
  if (status !== 'all') { sql += ' AND f.status=?'; params.push(status); }
  sql += ' ORDER BY f.created_at DESC LIMIT 200';
  const rows = db.prepare(sql).all(...params);
  const typeName = { wrong_answer: '答案有误', typo: '文字错误', unclear: '表述不清', outdated: '内容过时', other: '其它' };
  ok(res, {
    total: rows.length,
    openCount: db.prepare("SELECT COUNT(*) AS n FROM question_feedback WHERE status='open'").get().n,
    items: rows.map(f => ({
      feedbackId: f.id, questionId: f.question_id, questionNo: f.question_no,
      stem: f.stem || '', category: f.category || '', security: f.security || '',
      type: f.type, typeName: typeName[f.type] || f.type,
      content: f.content, status: f.status,
      userName: f.user_name, createdAt: f.created_at,
      resolvedAt: f.resolved_at, resolvedBy: f.resolved_by
    }))
  });
});

route('PATCH', /^\/api\/admin\/feedback\/(\d+)$/, 'bank.review', async ({ res, user, params, body }) => {
  const f = db.prepare('SELECT * FROM question_feedback WHERE id=?').get(Number(params[0]));
  if (!f) return err(res, CODES.NOTFOUND, '反馈不存在', 404);
  const status = body.status === 'open' ? 'open' : 'resolved';
  db.prepare(`UPDATE question_feedback SET status=?, resolved_at=?, resolved_by=? WHERE id=?`)
    .run(status, status === 'resolved' ? now() : null, status === 'resolved' ? user.name : null, f.id);
  logAudit(user, 'feedback.' + status, 'question', f.question_no, {});
  ok(res, { feedbackId: f.id, status });
});

/* ---------------- 管理端 ---------------- */
route('GET', /^\/api\/admin\/overview$/, 'bank.read', async ({ res, user }) => {
  const scope = scopeClause(user);
  const rows = db.prepare(`SELECT status,security,category,type,difficulty,tags FROM question q WHERE q.deleted_at IS NULL AND ${scope.sql}`).all(...scope.params);
  const cnt = (fn) => rows.filter(fn).length;
  const group = (key) => rows.reduce((m, r) => { m[r[key]] = (m[r[key]] || 0) + 1; return m; }, {});
  const tagCount = {};
  rows.forEach(r => parseJson(r.tags, []).forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; }));
  ok(res, {
    total: rows.length,
    draft: cnt(r => r.status === 'draft'),
    archived: cnt(r => r.status === 'archived'),
    published: cnt(r => r.status === 'published'),
    totalAll: db.prepare('SELECT COUNT(*) AS n FROM question WHERE deleted_at IS NULL').get().n,
    taskCount: db.prepare("SELECT COUNT(*) AS n FROM exam WHERE deleted_at IS NULL AND status='open'").get().n,
    byCategory: group('category'), byType: group('type'),
    byDifficulty: group('difficulty'), bySecurity: group('security'),
    allTags: Object.keys(tagCount).sort((a, b) => tagCount[b] - tagCount[a]).slice(0, 40),
    recentAudit: db.prepare('SELECT * FROM audit_log ORDER BY id DESC LIMIT 6').all()
      .map(a => ({ at: a.created_at, by: a.actor_name, msg: describeAction(a) })),
    auditTotal: db.prepare('SELECT COUNT(*) AS n FROM audit_log').get().n
  });
});

/* ---------------- 知识库管理端（权限 bank.write，见设计文档 §3.2） ----------------
   注意：/api/admin/knowledge/import 与 /stats 必须注册在 /api/admin/knowledge/:no 之前。 */

/** 管理端条目回读（含软删，便于恢复） */
function adminKnowledgeRow(no) {
  return db.prepare('SELECT * FROM knowledge WHERE knowledge_no=?').get(String(no));
}

/** 入库/更新（管理端共用）：no 由路由或请求体确定 */
function knowledgeUpsert(user, no, b, exist) {
  const v = knowledgeValidate(Object.assign({}, b, { knowledgeNo: no }), { partial: false });
  if (v.errors.length) return { error: { status: 400, message: v.errors.map(e => `${e.field}：${e.message}`).join('；'), errors: v.errors } };
  const r = v.row, ts = now();
  if (exist) {
    db.prepare(`UPDATE knowledge SET category=?,topic=?,title=?,summary=?,content=?,tags=?,audience=?,related_questions=?,
        security=?,status=?,read_minutes=?,level=?,sort_order=?,source_title=?,source_url=?,
        deleted_at=NULL,updated_by=?,updated_at=?,version=version+1 WHERE id=?`).run(
      r.category, r.topic, r.title, r.summary, r.content, r.tags, r.audience, r.related, r.security, r.status,
      r.read_minutes, r.level, r.sort_order, r.source_title, r.source_url, user.id, ts, exist.id);
    return { updated: true, warnings: v.warnings, row: adminKnowledgeRow(no) };
  }
  db.prepare(`INSERT INTO knowledge
      (knowledge_no,category,topic,title,summary,content,tags,audience,related_questions,security,status,
       read_minutes,level,sort_order,source_title,source_url,created_by,created_at,updated_at)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
    no, r.category, r.topic, r.title, r.summary, r.content, r.tags, r.audience, r.related, r.security, r.status,
    r.read_minutes, r.level, r.sort_order, r.source_title, r.source_url, user.id, ts, ts);
  return { created: true, warnings: v.warnings, row: adminKnowledgeRow(no) };
}

route('GET', /^\/api\/admin\/knowledge$/, 'bank.write', async ({ res, query }) => {
  const w = kbCond(null, query, { admin: true });
  const total = db.prepare(`SELECT COUNT(*) AS n FROM knowledge k WHERE ${w.sql}`).get(...w.params).n;
  const page = Math.max(1, Number(query.page || 1));
  const size = Math.min(200, Math.max(1, Number(query.page_size || 20)));
  // 管理端列表返回 content 便于编辑/预览；readers 为该条目的学习人数
  const rows = db.prepare(`SELECT k.*, (SELECT COUNT(*) FROM user_knowledge_record r WHERE r.knowledge_id=k.id) AS readers
      FROM knowledge k WHERE ${w.sql}${KB_ORDER} LIMIT ? OFFSET ?`).all(...w.params, size, (page - 1) * size);
  ok(res, {
    page, page_size: size, total,
    items: rows.map(r => Object.assign(mapKnowledge(r, true), { readers: r.readers || 0 }))
  });
});

route('GET', /^\/api\/admin\/knowledge\/stats$/, 'bank.write', async ({ res, user }) => {
  const w = knowledgeScope(user, { publishedOnly: false, alias: 'k' });
  const base = `FROM knowledge k WHERE k.deleted_at IS NULL AND ${w.sql}`;
  const rows = db.prepare(`SELECT k.category, k.topic, k.security, k.status ${base}`).all(...w.params);
  const group = (key) => rows.reduce((m, r) => { m[r[key]] = (m[r[key]] || 0) + 1; return m; }, {});

  const readTop = db.prepare(`SELECT k.knowledge_no, k.title,
      COUNT(r.id) AS readers, COALESCE(SUM(r.read_seconds),0) AS total_seconds
    FROM knowledge k LEFT JOIN user_knowledge_record r ON r.knowledge_id=k.id
    WHERE k.deleted_at IS NULL AND ${w.sql}
    GROUP BY k.id HAVING readers > 0
    ORDER BY readers DESC, total_seconds DESC LIMIT 10`).all(...w.params)
    .map(x => ({
      knowledgeNo: x.knowledge_no, title: x.title, readers: x.readers,
      totalSeconds: x.total_seconds, avgSeconds: x.readers ? Math.round(x.total_seconds / x.readers) : 0
    }));

  const userStats = db.prepare(`SELECT u.id AS user_id, u.name, u.dept, u.role,
      COUNT(r.id) AS read_count,
      SUM(CASE WHEN r.finished=1 THEN 1 ELSE 0 END) AS finished_count,
      COALESCE(SUM(r.read_seconds),0) AS total_seconds
    FROM user u LEFT JOIN user_knowledge_record r ON r.user_id=u.id
    WHERE u.deleted_at IS NULL
    GROUP BY u.id ORDER BY total_seconds DESC, read_count DESC`).all()
    .map(x => ({
      userId: x.user_id, name: x.name, dept: x.dept, role: x.role, roleLabel: roleLabelOf(x.role),
      readCount: x.read_count, finishedCount: x.finished_count || 0, totalSeconds: x.total_seconds
    }));

  ok(res, {
    total: rows.length,
    byCategory: group('category'), byTopic: group('topic'),
    bySecurity: group('security'), byStatus: group('status'),
    readTop, userStats
  });
});

route('GET', /^\/api\/admin\/knowledge\/(KB-[A-Z]+-\d+)$/, 'bank.write', async ({ res, params }) => {
  const row = adminKnowledgeRow(params[0]);
  if (!row) return err(res, CODES.NOTFOUND, '知识条目不存在', 404);
  const k = mapKnowledge(row, true);
  // 管理端可见全量密级，关联题摘要按超管可见范围下发
  k.relatedQuestions = relatedQuestionSummaries({ role: 'super_admin' }, k.relatedQuestions);
  k.readers = db.prepare('SELECT COUNT(*) AS n FROM user_knowledge_record WHERE knowledge_id=?').get(row.id).n;
  ok(res, k);
});

route('POST', /^\/api\/admin\/knowledge$/, 'bank.write', async ({ res, user, body }) => {
  const no = String((body && (body.knowledgeNo || body.id)) || '');
  if (!no) return err(res, CODES.PARAM, '知识编号（knowledgeNo）为必填');
  const exist = adminKnowledgeRow(no);
  if (exist && !exist.deleted_at) return err(res, CODES.CONFLICT, '知识编号已存在', 409);
  const r = knowledgeUpsert(user, no, body, exist);
  if (r.error) return err(res, CODES.PARAM, r.error.message);
  logAudit(user, 'knowledge.create', 'knowledge', no, { restored: !!exist, category: r.row.category });
  ok(res, { knowledgeNo: no, restored: !!exist, warnings: r.warnings });
});

route('PUT', /^\/api\/admin\/knowledge\/(KB-[A-Z]+-\d+)$/, 'bank.write', async ({ res, user, params, body }) => {
  const row = adminKnowledgeRow(params[0]);
  if (!row) return err(res, CODES.NOTFOUND, '知识条目不存在', 404);
  const no = String((body && (body.knowledgeNo || body.id)) || row.knowledge_no);
  if (no !== row.knowledge_no) return err(res, CODES.PARAM, '知识编号不可修改');
  // 局部更新：未提交的字段沿用库中现值，再走同一套校验
  const r = knowledgeUpsert(user, no, mergeKnowledgeRow(row, body || {}), row);
  if (r.error) return err(res, CODES.PARAM, r.error.message);
  logAudit(user, 'knowledge.update', 'knowledge', no, { restored: !!row.deleted_at });
  ok(res, { updated: true, knowledgeNo: no, warnings: r.warnings });
});

route('POST', /^\/api\/admin\/knowledge\/(KB-[A-Z]+-\d+)\/status$/, 'bank.write', async ({ res, user, params, body }) => {
  const row = adminKnowledgeRow(params[0]);
  if (!row || row.deleted_at) return err(res, CODES.NOTFOUND, '知识条目不存在', 404);
  const status = String((body && body.status) || '');
  if (!KB_STATUS_KEYS.includes(status)) return err(res, CODES.PARAM, `status 非法，应为 ${KB_STATUS_KEYS.join('/')}`);
  db.prepare('UPDATE knowledge SET status=?,updated_by=?,updated_at=? WHERE id=?').run(status, user.id, now(), row.id);
  logAudit(user, 'knowledge.status', 'knowledge', row.knowledge_no, { status });
  ok(res, { knowledgeNo: row.knowledge_no, status });
});

route('DELETE', /^\/api\/admin\/knowledge\/(KB-[A-Z]+-\d+)$/, 'bank.write', async ({ res, user, params }) => {
  const row = adminKnowledgeRow(params[0]);
  if (!row || row.deleted_at) return err(res, CODES.NOTFOUND, '知识条目不存在', 404);
  db.prepare('UPDATE knowledge SET deleted_at=?,updated_by=? WHERE id=?').run(now(), user.id, row.id);
  logAudit(user, 'knowledge.delete', 'knowledge', row.knowledge_no, {});
  ok(res, { deleted: true, knowledgeNo: row.knowledge_no });
});

route('POST', /^\/api\/admin\/knowledge\/import$/, 'bank.write', async ({ res, user, body }) => {
  const list = Array.isArray(body) ? body : (body && body.items);
  if (!Array.isArray(list) || !list.length) return err(res, CODES.PARAM, 'items 必须为包含 1–2000 条知识条目的数组');
  const mode = (body && body.mode) === 'overwrite' ? 'overwrite' : 'skip';
  const started = Date.now();
  const errors = [], warnings = [];
  let imported = 0, updated = 0, skipped = 0;
  const ts = now();

  list.forEach((item, i) => {
    const no = String((item && (item.knowledgeNo || item.id)) || '');
    const v = knowledgeValidate(item, { partial: false });
    if (v.errors.length) {
      // 一条条目可能有多个字段问题，全部给出，便于内容生产侧一次改完
      v.errors.forEach(e => errors.push({ row: i + 1, knowledgeNo: no || null, field: e.field, message: e.message }));
      return;
    }
    v.warnings.forEach(w => warnings.push({ row: i + 1, knowledgeNo: no, field: w.field, message: w.message }));
    const exist = adminKnowledgeRow(no);
    const r = v.row;
    if (exist) {
      if (mode === 'skip') {
        skipped++;
        warnings.push({ row: i + 1, knowledgeNo: no, field: 'knowledgeNo', message: '知识库中已存在同编号条目，已跳过（mode=skip）' });
        return;
      }
      db.prepare(`UPDATE knowledge SET category=?,topic=?,title=?,summary=?,content=?,tags=?,audience=?,related_questions=?,
          security=?,status=?,read_minutes=?,level=?,sort_order=?,source_title=?,source_url=?,
          deleted_at=NULL,updated_by=?,updated_at=?,version=version+1 WHERE id=?`).run(
        r.category, r.topic, r.title, r.summary, r.content, r.tags, r.audience, r.related, r.security, r.status,
        r.read_minutes, r.level, r.sort_order, r.source_title, r.source_url, user.id, ts, exist.id);
      updated++;
      return;
    }
    db.prepare(`INSERT INTO knowledge
        (knowledge_no,category,topic,title,summary,content,tags,audience,related_questions,security,status,
         read_minutes,level,sort_order,source_title,source_url,created_by,created_at,updated_at)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
      no, r.category, r.topic, r.title, r.summary, r.content, r.tags, r.audience, r.related, r.security, r.status,
      r.read_minutes, r.level, r.sort_order, r.source_title, r.source_url, user.id, ts, ts);
    imported++;
  });

  logAudit(user, 'knowledge.import', 'knowledge', null, { total: list.length, mode, imported, updated, skipped, errors: errors.length });
  ok(res, {
    total: list.length, mode, imported, updated, skipped,
    errorCount: errors.length, warningCount: warnings.length,
    errors: errors.slice(0, 50), warnings: warnings.slice(0, 50),
    durationMs: Date.now() - started
  });
});

function describeAction(a) {
  const map = {
    'question.create': '新增题目', 'question.update': '保存题目', 'question.delete': '删除题目',
    'question.import': '导入题目', 'question.status': '变更题目状态', 'exam.create': '发布考试任务',
    'exam.update': '修改考试任务', 'exam.delete': '删除考试任务', 'auth.login': '登录', 'auth.logout': '退出',
    'knowledge.create': '新增知识条目', 'knowledge.update': '保存知识条目', 'knowledge.delete': '删除知识条目',
    'knowledge.status': '变更知识条目状态', 'knowledge.import': '导入知识条目'
  };
  const base = map[a.action] || a.action;
  return a.entity_id ? `${base} ${a.entity_id}` : base;
}

route('GET', /^\/api\/admin\/questions$/, 'bank.read', async ({ res, user, query }) => {
  const scope = scopeClause(user);
  let sql = `SELECT q.* FROM question q WHERE q.deleted_at IS NULL AND ${scope.sql}`;
  const params = scope.params.slice();
  for (const [k, col] of [['category', 'category'], ['type', 'type'], ['difficulty', 'difficulty'], ['security', 'security'], ['status', 'status']]) {
    if (query[k]) { sql += ` AND q.${col}=?`; params.push(query[k]); }
  }
  if (query.keyword) {
    sql += ' AND (q.question_no LIKE ? OR q.stem LIKE ? OR q.tags LIKE ?)';
    const kw = `%${query.keyword}%`;
    params.push(kw, kw, kw);
  }
  sql += ' ORDER BY q.category, q.difficulty, q.question_no';
  let rows = db.prepare(sql).all(...params);
  const total = rows.length;
  const page = Math.max(1, Number(query.page || 1));
  const size = Math.min(200, Math.max(1, Number(query.page_size || 20)));
  rows = rows.slice((page - 1) * size, page * size);
  ok(res, {
    page, page_size: size, total,
    items: rows.map(r => {
      const q = mapQuestion(r, true);   // 管理端需要答案用于编辑回显与预览
      q.statusName = { draft: '草稿', published: '已上线', archived: '已归档' }[r.status];
      q.wrongRate = r.usage_count ? Math.round((1 - r.right_count / r.usage_count) * 1000) / 10 : 0;
      q.updatedAt = r.updated_at;
      return q;
    })
  });
});

function questionBodyToRow(b) {
  const type = b.type;
  const options = (type === 'single' || type === 'multi')
    ? JSON.stringify(Object.keys(b.options || {}).map(k => ({ key: k, text: b.options[k] })))
    : null;
  return {
    question_no: b.questionNo || b.id,
    category: b.category, type,
    difficulty: b.difficulty || 'beginner',
    security: b.security || 'public',
    status: b.status || 'draft',
    stem: b.stem,
    options,
    answer: JSON.stringify(b.answer),
    explanation: b.explanation || null,
    source_title: (b.source || {}).title || null,
    source_chapter: (b.source || {}).chapter || null,
    source_url: (b.source || {}).url || null,
    tags: JSON.stringify(b.tags || []),
    audience: JSON.stringify(b.audience || []),
    score_weight: TYPE_SCORES[type] || 1
  };
}

route('POST', /^\/api\/admin\/questions$/, 'bank.write', async ({ res, user, body }) => {
  const r = questionBodyToRow(body);
  if (!r.question_no || !r.stem || !r.category || !r.type) return err(res, CODES.PARAM, '题号、品类、题型、题干为必填');
  const exist = db.prepare('SELECT * FROM question WHERE question_no=?').get(r.question_no);
  if (exist && !exist.deleted_at) return err(res, CODES.CONFLICT, '题号已存在', 409);
  const ts = now();
  if (exist) {
    // 该题号此前被软删除：复用原记录（恢复并覆盖内容），避免题号被历史数据永久占用
    db.prepare(`UPDATE question SET category=?,type=?,difficulty=?,security=?,status=?,stem=?,options=?,answer=?,explanation=?,
        source_title=?,source_chapter=?,source_url=?,tags=?,audience=?,score_weight=?,deleted_at=NULL,updated_by=?,updated_at=?,version=version+1
      WHERE id=?`).run(
      r.category, r.type, r.difficulty, r.security, r.status, r.stem, r.options, r.answer, r.explanation,
      r.source_title, r.source_chapter, r.source_url, r.tags, r.audience, r.score_weight, user.id, ts, exist.id);
    logAudit(user, 'question.create', 'question', r.question_no, { restored: true });
    return ok(res, mapQuestion(db.prepare('SELECT * FROM question WHERE id=?').get(exist.id), true));
  }
  const ins = db.prepare(`INSERT INTO question (question_no,category,type,difficulty,security,status,stem,options,answer,explanation,
      source_title,source_chapter,source_url,tags,audience,score_weight,created_by,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
    r.question_no, r.category, r.type, r.difficulty, r.security, r.status, r.stem, r.options, r.answer, r.explanation,
    r.source_title, r.source_chapter, r.source_url, r.tags, r.audience, r.score_weight, user.id, ts, ts);
  logAudit(user, 'question.create', 'question', r.question_no, { category: r.category });
  ok(res, mapQuestion(db.prepare('SELECT * FROM question WHERE id=?').get(Number(ins.lastInsertRowid)), true));
});

route('PUT', /^\/api\/admin\/questions\/(\d+)$/, 'bank.write', async ({ res, user, params, body }) => {
  const row = db.prepare('SELECT * FROM question WHERE id=? AND deleted_at IS NULL').get(Number(params[0]));
  if (!row) return err(res, CODES.NOTFOUND, '题目不存在', 404);
  const r = questionBodyToRow(Object.assign({ questionNo: row.question_no, status: row.status }, body));
  db.prepare(`UPDATE question SET category=?,type=?,difficulty=?,security=?,status=?,stem=?,options=?,answer=?,explanation=?,
      source_title=?,source_chapter=?,source_url=?,tags=?,audience=?,score_weight=?,updated_by=?,updated_at=?,version=version+1 WHERE id=?`).run(
    r.category, r.type, r.difficulty, r.security, r.status, r.stem, r.options, r.answer, r.explanation,
    r.source_title, r.source_chapter, r.source_url, r.tags, r.audience, r.score_weight, user.id, now(), row.id);
  logAudit(user, 'question.update', 'question', row.question_no, {});
  ok(res, mapQuestion(db.prepare('SELECT * FROM question WHERE id=?').get(row.id), true));
});

route('PATCH', /^\/api\/admin\/questions\/(\d+)\/status$/, 'bank.review', async ({ res, user, params, body }) => {
  const row = db.prepare('SELECT * FROM question WHERE id=? AND deleted_at IS NULL').get(Number(params[0]));
  if (!row) return err(res, CODES.NOTFOUND, '题目不存在', 404);
  const status = String(body.status);
  if (!['draft', 'published', 'archived'].includes(status)) return err(res, CODES.PARAM, '状态非法');
  db.prepare('UPDATE question SET status=?,updated_by=?,updated_at=? WHERE id=?').run(status, user.id, now(), row.id);
  logAudit(user, 'question.status', 'question', row.question_no, { status });
  ok(res, { questionId: row.id, questionNo: row.question_no, status });
});

route('DELETE', /^\/api\/admin\/questions\/(\d+)$/, 'bank.write', async ({ res, user, params }) => {
  const row = db.prepare('SELECT * FROM question WHERE id=? AND deleted_at IS NULL').get(Number(params[0]));
  if (!row) return err(res, CODES.NOTFOUND, '题目不存在', 404);
  db.prepare('UPDATE question SET deleted_at=?,updated_by=? WHERE id=?').run(now(), user.id, row.id);
  logAudit(user, 'question.delete', 'question', row.question_no, {});
  ok(res, { deleted: true, questionNo: row.question_no });
});

route('POST', /^\/api\/admin\/questions\/import$/, 'bank.import', async ({ res, user, body }) => {
  const list = body.questions;
  if (!Array.isArray(list) || !list.length) return err(res, CODES.PARAM, 'questions 必须为包含 1–2000 道题的数组');
  const mode = body.mode || 'upsert';
  const started = Date.now();
  const errors = [], warnings = [];
  let imported = 0, updated = 0, skipped = 0;
  const ts = now();

  list.forEach((q, i) => {
    const tag = `第 ${i + 1} 条${q && q.id ? '（' + q.id + '）' : ''}`;
    const no = q.questionNo || q.id;
    if (!no || !/^[A-Z]+-\d+$/.test(no)) return errors.push({ row: i + 1, field: '题号', message: `${tag}：题号格式应为"前缀-序号"`, value: no || '' });
    if (!CATEGORIES.some(c => c.key === q.category)) return errors.push({ row: i + 1, questionNo: no, field: 'category', message: '品类非法' });
    if (!TYPES.some(t => t.key === q.type)) return errors.push({ row: i + 1, questionNo: no, field: 'type', message: '题型非法' });
    if (!DIFFICULTIES.some(d => d.key === q.difficulty)) return errors.push({ row: i + 1, questionNo: no, field: 'difficulty', message: '难度必须为 beginner/intermediate/advanced（入门/中级/高级）', value: q.difficulty });
    if (!q.stem || q.stem.length < 5) return errors.push({ row: i + 1, questionNo: no, field: 'stem', message: '题干过短' });
    if (q.type === 'single' || q.type === 'multi') {
      const keys = Object.keys(q.options || {});
      if (keys.length < 2) return errors.push({ row: i + 1, questionNo: no, field: 'options', message: '选项不足 2 个' });
      if (!Array.isArray(q.answer) || !q.answer.length) return errors.push({ row: i + 1, questionNo: no, field: 'answer', message: '答案缺失' });
      const bad = q.answer.filter(k => !keys.includes(k));
      if (bad.length) return errors.push({ row: i + 1, questionNo: no, field: 'answer', message: `答案 ${bad.join('/')} 不在选项内` });
      if (q.type === 'multi' && q.answer.length < 2) return errors.push({ row: i + 1, questionNo: no, field: 'answer', message: '多选题答案需 ≥ 2 项' });
    } else if (q.type === 'judge') {
      if (!Array.isArray(q.answer) || !['T', 'F'].includes(q.answer[0])) return errors.push({ row: i + 1, questionNo: no, field: 'answer', message: '判断题答案需为 ["T"] 或 ["F"]' });
    } else if (q.type === 'fill') {
      if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((a) => typeof a !== 'string' || !a.trim())) {
        return errors.push({ row: i + 1, questionNo: no, field: 'answer', message: '填空题答案需为非空字符串数组（按空位顺序）' });
      }
      if (!/_{3,}/.test(String(q.stem || ''))) {
        return errors.push({ row: i + 1, questionNo: no, field: 'stem', message: '填空题题干需用 ____ 标记空位' });
      }
    } else if (typeof q.answer !== 'string' || q.answer.trim().length < 5) {
      return errors.push({ row: i + 1, questionNo: no, field: 'answer', message: '简答/场景题需填写参考答案文本' });
    }
    // 人群 × 题型约束：销售与采购只考查客观题
    const aud = Array.isArray(q.audience) ? q.audience : [];
    if (aud.some((r) => OBJECTIVE_ONLY_ROLES.includes(r)) && !OBJECTIVE_TYPES.includes(q.type)) {
      return errors.push({ row: i + 1, questionNo: no, field: 'audience', message: `销售/采购人群只允许客观题，当前为 ${q.type}` });
    }
    if (!q.explanation || q.explanation.length < 15) warnings.push({ row: i + 1, questionNo: no, message: '解析过短，建议补充干扰项分析' });
    if (!(q.source && q.source.title)) warnings.push({ row: i + 1, questionNo: no, message: '缺少资料溯源' });
    if (!Array.isArray(q.audience) || !q.audience.length) warnings.push({ row: i + 1, questionNo: no, message: '未标注适用人群，默认按 engineer 处理' });

    const r = questionBodyToRow(Object.assign({}, q, { status: q.status || 'published' }));
    const exist = db.prepare('SELECT id FROM question WHERE question_no=?').get(r.question_no);
    if (exist) {
      if (mode === 'insert_only') { skipped++; warnings.push({ row: i + 1, questionNo: no, message: '题库中已存在同题号，已跳过' }); return; }
      // 覆盖导入：同时清除软删除标记，避免"导入了但题目仍是删除状态"
      db.prepare(`UPDATE question SET category=?,type=?,difficulty=?,security=?,status=?,stem=?,options=?,answer=?,explanation=?,
        source_title=?,source_chapter=?,source_url=?,tags=?,audience=?,score_weight=?,deleted_at=NULL,updated_by=?,updated_at=?,version=version+1 WHERE id=?`).run(
        r.category, r.type, r.difficulty, r.security, r.status, r.stem, r.options, r.answer, r.explanation,
        r.source_title, r.source_chapter, r.source_url, r.tags, r.audience, r.score_weight, user.id, ts, exist.id);
      updated++;
    } else {
      db.prepare(`INSERT INTO question (question_no,category,type,difficulty,security,status,stem,options,answer,explanation,
        source_title,source_chapter,source_url,tags,audience,score_weight,created_by,created_at,updated_at)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
        r.question_no, r.category, r.type, r.difficulty, r.security, r.status, r.stem, r.options, r.answer, r.explanation,
        r.source_title, r.source_chapter, r.source_url, r.tags, r.audience, r.score_weight, user.id, ts, ts);
      imported++;
    }
  });

  logAudit(user, 'question.import', 'question', null, { total: list.length, imported, updated, errors: errors.length });
  ok(res, {
    total: list.length, imported, updated, skipped,
    errorCount: errors.length, warningCount: warnings.length,
    errors: errors.slice(0, 50), warnings: warnings.slice(0, 50),
    durationMs: Date.now() - started
  });
});

route('GET', /^\/api\/admin\/exam-tasks$/, 'task.write', async ({ res }) => {
  const rows = db.prepare('SELECT e.*, u.name AS creator FROM exam e LEFT JOIN user u ON u.id=e.created_by WHERE e.deleted_at IS NULL ORDER BY e.created_at DESC').all();
  ok(res, {
    items: rows.map(t => ({
      taskId: t.id, title: t.title, category: t.category,
      questionCount: t.question_count, minutes: t.minutes, passScore: t.pass_score,
      deadline: t.deadline, roles: parseJson(t.roles, []), allowRetake: !!t.allow_retake,
      status: t.status, createdBy: t.creator, createdAt: t.created_at,
      attemptCount: db.prepare("SELECT COUNT(*) AS n FROM exam_record WHERE exam_id=? AND status='submitted'").get(t.id).n
    }))
  });
});

route('POST', /^\/api\/admin\/exam-tasks$/, 'task.write', async ({ res, user, body }) => {
  if (!body.title || String(body.title).length > 200) return err(res, CODES.PARAM, 'title 必须为长度 1–200 的文本');
  const ts = now();
  const r = db.prepare(`INSERT INTO exam (title,category,question_count,minutes,pass_score,deadline,roles,allow_retake,status,created_by,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?, 'open',?,?,?)`).run(
    body.title, body.category || 'all', Number(body.questionCount || 20), Number(body.minutes || 30),
    Number(body.passScore || 60), body.deadline || null, JSON.stringify(body.roles || []),
    body.allowRetake ? 1 : 0, user.id, ts, ts);
  logAudit(user, 'exam.create', 'exam', body.title, {});
  ok(res, { taskId: Number(r.lastInsertRowid), title: body.title });
});

route('PUT', /^\/api\/admin\/exam-tasks\/(\d+)$/, 'task.write', async ({ res, user, params, body }) => {
  const t = db.prepare('SELECT * FROM exam WHERE id=? AND deleted_at IS NULL').get(Number(params[0]));
  if (!t) return err(res, CODES.NOTFOUND, '任务不存在', 404);
  db.prepare('UPDATE exam SET title=?,category=?,question_count=?,minutes=?,pass_score=?,deadline=?,roles=?,allow_retake=?,status=?,updated_at=? WHERE id=?').run(
    body.title ?? t.title, body.category ?? t.category, Number(body.questionCount ?? t.question_count),
    Number(body.minutes ?? t.minutes), Number(body.passScore ?? t.pass_score), body.deadline ?? t.deadline,
    JSON.stringify(body.roles ?? parseJson(t.roles, [])), (body.allowRetake ?? t.allow_retake) ? 1 : 0,
    body.status ?? t.status, now(), t.id);
  logAudit(user, 'exam.update', 'exam', t.title, {});
  ok(res, { taskId: t.id, status: body.status ?? t.status });
});

route('DELETE', /^\/api\/admin\/exam-tasks\/(\d+)$/, 'task.write', async ({ res, user, params }) => {
  const t = db.prepare('SELECT * FROM exam WHERE id=? AND deleted_at IS NULL').get(Number(params[0]));
  if (!t) return err(res, CODES.NOTFOUND, '任务不存在', 404);
  db.prepare('UPDATE exam SET deleted_at=? WHERE id=?').run(now(), t.id);
  logAudit(user, 'exam.delete', 'exam', t.title, {});
  ok(res, { deleted: true, taskId: t.id });
});

route('GET', /^\/api\/admin\/reports\/questions$/, 'report.all', async ({ res, user }) => {
  const scope = scopeClause(user);
  const rows = db.prepare(`SELECT * FROM question q WHERE q.deleted_at IS NULL AND ${scope.sql}`).all(...scope.params);
  const byCat = CATEGORIES.map(c => {
    const list = rows.filter(r => r.category === c.key);
    return {
      category: c.key, name: c.name, total: list.length,
      single: list.filter(r => r.type === 'single').length,
      multi: list.filter(r => r.type === 'multi').length,
      judge: list.filter(r => r.type === 'judge').length,
      fill: list.filter(r => r.type === 'fill').length,
      short: list.filter(r => r.type === 'short').length,
      scenario: list.filter(r => r.type === 'scenario').length,
      confidential: list.filter(r => r.security === 'confidential').length,
      publicCount: list.filter(r => r.security === 'public').length
    };
  });
  ok(res, { byCategory: byCat, total: rows.length });
});

route('GET', /^\/api\/admin\/reports\/users$/, 'report.all', async ({ res, user, query }) => {
  const users = db.prepare("SELECT * FROM user WHERE deleted_at IS NULL AND role != 'partner' ORDER BY dept, name").all();
  const byUser = users.map(u => {
    const s = userStats(u);
    const exams = db.prepare("SELECT percent FROM exam_record WHERE user_id=? AND status='submitted'").all(u.id);
    return {
      userId: u.id, name: u.name, dept: u.dept, role: u.role, roleLabel: roleLabelOf(u.role),
      answered: s.answeredTotal, rate: s.rate, coverage: s.coverage, wrongOpen: s.wrongOpen,
      examCount: exams.length,
      avgExamScore: exams.length ? Math.round(exams.reduce((a, e) => a + e.percent, 0) / exams.length * 10) / 10 : null
    };
  });
  const active = byUser.filter(u => u.answered > 0);
  const byDept = {};
  byUser.forEach(u => {
    byDept[u.dept || '(未填写)'] = byDept[u.dept || '(未填写)'] || { userCount: 0, sumRate: 0, rated: 0, sumCov: 0 };
    const d = byDept[u.dept || '(未填写)'];
    d.userCount++;
    if (u.rate != null) { d.sumRate += u.rate; d.rated++; }
    d.sumCov += u.coverage;
  });
  ok(res, {
    summary: {
      userCount: users.length, activeUserCount: active.length,
      avgRate: active.length ? Math.round(active.reduce((a, u) => a + (u.rate || 0), 0) / active.filter(u => u.rate != null).length * 10) / 10 : null,
      avgCoverage: Math.round(byUser.reduce((a, u) => a + u.coverage, 0) / (byUser.length || 1) * 10) / 10
    },
    byDept: Object.keys(byDept).map(k => ({
      dept: k, userCount: byDept[k].userCount,
      avgRate: byDept[k].rated ? Math.round(byDept[k].sumRate / byDept[k].rated * 10) / 10 : null,
      avgCoverage: Math.round(byDept[k].sumCov / byDept[k].userCount * 10) / 10
    })),
    byUser
  });
});

route('GET', /^\/api\/admin\/reports\/question-difficulty$/, 'report.all', async ({ res, user, query }) => {
  const limit = Math.min(50, Number(query.limit || 10));
  const rows = db.prepare(`SELECT question_no, stem, category, usage_count, right_count FROM question
    WHERE usage_count > 0 AND deleted_at IS NULL ORDER BY (1.0*right_count/usage_count) ASC LIMIT ?`).all(limit);
  ok(res, {
    items: rows.map(r => ({
      questionNo: r.question_no, stem: r.stem, category: r.category,
      categoryName: (CATEGORIES.find(c => c.key === r.category) || {}).name,
      usageCount: r.usage_count, rightCount: r.right_count,
      wrongRate: Math.round((1 - r.right_count / r.usage_count) * 1000) / 10
    }))
  });
});

route('GET', /^\/api\/admin\/audit-logs$/, 'user.manage', async ({ res, query }) => {
  const page = Math.max(1, Number(query.page || 1));
  const size = Math.min(200, Number(query.page_size || 50));
  const total = db.prepare('SELECT COUNT(*) AS n FROM audit_log').get().n;
  const rows = db.prepare('SELECT * FROM audit_log ORDER BY id DESC LIMIT ? OFFSET ?').all(size, (page - 1) * size);
  ok(res, {
    page, page_size: size, total,
    items: rows.map(a => ({ at: a.created_at, by: a.actor_name, action: a.action, message: describeAction(a), details: parseJson(a.details, {}) }))
  });
});

route('GET', /^\/api\/admin\/users$/, 'user.manage', async ({ res }) => {
  const rows = db.prepare('SELECT * FROM user WHERE deleted_at IS NULL ORDER BY role, username').all();
  ok(res, {
    total: rows.length,
    items: rows.map(u => ({
      id: u.id, username: u.username, name: u.name, role: u.role, roleLabel: roleLabelOf(u.role),
      dept: u.dept, status: u.status, active: !!u.status, lastLoginAt: u.last_login_at,
      permissions: permissionsOf(u.role), createdAt: u.created_at
    }))
  });
});

route('POST', /^\/api\/admin\/users$/, 'user.manage', async ({ res, user, body }) => {
  const username = String(body.username || '').trim();
  if (!/^[\w.@-]{3,80}$/.test(username)) return err(res, CODES.PARAM, 'username 需为 3–80 位字母、数字、_ . @ -');
  if (db.prepare('SELECT id FROM user WHERE username=?').get(username)) return err(res, CODES.CONFLICT, '账号已存在', 409);
  const role = ['super_admin', 'trainer', 'employee', 'partner'].includes(body.role) ? body.role : 'employee';
  const ts = now();
  const r = db.prepare(`INSERT INTO user (username,password_hash,name,role,dept,status,created_at,updated_at)
    VALUES (?,?,?,?,?,1,?,?)`).run(username, hashPassword(String(body.password || 'Init@123456')), body.name || username, role, body.dept || '', ts, ts);
  db.prepare('INSERT OR IGNORE INTO user_settings (user_id,daily_goal,instant_judge,shuffle_options,updated_at) VALUES (?,20,1,0,?)').run(Number(r.lastInsertRowid), ts);
  logAudit(user, 'user.create', 'user', username, { role });
  ok(res, { id: Number(r.lastInsertRowid), username, role });
});

route('POST', /^\/api\/admin\/questions\/import\/template$/, 'bank.import', async ({ res }) => {
  ok(res, { template: '见 docs/后端开发规格说明书.md §2.2 表头定义', columns: ['题号', '品类', '题型', '难度', '密级', '状态', '题干', '选项A', '选项B', '选项C', '选项D', '选项E', '正确答案', '解析', '资料名称', '章节/页码', '官方链接', '知识点标签', '适用人群', '分值权重'] });
});

/* ============================ HTTP 服务 ============================ */

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost');
  const pathname = u.pathname;
  const query = Object.fromEntries(u.searchParams.entries());

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Max-Age': '600'
    });
    return res.end();
  }

  const matched = routes.find(r => r.method === req.method && r.pattern.test(pathname));
  if (!matched) {
    // 方法不匹配但路径存在 → 405
    const pathExists = routes.some(r => r.pattern.test(pathname));
    return err(res, pathExists ? CODES.PARAM : CODES.NOTFOUND,
      pathExists ? '此接口不支持该 HTTP 方法' : '接口不存在或方法不支持',
      pathExists ? 405 : 404);
  }

  const body = ['POST', 'PUT', 'PATCH'].includes(req.method) ? await readBody(req) : {};
  if (body === null) return err(res, CODES.PARAM, '请求体不是合法 JSON');

  const user = currentUser(req);
  if (!user && !matched.isPublic) return err(res, CODES.UNAUTH, '未登录或登录已过期', 401);
  if (matched.perm && (!user || !can(user, matched.perm))) {
    logAudit(user, 'security.denied', 'api', pathname, { perm: matched.perm });
    return err(res, CODES.FORBIDDEN, '无权限执行该操作', 403);
  }

  const params = matched.pattern.exec(pathname).slice(1);
  try {
    await matched.handler({ req, res, user, params, query, body });
  } catch (e) {
    console.error('[error]', req.method, pathname, e);
    err(res, CODES.SERVER, '服务内部错误：' + e.message, 500);
  }
});

server.listen(PORT, () => {
  const scope = { super_admin: 0, trainer: 0 };
  const count = (role) => {
    const s = securityScopeOf(role);
    return db.prepare(`SELECT COUNT(*) AS n FROM question WHERE status='published' AND deleted_at IS NULL AND security IN (${s.map(() => '?').join(',')})`).get(...s).n;
  };
  console.log('');
  console.log('  汇川产品刷题工具 · 后端参考实现已启动');
  console.log('  ─────────────────────────────────────────────');
  console.log(`  地址：      http://localhost:${PORT}`);
  console.log(`  数据库：    ${DB_FILE}`);
  console.log(`  题库：      ${db.prepare('SELECT COUNT(*) AS n FROM question').get().n} 题` +
    `（超管/讲师可见 ${count('super_admin')} · 员工可见 ${count('employee')} · 客户可见 ${count('partner')}）`);
  const kbTotal = db.prepare("SELECT COUNT(*) AS n FROM knowledge WHERE deleted_at IS NULL").get().n;
  const kbPub = db.prepare("SELECT COUNT(*) AS n FROM knowledge WHERE deleted_at IS NULL AND status='published'").get().n;
  console.log(`  知识库：    ${kbTotal} 篇（已上线 ${kbPub} 篇）` +
    (kres.imported || kres.updated ? `，本次启动导入 新增 ${kres.imported} / 更新 ${kres.updated}` : ''));
  if (kres.errors.length) console.log(`  知识库导入提示 ${kres.errors.length} 条（前 3 条：${kres.errors.slice(0, 3).join('；')}）`);
  if (seeded.length) {
    console.log('  已创建演示账号：');
    seeded.forEach(s => console.log('    · ' + s));
  }
  if (taskSeeded) console.log('  已创建演示考试任务：2026 年新员工产品知识摸底考');
  console.log('');
});
