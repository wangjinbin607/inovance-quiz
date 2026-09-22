/* ==========================================================================
   汇川产品刷题工具 · 用户端应用 (app.js)
   依赖：store.js / engine.js / ui.js / bank.js
   ========================================================================== */
(function (global) {
  'use strict';

  var UI = global.IqUI, S = global.IqStore, Bank = global.IqBank, Engine = global.IqEngine;
  var $ = UI.$, $$ = UI.$$, esc = UI.esc, icon = UI.icon;

  var DRAFT_KEY = 'iqz.draft.v1';

  var App = {
    route: 'dashboard',
    param: null,
    practice: null,
    exam: null,
    ui: { sideOpen: false }
  };

  /* ======================================================================
     一、通用小工具
     ====================================================================== */

  function catChip(key) {
    var m = Bank.catMeta(key);
    return '<span class="tag" style="background:' + m.color + '1a;color:' + m.color + '">' + esc(m.short) + '</span>';
  }

  function diffDots(d) {
    var s = '<span class="dif" title="难度：' + esc(Bank.diffName(d)) + '">';
    for (var i = 1; i <= 3; i++) s += '<i class="' + (i <= d ? 'on' : '') + '"></i>';
    return s + '</span>';
  }

  function secTag(sec) {
    sec = sec || 'public';
    return '<span class="secmark ' + sec + '">' + esc(Bank.secName(sec)) + '</span>';
  }

  function pct(n) { return n == null ? '—' : n + '%'; }

  function go(hash) { location.hash = hash; }

  function currentRole() { return S.roleDef(); }

  /* ======================================================================
     二、登录与骨架
     ====================================================================== */

  /* -------- API 模式：账号密码登录（对接后端 /api/auth/login） -------- */
  function renderRemoteLogin() {
    var html = '' +
      '<div style="min-height:100vh;display:grid;place-items:center;background:linear-gradient(140deg,#0b5cab,#1478d4 55%,#1a86e0);padding:22px">' +
      '<div style="width:100%;max-width:900px;display:grid;grid-template-columns:1fr 1fr;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(6,26,54,.3)">' +
      '  <div style="padding:38px 34px;background:linear-gradient(160deg,#0a4f95,#1478d4)">' +
      '    <div class="brand" style="font-size:19px"><span class="logo">汇</span>汇川产品刷题工具</div>' +
      '    <p style="color:rgba(255,255,255,.86);margin-top:14px;font-size:13.5px;line-height:1.9">' +
      '      面向销售、技术工程师、售后运维与合作客户的工业自动化产品知识训练平台。<br>' +
      '      覆盖 <b>伺服 · 变频器 · PLC · HMI · IO 系统</b> 五大品类。' +
      '    </p>' +
      '    <div style="margin-top:20px;display:grid;gap:9px">' +
      ['题库与学习数据由服务端统一管理，多端同步',
        '权限与密级由后端强制过滤，越权内容不下发',
        '服务端判分，成绩不可篡改',
        '支持断点续考、团队报表与题库运营'].map(function (t) {
          return '<div style="display:flex;gap:9px;align-items:center;color:#fff;font-size:13px">' +
            '<span style="color:#8fd0ff">' + icon('check', 15) + '</span>' + esc(t) + '</div>';
        }).join('') +
      '    </div>' +
      '    <div style="margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.72);font-size:12px">' +
      '      服务地址：' + esc(S.apiBase ? S.apiBase() : '') +
      '    </div>' +
      '  </div>' +
      '  <div style="padding:36px 32px">' +
      '    <h2 style="font-size:19px">账号登录</h2>' +
      '    <p class="muted small" style="margin-top:5px">请使用管理员分配的账号登录；不同角色对应不同的题库可见范围。</p>' +
      '    <div class="field mt16"><label>账号</label><input type="text" id="loginUser" placeholder="如 engineer01" autocomplete="username"></div>' +
      '    <div class="field"><label>密码</label><input type="password" id="loginPass" placeholder="请输入密码" autocomplete="current-password"></div>' +
      '    <button class="btn primary block lg" id="loginBtn" style="margin-top:8px">' + icon('play', 16) + ' 进入刷题平台</button>' +
      '    <div id="loginWarn" class="note warn hidden" style="margin-top:10px"></div>' +
      '    <div class="note small" style="margin-top:14px">' +
      '      <b>联调演示账号</b><br>' +
      '      admin / Admin@123（超级管理员）<br>' +
      '      trainer01 / Trainer@123（培训讲师）<br>' +
      '      engineer01 / Engineer@123（内部员工）<br>' +
      '      partner01 / Partner@123（代理商/客户）' +
      '    </div>' +
      '  </div>' +
      '</div></div>';
    document.getElementById('app').innerHTML = html;

    function doLogin() {
      var u = $('#loginUser').value.trim();
      var p = $('#loginPass').value;
      if (!u || !p) { UI.toast('请输入账号与密码', 'warn'); return; }
      var btn = $('#loginBtn');
      btn.disabled = true;
      btn.textContent = '登录中…';
      S.login(u, p).then(function () {
        UI.toast('欢迎，' + S.user().name, 'ok');
        location.hash = '#/dashboard';
        render();
      }).catch(function (e) {
        btn.disabled = false;
        btn.innerHTML = icon('play', 16) + ' 进入刷题平台';
        var w = $('#loginWarn');
        if (w) { w.textContent = e.message || '登录失败，请检查账号密码或服务是否可用'; w.classList.remove('hidden'); }
        UI.toast(e.message || '登录失败', 'err');
      });
    }
    $('#loginBtn').addEventListener('click', doLogin);
    ['loginUser', 'loginPass'].forEach(function (id) {
      $('#' + id).addEventListener('keydown', function (e) { if (e.key === 'Enter') doLogin(); });
    });
    $('#loginUser').focus();
  }

  function renderLogin() {
    if (typeof S.isRemote === 'function' && S.isRemote()) { renderRemoteLogin(); return; }
    var html = '' +
      '<div style="min-height:100vh;display:grid;place-items:center;background:linear-gradient(140deg,#0b5cab,#1478d4 55%,#1a86e0);padding:22px">' +
      '<div style="width:100%;max-width:940px;display:grid;grid-template-columns:1.05fr .95fr;gap:0;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(6,26,54,.3)">' +
      '  <div style="padding:38px 34px;background:linear-gradient(160deg,#0a4f95,#1478d4)">' +
      '    <div class="brand" style="font-size:19px"><span class="logo">汇</span>汇川产品刷题工具</div>' +
      '    <p style="color:rgba(255,255,255,.86);margin-top:14px;font-size:13.5px;line-height:1.9">' +
      '      面向销售、技术工程师、售后运维与合作客户的工业自动化产品知识训练平台。<br>' +
      '      覆盖 <b>伺服 · 变频器 · PLC · HMI · IO 系统</b> 五大品类，' +
      '      支持多模式刷题、错题本溯源解析、模拟考试与能力数据可视化。' +
      '    </p>' +
      '    <div style="margin-top:22px;display:grid;gap:10px">' +
      ['五大品类 · 三重维度题库（品类 × 场景 × 难度）',
        '错题自动收录 · 专业解析 · 官方资料溯源',
        '自主模拟考试 · 真实评分与薄弱项定位',
        '多角色权限隔离 · 涉密题库对外不可见'].map(function (t) {
          return '<div style="display:flex;gap:9px;align-items:center;color:#fff;font-size:13px">' +
            '<span style="color:#8fd0ff">' + icon('check', 15) + '</span>' + esc(t) + '</div>';
        }).join('') +
      '    </div>' +
      '  </div>' +
      '  <div style="padding:34px 32px">' +
      '    <h2 style="font-size:19px">选择身份进入</h2>' +
      '    <p class="muted small" style="margin-top:5px">不同身份对应不同的题库密级与功能权限，可随时在右上角切换。</p>' +
      '    <div id="roleList" style="display:grid;gap:10px;margin-top:16px">' +
      Object.keys(S.ROLE_DEFS).map(function (k) {
        var r = S.ROLE_DEFS[k];
        return '<label class="opt" data-role="' + k + '" style="align-items:center">' +
          '<span class="key" style="border-radius:50%">' + icon('user', 13) + '</span>' +
          '<span class="txt"><b>' + esc(r.label) + '</b><div class="muted small">' + esc(r.desc) + '</div></span>' +
          '</label>';
      }).join('') +
      '    </div>' +
      '    <div class="grid c2" style="margin-top:14px;gap:10px">' +
      '      <div class="field mb0"><label>姓名 / 工号</label><input type="text" id="loginName" placeholder="如：张工 / E10086"></div>' +
      '      <div class="field mb0"><label>部门 / 渠道</label><input type="text" id="loginDept" placeholder="如：华东技术服务部"></div>' +
      '    </div>' +
      '    <button class="btn primary block lg" id="loginBtn" style="margin-top:16px">' + icon('play', 16) + ' 进入刷题平台</button>' +
      '    <p class="muted small" style="margin-top:12px">数据保存在本机浏览器（localStorage），不上传服务器；企业部署时可对接统一身份认证（SSO）。</p>' +
      '    <div id="loginWarn" class="note warn hidden" style="margin-top:10px"></div>' +
      '  </div>' +
      '</div></div>';

    document.getElementById('app').innerHTML = html;

    var picked = 'employee';
    function pick(k) {
      picked = k;
      $$('#roleList .opt').forEach(function (el) {
        el.classList.toggle('sel', el.getAttribute('data-role') === k);
      });
    }
    pick('employee');
    $$('#roleList .opt').forEach(function (el) {
      el.addEventListener('click', function () { pick(el.getAttribute('data-role')); });
    });
    $('#loginBtn').addEventListener('click', function () {
      var name = $('#loginName').value.trim();
      var dept = $('#loginDept').value.trim();
      if (!name) { UI.toast('请填写姓名或工号', 'warn'); $('#loginName').focus(); return; }
      S.login(name, picked, dept);
      UI.toast('欢迎，' + name, 'ok');
      location.hash = '#/dashboard';
      render();
    });
    $('#loginName').addEventListener('keydown', function (e) { if (e.key === 'Enter') $('#loginBtn').click(); });
  }

  var NAV = [
    { group: '学习中心', items: [
      { key: 'dashboard', name: '学习仪表盘', icon: 'home', hash: '#/dashboard' },
      { key: 'practice', name: '刷题训练', icon: 'book', hash: '#/practice' },
      { key: 'kb', name: '知识库', icon: 'layers', hash: '#/kb' },
      { key: 'tasks', name: '考试任务', icon: 'exam', hash: '#/tasks' },
      { key: 'exam', name: '模拟考试', icon: 'clock', hash: '#/exam' },
      { key: 'wrong', name: '错题本', icon: 'wrong', hash: '#/wrong', badge: true },
      { key: 'fav', name: '我的收藏', icon: 'star', hash: '#/fav' }
    ] },
    { group: '能力分析', items: [
      { key: 'stats', name: '数据统计', icon: 'chart', hash: '#/stats' },
      { key: 'profile', name: '个人设置', icon: 'settings', hash: '#/profile' }
    ] },
    { group: '管理与运营', admin: true, items: [
      { key: 'admin', name: '管理后台', icon: 'shield', hash: 'admin.html' }
    ] }
  ];

  function renderShell(content) {
    var u = S.user(), r = S.roleDef(u.role);
    var wrongCount = S.wrongList(false).length;

    var sideHtml = NAV.map(function (g) {
      if (g.admin && !(S.hasPerm('bank.write') || S.hasPerm('task.write') || S.hasPerm('report.all'))) return '';
      return '<div class="group-title">' + esc(g.group) + '</div>' + g.items.map(function (it) {
        if (it.key === 'admin' && !(S.hasPerm('bank.write') || S.hasPerm('task.write') || S.hasPerm('report.all'))) return '';
        var active = it.key === App.route ? ' active' : '';
        var badge = (it.badge && wrongCount) ? '<span class="badge">' + wrongCount + '</span>' : '';
        var isExt = /\.html/.test(it.hash);
        return '<a href="' + it.hash + '" class="' + active.trim() + '"' + (isExt ? '' : ' data-nav="' + it.key + '"') + '>' +
          icon(it.icon, 17) + '<span>' + esc(it.name) + '</span>' + badge + '</a>';
      }).join('');
    }).join('');

    var tabbarItems = ['dashboard', 'practice', 'kb', 'wrong', 'stats'];
    var tabbarHtml = NAV.reduce(function (a, g) { return a.concat(g.items); }, [])
      .filter(function (i) { return tabbarItems.indexOf(i.key) >= 0; })
      .map(function (it) {
        return '<a href="' + it.hash + '" class="' + (it.key === App.route ? 'active' : '') + '">' +
          icon(it.icon, 20) + '<span>' + esc(it.name.replace('学习仪表盘', '首页').replace('刷题训练', '刷题').replace('数据统计', '统计')) + '</span></a>';
      }).join('');

    document.getElementById('app').innerHTML =
      '<div class="app">' +
      '  <header class="topbar">' +
      '    <button class="iconbtn" id="sideToggle" style="display:none" title="菜单">' + icon('menu', 18) + '</button>' +
      '    <div class="brand"><span class="logo">汇</span>汇川产品刷题工具<small>Industrial Automation Quiz</small></div>' +
      '    <div class="topbar-spacer"></div>' +
      '    <nav class="topnav">' +
      '      <a href="#/practice" data-nav="practice">' + icon('book', 15) + '开始刷题</a>' +
      '      <a href="#/kb" data-nav="kb">' + icon('layers', 15) + '知识库</a>' +
      '      <a href="#/exam" data-nav="exam">' + icon('clock', 15) + '模拟考试</a>' +
      '      <a href="#/stats" data-nav="stats">' + icon('chart', 15) + '数据统计</a>' +
      '    </nav>' +
      UI.themeButtonHtml() +
      '    <div class="userchip" id="userChip" title="点击切换身份">' +
      '      <span class="avatar">' + esc((u.name || 'U').slice(0, 1)) + '</span>' +
      '      <span><span>' + esc(u.name) + '</span><div class="role">' + esc(r.label) + (u.dept ? ' · ' + esc(u.dept) : '') + '</div></span>' +
      '    </div>' +
      '  </header>' +
      '  <div class="body">' +
      '    <aside class="side' + (App.ui.sideOpen ? ' open' : '') + '" id="side">' + sideHtml +
      '      <div style="padding:14px 12px 0"><div class="note small" style="font-size:12px">题库共 <b>' + Bank.all().length + '</b> 题 · 知识库 <b>' + (S.kbList ? S.kbList({}).total : 0) + '</b> 篇 · 可见密级至 <b>' + esc(['—', '公开', '内部', '涉密'][S.maxSecurity()]) + '</b></div></div>' +
      '    </aside>' +
      '    <main class="main" id="main">' + content + '</main>' +
      '  </div>' +
      '  <nav class="tabbar">' + tabbarHtml + '</nav>' +
      '</div>';

    // 移动端菜单
    var toggle = $('#sideToggle');
    if (global.matchMedia && global.matchMedia('(max-width: 900px)').matches) {
      toggle.style.display = 'grid';
      toggle.addEventListener('click', function () { $('#side').classList.toggle('open'); });
    }
    // 主题切换
    UI.bindThemeButton(document);
    // 身份切换
    $('#userChip').addEventListener('click', switchUserModal);
    // 内部导航（保持 SPA 不刷新）
    $$('[data-nav]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        go(a.getAttribute('href'));
      });
    });
  }

  function switchUserModal() {
    var u = S.user();
    var m = UI.modal({
      title: '切换身份 / 账号',
      html: '<div class="field"><label>姓名 / 工号</label><input type="text" id="swName" value="' + esc(u.name) + '"></div>' +
        '<div class="field"><label>部门 / 渠道</label><input type="text" id="swDept" value="' + esc(u.dept || '') + '"></div>' +
        '<div class="field"><label>身份角色</label><select id="swRole">' +
        Object.keys(S.ROLE_DEFS).map(function (k) {
          return '<option value="' + k + '"' + (k === u.role ? ' selected' : '') + '>' + esc(S.ROLE_DEFS[k].label) + ' — ' + esc(S.ROLE_DEFS[k].desc) + '</option>';
        }).join('') + '</select></div>' +
        '<div class="note small">切换身份后将按新角色的权限重新过滤题库；个人练习数据保留在本机。</div>' +
        '<div class="divider"></div>' +
        '<div class="btn-row"><button class="btn danger" id="swLogout">' + icon('logout', 15) + '退出登录</button></div>',
      footerHtml: '<button class="btn" data-close>取消</button><button class="btn primary" id="swSave">保存</button>',
      onMount: function (mm) {
        $('#swSave', mm.el).addEventListener('click', function () {
          var name = $('#swName', mm.el).value.trim();
          if (!name) { UI.toast('姓名不能为空', 'warn'); return; }
          S.login(name, $('#swRole', mm.el).value, $('#swDept', mm.el).value.trim());
          mm.close();
          UI.toast('身份已切换', 'ok');
          render();
        });
        $('#swLogout', mm.el).addEventListener('click', function () {
          mm.close();
          S.logout();
          renderLogin();
        });
      }
    });
  }

  /* ======================================================================
     三、路由
     ====================================================================== */

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    var key = parts[0] || 'dashboard';
    var map = {
      dashboard: 'dashboard', practice: 'practice', wrong: 'wrong', fav: 'fav',
      exam: 'exam', tasks: 'tasks', stats: 'stats', profile: 'profile', result: 'result',
      kb: 'kb'
    };
    App.route = map[key] || 'dashboard';
    App.param = parts.slice(1).join('/') || null;
  }

  function render() {
    if (!S.user()) { renderLogin(); return; }
    parseHash();
    var content = '';
    switch (App.route) {
      case 'dashboard': content = viewDashboard(); break;
      case 'practice': content = viewPractice(); break;
      case 'kb': content = viewKB(); break;
      case 'wrong': content = viewWrong(); break;
      case 'fav': content = viewFav(); break;
      case 'exam': content = viewExam(); break;
      case 'tasks': content = viewTasks(); break;
      case 'stats': content = viewStats(); break;
      case 'profile': content = viewProfile(); break;
      case 'result': content = viewResult(); break;
      default: content = viewDashboard();
    }
    renderShell(content);
    if (App.afterRender) { var f = App.afterRender; App.afterRender = null; f(); }
    global.scrollTo(0, 0);
  }

  /* ======================================================================
     四、仪表盘
     ====================================================================== */

  function viewDashboard() {
    var st = Engine.stats();
    var u = S.user();
    var goalPct = Math.min(100, Math.round(st.todayAnswered / (st.dailyGoal || 20) * 100));
    var rec = Engine.recommend(6);
    var tasks = openTasks();

    return '' +
      '<div class="page-head">' +
      '  <h2>' + icon('home', 20) + '你好，' + esc(u.name) + '</h2>' +
      '  <p>今日已练 <b>' + st.todayAnswered + '</b> 题，目标 ' + st.dailyGoal + ' 题 · 连续学习 ' + st.streak + ' 天 · 题库可见 ' + st.bankTotal + ' 题</p>' +
      '</div>' +

      '<div class="grid c4 mb16">' +
      statCard('题库覆盖率', st.coverage + '<small>%</small>', '已练 ' + Object.keys(S.state.progress).filter(function (k) { return S.state.progress[k].seen; }).length + ' / ' + st.bankTotal + ' 题', '') +
      statCard('累计正确率', st.rate == null ? '—' : st.rate + '<small>%</small>', '累计作答 ' + st.answeredTotal + ' 题', st.rate >= 80 ? 'ok' : '') +
      statCard('待复习错题', String(st.wrongOpen), st.wrongOpen ? '点击错题本集中攻克' : '暂无错题，保持！', st.wrongOpen ? 'danger' : 'ok') +
      statCard('考试/练习次数', st.examCount + '<small> 考</small> ' + st.practiceCount + '<small> 练</small>', '收藏 ' + st.favCount + ' 题', 'warn') +
      '</div>' +

      '<div class="grid c3 mb16">' +
      '  <div class="card">' +
      '    <div class="card-head"><h3>' + icon('target', 16) + ' 今日目标</h3></div>' +
      '    <div class="donut-wrap">' + UI.donut(goalPct, { label: st.todayAnswered + ' / ' + st.dailyGoal + ' 题' }) +
      '      <div><div class="small muted">今日完成度</div><div style="font-size:20px;font-weight:700">' + goalPct + '%</div>' +
      '      <button class="btn primary sm mt8" data-act="quick-practice">继续刷题</button></div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="card">' +
      '    <div class="card-head"><h3>' + icon('layers', 16) + ' 五大品类掌握度</h3><div class="spacer"></div>' +
      '      <span class="card-sub">按正确率</span></div>' +
      UI.radar(S.CATEGORIES.map(function (c) {
        var s = st.catStat[c.key] || {};
        return { label: c.short, value: s.rate };
      }), { size: 250 }) +
      '    <div class="small muted center">空白代表该品类尚未作答</div>' +
      '  </div>' +
      '  <div class="card">' +
      '    <div class="card-head"><h3>' + icon('zap', 16) + ' 继续学习</h3></div>' +
      (rec.length ? '<div class="list">' + rec.slice(0, 4).map(function (q) {
        return '<div class="list-item" data-open-q="' + q.id + '" style="cursor:pointer">' +
          '<div style="flex:1;min-width:0"><div class="ttl" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(q.stem.slice(0, 34)) + '…</div>' +
          '<div class="sub">' + catChip(q.category) + ' ' + esc(Bank.typeName(q.type)) + ' · ' + esc(Bank.diffName(q.difficulty)) + '</div></div>' +
          icon('play', 14) + '</div>';
      }).join('') + '</div>' : '<div class="empty"><div class="big">🎉</div><p>题库已全部练过一遍，去试试模拟考试吧</p></div>') +
      '    <button class="btn block mt12" data-act="weak-practice">' + icon('target', 15) + ' 针对薄弱项强化练习</button>' +
      '  </div>' +
      '</div>' +

      (tasks.length ? '<div class="card">' +
        '<div class="card-head"><h3>' + icon('exam', 16) + ' 待参加的考试任务</h3><div class="spacer"></div>' +
        '<a class="btn sm" href="#/tasks">全部任务</a></div>' +
        '<div class="list">' + tasks.slice(0, 3).map(taskRow).join('') + '</div></div>' : '') +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>' + icon('chart', 16) + ' 近 14 天练习趋势</h3></div>' +
      UI.trendChart(st.trend, { height: 195, labelEvery: 3 }) +
      '<div class="legend"><span><i style="background:#12996b"></i>答对</span><span><i style="background:#f0a2a4"></i>答错</span></div></div>' +
      '  <div class="card"><div class="card-head"><h3>' + icon('book', 16) + ' 品类练习明细</h3><div class="spacer"></div>' +
      '    <a class="btn sm" href="#/stats">详细统计</a></div>' +
      UI.hbars(S.CATEGORIES.map(function (c) {
        var s = st.catStat[c.key] || { seen: 0, total: 0 };
        return { label: c.name, value: s.seen, suffix: ' / ' + s.total + ' 题', color: c.color };
      })) +
      '  </div>' +
      '</div>';
  }

  function statCard(label, value, foot, cls) {
    return '<div class="stat ' + (cls || '') + '"><div class="label">' + esc(label) + '</div>' +
      '<div class="value">' + value + '</div><div class="foot">' + esc(foot) + '</div></div>';
  }

  function openTasks() {
    var u = S.user();
    var done = {};
    S.examList().forEach(function (e) { if (e.taskId) done[e.taskId] = 1; });
    return S.taskList().filter(function (t) {
      if (t.status === 'closed') return false;
      if (t.roles && t.roles.length && t.roles.indexOf(u.role) < 0 && u.role !== 'super_admin') return false;
      if (done[t.id] && !t.allowRetake) return false;
      return true;
    });
  }

  function taskRow(t) {
    var done = S.examList().filter(function (e) { return e.taskId === t.id; });
    var best = done.length ? Math.max.apply(null, done.map(function (e) { return e.percent; })) : null;
    return '<div class="list-item">' +
      '<span class="tag brand">' + esc(t.category === 'all' ? '综合' : Bank.catMeta(t.category).short) + '</span>' +
      '<div style="flex:1;min-width:0"><div class="ttl">' + esc(t.title) + '</div>' +
      '<div class="sub">' + t.count + ' 题 · ' + t.minutes + ' 分钟 · 及格 ' + t.passScore + ' 分' +
      (t.deadline ? ' · 截止 ' + esc(UI.fmtDate(t.deadline)) : '') +
      (best != null ? ' · 已考最高 ' + best + ' 分' : '') + '</div></div>' +
      '<button class="btn primary sm" data-start-task="' + t.id + '">' + (best != null ? '再考一次' : '开始考试') + '</button>' +
      '</div>';
  }

  /* ======================================================================
     五、刷题训练
     ====================================================================== */

  /* ======================================================================
     三·五、知识库（V2.0）
     ====================================================================== */

  function viewKB() {
    if (!global.IqKB) {
      return '<div class="page-head"><h2>' + icon('layers', 20) + '知识库</h2></div>'
        + '<div class="card"><div class="empty"><div class="big">📚</div><p>知识库脚本未加载</p>'
        + '<p class="small muted">请确认 assets/js/kb.js 与 assets/js/core/knowledge.js 已正确引入</p></div></div>';
    }
    var parts = (App.param || '').split('/');
    var sub = parts[0] || 'list';
    var arg = parts.slice(1).join('/') || null;
    return global.IqKB.view(sub, arg);
  }

  function viewPractice() {
    if (App.practice) return viewPracticeRunning();
    App.practiceSetup = App.practiceSetup || {
      categories: [], difficulties: [], types: [], roles: [],
      mode: 'random', count: 20, order: 'category', keyword: ''
    };
    // 从知识库「去练相关题」跳转过来时，自动带上题号关键词
    if (global.IqKB && global.IqKB.pendingKeyword) {
      App.practiceSetup.keyword = global.IqKB.pendingKeyword;
      App.practiceSetup.categories = [];
      App.practiceSetup.difficulties = [];
      App.practiceSetup.types = [];
      global.IqKB.pendingKeyword = null;
    }
    var cfg = App.practiceSetup;
    var preview = Engine.buildPaper(Object.assign({}, cfg, { count: 0 }));

    return '' +
      '<div class="page-head"><h2>' + icon('book', 20) + '刷题训练</h2>' +
      '<p>按品类、难度、题型与人群自由组卷；即时判题 + 专业解析 + 官方资料溯源</p></div>' +

      '<div class="grid c2">' +
      '  <div class="card">' +
      '    <div class="card-head"><h3>组卷条件</h3><div class="spacer"></div><span class="card-sub">当前可抽题 <b id="poolCount">' + preview.length + '</b> 道</span></div>' +

      '    <div class="field"><label>产品品类（不选=全部）</label><div class="chips" data-group="categories">' +
      S.CATEGORIES.map(function (c) {
        return '<button class="chip' + (cfg.categories.indexOf(c.key) >= 0 ? ' on' : '') + '" data-val="' + c.key + '">' +
          '<span class="dot" style="color:' + c.color + '"></span>' + esc(c.name) + '</button>';
      }).join('') + '</div></div>' +

      '    <div class="field"><label>难度等级</label><div class="chips" data-group="difficulties">' +
      S.DIFFS.map(function (d) {
        return '<button class="chip' + (cfg.difficulties.indexOf(d.key) >= 0 ? ' on' : '') + '" data-val="' + d.key + '">' + esc(d.name) + '</button>';
      }).join('') + '</div></div>' +

      '    <div class="field"><label>题型</label><div class="chips" data-group="types">' +
      S.TYPES.map(function (t) {
        return '<button class="chip' + (cfg.types.indexOf(t.key) >= 0 ? ' on' : '') + '" data-val="' + t.key + '">' + esc(t.name) + '</button>';
      }).join('') + '</div></div>' +

      '    <div class="field"><label>适用人群</label><div class="chips" data-group="roles">' +
      S.ROLES.map(function (r) {
        return '<button class="chip' + (cfg.roles.indexOf(r.key) >= 0 ? ' on' : '') + '" data-val="' + r.key + '">' + esc(r.name) + '</button>';
      }).join('') + '</div>' +
      '      <div class="hint">' + icon('info', 13) + ' 销售与采购仅考查客观题（单选 / 多选 / 判断 / 填空）</div></div>' +

      '    <div class="field"><label>关键词搜索（可选）</label>' +
      '      <input type="text" id="pKeyword" value="' + esc(cfg.keyword || '') + '" placeholder="如 SV660、EtherCAT、故障排查、SRV-01">' +
      '      <div class="hint">匹配题号、题干、解析与标签；用于针对某个系列或场景定向练习</div></div>' +

      '    <div class="inline-fields">' +
      '      <div class="field"><label>组卷模式</label><select id="pMode">' +
      [['random', '随机抽题'], ['sequential', '顺序练习（按品类→难度）'], ['weak', '薄弱强化（正确率低的优先）']].map(function (o) {
        return '<option value="' + o[0] + '"' + (cfg.mode === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
      }).join('') + '</select></div>' +
      '      <div class="field"><label>题量</label><select id="pCount">' +
      [10, 20, 30, 50, 0].map(function (n) {
        return '<option value="' + n + '"' + (cfg.count === n ? ' selected' : '') + '>' + (n === 0 ? '全部' : n + ' 题') + '</option>';
      }).join('') + '</select></div>' +
      '    </div>' +
      '    <div class="btn-row mt12">' +
      '      <button class="btn primary lg" id="startPractice">' + icon('play', 16) + ' 开始刷题</button>' +
      '      <button class="btn" data-act="start-wrong">' + icon('wrong', 15) + ' 只练错题（' + S.wrongList(false).length + '）</button>' +
      '      <button class="btn" data-act="start-fav">' + icon('star', 15) + ' 只练收藏（' + S.favList().length + '）</button>' +
      '    </div>' +
      '  </div>' +

      '  <div>' +
      '    <div class="card">' +
      '      <div class="card-head"><h3>题库分布预览</h3></div>' +
      UI.barChart(S.CATEGORIES.map(function (c) {
        return { label: c.short, value: preview.filter(function (q) { return q.category === c.key; }).length, color: c.color };
      }), { height: 190 }) +
      '      <div class="divider"></div>' +
      '      <div class="grid c2" style="gap:10px">' +
      '        <div>' + UI.hbars(S.DIFFS.map(function (d) {
        return { label: d.name, value: preview.filter(function (q) { return Number(q.difficulty) === d.key; }).length, suffix: ' 题', color: '#0b5cab' };
      }), {}) + '</div>' +
      '        <div>' + UI.hbars(S.TYPES.map(function (t) {
        return { label: t.name, value: preview.filter(function (q) { return q.type === t.key; }).length, suffix: ' 题', color: '#7a5af5' };
      }), {}) + '</div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="card">' +
      '      <div class="card-head"><h3>答题设置</h3></div>' +
      '      <label class="checkline mb8"><input type="checkbox" id="setInstant"' + (S.settings().instantJudge ? ' checked' : '') + '> 即时判题（选中后立即显示对错与解析）</label>' +
      '      <label class="checkline"><input type="checkbox" id="setShuffle"' + (S.settings().shuffleOptions ? ' checked' : '') + '> 打乱选项顺序（防止只记答案位置）</label>' +
      '      <div class="note small mt12">' + icon('info', 14) + ' 简答题与场景分析题采用「参考答案 + 自评」方式判分，客观题自动判分。</div>' +
      '    </div>' +
      '  </div>' +
      '</div>';
  }

  function bindPracticeSetup() {
    var cfg = App.practiceSetup;
    $$('[data-group]').forEach(function (box) {
      var group = box.getAttribute('data-group');
      $$('.chip', box).forEach(function (chip) {
        chip.addEventListener('click', function () {
          var v = chip.getAttribute('data-val');
          if (group === 'difficulties') v = Number(v);
          var arr = cfg[group];
          var i = arr.indexOf(v);
          if (i >= 0) arr.splice(i, 1); else arr.push(v);
          chip.classList.toggle('on');
          var preview = Engine.buildPaper(Object.assign({}, cfg, { count: 0 }));
          $('#poolCount').textContent = preview.length;
        });
      });
    });
    $('#pMode').addEventListener('change', function () { cfg.mode = this.value; });
    $('#pCount').addEventListener('change', function () { cfg.count = Number(this.value); });

    // 关键词搜索：输入即刷新可抽题量
    var kwInput = $('#pKeyword');
    if (kwInput) {
      var refreshPool = function () {
        var preview = Engine.buildPaper(Object.assign({}, cfg, { count: 0 }));
        var el = $('#poolCount');
        if (el) el.textContent = preview.length;
      };
      var timer = null;
      kwInput.addEventListener('input', function () {
        cfg.keyword = kwInput.value.trim();
        if (timer) clearTimeout(timer);
        timer = setTimeout(refreshPool, 250);
      });
    }
    $('#setInstant').addEventListener('change', function () { S.setSettings({ instantJudge: this.checked }); });
    $('#setShuffle').addEventListener('change', function () { S.setSettings({ shuffleOptions: this.checked }); });
    $('#startPractice').addEventListener('click', function () { startPractice(cfg); });
    var w = $('[data-act="start-wrong"]');
    if (w) w.addEventListener('click', function () { startPractice(Object.assign({}, cfg, { mode: 'wrong', count: 0 })); });
    var f = $('[data-act="start-fav"]');
    if (f) f.addEventListener('click', function () { startPractice(Object.assign({}, cfg, { mode: 'fav', count: 0 })); });
  }

  function startPractice(cfg, paper) {
    var list = paper || Engine.buildPaper(cfg);
    if (!list.length) { UI.toast('当前条件下没有可练习的题目', 'warn'); return; }
    App.practice = {
      paper: list,
      idx: 0,
      answers: {},
      selfGrades: {},
      revealed: {},
      startAt: Date.now(),
      mode: cfg.mode || 'random',
      scope: describeScope(cfg),
      sessionId: 's_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      finished: false
    };
    savePracticeDraft();
    go('#/practice');
    render();
  }

  function describeScope(cfg) {
    var parts = [];
    cfg = cfg || {};
    if (cfg.categories && cfg.categories.length) parts.push(cfg.categories.map(function (c) { return Bank.catMeta(c).short; }).join('/'));
    if (cfg.difficulties && cfg.difficulties.length) parts.push(cfg.difficulties.map(function (d) { return Bank.diffName(d); }).join('/'));
    if (cfg.types && cfg.types.length) parts.push(cfg.types.map(function (t) { return Bank.typeName(t); }).join('/'));
    if (cfg.mode === 'wrong') parts.push('错题重练');
    if (cfg.mode === 'fav') parts.push('收藏重练');
    if (cfg.mode === 'weak') parts.push('薄弱强化');
    if (cfg.keyword) parts.push('搜索「' + cfg.keyword + '」');
    return parts.length ? parts.join(' · ') : '全题库';
  }

  /** 快捷键提示条 */
  function kbHint(extra) {
    var keys = ['1~5 选项', 'Enter 确认/下一题', '← → 切题', 'F 收藏'];
    if (extra) keys.push(extra);
    return '<div class="small muted mt12" style="border-top:1px dashed var(--line);padding-top:8px">' +
      '快捷键　' + keys.map(function (t) { return '<span class="kbd">' + t + '</span>'; }).join('　') + '</div>';
  }

  function viewPracticeRunning() {
    var p = App.practice;
    var q = p.paper[p.idx];
    var answeredCount = p.paper.filter(function (x) { return p.revealed[x.id]; }).length;
    var progress = Math.round((p.idx + 1) / p.paper.length * 100);

    return '' +
      '<div class="exam-top">' +
      '  <span class="tag brand">' + esc(p.scope) + '</span>' +
      '  <b>' + (p.idx + 1) + ' / ' + p.paper.length + '</b>' +
      '  <div class="spacer" style="flex:1"></div>' +
      '  <span class="small muted">已作答 ' + answeredCount + ' · 用时 ' + UI.fmtClock((Date.now() - p.startAt) / 1000) + '</span>' +
      '  <button class="btn sm" id="pRestart">' + icon('refresh', 14) + ' 重开</button>' +
      '  <button class="btn sm primary" id="pFinish">结束并查看小结</button>' +
      '</div>' +

      '<div class="bar thin mb12"><i style="width:' + progress + '%"></i></div>' +

      '<div class="page-narrow">' + questionCard(q, {
        index: p.idx, total: p.paper.length,
        answer: p.answers[q.id],
        revealed: !!p.revealed[q.id],
        selfGrade: p.selfGrades[q.id]
      }) + '</div>' +

      '<div class="exam-top" style="position:static;margin-top:14px">' +
      '  <button class="btn" id="pPrev"' + (p.idx === 0 ? ' disabled' : '') + '>上一题</button>' +
      '  <button class="btn primary" id="pNext">' + (p.idx === p.paper.length - 1 ? '已是最后一题' : '下一题') + '</button>' +
      '  <div class="spacer" style="flex:1"></div>' +
      '  <span class="small muted">' + esc(Bank.catName(q.category)) + ' · ' + esc(Bank.diffName(q.difficulty)) + ' · ' + esc(Bank.typeName(q.type)) + '</span>' +
      '</div>' +

      '<div class="card mt16"><div class="card-head"><h3>题号导航</h3><div class="spacer"></div>' +
      '<span class="card-sub">蓝色=已作答</span></div>' +
      '<div class="qnav">' + p.paper.map(function (x, i) {
        var cls = (i === p.idx ? 'cur ' : '') + (p.revealed[x.id] ? 'done ' : '') +
          (S.state.progress[x.id] && S.state.progress[x.id].fav ? 'mark' : '');
        return '<button class="' + cls.trim() + '" data-jump="' + i + '">' + (i + 1) + '</button>';
      }).join('') + '</div>' + kbHint() + '</div>';
  }

  function bindPracticeRunning() {
    var p = App.practice;
    if (!p) return;
    var q = p.paper[p.idx];
    bindQuestionCard(q, {
      revealed: !!p.revealed[q.id],
      answer: p.answers[q.id],
      selfGrade: p.selfGrades[q.id],
      onAnswer: function (v) { p.answers[q.id] = v; },
      onReveal: function (correct) {
        p.revealed[q.id] = true;
        // 主观题在自评时才记录成绩，避免重复计数
        if (q.type !== 'short' && q.type !== 'scenario') {
          S.recordAnswer(q.id, correct, {
            mode: p.mode, userAnswer: p.answers[q.id], sessionId: p.sessionId
          });
        }
        savePracticeDraft();
        render();
      },
      onSelfGrade: function (ok) {
        p.selfGrades[q.id] = ok;
        p.revealed[q.id] = true;
        S.recordAnswer(q.id, ok, {
          mode: p.mode, userAnswer: p.answers[q.id], sessionId: p.sessionId,
          self: true, selfGrade: ok
        });
        savePracticeDraft();
        render();
      }
    });

    var prev = $('#pPrev'), next = $('#pNext'), fin = $('#pFinish'), re = $('#pRestart');
    if (prev) prev.addEventListener('click', function () { if (p.idx > 0) { p.idx--; savePracticeDraft(); render(); } });
    if (next) next.addEventListener('click', function () {
      if (p.idx < p.paper.length - 1) { p.idx++; savePracticeDraft(); render(); }
      else UI.toast('已经是最后一题，点击「结束并查看小结」', 'warn');
    });
    if (fin) fin.addEventListener('click', finishPractice);
    if (re) re.addEventListener('click', function () {
      UI.confirm('重新开始将清空本次作答记录，确定吗？').then(function (ok) {
        if (ok) { App.practice = null; clearPracticeDraft(); App.afterRender = bindPracticeSetup; render(); }
      });
    });
    $$('[data-jump]').forEach(function (b) {
      b.addEventListener('click', function () { p.idx = Number(b.getAttribute('data-jump')); savePracticeDraft(); render(); });
    });
  }

  function finishPractice() {
    var p = App.practice;
    if (!p) return;
    var sc = Engine.score(p.paper, p.answers, p.selfGrades);
    var log = S.addPracticeLog({
      mode: p.mode, scope: p.scope, total: p.paper.length,
      right: sc.right, wrong: sc.wrong, pending: sc.pending,
      durationSec: Math.round((Date.now() - p.startAt) / 1000),
      sessionId: p.sessionId,
      selfGrades: p.selfGrades,
      ids: p.paper.map(function (q) { return q.id; })
    });
    var detail = p.paper.map(function (q) {
      var j = Engine.judge(q, p.answers[q.id]);
      var ok = (q.type === 'short' || q.type === 'scenario') ? p.selfGrades[q.id] : j.correct;
      return { q: q, answer: p.answers[q.id], correct: ok === undefined ? null : ok };
    });
    App.practice = null;
    clearPracticeDraft();
    App.sessionSummary = { log: log, detail: detail, kind: 'practice' };
    go('#/result');
    render();
  }

  /* ======================================================================
     六、题目卡片渲染（练习与考试共用）
     ====================================================================== */

  /** 填空题作答区：按题干中的 ____ 数量生成输入框 */
  function fillBox(q, ans, revealed) {
    var blanks = (String(q.stem || '').match(/_{3,}/g) || []).length || 1;
    var userArr = Array.isArray(ans) ? ans : (ans == null ? [] : [ans]);
    var stdArr = Array.isArray(q.answer) ? q.answer : [q.answer];
    var judged = revealed ? Engine.judge(q, userArr) : null;
    var html = '<div class="fill-box">';
    for (var i = 0; i < blanks; i++) {
      var val = userArr[i] == null ? '' : String(userArr[i]);
      var cls = 'fill-item';
      var d = judged && judged.detail ? judged.detail[i] : null;
      if (revealed && d) cls += d.correct ? ' is-correct' : ' is-wrong';
      html += '<div class="' + cls + '">' +
        '<span class="k">第 ' + (i + 1) + ' 空</span>' +
        '<input type="text" data-fill="' + i + '" value="' + esc(val) + '"' +
        (revealed ? ' readonly' : '') + ' placeholder="请填写答案" autocomplete="off">' +
        (revealed && d ? '<span class="std">' + (d.correct ? '✓ 正确' : '正确答案：' + esc(d.standard)) + '</span>' : '') +
        '</div>';
    }
    html += '</div>';
    if (!revealed) html += '<div class="small muted mt8">填空题：逐空填写，按 Enter 或点击「确认答案」提交</div>';
    return html;
  }

  function questionCard(q, opts) {
    opts = opts || {};
    var revealed = !!opts.revealed;
    var ans = opts.answer;
    var j = Engine.judge(q, ans);
    var p = S.prog(q.id);

    var head = '<div class="qhead">' +
      '<span class="tag brand">' + esc(Bank.catMeta(q.category).short) + '</span>' +
      '<span class="tag outline">' + esc(Bank.typeName(q.type)) + '</span>' +
      diffDots(q.difficulty) +
      secTag(q.security) +
      '<span class="tag outline mono">' + esc(q.id) + '</span>' +
      '<div class="spacer"></div>' +
      '<button class="btn ghost sm" data-fav="' + q.id + '" title="收藏本题">' +
      icon('star', 15) + (p.fav ? '已收藏' : '收藏') + '</button>' +
      '</div>';

    var body = '<div class="qbody">';
    body += '<div class="qstem">' + (opts.index != null ? '<span class="qno">' + (opts.index + 1) + '.</span>' : '') + esc(q.stem) + '</div>';

    if (q.type === 'single' || q.type === 'multi' || q.type === 'judge') {
      body += '<div class="opts">' + optionList(q, ans, revealed) + '</div>';
      if (q.type === 'multi') body += '<div class="small muted mt8">多选题：可选择多个选项，选完后点击「确认答案」</div>';
    } else if (q.type === 'fill') {
      body += fillBox(q, ans, revealed);
      if (revealed) {
        var jf = Engine.judge(q, ans);
        body += '<div class="answer-panel ' + (jf.correct ? 'is-correct' : 'is-wrong') + '">' +
          '<div class="title">' + icon(jf.correct ? 'check' : 'close', 15) +
          (jf.correct ? ' 回答正确' : ' 回答错误') +
          '　<span style="font-weight:400;font-size:12.5px">正确答案：' + esc(fmtAnswer(q)) + '</span></div>' +
          '<div class="ana">' + esc(q.analysis) + '</div>' +
          '<div class="src">' + sourceHtml(q) + '</div></div>';
      }
    } else {
      body += '<textarea id="subjAnswer" placeholder="请写下你的思路与结论……" ' + (revealed ? 'readonly' : '') + '>' + esc(typeof ans === 'string' ? ans : '') + '</textarea>';
      if (revealed) {
        body += '<div class="answer-panel is-correct"><div class="title">' + icon('book', 15) + ' 参考答案（自评判分）</div>' +
          '<div class="ref-answer">' + esc(String(q.answer)) + '</div>' +
          '<div class="ana">' + esc(q.analysis) + '</div>' +
          '<div class="src">' + sourceHtml(q) + '</div></div>';
        body += '<div class="selfjudge">' +
          '<button class="btn ' + (opts.selfGrade === true ? 'ok' : '') + '" data-self="1">' + icon('check', 15) + ' 我答对了（要点齐全）</button>' +
          '<button class="btn ' + (opts.selfGrade === false ? 'danger' : '') + '" data-self="0">' + icon('close', 15) + ' 我答错了 / 要点缺失</button>' +
          '</div>';
      }
    }

    if (revealed && (q.type === 'single' || q.type === 'multi' || q.type === 'judge')) {
      body += '<div class="answer-panel ' + (j.correct ? 'is-correct' : 'is-wrong') + '">' +
        '<div class="title">' + icon(j.correct ? 'check' : 'close', 15) +
        (j.correct ? ' 回答正确' : ' 回答错误') +
        '　<span style="font-weight:400;font-size:12.5px">正确答案：' + esc(fmtAnswer(q)) + '</span></div>' +
        '<div class="ana">' + esc(q.analysis) + '</div>' +
        '<div class="src">' + sourceHtml(q) + '</div></div>';
    }

    // 笔记与反馈
    body += '<div class="mt12"><button class="btn ghost sm" id="noteToggle">' + icon('edit', 14) + ' 学习笔记' + (S.state.notes[q.id] ? '（已记录）' : '') + '</button>' +
      '<button class="btn ghost sm" id="fbBtn" style="margin-left:6px">' + icon('flag', 14) + ' 反馈问题</button>' +
      '<div id="noteBox" class="hidden mt8"><textarea id="noteText" placeholder="记录你的理解、现场经验或易错点……">' + esc(S.state.notes[q.id] || '') + '</textarea>' +
      '<div class="btn-row mt8"><button class="btn sm primary" id="noteSave">保存笔记</button></div></div></div>';

    // 相关知识：从知识库反查本道题关联的条目
    var relKb = (global.IqKB && global.IqKB.byQuestion) ? global.IqKB.byQuestion(q.id) : [];
    if (relKb.length) {
      body += '<div class="mt12"><div class="small muted" style="margin-bottom:6px">' + icon('layers', 13) + ' 相关知识（来自知识库）</div>'
        + relKb.slice(0, 3).map(function (it) {
          return '<a class="btn ghost sm" href="#/kb/no/' + esc(it.id) + '" style="margin:0 6px 6px 0">'
            + icon('book', 12) + ' ' + esc(String(it.title).slice(0, 24)) + (String(it.title).length > 24 ? '…' : '') + '</a>';
        }).join('') + '</div>';
    }

    body += '</div>';
    return '<div class="qcard" data-qid="' + q.id + '">' + head + body + '</div>';
  }

  function fmtAnswer(q) {
    if (q.type === 'judge') return (q.answer[0] === 'T' ? '正确' : '错误');
    if (q.type === 'fill' && Array.isArray(q.answer)) {
      return q.answer.map(function (a, i) { return '第' + (i + 1) + '空 ' + a; }).join('；');
    }
    if (Array.isArray(q.answer)) return q.answer.join('、');
    return String(q.answer);
  }

  function optionList(q, ans, revealed) {
    var opts = q.options;
    if (q.type === 'judge') opts = { T: '正确', F: '错误' };
    var selected = [];
    if (ans != null) selected = Array.isArray(ans) ? ans : [String(ans)];
    var std = q.type === 'judge' ? q.answer : (Array.isArray(q.answer) ? q.answer : [q.answer]);

    return Object.keys(opts).map(function (k) {
      var cls = 'opt';
      var isSel = selected.indexOf(k) >= 0;
      var isRight = std.indexOf(k) >= 0;
      if (revealed) {
        cls += ' locked';
        if (isRight) cls += ' is-correct';
        else if (isSel) cls += ' is-wrong';
      } else if (isSel) cls += ' sel';
      return '<div class="' + cls + '" data-opt="' + esc(k) + '">' +
        '<span class="key">' + (q.type === 'judge' ? (k === 'T' ? '√' : '×') : esc(k)) + '</span>' +
        '<span class="txt">' + esc(opts[k]) + '</span></div>';
    }).join('');
  }

  function sourceHtml(q) {
    var s = q.source || {};
    var link = s.url ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + icon('link', 13) + ' 查看官方资料</a>' : '';
    return icon('book', 13) + ' 资料溯源：' + esc(s.title || '汇川官方资料') +
      (s.chapter ? ' · ' + esc(s.chapter) : '') + (link ? '　' + link : '');
  }

  /** 题目反馈弹窗（学员报错 → 管理端汇总处理） */
  function showFeedbackModal(q) {
    var types = S.FEEDBACK_TYPES || [{ key: 'other', name: '其它问题' }];
    var picked = types[0].key;
    UI.modal({
      title: '反馈题目问题 · ' + q.id,
      html: '<div class="qstem" style="font-size:13.5px;color:var(--text-2)">' + esc(q.stem.slice(0, 90)) + (q.stem.length > 90 ? '…' : '') + '</div>' +
        '<div class="field"><label>问题类型</label><div class="chips" id="fbTypes">' +
        types.map(function (t, i) {
          return '<button class="chip' + (i === 0 ? ' on' : '') + '" data-t="' + t.key + '">' + esc(t.name) + '</button>';
        }).join('') + '</div></div>' +
        '<div class="field"><label>问题说明</label><textarea id="fbContent" placeholder="请描述具体问题，例如：答案与手册第 X 章不一致 / 题干缺少条件 / 参数已更新 / 干扰项有歧义……"></textarea></div>' +
        '<div class="note small">' + icon('info', 14) + ' 反馈将提交给题库管理员核实；核实后会修订或下线该题，你的反馈会帮助所有学员。</div>',
      footerHtml: '<button class="btn" data-close>取消</button><button class="btn primary" id="fbSubmit">提交反馈</button>',
      onMount: function (m) {
        $$('#fbTypes .chip', m.el).forEach(function (c) {
          c.addEventListener('click', function () {
            $$('#fbTypes .chip', m.el).forEach(function (x) { x.classList.remove('on'); });
            c.classList.add('on');
            picked = c.getAttribute('data-t');
          });
        });
        $('#fbSubmit', m.el).addEventListener('click', function () {
          var content = $('#fbContent', m.el).value.trim();
          if (content.length < 4) { UI.toast('请填写至少 4 个字的说明', 'warn'); return; }
          var res = S.addFeedback({ questionId: q._serverId || null, questionNo: q.id, type: picked, content: content });
          if (res && typeof res.then === 'function') {
            res.then(function () { m.close(); UI.toast('反馈已提交，感谢你帮助改进题库', 'ok'); })
              .catch(function (e) { UI.toast('提交失败：' + e.message, 'err'); });
          } else {
            m.close();
            UI.toast('反馈已提交，感谢你帮助改进题库', 'ok');
          }
        });
      }
    });
  }

  function bindQuestionCard(q, opts) {
    var card = $('[data-qid="' + q.id + '"]');
    if (!card) return;
    var isExam = !!opts.exam;
    // 考试中不做即时判题；opt.answer 是绑定时的快照，故用局部可变状态承载实时作答
    var instant = !isExam && S.settings().instantJudge;
    var pick = opts.answer;
    function setPick(v) {
      pick = v;
      if (typeof opts.onAnswer === 'function') opts.onAnswer(v);
    }

    var favBtn = $('[data-fav]', card);
    if (favBtn) favBtn.addEventListener('click', function () {
      var on = S.toggleFav(q.id);
      UI.toast(on ? '已加入收藏' : '已取消收藏', 'ok');
      render();
    });

    var noteToggle = $('#noteToggle', card);
    if (noteToggle) noteToggle.addEventListener('click', function () { $('#noteBox', card).classList.toggle('hidden'); });
    var noteSave = $('#noteSave', card);
    if (noteSave) noteSave.addEventListener('click', function () {
      S.setNote(q.id, $('#noteText', card).value.trim());
      UI.toast('笔记已保存', 'ok');
    });

    var fbBtn = $('#fbBtn', card);
    if (fbBtn) fbBtn.addEventListener('click', function () { showFeedbackModal(q); });

    if (opts.revealed) {
      $$('[data-self]', card).forEach(function (b) {
        b.addEventListener('click', function () { opts.onSelfGrade(b.getAttribute('data-self') === '1'); });
      });
      return;
    }

    /* 填空题：逐空输入 + 确认答案 */
    if (q.type === 'fill') {
      var inputs = $$('[data-fill]', card);
      var collect = function () { return inputs.map(function (x) { return x.value.trim(); }); };
      inputs.forEach(function (inp, idx) {
        inp.addEventListener('input', function () { setPick(collect()); });
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            var next = inputs[idx + 1];
            if (next) next.focus();
            else { var b = document.getElementById('fillConfirm'); if (b) b.click(); }
          }
        });
      });
      var rowF = document.createElement('div');
      rowF.className = 'btn-row mt12';
      rowF.innerHTML = '<button class="btn primary" id="fillConfirm">' + icon('check', 15) + ' 确认答案</button>';
      card.querySelector('.qbody').appendChild(rowF);
      $('#fillConfirm', card).addEventListener('click', function () {
        var arr = collect();
        if (!arr.length || arr.every(function (x) { return !x; })) { UI.toast('请至少填写一个空', 'warn'); return; }
        setPick(arr);
        if (isExam) { UI.toast('已确认，可继续下一题', 'ok'); return; }
        opts.onReveal(Engine.judge(q, arr).correct);
        render();
      });
      if (inputs[0]) inputs[0].focus();
      return;
    }

    if (q.type === 'short' || q.type === 'scenario') {
      var ta = $('#subjAnswer', card);
      if (ta) ta.addEventListener('input', function () { setPick(ta.value); });
      if (isExam) return; // 考试中不提供参考答案，交卷后统一自评
      var btn = document.createElement('div');
      btn.className = 'btn-row mt12';
      btn.innerHTML = '<button class="btn primary" id="subjSubmit">' + icon('eye', 15) + ' 提交并查看参考答案</button>';
      card.querySelector('.qbody').appendChild(btn);
      $('#subjSubmit', card).addEventListener('click', function () {
        setPick($('#subjAnswer', card).value);
        opts.onReveal(null);
        render();
      });
      return;
    }

    $$('[data-opt]', card).forEach(function (el) {
      el.addEventListener('click', function () {
        var k = el.getAttribute('data-opt');
        if (q.type === 'multi') {
          var cur = Array.isArray(pick) ? pick.slice() : [];
          var i = cur.indexOf(k);
          if (i >= 0) cur.splice(i, 1); else cur.push(k);
          setPick(cur);
          el.classList.toggle('sel');
          var hasConfirm = $('#multiConfirm', card);
          if (!hasConfirm) {
            var row = document.createElement('div');
            row.className = 'btn-row mt12';
            row.innerHTML = '<button class="btn primary" id="multiConfirm">' + icon('check', 15) + ' 确认答案</button>';
            card.querySelector('.qbody').appendChild(row);
            $('#multiConfirm', card).addEventListener('click', function () {
              var ans = Array.isArray(pick) ? pick : [];
              if (!ans.length) { UI.toast('请至少选择一个选项', 'warn'); return; }
              if (isExam) { UI.toast('已确认，可继续下一题', 'ok'); return; }
              opts.onReveal(Engine.judge(q, ans).correct);
              render();
            });
          }
        } else {
          setPick([k]);
          if (instant) {
            opts.onReveal(Engine.judge(q, [k]).correct);
            render();
          } else {
            $$('[data-opt]', card).forEach(function (x) { x.classList.remove('sel'); });
            el.classList.add('sel');
            var hasBtn = $('#singleConfirm', card);
            if (!hasBtn) {
              var row2 = document.createElement('div');
              row2.className = 'btn-row mt12';
              row2.innerHTML = '<button class="btn primary" id="singleConfirm">' + icon('check', 15) + ' 确认答案</button>';
              card.querySelector('.qbody').appendChild(row2);
              $('#singleConfirm', card).addEventListener('click', function () {
                if (isExam) { UI.toast('已确认，可继续下一题', 'ok'); return; }
                opts.onReveal(Engine.judge(q, pick).correct);
                render();
              });
            }
          }
        }
      });
    });
  }

  /* ======================================================================
     七、错题本 / 收藏
     ====================================================================== */

  function viewWrong() {
    var showResolved = App.ui.showResolved;
    var ids = S.wrongList(showResolved);
    var list = ids.map(function (id) { return Bank.byId(id); }).filter(Boolean)
      .filter(function (q) { return S.canSeeSecurity(q.security || 'public'); });

    var catCount = {};
    list.forEach(function (q) { catCount[q.category] = (catCount[q.category] || 0) + 1; });

    return '' +
      '<div class="page-head"><h2>' + icon('wrong', 20) + '错题本</h2>' +
      '<p>答错的题目自动收录；重做正确后自动标记为「已掌握」。错题支持按品类筛练、导出打印。</p></div>' +

      '<div class="grid c4 mb16">' +
      statCard('待攻克错题', String(S.wrongList(false).length), '未掌握', 'danger') +
      statCard('已掌握错题', String(S.wrongList(true).length - S.wrongList(false).length), '重做正确后自动移出', 'ok') +
      statCard('错题涉及品类', String(Object.keys(catCount).length), '个品类', '') +
      statCard('高频错题', String(list.filter(function (q) { return S.state.wrong[q.id].count >= 2; }).length), '错误 ≥ 2 次', 'warn') +
      '</div>' +

      '<div class="card">' +
      '  <div class="card-head">' +
      '    <div class="segment" id="wrongFilter">' +
      '      <button class="' + (!showResolved ? 'on' : '') + '" data-show="0">待攻克</button>' +
      '      <button class="' + (showResolved ? 'on' : '') + '" data-show="1">全部错题</button>' +
      '    </div>' +
      '    <div class="spacer"></div>' +
      '    <button class="btn primary sm" data-act="practice-wrong">' + icon('play', 14) + ' 错题重练（' + S.wrongList(false).length + '）</button>' +
      '    <button class="btn sm" data-act="export-wrong">' + icon('download', 14) + ' 导出错题集</button>' +
      '    <button class="btn sm danger" data-act="clear-wrong">清空错题本</button>' +
      '  </div>' +
      (list.length ? '<div class="table-wrap"><table class="tbl">' +
        '<thead><tr><th>题号</th><th>品类</th><th>题目</th><th class="center">难度</th><th class="center">错误次数</th><th>最近错误</th><th class="center">操作</th></tr></thead>' +
        '<tbody>' + list.map(function (q) {
          var w = S.state.wrong[q.id];
          return '<tr>' +
            '<td class="mono small">' + esc(q.id) + '</td>' +
            '<td>' + catChip(q.category) + '</td>' +
            '<td><div class="cell-stem" title="' + esc(q.stem) + '">' + esc(q.stem) + '</div></td>' +
            '<td class="center">' + diffDots(q.difficulty) + '</td>' +
            '<td class="center"><b style="color:' + (w.count >= 2 ? '#d93a3f' : '#4a566b') + '">' + w.count + '</b></td>' +
            '<td class="small muted">' + esc(UI.fmtDate(w.lastAt, true)) + '</td>' +
            '<td class="center nowrap">' +
            '<button class="btn ghost sm" data-view-q="' + q.id + '">解析</button>' +
            '<button class="btn ghost sm" data-drop-wrong="' + q.id + '">移出</button>' +
            '</td></tr>';
        }).join('') + '</tbody></table></div>'
        : '<div class="empty"><div class="big">✅</div><p>当前没有待攻克的错题，继续保持！</p></div>') +
      '</div>';
  }

  function bindWrong() {
    $$('#wrongFilter button').forEach(function (b) {
      b.addEventListener('click', function () { App.ui.showResolved = b.getAttribute('data-show') === '1'; render(); });
    });
    $$('[data-drop-wrong]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.removeWrong(b.getAttribute('data-drop-wrong'));
        UI.toast('已移出错题本', 'ok');
        render();
      });
    });
    $$('[data-view-q]').forEach(function (b) {
      b.addEventListener('click', function () { showQuestionModal(b.getAttribute('data-view-q')); });
    });
    var pw = $('[data-act="practice-wrong"]');
    if (pw) pw.addEventListener('click', function () {
      startPractice({ mode: 'wrong', count: 0, categories: [], difficulties: [], types: [] });
    });
    var ew = $('[data-act="export-wrong"]');
    if (ew) ew.addEventListener('click', function () {
      var list = S.wrongList(true).map(function (id) { return Bank.byId(id); }).filter(Boolean);
      var rows = [['题号', '品类', '题型', '难度', '题干', '正确答案', '解析', '资料溯源', '错误次数']];
      list.forEach(function (q) {
        rows.push([q.id, Bank.catName(q.category), Bank.typeName(q.type), Bank.diffName(q.difficulty),
          q.stem, fmtAnswer(q), q.analysis, (q.source && q.source.title) || '', (S.state.wrong[q.id] || {}).count || 0]);
      });
      UI.download('汇川错题集_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
      UI.toast('错题集已导出', 'ok');
    });
    var cw = $('[data-act="clear-wrong"]');
    if (cw) cw.addEventListener('click', function () {
      UI.confirm('确定清空全部错题记录吗？该操作不可恢复。', { danger: true }).then(function (ok) {
        if (!ok) return;
        S.state.wrong = {};
        S.save();
        UI.toast('错题本已清空', 'ok');
        render();
      });
    });
  }

  function viewFav() {
    var list = S.favList().map(function (id) { return Bank.byId(id); }).filter(Boolean)
      .filter(function (q) { return S.canSeeSecurity(q.security || 'public'); });
    return '' +
      '<div class="page-head"><h2>' + icon('star', 20) + '我的收藏</h2><p>重点题目与典型场景题收藏夹，可集中重练或导出分享</p></div>' +
      '<div class="card">' +
      '  <div class="card-head"><h3>共 ' + list.length + ' 题</h3><div class="spacer"></div>' +
      '    <button class="btn primary sm" data-act="practice-fav">' + icon('play', 14) + ' 收藏重练</button>' +
      '    <button class="btn sm" data-act="export-fav">' + icon('download', 14) + ' 导出</button></div>' +
      (list.length ? '<div class="list">' + list.map(function (q) {
        return '<div class="list-item">' +
          '<div style="flex:1;min-width:0"><div class="ttl" style="cursor:pointer" data-view-q="' + q.id + '">' + esc(q.stem.slice(0, 60)) + (q.stem.length > 60 ? '…' : '') + '</div>' +
          '<div class="sub">' + catChip(q.category) + ' ' + esc(Bank.typeName(q.type)) + ' · ' + esc(Bank.diffName(q.difficulty)) + ' · ' + esc(q.id) + '</div></div>' +
          '<button class="btn ghost sm" data-unfav="' + q.id + '">取消收藏</button></div>';
      }).join('') + '</div>' : '<div class="empty"><div class="big">☆</div><p>还没有收藏题目，在答题卡点击「收藏」即可加入</p></div>') +
      '</div>';
  }

  function bindFav() {
    $$('[data-unfav]').forEach(function (b) {
      b.addEventListener('click', function () { S.toggleFav(b.getAttribute('data-unfav')); render(); });
    });
    $$('[data-view-q]').forEach(function (b) {
      b.addEventListener('click', function () { showQuestionModal(b.getAttribute('data-view-q')); });
    });
    var p = $('[data-act="practice-fav"]');
    if (p) p.addEventListener('click', function () { startPractice({ mode: 'fav', count: 0 }); });
    var e = $('[data-act="export-fav"]');
    if (e) e.addEventListener('click', function () {
      var list = S.favList().map(function (id) { return Bank.byId(id); }).filter(Boolean);
      var rows = [['题号', '品类', '题型', '难度', '题干', '正确答案', '解析']];
      list.forEach(function (q) {
        rows.push([q.id, Bank.catName(q.category), Bank.typeName(q.type), Bank.diffName(q.difficulty), q.stem, fmtAnswer(q), q.analysis]);
      });
      UI.download('汇川收藏题集_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
      UI.toast('已导出', 'ok');
    });
  }

  /** 单题解析弹窗 */
  function showQuestionModal(qid) {
    var q = Bank.byId(qid);
    if (!q) return;
    var j = Engine.judge(q, null);
    var html = '<div class="qstem">' + esc(q.stem) + '</div>';
    if (q.options) {
      html += '<div class="opts">' + Object.keys(q.options).map(function (k) {
        var right = (q.answer || []).indexOf(k) >= 0;
        return '<div class="opt locked' + (right ? ' is-correct' : '') + '"><span class="key">' + esc(k) + '</span><span class="txt">' + esc(q.options[k]) + '</span></div>';
      }).join('') + '</div>';
    } else {
      html += '<div class="ref-answer">' + esc(String(q.answer)) + '</div>';
    }
    html += '<div class="answer-panel is-correct mt12"><div class="title">' + icon('book', 15) + ' 解析</div>' +
      '<div class="ana">' + esc(q.analysis) + '</div><div class="src">' + sourceHtml(q) + '</div></div>';
    html += '<div class="tag-list mt12">' + (q.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') +
      (q.roles || []).map(function (r) { return '<span class="tag brand">' + esc(Bank.roleName(r)) + '</span>'; }).join('') + '</div>';

    UI.modal({ title: q.id + ' · ' + Bank.catName(q.category) + ' · ' + Bank.typeName(q.type), html: html, wide: true });
  }

  /* ======================================================================
     八、模拟考试
     ====================================================================== */

  function viewExam() {
    if (App.exam) return viewExamRunning();
    var st = Engine.stats();
    var history = S.examList();
    var tasks = openTasks();

    return '' +
      '<div class="page-head"><h2>' + icon('clock', 20) + '模拟考试</h2>' +
      '<p>自主模拟或参加管理员发布的考试任务；交卷后自动评分（客观题）+ 自评（主观题），生成能力报告</p></div>' +

      (tasks.length ? '<div class="card"><div class="card-head"><h3>' + icon('exam', 16) + ' 考试任务</h3>' +
        '<div class="spacer"></div><span class="card-sub">由培训讲师 / 管理员发布</span></div>' +
        '<div class="list">' + tasks.map(taskRow).join('') + '</div></div>' : '') +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>自主模拟考试</h3></div>' +
      '    <div class="field"><label>考试范围</label><select id="eCat">' +
      '      <option value="all">综合（五大品类）</option>' +
      S.CATEGORIES.map(function (c) { return '<option value="' + c.key + '">' + esc(c.name) + '</option>'; }).join('') +
      '    </select></div>' +
      '    <div class="inline-fields">' +
      '      <div class="field"><label>题量</label><select id="eCount">' + [10, 20, 30, 50].map(function (n) {
        return '<option value="' + n + '"' + (n === 20 ? ' selected' : '') + '>' + n + ' 题</option>';
      }).join('') + '</select></div>' +
      '      <div class="field"><label>时长</label><select id="eMinutes">' + [10, 20, 30, 45, 60].map(function (n) {
        return '<option value="' + n + '"' + (n === 30 ? ' selected' : '') + '>' + n + ' 分钟</option>';
      }).join('') + '</select></div>' +
      '      <div class="field"><label>及格线</label><select id="ePass">' + [60, 70, 80, 90].map(function (n) {
        return '<option value="' + n + '"' + (n === 60 ? ' selected' : '') + '>' + n + ' 分</option>';
      }).join('') + '</select></div>' +
      '    </div>' +
      '    <button class="btn primary lg block mt12" id="startExam">' + icon('play', 16) + ' 开始考试</button>' +
      '    <div class="note small mt12">考试中途可标记疑问题；倒计时结束自动交卷。建议在安静环境下完成，成绩会计入个人能力档案。</div>' +
      '  </div>' +

      '  <div class="card"><div class="card-head"><h3>我的考试记录</h3><div class="spacer"></div>' +
      '    <span class="card-sub">共 ' + history.length + ' 次</span></div>' +
      (history.length ? '<div class="table-wrap" style="border:none"><table class="tbl" style="min-width:0">' +
        '<thead><tr><th>时间</th><th>范围</th><th class="center">得分</th><th class="center">结果</th><th class="center">操作</th></tr></thead><tbody>' +
        history.slice(0, 8).map(function (e) {
          return '<tr><td class="small">' + esc(UI.fmtDate(e.submittedAt, true)) + '</td>' +
            '<td class="small">' + esc(e.scope || '-') + '</td>' +
            '<td class="center"><b style="color:' + (e.percent >= (e.passLine || 60) ? '#12996b' : '#d93a3f') + '">' + e.percent + '</b></td>' +
            '<td class="center">' + (e.percent >= (e.passLine || 60) ? '<span class="tag ok">通过</span>' : '<span class="tag danger">未通过</span>') + '</td>' +
            '<td class="center"><button class="btn ghost sm" data-exam-detail="' + e.id + '">报告</button></td></tr>';
        }).join('') + '</tbody></table></div>'
        : '<div class="empty"><div class="big">📋</div><p>暂无考试记录</p></div>') +
      '  </div>' +
      '</div>' +
      paperPanel();
  }

  function bindExam() {
    var startBtn = $('#startExam');
    if (startBtn) startBtn.addEventListener('click', function () {
      var cat = $('#eCat').value;
      var meta = {
        scope: cat === 'all' ? '综合模拟考试' : Bank.catName(cat) + ' 专项模拟考试',
        minutes: Number($('#eMinutes').value),
        passLine: Number($('#ePass').value),
        categoryKey: cat,
        count: Number($('#eCount').value)
      };
      if (typeof S.isRemote === 'function' && S.isRemote()) { beginExam(null, meta); return; }
      var paper = Engine.buildPaper({
        mode: 'random', count: meta.count,
        categories: cat === 'all' ? [] : [cat]
      });
      if (!paper.length) { UI.toast('该范围暂无题目', 'warn'); return; }
      beginExam(paper, meta);
    });
    $$('[data-start-task]').forEach(function (b) {
      b.addEventListener('click', function () { startTask(b.getAttribute('data-start-task')); });
    });
    $$('[data-exam-detail]').forEach(function (b) {
      b.addEventListener('click', function () { showExamReport(b.getAttribute('data-exam-detail')); });
    });
    bindPaperPanel();
  }

  /* ================= 试卷生成与导出（管理员 / 技术人员） ================= */

  /** 是否具备组卷导出权限：超级管理员与培训讲师（task.write） */
  function canMakePaper() {
    return typeof S.hasPerm === 'function' && S.hasPerm('task.write') && !!window.IqPaper;
  }

  function paperPanel() {
    if (!canMakePaper()) return '';
    var opt = function (v, label, sel) {
      return '<option value="' + v + '"' + (sel ? ' selected' : '') + '>' + label + '</option>';
    };
    return '' +
      '<div class="card" id="paperCard">' +
      '  <div class="card-head"><h3>' + icon('download', 16) + ' 试卷生成与导出</h3><div class="spacer"></div>' +
      '    <span class="card-sub">管理员 / 技术人员可用</span></div>' +
      '  <p class="small muted" style="margin:0 0 12px">面向销售、采购人员生成整卷客观题（单选 / 多选 / 判断 / 填空），覆盖五大品类，可导出 PDF 或直接打印，用于线下笔试、面试与代理商考核。</p>' +
      '  <div class="inline-fields">' +
      '    <div class="field"><label>考核对象</label><select id="pAud">' +
      opt('sales,purchase', '销售 + 采购（综合）', true) + opt('sales', '销售人员') + opt('purchase', '采购人员') +
      '    </select></div>' +
      '    <div class="field"><label>题量</label><select id="pCount">' +
      [10, 20, 30].map(function (n) { return opt(n, n + ' 题', n === 20); }).join('') +
      '    </select></div>' +
      '    <div class="field"><label>时长</label><select id="pMin">' +
      [15, 30, 45, 60].map(function (n) { return opt(n, n + ' 分钟', n === 30); }).join('') +
      '    </select></div>' +
      '    <div class="field"><label>及格线</label><select id="pPass">' +
      [60, 70, 80, 90].map(function (n) { return opt(n, n + ' 分', n === 60); }).join('') +
      '    </select></div>' +
      '    <div class="field"><label>试卷版本</label><select id="pAns">' +
      opt('0', '考生卷（不含答案）', true) + opt('1', '教师卷（含答案与解析）') +
      '    </select></div>' +
      '  </div>' +
      '  <div class="mt12" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">' +
      '    <button class="btn" id="pPreview">' + icon('eye', 15) + ' 生成预览</button>' +
      '    <button class="btn primary" id="pPdf">' + icon('download', 15) + ' 导出 PDF</button>' +
      '    <button class="btn" id="pPrint">打印试卷</button>' +
      '    <button class="btn ghost sm" id="pReshuffle">换一套题</button>' +
      '    <span class="small muted" id="pMeta" style="margin-left:auto"></span>' +
      '  </div>' +
      '  <div id="paperPreview" class="mt12" hidden></div>' +
      '  <div class="note small mt12">试卷按「品类均衡 + 难度均衡」抽取，仅使用当前账号可见密级的题目；试卷编号固定后可复现同一套题，便于归档与补考对照。</div>' +
      '</div>';
  }

  function bindPaperPanel() {
    var card = $('#paperCard');
    if (!card || !window.IqPaper) return;
    var Paper = window.IqPaper;
    var cache = null;
    var previewEl = $('#paperPreview');
    var metaEl = $('#pMeta');

    function params() {
      return {
        audiences: ($('#pAud').value || 'sales,purchase').split(',').filter(Boolean),
        count: Number($('#pCount').value) || 20,
        minutes: Number($('#pMin').value) || 30,
        passLine: Number($('#pPass').value) || 60,
        withAnswer: $('#pAns').value === '1'
      };
    }
    function cacheKey(p) {
      return p.audiences.join('+') + '|' + p.count + '|' + p.minutes + '|' + p.passLine;
    }
    function current(force) {
      var p = params();
      var k = cacheKey(p);
      if (force || !cache || cache.key !== k) {
        var paper = Paper.build({
          audiences: p.audiences, count: p.count,
          minutes: p.minutes, passLine: p.passLine
        });
        if (!paper.count) { UI.toast('该人群暂无可用题目，请先补充题库', 'warn'); return null; }
        cache = { key: k, paper: paper };
        if (paper.count < p.count) {
          UI.toast('题库可用题量不足，本次共 ' + paper.count + ' 题', 'warn');
        }
      }
      return cache.paper;
    }
    function showMeta(paper) {
      if (!metaEl) return;
      metaEl.textContent = paper.code + ' ｜ ' + paper.count + ' 题 ｜ 满分 ' + paper.fullScore
        + ' 分 ｜ ' + paper.audienceLabel;
    }
    function invalidate() {
      cache = null;
      if (previewEl) { previewEl.hidden = true; previewEl.innerHTML = ''; }
      if (metaEl) metaEl.textContent = '';
    }

    ['pAud', 'pCount', 'pMin', 'pPass'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('change', invalidate);
    });
    if ($('#pAns')) $('#pAns').addEventListener('change', function () {
      // 仅切换版本不重新抽题：若已预览则按新版本重绘
      if (cache && previewEl && !previewEl.hidden) {
        Paper.renderPreview(previewEl, cache.paper, { withAnswer: params().withAnswer });
      }
    });

    if ($('#pPreview')) $('#pPreview').addEventListener('click', function () {
      var paper = current(false);
      if (!paper) return;
      Paper.renderPreview(previewEl, paper, { withAnswer: params().withAnswer });
      previewEl.hidden = false;
      showMeta(paper);
      previewEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    if ($('#pPdf')) $('#pPdf').addEventListener('click', function () {
      var paper = current(false);
      if (!paper) return;
      var name = Paper.exportPdf(paper, { withAnswer: params().withAnswer });
      showMeta(paper);
      UI.toast('导出 ' + name + '：在打印对话框中选择「另存为 PDF」', 'ok');
    });

    if ($('#pPrint')) $('#pPrint').addEventListener('click', function () {
      var paper = current(false);
      if (!paper) return;
      showMeta(paper);
      Paper.print(paper, { withAnswer: params().withAnswer });
    });

    if ($('#pReshuffle')) $('#pReshuffle').addEventListener('click', function () {
      var paper = current(true);
      if (!paper) return;
      Paper.renderPreview(previewEl, paper, { withAnswer: params().withAnswer });
      previewEl.hidden = false;
      showMeta(paper);
      UI.toast('已重新抽取一套题：' + paper.code, 'ok');
    });
  }

  function startTask(taskId) {
    var t = S.taskList().filter(function (x) { return x.id === taskId; })[0];
    if (!t) return;
    var meta = { scope: t.title, taskId: t.id, minutes: t.minutes, passLine: t.passScore };
    if (typeof S.isRemote === 'function' && S.isRemote()) { beginExam(null, meta); return; }
    var paper = Engine.buildPaper({
      mode: 'random', count: t.count,
      categories: t.category && t.category !== 'all' ? [t.category] : [],
      difficulties: t.difficulty || []
    });
    if (!paper.length) { UI.toast('任务范围内暂无可用题目，请联系管理员', 'warn'); return; }
    beginExam(paper, meta);
  }

  function beginExam(paper, meta) {
    // API 模式：由服务端抽题、冻结快照并计时（题目不含答案）
    if (typeof S.isRemote === 'function' && S.isRemote() && S.startExam) {
      var payload = meta.taskId
        ? { taskId: meta.taskId }
        : {
            category: meta.categoryKey || 'all',
            count: meta.count || (paper ? paper.length : 20),
            minutes: meta.minutes || 30,
            passScore: meta.passLine || 60,
            scope: meta.scope
          };
      UI.toast('正在生成试卷…', 'ok', 1200);
      S.startExam(payload).then(function (r) {
        App.exam = {
          recordId: r.recordId, remote: true,
          paper: r.paper, idx: 0, answers: {}, selfGrades: {}, marks: {},
          startAt: Date.now(), limitSec: r.remainingSec,
          scope: r.scope, taskId: r.recordId ? (meta.taskId || null) : null, passLine: r.passLine
        };
        go('#/exam');
        render();
      }).catch(function (e) {
        UI.toast('开始考试失败：' + e.message, 'err');
      });
      return;
    }
    App.exam = {
      paper: paper,
      idx: 0,
      answers: {},
      selfGrades: {},
      marks: {},
      startAt: Date.now(),
      limitSec: (meta.minutes || 30) * 60,
      scope: meta.scope,
      taskId: meta.taskId || null,
      passLine: meta.passLine || 60
    };
    saveDraft();
    go('#/exam');
    render();
  }

  function saveDraft() {
    try {
      if (!App.exam) { localStorage.removeItem(DRAFT_KEY); return; }
      var e = App.exam;
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        owner: currentUserKey(),
        paperIds: e.paper.map(function (q) { return q.id; }),
        idx: e.idx, answers: e.answers, marks: e.marks,
        startAt: e.startAt, limitSec: e.limitSec, scope: e.scope,
        taskId: e.taskId, passLine: e.passLine, selfGrades: e.selfGrades,
        recordId: e.recordId || null, remote: !!e.remote
      }));
    } catch (err) { /* 忽略 */ }
  }

  /* -------- 练习草稿：中断后可续答（与考试草稿分开存储） -------- */
  var PRACTICE_DRAFT_KEY = 'iqz.practice.draft.v1';

  function savePracticeDraft() {
    try {
      var p = App.practice;
      if (!p) { localStorage.removeItem(PRACTICE_DRAFT_KEY); return; }
      localStorage.setItem(PRACTICE_DRAFT_KEY, JSON.stringify({
        owner: currentUserKey(),
        paperIds: p.paper.map(function (q) { return q.id; }),
        idx: p.idx, answers: p.answers, selfGrades: p.selfGrades, revealed: p.revealed,
        startAt: p.startAt, mode: p.mode, scope: p.scope, sessionId: p.sessionId
      }));
    } catch (e) { /* 忽略 */ }
  }

  /** 草稿归属标识：同一浏览器切换账号时不误恢复他人的练习/考试 */
  function currentUserKey() {
    var u = S.user();
    return u ? (u.username || u.name || '') : '';
  }

  function draftBelongsToCurrentUser(d) {
    if (!d) return false;
    if (!d.owner) return true;            // 历史草稿无归属信息，按兼容处理
    return d.owner === currentUserKey();
  }

  function clearPracticeDraft() {
    try { localStorage.removeItem(PRACTICE_DRAFT_KEY); } catch (e) { /* 忽略 */ }
  }

  function restorePracticeDraft(d) {
    var paper = (d.paperIds || []).map(function (id) { return Bank.byId(id); }).filter(Boolean);
    if (!paper.length) return false;
    App.practice = {
      paper: paper,
      idx: Math.min(d.idx || 0, paper.length - 1),
      answers: d.answers || {},
      selfGrades: d.selfGrades || {},
      revealed: d.revealed || {},
      startAt: d.startAt || Date.now(),
      mode: d.mode || 'random',
      scope: d.scope || '全题库',
      sessionId: d.sessionId || ('s_' + Date.now().toString(36)),
      finished: false
    };
    return true;
  }

  /** 启动时检查未完成的考试与练习草稿 */
  function checkDrafts() {
    var examDraft = null, pracDraft = null;
    try { var s1 = localStorage.getItem(DRAFT_KEY); if (s1) examDraft = JSON.parse(s1); } catch (e) { /* 忽略 */ }
    try { var s2 = localStorage.getItem(PRACTICE_DRAFT_KEY); if (s2) pracDraft = JSON.parse(s2); } catch (e) { /* 忽略 */ }

    // 归属校验：草稿属于其他账号时静默清理，不提示、不恢复
    if (examDraft && !draftBelongsToCurrentUser(examDraft)) { localStorage.removeItem(DRAFT_KEY); examDraft = null; }
    if (pracDraft && !draftBelongsToCurrentUser(pracDraft)) { clearPracticeDraft(); pracDraft = null; }

    function askExam() {
      if (!examDraft || !examDraft.scope) return Promise.resolve(false);
      return UI.confirm('检测到未完成的考试「' + examDraft.scope + '」，是否继续作答？').then(function (ok) {
        if (!ok) { localStorage.removeItem(DRAFT_KEY); return false; }
        // API 模式：从服务端恢复试卷与服务端剩余时间
        if (examDraft.remote && examDraft.recordId && S.isRemote && S.isRemote() && S.resumeExam) {
          return S.resumeExam(examDraft.recordId).then(function (r) {
            App.exam = {
              recordId: r.recordId, remote: true, paper: r.paper, idx: 0,
              answers: r.answers || {}, selfGrades: {}, marks: {},
              startAt: Date.now(), limitSec: r.remainingSec,
              scope: r.scope, taskId: examDraft.taskId || null, passLine: r.passLine
            };
            go('#/exam'); render();
            return true;
          }).catch(function () {
            localStorage.removeItem(DRAFT_KEY);
            UI.toast('该考试已结束或已交卷', 'warn');
            return false;
          });
        }
        var paper = (examDraft.paperIds || []).map(function (id) { return Bank.byId(id); }).filter(Boolean);
        if (!paper.length) { localStorage.removeItem(DRAFT_KEY); return false; }
        App.exam = {
          paper: paper, idx: examDraft.idx || 0, answers: examDraft.answers || {},
          marks: examDraft.marks || {}, selfGrades: examDraft.selfGrades || {},
          startAt: examDraft.startAt, limitSec: examDraft.limitSec,
          scope: examDraft.scope, taskId: examDraft.taskId, passLine: examDraft.passLine
        };
        go('#/exam'); render();
        return true;
      });
    }

    askExam().then(function (resumed) {
      if (resumed || !pracDraft) return;
      var done = Object.keys(pracDraft.revealed || {}).length;
      var total = (pracDraft.paperIds || []).length;
      setTimeout(function () {
        UI.confirm('检测到未完成的练习（' + (pracDraft.scope || '全题库') + '，已作答 ' + done + '/' + total +
          ' 题），是否继续？').then(function (ok) {
          if (!ok) { clearPracticeDraft(); return; }
          if (restorePracticeDraft(pracDraft)) { go('#/practice'); render(); }
          else clearPracticeDraft();
        });
      }, 350);
    });
  }

  function viewExamRunning() {
    var e = App.exam;
    var q = e.paper[e.idx];
    var left = Math.max(0, e.limitSec - Math.floor((Date.now() - e.startAt) / 1000));
    var answered = e.paper.filter(function (x) {
      var a = e.answers[x.id];
      return a != null && (!Array.isArray(a) || a.length) && (typeof a !== 'string' || a.trim());
    }).length;

    return '' +
      '<div class="exam-top">' +
      '  <span class="tag warn">' + esc(e.scope) + '</span>' +
      '  <span class="timer' + (left < 120 ? ' danger' : '') + '" id="examTimer">' + UI.fmtClock(left) + '</span>' +
      '  <div class="spacer" style="flex:1"></div>' +
      '  <span class="small muted">已答 ' + answered + ' / ' + e.paper.length + ' · 标记 ' + Object.keys(e.marks).filter(function (k) { return e.marks[k]; }).length + '</span>' +
      '  <button class="btn sm" id="eMark">' + icon('flag', 14) + (e.marks[q.id] ? ' 取消标记' : ' 标记疑问') + '</button>' +
      '  <button class="btn sm primary" id="eSubmit">交卷</button>' +
      '</div>' +

      '<div class="page-narrow">' + questionCard(q, {
        index: e.idx, total: e.paper.length,
        answer: e.answers[q.id],
        revealed: false,
        exam: true
      }) + '</div>' +

      '<div class="card mt16"><div class="card-head"><h3>答题卡</h3><div class="spacer"></div>' +
      '<span class="card-sub">橙点=已标记疑问</span></div>' +
      '<div class="qnav" id="examNav">' + e.paper.map(function (x, i) {
        var a = e.answers[x.id];
        var done = a != null && (!Array.isArray(a) || a.length) && (typeof a !== 'string' || a.trim());
        var cls = (i === e.idx ? 'cur ' : '') + (done ? 'done ' : '') + (e.marks[x.id] ? 'mark' : '');
        return '<button class="' + cls.trim() + '" data-jump="' + i + '">' + (i + 1) + '</button>';
      }).join('') + '</div>' +
      '<div class="btn-row mt12"><button class="btn" id="ePrev"' + (e.idx === 0 ? ' disabled' : '') + '>上一题</button>' +
      '<button class="btn primary" id="eNext">下一题</button></div>' + kbHint('M 标记疑问') + '</div>';
  }

  function bindExamRunning() {
    var e = App.exam;
    if (!e) return;
    var q = e.paper[e.idx];
    bindQuestionCard(q, {
      revealed: false,
      exam: true,
      answer: e.answers[q.id],
      onAnswer: function (v) { e.answers[q.id] = v; saveDraft(); }
    });
    var prev = $('#ePrev'), next = $('#eNext'), sub = $('#eSubmit'), mark = $('#eMark');
    if (prev) prev.addEventListener('click', function () { if (e.idx > 0) { e.idx--; saveDraft(); render(); } });
    if (next) next.addEventListener('click', function () {
      if (e.idx < e.paper.length - 1) { e.idx++; saveDraft(); render(); }
      else UI.toast('已到最后一题，可点击「交卷」', 'warn');
    });
    if (mark) mark.addEventListener('click', function () {
      e.marks[q.id] = !e.marks[q.id]; saveDraft(); render();
    });
    if (sub) sub.addEventListener('click', confirmSubmitExam);
    $$('[data-jump]').forEach(function (b) {
      b.addEventListener('click', function () { e.idx = Number(b.getAttribute('data-jump')); saveDraft(); render(); });
    });

    // 倒计时
    if (App.timer) clearInterval(App.timer);
    App.timer = setInterval(function () {
      if (!App.exam) { clearInterval(App.timer); return; }
      var el = document.getElementById('examTimer');
      var left = Math.max(0, App.exam.limitSec - Math.floor((Date.now() - App.exam.startAt) / 1000));
      if (el) {
        el.textContent = UI.fmtClock(left);
        el.classList.toggle('danger', left < 120);
      }
      if (left <= 0) {
        clearInterval(App.timer);
        UI.toast('考试时间到，系统自动交卷', 'warn');
        submitExam(true);
      }
    }, 1000);
  }

  function confirmSubmitExam() {
    var e = App.exam;
    if (!e) return;
    if (document.querySelector('.modal-mask')) return; // 防止重复弹窗
    var unanswered = e.paper.filter(function (x) {
      var a = e.answers[x.id];
      return !(a != null && (!Array.isArray(a) || a.length) && (typeof a !== 'string' || a.trim()));
    }).length;
    UI.confirm(unanswered ? '还有 ' + unanswered + ' 题未作答，确定交卷吗？' : '确定交卷吗？交卷后不可修改。').then(function (ok) {
      if (ok) submitExam(false);
    });
  }

  function submitExam(auto) {
    var e = App.exam;
    if (!e) return;
    if (App.timer) clearInterval(App.timer);

    // API 模式：交卷与服务端判分
    if (e.remote && S.submitExam) {
      UI.toast('正在交卷…', 'ok', 1500);
      S.submitExam(e.recordId, e.answers, auto).then(function (res) {
        return S.sync().then(function () {
          var rec = S.examList().filter(function (x) { return String(x.id) === String(res.recordId); })[0];
          if (!rec) {
            rec = {
              id: res.recordId, scope: e.scope, total: e.paper.length,
              right: res.right, wrong: res.wrong, pending: res.pending,
              percent: res.percent, passLine: res.passScore, passed: res.passed,
              durationSec: res.durationSec, autoSubmit: !!auto, detail: []
            };
          }
          App.exam = null;
          localStorage.removeItem(DRAFT_KEY);
          App.sessionSummary = { exam: rec, kind: 'exam' };
          App.selfReview = res.pending > 0 ? {
            examId: res.recordId, remote: true,
            items: res.pendingItems.map(function (p) {
              return { qid: p.questionNo, serverId: p.questionId, answer: p.userAnswer, reference: p.referenceAnswer, graded: false };
            })
          } : null;
          go('#/result');
          render();
        });
      }).catch(function (err) {
        UI.toast('交卷失败：' + err.message, 'err');
      });
      return;
    }

    var sc = Engine.score(e.paper, e.answers, e.selfGrades);
    var detail = e.paper.map(function (q) {
      var j = Engine.judge(q, e.answers[q.id]);
      var ok = (q.type === 'short' || q.type === 'scenario') ? (e.selfGrades[q.id] === undefined ? null : e.selfGrades[q.id]) : j.correct;
      if (ok === false) S.recordAnswer(q.id, false, { mode: 'exam' });
      else if (ok === true) S.recordAnswer(q.id, true, { mode: 'exam' });
      return { qid: q.id, category: q.category, type: q.type, difficulty: q.difficulty, answer: e.answers[q.id], correct: ok };
    });
    var rec = S.addExam({
      taskId: e.taskId, scope: e.scope, total: e.paper.length,
      right: sc.right, wrong: sc.wrong, pending: sc.pending,
      got: sc.got, full: sc.full, percent: sc.percent,
      passLine: e.passLine, passed: sc.percent >= e.passLine,
      durationSec: Math.round((Date.now() - e.startAt) / 1000),
      autoSubmit: !!auto, detail: detail,
      submittedAt: S.nowISO()
    });
    App.exam = null;
    localStorage.removeItem(DRAFT_KEY);
    App.sessionSummary = { exam: rec, kind: 'exam' };
    // 主观题需由考生对照参考答案自评，未自评前该题不计分
    var pendingItems = detail.filter(function (d) { return d.correct === null; });
    if (pendingItems.length) {
      App.selfReview = { examId: rec.id, items: pendingItems.map(function (d) { return { qid: d.qid, answer: d.answer, graded: false }; }) };
    } else {
      App.selfReview = null;
    }
    go('#/result');
    render();
  }

  /** 依据自评结果重算考试得分 */
  function applySelfGrades(examId) {
    // API 模式：自评提交到服务端，由服务端重算成绩
    if (App.selfReview && App.selfReview.remote && S.selfGradeExam) {
      var grades = App.selfReview.items
        .filter(function (it) { return it.graded && it.serverId; })
        .map(function (it) { return { questionId: it.serverId, isCorrect: !!it.correct }; });
      if (!grades.length) return;
      S.selfGradeExam(examId, grades).then(function (res) {
        return S.sync().then(function () {
          App.sessionSummary = {
            exam: S.examList().filter(function (x) { return String(x.id) === String(examId); })[0],
            kind: 'exam'
          };
          if (res.pending === 0) {
            App.selfReview = null;
            UI.toast('主观题自评完成，成绩已更新为 ' + res.percent + ' 分', 'ok');
          } else {
            UI.toast('已提交自评，剩余 ' + res.pending + ' 题待评', 'ok');
          }
          render();
        });
      }).catch(function (e) { UI.toast('自评提交失败：' + e.message, 'err'); });
      return;
    }

    var exam = S.examList().filter(function (x) { return x.id === examId; })[0];
    if (!exam || !App.selfReview) return;
    var map = {};
    App.selfReview.items.forEach(function (it) { if (it.graded) map[it.qid] = it.correct; });
    (exam.detail || []).forEach(function (d) {
      if (map.hasOwnProperty(d.qid)) d.correct = map[d.qid];
    });
    var sc = Engine.scoreFromDetail(exam.detail);
    exam.right = sc.right; exam.wrong = sc.wrong; exam.pending = sc.pending;
    exam.got = sc.got; exam.full = sc.full; exam.percent = sc.percent;
    exam.passed = sc.percent >= (exam.passLine || 60);
    S.save();
  }

  function showExamReport(examId) {
    var e = S.examList().filter(function (x) { return x.id === examId; })[0];
    if (!e) return;
    var byCat = {};
    (e.detail || []).forEach(function (d) {
      byCat[d.category] = byCat[d.category] || { right: 0, wrong: 0 };
      if (d.correct === true) byCat[d.category].right++;
      else if (d.correct === false) byCat[d.category].wrong++;
    });
    var html = '<div class="grid c3 mb16">' +
      statCard('得分', e.percent + '<small> 分</small>', e.passed ? '达到及格线 ' + e.passLine : '及格线 ' + e.passLine, e.passed ? 'ok' : 'danger') +
      statCard('答对 / 答错', e.right + ' / ' + e.wrong, (e.pending ? e.pending + ' 题未自评' : '全部已判分'), '') +
      statCard('用时', UI.fmtDuration(e.durationSec), esc(UI.fmtDate(e.submittedAt, true)), 'warn') +
      '</div>' +
      '<div class="card"><div class="card-head"><h3>分品类表现</h3></div>' +
      UI.barChart(Object.keys(byCat).map(function (k) {
        var m = Bank.catMeta(k);
        return { label: m.short, value: byCat[k].right, color: m.color };
      }), { height: 180 }) + '</div>' +
      '<div class="card"><div class="card-head"><h3>逐题明细</h3></div><div class="list">' +
      (e.detail || []).map(function (d, i) {
        var q = Bank.byId(d.qid);
        if (!q) return '';
        return '<div class="list-item"><span class="tag ' + (d.correct === true ? 'ok' : d.correct === false ? 'danger' : '') + '">' +
          (d.correct === true ? '正确' : d.correct === false ? '错误' : '未评') + '</span>' +
          '<div style="flex:1;min-width:0"><div class="ttl" style="font-size:13px">' + (i + 1) + '. ' + esc(q.stem.slice(0, 46)) + (q.stem.length > 46 ? '…' : '') + '</div>' +
          '<div class="sub">' + esc(q.id) + ' · ' + esc(Bank.catName(q.category)) + ' · 你的答案：' + esc(Array.isArray(d.answer) ? (d.answer.join('、') || '未作答') : (d.answer || '未作答')) + '</div></div>' +
          '<button class="btn ghost sm" data-view-q="' + q.id + '">解析</button></div>';
      }).join('') + '</div></div>';

    var m = UI.modal({ title: '考试报告 · ' + e.scope, html: html, wide: true });
    $$('[data-view-q]', m.el).forEach(function (b) {
      b.addEventListener('click', function () { showQuestionModal(b.getAttribute('data-view-q')); });
    });
  }

  /* ======================================================================
     九、考试任务列表
     ====================================================================== */

  function viewTasks() {
    var u = S.user();
    var mine = S.taskList().filter(function (t) {
      return !t.roles || !t.roles.length || t.roles.indexOf(u.role) >= 0 || u.role === 'super_admin';
    });
    var history = S.examList();

    return '' +
      '<div class="page-head"><h2>' + icon('exam', 20) + '考试任务</h2>' +
      '<p>管理员 / 培训讲师发布的考试任务列表；完成任务后可在「模拟考试」查看成绩报告</p></div>' +
      '<div class="card">' +
      (mine.length ? '<div class="list">' + mine.map(function (t) {
        var done = history.filter(function (e) { return e.taskId === t.id; });
        var best = done.length ? Math.max.apply(null, done.map(function (e) { return e.percent; })) : null;
        var closed = t.status === 'closed';
        var expired = t.deadline && new Date(t.deadline).getTime() < Date.now();
        return '<div class="list-item">' +
          '<div style="flex:1;min-width:0">' +
          '<div class="ttl">' + esc(t.title) + (closed ? ' <span class="tag">已关闭</span>' : '') + (expired ? ' <span class="tag danger">已过期</span>' : '') + '</div>' +
          '<div class="sub">范围：' + esc(t.category === 'all' ? '综合' : Bank.catName(t.category)) + ' · ' + t.count + ' 题 · ' + t.minutes + ' 分钟 · 及格 ' + t.passScore + ' 分' +
          (t.deadline ? ' · 截止 ' + esc(UI.fmtDate(t.deadline)) : '') + (t.createdBy ? ' · 发布人 ' + esc(t.createdBy) : '') + '</div>' +
          (done.length ? '<div class="sub">已完成 ' + done.length + ' 次，最高 ' + best + ' 分，最近 ' + esc(UI.fmtDate(done[0].submittedAt, true)) + '</div>' : '') +
          '</div>' +
          '<button class="btn primary sm" data-start-task="' + t.id + '"' + (closed ? ' disabled' : '') + '>' + (best != null ? '再考一次' : '开始考试') + '</button>' +
          '</div>';
      }).join('') + '</div>' : '<div class="empty"><div class="big">📌</div><p>当前没有分配给你的考试任务</p></div>') +
      '</div>' +
      '<div class="note small">' + icon('info', 14) + ' 考试任务由管理后台「考试任务」模块发布，可按角色下发；对外部客户/代理商仅可见公开题库范围的任务。</div>';
  }

  /* ======================================================================
     十、数据统计
     ====================================================================== */

  function viewStats() {
    var st = Engine.stats();
    var logs = S.state.practiceLog.slice(0, 12);
    var exams = S.examList();

    return '' +
      '<div class="page-head"><h2>' + icon('chart', 20) + '数据统计</h2>' +
      '<p>个人能力画像：覆盖率、正确率、品类强弱项、练习趋势与考试表现</p></div>' +

      '<div class="grid c4 mb16">' +
      statCard('题库覆盖率', st.coverage + '<small>%</small>', '共 ' + st.bankTotal + ' 题', '') +
      statCard('累计正确率', st.rate == null ? '—' : st.rate + '<small>%</small>', st.answeredTotal + ' 次作答', st.rate >= 80 ? 'ok' : 'warn') +
      statCard('待复习错题', String(st.wrongOpen), '错题本', st.wrongOpen ? 'danger' : 'ok') +
      statCard('连续学习', st.streak + '<small> 天</small>', '今日 ' + st.todayAnswered + ' 题', 'warn') +
      '</div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>能力雷达（分品类正确率）</h3></div>' +
      '    <div class="center">' + UI.radar(S.CATEGORIES.map(function (c) {
        var s = st.catStat[c.key] || {};
        return { label: c.short, value: s.rate };
      }), { size: 300 }) + '</div></div>' +
      '  <div class="card"><div class="card-head"><h3>薄弱项 TOP</h3><div class="spacer"></div>' +
      '    <button class="btn sm primary" data-act="weak-practice">' + icon('target', 14) + ' 强化练习</button></div>' +
      (function () {
        var items = S.CATEGORIES.map(function (c) {
          var s = st.catStat[c.key] || {};
          return { name: c.name, rate: s.rate, key: c.key, color: c.color };
        }).filter(function (x) { return x.rate != null; }).sort(function (a, b) { return a.rate - b.rate; });
        if (!items.length) return '<div class="empty"><p>还没有足够的作答数据</p></div>';
        return '<div class="list">' + items.map(function (x) {
          return '<div class="list-item"><span style="width:6px;height:30px;border-radius:3px;background:' + x.color + '"></span>' +
            '<div style="flex:1"><div class="ttl">' + esc(x.name) + '</div>' +
            '<div class="bar thin mt8"><i style="width:' + x.rate + '%;background:' + x.color + '"></i></div></div>' +
            '<b style="color:' + (x.rate >= 80 ? '#12996b' : x.rate >= 60 ? '#d98412' : '#d93a3f') + '">' + x.rate + '%</b></div>';
        }).join('') + '</div>';
      })() +
      '  </div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><h3>近 14 天练习量趋势</h3></div>' +
      UI.trendChart(st.trend, { height: 220, labelEvery: 2 }) +
      '<div class="legend"><span><i style="background:#12996b"></i>答对</span><span><i style="background:#f0a2a4"></i>答错</span></div></div>' +

      '<div class="card"><div class="card-head"><h3>分品类练习明细</h3><div class="spacer"></div>' +
      '  <button class="btn sm" data-act="export-stats">' + icon('download', 14) + ' 导出个人报告</button></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr>' +
      '<th>品类</th><th class="center">题量</th><th class="center">已练</th><th class="center">覆盖率</th>' +
      '<th class="center">答对</th><th class="center">答错</th><th class="center">正确率</th><th>掌握度</th></tr></thead><tbody>' +
      S.CATEGORIES.map(function (c) {
        var s = st.catStat[c.key] || { total: 0, seen: 0, right: 0, wrong: 0, rate: null, coverage: 0 };
        return '<tr><td>' + catChip(c.key) + ' ' + esc(c.name) + '</td>' +
          '<td class="center">' + s.total + '</td><td class="center">' + s.seen + '</td>' +
          '<td class="center">' + s.coverage + '%</td>' +
          '<td class="center" style="color:#12996b">' + s.right + '</td>' +
          '<td class="center" style="color:#d93a3f">' + s.wrong + '</td>' +
          '<td class="center"><b>' + pct(s.rate) + '</b></td>' +
          '<td><div class="bar thin"><i style="width:' + (s.rate || 0) + '%;background:' + c.color + '"></i></div></td></tr>';
      }).join('') + '</tbody></table></div></div>' +

      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>最近练习记录</h3></div>' +
      (logs.length ? '<div class="table-wrap" style="border:none"><table class="tbl" style="min-width:0"><thead><tr>' +
        '<th>时间</th><th>范围</th><th class="center">题量</th><th class="center">正确率</th></tr></thead><tbody>' +
        logs.map(function (l) {
          var tot = (l.right || 0) + (l.wrong || 0);
          return '<tr><td class="small">' + esc(UI.fmtDate(l.endedAt, true)) + '</td>' +
            '<td class="small">' + esc(l.scope || '-') + '</td><td class="center">' + l.total + '</td>' +
            '<td class="center">' + (tot ? Math.round(l.right / tot * 100) + '%' : '—') + '</td></tr>';
        }).join('') + '</tbody></table></div>' : '<div class="empty"><p>暂无练习记录</p></div>') +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>考试表现</h3></div>' +
      (exams.length ? UI.barChart(exams.slice(0, 8).reverse().map(function (e, i) {
        return { label: '第' + (i + 1) + '次', value: e.percent, color: e.percent >= (e.passLine || 60) ? '#12996b' : '#f0a2a4' };
      }), { height: 200 }) + '<div class="small muted center">近 ' + Math.min(8, exams.length) + ' 次考试成绩（分）</div>'
        : '<div class="empty"><p>暂无考试记录，去「模拟考试」试试</p></div>') +
      '  </div>' +
      '</div>';
  }

  function bindStats() {
    var w = $('[data-act="weak-practice"]');
    if (w) w.addEventListener('click', function () {
      startPractice({ mode: 'weak', count: 20, categories: [], difficulties: [], types: [] });
    });
    var ex = $('[data-act="export-stats"]');
    if (ex) ex.addEventListener('click', function () {
      var st = Engine.stats();
      var rows = [['汇川产品刷题工具 · 个人学习报告'],
        ['姓名', S.user().name], ['部门', S.user().dept || ''], ['角色', S.roleDef().label],
        ['生成时间', UI.fmtDate(S.nowISO(), true)], [],
        ['品类', '题量', '已练', '覆盖率%', '答对', '答错', '正确率%']];
      S.CATEGORIES.forEach(function (c) {
        var s = st.catStat[c.key];
        rows.push([c.name, s.total, s.seen, s.coverage, s.right, s.wrong, s.rate == null ? '' : s.rate]);
      });
      rows.push([]);
      rows.push(['累计作答', st.answeredTotal, '累计正确率%', st.rate == null ? '' : st.rate,
        '待复习错题', st.wrongOpen, '连续学习天数', st.streak]);
      rows.push([]);
      rows.push(['考试记录']);
      rows.push(['时间', '范围', '得分', '及格线', '用时(秒)']);
      S.examList().forEach(function (e) {
        rows.push([UI.fmtDate(e.submittedAt, true), e.scope, e.percent, e.passLine, e.durationSec]);
      });
      UI.download('汇川刷题个人报告_' + S.user().name + '_' + S.todayKey() + '.csv', UI.toCSV(rows), 'text/csv');
      UI.toast('个人报告已导出', 'ok');
    });
  }

  /* ======================================================================
     十一、结果小结
     ====================================================================== */

  function viewResult() {
    var s = App.sessionSummary;
    if (!s) return '<div class="empty"><p>暂无小结数据</p><a class="btn mt12" href="#/dashboard">返回仪表盘</a></div>';

    if (s.kind === 'exam') {
      var e = s.exam;
      var sr = (App.selfReview && App.selfReview.examId === e.id) ? App.selfReview : null;
      var pendingItems = sr ? sr.items : [];
      var reviewCard = pendingItems.length ? '<div class="card"><div class="card-head">' +
        '<h3>' + icon('edit', 16) + ' 主观题自评（' + pendingItems.filter(function (x) { return !x.graded; }).length + ' / ' + pendingItems.length + ' 题待评）</h3>' +
        '<div class="spacer"></div><span class="card-sub">对照参考答案与自己的作答自行判分，评完自动更新成绩</span></div>' +
        '<div class="list">' + pendingItems.map(function (it) {
          var q = Bank.byId(it.qid);
          var stem = q ? q.stem : (it.stem || it.qid);
          var ref = q ? String(q.answer) : (it.reference || '');
          return '<div class="list-item" style="align-items:flex-start;flex-direction:column;gap:8px">' +
            '<div style="width:100%"><div class="ttl" style="font-size:13.5px">' + esc(stem.slice(0, 90)) + (stem.length > 90 ? '…' : '') + '</div>' +
            '<div class="sub">' + esc(it.qid) + (q ? ' · ' + esc(Bank.catName(q.category)) + ' · ' + esc(Bank.typeName(q.type)) : '') + '</div></div>' +
            '<div style="width:100%" class="small"><b>我的作答：</b>' + esc(typeof it.answer === 'string' && it.answer.trim() ? it.answer : '（未作答）') + '</div>' +
            '<div style="width:100%" class="ref-answer small"><b>参考答案：</b>' + esc(ref) + '</div>' +
            (it.graded
              ? '<div class="tag ' + (it.correct ? 'ok' : 'danger') + '">已评为' + (it.correct ? '答对' : '答错') + '</div>'
              : '<div class="btn-row"><button class="btn ok sm" data-self-grade="1" data-qid="' + it.qid + '">' + icon('check', 14) + ' 要点齐全，算答对</button>' +
              '<button class="btn danger sm" data-self-grade="0" data-qid="' + it.qid + '">' + icon('close', 14) + ' 要点缺失，算答错</button>' +
              (q ? '<button class="btn ghost sm" data-view-q="' + it.qid + '">看完整解析</button>' : '') + '</div>') +
            '</div>';
        }).join('') + '</div></div>' : '';

      return '' +
        '<div class="page-head"><h2>' + icon('check', 20) + '考试已完成</h2><p>' + esc(e.scope) + ' · 提交于 ' + esc(UI.fmtDate(e.submittedAt, true)) + '</p></div>' +
        '<div class="grid c4 mb16">' +
        statCard('得分', e.percent + '<small> 分</small>', e.passed ? '通过（及格线 ' + e.passLine + '）' : '未达及格线 ' + e.passLine, e.passed ? 'ok' : 'danger') +
        statCard('答对题数', String(e.right), '共 ' + e.total + ' 题', 'ok') +
        statCard('答错题数', String(e.wrong), e.pending ? e.pending + ' 题待自评' : '主观题已自评', 'danger') +
        statCard('考试用时', UI.fmtDuration(e.durationSec), e.autoSubmit ? '时间到自动交卷' : '正常交卷', 'warn') +
        '</div>' +
        reviewCard +
        '<div class="card"><div class="card-head"><h3>下一步</h3></div>' +
        '<div class="btn-row">' +
        '<button class="btn primary" data-act="exam-report">' + icon('eye', 15) + ' 查看完整报告</button>' +
        '<button class="btn" data-act="practice-wrong">' + icon('wrong', 15) + ' 立即攻克错题（' + S.wrongList(false).length + '）</button>' +
        '<a class="btn" href="#/exam">返回模拟考试</a>' +
        '<a class="btn" href="#/dashboard">返回仪表盘</a>' +
        '</div></div>';
    }

    var d = s.detail || [];
    var log = s.log;
    var tot = (log.right || 0) + (log.wrong || 0);
    var rate = tot ? Math.round(log.right / tot * 100) : 0;
    var wrongItems = d.filter(function (x) { return x.correct === false; });
    return '' +
      '<div class="page-head"><h2>' + icon('check', 20) + '练习小结</h2><p>' + esc(log.scope) + ' · 用时 ' + esc(UI.fmtDuration(log.durationSec)) + '</p></div>' +
      '<div class="grid c4 mb16">' +
      statCard('本次正确率', (tot ? rate : 0) + '<small>%</small>', '共 ' + log.total + ' 题', rate >= 80 ? 'ok' : rate >= 60 ? 'warn' : 'danger') +
      statCard('答对', String(log.right), '继续保持', 'ok') +
      statCard('答错', String(log.wrong), '已自动收录错题本', 'danger') +
      statCard('未自评', String(log.pending || 0), '主观题可补评', '') +
      '</div>' +
      (wrongItems.length ? '<div class="card"><div class="card-head"><h3>本次错题回顾（' + wrongItems.length + '）</h3>' +
        '<div class="spacer"></div><button class="btn sm primary" data-act="practice-wrong">' + icon('refresh', 14) + ' 错题重练</button></div>' +
        '<div class="list">' + wrongItems.map(function (x) {
          return '<div class="list-item"><div style="flex:1;min-width:0">' +
            '<div class="ttl" style="font-size:13px">' + esc(x.q.stem.slice(0, 56)) + (x.q.stem.length > 56 ? '…' : '') + '</div>' +
            '<div class="sub">' + esc(x.q.id) + ' · ' + esc(Bank.catName(x.q.category)) + ' · 你的答案：' + esc(Array.isArray(x.answer) ? x.answer.join('、') : (x.answer || '未作答')) + '</div></div>' +
            '<button class="btn ghost sm" data-view-q="' + x.q.id + '">看解析</button></div>';
        }).join('') + '</div></div>'
        : '<div class="card center"><div class="empty"><div class="big">🎯</div><p>本次全部答对，表现优秀！</p></div></div>') +
      '<div class="btn-row"><a class="btn primary" href="#/practice">继续刷题</a><a class="btn" href="#/stats">查看统计</a><a class="btn" href="#/dashboard">返回仪表盘</a></div>';
  }

  function bindResult() {
    $$('[data-view-q]').forEach(function (b) {
      b.addEventListener('click', function () { showQuestionModal(b.getAttribute('data-view-q')); });
    });
    $$('[data-self-grade]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!App.selfReview) return;
        var remote = !!App.selfReview.remote;
        var qid = b.getAttribute('data-qid');
        var ok = b.getAttribute('data-self-grade') === '1';
        App.selfReview.items.forEach(function (it) {
          if (it.qid === qid) { it.graded = true; it.correct = ok; }
        });
        if (remote) {
          applySelfGrades(App.selfReview.examId);   // 远程：提交已评项，由服务端重算
          render();
          return;
        }
        S.recordAnswer(qid, ok, { mode: 'exam', self: true });
        applySelfGrades(App.selfReview.examId);
        if (App.selfReview.items.every(function (it) { return it.graded; })) {
          App.sessionSummary = { exam: S.examList().filter(function (x) { return x.id === App.selfReview.examId; })[0], kind: 'exam' };
          App.selfReview = null;
          UI.toast('主观题自评完成，成绩已更新', 'ok');
        }
        render();
      });
    });
    var pw = $('[data-act="practice-wrong"]');
    if (pw) pw.addEventListener('click', function () { startPractice({ mode: 'wrong', count: 0 }); });
    var er = $('[data-act="exam-report"]');
    if (er && App.sessionSummary && App.sessionSummary.exam) {
      er.addEventListener('click', function () { showExamReport(App.sessionSummary.exam.id); });
    }
  }

  /* ======================================================================
     十二、个人设置
     ====================================================================== */

  function viewProfile() {
    var st = Engine.stats();
    var u = S.user();
    return '' +
      '<div class="page-head"><h2>' + icon('user', 20) + '个人设置</h2><p>学习目标、数据管理与账号信息</p></div>' +
      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>账号信息</h3></div>' +
      '    <div class="list">' +
      '      <div class="list-item"><span class="muted small" style="width:80px">姓名</span><b>' + esc(u.name) + '</b></div>' +
      '      <div class="list-item"><span class="muted small" style="width:80px">身份</span><span class="tag brand">' + esc(S.roleDef().label) + '</span></div>' +
      '      <div class="list-item"><span class="muted small" style="width:80px">部门</span>' + esc(u.dept || '—') + '</div>' +
      '      <div class="list-item"><span class="muted small" style="width:80px">权限</span><span class="small muted">' + esc(S.roleDef().perms.join('、')) + '</span></div>' +
      '    </div>' +
      '    <button class="btn mt12" id="switchUser">' + icon('users', 15) + ' 切换身份 / 账号</button>' +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>学习目标</h3></div>' +
      '    <div class="field"><label>每日刷题目标（题）</label><input type="number" id="goalInput" min="5" max="200" value="' + (S.settings().dailyGoal || 20) + '"></div>' +
      '    <div class="small muted mb8">今日已完成 ' + st.todayAnswered + ' 题</div>' +
      '    <div class="bar"><i style="width:' + Math.min(100, Math.round(st.todayAnswered / (S.settings().dailyGoal || 20) * 100)) + '%"></i></div>' +
      '    <div class="divider"></div>' +
      '    <label class="checkline mb8"><input type="checkbox" id="pfInstant"' + (S.settings().instantJudge ? ' checked' : '') + '> 练习时即时判题</label>' +
      '    <label class="checkline"><input type="checkbox" id="pfShuffle"' + (S.settings().shuffleOptions ? ' checked' : '') + '> 打乱选项顺序</label>' +
      '    <button class="btn primary mt12" id="saveSettings">保存设置</button>' +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>数据管理</h3></div>' +
      '    <p class="small muted">学习数据保存在本机浏览器。可导出备份或迁移到其他设备；企业部署时可由管理员统一导出团队报表。</p>' +
      '    <div class="btn-row">' +
      '      <button class="btn" id="exportData">' + icon('download', 15) + ' 导出全部数据（JSON）</button>' +
      '      <button class="btn" id="importData">' + icon('upload', 15) + ' 导入数据</button>' +
      '      <input type="file" id="importFile" accept=".json" class="hidden">' +
      '    </div>' +
      '    <div class="divider"></div>' +
      '    <div class="btn-row">' +
      '      <button class="btn danger" id="resetProgress">清空学习记录</button>' +
      '      <button class="btn danger" id="resetAll">恢复出厂（含题库改动）</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>关于工具</h3></div>' +
      '    <p class="small muted">汇川产品刷题工具 v1.0 · 轻量化 B/S 架构，纯前端运行，可部署于企业内网静态服务器，亦可内嵌企业微信 / 钉钉工作台。</p>' +
      '    <div class="list mt8">' +
      '      <div class="list-item"><span class="muted small" style="width:80px">题库总量</span><b>' + st.bankTotal + '</b> 题</div>' +
      '      <div class="list-item"><span class="muted small" style="width:80px">存储状态</span>' + (S.storageOK ? '<span class="tag ok">本地存储正常</span>' : '<span class="tag danger">本地存储不可用（隐私模式？）</span>') + '</div>' +
      '      <div class="list-item"><span class="muted small" style="width:80px">数据版本</span><span class="mono small">' + S.state.version + '</span></div>' +
      '    </div>' +
      '  </div>' +
      '</div>';
  }

  function bindProfile() {
    $('#switchUser').addEventListener('click', switchUserModal);
    $('#saveSettings').addEventListener('click', function () {
      var goal = Number($('#goalInput').value) || 20;
      S.setSettings({
        dailyGoal: Math.max(5, Math.min(200, goal)),
        instantJudge: $('#pfInstant').checked,
        shuffleOptions: $('#pfShuffle').checked
      });
      UI.toast('设置已保存', 'ok');
      render();
    });
    $('#exportData').addEventListener('click', function () {
      UI.download('汇川刷题数据备份_' + S.todayKey() + '.json', JSON.stringify(S.exportAll(), null, 2), 'application/json');
      UI.toast('数据已导出', 'ok');
    });
    $('#importData').addEventListener('click', function () { $('#importFile').click(); });
    $('#importFile').addEventListener('change', function () {
      var f = this.files[0];
      if (!f) return;
      UI.readFile(f).then(function (txt) {
        try {
          S.importAll(JSON.parse(txt), false);
          UI.toast('数据导入成功', 'ok');
          render();
        } catch (e) { UI.toast('导入失败：' + e.message, 'err'); }
      });
      this.value = '';
    });
    $('#resetProgress').addEventListener('click', function () {
      UI.confirm('将清空个人练习记录、错题本与考试记录（题库改动保留），确定吗？', { danger: true }).then(function (ok) {
        if (!ok) return;
        S.resetProgress();
        UI.toast('学习记录已清空', 'ok');
        render();
      });
    });
    $('#resetAll').addEventListener('click', function () {
      UI.confirm('将恢复出厂状态：清空全部本地数据（含题库改动与账号），确定吗？', { danger: true }).then(function (ok) {
        if (!ok) return;
        S.resetAll();
        location.reload();
      });
    });
  }

  /* ======================================================================
     十三、全局事件与启动
     ====================================================================== */

  function bindCommon() {
    var qp = $('[data-act="quick-practice"]');
    if (qp) qp.addEventListener('click', function () { startPractice({ mode: 'random', count: 20 }); });
    var wp = $('[data-act="weak-practice"]');
    if (wp) wp.addEventListener('click', function () { startPractice({ mode: 'weak', count: 20, categories: [], difficulties: [], types: [] }); });
    $$('[data-open-q]').forEach(function (el) {
      el.addEventListener('click', function () { showQuestionModal(el.getAttribute('data-open-q')); });
    });

    switch (App.route) {
      case 'practice': App.practice ? bindPracticeRunning() : bindPracticeSetup(); break;
      case 'kb': if (global.IqKB) global.IqKB.bind(); break;
      case 'wrong': bindWrong(); break;
      case 'fav': bindFav(); break;
      case 'exam': App.exam ? bindExamRunning() : bindExam(); break;
      case 'tasks': bindExam(); break;
      case 'stats': bindStats(); break;
      case 'profile': bindProfile(); break;
      case 'result': bindResult(); break;
      default: break;
    }
  }

  /* ======================================================================
     十三、键盘快捷键（刷题/考试效率）
       1~5 选项 · Enter 确认/下一题 · ← → 切题 · F 收藏 · M 标记疑问
     ====================================================================== */
  function bindKeyboard() {
    if (App._kbBound) return;
    App._kbBound = true;

    document.addEventListener('keydown', function (ev) {
      var tag = (ev.target && ev.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || ev.target.isContentEditable) return;
      if (ev.ctrlKey || ev.altKey || ev.metaKey) return;
      if (document.querySelector('.modal-mask')) return;      // 弹窗打开时不拦截（Esc 由弹窗处理）

      var p = App.practice, e = App.exam;
      if (!p && !e) return;
      var cur = p ? p.paper[p.idx] : e.paper[e.idx];
      if (!cur) return;
      var revealed = p ? !!p.revealed[cur.id] : false;

      // 1~5：选择选项（考试或未判题的练习）
      if (/^[1-5]$/.test(ev.key) && (!revealed || e)) {
        var opts = document.querySelectorAll('.opt');
        var el = opts[Number(ev.key) - 1];
        if (el) { el.click(); ev.preventDefault(); }
        return;
      }
      // F：收藏
      if (ev.key === 'f' || ev.key === 'F') {
        var favBtn = document.querySelector('[data-fav]');
        if (favBtn) { favBtn.click(); ev.preventDefault(); }
        return;
      }
      // M：标记疑问（仅考试）
      if ((ev.key === 'm' || ev.key === 'M') && e) {
        var mark = document.getElementById('eMark');
        if (mark) { mark.click(); ev.preventDefault(); }
        return;
      }
      // Enter：优先确认答案，其次进入下一题
      if (ev.key === 'Enter') {
        var confirmBtn = document.getElementById('multiConfirm')
          || document.getElementById('singleConfirm')
          || document.getElementById('subjSubmit');
        if (confirmBtn) { confirmBtn.click(); ev.preventDefault(); return; }
        var next = document.getElementById('pNext') || document.getElementById('eNext');
        if (next && !next.disabled) { next.click(); ev.preventDefault(); }
        return;
      }
      // ← →：切题
      if (ev.key === 'ArrowRight') {
        var n = document.getElementById('pNext') || document.getElementById('eNext');
        if (n && !n.disabled) { n.click(); ev.preventDefault(); }
        return;
      }
      if (ev.key === 'ArrowLeft') {
        var pv = document.getElementById('pPrev') || document.getElementById('ePrev');
        if (pv && !pv.disabled) { pv.click(); ev.preventDefault(); }
      }
    });
  }

  function boot() {
    // 路由、离开保护与快捷键必须无条件注册（登录页同样需要响应 hash 变化）
    window.addEventListener('hashchange', render);
    bindKeyboard();
    window.addEventListener('beforeunload', function (ev) {
      if (App.exam) { ev.preventDefault(); ev.returnValue = '考试尚未交卷，离开将丢失本次作答。'; return ev.returnValue; }
    });

    if (!S.user()) { renderLogin(); return; }

    // API 模式：先向后端确认会话并预加载数据，再渲染
    if (typeof S.isRemote === 'function' && S.isRemote()) {
      S.init().then(function () {
        parseHash();
        render();
        checkDrafts();
      }).catch(function (e) {
        console.warn('[boot] 会话恢复失败：', e.message);
        try { S.logout(); } catch (err) { /* ignore */ }
        renderLogin();
      });
      return;
    }

    parseHash();
    render();
    checkDrafts();
  }

  App._render = render;
  App._bindCommon = bindCommon;

  // 渲染后统一绑定事件
  var origRender = render;
  render = function () {
    origRender();
    if (!App.exam && App.timer) { clearInterval(App.timer); App.timer = null; }
    bindCommon();
  };

  global.IqApp = App;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
