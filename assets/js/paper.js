/**
 * 试卷生成 / Word 导出 / 打印模块
 *
 * 面向「管理员 + 技术人员（培训讲师）」：为销售、采购人员组卷 20 道客观题，
 * 支持在线预览、导出 PDF（浏览器打印管线，无需第三方库）与直接打印。
 *
 * 依赖：IqStore（S）、IqBank（Bank）
 * 挂载：window.IqPaper
 */
(function (global) {
  'use strict';

  var S = global.IqStore;
  var Bank = global.IqBank;

  /* ---------------- 常量 ---------------- */

  var AUD_LABEL = { sales: '销售', purchase: '采购', engineer: '技术', partner: '合作客户' };
  var TYPE_NAME = { single: '单选题', multi: '多选题', judge: '判断题', fill: '填空题' };
  var TYPE_ORDER = ['single', 'multi', 'judge', 'fill'];
  var TYPE_TIP = {
    single: '每题只有一个正确答案',
    multi: '每题有两个或两个以上正确答案，多选、少选、错选均不得分',
    judge: '正确划“√”，错误划“×”',
    fill: '请在题干横线处填写答案'
  };
  // 题型配比：单选 40%，多选 / 判断 / 填空 各 20%
  var TYPE_RATIO = { single: 0.4, multi: 0.2, judge: 0.2, fill: 0.2 };
  var CN_NUM = ['一', '二', '三', '四', '五', '六', '七', '八'];
  var SCORE_PER_Q = 5;
  var CAT_ORDER = ['servo', 'inverter', 'plc', 'hmi', 'io'];

  /* ---------------- 工具 ---------------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /** 确定性伪随机（同一 seed 可复现同一份试卷） */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function todayKey() {
    if (typeof S.todayKey === 'function') return S.todayKey();
    var d = new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }

  function auditLabel(audiences) {
    if (!audiences || !audiences.length) return '全体人员';
    return audiences.map(function (a) { return AUD_LABEL[a] || a; }).join(' / ') + '人员';
  }

  /** 选项键（去重排序） */
  function optionKeys(q) {
    if (!q || !q.options) return [];
    return Object.keys(q.options).sort();
  }

  /** 标准答案文本 */
  function answerText(q) {
    var a = q.answer;
    if (q.type === 'judge') {
      var v = Array.isArray(a) ? a[0] : a;
      return (v === 'T' || v === true) ? '正确（√）' : '错误（×）';
    }
    if (q.type === 'fill') {
      var arr = Array.isArray(a) ? a : [a];
      return arr.map(function (x, i) {
        return (arr.length > 1 ? '第 ' + (i + 1) + ' 空：' : '') + String(x);
      }).join('；');
    }
    var arr2 = (Array.isArray(a) ? a : [a]).map(String);
    return arr2.join('、');
  }

  /* ---------------- 组卷 ---------------- */

  /**
   * 按「品类均衡 + 难度均衡」从候选池中挑选 n 道题
   * 打分优先级：品类出现次数 > 难度出现次数 > 随机扰动
   */
  function pickBalanced(cands, n, rnd) {
    var rest = cands.slice();
    var picked = [];
    var catCount = {}, diffCount = {};
    while (picked.length < n && rest.length) {
      var best = -1, bestScore = Infinity;
      for (var i = 0; i < rest.length; i++) {
        var q = rest[i];
        var score = (catCount[q.category] || 0) * 3
          + (diffCount[Number(q.difficulty)] || 0) * 1
          + rnd() * 0.5;
        if (score < bestScore) { bestScore = score; best = i; }
      }
      var chosen = rest.splice(best, 1)[0];
      picked.push(chosen);
      catCount[chosen.category] = (catCount[chosen.category] || 0) + 1;
      diffCount[Number(chosen.difficulty)] = (diffCount[Number(chosen.difficulty)] || 0) + 1;
    }
    return picked;
  }

  /** 计算各题型题量：按配比取整，池子不足时把缺口让给其他题型 */
  function planQuota(byType, count) {
    var quota = {}, sum = 0;
    TYPE_ORDER.forEach(function (t) {
      var ideal = Math.round(count * TYPE_RATIO[t]);
      var cap = (byType[t] || []).length;
      quota[t] = Math.min(ideal, cap);
      sum += quota[t];
    });
    var left = count - sum;
    var guard = 0;
    while (left > 0 && guard++ < 500) {
      var progressed = false;
      TYPE_ORDER.forEach(function (t) {
        if (left <= 0) return;
        if (quota[t] < (byType[t] || []).length) { quota[t]++; left--; progressed = true; }
      });
      if (!progressed) break;
    }
    return quota;
  }

  /**
   * 生成试卷
   * @param {Object} opts
   *   audiences  目标人群，默认 ['sales','purchase']
   *   count      题量，默认 20
   *   minutes    考试时长（分钟），默认 30
   *   passLine   及格线（分），默认 60
   *   seed       随机种子（不传则按当前时间）
   *   categories 限定品类
   */
  function build(opts) {
    opts = opts || {};
    var audiences = opts.audiences && opts.audiences.length ? opts.audiences : ['sales', 'purchase'];
    var count = Number(opts.count) || 20;
    var minutes = Number(opts.minutes) || 30;
    var passLine = Number(opts.passLine) || 60;
    var seed = opts.seed != null ? Number(opts.seed) : (Date.now() % 2147483647);
    var rnd = mulberry32(seed);

    var pool = Bank.filter({
      types: TYPE_ORDER,
      roles: audiences,
      categories: opts.categories && opts.categories.length ? opts.categories : null
    });

    var byType = {};
    pool.forEach(function (q) {
      if (TYPE_ORDER.indexOf(q.type) < 0) return;
      (byType[q.type] = byType[q.type] || []).push(q);
    });

    var quota = planQuota(byType, count);
    var groups = [];
    var questions = [];

    TYPE_ORDER.forEach(function (t) {
      var n = quota[t];
      if (!n) return;
      var items = pickBalanced(byType[t] || [], n, rnd);
      // 组内排序：难度递增 → 品类顺序 → 题号
      items.sort(function (a, b) {
        return Number(a.difficulty) - Number(b.difficulty)
          || CAT_ORDER.indexOf(a.category) - CAT_ORDER.indexOf(b.category)
          || String(a.id).localeCompare(String(b.id), 'zh');
      });
      items.forEach(function (q) { questions.push(q); });
      groups.push({ type: t, name: TYPE_NAME[t], tip: TYPE_TIP[t], items: items });
    });

    var dateKey = todayKey();
    var code = 'EX-' + dateKey.replace(/-/g, '') + '-' + ('0000' + (Math.abs(seed) % 10000)).slice(-4);
    var label = auditLabel(audiences);

    return {
      code: code,
      seed: seed,
      title: '汇川工业自动化产品知识测评试卷',
      subtitle: label + '（' + TYPE_ORDER.filter(function (t) { return quota[t]; })
        .map(function (t) { return TYPE_NAME[t]; }).join(' / ') + '）',
      audienceLabel: label,
      audiences: audiences,
      count: questions.length,
      requestedCount: count,
      minutes: minutes,
      passLine: passLine,
      scorePerQ: SCORE_PER_Q,
      fullScore: questions.length * SCORE_PER_Q,
      createdAt: new Date(),
      groups: groups,
      questions: questions,
      quota: quota
    };
  }

  /* ---------------- 版式（Word 与打印共用一份 CSS） ---------------- */

  var PAPER_CSS = [
    '.paper{font-family:"宋体",SimSun,serif;font-size:14px;line-height:1.75;color:#1a1a1a;background:#fff;padding:26px 30px;text-align:left}',
    '.paper h1{font-family:"黑体",SimHei,sans-serif;font-size:22px;font-weight:bold;text-align:center;margin:0 0 6px;color:#111}',
    '.paper .p-sub{text-align:center;font-size:12.5px;color:#555;margin:0 0 14px}',
    '.paper .p-info{width:100%;border-collapse:collapse;margin:0 0 8px;font-size:13px}',
    '.paper .p-info td{padding:5px 10px 5px 0;text-align:left;white-space:nowrap}',
    '.paper .p-note{font-size:12px;color:#666;border:1px dashed #bbb;padding:8px 10px;margin:0 0 14px;line-height:1.7}',
    '.paper .p-note b{color:#333}',
    '.paper .p-sec{font-family:"黑体",SimHei,sans-serif;font-size:15px;font-weight:bold;margin:20px 0 6px;text-align:left;page-break-after:avoid}',
    '.paper .p-sec .p-tip{font-family:"宋体",SimSun,serif;font-size:12px;font-weight:normal;color:#666}',
    '.paper .p-q{margin:12px 0 4px;text-align:left;page-break-inside:avoid}',
    '.paper .p-no{font-weight:bold;margin-right:5px}',
    '.paper .p-diff{font-size:11px;color:#888;margin-left:6px}',
    '.paper table.p-opt{width:100%;border-collapse:collapse;margin:0 0 2px;page-break-inside:avoid}',
    '.paper table.p-opt td{width:50%;padding:2px 10px 2px 0;vertical-align:top;text-align:left;font-size:13.5px}',
    '.paper .p-ans{margin-top:26px;page-break-before:always}',
    '.paper .p-ans-item{margin:8px 0;font-size:13px;text-align:left;page-break-inside:avoid}',
    '.paper .p-ans-no{font-weight:bold;margin-right:5px}',
    '.paper .p-ans-val{color:#0b5cab;font-weight:bold}',
    '.paper .p-ans-exp{color:#555}',
    '.paper .p-foot{margin-top:24px;font-size:11.5px;color:#888;text-align:center}',
    '.paper .p-blank{display:inline-block;min-width:78px;border-bottom:1px solid #333;height:1em}',
  ].join('\n');

  var PRINT_CSS = [
    '@page{size:A4;margin:1.6cm 1.5cm}',
    'html,body{margin:0;padding:0;background:#fff}',
    /* 让答案区/解析区的浅色底纹在导出的 PDF 中保留，不被浏览器省墨模式抹掉 */
    '*{-webkit-print-color-adjust:exact;print-color-adjust:exact}',
    '.paper{padding:0}',
    '@media print{.paper{box-shadow:none}}',
  ].join('\n');

  /* ---------------- 渲染 ---------------- */

  function stemHtml(q) {
    var stem = esc(q.stem);
    if (q.type === 'judge' || q.type === 'single' || q.type === 'multi') {
      return stem + '（&nbsp;&nbsp;&nbsp;&nbsp;）';
    }
    return stem;
  }

  function optionsHtml(q) {
    var keys = optionKeys(q);
    if (!keys.length) return '';
    var cells = keys.map(function (k) {
      return '<td>' + esc(k) + '．' + esc(q.options[k]) + '</td>';
    });
    var rows = '';
    for (var i = 0; i < cells.length; i += 2) {
      rows += '<tr>' + cells[i] + (cells[i + 1] || '<td></td>') + '</tr>';
    }
    return '<table class="p-opt">' + rows + '</table>';
  }

  var DIFF_NAME = { 1: '初级', 2: '中级', 3: '高级' };

  /**
   * 试卷正文
   * @param {Object} paper
   * @param {Object} opts  withAnswer（含答案与解析）、withDiff（标注难度）
   */
  function bodyHtml(paper, opts) {
    opts = opts || {};
    var showDiff = opts.withDiff !== false;
    var s = [];
    s.push('<div class="paper">');
    s.push('<h1>' + esc(paper.title) + '</h1>');
    s.push('<div class="p-sub">' + esc(paper.subtitle) + ' ｜ 满分 ' + paper.fullScore
      + ' 分 ｜ 考试时间 ' + paper.minutes + ' 分钟 ｜ 及格线 ' + paper.passLine + ' 分</div>');
    s.push('<table class="p-info"><tr>'
      + '<td>姓名：______________</td>'
      + '<td>部门 / 单位：________________</td>'
      + '<td>日期：______ 年 ____ 月 ____ 日</td>'
      + '<td>得分：____________</td>'
      + '</tr></table>');
    s.push('<div class="p-note"><b>答题说明：</b>'
      + '1. 本卷共 ' + paper.count + ' 题，每题 ' + paper.scorePerQ + ' 分，满分 ' + paper.fullScore + ' 分；'
      + '2. 单选题每题只有一个正确答案，多选题多选、少选、错选均不得分；'
      + '3. 判断题正确划“√”，错误划“×”；填空题请将答案写在题干横线处；'
      + '4. 试卷编号 ' + esc(paper.code) + '，答案以汇川官方产品资料为准。</div>');

    var no = 0;
    paper.groups.forEach(function (g, gi) {
      var pts = g.items.length * paper.scorePerQ;
      s.push('<div class="p-sec">' + (CN_NUM[gi] || (gi + 1)) + '、' + esc(g.name)
        + '（共 ' + g.items.length + ' 题，每题 ' + paper.scorePerQ + ' 分，共 ' + pts + ' 分）'
        + '<span class="p-tip">　' + esc(g.tip) + '</span></div>');
      g.items.forEach(function (q) {
        no++;
        s.push('<div class="p-q"><span class="p-no">' + no + '．</span>' + stemHtml(q)
          + (showDiff ? '<span class="p-diff">［' + (DIFF_NAME[q.difficulty] || '') + '］</span>' : '')
          + '</div>');
        s.push(optionsHtml(q));
      });
    });

    if (opts.withAnswer) {
      s.push('<div class="p-ans"><h1>参考答案与解析</h1>'
        + '<div class="p-sub">' + esc(paper.code) + ' ｜ ' + esc(paper.audienceLabel) + '</div>');
      no = 0;
      paper.groups.forEach(function (g, gi) {
        s.push('<div class="p-sec">' + (CN_NUM[gi] || (gi + 1)) + '、' + esc(g.name) + ' 参考答案</div>');
        g.items.forEach(function (q) {
          no++;
          s.push('<div class="p-ans-item"><span class="p-ans-no">' + no + '．</span>'
            + '<span class="p-ans-val">' + esc(answerText(q)) + '</span>'
            + (q.analysis ? '<span class="p-ans-exp">　解析：' + esc(q.analysis) + '</span>' : '')
            + (q.source && q.source.title ? '<span class="p-ans-exp">　（来源：' + esc(q.source.title) + '）</span>' : '')
            + '</div>');
        });
      });
      s.push('</div>');
    }

    s.push('<div class="p-foot">' + esc(paper.title) + ' ｜ 试卷编号 ' + esc(paper.code)
      + ' ｜ 生成时间 ' + esc(fmtDateTime(new Date())) + ' ｜ 汇川产品刷题工具</div>');
    s.push('</div>');
    return s.join('\n');
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDateTime(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())
      + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  /** 独立文档（Word 导出 / 打印） */
  function docHtml(paper, opts) {
    return '<html xmlns:o="urn:schemas-microsoft-com:office:office" '
      + 'xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">'
      + '<head><meta charset="utf-8"><title>' + esc(paper.title) + ' ' + esc(paper.code) + '</title>'
      + '<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom>'
      + '<w:DoNotOptimizeForBrowser/></w:WordDocument></xml><![endif]-->'
      + '<style>' + PRINT_CSS + '\n' + PAPER_CSS + '</style></head>'
      + '<body>' + bodyHtml(paper, opts) + '</body></html>';
  }

  /** 页面内预览：注入同一份 CSS，保证「所见即所得」 */
  function renderPreview(container, paper, opts) {
    if (!container) return;
    var styleId = 'paperCssStyle';
    container.innerHTML = '<style id="' + styleId + '">' + PAPER_CSS
      + '.paper-preview{background:#eef1f6;padding:14px;border-radius:10px;max-height:640px;overflow:auto}'
      + '.paper-preview .paper{box-shadow:0 2px 10px rgba(0,0,0,.12);border-radius:6px;max-width:860px;margin:0 auto}'
      + '</style>'
      + '<div class="paper-preview">' + bodyHtml(paper, opts) + '</div>';
  }

  /* ---------------- 导出 / 打印 ---------------- */

  function fileBase(paper) {
    return '汇川产品知识测评试卷_' + paper.audienceLabel.replace(/[\\/:*?"<>|\s]/g, '')
      + '_' + paper.code;
  }

  /**
   * 导出试卷为 PDF
   *
   * 与其他模块一致，走浏览器打印管线：在打印对话框中选择「另存为 PDF / Microsoft Print to PDF」。
   * 零依赖、零体积增量，中文由浏览器渲染；文件名经隐藏 iframe 的 document.title
   * 传递给浏览器的默认保存名。
   */
  function exportPdf(paper, opts) {
    opts = opts || {};
    var name = fileBase(paper) + (opts.withAnswer ? '_含答案' : '');
    printHtml(docHtml(paper, opts), name);
    return name + '.pdf';
  }

  /**
   * 通用：用隐藏 iframe 打印任意 HTML（避免弹窗被拦截）
   *
   * 这也是本项目导出 PDF 的唯一路径：浏览器打印对话框中的「另存为 PDF / Microsoft Print to PDF」
   * 即为 PDF 导出。相比内嵌 jsPDF 之类的方案，它零依赖、体积为 0，
   * 且能正确渲染中文（无需内嵌数 MB 的中文字体子集）。
   *
   * @param {string} html      完整文档 HTML
   * @param {string} docTitle  写入 iframe 的 document.title —— 浏览器会用它作为
   *                           「另存为 PDF」的默认文件名，因此这里传期望的 PDF 文件名
   */
  function printHtml(html, docTitle) {
    var frame = document.createElement('iframe');
    frame.setAttribute('aria-hidden', 'true');
    frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';
    document.body.appendChild(frame);
    var doc = frame.contentWindow.document;
    doc.open(); doc.write(html); doc.close();
    // doc.write 之后再设一次，确保覆盖 HTML 里的 <title>
    if (docTitle) { try { doc.title = docTitle; } catch (e) { /* 忽略 */ } }
    var win = frame.contentWindow;
    setTimeout(function () {
      try { win.focus(); win.print(); } catch (e) { /* 用户取消打印 */ }
      setTimeout(function () {
        if (frame.parentNode) frame.parentNode.removeChild(frame);
      }, 1500);
    }, 350);
  }

  /** 打印试卷 */
  function print(paper, opts) {
    printHtml(docHtml(paper, opts || {}), fileBase(paper) + (opts && opts.withAnswer ? '_含答案' : ''));
  }

  global.IqPaper = {
    build: build,
    bodyHtml: bodyHtml,
    renderPreview: renderPreview,
    exportPdf: exportPdf,
    print: print,
    printHtml: printHtml,
    answerText: answerText,
    auditLabel: auditLabel,
    TYPE_ORDER: TYPE_ORDER,
    TYPE_NAME: TYPE_NAME,
    AUD_LABEL: AUD_LABEL,
    PAPER_CSS: PAPER_CSS
  };
})(window);
