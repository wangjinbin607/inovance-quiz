/**
 * 知识库（V2.0）用户端页面
 *
 * 依赖：IqStore（S）、IqBank（Bank）、IqUI（UI）
 * 挂载：window.IqKB
 * 路由（由 app.js 解析后调用 IqKB.view(sub, arg)）：
 *   #/kb              → 列表 + 检索
 *   #/kb/no/<编号>    → 知识详情
 *   #/kb/route        → 新人学习路线
 *   #/kb/mine         → 我的学习
 */
(function (global) {
  'use strict';

  var S = global.IqStore;
  var Bank = global.IqBank;
  var UI = global.IqUI;

  var CAT_ORDER = ['servo', 'inverter', 'plc', 'hmi', 'io'];

  /** 列表页筛选状态（跨渲染保留） */
  var filters = { keyword: '', category: '', topic: '', tag: '', level: '' };
  /** 阅读计时上报的定时器 */
  var readTimer = null;

  /* ---------------- 工具 ---------------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function icon(name, size) {
    return (UI && UI.icon) ? UI.icon(name, size || 16) : '';
  }

  function catName(key) {
    var c = S.CATEGORIES.filter(function (x) { return x.key === key; })[0];
    return c ? c.name : key;
  }

  function catShort(key) {
    var c = S.CATEGORIES.filter(function (x) { return x.key === key; })[0];
    return c ? c.short : key;
  }

  function catColor(key) {
    var c = S.CATEGORIES.filter(function (x) { return x.key === key; })[0];
    return c ? c.color : '#7a869a';
  }

  function topicName(key) {
    var t = (S.KB_TOPICS || []).filter(function (x) { return x.key === key; })[0];
    return t ? t.name : key;
  }

  function topicIcon(key) {
    var t = (S.KB_TOPICS || []).filter(function (x) { return x.key === key; })[0];
    return t ? t.icon : 'book';
  }

  function secName(sec) {
    var s = (S.SECURITY || []).filter(function (x) { return x.key === sec; })[0];
    return s ? s.name : '公开';
  }

  function secTag(sec) {
    if (!sec || sec === 'public') return '<span class="tag ok">公开</span>';
    if (sec === 'internal') return '<span class="tag warn">内部</span>';
    return '<span class="tag danger">涉密</span>';
  }

  function levelName(lv) {
    return ({ 1: '入门', 2: '进阶', 3: '深入' })[Number(lv)] || '入门';
  }

  function fmtSeconds(sec) {
    sec = Number(sec) || 0;
    if (sec < 60) return sec + ' 秒';
    var m = Math.floor(sec / 60);
    if (m < 60) return m + ' 分钟';
    return Math.floor(m / 60) + ' 小时 ' + (m % 60) + ' 分';
  }

  /** 极简行内标记：**加粗** 与 `代码` */
  function inlineMd(t) {
    return esc(t)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  /** 阅读进度记录：已读 / 学完 */
  function recOf(no) {
    return (S.state.knowledge || {})[no] || null;
  }

  /* ---------------- 专属样式（注入一次） ---------------- */

  function ensureStyle() {
    if (document.getElementById('kbStyle')) return;
    var css = [
      '.kb-filter{display:flex;flex-wrap:wrap;gap:6px;align-items:center}',
      '.kb-search{display:flex;gap:8px;margin-bottom:12px}',
      '.kb-search input{flex:1}',
      '.kb-cards{display:grid;gap:10px}',
      '.kb-card{position:relative;display:block;border:1px solid var(--line-2);border-radius:10px;padding:14px 16px;background:var(--card);text-decoration:none;color:inherit;transition:border-color .15s,transform .15s}',
      '.kb-card h4{padding-right:118px}',
      '.kb-card-actions{position:absolute;right:12px;top:12px;display:flex;gap:6px}',
      '.kb-act{font-size:11.5px;border:1px solid var(--line-2);border-radius:6px;padding:2px 8px;color:var(--text-2);cursor:pointer;background:var(--card);user-select:none}',
      '.kb-act:hover{border-color:var(--brand);color:var(--brand)}',
      '.kb-card:hover{border-color:var(--brand);transform:translateY(-1px)}',
      '.kb-card h4{margin:0 0 6px;font-size:15px;line-height:1.45}',
      '.kb-card .kb-sum{margin:0 0 8px;color:var(--text-2);font-size:13px;line-height:1.6}',
      '.kb-card .kb-meta{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:12px;color:var(--text-3)}',
      '.kb-dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:4px}',
      '.kb-layout{display:grid;grid-template-columns:1.5fr .7fr;gap:16px;align-items:start}',
      '@media(max-width:900px){.kb-layout{grid-template-columns:1fr}}',
      '.kb-h{font-size:16px;margin:20px 0 8px;padding-left:9px;border-left:3px solid var(--brand)}',
      '.kb-p{margin:8px 0;line-height:1.85;text-align:left}',
      '.kb-list{margin:8px 0;padding-left:22px;line-height:1.85}',
      '.kb-steps{margin:10px 0;padding-left:24px;line-height:1.9}',
      '.kb-steps li{margin-bottom:4px}',
      '.kb-table-wrap{overflow-x:auto;margin:10px 0}',
      '.kb-table{border-collapse:collapse;width:100%;font-size:13px;min-width:420px}',
      '.kb-table th,.kb-table td{border:1px solid var(--line-2);padding:7px 9px;text-align:left;vertical-align:top}',
      '.kb-table th{background:var(--bg-2);font-weight:600}',
      '.kb-tip{margin:10px 0;padding:10px 12px;border-radius:8px;font-size:13px;line-height:1.75;border-left:3px solid var(--brand);background:var(--bg-2);text-align:left}',
      '.kb-tip-warn{border-left-color:#d98412}',
      '.kb-tip-danger{border-left-color:#d93a3f}',
      '.kb-faq{margin:10px 0;border:1px solid var(--line-2);border-radius:8px;overflow:hidden}',
      '.kb-faq-q{padding:9px 12px;background:var(--bg-2);font-weight:600;font-size:13.5px;text-align:left}',
      '.kb-faq-a{padding:10px 12px;font-size:13.5px;line-height:1.8;text-align:left}',
      '.kb-script{margin:12px 0;border:1px solid var(--line-2);border-radius:8px;overflow:hidden}',
      '.kb-script-scene{padding:8px 12px;background:var(--bg-2);font-size:13px;color:var(--text-2);text-align:left}',
      '.kb-script-bad{padding:10px 12px;font-size:13.5px;line-height:1.8;border-top:1px solid var(--line-2);background:rgba(217,58,63,.06);text-align:left}',
      '.kb-script-good{padding:10px 12px;font-size:13.5px;line-height:1.8;border-top:1px solid var(--line-2);background:rgba(18,153,107,.07);text-align:left}',
      '.kb-script-bad b{color:#d93a3f;display:block;margin-bottom:3px}',
      '.kb-script-good b{color:#12996b;display:block;margin-bottom:3px}',
      '.kb-code{margin:10px 0;padding:12px;background:#1e2430;color:#e6edf3;border-radius:8px;overflow:auto;font-size:12.5px;line-height:1.7;text-align:left}',
      '.kb-img{margin:12px 0;text-align:center}',
      '.kb-img img{max-width:100%;border-radius:8px;border:1px solid var(--line-2)}',
      '.kb-img figcaption{font-size:12px;color:var(--text-3);margin-top:6px}',
      '.kb-content{line-height:1.85}',
      '.kb-toc{position:sticky;top:12px}',
      '.kb-toc a{display:block;padding:3px 0;font-size:12.5px;color:var(--text-2);text-decoration:none}',
      '.kb-toc a:hover{color:var(--brand)}',
      '.kb-rel{display:flex;flex-direction:column;gap:8px}',
      '.kb-rel-item{border:1px solid var(--line-2);border-radius:8px;padding:9px 11px;font-size:13px;line-height:1.6;cursor:pointer}',
      '.kb-rel-item:hover{border-color:var(--brand)}',
      '.kb-stage{margin-bottom:14px}',
      '.kb-stage-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}',
      '.kb-stage-bar{height:6px;border-radius:3px;background:var(--line-2);overflow:hidden;flex:1}',
      '.kb-stage-bar i{display:block;height:100%;background:var(--brand)}',
      '.kb-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px dashed var(--line-2)}',
      '.kb-row:last-child{border-bottom:none}',
      '.kb-row .kb-row-main{flex:1;min-width:0}',
      '.kb-row .kb-row-title{font-size:13.5px;line-height:1.5}',
      '.kb-row .kb-row-sub{font-size:12px;color:var(--text-3);margin-top:2px}',
      '.kb-badge-ok{color:#12996b;font-size:12px}',
      '.kb-sec-title{font-size:13px;font-weight:600;margin:0 0 8px}'
    ].join('\n');
    var el = document.createElement('style');
    el.id = 'kbStyle';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ---------------- 知识文档（Word 导出 / 打印） ---------------- */

  /** 打印与 PDF 导出共用一套版式（MD3 配色用绝对色值，不依赖 CSS 变量） */
  var KB_DOC_CSS = [
    '@page{size:A4;margin:16mm 14mm 18mm}',
    'html,body{margin:0;padding:0;background:#fff}',
    /* 让提示框、话术对比、表头等浅色底纹在导出的 PDF 中保留，不被浏览器省墨模式抹掉 */
    '*{-webkit-print-color-adjust:exact;print-color-adjust:exact}',
    'body{font-family:"宋体",SimSun,serif;font-size:10.5pt;line-height:1.75;color:#111}',
    '.kbdoc{max-width:100%}',
    '.kbdoc-title{font-family:"黑体",SimHei,sans-serif;font-size:17pt;font-weight:bold;text-align:center;margin:0 0 6pt}',
    '.kbdoc-sub{text-align:center;font-size:9pt;color:#555;margin:0 0 12pt}',
    '.kbdoc-info{width:100%;border-collapse:collapse;margin:0 0 12pt;font-size:9.5pt}',
    '.kbdoc-info td{padding:3pt 8pt 3pt 0;border-bottom:1px solid #ddd;text-align:left}',
    '.kbdoc-summary{border-left:3pt solid #0b5cab;background:#f5f7fa;padding:8pt 10pt;margin:0 0 14pt;font-size:10pt;text-align:left}',
    '.kbdoc .kb-h{font-family:"黑体",SimHei,sans-serif;font-size:12pt;font-weight:bold;margin:14pt 0 6pt;padding-left:6pt;border-left:3pt solid #0b5cab;page-break-after:avoid;text-align:left}',
    '.kbdoc .kb-p{margin:6pt 0;text-align:left}',
    '.kbdoc .kb-list{margin:6pt 0;padding-left:20pt;text-align:left}',
    '.kbdoc .kb-steps{margin:6pt 0;padding-left:22pt;text-align:left}',
    '.kbdoc .kb-table-wrap{margin:8pt 0}',
    '.kbdoc .kb-table{border-collapse:collapse;width:100%;font-size:9.5pt}',
    '.kbdoc .kb-table th,.kbdoc .kb-table td{border:1px solid #999;padding:4pt 6pt;text-align:left;vertical-align:top}',
    '.kbdoc .kb-table th{background:#eef2f7;font-weight:bold}',
    '.kbdoc .kb-tip{border-left:3pt solid #0b5cab;background:#f5f7fa;padding:6pt 9pt;margin:8pt 0;font-size:10pt;text-align:left}',
    '.kbdoc .kb-tip-warn{border-left-color:#d98412}',
    '.kbdoc .kb-tip-danger{border-left-color:#d93a3f}',
    '.kbdoc .kb-faq{margin:8pt 0;border:1px solid #ccc;page-break-inside:avoid}',
    '.kbdoc .kb-faq-q{background:#f0f3f7;padding:5pt 8pt;font-weight:bold;font-size:10pt;text-align:left}',
    '.kbdoc .kb-faq-a{padding:6pt 8pt;font-size:10pt;text-align:left}',
    '.kbdoc .kb-script{margin:8pt 0;border:1px solid #ccc;page-break-inside:avoid}',
    '.kbdoc .kb-script-scene{background:#f0f3f7;padding:5pt 8pt;font-size:9.5pt;color:#333;text-align:left}',
    '.kbdoc .kb-script-bad{padding:6pt 8pt;font-size:10pt;background:#fdf2f2;text-align:left}',
    '.kbdoc .kb-script-good{padding:6pt 8pt;font-size:10pt;background:#f1faf6;text-align:left}',
    '.kbdoc .kb-script-bad b{color:#b3272b;display:block;margin-bottom:2pt}',
    '.kbdoc .kb-script-good b{color:#0f7a55;display:block;margin-bottom:2pt}',
    '.kbdoc .kb-code{background:#f4f6f9;border:1px solid #ddd;padding:7pt;font-family:Consolas,"Courier New",monospace;font-size:9pt;white-space:pre-wrap;margin:8pt 0;text-align:left}',
    '.kbdoc .kb-img{margin:8pt 0;text-align:center}',
    '.kbdoc .kb-img img{max-width:100%}',
    '.kbdoc .kb-img figcaption{font-size:8.5pt;color:#666;margin-top:3pt}',
    '.kbdoc code{font-family:Consolas,"Courier New",monospace;background:#f0f3f7;padding:0 2pt}',
    '.kbdoc .q-sec{font-family:"黑体",SimHei,sans-serif;font-size:13pt;font-weight:bold;margin:18pt 0 6pt;border-bottom:1pt solid #333;padding-bottom:3pt;page-break-after:avoid;text-align:left}',
    '.kbdoc .q-item{margin:8pt 0;page-break-inside:avoid;text-align:left}',
    '.kbdoc .q-no{font-weight:bold}',
    '.kbdoc .q-meta{font-size:9pt;color:#666}',
    '.kbdoc .q-stem{margin:2pt 0;text-align:left}',
    '.kbdoc .q-opts{margin:2pt 0;font-size:10pt;text-align:left}',
    '.kbdoc .q-ans{color:#0b5cab;font-weight:bold;text-align:left}',
    '.kbdoc .q-exp{color:#444;font-size:9.5pt;text-align:left}',
    '.kbdoc-tags span{display:inline-block;border:1px solid #bbb;padding:0 5pt;margin:0 4pt 4pt 0;font-size:9pt}',
    '.kbdoc-foot{margin-top:18pt;padding-top:8pt;border-top:1px solid #ddd;font-size:8.5pt;color:#777;text-align:center}'
  ].join('\n');

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function fmtNow() {
    var d = new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate())
      + ' ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes());
  }

  /** 题目的标准答案文本（复用试卷模块，缺失时降级） */
  function answerOf(q) {
    if (global.IqPaper && global.IqPaper.answerText) return global.IqPaper.answerText(q);
    if (q.type === 'judge') return (Array.isArray(q.answer) ? q.answer[0] : q.answer) === 'T' ? '正确' : '错误';
    if (Array.isArray(q.answer)) return q.answer.join('、');
    return String(q.answer == null ? '' : q.answer);
  }

  /**
   * 知识条目 → 独立文档 HTML（Word 导出与打印共用）
   * @param {Object} item 知识条目
   * @param {Object} opts { withAnswer: 是否附关联题答案与解析，默认 true }
   */
  function kbDocHtml(item, opts) {
    opts = opts || {};
    var withAnswer = opts.withAnswer !== false;
    var s = [];
    s.push('<html xmlns:o="urn:schemas-microsoft-com:office:office" '
      + 'xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">');
    s.push('<head><meta charset="utf-8"><title>' + esc(kbFileBase(item)) + '</title>');
    s.push('<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom>'
      + '<w:DoNotOptimizeForBrowser/></w:WordDocument></xml><![endif]-->');
    s.push('<style>' + KB_DOC_CSS + '</style></head><body>');
    s.push('<div class="kbdoc">');
    s.push('<div class="kbdoc-title">' + esc(item.title) + '</div>');
    s.push('<div class="kbdoc-sub">汇川产品知识库 ｜ ' + esc(catName(item.category)) + ' · '
      + esc(topicName(item.topic)) + ' ｜ 知识编号 ' + esc(item.id) + '</div>');
    s.push('<table class="kbdoc-info"><tr>'
      + '<td>难度：' + esc(levelName(item.level)) + '</td>'
      + '<td>阅读时长：约 ' + (item.readMinutes || 5) + ' 分钟</td>'
      + '<td>密级：' + esc(secName(item.security)) + '</td>'
      + '<td>更新时间：' + esc(item.updatedAt || '—') + '</td>'
      + '</tr></table>');
    if (item.summary) s.push('<div class="kbdoc-summary">' + esc(item.summary) + '</div>');
    s.push(renderBlocks(item.content));

    var relIds = (item.relatedQuestions || []).filter(function (qid) {
      var q = Bank.byId(qid);
      return q && S.canSeeSecurity(q.security || 'public');
    });
    if (relIds.length) {
      s.push('<div class="q-sec">关联练习题（' + relIds.length + ' 题'
        + (withAnswer ? ' · 含参考答案' : '') + '）</div>');
      relIds.forEach(function (qid, i) {
        var q = Bank.byId(qid);
        s.push('<div class="q-item"><span class="q-no">' + (i + 1) + '．' + esc(qid) + '</span> '
          + '<span class="q-meta">［' + esc(typeName(q.type)) + ' · ' + esc(levelName(q.difficulty)) + '］</span>');
        s.push('<div class="q-stem">' + esc(q.stem) + '</div>');
        if (q.options) {
          s.push('<div class="q-opts">' + Object.keys(q.options).sort().map(function (k) {
            return esc(k) + '．' + esc(q.options[k]);
          }).join('　　') + '</div>');
        }
        if (withAnswer) {
          s.push('<div class="q-ans">参考答案：' + esc(answerOf(q)) + '</div>');
          if (q.analysis) s.push('<div class="q-exp">解析：' + esc(q.analysis) + '</div>');
        }
        s.push('</div>');
      });
    }

    var src = item.source || {};
    if (src.title || (item.tags || []).length) {
      s.push('<div class="q-sec">资料溯源与标签</div>');
      if (src.title) {
        s.push('<p class="kb-p">参考资料来源：' + esc(src.title)
          + (src.url ? '（' + esc(src.url) + '）' : '') + '</p>');
      }
      if ((item.tags || []).length) {
        s.push('<p class="kbdoc-tags">' + item.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</p>');
      }
    }
    s.push('<div class="kbdoc-foot">汇川产品刷题工具 · 知识库 ｜ ' + esc(item.id)
      + ' ｜ 导出时间 ' + esc(fmtNow()) + ' ｜ 内容以汇川官方资料为准</div>');
    s.push('</div></body></html>');
    return s.join('\n');
  }

  /** 导出文件名（不含扩展名）—— 浏览器「另存为 PDF」会以此为默认文件名 */
  function kbFileBase(item) {
    var safe = String(item.title || '').replace(/[\\/:*?"<>|\s]/g, '').slice(0, 30);
    return '汇川知识库_' + String(item.id) + '_' + safe;
  }

  /**
   * 导出单条知识为 PDF
   *
   * 实现方式：走浏览器打印管线，在打印对话框中选择「另存为 PDF / Microsoft Print to PDF」。
   * 这是本项目约束下唯一可行的前端方案 —— 零依赖、零体积增量，
   * 且中文渲染交给浏览器，无需内嵌数 MB 的中文字体子集。
   * 文件名通过 iframe 的 document.title 传递给浏览器的默认保存名。
   */
  function exportPdf(no, opts) {
    var item = S.kbById(no);
    if (!item) return null;
    if (!global.IqPaper || !global.IqPaper.printHtml) {
      if (UI && UI.toast) UI.toast('导出组件未加载（缺 assets/js/paper.js）', 'warn');
      return null;
    }
    var name = kbFileBase(item);
    global.IqPaper.printHtml(kbDocHtml(item, opts), name);
    return name + '.pdf';
  }

  /** 打印单条知识（与导出 PDF 同一版式，仅提示语不同） */
  function printKbDoc(no, opts) {
    return exportPdf(no, opts);
  }

  /* ---------------- 内容块渲染 ---------------- */

  function renderBlocks(content) {
    if (!content || !content.length) return '<p class="muted">暂无内容</p>';
    return content.map(function (b) {
      if (!b || !b.type) return '';
      switch (b.type) {
        case 'h':
          return '<h3 class="kb-h">' + inlineMd(b.text) + '</h3>';
        case 'p':
          return '<p class="kb-p">' + inlineMd(b.text) + '</p>';
        case 'list':
          return '<' + (b.ordered ? 'ol' : 'ul') + ' class="kb-list">'
            + (b.items || []).map(function (x) { return '<li>' + inlineMd(x) + '</li>'; }).join('')
            + '</' + (b.ordered ? 'ol' : 'ul') + '>';
        case 'steps':
          return '<ol class="kb-steps">'
            + (b.items || []).map(function (x) { return '<li>' + inlineMd(x) + '</li>'; }).join('')
            + '</ol>';
        case 'table':
          return '<div class="kb-table-wrap"><table class="kb-table"><thead><tr>'
            + (b.head || []).map(function (h) { return '<th>' + inlineMd(h) + '</th>'; }).join('')
            + '</tr></thead><tbody>'
            + (b.rows || []).map(function (r) {
              return '<tr>' + (r || []).map(function (c) { return '<td>' + inlineMd(c) + '</td>'; }).join('') + '</tr>';
            }).join('')
            + '</tbody></table></div>';
        case 'tip':
          return '<div class="kb-tip' + (b.kind === 'warn' ? ' kb-tip-warn' : b.kind === 'danger' ? ' kb-tip-danger' : '')
            + '">' + inlineMd(b.text) + '</div>';
        case 'faq':
          return '<div class="kb-faq"><div class="kb-faq-q">Q：' + inlineMd(b.q) + '</div>'
            + '<div class="kb-faq-a">A：' + inlineMd(b.a) + '</div></div>';
        case 'script':
          return '<div class="kb-script">'
            + '<div class="kb-script-scene">场景：' + inlineMd(b.scene) + '</div>'
            + (b.bad ? '<div class="kb-script-bad"><b>✗ 新人常见错误说法</b>' + inlineMd(b.bad) + '</div>' : '')
            + '<div class="kb-script-good"><b>✓ 标准话术（可直接背诵）</b>' + inlineMd(b.good) + '</div>'
            + '</div>';
        case 'code':
          return '<pre class="kb-code">' + esc(b.text) + '</pre>';
        case 'img':
          return '<figure class="kb-img"><img src="' + esc(b.src) + '" alt="' + esc(b.caption || '') + '" loading="lazy">'
            + (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') + '</figure>';
        default:
          return '';
      }
    }).join('');
  }

  /* ---------------- 列表页 ---------------- */

  function cardHtml(it) {
    var rec = recOf(it.id) || {};
    var tags = (it.tags || []).slice(0, 4).map(function (t) {
      return '<span class="tag">' + esc(t) + '</span>';
    }).join('');
    return '<a class="kb-card" href="#/kb/no/' + esc(it.id) + '">'
      + '<h4>' + (rec.finished ? '<span class="kb-badge-ok">✓ 已学 </span>' : '') + esc(it.title) + '</h4>'
      + '<p class="kb-sum">' + esc(it.summary || '') + '</p>'
      + '<div class="kb-meta">'
      + '<span><span class="kb-dot" style="background:' + catColor(it.category) + '"></span>' + esc(catShort(it.category)) + '</span>'
      + '<span>' + esc(topicName(it.topic)) + '</span>'
      + '<span>' + esc(levelName(it.level)) + '</span>'
      + '<span>' + icon('clock', 12) + ' ' + (it.readMinutes || 5) + ' 分钟</span>'
      + (rec.readCount ? '<span>' + icon('eye', 12) + ' 已读 ' + rec.readCount + ' 次</span>' : '')
      + secTag(it.security)
      + (tags ? '<span style="display:flex;gap:4px;flex-wrap:wrap">' + tags + '</span>' : '')
      + '</div>'
      + '<div class="kb-card-actions">'
      + '<span class="kb-act" data-kb-pdf="' + esc(it.id) + '" title="导出为 PDF（打印对话框中选择「另存为 PDF」）">导出 PDF</span>'
      + '<span class="kb-act" data-kb-print="' + esc(it.id) + '" title="打印本篇">打印</span>'
      + '</div></a>';
  }

  function viewList() {
    ensureStyle();
    var meta = S.kbMeta();
    var res = S.kbList(filters);
    var topTags = (meta.tags || []).slice(0, 14);
    var mine = S.kbMyRecords();
    var route = S.kbRoute();
    var routeTotal = route.stages.reduce(function (s, x) { return s + x.total; }, 0);
    var routeDone = route.stages.reduce(function (s, x) { return s + x.finished; }, 0);

    function chip(group, key, name, count, on, color) {
      return '<button class="chip' + (on ? ' on' : '') + '" data-kb-filter="' + group + '" data-val="' + esc(key) + '">'
        + (color ? '<span class="dot" style="color:' + color + '"></span>' : '')
        + esc(name) + (count != null ? ' <span class="muted">' + count + '</span>' : '') + '</button>';
    }

    return '' +
      '<div class="page-head"><h2>' + icon('book', 20) + '知识库</h2>' +
      '<p>结构化产品知识：型号与选型、参数与调试、故障与话术。看完可直接跳到关联题目练手</p></div>' +

      '<div class="kb-layout">' +
      '  <div>' +
      '    <div class="card">' +
      '      <div class="kb-search">' +
      '        <input type="text" id="kbKeyword" placeholder="搜索知识标题、正文、故障码、型号或题号（如 SV660、Er.410、选型）" value="' + esc(filters.keyword) + '">' +
      '        <button class="btn primary" id="kbSearchBtn">' + icon('search', 15) + ' 搜索</button>' +
      '        <button class="btn" id="kbResetBtn">重置</button>' +
      '      </div>' +
      '      <div class="field" style="margin-bottom:8px"><label>产品品类</label><div class="chips kb-filter">' +
      chip('category', '', '全部', meta.stats.total, !filters.category) +
      meta.categories.map(function (c) { return chip('category', c.key, c.short || c.name, c.count, filters.category === c.key, c.color); }).join('') +
      '      </div></div>' +
      '      <div class="field" style="margin-bottom:8px"><label>知识主题</label><div class="chips kb-filter">' +
      chip('topic', '', '全部', null, !filters.topic) +
      meta.topics.map(function (t) { return chip('topic', t.key, t.name, t.count, filters.topic === t.key); }).join('') +
      '      </div></div>' +
      '      <div class="field"><label>入门难度</label><div class="chips kb-filter">' +
      chip('level', '', '全部', null, !filters.level) +
      chip('level', '1', '入门', null, filters.level === '1') +
      chip('level', '2', '进阶', null, filters.level === '2') +
      chip('level', '3', '深入', null, filters.level === '3') +
      '      </div></div>' +
      (topTags.length ? '      <div class="field" style="margin-top:10px"><label>热门标签</label><div class="chips kb-filter">'
        + topTags.map(function (t) { return chip('tag', t, t, null, filters.tag === t); }).join('') + '</div></div>' : '') +
      '    </div>' +

      '    <div class="card">' +
      '      <div class="card-head"><h3>共 ' + res.total + ' 篇知识</h3><div class="spacer"></div>' +
      '        <span class="card-sub">' + (filters.keyword ? '关键词「' + esc(filters.keyword) + '」' : '按学习路线排序') + '</span></div>' +
      (res.items.length
        ? '<div class="kb-cards">' + res.items.map(cardHtml).join('') + '</div>'
        : '<div class="empty"><div class="big">🔍</div><p>没有匹配的知识条目</p><p class="small muted">试试更换关键词或清空筛选条件</p></div>') +
      '    </div>' +
      '  </div>' +

      '  <div>' +
      '    <div class="card">' +
      '      <div class="card-head"><h3>' + icon('target', 15) + ' 新人学习路线</h3></div>' +
      '      <p class="small muted" style="margin:0 0 10px">按阶段推荐，' + routeDone + ' / ' + routeTotal + ' 已完成</p>' +
      '      <div class="kb-stage-bar" style="margin-bottom:10px"><i style="width:' + (routeTotal ? Math.round(routeDone / routeTotal * 100) : 0) + '%"></i></div>' +
      route.stages.map(function (s) {
        return '<div class="kb-row"><div class="kb-row-main"><div class="kb-row-title">' + esc(s.title) + '</div>'
          + '<div class="kb-row-sub">' + s.total + ' 篇 · 已完成 ' + s.finished + '</div></div></div>';
      }).join('') +
      '      <a class="btn primary block mt12" href="#/kb/route">查看完整路线</a>' +
      '    </div>' +

      '    <div class="card">' +
      '      <div class="card-head"><h3>' + icon('clock', 15) + ' 最近浏览</h3></div>' +
      (mine.recent.length
        ? '<div class="list">' + mine.recent.slice(0, 6).map(function (r) {
          return '<a class="list-item" href="#/kb/no/' + esc(r.knowledgeNo) + '" style="text-decoration:none;color:inherit">'
            + '<div style="flex:1;min-width:0"><div class="kb-row-title">' + esc(r.title) + '</div>'
            + '<div class="kb-row-sub">' + esc(catShort(r.category)) + ' · ' + esc(topicName(r.topic)) + (r.finished ? ' · 已学完' : '') + '</div></div>'
            + '<span class="small muted">' + icon('eye', 12) + '</span></a>';
        }).join('') + '</div>'
        : '<div class="empty small"><p>还没有阅读记录</p></div>') +
      '      <a class="btn ghost block mt12" href="#/kb/mine">我的学习</a>' +
      '    </div>' +
      '  </div>' +
      '</div>';
  }

  /* ---------------- 详情页 ---------------- */

  function viewDetail(no) {
    ensureStyle();
    var it = S.kbById(no);
    if (!it || (it.status || 'published') !== 'published' || !S.canSeeSecurity(it.security || 'public')) {
      return '<div class="page-head"><h2>知识详情</h2></div>'
        + '<div class="card"><div class="empty"><div class="big">📄</div><p>知识条目不存在或当前身份无权查看</p>'
        + '<a class="btn mt12" href="#/kb">返回知识库</a></div></div>';
    }
    var rec = recOf(it.id) || {};
    var list = S.kbList({}).items;
    var idx = -1;
    list.forEach(function (x, i) { if (x.id === it.id) idx = i; });
    var prev = idx > 0 ? list[idx - 1] : null;
    var next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;

    // 关联题目摘要
    var relIds = it.relatedQuestions || [];
    var relHtml = relIds.map(function (qid) {
      var q = Bank.byId(qid);
      if (!q || !S.canSeeSecurity(q.security || 'public')) return '';
      return '<div class="kb-rel-item" data-kb-question="' + esc(qid) + '">'
        + '<b>' + esc(qid) + '</b> <span class="tag">' + esc(typeName(q.type)) + '</span> '
        + '<span class="small muted">' + esc(levelName(q.difficulty)) + '</span><br>'
        + '<span class="small">' + esc(String(q.stem || '').slice(0, 70)) + (String(q.stem || '').length > 70 ? '…' : '') + '</span>'
        + '</div>';
    }).join('');

    // 目录（h 块）
    var toc = (it.content || []).filter(function (b) { return b && b.type === 'h'; })
      .map(function (b, i) { return '<a href="#kbSec' + i + '" data-kb-toc="kbSec' + i + '">' + esc(b.text) + '</a>'; }).join('');
    var hIndex = -1;
    var body = renderBlocks((it.content || []).map(function (b) {
      if (b && b.type === 'h') {
        hIndex++;
        return Object.assign({}, b, { text: b.text });
      }
      return b;
    }));

    return '' +
      '<div class="page-head">' +
      '  <div class="small muted" style="margin-bottom:6px"><a href="#/kb">← 返回知识库</a></div>' +
      '  <h2>' + esc(it.title) + '</h2>' +
      '  <div class="kb-meta" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;font-size:12.5px;color:var(--text-3)">' +
      '    <span><span class="kb-dot" style="background:' + catColor(it.category) + '"></span>' + esc(catName(it.category)) + '</span>' +
      '    <span>' + icon(topicIcon(it.topic), 13) + ' ' + esc(topicName(it.topic)) + '</span>' +
      '    <span>' + esc(levelName(it.level)) + '</span>' +
      '    <span>' + icon('clock', 13) + ' 约 ' + (it.readMinutes || 5) + ' 分钟</span>' +
      '    <span>' + esc(it.id) + '</span>' +
      secTag(it.security) +
      '    <span>更新于 ' + esc(it.updatedAt || '—') + '</span>' +
      '  </div>' +
      '</div>' +

      '<div class="kb-layout">' +
      '  <div>' +
      '    <div class="card kb-content" id="kbContent">' + body + '</div>' +
      '    <div class="card" style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">' +
      (prev ? '<a class="btn" href="#/kb/no/' + esc(prev.id) + '">← ' + esc(String(prev.title).slice(0, 18)) + '</a>' : '<span></span>') +
      (next ? '<a class="btn" href="#/kb/no/' + esc(next.id) + '">' + esc(String(next.title).slice(0, 18)) + ' →</a>' : '<span></span>') +
      '    </div>' +
      '  </div>' +

      '  <div>' +
      '    <div class="card">' +
      '      <div class="card-head"><h3>学习操作</h3></div>' +
      '      <div style="display:flex;gap:8px;flex-wrap:wrap">' +
      '        <button class="btn' + (rec.fav ? ' ok' : '') + '" id="kbFav">' + icon('star', 15) + ' ' + (rec.fav ? '已收藏' : '收藏') + '</button>' +
      '        <button class="btn' + (rec.finished ? ' ok' : ' primary') + '" id="kbFinish">' + icon('check', 15) + ' ' + (rec.finished ? '已学完' : '标记已学完') + '</button>' +
      '        <button class="btn" id="kbPdf">' + icon('download', 15) + ' 导出 PDF</button>' +
      '        <button class="btn" id="kbPrint">打印本篇</button>' +
      '      </div>' +
      '      <div class="note small mt12">阅读 ' + (rec.readCount || 0) + ' 次 · 累计 ' + fmtSeconds(rec.readSeconds) + (rec.finished ? ' · 已完成学习' : '') + '</div>' +
      '    </div>' +

      (toc ? '    <div class="card kb-toc"><div class="kb-sec-title">本文目录</div>' + toc + '</div>' : '') +

      (relHtml ? '    <div class="card"><div class="card-head"><h3>' + icon('book', 15) + ' 关联刷题</h3><div class="spacer"></div>'
        + '<span class="card-sub">' + relIds.length + ' 题</span></div>'
        + '<div class="kb-rel">' + relHtml + '</div>'
        + '<button class="btn primary block mt12" id="kbPracticeAll">' + icon('play', 15) + ' 去练这些题</button></div>'
        : '    <div class="card"><div class="card-head"><h3>关联刷题</h3></div><p class="small muted" style="margin:0">本篇暂未关联题目</p></div>') +

      '    <div class="card">' +
      '      <div class="card-head"><h3>资料溯源</h3></div>' +
      '      <div class="small" style="line-height:1.8;text-align:left">' + esc((it.source || {}).title || '—') +
      ((it.source || {}).url ? '<br><a class="small" href="' + esc(it.source.url) + '" target="_blank" rel="noopener">' + icon('link', 12) + ' 查看官方资料</a>' : '') +
      '      </div>' +
      '      <div class="note small mt12">标签：' + ((it.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join(' ') || '—') + '</div>' +
      '    </div>' +
      '  </div>' +
      '</div>';
  }

  function typeName(t) {
    var x = (S.TYPES || []).filter(function (y) { return y.key === t; })[0];
    return x ? x.name : t;
  }

  /* ---------------- 学习路线 ---------------- */

  function viewRoute() {
    ensureStyle();
    var route = S.kbRoute();
    var total = route.stages.reduce(function (s, x) { return s + x.total; }, 0);
    var done = route.stages.reduce(function (s, x) { return s + x.finished; }, 0);
    return '' +
      '<div class="page-head"><h2>' + icon('target', 20) + '新人学习路线</h2>' +
      '<p>按「入门 → 进阶 → 深入」三阶段编排，共 ' + total + ' 篇，已完成 ' + done + ' 篇</p></div>' +
      '<div class="card"><div class="kb-stage-bar"><i style="width:' + (total ? Math.round(done / total * 100) : 0) + '%"></i></div>'
      + '<div class="small muted mt8">总进度 ' + (total ? Math.round(done / total * 100) : 0) + '%</div></div>' +
      route.stages.map(function (s) {
        return '<div class="card kb-stage">' +
          '<div class="kb-stage-head"><h3 style="margin:0;font-size:15px">' + esc(s.title) + '</h3>' +
          '<div class="spacer"></div><span class="card-sub">' + s.finished + ' / ' + s.total + '</span></div>' +
          '<p class="small muted" style="margin:0 0 10px">' + esc(s.desc) + '</p>' +
          (s.items.length ? s.items.map(function (i) {
            return '<div class="kb-row">'
              + '<span style="' + (i.finished ? 'color:#12996b' : 'color:var(--text-3)') + '">' + icon(i.finished ? 'check' : 'dot', 15) + '</span>'
              + '<div class="kb-row-main"><a class="kb-row-title" href="#/kb/no/' + esc(i.knowledgeNo) + '" style="text-decoration:none;color:inherit">' + esc(i.title) + '</a>'
              + '<div class="kb-row-sub">' + esc(catShort(i.category)) + ' · ' + esc(topicName(i.topic)) + ' · ' + (i.readMinutes || 5) + ' 分钟 · ' + esc(i.knowledgeNo) + '</div></div>'
              + secTag(i.security) +
              '<a class="btn sm" href="#/kb/no/' + esc(i.knowledgeNo) + '">' + (i.finished ? '复习' : '去学习') + '</a>'
              + '</div>';
          }).join('') : '<div class="empty small"><p>该阶段暂无内容</p></div>') +
          '</div>';
      }).join('');
  }

  /* ---------------- 我的学习 ---------------- */

  function viewMine() {
    ensureStyle();
    var mine = S.kbMyRecords();
    var route = S.kbRoute();
    var total = route.stages.reduce(function (s, x) { return s + x.total; }, 0);
    return '' +
      '<div class="page-head"><h2>' + icon('chart', 20) + '我的学习</h2>' +
      '<p>知识库阅读记录、收藏与学习进度</p></div>' +
      '<div class="grid c3">' +
      '  <div class="card center"><div class="small muted">已读知识</div><div style="font-size:26px;font-weight:700">' + mine.stats.readCount + '</div><div class="small muted">共 ' + total + ' 篇</div></div>' +
      '  <div class="card center"><div class="small muted">已学完</div><div style="font-size:26px;font-weight:700">' + mine.stats.finishedCount + '</div><div class="small muted">完成率 ' + (total ? Math.round(mine.stats.finishedCount / total * 100) : 0) + '%</div></div>' +
      '  <div class="card center"><div class="small muted">累计阅读时长</div><div style="font-size:26px;font-weight:700">' + fmtSeconds(mine.stats.totalSeconds) + '</div><div class="small muted">收藏 ' + mine.favs.length + ' 篇</div></div>' +
      '</div>' +
      '<div class="grid c2">' +
      '  <div class="card"><div class="card-head"><h3>最近浏览</h3><div class="spacer"></div><span class="card-sub">最多 10 条</span></div>' +
      (mine.recent.length ? '<div class="list">' + mine.recent.map(function (r) {
        return '<a class="list-item" href="#/kb/no/' + esc(r.knowledgeNo) + '" style="text-decoration:none;color:inherit">'
          + '<div style="flex:1;min-width:0"><div class="kb-row-title">' + esc(r.title) + '</div>'
          + '<div class="kb-row-sub">' + esc(catShort(r.category)) + ' · ' + esc(topicName(r.topic)) + ' · 阅读 ' + r.readCount + ' 次 · ' + fmtSeconds(r.readSeconds) + '</div></div>'
          + (r.finished ? '<span class="kb-badge-ok">已学完</span>' : '') + '</a>';
      }).join('') + '</div>' : '<div class="empty small"><p>还没有阅读记录</p></div>') +
      '  </div>' +
      '  <div class="card"><div class="card-head"><h3>我的收藏</h3><div class="spacer"></div><span class="card-sub">' + mine.favs.length + ' 篇</span></div>' +
      (mine.favs.length ? '<div class="list">' + mine.favs.map(function (r) {
        return '<a class="list-item" href="#/kb/no/' + esc(r.knowledgeNo) + '" style="text-decoration:none;color:inherit">'
          + '<div style="flex:1;min-width:0"><div class="kb-row-title">' + esc(r.title) + '</div>'
          + '<div class="kb-row-sub">' + esc(catShort(r.category)) + ' · ' + esc(topicName(r.topic)) + '</div></div>'
          + '<span class="small muted">' + icon('star', 13) + '</span></a>';
      }).join('') + '</div>' : '<div class="empty small"><p>还没有收藏</p></div>') +
      '  </div>' +
      '</div>';
  }

  /* ---------------- 阅读计时 ---------------- */

  function startReadTimer(no) {
    stopReadTimer();
    var seconds = 0;
    readTimer = setInterval(function () {
      seconds += 20;
      if (seconds > 1200) { stopReadTimer(); return; }   // 单篇最多累计 20 分钟
      if (seconds % 20 === 0) {
        try { S.kbMarkRead(no, 20, false); } catch (e) { /* 忽略 */ }
      }
    }, 20000);
  }

  function stopReadTimer() {
    if (readTimer) { clearInterval(readTimer); readTimer = null; }
  }

  /* ---------------- 交互绑定 ---------------- */

  function bind() {
    ensureStyle();

    // 搜索
    var kw = document.getElementById('kbKeyword');
    if (kw) {
      kw.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { filters.keyword = kw.value.trim(); rerender(); }
      });
    }
    var sb = document.getElementById('kbSearchBtn');
    if (sb) sb.addEventListener('click', function () {
      filters.keyword = kw ? kw.value.trim() : '';
      rerender();
    });
    var rb = document.getElementById('kbResetBtn');
    if (rb) rb.addEventListener('click', function () {
      filters = { keyword: '', category: '', topic: '', tag: '', level: '' };
      rerender();
    });

    // 筛选 chips
    Array.prototype.forEach.call(document.querySelectorAll('[data-kb-filter]'), function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.getAttribute('data-kb-filter');
        var val = btn.getAttribute('data-val') || '';
        filters[group] = (filters[group] === val) ? '' : val;
        rerender();
      });
    });

    // 详情页操作
    var favBtn = document.getElementById('kbFav');
    if (favBtn) favBtn.addEventListener('click', function () {
      var on = S.kbToggleFav(favBtn.getAttribute('data-no') || currentNo());
      if (UI && UI.toast) UI.toast(on ? '已收藏' : '已取消收藏', 'ok');
      rerender();
    });

    var finBtn = document.getElementById('kbFinish');
    if (finBtn) finBtn.addEventListener('click', function () {
      S.kbMarkRead(currentNo(), 0, true);
      if (UI && UI.toast) UI.toast('已标记为学完', 'ok');
      rerender();
    });

    // 详情页：导出 PDF / 打印本篇（两者同一版式，仅提示语不同）
    var pdfBtn = document.getElementById('kbPdf');
    if (pdfBtn) pdfBtn.addEventListener('click', function () {
      var name = exportPdf(currentNo(), { withAnswer: true });
      if (name && UI && UI.toast) {
        UI.toast('已打开打印对话框：目标选「另存为 PDF」即可保存为 ' + name, 'ok');
      }
    });
    var printBtn = document.getElementById('kbPrint');
    if (printBtn) printBtn.addEventListener('click', function () {
      if (printKbDoc(currentNo(), { withAnswer: true }) && UI && UI.toast) {
        UI.toast('已打开打印对话框（含关联题参考答案）', 'ok');
      }
    });

    // 列表卡片：每条知识单独导出 / 打印（阻止冒泡，避免误跳详情）
    Array.prototype.forEach.call(document.querySelectorAll('[data-kb-pdf]'), function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        var name = exportPdf(el.getAttribute('data-kb-pdf'), { withAnswer: true });
        if (name && UI && UI.toast) UI.toast('导出 ' + name + '：在打印对话框中选择「另存为 PDF」', 'ok');
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-kb-print]'), function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        if (printKbDoc(el.getAttribute('data-kb-print'), { withAnswer: true })) {
          if (UI && UI.toast) UI.toast('正在准备打印', 'ok');
        }
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-kb-question]'), function (el) {
      el.addEventListener('click', function () {
        global.IqKB.pendingKeyword = el.getAttribute('data-kb-question');
        location.hash = '#/practice';
      });
    });

    var allBtn = document.getElementById('kbPracticeAll');
    if (allBtn) allBtn.addEventListener('click', function () {
      var it = S.kbById(currentNo());
      var ids = (it && it.relatedQuestions) || [];
      if (!ids.length) return;
      global.IqKB.pendingKeyword = ids[0];
      location.hash = '#/practice';
    });

    // 目录锚点
    Array.prototype.forEach.call(document.querySelectorAll('[data-kb-toc]'), function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var id = a.getAttribute('data-kb-toc');
        var idx = Number(String(id).replace('kbSec', ''));
        var heads = document.querySelectorAll('#kbContent .kb-h');
        if (heads[idx]) heads[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // 阅读计时（仅详情页）
    var content = document.getElementById('kbContent');
    if (content) startReadTimer(currentNo());
    else stopReadTimer();
  }

  function currentNo() {
    var m = /^#\/kb\/no\/(.+)$/.exec(location.hash || '');
    return m ? decodeURIComponent(m[1]) : '';
  }

  function rerender() {
    // 触发 app.js 的路由重渲染（兼容老内核：不依赖 HashChangeEvent 构造函数）
    var ev;
    try {
      ev = new HashChangeEvent('hashchange');
    } catch (e) {
      ev = document.createEvent('HTMLEvents');
      ev.initEvent('hashchange', true, false);
    }
    global.dispatchEvent(ev);
  }

  /* ---------------- 对外接口 ---------------- */

  global.IqKB = {
    view: function (sub, arg) {
      if (sub === 'no' && arg) return viewDetail(arg);
      if (sub === 'route') return viewRoute();
      if (sub === 'mine') return viewMine();
      return viewList();
    },
    bind: bind,
    renderBlocks: renderBlocks,
    /** 导出单条知识为 PDF / 打印单条知识（管理端亦可调用） */
    exportPdf: exportPdf,
    printDoc: printKbDoc,
    docHtml: kbDocHtml,
    /** 反查：某道题关联了哪些知识条目（供刷题页展示「相关知识」） */
    byQuestion: function (qid) {
      if (!qid) return [];
      try {
        return S.kbList({}).items.filter(function (it) {
          return (it.relatedQuestions || []).indexOf(qid) >= 0;
        });
      } catch (e) { return []; }
    },
    filters: function () { return filters; },
    pendingKeyword: null,
    stopTimer: stopReadTimer
  };
})(window);
