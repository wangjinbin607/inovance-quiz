# 汇川产品刷题工具 · 题库数据规范（BANK_SCHEMA v1）

本文件是题库产出的**唯一格式依据**。任何题库 JSON 文件必须严格符合本规范，否则无法被工具加载。

## 1. 文件位置与命名

| 品类 | 输出文件（绝对路径） |
|------|----------------------|
| 伺服 | `E:\1_Software\6_AI工具\deepseek\work_1\配置工具开发\inovance-quiz\data\servo.json` |
| 变频器 | `E:\1_Software\6_AI工具\deepseek\work_1\配置工具开发\inovance-quiz\data\inverter.json` |
| PLC | `E:\1_Software\6_AI工具\deepseek\work_1\配置工具开发\inovance-quiz\data\plc.json` |
| HMI | `E:\1_Software\6_AI工具\deepseek\work_1\配置工具开发\inovance-quiz\data\hmi.json` |
| IO 系统 | `E:\1_Software\6_AI工具\deepseek\work_1\配置工具开发\inovance-quiz\data\io.json` |

**分批扩充规则**：后续批次不要修改已有文件，而是新增 `data/<品类>-2.json`、`data/<品类>-3.json`……

| 批次 | 文件名 | 题号段 |
|------|--------|--------|
| 第 1 批 | `<品类>.json` | `<前缀>-001` ~ `<前缀>-034` |
| 第 2 批 | `<品类>-2.json` | `<前缀>-035` ~ `<前缀>-060` |
| 第 3 批 | `<品类>-3.json` | `<前缀>-061` 起 |

构建脚本 `tools/build-bank.mjs` 会读取 `data/` 下**全部** `.json` 并按题号排序合并，无需改代码。

文件内容为**纯 JSON 数组**（`[ {...}, {...} ]`），UTF-8 编码，不带 BOM，不带注释，不带尾随逗号。

> 每批交付前请执行 `node tools/build-bank.mjs --check`，它会校验字段合法性，并输出**质量体检报告**（题干重复检测、难度与密级分布合理性）。

## 2. 题目对象字段定义

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | 是 | 全局唯一，格式 `<品类前缀>-<三位序号>`，如 `SRV-001`、`INV-014`、`PLC-007`、`HMI-021`、`IO-003` |
| `category` | string | 是 | 固定取值：`servo` / `inverter` / `plc` / `hmi` / `io` |
| `type` | string | 是 | 固定取值：`single`(单选) / `multi`(多选) / `judge`(判断) / **`fill`(填空)** / `short`(简答) / `scenario`(场景分析) |
| `difficulty` | number | 是 | `1`=初级(新人/销售入门)、`2`=中级(工程师日常)、`3`=高级(疑难/方案级) |
| `stem` | string | 是 | 题干。填空题用 `____`（连续 3 个以上下划线）标记每个空位；场景题需给出完整现场背景 |
| `options` | object 或 null | 条件 | `single`/`multi` 必填，形如 `{"A":"...","B":"...","C":"...","D":"..."}`；`judge`/`fill`/`short`/`scenario` 必须为 `null` |
| `answer` | array 或 string | 是 | `single`: `["A"]`；`multi`: `["A","C"]`（**至少两个选项**）；`judge`: `["T"]` 或 `["F"]`；**`fill`: `["第一空答案","第二空答案"]`（按空位顺序，1–3 个）**；`short`/`scenario`: 字符串，参考答案（可含要点分条） |
| `analysis` | string | 是 | 专业解析：为什么对、为什么错、易混淆点、现场经验。不少于 40 字 |
| `source` | object | 是 | 文档溯源：`{"title":"...","chapter":"...","url":"..."}`。`title` 为汇川官方资料或产品页名称，`url` 为可访问的官方链接（无精确链接时用对应品类官网页面 URL） |
| `tags` | array | 是 | 关键词标签，2–5 个，如 `["SV660N","选型","EtherCAT"]` |
| `roles` | array | 是 | 适用人群，取值 **`sales`(销售)、`engineer`(技术)、`purchase`(采购)、`partner`(合作客户)**。至少 1 个 |
| `security` | string | 是 | 密级：`public`(可对客户公开) / `internal`(仅内部) / `confidential`(涉密，仅超管与讲师可见) |

### 2.1 人群与题型约束（硬性规则）

面向不同人群，题型范围不同：

| 人群 | 可用题型 | 原因 |
|------|----------|------|
| **销售 `sales`** | 单选 / 多选 / 判断 / **填空** | 销售只需掌握产品知识要点，不做主观论述题 |
| **采购 `purchase`** | 单选 / 多选 / 判断 / **填空** | 同上 |
| 技术 `engineer` | 全部六种 | 需要考查分析与表达能力 |
| 合作客户 `partner` | 全部六种 | 按需 |

**校验规则**：若某题的 `roles` 含 `sales` 或 `purchase`，则 `type` **必须**是 `single`/`multi`/`judge`/`fill` 之一 —— 构建脚本 `tools/build-bank.mjs` 会强制校验并拒绝违规题目。

## 3. 出题硬性要求

1. **100% 贴合汇川真实产品**：题干中出现的系列名（如伺服 SV660、变频器 MD500/MD800、PLC H5U/AM400、HMI IT7000、IO GL20/GR10 等）与型号必须真实存在，参数、选型逻辑、调试操作、故障排查要符合汇川资料，禁止出现通用工控空题或编造型号。
2. **三重维度划分**：每道题的 `difficulty` 与 `tags` 要能支撑「品类 × 业务场景 × 难度」检索；业务场景标签建议从：`选型`、`接线安装`、`参数配置`、`通信组网`、`调试`、`故障排查`、`维护保养`、`方案应用` 中选。
3. **难度分布**：初级约 40%、中级约 40%、高级约 20%。
4. **题型分布固定**（每品类合计 66 题）：`single` 24 题、`multi` 11 题、`judge` 11 题、`fill` 6 题、`short` 7 题、`scenario` 7 题。其中 `fill` 批次面向销售与采购人群（`roles` 为 `["sales","purchase"]`），以官方规格参数、型号命名规则为主。
5. **密级分布**：`public` ≥ 60%，`confidential` 控制在 2–4 题（放高级难度、内部调试/故障处理技巧类）。
6. **人群标注**：每题 `roles` 至少含 `engineer` 或 `sales` 之一；`purchase`（采购）优先给选型参数、型号命名、规格与认证类题目；`partner` 类题目只用 `public` 密级内容；含 `sales` 或 `purchase` 的题目**不得**出现简答 / 场景分析题。
7. `multi` 题必须真正有多个正确选项，且干扰项具备专业迷惑性（如"多选"里混入其他系列才有的功能）。
8. 解析必须解释**干扰项错在哪**，不能只重复正确答案。

## 4. 示例（照此风格产出，不要照抄）

```json
[
  {
    "id": "SRV-001",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SV660N 系列伺服驱动器在进行 EtherCAT 组网时，其站地址（Node ID）通常通过什么方式设置？",
    "options": {
      "A": "通过驱动器面板按键手动写入",
      "B": "通过上位机软件 InoDriveShop 在线分配",
      "C": "由 EtherCAT 主站扫描后自动分配，无需拨码",
      "D": "通过驱动器上的旋转拨码开关设置"
    },
    "answer": ["C"],
    "analysis": "SV660N 为 EtherCAT 总线型伺服，从站地址由主站（如 AM400、H5U 带 EtherCAT 口或第三方 PLC）在组态扫描时按拓扑顺序自动分配，因此现场不需要也不建议用拨码设定。A、B 描述的是脉冲型或早期 CANopen 产品的习惯做法；D 的旋转拨码在 SV660N 上用于其它功能设定，并非 EtherCAT 站号。现场若出现站号冲突，应从主站组态拓扑查起，而不是去改驱动器拨码。",
    "source": {
      "title": "汇川技术 SV660N 系列伺服驱动器用户手册",
      "chapter": "第 4 章 EtherCAT 通信配置",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": ["SV660N", "EtherCAT", "通信组网"],
    "roles": ["engineer", "purchase"],
    "security": "public"
  },
  {
    "id": "SRV-002",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某包装机采用 SV660P 伺服 + IS620 系列电机做横封刀轴定位，客户反馈设备连续运行 4 小时后出现定位偏差报警，停机 10 分钟再开又正常。现场环境温度约 45℃，机械负载无明显变化。请分析最可能的原因，并给出排查步骤与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 优先怀疑电机/驱动器过热导致的位置偏差或过载保护：45℃环境下电柜散热不足，驱动器温度上升后触发降额或位置偏差超限报警。\n2) 排查步骤：读取驱动器故障码与历史报警记录（d0 组/故障记录），确认是否为位置偏差过大（Er.xxx 类）或过载；用 InoDriveShop 或面板监控电机温度、驱动器温度、负载率曲线；测量电柜内部温度与进出风。\n3) 检查机械侧：皮带/联轴器热伸长、刀轴润滑不足导致阻力上升、编码器线缆在高温下弯折受力。\n4) 处理建议：改善电柜通风散热、加装风扇/空调，确认驱动器安装间距符合手册要求；核对电子齿轮比与定位完成窗口参数；若为热伸长引起的偏差，采用回零重定位或增加参考点校正。",
    "analysis": "本题考察『故障与温度关联』的现场判断能力。4 小时后出现、停机冷却后恢复，是典型热相关问题；现场最容易误判为『伺服装配不良』而盲目换件。正确路径是先取故障码与温度/负载曲线，再区分电气（驱动器降额）与机械（热伸长、润滑）两类原因。",
    "source": {
      "title": "汇川技术 SV660P 系列伺服驱动器用户手册",
      "chapter": "第 9 章 故障处理 / 第 3 章 安装与散热要求",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": ["SV660P", "故障排查", "散热"],
    "roles": ["engineer"],
    "security": "internal"
  },
  {
    "id": "SRV-061",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "按汇川 SV670 系列伺服驱动器的型号命名规则，型号「SV670 P S 5R5 I - **」中，第 5 位 S 表示的电压等级为 ____ V 级，第 6 位 I 表示的安装方式为 ____ 式。",
    "options": null,
    "answer": ["220", "基板"],
    "analysis": "SV670 的型号命名规则中，第 5 位字母代表电压等级：S 为单相/三相 220V 级，T 为三相 380V 级；第 6 位字母代表安装方式：I 为基板式（基板安装），B 为 Book 型。采购与销售在对照客户设备电压与电柜安装方式选型时，直接读型号这两位即可，无需再查规格表；容易混淆的是把第 5 位当成功率代码（功率代码实际是紧随其后的 5R5、7R6 等）。",
    "source": {
      "title": "汇川技术 SV670 系列伺服驱动器产品页（型号命名规则）",
      "chapter": "产品命名规则",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": ["SV670", "型号命名", "选型"],
    "roles": ["sales", "purchase"],
    "security": "public"
  }
]
```

## 5. 交付前自检清单

- [ ] 文件可被 `JSON.parse` 解析（建议用 `node -e "JSON.parse(require('fs').readFileSync('<文件>','utf8'))"` 自检）
- [ ] 题目数量与批次要求一致（首批 34 题 / 扩充批次 26 题 / 填空批次 6 题），题型数量与要求一致
- [ ] 所有 `id` 唯一且前缀正确
- [ ] 所有 `single`/`multi` 的 `answer` 键都存在于 `options` 中
- [ ] `multi` 题答案选项数量 ≥ 2
- [ ] `short`/`scenario` 的 `options` 为 `null`、`answer` 为字符串
- [ ] `fill` 题的 `options` 为 `null`、`answer` 为非空字符串数组，且**数组长度与题干中 `____` 空位数一致**
- [ ] 含 `sales` 或 `purchase` 人群的题目不是 `short`/`scenario`
- [ ] 无编造的产品系列或型号
