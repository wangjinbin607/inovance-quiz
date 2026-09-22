/* ==========================================================================
   汇川产品刷题工具 · 前端 API 适配层 (api-store.js)
   作用：把页面层对 IqStore 的调用转接到后端 RESTful API（接口契约见
        docs/后端开发规格说明书.md），页面组件与交互无需改动。
   加载顺序：必须在 store.js 之后、engine.js/app.js 之前。
   启用方式：index.html?api=1  或  localStorage['iqz.apiMode']='1'
   ========================================================================== */
(function (global) {
  'use strict';

  var Local = global.IqStore;                       // 本地存储实现（保留作离线降级）
  if (!Local) { console.error('[api-store] 需要先加载 store.js'); return; }

  /* ---------------------------- 模式判定 ---------------------------- */
  function detectMode() {
    try {
      var qs = new URLSearchParams(global.location.search);
      if (qs.get('api') === '0') { localStorage.setItem('iqz.apiMode', '0'); return false; }
      if (qs.get('api') === '1') { localStorage.setItem('iqz.apiMode', '1'); return true; }
      return localStorage.getItem('iqz.apiMode') === '1';
    } catch (e) { return false; }
  }
  var API_MODE = detectMode();
  if (!API_MODE) { global.IqApiStore = { enabled: false }; return; }

  var API_BASE = (function () {
    try {
      var qs = new URLSearchParams(global.location.search);
      if (qs.get('apiBase')) { localStorage.setItem('iqz.apiBase', qs.get('apiBase')); return qs.get('apiBase'); }
      return localStorage.getItem('iqz.apiBase') || 'http://localhost:8090';
    } catch (e) { return 'http://localhost:8090'; }
  })();

  var TOKEN_KEY = 'iqz.token';

  function getToken() { try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; } }
  function setToken(t) { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch (e) { } }

  /* ---------------------------- HTTP 封装 ---------------------------- */
  function request(method, path, body) {
    var headers = { 'Content-Type': 'application/json' };
    var token = getToken();
    if (token) headers.Authorization = 'Bearer ' + token;
    return fetch(API_BASE + path, {
      method: method,
      headers: headers,
      body: body === undefined ? undefined : JSON.stringify(body)
    }).then(function (res) {
      return res.json().catch(function () { return { code: 2001, message: '响应解析失败' }; })
        .then(function (json) {
          if (json.code === 0) return json.data;
          if (json.code === 1002) { setToken(null); }
          var e = new Error(json.message || '请求失败');
          e.code = json.code; e.status = res.status;
          throw e;
        });
    });
  }
  var GET = function (p) { return request('GET', p); };
  var POST = function (p, b) { return request('POST', p, b || {}); };
  var PUT = function (p, b) { return request('PUT', p, b || {}); };
  var PATCH = function (p, b) { return request('PATCH', p, b || {}); };
  var DEL = function (p) { return request('DELETE', p); };

  /* ---------------------------- 数据转换 ---------------------------- */
  var DIFF_TO_NUM = { beginner: 1, intermediate: 2, advanced: 3 };
  var NUM_TO_DIFF = { 1: 'beginner', 2: 'intermediate', 3: 'advanced' };

  /** 后端题目 → 前端题库结构（bank.js 约定：difficulty 为 1/2/3，options 为对象） */
  function toBankQuestion(q) {
    var options = null;
    if (Array.isArray(q.options)) {
      options = {};
      q.options.forEach(function (o) { options[o.key] = o.text; });
    } else if (q.options && typeof q.options === 'object') {
      options = q.options;
    }
    return {
      id: q.questionNo,
      category: q.category,
      type: q.type,
      difficulty: DIFF_TO_NUM[q.difficulty] || 1,
      stem: q.stem,
      options: options,
      answer: q.answer === undefined ? null : q.answer,
      analysis: q.explanation || '',
      source: q.source || { title: '', chapter: '', url: '' },
      tags: q.tags || [],
      roles: q.audience || [],
      security: q.security || 'public',
      status: q.status || 'published',
      usageCount: q.usageCount || 0,
      rightCount: q.rightCount || 0,
      wrongRate: q.wrongRate,
      _serverId: q.questionId
    };
  }

  /** 前端题目 → 后端提交结构 */
  function toApiQuestion(q) {
    return {
      questionNo: q.id,
      category: q.category,
      type: q.type,
      difficulty: NUM_TO_DIFF[q.difficulty] || 'beginner',
      security: q.security || 'public',
      status: q.status || 'published',
      stem: q.stem,
      options: q.options,
      answer: q.answer,
      explanation: q.analysis,
      source: q.source,
      tags: q.tags,
      audience: q.roles
    };
  }

  /* ---------------------------- 内存态（与本地版同构） ---------------------------- */
  var state = Local.state;          // 直接复用 store.js 创建的 state 对象
  var idCache = {};                 // questionNo → questionId
  var isReady = false;

  function indexQuestions(list) {
    idCache = {};
    list.forEach(function (q) { if (q._serverId) idCache[q.id] = q._serverId; });
  }
  function qid(no) { return idCache[no]; }

  /** 后端考试记录 → 前端 exam 结构（detail 项由 questionNo 映射为 qid） */
  function toFrontExam(e) {
    return {
      id: e.id, taskId: e.taskId, scope: e.scope, total: e.total,
      right: e.right, wrong: e.wrong, pending: e.pending,
      got: e.got, full: e.full, percent: e.percent, passLine: e.passLine,
      passed: e.passed, durationSec: e.durationSec, autoSubmit: e.autoSubmit,
      submittedAt: e.submittedAt,
      detail: (e.detail || []).map(function (d) {
        return {
          qid: d.questionNo, category: d.category, type: d.type,
          answer: d.userAnswer, correct: d.isCorrect
        };
      })
    };
  }

  function applyMine(mine) {
    if (!mine) return;
    state.progress = mine.progress || {};
    state.wrong = mine.wrong || {};
    state.notes = mine.notes || {};
    state.exams = (mine.exams || []).map(toFrontExam);
    state.tasks = mine.tasks || [];
    state.practiceLog = mine.practiceLog || [];
    state.meta.streak = mine.streak || 0;
    state.meta.lastActiveDate = mine.lastActiveDate || null;
    (mine.favorites || []).forEach(function (no) {
      if (!state.progress[no]) state.progress[no] = { seen: 0, right: 0, wrong: 0, fav: false, lastAt: null, lastResult: null };
      state.progress[no].fav = true;
    });
  }

  /* ==========================================================================
     覆盖 IqStore：认证与初始化
     ========================================================================== */
  Local.isRemote = function () { return true; };
  Local.apiBase = function () { return API_BASE; };
  Local.isReady = function () { return isReady; };

  Local.login = function (username, password) {
    return POST('/api/auth/login', { username: username, password: password }).then(function (data) {
      setToken(data.token);
      state.user = {
        name: data.user.name, role: data.user.role, dept: data.user.dept,
        username: data.user.username, loginAt: Local.nowISO(),
        permissions: data.user.permissions, securityScope: data.user.securityScope
      };
      if (data.user.settings) state.settings = data.user.settings;
      return Local.init();
    });
  };

  Local.logout = function () {
    var p = POST('/api/auth/logout', {}).catch(function () { });
    setToken(null);
    state.user = null;
    isReady = false;
    return p;
  };

  /** 分页拉取全部题目（服务端 page_size 上限 200，题库扩充后必须循环取完） */
  function fetchAllQuestions(basePath) {
    var size = 200;
    var all = [];
    function load(page) {
      var sep = basePath.indexOf('?') >= 0 ? '&' : '?';
      return GET(basePath + sep + 'page=' + page + '&page_size=' + size).then(function (d) {
        var items = (d && d.items) || [];
        all = all.concat(items);
        var total = (d && d.total) || all.length;
        if (items.length === size && all.length < total) return load(page + 1);
        return all;
      });
    }
    return load(1);
  }

  /** 题库加载：有 bank.read 权限走管理端接口（含状态等管理字段），否则走只读接口
   *  说明：现有前端在练习模式做本地即时判题与解析展示，需要题目自带答案（withAnswer=true）；
   *        考试流程不受影响 —— /api/exams/start 下发的试卷始终不含答案，交卷由服务端判分。 */
  function loadBank(perms) {
    var canReadBank = (perms || []).indexOf('bank.read') >= 0;
    var readOnly = function () { return fetchAllQuestions('/api/questions?withAnswer=true'); };
    if (!canReadBank) return readOnly();
    return fetchAllQuestions('/api/admin/questions')
      .then(function (items) { return (items && items.length) ? items : readOnly(); })
      .catch(readOnly);
  }

  /** 初始化：拉取题库 + 个人学习数据，填充内存态 */
  Local.init = function () {
    return GET('/api/auth/me').then(function (me) {
      state.user = {
        name: me.name, role: me.role, dept: me.dept, username: me.username,
        loginAt: Local.nowISO(), permissions: me.permissions, securityScope: me.securityScope
      };
      if (me.settings) state.settings = me.settings;

      return Promise.all([
        loadBank(me.permissions),
        GET('/api/me/state').catch(function () { return null; }),
        loadKnowledge(me.permissions),
        GET('/api/me/knowledge?recent=10').catch(function () { return null; })
      ]).then(function (r) {
        var items = r[0], mine = r[1];
        if (items && items.length) {
          var bank = items.map(toBankQuestion);
          global.INOVANCE_BANK = bank;
          indexQuestions(bank);
        }
        applyMine(mine);
        applyMineKnowledge(r[3]);
        isReady = true;
        return state;
      });
    });
  };

  /** 重新同步学习数据（练习/考试后调用，保证统计准确） */
  Local.sync = function () {
    return GET('/api/me/state').then(function (mine) {
      applyMine(mine);
      return state;
    });
  };

  /* ==========================================================================
     答题与错题本
     ========================================================================== */
  /**
   * 提交作答：服务端判分并落库，本地同步更新用于即时渲染
   * @param {string} no 题号
   * @param {boolean|null} correct 前端本地判题结果（仅作 UI 即时反馈）
   * @param {object} extra { mode, userAnswer, durationSec, sessionId, selfGrade }
   */
  Local.recordAnswer = function (no, correct, extra) {
    extra = extra || {};
    var p = state.progress[no] || (state.progress[no] = { seen: 0, right: 0, wrong: 0, fav: false, lastAt: null, lastResult: null });
    p.seen += 1;
    p.lastAt = Local.nowISO();
    p.lastResult = correct;
    if (correct === true) p.right += 1;
    else if (correct === false) p.wrong += 1;

    var serverId = qid(no);
    if (serverId) {
      POST('/api/practice/answer', {
        questionId: serverId,
        questionNo: no,
        mode: extra.mode === 'exam' ? 'exam' : (extra.mode === 'wrong' ? 'wrong_review' : (extra.mode === 'fav' ? 'favorite_review' : 'practice')),
        userAnswer: extra.userAnswer === undefined ? null : extra.userAnswer,
        durationSec: extra.durationSec || 0,
        sessionId: extra.sessionId || null,
        selfGrade: extra.selfGrade === undefined ? null : extra.selfGrade
      }).then(function (res) {
        // 以服务端判分为准修正本地展示
        if (res.isCorrect !== null && res.isCorrect !== undefined && res.isCorrect !== correct) {
          p.lastResult = res.isCorrect;
        }
        if (res.wrongBook && res.wrongBook.inWrongBook) {
          state.wrong[no] = { count: res.wrongBook.wrongCount, lastAt: Local.nowISO(), resolved: false, note: '' };
        } else if (res.wrongBook && res.wrongBook.status === 'mastered' && state.wrong[no]) {
          state.wrong[no].resolved = true;
        }
      }).catch(function (e) { console.warn('[api-store] 作答上报失败：', e.message); });
    }
    Local.save();
    return Promise.resolve(correct);
  };

  Local.wrongList = function (includeResolved) {
    return Object.keys(state.wrong).filter(function (q) {
      return includeResolved ? true : !state.wrong[q].resolved;
    });
  };

  Local.removeWrong = function (no) {
    delete state.wrong[no];
    var serverId = qid(no);
    if (serverId) DEL('/api/wrong-book/' + serverId).catch(function () { });
    Local.save();
  };

  /* ==========================================================================
     收藏与笔记
     ========================================================================== */
  Local.toggleFav = function (no) {
    var p = state.progress[no] || (state.progress[no] = { seen: 0, right: 0, wrong: 0, fav: false, lastAt: null, lastResult: null });
    p.fav = !p.fav;
    var serverId = qid(no);
    if (serverId) {
      (p.fav ? POST('/api/favorites', { questionId: serverId })
        : DEL('/api/favorites/' + serverId)).catch(function (e) { console.warn('[api-store] 收藏同步失败：', e.message); });
    }
    Local.save();
    return p.fav;
  };

  Local.setNote = function (no, text) {
    if (text) state.notes[no] = text; else delete state.notes[no];
    var serverId = qid(no);
    if (serverId) PUT('/api/notes/' + serverId, { content: text || '' }).catch(function () { });
    Local.save();
  };

  /* ==========================================================================
     题目反馈（学员报错 → 管理端处理）
     ========================================================================== */
  Local.addFeedback = function (fb) {
    var serverId = qid(fb.questionNo);
    if (!serverId) return Promise.reject(new Error('题目未同步到服务端，无法提交反馈'));
    return POST('/api/feedback', { questionId: serverId, type: fb.type, content: fb.content })
      .then(function (r) {
        var item = {
          id: r.feedbackId, questionId: serverId, questionNo: r.questionNo,
          type: r.type, content: fb.content, status: 'open',
          userName: state.user ? state.user.name : '', createdAt: Local.nowISO()
        };
        if (!Array.isArray(state.feedback)) state.feedback = [];
        state.feedback.unshift(item);
        return item;
      });
  };

  Local.feedbackList = function () { return (state.feedback || []).slice(); };

  Local.resolveFeedback = function (id) {
    return PATCH('/api/admin/feedback/' + id, { status: 'resolved' }).then(function () {
      (state.feedback || []).forEach(function (f) { if (f.id === id) f.status = 'resolved'; });
    });
  };

  /* ==========================================================================
     练习会话
     ========================================================================== */
  Local.addPracticeLog = function (log) {
    log.id = log.id || ('P' + Date.now().toString(36));
    log.endedAt = Local.nowISO();
    state.practiceLog.unshift(log);
    if (log.sessionId) {
      POST('/api/practice/sessions/' + log.sessionId + '/finish', {
        durationSec: log.durationSec || 0,
        selfGrades: log.selfGrades || {},
        mode: log.mode || 'practice',
        scope: log.scope || ''
      }).then(function () { return Local.sync(); })
        .catch(function (e) { console.warn('[api-store] 练习上报失败：', e.message); });
    }
    Local.save();
    return log;
  };

  /* ==========================================================================
     考试：完全走服务端（开考快照、服务端计时、服务端判分）
     ========================================================================== */
  Local.startExam = function (opts) {
    return POST('/api/exams/start', opts).then(function (data) {
      return {
        recordId: data.recordId,
        scope: data.scope,
        minutes: data.minutes,
        passLine: data.passScore,
        remainingSec: data.remainingSec,
        deadlineAt: data.deadlineAt,
        paper: data.items.map(toBankQuestion).map(function (q) {
          q._noAnswer = true;    // 考试试卷不带答案（由服务端判分）
          q.answer = null;
          return q;
        })
      };
    });
  };

  Local.saveExamProgress = function (recordId, answers) {
    return PUT('/api/exams/' + recordId + '/answers', { answers: answers }).catch(function () { });
  };

  Local.submitExam = function (recordId, answers, autoSubmit) {
    return POST('/api/exams/' + recordId + '/submit', { answers: answers, autoSubmit: !!autoSubmit });
  };

  Local.selfGradeExam = function (recordId, grades) {
    return POST('/api/exams/' + recordId + '/self-grade', { grades: grades });
  };

  Local.examReport = function (recordId) { return GET('/api/exams/' + recordId + '/report'); };

  /** 从服务端恢复未完成的考试（刷新/重开后继续作答，剩余时间以服务端为准） */
  Local.resumeExam = function (recordId) {
    return GET('/api/exams/' + recordId).then(function (data) {
      return {
        recordId: data.recordId,
        scope: data.scope,
        remainingSec: data.remainingSec,
        passLine: data.passScore,
        answers: data.answers || {},
        paper: data.items.map(toBankQuestion).map(function (q) {
          q._noAnswer = true;
          q.answer = null;
          return q;
        })
      };
    });
  };

  Local.addExam = function (rec) {
    state.exams.unshift(rec);
    if (state.exams.length > 300) state.exams.length = 300;
    Local.save();
    return rec;
  };

  Local.examList = function () { return state.exams.slice(); };
  Local.taskList = function () { return state.tasks.slice(); };

  Local.reloadTasks = function () {
    return GET('/api/exam-tasks').then(function (d) { state.tasks = d.items || []; return state.tasks; });
  };

  /* ==========================================================================
     题库管理（管理端）
     ========================================================================== */
  Local.questionStatus = function (no) {
    var q = (global.INOVANCE_BANK || []).filter(function (x) { return x.id === no; })[0];
    return (q && q.status) || 'published';
  };

  Local.setQuestionStatus = function (no, status) {
    var serverId = qid(no);
    var q = (global.INOVANCE_BANK || []).filter(function (x) { return x.id === no; })[0];
    if (q) q.status = status;                      // 乐观更新，保证渲染立即生效
    if (!serverId) return Promise.reject(new Error('题目未同步到服务端'));
    return PATCH('/api/admin/questions/' + serverId + '/status', { status: status }).then(function () {
      Local.audit((status === 'published' ? '恢复上线' : (status === 'draft' ? '转为草稿' : '归档')) + '题目 ' + no);
      Local.save();
    });
  };

  Local.saveQuestion = function (q) {
    var payload = toApiQuestion(q);
    var serverId = qid(q.id);
    var req = serverId
      ? PUT('/api/admin/questions/' + serverId, payload)
      : POST('/api/admin/questions', payload);
    return req.then(function (saved) {
      var bankQ = toBankQuestion(saved);
      var list = global.INOVANCE_BANK || [];
      var idx = -1;
      list.forEach(function (x, i) { if (x.id === bankQ.id) idx = i; });
      if (idx >= 0) list[idx] = bankQ; else list.push(bankQ);
      global.INOVANCE_BANK = list;
      indexQuestions(list);
      Local.audit('保存题目 ' + q.id);
      Local.save();
      return bankQ;
    });
  };

  Local.deleteQuestion = function (no) {
    var serverId = qid(no);
    if (!serverId) return Promise.resolve();
    return DEL('/api/admin/questions/' + serverId).then(function () {
      global.INOVANCE_BANK = (global.INOVANCE_BANK || []).filter(function (x) { return x.id !== no; });
      indexQuestions(global.INOVANCE_BANK);
      Local.audit('删除题目 ' + no);
      Local.save();
    });
  };

  Local.addQuestions = function (list, replaceExisting) {
    var payload = list.map(function (q) {
      return {
        id: q.id, category: q.category, type: q.type,
        difficulty: NUM_TO_DIFF[q.difficulty] || q.difficulty || 'beginner',
        security: q.security || 'public', status: q.status || 'published',
        stem: q.stem, options: q.options, answer: q.answer, explanation: q.analysis,
        source: q.source, tags: q.tags, audience: q.roles
      };
    });
    return POST('/api/admin/questions/import', {
      questions: payload,
      mode: replaceExisting ? 'upsert' : 'insert_only'
    }).then(function (r) {
      return Local.syncBank().then(function () {
        return {
          added: r.imported, updated: r.updated, skipped: r.skipped,
          errorCount: r.errorCount, warningCount: r.warningCount,
          errors: r.errors, warnings: r.warnings
        };
      });
    });
  };

  /** 重新拉取题库（管理端改动后调用） */
  Local.syncBank = function () {
    var perms = (state.user && state.user.permissions) || [];
    return loadBank(perms).then(function (items) {
      var bank = items.map(toBankQuestion);
      global.INOVANCE_BANK = bank;
      indexQuestions(bank);
      return bank;
    });
  };

  /* ==========================================================================
     考试任务（管理端）
     ========================================================================== */
  Local.addTask = function (task) {
    return POST('/api/admin/exam-tasks', {
      title: task.title, category: task.category, questionCount: task.count,
      minutes: task.minutes, passScore: task.passScore, deadline: task.deadline || null,
      roles: task.roles || [], allowRetake: !!task.allowRetake
    }).then(function () { return Local.reloadTasks(); });
  };

  Local.updateTask = function (id, patch) {
    return PUT('/api/admin/exam-tasks/' + id, {
      status: patch.status || 'open',
      title: patch.title, category: patch.category,
      questionCount: patch.count, minutes: patch.minutes, passScore: patch.passScore,
      deadline: patch.deadline, roles: patch.roles, allowRetake: patch.allowRetake
    }).then(function () { return Local.reloadTasks(); });
  };

  Local.removeTask = function (id) {
    return DEL('/api/admin/exam-tasks/' + id).then(function () { return Local.reloadTasks(); });
  };

  /* ==========================================================================
     设置 / 审计 / 导入导出
     ========================================================================== */
  Local.setSettings = function (patch) {
    Object.keys(patch).forEach(function (k) { state.settings[k] = patch[k]; });
    PUT('/api/user/settings', {
      dailyGoal: state.settings.dailyGoal,
      instantJudge: state.settings.instantJudge,
      shuffleOptions: state.settings.shuffleOptions
    }).catch(function () { });
    Local.save();
  };

  Local.exportAll = function () { return JSON.parse(JSON.stringify(state)); };

  Local.resetProgress = function () {
    state.progress = {}; state.wrong = {}; state.practiceLog = []; state.exams = []; state.notes = {};
    Local.save();
  };

  Local.resetAll = function () { Local.logout().then(function () { global.location.reload(); }); };

  /* ==========================================================================
     知识库（V2.0）
     ========================================================================== */

  /** 后端知识条目 → 前端结构（兼容驼峰与下划线两种命名） */
  function toKbItem(r) {
    if (!r) return null;
    var pick = function (a, b, dft) { return r[a] != null ? r[a] : (r[b] != null ? r[b] : dft); };
    return {
      id: pick('id', 'knowledgeNo', pick('knowledge_no', null, '')),
      category: r.category,
      topic: r.topic,
      title: r.title,
      summary: r.summary || '',
      tags: r.tags || [],
      roles: r.roles || r.audience || ['engineer'],
      security: r.security || 'public',
      status: r.status || 'published',
      readMinutes: Number(pick('readMinutes', 'read_minutes', 5)),
      level: Number(r.level || 1),
      sortOrder: Number(pick('sortOrder', 'sort_order', 999)),
      content: r.content || [],
      relatedQuestions: r.relatedQuestions || r.related_questions || [],
      source: r.source || { title: pick('sourceTitle', 'source_title', ''), url: pick('sourceUrl', 'source_url', '') },
      updatedAt: pick('updatedAt', 'updated_at', '')
    };
  }

  function upsertKnowledge(item) {
    if (!item || !item.id) return;
    var list = global.IqKnowledgeData || (global.IqKnowledgeData = []);
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === item.id) { list[i] = Object.assign({}, list[i], item); return; }
    }
    list.push(item);
  }

  function removeKnowledge(no) {
    var list = global.IqKnowledgeData || [];
    for (var i = list.length - 1; i >= 0; i--) if (list[i].id === no) list.splice(i, 1);
  }

  /** 拉取知识库：有管理权限走管理端接口（含草稿/归档），否则只拉可见条目 */
  function loadKnowledge(perms) {
    var canWrite = (perms || []).indexOf('bank.write') >= 0;
    var path = canWrite ? '/api/admin/knowledge' : '/api/knowledge';
    var size = 200, all = [];
    function load(page) {
      return GET(path + '?page=' + page + '&page_size=' + size).then(function (d) {
        var items = ((d && d.items) || []).map(toKbItem).filter(Boolean);
        all = all.concat(items);
        var total = (d && d.total) || all.length;
        if (items.length === size && all.length < total) return load(page + 1);
        return all;
      });
    }
    return load(1).then(function (list) {
      global.IqKnowledgeData = list;
      return list;
    }).catch(function (e) {
      console.warn('[api-store] 知识库加载失败，回退内置数据：', e.message);
      return global.IqKnowledgeData || [];
    });
  }

  /** 我的知识学习记录 → state.knowledge */
  function applyMineKnowledge(mine) {
    if (!mine) return;
    var map = {};
    (mine.records || []).forEach(function (r) {
      var no = r.knowledgeNo || r.id;
      if (!no) return;
      map[no] = {
        readSeconds: Number(r.readSeconds || 0),
        readCount: Number(r.readCount || 0),
        finished: !!r.finished,
        finishedAt: r.finishedAt || null,
        fav: !!r.fav,
        firstReadAt: r.firstReadAt || null,
        lastReadAt: r.lastReadAt || null
      };
    });
    state.knowledge = map;
  }

  function kbRec(no) {
    if (!state.knowledge[no]) {
      state.knowledge[no] = {
        readSeconds: 0, readCount: 0, finished: false, finishedAt: null,
        fav: false, firstReadAt: null, lastReadAt: null
      };
    }
    return state.knowledge[no];
  }

  Local.kbMarkRead = function (no, seconds, finished) {
    var r = kbRec(no);
    var t = Local.nowISO();
    if (!r.firstReadAt) r.firstReadAt = t;
    r.lastReadAt = t;
    r.readSeconds += Math.max(0, Math.min(3600, Number(seconds) || 0));
    r.readCount += 1;
    if (finished) { r.finished = true; r.finishedAt = r.finishedAt || t; }
    POST('/api/knowledge/' + encodeURIComponent(no) + '/read', { seconds: Number(seconds) || 0, finished: !!finished })
      .catch(function (e) { console.warn('[api-store] 阅读上报失败：', e.message); });
    Local.save();
    return r;
  };

  Local.kbToggleFav = function (no) {
    var r = kbRec(no);
    r.fav = !r.fav;
    if (!r.lastReadAt) r.lastReadAt = Local.nowISO();
    POST('/api/knowledge/' + encodeURIComponent(no) + '/fav', { fav: r.fav })
      .catch(function (e) { console.warn('[api-store] 收藏同步失败：', e.message); });
    Local.save();
    return r.fav;
  };

  Local.kbSaveItem = function (item) {
    if (!item || !item.id) throw new Error('缺少知识编号');
    var exist = (global.IqKnowledgeData || []).some(function (x) { return x.id === item.id; });
    upsertKnowledge(Object.assign({}, item, { updatedAt: Local.todayKey() }));
    var payload = {
      id: item.id, knowledgeNo: item.id, category: item.category, topic: item.topic,
      title: item.title, summary: item.summary, content: item.content,
      tags: item.tags, roles: item.roles, security: item.security,
      status: item.status || 'published', readMinutes: item.readMinutes,
      level: item.level, sortOrder: item.sortOrder, source: item.source,
      relatedQuestions: item.relatedQuestions
    };
    var p = exist
      ? PUT('/api/admin/knowledge/' + encodeURIComponent(item.id), payload)
      : POST('/api/admin/knowledge', payload);
    p.catch(function (e) {
      console.warn('[api-store] 知识保存失败：', e.message);
      if (global.IqUI && global.IqUI.toast) global.IqUI.toast('保存失败：' + e.message, 'warn');
    });
    return { id: item.id };
  };

  Local.kbDeleteItem = function (no) {
    removeKnowledge(no);
    DEL('/api/admin/knowledge/' + encodeURIComponent(no))
      .catch(function (e) { console.warn('[api-store] 知识删除失败：', e.message); });
    return true;
  };

  Local.kbSetStatus = function (no, status) {
    var item = (global.IqKnowledgeData || []).filter(function (x) { return x.id === no; })[0];
    if (item) item.status = status;
    POST('/api/admin/knowledge/' + encodeURIComponent(no) + '/status', { status: status })
      .catch(function (e) { console.warn('[api-store] 状态同步失败：', e.message); });
    return status;
  };

  Local.kbImport = function (items, mode) {
    return POST('/api/admin/knowledge/import', { items: items, mode: mode || 'skip' })
      .then(function (res) {
        return loadKnowledge(['bank.write']).then(function () { return res; });
      });
  };

  Local.kbStats = function () {
    return GET('/api/admin/knowledge/stats').then(function (d) {
      return {
        total: d.total || 0,
        byCategory: d.byCategory || {}, byTopic: d.byTopic || {},
        bySecurity: d.bySecurity || {}, byStatus: d.byStatus || {},
        readTop: (d.readTop || []).map(function (x) {
          return {
            id: x.knowledgeNo || x.id, title: x.title, category: x.category, topic: x.topic,
            reads: x.readers != null ? x.readers : (x.reads || 0),
            avgSeconds: x.avgSeconds || 0
          };
        }),
        userStats: (d.userStats || []).map(function (u) {
          return {
            name: u.name || u.userName || '', dept: u.dept || '', role: u.role || '',
            readCount: u.readCount || 0, finishedCount: u.finishedCount || 0,
            totalSeconds: u.totalSeconds || 0
          };
        }),
        localOnly: false
      };
    });
  };

  /* ==========================================================================
     管理端专用：直接透传后端接口
     ========================================================================== */
  Local.server = {
    overview: function () { return GET('/api/admin/overview'); },
    questionList: function (qs) {
      var p = Object.keys(qs || {}).filter(function (k) { return qs[k]; })
        .map(function (k) { return k + '=' + encodeURIComponent(qs[k]); }).join('&');
      return GET('/api/admin/questions' + (p ? '?' + p : ''));
    },
    users: function () { return GET('/api/admin/users'); },
    createUser: function (u) { return POST('/api/admin/users', u); },
    examTasks: function () { return GET('/api/admin/exam-tasks'); },
    reportQuestions: function () { return GET('/api/admin/reports/questions'); },
    reportUsers: function () { return GET('/api/admin/reports/users'); },
    questionDifficulty: function (limit) { return GET('/api/admin/reports/question-difficulty?limit=' + (limit || 10)); },
    feedbackList: function (status) { return GET('/api/admin/feedback?status=' + (status || 'open')); },
    auditLogs: function (page, size) { return GET('/api/admin/audit-logs?page=' + (page || 1) + '&page_size=' + (size || 50)); },

    /* 知识库 */
    knowledgeList: function (qs) {
      var p = Object.keys(qs || {}).filter(function (k) { return qs[k]; })
        .map(function (k) { return k + '=' + encodeURIComponent(qs[k]); }).join('&');
      return GET('/api/admin/knowledge' + (p ? '?' + p : ''));
    },
    kbCreate: function (item) { return POST('/api/admin/knowledge', item); },
    kbUpdate: function (no, item) { return PUT('/api/admin/knowledge/' + encodeURIComponent(no), item); },
    kbDelete: function (no) { return DEL('/api/admin/knowledge/' + encodeURIComponent(no)); },
    kbSetStatus: function (no, status) { return POST('/api/admin/knowledge/' + encodeURIComponent(no) + '/status', { status: status }); },
    kbImport: function (items, mode) { return POST('/api/admin/knowledge/import', { items: items, mode: mode || 'skip' }); },
    kbStats: function () { return GET('/api/admin/knowledge/stats'); },
    knowledgeMeta: function () { return GET('/api/knowledge/meta'); },
    knowledgeRoute: function () { return GET('/api/knowledge/route'); },
    knowledgeDetail: function (no) { return GET('/api/knowledge/' + encodeURIComponent(no)); }
  };

  global.IqStore = Local;
  global.IqApiStore = {
    enabled: true, base: API_BASE,
    toBankQuestion: toBankQuestion, toApiQuestion: toApiQuestion,
    idOf: function (no) { return idCache[no]; }
  };
  console.log('[api-store] API 模式已启用 → ' + API_BASE);
})(window);
