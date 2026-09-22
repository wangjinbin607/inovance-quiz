/* ==========================================================================
   汇川产品刷题工具 · UI 通用组件与图表 (ui.js)
   纯原生实现：DOM 工具、图标、Toast、模态框、SVG 图表、CSV 导出
   ========================================================================== */
(function (global) {
  'use strict';

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /** HTML 转义，防注入 */
  function esc(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function icon(name, size) {
    var p = ICONS[name] || ICONS.dot;
    var s = size || 16;
    return '<svg class="ico" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" aria-hidden="true">' + p + '</svg>';
  }

  var ICONS = {
    dot: '<circle cx="12" cy="12" r="4"/>',
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2z"/><path d="M8 3v18"/>',
    edit: '<path d="M4 20h4l10-10-4-4L4 16z"/><path d="M14 6l4 4"/>',
    wrong: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>',
    exam: '<path d="M7 3h10v4H7z"/><path d="M5 5h2v2h10V5h2v16H5z"/><path d="M9 12h6M9 16h4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    star: '<path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9.1 9z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/><path d="M17 11a3 3 0 1 0 0-6"/><path d="M18 20c0-2-.6-3.6-1.8-4.6"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    upload: '<path d="M12 16V4"/><path d="M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    download: '<path d="M12 4v12"/><path d="M7 11l5 5 5-5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    play: '<path d="M7 4l12 8-12 8z"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v5h-5"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    flag: '<path d="M5 3v18"/><path d="M5 4h12l-2 4 2 4H5z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 14h10l1-14"/>',
    eye: '<path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/>',
    link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    logout: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 8l-4 4 4 4"/><path d="M6 12h9"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 8h.01"/>',
    zap: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'
  };

  /* ---------------- Toast ---------------- */
  function toast(msg, type, ms) {
    var box = $('.toasts');
    if (!box) {
      box = document.createElement('div');
      box.className = 'toasts';
      document.body.appendChild(box);
    }
    var t = document.createElement('div');
    t.className = 'toast' + (type ? ' ' + type : '');
    t.textContent = msg;
    box.appendChild(t);
    setTimeout(function () {
      t.style.transition = 'opacity .25s, transform .25s';
      t.style.opacity = '0';
      t.style.transform = 'translateX(20px)';
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 260);
    }, ms || 2400);
  }

  /* ---------------- 模态框 ---------------- */
  function modal(opts) {
    opts = opts || {};
    var mask = document.createElement('div');
    mask.className = 'modal-mask';
    mask.innerHTML =
      '<div class="modal' + (opts.wide ? ' wide' : '') + '" role="dialog" aria-modal="true">' +
      modalHtml(opts) +
      '</div>';
    document.body.appendChild(mask);

    function close() {
      if (!mask.parentNode) return;
      mask.parentNode.removeChild(mask);
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);

    mask.addEventListener('click', function (e) {
      if (e.target === mask && opts.maskClosable !== false) close();
    });
    $$('[data-close]', mask).forEach(function (b) { b.addEventListener('click', close); });

    var ret = { el: mask, body: $('.modal-body', mask), close: close };
    if (typeof opts.onMount === 'function') opts.onMount(ret);
    return ret;

    function modalHtml(o) {
      var h = '';
      h += '<div class="modal-head"><h3>' + esc(o.title || '') + '</h3><div class="spacer"></div>' +
        '<button class="btn ghost" data-close title="关闭">' + icon('close', 18) + '</button></div>';
      h += '<div class="modal-body">' + (o.html || '') + '</div>';
      if (o.footerHtml) h += '<div class="modal-foot">' + o.footerHtml + '</div>';
      return h;
    }
  }

  function confirmDialog(msg, opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      var m = modal({
        title: opts.title || '请确认',
        html: '<p style="margin:0;font-size:14px;line-height:1.7">' + esc(msg) + '</p>',
        footerHtml: '<button class="btn" data-close>取消</button>' +
          '<button class="btn ' + (opts.danger ? 'danger' : 'primary') + '" data-ok>确定</button>',
        onMount: function (m) {
          $('[data-ok]', m.el).addEventListener('click', function () { m.close(); resolve(true); });
          m.el.addEventListener('click', function (e) {
            if (e.target === m.el && opts.maskClosable !== false) resolve(false);
          });
          $$('[data-close]', m.el).forEach(function (b) {
            b.addEventListener('click', function () { resolve(false); });
          });
        }
      });
    });
  }

  /* ---------------- 格式化 ---------------- */
  function fmtDate(iso, withTime) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '—';
    var p = function (n) { return n < 10 ? '0' + n : '' + n; };
    var s = d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
    if (withTime) s += ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
    return s;
  }

  function fmtDuration(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ' 分 ' + (s < 10 ? '0' : '') + s + ' 秒';
  }

  function fmtClock(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    var p = function (n) { return n < 10 ? '0' + n : '' + n; };
    return (h > 0 ? p(h) + ':' : '') + p(m) + ':' + p(s);
  }

  function download(filename, content, mime) {
    var blob = new Blob(['\ufeff' + content], { type: (mime || 'text/plain') + ';charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
  }

  function toCSV(rows) {
    return rows.map(function (row) {
      return row.map(function (c) {
        var s = c == null ? '' : String(c);
        return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(',');
    }).join('\r\n');
  }

  function readFile(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { resolve(r.result); };
      r.onerror = function () { reject(new Error('文件读取失败')); };
      r.readAsText(file, 'utf-8');
    });
  }

  /* ---------------- SVG 图表 ---------------- */

  /** 环形进度 */
  function donut(percent, opts) {
    opts = opts || {};
    var size = opts.size || 132, sw = opts.stroke || 12;
    var r = (size - sw) / 2, c = 2 * Math.PI * r;
    var p = Math.max(0, Math.min(100, percent == null ? 0 : percent));
    var off = c * (1 - p / 100);
    var color = opts.color || (p >= 80 ? '#12996b' : p >= 60 ? '#0b5cab' : p >= 40 ? '#d98412' : '#d93a3f');
    return '' +
      '<svg class="chart" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '"' +
      ' style="max-width:' + size + 'px;height:auto;flex:none">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="#eef1f6" stroke-width="' + sw + '"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="' + sw + '"' +
      ' stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"' +
      ' transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')"/>' +
      '<text x="' + size / 2 + '" y="' + (size / 2 + 2) + '" text-anchor="middle" dominant-baseline="middle"' +
      ' style="font-size:' + (size / 5) + 'px;font-weight:700;fill:' + color + '">' + (percent == null ? '—' : p + '%') + '</text>' +
      '<text x="' + size / 2 + '" y="' + (size / 2 + size / 6.4) + '" text-anchor="middle" dominant-baseline="middle"' +
      ' style="font-size:11px;fill:#7a869a">' + esc(opts.label || '') + '</text>' +
      '</svg>';
  }

  /** 分级柱状统计：items = [{label, value, color}] */
  function barChart(items, opts) {
    opts = opts || {};
    var w = opts.width || 560, h = opts.height || 200;
    var padL = 34, padR = 12, padT = 14, padB = 30;
    var max = Math.max.apply(null, items.map(function (i) { return i.value; }).concat([1]));
    var innerW = w - padL - padR, innerH = h - padT - padB;
    var bw = innerW / Math.max(1, items.length);
    var barW = Math.min(opts.barWidth || 42, bw * 0.6);
    var s = '<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid meet"' +
      ' style="max-height:' + h + 'px;max-width:' + Math.round(w * 1.5) + 'px">';
    for (var g = 0; g <= 4; g++) {
      var y = padT + innerH * g / 4;
      s += '<line class="grid-line" x1="' + padL + '" y1="' + y + '" x2="' + (w - padR) + '" y2="' + y + '"/>';
      s += '<text x="' + (padL - 6) + '" y="' + (y + 3.5) + '" text-anchor="end">' + Math.round(max * (4 - g) / 4) + '</text>';
    }
    items.forEach(function (it, i) {
      var bh = innerH * (it.value / max);
      var x = padL + bw * i + (bw - barW) / 2;
      var y = padT + innerH - bh;
      s += '<rect x="' + x + '" y="' + y + '" width="' + barW + '" height="' + Math.max(bh, it.value > 0 ? 2 : 0) + '" rx="4" fill="' + (it.color || '#0b5cab') + '"/>';
      if (it.value > 0) {
        s += '<text x="' + (x + barW / 2) + '" y="' + (y - 5) + '" text-anchor="middle" style="fill:#4a566b;font-weight:600">' + it.value + '</text>';
      }
      s += '<text class="lbl" x="' + (x + barW / 2) + '" y="' + (h - padB + 16) + '" text-anchor="middle">' + esc(it.label) + '</text>';
    });
    s += '</svg>';
    return s;
  }

  /** 正确率雷达图：axes = [{label, value(0-100)|null}] */
  function radar(axes, opts) {
    opts = opts || {};
    var size = opts.size || 260;
    var cx = size / 2, cy = size / 2 + 4, R = size / 2 - 42;
    var n = axes.length || 1;
    function pt(i, ratio) {
      var ang = -Math.PI / 2 + i * 2 * Math.PI / n;
      return [cx + Math.cos(ang) * R * ratio, cy + Math.sin(ang) * R * ratio];
    }
    var s = '<svg class="chart" viewBox="0 0 ' + size + ' ' + (size + 8) + '" preserveAspectRatio="xMidYMid meet"' +
      ' style="max-height:' + (size + 8) + 'px;max-width:' + (size + 60) + 'px">';
    [0.25, 0.5, 0.75, 1].forEach(function (r) {
      var pts = [];
      for (var i = 0; i < n; i++) pts.push(pt(i, r).map(function (v) { return v.toFixed(1); }).join(','));
      s += '<polygon points="' + pts.join(' ') + '" fill="none" stroke="#eef2f8"/>';
    });
    for (var i = 0; i < n; i++) {
      var p = pt(i, 1);
      s += '<line class="grid-line" x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
    }
    var poly = [], draws = [];
    axes.forEach(function (a, i) {
      var ratio = a.value == null ? 0 : Math.max(0.02, Math.min(1, a.value / 100));
      var p = pt(i, ratio);
      poly.push(p[0].toFixed(1) + ',' + p[1].toFixed(1));
      if (a.value != null) draws.push('<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.4" fill="' + (opts.color || '#1a72cf') + '"/>');
      var lp = pt(i, 1.19);
      s += '<text class="lbl" x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 4).toFixed(1) + '" text-anchor="middle">' + esc(a.label) + '</text>';
    });
    s += '<polygon points="' + poly.join(' ') + '" fill="rgba(26,114,207,.22)" stroke="' + (opts.color || '#1a72cf') + '" stroke-width="2"/>';
    s += draws.join('');
    s += '</svg>';
    return s;
  }

  /** 折线/柱混合趋势图：points = [{label, right, wrong}] */
  function trendChart(points, opts) {
    opts = opts || {};
    var w = opts.width || 620, h = opts.height || 210;
    var padL = 30, padR = 12, padT = 14, padB = 28;
    var innerW = w - padL - padR, innerH = h - padT - padB;
    var max = Math.max.apply(null, points.map(function (p) { return p.total; }).concat([opts.minMax || 5]));
    var step = innerW / Math.max(1, points.length - 1);
    var s = '<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid meet"' +
      ' style="max-height:' + h + 'px;max-width:' + Math.round(w * 1.5) + 'px">';
    for (var g = 0; g <= 4; g++) {
      var y = padT + innerH * g / 4;
      s += '<line class="grid-line" x1="' + padL + '" y1="' + y + '" x2="' + (w - padR) + '" y2="' + y + '"/>';
      s += '<text x="' + (padL - 6) + '" y="' + (y + 3.5) + '" text-anchor="end">' + Math.round(max * (4 - g) / 4) + '</text>';
    }
    var bw = Math.min(16, step * 0.5);
    points.forEach(function (p, i) {
      var x = padL + step * i;
      var bh = innerH * (p.total / max);
      var by = padT + innerH - bh;
      if (p.total > 0) {
        var rh = innerH * (p.right / max);
        s += '<rect x="' + (x - bw / 2) + '" y="' + (padT + innerH - rh) + '" width="' + bw + '" height="' + rh + '" rx="2" fill="#12996b"/>';
        if (p.wrong > 0) {
          s += '<rect x="' + (x - bw / 2) + '" y="' + by + '" width="' + bw + '" height="' + (bh - rh) + '" rx="2" fill="#f0a2a4"/>';
        }
      }
      if (i % opts.labelEvery === 1 || points.length <= 8 || i === points.length - 1) {
        s += '<text x="' + x + '" y="' + (h - padB + 15) + '" text-anchor="middle">' + esc(p.label) + '</text>';
      }
    });
    s += '</svg>';
    return s;
  }

  /** 横向占比条 */
  function hbars(items, opts) {
    opts = opts || {};
    var max = Math.max.apply(null, items.map(function (i) { return i.value; }).concat([1]));
    return '<div class="list" style="gap:8px">' + items.map(function (it) {
      var pct = Math.round(it.value / max * 100);
      return '<div>' +
        '<div class="flex jcb small" style="margin-bottom:3px"><span>' + esc(it.label) + '</span>' +
        '<span class="muted">' + it.value + (it.suffix || '') + '</span></div>' +
        '<div class="bar thin"><i style="width:' + pct + '%;background:' + (it.color || '#0b5cab') + '"></i></div>' +
        '</div>';
    }).join('') + '</div>';
  }

  /* ---------------- 主题（浅色 / 深色） ---------------- */
  var THEME_KEY = 'iqz.theme';

  function isDark() { return document.body.classList.contains('dark'); }

  function setTheme(mode) {
    var dark = mode === 'dark';
    document.body.classList.toggle('dark', dark);
    try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch (e) { /* 忽略 */ }
    return dark;
  }

  function toggleTheme() { return setTheme(isDark() ? 'light' : 'dark'); }

  function initTheme() {
    try {
      if (localStorage.getItem(THEME_KEY) === 'dark') document.body.classList.add('dark');
    } catch (e) { /* 忽略 */ }
  }

  function themeButtonHtml() {
    return '<button class="iconbtn" id="themeToggle" title="切换深色/浅色模式">' +
      (isDark()
        ? '<svg class="ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>'
        : '<svg class="ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>') +
      '</button>';
  }

  /** 绑定主题按钮（页面渲染后调用） */
  function bindThemeButton(root) {
    var btn = (root || document).querySelector('#themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      toggleTheme();
      var b = document.querySelector('#themeToggle');
      if (b) b.outerHTML = themeButtonHtml();
      bindThemeButton(root);
    });
  }

  initTheme();

  global.IqUI = {
    $: $, $$: $$, esc: esc, icon: icon, ICONS: ICONS,
    toast: toast, modal: modal, confirm: confirmDialog,
    fmtDate: fmtDate, fmtDuration: fmtDuration, fmtClock: fmtClock,
    download: download, toCSV: toCSV, readFile: readFile,
    donut: donut, barChart: barChart, radar: radar, trendChart: trendChart, hbars: hbars,
    isDark: isDark, setTheme: setTheme, toggleTheme: toggleTheme,
    themeButtonHtml: themeButtonHtml, bindThemeButton: bindThemeButton
  };
})(window);
