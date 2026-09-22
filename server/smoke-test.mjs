/**
 * 后端接口冒烟测试
 *   覆盖：认证、权限隔离、仪表盘、组卷判题、错题本、收藏笔记、考试全流程、管理端
 *   用法：node server/smoke-test.mjs [baseUrl]
 *
 * 测试使用独立账号 smoketest（每次运行前清理其学习数据），不影响演示账号。
 */
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import url from 'node:url';

const BASE = process.argv[2] || 'http://localhost:8090';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const DB_FILE = process.env.IQZ_DB || path.join(here, 'quiz.db');

let pass = 0, fail = 0;
const failures = [];
const results = [];

function check(name, cond, detail) {
  if (cond) { pass++; results.push(`  ✓ ${name}`); }
  else { fail++; failures.push(`${name}${detail ? ' → ' + detail : ''}`); results.push(`  ✗ ${name}${detail ? '  → ' + detail : ''}`); }
}

async function api(method, p, { token, body } = {}) {
  const res = await fetch(BASE + p, {
    method,
    headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}),
    body: body ? JSON.stringify(body) : undefined
  });
  let json = null;
  try { json = await res.json(); } catch { /* ignore */ }
  return { status: res.status, code: json && json.code, data: json && json.data, message: json && json.message, raw: json };
}

/* ---------- 准备：清理测试账号数据 ---------- */
function resetTestUser() {
  const db = new DatabaseSync(DB_FILE);
  const u = db.prepare("SELECT id FROM user WHERE username='smoketest'").get();
  if (u) {
    for (const t of ['user_answer', 'wrong_book', 'favorite', 'note', 'exam_record', 'practice_session']) {
      db.prepare(`DELETE FROM ${t} WHERE user_id=?`).run(u.id);
    }
  }
  db.close();
}

async function ensureTestUser() {
  const admin = await api('POST', '/api/auth/login', { body: { username: 'admin', password: 'Admin@123' } });
  if (!admin.data) throw new Error('admin 登录失败：' + admin.message);
  const list = await api('GET', '/api/admin/users', { token: admin.data.token });
  if (!list.data.items.some(u => u.username === 'smoketest')) {
    await api('POST', '/api/admin/users', {
      token: admin.data.token,
      body: { username: 'smoketest', password: 'Smoke@123', name: '自测账号', role: 'employee', dept: '质量保障' }
    });
  }
  return admin.data.token;
}

/* ============================ 主流程 ============================ */
console.log('\n=========== 汇川刷题工具 · 后端接口冒烟测试 ===========\n');
resetTestUser();
const adminToken = await ensureTestUser();

/* ---------- 1. 认证与权限 ---------- */
console.log('【1】登录鉴权与角色权限');
const loginEmp = await api('POST', '/api/auth/login', { body: { username: 'smoketest', password: 'Smoke@123' } });
check('员工账号登录成功', loginEmp.code === 0 && !!loginEmp.data.token);
const empToken = loginEmp.data.token;

const badLogin = await api('POST', '/api/auth/login', { body: { username: 'smoketest', password: 'wrong' } });
check('错误密码被拒绝（401）', badLogin.status === 401 && badLogin.code === 1002);

const noToken = await api('GET', '/api/dashboard/summary');
check('未携带 token 被拒绝（401）', noToken.status === 401);

const me = await api('GET', '/api/auth/me', { token: empToken });
check('获取当前用户与权限', me.code === 0 && me.data.role === 'employee' && me.data.permissions.includes('quiz'));
check('employee 不含 bank.write 权限', !me.data.permissions.includes('bank.write'));

const meta = await api('GET', '/api/meta', { token: empToken });
check('元数据含五大品类', meta.code === 0 && meta.data.categories.length === 5);
check('元数据难度为入门/中级/高级', meta.data.difficulties.map(d => d.key).join(',') === 'beginner,intermediate,advanced');
check('元数据分值权重 1/1.5/1/1.5/2/3', JSON.stringify(meta.data.typeScores) === '{"single":1,"multi":1.5,"judge":1,"fill":1.5,"short":2,"scenario":3}');

/* ---------- 2. 密级隔离（核心安全要求） ---------- */
console.log('\n【2】密级隔离（后端强制过滤）');
const tokens = {};
for (const [user, pwd, role] of [['admin', 'Admin@123', 'super_admin'], ['engineer01', 'Engineer@123', 'employee'], ['partner01', 'Partner@123', 'partner']]) {
  const r = await api('POST', '/api/auth/login', { body: { username: user, password: pwd } });
  tokens[role] = r.data.token;
}
const sums = {};
for (const role of Object.keys(tokens)) {
  const s = await api('GET', '/api/dashboard/summary', { token: tokens[role] });
  sums[role] = s.data.bankTotal;
}
// 以实际密级分布为期望基准（题库会随批次扩充，避免硬编码题数）
const ovBase = await api('GET', '/api/admin/overview', { token: tokens.super_admin });
const bySec = ovBase.data.bySecurity;
const expectEmployee = bySec.public + bySec.internal;
const expectPartner = bySec.public;
check('超级管理员可见全部题库', sums.super_admin === ovBase.data.total, `实际 ${sums.super_admin} / 全库 ${ovBase.data.total}`);
check('内部员工可见 = 公开 + 内部', sums.employee === expectEmployee, `实际 ${sums.employee} / 期望 ${expectEmployee}`);
check('代理商/客户可见 = 仅公开', sums.partner === expectPartner, `实际 ${sums.partner} / 期望 ${expectPartner}`);
check('密级隔离严格递减', sums.partner < sums.employee && sums.employee < sums.super_admin,
  `${sums.super_admin} > ${sums.employee} > ${sums.partner}`);

// 越权直取涉密题
const confRow = await api('GET', '/api/admin/questions?security=confidential&page_size=1', { token: adminToken });
const confId = confRow.data.items[0].questionId;
const leak = await api('GET', `/api/questions/${confId}`, { token: tokens.partner });
check('客户直接请求涉密题被拒（403）', leak.status === 403 && leak.code === 1003);
const own = await api('GET', `/api/questions/${confId}`, { token: tokens.super_admin });
check('超管可正常读取涉密题', own.code === 0);

// 越权访问管理端
const forbidden = await api('GET', '/api/admin/questions', { token: tokens.employee });
check('员工访问管理端题库被拒（403）', forbidden.status === 403 && forbidden.code === 1003);
const forbidden2 = await api('GET', '/api/admin/users', { token: tokens.employee });
check('员工访问用户管理被拒（403）', forbidden2.status === 403);

/* ---------- 3. 刷题：组卷与判题 ---------- */
console.log('\n【3】刷题训练：组卷、判题、自动入错题本');
const sessionId = 'smoke_' + Date.now();
const paper = await api('POST', '/api/practice/paper', { token: empToken, body: { mode: 'random', count: 10, sessionId } });
check('组卷成功返回 10 题', paper.code === 0 && paper.data.items.length === 10);
check('组卷响应不含答案（防作弊）', paper.data.items.every(i => i.answer === undefined && i.explanation === undefined));
check('组卷响应含选项与分值权重', paper.data.items.every(i => i.options !== undefined && i.scoreWeight > 0));

const q1 = paper.data.items.find(i => i.type === 'single' || i.type === 'judge');
const detailFull = await api('GET', `/api/questions/${q1.questionId}`, { token: empToken });
const rightAns = detailFull.data.answer;
const wrongKey = (q1.type === 'judge' ? ['T', 'F'] : q1.options.map(o => o.key)).find(k => !rightAns.includes(k));

const ansWrong = await api('POST', '/api/practice/answer', {
  token: empToken, body: { sessionId, questionId: q1.questionId, mode: 'practice', userAnswer: [wrongKey], durationSec: 8 }
});
check('答错被判为错误', ansWrong.code === 0 && ansWrong.data.isCorrect === false);
check('答错返回正确答案与解析', !!ansWrong.data.correctAnswer && !!ansWrong.data.explanation);
check('答错自动进入错题本', ansWrong.data.wrongBook.inWrongBook === true && ansWrong.data.wrongBook.wrongCount === 1);

const ansRight = await api('POST', '/api/practice/answer', {
  token: empToken, body: { sessionId, questionId: q1.questionId, mode: 'wrong_review', userAnswer: rightAns, durationSec: 6 }
});
check('重做正确判为正确', ansRight.data.isCorrect === true);
check('重做正确后错题标记为已掌握', ansRight.data.wrongBook.status === 'mastered');

const ansWrong2 = await api('POST', '/api/practice/answer', {
  token: empToken, body: { sessionId, questionId: q1.questionId, mode: 'practice', userAnswer: [wrongKey], durationSec: 5 }
});
check('再次答错后回到待攻克且次数累加', ansWrong2.data.wrongBook.inWrongBook === true && ansWrong2.data.wrongBook.wrongCount === 2);

// 主观题自评：显式组一份只含主观题的卷，避免随机卷抽不到主观题（题库扩充后主观题占比下降）
const subjPaper = await api('POST', '/api/practice/paper', {
  token: empToken, body: { mode: 'random', types: ['short', 'scenario'], count: 2, sessionId: sessionId + '_subj' }
});
const subj = subjPaper.data.items[0];
check('可定向抽取主观题', !!subj && (subj.type === 'short' || subj.type === 'scenario'));
const subjAns = await api('POST', '/api/practice/answer', {
  token: empToken, body: { sessionId, questionId: subj.questionId, mode: 'practice', userAnswer: '自测作答内容', durationSec: 20 }
});
check('主观题首次提交返回参考答案且待自评', subjAns.data.isCorrect === null && subjAns.data.needsSelfGrade === true && !!subjAns.data.correctAnswer);

const finish = await api('POST', `/api/practice/sessions/${sessionId}/finish`, {
  token: empToken, body: { durationSec: 120, selfGrades: { [subj.questionId]: true } }
});
check('结束练习返回小结', finish.code === 0 && finish.data.total >= 3);
check('主观题自评后计入得分', finish.data.pending === 0 && finish.data.right >= 1);

/* ---------- 4. 错题本 / 收藏 / 笔记 ---------- */
console.log('\n【4】错题本、收藏、笔记');
const wb = await api('GET', '/api/wrong-book?status=open', { token: empToken });
check('错题本返回待攻克错题', wb.code === 0 && wb.data.total >= 1);
check('错题本含正确答案与解析', wb.data.items.every(i => i.correctAnswer !== undefined && i.explanation !== undefined));
check('错题本含错误次数与品类', wb.data.items.every(i => i.wrongCount >= 1 && !!i.categoryName));

const fav = await api('POST', '/api/favorites', { token: empToken, body: { questionId: q1.questionId } });
check('收藏成功', fav.code === 0);
const favList = await api('GET', '/api/favorites', { token: empToken });
check('收藏列表含刚收藏的题', favList.data.total === 1 && favList.data.items[0].questionId === q1.questionId);

const noteSave = await api('PUT', `/api/notes/${q1.questionId}`, { token: empToken, body: { content: '自测笔记：该题考察选型参数。' } });
check('保存笔记成功', noteSave.code === 0 && noteSave.data.content.includes('自测笔记'));
const noteGet = await api('GET', `/api/notes/${q1.questionId}`, { token: empToken });
check('读取笔记一致', noteGet.data.content === noteSave.data.content);

const wbDel = await api('DELETE', `/api/wrong-book/${q1.questionId}`, { token: empToken });
check('移出错题本成功', wbDel.data.removed === true);

/* ---------- 5. 仪表盘统计 ---------- */
console.log('\n【5】仪表盘统计');
const sum = await api('GET', '/api/dashboard/summary', { token: empToken });
check('概览含四张卡片所需字段', ['bankTotal', 'coverage', 'rate', 'wrongOpen', 'examCount', 'practiceCount', 'todayAnswered', 'dailyGoal', 'streak'].every(k => k in sum.data));
check('今日答题数已累计', sum.data.todayAnswered >= 3, '实际 ' + sum.data.todayAnswered);

const ana = await api('GET', '/api/dashboard/analytics?trendDays=14', { token: empToken });
check('雷达图返回五个品类', ana.data.radar.length === 5);
check('趋势图返回 14 天', ana.data.trend.length === 14);
const noData = ana.data.radar.filter(r => r.answered === 0);
check('未作答品类 rate 为 null（不是 0）', noData.every(r => r.rate === null), '空品类 ' + noData.map(r => r.category).join(','));
const hasData = ana.data.radar.filter(r => r.answered > 0);
check('已作答品类 rate 为数值', hasData.every(r => typeof r.rate === 'number'));
check('品类明细含覆盖率', ana.data.categoryDetail.every(c => 'coverage' in c && 'total' in c));

const rec = await api('GET', '/api/dashboard/recommend?limit=8&strategy=weak', { token: empToken });
check('推荐接口返回题目', rec.code === 0 && rec.data.items.length > 0 && rec.data.items.length <= 8);
check('推荐题目含推荐理由', rec.data.items.every(i => !!i.reason));

/* ---------- 6. 考试全流程 ---------- */
console.log('\n【6】模拟考试全流程');
const tasks = await api('GET', '/api/exam-tasks', { token: empToken });
check('员工可见考试任务', tasks.code === 0 && tasks.data.items.length >= 1);
const task = tasks.data.items[0];

const taskForPartner = await api('GET', '/api/exam-tasks', { token: tokens.partner });
check('任务按角色下发（partner 亦可见）', taskForPartner.data.items.length >= 1);

const start = await api('POST', '/api/exams/start', { token: empToken, body: { taskId: task.taskId } });
check('开始考试生成答卷与快照', start.code === 0 && start.data.recordId > 0 && start.data.items.length > 0);
check('开考响应不含答案', start.data.items.every(i => i.answer === undefined));
check('服务端下发剩余时间', start.data.remainingSec > 0 && !!start.data.deadlineAt);
const recordId = start.data.recordId;

// 作答：客观题全选正确答案，主观题填写文本
const answers = {};
for (const item of start.data.items) {
  const full = await api('GET', `/api/questions/${item.questionId}`, { token: empToken });
  if (item.type === 'short' || item.type === 'scenario') answers[item.questionId] = '自测作答：按现象与故障码逐步排查。';
  else answers[item.questionId] = full.data.answer;
}
const saveAns = await api('PUT', `/api/exams/${recordId}/answers`, { token: empToken, body: { answers } });
check('保存作答支持续考', saveAns.code === 0 && saveAns.data.saved === true);

// 断点续考：重新拉取答卷
const resume = await api('GET', `/api/exams/${recordId}`, { token: empToken });
check('刷新后可恢复作答与剩余时间', resume.code === 0 && Object.keys(resume.data.answers).length === Object.keys(answers).length && resume.data.remainingSec > 0);

const submit = await api('POST', `/api/exams/${recordId}/submit`, { token: empToken, body: { answers, autoSubmit: false } });
check('交卷成功并返回成绩', submit.code === 0 && typeof submit.data.percent === 'number');
check('客观题全部答对（服务端判分正确）', submit.data.wrong === 0, '错题数 ' + submit.data.wrong);
check('交卷返回待自评项与计数一致', submit.data.pendingItems.length === submit.data.pending);
const beforePercent = submit.data.percent;
const hasSubjective = submit.data.pending > 0;

const selfGrade = await api('POST', `/api/exams/${recordId}/self-grade`, {
  token: empToken, body: { grades: submit.data.pendingItems.map(p => ({ questionId: p.questionId, isCorrect: true })) }
});
if (hasSubjective) {
  check('主观题自评后成绩重算', selfGrade.code === 0 && selfGrade.data.percent >= beforePercent && selfGrade.data.pending === 0, `${beforePercent} → ${selfGrade.data.percent}`);
  check('客观题全对 + 主观题自评满分 = 100 分', selfGrade.data.percent === 100, '实际 ' + selfGrade.data.percent);
} else {
  check('该随机卷无主观题，跳过自评重算断言（由主观题定向测试覆盖）', selfGrade.code === 0);
}

const report = await api('GET', `/api/exams/${recordId}/report`, { token: empToken });
check('考试报告含逐题明细', report.code === 0 && report.data.details.length === start.data.items.length);
check('报告含分品类表现', report.data.categoryBreakdown.length >= 1);
check('报告明细含题干与解析', report.data.details.every(d => d.stem && d.explanation !== undefined));

const records = await api('GET', '/api/exams/records', { token: empToken });
check('我的考试记录可查', records.code === 0 && records.data.total >= 1 && records.data.items[0].percent === 100);

const dupSubmit = await api('POST', `/api/exams/${recordId}/submit`, { token: empToken, body: { answers } });
check('重复交卷被拒绝', dupSubmit.code !== 0);

/* ---------- 7. 管理端 ---------- */
console.log('\n【7】管理端题库与报表');
const overview = await api('GET', '/api/admin/overview', { token: adminToken });
check('管理概览返回分布数据', overview.code === 0 && overview.data.total >= 170 && overview.data.byCategory.servo >= 34);
const secSum = Object.values(overview.data.bySecurity).reduce((a, b) => a + b, 0);
check('概览密级分布自洽（三项之和 = 题量）',
  secSum === overview.data.total && overview.data.bySecurity.public > 0,
  JSON.stringify(overview.data.bySecurity) + ' 合计 ' + secSum + ' vs total ' + overview.data.total);

const bankList = await api('GET', '/api/admin/questions?category=plc&page_size=5', { token: adminToken });
check('题库筛选（品类）生效', bankList.code === 0 && bankList.data.total >= 34 && bankList.data.items.every(i => i.category === 'plc'));
check('题库列表含使用统计', bankList.data.items.every(i => 'usageCount' in i && 'wrongRate' in i));

const kw = await api('GET', '/api/admin/questions?keyword=SV660&page_size=3', { token: adminToken });
check('关键词检索生效', kw.code === 0 && kw.data.total > 0);

// 新建 → 转草稿 → 上线 → 删除
const created = await api('POST', '/api/admin/questions', {
  token: adminToken,
  body: {
    questionNo: 'SRV-900', category: 'servo', type: 'single', difficulty: 'intermediate', security: 'internal',
    stem: '【自测】SV660P 伺服位置控制模式下电子齿轮比的作用是？',
    options: { A: '改变额定转速', B: '调整指令脉冲与实际位移的比例', C: '设置过载阈值', D: '决定编码器分辨率' },
    answer: ['B'], explanation: '电子齿轮比用于换算指令脉冲与实际位移，A/C/D 分别由额定参数、保护参数与编码器硬件决定。',
    source: { title: '自测资料', chapter: '第 7 章', url: 'https://www.inovance.com/' },
    tags: ['SV660P'], audience: ['engineer'], status: 'published'
  }
});
check('新建题目成功', created.code === 0 && created.data.questionNo === 'SRV-900');
const newId = created.data.questionId;

const dupCreate = await api('POST', '/api/admin/questions', {
  token: adminToken, body: { questionNo: 'SRV-900', category: 'servo', type: 'single', stem: '重复题号测试', options: { A: 'a', B: 'b' }, answer: ['A'] }
});
check('重复题号被拒绝（409）', dupCreate.status === 409);

const toDraft = await api('PATCH', `/api/admin/questions/${newId}/status`, { token: adminToken, body: { status: 'draft' } });
check('转草稿成功', toDraft.data.status === 'draft');
const draftVisible = await api('POST', '/api/practice/paper', { token: empToken, body: { mode: 'sequential', count: 0, sessionId: 'draft_check' } });
check('草稿题不参与组卷', !draftVisible.data.items.some(i => i.questionNo === 'SRV-900'));
const toPub = await api('PATCH', `/api/admin/questions/${newId}/status`, { token: adminToken, body: { status: 'published' } });
check('重新上线成功', toPub.data.status === 'published');
const delQ = await api('DELETE', `/api/admin/questions/${newId}`, { token: adminToken });
check('删除题目（软删）成功', delQ.data.deleted === true);

// 批量导入（含错误行）
const imp = await api('POST', '/api/admin/questions/import', {
  token: adminToken,
  body: {
    questions: [
      { id: 'HMI-900', category: 'hmi', type: 'judge', difficulty: 'beginner', security: 'public', stem: '【自测】ITS7000 标准型前面板防护等级为 IP66。', answer: ['T'], explanation: 'ITS7000 标准型前面板 IP66、后盖板 IP20，需注意柜内安装环境。', source: { title: '自测', chapter: '', url: '' }, tags: ['ITS7000'], audience: ['sales'] },
      { id: 'BAD-001', category: 'hmi', type: 'single', difficulty: 'impossible', security: 'public', stem: '非法测试题内容', options: { A: 'a' }, answer: ['Z'], explanation: '' }
    ]
  }
});
check('批量导入返回报告', imp.code === 0 && (imp.data.imported + imp.data.updated) === 1 && imp.data.errorCount === 1);
check('非法行被拦截并给出定位', imp.data.errors[0].row === 2 && imp.data.errors[0].field === 'difficulty');
const cleanImp = await api('DELETE', `/api/admin/questions/${(await api('GET', '/api/admin/questions?keyword=HMI-900', { token: adminToken })).data.items[0].questionId}`, { token: adminToken });
check('清理导入的测试题', cleanImp.data.deleted === true);

const repQ = await api('GET', '/api/admin/reports/questions', { token: adminToken });
check('题库维度报表', repQ.code === 0 && repQ.data.byCategory.length === 5 && repQ.data.total >= 170);
const QTYPES = ['single', 'multi', 'judge', 'fill', 'short', 'scenario'];
check('报表题型明细自洽（各题型之和 = 该品类题量）',
  repQ.data.byCategory.every(c => QTYPES.every(t => typeof c[t] === 'number')
    && QTYPES.reduce((s, t) => s + c[t], 0) === c.total));

const repU = await api('GET', '/api/admin/reports/users', { token: adminToken });
check('团队报表可出数', repU.code === 0 && repU.data.byUser.length >= 4 && repU.data.byDept.length >= 1);
check('团队报表排除外部客户', !repU.data.byUser.some(u => u.role === 'partner'));

const diff = await api('GET', '/api/admin/reports/question-difficulty?limit=5', { token: adminToken });
check('逐题正确率榜可出数', diff.code === 0 && diff.data.items.length >= 1 && diff.data.items.every(i => i.wrongRate >= 0));

const logs = await api('GET', '/api/admin/audit-logs', { token: adminToken });
check('操作日志留痕', logs.code === 0 && logs.data.total > 0);
check('日志包含题目新增与导入动作', logs.data.items.some(i => i.action === 'question.create') && logs.data.items.some(i => i.action === 'question.import'));

const users = await api('GET', '/api/admin/users', { token: adminToken });
check('用户列表可查', users.code === 0 && users.data.total >= 6);

/* ---------- 8. 任务发布 ---------- */
console.log('\n【8】考试任务发布与角色下发');
const newTask = await api('POST', '/api/admin/exam-tasks', {
  token: adminToken,
  body: { title: '【自测】PLC 专项小测', category: 'plc', questionCount: 10, minutes: 15, passScore: 70, roles: ['employee'], allowRetake: true }
});
check('发布考试任务成功', newTask.code === 0 && newTask.data.taskId > 0);
const empTasks = await api('GET', '/api/exam-tasks', { token: empToken });
check('员工可见新任务', empTasks.data.items.some(t => t.taskId === newTask.data.taskId));
const partnerTasks = await api('GET', '/api/exam-tasks', { token: tokens.partner });
check('限定 employee 的任务对客户不可见', !partnerTasks.data.items.some(t => t.taskId === newTask.data.taskId));
const delTask = await api('DELETE', `/api/admin/exam-tasks/${newTask.data.taskId}`, { token: adminToken });
check('删除考试任务成功', delTask.data.deleted === true);

/* ---------- 汇总 ---------- */
console.log('\n' + results.join('\n'));
console.log('\n==================================================');
console.log(`  通过 ${pass} 项，失败 ${fail} 项，共 ${pass + fail} 项`);
if (fail) {
  console.log('\n  失败明细：');
  failures.forEach(f => console.log('   ✗ ' + f));
}
console.log('==================================================\n');
process.exit(fail ? 1 : 0);
