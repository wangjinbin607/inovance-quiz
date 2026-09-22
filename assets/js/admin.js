/* ==========================================================================
   汇川产品刷题工具 · 管理端应用 (admin.js)
   题库全生命周期管理 / 审核上线 / 分批导入导出 / 考试任务 / 数据报表 / 权限
   ========================================================================== */
(function (global) {
  'use strict';

  var UI = global.IqUI, S = global.IqStore, Bank = global.IqBank, Engine = global.IqEngine;
  var $ = UI.$, $$ = UI.$$, esc = UI.esc, icon = UI.icon;

  var A = {
    route: 'overview', param: null,
    bankFilter: { cat: '', type: '', diff: '', status: '', kw: '', sec: '' },
    /* 知识库管理端状态：列表筛选 / 分页 / 阅读量缓存 */
    kbFilter: { cat: '', topic: '', status: '', sec: '', kw: '' },
    kbPage: 1, kbList: null, kbStats: null, kbReads: null, kbEditItem: null
  };
  var TYPE_SCORE_HINT = { single: '单选', multi: '多选', judge: '判断', fill: '填空', short: '简答', scenario: '场景' };

  /* ---------------- 本地 / API 双模式兼容 ---------------- */
  function isRemote() { return typeof S.isRemote === 'function' && S.isRemote(); }

  /** 写操作兼容：本地模式同步返回，API 模式返回 Promise */
  function after(v, fn, errPrefix) {
    if (v && typeof v.then === 'function') {
      v.then(fn).catch(function (e) {
        UI.toast((errPrefix || '操作失败') + '：' + (e && e.message ? e.message : e), 'err');
      });
    } else {
      fn(v);
    }
  }

  /* ================= 权限 ================= */

  function canWrite() { return S.hasPerm('bank.write'); }
  function canReview() { return S.hasPerm('bank.review'); }
  function canTask() { return S.hasPerm('task.write'); }
  function canReport() { return S.hasPerm('report.all'); }

  /* ================= 登录 ================= */

  function renderLogin() {
    var remote = isRemote();
    document.getElementById('adminApp').innerHTML =
      '<div style="min-height:100vh;display:grid;place-items:center;background:#f4f6fa;padding:20px">' +
      '<div class="card" style="max-width:430px;width:100%">' +
      '<div class="brand" style="color:var(--brand);font-size:17px;margin-bottom:6px"><span class="logo" style="background:var(--brand);color:#fff;border:none">汇</span>管理后台</div>' +
      '<p class="muted small">仅管理员与培训讲师可进入。' + (remote ? '请使用服务端分配的账号登录。' : '请使用对应身份登录。') + '</p>' +
      (remote
        ? '<div class="field mt12"><label>账号</label><input type="text" id="aUser" placeholder="如 admin"></div>' +
          '<div class="field"><label>密码</label><input type="password" id="aPass" placeholder="请输入密码"></div>'
        : '<div class="field mt12"><label>姓名 / 工号</label><input type="text" id="aName" placeholder="如：李工"></div>' +
          '<div class="field"><label>部门</label><input type="text" id="aDept" placeholder="如：产品培训部"></div>' +
          '<div class="field"><label>身份</label><select id="aRole">' +
          ['super_admin', 'trainer', 'employee', 'partner'].map(function (k) {
            return '<option value="' + k + '">' + esc(S.ROLE_DEFS[k].label) + '</option>';
          }).join('') + '</select></div>') +
      '<button class="btn primary block" id="aLogin">进入管理后台</button>' +
      '<div class="divider"></div><a class="btn block" href="index.html">返回刷题端</a>' +
      '</div></div>';

    $('#aLogin').addEventListener('click', function () {
      var btn = $('#aLogin');
      if (remote) {
        var u = $('#aUser').value.trim(), p = $('#aPass').value;
        if (!u || !p) { UI.toast('请输入账号与密码', 'warn'); return; }
        btn.disabled = true; btn.textContent = '登录中…';
        S.login(u, p).then(function () { render(); }).catch(function (e) {
          btn.disabled = false; btn.textContent = '进入管理后台';
          UI.toast(e.message || '登录失败', 'err');
        });
        return;
      }
      var n = $('#aName').value.trim();
      if (!n) { UI.toast('请填写姓名', 'warn'); return; }
      S.login(n, $('#aRole').value, $('#aDept').value.trim());
      render();
    });
  }

  /* ================= 骨架 ================= */

  var MENU = [
    { key: 'overview', name: '概览', icon: 'home', need: null },
    { key: 'bank', name: '题库管理', icon: 'book', need: 'bank.read' },
    { key: 'knowledge', name: '知识库管理', icon: 'book', need: 'bank.read' },
    { key: 'new', name: '新增题目', icon: 'plus', need: 'bank.write' },
    { key: 'import', name: '批量导入 / 导出', icon: 'upload', need: 'bank.import' },
    { key: 'review', name: '审核与上线', icon: 'check', need: 'bank.review' },
    { key: 'kb-stats', name: '学习统计', icon: 'chart', need: 'bank.read' },
    { key: 'feedback', name: '学员反馈', icon: 'flag', need: 'bank.read' },
    { key: 'quality', name: '题库体检', icon: 'target', need: 'bank.read' },
    { key: 'tasks', name: '考试任务', icon: 'exam', need: 'task.write' },
    { key: 'reports', name: '数据报表', icon: 'chart', need: 'report.all' },
    { key: 'perm', name: '角色与权限', icon: 'shield', need: null },
    { key: 'log', name: '操作日志', icon: 'clock', need: null }
  ];

  function renderShell(content) {
    var u = S.user();
    var menu = MENU.filter(function (m) { return !m.need || S.hasPerm(m.need); });
    document.getElementById('adminApp').innerHTML =
      '<div class="app">' +
      '<header class="topbar">' +
      '  <div class="brand"><span class="logo">汇</span>刷题工具 · 管理后台</div>' +
      '  <div class="topbar-spacer"></div>' +
      '  <nav class="topnav"><a href="index.html">' + icon('play', 15) + '前往刷题端</a></nav>' +
      UI.themeButtonHtml() +
      '  <div class="userchip" id="aUser"><span class="avatar">' + esc(u.name.slice(0, 1)) + '</span>' +
      '    <span><span>' + esc(u.name) + '</span><div class="role">' + esc(S.roleDef().label) + '</div></span></div>' +
      '</header>' +
      '<div class="body">' +
      '  <aside class="side">' +
      menu.map(function (m) {
        return '<a href="#/' + m.key + '" class="' + (A.route === m.key ? 'active' : '') + '" data-m="' + m.key + '">' +
          icon(m.icon, 17) + '<span>' + esc(m.name) + '</span></a>';
      }).join('') +
      '    <div style="padding:14px 12px 0"><div class="note small" style="font-size:12px">题库共 <b>' + Bank.raw().length + '</b> 题<br>密级可见至 <b>' + esc(['—', '公开', '内部', '涉密'][S.maxSecurity()]) + '</b></div></div>' +
      '  </aside>' +
      '  <main class="main" id="aMain">' + content + '</main>' +
      '</div></div>';

    $$('[data-m]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        location.hash = '#/' + el.getAttribute('data-m');
      });
    });
    $('#aUser').addEventListener('click', function () {
      UI.confirm('退出管理后台并返回刷题端？').then(function (ok) {
        if (ok) { S.logout(); location.href = 'index.html'; }
      });
    });
    UI.bindThemeButton(document);
  }

  function guard() {
    if (!S.user()) { renderLogin(); return false; }
    if (!(canWrite() || canReview() || canTask() || canReport() || S.hasPerm('bank.read'))) {
      renderShell('<div class="empty"><div class="big">🔒</div><h3>无权访问管理后台</h3>' +
        '<p>当前身份为「' + esc(S.roleDef().label) + '」，仅可进行刷题与考试。</p>' +
        '<a class="btn primary mt12" href="index.html">返回刷题端</a></div>');
      return false;
    }
    return true;
  }

  /* ================= 路由 ================= */

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    A.route = parts[0] || 'overview';
    A.param = parts[1] || null;
    var known = MENU.map(function (m) { return m.key; }).concat(['edit', 'knowledge']);
    if (known.indexOf(A.route) < 0) A.route = 'overview';
    /* 知识库子路由：#/knowledge/new、#/knowledge/edit/<编号> */
    if (A.route === 'knowledge' && (parts[1] === 'new' || parts[1] === 'edit')) {
      A.kbAct = parts[1];
      A.kbNo = parts[2] === 'new' ? null : (parts[2] || null);
    } else {
      A.kbAct = null;
      A.kbNo = null;
    }
  }

  function render() {
    if (!guard()) return;
    parseHash();
    var content = '';
    switch (A.route) {
      case 'overview': content = viewOverview(); break;
      case 'bank': content = canWrite() || S.hasPerm('bank.read') ? viewBank() : noPerm(); break;
      case 'knowledge': content = knowledgeContent(); break;
      case 'kb-stats': content = viewKbStats(); break;
      case 'new': content = canWrite() ? viewEditor(null) : noPerm(); break;
      case 'edit': content = canWrite() ? viewEditor(A.param) : noPerm(); break;
      case 'import': content = canWrite() ? viewImport() : noPerm(); break;
      case 'review': content = canReview() ? viewReview() : noPerm(); break;
      case 'feedback': content = viewFeedback(); break;
      case 'quality': content = canWrite() || S.hasPerm('bank.read') ? viewQuality() : noPerm(); break;
      case 'tasks': content = canTask() ? viewTasks() : noPerm(); break;
      case 'reports': content = canReport() ? viewReports() : noPerm(); break;
      case 'perm': content = viewPerm(); break;
      case 'log': content = viewLog(); break;
      default: content = viewOverview();
    }
    renderShell(content);
    bind();
    global.scrollTo(0, 0);
  }

  function noPerm() {
    return '<div class="empty"><div class="big">🔒</div><h3>当前身份无此操作权限</h3>' +
      '<p>请联系超级管理员调整角色权限。</p></div>';
  }

  /* ================= 概览 ================= */

  function viewOverview() {
    var ov = Bank.overview();
    var raw = Bank.raw();
    var draft = raw.filter(function (q) { return S.questionStatus(q.id) === 'draft'; });
    var archived = raw.filter(function (q) { return S.questionStatus(q.id) === 'archived'; });
    var hidden = raw.filter(function (q) { return !S.canSeeSecurity(q.security || 'public'); });

    return '' +
      '<div class="page-head"><h2>' + icon('home', 20) + '管理概览</h2>' +
      '<p>题库资产、审核状态、考试任务与数据沉淀一览</p></div>' +

      '<div class="grid c4 mb16">' +
      card('题库总量', ov.total + '<small> 题</small>', '其中草稿 ' + ov.draft + ' · 归档 ' + ov.archived) +
      card('待审核草稿', String(draft.length), draft.length ? '需审核后上线' : '暂无待审题目', draft.length ? 'warn' : 'ok') +
      card('考试任务', String(S.taskList().length), '已发布任务') +
      card('当前身份可见', ov.total + ' / ' + raw.length, hidden.length ? '有 ' + hidden.length + ' 题因密级不可见' : '全部可见') +
      '</div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>品类分布</h3><div class="spacer"></div>' +
      '    <a class="btn sm" href="#/bank">进入题库管理</a></div>' +
      UI.barChart(S.CATEGORIES.map(function (c) {
        return { label: c.short, value: ov.byCategory[c.key] || 0, color: c.color };
      }), { height: 190 }) + '</div>' +
      '  <div class="card"><div class="card-head"><h3>题型与难度</h3></div>' +
      '    <div class="grid c2" style="gap:14px">' +
      '      <div>' + UI.hbars(S.TYPES.map(function (t) {
        return { label: t.name, value: ov.byType[t.key] || 0, suffix: ' 题', color: '#0b5cab' };
      }), {}) + '</div>' +
      '      <div>' + UI.hbars(S.DIFFS.map(function (d) {
        return { label: d.name, value: ov.byDifficulty[d.key] || 0, suffix: ' 题', color: '#d98412' };
      }), {}) + '</div>' +
      '    </div></div>' +
      '</div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>密级分布</h3></div>' +
      UI.hbars(S.SECURITY.map(function (s) {
        return { label: s.name, value: ov.bySecurity[s.key] || 0, suffix: ' 题', color: s.key === 'confidential' ? '#d93a3f' : s.key === 'internal' ? '#d98412' : '#12996b' };
      }), {}) +
      '  <div class="note small mt12">涉密题目仅超级管理员与培训讲师可见，外部客户/代理商端不会加载，满足核心资料隔离要求。</div></div>' +
      '  <div class="card"><div class="card-head"><h3>最近操作</h3><div class="spacer"></div>' +
      '    <a class="btn sm" href="#/log">全部日志</a></div>' +
      (S.auditLog().length ? '<div class="list">' + S.auditLog().slice(0, 6).map(function (l) {
        return '<div class="list-item"><span class="tag">' + esc(l.by) + '</span>' +
          '<div style="flex:1">' + esc(l.msg) + '</div><span class="small muted">' + esc(UI.fmtDate(l.at, true)) + '</span></div>';
      }).join('') + '</div>' : '<div class="empty"><p>暂无操作记录</p></div>') +
      '  </div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><h3>高频标签（知识点分布）</h3></div>' +
      '<div class="tag-list">' + ov.allTags.map(function (t) { return '<span class="tag brand">' + esc(t) + '</span>'; }).join('') + '</div></div>';
  }

  function card(label, value, foot, cls) {
    return '<div class="stat ' + (cls || '') + '"><div class="label">' + esc(label) + '</div>' +
      '<div class="value">' + value + '</div><div class="foot">' + esc(foot) + '</div></div>';
  }

  /* ================= 题库管理 ================= */

  function filteredBank() {
    var f = A.bankFilter;
    var list = Bank.raw().filter(function (q) {
      if (f.cat && q.category !== f.cat) return false;
      if (f.type && q.type !== f.type) return false;
      if (f.diff && Number(q.difficulty) !== Number(f.diff)) return false;
      if (f.sec && (q.security || 'public') !== f.sec) return false;
      if (f.status && S.questionStatus(q.id) !== f.status) return false;
      if (f.kw) {
        var hay = [q.id, q.stem, q.analysis, (q.tags || []).join(' ')].join(' ').toLowerCase();
        if (hay.indexOf(f.kw.toLowerCase()) < 0) return false;
      }
      return true;
    });
    return list;
  }

  function viewBank() {
    var f = A.bankFilter;
    var list = filteredBank();
    var page = A.bankPage || 1;
    var pageSize = 20;
    var totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    if (page > totalPages) page = totalPages;
    A.bankPage = page;
    var pageList = list.slice((page - 1) * pageSize, page * pageSize);

    return '' +
      '<div class="page-head"><h2>' + icon('book', 20) + '题库管理</h2>' +
      '<p>共 ' + Bank.raw().length + ' 题，当前筛选出 ' + list.length + ' 题</p></div>' +

      '<div class="card tight">' +
      '  <div class="inline-fields">' +
      '    <div class="field"><label>品类</label><select id="fCat"><option value="">全部</option>' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '"' + (f.cat === c.key ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field"><label>题型</label><select id="fType"><option value="">全部</option>' +
      S.TYPES.map(function (t) { return '<option value="' + t.key + '"' + (f.type === t.key ? ' selected' : '') + '>' + esc(t.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field"><label>难度</label><select id="fDiff"><option value="">全部</option>' +
      S.DIFFS.map(function (d) { return '<option value="' + d.key + '"' + (String(f.diff) === String(d.key) ? ' selected' : '') + '>' + esc(d.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field"><label>状态</label><select id="fStatus"><option value="">全部</option>' +
      ['published', 'draft', 'archived'].map(function (s) {
        var n = { published: '已上线', draft: '草稿', archived: '已归档' }[s];
        return '<option value="' + s + '"' + (f.status === s ? ' selected' : '') + '>' + n + '</option>';
      }).join('') + '</select></div>' +
      '    <div class="field"><label>密级</label><select id="fSec"><option value="">全部</option>' +
      S.SECURITY.map(function (s) { return '<option value="' + s.key + '"' + (f.sec === s.key ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field" style="flex:2 1 220px"><label>关键词</label><input type="text" id="fKw" value="' + esc(f.kw) + '" placeholder="题号 / 题干 / 标签"></div>' +
      '    <div class="field" style="flex:0 0 auto"><button class="btn" id="fReset">重置</button></div>' +
      '  </div>' +
      '</div>' +

      '<div class="card">' +
      '  <div class="card-head">' +
      '    <h3>题目列表</h3><div class="spacer"></div>' +
      '    <a class="btn sm primary" href="#/new">' + icon('plus', 14) + ' 新增题目</a>' +
      '    <a class="btn sm" href="#/import">' + icon('upload', 14) + ' 批量导入</a>' +
      '    <button class="btn sm" id="expJson">' + icon('download', 14) + ' 导出 JSON</button>' +
      '    <button class="btn sm" id="expCsv">' + icon('download', 14) + ' 导出 CSV</button>' +
      '  </div>' +
      (pageList.length ? '<div class="btn-row mb12" id="bulkBar" style="display:none">' +
        '<span class="small muted">已选 <b id="selCount">0</b> 题</span>' +
        '<button class="btn sm" data-bulk="published">' + icon('check', 14) + ' 批量上线</button>' +
        '<button class="btn sm" data-bulk="draft">批量转草稿</button>' +
        '<button class="btn sm" data-bulk="archived">批量归档</button>' +
        '<button class="btn sm danger" data-bulk="delete">批量删除</button>' +
        '<button class="btn sm ghost" id="bulkClear">取消选择</button>' +
        '</div>' +
        '<div class="table-wrap"><table class="tbl admin-table">' +
        '<thead><tr><th class="center" style="width:38px"><input type="checkbox" id="chkAll" title="全选本页"></th>' +
        '<th>题号</th><th>品类</th><th>题型 / 难度</th><th>题干</th><th class="center">密级</th><th class="center">状态</th><th class="center">操作</th></tr></thead><tbody>' +
        pageList.map(function (q) {
          var st = S.questionStatus(q.id);
          var stTag = st === 'draft' ? '<span class="tag warn">草稿</span>' : st === 'archived' ? '<span class="tag">已归档</span>' : '<span class="tag ok">已上线</span>';
          return '<tr>' +
            '<td class="center"><input type="checkbox" class="rowChk" data-qid="' + q.id + '"></td>' +
            '<td class="mono small">' + esc(q.id) + '<div class="muted" style="font-size:11px">' + (q._builtin ? '内置' : '自定义') + '</div></td>' +
            '<td><span class="tag" style="background:' + Bank.catMeta(q.category).color + '1a;color:' + Bank.catMeta(q.category).color + '">' + esc(Bank.catMeta(q.category).short) + '</span></td>' +
            '<td class="small">' + esc(Bank.typeName(q.type)) + '<div class="muted">' + esc(Bank.diffName(q.difficulty)) + '</div></td>' +
            '<td><div class="cell-stem" title="' + esc(q.stem) + '">' + esc(q.stem) + '</div>' +
            '<div class="tag-list mt8">' + (q.tags || []).slice(0, 4).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div></td>' +
            '<td class="center"><span class="secmark ' + (q.security || 'public') + '">' + esc(Bank.secName(q.security || 'public')) + '</span></td>' +
            '<td class="center">' + stTag + '</td>' +
            '<td class="center nowrap">' +
            '<button class="btn ghost sm" data-preview="' + q.id + '">预览</button>' +
            '<a class="btn ghost sm" href="#/edit/' + q.id + '">编辑</a>' +
            (st === 'published' ? '<button class="btn ghost sm" data-status="draft" data-qid="' + q.id + '">转草稿</button>'
              : '<button class="btn ghost sm" data-status="published" data-qid="' + q.id + '">上线</button>') +
            (st === 'archived' ? '' : '<button class="btn ghost sm" data-status="archived" data-qid="' + q.id + '">归档</button>') +
            '<button class="btn ghost sm" style="color:var(--danger)" data-del="' + q.id + '">删除</button>' +
            '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<div class="btn-row mt12" style="justify-content:center">' +
        '<button class="btn sm" id="prevPage"' + (page <= 1 ? ' disabled' : '') + '>上一页</button>' +
        '<span class="small muted" style="align-self:center">第 ' + page + ' / ' + totalPages + ' 页</span>' +
        '<button class="btn sm" id="nextPage"' + (page >= totalPages ? ' disabled' : '') + '>下一页</button>' +
        '</div>'
        : '<div class="empty"><div class="big">🔍</div><p>没有符合条件的题目</p></div>') +
      '</div>';
  }

  /* ================= 题目编辑器 ================= */

  function blankQuestion() {
    return {
      id: '', category: 'servo', type: 'single', difficulty: 1,
      stem: '', options: { A: '', B: '', C: '', D: '' }, answer: ['A'],
      analysis: '', source: { title: '', chapter: '', url: '' },
      tags: [], roles: ['engineer'], security: 'internal'
    };
  }

  function viewEditor(qid) {
    var isNew = !qid;
    var q = isNew ? blankQuestion() : (Bank.byId(qid) || blankQuestion());
    q = JSON.parse(JSON.stringify(q));
    if (isNew) q.id = suggestId(q.category);

    var optKeys = q.options ? Object.keys(q.options) : ['A', 'B', 'C', 'D'];
    if (!optKeys.length) optKeys = ['A', 'B', 'C', 'D'];
    var ansArr = Array.isArray(q.answer) ? q.answer : (q.type === 'judge' ? ['T'] : []);

    function optEditor() {
      return '<div id="optBox">' + ['A', 'B', 'C', 'D', 'E'].map(function (k) { return optRow(k); }).join('') + '</div>' +
        '<div class="btn-row mt8"><button class="btn sm" id="addOpt">+ 增加选项</button>' +
        '<button class="btn sm" id="delOpt">- 删除末项</button></div>';

      function optRow(k) {
        var val = (q.options && q.options[k]) || '';
        var show = (q.options && k in q.options) || ['A', 'B', 'C', 'D'].indexOf(k) >= 0;
        return '<div class="opt-editor" data-opt-row="' + k + '"' + (show ? '' : ' style="display:none"') + '>' +
          '<span class="k">' + k + '</span>' +
          '<input type="text" data-opt-text="' + k + '" value="' + esc(val) + '" placeholder="选项 ' + k + ' 内容">' +
          '</div>';
      }
    }

    return '' +
      '<div class="page-head"><h2>' + icon('edit', 20) + (isNew ? '新增题目' : '编辑题目 ' + esc(q.id)) + '</h2>' +
      '<p>题目将进入题库并可按状态控制上线；建议同时填写解析与资料溯源，保证培训可信度</p></div>' +

      '<div class="grid c2" style="grid-template-columns:1.35fr .65fr">' +
      '<div class="card">' +
      '  <div class="inline-fields mb12">' +
      '    <div class="field"><label>题号</label><input type="text" id="eId" value="' + esc(q.id) + '"></div>' +
      '    <div class="field"><label>品类</label><select id="eCat">' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '"' + (q.category === c.key ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field"><label>题型</label><select id="eType">' +
      S.TYPES.map(function (t) { return '<option value="' + t.key + '"' + (q.type === t.key ? ' selected' : '') + '>' + esc(t.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field"><label>难度</label><select id="eDiff">' +
      S.DIFFS.map(function (d) { return '<option value="' + d.key + '"' + (Number(q.difficulty) === d.key ? ' selected' : '') + '>' + esc(d.name) + '</option>'; }).join('') + '</select></div>' +
      '  </div>' +

      '  <div class="field"><label>题干 <span class="muted small">（场景题写清现场背景与现象；填空题用连续下划线 ____ 标记每个空位）</span></label>' +
      '    <textarea id="eStem" class="json-area" style="font-family:var(--ff);min-height:110px">' + esc(q.stem) + '</textarea></div>' +

      '  <div class="field" id="optionsField"><label>选项与正确答案</label>' + optEditor() +
      '    <div class="hint">多选题请勾选多个正确选项（至少 2 个）</div></div>' +

      '  <div class="field hidden" id="judgeField"><label>正确答案</label>' +
      '    <div class="segment" id="judgeSeg">' +
      '      <button data-v="T" class="' + (ansArr[0] === 'T' ? 'on' : '') + '">正确</button>' +
      '      <button data-v="F" class="' + (ansArr[0] === 'F' ? 'on' : '') + '">错误</button>' +
      '    </div></div>' +

      '  <div class="field hidden" id="subjField"><label id="subjLabel">参考答案 <span class="muted small">（建议分条列出要点，供自评判分）</span></label>' +
      '    <textarea id="eSubjAnswer" class="json-area" style="font-family:var(--ff);min-height:130px">' + esc(typeof q.answer === 'string' ? q.answer : '') + '</textarea></div>' +

      '  <div class="field"><label>专业解析 <span class="muted small">（需说明干扰项错在哪）</span></label>' +
      '    <textarea id="eAnalysis" style="min-height:110px">' + esc(q.analysis) + '</textarea></div>' +

      '  <div class="btn-row end">' +
      '    <a class="btn" href="#/bank">取消</a>' +
      '    <button class="btn primary" id="saveQ">' + icon('check', 15) + ' 保存题目</button>' +
      '  </div>' +
      '</div>' +

      '<div>' +
      '  <div class="card"><div class="card-head"><h3>资料溯源</h3></div>' +
      '    <div class="field"><label>资料名称</label><input type="text" id="eSrcTitle" value="' + esc((q.source || {}).title || '') + '" placeholder="如：SV660N 系列伺服用户手册"></div>' +
      '    <div class="field"><label>章节 / 页码</label><input type="text" id="eSrcChapter" value="' + esc((q.source || {}).chapter || '') + '" placeholder="如：第 4 章 通信配置"></div>' +
      '    <div class="field"><label>官方链接</label><input type="text" id="eSrcUrl" value="' + esc((q.source || {}).url || '') + '" placeholder="https://www.inovance.com/..."></div>' +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>属性标注</h3></div>' +
      '    <div class="field"><label>适用人群</label><div class="chips" id="eRoles">' +
      S.ROLES.map(function (r) {
        return '<button class="chip' + ((q.roles || []).indexOf(r.key) >= 0 ? ' on' : '') + '" data-r="' + r.key + '">' + esc(r.name) + '</button>';
      }).join('') + '</div></div>' +
      '    <div class="field"><label>标签 <span class="muted small">（逗号分隔）</span></label>' +
      '      <input type="text" id="eTags" value="' + esc((q.tags || []).join(',')) + '" placeholder="SV660N,选型,EtherCAT"></div>' +
      '    <div class="field"><label>密级</label><select id="eSec">' +
      S.SECURITY.map(function (s) { return '<option value="' + s.key + '"' + ((q.security || 'public') === s.key ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select>' +
      '      <div class="hint">公开：可对外部客户/代理商展示；内部：仅内部员工；涉密：仅超管与讲师</div></div>' +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>保存后的状态</h3></div>' +
      '    <label class="checkline mb8"><input type="checkbox" id="ePublish"' + (!isNew && S.questionStatus(q.id) === 'published' || isNew ? ' checked' : '') + '> 立即上线（不勾选则保存为草稿，待审核）</label>' +
      '    <div class="note small">题目上线后即在用户端可见（受密级与角色限制）。</div>' +
      '  </div>' +
      '</div>' +
      '</div>';
  }

  function suggestId(cat) {
    var prefix = { servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' }[cat] || 'Q';
    var max = 0;
    Bank.raw().forEach(function (q) {
      var m = /^([A-Z]+)-(\d+)$/.exec(q.id || '');
      if (m && m[1] === prefix) max = Math.max(max, Number(m[2]));
    });
    return prefix + '-' + String(max + 1).padStart(3, '0');
  }

  function bindEditor() {
    var type = $('#eType').value;
    function syncType() {
      type = $('#eType').value;
      var isChoice = type === 'single' || type === 'multi';
      var isFill = type === 'fill';
      var isSubj = type === 'short' || type === 'scenario';
      $('#optionsField').classList.toggle('hidden', !isChoice);
      $('#judgeField').classList.toggle('hidden', type !== 'judge');
      $('#subjField').classList.toggle('hidden', !(isSubj || isFill));
      var label = $('#subjLabel'), box = $('#eSubjAnswer');
      if (label && box) {
        if (isFill) {
          label.innerHTML = '填空答案 <span class="muted small">（按空位顺序，多个空用竖线 | 分隔，如：220|基板）</span>';
          box.placeholder = '220|基板';
          box.style.minHeight = '64px';
        } else {
          label.innerHTML = '参考答案 <span class="muted small">（建议分条列出要点，供自评判分）</span>';
          box.placeholder = '';
          box.style.minHeight = '130px';
        }
      }
    }
    $('#eType').addEventListener('change', syncType);
    syncType();

    // 选项勾选为答案
    $$('#optBox [data-opt-row]').forEach(function (row) {
      var k = row.getAttribute('data-opt-row');
      var key = $('.k', row);
      key.style.cursor = 'pointer';
      key.title = '点击设为正确答案';
      key.addEventListener('click', function () {
        var t = $('#eType').value;
        if (t === 'multi') {
          key.classList.toggle('on');
          key.style.background = key.classList.contains('on') ? 'var(--ok)' : 'var(--line-2)';
          key.style.color = key.classList.contains('on') ? '#fff' : '';
        } else {
          $$('#optBox .k').forEach(function (x) { x.style.background = 'var(--line-2)'; x.style.color = ''; x.classList.remove('on'); });
          key.classList.add('on');
          key.style.background = 'var(--ok)';
          key.style.color = '#fff';
        }
      });
      if (type === 'multi' && (A.editAnswer || []).indexOf(k) >= 0) { /* 占位 */ }
    });

    // 恢复已有答案的高亮
    var cur = Bank.byId($('#eId').value);
    if (cur) {
      var arr = Array.isArray(cur.answer) ? cur.answer : [];
      if (type === 'multi') {
        $$('#optBox [data-opt-row]').forEach(function (row) {
          var k = row.getAttribute('data-opt-row');
          if (arr.indexOf(k) >= 0) {
            $('.k', row).classList.add('on');
            $('.k', row).style.background = 'var(--ok)';
            $('.k', row).style.color = '#fff';
          }
        });
      } else if (arr.length) {
        $$('#optBox [data-opt-row]').forEach(function (row) {
          if (row.getAttribute('data-opt-row') === arr[0]) {
            $('.k', row).classList.add('on');
            $('.k', row).style.background = 'var(--ok)';
            $('.k', row).style.color = '#fff';
          }
        });
      }
    }

    var addOpt = $('#addOpt');
    if (addOpt) addOpt.addEventListener('click', function () {
      var rows = $$('#optBox [data-opt-row]');
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].style.display === 'none') { rows[i].style.display = ''; return; }
      }
      UI.toast('最多支持 5 个选项', 'warn');
    });
    var delOpt = $('#delOpt');
    if (delOpt) delOpt.addEventListener('click', function () {
      var rows = $$('#optBox [data-opt-row]').filter(function (r) { return r.style.display !== 'none'; });
      if (rows.length <= 2) { UI.toast('至少保留 2 个选项', 'warn'); return; }
      var last = rows[rows.length - 1];
      last.style.display = 'none';
      $('[data-opt-text]', last).value = '';
      var k = $('.k', last);
      k.classList.remove('on'); k.style.background = 'var(--line-2)'; k.style.color = '';
    });

    $$('#judgeSeg button').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('#judgeSeg button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
    });
    $$('#eRoles .chip').forEach(function (c) {
      c.addEventListener('click', function () { c.classList.toggle('on'); });
    });
    $('#eCat').addEventListener('change', function () {
      if (!A.editingExisting) $('#eId').value = suggestId(this.value);
    });
    A.editingExisting = !!Bank.byId($('#eId').value);

    $('#saveQ').addEventListener('click', saveEditor);
  }

  /** 填空答案文本 → 数组（支持 | ｜ 、 ； 与换行分隔） */
  function parseFillAnswer(text) {
    return String(text || '').split(/[|｜、;；\n\r]+/).map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function saveEditor() {
    var type = $('#eType').value;
    var isChoice = type === 'single' || type === 'multi';
    var q = {
      id: $('#eId').value.trim(),
      category: $('#eCat').value,
      type: type,
      difficulty: Number($('#eDiff').value),
      stem: $('#eStem').value.trim(),
      options: null,
      answer: null,
      analysis: $('#eAnalysis').value.trim(),
      source: {
        title: $('#eSrcTitle').value.trim(),
        chapter: $('#eSrcChapter').value.trim(),
        url: $('#eSrcUrl').value.trim()
      },
      tags: $('#eTags').value.split(',').map(function (t) { return t.trim(); }).filter(Boolean),
      roles: $$('#eRoles .chip.on').map(function (c) { return c.getAttribute('data-r'); }),
      security: $('#eSec').value
    };

    if (!q.id) { UI.toast('请填写题号', 'warn'); return; }
    if (!/^[A-Za-z]+-\d+$/.test(q.id)) { UI.toast('题号格式建议为「前缀-序号」，如 SRV-035', 'warn'); }
    if (!q.stem || q.stem.length < 6) { UI.toast('题干过短，请补充完整', 'warn'); return; }
    if (!q.roles.length) { UI.toast('请至少选择一个适用人群', 'warn'); return; }
    if (S.OBJECTIVE_TYPES.indexOf(q.type) < 0 && q.roles.some(function (r) { return S.OBJECTIVE_ONLY_ROLES.indexOf(r) >= 0; })) {
      UI.toast('销售与采购只考查客观题（单选 / 多选 / 判断 / 填空），请调整适用人群或题型', 'warn');
      return;
    }

    if (isChoice) {
      var opts = {};
      $$('#optBox [data-opt-row]').forEach(function (row) {
        if (row.style.display === 'none') return;
        var k = row.getAttribute('data-opt-row');
        var v = $('[data-opt-text]', row).value.trim();
        if (v) opts[k] = v;
      });
      if (Object.keys(opts).length < 2) { UI.toast('至少填写 2 个选项', 'warn'); return; }
      var ansKeys = $$('#optBox .k.on').map(function (k) { return k.parentNode.getAttribute('data-opt-row'); });
      if (!ansKeys.length) { UI.toast('请点击选项字母设置正确答案', 'warn'); return; }
      if (type === 'single' && ansKeys.length > 1) { UI.toast('单选题只能有 1 个正确答案', 'warn'); return; }
      if (type === 'multi' && ansKeys.length < 2) { UI.toast('多选题至少需要 2 个正确答案', 'warn'); return; }
      ansKeys.sort();
      // 选项内容不为空的才能作为答案
      ansKeys = ansKeys.filter(function (k) { return opts[k]; });
      if (!ansKeys.length) { UI.toast('正确答案对应的选项内容为空', 'warn'); return; }
      q.options = opts;
      q.answer = ansKeys;
    } else if (type === 'fill') {
      var blanks = (q.stem.match(/_{3,}/g) || []).length;
      var fillArr = parseFillAnswer($('#eSubjAnswer').value);
      if (!blanks) { UI.toast('填空题干需用连续下划线 ____ 标记空位', 'warn'); return; }
      if (fillArr.length !== blanks) {
        UI.toast('空位数（' + blanks + '）与答案数（' + fillArr.length + '）不一致，请用竖线 | 分隔每个空的答案', 'warn');
        return;
      }
      q.answer = fillArr;
    } else if (type === 'judge') {
      var seg = $('#judgeSeg button.on');
      q.answer = [seg.length ? seg[0].getAttribute('data-v') : 'T'];
    } else {
      var ref = $('#eSubjAnswer').value.trim();
      if (ref.length < 10) { UI.toast('请填写参考答案（不少于 10 字）', 'warn'); return; }
      q.answer = ref;
    }

    if (!q.analysis) { UI.toast('建议填写解析，便于学员理解', 'warn'); }
    var publish = $('#ePublish').checked;
    after(S.saveQuestion(q), function () {
      after(S.setQuestionStatus(q.id, publish ? 'published' : 'draft'), function () {
        UI.toast('题目已保存' + (publish ? '并上线' : '（草稿）'), 'ok');
        location.hash = '#/bank';
        render();
      }, '设置状态失败');
    }, '保存失败');
  }

  /* ================= 批量导入 / 导出 ================= */

  function viewImport() {
    return '' +
      '<div class="page-head"><h2>' + icon('upload', 20) + '批量导入 / 导出</h2>' +
      '<p>支持 JSON 数组、CSV（Excel 另存为 CSV）与题库文件合并；导入前会做完整校验</p></div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>导入方式</h3></div>' +
      '    <div class="segment mb12" id="impMode">' +
      '      <button class="on" data-impmode="json">粘贴 / 上传 JSON</button>' +
      '      <button data-impmode="csv">上传 CSV</button>' +
      '      <button data-impmode="file">选择 .json 文件</button>' +
      '    </div>' +
      '    <div id="impJsonBox">' +
      '      <div class="field"><label>题库 JSON（数组）</label>' +
      '        <textarea id="impText" class="json-area" placeholder=\'[{"id":"SRV-035","category":"servo","type":"single",...}]\'></textarea></div>' +
      '      <div class="field"><label class="checkline"><input type="checkbox" id="impReplace"> 覆盖同题号题目（不勾选则跳过重复项）</label></div>' +
      '      <button class="btn primary" id="doImport">' + icon('upload', 15) + ' 校验并导入</button>' +
      '    </div>' +
      '    <div id="impCsvBox" class="hidden">' +
      '      <div class="note small mb12">CSV 表头需为：题号,品类,题型,难度,题干,选项A,选项B,选项C,选项D,选项E,正确答案,解析,资料名称,章节,链接,标签,人群,密级</div>' +
      '      <input type="file" id="csvFile" accept=".csv,.txt">' +
      '      <div class="btn-row mt12"><button class="btn primary" id="doImportCsv">' + icon('upload', 15) + ' 校验并导入 CSV</button>' +
      '      <button class="btn" id="tplCsv">下载 CSV 模板</button></div>' +
      '    </div>' +
      '    <div id="impFileBox" class="hidden">' +
      '      <input type="file" id="jsonFile" accept=".json">' +
      '      <div class="btn-row mt12"><button class="btn primary" id="doImportFile">' + icon('upload', 15) + ' 校验并导入文件</button></div>' +
      '    </div>' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>导入校验报告</h3></div>' +
      '    <div id="impReport"><div class="empty"><p>尚未执行导入</p></div></div>' +
      '  </div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><h3>导出</h3></div>' +
      '  <div class="btn-row">' +
      '    <button class="btn" id="expAllJson">' + icon('download', 15) + ' 全部题库 JSON</button>' +
      '    <button class="btn" id="expCat">按品类导出 JSON</button>' +
      '    <button class="btn" id="expTpl">导出导入模板（含 1 条示例）</button>' +
      '  </div>' +
      '  <div class="inline-fields mt12">' +
      '    <div class="field"><label>按品类导出</label><select id="expCatSel">' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '">' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
      '  </div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><h3>字段规范速查</h3></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>字段</th><th>取值</th><th>说明</th></tr></thead><tbody>' +
      [['category', 'servo / inverter / plc / hmi / io', '五大品类'],
        ['type', 'single / multi / judge / fill / short / scenario', '单选 / 多选 / 判断 / 填空 / 简答 / 场景分析'],
        ['difficulty', '1 / 2 / 3', '初级 / 中级 / 高级'],
        ['answer', '["A"] 或 ["A","C"] 或 ["T"] 或 ["答案1","答案2"] 或 字符串', '判断用 T/F；填空按空位顺序给字符串数组；简答与场景题为参考答案文本'],
        ['security', 'public / internal / confidential', '密级，决定可见角色'],
        ['roles', 'sales / engineer / purchase / partner', '适配人群；销售与采购只考查客观题'],
        ['source', '{title, chapter, url}', '资料溯源']].map(function (r) {
        return '<tr><td class="mono small">' + esc(r[0]) + '</td><td class="small">' + esc(r[1]) + '</td><td class="small muted">' + esc(r[2]) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';
  }

  function validateQuestions(list) {
    var errors = [], warns = [];
    var valid = [];
    var existIds = {};
    Bank.raw().forEach(function (q) { existIds[q.id] = 1; });
    var seen = {};
    if (!Array.isArray(list)) return { errors: ['顶层结构必须是 JSON 数组'], warns: [], valid: [] };
    list.forEach(function (q, i) {
      var tag = '第 ' + (i + 1) + ' 条' + (q && q.id ? '（' + q.id + '）' : '');
      if (!q || typeof q !== 'object') { errors.push(tag + '：不是对象'); return; }
      if (!q.id) { errors.push(tag + '：缺少 id'); return; }
      if (seen[q.id]) { errors.push(tag + '：id 与本次导入的其他题目重复'); return; }
      seen[q.id] = 1;
      if (!q.stem) { errors.push(tag + '：缺少题干'); return; }
      if (['servo', 'inverter', 'plc', 'hmi', 'io'].indexOf(q.category) < 0) { errors.push(tag + '：category 非法'); return; }
      if (['single', 'multi', 'judge', 'fill', 'short', 'scenario'].indexOf(q.type) < 0) { errors.push(tag + '：type 非法'); return; }
      if ([1, 2, 3].indexOf(Number(q.difficulty)) < 0) { errors.push(tag + '：difficulty 必须为 1/2/3'); return; }
      if (q.type === 'single' || q.type === 'multi') {
        if (!q.options || typeof q.options !== 'object' || Object.keys(q.options).length < 2) { errors.push(tag + '：选项不足 2 个'); return; }
        if (!Array.isArray(q.answer) || !q.answer.length) { errors.push(tag + '：answer 必须为数组'); return; }
        var bad = q.answer.filter(function (k) { return !(k in q.options); });
        if (bad.length) { errors.push(tag + '：答案 ' + bad.join('/') + ' 不在选项内'); return; }
        if (q.type === 'multi' && q.answer.length < 2) { errors.push(tag + '：多选题答案需 ≥2 项'); return; }
      } else if (q.type === 'judge') {
        if (!Array.isArray(q.answer) || ['T', 'F'].indexOf(q.answer[0]) < 0) { errors.push(tag + '：判断题答案需为 ["T"] 或 ["F"]'); return; }
      } else if (q.type === 'fill') {
        if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some(function (a) { return typeof a !== 'string' || !a.trim(); })) {
          errors.push(tag + '：填空题 answer 需为非空字符串数组（按空位顺序）'); return;
        }
        var blankCnt = (String(q.stem).match(/_{3,}/g) || []).length;
        if (blankCnt !== q.answer.length) { errors.push(tag + '：填空空位数(' + blankCnt + ')与答案数(' + q.answer.length + ')不一致'); return; }
      } else {
        if (typeof q.answer !== 'string' || q.answer.length < 5) { errors.push(tag + '：简答/场景题 answer 需为参考答案文本'); return; }
      }
      if (!q.analysis || q.analysis.length < 15) warns.push(tag + '：解析过短，建议补充干扰项分析');
      if (!q.source || !q.source.title) warns.push(tag + '：缺少资料溯源');
      if (!Array.isArray(q.roles) || !q.roles.length) warns.push(tag + '：未标注适用人群，默认按 engineer 处理');
      var qRoles = (Array.isArray(q.roles) && q.roles.length) ? q.roles : ['engineer'];
      if (S.OBJECTIVE_TYPES.indexOf(q.type) < 0 && qRoles.some(function (r) { return S.OBJECTIVE_ONLY_ROLES.indexOf(r) >= 0; })) {
        errors.push(tag + '：销售/采购人群只允许客观题（单选 / 多选 / 判断 / 填空），当前为 ' + q.type); return;
      }
      if (existIds[q.id]) warns.push(tag + '：题库中已存在同题号');
      valid.push({
        id: String(q.id).trim(),
        category: q.category,
        type: q.type,
        difficulty: Number(q.difficulty),
        stem: String(q.stem).trim(),
        options: (q.type === 'single' || q.type === 'multi') ? q.options : null,
        answer: q.answer,
        analysis: q.analysis || '',
        source: q.source || { title: '', chapter: '', url: '' },
        tags: Array.isArray(q.tags) ? q.tags : [],
        roles: qRoles,
        security: ['public', 'internal', 'confidential'].indexOf(q.security) >= 0 ? q.security : 'public'
      });
    });
    return { errors: errors, warns: warns, valid: valid };
  }

  function renderReport(r, imported) {
    var html = '<div class="grid c3 mb12" style="gap:10px">' +
      '<div class="stat"><div class="label">可导入</div><div class="value" style="font-size:20px;color:var(--ok)">' + r.valid.length + '</div></div>' +
      '<div class="stat"><div class="label">错误</div><div class="value" style="font-size:20px;color:var(--danger)">' + r.errors.length + '</div></div>' +
      '<div class="stat"><div class="label">提示</div><div class="value" style="font-size:20px;color:var(--warn)">' + r.warns.length + '</div></div>' +
      '</div>';
    if (r.errors.length) {
      html += '<div class="note danger small mb12"><b>错误明细（这些题目不会被导入）</b><ul style="margin:6px 0 0;padding-left:18px">' +
        r.errors.slice(0, 30).map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul></div>';
    }
    if (r.warns.length) {
      html += '<div class="note warn small mb12"><b>提示</b><ul style="margin:6px 0 0;padding-left:18px">' +
        r.warns.slice(0, 20).map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul></div>';
    }
    if (imported) {
      html += '<div class="note small">已导入：新增 <b>' + imported.added + '</b> 题，更新 <b>' + imported.updated + '</b> 题。' +
        '<a href="#/bank">前往题库管理</a></div>';
    }
    $('#impReport').innerHTML = html;
  }

  function doImport(list, replace) {
    var r = validateQuestions(list);
    if (!r.valid.length) { renderReport(r); UI.toast('没有可导入的题目，请检查错误明细', 'err'); return; }
    var res = S.addQuestions(r.valid, replace);
    if (res && typeof res.then === 'function') {
      $('#impReport').innerHTML = '<div class="note small">正在导入 ' + r.valid.length + ' 题…</div>';
      res.then(function (real) {
        renderReport(r, real);
        UI.toast('导入完成：新增 ' + real.added + '，更新 ' + real.updated, 'ok');
      }).catch(function (e) {
        renderReport(r);
        UI.toast('导入失败：' + (e.message || e), 'err');
      });
      return;
    }
    renderReport(r, res);
    UI.toast('导入完成：新增 ' + res.added + '，更新 ' + res.updated, 'ok');
  }

  function parseCSV(text) {
    var rows = [];
    var row = [], cell = '', inQ = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQ) {
        if (c === '"') {
          if (text[i + 1] === '"') { cell += '"'; i++; }
          else inQ = false;
        } else cell += c;
      } else {
        if (c === '"') inQ = true;
        else if (c === ',') { row.push(cell); cell = ''; }
        else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
        else if (c === '\r') { /* 忽略 */ }
        else cell += c;
      }
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (c) { return String(c).trim(); }); });
  }

  /** 解析 CSV 中的正确答案列：支持 A / ABC / A、C / A,B / 正确 / T 等写法 */
  function parseAnswerKeys(raw) {
    var parts = String(raw).split(/[、,，;；\/\|\s]+/).filter(Boolean);
    var keys = [];
    parts.forEach(function (p) {
      if (/^[A-Ea-e]{2,}$/.test(p)) {
        p.split('').forEach(function (ch) { keys.push(ch.toUpperCase()); });
      } else {
        keys.push(p.toUpperCase());
      }
    });
    return keys.filter(function (k, i) { return keys.indexOf(k) === i; });
  }

  function csvToQuestions(text) {
    var rows = parseCSV(text.replace(/^\ufeff/, ''));
    if (rows.length < 2) throw new Error('CSV 内容为空');
    var head = rows[0].map(function (h) { return String(h).trim(); });
    var idx = {};
    head.forEach(function (h, i) { idx[h] = i; });
    var need = ['题号', '品类', '题型', '题干', '正确答案'];
    need.forEach(function (n) { if (!(n in idx)) throw new Error('缺少必需列：' + n); });
    var catMap = { '伺服': 'servo', '伺服系统': 'servo', '变频器': 'inverter', 'PLC': 'plc', '可编程逻辑控制器': 'plc', 'HMI': 'hmi', 'HMI人机界面': 'hmi', 'HMI 人机界面': 'hmi', 'IO': 'io', 'IO系统': 'io', 'IO 系统': 'io' };
    var typeMap = { '单选': 'single', '单选题': 'single', '多选': 'multi', '多选题': 'multi', '判断': 'judge', '判断题': 'judge', '填空': 'fill', '填空题': 'fill', '简答': 'short', '简答题': 'short', '场景': 'scenario', '场景分析': 'scenario', '场景分析题': 'scenario' };
    var diffMap = { '初级': 1, '1': 1, '中级': 2, '2': 2, '高级': 3, '3': 3 };
    var secMap = { '公开': 'public', 'public': 'public', '内部': 'internal', 'internal': 'internal', '涉密': 'confidential', 'confidential': 'confidential' };

    return rows.slice(1).map(function (r) {
      function col(name) { var i = idx[name]; return i == null ? '' : String(r[i] == null ? '' : r[i]).trim(); }
      var type = typeMap[col('题型')] || col('题型');
      var opts = {};
      ['A', 'B', 'C', 'D', 'E'].forEach(function (k) {
        var v = col('选项' + k);
        if (v) opts[k] = v;
      });
      var ansRaw = col('正确答案');
      var answer;
      if (type === 'short' || type === 'scenario') answer = ansRaw;
      else if (type === 'judge') answer = [/^(T|正确|对|是|√|Y|YES)$/i.test(ansRaw) ? 'T' : 'F'];
      else if (type === 'fill') answer = parseFillAnswer(ansRaw);
      else answer = parseAnswerKeys(ansRaw);
      var q = {
        id: col('题号'),
        category: catMap[col('品类')] || col('品类'),
        type: type,
        difficulty: diffMap[col('难度')] || 1,
        stem: col('题干'),
        options: (type === 'single' || type === 'multi') ? opts : null,
        answer: answer,
        analysis: col('解析'),
        source: { title: col('资料名称'), chapter: col('章节'), url: col('链接') },
        tags: col('标签') ? col('标签').split(/[,，;；]/).map(function (s) { return s.trim(); }).filter(Boolean) : [],
        roles: col('人群') ? col('人群').split(/[,，;；\/]/).map(function (s) { return s.trim(); }).filter(Boolean) : ['engineer'],
        security: secMap[col('密级')] || 'internal'
      };
      return q;
    });
  }

  function bindImport() {
    $$('#impMode button').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('#impMode button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        var m = b.getAttribute('data-impmode');
        $('#impJsonBox').classList.toggle('hidden', m !== 'json');
        $('#impCsvBox').classList.toggle('hidden', m !== 'csv');
        $('#impFileBox').classList.toggle('hidden', m !== 'file');
      });
    });
    $('#doImport').addEventListener('click', function () {
      var txt = $('#impText').value.trim();
      if (!txt) { UI.toast('请先粘贴题库 JSON', 'warn'); return; }
      try {
        doImport(JSON.parse(txt), $('#impReplace').checked);
      } catch (e) { UI.toast('JSON 解析失败：' + e.message, 'err'); }
    });
    $('#doImportCsv').addEventListener('click', function () {
      var f = $('#csvFile').files[0];
      if (!f) { UI.toast('请选择 CSV 文件', 'warn'); return; }
      UI.readFile(f).then(function (txt) {
        try { doImport(csvToQuestions(txt), $('#impReplace').checked); }
        catch (e) { UI.toast('CSV 解析失败：' + e.message, 'err'); }
      });
    });
    $('#doImportFile').addEventListener('click', function () {
      var f = $('#jsonFile').files[0];
      if (!f) { UI.toast('请选择 JSON 文件', 'warn'); return; }
      UI.readFile(f).then(function (txt) {
        try { doImport(JSON.parse(txt), $('#impReplace').checked); }
        catch (e) { UI.toast('JSON 解析失败：' + e.message, 'err'); }
      });
    });
    $('#tplCsv').addEventListener('click', function () {
      var rows = [['题号', '品类', '题型', '难度', '题干', '选项A', '选项B', '选项C', '选项D', '选项E', '正确答案', '解析', '资料名称', '章节', '链接', '标签', '人群', '密级'],
        ['SRV-101', '伺服', '单选题', '初级', '示例题干：SV660N 的 EtherCAT 站地址如何设置？', '拨码设置', '软件分配', '主站扫描自动分配', '面板按键设置', '', 'C', '示例解析：EtherCAT 从站地址由主站组态分配。', 'SV660N 系列用户手册', '第 4 章', 'https://www.inovance.com/portal/product?pathIds=1&typeId=1', 'SV660N,通信组网', '技术工程师', '公开']];
      UI.download('汇川题库导入模板.csv', UI.toCSV(rows), 'text/csv');
      UI.toast('模板已下载', 'ok');
    });
    $('#expAllJson').addEventListener('click', function () {
      UI.download('汇川题库全量_' + S.todayKey() + '.json', JSON.stringify(Bank.raw(), null, 2), 'application/json');
      UI.toast('已导出', 'ok');
    });
    $('#expCat').addEventListener('click', function () {
      var c = $('#expCatSel').value;
      var list = Bank.raw().filter(function (q) { return q.category === c; });
      UI.download('汇川题库_' + Bank.catMeta(c).short + '_' + S.todayKey() + '.json', JSON.stringify(list, null, 2), 'application/json');
      UI.toast('已导出 ' + list.length + ' 题', 'ok');
    });
    $('#expTpl').addEventListener('click', function () {
      var sample = [{
        id: 'SRV-901', category: 'servo', type: 'single', difficulty: 1,
        stem: '示例题干（可删除）', options: { A: '选项A', B: '选项B', C: '选项C', D: '选项D' },
        answer: ['A'], analysis: '示例解析（不少于 40 字，说明干扰项错在哪）',
        source: { title: '资料名称', chapter: '章节', url: 'https://www.inovance.com/' },
        tags: ['标签1', '标签2'], roles: ['engineer'], security: 'public'
      }];
      UI.download('汇川题库JSON模板.json', JSON.stringify(sample, null, 2), 'application/json');
      UI.toast('模板已下载', 'ok');
    });
  }

  /* ================= 审核与上线 ================= */

  function viewReview() {
    var draft = Bank.raw().filter(function (q) { return S.questionStatus(q.id) === 'draft'; });
    var archived = Bank.raw().filter(function (q) { return S.questionStatus(q.id) === 'archived'; });
    function row(q, actionLabel, actionVal) {
      return '<div class="list-item">' +
        '<span class="tag warn">' + esc(q.id) + '</span>' +
        '<div style="flex:1;min-width:0"><div class="ttl" style="font-size:13px">' + esc(q.stem.slice(0, 56)) + (q.stem.length > 56 ? '…' : '') + '</div>' +
        '<div class="sub">' + esc(Bank.catName(q.category)) + ' · ' + esc(Bank.typeName(q.type)) + ' · ' + esc(Bank.diffName(q.difficulty)) + ' · ' + esc(Bank.secName(q.security || 'public')) + '</div></div>' +
        '<button class="btn ghost sm" data-preview="' + q.id + '">预览</button>' +
        '<button class="btn primary sm" data-status="' + actionVal + '" data-qid="' + q.id + '">' + actionLabel + '</button>' +
        '</div>';
    }
    return '' +
      '<div class="page-head"><h2>' + icon('check', 20) + '审核与上线</h2>' +
      '<p>新导入或编辑保存为草稿的题目在此审核上线；题库支持归档下线而不删除</p></div>' +
      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>待审核草稿（' + draft.length + '）</h3><div class="spacer"></div>' +
      (draft.length ? '<button class="btn sm primary" id="approveAll">全部上线</button>' : '') + '</div>' +
      (draft.length ? '<div class="list">' + draft.map(function (q) { return row(q, '通过并上线', 'published'); }).join('') + '</div>'
        : '<div class="empty"><div class="big">✅</div><p>没有待审核的题目</p></div>') +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>已归档（' + archived.length + '）</h3></div>' +
      (archived.length ? '<div class="list">' + archived.map(function (q) { return row(q, '恢复上线', 'published'); }).join('') + '</div>'
        : '<div class="empty"><p>暂无归档题目</p></div>') +
      '  </div>' +
      '</div>';
  }

  /* ================= 学员反馈 ================= */

  var FB_TYPE_NAME = { wrong_answer: '答案有误', typo: '文字错误', unclear: '表述不清', outdated: '内容过时', other: '其它问题' };

  function renderFeedbackTable(items) {
    if (!items || !items.length) {
      return '<div class="empty"><div class="big">📭</div><p>暂无学员反馈。学员在答题卡点击「反馈问题」后，这里会汇总显示。</p></div>';
    }
    return '<div class="table-wrap"><table class="tbl"><thead><tr>' +
      '<th style="width:120px">时间</th><th style="width:90px">题号</th><th class="center">类型</th>' +
      '<th>问题说明</th><th style="width:90px">提交人</th><th class="center">状态</th><th class="center">操作</th>' +
      '</tr></thead><tbody>' + items.map(function (f) {
        var q = Bank.byId(f.questionNo);
        return '<tr>' +
          '<td class="small mono">' + esc(String(f.createdAt || '').slice(5, 16)) + '</td>' +
          '<td class="mono small">' + esc(f.questionNo) + '</td>' +
          '<td class="center"><span class="tag warn">' + esc(FB_TYPE_NAME[f.type] || f.type) + '</span></td>' +
          '<td><div style="max-width:400px">' + esc(f.content) + '</div>' +
          (q ? '<div class="muted" style="font-size:11.5px;margin-top:3px">' + esc(q.stem.slice(0, 44)) + (q.stem.length > 44 ? '…' : '') + '</div>' : '') +
          '</td>' +
          '<td class="small">' + esc(f.userName || '-') + '</td>' +
          '<td class="center">' + (f.status === 'open'
            ? '<span class="tag danger">待处理</span>' : '<span class="tag ok">已处理</span>') + '</td>' +
          '<td class="center nowrap">' +
          (q ? '<button class="btn ghost sm" data-preview="' + q.id + '">看题目</button>' : '') +
          (f.status === 'open' ? '<button class="btn ghost sm" data-resolve="' + f.id + '">标记已处理</button>' : '') +
          '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  function bindFeedbackActions() {
    $$('[data-resolve]').forEach(function (b) {
      b.addEventListener('click', function () {
        var raw = b.getAttribute('data-resolve');
        var id = isRemote() ? Number(raw) : raw;
        after(S.resolveFeedback(id), function () {
          UI.toast('已标记为处理完成', 'ok');
          render();
        }, '操作失败');
      });
    });
    $$('[data-preview]').forEach(function (b) {
      b.addEventListener('click', function () { previewQuestion(b.getAttribute('data-preview')); });
    });
  }

  function viewFeedback() {
    if (isRemote()) {
      setTimeout(function () {
        S.server.feedbackList('all').then(function (d) {
          var box = document.getElementById('fbBox');
          if (!box) return;
          var qset = {};
          d.items.forEach(function (x) { qset[x.questionNo] = 1; });
          box.innerHTML = '<div class="grid c3 mb16" style="gap:10px">' +
            card('待处理反馈', String(d.openCount), '需核实题目', d.openCount ? 'danger' : 'ok') +
            card('累计反馈', String(d.total), '含已处理', '') +
            card('涉及题目', String(Object.keys(qset).length), '道题', 'warn') +
            '</div><div class="card">' + renderFeedbackTable(d.items) + '</div>';
          bindFeedbackActions();
        }).catch(function (e) {
          var box = document.getElementById('fbBox');
          if (box) box.innerHTML = '<div class="empty"><p>加载失败：' + esc(e.message) + '</p></div>';
        });
      }, 0);
      return '<div class="page-head"><h2>' + icon('flag', 20) + '学员反馈</h2>' +
        '<p>学员在答题时标记的题目问题；核实后请修订题目，并在此标记为已处理</p></div>' +
        '<div id="fbBox"><div class="card"><div class="empty"><p>加载中…</p></div></div></div>';
    }
    var items = S.feedbackList();
    var open = items.filter(function (f) { return f.status === 'open'; }).length;
    setTimeout(bindFeedbackActions, 0);
    return '<div class="page-head"><h2>' + icon('flag', 20) + '学员反馈</h2>' +
      '<p>当前为本地模式，仅显示本机记录；接入后端后由服务端统一汇总</p></div>' +
      '<div class="grid c3 mb16" style="gap:10px">' +
      card('待处理反馈', String(open), '需核实题目', open ? 'danger' : 'ok') +
      card('累计反馈', String(items.length), '含已处理', '') +
      '</div><div class="card" id="fbBox">' + renderFeedbackTable(items) + '</div>';
  }

  /* ================= 题库质量体检 ================= */

  function viewQuality() {
    var all = Bank.raw();
    if (!all.length) return '<div class="empty"><p>题库为空</p></div>';

    /* 1) 内容质量问题 */
    var noAnalysis = all.filter(function (q) { return !q.analysis || q.analysis.length < 20; });
    var noSource = all.filter(function (q) { return !q.source || !q.source.title; });
    var noTags = all.filter(function (q) { return !q.tags || !q.tags.length; });
    var noAudience = all.filter(function (q) { return !q.roles || !q.roles.length; });

    /* 2) 重复 / 高度相似题
       先用"规范化后完全相同"判定确定重复，再用字符二元组 Dice 相似度找高度相似题；
       仅比较前缀会把"同一份资料出处 + 不同考点"的题误判为重复，故必须比对整句。 */
    function normStem(s) {
      return String(s || '').replace(/[\s，。、；：（）()【】《》"'？！?！,.;:!！\-—]/g, '');
    }
    function diceCoefficient(a, b) {
      if (!a || !b) return 0;
      if (a === b) return 1;
      var grams = function (s) {
        var m = {};
        for (var i = 0; i < s.length - 1; i++) {
          var g = s.substr(i, 2);
          m[g] = (m[g] || 0) + 1;
        }
        return m;
      };
      var ma = grams(a), mb = grams(b);
      var ka = Object.keys(ma), kb = Object.keys(mb);
      if (!ka.length || !kb.length) return 0;
      var inter = 0;
      ka.forEach(function (k) { if (mb[k]) inter++; });
      return (2 * inter) / (ka.length + kb.length);
    }

    var normalized = all.map(function (q) {
      return { q: q, text: normStem(q.stem) };
    });
    var exactMap = {};
    normalized.forEach(function (n) { (exactMap[n.text] = exactMap[n.text] || []).push(n.q); });
    var dupGroups = Object.keys(exactMap)
      .filter(function (k) { return exactMap[k].length > 1; })
      .map(function (k) { return { kind: 'exact', items: exactMap[k], score: 1 }; });

    var nearGroups = [];
    var used = {};
    for (var i = 0; i < normalized.length; i++) {
      for (var j = i + 1; j < normalized.length; j++) {
        var A = normalized[i], B = normalized[j];
        if (A.text === B.text) continue;                       // 已由完全相同判定覆盖
        if (used[A.q.id + '|' + B.q.id]) continue;
        if (A.q.category !== B.q.category) continue;           // 跨品类不比对（考点天然不同）
        if (Math.abs(A.text.length - B.text.length) > 12) continue;
        var score = diceCoefficient(A.text, B.text);
        if (score >= 0.88) {
          nearGroups.push({ kind: 'near', items: [A.q, B.q], score: score });
          used[A.q.id + '|' + B.q.id] = 1;
        }
      }
    }
    dupGroups = dupGroups.concat(nearGroups);

    /* 3) 标签统计 */
    var tagCount = {};
    all.forEach(function (q) {
      (q.tags || []).forEach(function (t) { tagCount[t] = (tagCount[t] || 0) + 1; });
    });
    var tagRank = Object.keys(tagCount).sort(function (a, b) { return tagCount[b] - tagCount[a]; });
    var rareTags = tagRank.filter(function (t) { return tagCount[t] === 1; });

    /* 4) 分布体检 */
    function dist(key, list) {
      var m = {};
      list.forEach(function (q) { var v = q[key]; m[v] = (m[v] || 0) + 1; });
      return m;
    }
    var byType = dist('type', all);
    var byDiff = dist('difficulty', all);
    var bySec = dist('security', all);

    var issues = noAnalysis.length + noSource.length + dupGroups.length;

    /* -------- 渲染 -------- */
    var html = '' +
      '<div class="page-head"><h2>' + icon('target', 20) + '题库质量体检</h2>' +
      '<p>基于当前题库自动检测：内容缺失、重复题、标签规范与分布合理性</p></div>' +

      '<div class="grid c4 mb16">' +
      card('题库总量', all.length + '<small> 题</small>', '五大品类', '') +
      card('内容缺失', String(noAnalysis.length + noSource.length), '缺解析 ' + noAnalysis.length + ' · 缺溯源 ' + noSource.length, (noAnalysis.length + noSource.length) ? 'warn' : 'ok') +
      card('疑似重复题', String(dupGroups.length) + '<small> 组</small>', dupGroups.length ? '需人工复核' : '未发现重复', dupGroups.length ? 'danger' : 'ok') +
      card('标签规范', String(Object.keys(tagCount).length) + '<small> 个</small>', '仅用 1 次的标签 ' + rareTags.length + ' 个', rareTags.length > 10 ? 'warn' : '') +
      '</div>' +

      (issues ? '<div class="note warn small mb16">' + icon('info', 14) +
        ' 发现 ' + issues + ' 项需关注的问题：建议先处理「疑似重复题」与「缺解析」的题目，再到「学员反馈」页处理学员报错。</div>'
        : '<div class="note small mb16">' + icon('check', 14) + ' 未发现明显质量问题，题库状态良好。</div>') +

      /* 重复题 */
      '<div class="card"><div class="card-head"><h3>' + icon('layers', 16) + ' 疑似重复题（' + dupGroups.length + ' 组）</h3>' +
      '<div class="spacer"></div><span class="card-sub">同品类比对：规范化后完全一致，或相似度 ≥ 88%</span></div>' +
      (dupGroups.length ? '<div class="list">' + dupGroups.map(function (g) {
        var tag = g.kind === 'exact'
          ? '<span class="tag danger">完全重复</span>'
          : '<span class="tag warn">相似度 ' + Math.round(g.score * 100) + '%</span>';
        return '<div class="list-item" style="align-items:flex-start;flex-direction:column;gap:6px">' +
          '<div class="tag-list">' + tag + g.items.map(function (q) { return '<span class="tag">' + esc(q.id) + '</span>'; }).join('') + '</div>' +
          g.items.map(function (q) {
            return '<div class="small"><b class="mono">' + esc(q.id) + '</b>　' + esc(q.stem.slice(0, 78)) + (q.stem.length > 78 ? '…' : '') + '</div>';
          }).join('') +
          '<div class="btn-row">' + g.items.map(function (q) {
            return '<button class="btn ghost sm" data-preview="' + q.id + '">查看 ' + esc(q.id) + '</button>';
          }).join('') + '</div></div>';
      }).join('') + '</div>' : '<div class="empty"><p>未发现重复或高度相似的题目</p></div>') +
      '</div>' +

      '<div class="grid c2">' +
      /* 内容缺失清单 */
      '  <div class="card"><div class="card-head"><h3>' + icon('edit', 16) + ' 内容缺失清单</h3></div>' +
      (function () {
        var rows = [];
        noAnalysis.slice(0, 8).forEach(function (q) { rows.push({ id: q.id, why: '解析过短或缺失' }); });
        noSource.slice(0, 8).forEach(function (q) { rows.push({ id: q.id, why: '缺少资料溯源' }); });
        if (!rows.length) return '<div class="empty"><p>全部题目均有解析与溯源</p></div>';
        return '<div class="list">' + rows.slice(0, 12).map(function (r) {
          return '<div class="list-item"><span class="tag warn">' + esc(r.why) + '</span>' +
            '<div style="flex:1"><b class="mono small">' + esc(r.id) + '</b></div>' +
            '<button class="btn ghost sm" data-preview="' + r.id + '">查看</button></div>';
        }).join('') + '</div>' +
          (rows.length > 12 ? '<div class="small muted mt8">另有 ' + (rows.length - 12) + ' 项未列出</div>' : '');
      })() +
      '    <div class="divider"></div>' +
      '    <div class="small muted">缺标签 ' + noTags.length + ' 题 · 缺适用人群 ' + noAudience.length + ' 题</div>' +
      '  </div>' +

      /* 分布体检 */
      '  <div class="card"><div class="card-head"><h3>' + icon('chart', 16) + ' 分布体检</h3></div>' +
      UI.hbars([
        { label: '入门', value: byDiff[1] || 0, suffix: ' 题', color: '#12996b' },
        { label: '中级', value: byDiff[2] || 0, suffix: ' 题', color: '#0b5cab' },
        { label: '高级', value: byDiff[3] || 0, suffix: ' 题', color: '#d98412' }
      ]) +
      '    <div class="divider"></div>' +
      UI.hbars(S.TYPES.map(function (t) {
        return { label: t.name, value: byType[t.key] || 0, suffix: ' 题', color: '#7a5af5' };
      })) +
      '    <div class="divider"></div>' +
      UI.hbars(S.SECURITY.map(function (s) {
        return {
          label: s.name, value: bySec[s.key] || 0, suffix: ' 题',
          color: s.key === 'confidential' ? '#d93a3f' : s.key === 'internal' ? '#d98412' : '#12996b'
        };
      })) +
      '    <div class="note small mt12">建议配比：入门 40% / 中级 40% / 高级 20%；涉密题控制在 15% 以内。</div>' +
      '  </div>' +
      '</div>' +

      /* 标签规范 */
      '<div class="card"><div class="card-head"><h3>' + icon('flag', 16) + ' 标签规范建议</h3>' +
      '<div class="spacer"></div><span class="card-sub">高频标签可用于组卷与推荐</span></div>' +
      '<div class="tag-list mb12">' + tagRank.slice(0, 24).map(function (t) {
        return '<span class="tag brand">' + esc(t) + ' <b>' + tagCount[t] + '</b></span>';
      }).join('') + '</div>' +
      (rareTags.length ? '<div class="small muted">仅出现 1 次的标签 ' + rareTags.length + ' 个：' +
        esc(rareTags.slice(0, 30).join('、')) + (rareTags.length > 30 ? ' …' : '') +
        '<br><span class="muted">建议统一命名（如系列名用英文型号、场景用固定词表），便于后续按知识点组卷。</span></div>' : '') +
      '</div>' +

      /* 使用情况（仅 API 模式有作答统计） */
      (function () {
        var withUsage = all.filter(function (q) { return q.usageCount !== undefined; });
        if (!withUsage.length) return '';
        var used = withUsage.filter(function (q) { return q.usageCount > 0; });
        var never = withUsage.filter(function (q) { return !q.usageCount; });
        var highWrong = used.filter(function (q) {
          return q.usageCount >= 3 && (1 - q.rightCount / q.usageCount) >= 0.7;
        }).sort(function (a, b) {
          return (1 - b.rightCount / b.usageCount) - (1 - a.rightCount / a.usageCount);
        });
        return '<div class="grid c2">' +
          '<div class="card"><div class="card-head"><h3>' + icon('zap', 16) + ' 使用情况</h3>' +
          '<div class="spacer"></div><span class="card-sub">来自服务端作答统计</span></div>' +
          '<div class="grid c3" style="gap:10px">' +
          '<div class="stat"><div class="label">已覆盖</div><div class="value" style="font-size:20px">' + used.length + '</div><div class="foot">占总题库 ' + Math.round(used.length / withUsage.length * 100) + '%</div></div>' +
          '<div class="stat"><div class="label">零作答</div><div class="value" style="font-size:20px;color:' + (never.length ? 'var(--warn)' : 'var(--ok)') + '">' + never.length + '</div><div class="foot">从未被练习</div></div>' +
          '<div class="stat"><div class="label">高错率题</div><div class="value" style="font-size:20px;color:' + (highWrong.length ? 'var(--danger)' : 'var(--ok)') + '">' + highWrong.length + '</div><div class="foot">错率≥70%且作答≥3次</div></div>' +
          '</div>' +
          '<div class="note small mt12">' + icon('info', 14) +
          ' 零作答题建议检查是否被密级或状态限制；高错率题需复核题干是否有歧义、答案是否正确。</div>' +
          '</div>' +
          '<div class="card"><div class="card-head"><h3>' + icon('wrong', 16) + ' 高错率题 TOP</h3></div>' +
          (highWrong.length ? '<div class="list">' + highWrong.slice(0, 8).map(function (q) {
            var rate = Math.round((1 - q.rightCount / q.usageCount) * 100);
            return '<div class="list-item"><span class="tag danger">' + rate + '%</span>' +
              '<div style="flex:1;min-width:0"><div class="ttl" style="font-size:13px">' + esc(q.stem.slice(0, 40)) + (q.stem.length > 40 ? '…' : '') + '</div>' +
              '<div class="sub">' + esc(q.id) + ' · 作答 ' + q.usageCount + ' 次 · 答对 ' + q.rightCount + ' 次</div></div>' +
              '<button class="btn ghost sm" data-preview="' + q.id + '">查看</button></div>';
          }).join('') + '</div>' : '<div class="empty"><p>暂无足够作答数据（作答 ≥3 次才纳入统计）</p></div>') +
          '</div></div>';
      })();

    setTimeout(function () {
      $$('[data-preview]').forEach(function (b) {
        b.addEventListener('click', function () { previewQuestion(b.getAttribute('data-preview')); });
      });
    }, 0);
    return html;
  }

  /* ================= 考试任务 ================= */

  function viewTasks() {
    var list = S.taskList();
    return '' +
      '<div class="page-head"><h2>' + icon('exam', 20) + '考试任务</h2>' +
      '<p>按角色发布考试任务，学员端「考试任务」中自动出现；成绩与得分进入数据报表</p></div>' +

      '<div class="grid c2" style="grid-template-columns:1fr 1fr">' +
      '  <div class="card"><div class="card-head"><h3>发布新任务</h3></div>' +
      '    <div class="field"><label>任务名称</label><input type="text" id="tTitle" placeholder="如：2026 年新员工产品知识摸底考"></div>' +
      '    <div class="inline-fields">' +
      '      <div class="field"><label>考试范围</label><select id="tCat"><option value="all">综合（五大品类）</option>' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '">' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
      '      <div class="field"><label>题量</label><input type="number" id="tCount" value="20" min="5" max="100"></div>' +
      '    </div>' +
      '    <div class="inline-fields">' +
      '      <div class="field"><label>时长（分钟）</label><input type="number" id="tMinutes" value="30" min="5" max="180"></div>' +
      '      <div class="field"><label>及格分</label><input type="number" id="tPass" value="60" min="1" max="100"></div>' +
      '      <div class="field"><label>截止日期</label><input type="date" id="tDeadline"></div>' +
      '    </div>' +
      '    <div class="field"><label>适用角色（不选=全部可见）</label><div class="chips" id="tRoles">' +
      Object.keys(S.ROLE_DEFS).map(function (k) {
        return '<button class="chip" data-r="' + k + '">' + esc(S.ROLE_DEFS[k].label) + '</button>';
      }).join('') + '</div></div>' +
      '    <label class="checkline mb12"><input type="checkbox" id="tRetake"> 允许重复考试（取最高分）</label>' +
      '    <button class="btn primary" id="createTask">' + icon('plus', 15) + ' 发布任务</button>' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>已发布任务（' + list.length + '）</h3></div>' +
      (list.length ? '<div class="list">' + list.map(function (t) {
        return '<div class="list-item">' +
          '<div style="flex:1;min-width:0"><div class="ttl">' + esc(t.title) + ' ' + (t.status === 'closed' ? '<span class="tag">已关闭</span>' : '<span class="tag ok">进行中</span>') + '</div>' +
          '<div class="sub">' + esc(t.category === 'all' ? '综合' : Bank.catName(t.category)) + ' · ' + t.count + ' 题 · ' + t.minutes + ' 分钟 · 及格 ' + t.passScore +
          (t.deadline ? ' · 截止 ' + esc(UI.fmtDate(t.deadline)) : '') + (t.roles && t.roles.length ? ' · 限定 ' + t.roles.map(function (r) { return S.ROLE_DEFS[r] ? S.ROLE_DEFS[r].label : r; }).join('/') : '') + '</div>' +
          '<div class="sub">发布人 ' + esc(t.createdBy || '-') + ' · ' + esc(UI.fmtDate(t.createdAt, true)) + ' · 已考 ' + S.examList().filter(function (e) { return e.taskId === t.id; }).length + ' 人次</div></div>' +
          '<button class="btn ghost sm" data-toggle-task="' + t.id + '">' + (t.status === 'closed' ? '重新开放' : '关闭') + '</button>' +
          '<button class="btn ghost sm" style="color:var(--danger)" data-del-task="' + t.id + '">删除</button>' +
          '</div>';
      }).join('') + '</div>' : '<div class="empty"><div class="big">📋</div><p>还没有发布考试任务</p></div>') +
      '  </div>' +
      '</div>';
  }

  function bindTasks() {
    $$('#tRoles .chip').forEach(function (c) { c.addEventListener('click', function () { c.classList.toggle('on'); }); });
    $('#createTask').addEventListener('click', function () {
      var title = $('#tTitle').value.trim();
      if (!title) { UI.toast('请填写任务名称', 'warn'); return; }
      after(S.addTask({
        title: title,
        category: $('#tCat').value,
        count: Math.max(5, Number($('#tCount').value) || 20),
        minutes: Math.max(5, Number($('#tMinutes').value) || 30),
        passScore: Math.min(100, Math.max(1, Number($('#tPass').value) || 60)),
        deadline: $('#tDeadline').value || '',
        roles: $$('#tRoles .chip.on').map(function (c) { return c.getAttribute('data-r'); }),
        allowRetake: $('#tRetake').checked,
        status: 'open'
      }), function () {
        UI.toast('考试任务已发布', 'ok');
        render();
      }, '发布失败');
    });
    $$('[data-toggle-task]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-toggle-task');
        var t = S.taskList().filter(function (x) { return String(x.id) === String(id); })[0];
        after(S.updateTask(id, { status: t.status === 'closed' ? 'open' : 'closed' }), function () {
          render();
        }, '操作失败');
      });
    });
    $$('[data-del-task]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-del-task');
        UI.confirm('删除该考试任务？已产生的考试成绩将保留。', { danger: true }).then(function (ok) {
          if (!ok) return;
          after(S.removeTask(id), function () { UI.toast('任务已删除', 'ok'); render(); }, '删除失败');
        });
      });
    });
  }

  /* ================= 数据报表 ================= */

  function viewReports() {
    var ov = Bank.overview();
    var st = Engine.stats();
    var exams = S.examList();

    var byCat = {};
    S.CATEGORIES.forEach(function (c) { byCat[c.key] = { right: 0, wrong: 0, answered: 0 }; });
    examItems().forEach(function () {
      /* 逐题明细统计在下面统一处理 */
    });
    exams.forEach(function (e) {
      (e.detail || []).forEach(function (d) {
        var m = byCat[d.category] || (byCat[d.category] = { right: 0, wrong: 0, answered: 0 });
        if (d.correct === true) { m.right++; m.answered++; }
        else if (d.correct === false) { m.wrong++; m.answered++; }
      });
    });

    return '' +
      '<div class="page-head"><h2>' + icon('chart', 20) + '数据报表</h2>' +
      '<p>题库维度 · 考试维度 · 个人维度；支持导出 CSV 用于培训月度总结</p></div>' +

      '<div class="grid c4 mb16">' +
      card('题库总量', ov.total + '<small> 题</small>', '五大品类', '') +
      card('已上线', String(Bank.raw().filter(function (q) { return S.questionStatus(q.id) === 'published'; }).length), '可被学员练习', 'ok') +
      card('考试人次', String(exams.length), '含任务与自主模拟', 'warn') +
      card('平均得分', exams.length ? Math.round(exams.reduce(function (a, e) { return a + e.percent; }, 0) / exams.length * 10) / 10 + '<small> 分</small>' : '—', '全部考试记录', '') +
      '</div>' +

      '<div class="card"><div class="card-head"><h3>题库维度统计</h3><div class="spacer"></div>' +
      '  <button class="btn sm" id="repBank">' + icon('download', 14) + ' 导出题库维度 CSV</button></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr>' +
      '<th>品类</th><th class="center">题量</th><th class="center">单选</th><th class="center">多选</th><th class="center">判断</th><th class="center">填空</th>' +
      '<th class="center">简答</th><th class="center">场景</th><th class="center">涉密题</th><th class="center">公开题</th></tr></thead><tbody>' +
      S.CATEGORIES.map(function (c) {
        var list = Bank.all().filter(function (q) { return q.category === c.key; });
        function cnt(t) { return list.filter(function (q) { return q.type === t; }).length; }
        return '<tr><td>' + esc(c.name) + '</td>' +
          '<td class="center"><b>' + list.length + '</b></td>' +
          '<td class="center">' + cnt('single') + '</td><td class="center">' + cnt('multi') + '</td>' +
          '<td class="center">' + cnt('judge') + '</td><td class="center">' + cnt('fill') + '</td>' +
          '<td class="center">' + cnt('short') + '</td>' +
          '<td class="center">' + cnt('scenario') + '</td>' +
          '<td class="center">' + list.filter(function (q) { return q.security === 'confidential'; }).length + '</td>' +
          '<td class="center">' + list.filter(function (q) { return (q.security || 'public') === 'public'; }).length + '</td></tr>';
      }).join('') + '</tbody></table></div></div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>考试得分分布</h3></div>' +
      (exams.length ? UI.barChart(exams.slice(0, 12).reverse().map(function (e, i) {
        return { label: '第' + (i + 1) + '次', value: e.percent, color: e.passed ? '#12996b' : '#f0a2a4' };
      }), { height: 200 }) : '<div class="empty"><p>暂无考试数据</p></div>') +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>逐题正确率（错得最多的题）</h3></div>' +
      (function () {
        var map = {};
        exams.forEach(function (e) {
          (e.detail || []).forEach(function (d) {
            map[d.qid] = map[d.qid] || { right: 0, wrong: 0 };
            if (d.correct === true) map[d.qid].right++;
            else if (d.correct === false) map[d.qid].wrong++;
          });
        });
        var rows = Object.keys(map).map(function (k) {
          var m = map[k], tot = m.right + m.wrong;
          return { qid: k, rate: tot ? m.right / tot : 0, tot: tot, wrong: m.wrong };
        }).filter(function (r) { return r.wrong > 0; }).sort(function (a, b) { return a.rate - b.rate; }).slice(0, 8);
        if (!rows.length) return '<div class="empty"><p>暂无足够数据</p></div>';
        return '<div class="list">' + rows.map(function (r) {
          var q = Bank.byId(r.qid);
          return '<div class="list-item"><span class="tag danger">' + Math.round(r.rate * 100) + '%</span>' +
            '<div style="flex:1;min-width:0"><div class="ttl" style="font-size:13px">' + esc(q ? q.stem.slice(0, 42) : r.qid) + (q && q.stem.length > 42 ? '…' : '') + '</div>' +
            '<div class="sub">' + esc(r.qid) + ' · 作答 ' + r.tot + ' 次 · 错误 ' + r.wrong + ' 次</div></div></div>';
        }).join('') + '</div>';
      })() +
      '  </div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><h3>个人维度（本机账号）</h3><div class="spacer"></div>' +
      '  <button class="btn sm" id="repUser">' + icon('download', 14) + ' 导出个人维度 CSV</button></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr>' +
      '<th>账号</th><th>角色</th><th class="center">作答次数</th><th class="center">正确率</th><th class="center">覆盖题量</th>' +
      '<th class="center">待复习错题</th><th class="center">考试次数</th><th class="center">平均分</th></tr></thead><tbody>' +
      '<tr><td>' + esc(S.user().name) + '</td><td>' + esc(S.roleDef().label) + '</td>' +
      '<td class="center">' + st.answeredTotal + '</td>' +
      '<td class="center">' + (st.rate == null ? '—' : st.rate + '%') + '</td>' +
      '<td class="center">' + Math.round(st.coverage) + '%</td>' +
      '<td class="center">' + st.wrongOpen + '</td>' +
      '<td class="center">' + exams.length + '</td>' +
      '<td class="center">' + (exams.length ? Math.round(exams.reduce(function (a, e) { return a + e.percent; }, 0) / exams.length * 10) / 10 : '—') + '</td></tr>' +
      '</tbody></table></div>' +
      '<div class="note small mt12">' + icon('info', 14) + ' 当前为单机版：数据保存在本机浏览器。企业部署版可将本页指标对接后端数据库（MySQL/PostgreSQL），实现按团队、按人、按题库的多维报表与权限隔离。</div>' +
      '</div>';
  }

  function examItems() { return S.examList(); }

  function bindReports() {
    $('#repBank').addEventListener('click', function () {
      var rows = [['品类', '题量', '单选', '多选', '判断', '填空', '简答', '场景', '涉密题', '公开题']];
      S.CATEGORIES.forEach(function (c) {
        var list = Bank.all().filter(function (q) { return q.category === c.key; });
        function cnt(t) { return list.filter(function (q) { return q.type === t; }).length; }
        rows.push([c.name, list.length, cnt('single'), cnt('multi'), cnt('judge'), cnt('fill'), cnt('short'), cnt('scenario'),
          list.filter(function (q) { return q.security === 'confidential'; }).length,
          list.filter(function (q) { return (q.security || 'public') === 'public'; }).length]);
      });
      UI.download('题库维度统计_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
      UI.toast('已导出', 'ok');
    });
    $('#repUser').addEventListener('click', function () {
      var st = Engine.stats();
      var rows = [['账号', '角色', '部门', '作答次数', '正确率%', '覆盖率%', '待复习错题', '考试次数', '平均分']];
      var exams = S.examList();
      rows.push([S.user().name, S.roleDef().label, S.user().dept || '', st.answeredTotal,
        st.rate == null ? '' : st.rate, Math.round(st.coverage), st.wrongOpen, exams.length,
        exams.length ? Math.round(exams.reduce(function (a, e) { return a + e.percent; }, 0) / exams.length * 10) / 10 : '']);
      UI.download('个人维度统计_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
      UI.toast('已导出', 'ok');
    });
  }

  /* ================= 权限矩阵 ================= */

  function viewPerm() {
    var perms = [
      ['刷题 / 考试', ['quiz', 'exam']],
      ['查看题库（管理端）', ['bank.read']],
      ['新增 / 编辑题目', ['bank.write']],
      ['审核上线', ['bank.review']],
      ['批量导入', ['bank.import']],
      ['发布考试任务', ['task.write']],
      ['查看团队报表', ['report.all']],
      ['查看个人报表', ['report.self']],
      ['可见涉密题库', ['security.confidential']],
      ['可见内部题库', ['security.internal']],
      ['可见公开题库', ['security.public']]
    ];
    var roleKeys = Object.keys(S.ROLE_DEFS);
    return '' +
      '<div class="page-head"><h2>' + icon('shield', 20) + '角色与权限</h2>' +
      '<p>四级权限体系：涉密题库与团队数据按角色隔离，满足内部培训与对外赋能的双重要求</p></div>' +

      '<div class="grid c4 mb16">' + roleKeys.map(function (k) {
        var r = S.ROLE_DEFS[k];
        return '<div class="card"><div class="card-head"><h3 style="color:' + r.color + '">' + esc(r.label) + '</h3></div>' +
          '<p class="small muted">' + esc(r.desc) + '</p>' +
          '<div class="tag-list mt8"><span class="tag">权限项 ' + r.perms.length + '</span>' +
          (r.perms.indexOf('security.confidential') >= 0 ? '<span class="tag danger">可见涉密</span>' : '') +
          (r.perms.indexOf('report.all') >= 0 ? '<span class="tag brand">团队报表</span>' : '<span class="tag">仅个人数据</span>') +
          '</div></div>';
      }).join('') + '</div>' +

      '<div class="card"><div class="card-head"><h3>权限对照表</h3></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>功能权限</th>' +
      roleKeys.map(function (k) { return '<th class="center">' + esc(S.ROLE_DEFS[k].label) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      perms.map(function (p) {
        return '<tr><td>' + esc(p[0]) + '</td>' + roleKeys.map(function (k) {
          var ok = p[1].some(function (x) { return S.ROLE_DEFS[k].perms.indexOf(x) >= 0; });
          return '<td class="center ' + (ok ? 'perm-yes' : 'perm-no') + '">' + (ok ? '✓' : '—') + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="note small mt12">权限在代码层（store.js 的 ROLE_DEFS）集中定义，题库过滤在数据层执行：越权角色不仅界面不可见，数据也不会被加载。</div>' +
      '</div>';
  }

  /* ================= 操作日志 ================= */

  function viewLog() {
    if (isRemote()) {
      // API 模式：日志来自服务端
      setTimeout(function () {
        S.server.auditLogs(1, 100).then(function (d) {
          var box = document.getElementById('logBox');
          if (!box) return;
          box.innerHTML = (d.items && d.items.length)
            ? '<div class="table-wrap"><table class="tbl"><thead><tr><th style="width:180px">时间</th><th style="width:130px">操作人</th><th>操作内容</th></tr></thead><tbody>' +
              d.items.map(function (l) {
                return '<tr><td class="small mono">' + esc(l.at) + '</td><td>' + esc(l.by) + '</td><td>' + esc(l.message) + '</td></tr>';
              }).join('') + '</tbody></table></div>'
            : '<div class="empty"><p>暂无操作记录</p></div>';
        }).catch(function (e) {
          var box = document.getElementById('logBox');
          if (box) box.innerHTML = '<div class="empty"><p>日志加载失败：' + esc(e.message) + '</p></div>';
        });
      }, 0);
      return '' +
        '<div class="page-head"><h2>' + icon('clock', 20) + '操作日志</h2>' +
        '<p>题库变更、导入导出、任务发布等关键操作留痕，便于审计追溯（数据来自服务端）</p></div>' +
        '<div class="card" id="logBox"><div class="empty"><p>加载中…</p></div></div>';
    }
    var logs = S.auditLog();
    return '' +
      '<div class="page-head"><h2>' + icon('clock', 20) + '操作日志</h2>' +
      '<p>题库变更、导入导出、任务发布等关键操作留痕，便于审计追溯</p></div>' +
      '<div class="card">' +
      (logs.length ? '<div class="table-wrap"><table class="tbl"><thead><tr><th style="width:170px">时间</th><th style="width:130px">操作人</th><th>操作内容</th></tr></thead><tbody>' +
        logs.map(function (l) {
          return '<tr><td class="small mono">' + esc(UI.fmtDate(l.at, true)) + '</td><td>' + esc(l.by) + '</td><td>' + esc(l.msg) + '</td></tr>';
        }).join('') + '</tbody></table></div>'
        : '<div class="empty"><p>暂无操作记录</p></div>') +
      '</div>' +
      '<div class="btn-row"><button class="btn" id="expLog">' + icon('download', 15) + ' 导出日志 CSV</button></div>';
  }

  /* ================= 事件绑定 ================= */

  function bind() {
    // 题库筛选
    if (A.route === 'bank') {
      ['fCat', 'fType', 'fDiff', 'fStatus', 'fSec'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('change', function () {
          A.bankFilter[{ fCat: 'cat', fType: 'type', fDiff: 'diff', fStatus: 'status', fSec: 'sec' }[id]] = el.value;
          A.bankPage = 1;
          render();
        });
      });
      var kw = $('#fKw');
      if (kw) {
        kw.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { A.bankFilter.kw = kw.value.trim(); A.bankPage = 1; render(); }
        });
        kw.addEventListener('blur', function () {
          if (A.bankFilter.kw !== kw.value.trim()) { A.bankFilter.kw = kw.value.trim(); A.bankPage = 1; render(); }
        });
      }
      var fr = $('#fReset');
      if (fr) fr.addEventListener('click', function () {
        A.bankFilter = { cat: '', type: '', diff: '', status: '', kw: '', sec: '' };
        A.bankPage = 1; render();
      });
      var pp = $('#prevPage'), np = $('#nextPage');
      if (pp) pp.addEventListener('click', function () { A.bankPage = Math.max(1, (A.bankPage || 1) - 1); render(); });
      if (np) np.addEventListener('click', function () { A.bankPage = (A.bankPage || 1) + 1; render(); });

      /* 批量选择与批量操作 */
      var bulkBar = $('#bulkBar');
      function selectedIds() {
        return $$('.rowChk:checked').map(function (c) { return c.getAttribute('data-qid'); });
      }
      function refreshBulk() {
        var n = selectedIds().length;
        if (bulkBar) bulkBar.style.display = n ? 'flex' : 'none';
        var sc = $('#selCount');
        if (sc) sc.textContent = n;
      }
      var chkAll = $('#chkAll');
      if (chkAll) chkAll.addEventListener('change', function () {
        /* 仅作用于题库行，避免误选知识库列表的复选框 */
        $$('.rowChk').forEach(function (c) { if (!c.hasAttribute('data-kbno')) c.checked = chkAll.checked; });
        refreshBulk();
      });
      $$('.rowChk').forEach(function (c) { c.addEventListener('change', refreshBulk); });
      var bc = $('#bulkClear');
      if (bc) bc.addEventListener('click', function () {
        $$('.rowChk').forEach(function (c) { c.checked = false; });
        if (chkAll) chkAll.checked = false;
        refreshBulk();
      });
      $$('[data-bulk]').forEach(function (b) {
        b.addEventListener('click', function () { bulkRun(b.getAttribute('data-bulk')); });
      });
      var ej = $('#expJson');
      if (ej) ej.addEventListener('click', function () {
        UI.download('汇川题库_筛选结果_' + S.todayKey() + '.json', JSON.stringify(filteredBank(), null, 2), 'application/json');
        UI.toast('已导出 ' + filteredBank().length + ' 题', 'ok');
      });
      var ec = $('#expCsv');
      if (ec) ec.addEventListener('click', function () {
        var rows = [['题号', '品类', '题型', '难度', '题干', '选项A', '选项B', '选项C', '选项D', '选项E', '正确答案', '解析', '资料名称', '章节', '链接', '标签', '人群', '密级', '状态']];
        filteredBank().forEach(function (q) {
          var o = q.options || {};
          rows.push([q.id, Bank.catName(q.category), Bank.typeName(q.type), Bank.diffName(q.difficulty), q.stem,
            o.A || '', o.B || '', o.C || '', o.D || '', o.E || '',
            Array.isArray(q.answer) ? q.answer.join('、') : q.answer,
            q.analysis, (q.source || {}).title || '', (q.source || {}).chapter || '', (q.source || {}).url || '',
            (q.tags || []).join('、'), (q.roles || []).map(function (r) { return Bank.roleName(r); }).join('、'),
            Bank.secName(q.security || 'public'), S.questionStatus(q.id)]);
        });
        UI.download('汇川题库_筛选结果_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
        UI.toast('已导出 CSV', 'ok');
      });
    }

    // 题目行操作
    $$('[data-status]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!canWrite() && !canReview()) { UI.toast('无权限操作', 'err'); return; }
        var qid = b.getAttribute('data-qid');
        var st = b.getAttribute('data-status');
        after(S.setQuestionStatus(qid, st), function () {
          UI.toast('已' + (st === 'published' ? '上线' : st === 'draft' ? '转为草稿' : '归档'), 'ok');
          render();
        }, '操作失败');
      });
    });
    $$('[data-del]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!canWrite()) { UI.toast('无权限操作', 'err'); return; }
        var qid = b.getAttribute('data-del');
        UI.confirm('删除题目 ' + qid + '？内置题目删除后可通过「恢复出厂」找回。', { danger: true }).then(function (ok) {
          if (!ok) return;
          after(S.deleteQuestion(qid), function () {
            UI.toast('已删除 ' + qid, 'ok');
            render();
          }, '删除失败');
        });
      });
    });
    $$('[data-preview]').forEach(function (b) {
      b.addEventListener('click', function () { previewQuestion(b.getAttribute('data-preview')); });
    });

    if (A.route === 'new' || A.route === 'edit') bindEditor();
    if (A.route === 'import') bindImport();
    if (A.route === 'tasks') bindTasks();
    if (A.route === 'reports') bindReports();
    if (A.route === 'kb-stats') bindKbStats();
    if (A.route === 'knowledge') {
      if (A.kbAct === 'new' || A.kbAct === 'edit') bindKbEditor(kbEditorSeed());
      else bindKnowledge();
    }

    if (A.route === 'review') {
      var all = $('#approveAll');
      if (all) all.addEventListener('click', function () {
        Bank.raw().filter(function (q) { return S.questionStatus(q.id) === 'draft'; })
          .forEach(function (q) { S.setQuestionStatus(q.id, 'published'); });
        UI.toast('全部草稿已上线', 'ok');
        render();
      });
    }
    if (A.route === 'log') {
      var el = $('#expLog');
      if (el) el.addEventListener('click', function () {
        var rows = [['时间', '操作人', '操作内容']];
        S.auditLog().forEach(function (l) { rows.push([UI.fmtDate(l.at, true), l.by, l.msg]); });
        UI.download('操作日志_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
        UI.toast('已导出', 'ok');
      });
    }
  }

  /** 批量操作：逐题串行执行，避免并发请求过多；本地模式同步、API 模式异步均兼容 */
  function bulkRun(action) {
    var ids = $$('.rowChk:checked').filter(function (c) { return !c.hasAttribute('data-kbno'); })
      .map(function (c) { return c.getAttribute('data-qid'); });
    if (!ids.length) { UI.toast('请先勾选题目', 'warn'); return; }
    var label = { published: '上线', draft: '转草稿', archived: '归档', delete: '删除' }[action] || action;
    UI.confirm('将对选中的 ' + ids.length + ' 道题执行「批量' + label + '」，确定吗？',
      { danger: action === 'delete', title: '批量操作确认' }).then(function (ok) {
      if (!ok) return;
      var done = 0, failed = 0, i = 0;
      function step() {
        if (i >= ids.length) {
          UI.toast('批量' + label + '完成：成功 ' + done + ' 题' + (failed ? '，失败 ' + failed + ' 题' : ''),
            failed ? 'warn' : 'ok');
          render();
          return;
        }
        var qid = ids[i++];
        var p;
        try { p = action === 'delete' ? S.deleteQuestion(qid) : S.setQuestionStatus(qid, action); }
        catch (e) { failed++; step(); return; }
        if (p && typeof p.then === 'function') {
          p.then(function () { done++; step(); }).catch(function () { failed++; step(); });
        } else { done++; step(); }
      }
      step();
    });
  }

  function previewQuestion(qid) {
    var q = Bank.byId(qid);
    if (!q) return;
    var html = '<div class="qhead" style="border:none;padding:0 0 10px">' +
      '<span class="tag brand">' + esc(Bank.catMeta(q.category).short) + '</span>' +
      '<span class="tag outline">' + esc(Bank.typeName(q.type)) + '</span>' +
      '<span class="tag">' + esc(Bank.diffName(q.difficulty)) + '</span>' +
      '<span class="secmark ' + (q.security || 'public') + '">' + esc(Bank.secName(q.security || 'public')) + '</span>' +
      '<span class="tag outline mono">' + esc(q.id) + '</span></div>';
    html += '<div class="qstem">' + esc(q.stem) + '</div>';
    if (q.options) {
      html += '<div class="opts">' + Object.keys(q.options).map(function (k) {
        var right = (q.answer || []).indexOf(k) >= 0;
        return '<div class="opt locked' + (right ? ' is-correct' : '') + '"><span class="key">' + esc(k) + '</span><span class="txt">' + esc(q.options[k]) + '</span></div>';
      }).join('') + '</div>';
    } else {
      html += '<div class="ref-answer">' + esc(String(q.answer)) + '</div>';
    }
    html += '<div class="answer-panel is-correct mt12"><div class="title">' + icon('book', 15) + ' 解析</div>' +
      '<div class="ana">' + esc(q.analysis) + '</div>' +
      '<div class="src">' + esc((q.source || {}).title || '') + ' ' + esc((q.source || {}).chapter || '') + '</div></div>';
    UI.modal({ title: '题目预览 ' + q.id, html: html, wide: true });
  }

  /* ================= 知识库：常量与渲染原语 ================= */

  /** 二级分类兜底表（数据层 S.KB_TOPICS 优先） */
  var KB_TOPICS_FALLBACK = [
    { key: 'intro', name: '产品介绍' },
    { key: 'selection', name: '选型知识' },
    { key: 'param', name: '参数设置' },
    { key: 'install', name: '安装调试' },
    { key: 'fault', name: '常见故障' },
    { key: 'faq', name: '客户高频问答' },
    { key: 'script', name: '行业应用话术' }
  ];

  var KB_STATUS_NAME = { published: '已上线', draft: '草稿', archived: '已归档' };

  /** 内容块类型 → 中文名（编辑器下拉文案） */
  var KB_BLOCK_NAME = {
    h: '小标题', p: '段落', list: '列表', table: '表格', tip: '提示',
    steps: '步骤', faq: '问答', script: '话术对比', code: '代码', img: '图片'
  };

  /** 新增块时按类型的初始数据 */
  var KB_BLOCK_DEFAULT = {
    h: { type: 'h', text: '' },
    p: { type: 'p', text: '' },
    list: { type: 'list', items: [], ordered: false },
    table: { type: 'table', head: ['列 1', '列 2'], rows: [['', '']] },
    tip: { type: 'tip', text: '', kind: 'info' },
    steps: { type: 'steps', items: [] },
    faq: { type: 'faq', q: '', a: '' },
    script: { type: 'script', scene: '', bad: '', good: '' },
    code: { type: 'code', text: '', lang: '' },
    img: { type: 'img', src: '', caption: '' }
  };

  /** 块数据 → 纯文本，用于「预计阅读时长」估算 */
  function kbBlockText(b) {
    if (!b || typeof b !== 'object') return '';
    var t = b.type;
    var parts = [b.text, b.q, b.a, b.scene, b.bad, b.good, b.caption, b.src];
    if (Array.isArray(b.items)) parts = parts.concat(b.items);
    if (Array.isArray(b.head)) parts = parts.concat(b.head);
    if (Array.isArray(b.rows)) b.rows.forEach(function (r) { if (Array.isArray(r)) parts = parts.concat(r); });
    return parts.filter(function (x) { return typeof x === 'string' && x; }).join(' ');
  }

  /** 按分钟字数换算预计阅读时长 */
  function kbEstimateMinutes(blocks) {
    var len = 0;
    (blocks || []).forEach(function (b) { len += kbBlockText(b).length; });
    return Math.max(1, Math.round(len / 400));
  }

  function kbTopics() {
    return (S && Array.isArray(S.KB_TOPICS) && S.KB_TOPICS.length) ? S.KB_TOPICS : KB_TOPICS_FALLBACK;
  }

  /**
   * 内容块类型 key 列表
   * 数据层 S.KB_BLOCK_TYPES 可能是 ['h','p',...] 或 [{key,name},...] 两种形态，这里统一成 key 数组
   */
  function kbBlockTypes() {
    var src = (S && Array.isArray(S.KB_BLOCK_TYPES)) ? S.KB_BLOCK_TYPES : null;
    if (!src || !src.length) return ['h', 'p', 'list', 'table', 'tip', 'steps', 'faq', 'script', 'code', 'img'];
    return src.map(function (t) {
      if (t && typeof t === 'object') return t.key || t.type || '';
      return String(t == null ? '' : t);
    }).filter(Boolean);
  }

  function kbTopicName(k) {
    var list = kbTopics();
    for (var i = 0; i < list.length; i++) if (list[i].key === k) return list[i].name;
    return k || '—';
  }

  /** 块类型中文名：数据层给了 name 就用数据层的，否则用内置文案表 */
  function kbBlockName(t) {
    var src = (S && Array.isArray(S.KB_BLOCK_TYPES)) ? S.KB_BLOCK_TYPES : null;
    if (src) {
      for (var i = 0; i < src.length; i++) {
        if (src[i] && typeof src[i] === 'object' && src[i].key === t && src[i].name) return src[i].name;
      }
    }
    return KB_BLOCK_NAME[t] || t || '未知块';
  }

  function kbStatusTag(st) {
    if (st === 'draft') return '<span class="tag warn">草稿</span>';
    if (st === 'archived') return '<span class="tag">已归档</span>';
    if (st === 'published') return '<span class="tag ok">已上线</span>';
    return '<span class="tag">' + esc(st || '未知') + '</span>';
  }

  /** 仅允许 https / http / data:image / mailto 链接，其余一律置空 */
  function kbSafeUrl(u) {
    var s = String(u || '').trim();
    if (!s) return '';
    return /^(https?:|data:image\/|mailto:)/i.test(s) ? s : '';
  }

  function kbReadCount(no) {
    var m = A.kbReads;
    if (!m) return null;
    var v = m[no];
    return typeof v === 'number' ? v : null;
  }

  /** 行内渲染：**加粗** 与 `代码`（先转义再替换，防注入） */
  function kbInline(text) {
    return esc(text)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code style="background:var(--line-2);padding:1px 5px;border-radius:4px;font-size:12.5px">$1</code>');
  }

  /** 表格块渲染（复用 tbl 样式，横向可滚动） */
  function kbTableHtml(head, rows, compact) {
    var h = Array.isArray(head) ? head : [];
    var r = Array.isArray(rows) ? rows : [];
    if (!h.length && !r.length) return '';
    var html = '<div class="table-wrap"' + (compact ? ' style="max-height:300px;overflow:auto"' : '') + '><table class="tbl">';
    if (h.length) {
      html += '<thead><tr>' + h.map(function (c) {
        return '<th>' + kbInline(c == null ? '' : c) + '</th>';
      }).join('') + '</tr></thead>';
    }
    html += '<tbody>' + r.map(function (row) {
      var cells = Array.isArray(row) ? row : [row];
      return '<tr>' + cells.map(function (c) {
        return '<td>' + kbInline(c == null ? '' : c) + '</td>';
      }).join('') + '</tr>';
    }).join('') + '</tbody></table></div>';
    return html;
  }

  /**
   * 内容块渲染（管理端预览 / 用户端视觉一致）
   * 未知块类型与非法数据一律跳过，绝不抛错
   */
  function kbRenderBlock(b) {
    if (!b || typeof b !== 'object') return '';
    var text = function (v) { return String(v == null ? '' : v); };
    switch (b.type) {
      case 'h':
        return '<h3 style="font-size:15.5px;margin:4px 0 8px;padding-left:9px;border-left:3px solid var(--brand)">' + kbInline(text(b.text)) + '</h3>';
      case 'p':
        return '<p style="color:var(--text-2);white-space:pre-wrap;margin:0 0 10px">' + kbInline(text(b.text)) + '</p>';
      case 'list': {
        var lis = (Array.isArray(b.items) ? b.items : []).filter(function (x) { return x != null && String(x).trim(); });
        if (!lis.length) return '';
        var tag = b.ordered ? 'ol' : 'ul';
        return '<' + tag + ' style="margin:0 0 10px;padding-left:20px;color:var(--text-2)">' + lis.map(function (x) {
          return '<li style="margin:3px 0">' + kbInline(String(x)) + '</li>';
        }).join('') + '</' + tag + '>';
      }
      case 'table':
        return '<div style="margin:0 0 10px">' + kbTableHtml(b.head, b.rows, false) + '</div>';
      case 'tip': {
        var kind = b.kind === 'warn' ? 'warn' : b.kind === 'danger' ? 'danger' : '';
        var tIcon = b.kind === 'warn' || b.kind === 'danger' ? 'info' : 'info';
        return '<div class="note ' + kind + '" style="margin:0 0 10px">' + icon(tIcon, 14) + ' ' + kbInline(text(b.text)) + '</div>';
      }
      case 'steps': {
        var steps = (Array.isArray(b.items) ? b.items : []).filter(function (x) { return x != null && String(x).trim(); });
        if (!steps.length) return '';
        return '<div style="margin:0 0 10px">' + steps.map(function (x, i) {
          return '<div class="flex gap10" style="align-items:flex-start;margin:5px 0">' +
            '<span style="flex:none;width:20px;height:20px;border-radius:50%;background:var(--brand-50);color:var(--brand);font-size:12px;font-weight:700;display:grid;place-items:center;margin-top:2px">' + (i + 1) + '</span>' +
            '<span style="color:var(--text-2);flex:1">' + kbInline(String(x)) + '</span></div>';
        }).join('') + '</div>';
      }
      case 'faq':
        return '<div style="margin:0 0 10px;border:1px solid var(--line);border-radius:var(--radius-sm);overflow:hidden">' +
          '<div style="padding:9px 12px;background:var(--brand-50);font-weight:600;color:var(--brand)">Q：' + kbInline(text(b.q)) + '</div>' +
          '<div style="padding:10px 12px;color:var(--text-2);white-space:pre-wrap">A：' + kbInline(text(b.a)) + '</div>' +
          '</div>';
      case 'script':
        return '<div style="margin:0 0 10px">' +
          (b.scene ? '<div class="small muted" style="margin-bottom:6px">场景：' + kbInline(text(b.scene)) + '</div>' : '') +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px">' +
          '<div style="border:1px solid #f5d2d3;background:var(--danger-bg);border-radius:var(--radius-sm);padding:9px 12px">' +
          '<div class="small" style="color:var(--danger);font-weight:600;margin-bottom:3px">✗ 错误说法</div>' +
          '<div style="color:var(--text-2);white-space:pre-wrap">' + kbInline(text(b.bad)) + '</div></div>' +
          '<div style="border:1px solid #cbe9dd;background:var(--ok-bg);border-radius:var(--radius-sm);padding:9px 12px">' +
          '<div class="small" style="color:var(--ok);font-weight:600;margin-bottom:3px">✓ 标准说法</div>' +
          '<div style="color:var(--text-2);white-space:pre-wrap">' + kbInline(text(b.good)) + '</div></div>' +
          '</div></div>';
      case 'code':
        return '<pre style="background:#f7f9fc;border:1px solid var(--line);border-radius:var(--radius-sm);padding:10px 12px;font-size:12.5px;overflow:auto;margin:0 0 10px;color:var(--text-2)"><code>' +
          esc(text(b.text)) + '</code></pre>';
      case 'img': {
        var src = kbSafeUrl(b.src);
        if (!src) return '';
        return '<figure style="margin:0 0 10px;text-align:center">' +
          '<img src="' + esc(src) + '" alt="' + esc(b.caption || '') + '" style="max-width:100%;border-radius:var(--radius-sm);border:1px solid var(--line)">' +
          (b.caption ? '<figcaption class="small muted mt8">' + esc(b.caption) + '</figcaption>' : '') +
          '</figure>';
      }
      default:
        return '';
    }
  }

  /** 整篇内容渲染；未知类型跳过（不抛错） */
  function kbRenderContent(blocks) {
    if (!Array.isArray(blocks) || !blocks.length) {
      return '<div class="empty"><p>暂无正文内容</p></div>';
    }
    var out = blocks.map(kbRenderBlock).filter(Boolean).join('');
    return out || '<div class="empty"><p>正文块均为空或类型不受支持</p></div>';
  }

  function kbMeta(no, title, blocks, opts) {
    opts = opts || {};
    var tags = (opts.tags || []).slice(0, 8);
    return '<div class="qhead" style="border:none;padding:0 0 10px;flex-wrap:wrap">' +
      '<span class="tag outline mono">' + esc(no || '') + '</span>' +
      '<span class="tag brand">' + esc(kbTopicName(opts.topic)) + '</span>' +
      '<span class="tag">' + esc(Bank.catMeta(opts.category).short) + '</span>' +
      '<span class="secmark ' + esc(opts.security || 'public') + '">' + esc(Bank.secName(opts.security || 'public')) + '</span>' +
      (opts.level ? '<span class="tag">' + esc(['入门', '进阶', '深入'][Number(opts.level) - 1] || ('level ' + opts.level)) + '</span>' : '') +
      '<span class="tag outline">' + kbEstimateMinutes(blocks) + ' 分钟</span>' +
      '</div>' +
      '<div class="qstem" style="font-size:16.5px;margin-bottom:6px">' + esc(title || '') + '</div>' +
      (opts.summary ? '<p class="small muted" style="margin:0 0 10px">' + esc(opts.summary) + '</p>' : '') +
      (tags.length ? '<div class="tag-list mb12">' + tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' : '') +
      '<div class="divider"></div>';
  }

  function kbPreviewHtml(item) {
    var it = item || {};
    var blocks = Array.isArray(it.content) ? it.content : [];
    var html = kbMeta(it.id, it.title, blocks, it);
    html += kbRenderContent(blocks);
    if (it.source && it.source.title) {
      var su = kbSafeUrl(it.source.url);
      html += '<div class="answer-panel mt12"><div class="title">' + icon('link', 15) + ' 资料溯源</div>' +
        '<div class="ana">' + esc(it.source.title) + '</div>' +
        (su ? '<div class="src"><a href="' + esc(su) + '" target="_blank" rel="noopener">' + esc(su) + '</a></div>' : '') +
        '</div>';
    }
    return html;
  }

  /** 列表「预览」弹窗：渲染内容块 */
  /** 导出单条知识为 PDF：复用知识库模块（kb.js）的打印版式，走浏览器打印管线 */
  function kbExportPdf(item) {
    if (!window.IqKB || !window.IqKB.exportPdf) { UI.toast('知识库导出组件未加载（缺 assets/js/kb.js）', 'err'); return; }
    var name = window.IqKB.exportPdf(item.id, { withAnswer: true });
    if (name) UI.toast('导出 ' + name + '：在打印对话框中选择「另存为 PDF」', 'ok');
  }

  function kbPrintDoc(item) {
    if (!window.IqKB || !window.IqKB.printDoc) { UI.toast('知识库打印组件未加载（缺 assets/js/kb.js）', 'err'); return; }
    if (window.IqKB.printDoc(item.id, { withAnswer: true })) UI.toast('正在准备打印', 'ok');
  }

  function kbOpenPreview(no) {
    after(S.kbById(no), function (item) {
      if (!item) { UI.toast('未找到该知识条目', 'err'); return; }
      UI.modal({
        title: '知识预览 ' + (item.id || no),
        html: kbPreviewHtml(item),
        wide: true,
        footerHtml: '<button class="btn" data-close>关闭</button>' +
          '<button class="btn" data-kbpdf>' + icon('download', 15) + ' 导出 PDF</button>' +
          '<button class="btn" data-kbprint>打印</button>' +
          '<a class="btn primary" href="#/knowledge/edit/' + encodeURIComponent(item.id || no) + '">' + icon('edit', 15) + ' 编辑此条目</a>',
        onMount: function (m) {
          $$('[data-close]', m.el).forEach(function (b) { b.addEventListener('click', m.close); });
          $$('[data-kbpdf]', m.el).forEach(function (b) {
            b.addEventListener('click', function () { kbExportPdf(item); });
          });
          $$('[data-kbprint]', m.el).forEach(function (b) {
            b.addEventListener('click', function () { kbPrintDoc(item); });
          });
        }
      });
    }, '加载知识失败');
  }

  /** 知识点编号建议：KB-<品类前缀>-<三位序号> */
  function kbSuggestNo(cat, list) {
    var prefix = { servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' }[cat] || 'GEN';
    var max = 0;
    (list || []).forEach(function (it) {
      var m = /^KB-([A-Z]+)-(\d+)$/.exec(String(it && it.id || '').toUpperCase());
      if (m && m[1] === prefix) max = Math.max(max, Number(m[2]));
    });
    return 'KB-' + prefix + '-' + String(max + 1).padStart(3, '0');
  }

  /** 用于列表行「关联题数」：兼容 relatedQuestions / questions / related 三种字段名 */
  function kbRelatedNo(item) {
    var t = null;
    if (item) {
      if (Array.isArray(item.relatedQuestions)) t = item.relatedQuestions;
      else if (Array.isArray(item.questions)) t = item.questions;
      else if (Array.isArray(item.related)) t = item.related;
    }
    if (!t) return [];
    return t.map(function (x) {
      if (x == null) return '';
      if (typeof x === 'string') return x;
      return x.questionNo || x.no || x.id || '';
    }).filter(Boolean);
  }

  /* ================= 知识库：数据加载 ================= */

  function kbNoCount(no) {
    var list = A.kbList || [];
    for (var i = 0; i < list.length; i++) if (list[i] && String(list[i].id) === String(no)) return i;
    return -1;
  }

  /** 拉取知识库列表（首次缓存，支持本地同步值 / API Promise 两种返回） */
  function loadKbList(force) {
    if (!force && A.kbList) return A.kbList;
    var remote = isRemote();
    A.kbList = null;
    try {
      // includeUnpublished：管理端需看到草稿与归档（用户端默认只看已上线）
      var v = S.kbList({ page: 1, page_size: remote ? 500 : 9999, includeUnpublished: true });
      if (v && typeof v.then === 'function') {
        v.then(function (d) {
          A.kbList = (d && d.items) || [];
          if (A.route === 'knowledge') render();
        }).catch(function (e) {
          A.kbList = [];
          if (A.route === 'knowledge') render();
          UI.toast('知识库加载失败：' + (e && e.message ? e.message : e), 'err');
        });
        return null;
      }
      A.kbList = (v && v.items) || [];
    } catch (e) {
      A.kbList = [];
      UI.toast('知识库数据层未就绪：' + (e && e.message ? e.message : e), 'err');
    }
    return A.kbList;
  }

  /** 编辑态取条目：优先用已取到的条目，其次列表缓存，最后单独调用一次 S.kbById */
  function kbFetchForEdit(no) {
    var held = A.kbEditItem;
    if (held && String(held.id) === String(no) && Array.isArray(held.content) && held.content.length) return held;
    var found = kbItemFromCache(no);
    if (found && Array.isArray(found.content) && found.content.length) {
      A.kbEditItem = found;
      return found;
    }
    var item = null;
    try {
      var v = S.kbById(no);
      if (v && typeof v.then === 'function') {
        v.then(function (d) {
          A.kbEditItem = d || null;
          if (A.route === 'knowledge') render();
        }).catch(function (e) {
          A.kbEditItem = null;
          if (A.route === 'knowledge') render();
          UI.toast('知识条目加载失败：' + (e && e.message ? e.message : e), 'err');
        });
        return null;
      }
      item = v || null;
    } catch (e) {
      item = null;
    }
    if (!item) item = found || null;
    if (item && typeof item === 'object' && !Array.isArray(item.content) && found && Array.isArray(found.content)) {
      item.content = found.content;
    }
    A.kbEditItem = item;
    return item;
  }

  function kbListReady() { return Array.isArray(A.kbList); }

  function kbFilterActive() {
    var f = A.kbFilter || {};
    return !!(f.cat || f.topic || f.status || f.sec || f.kw);
  }

  function kbSelectedNo() {
    return $$('.rowChk:checked').map(function (c) { return c.getAttribute('data-kbno'); })
      .filter(function (x) { return !!x; });
  }

  /** 阅读量缓存（来自 S.kbStats().readTop，加载后刷新当前页） */
  function loadKbStats(force) {
    if (!force && A.kbStats) return A.kbStats;
    var remote = isRemote();
    A.kbStats = null;
    try {
      var v = S.kbStats();
      if (v && typeof v.then === 'function') {
        v.then(function (d) {
          A.kbStats = d || {};
          fillKbStatsBox();
          buildKbReads();
          if (A.route === 'kb-stats' || A.route === 'knowledge') render();
        }).catch(function (e) {
          A.kbStats = {};
          fillKbStatsBox();
          if (A.route === 'kb-stats') render();
          UI.toast('学习统计加载失败：' + (e && e.message ? e.message : e), 'err');
        });
        return null;
      }
      A.kbStats = v || {};
    } catch (e) {
      A.kbStats = {};
      UI.toast('学习统计数据层未就绪：' + (e && e.message ? e.message : e), 'err');
    }
    buildKbReads();
    return A.kbStats;
  }

  function buildKbReads() {
    var st = A.kbStats;
    if (!st || !Array.isArray(st.readTop)) { A.kbReads = null; return; }
    var m = {};
    st.readTop.forEach(function (r) {
      var no = r && (r.id || r.knowledgeNo || r.no);
      if (no) m[no] = Number(r.readers) || 0;
    });
    A.kbReads = m;
  }

  /** 异步模式下把统计内容回填到占位容器 */
  function fillKbStatsBox() {
    var box = document.getElementById('kbStatsBox');
    if (!box || !A.kbStats) return;
    box.innerHTML = kbStatsBody(A.kbStats);
  }

  /* ================= 知识库：筛选与列表 ================= */

  function filteredKb() {
    var f = A.kbFilter;
    var list = (A.kbList || []).slice();
    return list.filter(function (it) {
      if (!it) return false;
      if (f.cat && it.category !== f.cat) return false;
      if (f.topic && it.topic !== f.topic) return false;
      if (f.status && (it.status || 'published') !== f.status) return false;
      if (f.sec && (it.security || 'public') !== f.sec) return false;
      if (f.kw) {
        var hay = [it.id, it.title, it.summary, (it.tags || []).join(' ')].join(' ').toLowerCase();
        if (hay.indexOf(f.kw.toLowerCase()) < 0) return false;
      }
      return true;
    });
  }

  function viewKnowledge() {
    var loaded = kbListReady();
    var list = loaded ? filteredKb() : [];
    var page = A.kbPage || 1;
    var pageSize = 20;
    var totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    if (page > totalPages) page = totalPages;
    A.kbPage = page;
    var pageList = list.slice((page - 1) * pageSize, page * pageSize);
    var f = A.kbFilter || {};

    var stats = A.kbStats || {};
    var published = Number(stats.total) || 0;
    var withReads = 0;
    list.forEach(function (it) { if (kbReadCount(it.id)) withReads++; });
    var topicsUsed = {};
    list.forEach(function (it) { if (it.topic) topicsUsed[it.topic] = 1; });

    var body;
    if (!loaded) {
      body = '<div class="empty"><div class="big">📚</div><h3>正在加载知识库…</h3>' +
        '<p>若长时间无响应，请确认数据层（S.kbList）已就绪。</p></div>';
    } else if (!list.length) {
      body = '<div class="empty"><div class="big">🔍</div><p>' +
        (kbFilterActive() ? '没有符合筛选条件的知识条目' : '知识库还没有内容，点右上角「新增知识」开始建设') +
        '</p></div>';
    } else {
      body = '<div class="btn-row mb12" id="kbBulkBar" style="display:none">' +
        '<span class="small muted">已选 <b id="kbSelCount">0</b> 篇</span>' +
        '<button class="btn sm" data-bulk="published">' + icon('check', 14) + ' 批量上线</button>' +
        '<button class="btn sm" data-bulk="draft">批量转草稿</button>' +
        '<button class="btn sm" data-bulk="archived">批量归档</button>' +
        '<button class="btn sm danger" data-bulk="delete">批量删除</button>' +
        '<button class="btn sm ghost" id="kbBulkClear">取消选择</button>' +
        '</div>' +
        '<div class="table-wrap"><table class="tbl admin-table">' +
        '<thead><tr><th class="center" style="width:38px"><input type="checkbox" id="kbChkAll" title="全选本页"></th>' +
        '<th>编号</th><th>标题</th><th>品类</th><th>主题</th><th class="center">密级</th><th class="center">状态</th>' +
        '<th class="center">关联题数</th><th class="center">阅读量</th><th class="center">更新时间</th><th class="center">操作</th></tr></thead><tbody>' +
        pageList.map(function (it) {
          var st = it.status || 'published';
          var rel = kbRelatedNo(it);
          var rd = kbReadCount(it.id);
          return '<tr>' +
            '<td class="center"><input type="checkbox" class="rowChk" data-kbno="' + esc(it.id) + '"></td>' +
            '<td class="mono small">' + esc(it.id || '') + '<div class="muted" style="font-size:11px">' + esc(kbTopicName(it.topic)) + '</div></td>' +
            '<td><div class="cell-stem" title="' + esc(it.title || '') + '">' + esc(it.title || '') + '</div>' +
            '<div class="tag-list mt8">' + (it.tags || []).slice(0, 4).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div></td>' +
            '<td><span class="tag" style="background:' + Bank.catMeta(it.category).color + '1a;color:' + Bank.catMeta(it.category).color + '">' + esc(Bank.catMeta(it.category).short) + '</span></td>' +
            '<td class="small">' + esc(kbTopicName(it.topic)) + '</td>' +
            '<td class="center"><span class="secmark ' + esc(it.security || 'public') + '">' + esc(Bank.secName(it.security || 'public')) + '</span></td>' +
            '<td class="center">' + kbStatusTag(st) + '</td>' +
            '<td class="center">' + (rel.length ? '<b>' + rel.length + '</b>' : '<span class="muted">0</span>') + '</td>' +
            '<td class="center">' + (rd == null ? '<span class="muted">—</span>' : rd) + '</td>' +
            '<td class="center small muted">' + esc(UI.fmtDate(it.updatedAt)) + '</td>' +
            '<td class="center nowrap">' +
            '<button class="btn ghost sm" data-kb-preview="' + esc(it.id) + '">预览</button>' +
            '<a class="btn ghost sm" href="#/knowledge/edit/' + encodeURIComponent(it.id) + '">编辑</a>' +
            (st === 'published'
              ? '<button class="btn ghost sm" data-kb-status="draft" data-kbno="' + esc(it.id) + '">转草稿</button>'
              : '<button class="btn ghost sm" data-kb-status="published" data-kbno="' + esc(it.id) + '">上线</button>') +
            (st === 'archived' ? '' : '<button class="btn ghost sm" data-kb-status="archived" data-kbno="' + esc(it.id) + '">归档</button>') +
            '<button class="btn ghost sm" style="color:var(--danger)" data-kb-del="' + esc(it.id) + '">删除</button>' +
            '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<div class="btn-row mt12" style="justify-content:center">' +
        '<button class="btn sm" id="kbPrevPage"' + (page <= 1 ? ' disabled' : '') + '>上一页</button>' +
        '<span class="small muted" style="align-self:center">第 ' + page + ' / ' + totalPages + ' 页</span>' +
        '<button class="btn sm" id="kbNextPage"' + (page >= totalPages ? ' disabled' : '') + '>下一页</button>' +
        '</div>';
    }

    return '' +
      '<div class="page-head"><h2>' + icon('book', 20) + '知识库管理</h2>' +
      '<p>结构化知识条目（草稿 / 归档状态在此同样可见）· 当前筛选出 ' + list.length + ' 篇' +
      (loaded ? '，全部 ' + (A.kbList || []).length + ' 篇' : '') + '</p></div>' +

      '<div class="grid c4 mb16">' +
      card('知识总数', String((A.kbList || []).length) + '<small> 篇</small>', '含草稿与归档', '') +
      card('已上线', String(published), published ? '用户端可见' : '等待上线', published ? 'ok' : 'warn') +
      card('本次筛选', String(list.length) + '<small> 篇</small>', '覆盖主题 ' + Object.keys(topicsUsed).length + ' 个', '') +
      card('有阅读记录', String(withReads) + '<small> 篇</small>', A.kbReads ? '来自学习统计' : '统计未就绪', '') +
      '</div>' +

      '<div class="card tight">' +
      '  <div class="inline-fields">' +
      '    <div class="field"><label>品类</label><select id="kCat"><option value="">全部</option>' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '"' + (f.cat === c.key ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field"><label>二级分类</label><select id="kTopic"><option value="">全部</option>' +
      kbTopics().map(function (t) { return '<option value="' + t.key + '"' + (f.topic === t.key ? ' selected' : '') + '>' + esc(t.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field"><label>状态</label><select id="kStatus"><option value="">全部</option>' +
      ['published', 'draft', 'archived'].map(function (s) {
        return '<option value="' + s + '"' + (f.status === s ? ' selected' : '') + '>' + esc(KB_STATUS_NAME[s]) + '</option>';
      }).join('') + '</select></div>' +
      '    <div class="field"><label>密级</label><select id="kSec"><option value="">全部</option>' +
      S.SECURITY.map(function (s) { return '<option value="' + s.key + '"' + (f.sec === s.key ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select></div>' +
      '    <div class="field" style="flex:2 1 220px"><label>关键词</label><input type="text" id="kKw" value="' + esc(f.kw) + '" placeholder="编号 / 标题 / 摘要 / 标签"></div>' +
      '    <div class="field" style="flex:0 0 auto"><button class="btn" id="kReset">重置</button></div>' +
      '  </div>' +
      '</div>' +

      '<div class="card">' +
      '  <div class="card-head">' +
      '    <h3>知识条目</h3><div class="spacer"></div>' +
      '    <a class="btn sm primary" href="#/knowledge/new">' + icon('plus', 14) + ' 新增知识</a>' +
      '    <button class="btn sm" id="kImport">' + icon('upload', 14) + ' 批量导入</button>' +
      '    <button class="btn sm" id="kExpFilter">' + icon('download', 14) + ' 导出筛选结果</button>' +
      '    <button class="btn sm" id="kExpAll">' + icon('download', 14) + ' 导出全部</button>' +
      '    <button class="btn sm" id="kRefresh" title="重新加载">' + icon('refresh', 14) + '</button>' +
      '  </div>' +
      body +
      '</div>';
  }

  /* ================= 知识库：编辑器 ================= */

  function kbBlankItem() {
    return {
      id: '', category: 'servo', topic: 'intro', title: '', summary: '', tags: [],
      roles: ['engineer'], security: 'internal', readMinutes: 5, level: 1, sortOrder: 10,
      content: [], relatedQuestions: [],
      source: { title: '', url: '' }, updatedAt: S.todayKey()
    };
  }

  /** 块数据 → 隐藏域的 JSON（转义 < > & 与引号，保证 attribute 安全且能原样解析回来） */
  function kbSeedAttr(blocks) {
    var json = '';
    try { json = JSON.stringify(Array.isArray(blocks) ? blocks : []); } catch (e) { json = '[]'; }
    return json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /** 从隐藏域读回块数据；数据层返回非数组时兜底为空数组 */
  function kbEditorSeed() {
    var el = document.getElementById('kbSeed');
    if (!el) return [];
    try {
      var arr = JSON.parse(el.value || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }

  /** 内容块数据 → 编辑器控件（按类型渲染对应输入） */
  function kbBlockEditor(b, i) {
    b = b || {};
    function head() {
      return '<div class="kb-block-head">' +
        '<span class="kb-idx tag brand">' + (i + 1) + '</span>' +
        '<select class="kb-type">' + kbBlockTypes().map(function (t) {
          return '<option value="' + esc(t) + '"' + (t === b.type ? ' selected' : '') + '>' + esc(kbBlockName(t)) + '</option>';
        }).join('') + '</select>' +
        '<div class="spacer" style="flex:1"></div>' +
        '<button class="btn ghost sm" data-kb-act="up" title="上移">↑</button>' +
        '<button class="btn ghost sm" data-kb-act="down" title="下移">↓</button>' +
        '<button class="btn ghost sm" style="color:var(--danger)" data-kb-act="del" title="删除本块">✕</button>' +
        '</div>';
    }
    function row(inner) {
      return '<div class="kb-block" data-i="' + i + '">' + head() + inner + '</div>';
    }
    switch (b.type) {
      case 'h':
      case 'code':
        return row('<div class="field mb8"><label>' + esc(kbBlockName(b.type)) + '内容' +
          (b.type === 'code' ? ' <span class="muted small">（参数表 / 通信报文原文，保留原格式）</span>' : '') + '</label>' +
          (b.type === 'h'
            ? '<input type="text" class="kb-field" data-f="text" value="' + esc(b.text || '') + '" placeholder="如：为什么 EtherCAT 站号必须由主站分配">'
            : '<textarea class="kb-field json-area" data-f="text" style="min-height:110px">' + esc(b.text || '') + '</textarea>') +
          '</div>');
      case 'p':
        return row('<div class="field mb8"><label>段落内容 <span class="muted small">（支持 **加粗** 与 `代码`）</span></label>' +
          '<textarea class="kb-field" data-f="text" style="min-height:110px">' + esc(b.text || '') + '</textarea></div>');
      case 'tip':
        return row('<div class="field mb8"><label>提示内容</label>' +
          '<textarea class="kb-field" data-f="text" style="min-height:70px">' + esc(b.text || '') + '</textarea></div>' +
          '<div class="field mb0"><label>提示级别</label><select class="kb-field" data-f="kind">' +
          [['info', '普通提示'], ['warn', '注意 / 警告'], ['danger', '禁止 / 危险']].map(function (k) {
            return '<option value="' + k[0] + '"' + ((b.kind || 'info') === k[0] ? ' selected' : '') + '>' + k[1] + '</option>';
          }).join('') + '</select></div>');
      case 'list':
      case 'steps':
        return row('<div class="field mb8"><label>' + (b.type === 'steps' ? '步骤内容' : '列表条目') +
          ' <span class="muted small">（每行一条）</span></label>' +
          '<textarea class="kb-field json-area" data-f="items" style="min-height:110px">' + esc((b.items || []).join('\n')) + '</textarea></div>' +
          (b.type === 'list'
            ? '<label class="checkline kb-field" data-f="ordered"><input type="checkbox" data-f2="ordered"' + (b.ordered ? ' checked' : '') + '> 使用有序编号</label>'
            : ''));
      case 'faq':
        return row('<div class="field mb8"><label>客户问题</label>' +
          '<input type="text" class="kb-field" data-f="q" value="' + esc(b.q || '') + '" placeholder="如：你们伺服支持哪些总线？"></div>' +
          '<div class="field mb0"><label>标准回答</label>' +
          '<textarea class="kb-field" data-f="a" style="min-height:80px">' + esc(b.a || '') + '</textarea></div>');
      case 'script':
        return row('<div class="field mb8"><label>场景</label>' +
          '<input type="text" class="kb-field" data-f="scene" value="' + esc(b.scene || '') + '" placeholder="如：客户说「某某品牌更便宜」"></div>' +
          '<div class="kb-field" data-f="bad"><label>错误说法</label>' +
          '<textarea data-f2="bad" style="min-height:60px">' + esc(b.bad || '') + '</textarea></div>' +
          '<div class="field mb0 kb-field" data-f="good"><label>标准说法</label>' +
          '<textarea data-f2="good" style="min-height:60px">' + esc(b.good || '') + '</textarea></div>');
      case 'img':
        return row('<div class="field mb8"><label>图片地址 <span class="muted small">（相对路径、https 或 data URI）</span></label>' +
          '<input type="text" class="kb-field" data-f="src" value="' + esc(b.src || '') + '" placeholder="assets/img/kb/sv660n-wiring.png"></div>' +
          '<div class="field mb0"><label>图片说明</label>' +
          '<input type="text" class="kb-field" data-f="caption" value="' + esc(b.caption || '') + '"></div>');
      case 'table':
        return row(kbTableEditor(b));
      default:
        return row('<div class="note warn small">未知内容块类型「' + esc(String(b.type)) + '」，渲染时会自动跳过。' +
          '请在上方选择受支持的类型，或删除本块。</div>');
    }
  }

  /** 表格块：表头与行列可视化编辑 */
  function kbTableEditor(b) {
    var head = Array.isArray(b.head) ? b.head.slice() : [];
    var rows = Array.isArray(b.rows) ? b.rows.map(function (r) { return Array.isArray(r) ? r.slice() : []; }) : [];
    var cols = Math.max(head.length, 1);
    rows.forEach(function (r) { cols = Math.max(cols, r.length); });
    while (head.length < cols) head.push('');
    rows = rows.map(function (r) { while (r.length < cols) r.push(''); return r; });

    function cell(t, ci, ri) {
      var attrs = 'class="kb-cell" data-f="' + t + '" data-c="' + ci + '"' + (ri >= 0 ? ' data-r="' + ri + '"' : '');
      return t === 'head' ? '<th><input type="text" ' + attrs + ' value="' + esc(head[ci] || '') + '"></th>'
        : '<td><input type="text" ' + attrs + ' value="' + esc(rows[ri][ci] || '') + '"></td>';
    }

    return '<div class="field mb8"><label>表格内容 <span class="muted small">（修改行列数会保留已填内容）</span></label>' +
      '<div class="flex gap10 wrap aic mb8">' +
      '<span class="small muted">列数</span><input type="number" class="kb-tbl-cols" min="1" max="8" value="' + cols + '" style="width:66px">' +
      '<span class="small muted">行数</span><input type="number" class="kb-tbl-rows" min="0" max="20" value="' + rows.length + '" style="width:66px">' +
      '<button class="btn sm" data-kb-act="row-add">+ 行</button>' +
      '<button class="btn sm" data-kb-act="col-add">+ 列</button>' +
      '<button class="btn sm" data-kb-act="row-del">- 末行</button>' +
      '<button class="btn sm" data-kb-act="col-del">- 末列</button>' +
      '<button class="btn sm primary" data-kb-act="table-resize">应用行列数</button>' +
      '</div>' +
      '<div class="table-wrap" style="max-height:320px;overflow:auto"><table class="tbl">' +
      '<thead><tr>' + head.map(function (_, ci) { return cell('head', ci, -1); }).join('') + '</tr></thead>' +
      '<tbody>' + rows.map(function (_, ri) {
        return '<tr>' + head.map(function (_, ci) { return cell('cell', ci, ri); }).join('') + '</tr>';
      }).join('') + '</tbody></table></div></div>';
  }

  /** 从缓存/数据层取条目（编辑态需要 content） */
  function kbItemFromCache(no) {
    var list = A.kbList || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i] && String(list[i].id) === String(no)) return list[i];
    }
    return null;
  }

  function kbMissingView(no) {
    return '<div class="empty"><div class="big">📄</div><h3>未找到知识条目 ' + esc(no) + '</h3>' +
      '<p>该条目可能已被删除，或数据层（S.kbList）尚未返回该编号。可返回列表后重试。</p>' +
      '<a class="btn primary mt12" href="#/knowledge">返回知识库管理</a></div>';
  }

  /**
   * 知识编辑器
   * no === null 表示新增；{ id, item, loading } 为规则 L 的占位参数：
   * 列表尚未从数据层返回时先渲染加载态，返回后由 render() 重新进入本函数
   */
  function viewKbEditor(no, ctx) {
    var isNew = !no;
    ctx = ctx || {};
    var item;
    if (isNew) {
      item = ctx.item || kbBlankItem();
    } else if (ctx.item) {
      item = ctx.item;
    } else {
      item = kbItemFromCache(no);
      if (!item) return kbMissingView(no);
    }
    item = JSON.parse(JSON.stringify(item));
    if (isNew && !item.id) item.id = kbSuggestNo(item.category, A.kbList || []);
    if (!Array.isArray(item.content)) item.content = [];

    return '' +
      '<div class="page-head"><h2>' + icon('edit', 20) + (isNew ? '新增知识' : '编辑知识 ' + esc(item.id)) + '</h2>' +
      '<p>结构化内容块 + 关联刷题：先选品类与主题，再按块组织正文；右侧为实时预览与阅读时长估算</p></div>' +

      '<div class="grid c2" style="grid-template-columns:1.3fr .7fr;align-items:start">' +
      '<div>' +

      '  <div class="card"><div class="card-head"><h3>基础信息</h3></div>' +
      '    <div class="inline-fields mb12">' +
      '      <div class="field"><label>知识编号</label><input type="text" id="keNo" value="' + esc(item.id) + '" placeholder="KB-SRV-001"></div>' +
      '      <div class="field"><label>品类</label><select id="keCat">' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '"' + (item.category === c.key ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
      '      <div class="field"><label>二级分类</label><select id="keTopic">' +
      kbTopics().map(function (t) { return '<option value="' + t.key + '"' + (item.topic === t.key ? ' selected' : '') + '>' + esc(t.name) + '</option>'; }).join('') + '</select></div>' +
      '    </div>' +
      '    <div class="field"><label>标题 <span class="muted small">（建议 ≤60 字，讲清「讲什么 + 解决什么问题」）</span></label>' +
      '      <input type="text" id="keTitle" value="' + esc(item.title) + '" placeholder="如：SV660N 与 SV670N 怎么选：一套可复用的选型三步法"></div>' +
      '    <div class="field"><label>摘要 <span class="muted small">（≤80 字，列表与卡片展示）</span></label>' +
      '      <textarea id="keSummary" style="min-height:64px" placeholder="一句话说明这篇讲什么、解决什么问题">' + esc(item.summary) + '</textarea></div>' +
      '    <div class="inline-fields">' +
      '      <div class="field"><label>难度 level</label><select id="keLevel">' +
      [[1, '1 入门'], [2, '2 进阶'], [3, '3 深入']].map(function (l) {
        return '<option value="' + l[0] + '"' + (Number(item.level) === l[0] ? ' selected' : '') + '>' + l[1] + '</option>';
      }).join('') + '</select></div>' +
      '      <div class="field"><label>阅读时长（分钟）</label><input type="number" id="keRead" min="1" max="60" value="' + esc(item.readMinutes || 5) + '"></div>' +
      '      <div class="field"><label>路线排序 sortOrder <span class="muted small">（越小越靠前）</span></label><input type="number" id="keSort" min="0" max="9999" value="' + esc(item.sortOrder == null ? 10 : item.sortOrder) + '"></div>' +
      '      <div class="field"><label>更新时间</label><input type="date" id="keUpdated" value="' + esc(String(item.updatedAt || '').slice(0, 10)) + '"></div>' +
      '    </div>' +
      '    <div class="field"><label>标签 <span class="muted small">（逗号分隔，建议 2–6 个）</span></label>' +
      '      <input type="text" id="keTags" value="' + esc((item.tags || []).join(',')) + '" placeholder="SV660N,选型,EtherCAT"></div>' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>' + icon('layers', 16) + ' 内容块</h3><div class="spacer"></div>' +
      '    <select id="kAddType">' + kbBlockTypes().map(function (t) {
        return '<option value="' + esc(t) + '">' + esc(kbBlockName(t)) + '</option>';
      }).join('') + '</select>' +
      '    <button class="btn sm primary" id="kAddBlock">' + icon('plus', 14) + ' 添加块</button>' +
      '  </div>' +
      '    <div id="kbBlocks"></div>' +
      '    <input type="hidden" id="kbSeed" value="' + kbSeedAttr(item.content) + '">' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>关联题目</h3><div class="spacer"></div>' +
      '    <span class="card-sub">勾选后用户端可「学完即练」</span></div>' +
      '    <input type="hidden" id="kRelated" value="' + esc((item.relatedQuestions || []).join(',')) + '">' +
      '    <div id="kRelatedChips" class="tag-list mb12"></div>' +
      '    <div class="inline-fields mb12">' +
      '      <div class="field"><label>品类</label><select id="kQCat"><option value="">全部品类</option>' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '">' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
      '      <div class="field" style="flex:2 1 220px"><label>关键词</label><input type="text" id="kQKw" placeholder="题号 / 题干 / 标签"></div>' +
      '      <div class="field" style="flex:0 0 auto"><button class="btn" id="kQSearch">' + icon('search', 14) + ' 检索</button></div>' +
      '    </div>' +
      '    <div id="kQResults" style="max-height:280px;overflow:auto"><div class="empty"><p>输入关键词后点击「检索」从题库挑题</p></div></div>' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>资料溯源</h3></div>' +
      '    <div class="field"><label>资料名称</label><input type="text" id="keSrcTitle" value="' + esc((item.source || {}).title || '') + '" placeholder="如：汇川技术 SV660N 系列伺服驱动器用户手册"></div>' +
      '    <div class="field mb0"><label>官方链接</label><input type="text" id="keSrcUrl" value="' + esc((item.source || {}).url || '') + '" placeholder="https://www.inovance.com/..."></div>' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>适用人群与密级</h3></div>' +
      '    <div class="field"><label>适用人群</label><div class="chips" id="keRoles">' +
      S.ROLES.map(function (r) {
        return '<button class="chip' + ((item.roles || []).indexOf(r.key) >= 0 ? ' on' : '') + '" data-r="' + r.key + '">' + esc(r.name) + '</button>';
      }).join('') + '</div>' +
      '      <div class="hint">勾选「合作客户」时密级必须为公开（外部可见），否则服务端会拒绝。</div></div>' +
      '    <div class="field mb0"><label>密级</label><select id="keSec">' +
      S.SECURITY.map(function (s) { return '<option value="' + s.key + '"' + ((item.security || 'public') === s.key ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select>' +
      '      <div class="hint">公开：可对外部客户 / 代理商展示；内部：仅内部员工；涉密：仅超管与讲师</div></div>' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>保存后的状态</h3></div>' +
      '    <label class="checkline mb8"><input type="checkbox" id="kePublish"' + ((isNew || (item.status || 'published') === 'published') ? ' checked' : '') + '> 立即上线（不勾选则保存为草稿）</label>' +
      '    <div class="note small mb12">上线后用户端即可检索（受密级与角色限制）；草稿仅管理端可见。</div>' +
      '    <div class="btn-row end">' +
      '      <a class="btn" href="#/knowledge">取消</a>' +
      '      <button class="btn primary" id="keSave">' + icon('check', 15) + ' 保存知识</button>' +
      '    </div>' +
      '  </div>' +

      '</div>' +

      '<div>' +
      '  <div class="card" style="position:sticky;top:76px">' +
      '    <div class="card-head"><h3>' + icon('eye', 16) + ' 实时预览</h3><div class="spacer"></div>' +
      '      <span class="card-sub" id="kbEst">预计阅读 1 分钟</span></div>' +
      '    <div id="kbPreview"></div>' +
      '  </div>' +
      '</div>' +
      '</div>';
  }

  /* ================= 视图分发 / 绑定 ================= */

  /** #/knowledge 系列：列表 / 新增 / 编辑 */
  function knowledgeContent() {
    if (!(canWrite() || S.hasPerm('bank.read'))) return noPerm();
    var wantEditor = A.kbAct === 'new' || A.kbAct === 'edit';
    if (wantEditor) A.kbList = null;      // 编辑器需要条目正文，强制重新拉取
    loadKbList();
    loadKbStats();
    if (!wantEditor) return viewKnowledge();
    if (!canWrite()) return noPerm();
    if (!kbListReady()) {
      return '<div class="empty"><div class="big">⏳</div><h3>正在加载知识条目…</h3>' +
        '<p>数据层返回后会自动进入编辑器；若长时间无响应，请确认 S.kbList 已就绪。</p>' +
        '<a class="btn mt12" href="#/knowledge">返回知识库管理</a></div>';
    }
    if (A.kbAct === 'new') return viewKbEditor(null);
    A.kbEditItem = null;
    var it = kbFetchForEdit(A.kbNo);
    if (it) return viewKbEditor(A.kbNo, { item: it });
    if (!kbNoCount(A.kbNo)) return kbMissingView(A.kbNo);   // 数据层确实没有该编号
    return '<div class="empty"><div class="big">⏳</div><h3>正在读取 ' + esc(A.kbNo) + ' 的正文…</h3>' +
      '<p>编辑器需要 content 字段，加载完成后会自动进入。</p>' +
      '<a class="btn mt12" href="#/knowledge">返回知识库管理</a></div>';
  }

  /* ================= 学习统计 ================= */

  function secColor(k) { return k === 'confidential' ? '#d93a3f' : k === 'internal' ? '#d98412' : '#12996b'; }

  function kbStatsBody(st) {
    st = st || {};
    var byCat = st.byCategory || {};
    var byTopic = st.byTopic || {};
    var bySec = st.bySecurity || {};
    var byStatus = st.byStatus || {};
    var readTop = Array.isArray(st.readTop) ? st.readTop : [];
    var users = Array.isArray(st.userStats) ? st.userStats : [];

    var total = Number(st.total) || 0;
    var published = Number(byStatus.published) || 0;
    var catCount = Object.keys(byCat).filter(function (k) { return Number(byCat[k]) > 0; }).length;
    var finishedAll = users.reduce(function (a, u) { return a + (Number(u.finishedCount) || 0); }, 0);

    var topicItems = kbTopics().map(function (t) {
      return { label: t.name, value: Number(byTopic[t.key]) || 0, suffix: ' 篇', color: '#7a5af5' };
    });
    var secItems = S.SECURITY.map(function (s) {
      return { label: s.name, value: Number(bySec[s.key]) || 0, suffix: ' 篇', color: secColor(s.key) };
    });

    return '' +
      '<div class="grid c4 mb16">' +
      card('知识总数', total + '<small> 篇</small>', '含草稿与归档', '') +
      card('已上线', String(published), published ? '用户端可检索' : '暂无上线内容', published ? 'ok' : 'warn') +
      card('涉及品类', String(catCount) + '<small> 个</small>', '共 ' + S.CATEGORIES.length + ' 个品类', '') +
      card('全员学完总数', String(finishedAll) + '<small> 篇次</small>', users.length + ' 位学员有阅读记录', finishedAll ? 'ok' : '') +
      '</div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>品类分布</h3></div>' +
      UI.barChart(S.CATEGORIES.map(function (c) {
        return { label: c.short, value: Number(byCat[c.key]) || 0, color: c.color };
      }), { height: 190 }) + '</div>' +
      '  <div class="card"><div class="card-head"><h3>主题分布</h3></div>' +
      UI.hbars(topicItems, {}) + '</div>' +
      '</div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>密级分布</h3></div>' +
      UI.hbars(secItems, {}) +
      '    <div class="note small mt12">合作客户（partner）仅能查看公开知识；内部与涉密内容不会下发到外部端。</div></div>' +
      '  <div class="card"><div class="card-head"><h3>状态分布</h3></div>' +
      UI.hbars(['published', 'draft', 'archived'].map(function (s) {
        return {
          label: KB_STATUS_NAME[s], value: Number(byStatus[s]) || 0, suffix: ' 篇',
          color: s === 'published' ? '#12996b' : s === 'draft' ? '#d98412' : '#7a869a'
        };
      }), {}) +
      '    <div class="divider"></div>' +
      '    <div class="small muted">草稿与归档条目仅管理端可见，用户端检索不会命中。</div></div>' +
      '</div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>' + icon('star', 16) + ' 阅读 TOP 榜</h3>' +
      '    <div class="spacer"></div><span class="card-sub">按阅读人数排序</span></div>' +
      (readTop.length ? '<div class="list">' + readTop.slice(0, 10).map(function (r, i) {
        var no = r.id || r.knowledgeNo || r.no || '';
        var readers = Number(r.readers) || 0;
        var avg = Number(r.avgSeconds) || 0;
        return '<div class="list-item">' +
          '<span class="badge' + (i < 3 ? '' : ' gray') + '">' + (i + 1) + '</span>' +
          '<div style="flex:1;min-width:0"><div class="ttl" style="font-size:13px">' + esc(r.title || no) + '</div>' +
          '<div class="sub">' + esc(no) + ' · 平均时长 ' + esc(UI.fmtDuration(avg)) + (readers ? '' : ' · 暂无阅读') + '</div></div>' +
          '<span class="tag' + (readers ? ' brand' : '') + '"' + (readers ? '' : ' style="color:var(--muted);background:var(--line-2)"') + '>' + (readers ? readers + ' 人' : '未读') + '</span>' +
          '</div>';
      }).join('') + '</div>' : '<div class="empty"><div class="big">📖</div><p>暂无阅读数据，学员开始学习后这里会显示排行</p></div>') +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>' + icon('layers', 16) + ' 口径说明</h3></div>' +
      '    <div class="list">' +
      '      <div class="list-item"><div style="flex:1"><div class="ttl">已读数 vs 学完数</div>' +
      '      <div class="sub">已读数：该学员点开过并产生阅读记录的知识条目数；学完数：主动标记「已学完」的条目数。</div></div></div>' +
      '      <div class="list-item"><div style="flex:1"><div class="ttl">平均时长</div>' +
      '      <div class="sub">条目累计阅读秒数 ÷ 阅读人数；单次少于 15 秒的停留不计入上报。</div></div></div>' +
      '      <div class="list-item"><div style="flex:1"><div class="ttl">数据时效</div>' +
      '      <div class="sub">本地模式读取本机记录；API 模式由服务端汇总（可按部门与时间范围扩展）。</div></div></div>' +
      '    </div>' +
      '    <div class="note small mt12">' + icon('info', 14) +
      ' 建议关注「零阅读条目」：若长期无人阅读，通常是标题不够直白或未纳入新人学习路线。</div>' +
      '  </div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><h3>' + icon('users', 16) + ' 员工阅读明细</h3><div class="spacer"></div>' +
      '    <button class="btn sm" id="kExpUsers">' + icon('download', 14) + ' 导出 CSV</button></div>' +
      (users.length ? '<div class="table-wrap"><table class="tbl admin-table">' +
        '<thead><tr><th>姓名</th><th>部门</th><th class="center">已读数</th><th class="center">学完数</th><th class="center">完成率</th><th class="center">累计时长</th><th class="center">人均单篇时长</th></tr></thead><tbody>' +
        users.map(function (u) {
          var readCount = Number(u.readCount) || 0;
          var fin = Number(u.finishedCount) || 0;
          var secs = Number(u.totalSeconds) || 0;
          var rate = readCount ? Math.round(fin / readCount * 100) : 0;
          return '<tr>' +
            '<td>' + esc(u.name || '—') + '</td>' +
            '<td class="small muted">' + esc(u.dept || '—') + '</td>' +
            '<td class="center">' + readCount + '</td>' +
            '<td class="center">' + fin + '</td>' +
            '<td class="center">' + (readCount ? rate + '%' : '<span class="muted">—</span>') + '</td>' +
            '<td class="center">' + esc(UI.fmtDuration(secs)) + '</td>' +
            '<td class="center">' + (readCount ? esc(UI.fmtDuration(secs / readCount)) : '<span class="muted">—</span>') + '</td>' +
            '</tr>';
        }).join('') + '</tbody></table></div>'
        : '<div class="empty"><div class="big">👥</div><h3>暂无员工阅读记录</h3>' +
          '<p>学员在用户端「知识库」中阅读并学习后，这里会汇总每人的已读数、学完数与累计时长。</p></div>') +
      '</div>';
  }

  function viewKbStats() {
    var st = loadKbStats();
    return '' +
      '<div class="page-head"><h2>' + icon('chart', 20) + '学习统计</h2>' +
      '<p>知识库覆盖度与员工学习情况：用于评估内容建设优先级与培训落地效果</p></div>' +
      '<div id="kbStatsBox">' + (st ? kbStatsBody(st) : '<div class="card"><div class="empty"><p>正在加载学习统计…</p></div></div>') + '</div>';
  }

  function bindKbStats() {
    var el = $('#kExpUsers');
    if (el) el.addEventListener('click', function () {
      var users = ((A.kbStats || {}).userStats) || [];
      if (!users.length) { UI.toast('暂无员工阅读数据', 'warn'); return; }
      var rows = [['姓名', '部门', '已读数', '学完数', '累计时长(分钟)', '人均单篇时长(秒)']];
      users.forEach(function (u) {
        var rc = Number(u.readCount) || 0;
        var secs = Number(u.totalSeconds) || 0;
        rows.push([u.name || '', u.dept || '', rc, Number(u.finishedCount) || 0,
          Math.round(secs / 60), rc ? Math.round(secs / rc) : '']);
      });
      UI.download('知识库学习明细_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
      UI.toast('已导出 ' + users.length + ' 位学员', 'ok');
    });
  }

  /* ================= 知识库：事件绑定 ================= */

  /** 列表页：筛选 / 分页 / 批量 / 行操作 / 导入导出 */
  function bindKnowledge() {
    if (!kbListReady()) return;

    ['kCat', 'kTopic', 'kStatus', 'kSec'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('change', function () {
        A.kbFilter[{ kCat: 'cat', kTopic: 'topic', kStatus: 'status', kSec: 'sec' }[id]] = el.value;
        A.kbPage = 1;
        render();
      });
    });
    var kw = $('#kKw');
    if (kw) {
      kw.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { A.kbFilter.kw = kw.value.trim(); A.kbPage = 1; render(); }
      });
      kw.addEventListener('blur', function () {
        if (A.kbFilter.kw !== kw.value.trim()) { A.kbFilter.kw = kw.value.trim(); A.kbPage = 1; render(); }
      });
    }
    var reset = $('#kReset');
    if (reset) reset.addEventListener('click', function () {
      A.kbFilter = { cat: '', topic: '', status: '', sec: '', kw: '' };
      A.kbPage = 1;
      render();
    });
    var pp = $('#kbPrevPage'), np = $('#kbNextPage');
    if (pp) pp.addEventListener('click', function () { A.kbPage = Math.max(1, (A.kbPage || 1) - 1); render(); });
    if (np) np.addEventListener('click', function () { A.kbPage = (A.kbPage || 1) + 1; render(); });
    var refresh = $('#kRefresh');
    if (refresh) refresh.addEventListener('click', function () {
      A.kbList = null; A.kbStats = null; A.kbReads = null; A.kbPage = 1;
      render();
      UI.toast('已重新加载知识库', 'ok');
    });

    // 批量选择
    var bar = $('#kbBulkBar');
    function refreshBulk() {
      var n = kbSelectedNo().length;
      if (bar) bar.style.display = n ? 'flex' : 'none';
      var sc = $('#kbSelCount');
      if (sc) sc.textContent = n;
    }
    var all = $('#kbChkAll');
    if (all) all.addEventListener('change', function () {
      $$('.rowChk').forEach(function (c) { c.checked = all.checked; });
      refreshBulk();
    });
    $$('.rowChk').forEach(function (c) { c.addEventListener('change', refreshBulk); });
    var clear = $('#kbBulkClear');
    if (clear) clear.addEventListener('click', function () {
      $$('.rowChk').forEach(function (c) { c.checked = false; });
      if (all) all.checked = false;
      refreshBulk();
    });
    $$('#kbBulkBar [data-bulk]').forEach(function (b) {
      b.addEventListener('click', function () { kbBulkRun(b.getAttribute('data-bulk')); });
    });

    // 行内操作
    $$('[data-kb-preview]').forEach(function (b) {
      b.addEventListener('click', function () { kbOpenPreview(b.getAttribute('data-kb-preview')); });
    });
    $$('[data-kb-status]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!canWrite()) { UI.toast('无权限操作', 'err'); return; }
        var no = b.getAttribute('data-kbno');
        var st = b.getAttribute('data-kb-status');
        after(S.kbSetStatus(no, st), function () {
          UI.toast('已' + (st === 'published' ? '上线' : st === 'draft' ? '转为草稿' : '归档') + '：' + no, 'ok');
          A.kbList = null; A.kbStats = null;
          render();
        }, '操作失败');
      });
    });
    $$('[data-kb-del]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!canWrite()) { UI.toast('无权限操作', 'err'); return; }
        var no = b.getAttribute('data-kb-del');
        UI.confirm('删除知识条目 ' + no + '？删除后用户端将不再检索到该条目（软删，可由管理员恢复）。', { danger: true, title: '删除确认' })
          .then(function (ok) {
            if (!ok) return;
            after(S.kbDeleteItem(no), function () {
              UI.toast('已删除 ' + no, 'ok');
              A.kbList = null; A.kbStats = null;
              render();
            }, '删除失败');
          });
      });
    });

    // 导出
    var ea = $('#kExpAll');
    if (ea) ea.addEventListener('click', function () { kbExport(A.kbList || [], '全部'); });
    var ef = $('#kExpFilter');
    if (ef) ef.addEventListener('click', function () { kbExport(filteredKb(), '筛选结果'); });

    var imp = $('#kImport');
    if (imp) imp.addEventListener('click', function () { kbOpenImport(); });
  }

  function kbExport(list, label) {
    if (!list.length) { UI.toast('没有可导出的知识条目', 'warn'); return; }
    UI.download('汇川知识库_' + label + '_' + S.todayKey() + '.json', JSON.stringify(list, null, 2), 'application/json');
    UI.toast('已导出 ' + list.length + ' 篇', 'ok');
  }

  /** 知识库批量操作：逐条串行执行，兼容本地同步与 API 异步 */
  function kbBulkRun(action) {
    var ids = kbSelectedNo();
    if (!ids.length) { UI.toast('请先勾选知识条目', 'warn'); return; }
    var label = { published: '上线', draft: '转草稿', archived: '归档', delete: '删除' }[action] || action;
    UI.confirm('将对选中的 ' + ids.length + ' 篇知识执行「批量' + label + '」，确定吗？',
      { danger: action === 'delete', title: '批量操作确认' }).then(function (ok) {
      if (!ok) return;
      var done = 0, failed = 0, i = 0;
      function step() {
        if (i >= ids.length) {
          UI.toast('批量' + label + '完成：成功 ' + done + ' 篇' + (failed ? '，失败 ' + failed + ' 篇' : ''),
            failed ? 'warn' : 'ok');
          A.kbList = null; A.kbStats = null;
          render();
          return;
        }
        var no = ids[i++];
        var p;
        try { p = action === 'delete' ? S.kbDeleteItem(no) : S.kbSetStatus(no, action); }
        catch (e) { failed++; step(); return; }
        if (p && typeof p.then === 'function') {
          p.then(function () { done++; step(); }).catch(function () { failed++; step(); });
        } else { done++; step(); }
      }
      step();
    });
  }

  /* ---------------- 知识库批量导入（JSON 粘贴 / 文件 → 校验 → 确认导入） ---------------- */

  var kbImpState = { items: null, valid: null, report: null, mode: 'skip' };

  /** 客户端校验：与后端校验规则对齐，产出可导入 / 更新 / 跳过 / 错误明细 */
  function kbValidateImport(list) {
    var errors = [], valid = [], skipped = 0, updatable = 0;
    if (!Array.isArray(list)) {
      return { items: [], valid: [], errors: [{ row: '-', id: '-', field: '顶层结构', message: '必须是 JSON 数组' }], skipped: 0, updatable: 0 };
    }
    var exist = {};
    (A.kbList || []).forEach(function (it) { if (it && it.id) exist[it.id] = 1; });
    var seen = {};
    var NO_RE = /^KB-(SRV|INV|PLC|HMI|IO)-\d{3}$/;
    var cats = S.CATEGORIES.map(function (c) { return c.key; });
    var topics = kbTopics().map(function (t) { return t.key; });
    var types = kbBlockTypes();

    list.forEach(function (it, i) {
      var row = i + 1;
      function err(field, message) { errors.push({ row: row, id: (it && it.id) || '-', field: field, message: message }); }
      if (!it || typeof it !== 'object') { err('结构', '不是对象'); return; }
      var id = String(it.id || '').trim();
      if (!id) { err('id', '缺少知识编号'); return; }
      if (!NO_RE.test(id)) { err('id', '编号格式应为 KB-<品类前缀>-三位序号，如 KB-SRV-011'); return; }
      if (seen[id]) { err('id', '与本次导入的其他条目编号重复'); return; }
      seen[id] = 1;
      if (cats.indexOf(it.category) < 0) { err('category', '品类非法：' + it.category); return; }
      if (id.indexOf('KB-' + ({ servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' }[it.category]) + '-') !== 0) {
        err('id', '编号前缀与品类不一致'); return;
      }
      if (topics.indexOf(it.topic) < 0) { err('topic', '二级分类非法：' + it.topic); return; }
      if (!it.title || String(it.title).trim().length < 6) { err('title', '标题缺失或过短（≥6 字）'); return; }
      if (!it.summary || String(it.summary).trim().length < 10) { err('summary', '摘要缺失或过短（≥10 字）'); return; }
      if (!Array.isArray(it.content) || !it.content.length) { err('content', '内容块为空'); return; }
      var badBlock = '';
      it.content.forEach(function (b) {
        if (badBlock) return;
        if (!b || typeof b !== 'object' || types.indexOf(b.type) < 0) badBlock = String((b && b.type) || '空块');
      });
      if (badBlock) { err('content', '存在非法内容块类型：' + badBlock); return; }
      if (['public', 'internal', 'confidential'].indexOf(it.security) < 0) { err('security', '密级非法：' + it.security); return; }
      var roles = Array.isArray(it.roles) ? it.roles : [];
      var badRole = roles.filter(function (r) { return ['sales', 'engineer', 'purchase', 'partner'].indexOf(r) < 0; });
      if (badRole.length) { err('roles', '适用人群非法：' + badRole.join('/')); return; }
      if (roles.indexOf('partner') >= 0 && it.security !== 'public') {
        err('security', '含 partner 人群时密级必须为 public'); return;
      }
      if (exist[id]) { updatable++; if (kbImpState.mode === 'skip') { skipped++; return; } }
      valid.push(it);
    });
    return { items: list, valid: valid, errors: errors, skipped: skipped, updatable: updatable };
  }

  function kbImpMode() {
    var on = $('#kbImpMode button.on');
    return on ? on.getAttribute('data-impmode') : 'skip';
  }

  function kbImpReportHtml(r) {
    var html = '<div class="grid c4 mb12" style="gap:10px">' +
      '<div class="stat"><div class="label">可导入</div><div class="value" style="font-size:20px;color:var(--ok)">' + r.valid.length + '</div><div class="foot">含更新</div></div>' +
      '<div class="stat"><div class="label">更新</div><div class="value" style="font-size:20px;color:var(--brand)">' + r.updatable + '</div><div class="foot">编号已存在</div></div>' +
      '<div class="stat"><div class="label">跳过</div><div class="value" style="font-size:20px;color:var(--warn)">' + r.skipped + '</div><div class="foot">按当前模式忽略</div></div>' +
      '<div class="stat"><div class="label">错误</div><div class="value" style="font-size:20px;color:var(--danger)">' + r.errors.length + '</div><div class="foot">不会被导入</div></div>' +
      '</div>';
    if (r.errors.length) {
      html += '<div class="note danger small mb12"><b>错误明细（这些行不会被导入）</b>' +
        '<div class="table-wrap mt8" style="max-height:200px;overflow:auto;background:transparent;border:none"><table class="tbl">' +
        '<thead><tr><th style="width:70px">行号</th><th style="width:130px">编号</th><th style="width:90px">字段</th><th>说明</th></tr></thead><tbody>' +
        r.errors.slice(0, 80).map(function (e) {
          return '<tr><td class="mono small">第 ' + esc(e.row) + ' 行</td><td class="mono small">' + esc(e.id) + '</td>' +
            '<td class="mono small">' + esc(e.field) + '</td><td class="small">' + esc(e.message) + '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        (r.errors.length > 80 ? '<div class="small mt8">另有 ' + (r.errors.length - 80) + ' 条错误未列出</div>' : '') +
        '</div>';
    }
    html += '<div class="small muted">当前模式：<b>' + (kbImpMode() === 'overwrite' ? '覆盖同编号' : '跳过同编号') + '</b>' +
      '；确认导入将调用 S.kbImport(items, mode)。</div>';
    return html;
  }

  function kbImpRender(r, imported) {
    var box = document.getElementById('kbImpReport');
    if (!box) return;
    var html = kbImpReportHtml(r);
    if (imported) {
      html = '<div class="note small mb12">导入完成：新增 <b>' + (Number(imported.imported) || 0) + '</b> 篇，' +
        '更新 <b>' + (Number(imported.updated) || 0) + '</b> 篇，' +
        '跳过 <b>' + (Number(imported.skipped) || 0) + '</b> 篇' +
        ((imported.errors && imported.errors.length) ? '，服务端提示 <b>' + imported.errors.length + '</b> 条' : '') +
        '。<a href="#/knowledge" data-close>返回列表</a></div>' + html;
      if (imported.errors && imported.errors.length) {
        html += '<div class="note warn small mt12"><b>服务端校验提示</b><ul style="margin:6px 0 0;padding-left:18px">' +
          imported.errors.slice(0, 20).map(function (e) {
            return '<li>第 ' + esc(e.row == null ? '-' : e.row) + ' 行 ' + esc(e.id || '') +
              '：' + esc(e.field || '') + ' ' + esc(e.message || '') + '</li>';
          }).join('') + '</ul></div>';
      }
    }
    box.innerHTML = html;
  }

  function kbImpValidate() {
    var txt = $('#kbImpText').value.trim();
    if (!txt) { UI.toast('请先粘贴知识库 JSON', 'warn'); return; }
    var data;
    try { data = JSON.parse(txt); }
    catch (e) { UI.toast('JSON 解析失败：' + e.message, 'err'); return; }
    kbImpState.items = Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : null);
    if (!kbImpState.items) { UI.toast('顶层结构必须是数组，或含 items 数组的对象', 'err'); return; }
    kbImpState.mode = kbImpMode();
    kbImpState.report = kbValidateImport(kbImpState.items);
    kbImpRender(kbImpState.report);
    UI.toast('校验完成：可导入 ' + kbImpState.report.valid.length + ' 篇，错误 ' + kbImpState.report.errors.length + ' 条',
      kbImpState.report.errors.length ? 'warn' : 'ok');
  }

  function kbImpRun() {
    if (!kbImpState.report || !kbImpState.items) { UI.toast('请先执行校验', 'warn'); return; }
    if (!kbImpState.report.valid.length) { UI.toast('没有可导入的条目，请先修正错误明细', 'err'); return; }
    var box = document.getElementById('kbImpReport');
    if (box) box.innerHTML = '<div class="note small">正在导入 ' + kbImpState.report.valid.length + ' 篇…</div>';
    after(S.kbImport(kbImpState.report.valid, kbImpMode()), function (res) {
      kbImpRender(kbImpState.report, res);
      A.kbList = null; A.kbStats = null;
      UI.toast('导入完成：新增 ' + (Number(res && res.imported) || 0) + ' 篇，更新 ' + (Number(res && res.updated) || 0) + ' 篇', 'ok');
    }, '导入失败');
  }

  function kbOpenImport() {
    kbImpState = { items: null, valid: null, report: null, mode: 'skip' };
    var sample = '[\n  {\n    "id": "KB-SRV-011",\n    "category": "servo",\n    "topic": "selection",\n' +
      '    "title": "示例知识标题（可删除）",\n    "summary": "一句话说明这篇讲什么、解决什么问题（≥10 字）",\n' +
      '    "tags": ["SV660N", "选型"],\n    "roles": ["sales", "engineer"],\n    "security": "public",\n' +
      '    "readMinutes": 6,\n    "level": 1,\n    "sortOrder": 10,\n' +
      '    "content": [{ "type": "p", "text": "正文段落" }],\n    "relatedQuestions": ["SRV-001"],\n' +
      '    "source": { "title": "资料名称", "url": "https://www.inovance.com/" }\n  }\n]';
    var m = UI.modal({
      title: '批量导入知识库',
      wide: true,
      html: '' +
        '<div class="note small mb12">导入前会做本地校验并给出报告；确认后再调用数据层 <span class="mono">S.kbImport(items, mode)</span>。字段规范见 docs/知识库模块设计.md §2.2 / §2.3。</div>' +
        '<div class="field"><label>知识库 JSON（数组，或含 items 数组的对象）</label>' +
        '<textarea id="kbImpText" class="json-area" style="min-height:180px" placeholder=\'' + esc(sample).slice(0, 120) + '…\'></textarea></div>' +
        '<div class="inline-fields mb12">' +
        '  <div class="field"><label>导入模式</label><div class="segment" id="kbImpMode">' +
        '    <button class="on" data-impmode="skip">跳过同编号</button>' +
        '    <button data-impmode="overwrite">覆盖同编号</button>' +
        '  </div></div>' +
        '  <div class="field" style="flex:0 0 auto"><button class="btn" id="kbImpTpl">填入示例模板</button></div>' +
        '</div>' +
        '<div class="field"><label>或选择 JSON 文件</label><input type="file" id="kbImpFile" accept=".json,application/json"></div>' +
        '<div class="btn-row mb12">' +
        '  <button class="btn primary" id="kbImpValidate">' + icon('check', 15) + ' 校验并生成报告</button>' +
        '  <button class="btn" id="kbImpRun">' + icon('upload', 15) + ' 确认导入</button>' +
        '</div>' +
        '<div class="card-head"><h3>导入校验报告</h3></div>' +
        '<div id="kbImpReport"><div class="empty"><p>尚未执行校验</p></div></div>',
      footerHtml: '<button class="btn" data-close>关闭</button>',
      onMount: function (mo) {
        $$('[data-close]', mo.el).forEach(function (b) { b.addEventListener('click', mo.close); });
        $$('#kbImpMode button').forEach(function (b) {
          b.addEventListener('click', function () {
            $$('#kbImpMode button').forEach(function (x) { x.classList.remove('on'); });
            b.classList.add('on');
            if (kbImpState.items) {
              kbImpState.mode = kbImpMode();
              kbImpState.report = kbValidateImport(kbImpState.items);
              kbImpRender(kbImpState.report);
            }
          });
        });
        $('#kbImpTpl').addEventListener('click', function () { $('#kbImpText').value = sample; });
        $('#kbImpValidate').addEventListener('click', kbImpValidate);
        $('#kbImpRun').addEventListener('click', kbImpRun);
        $('#kbImpFile').addEventListener('change', function () {
          var f = this.files && this.files[0];
          if (!f) return;
          UI.readFile(f).then(function (txt) {
            $('#kbImpText').value = txt;
            UI.toast('文件已载入，请点击「校验并生成报告」', 'ok');
          }).catch(function (e) { UI.toast('文件读取失败：' + e.message, 'err'); });
        });
      }
    });
    return m;
  }

  /* ---------------- 知识编辑器：内容块 / 关联题 / 实时预览 ---------------- */

  function kbSyncPreview() {
    var prev = document.getElementById('kbPreview');
    if (!prev) return;
    var blocks = kbReadBlocks();
    var title = $('#keTitle') ? $('#keTitle').value : '';
    var summary = $('#keSummary') ? $('#keSummary').value : '';
    var tags = $('#keTags') ? $('#keTags').value.split(/[,，]/).map(function (t) { return t.trim(); }).filter(Boolean) : [];
    var html = kbMeta($('#keNo') ? $('#keNo').value : '', title || '（尚未填写标题）', blocks, {
      topic: $('#keTopic') ? $('#keTopic').value : '',
      category: $('#keCat') ? $('#keCat').value : '',
      security: $('#keSec') ? $('#keSec').value : 'public',
      level: $('#keLevel') ? Number($('#keLevel').value) : 1,
      summary: summary,
      tags: tags
    }) + kbRenderContent(blocks);
    var est = document.getElementById('kbEst');
    if (est) est.textContent = '预计阅读 ' + kbEstimateMinutes(blocks) + ' 分钟';
    prev.innerHTML = html;
  }

  function kbSyncRelated() {
    var inp = document.getElementById('kRelated');
    if (!inp) return;
    var ids = String(inp.value || '').split(/[,，;；\s]+/).filter(Boolean);
    var box = document.getElementById('kRelatedChips');
    if (!box) return;
    box.innerHTML = ids.length
      ? ids.map(function (id) {
        return '<span class="tag brand">' + esc(id) +
          ' <a href="#" class="kb-rel-del" data-no="' + esc(id) + '" style="font-weight:700">×</a></span>';
      }).join('')
      : '<span class="small muted">尚未关联题目</span>';
    $$('#kRelatedChips .kb-rel-del').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var no = a.getAttribute('data-no');
        inp.value = String(inp.value || '').split(/[,，;；\s]+/).filter(function (x) { return x && x !== no; }).join(',');
        kbSyncRelated();
      });
    });
  }

  function bindKbEditor(seed) {
    var blocks = Array.isArray(seed) ? seed : [];
    var box = $('#kbBlocks');
    if (!box) return;
    if (!blocks.length) blocks = [JSON.parse(JSON.stringify(KB_BLOCK_DEFAULT.p))];

    function renderBlocks() {
      $('#kbBlocks').innerHTML = blocks.map(function (b, i) { return kbBlockEditor(b, i); }).join('') +
        (blocks.length ? '' : '<div class="empty"><p>还没有内容块，请在上方选择类型后点击「添加块」</p></div>');
      $$('#kbBlocks .kb-block').forEach(function (el) {
        var i = Number(el.getAttribute('data-i'));
        var typeSel = $('.kb-type', el);
        if (typeSel) typeSel.addEventListener('change', function () {
          var nb = JSON.parse(JSON.stringify(KB_BLOCK_DEFAULT[this.value] || { type: this.value }));
          var old = blocks[i] || {};
          if (nb.type === old.type) return;
          /* 同型迁移：单文本块之间保留正文 */
          if (typeof old.text === 'string' && typeof nb.text === 'string') nb.text = old.text;
          blocks[i] = nb;
          renderBlocks();
          kbSyncPreview();
        });
        $$('[data-kb-act]', el).forEach(function (btn) {
          btn.addEventListener('click', function () {
            var act = btn.getAttribute('data-kb-act');
            var b = blocks[i];
            /* 表格块：按「列数 / 行数」输入框直接调整，多余内容会被截断 */
            function resizeTable() {
              var cur = blocks[i] || {};
              var colsEl = $('.kb-tbl-cols', el), rowsEl = $('.kb-tbl-rows', el);
              var wantCols = colsEl ? Math.min(8, Math.max(1, Number(colsEl.value) || 1)) : (cur.head || []).length || 1;
              var wantRows = rowsEl ? Math.min(20, Math.max(0, Number(rowsEl.value) || 0)) : (cur.rows || []).length;
              var head = (cur.head || []).slice(0, wantCols);
              while (head.length < wantCols) head.push('');
              var rows = (cur.rows || []).slice(0, wantRows).map(function (r) {
                var arr = (r || []).slice(0, wantCols);
                while (arr.length < wantCols) arr.push('');
                return arr;
              });
              cur.head = head;
              cur.rows = rows;
              blocks[i] = cur;
              renderBlocks();
              kbSyncPreview();
            }
            if (act === 'table-resize') { resizeTable(); return; }
            if (act === 'up') {
              if (i > 0) { blocks.splice(i - 1, 0, blocks.splice(i, 1)[0]); renderBlocks(); kbSyncPreview(); }
              else UI.toast('已经是第一个块', 'warn');
            } else if (act === 'down') {
              if (i < blocks.length - 1) { blocks.splice(i + 1, 0, blocks.splice(i, 1)[0]); renderBlocks(); kbSyncPreview(); }
              else UI.toast('已经是最后一个块', 'warn');
            } else if (act === 'del') {
              if (blocks.length <= 1) { UI.toast('至少保留一个内容块', 'warn'); return; }
              blocks.splice(i, 1); renderBlocks(); kbSyncPreview();
            } else if (act === 'row-add') {
              blocks[i].rows = blocks[i].rows || [];
              if (blocks[i].rows.length >= 20) { UI.toast('最多 20 行', 'warn'); return; }
              var cols = (blocks[i].head || []).length || 1;
              var nr = [];
              while (nr.length < cols) nr.push('');
              blocks[i].rows.push(nr);
              renderBlocks(); kbSyncPreview();
            } else if (act === 'row-del') {
              var rr = blocks[i].rows || [];
              if (rr.length <= 1) { UI.toast('至少保留 1 行数据', 'warn'); return; }
              rr.pop(); renderBlocks(); kbSyncPreview();
            } else if (act === 'col-add') {
              var hh = blocks[i].head || (blocks[i].head = []);
              if (hh.length >= 8) { UI.toast('最多 8 列', 'warn'); return; }
              hh.push('');
              (blocks[i].rows || []).forEach(function (r) { r.push(''); });
              renderBlocks(); kbSyncPreview();
            } else if (act === 'col-del') {
              var h2 = blocks[i].head || [];
              if (h2.length <= 1) { UI.toast('至少保留 1 列', 'warn'); return; }
              h2.pop();
              (blocks[i].rows || []).forEach(function (r) { r.pop(); });
              renderBlocks(); kbSyncPreview();
            }
          });
        });
      });
    }
    renderBlocks();

    $('#kbBlocks').addEventListener('input', function (e) {
      var el = e.target;
      if (!el) return;
      var host = el.closest ? el.closest('.kb-block') : null;
      if (!host) return;
      var i = Number(host.getAttribute('data-i'));
      var b = blocks[i];
      if (!b) return;
      if (el.classList.contains('kb-cell')) {
        var t = el.getAttribute('data-f');
        var ci = Number(el.getAttribute('data-c'));
        if (t === 'head') { b.head = b.head || []; b.head[ci] = el.value; }
        else {
          var ri = Number(el.getAttribute('data-r'));
          b.rows = b.rows || [];
          if (b.rows[ri]) b.rows[ri][ci] = el.value;
        }
        kbSyncPreview();
        return;
      }
      var f = el.getAttribute('data-f');
      if (!f) return;
      if (f === 'items') b.items = el.value.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean);
      else b[f] = el.value;
      kbSyncPreview();
    });
    $('#kbBlocks').addEventListener('change', function (e) {
      var el = e.target;
      if (!el) return;
      var host = el.closest ? el.closest('.kb-block') : null;
      if (!host) return;
      /* 表格行列数：由所在块的「应用行列数」按钮统一重排，避免边输入边重建 DOM */
      if (el.classList.contains('kb-tbl-cols') || el.classList.contains('kb-tbl-rows')) {
        UI.toast('已修改行列数，请点击该块内的「应用行列数」生效', 'warn', 1800);
        return;
      }
      var i = Number(host.getAttribute('data-i'));
      var b = blocks[i];
      if (!b) return;
      var f = el.getAttribute('data-f');
      if (f === 'items') b.items = el.value.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean);
      else if (f) b[f] = el.value;
      if (el.getAttribute('data-f2') === 'ordered') b.ordered = el.checked;
      kbSyncPreview();
    });

    var add = $('#kAddBlock');
    if (add) add.addEventListener('click', function () {
      var t = $('#kAddType').value;
      blocks.push(JSON.parse(JSON.stringify(KB_BLOCK_DEFAULT[t] || { type: t })));
      renderBlocks();
      kbSyncPreview();
      var list = $$('#kbBlocks .kb-block');
      if (list.length) list[list.length - 1].scrollIntoView({ block: 'nearest' });
    });

    // 编号建议：新增态下切换品类自动改名
    var cat = $('#keCat');
    if (cat) cat.addEventListener('change', function () {
      var noEl = $('#keNo');
      if (!noEl) return;
      if (/^KB-/.test(noEl.value) && (noEl.getAttribute('data-auto') === '1' || !kbItemFromCache(noEl.value))) {
        noEl.value = kbSuggestNo(cat.value, A.kbList || []);
        noEl.setAttribute('data-auto', '1');
      }
      kbSyncPreview();
    });

    ['keTitle', 'keSummary', 'keTags', 'keTopic', 'keNo', 'keSec', 'keLevel'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', kbSyncPreview);
      if (el) el.addEventListener('change', kbSyncPreview);
    });
    $$('#keRoles .chip').forEach(function (c) {
      c.addEventListener('click', function () {
        c.classList.toggle('on');
        var on = $$('#keRoles .chip.on').map(function (x) { return x.getAttribute('data-r'); });
        var sec = $('#keSec');
        if (on.indexOf('partner') >= 0 && sec && sec.value !== 'public') {
          UI.toast('含「合作客户」人群时密级已自动切换为「公开」', 'warn');
          sec.value = 'public';
        }
        kbSyncPreview();
      });
    });
    var sec = $('#keSec');
    if (sec) sec.addEventListener('change', function () {
      var on = $$('#keRoles .chip.on').map(function (x) { return x.getAttribute('data-r'); });
      if (this.value !== 'public' && on.indexOf('partner') >= 0) {
        UI.toast('合作客户仅能查看公开知识，已取消「合作客户」人群', 'warn');
        $$('#keRoles .chip').forEach(function (c) { if (c.getAttribute('data-r') === 'partner') c.classList.remove('on'); });
      }
      kbSyncPreview();
    });

    // 关联题目选择器
    var qs = $('#kQSearch');
    if (qs) qs.addEventListener('click', kbSearchQuestions);
    var qk = $('#kQKw');
    if (qk) qk.addEventListener('keydown', function (e) { if (e.key === 'Enter') kbSearchQuestions(); });
    var sel = $('#kQCat');
    if (sel) sel.addEventListener('change', kbSearchQuestions);
    kbSyncRelated();

    var saveBtn = $('#keSave');
    if (saveBtn) saveBtn.addEventListener('click', function () { kbSaveEditor(blocks); });
    kbSyncPreview();
  }

  /** 从编辑器 DOM 收集全部内容块 */
  function kbReadBlocks() {
    var out = [];
    $$('#kbBlocks .kb-block').forEach(function (el) {
      var typeEl = $('.kb-type', el);
      var type = typeEl ? typeEl.value : '';
      var b = { type: type };
      $$('.kb-field', el).forEach(function (f) {
        var key = f.getAttribute('data-f');
        if (!key) return;
        var inner = f.querySelector('[data-f2]');
        var v = inner ? inner.value : f.value;
        if (key === 'items') b.items = String(v || '').split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean);
        else b[key] = v;
      });
      var ord = $('[data-f2="ordered"]', el);
      if (ord) b.ordered = ord.checked;
      var cells = $$('.kb-cell', el);
      if (cells.length) {
        var head = [], rows = [];
        cells.forEach(function (c) {
          var ci = Number(c.getAttribute('data-c'));
          if (c.getAttribute('data-f') === 'head') head[ci] = c.value;
          else {
            var ri = Number(c.getAttribute('data-r'));
            rows[ri] = rows[ri] || [];
            rows[ri][ci] = c.value;
          }
        });
        b.head = head.map(function (x) { return x == null ? '' : x; });
        b.rows = rows.map(function (r) {
          var arr = r || [];
          while (arr.length < b.head.length) arr.push('');
          return arr;
        });
      }
      out.push(b);
    });
    return out;
  }

  function kbSearchQuestions() {
    var box = document.getElementById('kQResults');
    if (!box) return;
    var kw = $('#kQKw') ? $('#kQKw').value.trim() : '';
    var cat = $('#kQCat') ? $('#kQCat').value : '';
    var cond = { keyword: kw, status: 'any' };
    if (cat) cond.categories = [cat];
    var list = [];
    try { list = Bank.filter(cond) || []; }
    catch (e) { list = []; }
    if (list.length > 60) list = list.slice(0, 60);
    var inp = document.getElementById('kRelated');
    var on = String(inp && inp.value || '').split(/[,，;；\s]+/).filter(Boolean);
    box.innerHTML = list.length
      ? list.map(function (q) {
        var checked = on.indexOf(q.id) >= 0;
        return '<label class="list-item" style="cursor:pointer">' +
          '<input type="checkbox" class="kb-qchk" value="' + esc(q.id) + '"' + (checked ? ' checked' : '') + '>' +
          '<div style="flex:1;min-width:0">' +
          '<div class="ttl" style="font-size:13px">' + esc(q.stem) + '</div>' +
          '<div class="sub">' + esc(q.id) + ' · ' + esc(Bank.catMeta(q.category).short) + ' · ' +
          esc(Bank.typeName(q.type)) + ' · ' + esc(Bank.diffName(q.difficulty)) + '</div>' +
          '</div></label>';
      }).join('')
      : '<div class="empty"><p>' + (kw || cat ? '没有匹配的题目，换个关键词试试' : '输入关键词后点击「检索」从题库挑题') + '</p></div>';
    $$('#kQResults .kb-qchk').forEach(function (c) {
      c.addEventListener('change', function () {
        var i2 = document.getElementById('kRelated');
        var ids = String(i2.value || '').split(/[,，;；\s]+/).filter(Boolean);
        if (c.checked) {
          if (!isRemote() && !Bank.byId(c.value)) { UI.toast('题号 ' + c.value + ' 不存在，已忽略', 'err'); c.checked = false; return; }
          if (ids.indexOf(c.value) < 0) ids.push(c.value);
        } else {
          ids = ids.filter(function (x) { return x !== c.value; });
        }
        i2.value = ids.join(',');
        kbSyncRelated();
      });
    });
  }

  function kbSaveEditor(blocks) {
    var item = {
      id: ($('#keNo').value || '').trim(),
      category: $('#keCat').value,
      topic: $('#keTopic').value,
      title: ($('#keTitle').value || '').trim(),
      summary: ($('#keSummary').value || '').trim(),
      tags: ($('#keTags').value || '').split(/[,，]/).map(function (t) { return t.trim(); }).filter(Boolean),
      roles: $$('#keRoles .chip.on').map(function (c) { return c.getAttribute('data-r'); }),
      security: $('#keSec').value,
      level: Number($('#keLevel').value) || 1,
      readMinutes: Math.max(1, Number($('#keRead').value) || 1),
      sortOrder: Number($('#keSort').value) || 0,
      source: { title: ($('#keSrcTitle').value || '').trim(), url: ($('#keSrcUrl').value || '').trim() },
      content: blocks,
      relatedQuestions: String($('#kRelated').value || '').split(/[,，;；\s]+/).filter(Boolean),
      updatedAt: $('#keUpdated').value || S.todayKey()
    };

    if (!item.id) { UI.toast('请填写知识编号', 'warn'); return; }
    if (!/^KB-(SRV|INV|PLC|HMI|IO)-\d{3}$/.test(item.id)) {
      UI.toast('知识编号格式应为 KB-<品类前缀>-三位序号，如 KB-SRV-011', 'warn'); return;
    }
    var prefix = { servo: 'SRV', inverter: 'INV', plc: 'PLC', hmi: 'HMI', io: 'IO' }[item.category];
    if (prefix && item.id.indexOf('KB-' + prefix + '-') !== 0) {
      UI.toast('编号前缀与所选品类不一致（当前品类应为 KB-' + prefix + '-）', 'warn'); return;
    }
    if (item.title.length < 6) { UI.toast('标题过短，请补充完整（≥6 字）', 'warn'); return; }
    if (item.summary.length < 10) { UI.toast('摘要过短，请写清「讲什么、解决什么问题」（≥10 字）', 'warn'); return; }
    if (!item.roles.length) { UI.toast('请至少选择一个适用人群', 'warn'); return; }
    if (item.roles.indexOf('partner') >= 0 && item.security !== 'public') {
      UI.toast('含「合作客户」人群时密级必须为公开', 'warn'); return;
    }
    /* 正文完整性：全部为空则拦截；仅个别块为空只提示，不阻断保存（避免编辑器被卡死） */
    var emptyText = blocks.filter(function (b) {
      return ['h', 'p', 'tip', 'code'].indexOf(b.type) >= 0 && !String(b.text || '').trim();
    });
    var filled = blocks.filter(function (b) { return kbBlockText(b).trim(); });
    if (!filled.length) {
      UI.toast('正文全部为空，请至少填写一个内容块', 'warn');
      return;
    }
    if (emptyText.length) UI.toast('提示：有 ' + emptyText.length + ' 个内容块正文为空，已一并保存', 'warn', 1800);

    var publish = $('#kePublish').checked;
    after(S.kbSaveItem(item), function () {
      after(S.kbSetStatus(item.id, publish ? 'published' : 'draft'), function () {
        UI.toast('知识已保存' + (publish ? '并上线' : '（草稿）'), 'ok');
        A.kbList = null; A.kbStats = null; A.kbPage = 1;
        location.hash = '#/knowledge';
        render();
      }, '设置状态失败');
    }, '保存失败');
  }

  /* ================= 启动 ================= */

  function boot() {
    if (!location.hash) location.hash = '#/overview';
    window.addEventListener('hashchange', render);

    // API 模式：先向后端确认会话并预加载题库/任务，再渲染
    if (isRemote() && S.user()) {
      S.init().then(function () {
        render();
      }).catch(function (e) {
        console.warn('[admin] 会话恢复失败：', e.message);
        try { S.logout(); } catch (err) { /* ignore */ }
        renderLogin();
      });
      return;
    }
    render();
  }

  global.IqAdmin = A;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
