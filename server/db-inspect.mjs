/**
 * 数据库核查工具（联调/运维用）
 *   用法：node server/db-inspect.mjs [用户名]
 *   输出：账号、答题记录、错题本、考试记录、练习会话、题库冗余统计、审计日志
 */
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import url from 'node:url';

const here = path.dirname(url.fileURLToPath(import.meta.url));
const dbFile = process.env.IQZ_DB || path.join(here, 'quiz.db');
const username = process.argv[2] || 'engineer01';

const db = new DatabaseSync(dbFile);
const all = (sql, ...p) => db.prepare(sql).all(...p);
const one = (sql, ...p) => db.prepare(sql).get(...p);
const line = (s = '') => console.log(s);

line('\n══════════ 汇川刷题工具 · 数据库核查 ══════════');
line('数据库：' + dbFile);

/* ---------------- 总览 ---------------- */
line('\n【总览】');
const tables = ['user', 'question', 'user_answer', 'wrong_book', 'exam', 'exam_record', 'practice_session', 'favorite', 'note', 'audit_log'];
tables.forEach(t => {
  const n = one(`SELECT COUNT(*) AS n FROM ${t}`).n;
  line('  ' + t.padEnd(18) + String(n).padStart(6) + ' 行');
});

/* ---------------- 题库分布 ---------------- */
line('\n【题库分布】');
all('SELECT category, security, COUNT(*) AS n FROM question WHERE deleted_at IS NULL GROUP BY category, security ORDER BY category')
  .forEach(r => line('  ' + r.category.padEnd(10) + r.security.padEnd(14) + r.n + ' 题'));
const byStatus = all("SELECT status, COUNT(*) AS n FROM question WHERE deleted_at IS NULL GROUP BY status");
line('  状态：' + byStatus.map(r => r.status + '=' + r.n).join(' · '));

/* ---------------- 指定用户 ---------------- */
const u = one('SELECT id, name, role, dept FROM user WHERE username=?', username);
if (!u) {
  line(`\n⚠ 未找到用户 ${username}`);
  db.close();
  process.exit(0);
}
line(`\n【账号】${u.name}（${username} · ${u.role} · ${u.dept || '未填部门'}）`);

line('\n  答题记录（按场景）：');
const modes = all(`SELECT mode, COUNT(*) AS n,
    SUM(CASE WHEN is_correct=1 THEN 1 ELSE 0 END) AS rc,
    SUM(CASE WHEN is_correct=0 THEN 1 ELSE 0 END) AS wc,
    SUM(CASE WHEN is_correct IS NULL THEN 1 ELSE 0 END) AS pc
  FROM user_answer WHERE user_id=? GROUP BY mode`, u.id);
if (!modes.length) line('    （无）');
modes.forEach(r => line('    ' + r.mode.padEnd(16) + r.n + ' 条（对 ' + r.rc + ' / 错 ' + r.wc + ' / 待评 ' + r.pc + '）'));

line('\n  错题本：');
const wb = all('SELECT status, COUNT(*) AS n FROM wrong_book WHERE user_id=? GROUP BY status', u.id);
if (!wb.length) line('    （无）');
wb.forEach(r => line('    ' + r.status.padEnd(10) + r.n + ' 条'));
const high = one('SELECT COUNT(*) AS n FROM wrong_book WHERE user_id=? AND wrong_count>=2', u.id).n;
line('    高频错题（错≥2 次）：' + high + ' 条');

line('\n  考试记录：');
const exams = all(`SELECT id, scope, status, percent, right_count, wrong_count, pending_count, passed, duration_sec, auto_submit
  FROM exam_record WHERE user_id=? ORDER BY id DESC`, u.id);
if (!exams.length) line('    （无）');
exams.forEach(r => line('    #' + r.id + ' ' + r.scope + ' | ' + r.status + ' | ' + r.percent + ' 分 | 对' +
  r.right_count + ' 错' + r.wrong_count + ' 待评' + r.pending_count + ' | 通过=' + (r.passed ? '是' : '否') +
  ' | 用时 ' + r.duration_sec + 's' + (r.auto_submit ? ' | 超时自动交卷' : '')));

line('\n  练习会话：');
const sess = all('SELECT session_id, mode, scope, total, right_count, wrong_count, duration_sec FROM practice_session WHERE user_id=? ORDER BY id DESC', u.id);
if (!sess.length) line('    （无）');
sess.forEach(r => line('    ' + r.session_id + ' | ' + r.mode + ' | ' + r.scope + ' | ' + r.total +
  ' 题 对' + r.right_count + '/错' + r.wrong_count + ' | ' + r.duration_sec + 's'));

line('\n  收藏 / 笔记：' +
  one('SELECT COUNT(*) AS n FROM favorite WHERE user_id=?', u.id).n + ' / ' +
  one('SELECT COUNT(*) AS n FROM note WHERE user_id=?', u.id).n);

/* ---------------- 全库统计 ---------------- */
line('\n【全库答题统计】');
const total = one('SELECT COUNT(*) AS n FROM user_answer').n;
line('  答题记录合计：' + total + ' 条');
const qs = one('SELECT COUNT(*) AS n, SUM(usage_count) AS uc, SUM(right_count) AS rc FROM question');
line('  题库 ' + qs.n + ' 题 | 累计作答 ' + (qs.uc || 0) + ' 次 | 累计答对 ' + (qs.rc || 0) + ' 次');

/* ---------------- 审计日志 ---------------- */
line('\n【审计日志 · 最近 10 条】');
all('SELECT action, actor_name, entity_id, created_at FROM audit_log ORDER BY id DESC LIMIT 10')
  .forEach(r => line('  ' + r.created_at + '  ' + String(r.action).padEnd(22) + String(r.entity_id || '').padEnd(12) + r.actor_name));

line('\n════════════════════════════════════════════════\n');
db.close();
