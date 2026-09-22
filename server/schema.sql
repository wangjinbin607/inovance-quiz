-- ============================================================================
-- 汇川产品刷题工具 · 后端参考实现表结构（SQLite 方言）
-- 与《后端开发规格说明书》第一章 MySQL 脚本同构：
--   ENUM      → TEXT + CHECK 约束
--   JSON      → TEXT（存 JSON 字符串，查询用 json_extract）
--   DATETIME  → TEXT（ISO8601，本地时间）
--   BIGINT PK → INTEGER PRIMARY KEY AUTOINCREMENT
-- 生产环境请使用规格书中的 MySQL 脚本 + Spring Boot 实现。
-- ============================================================================

PRAGMA foreign_keys = ON;

-- 用户表 ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT    NOT NULL UNIQUE,
  password_hash TEXT    NOT NULL,
  name          TEXT    NOT NULL,
  role          TEXT    NOT NULL CHECK(role IN ('super_admin','trainer','employee','partner')),
  dept          TEXT    NOT NULL DEFAULT '',
  status        INTEGER NOT NULL DEFAULT 1,
  last_login_at TEXT,
  created_at    TEXT    NOT NULL,
  updated_at    TEXT    NOT NULL,
  deleted_at    TEXT,
  ext_json      TEXT
);

-- 题目主表 -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS question (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  question_no    TEXT    NOT NULL UNIQUE,
  category       TEXT    NOT NULL CHECK(category IN ('servo','inverter','plc','hmi','io')),
  type           TEXT    NOT NULL CHECK(type IN ('single','multi','judge','fill','short','scenario')),
  difficulty     TEXT    NOT NULL CHECK(difficulty IN ('beginner','intermediate','advanced')),
  security       TEXT    NOT NULL DEFAULT 'public' CHECK(security IN ('public','internal','confidential')),
  status         TEXT    NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published','archived')),
  stem           TEXT    NOT NULL,
  options        TEXT,
  answer         TEXT    NOT NULL,
  explanation    TEXT,
  source_title   TEXT,
  source_chapter TEXT,
  source_url     TEXT,
  tags           TEXT,
  audience       TEXT,
  score_weight   REAL    NOT NULL DEFAULT 1.0,
  usage_count    INTEGER NOT NULL DEFAULT 0,
  right_count    INTEGER NOT NULL DEFAULT 0,
  version        INTEGER NOT NULL DEFAULT 1,
  created_by     INTEGER,
  updated_by     INTEGER,
  created_at     TEXT    NOT NULL,
  updated_at     TEXT    NOT NULL,
  deleted_at     TEXT,
  ext_json       TEXT
);
CREATE INDEX IF NOT EXISTS idx_question_filter ON question(category, type, difficulty, security, status);

-- 用户答题记录表 -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS user_answer (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id        INTEGER NOT NULL,
  question_id    INTEGER NOT NULL,
  question_no    TEXT    NOT NULL,
  category       TEXT    NOT NULL,
  type           TEXT    NOT NULL,
  difficulty     TEXT    NOT NULL,
  mode           TEXT    NOT NULL DEFAULT 'practice'
                 CHECK(mode IN ('practice','exam','wrong_review','favorite_review')),
  user_answer    TEXT    NOT NULL,
  correct_answer TEXT    NOT NULL,
  is_correct     INTEGER,                       -- 1 / 0 / NULL(主观题待自评)
  score_got      REAL    NOT NULL DEFAULT 0,
  duration_sec   INTEGER NOT NULL DEFAULT 0,
  session_id     TEXT,
  exam_record_id INTEGER,
  answered_at    TEXT    NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_ua_user_time ON user_answer(user_id, answered_at);
CREATE INDEX IF NOT EXISTS idx_ua_user_question ON user_answer(user_id, question_id);
CREATE INDEX IF NOT EXISTS idx_ua_user_cat ON user_answer(user_id, category, is_correct);
CREATE INDEX IF NOT EXISTS idx_ua_session ON user_answer(session_id);

-- 错题本表 -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS wrong_book (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id           INTEGER NOT NULL,
  question_id       INTEGER NOT NULL,
  question_no       TEXT    NOT NULL,
  category          TEXT    NOT NULL,
  wrong_count       INTEGER NOT NULL DEFAULT 1,
  last_wrong_answer TEXT,
  first_wrong_at    TEXT    NOT NULL,
  last_wrong_at     TEXT    NOT NULL,
  status            TEXT    NOT NULL DEFAULT 'open' CHECK(status IN ('open','mastered')),
  mastered_at       TEXT,
  note              TEXT,
  created_at        TEXT    NOT NULL,
  updated_at        TEXT    NOT NULL,
  ext_json          TEXT,
  UNIQUE(user_id, question_id)
);
CREATE INDEX IF NOT EXISTS idx_wb_user_status ON wrong_book(user_id, status, last_wrong_at);

-- 考试任务表 -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS exam (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  title            TEXT    NOT NULL,
  category         TEXT    NOT NULL DEFAULT 'all',
  difficulty_scope TEXT,
  type_scope       TEXT,
  question_count   INTEGER NOT NULL DEFAULT 20,
  minutes          INTEGER NOT NULL DEFAULT 30,
  pass_score       REAL    NOT NULL DEFAULT 60,
  deadline         TEXT,
  roles            TEXT,
  allow_retake     INTEGER NOT NULL DEFAULT 1,
  status           TEXT    NOT NULL DEFAULT 'open' CHECK(status IN ('open','closed')),
  created_by       INTEGER NOT NULL,
  created_at       TEXT    NOT NULL,
  updated_at       TEXT    NOT NULL,
  deleted_at       TEXT,
  ext_json         TEXT
);

-- 考试答卷表 -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS exam_record (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  exam_id        INTEGER,
  user_id        INTEGER NOT NULL,
  scope          TEXT    NOT NULL DEFAULT '',
  question_count INTEGER NOT NULL DEFAULT 0,
  minutes        INTEGER NOT NULL DEFAULT 0,
  pass_score     REAL    NOT NULL DEFAULT 60,
  paper_snapshot TEXT    NOT NULL,
  answers        TEXT,
  detail         TEXT,
  score_got      REAL    NOT NULL DEFAULT 0,
  score_full     REAL    NOT NULL DEFAULT 0,
  percent        REAL    NOT NULL DEFAULT 0,
  right_count    INTEGER NOT NULL DEFAULT 0,
  wrong_count    INTEGER NOT NULL DEFAULT 0,
  pending_count  INTEGER NOT NULL DEFAULT 0,
  passed         INTEGER,
  status         TEXT    NOT NULL DEFAULT 'in_progress' CHECK(status IN ('in_progress','submitted')),
  started_at     TEXT    NOT NULL,
  deadline_at    TEXT    NOT NULL,
  submitted_at   TEXT,
  duration_sec   INTEGER NOT NULL DEFAULT 0,
  auto_submit    INTEGER NOT NULL DEFAULT 0,
  created_at     TEXT    NOT NULL,
  updated_at     TEXT    NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_er_user_time ON exam_record(user_id, submitted_at);

-- 收藏表 ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS favorite (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  category    TEXT    NOT NULL,
  created_at  TEXT    NOT NULL,
  UNIQUE(user_id, question_id)
);

-- 笔记表 ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS note (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  content     TEXT    NOT NULL,
  created_at  TEXT    NOT NULL,
  updated_at  TEXT    NOT NULL,
  UNIQUE(user_id, question_id)
);

-- 练习会话表 -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS practice_session (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id    TEXT    NOT NULL UNIQUE,
  user_id       INTEGER NOT NULL,
  mode          TEXT    NOT NULL DEFAULT 'random',
  scope         TEXT    NOT NULL DEFAULT '',
  total         INTEGER NOT NULL DEFAULT 0,
  right_count   INTEGER NOT NULL DEFAULT 0,
  wrong_count   INTEGER NOT NULL DEFAULT 0,
  pending_count INTEGER NOT NULL DEFAULT 0,
  score_got     REAL    NOT NULL DEFAULT 0,
  score_full    REAL    NOT NULL DEFAULT 0,
  duration_sec  INTEGER NOT NULL DEFAULT 0,
  started_at    TEXT    NOT NULL,
  ended_at      TEXT,
  question_ids  TEXT
);

-- 操作日志表 -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS audit_log (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  actor_id   INTEGER NOT NULL,
  actor_name TEXT    NOT NULL DEFAULT '',
  action     TEXT    NOT NULL,
  entity     TEXT,
  entity_id  TEXT,
  details    TEXT,
  created_at TEXT    NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_al_time ON audit_log(created_at);

-- 题目反馈表（学员报错 → 题库质量治理闭环）-----------------------------------
CREATE TABLE IF NOT EXISTS question_feedback (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id INTEGER NOT NULL,
  question_no TEXT    NOT NULL,
  user_id     INTEGER NOT NULL,
  user_name   TEXT    NOT NULL DEFAULT '',
  type        TEXT    NOT NULL DEFAULT 'other'
              CHECK(type IN ('wrong_answer','typo','unclear','outdated','other')),
  content     TEXT    NOT NULL,
  status      TEXT    NOT NULL DEFAULT 'open' CHECK(status IN ('open','resolved')),
  created_at  TEXT    NOT NULL,
  resolved_at TEXT,
  resolved_by TEXT
);
CREATE INDEX IF NOT EXISTS idx_fb_status ON question_feedback(status, created_at);
CREATE INDEX IF NOT EXISTS idx_fb_question ON question_feedback(question_id);
CREATE INDEX IF NOT EXISTS idx_al_time ON audit_log(created_at);

-- 用户设置（对应规格书 user.ext_json 的展开实现）-----------------------------
CREATE TABLE IF NOT EXISTS user_settings (
  user_id       INTEGER PRIMARY KEY,
  daily_goal    INTEGER NOT NULL DEFAULT 20,
  instant_judge INTEGER NOT NULL DEFAULT 1,
  shuffle_options INTEGER NOT NULL DEFAULT 0,
  updated_at    TEXT    NOT NULL
);

-- ============================================================================
-- 知识库模块（见 docs/知识库模块设计.md §2.4）
-- ============================================================================

-- 知识条目表 -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS knowledge (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  knowledge_no      TEXT    NOT NULL UNIQUE,          -- 知识编号 KB-SRV-001
  category          TEXT    NOT NULL CHECK(category IN ('servo','inverter','plc','hmi','io')),
  topic             TEXT    NOT NULL CHECK(topic IN ('intro','selection','param','install','fault','faq','script')),
  title             TEXT    NOT NULL,
  summary           TEXT    NOT NULL DEFAULT '',
  content           TEXT    NOT NULL,                  -- 内容块数组（JSON）
  tags              TEXT,                              -- 标签（JSON 数组）
  audience          TEXT,                              -- 适用人群 roles（JSON 数组）
  related_questions TEXT,                              -- 关联题库题号（JSON 数组）
  security          TEXT    NOT NULL DEFAULT 'public' CHECK(security IN ('public','internal','confidential')),
  status            TEXT    NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published','archived')),
  read_minutes      INTEGER NOT NULL DEFAULT 5,
  level             INTEGER NOT NULL DEFAULT 1,        -- 1 入门 / 2 进阶 / 3 深入
  sort_order        INTEGER,                           -- 新人学习路线排序（越小越靠前，未设置为 NULL）
  source_title      TEXT,
  source_url        TEXT,
  version           INTEGER NOT NULL DEFAULT 1,
  created_by        INTEGER,
  updated_by        INTEGER,
  created_at        TEXT    NOT NULL,
  updated_at        TEXT    NOT NULL,
  deleted_at        TEXT,                              -- 软删
  ext_json          TEXT
);
-- knowledge_no 的唯一性由列上的 UNIQUE 约束保证
CREATE INDEX IF NOT EXISTS idx_kb_category_topic ON knowledge(category, topic, security, status);
CREATE INDEX IF NOT EXISTS idx_kb_route ON knowledge(sort_order, level);
CREATE INDEX IF NOT EXISTS idx_kb_status ON knowledge(status, deleted_at);

-- 用户知识学习记录表 ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS user_knowledge_record (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER NOT NULL,
  knowledge_id  INTEGER NOT NULL,
  knowledge_no  TEXT    NOT NULL,
  first_read_at TEXT,
  last_read_at  TEXT,
  read_seconds  INTEGER NOT NULL DEFAULT 0,
  read_count    INTEGER NOT NULL DEFAULT 0,
  finished      INTEGER NOT NULL DEFAULT 0,
  finished_at   TEXT,
  fav           INTEGER NOT NULL DEFAULT 0,
  created_at    TEXT    NOT NULL,
  updated_at    TEXT    NOT NULL,
  UNIQUE(user_id, knowledge_id)
);
CREATE INDEX IF NOT EXISTS idx_ukr_user_time ON user_knowledge_record(user_id, last_read_at);
CREATE INDEX IF NOT EXISTS idx_ukr_knowledge ON user_knowledge_record(knowledge_id);
CREATE INDEX IF NOT EXISTS idx_ukr_user_fav ON user_knowledge_record(user_id, fav);

-- AI 客户话术对练记录表（一期只建表，接口与页面二期实现，见设计文档 §8）------
CREATE TABLE IF NOT EXISTS ai_practice_record (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER NOT NULL,
  scene_id      TEXT    NOT NULL DEFAULT '',
  scene_title   TEXT    NOT NULL DEFAULT '',
  role_play     TEXT    CHECK(role_play IN ('sales','engineer','service')),
  customer_type TEXT    CHECK(customer_type IN ('novice','pro','expert','picky')),
  turns         TEXT,                                  -- 对话轮次（JSON）
  score         INTEGER,
  score_detail  TEXT,                                  -- 分项得分（JSON）
  feedback      TEXT,
  started_at    TEXT,
  ended_at      TEXT,
  created_at    TEXT    NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_apr_user_time ON ai_practice_record(user_id, created_at);
