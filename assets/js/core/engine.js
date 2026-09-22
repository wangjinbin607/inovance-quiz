/* ==========================================================================
   汇川产品刷题工具 · 题库聚合 / 组卷 / 判题 / 统计引擎 (engine.js)
   依赖：store.js；题库数据由 bank.js 注入 window.INOVANCE_BANK
   ========================================================================== */
(function (global) {
  'use strict';

  var S = global.IqStore;

  function normCategory(c) { return c || 'unknown'; }

  /* ------------------------------------------------------------------
     一、题库聚合层
     ------------------------------------------------------------------ */

  var Bank = {
    /** 内置题库（构建产物） */
    builtin: function () {
      return Array.isArray(global.INOVANCE_BANK) ? global.INOVANCE_BANK : [];
    },

    /** 全部题目（含草稿/归档），已应用管理端编辑与删除，不做权限过滤 */
    raw: function () {
      var st = S.state;
      var del = {};
      (st.deletedQuestions || []).forEach(function (id) { del[id] = 1; });

      var merged = [];
      var index = {};

      this.builtin().forEach(function (q) {
        if (del[q.id]) return;
        var copy = Object.assign({}, q);
        if (st.questionEdits && st.questionEdits[q.id]) {
          Object.assign(copy, st.questionEdits[q.id]);
        }
        copy._builtin = true;
        merged.push(copy);
        index[q.id] = copy;
      });

      (st.customQuestions || []).forEach(function (q) {
        if (del[q.id]) return;
        var copy = Object.assign({}, q);
        if (index[q.id]) {
          // 自定义题覆盖同 id 内置题
          var i = merged.indexOf(index[q.id]);
          if (i >= 0) merged[i] = copy;
        } else {
          merged.push(copy);
        }
        index[q.id] = copy;
      });

      return merged;
    },

    /** 当前用户可见题目：密级 + 状态过滤 */
    all: function (opts) {
      opts = opts || {};
      var self = this;
      return this.raw().filter(function (q) {
        if (!S.canSeeSecurity(q.security || 'public')) return false;
        if (!opts.includeDraft) {
          if (S.questionStatus(q.id) !== 'published') return false;
        }
        return true;
      });
    },

    byId: function (id) {
      var list = this.raw();
      for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
      return null;
    },

    /** 多条件筛选 */
    filter: function (cond) {
      cond = cond || {};
      var cats = cond.categories && cond.categories.length ? cond.categories : null;
      var diffs = cond.difficulties && cond.difficulties.length ? cond.difficulties : null;
      var types = cond.types && cond.types.length ? cond.types : null;
      var roles = cond.roles && cond.roles.length ? cond.roles : null;
      var kw = (cond.keyword || '').trim().toLowerCase();
      var tags = cond.tags && cond.tags.length ? cond.tags : null;
      var secs = cond.security && cond.security.length ? cond.security : null;

      // 销售 / 采购只考查客观题：按这些人群筛选时自动把题型限定为客观题
      if (roles && roles.some(function (r) { return OBJECTIVE_ONLY_ROLES.indexOf(r) >= 0; })) {
        var allowed = types ? types.filter(function (t) { return OBJECTIVE_TYPES.indexOf(t) >= 0; }) : null;
        types = (allowed && allowed.length) ? allowed : OBJECTIVE_TYPES.slice();
      }

      return this.all(cond).filter(function (q) {
        if (cats && cats.indexOf(q.category) < 0) return false;
        if (diffs && diffs.indexOf(Number(q.difficulty)) < 0) return false;
        if (types && types.indexOf(q.type) < 0) return false;
        if (secs && secs.indexOf(q.security || 'public') < 0) return false;
        if (roles && !(q.roles || []).some(function (r) { return roles.indexOf(r) >= 0; })) return false;
        if (tags && !(q.tags || []).some(function (t) { return tags.indexOf(t) >= 0; })) return false;
        if (kw) {
          var hay = [q.id, q.stem, q.analysis, (q.tags || []).join(' '),
            q.options ? Object.keys(q.options).map(function (k) { return q.options[k]; }).join(' ') : '',
            typeof q.answer === 'string' ? q.answer : ''].join(' ').toLowerCase();
          if (hay.indexOf(kw) < 0) return false;
        }
        return true;
      });
    },

    /** 题库概览统计 */
    overview: function () {
      var list = this.all();
      var byCat = {}, byType = {}, byDiff = {}, bySec = {};
      S.CATEGORIES.forEach(function (c) { byCat[c.key] = 0; });
      S.TYPES.forEach(function (t) { byType[t.key] = 0; });
      S.DIFFS.forEach(function (d) { byDiff[d.key] = 0; });
      S.SECURITY.forEach(function (s) { bySec[s.key] = 0; });
      list.forEach(function (q) {
        byCat[q.category] = (byCat[q.category] || 0) + 1;
        byType[q.type] = (byType[q.type] || 0) + 1;
        byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1;
        bySec[q.security || 'public'] = (bySec[q.security || 'public'] || 0) + 1;
      });
      var raw = this.raw();
      return {
        total: list.length,
        rawTotal: raw.length,
        draft: raw.filter(function (q) { return S.questionStatus(q.id) === 'draft'; }).length,
        archived: raw.filter(function (q) { return S.questionStatus(q.id) === 'archived'; }).length,
        byCategory: byCat, byType: byType, byDifficulty: byDiff, bySecurity: bySec,
        allTags: (function () {
          var m = {};
          list.forEach(function (q) { (q.tags || []).forEach(function (t) { m[t] = (m[t] || 0) + 1; }); });
          return Object.keys(m).sort(function (a, b) { return m[b] - m[a]; }).slice(0, 40);
        })()
      };
    },

    catMeta: function (key) {
      for (var i = 0; i < S.CATEGORIES.length; i++) if (S.CATEGORIES[i].key === key) return S.CATEGORIES[i];
      return { key: key, name: key, short: key, color: '#7a869a' };
    },
    catName: function (key) { return this.catMeta(key).name; },
    typeName: function (key) {
      for (var i = 0; i < S.TYPES.length; i++) if (S.TYPES[i].key === key) return S.TYPES[i].name;
      return key;
    },
    diffName: function (k) {
      for (var i = 0; i < S.DIFFS.length; i++) if (S.DIFFS[i].key === Number(k)) return S.DIFFS[i].name;
      return '难度' + k;
    },
    roleName: function (k) {
      for (var i = 0; i < S.ROLES.length; i++) if (S.ROLES[i].key === k) return S.ROLES[i].name;
      return k;
    },
    secName: function (k) {
      for (var i = 0; i < S.SECURITY.length; i++) if (S.SECURITY[i].key === k) return S.SECURITY[i].name;
      return k;
    }
  };

  /* ------------------------------------------------------------------
     二、组卷引擎
     ------------------------------------------------------------------ */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /** 按题目分值权重：单选/判断 1，填空 1.5，多选 1.5，简答 2，场景 3 */
  var TYPE_SCORE = { single: 1, multi: 1.5, judge: 1, fill: 1.5, short: 2, scenario: 3 };
  /** 客观题：可自动判分（销售与采购只做这些题型） */
  var OBJECTIVE_TYPES = ['single', 'multi', 'judge', 'fill'];
  var OBJECTIVE_ONLY_ROLES = ['sales', 'purchase'];

  /** 填空题答案标准化：去空白、全角转半角、忽略大小写 */
  function normFill(s) {
    return String(s == null ? '' : s)
      .replace(/\s+/g, '')
      .replace(/[Ａ-Ｚａ-ｚ０-９（）]/g, function (c) {
        if (c === '（') return '(';
        if (c === '）') return ')';
        return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
      })
      .toLowerCase();
  }

  var Engine = {
    TYPE_SCORE: TYPE_SCORE,
    shuffle: shuffle,

    /**
     * 组卷
     * @param {object} opts
     *   mode: 'random' | 'sequential' | 'wrong' | 'fav' | 'weak'
     *   categories/difficulties/types/roles/security/keyword: 过滤条件
     *   count: 题量（0 或 null 表示全部）
     *   order: 'random' | 'category' | 'difficulty'
     */
    buildPaper: function (opts) {
      opts = opts || {};
      var mode = opts.mode || 'random';
      var pool;

      if (mode === 'wrong') {
        var wrongIds = S.wrongList(!!opts.includeResolved);
        pool = wrongIds.map(function (id) { return Bank.byId(id); }).filter(Boolean);
        pool = pool.filter(function (q) { return S.canSeeSecurity(q.security || 'public') && S.questionStatus(q.id) === 'published'; });
        // 仍应用品类等条件
        pool = this._applyFilter(pool, opts);
      } else if (mode === 'fav') {
        var favIds = S.favList();
        pool = favIds.map(function (id) { return Bank.byId(id); }).filter(Boolean);
        pool = pool.filter(function (q) { return S.canSeeSecurity(q.security || 'public') && S.questionStatus(q.id) === 'published'; });
        pool = this._applyFilter(pool, opts);
      } else if (mode === 'weak') {
        // 薄弱项：按品类正确率升序优先抽题
        var all = Bank.filter(opts);
        var byCat = {};
        all.forEach(function (q) {
          var p = S.state.progress[q.id];
          if (!p || !p.seen) { (byCat[q.category] = byCat[q.category] || []).push({ q: q, rate: -1 }); return; }
          var rate = p.right / p.seen;
          (byCat[q.category] = byCat[q.category] || []).push({ q: q, rate: rate });
        });
        var ordered = [];
        Object.keys(byCat).map(function (c) {
          var items = byCat[c];
          var avg = items.reduce(function (s, it) { return s + Math.max(it.rate, 0); }, 0) / (items.length || 1);
          return { c: c, avg: avg, items: items };
        }).sort(function (a, b) { return a.avg - b.avg; }).forEach(function (g) {
          ordered = ordered.concat(shuffle(g.items).map(function (it) { return it.q; }));
        });
        pool = ordered;
      } else {
        pool = Bank.filter(opts);
        if (mode === 'random') pool = shuffle(pool);
        else pool = pool.slice().sort(this._comparator(opts.order));
      }

      if (mode === 'random' || mode === 'wrong' || mode === 'fav' || mode === 'weak') {
        if (mode !== 'weak') pool = shuffle(pool);
      }

      var n = Number(opts.count || 0);
      if (n > 0 && pool.length > n) {
        // 抽题时兼顾题型覆盖：尽量让各题型按比例入选
        pool = this._balancedSample(pool, n);
      }
      return pool;
    },

    _applyFilter: function (list, opts) {
      var cats = opts.categories && opts.categories.length ? opts.categories : null;
      var diffs = opts.difficulties && opts.difficulties.length ? opts.difficulties : null;
      var types = opts.types && opts.types.length ? opts.types : null;
      return list.filter(function (q) {
        if (cats && cats.indexOf(q.category) < 0) return false;
        if (diffs && diffs.indexOf(Number(q.difficulty)) < 0) return false;
        if (types && types.indexOf(q.type) < 0) return false;
        return true;
      });
    },

    _comparator: function (order) {
      if (order === 'difficulty') {
        return function (a, b) { return a.difficulty - b.difficulty || (a.category > b.category ? 1 : -1) || (a.id > b.id ? 1 : -1); };
      }
      return function (a, b) {
        var ca = S.CATEGORIES.map(function (c) { return c.key; }).indexOf(a.category);
        var cb = S.CATEGORIES.map(function (c) { return c.key; }).indexOf(b.category);
        return ca - cb || a.difficulty - b.difficulty || (a.id > b.id ? 1 : -1);
      };
    },

    /** 按题型比例均衡抽题，避免抽到的全是单选 */
    _balancedSample: function (pool, n) {
      var byType = {};
      pool.forEach(function (q) { (byType[q.type] = byType[q.type] || []).push(q); });
      var typeKeys = S.TYPES.map(function (t) { return t.key; }).filter(function (k) { return byType[k] && byType[k].length; });
      if (typeKeys.length <= 1) return shuffle(pool).slice(0, n);

      var picked = [];
      var quota = {};
      var totalWeight = typeKeys.reduce(function (s, k) { return s + byType[k].length; }, 0);
      typeKeys.forEach(function (k) {
        quota[k] = Math.max(1, Math.round(n * byType[k].length / totalWeight));
      });
      typeKeys.forEach(function (k) { picked = picked.concat(shuffle(byType[k]).slice(0, quota[k])); });
      if (picked.length > n) picked = shuffle(picked).slice(0, n);
      if (picked.length < n) {
        var ids = {}; picked.forEach(function (q) { ids[q.id] = 1; });
        var rest = shuffle(pool.filter(function (q) { return !ids[q.id]; }));
        picked = picked.concat(rest.slice(0, n - picked.length));
      }
      return shuffle(picked);
    },

    /* ------------------------- 判题 ------------------------- */

    /** 规范化用户答案：返回数组（客观题）或字符串（主观题） */
    normalize: function (q, ans) {
      if (q.type === 'single' || q.type === 'multi' || q.type === 'judge') {
        if (ans == null) return [];
        if (Array.isArray(ans)) return ans.slice().sort();
        return [String(ans)].sort();
      }
      if (q.type === 'fill') {
        // 填空题按空位顺序保存，保留原始顺序（不排序）
        if (ans == null) return [];
        if (Array.isArray(ans)) return ans.map(function (x) { return String(x == null ? '' : x); });
        return [String(ans)];
      }
      return ans == null ? '' : String(ans);
    },

    /**
     * 判定一道题
     * fill 判分规则：逐空标准化比对；允许用户答案比标准答案多出少量单位/说明（长度差 ≤4 且包含标准答案）
     * @returns {{gradable:boolean, correct:boolean|null, answer:any, detail?:Array}}
     */
    judge: function (q, userAnswer) {
      var std = q.answer;
      if (q.type === 'short' || q.type === 'scenario') {
        return { gradable: false, correct: null, answer: std };
      }
      if (q.type === 'fill') {
        var stdArr = Array.isArray(std) ? std : [std];
        var userArr = Array.isArray(userAnswer) ? userAnswer : (userAnswer == null ? [] : [userAnswer]);
        var detail = stdArr.map(function (a, i) {
          var un = normFill(userArr[i]);
          var an = normFill(a);
          var ok = un === an || (un.length > an.length && un.indexOf(an) >= 0 && un.length - an.length <= 4);
          return { index: i + 1, user: userArr[i] == null ? '' : String(userArr[i]), standard: String(a), correct: ok };
        });
        var allRight = detail.length > 0 && detail.every(function (d) { return d.correct; });
        return { gradable: true, correct: allRight, answer: std, detail: detail };
      }
      var a = this.normalize(q, userAnswer);
      var b = this.normalize(q, std);
      var ok2 = a.length === b.length && a.every(function (x, i) { return x === b[i]; });
      return { gradable: true, correct: ok2, answer: std };
    },

    OBJECTIVE_TYPES: OBJECTIVE_TYPES,
    normFill: normFill,

    /** 卷面满分与得分 */
    score: function (paper, answers, selfGrades) {
      selfGrades = selfGrades || {};
      var full = 0, got = 0, rightCount = 0, wrongCount = 0, pending = 0;
      paper.forEach(function (q) {
        var w = TYPE_SCORE[q.type] || 1;
        full += w;
        var ans = answers[q.id];
        var j = Engine.judge(q, ans);
        if (!j.gradable) {
          var g = selfGrades[q.id];
          if (g === true) { got += w; rightCount++; }
          else if (g === false) { wrongCount++; }
          else { pending++; }
        } else {
          if (j.correct) { got += w; rightCount++; } else { wrongCount++; }
        }
      });
      return {
        full: full, got: got, right: rightCount, wrong: wrongCount, pending: pending,
        percent: full ? Math.round(got / full * 1000) / 10 : 0,
        objectiveRight: rightCount
      };
    },

    /** 依据已保存的逐题明细重算成绩（用于交卷后主观题自评） */
    scoreFromDetail: function (detail) {
      var full = 0, got = 0, right = 0, wrong = 0, pending = 0;
      (detail || []).forEach(function (d) {
        var w = TYPE_SCORE[d.type] || 1;
        full += w;
        if (d.correct === true) { got += w; right++; }
        else if (d.correct === false) { wrong++; }
        else pending++;
      });
      return {
        full: full, got: got, right: right, wrong: wrong, pending: pending,
        percent: full ? Math.round(got / full * 1000) / 10 : 0
      };
    },

    /* ------------------------- 统计 ------------------------- */

    stats: function () {
      var st = S.state;
      var all = Bank.all();
      var seenIds = Object.keys(st.progress).filter(function (id) { return st.progress[id].seen > 0; });
      var answered = 0, right = 0, wrong = 0;
      seenIds.forEach(function (id) {
        var p = st.progress[id];
        answered += p.right + p.wrong;
        right += p.right;
        wrong += p.wrong;
      });
      var wrongOpen = S.wrongList(false).length;
      var today = S.todayKey();
      var todayAnswered = (st.practiceLog || []).filter(function (l) { return (l.endedAt || '').slice(0, 10) === today; })
        .reduce(function (s, l) { return s + (l.total || 0); }, 0);
      (st.exams || []).forEach(function (e) {
        if ((e.submittedAt || '').slice(0, 10) === today) todayAnswered += (e.total || 0);
      });

      // 分品类正确率
      var catStat = {};
      S.CATEGORIES.forEach(function (c) { catStat[c.key] = { seen: 0, right: 0, wrong: 0, total: 0 }; });
      all.forEach(function (q) {
        if (!catStat[q.category]) catStat[q.category] = { seen: 0, right: 0, wrong: 0, total: 0 };
        catStat[q.category].total++;
      });
      seenIds.forEach(function (id) {
        var q = Bank.byId(id); if (!q || !catStat[q.category]) return;
        var p = st.progress[id];
        catStat[q.category].seen += (p.right + p.wrong) > 0 ? 1 : 0;
        catStat[q.category].right += p.right;
        catStat[q.category].wrong += p.wrong;
      });
      Object.keys(catStat).forEach(function (k) {
        var s = catStat[k];
        var tot = s.right + s.wrong;
        s.rate = tot ? Math.round(s.right / tot * 1000) / 10 : null;
        s.coverage = s.total ? Math.round(s.seen / s.total * 1000) / 10 : 0;
      });

      // 近 14 天趋势
      var trend = [];
      for (var i = 13; i >= 0; i--) {
        var d = new Date(); d.setDate(d.getDate() - i);
        var key = S.todayKey(d);
        var dayRight = 0, dayWrong = 0;
        (st.practiceLog || []).forEach(function (l) {
          if ((l.endedAt || '').slice(0, 10) === key) { dayRight += l.right || 0; dayWrong += l.wrong || 0; }
        });
        (st.exams || []).forEach(function (e) {
          if ((e.submittedAt || '').slice(0, 10) === key) { dayRight += e.right || 0; dayWrong += e.wrong || 0; }
        });
        trend.push({ date: key, label: key.slice(5), right: dayRight, wrong: dayWrong, total: dayRight + dayWrong });
      }

      // 错题品类分布
      var wrongByCat = {};
      S.CATEGORIES.forEach(function (c) { wrongByCat[c.key] = 0; });
      S.wrongList(false).forEach(function (id) {
        var q = Bank.byId(id);
        if (q) wrongByCat[q.category] = (wrongByCat[q.category] || 0) + 1;
      });

      return {
        bankTotal: all.length,
        coverage: all.length ? Math.round(seenIds.length / all.length * 1000) / 10 : 0,
        answeredTotal: answered,
        rightTotal: right,
        wrongTotal: wrong,
        rate: answered ? Math.round(right / answered * 1000) / 10 : null,
        wrongOpen: wrongOpen,
        favCount: S.favList().length,
        examCount: (st.exams || []).length,
        practiceCount: (st.practiceLog || []).length,
        todayAnswered: todayAnswered,
        dailyGoal: st.settings.dailyGoal || 20,
        streak: st.meta.streak || 0,
        catStat: catStat,
        trend: trend,
        wrongByCat: wrongByCat
      };
    },

    /** 生成推荐练习清单（薄弱品类 / 未做过的题） */
    recommend: function (limit) {
      limit = limit || 10;
      var st = S.state;
      var all = Bank.all();
      var unseen = all.filter(function (q) { return !st.progress[q.id] || !st.progress[q.id].seen; });
      var weak = Object.keys(st.progress).filter(function (id) {
        var p = st.progress[id];
        return p.seen >= 2 && p.right / p.seen < 0.6;
      }).map(function (id) { return Bank.byId(id); }).filter(Boolean);
      var list = shuffle(weak).slice(0, Math.ceil(limit / 2)).concat(shuffle(unseen));
      var seenIds = {};
      list = list.filter(function (q) {
        if (!q || seenIds[q.id]) return false;
        seenIds[q.id] = 1; return true;
      });
      return list.slice(0, limit);
    }
  };

  global.IqBank = Bank;
  global.IqEngine = Engine;
})(window);
