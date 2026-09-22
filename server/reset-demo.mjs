/**
 * 联调测试数据清理
 *   用法：node server/reset-demo.mjs [--keep-learner]
 *   作用：清理自动化测试产生的数据，保留演示账号与演示任务
 */
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import url from 'node:url';

const here = path.dirname(url.fileURLToPath(import.meta.url));
const dbFile = process.env.IQZ_DB || path.join(here, 'quiz.db');
const keepLearner = process.argv.includes('--keep-learner');
const db = new DatabaseSync(dbFile);

const before = {
  user_answer: db.prepare('SELECT COUNT(*) AS n FROM user_answer').get().n,
  wrong_book: db.prepare('SELECT COUNT(*) AS n FROM wrong_book').get().n,
  exam_record: db.prepare('SELECT COUNT(*) AS n FROM exam_record').get().n,
  practice_session: db.prepare('SELECT COUNT(*) AS n FROM practice_session').get().n,
  question: db.prepare('SELECT COUNT(*) AS n FROM question').get().n,
  exam: db.prepare('SELECT COUNT(*) AS n FROM exam').get().n,
  favorite: db.prepare('SELECT COUNT(*) AS n FROM favorite').get().n,
  note: db.prepare('SELECT COUNT(*) AS n FROM note').get().n
};

/* 1. 删除冒烟测试账号及其数据 */
const st = db.prepare("SELECT id FROM user WHERE username='smoketest'").get();
if (st) {
  for (const t of ['user_answer', 'wrong_book', 'favorite', 'note', 'exam_record', 'practice_session', 'user_settings']) {
    db.prepare(`DELETE FROM ${t} WHERE user_id=?`).run(st.id);
  }
  db.prepare('DELETE FROM user WHERE id=?').run(st.id);
  console.log('  · 已删除冒烟测试账号 smoketest 及其数据');
}

/* 2. 删除联调过程创建的测试题目（软删除的物理清理） */
const testNos = ['SRV-900', 'HMI-900', 'HMI-905', 'BAD-001', 'BAD-002'];
let qDel = 0;
for (const no of testNos) {
  const r = db.prepare('DELETE FROM question WHERE question_no=?').run(no);
  qDel += r.changes;
}
console.log(`  · 已清理测试题目 ${qDel} 道`);

/* 3. 删除联调创建的测试考试任务 */
const t = db.prepare("DELETE FROM exam WHERE title LIKE '%联调测试%' OR title LIKE '%自测%'").run();
console.log(`  · 已清理测试考试任务 ${t.changes} 个`);

/* 4. 恢复被测试改动的题目状态 */
const restored = db.prepare("UPDATE question SET status='published' WHERE status!='published' AND deleted_at IS NULL").run();
console.log(`  · 已恢复题目状态 ${restored.changes} 道`);

/* 5. 学习数据（可选保留，便于演示） */
if (!keepLearner) {
  for (const table of ['user_answer', 'wrong_book', 'exam_record', 'practice_session', 'favorite', 'note']) {
    db.prepare(`DELETE FROM ${table}`).run();
  }
  db.prepare('UPDATE question SET usage_count=0, right_count=0').run();
  console.log('  · 已清空全部学习数据（答题/错题/考试/练习/收藏/笔记）');
}

/* 6. 审计日志保留但标注清理时点 */
db.prepare("INSERT INTO audit_log (actor_id,actor_name,action,entity,entity_id,details,created_at) VALUES (1,'系统','system.reset','system',NULL,'{\"note\":\"联调数据清理\"}',datetime('now','localtime'))").run();

const after = {
  user: db.prepare('SELECT COUNT(*) AS n FROM user').get().n,
  question: db.prepare('SELECT COUNT(*) AS n FROM question').get().n,
  questionPublished: db.prepare("SELECT COUNT(*) AS n FROM question WHERE status='published' AND deleted_at IS NULL").get().n,
  exam: db.prepare('SELECT COUNT(*) AS n FROM exam').get().n,
  user_answer: db.prepare('SELECT COUNT(*) AS n FROM user_answer').get().n,
  wrong_book: db.prepare('SELECT COUNT(*) AS n FROM wrong_book').get().n,
  exam_record: db.prepare('SELECT COUNT(*) AS n FROM exam_record').get().n
};

console.log('\n  清理前 → 清理后：');
console.log('    题目        ' + before.question + ' → ' + after.questionPublished + '（已上线）');
console.log('    答题记录    ' + before.user_answer + ' → ' + after.user_answer);
console.log('    错题本      ' + before.wrong_book + ' → ' + after.wrong_book);
console.log('    考试答卷    ' + before.exam_record + ' → ' + after.exam_record);
console.log('    练习会话    ' + before.practice_session + ' → 0');
console.log('    考试任务    ' + before.exam + ' → ' + after.exam);
console.log('    账号        ' + after.user + ' 个（演示账号）\n');
db.close();
