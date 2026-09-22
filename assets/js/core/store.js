/* ==========================================================================
   汇川产品刷题工具 · 数据存储与权限层 (store.js)
   依赖：无（纯浏览器端，localStorage 持久化，file:// 与内网静态服务器均可用）
   ========================================================================== */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'iqz.state.v1';

  /* ---------------- 品类 / 题型 / 难度 / 角色 元数据 ---------------- */

  var CATEGORIES = [
    { key: 'servo', name: '伺服系统', short: '伺服', color: '#1a72cf', desc: '伺服驱动器 + 伺服电机，定位、调速、张力等运动控制场景' },
    { key: 'inverter', name: '变频器', short: '变频器', color: '#12996b', desc: '通用/专用变频器，风机水泵、起重、空压机等调速场景' },
    { key: 'plc', name: '可编程逻辑控制器', short: 'PLC', color: '#7a5af5', desc: '小型/中大型 PLC 与智能控制器，逻辑控制与运动控制' },
    { key: 'hmi', name: 'HMI 人机界面', short: 'HMI', color: '#d98412', desc: '触摸屏与组态，画面设计、通信连接与数据记录' },
    { key: 'io', name: 'IO 系统', short: 'IO', color: '#0e9aa7', desc: '远程 IO / 分布式 IO，现场信号采集与总线扩展' }
  ];

  var TYPES = [
    { key: 'single', name: '单选题' },
    { key: 'multi', name: '多选题' },
    { key: 'judge', name: '判断题' },
    { key: 'fill', name: '填空题' },
    { key: 'short', name: '简答题' },
    { key: 'scenario', name: '场景分析题' }
  ];

  /** 客观题题型：可自动判分 */
  var OBJECTIVE_TYPES = ['single', 'multi', 'judge', 'fill'];
  /** 仅考查客观题的人群：销售与采购不做主观论述题（见 BANK_SCHEMA.md §2.1） */
  var OBJECTIVE_ONLY_ROLES = ['sales', 'purchase'];

  var DIFFS = [
    { key: 1, name: '初级', desc: '新人入门 / 销售应知应会' },
    { key: 2, name: '中级', desc: '工程师日常调试与选型' },
    { key: 3, name: '高级', desc: '疑难故障与方案级判断' }
  ];

  var ROLES = [
    { key: 'sales', name: '销售' },
    { key: 'engineer', name: '技术' },
    { key: 'purchase', name: '采购' },
    { key: 'partner', name: '合作客户' }
  ];

  /** 历史人群标识 → 当前人群（旧题库中的 service 统一并入技术） */
  var ROLE_ALIAS = { service: 'engineer' };

  var SECURITY = [
    { key: 'public', name: '公开' },
    { key: 'internal', name: '内部' },
    { key: 'confidential', name: '涉密' }
  ];

  /* ---------------- 知识库常量（V2.0） ---------------- */

  /** 二级分类：与 docs/知识库模块设计.md §2.1 保持一致 */
  var KB_TOPICS = [
    { key: 'intro', name: '产品介绍', icon: 'info' },
    { key: 'selection', name: '选型知识', icon: 'check' },
    { key: 'param', name: '参数设置', icon: 'settings' },
    { key: 'install', name: '安装调试', icon: 'zap' },
    { key: 'fault', name: '常见故障', icon: 'wrong' },
    { key: 'faq', name: '客户高频问答', icon: 'flag' },
    { key: 'script', name: '行业应用话术', icon: 'star' }
  ];

  var KB_STATUS = [
    { key: 'published', name: '已上线' },
    { key: 'draft', name: '草稿' },
    { key: 'archived', name: '已归档' }
  ];

  var KB_BLOCK_TYPES = [
    { key: 'h', name: '小标题' },
    { key: 'p', name: '段落' },
    { key: 'list', name: '列表' },
    { key: 'table', name: '表格' },
    { key: 'tip', name: '提示' },
    { key: 'steps', name: '步骤' },
    { key: 'faq', name: '问答' },
    { key: 'script', name: '话术对比' },
    { key: 'code', name: '代码' },
    { key: 'img', name: '图片' }
  ];

  /* ---------------- 账号角色与权限 ---------------- */

  var ROLE_DEFS = {
    super_admin: {
      label: '超级管理员', level: 4, color: '#d93a3f',
      desc: '题库全生命周期管理、涉密题库与全量数据可见',
      perms: ['quiz', 'exam', 'bank.read', 'bank.write', 'bank.review', 'bank.import',
        'task.write', 'report.all', 'report.self', 'user.manage', 'security.confidential']
    },
    trainer: {
      label: '培训讲师', level: 3, color: '#0b5cab',
      desc: '题库维护与审核、考试任务发布、团队数据查看',
      perms: ['quiz', 'exam', 'bank.read', 'bank.write', 'bank.review', 'bank.import',
        'task.write', 'report.all', 'report.self', 'security.confidential']
    },
    employee: {
      label: '内部员工', level: 2, color: '#12996b',
      desc: '全部内部题库刷题、参加考试、查看个人数据',
      perms: ['quiz', 'exam', 'report.self', 'security.internal']
    },
    partner: {
      label: '代理商 / 客户', level: 1, color: '#d98412',
      desc: '仅公开题库（对外赋能版），不接触内部资料与团队数据',
      perms: ['quiz', 'exam', 'report.self', 'security.public']
    }
  };

  var SECURITY_RANK = { public: 1, internal: 2, confidential: 3 };

  /* ---------------- 默认状态 ---------------- */

  function nowISO() { return new Date().toISOString(); }

  function todayKey(d) {
    d = d || new Date();
    var m = String(d.getMonth() + 1), day = String(d.getDate());
    return d.getFullYear() + '-' + (m.length < 2 ? '0' + m : m) + '-' + (day.length < 2 ? '0' + day : day);
  }

  function defaultState() {
    return {
      version: 1,
      createdAt: nowISO(),
      user: null,
      customQuestions: [],
      questionStatus: {},   // qid -> 'draft' | 'published' | 'archived'
      questionEdits: {},    // qid -> 覆盖字段（管理端编辑内置题）
      deletedQuestions: [],
      progress: {},         // qid -> {seen, right, wrong, fav, lastAt, lastResult}
      wrong: {},            // qid -> {count, lastAt, resolved, note}
      practiceLog: [],      // 练习记录
      exams: [],            // 考试记录
      tasks: [],            // 考试任务
      notes: {},            // 题目笔记
      feedback: [],         // 题目反馈（学员报错 → 管理端处理）
      knowledge: {},        // 知识编号 -> 学习记录 {readSeconds, readCount, finished, fav, ...}
      customKnowledge: [],  // 管理端新增的知识条目
      knowledgeEdits: {},   // 知识编号 -> 覆盖字段（管理端编辑内置知识）
      knowledgeStatus: {},  // 知识编号 -> 'draft' | 'published' | 'archived'
      knowledgeDeleted: [],
      settings: { dailyGoal: 20, instantJudge: true, autoNext: false, shuffleOptions: false },
      meta: { activeDates: [], streak: 0, lastActiveDate: null },
      audit: []             // 管理端操作日志
    };
  }

  /* ---------------- 存储读写（localStorage 不可用时降级内存） ---------------- */

  var memoryFallback = null;
  var storageOK = (function () {
    try {
      var k = '__iqz_test__';
      global.localStorage.setItem(k, '1');
      global.localStorage.removeItem(k);
      return true;
    } catch (e) { return false; }
  })();

  function readRaw() {
    if (!storageOK) return memoryFallback;
    try {
      var s = global.localStorage.getItem(STORAGE_KEY);
      return s ? JSON.parse(s) : null;
    } catch (e) {
      console.warn('[store] 读取本地数据失败：', e);
      return null;
    }
  }

  function writeRaw(obj) {
    if (!storageOK) { memoryFallback = obj; return; }
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {
      console.warn('[store] 写入本地数据失败：', e);
      throw new Error('本地存储写入失败，可能是浏览器隐私模式或存储空间已满');
    }
  }

  function migrate(s) {
    var d = defaultState();
    if (!s || typeof s !== 'object') return d;
    for (var k in d) {
      if (!(k in s)) s[k] = d[k];
    }
    // 兼容：对象型字段缺失时补齐
    ['progress', 'wrong', 'notes', 'questionStatus', 'questionEdits'].forEach(function (k) {
      if (!s[k] || typeof s[k] !== 'object') s[k] = {};
    });
    ['practiceLog', 'exams', 'tasks', 'customQuestions', 'deletedQuestions', 'audit'].forEach(function (k) {
      if (!Array.isArray(s[k])) s[k] = [];
    });
    if (!Array.isArray(s.feedback)) s.feedback = [];
    if (!s.settings || typeof s.settings !== 'object') s.settings = d.settings;
    if (!s.meta || typeof s.meta !== 'object') s.meta = d.meta;
    return s;
  }

  var state = migrate(readRaw());
  var listeners = [];

  function emit(evt) {
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](evt || {}, state); } catch (e) { console.error(e); }
    }
  }

  function save() {
    // 记录活跃日期与连续天数
    var t = todayKey();
    if (state.meta.lastActiveDate !== t) {
      var y = new Date(); y.setDate(y.getDate() - 1);
      state.meta.streak = (state.meta.lastActiveDate === todayKey(y)) ? (state.meta.streak || 0) + 1 : 1;
      state.meta.lastActiveDate = t;
      if (state.meta.activeDates.indexOf(t) < 0) state.meta.activeDates.push(t);
      if (state.meta.activeDates.length > 400) state.meta.activeDates = state.meta.activeDates.slice(-400);
    }
    writeRaw(state);
    emit({ type: 'save' });
  }

  /* ---------------- 用户与权限 ---------------- */

  function login(name, role, dept) {
    if (!ROLE_DEFS[role]) throw new Error('非法角色');
    state.user = {
      name: (name || '').trim() || '未署名用户',
      role: role,
      dept: (dept || '').trim(),
      loginAt: nowISO()
    };
    save();
    emit({ type: 'login', user: state.user });
    return state.user;
  }

  function logout() {
    state.user = null;
    save();
    emit({ type: 'logout' });
  }

  function user() { return state.user; }

  function roleDef(role) { return ROLE_DEFS[role || (state.user && state.user.role)] || null; }

  function hasPerm(perm) {
    var r = roleDef();
    if (!r) return false;
    return r.perms.indexOf(perm) >= 0;
  }

  /** 当前角色可见的最高密级 */
  function maxSecurity() {
    var r = roleDef();
    if (!r) return 0;
    var max = 0;
    r.perms.forEach(function (p) {
      if (p.indexOf('security.') === 0) {
        var rank = SECURITY_RANK[p.slice(9)] || 0;
        if (rank > max) max = rank;
      }
    });
    return max;
  }

  function canSeeSecurity(sec) {
    return (SECURITY_RANK[sec] || 1) <= maxSecurity();
  }

  /* ---------------- 练习 / 错题 / 收藏 ---------------- */

  function prog(qid) {
    if (!state.progress[qid]) {
      state.progress[qid] = { seen: 0, right: 0, wrong: 0, fav: false, lastAt: null, lastResult: null };
    }
    return state.progress[qid];
  }

  /**
   * 记录一次作答
   * @param {string} qid
   * @param {boolean|null} correct 主观题未自评时传 null
   * @param {object} extra {mode, category}
   */
  function recordAnswer(qid, correct, extra) {
    var p = prog(qid);
    p.seen += 1;
    p.lastAt = nowISO();
    p.lastResult = correct;
    if (correct === true) {
      p.right += 1;
      if (state.wrong[qid] && !state.wrong[qid].resolved) {
        state.wrong[qid].resolved = true;
        state.wrong[qid].resolvedAt = nowISO();
      }
    } else if (correct === false) {
      p.wrong += 1;
      if (!state.wrong[qid]) state.wrong[qid] = { count: 0, lastAt: null, resolved: false, note: '' };
      state.wrong[qid].count += 1;
      state.wrong[qid].lastAt = nowISO();
      state.wrong[qid].resolved = false;
    }
    save();
    emit({ type: 'answer', qid: qid, correct: correct, extra: extra || {} });
  }

  function toggleFav(qid) {
    var p = prog(qid);
    p.fav = !p.fav;
    save();
    emit({ type: 'fav', qid: qid, fav: p.fav });
    return p.fav;
  }

  function favList() {
    return Object.keys(state.progress).filter(function (q) { return state.progress[q].fav; });
  }

  function wrongList(includeResolved) {
    return Object.keys(state.wrong).filter(function (q) {
      return includeResolved ? true : !state.wrong[q].resolved;
    });
  }

  function removeWrong(qid) {
    delete state.wrong[qid];
    save();
  }

  function setNote(qid, text) {
    if (text) state.notes[qid] = text; else delete state.notes[qid];
    save();
  }

  /* ---------------- 题目反馈（本地模式） ---------------- */

  var FEEDBACK_TYPES = [
    { key: 'wrong_answer', name: '答案有误' },
    { key: 'typo', name: '文字错误' },
    { key: 'unclear', name: '表述不清' },
    { key: 'outdated', name: '内容过时' },
    { key: 'other', name: '其它问题' }
  ];

  function addFeedback(fb) {
    if (!Array.isArray(state.feedback)) state.feedback = [];
    var item = {
      id: 'F' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
      questionId: fb.questionId || null,
      questionNo: fb.questionNo || '',
      type: fb.type || 'other',
      content: fb.content || '',
      status: 'open',
      userName: state.user ? state.user.name : '',
      userId: state.user ? state.user.username : '',
      createdAt: nowISO()
    };
    state.feedback.unshift(item);
    if (state.feedback.length > 500) state.feedback.length = 500;
    audit('提交题目反馈 ' + item.questionNo);
    save();
    emit({ type: 'feedback', item: item });
    return item;
  }

  function feedbackList() { return (state.feedback || []).slice(); }

  function resolveFeedback(id) {
    (state.feedback || []).forEach(function (f) {
      if (f.id === id) { f.status = 'resolved'; f.resolvedAt = nowISO(); f.resolvedBy = state.user ? state.user.name : ''; }
    });
    save();
  }

  /* ---------------- 练习记录 ---------------- */

  function addPracticeLog(log) {
    log.id = log.id || ('P' + Date.now().toString(36));
    log.endedAt = nowISO();
    state.practiceLog.unshift(log);
    if (state.practiceLog.length > 500) state.practiceLog.length = 500;
    save();
    emit({ type: 'practice', log: log });
    return log;
  }

  /* ---------------- 考试 ---------------- */

  function addExam(rec) {
    rec.id = rec.id || ('E' + Date.now().toString(36));
    state.exams.unshift(rec);
    if (state.exams.length > 300) state.exams.length = 300;
    save();
    emit({ type: 'exam', exam: rec });
    return rec;
  }

  function examList() { return state.exams.slice(); }

  function taskList() { return state.tasks.slice(); }

  function addTask(task) {
    task.id = task.id || ('T' + Date.now().toString(36));
    task.createdAt = nowISO();
    task.createdBy = state.user ? state.user.name : '系统';
    state.tasks.unshift(task);
    save();
    emit({ type: 'task', task: task });
    return task;
  }

  function updateTask(id, patch) {
    for (var i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].id === id) {
        for (var k in patch) state.tasks[i][k] = patch[k];
        save();
        return state.tasks[i];
      }
    }
    return null;
  }

  function removeTask(id) {
    state.tasks = state.tasks.filter(function (t) { return t.id !== id; });
    save();
  }

  /* ---------------- 管理端：题目状态 ---------------- */

  function setQuestionStatus(qid, status) {
    if (!status || status === 'published') delete state.questionStatus[qid];
    else state.questionStatus[qid] = status;
    audit((status === 'published' ? '恢复上线' : (status === 'draft' ? '转为草稿' : '归档')) + '题目 ' + qid);
    save();
    emit({ type: 'bank' });
  }

  function questionStatus(qid) { return state.questionStatus[qid] || 'published'; }

  function addQuestions(list, replaceExisting) {
    var added = 0, updated = 0;
    list.forEach(function (q) {
      var idx = -1;
      for (var i = 0; i < state.customQuestions.length; i++) {
        if (state.customQuestions[i].id === q.id) { idx = i; break; }
      }
      if (idx >= 0) {
        if (replaceExisting) { state.customQuestions[idx] = q; updated++; }
      } else {
        state.customQuestions.push(q); added++;
      }
    });
    audit('导入题目：新增 ' + added + ' 题，更新 ' + updated + ' 题');
    save();
    emit({ type: 'bank' });
    return { added: added, updated: updated };
  }

  function saveQuestion(q) {
    var idx = -1;
    for (var i = 0; i < state.customQuestions.length; i++) {
      if (state.customQuestions[i].id === q.id) { idx = i; break; }
    }
    if (idx >= 0) state.customQuestions[idx] = q;
    else state.customQuestions.push(q);
    audit('保存题目 ' + q.id);
    save();
    emit({ type: 'bank' });
    return q;
  }

  function deleteQuestion(qid) {
    var before = state.customQuestions.length;
    state.customQuestions = state.customQuestions.filter(function (q) { return q.id !== qid; });
    if (state.customQuestions.length === before) {
      if (state.deletedQuestions.indexOf(qid) < 0) state.deletedQuestions.push(qid);
    }
    audit('删除题目 ' + qid);
    save();
    emit({ type: 'bank' });
  }

  function restoreQuestion(qid) {
    state.deletedQuestions = state.deletedQuestions.filter(function (x) { return x !== qid; });
    save();
    emit({ type: 'bank' });
  }

  /* ---------------- 设置 / 审计 / 数据导入导出 ---------------- */

  function setSettings(patch) {
    for (var k in patch) state.settings[k] = patch[k];
    save();
    emit({ type: 'settings' });
  }

  function settings() { return state.settings; }

  function audit(msg) {
    state.audit.unshift({ at: nowISO(), by: state.user ? state.user.name : '系统', msg: msg });
    if (state.audit.length > 300) state.audit.length = 300;
  }

  function auditLog() { return state.audit.slice(); }

  function exportAll() {
    return JSON.parse(JSON.stringify(state));
  }

  function importAll(obj, merge) {
    if (!obj || typeof obj !== 'object') throw new Error('数据格式不正确');
    if (merge) {
      var incoming = migrate(obj);
      // 合并策略：练习数据以本地为准补充缺失项
      for (var q in incoming.progress) if (!state.progress[q]) state.progress[q] = incoming.progress[q];
      for (var w in incoming.wrong) if (!state.wrong[w]) state.wrong[w] = incoming.wrong[w];
      var ids = {};
      state.customQuestions.forEach(function (q) { ids[q.id] = 1; });
      incoming.customQuestions.forEach(function (q) { if (!ids[q.id]) state.customQuestions.push(q); });
      incoming.exams.forEach(function (e) { state.exams.push(e); });
    } else {
      state = migrate(obj);
    }
    save();
    emit({ type: 'import' });
  }

  function resetProgress() {
    state.progress = {};
    state.wrong = {};
    state.practiceLog = [];
    state.exams = [];
    state.notes = {};
    state.meta = { activeDates: [], streak: 0, lastActiveDate: null };
    audit('清空个人学习数据');
    save();
    emit({ type: 'reset' });
  }

  function resetAll() {
    state = defaultState();
    save();
    emit({ type: 'reset' });
  }

  /* ---------------- 知识库（V2.0） ---------------- */

  /** 合并：内置知识库产物 + 管理端编辑覆盖层 + 自定义条目 + 删除标记 */
  function kbRaw() {
    var base = (global.IqKnowledgeData || []).slice();
    var merged = [], index = {};
    function apply(item) {
      var copy = Object.assign({}, item);
      if (state.knowledgeEdits[item.id]) Object.assign(copy, state.knowledgeEdits[item.id]);
      copy.status = state.knowledgeStatus[item.id] || copy.status || 'published';
      copy.roles = copy.roles || ['engineer'];
      copy.tags = copy.tags || [];
      copy.content = copy.content || [];
      copy.relatedQuestions = copy.relatedQuestions || [];
      return copy;
    }
    base.forEach(function (item) {
      var copy = apply(item);
      merged.push(copy);
      index[item.id] = copy;
    });
    (state.customKnowledge || []).forEach(function (item) {
      if (!item || !item.id) return;
      var copy = apply(item);
      if (index[item.id]) merged[merged.indexOf(index[item.id])] = copy;
      else merged.push(copy);
      index[item.id] = copy;
    });
    var del = {};
    (state.knowledgeDeleted || []).forEach(function (no) { del[no] = 1; });
    return merged.filter(function (it) { return !del[it.id]; });
  }

  /** 当前角色可见条目（密级过滤；管理端可含草稿与归档） */
  function kbVisible(includeUnpublished) {
    return kbRaw().filter(function (it) {
      if (!canSeeSecurity(it.security || 'public')) return false;
      if (!includeUnpublished && (it.status || 'published') !== 'published') return false;
      return true;
    });
  }

  function kbMatch(it, cond) {
    if (cond.category && it.category !== cond.category) return false;
    if (cond.topic && it.topic !== cond.topic) return false;
    if (cond.security && (it.security || 'public') !== cond.security) return false;
    if (cond.status && (it.status || 'published') !== cond.status) return false;
    if (cond.tag && (it.tags || []).indexOf(cond.tag) < 0) return false;
    if (cond.level && Number(it.level) !== Number(cond.level)) return false;
    if (cond.role && (it.roles || []).indexOf(cond.role) < 0) return false;
    var kw = (cond.keyword || '').trim().toLowerCase();
    if (kw) {
      var hay = [it.id, it.title, it.summary, (it.tags || []).join(' '),
        (it.relatedQuestions || []).join(' '), JSON.stringify(it.content || [])].join(' ').toLowerCase();
      if (hay.indexOf(kw) < 0) return false;
    }
    return true;
  }

  function kbSort(list) {
    return list.slice().sort(function (a, b) {
      var sa = a.sortOrder == null ? 999 : Number(a.sortOrder);
      var sb = b.sortOrder == null ? 999 : Number(b.sortOrder);
      return sa - sb || String(a.id).localeCompare(String(b.id), 'zh');
    });
  }

  /** 列表（默认只含已上线且当前角色可见的条目） */
  function kbList(cond) {
    cond = cond || {};
    var list = kbSort(kbVisible(!!cond.includeUnpublished).filter(function (it) { return kbMatch(it, cond); }));
    var size = Number(cond.page_size || cond.pageSize || 0);
    if (!size) return { items: list, total: list.length, page: 1, page_size: list.length };
    var page = Math.max(1, Number(cond.page || 1));
    return {
      items: list.slice((page - 1) * size, page * size),
      total: list.length, page: page, page_size: size
    };
  }

  function kbById(no) {
    var list = kbRaw();
    for (var i = 0; i < list.length; i++) if (list[i].id === no) return list[i];
    return null;
  }

  function kbRecord(no) {
    if (!state.knowledge[no]) {
      state.knowledge[no] = {
        readSeconds: 0, readCount: 0, finished: false, finishedAt: null,
        fav: false, firstReadAt: null, lastReadAt: null
      };
    }
    return state.knowledge[no];
  }

  function kbMeta() {
    var list = kbVisible(false);
    var byCat = {}, byTopic = {}, tagCount = {};
    list.forEach(function (it) {
      byCat[it.category] = (byCat[it.category] || 0) + 1;
      byTopic[it.topic] = (byTopic[it.topic] || 0) + 1;
      (it.tags || []).forEach(function (t) { tagCount[t] = (tagCount[t] || 0) + 1; });
    });
    var myRead = 0, myFinished = 0;
    Object.keys(state.knowledge).forEach(function (no) {
      var r = state.knowledge[no];
      if (r.readCount > 0) myRead++;
      if (r.finished) myFinished++;
    });
    return {
      categories: CATEGORIES.map(function (c) {
        return { key: c.key, name: c.name, short: c.short, color: c.color, count: byCat[c.key] || 0 };
      }),
      topics: KB_TOPICS.map(function (t) { return { key: t.key, name: t.name, count: byTopic[t.key] || 0 }; }),
      tags: Object.keys(tagCount).sort(function (a, b) { return tagCount[b] - tagCount[a]; }).slice(0, 40),
      stats: { total: list.length, byCategory: byCat, byTopic: byTopic, myRead: myRead, myFinished: myFinished }
    };
  }

  /** 新人推荐学习路线：按 level 分三阶段，按 sortOrder 排序 */
  function kbRoute() {
    var list = kbSort(kbVisible(false));
    var stages = [
      { key: 'basic', title: '第一阶段 · 入门必学', desc: '先建立产品地图与型号认知：看得懂型号、说得清定位', items: [] },
      { key: 'skill', title: '第二阶段 · 进阶提升', desc: '选型、参数与故障处理：能独立应对客户常见问题', items: [] },
      { key: 'expert', title: '第三阶段 · 深入拓展', desc: '方案级判断与话术打磨：能主导技术交流', items: [] }
    ];
    list.forEach(function (it) {
      var lv = Number(it.level) || 1;
      var stage = stages[lv >= 3 ? 2 : (lv === 2 ? 1 : 0)];
      var rec = state.knowledge[it.id] || {};
      stage.items.push({
        knowledgeNo: it.id, title: it.title, category: it.category, topic: it.topic,
        readMinutes: it.readMinutes || 5, level: lv, security: it.security || 'public',
        finished: !!rec.finished, readCount: rec.readCount || 0
      });
    });
    stages.forEach(function (s) {
      s.total = s.items.length;
      s.finished = s.items.filter(function (i) { return i.finished; }).length;
    });
    return { stages: stages };
  }

  function kbMarkRead(no, seconds, finished) {
    var r = kbRecord(no);
    var t = nowISO();
    if (!r.firstReadAt) r.firstReadAt = t;
    r.lastReadAt = t;
    r.readSeconds = (r.readSeconds || 0) + Math.max(0, Math.min(3600, Number(seconds) || 0));
    r.readCount = (r.readCount || 0) + 1;
    if (finished) { r.finished = true; r.finishedAt = r.finishedAt || t; }
    save();
    return r;
  }

  function kbToggleFav(no) {
    var r = kbRecord(no);
    r.fav = !r.fav;
    if (!r.lastReadAt) r.lastReadAt = nowISO();
    save();
    return r.fav;
  }

  function kbMyRecords() {
    var records = [];
    var totalSeconds = 0, finishedCount = 0;
    Object.keys(state.knowledge).forEach(function (no) {
      var it = kbById(no);
      if (!it || !canSeeSecurity(it.security || 'public')) return;
      var r = state.knowledge[no];
      totalSeconds += r.readSeconds || 0;
      if (r.finished) finishedCount++;
      records.push({
        knowledgeNo: no, title: it.title, summary: it.summary, category: it.category,
        topic: it.topic, security: it.security || 'public',
        readSeconds: r.readSeconds || 0, readCount: r.readCount || 0,
        finished: !!r.finished, fav: !!r.fav, lastReadAt: r.lastReadAt
      });
    });
    records.sort(function (a, b) { return String(b.lastReadAt || '').localeCompare(String(a.lastReadAt || '')); });
    return {
      records: records,
      recent: records.slice(0, 10),
      favs: records.filter(function (r) { return r.fav; }),
      stats: { readCount: records.length, finishedCount: finishedCount, totalSeconds: totalSeconds }
    };
  }

  /** 下一个可用知识编号（按品类前缀） */
  function kbSuggestNo(category) {
    var prefix = { servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' }[category] || 'GEN';
    var re = new RegExp('^KB-' + prefix + '-(\\d+)$');
    var max = 0;
    kbRaw().forEach(function (it) {
      var m = re.exec(it.id || '');
      if (m) max = Math.max(max, Number(m[1]));
    });
    return 'KB-' + prefix + '-' + String(max + 1).padStart(3, '0');
  }

  /* -------- 管理端：知识库增删改（本地覆盖层，与题库编辑一致） -------- */

  function kbSaveItem(item) {
    if (!item || !item.id) throw new Error('缺少知识编号');
    var payload = Object.assign({}, item, { updatedAt: todayKey() });
    var base = (global.IqKnowledgeData || []).filter(function (x) { return x.id === item.id; })[0];
    var localIdx = -1;
    (state.customKnowledge || []).forEach(function (x, i) { if (x.id === item.id) localIdx = i; });
    if (localIdx >= 0) {
      state.customKnowledge[localIdx] = payload;
      delete state.knowledgeEdits[item.id];
    } else if (base) {
      state.knowledgeEdits[item.id] = payload;
    } else {
      state.customKnowledge.push(payload);
    }
    state.knowledgeStatus[item.id] = item.status || state.knowledgeStatus[item.id] || 'published';
    var di = (state.knowledgeDeleted || []).indexOf(item.id);
    if (di >= 0) state.knowledgeDeleted.splice(di, 1);
    save();
    return { id: item.id };
  }

  function kbDeleteItem(no) {
    for (var i = (state.customKnowledge || []).length - 1; i >= 0; i--) {
      if (state.customKnowledge[i].id === no) state.customKnowledge.splice(i, 1);
    }
    delete state.knowledgeEdits[no];
    delete state.knowledgeStatus[no];
    if (state.knowledgeDeleted.indexOf(no) < 0) state.knowledgeDeleted.push(no);
    save();
    return true;
  }

  function kbSetStatus(no, status) {
    var ok = KB_STATUS.some(function (s) { return s.key === status; });
    if (!ok) throw new Error('状态非法：' + status);
    state.knowledgeStatus[no] = status;
    save();
    return status;
  }

  /** 批量导入（管理端） */
  function kbImport(items, mode) {
    mode = mode || 'skip';
    var res = { imported: 0, updated: 0, skipped: 0, errorCount: 0, errors: [] };
    if (!Array.isArray(items)) {
      res.errors.push({ row: 0, knowledgeNo: '', field: 'item', message: '顶层结构必须是 JSON 数组' });
      res.errorCount = 1;
      return res;
    }
    var seen = {};
    items.forEach(function (item, i) {
      var row = i + 1;
      var no = item && item.id ? String(item.id) : '';
      function bad(field, message) {
        res.errors.push({ row: row, knowledgeNo: no, field: field, message: message });
      }
      if (!item || typeof item !== 'object') { bad('item', '不是对象'); return; }
      if (!no || !/^KB-[A-Z]+-\d{3}$/.test(no)) { bad('id', '知识编号格式非法（应为 KB-XXX-000）'); return; }
      if (seen[no]) { bad('id', '本次导入中编号重复'); return; }
      seen[no] = 1;
      if (!item.title) { bad('title', '缺少标题'); return; }
      if (!item.category) { bad('category', '缺少品类'); return; }
      if (!item.topic) { bad('topic', '缺少二级分类'); return; }
      if (!Array.isArray(item.content) || !item.content.length) { bad('content', '正文内容不能为空'); return; }
      if ((item.roles || []).indexOf('partner') >= 0 && (item.security || 'public') !== 'public') {
        bad('security', '含 partner 人群的条目密级必须为 public'); return;
      }
      var exist = !!kbById(no);
      if (exist && mode === 'skip') { res.skipped++; return; }
      try {
        kbSaveItem(item);
        if (exist) res.updated++; else res.imported++;
      } catch (e) {
        bad('save', e.message);
      }
    });
    res.errorCount = res.errors.length;
    return res;
  }

  /** 管理端学习统计（单机模式仅统计本机数据） */
  function kbStats() {
    var list = kbRaw();
    var byCategory = {}, byTopic = {}, bySecurity = {}, byStatus = {};
    list.forEach(function (it) {
      byCategory[it.category] = (byCategory[it.category] || 0) + 1;
      byTopic[it.topic] = (byTopic[it.topic] || 0) + 1;
      var sec = it.security || 'public';
      bySecurity[sec] = (bySecurity[sec] || 0) + 1;
      var st = it.status || 'published';
      byStatus[st] = (byStatus[st] || 0) + 1;
    });
    var readTop = [], userStats = [];
    Object.keys(state.knowledge).forEach(function (no) {
      var it = kbById(no);
      if (!it) return;
      var r = state.knowledge[no];
      readTop.push({
        id: no, title: it.title, category: it.category, topic: it.topic,
        readers: r.readCount > 0 ? 1 : 0, reads: r.readCount || 0,
        avgSeconds: r.readCount ? Math.round((r.readSeconds || 0) / r.readCount) : 0,
        finished: !!r.finished
      });
    });
    readTop.sort(function (a, b) { return b.reads - a.reads || b.avgSeconds - a.avgSeconds; });
    var me = state.user || {};
    var myRecords = readTop.length;
    if (myRecords) {
      userStats.push({
        name: me.name || '未署名用户',
        dept: me.dept || '',
        role: me.role || '',
        readCount: myRecords,
        finishedCount: readTop.filter(function (r) { return r.finished; }).length,
        totalSeconds: Object.keys(state.knowledge).reduce(function (s, no) { return s + (state.knowledge[no].readSeconds || 0); }, 0)
      });
    }
    return {
      total: list.length,
      byCategory: byCategory, byTopic: byTopic, bySecurity: bySecurity, byStatus: byStatus,
      readTop: readTop.slice(0, 20),
      userStats: userStats,
      localOnly: true
    };
  }

  /* ---------------- 对外接口 ---------------- */

  global.IqStore = {
    CATEGORIES: CATEGORIES,
    TYPES: TYPES,
    OBJECTIVE_TYPES: OBJECTIVE_TYPES,
    OBJECTIVE_ONLY_ROLES: OBJECTIVE_ONLY_ROLES,
    ROLE_ALIAS: ROLE_ALIAS,
    DIFFS: DIFFS,
    ROLES: ROLES,
    SECURITY: SECURITY,
    ROLE_DEFS: ROLE_DEFS,
    SECURITY_RANK: SECURITY_RANK,
    FEEDBACK_TYPES: FEEDBACK_TYPES,
    storageOK: storageOK,
    todayKey: todayKey,
    nowISO: nowISO,

    get state() { return state; },
    save: save,
    subscribe: function (fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (f) { return f !== fn; }); }; },

    login: login, logout: logout, user: user, roleDef: roleDef,
    hasPerm: hasPerm, maxSecurity: maxSecurity, canSeeSecurity: canSeeSecurity,

    prog: prog, recordAnswer: recordAnswer, toggleFav: toggleFav, favList: favList,
    wrongList: wrongList, removeWrong: removeWrong, setNote: setNote,
    addFeedback: addFeedback, feedbackList: feedbackList, resolveFeedback: resolveFeedback,
    addPracticeLog: addPracticeLog,
    addExam: addExam, examList: examList,
    taskList: taskList, addTask: addTask, updateTask: updateTask, removeTask: removeTask,

    setQuestionStatus: setQuestionStatus, questionStatus: questionStatus,
    addQuestions: addQuestions, saveQuestion: saveQuestion, deleteQuestion: deleteQuestion,
    restoreQuestion: restoreQuestion,

    setSettings: setSettings, settings: settings,
    audit: audit, auditLog: auditLog,

    KB_TOPICS: KB_TOPICS, KB_STATUS: KB_STATUS, KB_BLOCK_TYPES: KB_BLOCK_TYPES,
    kbRaw: kbRaw, kbList: kbList, kbById: kbById, kbMeta: kbMeta, kbRoute: kbRoute,
    kbMarkRead: kbMarkRead, kbToggleFav: kbToggleFav, kbMyRecords: kbMyRecords,
    kbSuggestNo: kbSuggestNo, kbSaveItem: kbSaveItem, kbDeleteItem: kbDeleteItem,
    kbSetStatus: kbSetStatus, kbImport: kbImport, kbStats: kbStats,
    exportAll: exportAll, importAll: importAll,
    resetProgress: resetProgress, resetAll: resetAll
  };
})(window);
