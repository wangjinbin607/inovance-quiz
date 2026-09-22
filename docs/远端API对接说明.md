# 远端后端 API 对接说明

> 用途：把本刷题工具（前端）与远端「数据库智能体」后端对接时的实测契约记录
> 记录时间：2026-09-14　|　记录方式：对远端 API 逐接口实测（非文档转述）
> ⚠️ 本文档**不含任何密钥**。访问凭据见甲方单独下发的 `REMOTE_AGENT_ACCESS.md`，请勿写入代码仓库或随本目录分发。

---

## 1. 环境信息

| 项 | 值 |
|----|-----|
| API 基地址 | `https://known-comfort-bases-enrollment.trycloudflare.com`（quick tunnel，**重建后会变**） |
| 认证方式 | `Authorization: Bearer <服务密钥>`（服务密钥直接映射为 `super_admin` 身份） |
| 后端版本 | `/api/meta` 返回 `version: "2.0"` |
| 数据库 | SQLite（`agent.db`） |
| CORS | ✅ 已开启（回显 Origin，预检 204，允许 GET/POST/PUT/PATCH/DELETE/OPTIONS + Authorization/Content-Type） |
| 实测延迟 | `/health` 约 0.5s；拉取 50 题约 1.1s（经 Cloudflare 隧道，属可接受范围） |
| 静态托管 | ❌ **不提供**。`/`、`/index.html`、`/static/*` 均返回 `{"error":"接口不存在"}` → 前端必须另行托管 |

---

## 2. 已完成：题库数据部署

170 道题已全部导入远端 `questions` 表，并经 SQL 核对：

| 维度 | 结果 |
|------|------|
| 总数 | **170** |
| 品类 | servo 34 / inverter 34 / plc 34 / hmi 34 / io 34 |
| 题型 | single 70 / multi 30 / judge 30 / short 20 / scenario 20 |
| 密级 | public 126 / internal 31 / confidential 13 |
| 难度 | beginner 60 / intermediate 76 / advanced 34 |
| 状态 | published 170 |
| 完整性 | 缺题干/解析/溯源的题数 = **0** |

导入方式：`POST /api/questions/import`，返回 `{"imported":169,"skipped":1,...}`（SRV-001 因先前单题试投已存在而跳过）。

> 回滚方式：`DELETE FROM questions`（经 `/sql`）或按 id 逐条 `DELETE /api/questions/{id}`。

---

## 3. 接口清单（已实测）

### 3.1 认证

| 方法 | 路径 | 说明 | 实测响应 |
|------|------|------|----------|
| GET | `/api/auth/me` | 当前身份 | `{"user":{id,username,name,role,dept,active,permissions[]}}` |
| POST | `/api/auth/login` | 账号登录，body `{username,password}` | 失败 401 `{"error":"用户名、密码错误或账号已停用"}`；成功结构待补 |
| POST | `/api/auth/logout` | 注销 | 服务密钥调用返回 400「服务密钥不能注销，请通过密钥轮换撤销」 |

> 服务密钥（Bearer）与账号登录是两套入口：前者用于管理/自动化，后者面向真实用户。

### 3.2 题库

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/questions` | 分页查询。参数：`category` `type` `difficulty` `security` `status` `keyword` `page` `page_size`（**page_size 上限 200**） |
| GET | `/api/questions/{id}` | 单题详情 |
| POST | `/api/questions` | 新增单题（body 为**扁平字段**，见 §4） |
| PUT | `/api/questions/{id}` | 更新单题 |
| DELETE | `/api/questions/{id}` | 删除单题（返回 `{"deleted":true,"id":"..."}`） |
| POST | `/api/questions/import` | 批量导入，body `{questions:[...]}`（1–2000 道），返回 `{imported, skipped, importedIds[]}` |

响应形态：`{"items":[ {...} ],"total":170,"page":1,"page_size":20}`

### 3.3 其它业务接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/progress` | 学习进度，附带汇总 `summary:{seen,right,wrong,pending,questionsSeen,bankTotal:170,coverage,...}` |
| GET/POST | `/api/wrong-book` | 错题本（POST 需 `question_id`） |
| GET/POST | `/api/notes` | 笔记（POST 需 `question_id`） |
| GET/POST | `/api/tasks` | 考试任务（POST 需 `title`，长度 1–200） |
| GET/POST | `/api/exams` | 考试（POST 需 `exam_id`） |
| GET/POST | `/api/users` | 用户管理（POST 需 `username`：3–80 位字母数字 `_ . @ -`，`agent` 为保留账号） |
| GET | `/api/meta` | 元数据（见 §5） |

### 3.4 SQL 直连接口（管理/运维用）

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/health` | `{"status":"ok","database":"agent.db","version":"2.0","permissions":"full SQL access"}` |
| GET | `/schema` | 全库对象（表/索引）DDL |
| POST | `/sql` | 单条 SQL，body `{"sql":"...","params":[...]}`，返回 `{columns, rows:[[...]], changes, last_insert_id}`（**rows 是数组的数组**） |
| POST | `/transaction` | 事务批量执行 |

### 3.5 已确认**不存在**的接口

`/api/practice-logs`、`/api/practice-receipts`、`/api/stats`、`/api/reports`、`/api/audit-logs`、`/api/user-settings`、`/api/sso/*`、`/api/v1/*`

> 注意：数据库里存在 `practice_logs` / `practice_receipts` / `audit_logs` / `sso_*` 等表，但**没有对外开放对应 REST 接口**，需要走 `/sql`，或请后端补充。

---

## 4. ⚠️ 字段命名差异（对接最易踩的坑）

远端 API 的字段名与本地题库文件**不完全一致**，直接平移会静默丢数据：

| 含义 | 本地 `data/*.json` | 远端 API | 说明 |
|------|--------------------|----------|------|
| 难度 | `difficulty: 1 \| 2 \| 3` | `difficulty: "beginner" \| "intermediate" \| "advanced"` | **必须映射**：1→beginner、2→intermediate、3→advanced |
| 解析 | `analysis` | **`explanation`** | 用 `analysis` 会报 400「题目存在不支持的字段」 |
| 适用人群 | `roles` | **`audience`** | 同上；`targetRoles` 等其它写法一律 400 |
| 选项 | `options: {"A":"文本"}` | 输入同左；**返回为数组** `[{"key":"A","text":"文本"}]` | 前后端需各做一次转换 |
| 题号/品类/题型/密级/状态/题干/标签/溯源 | `id` `category` `type` `security` `status` `stem` `tags` `source` | 同名 | 兼容 |

其它约定：

- 新增题目时**未传 `status` 默认为 `draft`**（草稿），要上线须显式 `status:"published"`；
- 错误响应统一为 `{"error":"...","details":...}`；状态码语义：`400` 参数错、`401` 认证失败、`403` 权限/预检、`404` 路径不存在、`405` 方法不支持、`409` 题号已存在；
- 服务端会逐字段校验并返回首个错误，可据此逐步补全 body。

---

## 5. `/api/meta` 返回（与本地前端规范一致性核对）

```json
{
  "version": "2.0",
  "database": "SQLite",
  "categories": ["servo","inverter","plc","hmi","io"],
  "types": ["single","multi","judge","short","scenario"],
  "typeScores": { "single": 1, "multi": 1.5, "judge": 1, "short": 2, "scenario": 3 },
  "roles": ["super_admin","trainer","employee","partner"],
  "difficulties": ["beginner","intermediate","advanced"],
  "security": ["public","internal","confidential"]
}
```

✅ 与本地前端 `store.js` / `engine.js` **逐项一致**：品类、题型、计分权重（1/1.5/2/3）、角色、密级完全相同；权限项 `quiz / exam / bank.read / bank.write / bank.review / bank.import / task.write / report.all / report.self / user.manage / security.*` 也与本地 `ROLE_DEFS` 一致。
唯一差异即 §4 的难度取值与两个字段名。

---

## 6. 对接阻塞项（需要甲方提供或确认）

| # | 事项 | 为什么需要 | 现状 |
|---|------|-----------|------|
| 1 | **`docs/API.md`**（业务接口说明） | 凭据文件指明它是接口依据，但远端 `/docs/API.md` 返回 404，无法获取 | ❌ 缺失 → 已用逐接口探测替代，但**练习记录上报、考试提交、统计、SSO 四类接口仍未确认** |
| 2 | **`docs/FRONTEND_HANDOFF.md`**（前端对接说明） | 涉及登录态、请求封装、错误码约定的既定契约 | ❌ 缺失 |
| 3 | **前端静态托管位置** | 远端只提供 API，不托管前端 | ❌ 待决策（同机 Nginx / 内网服务器 / Cloudflare Pages） |
| 4 | **账号策略** | 库里仅 2 个 `super_admin`（`admin_bootstrap`、`agent`），无业务账号 | ❌ 待确认命名规则、初始密码、各角色人数 |
| 5 | **固定域名** | quick tunnel 地址重建即失效，前端写死会被动 | ❌ 需固定域名 + Cloudflare Tunnel 配置/令牌 |
| 6 | 练习记录写入路径 | `POST/PUT /api/progress` 均返回 405 | ⚠️ 需确认是走 `/sql` 还是另有接口 |
| 7 | 考试提交流程 | `POST /api/exams` 仅要求 `exam_id`，交卷/判分路径未验证 | ⚠️ 需文档或后端确认 |

---

## 7. 前端对接改造方案（待确认后执行）

本前端的数据访问**全部收敛在 `assets/js/core/store.js` 一个文件**（页面层只调 `IqStore.*`），因此改造面很小：

```
新增 assets/js/core/api-store.js
  ├─ 认证：POST /api/auth/login → token 存 localStorage → 请求头 Authorization: Bearer <token>
  ├─ 题库：启动时 GET /api/questions?page_size=200 分页拉全 → 转成本地题目结构（数组化 options、难度反映射）
  ├─ 写入：saveQuestion/deleteQuestion/import → /api/questions{,/import,/{id}}
  ├─ 学习数据：progress / wrong-book / notes / exams / tasks → 对应 REST 接口
  └─ 降级：网络不可用时回落 localStorage（离线可用性保留）

store.js 增加 mode 开关：'local' | 'remote'
  └─ index.html / admin.html 按需加载，或加 URL 参数 ?api=remote 切换
```

**关键提醒**：二期形态下，**判题与密级过滤必须在服务端执行**（当前前端判分技术上可被篡改；密级目前由前端 `canSeeSecurity()` 过滤）。远端 `/api/questions` 已按身份返回可见题目，建议以服务端返回为准。

---

## 8. 复现本文档结论的方法

```powershell
# 1) 健康检查
curl.exe -H "Authorization: Bearer <服务密钥>" https://<host>/health

# 2) 元数据与题库统计（Node 脚本，避免 schannel 限制）
node -e "fetch('https://<host>/api/meta',{headers:{Authorization:'Bearer <服务密钥>'}}).then(r=>r.json()).then(j=>console.log(j))"

# 3) 直接查库核对
#    POST /sql  body {"sql":"SELECT category,COUNT(*) FROM questions GROUP BY category","params":[]}
```

> 本机 curl.exe 走 schannel 会报 `SEC_E_NO_CREDENTIALS`，**请改用 Node 的 fetch**（沙箱/受限环境下的已知限制）。
