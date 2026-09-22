/* 题库数据产物（由 tools/build-bank.mjs 生成，请勿手工编辑）
   生成时间：2026/9/15 16:28:36
   题目总数：986
   数据来源：data/*.json */
window.INOVANCE_BANK = [
  {
    "id": "SRV-001",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "根据汇川官网产品说明，SV660 系列通用型伺服驱动器的功率范围是下列哪一项？",
    "options": {
      "A": "0.05kW~7.5kW",
      "B": "0.1kW~2kW",
      "C": "0.2kW~1.8kW",
      "D": "7.5kW~80kW"
    },
    "answer": [
      "A"
    ],
    "analysis": "SV660 通用型伺服驱动器的官方标称功率范围是 0.05kW~7.5kW，覆盖中小功率主流设备。B 的 0.1kW~2kW 是 SV605 经济型伺服驱动器的范围；C 的 0.2kW~1.8kW 是 MSA 系列伺服电机（以及 MS1-R 系列防爆电机）的范围；D 的 7.5kW~80kW 是 ISMG 系列大功率伺服电机的范围。把驱动器与电机的功率段混淆是选型时最常见的低级错误，报价前必须先确认是驱动器还是电机的参数。",
    "source": {
      "title": "汇川技术 SV660 通用型伺服驱动器产品页",
      "chapter": "产品简介 / 产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660",
      "功率范围",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-002",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SV680 系列高性能旗舰型伺服驱动器，官方标称的最高脉冲指令输入频率是多少？",
    "options": {
      "A": "200kpps",
      "B": "1Mpps",
      "C": "4Mpps",
      "D": "8Mpps"
    },
    "answer": [
      "D"
    ],
    "analysis": "SV680 系列官方标称最高脉冲指令输入频率为 8Mpps，配合 3.5kHz 速度环带宽与 26bit 多圈绝对值编码器，用于高端装备的高速高精定位。A~C 均为明显偏低或凭空给出的数值：200kpps 量级是早期通用型伺服的水平，1Mpps、4Mpps 在汇川官方资料中没有对应表述。给客户介绍 SV680 时，脉冲频率、速度环带宽、编码器位数是三个必须一起讲的硬指标，单独说一个容易被追问。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "脉冲指令",
      "性能指标"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-003",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SV630 经济型伺服驱动器官方标称所配绝对值编码器的分辨率是多少？",
    "options": {
      "A": "17bit",
      "B": "18bit",
      "C": "23bit",
      "D": "26bit"
    },
    "answer": [
      "B"
    ],
    "analysis": "SV630 经济型伺服官方标称绝对值编码器分辨率为 18bit（约 4.94 角秒），定位是\"易安装调试、极致性价比\"。A 的 17bit 官方无此表述；C 的 23bit 是 SV660、SV670、IS650 等系列所用编码器位数；D 的 26bit 是 SV680 旗舰系列（26bit 安全型多圈绝对值电机）以及 MS1-R 系列真绝对值产品可提供的最高位数。销售在低精度、低成本场合推荐 SV630 即可，不必硬推 23bit；反过来，高精度场合若只报 SV630 的 18bit，会低估方案能力。",
    "source": {
      "title": "汇川技术 SV630 经济型伺服驱动器产品页",
      "chapter": "产品特点及优点 / 精准",
      "url": "https://www.inovance.com/portal/product/details?productId=270"
    },
    "tags": [
      "SV630",
      "编码器",
      "分辨率"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-005",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MS1-R 系列伺服电机官方标称的机座号范围是下列哪一项？",
    "options": {
      "A": "20mm~100mm",
      "B": "40mm~130mm",
      "C": "40mm~180mm",
      "D": "60mm~180mm"
    },
    "answer": [
      "C"
    ],
    "analysis": "MS1-R 系列伺服电机的官方标称是功率 0.05kW~7.5kW、机座号 40mm~180mm，并提供多种惯量配置与转速段配置。B 的 40mm~130mm 是 MSA 系列（功率 0.1kW~1.8kW）的机座号范围；D 的 60mm~130mm 是 MS1-R 系列增安型防爆电机的机座号（此处 60mm 起）——把 MSA 与 MS1-R、把防爆型号与通用型号的范围混用，会导致机械安装尺寸与法兰选错。现场报机座号之前一定要回到对应系列的选型手册核对。",
    "source": {
      "title": "汇川技术 MS1-R 系列伺服电机产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "伺服电机",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-006",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "关于汇川 SV660 系列伺服驱动器的 STO 功能，下列描述正确的是？",
    "options": {
      "A": "STO 为选配扩展卡功能，标准机型不具备",
      "B": "STO 为标配功能，可防止故障状态下造成触电或机械伤害",
      "C": "STO 仅 SV680 系列具备，SV660 系列不具备",
      "D": "STO 是用于提升伺服响应带宽的性能功能"
    },
    "answer": [
      "B"
    ],
    "analysis": "SV660 官方资料写明标配功能安全 STO（Safe Torque Off，安全转矩关断），作用是防止故障状态造成触电或机械伤害，同时标配动态制动。A 把 STO 说成选配，是把它和 SV680 的\"扩展安全功能模块（SS1/SS2/SLS/SBC/SOS/SSM/SDI）\"混淆了；C 完全不成立，STO 在 SV660、SV670、SV680 上都是标配；D 把安全功能与性能指标混为一谈，STO 与响应带宽无关。给客户讲安全功能时，要区分\"标配 STO\"与\"选配扩展安全功能\"。",
    "source": {
      "title": "汇川技术 SV660 通用型伺服驱动器产品页",
      "chapter": "产品特点 / 功能安全",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660",
      "STO",
      "功能安全"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-008",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SV605 经济型伺服驱动器官方标称的功率范围是下列哪一项？",
    "options": {
      "A": "0.05kW~7.5kW",
      "B": "0.1kW~2kW",
      "C": "0.2kW~0.75kW",
      "D": "1kW~5kW"
    },
    "answer": [
      "B"
    ],
    "analysis": "SV605 官方标称功率范围 0.1kW~2kW，采用以太网通讯接口，支持 EtherCAT、Modbus、CANopen 和 CANlink，定位是\"小型自动化设备的经济之选\"。A 是 SV660、SV670、SV630 等系列的范围；C 的 0.2kW~0.75kW 是 SVD60 低压直流伺服驱动器的范围；D 在汇川官方资料中没有对应系列。SV605 与 SV630 价位接近，选型时要按实际功率点、通信方式和是否需要全闭环来区分，不能只看\"经济型\"三个字。",
    "source": {
      "title": "汇川技术 SV605 经济型伺服驱动器产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=541"
    },
    "tags": [
      "SV605",
      "功率范围",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-010",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SVD60 系列低压伺服驱动器官方标称的功率范围与支持的通信方式组合，正确的是？",
    "options": {
      "A": "0.2kW~0.75kW，支持 CANopen 和 EtherCAT",
      "B": "0.05kW~7.5kW，支持 EtherCAT、PROFINET、CANopen",
      "C": "0.1kW~2kW，支持 EtherCAT、Modbus、CANlink",
      "D": "0.75kW~5kW，支持 Modbus 和 EtherCAT"
    },
    "answer": [
      "A"
    ],
    "analysis": "SVD60 官方表述为功率范围 0.2kW~0.75kW、支持 CANopen 和 EtherCAT 控制方式，适用于物流、医药、电子制造、锂电、汽车、机床等行业，主打小体积与低压直流供电平台。B 混入了交流伺服的功率段与 PROFINET；C 是 SV605 的参数；D 的功率段在汇川官方资料中没有依据，且 SVD60 官方未提 Modbus。低压伺服常用于 AGV、穿梭车等车载场合，选型时除了功率和通信，还要确认供电电压与电池平台的匹配。",
    "source": {
      "title": "汇川技术 SVD60 低压伺服驱动器产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=509"
    },
    "tags": [
      "SVD60",
      "低压伺服",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-011",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MX3 第二代电主轴电机的官方定位与应用方式是？",
    "options": {
      "A": "数控机床主轴电机，需配通用伺服驱动器独立使用",
      "B": "织机主轴直驱电机，与汇川 TAJ 系列 / TWJ 控制柜配合构成织机主轴打纬装置",
      "C": "AGV 行走驱动电机，与 SVD60 低压伺服配套",
      "D": "风电变桨专用电机，与变桨控制系统配套"
    },
    "answer": [
      "B"
    ],
    "analysis": "MX3 属于无框式直驱电机品类，官方说明是\"织机主轴直驱电机，具有优越的转矩-体积比、转矩-惯量比，与汇川 TAJ 系列 / TWJ 控制柜一起配合使用，构成高效节能、便捷安装、极简维护、无极调速的织机主轴打纬装置\"。A 是把它误当通用机床主轴；C 混淆了 SVD60 低压伺服的应用场合；D 描述的是 P 系列的 MVP 变桨电机。行业专用电机必须成套按官方推荐的电机+控制柜组合推介，不能拆开单卖。",
    "source": {
      "title": "汇川技术 MX3 第二代电主轴电机产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=399"
    },
    "tags": [
      "MX3",
      "直驱电机",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-012",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "根据汇川 SV605 经济型伺服驱动器的官方电气规格，型号中的容量代码 S5R5 对应的驱动器连续输出电流是多少？",
    "options": {
      "A": "2.8Arms",
      "B": "4.2Arms",
      "C": "5.2Arms",
      "D": "8.5Arms"
    },
    "answer": [
      "B"
    ],
    "analysis": "SV605 官方电气规格表中的单相 220V 等级一栏：Size A 机型 S2R8 连续输出电流 2.2Arms、Size B 机型 S5R5 为 4.2Arms、Size C 机型 S7R6 为 5.2Arms、Size D 机型 S012 为 8.5Arms（同一规格表中 S2R8 的最大输出电流为 6.6Arms、S5R5 为 12Arms、S7R6 为 13Arms、S012 为 23.1Arms，不要与连续输出电流混淆）。A、C、D 分别取自同表中 S2R8、S7R6 与 S012 的连续输出电流值，属于把相邻机型的数值搬过来，是最典型的干扰设计。结论：容量代码与连续输出电流的对应关系必须以官方规格表逐行核对，既不能按代码里的数字直接推断，也不能只看 kW 一栏。",
    "source": {
      "title": "汇川技术 SV605 经济型伺服驱动器产品页",
      "chapter": "电气规格 / 单相 220V 等级驱动器电气规格",
      "url": "https://www.inovance.com/portal/product/details?productId=541"
    },
    "tags": [
      "SV605",
      "容量代码",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-014",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MSA 系列伺服电机官方标称的功率范围与机座号是下列哪一项？",
    "options": {
      "A": "0.05kW~7.5kW，机座号 40mm~180mm",
      "B": "0.1kW~1.8kW，机座号 40mm~130mm",
      "C": "0.2kW~1.8kW，机座号 60mm~130mm",
      "D": "7.5kW~80kW，机座号 130mm~280mm"
    },
    "answer": [
      "B"
    ],
    "analysis": "MSA 系列官方标称功率 0.1kW~1.8kW、机座号 40mm~130mm，主打高性价比、极致长度（长度方向大幅优化），适用于木工、物流、机械手及离散行业。A 是 MS1-R 系列的功率与机座范围；C 的 0.2kW~1.8kW、60mm~130mm 是 MS1-R 系列增安型防爆电机的范围；D 的 7.5kW~80kW 是 ISMG 大功率伺服电机的功率段。同一份图纸上换电机系列会连带影响安装尺寸与惯量匹配，选型表要按系列分别核对。",
    "source": {
      "title": "汇川技术 MSA 系列伺服电机产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=593"
    },
    "tags": [
      "MSA",
      "伺服电机",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-018",
    "category": "servo",
    "type": "multi",
    "difficulty": 1,
    "stem": "根据汇川官网对 SV630 系列经济型伺服驱动器的说明，下列哪些属于其官方标称的产品特点？",
    "options": {
      "A": "2kHz 速度环响应带宽",
      "B": "绝对值编码器分辨率达到 18bit，约相当于 4.94 角秒",
      "C": "EtherCAT 总线伺服可支持 1ms 内同步 100 个轴",
      "D": "支持 ABZ 正交脉冲全闭环"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均出自 SV630 官方页面的\"快速\"与\"精准\"栏目：2kHz 速度环带宽、18bit 绝对值编码器（约 4.94 角秒）、EtherCAT 总线伺服支持 1ms 内同步 100 个轴。D 是干扰项——官方把\"支持 ABZ 正交脉冲全闭环\"写在 SV670 高端型的卖点里，SV630 的官方特点栏没有这一项。经济型产品不该按中高端产品的功能去承诺，客户若要全闭环请走 SV670 及以上系列。",
    "source": {
      "title": "汇川技术 SV630 经济型伺服驱动器产品页",
      "chapter": "产品特点及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=270"
    },
    "tags": [
      "SV630",
      "性能指标",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-024",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 IS650 中大功率伺服的官方资料中，明确标注其编码器防护等级为 IP67，可降低编码器受污染的风险。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。IS650 官方产品页写明\"PTC 保护功能，编码器 IP67 级别防护\"，配合柔性连接的抗震编码器结构（抗振 5G），针对大功率伺服常见的高振动、多粉尘环境设计，例如弹簧机、开平机、塑料机械、纺织机械等。注意这里说的是编码器部位的防护等级，不要与整机电机本体的防护等级混为一谈；宣传时把部件指标说成整机指标，容易引起客户争议。",
    "source": {
      "title": "汇川技术 IS650 中大功率伺服驱动器产品页",
      "chapter": "产品特点及优点 / 高抗震动 性价比 安全性",
      "url": "https://www.inovance.com/portal/product/details?productId=272"
    },
    "tags": [
      "IS650",
      "防护等级",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-025",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 MS1-R 系列伺服电机的官方标称能效满足国家一级能效标准。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。MS1-R 系列官方产品特点即为\"更小尺寸，更高刚性，更低温升，能效满足国家一级能效标准，更全系列，更高转速\"。能效等级在节能考核、能耗审计类项目中常被客户直接追问，属于可以直接对外的公开卖点。需要提醒的是，能效指标要按官方选型手册对应到具体型号规格，不能把系列级结论无限外推到整个机座号范围。",
    "source": {
      "title": "汇川技术 MS1-R 系列伺服电机产品页",
      "chapter": "产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "能效",
      "伺服电机"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-027",
    "category": "servo",
    "type": "short",
    "difficulty": 1,
    "stem": "请说明汇川 SV660、SV670、SV680 三个系列伺服驱动器的定位差异，并各举出一项官方标称的关键性能指标。",
    "options": null,
    "answer": "参考答案要点：\n1）SV660 通用型伺服驱动器：官方定位\"通用小钢炮，场景全覆盖\"，面向中小功率通用设备；官方标称速度环带宽 3kHz、搭配 23bit 绝对值编码器，支持 EtherCAT、Modbus、CANopen、CANlink、PROFINET 等通信协议，标配 STO 与动态制动，功率范围 0.05kW~7.5kW。\n2）SV670 高端型伺服驱动器：官方定位\"国产中高端装备的专业之选\"，面向对精度和响应要求更高的中高端设备；官方标称响应带宽 3.2kHz，采用 Type-C 接口实现免上电调试，支持 ABZ 正交脉冲全闭环，具备 16 段工艺段控制模式，搭配 23bit 绝对值编码器。\n3）SV680 高性能旗舰型伺服驱动器：官方定位\"国产高端装备的突围之选\"，融合汽车级质量设计标准，提供 5 年整机质保；官方标称 3.5kHz 速度环带宽、最高脉冲指令输入 8Mpps、26bit 安全型多圈绝对值电机、最高转速 7000rpm，标配 STO 与动态制动、标配 EtherCAT 总线 FSoE（PROFINET 版为 PROFIsafe），内置抱闸输出与 PTC 检测，并具备黑匣子功能。\n4）选型落点：通用设备优先 SV660，中高端与需要全闭环/免上电调试的场合考虑 SV670，高端装备、需要功能安全扩展与最高带宽的场合选 SV680；三者的功率范围均为 0.05kW~7.5kW（中小功率段），更大功率需转向 IS650、ISMG 等中大功率平台。",
    "analysis": "本题考察销售与工程师对汇川伺服主推系列\"分档\"的理解。答错的典型表现是只报带宽不看编码器位数与安全功能，或把 SV680 的 26bit/7000rpm 指标张冠李戴到 SV660 上。实际报价时，三个系列的差价与交期差异明显，先在客户面前把定位讲清楚，再谈具体型号，能显著减少后期改型。",
    "source": {
      "title": "汇川技术伺服产品页（SV660 / SV670 / SV680 系列伺服驱动器）",
      "chapter": "产品简介与产品特点",
      "url": "https://www.inovance.com/portal/product/list?typeId=13"
    },
    "tags": [
      "SV660",
      "SV670",
      "SV680",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-037",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SVD60 低压伺服驱动器规格表中，容量代码“023”对应的驱动器功率与连续输出电流是？",
    "options": {
      "A": "0.75kW，连续输出电流 23Arms",
      "B": "0.4kW，连续输出电流 12Arms",
      "C": "0.2kW，连续输出电流 6.5Arms",
      "D": "1.5kW，连续输出电流 8.5Arms"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方 SVD60 电气规格表列出三档容量代码：6R5 对应 0.2kW、连续输出电流 6.5Arms、最大输出电流 22.8Arms；012 对应 0.4kW、连续 12Arms、最大 42Arms；023 对应 0.75kW、连续 23Arms、最大 62Arms，因此 A 正确。B、C 分别取自 012 与 6R5 两档，属于把相邻档位的数值搬过来；D 的 1.5kW/8.5Arms 是 SV605 交流伺服单相 220V 等级 Size D（S012）的参数，把交流伺服数据套到低压直流平台上会直接选错档位。现场只按“功率够用”下单、忽略连续输出电流，是低压伺服带载能力不足的常见根因。",
    "source": {
      "title": "汇川技术 SVD60 低压伺服驱动器产品页",
      "chapter": "规格参数 / 电气规格",
      "url": "https://www.inovance.com/portal/product/details?productId=509"
    },
    "tags": [
      "SVD60",
      "容量代码",
      "选型",
      "低压伺服"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-038",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SVD60 低压伺服驱动器官方规格表中，主电路电源（VDC）范围与“启机电压尖峰”指标分别是？",
    "options": {
      "A": "主电路电源 DC24V~72V；启机电压尖峰 ≤80V",
      "B": "主电路电源 DC12V~48V；启机电压尖峰 ≤60V",
      "C": "主电路电源 DC48V~110V；启机电压尖峰 ≤150V",
      "D": "主电路电源 AC200V~240V；启机电压尖峰 ≤400V"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方 SVD60 电气规格写明主电路电源（VDC）为 24~72、“启机电压尖峰(V) ≤80”，面向 24V/48V/72V 级直流平台（如 AGV、穿梭车的电池或直流母线），A 正确。B、C 的电压段在官方规格表中没有对应表述，属于凭空给出的区间；D 的 AC200V~240V 是交流伺服（如 SV605）的主电路电源范围，低压直流伺服与交流伺服是两套完全不同的供电体系。低压平台选型除了电压范围，还要确认电池实际电压波动、回馈能量处理与是否外接制动电阻，否则容易出现上电即报过压、或亏电时母线跌落触发欠压保护。",
    "source": {
      "title": "汇川技术 SVD60 低压伺服驱动器产品页",
      "chapter": "规格参数 / 电气规格（主回路）",
      "url": "https://www.inovance.com/portal/product/details?productId=509"
    },
    "tags": [
      "SVD60",
      "低压直流",
      "接线安装",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-039",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SV660 通用型伺服驱动器官方“调试简易”卖点中，用于降低调试难度的自动增益调整功能是？",
    "options": {
      "A": "STune、ETune 自动增益调整",
      "B": "AutoTuning Pro 与 ServoStudio 向导",
      "C": "OneTouch 一键整定与 SmartTune",
      "D": "免调试出厂预置，现场无需任何调整"
    },
    "answer": [
      "A"
    ],
    "analysis": "SV660 官方产品页“调试简易”栏目原文为“STune、ETune自动增益调整，大幅降低调试难度，提升调试效率”，A 正确。B、C 的功能名称在汇川官方资料中没有对应表述，属于编造；D 把“免调试”理解成完全不需要整定，与官方表述不符——汇川提供出厂预调试、免调试使用能力的产品是 MCS1 系列伺服减速电机（官方说明“在产品出厂前进行调试，实现免调试使用”），通用伺服仍要按机械刚性做增益调整。现场建议顺序：先做惯量辨识与刚性表选择，再用自动增益调整收尾，最后用定位测试验证，避免直接上高增益造成啸叫与机械振动。",
    "source": {
      "title": "汇川技术 SV660 通用型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特性及优点（调试简易）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660",
      "调试",
      "参数配置",
      "STune"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-040",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 SV670 高端型伺服驱动器除定位与安全卖点外，官方还标注了一项面向压装/力控场景的集成工艺功能，它是？",
    "options": {
      "A": "内置伺服压力控制功能，实现 3C 产品精准力控",
      "B": "内置电子凸轮与飞剪功能，可替代机械凸轮",
      "C": "内置卷绕张力闭环功能，用于锂电卷绕设备",
      "D": "内置龙门同步功能，用于双驱龙门机构"
    },
    "answer": [
      "A"
    ],
    "analysis": "SV670 官方产品页“集成工艺”栏目原文即“内置伺服压力控制功能，实现3C产品精准力控”，把力控能力做进驱动器，可减少上位机与额外力控控制器的投入，A 正确。B 的电子凸轮/飞剪、C 的卷绕张力闭环在 SV670 官方页面上没有对应表述，属于把专用机型或其它产品线的功能套用过来；D 的龙门同步是 SV680 系列官方标注的功能（适用于刚性与柔性龙门机构），不是 SV670 的“集成工艺”卖点。在 3C 装配、压装设备上推介 SV670 时应把力控作为差异化点，同时确认压力检测方式与工艺参数由哪一级控制器下发。",
    "source": {
      "title": "汇川技术 SV670 高端型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特性及优点（集成工艺）",
      "url": "https://www.inovance.com/portal/product/details?productId=345"
    },
    "tags": [
      "SV670",
      "压力控制",
      "方案应用",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-042",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MS1-R 系列伺服电机官方“更全系列”卖点中，关于机座号与电压、惯量、编码器的扩展，下列描述正确的是？",
    "options": {
      "A": "60/80 机座增加超小惯量，100/130/180 机座增加 220V 电压电机，并增加 26 位多圈绝对值编码器及功能安全型 26 位多圈绝对值编码器",
      "B": "仅 40 机座提供超小惯量，其余机座只提供标准惯量",
      "C": "全系列统一为 380V 电压，不提供 220V 机型",
      "D": "新增的是 17 位增量式编码器，用于替代原有多圈绝对值编码器"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方“更全系列”原文明确：60/80 机座增加超小惯量，更适用于快点点位控制场合；100、130、180 机座增加 220V 电压电机；增加 26 位多圈绝对值编码器及功能安全型 26 位多圈绝对值编码器，A 正确。B 与官方表述相反；C 忽略了官方“增加 220V 电压电机”的说明，而供电电压常直接决定该机座能否选用；D 把编码器规格说低了——MS1-R 是在原有多圈绝对值基础上增加 26 位与功能安全型 26 位产品，而不是退回增量式。做替换选型时电压、惯量与编码器三项要同时核对，任何一项不符都要重新核算转矩与惯量比。",
    "source": {
      "title": "汇川技术 MS1-R 系列伺服电机产品页",
      "chapter": "产品概览 / 更全系列",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "选型",
      "编码器",
      "惯量"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-044",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MSA 系列伺服电机的官方规格与卖点中，下列描述正确的是？",
    "options": {
      "A": "提供 220V 和 380V 两款型号电机，带 18 位多圈绝对值编码器，全系列满足 CE 认证",
      "B": "仅提供 220V 型号，配 23 位增量式编码器，无 CE 认证",
      "C": "提供 220V 和 380V 两款型号电机，带 26 位多圈绝对值编码器",
      "D": "仅提供 380V 型号，带 17 位单圈绝对值编码器，认证情况未标注"
    },
    "answer": [
      "A"
    ],
    "analysis": "MSA 系列官方卖点原文包含“更全系列，有220V和380V电压两款型号电机”“带18位多圈绝对值编码器”“全系列满足CE认证”，A 正确。B 把电压型号、编码器位数与认证三项全部说反；C 前半句正确但把编码器提到 26 位——26 位多圈绝对值（含功能安全型）是 MS1-R 系列新增的能力，MSA 官方标注为 18 位多圈绝对值；D 的“仅 380V 单一型号”与 17 位说法均无官方依据。MSA 定位高性价比、极致长度，适用于木工、物流、机械手与离散行业设备，替换选型时电压与编码器位数是两道必查项。",
    "source": {
      "title": "汇川技术 MSA 系列伺服电机产品页",
      "chapter": "产品概览 / 产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=593"
    },
    "tags": [
      "MSA",
      "伺服电机",
      "选型",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-050",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 SV630 经济型伺服驱动器官方标注“配线简单，省去原点和限位，一键式调整”。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。SV630 官方产品页“方便易用”栏目的原文即“配线简单，省去原点和限位，一键式调整”，这是它面向小型设备、追求易安装调试的核心卖点之一；同页还标注 2kHz 速度环带宽与 18bit 高精度编码器。需要提醒的是，“省去原点和限位”是接线与配置层面的便利（绝对值系统无需原点开关与限位开关也能建立坐标），并不意味着可以省略机械硬限位等安全措施，安全设计仍要按设备安全要求独立考虑。销售把这项便利讲清楚，能显著降低客户的接线与调试工时。",
    "source": {
      "title": "汇川技术 SV630 经济型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特点及优点（方便易用）",
      "url": "https://www.inovance.com/portal/product/details?productId=270"
    },
    "tags": [
      "SV630",
      "接线安装",
      "调试",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-051",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 SV605 经济型伺服驱动器官方标注“安装体积较上一代减小 15%”，并支持“免工具接线”。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。SV605 官方产品页“小巧易用”栏目原文为“安装体积较上一代减小15%”，同栏目还标注“免工具接线”；该系列功率范围 0.1kW~2kW，采用以太网通讯接口，支持 EtherCAT、Modbus、CANopen 和 CANlink，官方标称 2kHz 速度环带宽与 18bit 高精度编码器。易错点在于把“体积减小”误认为性能下降：官方同时保留了 2kHz 带宽与 18bit 编码器，属于同档经济型水平。电柜空间紧张的小型设备（如包装、物流分拣）选型时，体积、接线方式与散热间距要一起算，驱动器排布间距不足会直接影响长期可靠性。",
    "source": {
      "title": "汇川技术 SV605 经济型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特点及优点（小巧易用）",
      "url": "https://www.inovance.com/portal/product/details?productId=541"
    },
    "tags": [
      "SV605",
      "接线安装",
      "选型",
      "体积"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-052",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 MCS1 系列伺服减速电机把 MS1 系列伺服电机与精密行星齿轮箱耦合为一体，并在出厂前完成调试，客户可实现免调试使用。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。官方对 MCS1 的说明是“伺服减速电机通过耦合汇川技术MS1系列伺服电机 & 精密行星齿轮箱，搭配伺服驱动算法优化，高效率的将精度与运动控制相融合，并在产品出厂前进行调试，实现免调试使用，为客户提供TCO与TVO价值”；官方条目还写明“标配23bit多圈绝对值编码器”“油脂润滑免维护、IP65”“齿轮箱背隙≤3arc-min”“可承受2.5~3.5倍转矩过载”，并采用机电一体模块化平台理念。易混点是把“免调试”理解为不需要任何现场确认：机械安装同轴度、负载惯量匹配、抱闸与限位接线，以及配套伺服驱动器的型号与参数仍需逐一核对。减速电机一体方案的价值在于缩短客户的选型与调试链条，销售应把省下的工时与维护便利量化给客户。",
    "source": {
      "title": "汇川技术 MCS1 系列伺服减速电机产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=375"
    },
    "tags": [
      "MCS1",
      "减速电机",
      "方案应用",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-061",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 SV670 高端型伺服驱动器的型号标识为“SV670 P S 5R5 I - **”。按官方命名规则，型号中第③位的字母 S 表示电压等级为 ____ V，第⑤位的字母 I 表示安装方式为 ____ 安装。",
    "options": null,
    "answer": [
      "220",
      "基板"
    ],
    "analysis": "答案依据汇川官网 SV670 高端型伺服驱动器详情页的“驱动器命名规则”：第③位为电压等级，S 表示 220V 等级、T 表示 380V 等级；第⑤位为安装方式，I 表示基板安装。易错点是把 S/T 误读成功率或速度等级，或者把第③位与第④位混淆——第④位 5R5 才是额定输出电流（5.5A），型号中第⑥位的非标规格代码（空缺=标准机、FH=高防护机型、FS=STO 功能安全）也常被误当成安装方式。采购核价时只要读错一位字母，订到的就是不同电压等级或不同结构形态的机型。",
    "source": {
      "title": "汇川技术 SV670 高端型伺服驱动器产品页",
      "chapter": "产品概览 / 驱动器命名规则",
      "url": "https://www.inovance.com/portal/product/details?productId=345"
    },
    "tags": [
      "SV670",
      "命名规则",
      "选型",
      "采购核对"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-062",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "按汇川 MS1 系列伺服电机的命名规则，型号“MS1H1-40B30CB-A331Z”中的第⑤位代码“30C”表示该电机的额定转速为 ____ rpm；第⑦位代码“A3”表示编码器类型为 ____ bit 多圈绝对值编码器。",
    "options": null,
    "answer": [
      "3000",
      "23"
    ],
    "analysis": "答案依据汇川官网 MS1 系列伺服电机命名规则：第⑤位为额定转速，以 C 表示 ×100（如 30C 即 3000rpm），B 表示 ×10；第⑦位为编码器类型，A3 即 23bit 多圈绝对值编码器。易错点有两处：一是把 30C 的乘数记成 ×10 而算成 300rpm，忽略了 B 与 C 是两个不同的乘数档；二是把编码器类型记成 26bit——26bit 多圈绝对值（含功能安全型）是 MS1-R 系列后续新增的配置，命名规则表中 A3 对应的仍是 23bit。报价与技术协议里的转速与编码器位数都从型号读出，读错会直接影响驱动器容量与精度匹配。",
    "source": {
      "title": "汇川技术 SV670 高端型伺服驱动器产品页",
      "chapter": "产品概览 / 电机命名规则（MS1 系列伺服电机）",
      "url": "https://www.inovance.com/portal/product/details?productId=345"
    },
    "tags": [
      "MS1",
      "伺服电机",
      "命名规则",
      "编码器"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-063",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 SV660 系列通用型伺服驱动器的官方功率范围是 ____ kW ~ ____ kW（按官方一位小数写法只填数字，如 0.05），官方标称其编码器为 ____ bit 高精度编码器。",
    "options": null,
    "answer": [
      "0.05",
      "7.5",
      "23"
    ],
    "analysis": "答案依据汇川官网 SV660 系列通用型伺服驱动器产品页：功率范围 0.05kW~7.5kW，官方“性能优越”栏目明确标注“3kHz 速度环带宽，23bit 高精度编码器”。易错点是把驱动器功率范围与伺服电机的功率范围混用，或记成 SV605 的 0.1kW~2kW、SVD60 的 0.2kW~0.75kW；编码器方面常见错误是写成 18bit（那是 SV630/SV605 经济型平台的官方位数）或 26bit（那是 SV680 旗舰型与 MS1-R 系列新增配置的位数）。给客户做选型时，功率段、编码器位数与速度环带宽三项要成套讲，单报一项很容易被追问后自相矛盾。",
    "source": {
      "title": "汇川技术 SV660 通用型伺服驱动器产品页",
      "chapter": "产品简介 / 产品特点及优点（性能优越）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660",
      "功率范围",
      "编码器",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-067",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "某设备需要控制电机以精确的位置停下来（例如停在某个角度），并具备快速响应能力。应优先选择以下哪种产品？",
    "options": {
      "A": "变频器 + 普通异步电机",
      "B": "伺服驱动器 + 伺服电机",
      "C": "软启动器",
      "D": "变频器 + 变频电机"
    },
    "answer": [
      "B"
    ],
    "analysis": "停在某个角度属于位置控制，必须有位置环闭环：伺服驱动器接收脉冲或总线位置指令，用编码器反馈构成位置、速度、电流三环，才能做定点停止并保证快速响应。A 与 D 都是变频调速方案，变频器本质是速度控制（V/F 或矢量控制），标准机型不带位置环，最多加编码器做速度闭环，无法保证精确停在指定角度；变频电机只是把普通异步电机改成适应变频供电的绝缘与冷却结构，控制能力没有变化。C 的软启动器只用于降低异步电机启动电流，启动完成后即旁路，根本不具备调速与定位能力。销售在客户说“要停得准、响应快”时，应先确认是否需要位置控制，需要就直接进伺服，不要被“变频器也能调速”带偏。",
    "source": {
      "title": "汇川技术 SV660 通用型伺服驱动器产品页（产品简介 / 控制模式）",
      "chapter": "产品简介 / 位置控制与速度控制模式",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "伺服选型",
      "定位控制",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-068",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "查看伺服电机型号“MS1H1-20B30CB-A63*R”，其中“20B”表示的含义是？",
    "options": {
      "A": "电机额定电流 20A",
      "B": "电机额定功率 200W",
      "C": "电机额定功率 2.0kW",
      "D": "电机额定转矩 20N·m"
    },
    "answer": [
      "B"
    ],
    "analysis": "按官方电机命名规则，MS1 型号中的功率位由“两位数字 + 一位字母”组成，字母是乘数：B 表示 ×10、C 表示 ×100，官方示例 75B=750W、30C=3000rpm，因此 20B=20×10=200W（60 机座、单相 220V 机型）。选 C 是把乘数记成了 ×100，2.0kW 对应的写法应是 20C；选 A 是把功率位当成了电流位，额定电流要查选型手册的电机技术数据表，不会写在型号里；选 D 把瓦特当成了牛米，0.2kW/3000rpm 电机的额定转矩只有约 0.64N·m。现场读型号时记住“B 与 C 都是乘数、只是倍数不同”，功率与转速两位都用这两个字母，是新人最高频的混淆点。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则）",
      "chapter": "产品命名规则及尺寸规格 / 电机命名规则",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1-R",
      "型号命名",
      "额定功率"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-069",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "查看伺服电机型号“MS1H3-44C15CB-A63*R”，该电机的额定转速是多少？",
    "options": {
      "A": "1500rpm",
      "B": "3000rpm",
      "C": "4500rpm",
      "D": "6000rpm"
    },
    "answer": [
      "A"
    ],
    "analysis": "该型号的字段拆解为：MS1H3（中惯量、中容量）、44C（额定功率 44×100=4.4kW）、15C（额定转速 15×100=1500rpm）、B（220V 电压等级）、A6（26 位多圈绝对值编码器）。选 B 是把它当成 30C 的 3000rpm 机型——3000rpm 是 MS1H1/MS1H2/MS1H4 系列的额定转速段；选 C 的 4500rpm 是 MS1H3（130/180 机座）的最高转速 n_max，不是额定转速；选 D 的 6000rpm 是 MS1H2 系列的最高转速。额定转速与最高转速必须分清：额定转速决定连续输出转矩的转速点，最高转速只在加减速或快速定位的短时区间使用，按最高转速去核算连续转矩会导致电机长期过载。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则、MS1-R 系列带 26 位编码器电机技术参数表）",
      "chapter": "产品命名规则及尺寸规格 / 电机命名规则；MS1-R 系列电机技术参数表",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1H3",
      "额定转速",
      "型号命名"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-071",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "某客户需要一台伺服电机用于半导体晶圆搬运，要求高精度、高响应、带 26 位多圈绝对值编码器。从 MS1-R 系列中应优先选择哪种编码器后缀？",
    "options": {
      "A": "T33R",
      "B": "A33R",
      "C": "A63R",
      "D": "S63R（安全功能型）"
    },
    "answer": [
      "C"
    ],
    "analysis": "官方编码器代码只有五档：A6=26 位多圈绝对值、S6=功能安全型 26 位多圈绝对值、A3=23 位多圈绝对值、U2=20 位单圈绝对值（25 机座专用）、T3=18 位多圈绝对值，因此 26 位多圈对应的就是 A6，完整后缀写成 A63R。A 的 T3 是 18 位多圈，位数最低，配套的是 SV630 经济型驱动器；B 的 A3 是 23 位多圈，精度比 26 位低一档；D 的 S6 虽然也是 26 位，但属于功能安全型，必须与 SV680 功能安全机型（机型配置位为 S）配套使用，晶圆搬运若没有功能安全需求，选它等于多付成本且限制驱动器选择。选型时要把“位数、单圈/多圈、是否功能安全”三件事分开确认，只报“要 26 位”容易订错后缀。",
    "source": {
      "title": "汇川技术《MS1-R 系列伺服电机选型手册》PS00004605（1.1.5 编码器类型与配套驱动器）",
      "chapter": "1.1.5 编码器类型与配套驱动器系列",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "编码器",
      "A6"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-072",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "型号“MS1H2-10C30CD-A33*R”中，电压等级“D”表示该电机适用的电压是？",
    "options": {
      "A": "单相 220V",
      "B": "三相 220V",
      "C": "三相 380V",
      "D": "直流 24V"
    },
    "answer": [
      "C"
    ],
    "analysis": "官方电机命名规则中电压等级只有两种取值：B 表示 220V、D 表示 380V。该型号拆解为 MS1H2（低惯量、中容量）、10C（1.0kW）、30C（3000rpm）、D（380V）、A3（23 位多圈绝对值），在官方配套表里对应的驱动器是 SV660N T3R5、三相 380V 供电，与 D 完全对应。A、B 是电压等级 B（220V）的两种供电形态：单相 220V 还是三相 220V 由驱动器输入方式决定，与电机型号无关，电机本身只标 220V 等级；D 的直流 24V/48V 属于 SVD60 低压伺服平台，型号体系完全不同。做替换或扩产选型时，电压等级 B/D 读错会直接导致电机与现场供电不匹配，必须与驱动器容量代码一起核对。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则）；《SV660N 系列伺服选型手册》PS00003006 1.1 选型一览表",
      "chapter": "电机命名规则 / 电压等级；1.1 选型一览表（与 MS1-R 系列伺服电机匹配）",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1-R",
      "电压等级",
      "型号命名"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-073",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "动力线缆型号“S6-L-B107-5.0”中，“B”表示该线缆用于？",
    "options": {
      "A": "带抱闸电机",
      "B": "无抱闸电机",
      "C": "拖链应用",
      "D": "耐油环境"
    },
    "answer": [
      "A"
    ],
    "analysis": "在官方配套线缆一览表中，同一档电机按“是否带抱闸”分成两条动力线缆：M 开头用于非抱闸电机（如 S6-L-M107），B 开头用于抱闸电机（如 S6-L-B107），B 即 Brake（抱闸）。因此 S6-L-B107-5.0 是“MS1H1/MS1H4 端子型电机前出线、带抱闸、长度 5m”的动力线缆，订错会把抱闸的两根线空着，抱闸无法松开或长期处于释放状态。B 的 M 正是非抱闸版本；C 的拖链应用由型号尾缀 -T 表示（拖链型），不是 B；D 的耐油环境由尾缀 -TS（拖链屏蔽耐油型）表示。采购与现场备件最容易把 M/B 记反，核对时抓住“B=Brake=抱闸”这一条即可。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表、6.1.6 线缆线材）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆；6.1.6.1 动力线缆线材",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "动力线缆",
      "S6-L-B107",
      "抱闸"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-076",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "某伺服电机型号为“MS1H3-29C15CD-T33*R”，其中“T3”代表什么？",
    "options": {
      "A": "23 位多圈绝对值编码器",
      "B": "18 位多圈绝对值编码器",
      "C": "26 位多圈绝对值编码器",
      "D": "功能安全型编码器"
    },
    "answer": [
      "B"
    ],
    "analysis": "官方编码器代码表共五档：A6=26 位多圈绝对值（配 SV680）、S6=功能安全型 26 位多圈绝对值（配 SV680 功能安全机型）、A3=23 位多圈绝对值（配 SV670、SV660）、U2=20 位单圈绝对值（25 机座专用，配 SV660）、T3=18 位多圈绝对值（配 SV630），所以 T3 是 18 位多圈绝对值，属于精度最低的一档，对应经济型平台。A 的 23 位是 A3；C 的 26 位是 A6；D 的功能安全型是 S6。按官方说明，电机匹配 26 位与 23 位编码器时外形尺寸一样，而匹配 18 位编码器时编码器航插高度会上升 1mm，机械空间紧张的场合要提前确认。销售报价时若客户只写“多圈绝对值”，务必追问位数，位数不同价格与可配驱动器都不同。",
    "source": {
      "title": "汇川技术《MS1-R 系列伺服电机选型手册》PS00004605（1.1.5 编码器类型与配套驱动器）；《SV680 系列旗舰型伺服驱动器》彩页电机命名规则",
      "chapter": "1.1.5 编码器类型与配套驱动器系列 / 编码器代码表",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "编码器",
      "T3"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-085",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "动力线缆型号“S6-L-B107-5.0-T”中的“5.0”表示？",
    "options": {
      "A": "线缆总长 5 米",
      "B": "柔性线缆长度 5 米",
      "C": "屏蔽线缆长度 5 米",
      "D": "固定线缆长度 5 米"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方配套线缆表中，型号末尾的 X.X 就是“L 线缆长度”，并明确“型号 X.X 中填写指定线缆长度的数值”，单位为米：3.0/5.0/10.0 分别对应外观长度 3100/5100/10100mm（该档含接头长度），因此 5.0 表示线缆长度 5m，与线缆是否柔性、是否屏蔽无关。B、C、D 都把长度与线缆类型搞混了：柔性（拖链）由尾缀 -T 表示，屏蔽耐油由尾缀 -TS 表示，普通固定敷设则是无尾缀的标准型号，这三者与长度字段是并行独立的两段信息。采购下单时长度必须写清，现场缺一米就要重新订线；另外要记住线缆有最小弯曲半径要求，长度余量留得过短会在安装时被迫弯折过度，反而引入断芯与通信类故障。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆（线缆长度 L）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "线缆长度",
      "选型",
      "采购核对"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-089",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "MS1H3-29C15CD-A33*R 电机型号中，H3 表示什么含义？",
    "options": {
      "A": "低惯量、小容量",
      "B": "低惯量、中容量",
      "C": "中惯量、中容量",
      "D": "中惯量、小容量"
    },
    "answer": [
      "C"
    ],
    "analysis": "官方命名规则第②段给出四档惯量与容量组合：H1=低惯量、小容量（MS1H1，40/60/80 机座，最高转速 7000rpm）；H2=低惯量、中容量（MS1H2，100/130 机座，最高转速 6000rpm）；H3=中惯量、中容量（MS1H3，130/180 机座，额定转速 1500rpm、最高 4500rpm）；H4=中惯量、小容量（MS1H4，40/60/80 机座，最高转速 7000rpm），因此 H3 就是中惯量、中容量，选 C。A 是 H1、B 是 H2、D 是 H4，四个选项正好对应四档定义，属于必须背熟的基础知识。该型号 29C 为 2.9kW、15C 为 1500rpm，与 H3 的 130/180 机座、1500rpm 转速段完全吻合。惯量等级决定同功率下的响应速度与抗扰动能力，重载、大惯量负载场合选中惯量机型更易整定。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则：惯量、容量类型）",
      "chapter": "产品命名规则及尺寸规格 / 电机命名规则",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1H3",
      "惯量等级",
      "型号命名"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-090",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "伺服电机型号中，如果最后一段的数字是“4”（如“MS1H1-20B30CB-A334R”），表示该电机为抱闸型。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "结论正确。官方命名规则把“抱闸、减速机、油封”合并成一位代码：0=不带油封 + 不带抱闸，1=带油封 + 不带抱闸，2=不带油封 + 带抱闸，4=带油封 + 带抱闸，因此 A334R 中的“4”表示该电机同时带油封与抱闸，说它是抱闸型成立。要补充的边界条件是：带抱闸的机型不一定是 4，也可能是 2（不带油封带抱闸）；反过来看到“4”就要知道它比“2”多了一道油封，价格与长度都不同。此外官方说明 40 机座电机标配不带油封，60 机座和 80 机座的 H1 机型也标配不带油封，其余机型标配带油封，所以同一串型号里“油封”这一项在部分机座上本身就是选配结果，报价时要连同抱闸一起确认。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则：抱闸、减速机、油封）",
      "chapter": "产品命名规则及尺寸规格 / 电机命名规则",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1-R",
      "抱闸",
      "型号命名"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-091",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "高柔线缆使用时允许频繁折弯和移动。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "结论正确。官方线材规格表把动力线缆与编码器线缆各分成三种线束类型：普通型（S6-L-M/B***-X.X、S6-L-P***-X.X）、拖链型（尾缀 -T）、拖链屏蔽耐油型（尾缀 -TS），拖链型即通常所说的高柔线缆，导体采用多股细丝结构，就是为拖链、机械手等频繁往复弯折与移动的场合设计的。需要注意两点：一是“允许频繁折弯”不等于可以随意弯折，官方对手册中的动力线与编码器线缆都有最小弯曲半径要求，安装时仍要按半径留出余量；二是固定敷设的普通型线缆不要用于移动场合，短期就会出现断芯、绝缘破损，表现为间歇性报警甚至编码器通信丢失，这类故障排查成本远高于线缆差价。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.6 线缆线材：普通型 / 拖链型 / 拖链屏蔽耐油型）",
      "chapter": "6.1.6.1 动力线缆线材；6.1.6.2 编码器线缆线材",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "线缆",
      "拖链",
      "接线安装"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-092",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "MS1-R 系列伺服电机中，带油封带抱闸的机型代码是 4。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "结论正确。官方命名规则对“抱闸、减速机、油封”这一位的定义为：0=不带油封 + 不带抱闸，1=带油封 + 不带抱闸，2=不带油封 + 带抱闸，4=带油封 + 带抱闸，所以同时要油封与抱闸时取 4，例如 MS1H4-40B30CB-A334R。容易答错的三种情形：一是把 1 与 2 记反（1 是带油封不带抱闸，2 是带抱闸不带油封）；二是以为“带抱闸”就写 4，实际不带油封的抱闸机型是 2；三是忽略官方标配说明——40 机座、60/80 机座的 H1 机型标配不带油封，其余机型标配带油封，因此同样选“带抱闸”，不同机座上的完整后缀可能不同。给客户确认型号时，把“要不要油封、要不要抱闸”两个问题分开问，避免只答“要抱闸”而错订。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则：抱闸、减速机、油封）",
      "chapter": "产品命名规则及尺寸规格 / 电机命名规则",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1-R",
      "油封抱闸",
      "型号命名"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-093",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "拖链线缆的型号尾缀没有 T。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "说法错误，恰好相反。官方线材规格表明确：拖链型动力线缆与编码器线缆的型号分别写作 S6-L-M/B***-X.X-T 与 S6-L-P***-X.X-T，尾缀 T 就是拖链（高柔）型的标识；在它之上还有尾缀 -TS 的“拖链屏蔽耐油型”，用于既有往复移动又有油污或需要更强屏蔽的场合。因此“拖链线缆没有 T 尾缀”不成立，正确表述应是“拖链线缆必须有 T（或 TS）尾缀”。容易混淆的是另一组以 T 打头的通信线缆型号，如伺服驱动器与 PC 通信线缆 S6-L-T00-3.0、网络通信线缆 S6-L-T04-0.3（CAT.5E）、S6-L-T07-0.3（CAT6A）、S6-L-T08-0.3（CAT7）——那是通信线缆系列代号，与动力/编码器线缆的尾缀 T 是两回事，读型号时要看 T 出现的位置而不是只看有没有 T。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.6 线缆线材、6.1.3 通信线缆）",
      "chapter": "6.1.6.1 动力线缆线材；6.1.3 通信线缆",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "线缆",
      "拖链",
      "型号命名"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-095",
    "category": "servo",
    "type": "judge",
    "difficulty": 1,
    "stem": "绝对值编码器电池盒的型号为 S6-C4A。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "结论正确。官方《SV660N 系列伺服选型手册》6.1.4“接插套件”表中列出的电池套件型号就是 S6-C4A（同表还有 CN1 端子 S6-C6、MS1H1/MS1H4 甩线式电机接插件 S6-C26、MS1H2/MS1H3 1.8kW 及以下电机接插件 S6-C29 等）。电池盒用于给多圈绝对值编码器在驱动器断电期间维持多圈计数，安装位置在各 Size 驱动器的“电池盒安装位”。两点现场提醒：一是官方明确“无电池编码器无需再选用电池套件，误将无电池编码器接入电池盒会损坏编码器”，做真绝对值（免电池）方案时不要把电池盒一起订上；二是电池盒有存储与更换要求（官方建议存储温度 ≤+30℃、相对湿度 ≤60%），出现 E730/E731 类报警时要先确认编码器电池电压，必要时外挂 1kΩ 负载电阻测量。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.4 接插套件 / 电池套件）",
      "chapter": "6.1.4 接插套件；3.1.2 部件说明（电池盒安装位）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "电池盒",
      "S6-C4A",
      "绝对值编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-096",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "伺服电机型号“MS1H1-20B30CB-A63*R”中的“A63”表示该电机配____位多圈绝对值编码器。",
    "options": null,
    "answer": [
      "26"
    ],
    "analysis": "官方编码器代码只有五档：A6=26 位多圈绝对值编码器（配 SV680）、S6=功能安全型 26 位多圈绝对值编码器（配 SV680 功能安全机型）、A3=23 位多圈绝对值编码器（配 SV670、SV660）、U2=20 位单圈绝对值编码器（25 机座专用，配 SV660）、T3=18 位多圈绝对值编码器（配 SV630），因此 A63 中的 A6 就是 26 位多圈绝对值。该型号是 60 机座、0.2kW、单相 220V 的小功率机型，配 26 位编码器时对应 SV680 平台。填 23 位是把它与 A3 记混（最常见错误），填 18 位则对应 T3、属 SV630 经济型平台；官方另有一条尺寸提醒：26 位与 23 位编码器电机外形尺寸相同，但 18 位编码器机型的编码器航插高度会上升 1mm，机械空间紧时需提前确认。",
    "source": {
      "title": "汇川技术《MS1-R 系列伺服电机选型手册》PS00004605（1.1.5 编码器类型与配套驱动器）；《SV680 系列旗舰型伺服驱动器》彩页电机命名规则",
      "chapter": "1.1.5 编码器类型与配套驱动器系列 / 编码器代码表",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "编码器",
      "型号命名"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-097",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "动力线缆型号“S6-L-B107-5.0”中的“5.0”表示线缆长度为____米。",
    "options": null,
    "answer": [
      "5"
    ],
    "analysis": "官方配套线缆一览表中，型号末尾的 X.X 即“L 线缆长度”，单位是米，并明确“型号 X.X 中填写指定线缆长度的数值”。该档线缆列出的标准长度为 3.0/5.0/10.0，对应的外观长度 L 分别是 3100/5100/10100mm（含接头部分），所以 5.0 表示线缆长度 5m、实际成品外形长 5100mm。容易混淆的是把 5.0 理解成线径或屏蔽层数：线径由线束规格决定（MS1H1/MS1H4 小功率档为 4E×20AWG+2C×24AWG），是否屏蔽与是否耐油由尾缀 -T/-TS 表示，与数字长度字段互不影响。现场订线要按电柜到电机的实际走线路径留足余量，同时遵守最小弯曲半径要求，避免因长度不足被迫强行弯折。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表、6.1.6 线缆线材）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆（L 线缆长度）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "线缆长度",
      "S6-L-B107",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-098",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "对于 MS1-R 系列伺服电机，若型号中电压等级为“B”，表示适用电压为____V；若为“D”，表示适用电压为____V。",
    "options": null,
    "answer": [
      "220",
      "380"
    ],
    "analysis": "官方电机命名规则把电压等级规定为两种取值：B 表示 220V、D 表示 380V。以 MS1H2-10C30CD-A33*R 为例，D 即三相 380V 等级，在选型一览表中配套的是 SV660N T3R5（三相 380V 输入）；而 MS1H2-10C30CB-A33*R 的 B 为 220V 等级，配套 S7R6（单相/三相 220V 输入）。两个易错点：一是把 B/D 与功率、编码器字段混看，B 在不同系列手里含义不同——在电机型号里 B 只是 220V，在驱动器型号里 S/T 才表示 220V/380V 等级；二是把 220V 等级理解成“只能单相供电”，实际上 220V 等级电机可配单相 220V 或三相 220V 输入的驱动器，具体取决于所选驱动器机型与现场供电。报价与替换选型时电压等级必须与现场供电一并确认。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则：电压等级）；《SV660N 系列伺服选型手册》PS00003006 1.1 选型一览表",
      "chapter": "电机命名规则 / 电压等级（V）；1.1 选型一览表",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "电压等级",
      "型号命名",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-099",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "伺服系统的编码器线缆默认使用____线缆（填“屏蔽”或“非屏蔽”）。",
    "options": null,
    "answer": [
      "屏蔽"
    ],
    "analysis": "编码器反馈的是 5V 级差分信号，频率高、幅值小，极易受动力线缆的共模干扰，因此必须使用屏蔽线缆：官方配套的 S6-L-P*** 编码器线缆本身就是屏蔽结构，并在拖链场合进一步提供“拖链屏蔽耐油型”尾缀 -TS；接线时屏蔽层要与连接器外壳/PE 可靠连接，动力线与编码器线缆还应分开走线槽、避免长距离平行捆扎。若填“非屏蔽”，现场通常表现为间歇性编码器通信异常、位置漂移或随机报警，且这类故障与走线、变频器干扰相关，排查成本很高。补充一句实务经验：编码器延长线优先用官方线缆或与原线缆同规格的屏蔽线，自行用普通线替代是题库中反复出现的“隐形故障源”。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.6.2 编码器线缆线材、6.1.3 编码器线缆）",
      "chapter": "6.1.6.2 编码器线缆线材；6.1.3 配套线缆一览表 / 编码器线缆",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "编码器线缆",
      "屏蔽",
      "接线安装"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-100",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "从伺服电机型号“MS1H2-15C30CD-A33*R”可以判断，该电机的额定功率为____kW。",
    "options": null,
    "answer": [
      "1.5"
    ],
    "analysis": "官方命名规则中功率位由“两位数字 + 字母乘数”组成：B=×10、C=×100，官方示例 75B=750W，因此 15C=15×100=1500W=1.5kW。该型号其余字段为：MS1H2（低惯量、中容量，100/130 机座）、30C（额定转速 3000rpm）、D（电压等级 380V）、A3（23 位多圈绝对值编码器）；在官方选型一览表中 MS1H2-15C30CD-A331R 为 100 机座、1.5kW、三相 380V，额定电流 4.2A、最大电流 14A，推荐驱动器 T5R4。常见错误是填 15（把数字直接当功率）或填 15kW（把乘数当 1000），另外不要把 30C 的转速位误当成功率位——B、C 两个乘数在功率位与转速位都会出现，读型号时必须按位序对齐。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则：额定功率）；《SV660N 系列伺服选型手册》PS00003006 1.1 选型一览表",
      "chapter": "电机命名规则 / 额定功率（W）；1.1 选型一览表（MS1H2 系列）",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1H2",
      "额定功率",
      "型号命名"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-102",
    "category": "servo",
    "type": "fill",
    "difficulty": 1,
    "stem": "动力线缆中，若型号包含“T”后缀（如 S6-L-M100-T），表示该线缆为____线缆，适用于移动应用。",
    "options": null,
    "answer": [
      "拖链"
    ],
    "analysis": "官方线材规格表把动力线缆分三种线束类型：普通型 S6-L-M/B***-X.X、拖链型 S6-L-M/B***-X.X-T、拖链屏蔽耐油型 S6-L-M/B***-X.X-TS，编码器线缆同样有 S6-L-P***-X.X-T 的拖链型写法，所以尾缀 T 表示拖链型（也就是常说的高柔线缆），适用于拖链、机械手等需要频繁往复弯折移动的场合。填“高柔”在语义上也对得上（拖链型即高柔线缆），但官方型号表与手册使用的规范名称是“拖链型”，对外报价与技术协议建议直接写“拖链型（-T）”。还要区分尾缀 T 与以 T 打头的通信线缆系列（S6-L-T00/T01/T02/T04/T07/T08），后者是通信线缆型号主体，不是拖链标识。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.6 线缆线材）",
      "chapter": "6.1.6.1 动力线缆线材；6.1.6.2 编码器线缆线材",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "线缆",
      "拖链",
      "高柔"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-109",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 SV680 在速度环性能方面的正确结论。",
    "options": {
      "A": "625 kHz 速度环带宽",
      "B": "3.2 kHz 速度环带宽",
      "C": "500 μs 速度环周期",
      "D": "3.5 kHz 速度环带宽"
    },
    "answer": [
      "D"
    ],
    "analysis": "SV670 的 3.2 kHz 与 SV680 的 3.5 kHz 不能混写。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "速度环性能"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-113",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 IS810N-INT 在功率范围方面的正确结论。",
    "options": {
      "A": "0.05～7.5 kW",
      "B": "2.2～75 kW",
      "C": "0.85～120 kW",
      "D": "7.5～200 kW"
    },
    "answer": [
      "C"
    ],
    "analysis": "IS810N 与 IS810F 的范围不同，不能用一个范围覆盖 N/F。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S44",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-115",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "围绕 IS810N-INT 的制动配置，选出可写入核对表的说法。",
    "options": {
      "A": "DB 制动器所有规格永久标配",
      "B": "只能用外置 MDBUN 且不能选配",
      "C": "IS810N 没有任何制动配置",
      "D": "DB 制动器由标配改为选配"
    },
    "answer": [
      "D"
    ],
    "analysis": "订货时要把制动器作为独立配置核对，不能从旧版本沿用。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S46",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-117",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 IS810F 在电气规格方面的正确结论。",
    "options": {
      "A": "只需要 USB 供电",
      "B": "直流母线 537～679 V，控制电源 21.6～26.4 V",
      "C": "直流母线 350～800 V，控制电源 110 V",
      "D": "直流母线 200～240 V，控制电源 5 V"
    },
    "answer": [
      "B"
    ],
    "analysis": "母线和控制电源是柜体与多机系统设计的硬边界。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S48",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电气规格"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-121",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 SV630 在通信分支方面的正确结论。",
    "options": {
      "A": "A 为 PROFINET，N 为脉冲，P 为 EtherCAT",
      "B": "A、N、P 只表示功率档位",
      "C": "三个分支都固定为 EtherCAT",
      "D": "A 为 CANlink/Modbus，N 为 EtherCAT，P 为 Modbus-RTU"
    },
    "answer": [
      "D"
    ],
    "analysis": "分支字母是采购和技术共同的第一层核对项；特殊 C-PS、P-PS 等后缀仍要另查手册。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-124",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 SV630P Size A 的制动配置，哪项与当前资料相符？",
    "options": {
      "A": "必须外接 MDBUN 才能运行",
      "B": "标配内置制动电阻并保留 PD 短接片",
      "C": "无内置制动电阻且无 PD 短接片",
      "D": "只要是 Size A 就带 STO 扩展"
    },
    "answer": [
      "C"
    ],
    "analysis": "采购时要把机座、制动电阻和短接片作为 BOM 条件列出，不能只报功率。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630P Size A",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-125",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 SV630P S7R6/S012 在输入相制方面的正确结论。",
    "options": {
      "A": "支持单相或三相",
      "B": "只能直流母线输入",
      "C": "只能三相 380 V",
      "D": "只能单相 220 V"
    },
    "answer": [
      "A"
    ],
    "analysis": "输入相制要与完整型号和现场电网同时确认，不可由系列名称推断。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630P S7R6/S012",
      "输入相制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-127",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "围绕 SV660F 的通信分支，选出可写入核对表的说法。",
    "options": {
      "A": "EtherCAT",
      "B": "PROFINET",
      "C": "Modbus-RTU",
      "D": "CANopen"
    },
    "answer": [
      "B"
    ],
    "analysis": "F、N、P 的协议差异直接影响 GSD/ESI、主站配置和采购型号。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-128",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 SV660F 的编码器，哪项与当前资料相符？",
    "options": {
      "A": "18 位单圈编码器",
      "B": "26 位免电池编码器",
      "C": "正余弦编码器专用",
      "D": "23 位多圈编码器"
    },
    "answer": [
      "D"
    ],
    "analysis": "编码器类型必须与电机选型表、驱动器分支和安全功能一起闭环。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-133",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 SV660N U2 在编码器方面的正确结论。",
    "options": {
      "A": "26 位免电池，适用于 50 机座",
      "B": "23 位多圈，适用于所有机座",
      "C": "18 位多圈，仅用于安全电机",
      "D": "20 位单圈，适用于 25 机座"
    },
    "answer": [
      "D"
    ],
    "analysis": "U2 不能被简化成“23 位编码器”；机座和反馈类型都要保留。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N U2",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-136",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 SV660P 的通信分支，哪项与当前资料相符？",
    "options": {
      "A": "FSoE",
      "B": "EtherCAT",
      "C": "Modbus-RTU",
      "D": "PROFINET"
    },
    "answer": [
      "C"
    ],
    "analysis": "P 分支和 F/N 分支的主站文件、端口和参数组不同。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-137",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 SV660P CN2 在编码器接口方面的正确结论。",
    "options": {
      "A": "只提供两针电源",
      "B": "1～6 针并含外壳 PE",
      "C": "RJ45 8 针",
      "D": "固定 5 针且无 PE"
    },
    "answer": [
      "B"
    ],
    "analysis": "针脚不能靠系列印象填写；要回到同机座硬件图。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P CN2",
      "编码器接口"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-140",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 SV670-INT 的性能，哪项与当前资料相符？",
    "options": {
      "A": "500 μs IRT 周期",
      "B": "625 kHz 电流环带宽",
      "C": "3.2 kHz 速度环带宽",
      "D": "1:1000 调速范围"
    },
    "answer": [
      "C"
    ],
    "analysis": "性能指标要注明环路类型和产品分支，不能把 SV680 电流环数字移植过来。",
    "source": {
      "title": "SV670 Series 产品页",
      "chapter": "知识点 S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670-INT",
      "性能"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-145",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 EtherCAT PDO 的映射修改时，应采用哪项？",
    "options": {
      "A": "写 0 恢复出厂",
      "B": "只改从站 IP",
      "C": "有效状态可任意写",
      "D": "先使 PDO 无效；写 0 清除映射子索引"
    },
    "answer": [
      "D"
    ],
    "analysis": "状态机和映射操作按手册顺序。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "EtherCAT PDO",
      "映射修改"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-146",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 CiA 402 6060h 的模式值疑问，哪项答复有依据？",
    "options": {
      "A": "6060h 是波特率",
      "B": "模式与控制无关",
      "C": "8/9/10 均是回原",
      "D": "1/3/4/6/8/9/10 对应位置/速度/转矩/回原/CSP/CSV/CST"
    },
    "answer": [
      "D"
    ],
    "analysis": "切模式还需确认状态机与 PDO。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "CiA 402 6060h",
      "模式值"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-149",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 SV680 V6 的多圈保持时，应采用哪项？",
    "options": {
      "A": "更换电池不用做位置确认",
      "B": "所有反馈免电池",
      "C": "编码器位数等于抱闸状态",
      "D": "V6 免电池；A6/S6 多圈按电池保持条件验收"
    },
    "answer": [
      "D"
    ],
    "analysis": "更换/断电后多圈位置应验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 V6",
      "多圈保持"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-150",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 IS810N-INT 的多机母线疑问，哪项答复有依据？",
    "options": {
      "A": "母线可接任意电压",
      "B": "控制电源可接 380 V",
      "C": "共直流母线与独立 24 V 控制电源应分开核对",
      "D": "只用 USB 供电"
    },
    "answer": [
      "C"
    ],
    "analysis": "系统接线图与模块规格要一致。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "多机母线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-151",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "在 IS810F 的现场联调中，哪项电源范围结论可直接用于检查表？",
    "options": {
      "A": "控制电源和母线同端子",
      "B": "直流母线 537～679 V，控制 21.6～26.4 V",
      "C": "无需控制电源",
      "D": "直流母线 200 V，控制 5 V"
    },
    "answer": [
      "B"
    ],
    "analysis": "测量应在对应端子进行。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电源范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-153",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 PN 报文的位置控制时，应采用哪项？",
    "options": {
      "A": "所有报文等价",
      "B": "102 永远等同基础 EPOS",
      "C": "111 只是速度模式",
      "D": "3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强"
    },
    "answer": [
      "D"
    ],
    "analysis": "不能把不同报文的控制字和功能块混用。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PN 报文",
      "位置控制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-158",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 IS810N-INT 的柜体条件疑问，哪项答复有依据？",
    "options": {
      "A": "IP20 机柜安装、振动不超过 0.6 g",
      "B": "振动无限制",
      "C": "机柜条件与安全无关",
      "D": "整机 IP67 可露天安装"
    },
    "answer": [
      "A"
    ],
    "analysis": "安装条件是故障排查的先验检查。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "柜体条件"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-165",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 SV660N S5R5 的单相接线时，应采用哪项？",
    "options": {
      "A": "必须接 L1/L2/L3",
      "B": "可直接接 DC 24 V",
      "C": "无需 PE",
      "D": "0.75 kW 单相 220 V 仅接 L1/L2"
    },
    "answer": [
      "D"
    ],
    "analysis": "相制与端子定义要按同机座图。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "单相接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-170",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 SV680 STO 的输入电平疑问，哪项答复有依据？",
    "options": {
      "A": "5 V USB 可代替",
      "B": "STO1/STO2 双通道同时高，24 VDC±15%",
      "C": "两通道低时允许运行",
      "D": "任一通道高即可"
    },
    "answer": [
      "B"
    ],
    "analysis": "STO 不是软件急停。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 STO",
      "输入电平"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-173",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MS1 抱闸的供电时，应采用哪项？",
    "options": {
      "A": "直接接驱动高压母线",
      "B": "独立 24 V 供电，电机输入至少 21.6 V",
      "C": "只需 5 V",
      "D": "与编码器线共用电源"
    },
    "answer": [
      "B"
    ],
    "analysis": "压降和线径要实测。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "供电"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-174",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MS1 抱闸线的线径疑问，哪项答复有依据？",
    "options": {
      "A": "只能 10 mm²",
      "B": "任意细线无需压降",
      "C": "线径由编码器位数决定",
      "D": "至少 0.5 mm²，并核对线长压降"
    },
    "answer": [
      "D"
    ],
    "analysis": "抱闸供电必须在电机端达标。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸线",
      "线径"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-175",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "在 MS1-R 的现场联调中，哪项接线顺序结论可直接用于检查表？",
    "options": {
      "A": "先连接编码器后 PE",
      "B": "只接抱闸即可",
      "C": "先连接主回路和 PE，再连接编码器线",
      "D": "PE 可省略"
    },
    "answer": [
      "C"
    ],
    "analysis": "避免电位差损坏反馈。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "接线顺序"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-177",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 E730/E731 的电池测量时，应采用哪项？",
    "options": {
      "A": "只重启不测量",
      "B": "当作过流代码处理",
      "C": "用 1 kΩ 外接负载测量编码器电池电压",
      "D": "直接短接电池"
    },
    "answer": [
      "C"
    ],
    "analysis": "只保留已核验故障码，不猜其他代码。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "E730/E731",
      "电池测量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-181",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 CiA 402 6060h 的模式值时，应采用哪项？",
    "options": {
      "A": "6060h 是波特率",
      "B": "8/9/10 均是回原",
      "C": "1/3/4/6/8/9/10 对应位置/速度/转矩/回原/CSP/CSV/CST",
      "D": "模式与控制无关"
    },
    "answer": [
      "C"
    ],
    "analysis": "切模式还需确认状态机与 PDO。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "CiA 402 6060h",
      "模式值"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-182",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出伺服回原的机械基准疑问，哪项答复有依据？",
    "options": {
      "A": "无需原点开关",
      "B": "有弹性的机械极限不宜作高精度原点",
      "C": "任意模式数字都相同",
      "D": "橡胶防撞块最适合作原点"
    },
    "answer": [
      "B"
    ],
    "analysis": "现场机械设计与模式表一致。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服回原",
      "机械基准"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-185",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 IS810N-INT 的多机母线时，应采用哪项？",
    "options": {
      "A": "母线可接任意电压",
      "B": "只用 USB 供电",
      "C": "共直流母线与独立 24 V 控制电源应分开核对",
      "D": "控制电源可接 380 V"
    },
    "answer": [
      "C"
    ],
    "analysis": "系统接线图与模块规格要一致。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "多机母线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-186",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 IS810F 的电源范围疑问，哪项答复有依据？",
    "options": {
      "A": "直流母线 200 V，控制 5 V",
      "B": "直流母线 537～679 V，控制 21.6～26.4 V",
      "C": "控制电源和母线同端子",
      "D": "无需控制电源"
    },
    "answer": [
      "B"
    ],
    "analysis": "测量应在对应端子进行。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电源范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-187",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "在 IS810F PN 的现场联调中，哪项启动控制字结论可直接用于检查表？",
    "options": {
      "A": "报文 1 的 16#47E→16#47F 顺序按指南验证",
      "B": "只改 IP 即启机",
      "C": "16#4F7E→16#4F7F",
      "D": "无需控制字"
    },
    "answer": [
      "A"
    ],
    "analysis": "报文类型与主站工艺对象必须配套。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F PN",
      "启动控制字"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-189",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 PROFINET IRT 的现场配置时，应采用哪项？",
    "options": {
      "A": "按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT",
      "B": "拓扑与 IRT 无关",
      "C": "周期任意设 10 μs",
      "D": "S7-1200 原生支持 IRT"
    },
    "answer": [
      "A"
    ],
    "analysis": "同步需求先核对主站硬件。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PROFINET IRT",
      "现场配置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-193",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 IS810N-INT 的柜体条件时，应采用哪项？",
    "options": {
      "A": "整机 IP67 可露天安装",
      "B": "机柜条件与安全无关",
      "C": "振动无限制",
      "D": "IP20 机柜安装、振动不超过 0.6 g"
    },
    "answer": [
      "D"
    ],
    "analysis": "安装条件是故障排查的先验检查。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "柜体条件"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-194",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 ISMG 的电机配对疑问，哪项答复有依据？",
    "options": {
      "A": "95C 直接等于 9.5 kW",
      "B": "95C 回表确认 7.9 kW，并按 IS810N/IS650P 配对表选驱动",
      "C": "任意驱动可配",
      "D": "只看 S4 字符串"
    },
    "answer": [
      "B"
    ],
    "analysis": "型号解码后仍需查驱动-电机搭配。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "ISMG",
      "电机配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-199",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "在 SV660F/N 的现场联调中，哪项STO 端子结论可直接用于检查表？",
    "options": {
      "A": "STO 可用 DI 软件位代替",
      "B": "CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线",
      "C": "普通分支全有 STO",
      "D": "CN6 必定是总线口"
    },
    "answer": [
      "B"
    ],
    "analysis": "安全端子接线须按硬件后缀确认。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 T-S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N",
      "STO 端子"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-201",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 SV660P 的外接制动时，应采用哪项？",
    "options": {
      "A": "接电阻仍保留短接",
      "B": "带电拆短接",
      "C": "其他机座外接制动电阻前拆 P+-D 短接",
      "D": "把电阻接 CN2"
    },
    "answer": [
      "C"
    ],
    "analysis": "断电后按机座手册处理高能量端子。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "外接制动"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-205",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 SV680 STO 的输入电平时，应采用哪项？",
    "options": {
      "A": "两通道低时允许运行",
      "B": "STO1/STO2 双通道同时高，24 VDC±15%",
      "C": "任一通道高即可",
      "D": "5 V USB 可代替"
    },
    "answer": [
      "B"
    ],
    "analysis": "STO 不是软件急停。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 STO",
      "输入电平"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-209",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MS1 抱闸线的线径时，应采用哪项？",
    "options": {
      "A": "至少 0.5 mm²，并核对线长压降",
      "B": "任意细线无需压降",
      "C": "线径由编码器位数决定",
      "D": "只能 10 mm²"
    },
    "answer": [
      "A"
    ],
    "analysis": "抱闸供电必须在电机端达标。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸线",
      "线径"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-210",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MS1-R 的接线顺序疑问，哪项答复有依据？",
    "options": {
      "A": "PE 可省略",
      "B": "先连接主回路和 PE，再连接编码器线",
      "C": "先连接编码器后 PE",
      "D": "只接抱闸即可"
    },
    "answer": [
      "B"
    ],
    "analysis": "避免电位差损坏反馈。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "接线顺序"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-211",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "在 MS1-R 的现场联调中，哪项拖链弯曲结论可直接用于检查表？",
    "options": {
      "A": "拖链仅 5 倍",
      "B": "固定和拖链均 1 倍",
      "C": "固定线 5 倍外径、拖链线 10 倍外径",
      "D": "只看动力功率"
    },
    "answer": [
      "C"
    ],
    "analysis": "现场移动工况应使用相应线材。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "拖链弯曲"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-213",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 SV680 EtherCAT 的物理拓扑时，应采用哪项？",
    "options": {
      "A": "RS485 半双工 1200 m",
      "B": "100Base-TX 全双工 100 Mbit/s，节点间小于 100 m",
      "C": "只看主站 IP",
      "D": "无线无距离限制"
    },
    "answer": [
      "B"
    ],
    "analysis": "布线与拓扑要按通信手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "物理拓扑"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-217",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对伺服回原的机械基准时，应采用哪项？",
    "options": {
      "A": "任意模式数字都相同",
      "B": "有弹性的机械极限不宜作高精度原点",
      "C": "橡胶防撞块最适合作原点",
      "D": "无需原点开关"
    },
    "answer": [
      "B"
    ],
    "analysis": "现场机械设计与模式表一致。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服回原",
      "机械基准"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-218",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 SV680 的反馈配对疑问，哪项答复有依据？",
    "options": {
      "A": "ABZ 可代替任意安全编码器",
      "B": "支持列表即任意兼容",
      "C": "只看电机功率",
      "D": "编码器协议、位数、电池和安全电机按同机座配对表核对"
    },
    "answer": [
      "D"
    ],
    "analysis": "尤其全闭环和安全功能要闭环验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-221",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 IS810F 的电源范围时，应采用哪项？",
    "options": {
      "A": "直流母线 200 V，控制 5 V",
      "B": "控制电源和母线同端子",
      "C": "直流母线 537～679 V，控制 21.6～26.4 V",
      "D": "无需控制电源"
    },
    "answer": [
      "C"
    ],
    "analysis": "测量应在对应端子进行。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电源范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-222",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 IS810F PN 的启动控制字疑问，哪项答复有依据？",
    "options": {
      "A": "报文 1 的 16#47E→16#47F 顺序按指南验证",
      "B": "16#4F7E→16#4F7F",
      "C": "只改 IP 即启机",
      "D": "无需控制字"
    },
    "answer": [
      "A"
    ],
    "analysis": "报文类型与主站工艺对象必须配套。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F PN",
      "启动控制字"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-223",
    "category": "servo",
    "type": "single",
    "difficulty": 1,
    "stem": "在 PN 报文的现场联调中，哪项位置控制结论可直接用于检查表？",
    "options": {
      "A": "111 只是速度模式",
      "B": "102 永远等同基础 EPOS",
      "C": "所有报文等价",
      "D": "3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强"
    },
    "answer": [
      "D"
    ],
    "analysis": "不能把不同报文的控制字和功能块混用。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PN 报文",
      "位置控制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-004",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 SV660 系列伺服驱动器官方标称的 EtherCAT 同步误差与同步抖动指标是下列哪一组？",
    "options": {
      "A": "同步误差 15ns、同步抖动 ±20ns",
      "B": "同步误差 20ns、同步抖动 ±15ns",
      "C": "同步误差 1μs、同步抖动 ±100ns",
      "D": "同步误差 100ns、同步抖动 ±1μs"
    },
    "answer": [
      "A"
    ],
    "analysis": "SV660 官方资料明确写的是\"15ns 同步误差、±20ns 同步抖动\"，可与 SV630 的 EtherCAT 同步时钟指标相互对照。B 把两个数字对调，是最典型的记忆型干扰项；C、D 的微秒级指标远低于汇川总线伺服的官方水平，属于把普通以太网或早期现场总线的量级套用过来。多轴同步要求高的设备（如多轴插补、龙门同步）在方案阶段就要把这两个数字与主站能力一起评估。",
    "source": {
      "title": "汇川技术 SV660 通用型伺服驱动器产品页",
      "chapter": "产品特点 / 精准（EtherCAT 通信指标）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660",
      "EtherCAT",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-007",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 SV670 高端型伺服驱动器采用 Type-C 接口的主要设计目的是什么？",
    "options": {
      "A": "用于 EtherCAT 总线级联，替代标准网口",
      "B": "实现免上电即可连接调试，轻松查看与修改参数",
      "C": "为编码器提供备用供电通道",
      "D": "用于扩展 I/O 点位数量"
    },
    "answer": [
      "B"
    ],
    "analysis": "SV670 官方把 Type-C 接口作为\"免上电调试\"的卖点：不需要给驱动器主回路通电就能连上位机调试参数，现场调试和出厂预调试都更安全高效。A 明显错误，EtherCAT 走专用总线口（如 SV670N 的 CN 总线口），Type-C 不能替代；C 与编码器供电无关，编码器有独立接口；D 更是无关，I/O 扩展靠 CN 口与扩展卡。现场在通电前先离线确认参数组态，是避免上电即报警的有效做法。",
    "source": {
      "title": "汇川技术 SV670 高端型伺服驱动器产品页",
      "chapter": "产品特点及优点 / 免上电调试",
      "url": "https://www.inovance.com/portal/product/details?productId=345"
    },
    "tags": [
      "SV670",
      "调试",
      "Type-C"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-009",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 IS650 中大功率伺服系统官方标称的编码器抗震能力是多少？",
    "options": {
      "A": "1G",
      "B": "2G",
      "C": "5G",
      "D": "10G"
    },
    "answer": [
      "C"
    ],
    "analysis": "IS650 官方资料写明\"采用了柔性连接的编码器结构，抗震能力达到 5G\"，这是它面向弹簧机、开平机、塑料机械、纺织机械、金属加工等振动粉尘较大场合的核心卖点。A、B 明显低于官方指标，属于把普通刚性连接编码器的水平套过来；D 的 10G 官方无此表述。现场遇到电机编码器频繁损坏、报警断续的案例，应先看机械振动与安装同轴度，IS650 这类柔性编码器结构就是为这类工况设计的。",
    "source": {
      "title": "汇川技术 IS650 中大功率伺服驱动器产品页",
      "chapter": "产品特点及优点 / 高抗震动",
      "url": "https://www.inovance.com/portal/product/details?productId=272"
    },
    "tags": [
      "IS650",
      "编码器",
      "抗震",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-013",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 SV680L 系列高性能直驱系列伺服驱动器，官方标称的功率范围与支持的通信协议是？",
    "options": {
      "A": "0.05kW~7.5kW，支持 Modbus 和 EtherCAT",
      "B": "0.05kW~7.5kW，支持 EtherCAT、PROFINET 和 CANopen",
      "C": "7.5kW~80kW，支持 Modbus 和 EtherCAT",
      "D": "0.2kW~0.75kW，支持 Modbus 和 CANopen"
    },
    "answer": [
      "A"
    ],
    "analysis": "SV680L 官方表述为功率范围 0.05kW~7.5kW、支持 Modbus 和 EtherCAT 通讯协议，提供刚性表设置、惯量辨识及振动抑制功能，面向直驱（DD 电机）应用。B 多加了 PROFINET 和 CANopen，超出官方对该系列的表述；C 的 7.5kW~80kW 是 ISMG 大功率伺服电机的范围；D 的 0.2kW~0.75kW 是 SVD60 低压伺服的功率段。直驱场合惯量比、转矩波动与振动抑制是方案重点，SV680L 的官方功能点正对应这些需求。",
    "source": {
      "title": "汇川技术 SV680L 系列高性能直驱系列伺服产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=427"
    },
    "tags": [
      "SV680L",
      "直驱",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-016",
    "category": "servo",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网产品说明，SV660 系列通用型伺服驱动器支持下列哪些通信协议？",
    "options": {
      "A": "EtherCAT",
      "B": "Modbus",
      "C": "CANopen 与 CANlink",
      "D": "PROFINET"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "SV660 官方原文是\"支持 EtherCAT、Modbus、CANopen、CANlink 和 PROFINET 等通信协议，采用对应的通信接口\"，四个选项都在其中。这道题的关键不是\"能不能支持\"，而是\"靠哪个后缀的机型支持\"：脉冲型对应 P，EtherCAT 总线型对应 N，CANopen/CANlink 对应 C，PROFINET 对应 F（如 SV660F）。现场最常见的错误是订了 SV660P 却要求走 EtherCAT，或订了 SV660N 却要接脉冲上位机，必须在订单型号上把后缀写清楚。",
    "source": {
      "title": "汇川技术 SV660 通用型伺服驱动器产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660",
      "通信组网",
      "型号后缀"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-017",
    "category": "servo",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网对 MS1-R 系列伺服电机的说明，下列哪些描述是正确的？",
    "options": {
      "A": "功率范围 0.05kW~7.5kW",
      "B": "机座号 40mm~180mm",
      "C": "提供多种惯量配置与转速段配置，可按需选择不同配置的编码器类型",
      "D": "能效满足国家一级能效标准"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "MS1-R 官方卖点即\"更小尺寸、更高刚性、更低温升、能效满足国家一级能效标准、更全系列、更高转速\"，产品简介中明确功率 0.05kW~7.5kW、机座号 40mm~180mm、多种惯量配置/转速段配置、可选不同编码器类型，四项均出自官方。易混淆点是把它与 MSA 系列（0.1kW~1.8kW、40mm~130mm）和 MS1-R 增安型防爆电机（0.2kW~1.8kW、60mm~130mm）的范围混用。给客户做替换选型时，惯量配置与编码器类型是必须逐项确认的两栏。",
    "source": {
      "title": "汇川技术 MS1-R 系列伺服电机产品页",
      "chapter": "产品简介 / 产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "伺服电机",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-019",
    "category": "servo",
    "type": "multi",
    "difficulty": 2,
    "stem": "某设备原来使用脉冲型伺服，现改造为 EtherCAT 总线方案，选用汇川 SV660N 系列。在组网与调试阶段，下列哪些做法是合理的？",
    "options": {
      "A": "从主站 EtherCAT 从站库中导入与 SV660N 版本匹配的 XML（ESI）文件后再扫描组态",
      "B": "用上位机高速脉冲输出口给 SV660N 发脉冲指令",
      "C": "按官方资料推荐的总线通信线缆与接地要求施工，并确认通信周期设置在主站与从站能力范围内",
      "D": "在驱动器面板上手动设定一个与其他从站不冲突的 EtherCAT 站地址"
    },
    "answer": [
      "A",
      "C"
    ],
    "analysis": "A、C 正确：EtherCAT 组网必须用与产品版本匹配的 ESI/XML 文件（汇川官方资料下载区按系列提供通信 XML，如 SV660N 通信配置文件），线缆、屏蔽接地与通信周期需按官方通信手册执行。B 错误，SV660N 是 EtherCAT 总线型机型，脉冲指令走的是脉冲型（如 SV660P）的接口；D 错误，EtherCAT 从站地址由主站在组态扫描时按拓扑自动分配，不需要也不建议用面板或拨码手工设定。改造项目最容易踩的坑就是\"用旧习惯配总线机型\"。",
    "source": {
      "title": "汇川技术 SV660N 系列伺服用户手册",
      "chapter": "EtherCAT 通信配置",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660N",
      "EtherCAT",
      "通信组网",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-021",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "根据汇川 SV680 系列高性能旗舰型伺服驱动器的官方电气规格，该系列的脉冲型、EtherCAT 总线型、PROFINET 总线型三个机型，在 DI/DO 输入输出端口数量上是完全相同的。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。SV680 系列官方电气规格表按机型分别列出端口：脉冲型为 8 路 DI、2 路 AI，5 路 DO、1 路 AO；EtherCAT 总线型为 5 路 DI、2 路 AI，2 路 DO、1 路 AO；PROFINET 总线型为 5 路 DI、2 路 AI（16bit 电压型/12bit 电压型），2 路 DO、1 路 AO。也就是说总线型机型的可用 DI/DO 点数明显少于脉冲型，因为部分 IO 功能由总线过程数据承担。这个差异在方案阶段极易被忽略：按脉冲型点数做的 IO 清单，换成总线型后会不够用，需要额外加 IO 模块或改由总线映射。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "电气规格 / 输入端口、输出端口",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "输入输出端口",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-022",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 SV670 高端型伺服驱动器支持 ABZ 正交脉冲全闭环控制，可确保机械定位精度。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。SV670 官方产品特点中明确列出\"全闭环控制：支持 ABZ 正交脉冲全闭环，确保机械定位精度\"。需要注意的是，全闭环与半闭环是两套不同的反馈结构：半闭环用电机编码器反馈，全闭环还要把机械端（如光栅尺、第二编码器）的 ABZ 信号接回驱动器参与位置环。现场做全闭环要同时确认机械端反馈信号类型、分频比与接线口定义，不能只勾选参数。",
    "source": {
      "title": "汇川技术 SV670 高端型伺服驱动器产品页",
      "chapter": "产品特点及优点 / 全闭环控制",
      "url": "https://www.inovance.com/portal/product/details?productId=345"
    },
    "tags": [
      "SV670",
      "全闭环",
      "参数配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-023",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "在 EtherCAT 网络中，汇川 SV660N 系列伺服驱动器的从站站地址，需要在每台驱动器的拨码开关上手工设定，且全网的从站地址不能重复。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。EtherCAT 从站地址由主站在组态与扫描过程中按网络拓扑自动分配，不需要在驱动器上用拨码开关手工设定站号，现场也不建议这样做。该说法是把 CANopen/CANlink 等总线\"手工设站号+波特率\"的习惯套用到了 EtherCAT 上——在 CANopen 类网络中站号确实需要逐一设定并保证不重复。现场若出现\"站地址冲突\"类现象，应从主站组态、拓扑顺序与 ESI 文件版本查起，而不是去改驱动器拨码。",
    "source": {
      "title": "汇川技术 SV660N 系列伺服用户手册",
      "chapter": "EtherCAT 通信配置",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660N",
      "EtherCAT",
      "站地址"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-028",
    "category": "servo",
    "type": "short",
    "difficulty": 2,
    "stem": "客户要为一台新设备选配汇川伺服（驱动器 + 电机），请列出售前选型需要向客户确认或自行核算的关键项目。",
    "options": null,
    "answer": "参考答案要点：\n1）负载与工况：机械结构形式（丝杠、同步带、齿轮齿条、直驱等）、负载质量、摩擦与配重、最大速度与加减速时间、定位精度与重复定位精度要求、工作制与连续/峰值转矩需求。\n2）转矩与惯量核算：按机械参数折算负载转矩与加减速转矩，核算连续转矩与峰值转矩是否在电机能力范围内；核算负载惯量比是否在系列允许范围，惯量不匹配要靠减速比或选大惯量配置的电机解决，而不是简单加大驱动器功率。\n3）转速核算：最高转速要在电机额定转速与最高转速允许范围内，注意 SV680 官方标称最高转速 7000rpm 这类指标只对应特定机型。\n4）电机选型项：按官方选型手册确认机座号、功率、额定转速、惯量配置（如 MS1-R 系列提供多种惯量配置与转速段配置）、编码器类型与位数（18bit/23bit/26bit、是否需要真绝对值/免电池编码器）、是否需要制动器、油封、键槽等选项。\n5）驱动器选型项：按电机额定/最大电流匹配驱动器容量代码（如 1R6、2R8、5R5、7R6、012 等），确认电压等级与控制电源，确认通信控制方式与型号后缀（脉冲 P / EtherCAT N / CANopen-CANlink C / PROFINET F），确认是否需要功能安全（STO 标配，SS1/SLS 等需扩展模块）与全闭环。\n6）现场条件：供电电压与容量、环境温度与防护要求、安装空间与散热条件、电柜内安装间距、线缆长度（电机线、编码器线是否有延长需求）。\n7）资料与验证：用官方选型手册与汇川产品选型工具（官网提供产品选型工具入口）复核，把最终型号交由原厂/代理商确认后再下单。",
    "analysis": "本题考察选型流程的完整性。常见失分点是只算转矩不看惯量匹配、只看电机功率不核对驱动器电流容量代码、忽略电压等级与控制电源、或者忘记确认通信后缀导致到货无法组网。建议把上述清单固化为部门选型表，选型错误在样机阶段暴露的代价远小于批量出货后。",
    "source": {
      "title": "汇川技术伺服产品选型工具与各系列伺服选型手册",
      "chapter": "选型手册 / 选型流程",
      "url": "https://www.inovance.com/selector/"
    },
    "tags": [
      "选型",
      "伺服电机",
      "驱动器"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-029",
    "category": "servo",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川伺服电机与伺服驱动器的配套关系，以及现场配错或混配时可能出现的问题。",
    "options": null,
    "answer": "参考答案要点：\n1）配套原则：伺服驱动器与电机必须按官方选型手册的对应关系成套选配。驱动器的容量代码对应可驱动的电机功率与电流等级，不同系列、不同机座号的电机不能凭功率数字随意互换。\n2）编码器匹配：电机编码器类型与位数必须与驱动器支持的编码器接口类型一致（18bit/23bit/26bit 绝对值、多圈绝对值、免电池/真绝对值等），编码器不匹配时通常在上电自检阶段即报警，无法进入正常运行。\n3）电流与容量匹配：驱动器额定/最大电流要覆盖电机额定电流与峰值电流需求；用小容量驱动器带大电机，会在加速或负载突变时触发过载、过流类报警；用大容量驱动器带小电机，则可能因容量代码不对应而无法正常完成电机参数识别或保护点不匹配。\n4）功能与协议匹配：脉冲型/总线型后缀必须与上位机控制方式一致；需要全闭环、功能安全（STO 之外的扩展安全功能）时，要确认驱动器与电机是否支持相应组合（如 SV680 的功能安全需功能安全伺服电机配合提供位置、速度等监视信息）。\n5）现场常见问题：编码器线缆与电机动力线接错、延长线非官方线缆导致编码器通信异常、制动器线未接或电压不符、混用不同系列电机与驱动器导致参数无法自学习。\n6）作业要求：改装、替换电机时必须回到官方选型手册与对应系列用户手册确认型号组合，不得按\"功率相同即可用\"的经验直接替换。",
    "analysis": "本题考察对配套关系的严谨态度。现场最容易出现的错误是\"功率一样就换\"或\"编码器插头能插上就说明能配\"——插头形式相同并不代表编码器协议与分辨率兼容。另一个高发问题是自行制作编码器延长线，线径、屏蔽与阻抗不达标会引入通信类报警，且这类问题往往间歇出现、极难定位。",
    "source": {
      "title": "汇川技术各系列伺服用户手册 / 选型手册（SV660N、SV670P、SV680N、MS1-R 系列等）",
      "chapter": "选型与配套说明 / 安装接线",
      "url": "https://www.inovance.com/portal/product/list?typeId=13"
    },
    "tags": [
      "选型",
      "接线安装",
      "编码器"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-031",
    "category": "servo",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某包装设备客户使用汇川 SV660P 系列伺服驱动器配 MS1-R 系列伺服电机做横封刀轴定位。设备新机调试时运行正常，量产连续运行约 4 小时后开始出现定位偏差相关的报警，停机冷却十几分钟再开机又能正常运行一段时间。现场环境温度约 45℃，机械负载手感无明显变化，客户怀疑是\"伺服质量问题\"要求换驱动器。请给出你的分析思路与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1）先别急着换件，按时间规律判断问题性质：\"连续运行数小时后出现、停机冷却后恢复\"是典型的热相关问题特征，应优先从散热与温度关联入手，而不是直接判定驱动器不良。\n2）取证据：读取驱动器故障记录/报警代码与发生时刻的负载率、电机与驱动器温度等监控数据，确认报警时是否伴随负载率明显上升或温度偏高；同时记录电柜内部温度分布与进出风情况。\n3）核实安装与散热条件：对照所配系列（SV660P 系列伺服用户手册）中安装与散热章节的要求，检查驱动器安装方向与间距、是否多台紧贴安装、电柜风扇与滤网是否堵塞、柜内是否有其他热源；45℃环境温度已接近多数伺服产品的工作温度上限区间，散热余量会明显不足。\n4）区分电气与机械两类原因：机械侧还要查联轴器与同步带张紧、刀轴润滑与热伸长、机械阻力随温度上升的情况；电气侧要确认是否因温度升高触发降额或保护，以及位置偏差窗口、电子齿轮比等参数设置是否过紧。\n5）处理建议：优先改善散热（加大电柜通风量、加装风扇或空调、按官方要求重新排布安装间距），复测连续运行表现；同时把监控到的温度与负载曲线存档，作为后续判责依据。\n6）沟通口径：向客户说明按官方安装与散热要求施工是保证性能的前提，并给出可验证的复测方案；若散热改善后仍复现，再按售后流程申请原厂技术支持进一步分析，而不是先换件。",
    "analysis": "本题考察\"热相关故障\"的现场判断与客户沟通。典型误判是把热问题当成随机性电气故障，反复换驱动器甚至换电机，问题依旧、成本却持续上升。正确路径是先取故障记录与温度/负载曲线，再区分电气降额与机械热伸长两类原因，最后用改善散热并复测的方式闭环。整理监控数据同时服务于客户沟通与后续判责。",
    "source": {
      "title": "汇川技术 SV660P 系列伺服用户手册",
      "chapter": "安装与散热要求 / 故障处理",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660P",
      "故障排查",
      "散热",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-033",
    "category": "servo",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某客户新装一台汇川 SV660N 系列伺服驱动器带 MS1-R 系列伺服电机，第一次上电就报出报警，电机不转。客户此前使用其他品牌伺服，已自行按旧习惯接好线并设置了部分参数。请你列出首次上电调试的标准作业顺序，以及针对\"上电即报警\"应优先检查哪些项目。",
    "options": null,
    "answer": "参考答案要点：\n1）先恢复标准作业顺序，不要在上电状态下反复试错：核对机械是否已脱开或处于安全行程内、有无人员处于运动部件范围内；确认主回路与控制电源的电压等级、相序与接线符合对应系列用户手册（如 SV660N 系列伺服硬件手册/用户手册）的接线要求，控制电源与主回路电源不可混接。\n2）接线逐项核对：主回路动力线 U/V/W 与电机是否一一对应；编码器线是否接到驱动器的编码器接口且插紧、卡扣到位；抱闸线（若电机带制动器）是否接到正确的抱闸输出端子、抱闸电源电压是否与电机铭牌一致；安全功能（STO 为汇川伺服标配功能）相关端子与控制回路是否已按对应系列手册的接线要求正确连接——安全回路未按要求处理是导致\"上电即报安全类报警、电机不转\"的常见原因，务必先查手册确认该机型的 STO 端子默认处理方式。\n3）用免上电调试能力先离线配置：官方提供伺服后台调试软件（如 InoDriverShop 伺服后台调试软件，另有 iFA Drive 等工具），部分机型支持通过 Type-C 调试线缆实现免上电调试、数据监控与参数修改；可在主回路不通电的情况下先读取并设置参数、检查电机与编码器识别信息，确认无误后再上电。\n4）上电后按序操作：先只合控制电源，观察面板显示与报警；确认无报警后再合主回路；执行电机参数/编码器识别类操作（按对应系列手册要求），再依次做点动、回零、定位测试，最后做加减速与负载测试。\n5）读取报警内容定位：拿到具体报警代码后，对照该系列用户手册的故障处理章节查原因与对策，而不是凭旧品牌经验猜测。旧品牌与新品牌的报警代码体系不同，客户\"按旧习惯设参数\"本身就是风险点。\n6）参数与备份：确认控制方式（脉冲/总线）与上位机一致，确认电子齿轮比、位置偏差窗口、刚性增益等关键参数；调试完成后做参数备份存档。\n7）记录与交付：保留首次上电与调试记录，向客户说明各接口定义与安全注意事项，避免客户后续自行改动接线。",
    "analysis": "本题考察首台设备的上电调试规范。高频错误集中在三处：安全功能（STO）相关端子与控制回路未按手册要求处理、编码器线未插到位或接到错误接口、沿用旧品牌习惯设置参数与报警判读。把\"先控制电源后主回路、先识别后点动、最后带载\"的顺序固化下来，可以显著降低首次上电的损坏风险。",
    "source": {
      "title": "汇川技术 SV660N 系列伺服用户手册 / SV660N 系列伺服硬件手册",
      "chapter": "安装接线 / 上电与试运行 / 故障处理",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660N",
      "调试",
      "接线安装",
      "STO"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-035",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 SV680 系列高性能旗舰型伺服驱动器的官方“规格参数”表中，“其他接口”一栏列出的三项接口是下列哪一组？",
    "options": {
      "A": "独立抱闸输出端口（省继电器）、独立 PTC 接口、独立全闭环接口",
      "B": "内置制动电阻、内置 EMC 滤波器、内置直流电抗器",
      "C": "独立 RS485 接口、独立 CANopen 接口、独立 USB 调试接口",
      "D": "独立安全继电器输出、独立温度传感器输入、独立压力传感器输入"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方 SV680 规格参数表“其他接口”一行的原文是“独立抱闸输出端口（省继电器）独立PTC接口独立全闭环接口”，因此 A 正确。B 讲的是内置无源器件，SV680 规格表并未列出内置制动电阻、内置滤波器或电抗器（其制动相关标配项是动态制动），属于把其它产品线的集成思路套用过来；C 的 RS485 与 CANopen 不是 SV680 的接口形态，总线走 EtherCAT/PROFINET 专用口、调试走 Type-C 端口；D 把安全功能与过程仪表输入混为一谈，安全功能是通过 STO 端子、FSoE/PROFIsafe 总线与功能安全卡实现的。现场很实用的一点是：独立抱闸输出端口可直接驱动抱闸、省掉中间继电器，但抱闸电源电压与电流仍要按电机铭牌核对。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "规格参数 / 其他接口",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "接口",
      "选型",
      "接线安装"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-036",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "根据汇川官网 SV680 系列“规格参数”表，该系列列出的驱动器容量代码（型号）与调试端口是下列哪一组？",
    "options": {
      "A": "SV680*S1R6、SV680*S2R8、SV680*S5R5、SV680*S7R6；调试端口为 Type-C",
      "B": "SV680*S012、SV680*S2R8、SV680*S5R5、SV680*S7R6；调试端口为 Mini-USB",
      "C": "SV680*S1R6、SV680*S2R8、SV680*S5R5、SV680*S7R6；调试端口为 RJ45",
      "D": "SV680*T3R5、SV680*T5R4、SV680*T8R4、SV680*S012；调试端口为 Type-C"
    },
    "answer": [
      "A"
    ],
    "analysis": "官网 SV680 规格参数表“驱动器型号”一行为 SV680*S1R6、SV680*S2R8、SV680*S5R5、SV680*S7R6，同表“调试端口”一行为 Type-C，主回路电源标注为单相/三相 AC200V~240V AC，A 与官方完全一致。B 把 S012 混进 SV680 容量代码（S012 出现在 SV605 规格表中），并把调试端口改成 Mini-USB；C 的 RJ45 是 EtherCAT/PROFINET 网口形态，不是调试端口；D 把 SV605 三相 380V 等级的 T3R5/T5R4/T8R4 当成 SV680 的型号。跨系列搬容量代码是报价环节最容易犯的低级错误——代码里的数字并不直接代表功率，必须回到对应系列规格表逐行核对。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "规格参数 / 驱动器型号、调试端口、主回路电源",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "容量代码",
      "Type-C",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-043",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 IS650 中大功率伺服官方标注的“主轴驱动”能力，其含义与官方提供的相关扩展卡是？",
    "options": {
      "A": "适配各种第三方异步及电主轴，实现高转速、高精度驱动；官方资料下载区提供 S65-K-RES 旋转变压器扩展卡用户手册",
      "B": "只能驱动汇川自家 ISMG 系列伺服电机，不支持第三方电机",
      "C": "主轴驱动指位置模式下的分度定位，不涉及第三方电机",
      "D": "通过外加编码器分频卡实现第三方电机驱动，官方无专用扩展卡"
    },
    "answer": [
      "A"
    ],
    "analysis": "IS650 官方产品特点写明“主轴驱动——适配各种第三方异步及电主轴，高转速，高精度”，说明它不仅能带汇川伺服电机，还覆盖机床主轴类负载；官方资料下载区同时提供《S65-K-RES旋转变压器扩展卡用户手册》，说明可通过扩展卡接入旋转变压器类反馈，A 正确。B、C 把 IS650 的应用范围收窄，与官方表述不符；D 否认了官方扩展卡的存在。把第三方异步主轴接到 IS650 上时，必须确认反馈类型（编码器或旋变）、是否需要扩展卡、额定频率与弱磁点，并按官方手册核对参数组，否则高速区容易出现失步或过流报警。",
    "source": {
      "title": "汇川技术 IS650 中大功率伺服驱动器产品页",
      "chapter": "产品特点及优点 / 主轴驱动；资料下载（S65-K-RES 旋转变压器扩展卡用户手册）",
      "url": "https://www.inovance.com/portal/product/details?productId=272"
    },
    "tags": [
      "IS650",
      "主轴驱动",
      "方案应用",
      "旋变"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-045",
    "category": "servo",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 SV680 系列高性能旗舰型伺服驱动器的产品说明，下列哪些属于官方明确标注的内容？",
    "options": {
      "A": "提供 5 年整机质保服务，融合汽车级质量设计标准",
      "B": "官方标称行业领先 LED 固晶机单边 45K/h 生产速率",
      "C": "通过 CE/UL/KC/TUV 认证",
      "D": "内置黑匣子故障录波功能，可记录故障前后的波形数据"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均出自 SV680 官方产品页原文：“提供5年整机质保服务”“融合汇川汽车级质量设计标准”“行业领先LED固晶机单边45K/h生产速率”“CE/UL/KC/TUV认证”。D 是干扰项：在汇川官网检索“黑匣子”，命中对象是模块化变频装置、传动与工程机械驱动等产品线的“黑匣子追溯/故障录波”表述，SV680 伺服产品页与规格参数表中没有黑匣子相关标注，把变频器产品线的功能说成伺服功能属于夸大宣传。销售报质保与认证时必须按最终型号核对证书覆盖范围，出口项目还要另行确认国际版型号的认证清单。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特性及优点（性能优越）",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "质保",
      "认证",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-046",
    "category": "servo",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网对 MS1-R 系列增安型防爆电机的说明，下列哪些描述是正确的？",
    "options": {
      "A": "功率范围 0.2kW~1.8kW，机座号 60mm~130mm",
      "B": "整机防护等级为 IP65，刚性最高可达 36 级",
      "C": "可搭配汇川 SV660、SV670、IS620F、IS810 等驱动器，支持脉冲、ECAT、PN、CAN 等控制方式",
      "D": "采用 26 位多圈绝对值编码器，重复定位精度可达 15 角秒以内"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均出自官方页面原文：功率范围 0.2kW~1.8kW、机座号 60mm~130mm；“刚性最高可达36级，整机防护等级为IP65”；“可搭配汇川SV660、SV670、IS620F、IS810等驱动器，脉冲、ECAT、PN、CAN等控制方式、单传多传形态随心配”。D 错在编码器：官方写的是“使用汇川23位编码器，定位更精准（重复定位精度可达=<15角秒）”，26 位多圈绝对值（含功能安全型）是 MS1-R 通用系列新增的编码器配置，不是该防爆机型的标注规格。防爆项目的正确顺序是先按危险区域与防爆型式定机型，再核对驱动器配套与证书，不能只比功率。",
    "source": {
      "title": "汇川技术 MS1-R 系列增安型防爆电机产品页",
      "chapter": "产品概览 / 产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=407"
    },
    "tags": [
      "MS1-R",
      "防爆电机",
      "选型",
      "防护等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "SRV-047",
    "category": "servo",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 SVD60 低压伺服驱动器的电气规格表，下列哪些描述是正确的？",
    "options": {
      "A": "三个容量代码 6R5/012/023 对应的连续输出电流分别为 6.5Arms/12Arms/23Arms",
      "B": "全系列不标配内置制动电阻，支持外接制动电阻（外接电阻允许最小电阻值 10Ω）",
      "C": "冷却方式为风冷，认证包含 CE 认证与 ETL 认证",
      "D": "全系列标配内置制动电阻与强制水冷，无需外接任何器件"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均出自官方 SVD60 电气规格表：容量代码 6R5/012/023 对应 0.2/0.4/0.75kW 与连续输出电流 6.5/12/23Arms；规格表明确“全系列不标配内置电阻，支持外接制动电阻”，外接电阻允许最小电阻值 10Ω；冷却方式为“风冷”，认证为 CE 认证与 ETL 认证。D 与官方表述完全相反，是典型的“想当然”干扰项。这里还有一个高频混淆点：SVD60 官方卖点中有“内置动态制动，制动距离缩短80%”，说的是动态制动（能耗制动/电机侧制动）为内置能力，与需要外接的制动电阻是两件事，不能因为看到“内置动态制动”就认为回馈能量已被吸收。低压直流平台在 AGV、穿梭车等场合频繁起停，回馈能量必须靠外接制动电阻或母线吸收处理；若按 D 的理解选型，减速时会出现母线过压报警甚至器件损坏，同时还要按电池平台核对 24V/48V/72V 电压等级与线缆压降。",
    "source": {
      "title": "汇川技术 SVD60 低压伺服驱动器产品页",
      "chapter": "规格参数 / 电气规格",
      "url": "https://www.inovance.com/portal/product/details?productId=509"
    },
    "tags": [
      "SVD60",
      "制动电阻",
      "低压伺服",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-048",
    "category": "servo",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网对 MS1-R 系列真绝对值伺服系统的说明，下列哪些描述正确？",
    "options": {
      "A": "功率范围 7.5kW 以内，涵盖 26bit、23bit 和 18bit",
      "B": "官方卖点之一是“绝对值 免维护 电机尺寸不变”",
      "C": "可广泛应用于医疗、半导体、机床、汽车、包装和手机等行业",
      "D": "因为取消了编码器电池，必须使用专门设计的机械安装尺寸，原有 MS1-R 电机无法直接替换"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均来自官方原文：功率范围 7.5kW 以内、涵盖 26bit/23bit/18bit；页面标题卖点为“绝对值 免维护 电机尺寸不变”；应用行业列出医疗、半导体、机床、汽车、包装和手机。D 与“电机尺寸不变”的官方卖点直接矛盾，是干扰项——真绝对值产品可在不更改机械安装尺寸的前提下替换。需要说明的是，官网未公开免电池多圈保持的具体实现原理与接线注意细节，具体接线方式、断电后多圈数据保持要求与配套驱动器参数，必须按《MS1-R系列免电池编码器伺服电机选型手册》及对应系列用户手册执行，不能凭“免电池”三个字就认为无需任何核对。",
    "source": {
      "title": "汇川技术 MS1-R 系列真绝对值伺服系统产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=908"
    },
    "tags": [
      "真绝对值",
      "免电池",
      "编码器",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-053",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 ISMG 系列大功率伺服电机的官方标注为：功率覆盖 7.5kW~80kW，标配 26 位多圈绝对值编码器，整机防护等级 IP65。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。ISMG 官方原文是“功率覆盖7.5 kW ~ 80 kW、标配23位绝对值编码器；产品的IP54防护等级设计、耐冲击振动的编码器结构设计保证了产品可以覆盖绝大多数工业场合的应用”，即编码器为 23 位绝对值、防护等级为 IP54，题干把这两项指标都拔高了。26 位多圈绝对值（含功能安全型）是 MS1-R 系列新增的编码器配置，IP65 是 MS1-R 系列增安型防爆电机的整机防护等级，都不是 ISMG 的标注参数。官方还说明 ISMG 采用独特电磁设计与风冷回路、内置热保护器，ISMG1 系列可加装 150N·m 制动扭矩的制动器；大功率场合报价前必须逐项核对这几项配置。",
    "source": {
      "title": "汇川技术 ISMG 系列大功率伺服电机产品页",
      "chapter": "产品概览 / 产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=164"
    },
    "tags": [
      "ISMG",
      "大功率伺服",
      "防护等级",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-054",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "在汇川 SV605 官方规格表中，容量代码 S012 在单相 220V 等级与三相 220V 等级下的驱动器功率与连续输出电流完全相同（均为 1.5kW、8.5Arms）。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。官方 SV605 规格表中，“单相 220V 等级”的 Size D 机型为 S012，驱动器功率 1.5kW、连续输出电流 8.5Arms、最大输出电流 23.1Arms；“三相 220V 等级”同样列出 Size C 的 S7R6 与 Size D 的 S012，S012 一行的功率与电流数值一致，差异只在主电路电源（单相 200V AC~240V AC 与三相 200V AC~240V AC）。这说明容量代码描述的是驱动器输出能力，不随输入相数改变；但同一功率下单相输入的主回路电流更大，配线与断路器要按相数分别核算。易犯的错误是把容量代码里的数字直接当功率（S012 并非 1.2kW），或忽略单相与三相在配线选型上的差别。",
    "source": {
      "title": "汇川技术 SV605 经济型伺服驱动器产品页",
      "chapter": "规格参数 / 单相 220V 等级与三相 220V 等级驱动器电气规格",
      "url": "https://www.inovance.com/portal/product/details?productId=541"
    },
    "tags": [
      "SV605",
      "容量代码",
      "接线安装",
      "选型"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-057",
    "category": "servo",
    "type": "short",
    "difficulty": 2,
    "stem": "客户要为新设备选配 MS1-R 系列伺服电机，请说明该系列在转速、惯量与编码器三个维度的官方配置，并给出选型确认清单。",
    "options": null,
    "answer": "参考答案要点：\n1）系列基础：MS1-R 系列官方标称功率范围 0.05kW~7.5kW、机座号 40mm~180mm，提供多种惯量配置、转速段配置，可根据客户需求提供不同配置的编码器类型。\n2）转速维度（官方“更高转速”数据）：MS1H1 和 MS1H4（40/60/80 机座）最高转速从 6000rpm 提升到 7000rpm；MS1H2 机型最高转速从 5000rpm 提升到 6000rpm；MS1H3（130/180 机座）最高转速从 3000rpm 提升到 4500rpm。选型时先按机械最高速度折算电机转速并留出加减速与超调余量，不能把 7000rpm 统一套用到所有机型。\n3）惯量维度（官方“更全系列”“更高刚性”）：60/80 机座增加超小惯量配置，更适用于快点点位控制场合；典型机型刚性等级提升 5 级。惯量不匹配时优先通过惯量配置或传动比解决，而不是直接加大功率。\n4）电压维度：100、130、180 机座增加 220V 电压电机，报价前要确认现场供电电压能否匹配目标机座。\n5）编码器维度：官方新增 26 位多圈绝对值编码器及功能安全型 26 位多圈绝对值编码器，满足更高精度要求；若客户还要取消编码器电池、避免电池出口报备与维护，可转向 MS1-R 系列真绝对值（免电池编码器）产品，官方说明其功率范围 7.5kW 以内、涵盖 26bit、23bit 和 18bit，卖点为“绝对值 免维护 电机尺寸不变”。\n6）其他卖点与确认项：官方说明汇川电机 550W 至 7.5kW 满足 GB30253 一级能效要求，MS1-R 卖点含“能效满足国家一级能效标准”、长度最大降幅 29%、60/80 机座典型工况温升降低 20K；同时确认是否需要制动器、油封、键槽等机械选项，以及驱动器容量代码与电机电流是否匹配。\n7）落地动作：以《MS1-R 系列伺服电机选型手册》为准逐项确认机座号、功率、转速段、惯量配置、编码器类型与机械选项；涉及免电池方案的按《MS1-R 系列免电池编码器伺服电机选型手册》核对，再由原厂或代理商复核型号后下单。",
    "analysis": "本题考察电机选型的维度完整性。最容易出错的写法是只报“功率+机座号”，把转速段、惯量配置与编码器类型漏掉——同一机座号下不同转速段与惯量配置对应不同转矩-转速特性，选错后表现为加速能力不足或高速区转矩衰减。另一个高频错误是把 26 位多圈绝对值当成全系列标配（官方表述是“增加”，需按手册确认具体机型的可选项），以及把整机能效结论外推到官方表述范围之外的规格。",
    "source": {
      "title": "汇川技术 MS1-R 系列伺服电机产品页 / MS1-R 系列伺服电机选型手册",
      "chapter": "产品概览 / 更小尺寸、更高刚性、更低温升、更全系列、更高转速",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "MS1-R",
      "选型",
      "惯量",
      "编码器"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-059",
    "category": "servo",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某物流装备客户做潜伏式 AGV，采用电池平台供电：标称 48V 直流母线，要求两轴行走驱动、体积小、支持总线组网，并在急停与坡道驻车时可靠停机。客户初步想用“交流伺服+逆变器”方案。请给出汇川产品选型建议与需要确认的接线、配置要点。",
    "options": null,
    "answer": "参考答案要点：\n1）平台选择：优先推荐汇川 SVD60 低压伺服驱动器。官方定位为低压直流伺服平台，功率范围 0.2kW~0.75kW，支持 CANopen 和 EtherCAT 控制方式，配合上位机可实现多台伺服驱动器联网运行；适用于物流、医药、电子制造、锂电、汽车、机床等行业的自动化设备，以小体积、高性能、更安全通用方案实现位置、速度与转矩控制。官方卖点还包括“SIL3等级功能安全，内置动态制动，制动距离缩短80%”“DIN导轨安装，即插即用免调试”“23位高精度编码器，最大3.5倍过载，2毫秒快速定位”“整机体积缩小76%，功率密度提升417%”，与 AGV 对体积、安全与快速定位的诉求高度契合。交流伺服加逆变器的方案会增加体积、损耗与故障点，车载场合不占优。\n2）电气参数核对：SVD60 规格表主电路电源为 VDC 24~72，48V 母线在其范围内；容量代码 6R5/012/023 分别对应 0.2/0.4/0.75kW 与连续输出电流 6.5/12/23Arms，最大输出电流 22.8/42/62Arms，应按行走电机的连续与峰值电流选择，而不是只按功率。官方还给出“启机电压尖峰 ≤80V”与主回路连续输入电流 5.5/10/20Arms，配线、保险与断路器要按此核算。\n3）制动与回馈能量：官方规格表明确“全系列不标配内置电阻，支持外接制动电阻”，外接电阻允许最小电阻值 10Ω，冷却方式为风冷。AGV 频繁起停与坡道下行会产生回馈能量，必须按计算选配外接制动电阻（或采用母线吸收方案），否则易出现母线过压报警。急停与坡道驻车应结合电机抱闸与安全回路设计，与安全相关的功能按驱动器官方资料实际支持情况确认。\n4）认证与合规：SVD60 官方认证为 CE 认证与 ETL 认证，出口或客户有合规要求时可作为依据，具体证书覆盖规格需按最终型号核对。\n5）需要向客户确认的项目：电池平台实际电压波动范围（满电、亏电、充电机输出）、行走电机型号与电流、是否需要抱闸、通信方式（CANopen 或 EtherCAT）与主控总线周期、线缆长度与压降、安装空间与散热、防护与环境温度、外接制动电阻的阻值与安装位置。\n6）验证建议：样机阶段做满电与亏电两种母线电压下的加速能力测试、坡道下行制动测试、连续运行温升与母线电压波动记录，确认无过压/欠压报警后再批量。",
    "analysis": "本题考察低压直流平台选型的完整链条。常见错误有三类：一是只按功率挑容量代码，忽略连续/最大输出电流与母线电压范围；二是沿用交流伺服“内置制动电阻”的习惯，未按官方“全系列不标配内置电阻、支持外接制动电阻”准备外接电阻，导致下线调试时频繁报过压；三是不核算电池平台电压波动与线缆压降，满电与亏电工况表现差异大。把电压、电流、制动能量、通信与认证逐项落表，是车载伺服方案一次成功的必要条件。",
    "source": {
      "title": "汇川技术 SVD60 低压伺服驱动器产品页",
      "chapter": "规格参数 / 电气规格；产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=509"
    },
    "tags": [
      "SVD60",
      "低压伺服",
      "选型",
      "接线安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-064",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 SVD60 系列低压伺服驱动器的官方功率范围是 ____ kW ~ ____ kW，支持 ____ 和 EtherCAT 两种控制方式。",
    "options": null,
    "answer": [
      "0.2",
      "0.75",
      "CANopen"
    ],
    "analysis": "答案依据汇川官网 SVD60 低压伺服驱动器产品页原文：“产品功率范围为 0.2kW~0.75kW，支持 CANopen 和 EtherCAT 控制方式，配合上位机可实现多台伺服驱动器联网运行”，适用于物流、医药、电子制造、锂电、汽车、机床等行业。易错点是把低压伺服的功率段与交流伺服混记：0.05kW~7.5kW 是 SV660、SV630、SV670 等交流系列的官方范围，0.1kW~2kW 是 SV605 的范围；另一个易错点是给它加上 Modbus 或 PROFINET——官方资料下载区按控制方式只区分 SVD60C（CANopen）与 SVD60N（EtherCAT）两个子系列。AGV、穿梭车等车载平台选型时，功率、通信方式还要与 24V/48V/72V 电池母线一并对齐。",
    "source": {
      "title": "汇川技术 SVD60 低压伺服驱动器产品页",
      "chapter": "产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=509"
    },
    "tags": [
      "SVD60",
      "低压伺服",
      "功率范围",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-065",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 SV605 经济型伺服驱动器容量代码 S012 在单相 220V 等级下的连续输出电流为 ____ Arms；同为 220V 等级、功率 2kW 的机型所对应的容量代码是 ____（该代码以字母 T 开头，仅填代码后四位，如 3R5），该机型仅出现在 ____ V 供电等级规格表中。",
    "options": null,
    "answer": [
      "8.5",
      "T8R4",
      "380"
    ],
    "analysis": "答案依据汇川官网 SV605 规格参数表：单相 220V 等级 Size D 机型 S012 的驱动器功率为 1.5kW、连续输出电流 8.5Arms、最大输出电流 23.1Arms（可与同为 220V 等级但三相输入的 S012 相互对照，两者的功率与电流数值一致）；三相 380V 等级列出 T3R5/T5R4/T8R4 三款，功率分别为 1/1.5/2kW，连续输出电流分别为 3.2/4.4/6.1Arms，其中 T8R4 是官方 380V 表格中独有、220V 表格中没有的机型。易错点有三处：把容量代码里的数字直接当功率（S012 并不是 1.2kW）；把 S 与 T 两个电压等级前缀看混（S 对应 220V 等级、T 对应 380V 等级）；只核对功率而不看连续输出电流。采购核对订单与报价时必须三项一起对，否则容易出现“功率对得上、电流不够用”的到货问题。",
    "source": {
      "title": "汇川技术 SV605 经济型伺服驱动器产品页",
      "chapter": "规格参数 / 单相 220V、三相 220V 与三相 380V 等级驱动器电气规格",
      "url": "https://www.inovance.com/portal/product/details?productId=541"
    },
    "tags": [
      "SV605",
      "容量代码",
      "连续输出电流",
      "采购核对"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-066",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 MS1-R 系列增安型防爆电机的功率范围是 0.2kW~1.8kW，机座号 60mm~____ mm，整机防护等级为 IP____，官方资料还标注其体积约为同功率隔爆型防爆电机的 ____%。",
    "options": null,
    "answer": [
      "130",
      "65",
      "50"
    ],
    "analysis": "答案依据汇川官网 MS1-R 系列增安型防爆电机产品页：功率范围 0.2kW~1.8kW、机座号 60mm~130mm；“整机防护等级为 IP65”；“继承小钢炮的小巧体积和强力性能，汇川防爆电机是同功率隔爆型防爆电机体积的 50%”。易错点是把机座号上限记成 180mm——40mm~180mm 是 MS1-R 通用系列的范围，防爆机型只到 130mm；把 IP65 记成 IP54（那是 ISMG 系列大功率伺服电机的防护等级）或 IP67（那是 IS650 编码器部位的防护等级，不是电机整机）。防爆项目必须先按危险区域与防爆型式确定机型，再核对功率、机座号与防护等级，安装尺寸对不上会直接导致机械接口返工。",
    "source": {
      "title": "汇川技术 MS1-R 系列增安型防爆电机产品页",
      "chapter": "产品简介 / 产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=407"
    },
    "tags": [
      "MS1-R",
      "防爆电机",
      "防护等级",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-070",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "对于 MS1-R 系列伺服电机的动力线缆，当选用端子型电机时，正确的说法是？",
    "options": {
      "A": "只能选用前出线动力线缆",
      "B": "只能选用后出线动力线缆",
      "C": "前出线和后出线均可",
      "D": "无需使用线缆"
    },
    "answer": [
      "C"
    ],
    "analysis": "按《SV660N 系列伺服选型手册》6.1.3“配套线缆一览表”，MS1H1/MS1H4 端子型电机的动力线缆分“前出线”和“后出线”两组：前出线非抱闸 S6-L-M107、抱闸 S6-L-B107；后出线非抱闸 S6-L-M108、抱闸 S6-L-B108，两组都有 3.0/5.0/10.0 三种标准长度，因此端子型电机的出线方向是可选的，取决于电柜走线空间与电机安装朝向。A 与 B 把“可选”说成“只能”，会误导客户少订一种；D 明显错误，伺服电机的动力与编码器都必须用配套线缆。真正的例外要单独记住：官方特别说明“选用 50W 端子机型，动力线缆只能选用后出线”“100W 机型若安装法兰面为内沉台阶式，只能选用端子机型配后出线动力线缆”——只有这两个小功率特例是单向的，不能外推到整个端子型系列。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "MS1-R",
      "动力线缆",
      "接线安装"
    ],
    "roles": [
      "engineer",
      "sales"
    ],
    "security": "public"
  },
  {
    "id": "SRV-074",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "从伺服电机型号“MS1H4-10B30CB-A33*R”判断，该电机的转动惯量类型是？",
    "options": {
      "A": "低惯量、小容量",
      "B": "低惯量、中容量",
      "C": "中惯量、中容量",
      "D": "中惯量、小容量"
    },
    "answer": [
      "D"
    ],
    "analysis": "官方命名规则第②段“惯量、容量类型”给出四档：H1=低惯量、小容量；H2=低惯量、中容量；H3=中惯量、中容量；H4=中惯量、小容量，所以 MS1H4 就是中惯量、小容量，型号中的 10B（100W）也印证了“小容量”这一半。A 是 MS1H1 的定义（40/60/80 机座常用机型，最高转速 7000rpm）；B 是 MS1H2（100/130 机座，1kW~5kW）；C 是 MS1H3（130/180 机座，1500rpm 转速段）。惯量等级直接决定同一功率下的响应与抗扰动能力：低惯量机型加速快、适合快点点位控制；中惯量机型转子惯量大，带大惯量负载时更容易整定。只按功率选电机而忽略惯量等级，是现场出现“整定困难、定位抖动”的常见根因。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则：惯量、容量类型）",
      "chapter": "产品命名规则及尺寸规格 / 电机命名规则",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1H4",
      "惯量等级",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-075",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "对于 MS1H2 4kW/5kW 电机，其动力线缆的型号前缀通常为？",
    "options": {
      "A": "S6-L-M100",
      "B": "S6-L-M107",
      "C": "S6-L-M011",
      "D": "S6-L-M022"
    },
    "answer": [
      "C"
    ],
    "analysis": "官方配套线缆一览表按“电机档位”分线缆规格：MS1H2 4kW/5kW 电机对应的非抱闸动力线缆是 S6-L-M011（抱闸版为 S6-L-B011），标准长度 3.0/5.0/10.0，线缆外观长度分别为 3000/5000/10000mm，与其它档位不同（其它档位含接头总长为 3100/5100/10100mm）。A 的 M100 用于 MS1H1/MS1H4 甩线型（-S）电机；B 的 M107 用于 MS1H1/MS1H4 端子型电机的前出线；D 的 M022 用于 MS1H3 4.4kW 及以上电机。选线缆不能只看“电流够不够”，官方是按电机功率档位指定线束截面的：MS1H2 4kW/5kW 用 16AWG 电源线规格，MS1H3 2.9kW 以上才升到 12AWG，混用会导致压降与发热，也可能装不进电机侧接插件。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表、6.1.6.1 动力线缆线材）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "动力线缆",
      "MS1H2",
      "选型"
    ],
    "roles": [
      "engineer",
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-077",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "选购 MS1-R 系列伺服电机时，若设备需要带油封且不带抱闸，型号中制动器/油封代码位（即“A33”之后的那一位）应取下列哪个值？",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "answer": [
      "B"
    ],
    "analysis": "官方命名规则把“抱闸、减速机、油封”合并为一位代码，取值定义为：0=不带油封 + 不带抱闸；1=带油封 + 不带抱闸；2=不带油封 + 带抱闸；4=带油封 + 带抱闸，因此“带油封且不带抱闸”对应 1。A 是完全无油封无抱闸的基础机型；C 是带抱闸但不带油封（例如 MS1H4-40B30CB-A332R）；D 是油封与抱闸都带（例如 A334R），成本最高。还要留意官方的标配说明：40 机座电机标配不带油封，60 机座和 80 机座的 H1（低惯量、小容量）机型标配不带油封，其余型号标配带油封——也就是说“要不要油封”在多数机座上本身就是选型项，不能默认。丝杠、齿条等有切削液或粉尘侵入风险的场合必须点明油封，否则现场进液会直接损坏轴承与编码器。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（电机命名规则：抱闸、减速机、油封）",
      "chapter": "产品命名规则及尺寸规格 / 电机命名规则",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "MS1-R",
      "油封抱闸",
      "型号命名"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-078",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "线缆型号“S6-L-M107-0.3-T”中的 T 的含义是什么？",
    "options": {
      "A": "动力线缆",
      "B": "编码器线缆",
      "C": "通讯线缆（网络通讯，EtherCAT）",
      "D": "高柔线缆"
    },
    "answer": [
      "D"
    ],
    "analysis": "官方线材规格表把每类线缆分成三种线束类型：普通型 S6-L-M/B***-X.X、拖链型 S6-L-M/B***-X.X-T、拖链屏蔽耐油型 S6-L-M/B***-X.X-TS，编码器线缆同样为 S6-L-P***-X.X / -T / -TS，因此尾缀 T 表示拖链型，也就是可在拖链中频繁往复弯折使用的高柔线缆（-TS 还额外具备屏蔽与耐油特性）。A 的动力线缆是型号主体中的 M（非抱闸）/B（抱闸）字段；B 的编码器线缆是主体中的 P 字段；C 的通讯线缆是另一组型号 S6-L-T**（如 S6-L-T04-0.3 网络通信线缆 CAT.5E、S6-L-T07-0.3 CAT6A、S6-L-T08-0.3 CAT7），它是以 T 打头的独立系列，不要与尾缀 T 混淆。拖链应用必须选 -T/-TS，用普通线缆上拖链会在短期内断芯。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.6 线缆线材、6.1.3 通信线缆）",
      "chapter": "6.1.6.1 动力线缆线材 / 6.1.6.2 编码器线缆线材；6.1.3 通信线缆",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "线缆",
      "拖链",
      "高柔"
    ],
    "roles": [
      "engineer",
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-080",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "某客户需要 23 位多圈绝对值编码器伺服电机，电压 380V，功率 1.0kW。从 MS1-R 系列中应选择以下哪个型号？",
    "options": {
      "A": "MS1H2-10C30CB-A63*R",
      "B": "MS1H2-10C30CD-A33*R",
      "C": "MS1H2-10C30CB-T33*R",
      "D": "MS1H2-10C30CD-T33*R"
    },
    "answer": [
      "B"
    ],
    "analysis": "把三个条件逐一落到型号位上：功率 1.0kW 写作 10C（C=×100）；电压 380V 对应电压等级 D（B 是 220V）；23 位多圈绝对值对应编码器代码 A3（A6 是 26 位、T3 是 18 位）。四项同时满足的只有 MS1H2-10C30CD-A33*R，该型号在官方选型一览表中真实存在（100 机座、1.0kW、三相 380V，额定电流 3.3A、最大电流 11A，推荐驱动器 T3R5）。A 错在两处：B 代表 220V、A6 是 26 位；C 是 220V + 18 位；D 是 380V 但编码器只有 18 位，配套平台会掉到 SV630 经济型，精度不满足要求。做替换选型时建议按“功率—电压—编码器—机座/转速段—油封抱闸”顺序逐位核对，任何一位不符都要重新核算转矩与配套驱动器。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（1.1 选型一览表、5.2.3.2 MS1H2-10C30CD-A33*R 电机技术数据）",
      "chapter": "1.1 选型一览表（与 MS1-R 系列伺服电机匹配）；电机技术数据",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "MS1H2",
      "编码器",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-081",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "某设备需要选用 23 位多圈绝对值编码器的伺服电机，那么配套的伺服驱动器应选择下列哪一组系列？",
    "options": {
      "A": "SV670 或 SV660",
      "B": "SV670 或 SV630",
      "C": "SV630 或 SV660",
      "D": "SV680 或 SV660"
    },
    "answer": [
      "A"
    ],
    "analysis": "按《MS1-R 系列伺服电机选型手册》1.1.5 的编码器与驱动器配套关系：A6（26 位多圈绝对值）配 SV680；S6（功能安全型 26 位多圈）配 SV680 机型尾码为 S 的功能安全机型；A3（23 位多圈绝对值）配 SV670、SV660；U2（20 位单圈，25 机座专用）配 SV660；T3（18 位多圈绝对值）配 SV630。所以 23 位多圈对应 SV670 或 SV660，选 A。B 的 SV630 与 C 都只覆盖 18 位经济型平台，SV630/SV605 官方标称 18bit，接不了 23 位电机；D 的 SV680 对应的是 26 位编码器（官方标称 26bit 安全型多圈绝对值），用它配 23 位电机属于高配低用。给客户报配套时要把“编码器位数—驱动器系列—容量代码”三件事一次讲清，只报驱动器系列不报位数，很容易出现电机与驱动器编码器接口不匹配、上电即报编码器类故障的情况。",
    "source": {
      "title": "汇川技术《MS1-R 系列伺服电机选型手册》PS00004605（1.1.5 编码器类型与配套驱动器）",
      "chapter": "1.1.5 编码器类型与配套驱动器系列",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "编码器",
      "配套选型",
      "SV660"
    ],
    "roles": [
      "engineer",
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-082",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "一台 MS1H2-50C30CD 电机（5kW，三相 380V）需要采购动力线缆，下列型号中正确的是？",
    "options": {
      "A": "S6-L-M100-3.0",
      "B": "S6-L-M107-3.0",
      "C": "S6-L-M011-3.0",
      "D": "S6-L-M022-3.0"
    },
    "answer": [
      "C"
    ],
    "analysis": "官方配套线缆一览表按电机档位指定动力线缆：MS1H2 4kW/5kW 电机用 S6-L-M011（非抱闸）或 S6-L-B011（抱闸），该档位线缆外观长度为 3000/5000/10000mm，与其它档位的 3100/5100/10100mm（含接头）不同，因此 C 正确。A 的 M100 是 MS1H1/MS1H4 甩线型（-S）电机专用；B 的 M107 是 MS1H1/MS1H4 端子型前出线专用；D 的 M022 是 MS1H3 4.4kW 及以上电机专用。线缆档位与电机功率档绑定的原因是线束截面不同：MS1H2 1kW~5kW 与 MS1H3 0.85kW~1.8kW 共用 16AWG 电源线规格，而 MS1H3 2.9kW 以上升到 12AWG，MS1H1/MS1H4 小功率档为 20AWG。采购只按“多少平方”自行配线，容易出现压降超标、发热或接插件装不上的问题，属于典型的到货返工点。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表、6.1.6.1 动力线缆线材）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆；6.1.6.1 动力线缆线材",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "动力线缆",
      "MS1H2",
      "采购核对"
    ],
    "roles": [
      "purchase",
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-083",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "MS1H4 40 机座端子型电机，前出线无抱闸动力线缆的型号示例是？",
    "options": {
      "A": "S6-L-M108-3.0",
      "B": "S6-L-M107-3.0",
      "C": "S6-L-B107-3.0",
      "D": "S6-L-M100-3.0"
    },
    "answer": [
      "B"
    ],
    "analysis": "在官方配套线缆一览表中，MS1H1/MS1H4 端子型电机的动力线缆按“出线方向 + 是否抱闸”分成四条：前出线非抱闸 S6-L-M107、前出线抱闸 S6-L-B107、后出线非抱闸 S6-L-M108、后出线抱闸 S6-L-B108，因此“前出线 + 无抱闸”就是 S6-L-M107-3.0，选 B。A 的 M108 是后出线，方向相反；C 的 B107 是前出线但带抱闸（B=Brake）；D 的 M100 属于 MS1H1/MS1H4 甩线型（-S）电机，接插件形式不同，插不到端子型电机的航插上。要提醒的是官方对 40 机座有一条特例：选用 50W 端子机型时动力线缆只能选后出线；100W 机型若安装法兰面为内沉台阶式也只能用端子机型配后出线，出货前要按具体功率与法兰形式复核。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆（MS1H1/MS1H4 端子型电机）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "MS1H4",
      "动力线缆",
      "前出线"
    ],
    "roles": [
      "engineer",
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-084",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "编码器线缆型号“S6-L-P124-5.0”适用于以下哪种电机和编码器组合？",
    "options": {
      "A": "甩线型电机，多圈绝对值编码器",
      "B": "端子型电机前出线，多圈绝对值编码器",
      "C": "端子型电机后出线，单圈绝对值编码器",
      "D": "甩线型电机，单圈绝对值编码器"
    },
    "answer": [
      "B"
    ],
    "analysis": "官方编码器线缆一览表按“电机形态 + 编码器类型”分档：MS1H1/MS1H4 端子型电机前出线用 S6-L-P114（单圈绝对值）/ S6-L-P124（多圈绝对值）；端子型后出线用 S6-L-P115（单圈）/ S6-L-P125（多圈）；甩线型（-S）电机用 S6-L-P110（单圈）/ S6-L-P120（多圈）；MS1H2/MS1H3 电机用 S6-L-P111（单圈）/ S6-L-P121（多圈）。因此 P124 对应“端子型电机前出线 + 多圈绝对值编码器”，选 B。A 的甩线型多圈应为 P120；C 把后出线与单圈两种特征各取一半，实际后出线单圈是 P115；D 的甩线型单圈是 P110。编码器线缆插头形式与引脚定义不同，用错无法插入或通信异常，替换电机时必须同步核对线缆型号，不能只看长度是否够用。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表 / 编码器线缆）",
      "chapter": "6.1.3 配套线缆一览表 / 编码器线缆",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "编码器线缆",
      "S6-L-P124",
      "选型"
    ],
    "roles": [
      "engineer",
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-086",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "MS1H4-75B30CB-A33*R 电机（0.75kW，220V）推荐的 SV660 驱动器电流代码为？",
    "options": {
      "A": "T011",
      "B": "S2R8",
      "C": "S1R6",
      "D": "S5R5"
    },
    "answer": [
      "D"
    ],
    "analysis": "按《SV660N 系列伺服选型手册》1.1 选型一览表，MS1H4-75B30CB 系列 0.75kW、单相 220V 机型的推荐驱动器就是 S5R5（220V 电压等级容量代码 S5R5 的连续输出电流为 5.5Arms），这一条与同表 MS1H1-75B30CB-A331R（0.75kW）配 S5R5 完全一致。A 的 T011 是 380V 电压等级代码，与 220V 电机电压等级不符，属于跨电压等级错配；B 的 S2R8 对应 0.4kW（型号中的 40B）；C 的 S1R6 只覆盖 0.05kW~0.2kW 的小功率机型，带 0.75kW 电机在加速与负载突变时会触发过载、过流类报警。给客户配套时要同时核对“驱动器功率”和“连续输出电流”两栏，并按电机额定电流与最大电流校验余量，不能只看功率数字是否对上。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（1.1 选型一览表 / MS1H4 系列；驱动器型号说明）",
      "chapter": "1.1 选型一览表（与 MS1-R 系列伺服电机匹配）；驱动器型号说明",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660",
      "容量代码",
      "配套选型"
    ],
    "roles": [
      "engineer",
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-088",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "MS1H3-75C15CD-A33*R 电机（7.5kW，380V）推荐的 SV680 驱动器电流代码为？",
    "options": {
      "A": "T017",
      "B": "T021",
      "C": "T026",
      "D": "T032"
    },
    "answer": [
      "C"
    ],
    "analysis": "SV680 产品彩页的标准型配置表（三相 380V）逐行给出适配关系：SV680*T017I 适配 4kW/4.4kW（MS1H2-40C30CD、MS1H3-44C15CD）；SV680*T021I 适配 5kW/5.5kW（MS1H2-50C30CD、MS1H3-55C15CD）；SV680*T026I 适配 7.5kW，配套电机正是 MS1H3-75C15CD-A63*R，因此 7.5kW 对应 T026，其连续输出电流为 26A（最大 65A），与该电机额定电流 25A 相匹配。A、B 分别低了两档与一档，长期运行会过载；D 的 T032 并不在 SV680 的 380V 容量代码表中（该系列 380V 为 T3R5/T5R4/T8R4/T012/T017/T021/T026），属于编造型号。给 7.5kW 级设备选型时还要一并确认电柜散热与进线规格：这一档已是 Size E 机型，尺寸与发热量都明显高于小功率机。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（SV680 标准型配置表、380V 等级驱动器电气规格）",
      "chapter": "SV680 标准型配置表 / 三相 380V 机型；三相 380V 等级驱动器电气规格",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "容量代码",
      "7.5kW"
    ],
    "roles": [
      "engineer",
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-094",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "对于 MS1H4 端子型电机，动力线缆可选择前出线或后出线，其中后出线方式对应的线缆型号中常包含“108”。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "结论正确。官方配套线缆一览表把 MS1H1/MS1H4 端子型电机的动力线缆分为前出线（非抱闸 S6-L-M107、抱闸 S6-L-B107）与后出线（非抱闸 S6-L-M108、抱闸 S6-L-B108）两组，所以后出线型号中的“108”这一特征数字是成对出现的。三种常见错误记法：把 108 记成前出线（实际 107 才是前出线）；把 100 记成端子型（M100/B100 是甩线型 -S 电机专用）；以为后出线只是把线转过头、型号不变（实际接插件形式与型号都不同）。另外官方对 40 机座有两条特例必须记住：选用 50W 端子机型时动力线缆只能选后出线；100W 机型若安装法兰面为内沉台阶式，只能选用端子机型并配后出线动力线缆。现场改线方向属于重新订货，选型阶段就要和客户确认电机安装朝向与电柜进出线位置。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表 / 动力线缆）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "MS1H4",
      "动力线缆",
      "后出线"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-101",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "对于 400W 端子型电机，其编码器线缆型号通常为 S6-L-P124 或 S6-L-P____（用于多圈绝对值编码器）。",
    "options": null,
    "answer": [
      "125"
    ],
    "analysis": "官方编码器线缆一览表按“电机形态 + 编码器类型”分档：MS1H1/MS1H4 端子型电机前出线为 S6-L-P114（单圈绝对值）/ S6-L-P124（多圈绝对值），后出线为 S6-L-P115（单圈）/ S6-L-P125（多圈）；甩线型（-S）电机为 S6-L-P110 / S6-L-P120；MS1H2/MS1H3 电机为 S6-L-P111 / S6-L-P121。因此同一台 400W 端子型电机装多圈绝对值编码器时，前出线用 P124、后出线用 P125，空位应填 125。若误填 120，那是甩线型电机的型号，接插件形式不匹配、插不上端子型电机的编码器航插；填 114/115 则是单圈绝对值编码器版本，与多圈编码器的电池线与数据线定义不同。编码器线缆与动力线缆要按同一台电机的形态成套选（出线方向与抱闸状态一致），这是采购核对时最实用的一条经验。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表 / 编码器线缆）",
      "chapter": "6.1.3 配套线缆一览表 / 编码器线缆（MS1H1/MS1H4 端子型电机）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "编码器线缆",
      "S6-L-P125",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-103",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "MS1H1/MS1H4 40/60/80 机座的端子型电机，后出线动力线缆（无抱闸）的型号示例为____（填一个完整型号）。",
    "options": null,
    "answer": [
      "S6-L-M108-3.0"
    ],
    "analysis": "官方配套线缆一览表中，MS1H1/MS1H4 端子型电机的动力线缆按出线方向与抱闸状态分为四条：前出线非抱闸 S6-L-M107、前出线抱闸 S6-L-B107、后出线非抱闸 S6-L-M108、后出线抱闸 S6-L-B108，每条都提供 -3.0/-5.0/-10.0 三种长度（外观长度 3100/5100/10100mm），因此“后出线 + 无抱闸”的完整型号可以写 S6-L-M108-3.0，也可按实际走线长度写 S6-L-M108-5.0 或 S6-L-M108-10.0。判断要点有两层：M/B 区分有无抱闸（B=Brake），107/108 区分前出线与后出线，缺任何一段都可能订错。另需注意官方特例：50W 端子机型动力线缆只能选后出线；100W 机型若安装法兰面为内沉台阶式，只能选用端子机型配后出线动力线缆——这两条在 40 机座小功率机型上要单独确认。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（6.1.3 配套线缆一览表 / 动力线缆）",
      "chapter": "6.1.3 配套线缆一览表 / 动力线缆（MS1H1/MS1H4 端子型电机）",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "动力线缆",
      "后出线",
      "MS1H4"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-104",
    "category": "servo",
    "type": "short",
    "difficulty": 2,
    "stem": "请根据下列伺服电机与伺服驱动器型号，逐项写出每个字段代表的含义：\n（1）伺服电机“MS1H4-40B30CB-A334R”\n（2）伺服驱动器“SV680NS2R8I-FS”",
    "options": null,
    "answer": "参考答案要点：\n（1）MS1H4-40B30CB-A334R（按官方电机命名规则逐段解读）\n① MS1：MS1 系列伺服电机。\n② H4：惯量、容量类型——中惯量、小容量（H1 低惯量小容量 / H2 低惯量中容量 / H3 中惯量中容量 / H4 中惯量小容量）。\n③ 40B：额定功率——40×10=400W（B=×10、C=×100，官方示例 75B=750W）。\n④ 30C：额定转速——30×100=3000rpm。\n⑤ B：电压等级——220V（D 为 380V）。\n⑥ A3：编码器类型——23 位多圈绝对值编码器（对应配套驱动器系列为 SV670、SV660）。\n⑦ 3：轴连接方式——实心轴、带键、带轴中心螺纹孔。\n⑧ 4：抱闸、减速机、油封代码——带油封 + 带抱闸（0 不带油封不带抱闸、1 带油封不带抱闸、2 不带油封带抱闸、4 带油封带抱闸）；提醒官方说明 40 机座标配不带油封，此处的油封属选配结果。\n⑨ R：分系列号——R 系列。\n（2）SV680NS2R8I-FS（按官方驱动器命名规则逐段解读）\n① SV680：SV680 系列伺服驱动器（高性能旗舰型）。\n② N：产品类型——网络型，即 EtherCAT 通信型（同位置 P=脉冲型、F=PROFINET 通信型）。\n③ S：电压等级——220V 等级（T 为 380V 等级）。\n④ 2R8：额定输出电流——2.8A（字母 R 代表小数点；220V 等级另有 1R6=1.6A、5R5=5.5A、7R6=7.6A、012=11.6A，380V 等级为 3R5/5R4/8R4/012/017/021/026）。\n⑤ I：机型配置——标准型（官方同位置取 S 表示功能安全型）。\n⑥ -FS：型号尾部附加的非标功能字段——SV670 产品页的驱动器命名规则把该位写作“非标规格：空缺=标准机、FH=高防护机型、FS=STO 功能安全”，SV660N 等系列手册的非标功能字段同样以 FS 表示 STO 功能安全（同字段另有 GFH 高防护、NDB 无动态制动、NS 升级版等取值）。需要说明的是，SV680 官方五段式命名规则把“功能安全”放在第⑤位机型配置（I=标准型、S=功能安全型，例如 SV680*S5R5S），因此本型号中 I 与 -FS 同时出现时的最终订货口径，应以《SV680N 系列伺服用户手册》“型号与铭牌说明”及汇川技术支持确认为准。\n（3）配套性判断：S2R8 的 220V 等级容量对应 400W 电机（官方配置表中 SV680*S2R8I 适配 MS1H4-40B30CB-A63*R 等 400W 机型），与（1）的 400W 电机在功率上匹配；但两者编码器体系不同——SV680 平台对应 26 位（A6/S6）编码器，23 位（A3）编码器电机的官方配套系列是 SV670、SV660，若直接组配需回到对应系列选型手册与技术支持确认。\n（4）易错点提示：产品页命名规则图与用户手册“型号与铭牌说明”的分段方式不同（手册把惯量并进第②段，后续位序整体前移一位），报位号时必须连完整型号一起给；驱动器第④位是电流不是功率；FS 与机型配置位并存时的最终口径以对应系列用户手册的“型号与铭牌说明”为准。",
    "analysis": "本题考察型号逐位解读能力，是销售报价与工程师替换选型的共同基本功。三个高频错误：一是把功率位/转速位的乘数记混（40B 读成 4kW、30C 读成 300rpm），直接导致转矩核算差一个数量级；二是把驱动器第④位电流代码当成功率（2R8 读成 2.8kW），报价时给出错误容量；三是把 23 位编码器电机与 26 位平台的 SV680 直接组配，忽略官方编码器配套关系（A3 配 SV670/SV660、A6/S6 配 SV680）。另外要养成“报型号必须连完整型号一起报”的习惯：产品页命名规则图与用户手册的位序不同，只报“第 7 位”极易造成双方理解不一致。本例尾部的 -FS 还提示一个实务要点：SV680 官方五段式命名把功能安全放在机型配置位（I 标准型 / S 功能安全型），而 -FS 是非标字段写法，两者并存时不要自行推断配置，应按手册与技术支持口径确认后再下单。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（伺服驱动器命名规则、电机命名规则、标准型配置表）",
      "chapter": "产品命名规则及尺寸规格 / 伺服驱动器命名规则；电机命名规则；SV680 标准型配置表",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "型号命名",
      "SV680",
      "MS1H4",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-105",
    "category": "servo",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某项目需要为设备 B 选型：电机电压等级 220V、功率 750W、额定转速 3000rpm，要求 23 位编码器，并且配套伺服需要 STO 功能。设备为普通点位控制设备，负载惯量不大，电柜安装空间有限，上位机方案（脉冲或总线）尚未最终确定。请给出产品类型建议（变频器还是伺服）、推荐的电机与驱动器完整型号，并说明依据与需要向客户确认的事项。",
    "options": null,
    "answer": "参考答案要点：\n1）产品类型：必须选伺服，不能选变频器。要求 23 位编码器意味着需要高分辨率的位置/速度闭环反馈，变频器（如 MD200/MD500 系列）不具备该编码器接口与配套伺服电机体系；而 STO（安全转矩关断）属于驱动器的功能安全功能，变频器平台不做此配置。结论：伺服驱动器 + MS1-R 系列伺服电机。\n2）电机选型：把条件落到型号位上——750W 写作 75B（B=×10）；额定转速 3000rpm 写作 30C；电压等级 220V 写作 B（D 为 380V）；23 位多圈绝对值编码器写作 A3。惯量不大、要求快速响应的点位控制可选低惯量小容量的 MS1H1，中惯量小容量选 MS1H4，两者都有 0.75kW/单相 220V/80 机座的官方机型（MS1H1-75B30CB-A331R/A334R、MS1H4-75B30CB-A331R/A334R）。推荐完整型号示例：MS1H4-75B30CB-A331R（带油封、不带抱闸）；若需要断电保持负载则选 MS1H4-75B30CB-A334R（带油封、带抱闸）。\n3）驱动器选型：按官方选型一览表，0.75kW 单相 220V 电机的推荐容量代码是 S5R5（220V 等级 5R5=连续输出电流 5.5Arms）。23 位（A3）编码器电机的官方配套驱动器系列为 SV670 与 SV660，因此驱动器落在 SV660/SV670 平台；上位机未定时，脉冲方案写 SV660PS5R5I，EtherCAT 方案写 SV660NS5R5I（SV670 对应 SV670PS5R5I / SV670NS5R5I，容量代码体系相同）。\n4）STO 功能：STO 由驱动器侧实现，需按功能安全机型订货。依据《SV660N 系列伺服选型手册》部件说明，CN6 为 STO 安全功能端子并注明“适用功能安全机型 -FS”，因此型号应带非标功能字段 -FS，例如 SV660PS5R5I-FS 或 SV660NS5R5I-FS；SV670 的非标规格字段同样以 FS 表示 STO 功能安全机型。若需要 SIL 等级更高的安全功能（如 SS1/SLS/SBC 等扩展功能）或安全总线（FSoE/PROFIsafe），应改选 SV680 平台的功能安全机型（机型配置位为 S，如 SV680*S5R5S）并配功能安全卡。同一平台上，SV630 只在 -FS 非标机型支持 STO，SV605 不支持 STO，预算导向方案要特别点明。\n5）需要向客户确认的事项：现场是单相 220V 还是三相 220V 供电；是否需要抱闸与油封（影响后缀 1/2/4）；上位机控制方式（脉冲 / EtherCAT / PROFINET）与线缆长度；STO 的安全回路方案与整机安全等级要求（安全继电器/安全 PLC、双通道接线与 EDM 反馈），整机 SIL/PL 等级须由整机安全评估方确认，不能仅凭驱动器带 STO 就承诺等级；电柜空间与散热（SV660 Size B/C 的安装间距与进出风要求）；以及是否需要一键调谐（STune/ETune）等调试辅助功能。\n6）落地动作：按《MS1-R 系列伺服电机选型手册》与对应系列选型手册复核电机—驱动器配套、容量代码与电流余量，最终型号交原厂或代理商确认后下单。",
    "analysis": "本题考察“从需求到完整型号”的选型闭环能力。常见失误有四个：一是看到 750W 就只报功率，漏掉 220V 电压等级、3000rpm 转速段与 23 位编码器三位条件，导致选出的型号与客户设备不符；二是把 STO 当成电机功能，实际上 STO 在驱动器侧实现，且需要按功能安全机型（-FS 或 SV680 功能安全机型）订货，普通标准机型不带 CN6 安全端子；三是把 23 位编码器电机配到 SV680（26 位平台），忽略官方编码器—驱动器配套关系；四是只承诺“有 STO 就能过安全评估”，而没有提示整机安全等级需由评估方确认。设备 B 还隐含了“电柜空间有限”的条件，选型时应顺带核对驱动器 Size 与安装间距，而不是只看功率。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（1.1 选型一览表、3.1.2 部件说明 CN6 STO 端子、6.1.3 配套线缆一览表）；《SV680 系列旗舰型伺服驱动器》彩页（命名规则与功能安全机型配置表）",
      "chapter": "1.1 选型一览表（与 MS1-R 系列伺服电机匹配）；3.1.2 部件说明；SV680 功能安全机型配置表",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "STO",
      "MS1H4",
      "SV660",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-107",
    "category": "servo",
    "type": "short",
    "difficulty": 2,
    "stem": "请按编码器位数与类型，写出 MS1-R 系列伺服电机对应的编码器代码、可配套的伺服驱动器系列，并各举一个典型型号示例；同时说明选型时需要注意的尺寸与容量约束。",
    "options": null,
    "answer": "参考答案要点：\n一、《MS1-R 系列伺服电机选型手册》第 1 章按编码器类型给出四张配套表与一张总表：1.1.1 26 位编码器电机匹配 SV680 系列；1.1.2 23 位编码器电机匹配 SV670 系列；1.1.3 20/23 位编码器电机匹配 SV660 系列；1.1.4 18 位编码器电机匹配 SV630 系列；1.1.5 伺服驱动器与伺服电机编码器类型配套关系。逐档对照如下：\n1）A6：26 位多圈绝对值编码器 → 配 SV680 系列。示例：MS1H1-40B30CB-A63*R（400W、220V、26 位多圈）+ SV680*S2R8I。\n2）S6：功能安全型 26 位多圈绝对值编码器 → 配 SV680 功能安全机型（机型配置位为 S）。示例：MS1H4-40B30CB-S63*R + SV680*S2R8S。\n3）A3：23 位多圈绝对值编码器 → 配 SV670、SV660 系列。示例：MS1H2-10C30CD-A33*R（1.0kW、380V）+ SV660NT3R5I 或 SV670PT3R5I（两个系列的 380V 等级 1kW 机型容量代码均为 T3R5，连续输出电流 3.5A）。\n4）U2：20 位单圈绝对值编码器（25 机座电机专用）→ 配 SV660 系列。示例：MS1H1-03B30CB-U210R-S（25 机座、0.03kW）+ SV660*S1R6I。\n5）T3：18 位多圈绝对值编码器 → 配 SV630 系列。示例：MS1H2-10C30CD-T33*R（1.0kW、380V、18 位多圈）+ SV630NT3R5I。\n二、按驱动器平台的编码器标称（同档才有比较意义）\nSV605 与 SV630 官方标称 18bit / 2kHz 速度环带宽（经济型）；SV660 官方标称 23bit / 3kHz；SV670 官方标称 23bit / 3.2kHz；SV680 官方标称 26bit 安全型多圈绝对值 / 3.5kHz（旗舰型）；SVD60 低压伺服官方标称 23 位。\n三、选型需要注意的约束\n1）容量代码不是功率：驱动器容量代码对应额定输出电流（S/T 前缀区分 220V/380V 等级，字母 R 代表小数点），必须回到“该系列 + 该电压等级”的规格表逐行核对驱动器功率与连续输出电流两栏。\n2）尺寸差异：电机匹配 26 位与 23 位编码器时外形尺寸一样；匹配 18 位编码器时编码器航插高度会上升 1mm，机械空间紧张的场合要提前确认。\n3）转速能力随平台变化：同一台电机匹配不同系列驱动器时，最高转速与最大转矩输出会有差异。例如 MS1H3 系列在 23 位（配 SV670/SV660）配套表中最高转速标注为 4500rpm，而在 18 位（配 SV630）配套表中标注为 3000rpm——为省成本降档到 18 位平台，会同时牺牲高速段能力，必须按对应驱动器的选型手册核对转矩—转速特性。\n4）容量约束：官方说明驱动器机型 S018、S022、S027 仅适配 SV670 与 SV680 系列，选用这些容量代码时不能配 SV660/SV630。\n5）免电池方案：若客户要求取消编码器电池（真绝对值/免电池编码器），可转向 MS1-R 系列免电池编码器伺服电机，官方说明其功率范围在 7.5kW 以内、涵盖 26bit、23bit 与 18bit，且电机尺寸不变。\n6）误导风险：位数越高精度越高，但配套平台与成本同步上升；18 位平台（SV605/SV630）与 23 位平台（SV660/SV670）不能用“带宽更大”来区分（SV605 与 SV630 官方都是 2kHz + 18bit），只能按功率段、编码器位数与控制方式分档。",
    "analysis": "本题考察编码器体系这一“选型分水岭”知识：位数与类型不仅决定价格，更直接决定能配哪一档驱动器。最容易出错的是三点：一是把 23 位与 26 位的配套系列记混（A3 配 SV670/SV660，A6/S6 配 SV680），二是忽略 18 位编码器航插高度上升 1mm 与 S018/S022/S027 仅适配 SV670/SV680 这两条官方约束，三是拿速度环带宽去区分 SV605 与 SV630（两款官方都是 2kHz + 18bit）。回答时若能把“位数—类型—驱动器系列—型号示例—容量或尺寸约束”串成一条链，就说明真正理解了配套关系，而不是背参数表。",
    "source": {
      "title": "汇川技术《MS1-R 系列伺服电机选型手册》PS00004605（1.1.5 编码器类型与配套驱动器）；SV605/SV630/SV660/SV670/SV680 产品页",
      "chapter": "1.1.5 编码器类型与配套驱动器系列",
      "url": "https://www.inovance.com/portal/product/details?productId=415"
    },
    "tags": [
      "编码器",
      "配套选型",
      "MS1-R"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-108",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV670-FS-INT 的安全认证，哪项与当前资料相符？",
    "options": {
      "A": "SIL1 的 SS2 标准功能",
      "B": "仅软件急停，无安全认证",
      "C": "STO SIL3，符合 IEC 61800-5-2",
      "D": "只支持机械抱闸"
    },
    "answer": [
      "C"
    ],
    "analysis": "认证描述不等于现场风险评估；安全回路仍需按安全手册和整机标准验证。",
    "source": {
      "title": "SV670 Series 产品页",
      "chapter": "知识点 S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670-FS-INT",
      "安全认证"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-110",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV680 的电流环算法时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "100 Mbit/s 电流环",
      "B": "625 kHz 电流环控制算法",
      "C": "625 kHz 速度环",
      "D": "3.5 kHz 电流环"
    },
    "answer": [
      "B"
    ],
    "analysis": "环路名称是技术题的关键限定词，采购题也应避免把指标写错列。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电流环算法"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-111",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 SV680 的反馈兼容，选出可写入核对表的说法。",
    "options": {
      "A": "只支持旋变",
      "B": "只支持 18 位增量编码器",
      "C": "23/26 位串行绝对值、EnDat 2.2、BiSS-C、SSI、ABZ",
      "D": "只支持 23 位多圈且不支持 ABZ"
    },
    "answer": [
      "C"
    ],
    "analysis": "“支持多编码器”仍不等于任意编码器任意组合，完整电机与驱动器表才是订货依据。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈兼容"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-112",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV680 的电池边界，哪项与当前资料相符？",
    "options": {
      "A": "A6/S6 为免电池，V6 必须电池",
      "B": "V6 为免电池多圈；A6/S6 多圈需电池保持",
      "C": "三者都是增量编码器",
      "D": "编码器电池与多圈位置无关"
    },
    "answer": [
      "B"
    ],
    "analysis": "电池、单圈/多圈、反馈位数和安全分支要同时写全，不能只写“绝对值”。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电池边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-114",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 IS810F 的功率与协议时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "2.2～75 kW，PROFINET",
      "B": "0.85～120 kW，EtherCAT",
      "C": "0.05～7.5 kW，Modbus-RTU",
      "D": "7.5～200 kW，FSoE"
    },
    "answer": [
      "A"
    ],
    "analysis": "IS620F/810F 历史指南范围不能替代当前 B04 用户手册。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S45",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "功率与协议"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-116",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 IS810 的环境边界，哪项与当前资料相符？",
    "options": {
      "A": "恒温 25 ℃且不需要机柜",
      "B": "0～55 ℃，45 ℃以上每升高 1 ℃降额 2%",
      "C": "-20～60 ℃，50 ℃以上每升高 1 ℃降额 2.5%",
      "D": "0～40 ℃，40 ℃以上每升高 1 ℃降额 1.5%，最高 50 ℃"
    },
    "answer": [
      "D"
    ],
    "analysis": "IS810 还要求机柜内安装、IP20 和海拔条件，环境题不能只看温度。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S47",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810",
      "环境边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-118",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV680 的电机类型时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "只支持旋转电机",
      "B": "只支持直线电机",
      "C": "同一驱动模型可控制旋转、DDL 与 DDR 电机",
      "D": "必须为每种电机更换驱动硬件"
    },
    "answer": [
      "C"
    ],
    "analysis": "电机类型兼容不等于无需重新做反馈、相位和参数确认。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S53",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电机类型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-119",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 SV680 的多圈编码器，选出可写入核对表的说法。",
    "options": {
      "A": "位数与分辨率无关",
      "B": "26 位一圈超过 67.1 百万脉冲",
      "C": "23 位编码器没有绝对位置",
      "D": "26 位一圈只有 2600 脉冲"
    },
    "answer": [
      "B"
    ],
    "analysis": "位数是反馈分辨率描述，不应替代完整编码器型号和电池条件。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S57",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "多圈编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-120",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV630 的功率范围，哪项与当前资料相符？",
    "options": {
      "A": "0.05～7.5 kW",
      "B": "0.4～22 kW",
      "C": "7.5～120 kW",
      "D": "15～90 kW"
    },
    "answer": [
      "A"
    ],
    "analysis": "功率范围只能按当前分支手册与完整型号确认，不能用相邻系列范围替代。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-122",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV630 的编码器时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "T3 为 23 位编码器",
      "B": "T3 为 26 位免电池编码器",
      "C": "T3 为 18 位编码器",
      "D": "T3 只代表抱闸"
    },
    "answer": [
      "C"
    ],
    "analysis": "不能把 SV630 的 T3 与其他系列的 23 位或 26 位编码器代码混用。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-123",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 SV630P 的通信接口，选出可写入核对表的说法。",
    "options": {
      "A": "CN3/CN4 为双 EtherCAT 口",
      "B": "CN3/CN4 只在安全机型存在",
      "C": "CN3 为 STO、CN4 为编码器",
      "D": "CN3/CN4 为 RS232/RS485 并联"
    },
    "answer": [
      "D"
    ],
    "analysis": "接口结论必须带分支和版本，不能把同一位置在不同系列的用途直接横向套用。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630P",
      "通信接口"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-126",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV660F 的功率范围时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "7.5～75 kW",
      "B": "0.2～18.5 kW",
      "C": "15～200 kW",
      "D": "0.05～7.5 kW"
    },
    "answer": [
      "D"
    ],
    "analysis": "旧版本或 IS810F 范围不能覆盖 SV660F 当前小功率范围。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-129",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "请从下列说法中选出 SV660F CN6 在安全端子方面的正确结论。",
    "options": {
      "A": "仅 -FS 机型适用 STO",
      "B": "CN6 是 PROFINET 端口",
      "C": "所有普通机型都默认有 STO",
      "D": "只有 -INT 机型适用 STO"
    },
    "answer": [
      "A"
    ],
    "analysis": "安全端子是后缀和硬件条件，不应把系列宣传语当作全系列接线结论。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F CN6",
      "安全端子"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-130",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV660F CN5 的调试接口时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "RS232",
      "B": "EtherCAT",
      "C": "PROFINET IRT",
      "D": "STO 双通道"
    },
    "answer": [
      "A"
    ],
    "analysis": "CN3/CN4、CN5、CN6 的用途必须按当前硬件手册分开核对。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F CN5",
      "调试接口"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-131",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 SV660F 的环境边界，选出可写入核对表的说法。",
    "options": {
      "A": "-20～60 ℃，50 ℃以上每升高 1 ℃降额 2.5%",
      "B": "恒温 25 ℃，无需考虑降额",
      "C": "0～40 ℃，40 ℃以上每升高 1 ℃降额 1.5%",
      "D": "0～55 ℃，45 ℃以上每升高 1 ℃降额 2%"
    },
    "answer": [
      "D"
    ],
    "analysis": "环境数字是具体分支的选型条件，不能套用 SV680 或 IS810 的温度规则。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "环境边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-132",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV660N 的通信分支，哪项与当前资料相符？",
    "options": {
      "A": "PROFINET",
      "B": "Modbus-RTU",
      "C": "仅脉冲",
      "D": "EtherCAT"
    },
    "answer": [
      "D"
    ],
    "analysis": "N 分支要同步核对 EtherCAT 端口、ESI 文件和主站对象字典。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-134",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV660N S5R5 的输入相制时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "0.75 kW 单相 220 V 只能接 L1/L2",
      "B": "0.75 kW 必须接 L1/L2/L3",
      "C": "只能接直流母线",
      "D": "只能接三相 380 V"
    },
    "answer": [
      "A"
    ],
    "analysis": "相制和端子接法是现场技术边界，也应在采购 BOM 中写清。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "输入相制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-135",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 SV660N S7R6/S012 的输入相制，选出可写入核对表的说法。",
    "options": {
      "A": "只能单相且必须降额",
      "B": "只能直流输入",
      "C": "只能三相且必须降额",
      "D": "支持单相或三相且无需降额"
    },
    "answer": [
      "D"
    ],
    "analysis": "不要把 S5R5 的单相端子边界套到 S7R6/S012。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S7R6/S012",
      "输入相制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-138",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV660P 的制动接线时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "其他机座外接制动电阻前须拆 P+-D 短接",
      "B": "只有 Size A 要拆短接",
      "C": "制动电阻与 P+-D 无关",
      "D": "所有机座都保留 P+-D 短接"
    },
    "answer": [
      "A"
    ],
    "analysis": "制动电阻是高能量回路，接线动作必须按对应硬件手册执行。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "制动接线"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-139",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 SV660F/N/P 的版本参数，选出可写入核对表的说法。",
    "options": {
      "A": "F=4303.3，N=0905.0，P=0607.4（H01-00）",
      "B": "F=0607.4，N=4303.3，P=0905.0（H02）",
      "C": "三个分支都是 0000.0",
      "D": "只有 P 分支有版本参数"
    },
    "answer": [
      "A"
    ],
    "analysis": "参数号必须保留组号；不能把不同分支的版本值混为一个无组号参数。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "版本参数"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-141",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "请从下列说法中选出 SV670-FS-INT 在安全认证方面的正确结论。",
    "options": {
      "A": "STO SIL3，符合 IEC 61800-5-2",
      "B": "SIL1 的 SS2 标准功能",
      "C": "仅软件急停，无安全认证",
      "D": "只支持机械抱闸"
    },
    "answer": [
      "A"
    ],
    "analysis": "认证描述不等于现场风险评估；安全回路仍需按安全手册和整机标准验证。",
    "source": {
      "title": "SV670 Series 产品页",
      "chapter": "知识点 S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670-FS-INT",
      "安全认证"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-142",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 SV680 的速度环性能时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "500 μs 速度环周期",
      "B": "3.2 kHz 速度环带宽",
      "C": "625 kHz 速度环带宽",
      "D": "3.5 kHz 速度环带宽"
    },
    "answer": [
      "D"
    ],
    "analysis": "SV670 的 3.2 kHz 与 SV680 的 3.5 kHz 不能混写。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "速度环性能"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-143",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 SV680 的电流环算法，选出可写入核对表的说法。",
    "options": {
      "A": "625 kHz 电流环控制算法",
      "B": "625 kHz 速度环",
      "C": "3.5 kHz 电流环",
      "D": "100 Mbit/s 电流环"
    },
    "answer": [
      "A"
    ],
    "analysis": "环路名称是技术题的关键限定词，采购题也应避免把指标写错列。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电流环算法"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-144",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV680 EtherCAT 的通信对象，哪项技术处理符合手册边界？",
    "options": {
      "A": "CoE、PDO、SDO、DC 按主站与驱动对象字典核对",
      "B": "PDO 可任意写",
      "C": "DC 等于直流电源",
      "D": "只需模拟量速度"
    },
    "answer": [
      "A"
    ],
    "analysis": "周期同步和对象映射分别验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "通信对象"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-147",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在伺服回原的现场联调中，哪项机械基准结论可直接用于检查表？",
    "options": {
      "A": "无需原点开关",
      "B": "有弹性的机械极限不宜作高精度原点",
      "C": "任意模式数字都相同",
      "D": "橡胶防撞块最适合作原点"
    },
    "answer": [
      "B"
    ],
    "analysis": "现场机械设计与模式表一致。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服回原",
      "机械基准"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-148",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV680 的反馈配对，哪项技术处理符合手册边界？",
    "options": {
      "A": "支持列表即任意兼容",
      "B": "ABZ 可代替任意安全编码器",
      "C": "只看电机功率",
      "D": "编码器协议、位数、电池和安全电机按同机座配对表核对"
    },
    "answer": [
      "D"
    ],
    "analysis": "尤其全闭环和安全功能要闭环验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-152",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 IS810F PN 的启动控制字，哪项技术处理符合手册边界？",
    "options": {
      "A": "只改 IP 即启机",
      "B": "报文 1 的 16#47E→16#47F 顺序按指南验证",
      "C": "16#4F7E→16#4F7F",
      "D": "无需控制字"
    },
    "answer": [
      "B"
    ],
    "analysis": "报文类型与主站工艺对象必须配套。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F PN",
      "启动控制字"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-154",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 PROFINET IRT 的现场配置疑问，哪项答复有依据？",
    "options": {
      "A": "按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT",
      "B": "S7-1200 原生支持 IRT",
      "C": "周期任意设 10 μs",
      "D": "拓扑与 IRT 无关"
    },
    "answer": [
      "A"
    ],
    "analysis": "同步需求先核对主站硬件。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PROFINET IRT",
      "现场配置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-155",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 IS650N-PLUS 的现场联调中，哪项主轴调试结论可直接用于检查表？",
    "options": {
      "A": "核对定向、刚性攻丝、反馈与全闭环配套",
      "B": "反馈无需确认",
      "C": "只按通用风机 V/f 调试",
      "D": "只改一个速度参数"
    },
    "answer": [
      "A"
    ],
    "analysis": "主轴工况还需机械/电机和 PG 证据。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "主轴调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-156",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 IS650N-PLUS 的环境降额，哪项技术处理符合手册边界？",
    "options": {
      "A": "功率档不影响温度边界",
      "B": "可凝露且无需机柜",
      "C": "全功率超过 50 ℃无降额",
      "D": "7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%"
    },
    "answer": [
      "D"
    ],
    "analysis": "温度规则按机座功率分组。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "环境降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-157",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 IS810N-INT 的海拔降额时，应采用哪项？",
    "options": {
      "A": "1000 m 以上每升高 100 m 降额 1%，最高 3000 m",
      "B": "海拔不限",
      "C": "海拔可用通讯卡补偿",
      "D": "只在海拔 4000 m 才降额"
    },
    "answer": [
      "A"
    ],
    "analysis": "机柜热设计与负载均需复核。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-159",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 ISMG 的现场联调中，哪项电机配对结论可直接用于检查表？",
    "options": {
      "A": "95C 直接等于 9.5 kW",
      "B": "95C 回表确认 7.9 kW，并按 IS810N/IS650P 配对表选驱动",
      "C": "任意驱动可配",
      "D": "只看 S4 字符串"
    },
    "answer": [
      "B"
    ],
    "analysis": "型号解码后仍需查驱动-电机搭配。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "ISMG",
      "电机配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-160",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于客户故障答复的证据链，哪项技术处理符合手册边界？",
    "options": {
      "A": "只根据故障截图猜根因",
      "B": "清除所有记录再检查",
      "C": "保留完整型号、版本、参数、故障时间、波形、负载和接线证据",
      "D": "不询问电机型号"
    },
    "answer": [
      "C"
    ],
    "analysis": "故障码必须对应同版本手册。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "客户故障答复",
      "证据链"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-161",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对垂直轴客户问题的停机安全时，应采用哪项？",
    "options": {
      "A": "只调高速度环增益",
      "B": "STO 自动保持负载",
      "C": "抱闸直接作动态制动",
      "D": "先评估重力负载与抱闸保持，再验证驱动减速和 STO 时序"
    },
    "answer": [
      "D"
    ],
    "analysis": "机械保持、运动控制和功能安全职责分开。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "垂直轴客户问题",
      "停机安全"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-162",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出伺服参数迁移的版本核对疑问，哪项答复有依据？",
    "options": {
      "A": "旧项目参数整包无条件复制",
      "B": "先核型号分支、电机/反馈、手册版本与功能差异，再分步验证",
      "C": "只改 IP 即完成",
      "D": "不用留原始参数"
    },
    "answer": [
      "B"
    ],
    "analysis": "不同分支的参数号和功能含义可能变化。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服参数迁移",
      "版本核对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-163",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 SV660F/N/P 的现场联调中，哪项手册版本结论可直接用于检查表？",
    "options": {
      "A": "只看系列名",
      "B": "三个分支共用一个参数值",
      "C": "只看外壳颜色",
      "D": "F B01、N/P D01 分支和 H01-00 值分别核对"
    },
    "answer": [
      "D"
    ],
    "analysis": "参数迁移前先锁分支和版本。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "手册版本"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-164",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV660F/N 的STO 端子，哪项技术处理符合手册边界？",
    "options": {
      "A": "普通分支全有 STO",
      "B": "CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线",
      "C": "STO 可用 DI 软件位代替",
      "D": "CN6 必定是总线口"
    },
    "answer": [
      "B"
    ],
    "analysis": "安全端子接线须按硬件后缀确认。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 T-S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N",
      "STO 端子"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-166",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 SV660P 的外接制动疑问，哪项答复有依据？",
    "options": {
      "A": "其他机座外接制动电阻前拆 P+-D 短接",
      "B": "带电拆短接",
      "C": "接电阻仍保留短接",
      "D": "把电阻接 CN2"
    },
    "answer": [
      "A"
    ],
    "analysis": "断电后按机座手册处理高能量端子。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "外接制动"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-167",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 SV670NS 的现场联调中，哪项安全功能集结论可直接用于检查表？",
    "options": {
      "A": "安全功能与编码器无关",
      "B": "STO 可实现 SOS",
      "C": "六功能只属于对应 NS 安全分支且受编码器约束",
      "D": "普通 SV670 一律六功能"
    },
    "answer": [
      "C"
    ],
    "analysis": "其他编码器可仅 STO/SBC/SS1-t。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS",
      "安全功能集"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-168",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV670NS-INT 的FSoE，哪项技术处理符合手册边界？",
    "options": {
      "A": "普通 EtherCAT 扫描即完成安全验收",
      "B": "主站、安全配置和设备版本三方核对",
      "C": "只需模拟量触发",
      "D": "FSoE 与编码器无关"
    },
    "answer": [
      "B"
    ],
    "analysis": "功能安全需要独立验证。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS-INT",
      "FSoE"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-169",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 SV680N 的安全电机时，应采用哪项？",
    "options": {
      "A": "SS1-r/SS2/SOS/SLS 等扩展功能按手册配安全电机",
      "B": "普通电机无条件实现",
      "C": "抱闸等于安全电机",
      "D": "只看 IP 等级"
    },
    "answer": [
      "A"
    ],
    "analysis": "安全系统要核对电机反馈和认证条件。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680N",
      "安全电机"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-171",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 SV680 安全布线的现场联调中，哪项线缆长度结论可直接用于检查表？",
    "options": {
      "A": "无需长度限制",
      "B": "安全 DI/DO 与安全开关最大 30 m",
      "C": "可直接 300 m 不复核",
      "D": "只看电机线长度"
    },
    "answer": [
      "B"
    ],
    "analysis": "安全线缆和短路防护按安全手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 安全布线",
      "线缆长度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-172",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MS1 抱闸的垂直轴，哪项技术处理符合手册边界？",
    "options": {
      "A": "抱闸可减速制动",
      "B": "PLC 任意高速开关即可",
      "C": "停机后不需保持评估",
      "D": "抱闸只保持停止负载，不能动态制动"
    },
    "answer": [
      "D"
    ],
    "analysis": "高风险轴要验证制动时序。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "垂直轴"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-176",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MS1-R 的拖链弯曲，哪项技术处理符合手册边界？",
    "options": {
      "A": "固定线 5 倍外径、拖链线 10 倍外径",
      "B": "拖链仅 5 倍",
      "C": "只看动力功率",
      "D": "固定和拖链均 1 倍"
    },
    "answer": [
      "A"
    ],
    "analysis": "现场移动工况应使用相应线材。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "拖链弯曲"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-178",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 SV680 EtherCAT 的物理拓扑疑问，哪项答复有依据？",
    "options": {
      "A": "100Base-TX 全双工 100 Mbit/s，节点间小于 100 m",
      "B": "无线无距离限制",
      "C": "RS485 半双工 1200 m",
      "D": "只看主站 IP"
    },
    "answer": [
      "A"
    ],
    "analysis": "布线与拓扑要按通信手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "物理拓扑"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-179",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 SV680 EtherCAT 的现场联调中，哪项通信对象结论可直接用于检查表？",
    "options": {
      "A": "DC 等于直流电源",
      "B": "只需模拟量速度",
      "C": "CoE、PDO、SDO、DC 按主站与驱动对象字典核对",
      "D": "PDO 可任意写"
    },
    "answer": [
      "C"
    ],
    "analysis": "周期同步和对象映射分别验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "通信对象"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-180",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 EtherCAT PDO 的映射修改，哪项技术处理符合手册边界？",
    "options": {
      "A": "有效状态可任意写",
      "B": "先使 PDO 无效；写 0 清除映射子索引",
      "C": "写 0 恢复出厂",
      "D": "只改从站 IP"
    },
    "answer": [
      "B"
    ],
    "analysis": "状态机和映射操作按手册顺序。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "EtherCAT PDO",
      "映射修改"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-183",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 SV680 的现场联调中，哪项反馈配对结论可直接用于检查表？",
    "options": {
      "A": "编码器协议、位数、电池和安全电机按同机座配对表核对",
      "B": "只看电机功率",
      "C": "ABZ 可代替任意安全编码器",
      "D": "支持列表即任意兼容"
    },
    "answer": [
      "A"
    ],
    "analysis": "尤其全闭环和安全功能要闭环验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-184",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV680 V6 的多圈保持，哪项技术处理符合手册边界？",
    "options": {
      "A": "编码器位数等于抱闸状态",
      "B": "V6 免电池；A6/S6 多圈按电池保持条件验收",
      "C": "更换电池不用做位置确认",
      "D": "所有反馈免电池"
    },
    "answer": [
      "B"
    ],
    "analysis": "更换/断电后多圈位置应验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 V6",
      "多圈保持"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-188",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 PN 报文的位置控制，哪项技术处理符合手册边界？",
    "options": {
      "A": "111 只是速度模式",
      "B": "所有报文等价",
      "C": "102 永远等同基础 EPOS",
      "D": "3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强"
    },
    "answer": [
      "D"
    ],
    "analysis": "不能把不同报文的控制字和功能块混用。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PN 报文",
      "位置控制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-190",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 IS650N-PLUS 的主轴调试疑问，哪项答复有依据？",
    "options": {
      "A": "只改一个速度参数",
      "B": "只按通用风机 V/f 调试",
      "C": "核对定向、刚性攻丝、反馈与全闭环配套",
      "D": "反馈无需确认"
    },
    "answer": [
      "C"
    ],
    "analysis": "主轴工况还需机械/电机和 PG 证据。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "主轴调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-191",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 IS650N-PLUS 的现场联调中，哪项环境降额结论可直接用于检查表？",
    "options": {
      "A": "全功率超过 50 ℃无降额",
      "B": "可凝露且无需机柜",
      "C": "7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%",
      "D": "功率档不影响温度边界"
    },
    "answer": [
      "C"
    ],
    "analysis": "温度规则按机座功率分组。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "环境降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-192",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 IS810N-INT 的海拔降额，哪项技术处理符合手册边界？",
    "options": {
      "A": "1000 m 以上每升高 100 m 降额 1%，最高 3000 m",
      "B": "海拔不限",
      "C": "海拔可用通讯卡补偿",
      "D": "只在海拔 4000 m 才降额"
    },
    "answer": [
      "A"
    ],
    "analysis": "机柜热设计与负载均需复核。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-195",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在客户故障答复的现场联调中，哪项证据链结论可直接用于检查表？",
    "options": {
      "A": "只根据故障截图猜根因",
      "B": "清除所有记录再检查",
      "C": "不询问电机型号",
      "D": "保留完整型号、版本、参数、故障时间、波形、负载和接线证据"
    },
    "answer": [
      "D"
    ],
    "analysis": "故障码必须对应同版本手册。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "客户故障答复",
      "证据链"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-196",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于垂直轴客户问题的停机安全，哪项技术处理符合手册边界？",
    "options": {
      "A": "抱闸直接作动态制动",
      "B": "先评估重力负载与抱闸保持，再验证驱动减速和 STO 时序",
      "C": "STO 自动保持负载",
      "D": "只调高速度环增益"
    },
    "answer": [
      "B"
    ],
    "analysis": "机械保持、运动控制和功能安全职责分开。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "垂直轴客户问题",
      "停机安全"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-197",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对伺服参数迁移的版本核对时，应采用哪项？",
    "options": {
      "A": "旧项目参数整包无条件复制",
      "B": "不用留原始参数",
      "C": "先核型号分支、电机/反馈、手册版本与功能差异，再分步验证",
      "D": "只改 IP 即完成"
    },
    "answer": [
      "C"
    ],
    "analysis": "不同分支的参数号和功能含义可能变化。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服参数迁移",
      "版本核对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-198",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 SV660F/N/P 的手册版本疑问，哪项答复有依据？",
    "options": {
      "A": "只看系列名",
      "B": "只看外壳颜色",
      "C": "三个分支共用一个参数值",
      "D": "F B01、N/P D01 分支和 H01-00 值分别核对"
    },
    "answer": [
      "D"
    ],
    "analysis": "参数迁移前先锁分支和版本。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "手册版本"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-200",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV660N S5R5 的单相接线，哪项技术处理符合手册边界？",
    "options": {
      "A": "0.75 kW 单相 220 V 仅接 L1/L2",
      "B": "无需 PE",
      "C": "必须接 L1/L2/L3",
      "D": "可直接接 DC 24 V"
    },
    "answer": [
      "A"
    ],
    "analysis": "相制与端子定义要按同机座图。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "单相接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-202",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 SV670NS 的安全功能集疑问，哪项答复有依据？",
    "options": {
      "A": "安全功能与编码器无关",
      "B": "六功能只属于对应 NS 安全分支且受编码器约束",
      "C": "STO 可实现 SOS",
      "D": "普通 SV670 一律六功能"
    },
    "answer": [
      "B"
    ],
    "analysis": "其他编码器可仅 STO/SBC/SS1-t。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS",
      "安全功能集"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-203",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 SV670NS-INT 的现场联调中，哪项FSoE结论可直接用于检查表？",
    "options": {
      "A": "主站、安全配置和设备版本三方核对",
      "B": "FSoE 与编码器无关",
      "C": "普通 EtherCAT 扫描即完成安全验收",
      "D": "只需模拟量触发"
    },
    "answer": [
      "A"
    ],
    "analysis": "功能安全需要独立验证。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS-INT",
      "FSoE"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-204",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 SV680N 的安全电机，哪项技术处理符合手册边界？",
    "options": {
      "A": "只看 IP 等级",
      "B": "SS1-r/SS2/SOS/SLS 等扩展功能按手册配安全电机",
      "C": "抱闸等于安全电机",
      "D": "普通电机无条件实现"
    },
    "answer": [
      "B"
    ],
    "analysis": "安全系统要核对电机反馈和认证条件。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680N",
      "安全电机"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-206",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 SV680 安全布线的线缆长度疑问，哪项答复有依据？",
    "options": {
      "A": "安全 DI/DO 与安全开关最大 30 m",
      "B": "可直接 300 m 不复核",
      "C": "无需长度限制",
      "D": "只看电机线长度"
    },
    "answer": [
      "A"
    ],
    "analysis": "安全线缆和短路防护按安全手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 安全布线",
      "线缆长度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-207",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MS1 抱闸的现场联调中，哪项垂直轴结论可直接用于检查表？",
    "options": {
      "A": "停机后不需保持评估",
      "B": "抱闸可减速制动",
      "C": "PLC 任意高速开关即可",
      "D": "抱闸只保持停止负载，不能动态制动"
    },
    "answer": [
      "D"
    ],
    "analysis": "高风险轴要验证制动时序。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "垂直轴"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-208",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MS1 抱闸的供电，哪项技术处理符合手册边界？",
    "options": {
      "A": "独立 24 V 供电，电机输入至少 21.6 V",
      "B": "与编码器线共用电源",
      "C": "只需 5 V",
      "D": "直接接驱动高压母线"
    },
    "answer": [
      "A"
    ],
    "analysis": "压降和线径要实测。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "供电"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-212",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 E730/E731 的电池测量，哪项技术处理符合手册边界？",
    "options": {
      "A": "当作过流代码处理",
      "B": "直接短接电池",
      "C": "只重启不测量",
      "D": "用 1 kΩ 外接负载测量编码器电池电压"
    },
    "answer": [
      "D"
    ],
    "analysis": "只保留已核验故障码，不猜其他代码。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "E730/E731",
      "电池测量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-214",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 SV680 EtherCAT 的通信对象疑问，哪项答复有依据？",
    "options": {
      "A": "CoE、PDO、SDO、DC 按主站与驱动对象字典核对",
      "B": "PDO 可任意写",
      "C": "DC 等于直流电源",
      "D": "只需模拟量速度"
    },
    "answer": [
      "A"
    ],
    "analysis": "周期同步和对象映射分别验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "通信对象"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-215",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 EtherCAT PDO 的现场联调中，哪项映射修改结论可直接用于检查表？",
    "options": {
      "A": "写 0 恢复出厂",
      "B": "先使 PDO 无效；写 0 清除映射子索引",
      "C": "只改从站 IP",
      "D": "有效状态可任意写"
    },
    "answer": [
      "B"
    ],
    "analysis": "状态机和映射操作按手册顺序。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "EtherCAT PDO",
      "映射修改"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-216",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 CiA 402 6060h 的模式值，哪项技术处理符合手册边界？",
    "options": {
      "A": "8/9/10 均是回原",
      "B": "6060h 是波特率",
      "C": "模式与控制无关",
      "D": "1/3/4/6/8/9/10 对应位置/速度/转矩/回原/CSP/CSV/CST"
    },
    "answer": [
      "D"
    ],
    "analysis": "切模式还需确认状态机与 PDO。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "CiA 402 6060h",
      "模式值"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-219",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 SV680 V6 的现场联调中，哪项多圈保持结论可直接用于检查表？",
    "options": {
      "A": "编码器位数等于抱闸状态",
      "B": "更换电池不用做位置确认",
      "C": "所有反馈免电池",
      "D": "V6 免电池；A6/S6 多圈按电池保持条件验收"
    },
    "answer": [
      "D"
    ],
    "analysis": "更换/断电后多圈位置应验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 V6",
      "多圈保持"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-220",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 IS810N-INT 的多机母线，哪项技术处理符合手册边界？",
    "options": {
      "A": "只用 USB 供电",
      "B": "控制电源可接 380 V",
      "C": "母线可接任意电压",
      "D": "共直流母线与独立 24 V 控制电源应分开核对"
    },
    "answer": [
      "D"
    ],
    "analysis": "系统接线图与模块规格要一致。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "多机母线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-224",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 PROFINET IRT 的现场配置，哪项技术处理符合手册边界？",
    "options": {
      "A": "拓扑与 IRT 无关",
      "B": "按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT",
      "C": "周期任意设 10 μs",
      "D": "S7-1200 原生支持 IRT"
    },
    "answer": [
      "B"
    ],
    "analysis": "同步需求先核对主站硬件。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PROFINET IRT",
      "现场配置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-225",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 IS650N-PLUS 的主轴调试时，应采用哪项？",
    "options": {
      "A": "核对定向、刚性攻丝、反馈与全闭环配套",
      "B": "反馈无需确认",
      "C": "只按通用风机 V/f 调试",
      "D": "只改一个速度参数"
    },
    "answer": [
      "A"
    ],
    "analysis": "主轴工况还需机械/电机和 PG 证据。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "主轴调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-226",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 IS650N-PLUS 的环境降额疑问，哪项答复有依据？",
    "options": {
      "A": "全功率超过 50 ℃无降额",
      "B": "可凝露且无需机柜",
      "C": "7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%",
      "D": "功率档不影响温度边界"
    },
    "answer": [
      "C"
    ],
    "analysis": "温度规则按机座功率分组。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "环境降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-227",
    "category": "servo",
    "type": "single",
    "difficulty": 2,
    "stem": "在 IS810N-INT 的现场联调中，哪项海拔降额结论可直接用于检查表？",
    "options": {
      "A": "海拔不限",
      "B": "1000 m 以上每升高 100 m 降额 1%，最高 3000 m",
      "C": "海拔可用通讯卡补偿",
      "D": "只在海拔 4000 m 才降额"
    },
    "answer": [
      "B"
    ],
    "analysis": "机柜热设计与负载均需复核。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-228",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV630P Size A 无内置制动电阻，也无 PD 短接片。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV630P Size A 无内置制动电阻，也无 PD 短接片。 采购时要把机座、制动电阻和短接片作为 BOM 条件列出，不能只报功率。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630P Size A",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-229",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV630P 的 S7R6/S012 规格只能接三相 380 V。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV630P 的 S7R6/S012 规格支持单相或三相输入。 输入相制要与完整型号和现场电网同时确认，不可由系列名称推断。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630P S7R6/S012",
      "输入相制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-230",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F 当前 B01 资料的功率范围为 0.05～7.5 kW。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660F 当前 B01 资料的功率范围为 0.05～7.5 kW。 旧版本或 IS810F 范围不能覆盖 SV660F 当前小功率范围。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-231",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F 是 EtherCAT 分支。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660F 是 PROFINET 分支。 F、N、P 的协议差异直接影响 GSD/ESI、主站配置和采购型号。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-232",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F B01 资料配 23 位多圈编码器。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660F B01 资料配 23 位多圈编码器。 编码器类型必须与电机选型表、驱动器分支和安全功能一起闭环。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-233",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F 的 CN6 STO 对所有普通机型都无条件适用。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660F 的 CN6 STO 仅适用于带 -FS 的机型。 安全端子是后缀和硬件条件，不应把系列宣传语当作全系列接线结论。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F CN6",
      "安全端子"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-234",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F 的 CN5 用于 RS232 调试连接。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660F 的 CN5 用于 RS232 调试连接。 CN3/CN4、CN5、CN6 的用途必须按当前硬件手册分开核对。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F CN5",
      "调试接口"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-235",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F B01 的环境边界为 0～40 ℃，40 ℃以上每升高 1 ℃降额 1.5%。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660F B01 的环境边界为 0～55 ℃，45 ℃以上每升高 1 ℃降额 2%。 环境数字是具体分支的选型条件，不能套用 SV680 或 IS810 的温度规则。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F",
      "环境边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-236",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660N 是 EtherCAT 分支。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660N 是 EtherCAT 分支。 N 分支要同步核对 EtherCAT 端口、ESI 文件和主站对象字典。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-237",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660N 的 U2 是 23 位多圈编码器并适用于所有机座。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660N 的 U2 是 20 位单圈编码器，适用于 25 机座。 U2 不能被简化成“23 位编码器”；机座和反馈类型都要保留。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N U2",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-238",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660N S5R5（0.75 kW）单相 220 V 时只能接 L1/L2。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660N S5R5（0.75 kW）单相 220 V 时只能接 L1/L2。 相制和端子接法是现场技术边界，也应在采购 BOM 中写清。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "输入相制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-239",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660N S7R6/S012 只能三相输入且必须降额。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660N S7R6/S012 支持单相或三相输入且无需降额。 不要把 S5R5 的单相端子边界套到 S7R6/S012。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S7R6/S012",
      "输入相制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-240",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660P D01 是 Modbus-RTU 分支。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660P D01 是 Modbus-RTU 分支。 P 分支和 F/N 分支的主站文件、端口和参数组不同。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-241",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660P CN2 在所有机座都固定为无 PE 的 5 针接口。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660P CN2 资料列出 1～6 针并包含外壳 PE。 针脚不能靠系列印象填写；要回到同机座硬件图。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P CN2",
      "编码器接口"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-242",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660P 其他机座外接制动电阻前须拆除 P+-D 短接。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660P 其他机座外接制动电阻前须拆除 P+-D 短接。 制动电阻是高能量回路，接线动作必须按对应硬件手册执行。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "制动接线"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-243",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：当前手册的三个分支版本参数都写在 H02 组且数值相同。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：当前手册的版本记录参数为 F H01-00=4303.3、N H01-00=0905.0、P H01-00=0607.4。 参数号必须保留组号；不能把不同分支的版本值混为一个无组号参数。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "版本参数"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-244",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：汇川官网对 SV670-INT 的描述为 3.2 kHz 速度环带宽。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：汇川官网对 SV670-INT 的描述为 3.2 kHz 速度环带宽。 性能指标要注明环路类型和产品分支，不能把 SV680 电流环数字移植过来。",
    "source": {
      "title": "SV670 Series 产品页",
      "chapter": "知识点 S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670-INT",
      "性能"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-245",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV670-FS-INT 只有普通软件急停而没有 STO。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV670-FS-INT 的 STO 获得 SIL3 相关认证，符合 IEC 61800-5-2。 认证描述不等于现场风险评估；安全回路仍需按安全手册和整机标准验证。",
    "source": {
      "title": "SV670 Series 产品页",
      "chapter": "知识点 S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670-FS-INT",
      "安全认证"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-246",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：汇川官网对 SV680 的描述为 3.5 kHz 速度环带宽。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：汇川官网对 SV680 的描述为 3.5 kHz 速度环带宽。 SV670 的 3.2 kHz 与 SV680 的 3.5 kHz 不能混写。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "速度环性能"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-247",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：汇川官网将 SV680 的 625 kHz 描述为速度环带宽。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：汇川官网将 SV680 的 625 kHz 描述为电流环控制算法。 环路名称是技术题的关键限定词，采购题也应避免把指标写错列。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电流环算法"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-248",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：汇川官网列出 SV680 对 23/26 位串行绝对值、EnDat 2.2、BiSS-C、SSI 和 ABZ 的支持。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：汇川官网列出 SV680 对 23/26 位串行绝对值、EnDat 2.2、BiSS-C、SSI 和 ABZ 的支持。 “支持多编码器”仍不等于任意编码器任意组合，完整电机与驱动器表才是订货依据。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈兼容"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-249",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 的 A6/S6 是免电池多圈而 V6 必须电池。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV680 的 V6 是免电池多圈路径；标准 A6/S6 多圈需要电池保持位置。 电池、单圈/多圈、反馈位数和安全分支要同时写全，不能只写“绝对值”。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电池边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-250",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT C08 的功率范围为 0.85～120 kW。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS810N-INT C08 的功率范围为 0.85～120 kW。 IS810N 与 IS810F 的范围不同，不能用一个范围覆盖 N/F。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S44",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-251",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810F B04 的功率范围为 0.85～120 kW，属于 EtherCAT 分支。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS810F B04 的功率范围为 2.2～75 kW，属于 PROFINET 分支。 IS620F/810F 历史指南范围不能替代当前 B04 用户手册。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S45",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "功率与协议"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-252",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT C08 明确 DB 制动器由标配改为选配。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS810N-INT C08 明确 DB 制动器由标配改为选配。 订货时要把制动器作为独立配置核对，不能从旧版本沿用。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S46",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-253",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT C08 的环境边界为 -20～60 ℃且不需要降额。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS810N-INT C08 的环境边界为 0～40 ℃，40 ℃以上每升高 1 ℃降额 1.5%，最高 50 ℃。 IS810 还要求机柜内安装、IP20 和海拔条件，环境题不能只看温度。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S47",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810",
      "环境边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-254",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810F B04 给出的直流母线范围为 537～679 V，控制电源为 21.6～26.4 V。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS810F B04 给出的直流母线范围为 537～679 V，控制电源为 21.6～26.4 V。 母线和控制电源是柜体与多机系统设计的硬边界。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S48",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电气规格"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-255",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：PN 报文在位置控制方面应按“102 永远等同基础 EPOS”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：PN 报文在位置控制方面应按“3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强”核对。 不能把不同报文的控制字和功能块混用。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PN 报文",
      "位置控制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-256",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：PROFINET IRT 在现场配置方面应按“按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：PROFINET IRT 在现场配置方面应按“按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT”核对。 同步需求先核对主站硬件。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PROFINET IRT",
      "现场配置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-257",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS650N-PLUS 在主轴调试方面应按“只按通用风机 V/f 调试”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS650N-PLUS 在主轴调试方面应按“核对定向、刚性攻丝、反馈与全闭环配套”核对。 主轴工况还需机械/电机和 PG 证据。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "主轴调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-258",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS650N-PLUS 在环境降额方面应按“7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS650N-PLUS 在环境降额方面应按“7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%”核对。 温度规则按机座功率分组。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "环境降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-259",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT 在海拔降额方面应按“海拔不限”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS810N-INT 在海拔降额方面应按“1000 m 以上每升高 100 m 降额 1%，最高 3000 m”核对。 机柜热设计与负载均需复核。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-260",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT 在柜体条件方面应按“IP20 机柜安装、振动不超过 0.6 g”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS810N-INT 在柜体条件方面应按“IP20 机柜安装、振动不超过 0.6 g”核对。 安装条件是故障排查的先验检查。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "柜体条件"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-261",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：ISMG 在电机配对方面应按“95C 直接等于 9.5 kW”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：ISMG 在电机配对方面应按“95C 回表确认 7.9 kW，并按 IS810N/IS650P 配对表选驱动”核对。 型号解码后仍需查驱动-电机搭配。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "ISMG",
      "电机配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-262",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：客户故障答复在证据链方面应按“保留完整型号、版本、参数、故障时间、波形、负载和接线证据”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：客户故障答复在证据链方面应按“保留完整型号、版本、参数、故障时间、波形、负载和接线证据”核对。 故障码必须对应同版本手册。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "客户故障答复",
      "证据链"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-263",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：垂直轴客户问题在停机安全方面应按“抱闸直接作动态制动”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：垂直轴客户问题在停机安全方面应按“先评估重力负载与抱闸保持，再验证驱动减速和 STO 时序”核对。 机械保持、运动控制和功能安全职责分开。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "垂直轴客户问题",
      "停机安全"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-264",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：伺服参数迁移在版本核对方面应按“先核型号分支、电机/反馈、手册版本与功能差异，再分步验证”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：伺服参数迁移在版本核对方面应按“先核型号分支、电机/反馈、手册版本与功能差异，再分步验证”核对。 不同分支的参数号和功能含义可能变化。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服参数迁移",
      "版本核对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-265",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F/N/P 在手册版本方面应按“三个分支共用一个参数值”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660F/N/P 在手册版本方面应按“F B01、N/P D01 分支和 H01-00 值分别核对”核对。 参数迁移前先锁分支和版本。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "手册版本"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-266",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F/N 在STO 端子方面应按“CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660F/N 在STO 端子方面应按“CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线”核对。 安全端子接线须按硬件后缀确认。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 T-S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N",
      "STO 端子"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-267",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660N S5R5 在单相接线方面应按“必须接 L1/L2/L3”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660N S5R5 在单相接线方面应按“0.75 kW 单相 220 V 仅接 L1/L2”核对。 相制与端子定义要按同机座图。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "单相接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-268",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660P 在外接制动方面应按“其他机座外接制动电阻前拆 P+-D 短接”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660P 在外接制动方面应按“其他机座外接制动电阻前拆 P+-D 短接”核对。 断电后按机座手册处理高能量端子。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "外接制动"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-269",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV670NS 在安全功能集方面应按“普通 SV670 一律六功能”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV670NS 在安全功能集方面应按“六功能只属于对应 NS 安全分支且受编码器约束”核对。 其他编码器可仅 STO/SBC/SS1-t。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS",
      "安全功能集"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-270",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV670NS-INT 在FSoE方面应按“主站、安全配置和设备版本三方核对”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV670NS-INT 在FSoE方面应按“主站、安全配置和设备版本三方核对”核对。 功能安全需要独立验证。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS-INT",
      "FSoE"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-271",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680N 在安全电机方面应按“普通电机无条件实现”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV680N 在安全电机方面应按“SS1-r/SS2/SOS/SLS 等扩展功能按手册配安全电机”核对。 安全系统要核对电机反馈和认证条件。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680N",
      "安全电机"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-272",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 STO 在输入电平方面应按“STO1/STO2 双通道同时高，24 VDC±15%”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV680 STO 在输入电平方面应按“STO1/STO2 双通道同时高，24 VDC±15%”核对。 STO 不是软件急停。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 STO",
      "输入电平"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-273",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 安全布线在线缆长度方面应按“无需长度限制”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV680 安全布线在线缆长度方面应按“安全 DI/DO 与安全开关最大 30 m”核对。 安全线缆和短路防护按安全手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 安全布线",
      "线缆长度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-274",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1 抱闸在垂直轴方面应按“抱闸只保持停止负载，不能动态制动”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MS1 抱闸在垂直轴方面应按“抱闸只保持停止负载，不能动态制动”核对。 高风险轴要验证制动时序。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "垂直轴"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-275",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1 抱闸在供电方面应按“直接接驱动高压母线”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MS1 抱闸在供电方面应按“独立 24 V 供电，电机输入至少 21.6 V”核对。 压降和线径要实测。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "供电"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-276",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1 抱闸线在线径方面应按“至少 0.5 mm²，并核对线长压降”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MS1 抱闸线在线径方面应按“至少 0.5 mm²，并核对线长压降”核对。 抱闸供电必须在电机端达标。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸线",
      "线径"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-277",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1-R 在接线顺序方面应按“先连接编码器后 PE”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MS1-R 在接线顺序方面应按“先连接主回路和 PE，再连接编码器线”核对。 避免电位差损坏反馈。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "接线顺序"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-278",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1-R 在拖链弯曲方面应按“固定线 5 倍外径、拖链线 10 倍外径”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MS1-R 在拖链弯曲方面应按“固定线 5 倍外径、拖链线 10 倍外径”核对。 现场移动工况应使用相应线材。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "拖链弯曲"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-279",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：E730/E731 在电池测量方面应按“直接短接电池”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：E730/E731 在电池测量方面应按“用 1 kΩ 外接负载测量编码器电池电压”核对。 只保留已核验故障码，不猜其他代码。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "E730/E731",
      "电池测量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-280",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 EtherCAT 在物理拓扑方面应按“100Base-TX 全双工 100 Mbit/s，节点间小于 100 m”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV680 EtherCAT 在物理拓扑方面应按“100Base-TX 全双工 100 Mbit/s，节点间小于 100 m”核对。 布线与拓扑要按通信手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "物理拓扑"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-281",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 EtherCAT 在通信对象方面应按“只需模拟量速度”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV680 EtherCAT 在通信对象方面应按“CoE、PDO、SDO、DC 按主站与驱动对象字典核对”核对。 周期同步和对象映射分别验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "通信对象"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-282",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：EtherCAT PDO 在映射修改方面应按“先使 PDO 无效；写 0 清除映射子索引”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：EtherCAT PDO 在映射修改方面应按“先使 PDO 无效；写 0 清除映射子索引”核对。 状态机和映射操作按手册顺序。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "EtherCAT PDO",
      "映射修改"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-283",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：CiA 402 6060h 在模式值方面应按“8/9/10 均是回原”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：CiA 402 6060h 在模式值方面应按“1/3/4/6/8/9/10 对应位置/速度/转矩/回原/CSP/CSV/CST”核对。 切模式还需确认状态机与 PDO。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "CiA 402 6060h",
      "模式值"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-284",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：伺服回原在机械基准方面应按“有弹性的机械极限不宜作高精度原点”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：伺服回原在机械基准方面应按“有弹性的机械极限不宜作高精度原点”核对。 现场机械设计与模式表一致。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服回原",
      "机械基准"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-285",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 在反馈配对方面应按“支持列表即任意兼容”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV680 在反馈配对方面应按“编码器协议、位数、电池和安全电机按同机座配对表核对”核对。 尤其全闭环和安全功能要闭环验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-286",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 V6 在多圈保持方面应按“V6 免电池；A6/S6 多圈按电池保持条件验收”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV680 V6 在多圈保持方面应按“V6 免电池；A6/S6 多圈按电池保持条件验收”核对。 更换/断电后多圈位置应验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 V6",
      "多圈保持"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-287",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT 在多机母线方面应按“只用 USB 供电”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS810N-INT 在多机母线方面应按“共直流母线与独立 24 V 控制电源应分开核对”核对。 系统接线图与模块规格要一致。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "多机母线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-288",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810F 在电源范围方面应按“直流母线 537～679 V，控制 21.6～26.4 V”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS810F 在电源范围方面应按“直流母线 537～679 V，控制 21.6～26.4 V”核对。 测量应在对应端子进行。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电源范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-289",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810F PN 在启动控制字方面应按“16#4F7E→16#4F7F”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS810F PN 在启动控制字方面应按“报文 1 的 16#47E→16#47F 顺序按指南验证”核对。 报文类型与主站工艺对象必须配套。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F PN",
      "启动控制字"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-290",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：PN 报文在位置控制方面应按“3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：PN 报文在位置控制方面应按“3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强”核对。 不能把不同报文的控制字和功能块混用。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PN 报文",
      "位置控制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-291",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：PROFINET IRT 在现场配置方面应按“拓扑与 IRT 无关”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：PROFINET IRT 在现场配置方面应按“按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT”核对。 同步需求先核对主站硬件。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PROFINET IRT",
      "现场配置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-292",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS650N-PLUS 在主轴调试方面应按“核对定向、刚性攻丝、反馈与全闭环配套”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS650N-PLUS 在主轴调试方面应按“核对定向、刚性攻丝、反馈与全闭环配套”核对。 主轴工况还需机械/电机和 PG 证据。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "主轴调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-293",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS650N-PLUS 在环境降额方面应按“全功率超过 50 ℃无降额”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS650N-PLUS 在环境降额方面应按“7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%”核对。 温度规则按机座功率分组。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "环境降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-294",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT 在海拔降额方面应按“1000 m 以上每升高 100 m 降额 1%，最高 3000 m”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：IS810N-INT 在海拔降额方面应按“1000 m 以上每升高 100 m 降额 1%，最高 3000 m”核对。 机柜热设计与负载均需复核。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-295",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：IS810N-INT 在柜体条件方面应按“整机 IP67 可露天安装”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：IS810N-INT 在柜体条件方面应按“IP20 机柜安装、振动不超过 0.6 g”核对。 安装条件是故障排查的先验检查。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "柜体条件"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-296",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：ISMG 在电机配对方面应按“95C 回表确认 7.9 kW，并按 IS810N/IS650P 配对表选驱动”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：ISMG 在电机配对方面应按“95C 回表确认 7.9 kW，并按 IS810N/IS650P 配对表选驱动”核对。 型号解码后仍需查驱动-电机搭配。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "ISMG",
      "电机配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-297",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：客户故障答复在证据链方面应按“只根据故障截图猜根因”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：客户故障答复在证据链方面应按“保留完整型号、版本、参数、故障时间、波形、负载和接线证据”核对。 故障码必须对应同版本手册。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "客户故障答复",
      "证据链"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-298",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：垂直轴客户问题在停机安全方面应按“先评估重力负载与抱闸保持，再验证驱动减速和 STO 时序”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：垂直轴客户问题在停机安全方面应按“先评估重力负载与抱闸保持，再验证驱动减速和 STO 时序”核对。 机械保持、运动控制和功能安全职责分开。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "垂直轴客户问题",
      "停机安全"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-299",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：伺服参数迁移在版本核对方面应按“旧项目参数整包无条件复制”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：伺服参数迁移在版本核对方面应按“先核型号分支、电机/反馈、手册版本与功能差异，再分步验证”核对。 不同分支的参数号和功能含义可能变化。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服参数迁移",
      "版本核对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-300",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F/N/P 在手册版本方面应按“F B01、N/P D01 分支和 H01-00 值分别核对”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660F/N/P 在手册版本方面应按“F B01、N/P D01 分支和 H01-00 值分别核对”核对。 参数迁移前先锁分支和版本。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "手册版本"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-301",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660F/N 在STO 端子方面应按“普通分支全有 STO”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660F/N 在STO 端子方面应按“CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线”核对。 安全端子接线须按硬件后缀确认。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 T-S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N",
      "STO 端子"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-302",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660N S5R5 在单相接线方面应按“0.75 kW 单相 220 V 仅接 L1/L2”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV660N S5R5 在单相接线方面应按“0.75 kW 单相 220 V 仅接 L1/L2”核对。 相制与端子定义要按同机座图。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "单相接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-303",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV660P 在外接制动方面应按“接电阻仍保留短接”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV660P 在外接制动方面应按“其他机座外接制动电阻前拆 P+-D 短接”核对。 断电后按机座手册处理高能量端子。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "外接制动"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-304",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV670NS 在安全功能集方面应按“六功能只属于对应 NS 安全分支且受编码器约束”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV670NS 在安全功能集方面应按“六功能只属于对应 NS 安全分支且受编码器约束”核对。 其他编码器可仅 STO/SBC/SS1-t。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS",
      "安全功能集"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-305",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV670NS-INT 在FSoE方面应按“普通 EtherCAT 扫描即完成安全验收”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV670NS-INT 在FSoE方面应按“主站、安全配置和设备版本三方核对”核对。 功能安全需要独立验证。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS-INT",
      "FSoE"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-306",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680N 在安全电机方面应按“SS1-r/SS2/SOS/SLS 等扩展功能按手册配安全电机”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV680N 在安全电机方面应按“SS1-r/SS2/SOS/SLS 等扩展功能按手册配安全电机”核对。 安全系统要核对电机反馈和认证条件。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680N",
      "安全电机"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-307",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 STO 在输入电平方面应按“任一通道高即可”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV680 STO 在输入电平方面应按“STO1/STO2 双通道同时高，24 VDC±15%”核对。 STO 不是软件急停。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 STO",
      "输入电平"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-308",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 安全布线在线缆长度方面应按“安全 DI/DO 与安全开关最大 30 m”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV680 安全布线在线缆长度方面应按“安全 DI/DO 与安全开关最大 30 m”核对。 安全线缆和短路防护按安全手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 安全布线",
      "线缆长度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-309",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1 抱闸在垂直轴方面应按“抱闸可减速制动”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MS1 抱闸在垂直轴方面应按“抱闸只保持停止负载，不能动态制动”核对。 高风险轴要验证制动时序。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "垂直轴"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-310",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1 抱闸在供电方面应按“独立 24 V 供电，电机输入至少 21.6 V”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MS1 抱闸在供电方面应按“独立 24 V 供电，电机输入至少 21.6 V”核对。 压降和线径要实测。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "供电"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-311",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1 抱闸线在线径方面应按“任意细线无需压降”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MS1 抱闸线在线径方面应按“至少 0.5 mm²，并核对线长压降”核对。 抱闸供电必须在电机端达标。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸线",
      "线径"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-312",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1-R 在接线顺序方面应按“先连接主回路和 PE，再连接编码器线”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MS1-R 在接线顺序方面应按“先连接主回路和 PE，再连接编码器线”核对。 避免电位差损坏反馈。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "接线顺序"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-313",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MS1-R 在拖链弯曲方面应按“固定和拖链均 1 倍”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MS1-R 在拖链弯曲方面应按“固定线 5 倍外径、拖链线 10 倍外径”核对。 现场移动工况应使用相应线材。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "拖链弯曲"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-314",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：E730/E731 在电池测量方面应按“用 1 kΩ 外接负载测量编码器电池电压”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：E730/E731 在电池测量方面应按“用 1 kΩ 外接负载测量编码器电池电压”核对。 只保留已核验故障码，不猜其他代码。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "E730/E731",
      "电池测量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-315",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 EtherCAT 在物理拓扑方面应按“RS485 半双工 1200 m”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：SV680 EtherCAT 在物理拓扑方面应按“100Base-TX 全双工 100 Mbit/s，节点间小于 100 m”核对。 布线与拓扑要按通信手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "物理拓扑"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-316",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：SV680 EtherCAT 在通信对象方面应按“CoE、PDO、SDO、DC 按主站与驱动对象字典核对”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：SV680 EtherCAT 在通信对象方面应按“CoE、PDO、SDO、DC 按主站与驱动对象字典核对”核对。 周期同步和对象映射分别验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "通信对象"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-317",
    "category": "servo",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：EtherCAT PDO 在映射修改方面应按“有效状态可任意写”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：EtherCAT PDO 在映射修改方面应按“先使 PDO 无效；写 0 清除映射子索引”核对。 状态机和映射操作按手册顺序。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "EtherCAT PDO",
      "映射修改"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-318",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV670-INT 的性能关键边界：____。",
    "options": null,
    "answer": [
      "3.2 kHz 速度环带宽"
    ],
    "analysis": "性能指标要注明环路类型和产品分支，不能把 SV680 电流环数字移植过来。",
    "source": {
      "title": "SV670 Series 产品页",
      "chapter": "知识点 S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670-INT",
      "性能"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-319",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV670-FS-INT 的安全认证应填为：____。",
    "options": null,
    "answer": [
      "STO SIL3，符合 IEC 61800-5-2"
    ],
    "analysis": "认证描述不等于现场风险评估；安全回路仍需按安全手册和整机标准验证。",
    "source": {
      "title": "SV670 Series 产品页",
      "chapter": "知识点 S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670-FS-INT",
      "安全认证"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-320",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV680 的速度环性能结论为：____。",
    "options": null,
    "answer": [
      "3.5 kHz 速度环带宽"
    ],
    "analysis": "SV670 的 3.2 kHz 与 SV680 的 3.5 kHz 不能混写。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "速度环性能"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-321",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV680 的电流环算法关键边界：____。",
    "options": null,
    "answer": [
      "625 kHz 电流环控制算法"
    ],
    "analysis": "环路名称是技术题的关键限定词，采购题也应避免把指标写错列。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电流环算法"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-322",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV680 的反馈兼容应填为：____。",
    "options": null,
    "answer": [
      "23/26 位串行绝对值、EnDat 2.2、BiSS-C、SSI、ABZ"
    ],
    "analysis": "“支持多编码器”仍不等于任意编码器任意组合，完整电机与驱动器表才是订货依据。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈兼容"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-323",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV680 的电池边界结论为：____。",
    "options": null,
    "answer": [
      "V6 为免电池多圈；A6/S6 多圈需电池保持"
    ],
    "analysis": "电池、单圈/多圈、反馈位数和安全分支要同时写全，不能只写“绝对值”。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电池边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-324",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 IS810N-INT 的功率范围关键边界：____。",
    "options": null,
    "answer": [
      "0.85～120 kW"
    ],
    "analysis": "IS810N 与 IS810F 的范围不同，不能用一个范围覆盖 N/F。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S44",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-325",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，IS810F 的功率与协议应填为：____。",
    "options": null,
    "answer": [
      "2.2～75 kW，PROFINET"
    ],
    "analysis": "IS620F/810F 历史指南范围不能替代当前 B04 用户手册。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S45",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "功率与协议"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-326",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，IS810N-INT 的制动配置结论为：____。",
    "options": null,
    "answer": [
      "DB 制动器由标配改为选配"
    ],
    "analysis": "订货时要把制动器作为独立配置核对，不能从旧版本沿用。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S46",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-327",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 IS810 的环境边界关键边界：____。",
    "options": null,
    "answer": [
      "0～40 ℃，40 ℃以上每升高 1 ℃降额 1.5%，最高 50 ℃"
    ],
    "analysis": "IS810 还要求机柜内安装、IP20 和海拔条件，环境题不能只看温度。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S47",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810",
      "环境边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-328",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，IS810F 的电气规格应填为：____。",
    "options": null,
    "answer": [
      "直流母线 537～679 V，控制电源 21.6～26.4 V"
    ],
    "analysis": "母线和控制电源是柜体与多机系统设计的硬边界。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 S48",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电气规格"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-329",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV680 的电机类型结论为：____。",
    "options": null,
    "answer": [
      "同一驱动模型可控制旋转、DDL 与 DDR 电机"
    ],
    "analysis": "电机类型兼容不等于无需重新做反馈、相位和参数确认。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S53",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "电机类型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-330",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV680 的多圈编码器关键边界：____。",
    "options": null,
    "answer": [
      "26 位一圈超过 67.1 百万脉冲"
    ],
    "analysis": "位数是反馈分辨率描述，不应替代完整编码器型号和电池条件。",
    "source": {
      "title": "SV680 Series 产品页",
      "chapter": "知识点 S57",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "多圈编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-331",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV630 的功率范围应填为：____。",
    "options": null,
    "answer": [
      "0.05～7.5 kW"
    ],
    "analysis": "功率范围只能按当前分支手册与完整型号确认，不能用相邻系列范围替代。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-332",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV630 的通信分支结论为：____。",
    "options": null,
    "answer": [
      "A 为 CANlink/Modbus，N 为 EtherCAT，P 为 Modbus-RTU"
    ],
    "analysis": "分支字母是采购和技术共同的第一层核对项；特殊 C-PS、P-PS 等后缀仍要另查手册。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630",
      "通信分支"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-333",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV630 的编码器关键边界：____。",
    "options": null,
    "answer": [
      "T3 为 18 位编码器"
    ],
    "analysis": "不能把 SV630 的 T3 与其他系列的 23 位或 26 位编码器代码混用。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630",
      "编码器"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-334",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV630P 的通信接口应填为：____。",
    "options": null,
    "answer": [
      "CN3/CN4 为 RS232/RS485 并联"
    ],
    "analysis": "接口结论必须带分支和版本，不能把同一位置在不同系列的用途直接横向套用。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630P",
      "通信接口"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-335",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV630P Size A 的制动配置结论为：____。",
    "options": null,
    "answer": [
      "无内置制动电阻且无 PD 短接片"
    ],
    "analysis": "采购时要把机座、制动电阻和短接片作为 BOM 条件列出，不能只报功率。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV630P Size A",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-336",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全伺服参数迁移的版本核对关键边界：____。",
    "options": null,
    "answer": [
      "先核型号分支、电机/反馈、手册版本与功能差异，再分步验证"
    ],
    "analysis": "不同分支的参数号和功能含义可能变化。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服参数迁移",
      "版本核对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-337",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV660F/N/P 的手册版本应填为：____。",
    "options": null,
    "answer": [
      "F B01、N/P D01 分支和 H01-00 值分别核对"
    ],
    "analysis": "参数迁移前先锁分支和版本。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "手册版本"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-338",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV660F/N 的STO 端子结论为：____。",
    "options": null,
    "answer": [
      "CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线"
    ],
    "analysis": "安全端子接线须按硬件后缀确认。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 T-S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N",
      "STO 端子"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-339",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV660N S5R5 的单相接线关键边界：____。",
    "options": null,
    "answer": [
      "0.75 kW 单相 220 V 仅接 L1/L2"
    ],
    "analysis": "相制与端子定义要按同机座图。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "单相接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-340",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV660P 的外接制动应填为：____。",
    "options": null,
    "answer": [
      "其他机座外接制动电阻前拆 P+-D 短接"
    ],
    "analysis": "断电后按机座手册处理高能量端子。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "外接制动"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-341",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV670NS 的安全功能集结论为：____。",
    "options": null,
    "answer": [
      "六功能只属于对应 NS 安全分支且受编码器约束"
    ],
    "analysis": "其他编码器可仅 STO/SBC/SS1-t。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS",
      "安全功能集"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-342",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV670NS-INT 的FSoE关键边界：____。",
    "options": null,
    "answer": [
      "主站、安全配置和设备版本三方核对"
    ],
    "analysis": "功能安全需要独立验证。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS-INT",
      "FSoE"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-343",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV680N 的安全电机应填为：____。",
    "options": null,
    "answer": [
      "SS1-r/SS2/SOS/SLS 等扩展功能按手册配安全电机"
    ],
    "analysis": "安全系统要核对电机反馈和认证条件。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680N",
      "安全电机"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-344",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV680 STO 的输入电平结论为：____。",
    "options": null,
    "answer": [
      "STO1/STO2 双通道同时高，24 VDC±15%"
    ],
    "analysis": "STO 不是软件急停。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 STO",
      "输入电平"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-345",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV680 安全布线的线缆长度关键边界：____。",
    "options": null,
    "answer": [
      "安全 DI/DO 与安全开关最大 30 m"
    ],
    "analysis": "安全线缆和短路防护按安全手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 安全布线",
      "线缆长度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-346",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MS1 抱闸的垂直轴应填为：____。",
    "options": null,
    "answer": [
      "抱闸只保持停止负载，不能动态制动"
    ],
    "analysis": "高风险轴要验证制动时序。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "垂直轴"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-347",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MS1 抱闸的供电结论为：____。",
    "options": null,
    "answer": [
      "独立 24 V 供电，电机输入至少 21.6 V"
    ],
    "analysis": "压降和线径要实测。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "供电"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-348",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MS1 抱闸线的线径关键边界：____。",
    "options": null,
    "answer": [
      "至少 0.5 mm²，并核对线长压降"
    ],
    "analysis": "抱闸供电必须在电机端达标。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸线",
      "线径"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-349",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MS1-R 的接线顺序应填为：____。",
    "options": null,
    "answer": [
      "先连接主回路和 PE，再连接编码器线"
    ],
    "analysis": "避免电位差损坏反馈。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "接线顺序"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-350",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MS1-R 的拖链弯曲结论为：____。",
    "options": null,
    "answer": [
      "固定线 5 倍外径、拖链线 10 倍外径"
    ],
    "analysis": "现场移动工况应使用相应线材。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "拖链弯曲"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-351",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 E730/E731 的电池测量关键边界：____。",
    "options": null,
    "answer": [
      "用 1 kΩ 外接负载测量编码器电池电压"
    ],
    "analysis": "只保留已核验故障码，不猜其他代码。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "E730/E731",
      "电池测量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-352",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV680 EtherCAT 的物理拓扑应填为：____。",
    "options": null,
    "answer": [
      "100Base-TX 全双工 100 Mbit/s，节点间小于 100 m"
    ],
    "analysis": "布线与拓扑要按通信手册。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "物理拓扑"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-353",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV680 EtherCAT 的通信对象结论为：____。",
    "options": null,
    "answer": [
      "CoE、PDO、SDO、DC 按主站与驱动对象字典核对"
    ],
    "analysis": "周期同步和对象映射分别验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "通信对象"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-354",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 EtherCAT PDO 的映射修改关键边界：____。",
    "options": null,
    "answer": [
      "先使 PDO 无效；写 0 清除映射子索引"
    ],
    "analysis": "状态机和映射操作按手册顺序。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "EtherCAT PDO",
      "映射修改"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-355",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，CiA 402 6060h 的模式值应填为：____。",
    "options": null,
    "answer": [
      "1/3/4/6/8/9/10 对应位置/速度/转矩/回原/CSP/CSV/CST"
    ],
    "analysis": "切模式还需确认状态机与 PDO。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "CiA 402 6060h",
      "模式值"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-356",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，伺服回原的机械基准结论为：____。",
    "options": null,
    "answer": [
      "有弹性的机械极限不宜作高精度原点"
    ],
    "analysis": "现场机械设计与模式表一致。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服回原",
      "机械基准"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-357",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV680 的反馈配对关键边界：____。",
    "options": null,
    "answer": [
      "编码器协议、位数、电池和安全电机按同机座配对表核对"
    ],
    "analysis": "尤其全闭环和安全功能要闭环验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-358",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV680 V6 的多圈保持应填为：____。",
    "options": null,
    "answer": [
      "V6 免电池；A6/S6 多圈按电池保持条件验收"
    ],
    "analysis": "更换/断电后多圈位置应验证。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 V6",
      "多圈保持"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-359",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，IS810N-INT 的多机母线结论为：____。",
    "options": null,
    "answer": [
      "共直流母线与独立 24 V 控制电源应分开核对"
    ],
    "analysis": "系统接线图与模块规格要一致。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "多机母线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-360",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 IS810F 的电源范围关键边界：____。",
    "options": null,
    "answer": [
      "直流母线 537～679 V，控制 21.6～26.4 V"
    ],
    "analysis": "测量应在对应端子进行。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电源范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-361",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，IS810F PN 的启动控制字应填为：____。",
    "options": null,
    "answer": [
      "报文 1 的 16#47E→16#47F 顺序按指南验证"
    ],
    "analysis": "报文类型与主站工艺对象必须配套。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F PN",
      "启动控制字"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-362",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，PN 报文的位置控制结论为：____。",
    "options": null,
    "answer": [
      "3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强"
    ],
    "analysis": "不能把不同报文的控制字和功能块混用。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PN 报文",
      "位置控制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-363",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 PROFINET IRT 的现场配置关键边界：____。",
    "options": null,
    "answer": [
      "按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT"
    ],
    "analysis": "同步需求先核对主站硬件。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PROFINET IRT",
      "现场配置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-364",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，IS650N-PLUS 的主轴调试应填为：____。",
    "options": null,
    "answer": [
      "核对定向、刚性攻丝、反馈与全闭环配套"
    ],
    "analysis": "主轴工况还需机械/电机和 PG 证据。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "主轴调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-365",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，IS650N-PLUS 的环境降额结论为：____。",
    "options": null,
    "answer": [
      "7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%"
    ],
    "analysis": "温度规则按机座功率分组。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "环境降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-366",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 IS810N-INT 的海拔降额关键边界：____。",
    "options": null,
    "answer": [
      "1000 m 以上每升高 100 m 降额 1%，最高 3000 m"
    ],
    "analysis": "机柜热设计与负载均需复核。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-367",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，IS810N-INT 的柜体条件应填为：____。",
    "options": null,
    "answer": [
      "IP20 机柜安装、振动不超过 0.6 g"
    ],
    "analysis": "安装条件是故障排查的先验检查。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "柜体条件"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-368",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，ISMG 的电机配对结论为：____。",
    "options": null,
    "answer": [
      "95C 回表确认 7.9 kW，并按 IS810N/IS650P 配对表选驱动"
    ],
    "analysis": "型号解码后仍需查驱动-电机搭配。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "ISMG",
      "电机配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-369",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全客户故障答复的证据链关键边界：____。",
    "options": null,
    "answer": [
      "保留完整型号、版本、参数、故障时间、波形、负载和接线证据"
    ],
    "analysis": "故障码必须对应同版本手册。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "客户故障答复",
      "证据链"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-370",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，垂直轴客户问题的停机安全应填为：____。",
    "options": null,
    "answer": [
      "先评估重力负载与抱闸保持，再验证驱动减速和 STO 时序"
    ],
    "analysis": "机械保持、运动控制和功能安全职责分开。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "垂直轴客户问题",
      "停机安全"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-371",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，伺服参数迁移的版本核对结论为：____。",
    "options": null,
    "answer": [
      "先核型号分支、电机/反馈、手册版本与功能差异，再分步验证"
    ],
    "analysis": "不同分支的参数号和功能含义可能变化。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服参数迁移",
      "版本核对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-372",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV660F/N/P 的手册版本关键边界：____。",
    "options": null,
    "answer": [
      "F B01、N/P D01 分支和 H01-00 值分别核对"
    ],
    "analysis": "参数迁移前先锁分支和版本。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "手册版本"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-373",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV660F/N 的STO 端子应填为：____。",
    "options": null,
    "answer": [
      "CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线"
    ],
    "analysis": "安全端子接线须按硬件后缀确认。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 T-S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N",
      "STO 端子"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-374",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV660N S5R5 的单相接线结论为：____。",
    "options": null,
    "answer": [
      "0.75 kW 单相 220 V 仅接 L1/L2"
    ],
    "analysis": "相制与端子定义要按同机座图。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "单相接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-375",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 SV660P 的外接制动关键边界：____。",
    "options": null,
    "answer": [
      "其他机座外接制动电阻前拆 P+-D 短接"
    ],
    "analysis": "断电后按机座手册处理高能量端子。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "外接制动"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-376",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，SV670NS 的安全功能集应填为：____。",
    "options": null,
    "answer": [
      "六功能只属于对应 NS 安全分支且受编码器约束"
    ],
    "analysis": "其他编码器可仅 STO/SBC/SS1-t。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS",
      "安全功能集"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-377",
    "category": "servo",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，SV670NS-INT 的FSoE结论为：____。",
    "options": null,
    "answer": [
      "主站、安全配置和设备版本三方核对"
    ],
    "analysis": "功能安全需要独立验证。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS-INT",
      "FSoE"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-015",
    "category": "servo",
    "type": "multi",
    "difficulty": 3,
    "stem": "根据汇川官网对 SV680 系列高性能旗舰型伺服驱动器的说明，下列哪些属于该系列的标配功能？",
    "options": {
      "A": "STO（安全转矩关断）",
      "B": "动态制动",
      "C": "EtherCAT 总线 FSoE 功能",
      "D": "内置抱闸输出与 PTC 检测"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "SV680 官方资料明确：标配 STO 与动态制动，标配 EtherCAT 总线 FSoE 功能（PROFINET 版本对应 PROFIsafe），并内置抱闸输出与 PTC 检测，同时扩展 SS1/SS2/SLS/SBC/SOS/SSM/SDI 等安全功能。四个选项都出自官方表述。这道题的易错点在于把\"标配\"与\"扩展/选配\"混淆：SS1、SLS 等高级安全功能需要扩展安全功能模块配合，不属于标配，而 FSoE 本身是标配。与客户确认安全方案时，必须区分标配 STO 与需要选件的扩展安全功能。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "功能安全",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "SRV-020",
    "category": "servo",
    "type": "multi",
    "difficulty": 3,
    "stem": "某多轴设备使用汇川 SV660N 系列伺服组建 EtherCAT 网络，主站扫描不到其中一台从站。下列哪些排查方向是合理的？",
    "options": {
      "A": "检查该台从站的总线 IN/OUT 接线顺序与网线是否插紧、水晶头压接是否可靠",
      "B": "核对从站 ESI（XML）文件版本与主站组态是否匹配、站地址是否存在冲突",
      "C": "把该台伺服驱动器的型号后缀改为脉冲型，用脉冲方式驱动以绕过总线问题",
      "D": "检查总线电缆屏蔽层接地方式、走线是否与大功率动力线捆扎在一起"
    },
    "answer": [
      "A",
      "B",
      "D"
    ],
    "analysis": "A、B、D 都是现场排查 EtherCAT 丢站的标准路径：物理层（接线顺序、网线质量、屏蔽与接地、与动力线分离）→ 组态层（ESI 文件版本、站地址）。C 是错误做法，更换为脉冲型机型等于放弃总线方案，且脉冲型无法解决原方案的多轴同步需求，属于\"改需求迁就故障\"。排查顺序建议先物理层再组态层：物理层问题往往表现为随机丢站，组态层问题多为固定某台扫不到。",
    "source": {
      "title": "汇川技术 SV660N 系列伺服用户手册",
      "chapter": "EtherCAT 通信配置 / 故障处理",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660N",
      "EtherCAT",
      "故障排查"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "SRV-026",
    "category": "servo",
    "type": "judge",
    "difficulty": 3,
    "stem": "设备维护时，若伺服电机使用的是多圈绝对值编码器，只要在断电前记录好机械位置，就可以直接拆下伺服电机的编码器线缆插头，重新插上后无需任何回零操作即可恢复原多圈位置数据。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。多圈绝对值编码器维持多圈数据的方式不同，结论也不同：带电池的绝对值系统在断开编码器线缆或电池失效后，多圈数据会丢失并触发编码器相关报警，需要重新进行原点复归或按官方手册执行多圈数据复位流程；汇川 MS1-R 系列推出了\"真绝对值/免电池编码器\"产品（实现免电池采购、免电池库存管理与更换），其断电保持特性需以对应型号的官方手册说明为准。因此\"任何绝对值系统都可以随意拔编码器线且不需回零\"的说法不成立。维护作业前必须先确认该轴是多圈绝对值带电池型、免电池型还是增量型，并做好机械位置标记。",
    "source": {
      "title": "汇川技术 MS1-R 系列真绝对值伺服系统产品页 / MS1-R 系列伺服电机选型手册",
      "chapter": "产品简介 / 绝对值编码器说明",
      "url": "https://www.inovance.com/portal/product/details?productId=908"
    },
    "tags": [
      "绝对值编码器",
      "维护保养",
      "编码器"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-030",
    "category": "servo",
    "type": "short",
    "difficulty": 3,
    "stem": "请列出一套汇川伺服系统在客户现场的日常维护保养项目与检查要点。",
    "options": null,
    "answer": "参考答案要点：\n1）运行状态巡检：定期读取并记录驱动器监控的负载率、电机与驱动器温度、位置偏差等运行数据，形成基线与趋势记录；异常报警应记录报警代码、发生工况与频次，而不是简单复位后继续生产。\n2）散热与清洁：检查电柜风扇、滤网、散热片积尘情况，确认驱动器安装间距与通风路径符合官方手册的安装与散热要求；高温季节是过载与降额类问题的集中爆发期。\n3）线缆与连接：检查动力线、编码器线、总线线缆的固定与应力释放，插头是否松动或氧化；重点看拖链、运动关节处线缆有无疲劳破损；总线电缆屏蔽层接地是否可靠、是否与动力线分开走线。\n4）机械与联轴器：检查联轴器、同步带、丝杠润滑与紧固状况，机械侧阻力上升会直接反映为伺服负载率升高与定位偏差。\n5）绝对值编码器相关的维护：对使用带电池绝对值编码器的机型，按对应系列用户手册要求的周期更换电池并做记录，避免电池失效导致多圈数据丢失与意外停机；采用汇川 MS1-R 系列真绝对值（免电池编码器）产品可从方案上规避电池采购、库存管理与更换问题，也规避航空运输的电池出口限制；无论哪种方案，断开编码器线缆前都必须确认该轴的保持方式并做好机械位置标记。\n6）备件与记录：按官方保修与维修政策管理备件（SV680 系列官方提供 5 年整机质保，需按保修条款保留相关凭证），建立每台设备的伺服型号、参数备份与维修履历。\n7）参数备份：对已调试完成的驱动器参数组做备份存档，更换备件时按备份恢复并复核关键参数，避免依赖现场记忆重调。",
    "analysis": "本题考察维护体系的完整性。现场最常见的两类失误：一是只做清洁不记录趋势，导致故障只能事后分析；二是在没有备份参数的情况下直接更换驱动器，凭经验重调导致性能下降甚至撞机。有绝对值编码器的场合，电池维护是必须落到台账上的项目。",
    "source": {
      "title": "汇川技术伺服系列用户手册（安装与维护章节）/ MS1-R 系列真绝对值伺服系统产品页",
      "chapter": "安装与维护 / 产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=908"
    },
    "tags": [
      "维护保养",
      "编码器",
      "散热"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-032",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某客户设备采用一台主站带 12 台汇川 SV660N 系列伺服驱动器组建 EtherCAT 网络，已稳定运行半年。近期设备在运行中偶发某一轴\"通讯超时/掉站\"报警，复位后可继续运行，发生位置不固定、时间间隔随机，且多在设备加速或附近大功率设备启动时出现。客户要求更换伺服驱动器。请给出排查思路与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1）先判断问题层级：多轴网络中偶发掉站、位置不固定、与加速或大功率设备启动相关，是典型的通信完整性/干扰问题特征，优先怀疑电磁干扰与物理链路，而不是马上更换驱动器；盲目换件无法解决干扰类问题。\n2）物理层排查：检查 EtherCAT 总线电缆的型号与屏蔽层处理、屏蔽层接地是否符合官方通信手册要求；总线电缆是否与动力线、变频器输出线、抱闸线捆扎在同一线槽内；是否存在过长线缆、转接端子、非标准水晶头压接；总线 IN/OUT 顺序与拓扑是否与主站组态一致；拖链与运动部位线缆是否有疲劳破损。\n3）接地与屏蔽：确认设备等电位接地是否规范、电柜内外屏蔽层是否单点/按官方要求接地，大功率设备（变频器、大功率伺服、焊机）启动瞬间的干扰是否通过地环路或空间耦合进入总线。\n4）供电与主站侧：确认控制电源是否稳定、24V 电源容量是否足够，是否存在与大功率负载共用电柜引入的电压跌落；核对主站通信周期与 SV660N 的能力设置是否留有裕量，组态与 ESI（XML）文件版本是否与实际从站匹配。\n5）诊断手段：利用主站的网络诊断/从站诊断信息（掉站时的错误计数、CRC 错误、丢失帧统计）定位受扰链路段落，采用分段隔离法（缩短链路、分离走线、替换某段线缆）验证干扰路径，而非整体更换设备。\n6）处理建议：按官方通信手册与线缆选型要求整改布线（总线与动力线分槽、缩短暴露长度、规范屏蔽接地），必要时增加磁环等抑制措施；整改后连续运行观察，并把整改前后诊断计数对比作为验证证据。\n7）沟通口径：向客户解释\"偶发掉站\"属于系统电磁兼容与安装工艺问题，建议按官方安装规范整改后再评估是否需要更换硬件；若整改后仍复现，再申请原厂技术支持做进一步分析。",
    "analysis": "本题考察多轴总线系统的故障定位能力。最常见误区是\"哪一轴报警就换哪一轴的驱动器\"——本案例中报警位置本身在变化，说明不是单台设备问题。排查要遵循物理层→接地与供电→组态的顺序，并用诊断计数做量化验证。干扰类问题整改靠的是布线、屏蔽与接地工艺，不是换件。",
    "source": {
      "title": "汇川技术 SV660N 系列伺服用户手册",
      "chapter": "EtherCAT 通信配置 / 安装与接线",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV660N",
      "EtherCAT",
      "通信组网",
      "故障排查"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "SRV-034",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某客户设备要出口欧洲，配套使用汇川伺服系统。客户向销售提出三点要求：一是产品必须满足欧洲的认证要求；二是设备要有功能安全设计，安全等级要能通过整机安全评估；三是希望取消伺服电机的编码器电池，避免电池出口运输的报备流程与后续维护。请结合汇川现有产品系列给出选型建议与需要确认的事项。",
    "options": null,
    "answer": "参考答案要点：\n1）认证需求：优先考虑汇川的国际版（-INT）系列产品。SV680-*INT 系列国际版旗舰伺服驱动器官方说明符合 CE、UL、KC、EAC、UKCA 及功能安全认证；SV670-INT 系列国际版高端伺服驱动器官方说明符合 CE、UL、KC、EAC、UKCA 认证。此外官方还提供 SV660-INT（通用伺服驱动器折页）、MS1-R-INT 系列国际版伺服电机等国际版产品线。具体认证证书与覆盖的规格（不同 Size/功率段可能对应不同证书）需要按最终型号逐一核对官方证书文件。\n2）功能安全：SV680 系列官方标配 STO 与动态制动、标配 EtherCAT 总线 FSoE 功能（PROFINET 版为 PROFIsafe），并可通过扩展安全功能模块实现 SS1/SS2/SLS/SBC/SOS/SSM/SDI；官方还强调功能安全的伺服电机可提供驱动器安全监视功能所需的位置、速度信息，且驱动器与功能安全卡组合使用时可实现 FSoE。整机安全等级评估需结合安全回路设计、安全继电器/安全 PLC 与接线，不能只凭驱动器具备 STO 就承诺整机 SIL/PL 等级，应建议客户由整机安全评估方确认。\n3）取消编码器电池：汇川 MS1-R 系列真绝对值伺服系统官方说明可实现免电池采购、免电池库存管理与更换，彻底规避电池失效导致的意外停机风险，同时规避航空运输的电池出口限制与繁琐报备流程；该系列功率范围在 7.5kW 以内，涵盖 26bit、23bit 和 18bit，官方提供 MS1-R 系列免电池编码器伺服电机选型手册与 MS1-R-INT 系列国际版免电池编码器产品资料。选型时应按此手册确认可用机座号、惯量配置、编码器位数与制动器等选项。\n4）需要向客户确认的事项：目标市场的具体认证清单（CE 之外是否还需 UL、KC、UKCA、EAC 等）、整机功能安全目标等级与安全回路方案、电机安装尺寸与惯量要求、是否需要制动器/油封等机械选项、编码器位数要求（26/23/18bit）、通信方式与上位机总线类型、以及最终型号对应的官方证书与资料版本。\n5）落地动作：以国际版型号为基准出选型清单，向原厂或代理商索取对应型号的最新认证证书、用户手册与选型手册版本，并在样机阶段同步做整机 EMC 与安全验证。",
    "analysis": "本题考察出口项目的方案组合能力。常见失误包括：只回答\"有 CE\"而不区分标准版与国际版型号；把驱动器的 STO 直接等同于整机安全等级；以及把免电池编码器当成全系列通用能力——官方表述的免电池特性对应 MS1-R 系列真绝对值产品与相应国际版系列，需按选型手册逐项确认。出口项目还应把认证证书与整机 EMC 验证提前到样机阶段，避免量产前返工。",
    "source": {
      "title": "汇川技术 SV680-*INT 系列国际版旗舰伺服驱动器 / MS1-R 系列真绝对值伺服系统产品页",
      "chapter": "产品简介 / 产品特点",
      "url": "https://www.inovance.com/portal/product/details?productId=535"
    },
    "tags": [
      "SV680-INT",
      "真绝对值",
      "功能安全",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "SRV-041",
    "category": "servo",
    "type": "single",
    "difficulty": 3,
    "stem": "汇川 SV680 系列官方“安全保护”栏目共列出多少种功能安全功能，两种总线机型对应的安全总线功能分别是？",
    "options": {
      "A": "共 8 种（STO/SS1/SS2/SLS/SBC/SDI/SOS/SSM）；EtherCAT 对应 FSoE，PROFINET 对应 PROFIsafe",
      "B": "共 4 种（STO/SS1/SLS/SBC）；两种总线机型都走 FSoE",
      "C": "共 8 种；两种总线机型都走 PROFIsafe",
      "D": "共 3 种（STO/SBC/SSM）；仅 EtherCAT 机型支持安全总线功能"
    },
    "answer": [
      "A"
    ],
    "analysis": "SV680 官方原文为“8种功能安全STO/SS1/SS2/SLS/SBC/SDI/SOS/SSM，FSOE总线、PROFIsafe总线功能安全一网到底”，即 EtherCAT 机型对应 FSoE、PROFINET 机型对应 PROFIsafe，A 正确。B、D 把功能数量说少，D 还错误地认为只有 EtherCAT 支持安全总线；C 把总线对应关系说反。易混点是“标配”与“扩展”：SV680 标配 STO 与动态制动，FSoE/PROFIsafe 也是官方标注的总线安全功能，而 SLS/SOS 等其余功能需要功能安全卡扩展。另外客户常把变频器产品线上的“黑匣子/故障录波”当成伺服功能来问，SV680 官方页面并未标注黑匣子功能；3.5kHz 速度环带宽、26bit 编码器属于性能指标而非安全功能，宣传时不要混讲。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特性及优点（安全保护）；规格参数 / 安全功能",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "功能安全",
      "FSoE",
      "PROFIsafe"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-049",
    "category": "servo",
    "type": "multi",
    "difficulty": 3,
    "stem": "根据汇川官网对 SV680 系列龙门同步功能的说明，下列哪些描述是正确的？",
    "options": {
      "A": "适用于刚性与柔性龙门机构",
      "B": "内置龙门位置偏差与转矩保护，防止龙门机构扭转",
      "C": "官方在龙门同步功能说明后注明“SV680F 系列伺服的龙门同步功能正在开发中”",
      "D": "SV680 全系列（含 SV680F）的龙门同步功能均已量产可用"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "官方“功能完备”栏目原文为“伺服龙门同步功能，适用于刚性与柔性龙门机构，内置龙门位置偏差与转矩保护，防止龙门机构扭转”，并紧随一条注：“注：SV680F系列伺服的龙门同步功能正在开发中”，故 A、B、C 正确，D 与官方注文矛盾。这条注文是方案阶段最容易踩的坑：若客户选的是 SV680F（PROFINET 版本）并承诺龙门同步，可能面临功能尚未释放。双驱龙门项目选型时要把总线类型、龙门同步可用性、机械刚性/柔性方案与偏差保护阈值一起确认，并在样机阶段实测扭转与纠偏表现。",
    "source": {
      "title": "汇川技术 SV680 系列高性能旗舰型伺服驱动器产品页",
      "chapter": "产品特性及优点 / 功能完备（龙门同步）",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680",
      "龙门同步",
      "方案应用",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-055",
    "category": "servo",
    "type": "short",
    "difficulty": 3,
    "stem": "客户要为一台小型自动化设备选配汇川经济型伺服，在 SV605 与 SV630 之间犹豫。请说明这两款经济型伺服的官方差异、容量代码规则，以及选型需要向客户确认的项目。",
    "options": null,
    "answer": "参考答案要点：\n1）官方定位与功率段：SV630 官方定位“易安装调试，极致性价比”，功率范围 0.05kW~7.5kW；SV605 官方定位“小型自动化设备的经济之选”，功率范围 0.1kW~2kW。两者都采用以太网通讯接口，都支持 EtherCAT、Modbus、CANopen 和 CANlink，官方都标称 2kHz 速度环带宽与 18bit 高精度编码器，因此带宽与编码器位数不是两者的区别点，功率段与结构形态才是。\n2）差异化易用点：SV630 官方标注“配线简单，省去原点和限位，一键式调整”；SV605 官方标注“安装体积较上一代减小15%”与“免工具接线”。小电柜、密集安装场合优先考虑 SV605 的体积与接线便利。\n3）容量代码规则：SV605 规格表按电压等级分表——单相 220V 等级 Size A/B/C/D 对应 S2R8/S5R5/S7R6/S012（0.4/0.75/1/1.5kW）；三相 220V 等级为 S7R6/S012；三相 380V 等级为 T3R5/T5R4/T8R4（1/1.5/2kW，即代码以 T 开头对应 380V 等级）。代码中的数字不代表功率，必须逐行对照“驱动器功率”与“连续输出电流”两栏。\n4）制动与供电：SV605 规格表注明“支持外接制动电阻，无内置电阻”，频繁起停或大惯量负载要预留外接制动电阻的安装位置并核算阻值；同时确认现场是单相 220V、三相 220V 还是三相 380V 供电。\n5）需要向客户确认：负载转矩与峰值转矩、惯量比与最高转速、是否需要抱闸、定位精度与重复定位精度要求、上位机控制方式（脉冲还是总线及具体协议）、是否需要全闭环、电柜空间与散热条件、线缆长度与环境温度。\n6）结论与动作：先按功率点与供电电压把候选收窄到具体容量代码，再按体积、接线便利与功率余量在 SV605/SV630 之间取舍；若功率超过 2kW 或需要更高性能，应升级到 SV660/SV670/SV680 等系列，并用官方选型手册与选型工具复核后下单。",
    "analysis": "本题考察经济型产品的边界判断。常见失分点有三个：一是把“经济型”当成同一档产品直接比价，忽略了 SV630 功率范围达 7.5kW 而 SV605 只到 2kW；二是拿带宽或编码器位数去区分两者——官方参数相同，真正的区分点是功率段与体积/接线形态；三是只按功率挑容量代码而不看连续输出电流与电压等级（单相 220V、三相 220V、三相 380V 三张表完全不同，且 380V 等级代码以 T 开头）。把这几点讲清楚，可以避免到货后发现功率段不匹配或电柜装不下的返工。",
    "source": {
      "title": "汇川技术 SV605 / SV630 经济型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特点及优点 / 规格参数（各电压等级驱动器电气规格）",
      "url": "https://www.inovance.com/portal/product/details?productId=541"
    },
    "tags": [
      "SV605",
      "SV630",
      "选型",
      "容量代码"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-056",
    "category": "servo",
    "type": "short",
    "difficulty": 3,
    "stem": "客户要把一台原有“伺服电机+减速机”的转台改为直驱方案，请说明汇川直驱伺服产品的型号命名、官方提供的调试功能，以及方案落地需要确认的事项。",
    "options": null,
    "answer": "参考答案要点：\n1）产品归属与命名：汇川官网把 SV680L 归入“伺服 / 精密机电 / 直驱伺服驱动器”分类，官方定位“高性能直驱系列伺服”，功率范围 0.05kW~7.5kW，支持 Modbus 和 EtherCAT 通讯协议。官方资料下载区按控制方式区分型号：以“LN”为后缀的是 EtherCAT 总线型直驱电机伺服，如 SV680LN 直驱电机伺服手册包、功能手册、安全手册、硬件手册、选型手册；以“LP”为后缀的是脉冲型，如 SV680LP 直驱电机伺服手册包与功能手册；同目录还有 SV670LN/SV670LP 直驱电机伺服用户手册。另需注意汇川无框式直驱电机（如 MX3 第二代电主轴电机）归入“电机 / 无框式直驱电机”分类，配套时要确认电机与驱动器的对应关系。\n2）官方提供的调试功能：SV680L 官方说明“提供了刚性表设置、惯量辨识及振动抑制功能，使伺服控制简单易用，可快速实现精确的位置控制、速度控制、转矩控制”。直驱方案应先做惯量辨识，再按刚性表选择合适刚性档，最后用振动抑制压制高刚性下的机械共振。\n3）需要确认的事项：直驱电机类型（DD 力矩电机/无框电机）与连续转矩、峰值转矩、转矩波动要求；负载惯量与电机惯量比（直驱没有减速比，惯量不匹配无法靠减速机弥补）；最高转速与转矩的关系；编码器类型与分辨率、是否需要多圈绝对值；机械直连的同轴度、气隙与安装公差；是否需要抱闸、采用自然冷却还是水冷以及温升限制；上位机控制方式对应脉冲（LP）还是总线（LN）以及总线周期；机械共振点与是否需要陷波器/振动抑制参数。\n4）验证与交付：样机阶段应做转矩-转速能力实测、阶跃响应与定位精度测试、连续运行温升记录，最终参数做备份存档；直驱的价值在于去掉减速机间隙与维护，但代价是对机械精度与转矩余量更敏感，不能用“伺服功率够大”替代转矩核算。",
    "analysis": "本题考察直驱方案的完整落地能力。高频错误是只按功率选型，忽略直驱“低转速大转矩”的特性与惯量匹配要求，或者把 LP/LN 后缀搞混导致到货接口与上位机不匹配（脉冲上位机订成 LN 总线型、总线方案订成 LP 脉冲型）。另一个误区是认为直驱不需要调试：没有减速机缓冲后，机械共振与转矩波动更直接地反映在电流环上，刚性表、惯量辨识与振动抑制必须逐项做，否则表现为啸叫、定位抖动或过流报警。方案阶段把转矩、惯量比、冷却与共振点四项算清楚，比事后调参数更省时间。",
    "source": {
      "title": "汇川技术 SV680L 系列高性能直驱系列伺服产品页",
      "chapter": "产品概览 / 资料下载（SV680LN、SV680LP 直驱电机伺服手册）",
      "url": "https://www.inovance.com/portal/product/details?productId=427"
    },
    "tags": [
      "SV680L",
      "直驱",
      "调试",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "SRV-058",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某 3C 装配设备客户要做手机中框压装工位：行程短、节拍快，压装过程需要按位置-压力曲线分段控制，压力控制精度直接影响良率；同时转台定位要求高，希望机械端精度能直接参与反馈。客户目前在 SV605、SV630 与 SV670 之间摇摆，并要求“用最便宜的型号”。请给出选型判断、方案要点与现场验证建议。",
    "options": null,
    "answer": "参考答案要点：\n1）先明确能力边界再谈价格：SV605 与 SV630 都是经济型平台，官方标称 2kHz 速度环带宽、18bit 高精度编码器，官方卖点集中在“配线简单、省去原点和限位、一键式调整”（SV630）与“体积减小15%、免工具接线”（SV605），官方产品页未标注伺服压力控制功能与全闭环能力；SV670 官方定位“国产中高端装备的专业之选”，明确标注“内置伺服压力控制功能，实现3C产品精准力控”，并“支持ABZ正交脉冲全闭环功能，实现磨床1μm高精度进给”。力控与全闭环两项需求把方案锁定在 SV670 及以上，用经济型替代会直接牺牲与良率相关的力控能力。\n2）SV670 适用性说明：功率范围 0.05kW~7.5kW，支持脉冲、Modbus、CANopen、CANlink 和 EtherCAT 控制方式；官方标注“全系列标配动态制动功能，选配支持SIL3等级STO功能”。若设备有安全门/安全回路要求，STO 相关配置必须按该系列官方选型与手册资料提前确认，不能默认按标配处理。\n3）系统方案要点：力控方案要明确压力检测方式与信号走向（由驱动器内置伺服压力控制承担，还是上位机加力传感器闭环）、压力与位置曲线的分段数量与切换条件、压装到位判定与压力保持时间；全闭环方案要确认机械端反馈形式（ABZ 正交脉冲）、分频比与接线口定义，并核对机械端分辨率能否支撑目标精度。\n4）机械与工况核算：把压装峰值推力折算到电机侧的转矩与转速需求，确认惯量比、丝杠或凸轮机构的背隙与刚性；短行程高频次工况要核算电机温升与驱动器负载率，电柜散热余量要留足。\n5）现场验证建议：样机阶段做压力-位置曲线实测（不同速度下的力控跟随误差）、全闭环与半闭环定位精度对比、连续节拍温升与负载率记录、异常工况（来料偏差、卡料）下的力矩保护与报警响应测试；调试完成的参数做备份存档。\n6）沟通口径：向客户说明“最便宜”与“力控+全闭环”在能力上不可兼得，用 SV670 的官方功能点对应良率收益做价值说明；若客户仍要压成本，可以讨论非关键轴用经济型、关键压装轴保留 SV670 的混合配置方案。",
    "analysis": "本题考察“按工艺能力选型”而不是“按价格选型”的判断力。最常见的失误是拿经济型的带宽与编码器参数去类比中高端产品，忽略官方功能差异——伺服压力控制与 ABZ 全闭环只在 SV670 及以上系列标注，结果设备验收时良率不达标再改型，代价远高于当初的差价。另一个易错点是把 STO 当成 SV670 的标配（官方产品页表述为“选配支持SIL3等级STO功能”），安全回路方案没有提前确认会导致电柜返工。混合配置思路（关键轴高配、辅助轴经济型）是这类项目里既能保良率又能控成本的可落地做法。",
    "source": {
      "title": "汇川技术 SV670 高端型伺服驱动器产品页",
      "chapter": "产品概览 / 产品特性及优点（定位精准、集成工艺、安全可靠）",
      "url": "https://www.inovance.com/portal/product/details?productId=345"
    },
    "tags": [
      "SV670",
      "压力控制",
      "全闭环",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "SRV-060",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某弹簧机厂使用第三方异步电机加编码器方案驱动送料与成型轴，现场振动大、粉尘多，编码器平均每 3~4 个月损坏一次，夏季电机温升偏高并偶发过载报警。客户希望改用汇川方案提高可靠性、减少停机。请给出选型建议、可靠性设计说明与实施注意事项。",
    "options": null,
    "answer": "参考答案要点：\n1）先定性原因再选型：编码器周期性损坏、粉尘多、振动大属于机械与环境类问题，应先确认安装同轴度、联轴器形式、振动量级与粉尘/油污侵入路径，再针对工况选型；单纯换品牌而不解决环境与安装问题，寿命不会明显改善。\n2）平台选择：推荐 IS650 中大功率伺服系统（官方副标题“高端数控设备可靠之选”）。官方说明其“继承沿袭了IS620优秀的性能及易用性，并且针对大功率伺服使用环境相对恶劣，振动、粉尘较大以及价格较高的特点进行了一定的配置与产品设计的优化，能够满足诸如弹簧机、开平机、塑料机械、纺织机械、包装机械、金属加工机械等工业设备的要求”，弹簧机正是其官方列举的典型应用。\n3）可靠性设计与客户痛点的对应：高抗震动——“采用柔性连接的编码器结构，抗震能力达到5G”；安全可靠——“PTC保护功能，编码器IP67级别防护”，直接对应粉尘与污染环境下的编码器寿命问题；高性价比——“标配风冷电机，对比同功率的自然冷电机性价比更高”，有助于缓解夏季温升偏高；主轴驱动——“适配各种第三方异步及电主轴，高转速，高精度”，客户若希望保留部分第三方主轴也能兼容。\n4）电机配套：若功率需求较大并希望配套汇川伺服电机，可评估 ISMG 系列大功率伺服电机，官方标注功率覆盖 7.5kW~80kW、标配 23 位绝对值编码器、IP54 防护等级设计、耐冲击振动的编码器结构、独特电磁设计及风冷回路设计、内置热保护器，ISMG1 系列亦可加装 150N·m 制动扭矩的制动器。\n5）实施注意事项：核对原有第三方电机的反馈类型（编码器或旋转变压器），必要时配置官方 S65-K-RES 旋转变压器扩展卡并按其用户手册接线；核算转矩-转速曲线与过载倍数，确认夏季环境温度下的降额余量与电柜散热（风道、滤网维护）；规范动力线与编码器线走线（分离、屏蔽与接地）以抑制干扰类报警；同步整改安装同轴度、联轴器与减振措施。\n6）验证与交付：改造后记录负载率、温升与报警次数基线，连续运行一到两个生产周期后对比；建立编码器、滤网等易损件的点检与更换台账，把“从换件救火转为计划维护”作为交付价值。",
    "analysis": "本题考察恶劣工况下的可靠性方案能力。常见误区是“哪个便宜换哪个”或只升级驱动器而不处理振动、粉尘与散热根因——编码器反复损坏本质上是机械与环境问题，必须靠柔性编码器结构、IP67 编码器防护、风冷散热与安装整改组合解决。另一个易错点是把 IS650 与 ISMG 的角色混淆：IS650 是驱动器平台（官方标注同时适配第三方异步与电主轴），ISMG 是大功率伺服电机（7.5kW~80kW、23 位绝对值编码器、IP54），方案里要把驱动器、电机、反馈方式与降额余量作为整体核算，并保留改造前后的运行数据用于验证效果。",
    "source": {
      "title": "汇川技术 IS650 中大功率伺服驱动器 / ISMG 系列大功率伺服电机产品页",
      "chapter": "产品特点及优点（高抗震动、安全可靠、高性价比、主轴驱动）；ISMG 产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=272"
    },
    "tags": [
      "IS650",
      "ISMG",
      "故障排查",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "SRV-079",
    "category": "servo",
    "type": "single",
    "difficulty": 3,
    "stem": "某设备需要两台伺服电机组成龙门机构（龙门同步），上位机为西门子 PLC、要求与西门子通信运行，应优先选择下列哪个伺服系列/机型？",
    "options": {
      "A": "SV660N",
      "B": "SV680N",
      "C": "SV680F",
      "D": "SV660F"
    },
    "answer": [
      "C"
    ],
    "analysis": "两个条件要一起满足：一是龙门同步，官方把它列为 SV680 系列的功能（“伺服龙门同步功能，适用于刚性与柔性龙门机构，内置龙门位置偏差与转矩保护”，SV680 脉冲机型与总线机型均支持）；二是与西门子 PLC 通信，西门子 PLC 的原生现场总线是 PROFINET，而 SV680 命名规则中第②位产品类型明确写着 N=网络型（EtherCAT）、P=脉冲型、F=PROFINET 通信型，所以对接西门子应选 F 尾缀，两者叠加即为 SV680F。A、D 属于 SV660 平台，官方龙门同步功能并不涵盖该系列；B 的 SV680N 是 EtherCAT 机型，无法直接挂到西门子 PLC 的 PROFINET 主站上（需额外网关或主站模块）。必须提示客户的一点：官网 SV680 产品页对龙门同步有一行注文“SV680F 系列伺服的龙门同步功能正在开发中”，若项目要求龙门同步立刻可用，签技术协议前应向汇川确认该功能的释放版本，或改用 SV680N 配第三方总线方案。",
    "source": {
      "title": "汇川技术《SV680 系列旗舰型伺服驱动器》产品彩页（驱动器命名规则、龙门同步）与 SV680 产品页产品特性",
      "chapter": "产品命名规则及尺寸规格 / 伺服驱动器命名规则；产品特性及优点 / 功能完备（龙门同步）",
      "url": "https://www.inovance.com/portal/product/details?productId=312"
    },
    "tags": [
      "SV680F",
      "PROFINET",
      "龙门同步"
    ],
    "roles": [
      "engineer",
      "sales"
    ],
    "security": "public"
  },
  {
    "id": "SRV-087",
    "category": "servo",
    "type": "single",
    "difficulty": 3,
    "stem": "MS1H3-29C15CD-A33*R 电机（2.9kW，380V）推荐的 SV670 驱动器电流代码为？",
    "options": {
      "A": "T3R5",
      "B": "T5R4",
      "C": "T8R4",
      "D": "T012"
    },
    "answer": [
      "D"
    ],
    "analysis": "该电机是 180 机座、2.9kW、三相 380V 的中惯量机型，官方电机技术数据表给出的额定电流为 10.5A、最大电流 29.75A。按 380V 等级容量代码的连续输出电流对照：T3R5=3.5A、T5R4=5.4A、T8R4=8.4A，三者都小于电机额定电流 10.5A，带不动；T012 的连续输出电流约 11.9A（SV680 380V 规格表标 12.0A），才满足要求。官方配套表也印证：SV660N 选型一览表中 MS1H3-29C15CD-A331R 2.9kW 的推荐驱动器为 T012，SV680 标准型配置表中 SV680*T012I 的适配电机正是 2.9kW/3kW（含 MS1H3-29C15CD）。A、B、C 是按功率“看着差不多”往下选一档的典型错误，注意本型号在官方表中带 T8R4 时是 MS1H3-18C15CD（1.8kW），不能跨功率档套用。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（1.1 选型一览表、5.2.4.7 MS1H3-29C15CD-A33*R 电机技术数据）；《SV680 系列旗舰型伺服驱动器》彩页标准型配置表",
      "chapter": "1.1 选型一览表；电机技术数据 / 5.2.4.7 MS1H3-29C15CD-A33*R",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "SV670",
      "容量代码",
      "电流匹配"
    ],
    "roles": [
      "engineer",
      "sales"
    ],
    "security": "public"
  },
  {
    "id": "SRV-106",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某设备原使用 MS1H2-10C30CD-A33*R 电机（1.0kW，380V，额定电流 3.3A），现因工艺提速需要把功率升级到 2.0kW（380V），机械接口与安装尺寸希望保持不变，上位机沿用原 EtherCAT 总线方案。请推荐至少一款 2.0kW 电机的完整型号，并说明配套驱动器的额定输出电流至少应为多少、驱动器的电流代码应是什么，同时指出升级时需要复核的事项。",
    "options": null,
    "answer": "参考答案要点：\n1）2.0kW 电机型号推荐：MS1H2-20C30CD-A331R（100 机座、2.0kW、三相 380V、3000rpm、23 位多圈绝对值编码器、带油封不带抱闸）；若需断电保持负载则选 MS1H2-20C30CD-A334R（带油封带抱闸）。字段依据：20C=20×100=2000W，30C=3000rpm，D=380V，A3=23 位多圈绝对值编码器。该机型与原 1.0kW 机型同为 100 机座、3000rpm 转速段，机械安装尺寸一致，满足“接口与安装尺寸不变”的要求。\n2）电机关键参数（官方电机技术数据表）：额定转矩 6.36N·m、最大转矩 19.1N·m、额定电流 5.6A、最大电流 20A、转子转动惯量 2.92×10⁻⁴kg·m²（带抱闸 3.74×10⁻⁴kg·m²）。\n3）驱动器额定输出电流下限：驱动器的连续输出电流必须不小于电机额定电流，即 ≥5.6A；同时应按电机最大电流（20A）核对驱动器的最大输出电流能力。\n4）驱动器电流代码：按官方选型一览表，MS1H2-20C30CD（2.0kW、三相 380V）的推荐驱动器容量代码为 T8R4；380V 等级 T8R4 的连续输出电流为 8.4A（最大输出电流 20A），满足 5.6A 额定电流并有约 1.5 倍余量，最大输出电流也覆盖电机的 20A 峰值需求。若沿用 SV660N 平台写完整型号，EtherCAT 机型为 SV660NT8R4I；若改用 SV680 平台则是 SV680NT8R4I。\n5）不能选的代码：T3R5（3.5A）、T5R4（5.4A）都小于电机额定电流 5.6A，T5R4 与 5.6A 仅差 0.2A，看起来“接近”但实际会在加速与负载突变时触发过载/过流报警；T012 及以上属于更大容量，虽然能用但成本与体积增加，属于过度选型。\n6）升级时必须复核的事项：① 机械接口——同机座（100）安装尺寸一致，但要核对轴径、键槽与联轴器是否匹配，抱闸机型长度更长；② 惯量与转矩——功率翻倍后转子惯量由 1.78×10⁻⁴ 增至 2.92×10⁻⁴kg·m²，需重新核算负载惯量比与加减速转矩；③ 电气——驱动器 Size 由 T3R5 的 Size C 升到 T8R4 的 Size D，电柜安装空间、进出风间距、进线线径与断路器规格都要重算；④ 制动——2.0kW 惯量更大，频繁起停场合要核算再生制动能量，确认是否需要外接制动电阻（注意 S1R6/S2R8 无内置制动电阻，其余机型外接时需先取掉 P⊕、D 之间的短接片）；⑤ 线缆——动力线缆与编码器线缆要按新功率档位重新选型（MS1H2 4kW/5kW 与 2.0kW 档位线束截面不同），并确认长度与出线方向；⑥ 参数与工艺——沿用 EtherCAT 方案需重新做惯量辨识与增益整定（STune/ETune），核对电子齿轮比、转矩限幅与上位机加减速曲线；⑦ 复核下单——最终型号交原厂或代理商确认。",
    "analysis": "本题考察“功率升级”这类常见改造需求的处理方式：既要给出正确型号与电流代码，也要指出容易漏掉的复核项。核心判据是“驱动器连续输出电流 ≥ 电机额定电流”，因此 2.0kW/380V 电机（额定 5.6A、最大 20A）对应的容量代码是 T8R4（8.4A/20A），而不是看着数字接近的 T5R4（5.4A）。升级功率后最容易翻车的地方有三处：一是只换电机与驱动器，忘了驱动器 Size 变化带来的电柜空间与进线规格问题；二是忽略惯量增大后的负载惯量比与制动能量，现场表现为过电压或整定困难；三是沿用旧线缆，线束截面与接插件不匹配。把“功率—电流—尺寸—惯量—制动—线缆”六项按顺序过一遍，是该类改造的标准做法。",
    "source": {
      "title": "汇川技术《SV660N 系列伺服选型手册》PS00003006（1.1 选型一览表、电机技术数据表 MS1H2-20C30CD-A33*R、6.1.3 配套线缆一览表）",
      "chapter": "1.1 选型一览表（MS1H2 系列）；电机技术数据；6.1.3 配套线缆一览表",
      "url": "https://www.inovance.com/portal/product/details?productId=263"
    },
    "tags": [
      "MS1H2",
      "容量代码",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-378",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释伺服参数迁移的版本核对并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“先核型号分支、电机/反馈、手册版本与功能差异，再分步验证”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。不同分支的参数号和功能含义可能变化。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服参数迁移",
      "版本核对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-379",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 SV660F/N/P 的手册版本相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“F B01、N/P D01 分支和 H01-00 值分别核对”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。参数迁移前先锁分支和版本。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "伺服速查审计（已核验）与伺服与电机二次学习补充（2026-09）",
      "chapter": "知识点 T-S01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N/P",
      "手册版本"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-380",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 SV660F/N 的STO 端子上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“CN6 仅 -FS 机型适用，普通分支不能直接按安全版接线”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。安全端子接线须按硬件后缀确认。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV660F系列伺服用户/硬件/功能/选型手册-CN-B01（2026-08）",
      "chapter": "知识点 T-S02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660F/N",
      "STO 端子"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-381",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 SV660N S5R5 的单相接线并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“0.75 kW 单相 220 V 仅接 L1/L2”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。相制与端子定义要按同机座图。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV660N系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660N S5R5",
      "单相接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-382",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 SV660P 的外接制动相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“其他机座外接制动电阻前拆 P+-D 短接”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。断电后按机座手册处理高能量端子。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV660P系列伺服用户/硬件/功能/选型手册-CN-D01（2026-08）",
      "chapter": "知识点 T-S04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV660P",
      "外接制动"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-383",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 SV670NS 的安全功能集上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“六功能只属于对应 NS 安全分支且受编码器约束”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。其他编码器可仅 STO/SBC/SS1-t。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS",
      "安全功能集"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-384",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 SV670NS-INT 的FSoE并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“主站、安全配置和设备版本三方核对”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。功能安全需要独立验证。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV670NS-INT系列伺服用户手册（SIL2安全版）-CN-A01（2026-07）",
      "chapter": "知识点 T-S06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV670NS-INT",
      "FSoE"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-385",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 SV680N 的安全电机相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“SS1-r/SS2/SOS/SLS 等扩展功能按手册配安全电机”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。安全系统要核对电机反馈和认证条件。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680N",
      "安全电机"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-386",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 SV680 STO 的输入电平上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“STO1/STO2 双通道同时高，24 VDC±15%”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。STO 不是软件急停。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 STO",
      "输入电平"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-387",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 SV680 安全布线的线缆长度并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“安全 DI/DO 与安全开关最大 30 m”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。安全线缆和短路防护按安全手册。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 安全布线",
      "线缆长度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-388",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MS1 抱闸的垂直轴相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“抱闸只保持停止负载，不能动态制动”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。高风险轴要验证制动时序。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "垂直轴"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-389",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MS1 抱闸的供电上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“独立 24 V 供电，电机输入至少 21.6 V”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。压降和线径要实测。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸",
      "供电"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-390",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MS1 抱闸线的线径并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“至少 0.5 mm²，并核对线长压降”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。抱闸供电必须在电机端达标。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1 抱闸线",
      "线径"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-391",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MS1-R 的接线顺序相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“先连接主回路和 PE，再连接编码器线”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。避免电位差损坏反馈。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "接线顺序"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-392",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MS1-R 的拖链弯曲上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“固定线 5 倍外径、拖链线 10 倍外径”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。现场移动工况应使用相应线材。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MS1-R",
      "拖链弯曲"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-393",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 E730/E731 的电池测量并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“用 1 kΩ 外接负载测量编码器电池电压”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。只保留已核验故障码，不猜其他代码。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MS1-R系列伺服电机安装/选型手册-CN-A05/B04",
      "chapter": "知识点 T-S15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "E730/E731",
      "电池测量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-394",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 SV680 EtherCAT 的物理拓扑相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“100Base-TX 全双工 100 Mbit/s，节点间小于 100 m”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。布线与拓扑要按通信手册。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "物理拓扑"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-395",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 SV680 EtherCAT 的通信对象上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“CoE、PDO、SDO、DC 按主站与驱动对象字典核对”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。周期同步和对象映射分别验证。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 EtherCAT",
      "通信对象"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-396",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 EtherCAT PDO 的映射修改并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“先使 PDO 无效；写 0 清除映射子索引”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。状态机和映射操作按手册顺序。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "EtherCAT PDO",
      "映射修改"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-397",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 CiA 402 6060h 的模式值相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“1/3/4/6/8/9/10 对应位置/速度/转矩/回原/CSP/CSV/CST”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。切模式还需确认状态机与 PDO。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "CiA 402 6060h",
      "模式值"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-398",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在伺服回原的机械基准上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“有弹性的机械极限不宜作高精度原点”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。现场机械设计与模式表一致。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "伺服回原",
      "机械基准"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-399",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 SV680 的反馈配对并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“编码器协议、位数、电池和安全电机按同机座配对表核对”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。尤其全闭环和安全功能要闭环验证。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680",
      "反馈配对"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-400",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 SV680 V6 的多圈保持相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“V6 免电池；A6/S6 多圈按电池保持条件验收”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。更换/断电后多圈位置应验证。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "SV680N系列伺服硬件/通信/调试/安全手册 C00/C06/A05",
      "chapter": "知识点 T-S22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "SV680 V6",
      "多圈保持"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-401",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 IS810N-INT 的多机母线上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“共直流母线与独立 24 V 控制电源应分开核对”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。系统接线图与模块规格要一致。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810N-INT",
      "多机母线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-402",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 IS810F 的电源范围并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“直流母线 537～679 V，控制 21.6～26.4 V”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。测量应在对应端子进行。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "IS810N-INT系列标准多机传动伺服用户手册-CN-C08、IS810F系列伺服用户手册-CN-B04",
      "chapter": "知识点 T-S24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F",
      "电源范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-403",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 IS810F PN 的启动控制字相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“报文 1 的 16#47E→16#47F 顺序按指南验证”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。报文类型与主站工艺对象必须配套。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS810F PN",
      "启动控制字"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-404",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 PN 报文的位置控制上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“3/102 为 PLC 工艺对象中央位置控制，111 为基本定位器增强”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。不能把不同报文的控制字和功能块混用。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PN 报文",
      "位置控制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-405",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 PROFINET IRT 的现场配置并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“按真实拓扑组态，最短 500 μs；S7-1200 不支持 IRT”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。同步需求先核对主站硬件。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "IS620F/IS810F PN总线伺服应用指南 V1.07（历史范围仅作版本边界）",
      "chapter": "知识点 T-S27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "PROFINET IRT",
      "现场配置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-406",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 IS650N-PLUS 的主轴调试相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“核对定向、刚性攻丝、反馈与全闭环配套”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。主轴工况还需机械/电机和 PG 证据。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "主轴调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "SRV-407",
    "category": "servo",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 IS650N-PLUS 的环境降额上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。技术方向：本节 120 道选择、90 道判断、60 道填空、30 道主观。共用基础题帮助统一型号与功能语言，专属题按照岗位决策和现场工作分层。",
    "options": null,
    "answer": "评分要点：①核心结论为“7.5～22 kW 超过 45 ℃、37～220 kW 超过 40 ℃，均每 ℃降额 1.5%”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。温度规则按机座功率分组。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "IS650N-PLUS系列伺服用户手册-CN-A03（2025-11）及安全手册",
      "chapter": "知识点 T-S29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "IS650N-PLUS",
      "环境降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-001",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD200 系列灵巧型矢量变频器（单相 220V 机型）的功率范围是多少？",
    "options": {
      "A": "0.4~1.5kW",
      "B": "0.4~2.2kW",
      "C": "0.4~3.7kW",
      "D": "0.75~5.5kW"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD200 官方规格表标明：单相 220V 机型功率范围 0.4~2.2kW，三相 380V 机型为 0.4~3.7kW。C 项 0.4~3.7kW 是三相 380V 机型的功率段，最容易被误选；A、D 项数值官网均无对应，属编造。销售在给小型设备（如木工、包装、物流输送）配型时，要先确认现场是单相还是三相进线，再对应查功率段，不能把两个电压等级的功率段混用。",
    "source": {
      "title": "MD200系列灵巧型变频器产品页（规格参数）",
      "chapter": "规格参数表：电网电压 / 功率范围",
      "url": "https://www.inovance.com/portal/product/details?productId=71"
    },
    "tags": [
      "MD200",
      "选型",
      "功率段"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-002",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD520 系列高性能矢量变频器在无编码器开环矢量（SVC）控制下，0Hz 时最大可输出多少转矩？",
    "options": {
      "A": "100%",
      "B": "120%",
      "C": "150%",
      "D": "180%"
    },
    "answer": [
      "C"
    ],
    "analysis": "MD520 官网产品特性明确写明『0Hz 最大 150% 出力，开环矢量调速范围可达 1:500』，因此 C 正确。180% 是 MD200 规格表中『180% 额定电流 2s』的过载电流值，属过载能力范畴而非 0Hz 转矩，是最典型的混淆点；120%、100% 官网无此表述。现场把 0Hz 转矩与短时过载能力混为一谈，会导致起重、挤压类负载选型偏小。",
    "source": {
      "title": "MD520高性能矢量变频器产品页（产品概览）",
      "chapter": "产品特性及优点：性能升级",
      "url": "https://www.inovance.com/portal/product/details?productId=320"
    },
    "tags": [
      "MD520",
      "矢量控制",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-003",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD800 标准型与 MD810 高性能多机传动变频器，二者最本质的架构差异是什么？",
    "options": {
      "A": "MD800 支持永磁同步电机，MD810 只支持异步电机",
      "B": "MD800 采用整流单元与逆变单元分离的共直流母线模块化架构，MD810 可搭载 23bit 绝对值编码器实现更高精度驱动",
      "C": "MD800 只能单机使用，MD810 只能多机使用",
      "D": "MD800 用于高压场合，MD810 用于低压场合"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网对 MD810 的描述明确其为『新一代低压多点传动系统』，『与 AM610 / H3U 等 PLC 高速总线组网，实现一网调试、一网驱控，兼容异步及同步伺服电机，搭载 23 bit 绝对值编码器』；MD800 则是面向 OEM 小功率多点传动应用的标准型多点传动平台。A 项把电机类型支持说反（MD810 反而支持同步伺服电机）；C、D 项均为编造，两者同属低压多机传动，不是按高压/低压分工。多机传动的核心价值在于共直流母线、模块化组合与统一组网调试。",
    "source": {
      "title": "MD810系列标准型多机传动变频器产品页 / MD800系列标准型多机传动变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "MD800",
      "MD810",
      "多机传动",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-004",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 CS710 系列起重专用变频器可通过选配什么组件，实现变频器内置的防摇、抓斗等复杂起重工艺控制？",
    "options": {
      "A": "PG 编码器卡",
      "B": "起重工艺卡",
      "C": "Profibus-DP 通信卡",
      "D": "IO 扩展卡"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网对 CS710 的描述为『可对异步电机实现高性能的电流矢量控制、可支持起重工艺卡选件，实现变频器内置防摇、抓斗等复杂起重工艺控制』，故选 B。PG 编码器卡解决的是闭环速度/位置反馈精度，通信卡解决的是与主控 PLC 的数据交互，IO 扩展卡解决的是端子数量不足——三者都不承载防摇、抓斗这类起重工艺算法，这是本题最主要的干扰逻辑。",
    "source": {
      "title": "CS710系列起重专用变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=85"
    },
    "tags": [
      "CS710",
      "起重",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-012",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD310 系列紧凑多功能型变频器标配的通信接口是哪种？",
    "options": {
      "A": "标配 RS485 通讯接口，支持 Modbus RTU 通讯",
      "B": "标配 EtherCAT 接口",
      "C": "标配 Profibus-DP 接口",
      "D": "标配 CANopen 接口"
    },
    "answer": [
      "A"
    ],
    "analysis": "MD310 官网产品介绍写明『MD310 标配 RS485 通讯接口，支持 Modbus RTU 通讯，可扩展 I/O 扩展卡、CAN 通信扩展卡』，故选 A。B、C、D 项的 EtherCAT、Profibus-DP、CANopen 在 MD310 上均属需通过扩展卡或其它系列才具备的能力（其资料清单中对应的是 MD310-CANL CANlink 通信扩展卡用户手册），把扩展能力说成标配会造成报价漏项。现场接 PLC 时，若主控只有 Profibus-DP 或 EtherCAT，需要提前确认加装扩展卡的型号与数量。",
    "source": {
      "title": "MD310系列紧凑多功能型变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=72"
    },
    "tags": [
      "MD310",
      "通信组网",
      "Modbus"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-021",
    "category": "inverter",
    "type": "judge",
    "difficulty": 1,
    "stem": "根据汇川官网产品介绍，MD200 系列灵巧型矢量变频器采用 V/F 控制方式与无速度传感器矢量控制方式（SVC），具有高功率密度、高 EMC 规格设计、高防护性能等优势。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "该表述与汇川官网 MD200 产品介绍一致：『MD200 采用 V/F 控制方式、无速度传感器矢量控制方式（SVC），具有高功率密度、高 EMC 规格设计、高防护性能等显著优势』。需注意其规格表中明确标注『SVC 控制（仅三相）』——单相 220V 机型不具备 SVC 能力，销售在单相小功率场合不能承诺矢量控制性能，这是本题最容易踩的坑。",
    "source": {
      "title": "MD200系列灵巧型矢量变频器产品页",
      "chapter": "产品介绍 / 规格参数表：控制方式",
      "url": "https://www.inovance.com/portal/product/details?productId=71"
    },
    "tags": [
      "MD200",
      "控制方式",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-022",
    "category": "inverter",
    "type": "judge",
    "difficulty": 1,
    "stem": "根据汇川官网产品介绍，MD500 系列高性能矢量型变频器 30kW 以上机型标配内置 H 级绝缘等级直流电抗器，并采用独立风道设计以抵抗严酷污染环境。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "MD500 官网产品特性及优点写明『30kW 以上系列标配内置 H 级绝缘等级直流电抗器』，同时特性标签列有『独立风道设计』，产品介绍中亦有『独立风道设计，可抵抗严酷污染环境』的表述，故为正确。现场意义在于：30kW 以下机型若需要抑制谐波、提高功率因数，直流电抗器需另行外配，报价时不能默认全部随机附带；独立风道则要求安装时保证风道进出风不被遮挡，否则散热效果会大打折扣。",
    "source": {
      "title": "MD500系列高性能矢量型变频器产品页（产品概览）",
      "chapter": "产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=75"
    },
    "tags": [
      "MD500",
      "直流电抗器",
      "接线安装"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-027",
    "category": "inverter",
    "type": "short",
    "difficulty": 1,
    "stem": "请简述汇川 MD500 系列、MD500-PLUS 系列与 MD520 系列三者在汇川低压通用型变频器产品线中的定位差异，并各举一项官网标注的关键特性。",
    "options": null,
    "answer": "参考答案要点：\n1) MD500 系列：汇川汇集矢量变频技术的高性能变频器，凭借高性能电流矢量技术可轻松驱动感应电动机，定位经典通用高性能机型。官网标注关键特性：结构紧凑、全球通用、独立风道设计；产品特性及优点中列明 30kW 以上系列标配内置 H 级绝缘等级直流电抗器，满足 380~480V 三相电网需求，取得 CE、UL、CUL、ROHS 认证。\n2) MD500-PLUS 系列：通用高性能电流矢量变频器，主要控制和调节三相交流异步电机与三相交流永磁电机的速度和转矩，定位在 MD500 基础上的功能增强机型。官网标注关键特性：开环零速悬停、张力控制工艺、兼容主流总线、同步机异步机兼容；规格表载明支持 SVC / FVC / V/F 控制，通信支持 Modbus、Profibus-DP、CANLink、CANopen、Profinet、EtherCAT、Ethernet/IP。\n3) MD520 系列：新一代通用高性能电流矢量变频器，定位『全才驱动，安全易用』。官网标注关键特性：可匹配异步电机（IM）、永磁同步电机（PMSM）、同步磁阻电机（SynRM）；0Hz 最大 150% 出力，开环矢量调速范围可达 1:500；支持功能安全 STO、故障跛行、位置控制、抱闸控制、自由编程、张力应用、风机/水泵应用。\n4) 选型表达建议：MD500 主打成熟可靠与全球认证；MD500-PLUS 主打张力、零速悬停等工艺增强与总线兼容；MD520 主打电机类型全覆盖 + 0Hz 大转矩 + STO 功能安全，并兼容 MD500-PLUS 的选配件（PG 卡、通信卡、IO 扩展卡、选配支架）。",
    "analysis": "本题考察销售与工程师对同代产品线纵向关系的掌握。常见误区有三个：一是把 MD520 的 0Hz 150% 出力特性说成 MD500 也有；二是把 MD500-PLUS 的『开环零速悬停』与 MD520 的『位置控制、抱闸控制』混为一谈；三是忽略官网明确写出的 MD520『兼容 MD500-PLUS 的选配件』这一条，导致在既有 MD500-PLUS 现场做升级时重复采购附件。答对定位差异并能引用官网原文特性，才算真正掌握产品线。",
    "source": {
      "title": "MD500系列高性能矢量型变频器产品页 / MD500-PLUS系列高性能矢量型变频器产品页 / MD520高性能矢量变频器产品页",
      "chapter": "产品介绍 / 产品特性及优点 / 规格参数",
      "url": "https://www.inovance.com/portal/product/details?productId=320"
    },
    "tags": [
      "MD500",
      "MD500-PLUS",
      "MD520",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-030",
    "category": "inverter",
    "type": "short",
    "difficulty": 1,
    "stem": "请列举汇川变频器产品线在『起重』行业可提供的专用系列，并说明 CS710 与 CS740 在官网定位上的主要区别。",
    "options": null,
    "answer": "参考答案要点：\n1) 起重行业专用系列（据官网行业专用型低压变频器—起重子类）：CS290 系列起重专用变频器、CS710 系列起重专用变频器、CS300 系列起重专用变频器、CS200 施工升降机专用变频器、CS740 系列起重专用变频器。\n2) CS710 定位（据官网）：汇川新一代起重专用变频器，各项性能指标进一步提高，功能更加丰富；可对异步电机实现高性能的电流矢量控制，支持起重工艺卡选件，实现变频器内置防摇、抓斗等复杂起重工艺控制；主要用于驱动异步电机，应用于起重设备中的提升、平移、回转等驱动和控制场合；带有起重设备的抱闸机构控制功能。官网标注特性：高可靠性、功能强大、使用便捷、结构紧凑。\n3) CS740 定位（据官网）：欧式起重一体机，基于成熟产品平台和技术、针对通用起重行业设计开发的三合一高性能矢量变频器；集成了欧式起重机多轴的控制与驱动部分，功能强大，安装方便；内置限位保护、防超载、防超速、防遛钩，内置起重机安全控系统；用于驱动异步电机，应用于欧式起重机（含卷扬式和葫芦式）提升控制和驱动场合。官网标注特性：效率提升、体积缩小、安全可靠、起重机特色工艺。\n4) 主要区别归纳：CS710 是单机式起重专用变频器，核心价值在于起重工艺卡带来的防摇、抓斗等工艺控制与抱闸控制；CS740 是面向欧式起重机的三合一一体机，把多轴控制与驱动集成在一起，并内置限位保护、防超载、防超速、防遛钩等安全控制功能，安装更集成。",
    "analysis": "本题考察起重行业的专用产品认知。常见误区有三个：一是把 CS200 说成通用起重机型——其官网定位明确是『施工升降机专用变频器』；二是把 CS710 的防摇/抓斗工艺说成标配——官网表述为『可支持起重工艺卡选件』，即需选配工艺卡；三是把 CS740 说成单纯的多轴变频器，而忽略其『欧式起重一体机』『内置起重机安全控系统』的一体机属性。销售在起重项目报价时，工艺卡与安全功能的选配项最容易漏报。",
    "source": {
      "title": "起重行业专用型低压变频器产品列表（CS290/CS710/CS300/CS200/CS740 产品页）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/list?typeId=9"
    },
    "tags": [
      "CS710",
      "CS740",
      "起重",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-035",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD880 系列在官网产品资料中的完整定位表述是？",
    "options": {
      "A": "标准型多机传动变频器，面向传统 OEM 行业小功率多点传动场合",
      "B": "高性能工程型变频器，是汇川高端变频调速产品技术平台，分为单机传动和多机传动两种拓扑形态，电压等级涵盖 400V 和 690V，功率范围覆盖 3.7kW~5600kW",
      "C": "紧凑型通用变频器，是小型自动化设备的经济之选",
      "D": "混合碳化硅高速变频器，面向鼓风机、空压机等高速流体场景"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网 MD880 风冷型多机传动变频器产品介绍原文为：『MD880 系列高性能工程型变频器是汇川高端变频调速产品技术平台，分为单机传动和多机传动两种拓扑形态，是一款定位于高端传动应用、高性能、高可靠性的驱动产品。电压等级涵盖 400V 和 690V 电压的需求，功率范围覆盖 3.7kW~5600kW』，故选 B。A 项是 MD800 标准型多机传动的定位描述，B 项之外最容易混淆的就是它；C 项是 MD600 紧凑型变频器的定位；D 项是 MD520HS 混合碳化硅高速变频器的定位。现场做方案时，MD880 属于工程型高端平台，与 MD800/MD810 这类 OEM 多传平台不在同一层级，报价与技术交流时不能混用定位话术。另需注意官网产品分类：MD880 在汇川官网归入「工业自动化—变频器—工程型变频器」分类下的多机传动与单机传动（MD700/MD800/MD810 则归入「低压变频器—多机传动」），分类路径本身就印证了两者不是同一层级产品。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页（产品介绍）",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "工程型变频器",
      "选型",
      "定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-037",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD880LC-01S 水冷型单机传动变频器，官网对其产品定位与能力的描述是？",
    "options": {
      "A": "为应对船舶、盾构机械和海上石油平台开发的新一代工程型水冷变频产品，可用于控制交流异步感应电机、永磁同步电机，具有功率密度大、结构紧凑、可靠性高等特点，可实现 V/F 控制、无编码器矢量控制（SVC）、有编码器矢量控制（FVC）",
      "B": "面向煤矿井下的矿用隔爆兼本质安全型水冷变频器，采用三电平拓扑与 SVC 矢量控制",
      "C": "面向数据中心的电池模拟器专用变频器",
      "D": "面向小型自动化设备的经济型风冷变频器，主要控制三相交流异步机转速"
    },
    "answer": [
      "A"
    ],
    "analysis": "官网对 MD880 水冷单传产品的表述为：『MD880 水冷单传产品，是汇川技术设计应对船舶、盾构机械和海上石油平台开发的新一代工程型水冷变频产品，可用于控制交流异步感应电机、永磁同步电机。具有功率密度大、结构紧凑、可靠性高等特点，可以实现电机的 V/F 控制、无编码器矢量控制（SVC）、有编码器矢量控制（FVC）』，故选 A。B 项描述的是防爆产品线（如 CM3000H 系列防爆变频一体机）的能力，水冷并非其唯一散热方式且矿用隔爆需专门资质；C 项是 MD880 家族中真实存在但用途完全不同的 MD880-DCP 系列电池模拟器专用变频器，作为干扰项容易让人误选；D 项是 MD600 紧凑型变频器的定位。现场在船舶、海工、盾构类项目中，水冷机型的冷却水系统设计与水质要求必须同步纳入方案，不能只按风冷思路报柜体散热。",
    "source": {
      "title": "MD880LC-01S水冷型单机传动变频器产品页（产品介绍）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=112"
    },
    "tags": [
      "MD880",
      "水冷",
      "单机传动",
      "船舶",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-038",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD880 产品族在设计上分为单机传动与多机传动两种拓扑形态。下列哪一型号属于该产品族中的水冷型多机传动变频器？",
    "options": {
      "A": "MD880-01S",
      "B": "MD880LC",
      "C": "MD880-DCP",
      "D": "MD880 系列多传产品扩展组件"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网 MD880LC 产品标题为『MD880LC 水冷型多机传动变频器』，产品介绍称其为『汇川技术全新打造的一款高端水冷变频调速产品，分为单机传动和多机传动两种拓扑形态』，应用于冶金、船舶、海洋钻机、盾构机、大功率水冷测试台等场合，故选 B。A 项 MD880-01S 是风冷型单机传动工程型变频器；C 项 MD880-DCP 是电池模拟器专用变频器，属于 MD880 家族的专用衍生型号，与传动拓扑无关；D 项是扩展组件而非完整传动单元。现场区分要点是看命名后缀：带 LC 表示水冷，带 01S 表示单机传动形态，多传与单传在直流母线结构和柜体布置上差异很大。",
    "source": {
      "title": "MD880LC水冷型多机传动变频器产品页（产品介绍）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=408"
    },
    "tags": [
      "MD880",
      "水冷",
      "多机传动",
      "拓扑形态",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-039",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 MD810 高性能多机传动变频器的官网产品口号与结构性特点表述是？",
    "options": {
      "A": "『多轴并联，化繁为简』，采用共母线拓扑搭配书本式结构，可节省系统配电成本、减少柜体尺寸",
      "B": "『全才驱动，安全易用』，支持异步电机、永磁同步电机与同步磁阻电机",
      "C": "『小型自动化设备的经济之选』，体积相较上一代减少 38%",
      "D": "『流程型工业连续生产非计划不停机的可靠之选』"
    },
    "answer": [
      "A"
    ],
    "analysis": "官网 MD810 产品页口号为『多轴并联，化繁为简』，产品概览中『创新驱动』一条写明『共母线拓补搭配书本式结构，节省系统配电成本，减少柜体尺寸』，故选 A。B 项『全才驱动，安全易用』是 MD520 的产品口号，而 MD520 是三电机类型兼容的通用机型，与多传拓扑无关；C 项是 MD600 紧凑型变频器的定位与体积指标；D 项是 HD9XT 新一代高可靠通用型高压变频器的口号，属于高压产品线。多机传动的核心卖点始终是共直流母线带来的配电与柜体成本下降，以及一网驱控带来的调试效率提升。",
    "source": {
      "title": "MD810高性能多机传动变频器产品页（产品概览）",
      "chapter": "产品概览：创新驱动",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "MD810",
      "多机传动",
      "共直流母线"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-040",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "根据汇川官网规格参数，MD580 高性能工程型变频器支持的最大多段速运行段数是多少？",
    "options": {
      "A": "8 段",
      "B": "16 段",
      "C": "7 段",
      "D": "32 段"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD580 官方规格表『个性化功能—多段速运行』一栏写明『通过控制端子实现最多 16 段速运行』，故选 B。A 项 8 段是很多第三方品牌变频器的常见段数，容易被凭经验误选；C 项 7 是 MD580 规格中另一个方向的数字（官网特性栏写『7 种通讯总线』），与段速无关；D 项 32 段在 MD580 规格中无出处。多段速在纺织、拉丝、流水线等需要按工艺切换固定速度的场合很常用，实际可用段数取决于控制端子数量与参数组分配，现场接线前应先按段数规划端子资源。",
    "source": {
      "title": "MD580高性能工程型变频器产品页（规格参数）",
      "chapter": "规格参数表：个性化功能—多段速运行",
      "url": "https://www.inovance.com/portal/product/details?productId=321"
    },
    "tags": [
      "MD580",
      "多段速",
      "参数配置"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-041",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "根据汇川官网规格参数，MD580 高性能工程型变频器支持的 V/F 曲线方式共有几种？",
    "options": {
      "A": "三种",
      "B": "四种",
      "C": "五种",
      "D": "六种"
    },
    "answer": [
      "C"
    ],
    "analysis": "MD580 官方规格表『基本参数—V/F 曲线』一栏写明『五种方式：直线 VF、多点 VF、平方 VF、1.2/1.4/1.6/1.8VF 次方、VF 分离』，故选 C。A、B、D 项的数量均与官网不符。现场容易混淆的是：平方 VF 适用于风机水泵类平方转矩负载，直线 VF 适用于恒转矩负载，多点 VF 用于需要自定义折线的特殊工艺，VF 分离则常用于需要独立设定电压与频率关系的场合（如电磁制动、部分同步机启动）。把 V/F 曲线方式与加减速曲线（直线或 S 曲线）搞混，是参数配置时的常见错误。",
    "source": {
      "title": "MD580高性能工程型变频器产品页（规格参数）",
      "chapter": "规格参数表：基本参数—V/F 曲线",
      "url": "https://www.inovance.com/portal/product/details?productId=321"
    },
    "tags": [
      "MD580",
      "V/F控制",
      "参数配置"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-044",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "某客户拟对现有老旧直流调速传动系统做整体升级，产线连续生产、不允许非计划停机，且现场电网波动较大。根据汇川官网对高压变频器的描述，下列哪一产品最贴合『流程型工业连续生产非计划不停机的可靠之选』这一定位，并具备扩宽至 0%~130% 的电网穿越能力？",
    "options": {
      "A": "HD9XS 系列通用型高压变频器",
      "B": "HD9XT 系列新一代高可靠通用型高压变频器",
      "C": "HD5X 系列通用型高压变频器",
      "D": "HD90P 系列高压变频电源"
    },
    "answer": [
      "B"
    ],
    "analysis": "HD9XT 官网产品口号为『流程型工业连续生产非计划不停机的可靠之选』，产品特点中『兼容稳定』一条写明『电网穿越能力扩宽至 0%~130%，电网适应性更强』，且『体积较上代产品减少约 40%』『单元防护效果可达 IP50』，故选 B。A 项 HD9XS 官网定位为紧凑型单元级联型通用高压变频器，最高输出电压等级 13.8kV，并无『非计划不停机』与 0%~130% 电网穿越的表述；C 项 HD5X 是基于 HV-IGBT 应用、单元级联架构的超大功率水冷型高压变频器，面向天然气管道压缩机、LNG 制冷压缩机、抽水蓄能软启动、大型风洞等场合；D 项 HD90P 是高压变频电源，针对港口变频电源应用设计，也可用于 50Hz 转 60Hz 等频率转换场合，不是通用传动型号。高压项目投标时，电网穿越能力与防护等级往往直接写进技术协议，必须按系列逐项核对。",
    "source": {
      "title": "HD9XT系列新一代高可靠通用型高压变频器产品页（产品特点）",
      "chapter": "产品特点：节省空间 / 可靠耐用 / 兼容稳定",
      "url": "https://www.inovance.com/portal/product/details?productId=534"
    },
    "tags": [
      "HD9XT",
      "高压变频器",
      "电网穿越",
      "选型",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-049",
    "category": "inverter",
    "type": "multi",
    "difficulty": 1,
    "stem": "根据汇川官网产品介绍，MD610 系列标准型变频器针对风机水泵类应用预置了多个行业工艺宏。下列哪些功能是该系列官网明确列出的？（多选）",
    "options": {
      "A": "转速追踪再启动、瞬停不停",
      "B": "节能控制、故障后自动复位、火灾模式",
      "C": "水泵休眠、水泵出入压力检测、止回阀检测",
      "D": "该系列基于 MD630 产品研发，继承其体积紧凑、数字智能、稳定可靠等特点，控制上支持异步电机和同步电机的驱动算法",
      "E": "该系列全系支持 690V 电压等级输入"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B、C 三项均逐项对应 MD610 官网产品介绍原文：『基于 MD630 产品研发，针对风机水泵类应用，预置多个行业工艺宏，支持转速追踪再启动、瞬停不停、节能控制、故障后自动复位、火灾模式、水泵休眠、水泵出入压力检测、止回阀检测等功能』，其中 D 项也是同一段原文的后半部分『同时继承了 MD630 产品体积紧凑、数字智能、稳定可靠等特点；在控制上支持了异步电机和同步电机的驱动算法，满足 CE 和 UL 认证要求』。E 项错误：MD610 官网资料中电压等级为三相 380V 等级（属低压通用型变频器分类），690V 等级是 MD580 高性能工程型变频器规格表中 690V 系列（5.5kW~250kW）的能力，把不同系列的电压等级互相套用会导致选型直接失败。MD610 官网应用定位为陶瓷、锂电、锻压、风机、水泵等通用传动市场。",
    "source": {
      "title": "MD610系列标准型变频器产品页（产品介绍）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=940"
    },
    "tags": [
      "MD610",
      "风机水泵",
      "工艺宏",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "INV-050",
    "category": "inverter",
    "type": "judge",
    "difficulty": 1,
    "stem": "根据汇川官网产品资料，MD810 高性能多机传动变频器的结构性优势在于采用共母线拓扑搭配书本式结构，可节省系统配电成本、减少柜体尺寸；同时支持多种现场总线通讯，内置多电机驱动算法，并支持位置控制、多轴同步、负荷分配等应用功能。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "该表述与官网 MD810 产品概览逐条对应：『创新驱动』一条为『共母线拓补搭配书本式结构，节省系统配电成本，减少柜体尺寸』；『配置丰富』一条为『支持多种现场总线通讯，内置多电机驱动算法，满足多场景应用需求』；『功能强大』一条为『支持位置控制，多轴同步，负荷分配等高端应用功能』。现场价值在于：共直流母线让多台逆变单元共享整流单元，电机减速时的再生能量可在母线内被其他轴吸收，减少制动电阻与配电容量；负荷分配功能则用于多电机刚性连接的场合（如长皮带、多辊驱动），避免个别轴过载。需要注意的是，负荷分配与多轴同步属于需要正确组态与整定的功能，不是上电即用。",
    "source": {
      "title": "MD810高性能多机传动变频器产品页（产品概览）",
      "chapter": "产品概览：创新驱动 / 配置丰富 / 功能强大",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "MD810",
      "多机传动",
      "共直流母线",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-061",
    "category": "inverter",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 CL100 系列拉丝机一体机支持壁挂式安装、产品集成度高，内置____、____和____三路变频输出，对外可提供 DC 24V 输出，可连接抱闸、触摸屏等设备。",
    "options": null,
    "answer": [
      "主拉",
      "收线",
      "排线"
    ],
    "analysis": "官网 CL100 系列产品介绍原文为『内置主拉、收线和排线三路变频输出，对外可提供 DC 24V 输出，可连接抱闸、触摸屏等设备』，故三空依次为主拉、收线、排线。易错点有两个：一是把这三路输出改写成『主机、收卷、张力』等其它叫法——拉丝机行业及汇川资料的规范叫法就是主拉、收线、排线，报价与技术协议沟通时必须沿用官方命名，否则容易与客户方工程师对不上口径；二是只记住『三路输出』，却不知道 CL100 是针对拉丝机行业定制的专用一体机（资料中还内置摆杆拉丝机与无摆杆拉丝机工艺包，并可选配 PLC 与汇川物联网模块），误当成普通通用变频器去选型。销售与采购在拉丝机项目上应同时确认是否需要选配 PLC 与物联网模块，这部分属于易漏报的选配项。",
    "source": {
      "title": "CL100系列拉丝机一体机产品页（产品介绍）",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=101"
    },
    "tags": [
      "CL100",
      "拉丝机一体机",
      "选型",
      "方案应用"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-062",
    "category": "inverter",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 CP320 系列空压机一体机是一款通用高性能电流矢量变频器，主要用于三相交流____电机的 SVC 控制，并支持扩展____通信功能。",
    "options": null,
    "answer": [
      "同步",
      "Modbus"
    ],
    "analysis": "官网 CP320 系列产品介绍明确『主要用于三相交流同步电机的 SVC 控制……增加了用户可编程功能及后台监控软件，支持扩展 Modbus 通信功能』，故两空为『同步』与『Modbus』。本题最典型的错误是把 CP320 与同为空压机专机的 CP200、CP650、CP700 混为一谈：CP320 官网标签是『同步电机、SVC 控制、超强过载』，核心卖点是对三相交流同步电机的无速度传感器矢量控制；CP650 是空压机单变频一体机，CP700 系列则含 CP700（双变频和工频控制）与 CP701（双变频控制）两个机型。采购在下单前必须先确认压缩机主机是同步电机还是异步电机，否则机型与控制方式都会配错；同时要留意 Modbus 属于扩展能力而非标配总线，通信模块要单独计入清单。",
    "source": {
      "title": "CP320系列空压机一体机产品页（产品介绍）",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=92"
    },
    "tags": [
      "CP320",
      "空压机",
      "选型",
      "通信组网"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-063",
    "category": "inverter",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 MD100P 系列水泵一体机采用永磁同步电机，同步机效率按____设计，防护等级为____，EMC 标配过____标准设计，工作温度范围为 -25℃~55℃。",
    "options": null,
    "answer": [
      "IE5",
      "IP55",
      "C2"
    ],
    "analysis": "三项均取自 MD100P 系列产品页的产品特性条目：『同步机效率 IE5 设计，高效节能』『IP55 高防护设计，防尘防水』『EMC 标配过 C2 标准设计』。易错点有三个：一是把 IE5 记成 IE3 或 IE4，IE5 是该系列官网标注的同步机效率设计等级，也是水泵节能改造方案里最核心的卖点，写低了等于自降竞争力；二是把防护等级与工作温度混淆，IP55 是防尘防水等级，-25℃~55℃ 是工作温度范围，两个『55』含义完全不同，填答与规格书核对时都要写明单位；三是漏记 EMC 过 C2 标准这一条，C2 属于工业环境可用的等级，对电磁兼容有要求或需与敏感仪表同柜安装的场合必须逐项核对。采购做规格书比对时不能只看功率与电压两项。",
    "source": {
      "title": "MD100P系列一体机产品页（产品介绍）",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=81"
    },
    "tags": [
      "MD100P",
      "水泵一体机",
      "防护等级",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-067",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "在变频器选型中，以下哪个系列属于多传动系统，适合复杂产线（如造纸、纺织多段同步）？",
    "options": {
      "A": "MD200",
      "B": "MD290",
      "C": "MD500",
      "D": "MD810 / MD800"
    },
    "answer": [
      "D"
    ],
    "analysis": "汇川官网把 MD810 定位为「新一代低压多点传动系统」，与 AM610 / H3U 等 PLC 高速总线组网，实现一网调试、一网驱控，兼容异步及同步伺服电机，搭载 23bit 绝对值编码器；MD800 是同属「低压变频器—多机传动」分类的标准型多点传动平台，面向传统 OEM 行业小功率多点传动应用。多传的本质形态是整流单元（型号字段 20M）与逆变单元（型号字段 50M）分离、共直流母线：多轴共享整流容量，某一轴减速或位势下放产生的再生能量可被同一母线上正在电动运行的其它轴吸收，官方口径可带来 5%~30% 节能，柜体尺寸与配电容量也随之下降，因此造纸、纺织印染、印刷包装这类多段同步产线正是它的主战场。A 项 MD200 是灵巧型小功率机型（单相 220V 0.4~2.2kW、三相 380V 0.4~3.7kW）；B 项 MD290 的控制方式官网仅标注 V/F；C 项 MD500 是高性能矢量型——三者都是「一台变频器带一台电机」的单传结构，既没有共直流母线，也不能一网调试一网驱控。",
    "source": {
      "title": "MD810 系列标准型多机传动变频器产品页 / MD800 系列标准型多机传动变频器产品页",
      "chapter": "产品介绍 / 产品概览：创新驱动（共母线拓扑搭配书本式结构）",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "MD810",
      "MD800",
      "多机传动",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-068",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "以下哪个应用场景更适合使用变频器而非伺服？",
    "options": {
      "A": "手机中框精密点胶",
      "B": "中央空调的变流量控制（风机水泵）",
      "C": "工业机器人多关节协调",
      "D": "锂电卷绕设备的电子凸轮同步"
    },
    "answer": [
      "B"
    ],
    "analysis": "选型第一问永远是「负载要速度还是位置」。B 项中央空调的冷冻/冷却水泵与风机是典型平方转矩（风机水泵类）负载：转矩随转速平方变化，低频所需转矩很小，用 V/F 控制即可满足，只做管网/风量闭环下的转速调节与节能，汇川对应产品为 MD290（官网规格「控制方式」一栏仅 V/F，并配有 PID 功能，官网写明无需温度调节器即可实现温度、压力、流量控制运转）、MD610（针对风机水泵类应用预置多个行业工艺宏：水泵休眠、出入压力检测、止回阀检测、节能控制、转速追踪再启动等）以及 CA200/CA300/CA500 中央空调专用系列。A、C、D 三项都要求位置或严格同步：精密点胶要点位与轨迹重复精度，多关节机器人要插补与协调运动，锂电卷绕的电子凸轮要求主轴与从轴角度严格跟随，这些必须用伺服（SV660/SV680 系列 + MS1 系列电机）实现；变频器即使带编码器闭环，其位置环带宽、动态响应与运动控制功能（插补、凸轮、多轴同步）也不足以承担此类工艺。",
    "source": {
      "title": "MD290 通用型变频器产品页 / MD610 系列标准型变频器产品页",
      "chapter": "规格参数表：控制方式 / 产品介绍：风机水泵类应用工艺宏",
      "url": "https://www.inovance.com/portal/product/details?productId=74"
    },
    "tags": [
      "选型",
      "方案应用",
      "风机水泵"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-069",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "在变频器选型中，MD500 系列通常用于什么场合？",
    "options": {
      "A": "简单调速的经济型应用",
      "B": "高性能机床、起重等",
      "C": "风机水泵专用",
      "D": "中高压大功率场合"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD500 是汇川经典的高性能电流矢量型变频器，官网定位为「可轻松驱动感应电动机」的通用高性能机型，规格表控制方式为开环矢量（SVC）、闭环矢量（FVC）与 V/F，30kW 以上标配内置 H 级绝缘等级直流电抗器，采用独立风道设计以抵抗严酷污染环境，并取得 CE、UL、CUL、ROHS 认证——矢量控制能力与过载余量都明显高于经济型机型，因此适合机床、挤出机、拉丝机、输送机等需要低频大转矩和较高动态性能的场合。A 项「简单调速的经济型应用」对应 MD200 灵巧型与 MD290 通用型；C 项「风机水泵专用」对应 MD290、MD610 与水泵一体机 MD100P 等平方转矩专机——MD500 虽也能拖动风机水泵，但它不是为平方转矩负载优化的机型，用 MD290 成本更友好；D 项「中高压大功率」属于 HD9XS/HD9XT 等高压产品线与 MD880 工程型平台（400V/690V、3.7kW~5600kW）的范畴。专业提醒：起重设备的提升机构属位势负载，应优先按 CS 系列专用机（CS710/CS740 带抱闸时序控制与防摇工艺）选型，不能只凭「高性能」三个字往上套。",
    "source": {
      "title": "MD500 系列高性能矢量型变频器产品页",
      "chapter": "产品介绍 / 产品特性及优点（30kW 以上标配内置 H 级绝缘等级直流电抗器）",
      "url": "https://www.inovance.com/portal/product/details?productId=75"
    },
    "tags": [
      "MD500",
      "选型",
      "矢量控制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-071",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "下列变频器系列中，经济型、适合简单调速场合（如小型输送带）的是？",
    "options": {
      "A": "MD200",
      "B": "MD500",
      "C": "MD630",
      "D": "MD880"
    },
    "answer": [
      "A"
    ],
    "analysis": "MD200 是汇川灵巧型矢量变频器，官网定位小功率、成本敏感的经济型产品：单相 220V 机型功率段 0.4~2.2kW、三相 380V 机型 0.4~3.7kW，控制方式为 V/F（SVC 仅三相机型具备），过载能力 150% 额定电流 60s / 180% 额定电流 2s，采用书本型等高功率密度结构，面向木工、包装、物流输送等小型设备——小型输送带这类「只要能调速、不要求高动态」的场合正好对口。B 项 MD500 是高性能矢量型机型（SVC/FVC/V/F），能力过剩且成本更高，属于「大马拉小车」；C 项 MD630 是新一代标准/全球通用型平台（MD610 即基于 MD630 研发），定位高于经济型；D 项 MD880 是工程型高端传动平台（400V/690V、3.7kW~5600kW，面向冶金、造纸、船舶、盾构等大型设备），与经济型完全不在一个层级。提醒：MD200 单相机型不具备 SVC 能力，若小型输送带存在带料重载启动或需要低频大转矩，应改用三相进线机型或升级到 MD500 系列。",
    "source": {
      "title": "MD200 系列灵巧型矢量变频器产品页 / MD630 系列产品页",
      "chapter": "产品介绍 / 规格参数表：电网电压、功率范围、控制方式、过载能力",
      "url": "https://www.inovance.com/portal/product/details?productId=71"
    },
    "tags": [
      "MD200",
      "MD630",
      "选型",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-073",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "查看变频器型号「MD500-2R2-3B」，其中「2R2」通常表示？",
    "options": {
      "A": "额定电压 220V",
      "B": "额定功率 2.2kW",
      "C": "额定电流 2.2A",
      "D": "额定转矩 2.2N·m"
    },
    "answer": [
      "B"
    ],
    "analysis": "汇川型号中字母 R 是小数点的占位符（读作「点」），2R2 即 2.2，它落在功率代码位上，表示该机额定功率 2.2kW；同类写法还有 1R5=1.5kW、7R5=7.5kW、18R5=18.5kW（例如 MD290T7.5G/11PB 中的 7.5、MD810-50M4TD18.5G210 中的 18.5 都处在功率位）。同一功率段在现行订货型号中也常写作 MD500T2.2GB 形式（T 表示三相、G/P 表示机型、B 表示内置制动单元），两种书写形态是历史沿革造成的，报价与合同必须以商务系统确认的完整订货型号为准。A 项把功率位当成电压：电压等级在同一型号里由另一段字段表示——例如在售型号 MD500-2T1.1GB 中，2T 表示三相 220V 电压等级、1.1 才是功率位，与 2R2 无关；C 项量纲不成立——2.2kW 电机在 380V 下额定电流约 5A，在 220V 下约 10A 量级，都不可能只有 2.2A；D 项转矩单位是 N·m，变频器型号从不以转矩标注机型。现场核对铭牌时建议把「功率 / 电压等级 / G 还是 P」三项一起读，只看数字容易配错机型，尤其在 G 型与 P 型额定电流不同的情况下会直接导致过载跳机。",
    "source": {
      "title": "MD500 系列高性能矢量型变频器产品页",
      "chapter": "产品介绍 / 规格参数表：功率范围与电压等级（单相 200V 段、三相 220V 段、三相 380V 段）",
      "url": "https://www.inovance.com/portal/product/details?productId=75"
    },
    "tags": [
      "MD500",
      "型号命名",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-075",
    "category": "inverter",
    "type": "judge",
    "difficulty": 1,
    "stem": "变频器需要读取电机位置无需编码器拓展卡。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "变频器要读取电机的真实位置（转子角度/机械角度），必须取得位置反馈信号，也就必须安装编码器并配对应的编码器接口卡（PG 卡/扩展卡）——汇川的 MD38PG4 旋转变压器扩展卡、MD520-PG-S1 等 PG 卡就是为此类需求提供的选件。不配编码器与 PG 卡时，变频器只能工作在 V/F 或无速度传感器矢量控制（SVC）下，转速与转子角度依靠电机模型估算，用于调速尚可，但拿不到可直接用于位置控制与零速大转矩的真实位置量，估算值在低速与负载突变时误差更明显。因此「读取电机位置无需编码器扩展卡」判断为错。现场两个高频错误：一是把「内部能估算转速」当成「能读位置」；二是方案与报价漏配 PG 卡与编码器——需要 FVC 闭环或 0Hz 大转矩的场合，漏配会直接导致功能交付不出来，这是配套件漏项中最常见的一项。特例说明：MD810 这类多传系统的官网介绍写明「兼容异步及同步伺服电机，搭载 23bit 绝对值编码器」，属于系统层面的编码器支持能力，具体某机型是否还需另配卡件，应以该机型规格表与手册为准，不能一概而论。",
    "source": {
      "title": "MD500 系列高性能矢量型变频器产品页 / MD810 系列标准型多机传动变频器产品页",
      "chapter": "规格参数表：控制方式（FVC 需编码器反馈）/ 产品介绍：搭载 23bit 绝对值编码器；MD38PG4 旋变扩展卡资料",
      "url": "https://www.inovance.com/portal/product/details?productId=75"
    },
    "tags": [
      "编码器",
      "PG卡",
      "接线安装"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-077",
    "category": "inverter",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川整流模块无需搭配逆变模块即可正常使用。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "汇川多传系统的整流模块（型号字段为 20M，如 MD810-20M4T110G、MD810-20M4T45G120）的功能是把三相交流整流为直流母线电压，输出是直流，本身不产生变频变压的三相交流输出，无法直接驱动三相异步电机或永磁同步电机，必须与逆变模块（型号字段为 50M，如 MD810-50M4T-D18.5G）配套，才能构成完整的传动系统——这是多传「整流 + 逆变」共直流母线架构的基本前提，故本判断为错。现场两种典型误读：一是把整流模块当成「整台变频器」，按整流功率去报单机传动方案，结果交付物根本带不动电机；二是反过来忽略整流容量核算，只按各轴逆变功率简单相加，既不判断能量互馈工况，也不看整流单元「同功率可并机」的官方标注。补充说明：整流模块在系统中确有部件级用途（建立共直流母线、配合制动单元或回馈/有源整流处理再生能量），但这属于系统设计范畴，不等于「可以不配逆变模块独立正常使用」。",
    "source": {
      "title": "MD810 系列标准型多机传动变频器产品页（规格参数：整流单元与逆变单元分别列出）",
      "chapter": "产品介绍 / 规格参数表：变频器容量、输入电压（整流单元三相 380~480Vac，逆变单元直流输入）",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "多机传动",
      "整流单元",
      "MD810",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-078",
    "category": "inverter",
    "type": "fill",
    "difficulty": 1,
    "stem": "变频器选型时，主要依据的三个核心参数是：____、____、控制方式。",
    "options": null,
    "answer": [
      "负载类型",
      "功率"
    ],
    "analysis": "变频器选型的第一步永远是判断负载类型（恒转矩 / 风机水泵类平方转矩 / 起重提升类位势重载），它直接决定三件事：控制方式够不够用、机型代号选 G 还是 P、过载余量要留多少；第二步是功率——严格说是把电机铭牌额定电流与所选机型的额定输出电流做校核（要求变频器额定输出电流 ≥ 电机额定电流 × 工况系数，风机水泵取 1.0~1.1、恒转矩取 1.1~1.2、重载或频繁启停取 1.2 以上），因为同功率但电压等级不同、G/P 机型不同的产品额定输出电流差异很大，只看功率数字容易配错；第三项即题干已给出的控制方式（V/F、SVC、FVC）。故第一空填「负载类型」（表述为「负载特性」「负载性质」同样成立），第二空填「功率」（表述为「电机功率」「电机额定功率」同样成立）。常见错误是把电压等级或品牌价格当作核心参数——电压等级是硬性前提条件而非选型依据，按价格选型则会在过载能力与环境降额上留下隐患。",
    "source": {
      "title": "MD290 通用型变频器产品页 / MD200 系列灵巧型矢量变频器产品页",
      "chapter": "规格参数表：控制方式、额定输出电流、过载能力；功能码表：机型类型（1=G 型恒转矩、2=P 型风机水泵）",
      "url": "https://www.inovance.com/portal/product/details?productId=74"
    },
    "tags": [
      "选型",
      "负载类型",
      "G型P型"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-083",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD630 在机柜空间方面的正确结论。",
    "options": {
      "A": "安装无需间距",
      "B": "一定可以节省 90%",
      "C": "官网称可节省超过 30% 柜内空间",
      "D": "尺寸永远与 MD520 完全相同"
    },
    "answer": [
      "C"
    ],
    "analysis": "空间宣传应按实际机座尺寸和散热设计复核。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "机柜空间"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-086",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 MD800 的扩展通信，哪项与当前资料相符？",
    "options": {
      "A": "只能扩展 RS232",
      "B": "可扩展 PROFINET、EtherCAT、EtherNet/IP",
      "C": "扩展卡一律标配",
      "D": "不能扩展任何总线"
    },
    "answer": [
      "B"
    ],
    "analysis": "订货时要确认扩展卡和主站方案。",
    "source": {
      "title": "MD800 Series 产品页",
      "chapter": "知识点 D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "扩展通信"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-087",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD800 在控制方式方面的正确结论。",
    "options": {
      "A": "只有开环直流调速",
      "B": "只支持位置环",
      "C": "V/f 与 SVC，不能把 FVC 视为标配",
      "D": "全系列标配 FVC"
    },
    "answer": [
      "C"
    ],
    "analysis": "控制方式按当前手册，勿用相邻 MD810 功能套用。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "控制方式"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-090",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 MD800 型号的模块代码，哪项与当前资料相符？",
    "options": {
      "A": "代码只表示机柜颜色",
      "B": "1 为整流、0 为双轴逆变",
      "C": "0 为整流、1 为单轴逆变、2 为双轴逆变",
      "D": "0 为安全卡、1/2 为电压"
    },
    "answer": [
      "C"
    ],
    "analysis": "多机系统模块角色是 BOM 的第一层。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 型号",
      "模块代码"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-091",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD800 在STO 配置方面的正确结论。",
    "options": {
      "A": "任意型号都无条件 STO",
      "B": "逆变单元末尾 S 为 STO 选项",
      "C": "整流单元 B 一定是 STO",
      "D": "STO 只看电机功率"
    },
    "answer": [
      "B"
    ],
    "analysis": "STO 要按末尾 S 和对应安全手册确认。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "STO 配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-095",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD810 在产品定位方面的正确结论。",
    "options": {
      "A": "单相家用小型伺服",
      "B": "高压同步电机专用",
      "C": "标准低压多机传动变频器系统",
      "D": "只是一只整流电抗器"
    },
    "answer": [
      "C"
    ],
    "analysis": "系统采购要区分整流、逆变和母线。",
    "source": {
      "title": "MD810 Series 产品页",
      "chapter": "知识点 D36",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-098",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 MD810 逆变的额定直流输入，哪项与当前资料相符？",
    "options": {
      "A": "DC 24 V",
      "B": "AC 200～240 V",
      "C": "DC 537～679 V",
      "D": "DC 900～1200 V"
    },
    "answer": [
      "C"
    ],
    "analysis": "工作范围和额定范围需要分开看。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D39",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "额定直流输入"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-099",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD810 逆变在直流工作范围方面的正确结论。",
    "options": {
      "A": "DC 350～800 V",
      "B": "DC 537～679 V 是唯一可工作范围",
      "C": "AC 50 Hz",
      "D": "无上下限"
    },
    "answer": [
      "A"
    ],
    "analysis": "系统设计需要关注母线波动和保护。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D40",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "直流工作范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-101",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "围绕 MD810 整流 22/45 的制动代码，选出可写入核对表的说法。",
    "options": {
      "A": "所有功率都是 G1XX",
      "B": "G0XX 为内置制动",
      "C": "制动代码表示 EtherCAT",
      "D": "G1XX 为内置制动，G0XX 无内置制动"
    },
    "answer": [
      "D"
    ],
    "analysis": "110 kW 及以上制动方案另按外部 MDBUN 核对。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D42",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流 22/45",
      "制动代码"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-102",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 MD810 110 kW+ 的制动配置，哪项与当前资料相符？",
    "options": {
      "A": "标配内置制动电阻",
      "B": "外部 MDBUN 制动单元",
      "C": "无需任何制动措施",
      "D": "只靠 STO 消耗再生能量"
    },
    "answer": [
      "B"
    ],
    "analysis": "制动与能量回馈方案应按实际工况选。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D43",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 110 kW+",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-103",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD810 在电机与控制方面的正确结论。",
    "options": {
      "A": "支持同步/异步伺服电机，多轴可用于位置/同步/负载分配",
      "B": "不支持任何位置控制",
      "C": "只支持步进电机",
      "D": "只支持风机水泵"
    },
    "answer": [
      "A"
    ],
    "analysis": "产品页定位应结合反馈和控制模式核对。",
    "source": {
      "title": "MD810 Series 产品页",
      "chapter": "知识点 D44",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "电机与控制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-107",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD880 在整流形式方面的正确结论。",
    "options": {
      "A": "只接受外置伺服电机",
      "B": "只有基本型且不可回馈",
      "C": "只有 STO 型",
      "D": "基本型、回馈型、AFE 型"
    },
    "answer": [
      "D"
    ],
    "analysis": "需结合电网、再生能量和谐波要求选。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D48",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "整流形式"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-110",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 MD520 的输入规格，哪项与当前资料相符？",
    "options": {
      "A": "只接受 690 V 直流",
      "B": "三相 380～480 V、三相 200～240 V、单相 200～240 V 分表选型",
      "C": "电压不影响选型",
      "D": "所有型号固定单相 220 V"
    },
    "answer": [
      "B"
    ],
    "analysis": "三种输入表不可互相套用。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "输入规格"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-111",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD520 在最大输出频率方面的正确结论。",
    "options": {
      "A": "100 Hz",
      "B": "599 Hz",
      "C": "1500 Hz",
      "D": "50 Hz"
    },
    "answer": [
      "B"
    ],
    "analysis": "频率上限不代表电机可长期按该转速运行。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "最大输出频率"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-113",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "围绕 MD520 的防护等级，选出可写入核对表的说法。",
    "options": {
      "A": "无机柜要求",
      "B": "IP00 全系列",
      "C": "IP20/Type 1",
      "D": "IP67 可浸水"
    },
    "answer": [
      "C"
    ],
    "analysis": "安装防护需要按具体外壳和现场条件确认。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "防护等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-114",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "关于 MD520 的电网类型，哪项与当前资料相符？",
    "options": {
      "A": "电网型式不用核对",
      "B": "只能 TN",
      "C": "TN、TT、IT(Y) 可按手册条件使用",
      "D": "只能直流电网"
    },
    "answer": [
      "C"
    ],
    "analysis": "IT 系统还需按手册核对滤波和接地条件。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电网类型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-115",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "请从下列说法中选出 MD520 型号 B 字段在制动含义方面的正确结论。",
    "options": {
      "A": "B 表示 690 V 电压",
      "B": "B 表示内置制动单元/配置字段，须按功率机座表确认",
      "C": "B 表示 CANopen",
      "D": "B 保证所有功率都有制动电阻"
    },
    "answer": [
      "B"
    ],
    "analysis": "制动单元和制动电阻不是同一个部件。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 型号 B 字段",
      "制动含义"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-119",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD810 的载波范围时，应采用哪项？",
    "options": {
      "A": "全部固定 50 Hz",
      "B": "载波与模式无关",
      "C": "V/f 0.8～12 kHz，SVC/FVC 2～6 kHz",
      "D": "全部固定 16 kHz"
    },
    "answer": [
      "C"
    ],
    "analysis": "载波频率不同于输出频率。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "载波范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-120",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD810 的速度范围疑问，哪项答复有依据？",
    "options": {
      "A": "范围与电机无关",
      "B": "V/f 1:2000",
      "C": "V/f 1:50、IM SVC 1:100、FVC 1:1000",
      "D": "三个模式都是 1:1000"
    },
    "answer": [
      "C"
    ],
    "analysis": "性能值要注明对应模式与电机。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "速度范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-123",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD810 的冷却方案时，应采用哪项？",
    "options": {
      "A": "水冷可取代电气保护",
      "B": "仅自然冷却",
      "C": "风冷和水冷按具体模块选",
      "D": "所有模块都水冷"
    },
    "answer": [
      "C"
    ],
    "analysis": "冷却配件和柜内热设计要同系统核对。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "冷却方案"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-124",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD810 的母线故障定位疑问，哪项答复有依据？",
    "options": {
      "A": "先比对整流输入、母线工作范围与逆变负载记录",
      "B": "不记录故障时间",
      "C": "把逆变输出当整流输入测",
      "D": "只重启全部逆变"
    },
    "answer": [
      "A"
    ],
    "analysis": "多机系统的故障应按模块角色分层。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "母线故障定位"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-125",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "在 MD520 制动的现场联调中，哪项现场接线结论可直接用于检查表？",
    "options": {
      "A": "全部接 U/V/W",
      "B": "制动端子可带电换线",
      "C": "全部按 T1 图",
      "D": "按 T8 以下 (+)/BR、T9 以上 (+)/(-) 的同机座图接线"
    },
    "answer": [
      "D"
    ],
    "analysis": "任何接线前先执行断电、等待、测量。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 制动",
      "现场接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-127",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD520/MD580 的输出频率时，应采用哪项？",
    "options": {
      "A": "599 Hz 可使任意电机无限速运行",
      "B": "599 Hz 是驱动上限，不是电机许可转速",
      "C": "频率上限等于载波",
      "D": "不需要机械转速验算"
    },
    "answer": [
      "B"
    ],
    "analysis": "客户高速需求还需核对电机和机械强度。",
    "source": {
      "title": "变频器速查审计（已核验）与变频器二次学习补充（2026-09）",
      "chapter": "知识点 T-D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520/MD580",
      "输出频率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-132",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD520 的电机辨识疑问，哪项答复有依据？",
    "options": {
      "A": "任何工况可在线无准备调谐",
      "B": "F1-37=3 是恢复出厂",
      "C": "不用录入电机铭牌",
      "D": "F1-37=3 为静态完整调谐，按手册前提执行"
    },
    "answer": [
      "D"
    ],
    "analysis": "调谐必须确认电机、机械和安全状态。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电机辨识"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-135",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD580 的SVC 调速范围时，应采用哪项？",
    "options": {
      "A": "只有固定 50 Hz",
      "B": "1:200",
      "C": "1:50",
      "D": "1:1000"
    },
    "answer": [
      "B"
    ],
    "analysis": "控制模式和电机类型共同限定性能。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "SVC 调速范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-137",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "在 MD580 T10～T12 的现场联调中，哪项载波限制结论可直接用于检查表？",
    "options": {
      "A": "最高 16 kHz",
      "B": "无需按机座区分",
      "C": "固定 50 Hz",
      "D": "最高 6 kHz"
    },
    "answer": [
      "D"
    ],
    "analysis": "T2～T9 的 12/8 kHz 限制不能套给大机座。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "载波限制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-139",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD580 的故障保护时，应采用哪项？",
    "options": {
      "A": "缺相不影响运行",
      "B": "任何故障只需重启",
      "C": "STO 可替代过流保护",
      "D": "应核对输入/输出缺相、过流、母线过欠压、制动异常等记录"
    },
    "answer": [
      "D"
    ],
    "analysis": "诊断要结合黑盒和波形，而不是猜一个代码。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "故障保护"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-143",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD630 的强弱电分离时，应采用哪项？",
    "options": {
      "A": "动力电缆与信号电缆间距大于 30 cm",
      "B": "紧贴捆扎最抗干扰",
      "C": "距离只看载波频率",
      "D": "只需 3 mm"
    },
    "answer": [
      "A"
    ],
    "analysis": "布线还需注意交叉角度和屏蔽接地。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "强弱电分离"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-144",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD630 的PE 接线疑问，哪项答复有依据？",
    "options": {
      "A": "只接电机外壳无需驱动 PE",
      "B": "PE 不经断路器，不与 N 共用",
      "C": "PE 与 N 可任意并接",
      "D": "PE 可用接触器切断"
    },
    "answer": [
      "B"
    ],
    "analysis": "保护接地属于不可省略的安全条件。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "PE 接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-147",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD630 的故障响应设置时，应采用哪项？",
    "options": {
      "A": "手册列出 11 类动作，但并非所有故障可配置",
      "B": "报警可代替安全停机",
      "C": "全部故障可无条件屏蔽",
      "D": "故障响应只有两类"
    },
    "answer": [
      "A"
    ],
    "analysis": "不可配置故障要按手册和风险评估处理。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "故障响应设置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-148",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD800 的工作温度疑问，哪项答复有依据？",
    "options": {
      "A": "有过载 -20～40 ℃，无过载 -20～50 ℃；超限每 ℃降额 2.5%",
      "B": "固定 25 ℃",
      "C": "全工况 -20～60 ℃无降额",
      "D": "温度只影响整流不影响逆变"
    },
    "answer": [
      "A"
    ],
    "analysis": "热设计必须按过载状态区分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "工作温度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-151",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD800 的短路容量时，应采用哪项？",
    "options": {
      "A": "短路能力无限",
      "B": "手册给出 100 kA 短路能力边界",
      "C": "只有 1 kA",
      "D": "只与编码器位数相关"
    },
    "answer": [
      "B"
    ],
    "analysis": "还需结合上级保护器件和电网。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "短路容量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-159",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD520 制动的现场接线时，应采用哪项？",
    "options": {
      "A": "全部接 U/V/W",
      "B": "制动端子可带电换线",
      "C": "按 T8 以下 (+)/BR、T9 以上 (+)/(-) 的同机座图接线",
      "D": "全部按 T1 图"
    },
    "answer": [
      "C"
    ],
    "analysis": "任何接线前先执行断电、等待、测量。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 制动",
      "现场接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-160",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD580 PROFIBUS 的通信速率疑问，哪项答复有依据？",
    "options": {
      "A": "协议无需终端电阻",
      "B": "9.6 kbit/s～12 Mbit/s，距离随速率约 1200～100 m",
      "C": "只支持 100 Mbit/s",
      "D": "全速率都可 1200 m"
    },
    "answer": [
      "B"
    ],
    "analysis": "实际距离、终端和屏蔽按通信手册核对。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 PROFIBUS",
      "通信速率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-161",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "在 MD520/MD580 的现场联调中，哪项输出频率结论可直接用于检查表？",
    "options": {
      "A": "599 Hz 可使任意电机无限速运行",
      "B": "不需要机械转速验算",
      "C": "599 Hz 是驱动上限，不是电机许可转速",
      "D": "频率上限等于载波"
    },
    "answer": [
      "C"
    ],
    "analysis": "客户高速需求还需核对电机和机械强度。",
    "source": {
      "title": "变频器速查审计（已核验）与变频器二次学习补充（2026-09）",
      "chapter": "知识点 T-D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520/MD580",
      "输出频率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-167",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD520 断电的残余电压时，应采用哪项？",
    "options": {
      "A": "只断开控制电源",
      "B": "短接母线帮助放电",
      "C": "看到指示灯灭即可碰端子",
      "D": "等待规定时间并测量直流母线电压后再作业"
    },
    "answer": [
      "D"
    ],
    "analysis": "PM 电机被外力带动仍可能产生电压。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 断电",
      "残余电压"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-168",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD520 PM 电机的外拖风险疑问，哪项答复有依据？",
    "options": {
      "A": "电机不可能反电动势",
      "B": "外力拖动 PM 电机可能在驱动端产生危险电压",
      "C": "断电后一定零电压",
      "D": "只需打开 USB 端口"
    },
    "answer": [
      "B"
    ],
    "analysis": "机械负载与旋转惯量必须纳入隔离。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 PM 电机",
      "外拖风险"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-171",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD580 T10～T12 的载波限制时，应采用哪项？",
    "options": {
      "A": "无需按机座区分",
      "B": "最高 6 kHz",
      "C": "最高 16 kHz",
      "D": "固定 50 Hz"
    },
    "answer": [
      "B"
    ],
    "analysis": "T2～T9 的 12/8 kHz 限制不能套给大机座。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "载波限制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-172",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD580 T10～T12 的柜体安装疑问，哪项答复有依据？",
    "options": {
      "A": "只能安装在户外",
      "B": "单机柜内不宜并排或上下叠装",
      "C": "无需通风",
      "D": "可无间距任意叠装"
    },
    "answer": [
      "B"
    ],
    "analysis": "散热要求按硬件手册和柜体热设计验证。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "柜体安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-173",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "在 MD580 的现场联调中，哪项故障保护结论可直接用于检查表？",
    "options": {
      "A": "STO 可替代过流保护",
      "B": "缺相不影响运行",
      "C": "任何故障只需重启",
      "D": "应核对输入/输出缺相、过流、母线过欠压、制动异常等记录"
    },
    "answer": [
      "D"
    ],
    "analysis": "诊断要结合黑盒和波形，而不是猜一个代码。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "故障保护"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-179",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD630 的外部控制电源时，应采用哪项？",
    "options": {
      "A": "E24V 为外部 24 V 端子",
      "B": "E24V 为 690 V 母线",
      "C": "可接任意电压",
      "D": "E24V 为 EtherCAT 口"
    },
    "answer": [
      "A"
    ],
    "analysis": "端子定义须按同型号用户手册确认。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "外部控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-180",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD630 的CiA 402 前提疑问，哪项答复有依据？",
    "options": {
      "A": "只插网线即可",
      "B": "A0-00 复位、F0-03=2、F0-29=9、nd-00=1 等条件需核对",
      "C": "不需要复位和总线参数",
      "D": "只把 F0-03 设为 0"
    },
    "answer": [
      "B"
    ],
    "analysis": "CiA402 不是所有总线分支的默认状态。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "CiA 402 前提"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-184",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD800 的安装间距疑问，哪项答复有依据？",
    "options": {
      "A": "间距可用软件参数替代",
      "B": "只需侧面 1 mm",
      "C": "侧面至少 55 mm，上下至少 200 mm",
      "D": "所有方向零距离"
    },
    "answer": [
      "C"
    ],
    "analysis": "书本型也有明确散热空间。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "安装间距"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-185",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "在 MD800 的现场联调中，哪项短路容量结论可直接用于检查表？",
    "options": {
      "A": "短路能力无限",
      "B": "手册给出 100 kA 短路能力边界",
      "C": "只与编码器位数相关",
      "D": "只有 1 kA"
    },
    "answer": [
      "B"
    ],
    "analysis": "还需结合上级保护器件和电网。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "短路容量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-187",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD810 的载波范围时，应采用哪项？",
    "options": {
      "A": "全部固定 16 kHz",
      "B": "V/f 0.8～12 kHz，SVC/FVC 2～6 kHz",
      "C": "全部固定 50 Hz",
      "D": "载波与模式无关"
    },
    "answer": [
      "B"
    ],
    "analysis": "载波频率不同于输出频率。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "载波范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-191",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD810 的冷却方案时，应采用哪项？",
    "options": {
      "A": "风冷和水冷按具体模块选",
      "B": "水冷可取代电气保护",
      "C": "仅自然冷却",
      "D": "所有模块都水冷"
    },
    "answer": [
      "A"
    ],
    "analysis": "冷却配件和柜内热设计要同系统核对。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "冷却方案"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-192",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "客户提出 MD810 的母线故障定位疑问，哪项答复有依据？",
    "options": {
      "A": "先比对整流输入、母线工作范围与逆变负载记录",
      "B": "把逆变输出当整流输入测",
      "C": "不记录故障时间",
      "D": "只重启全部逆变"
    },
    "answer": [
      "A"
    ],
    "analysis": "多机系统的故障应按模块角色分层。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "母线故障定位"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-195",
    "category": "inverter",
    "type": "single",
    "difficulty": 1,
    "stem": "技术人员核对 MD520/MD580 的输出频率时，应采用哪项？",
    "options": {
      "A": "频率上限等于载波",
      "B": "599 Hz 是驱动上限，不是电机许可转速",
      "C": "599 Hz 可使任意电机无限速运行",
      "D": "不需要机械转速验算"
    },
    "answer": [
      "B"
    ],
    "analysis": "客户高速需求还需核对电机和机械强度。",
    "source": {
      "title": "变频器速查审计（已核验）与变频器二次学习补充（2026-09）",
      "chapter": "知识点 T-D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520/MD580",
      "输出频率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-005",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 MD500 系列高性能矢量型变频器官方规格表中，明确支持几种现场总线？",
    "options": {
      "A": "四种",
      "B": "五种",
      "C": "六种",
      "D": "七种"
    },
    "answer": [
      "C"
    ],
    "analysis": "MD500 官方规格『多线程总线支持』一栏写明『支持六种现场总线：Modbus、Profibus-DP、CANLink、CANopen、Profinet、EtherCAT』，故选 C。MD800 系列规格与资料清单中出现的是 Modbus-RTU、CANopen、CANlink、PROFINET RT、EtherCAT、Ethernet/IP 六种组合，其中含 Ethernet/IP；而 MD500-PLUS 规格表列出的通信/总线为 Modbus、Profibus-DP、CANLink、CANopen、Profinet、EtherCAT、Ethernet/IP。把不同系列的总线清单互相套用，是选型报价时最常见的错误。",
    "source": {
      "title": "MD500系列高性能矢量型变频器产品页（规格参数）",
      "chapter": "规格参数表：多线程总线支持",
      "url": "https://www.inovance.com/portal/product/details?productId=75"
    },
    "tags": [
      "MD500",
      "通信组网",
      "现场总线"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-006",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "某客户需要对普通风机、水泵类负载做变频改造，只需 V/F 控制、成本敏感。在汇川低压通用型变频器系列中，下列哪个系列的官方规格标明其控制方式仅为 V/F 控制？",
    "options": {
      "A": "MD200 系列（三相 380V 机型）",
      "B": "MD290 通用型变频器",
      "C": "MD500 系列",
      "D": "MD520 系列"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD290 官方规格『控制方式』一栏为『V/F 控制』，且其定位就是『轻松驱动和控制异步电机』的通用型风机水泵类产品，故选 B。A 项 MD200 规格写明『V/F 控制，SVC 控制（仅三相）』——三相机型是带无速度传感器矢量的，不能笼统说只支持 V/F；C 项 MD500 支持开环矢量（SVC）、闭环矢量（FVC）与 V/F；D 项 MD520 支持开环矢量 SVC、闭环矢量 FVC、V/F 三种，且可驱动异步、永磁同步与同步磁阻电机。把 MD200 与 MD290 的控制能力混为一谈，会导致低价方案错配到需要矢量控制的负载上。",
    "source": {
      "title": "MD290通用型变频器产品页（规格参数） / MD200系列灵巧型变频器产品页（规格参数）",
      "chapter": "规格参数表：控制方式",
      "url": "https://www.inovance.com/portal/product/details?productId=74"
    },
    "tags": [
      "MD290",
      "MD200",
      "选型",
      "控制方式"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-007",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 MD520 系列在标准机型之外，还提供哪个高防护等级的子系列机型，可用于粉尘、潮湿等较恶劣的安装环境？",
    "options": {
      "A": "MD520-IP20 系列",
      "B": "MD520-IP55 系列",
      "C": "MD520-IP65 系列",
      "D": "MD520-IP68 系列"
    },
    "answer": [
      "B"
    ],
    "analysis": "汇川官网 MD520 产品页的资料下载区列有《MD520-IP55系列高防护变频器》产品彩页及英文版，证明该子系列真实存在，故选 B。A 项 IP20 是常规柜内安装机型的防护水平，不构成『高防护子系列』；C、D 项官网 MD520 产品资料中不存在，属编造。现场遇到粉尘、冲洗、凝露环境时，除了提高防护等级，还要同步核算高防护机型因散热条件变化带来的降额，不能只看 IP 等级就下单。",
    "source": {
      "title": "MD520-IP55系列高防护变频器产品彩页（MD520 产品页资料下载）",
      "chapter": "产品彩页",
      "url": "https://www.inovance.com/portal/product/details?productId=320"
    },
    "tags": [
      "MD520",
      "IP55",
      "选型",
      "接线安装"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-008",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 MD800 标准型多机传动变频器规格表中，EtherCAT 总线标注的最高波特率与最大节点数分别是多少？",
    "options": {
      "A": "100Mbps，最多 127 个节点",
      "B": "100Mbps，最多 65535 个节点",
      "C": "1Mbps，最多 127 个节点",
      "D": "10Mbps，最多 254 个节点"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD800 规格表『通信/总线』一栏写明：支持 EtherCAT，最高波特率 100Mbps，全双工模式，最多 65535 个节点，最长距离 100m，故选 B。A 项 127 节点对应的是同表 CANopen（最高 1Mbps、最多 127 节点、最长 1000m）；D 项 254 节点对应 Ethernet/IP；C 项把 CANopen 的 1Mbps 与节点数拼在一起。多机传动系统一网驱控时节点数直接决定可挂多少台逆变单元，把 CANopen 与 EtherCAT 的参数记混会造成组网方案错误。",
    "source": {
      "title": "MD800系列标准型多机传动变频器产品页（规格参数）",
      "chapter": "规格参数表：通信/总线",
      "url": "https://www.inovance.com/portal/product/details?productId=82"
    },
    "tags": [
      "MD800",
      "EtherCAT",
      "通信组网",
      "多机传动"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-009",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 MD500E 系列变频器官方定位主要用于驱动哪类电机，并明确标注了『同步机驱动』特性？",
    "options": {
      "A": "三相交流异步电机",
      "B": "三相交流同步电机",
      "C": "直流电机",
      "D": "单相电机"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD500E 官网产品介绍写明『主要用于控制和调节三相交流同步电机的速度和转矩，是 MD380E 系列的技术升级产品』，其特性标签首项即为『同步机驱动』，故选 B。MD500 官方介绍则是『可轻松驱动感应电动机』（异步电机）；MD480 官方介绍为『主要用于控制和调节三相交流异步电机的速度和转矩』。A 项对应的是 MD500/MD480 的定位，是本题最强干扰项。现场若把 MD500E 当作普通异步机变频器选型，会丢失同步电机驱动这一核心价值。",
    "source": {
      "title": "MD500E高性能矢量型变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=78"
    },
    "tags": [
      "MD500E",
      "同步电机",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-014",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川高压变频器产品线中，HD9XS 系列通用型高压变频器最高输出电压等级可达多少？",
    "options": {
      "A": "6kV",
      "B": "10kV",
      "C": "13.8kV",
      "D": "35kV"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网对 HD9XS 的描述为『基于两象限、同/异步机控制平台设计，单元级联可旁路架构的高压矢量变频器，采用高性能矢量控制技术，最高输出电压等级 13.8 kV』，故选 C。B 项 10kV 是 HD9XS-R 系列（四象限、单元级联可旁路架构）官网标注的『最高输出电压等级 10KV』，两个系列容易记混；A 项 6kV 是高压变频常见电压等级但并非官网对 HD9XS 的『最高』表述；D 项 35kV 在汇川高压变频产品页中无此标注。高压项目按电压等级选型时，必须以对应系列的官网标注为准，并同步确认是否为四象限能量回馈需求。",
    "source": {
      "title": "HD9XS系列通用型高压变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=126"
    },
    "tags": [
      "HD9XS",
      "高压变频器",
      "选型",
      "电压等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-015",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网规格参数，MD520 系列变频器可匹配驱动的电机类型包括下列哪些？（多选）",
    "options": {
      "A": "异步感应电机（IM）",
      "B": "永磁同步电机（PMSM）",
      "C": "同步磁阻电机（SynRM）",
      "D": "直流有刷电机"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "MD520 规格表『可驱动电机类型』一栏明确列出『异步感应电机（IM）、永磁同步电机（PMSM）、同步磁阻电机（SynRM）』三项，官网概览也强调『驱动专家：异步电机（IM），同步电机（SM），同步磁阻电机（SynRM）均可匹配』，故选 A、B、C。D 项直流有刷电机需要直流调速装置（如直流调速器），变频器输出为三相交流 PWM，无法直接驱动直流电机，官网 MD520 规格中亦无此表述。注意 MD580 系列官方介绍同时支持永磁同步、异步与同步磁阻电机，而 MD500/MD480 等早期系列主要面向异步电机，不能跨系列套用。",
    "source": {
      "title": "MD520高性能矢量变频器产品页（规格参数）",
      "chapter": "规格参数表：可驱动电机类型",
      "url": "https://www.inovance.com/portal/product/details?productId=320"
    },
    "tags": [
      "MD520",
      "电机类型",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-016",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网规格参数，MD200 系列灵巧型矢量变频器的控制方式与主要技术指标，下列描述正确的有哪些？（多选）",
    "options": {
      "A": "控制方式为 V/F 控制，SVC 控制（仅三相）",
      "B": "最高频率 500Hz",
      "C": "载波频率 0.8kHz~12kHz，可根据负载特性自动调整",
      "D": "过载能力为 200% 额定电流 60s"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "MD200 规格表逐项为：控制方式『V/F 控制，SVC 控制（仅三相）』；最高频率 500Hz；载波频率『0.8kHz~12kHz（可根据负载特性，自动调整载波频率）』，故 A、B、C 正确。D 项错误：MD200 规格写明『过载能力 150% 额定电流 60s；180% 额定电流 2s』，200%/60s 属于编造，这是与 MD520 等机型过载指标（150% 额定电流 60s）也不同的表述，销售写方案时若把过载能力写高，会导致选型余量不足。",
    "source": {
      "title": "MD200系列灵巧型变频器产品页（规格参数）",
      "chapter": "规格参数表：最高频率 / 载波频率 / 控制方式 / 过载能力",
      "url": "https://www.inovance.com/portal/product/details?productId=71"
    },
    "tags": [
      "MD200",
      "参数配置",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-018",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网规格参数，MD500 系列高性能矢量型变频器规格表中的『瞬停不停』『虚拟 IO』『多电机切换』功能，下列描述正确的有哪些？（多选）",
    "options": {
      "A": "瞬停不停：瞬时停电时通过负载回馈能量补偿电压的降低，维持变频器短时间内继续运行",
      "B": "虚拟 IO：五组虚拟 DIDO，可实现简易逻辑控制",
      "C": "多电机切换：两组电机参数，可实现两个电机切换控制",
      "D": "虚拟 IO：三组虚拟 DIDO，可实现完整 PLC 编程"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 三项均逐字对应 MD500 官方规格表：『瞬停不停』『虚拟 IO：五组虚拟 DIDO，可实现简易逻辑控制』『多电机切换：两组电机参数，可实现两个电机切换控制』。D 项两处都错：数量应为五组而非三组，且官方表述是『简易逻辑控制』，完整 PLC 编程需另配用户可编程卡（MD500 规格中单列『用户可编程：选配用户可编程卡，可以实现二次开发，编程方式兼容汇川公司的 PLC』）。现场在电网波动大或需要一拖二（一台变频器带两台电机切换）的场合，这两项功能能显著降低改造成本，但要注意切换必须在电机完全停止后进行。",
    "source": {
      "title": "MD500系列高性能矢量型变频器产品页（规格参数）",
      "chapter": "规格参数表：瞬停不停 / 虚拟IO / 多电机切换 / 用户可编程",
      "url": "https://www.inovance.com/portal/product/details?productId=75"
    },
    "tags": [
      "MD500",
      "参数配置",
      "功能应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-019",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网规格参数，MD500-PLUS 系列高性能矢量型变频器支持的控制与通信能力，下列描述正确的有哪些？（多选）",
    "options": {
      "A": "控制方式支持无速度传感器矢量控制（SVC）、有速度传感器矢量控制（FVC）、V/F 控制",
      "B": "通信/总线支持 Modbus、Profibus-DP、CANLink、CANopen、Profinet、EtherCAT、Ethernet/IP",
      "C": "运行命令通道有三种：操作面板给定、控制端子给定、通讯给定",
      "D": "标配 EtherCAT 主站功能，可直接带伺服轴"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 三项均直接取自 MD500-PLUS 官方规格表：控制方式栏列出无速度传感器矢量控制（SVC）、有速度传感器矢量控制（FVC）、V/F 控制（以及 pmvvc）；通信/总线栏列出 Modbus、Profibus-DP、CANLink、CANopen、Profinet、EtherCAT、Ethernet/IP；运行命令通道栏列出『三种通道：操作面板给定、控制端子给定、通讯给定，可通过多种方式切换』。D 项错误：变频器在 EtherCAT 网络中是从站角色，官网规格中也没有『标配主站、直接带伺服轴』的表述，带轴需由 PLC/运动控制器做主站统一规划。销售在讲多传+伺服的混合方案时，尤其不能把变频器说成主站。",
    "source": {
      "title": "MD500-PLUS系列高性能矢量型变频器产品页（规格参数）",
      "chapter": "规格参数表：控制方式 / 通讯总线 / 运行命令通道",
      "url": "https://www.inovance.com/portal/product/details?productId=76"
    },
    "tags": [
      "MD500-PLUS",
      "通信组网",
      "参数配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-020",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网产品介绍，MD520 系列变频器『功能丰富』特性中明确支持的功能包括下列哪些？（多选）",
    "options": {
      "A": "支持功能安全 STO",
      "B": "故障跛行",
      "C": "位置控制与抱闸控制",
      "D": "张力应用与风机/水泵应用",
      "E": "支持直接驱动高压 10kV 同步电机"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "MD520 官网产品概览『功能丰富』一条明确为：『支持功能安全 STO，故障跛行，位置控制，抱闸控制，自由编程，张力应用，风机/水泵等应用，令变频器适用于各种应用场景』，故 A、B、C、D 正确。E 项错误：MD520 属于低压变频器（产品分类路径为工业自动化/变频器/低压变频器/通用型低压变频器），10kV 等级同步电机驱动属于高压产品线（如 HD9XS 系列等，最高输出电压等级 13.8kV）的范畴，跨电压等级的能力嫁接是典型干扰项。",
    "source": {
      "title": "MD520高性能矢量变频器产品页（产品概览）",
      "chapter": "产品特性：功能丰富",
      "url": "https://www.inovance.com/portal/product/details?productId=320"
    },
    "tags": [
      "MD520",
      "STO",
      "功能安全",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-023",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "根据汇川官网产品介绍，MD800 与 MD810 系列多机传动变频器属于低压多点传动系统，可通过高速总线与汇川 PLC 组网，实现一网调试、一网驱控。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "官网对 MD810 的介绍明确：『汇川 MD810 与 AM610 / H3U 等 PLC 高速总线组网，实现一网调试，一网驱控，兼容异步及同步伺服电机，搭载 23 bit 绝对值编码器』；MD800 则被定义为『针对传统 OEM 行业小功率市场多点传动应用场合推出全新一代标准型多点传动平台产品』。两者同属低压多机传动，合称低压多点传动系统成立。现场价值在于把原先多台单传变频器的独立调试，变成一套总线一次组态调试，显著缩短产线调试周期。",
    "source": {
      "title": "MD810系列标准型多机传动变频器产品页 / MD800系列标准型多机传动变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "MD800",
      "MD810",
      "多机传动",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-024",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "根据汇川官网产品介绍，MD290 系列通用型变频器属于高性能矢量型变频器，支持闭环矢量控制（FVC）并可用于起重设备的提升机构。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "该说法有两处错误。其一，MD290 官方规格表『控制方式』一栏仅为『V/F 控制』，并不支持闭环矢量控制（FVC）；官网对其定位是『轻松驱动和控制异步电机』的通用型产品。其二，MD290 的应用领域官网表述为纺织、造纸、拉丝、机床、包装、食品、风机、水泵等行业及各种自动化生产设备，起重设备的提升、平移、回转等驱动场合应选用 CS 系列起重专用变频器（如 CS710、CS300、CS290、CS200）。现场把通用机型用于提升类位势负载，会因低频转矩与抱闸时序控制不足而出现溜钩风险。",
    "source": {
      "title": "MD290通用型变频器产品页（规格参数 / 产品介绍）",
      "chapter": "规格参数表：控制方式 / 产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=74"
    },
    "tags": [
      "MD290",
      "矢量控制",
      "选型",
      "起重"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-028",
    "category": "inverter",
    "type": "short",
    "difficulty": 2,
    "stem": "某 OEM 设备厂要为一条包装印刷产线选用汇川多机传动方案，产线含多台小功率电机需要集中驱动与统一调试。请说明 MD800 系列与 MD810 系列各自的官网定位与选型依据，并给出选型时需要向客户确认的关键信息。",
    "options": null,
    "answer": "参考答案要点：\n1) 产品定位（据官网）：MD800 系列标准型多机传动变频器是汇川多机传动产品家族的成员，针对传统 OEM 行业小功率市场多点传动应用场合推出的全新一代标准型多点传动平台产品，广泛应用于印刷包装、木工机床、食品饮料、物流仓储、纺织印染、风机水泵等行业。MD810 高性能多机传动变频器是汇川新一代低压多点传动系统，与 AM610 / H3U 等 PLC 高速总线组网，实现一网调试、一网驱控，兼容异步及同步伺服电机，搭载 23bit 绝对值编码器。\n2) 架构与规格（据 MD800 规格表）：采用整流单元与逆变单元分离的共直流母线架构。整流单元容量 22kW / 45kW / 110kW / 160kW / 355kW（同功率可并机）；逆变单元 G 型机双轴 1.5kW~18.5kW、单轴 1.5kW~355kW；整流单元输入三相 380Vac~480Vac（工作范围 323Vac~528Vac），逆变单元直流输入 537Vdc~679Vdc（工作范围 350Vdc~800Vdc）。\n3) 通信能力（据 MD800 规格表）：支持 Modbus-RTU（最高 115200bps、128 节点、1000m）、CANopen（1Mbps、127 节点、1000m）、CANlink（1Mbps、63 节点、1000m）、PROFINET RT（100Mbps、65535 节点、100m）、EtherCAT（100Mbps、65535 节点、100m）、Ethernet/IP（100Mbps、254 节点、100m）。\n4) 选型需与客户确认的关键信息：① 各轴功率、轴数与单/双轴逆变单元配置；② 是否需要共直流母线与能量互馈（决定整流单元容量与是否并机）；③ 主控 PLC 品牌与总线类型（决定走 PROFINET RT / EtherCAT / Ethernet/IP 还是 RS485）；④ 是否需要同步伺服电机与高精度闭环（涉及 23bit 绝对值编码器支持，如 MD810）；⑤ 柜体空间与散热、安装数量；⑥ 认证要求（出口项目）。",
    "analysis": "本题考察多机传动方案级选型能力。常见错误是只报『多少台变频器』而忽略整流/逆变容量分开计算，或把 MD800 与 MD810 的能力颠倒（例如把 23bit 绝对值编码器与『一网调试、一网驱控』说成 MD800 特性）。官网资料支撑上，MD800 有《MD800系列多机传动变频器选型手册-中文》《系统设计与选型-英文》，方案阶段应以选型手册为准逐轴核算，而不是凭逆变单元功率简单相加。",
    "source": {
      "title": "MD800系列标准型多机传动变频器产品页（含选型手册） / MD810系列标准型多机传动变频器产品页",
      "chapter": "产品介绍 / 规格参数表 / 资料下载：选型手册",
      "url": "https://www.inovance.com/portal/product/details?productId=82"
    },
    "tags": [
      "MD800",
      "MD810",
      "多机传动",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "INV-029",
    "category": "inverter",
    "type": "short",
    "difficulty": 2,
    "stem": "请按汇川官网产品线，说明空压机行业可选用哪些专用产品，并简述其中空压机一体机与通用变频器方案相比的集成化特点。",
    "options": null,
    "answer": "参考答案要点：\n1) 官网『行业专用型低压变频器』分类下的空压机子类，列出的产品包括：CP200 系列空压机一体机、CP650 系列空压机一体机、CP700 系列空压机一体机、MD510 系列高速电机专用驱动器（官网标注功率 22kW~160kW）、MD520HS 系列混合碳化硅高速变频器。\n2) 空压机一体机的集成化特点（据官网）：以 CP200 为例——采用塑胶结构，支持壁挂式安装方式，安装简便；控制回路端子采用插拔式接插端子并做防错插设计；集成度高，内置 220VAC 交流电源、提供 24V 对外输出、内置工频接触器；另内置集成 PT100 和 PTC 等检测电路和保护电路；软件采用专机软件，与 HMI、物联网等设备通信无须调试，实现一键启动。CP650 为单变频一体机，同样支持壁挂式安装、内置 220VAC 交流电源与 24V 对外输出、工频接触器、PT100/PTC 检测与保护电路，采用专机软件。CP700 系列一体机包含 CP700 和 CP701 机型：CP700 采用双变频和工频控制，CP701 采用双变频控制；采用钣金结构，支持壁挂式安装，内置 220VAC 交流电源、24V 对外输出、工频接触器，内置集成 PT100 等检测电路和保护电路。\n3) 与通用变频器方案的比较要点：一体机把工频接触器、控制电源、温度检测与保护电路集成在机内，柜内器件与接线大幅减少，专机软件免去与 HMI/物联网设备的通信调试；通用变频器方案则需另行配电柜、接触器、开关电源与温度检测回路，调试工作量更大。\n4) 高速机型补充：若空压机主机为高速电机（直驱/高速永磁），可考虑 MD510 系列高速电机专用驱动器或 MD520HS 系列混合碳化硅高速变频器。",
    "analysis": "本题考察空压机行业的方案组合能力。常见错误是把空压机专用产品只记成『CP 系列』而漏掉高速机型的 MD510、MD520HS——这两款在官网被明确归入空压机子类，恰恰对应近年直驱高速空压机的主流趋势。另一个错误是把 CP700 与 CP701 的双变频/工频配置说反：官网写明 CP700 采用双变频和工频控制，CP701 采用双变频控制。此外 MD520HS 官网定位为『广泛应用于鼓风机、空压机和制冷机组等高速流体场景』，销售讲高速空压机方案时应能主动引出。",
    "source": {
      "title": "空压机行业专用型低压变频器产品列表（CP200/CP650/CP700 系列空压机一体机、MD510、MD520HS 产品页）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/list?typeId=9"
    },
    "tags": [
      "CP700",
      "CP650",
      "空压机",
      "方案应用",
      "MD520HS"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-032",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某水厂送水泵房一台 55kW 离心水泵原采用某品牌 V/F 变频器，运行多年后故障频发，客户计划更换为汇川产品。现场为三相 380V 供电，负载为平方转矩特性，无编码器，控制精度要求不高，但客户提出三项诉求：一是希望尽量降低能耗；二是管网在夜间低流量时容易频繁启停，希望改善；三是电网偶有瞬时跌落，希望停机后能自动恢复运行。请给出选型建议与对应功能配置思路，并说明还需要向客户确认哪些信息。",
    "options": null,
    "answer": "参考答案要点：\n1) 负载与机型匹配：负载为平方转矩的风机水泵类，无编码器、精度要求不高，属典型的 V/F 或开环矢量应用。可选方向有两个：① MD290 系列通用型变频器——官网规格明确其控制方式为 V/F 控制，定位『轻松驱动和控制异步电机』，应用行业涵盖风机、水泵，是成本优先方案；② 若客户更看重节能与专机功能，可推荐 MD610 系列标准型变频器——官网定位为『基于 MD630 产品研发，针对风机水泵类应用，预置多个行业工艺宏』，并明确支持转速追踪再启动、瞬停不停、节能控制、故障后自动复位、火灾模式、水泵休眠、水泵出入压力检测、止回阀检测等功能，同时继承 MD630 体积紧凑、数字智能、稳定可靠特点，在控制上支持异步电机和同步电机的驱动算法，满足 CE 和 UL 认证要求。\n2) 三项诉求与功能的对应：① 降低能耗——MD610 支持节能控制，且针对风机水泵类应用有预置工艺宏，可减少现场调试工作量；② 夜间低流量频繁启停——对应 MD610 的水泵休眠功能（以及水泵出入压力检测、止回阀检测），可在低流量时进入休眠、按需唤醒，缓解频繁启停；③ 电网瞬时跌落——对应 MD610 的瞬停不停功能（瞬时停电时通过负载回馈能量补偿电压的降低，维持变频器短时间内继续运行）与转速追踪再启动、故障后自动复位。若选 MD290，则需核实其规格表中『瞬停不停』一项是否具备：MD290 规格表确有『瞬停不停：瞬时停电时通过负载回馈能量补偿电压的降低，维持变频器短时间内继续运行』，可满足诉求三。\n3) 需向客户确认的信息：① 水泵电机铭牌（功率、额定电流、极数、是否变频专用电机）；② 实际运行工况（扬程、流量曲线、是否需恒压供水、有无 PLC 或 PID 闭环需求）；③ 柜内安装空间与散热条件、是否需要壁挂或柜内安装；④ 原有控制系统接口（是否需 Modbus/RS485 与上位监控通信、原压力传感器信号类型）；⑤ 电网情况（是否有谐波治理或 EMC 要求、是否需要加装电抗器）；⑥ 是否需要故障后自动复位及复位次数限制（涉及安全，需客户确认许可）；⑦ 现场海拔与温度，核对降额条件。",
    "analysis": "本题考察风机水泵类改造的机型选择与功能映射能力。常见错误一是直接上 MD520/MD500-PLUS 等高配机型，造成成本浪费——平方转矩负载无编码器场合，MD290 的 V/F 控制即可胜任；错误二是只报机型不落功能，客户三项诉求（节能、频繁启停、瞬时跌落恢复）恰好对应 MD610 官网列出的节能控制、水泵休眠、瞬停不停/转速追踪再启动/故障后自动复位，能把功能与诉求一一对应才是方案能力。需要特别提醒的是『故障后自动复位』涉及安全，必须与客户确认许可范围与次数限制，不能默认开启。",
    "source": {
      "title": "MD610系列标准型变频器产品页 / MD290通用型变频器产品页（规格参数）",
      "chapter": "产品介绍 / 规格参数表",
      "url": "https://www.inovance.com/portal/product/details?productId=940"
    },
    "tags": [
      "MD610",
      "MD290",
      "风机水泵",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-034",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某污水处理厂鼓风机房新增一台高速离心鼓风机，配套高速永磁同步电机，客户希望优先选用汇川产品并关注运行效率与稳定性；同时厂区另有数台大功率水泵需要做变频改造，客户想统一品牌。请分别给出鼓风机与水系的选型方向，并说明需要核实的关键条件。",
    "options": null,
    "answer": "参考答案要点：\n1) 高速离心鼓风机选型方向：官网明确 MD520HS 系列混合碳化硅高速变频器『凭借着更高速、更高效、更稳定的产品特性，广泛应用于鼓风机、空压机和制冷机组等高速流体场景』，是高速鼓风机场景的对口产品。若为高速电机专用驱动需求，官网 MD510 系列高速电机专用驱动器（标注功率 22kW~160kW）为『专用的高频高性能矢量风冷变频器，主要控制交流异步电机与同步电机的转速与力矩』，可作为功率段匹配时的候选。需向客户核实：电机最高运行频率/最高转速、额定功率与额定电流、是否需要开环矢量（无编码器）还是闭环（带编码器）、载波频率需求；据此在 MD520HS 与 MD510 之间按功率段与频率能力确认。\n2) 大功率水泵改造选型方向：水泵为平方转矩负载，按精度要求与控制方式分级选择——① 成本优先、仅需 V/F：MD290 系列通用型变频器（官网规格控制方式为 V/F 控制，应用涵盖风机、水泵）；② 需要工艺功能与节能：MD610 系列标准型变频器（官网定位基于 MD630 研发，针对风机水泵类应用，预置多个行业工艺宏，支持转速追踪再启动、瞬停不停、节能控制、故障后自动复位、火灾模式、水泵休眠、水泵出入压力检测、止回阀检测等功能）；③ 大功率与工程可靠性要求高：可考虑 MD480 系列工程型单传变频器（官网定位面向有色、冶金、电力、矿山、造纸、石油、化工等工业过程领域）或 MD580 系列低压高性能工程型变频器（官网定位应用于冶金、有色、建材、造纸、化工、市政等行业，采用高性能矢量控制技术，低速高转矩输出，具备用户可编程功能及后台软件监控、通讯总线功能，支持多种编码器类型）。水厂属市政行业，MD580 的官网应用列表直接含『市政』，可优先评估。\n3) 统一品牌的落地要点：① 统一采用汇川后台软件（如 InoDriveStudio 变频器后台调试软件，官网可下载免安装版与安装版）便于集中调试与运维；② 统一通信方式（Modbus RTU / PROFINET / EtherCAT 等），便于接入厂区监控系统；③ 建立统一的备件与参数模板，降低运维门槛。\n4) 需核实的关键条件：① 电机铭牌与最高频率（尤其高速鼓风机）；② 负载特性与是否需要 PID 恒压/恒流闭环；③ 电网条件、谐波与 EMC 要求，是否需加装电抗器；④ 安装环境温度、海拔、粉尘与湿度，核对降额；⑤ 是否需要远程监控与数据上传；⑥ 是否需要能量回馈或制动单元（鼓风机降速时间较长的场合需核算）；⑦ 与既有 PLC / 上位系统的通信协议与点位需求。",
    "analysis": "本题考察跨工况选型的分类能力与条件核实意识。常见错误有两个：一是把高速永磁鼓风机按普通水泵机型配型（如用 MD290），忽略高速永磁对输出频率上限与载波能力的要求——官网把 MD520HS 明确指向鼓风机、空压机、制冷机组等高速流体场景，就应作为首选方向；二是水系改造只报一个机型而不做分级，实际上 MD290（V/F、成本优先）、MD610（风机水泵专机工艺宏）、MD480/MD580（工程型，市政/冶金等重工况）分别对应不同预算与可靠性等级。官网 MD580 的应用行业明确包含『市政』，水厂项目直接对得上。统一品牌的价值需要通过后台软件、通信协议、备件模板这三条落地，不能只停留在口头承诺。",
    "source": {
      "title": "MD520HS系列混合碳化硅高速变频器产品页 / MD510系列高速电机专用驱动器产品页 / MD610系列标准型变频器产品页 / MD580高性能工程型变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=927"
    },
    "tags": [
      "MD520HS",
      "MD580",
      "鼓风机",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-036",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 MD880 系列可广泛应用于下列哪一类场合？",
    "options": {
      "A": "木工机床、包装、食品饮料等小型 OEM 设备",
      "B": "冶金、造纸等连续性生产线以及船舶、钻机、盾构机、港口岸桥等大型设备",
      "C": "煤矿井下皮带机、刮板机等矿用隔爆场合",
      "D": "家用电梯与门机驱动场合"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网 MD880 系列产品介绍明确其『可广泛应用于冶金、造纸等连续性生产线以及船舶、钻机、盾构机、港口岸桥等大型设备』，故选 B。A 项对应的是 MD800/MD810 这类 OEM 多传平台以及 MD600 紧凑型变频器的目标市场，属于典型的『把工程型高端平台往小设备上套』的错误；C 项矿用隔爆场合应选用防爆变频器产品线（整机 BPJ/BPJV，机芯 CM3000/CM3000H），低压通用或工程型变频器不具备矿用隔爆兼本质安全型资质；D 项属于电梯行业专机（如 ME320LN、WISE310 等电梯/扶梯专用变频器）的范畴。做行业方案时，应用场合与产品平台的匹配是选型第一道关。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页（产品介绍）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "方案应用",
      "选型",
      "重工业"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-042",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "根据汇川官网产品介绍，MD500-PLUS 系列高性能矢量型变频器在同步电机控制方面的官方表述是？",
    "options": {
      "A": "支持 SVC 转矩精度 5%、SVC 节能算法、同步机转速跟踪、电子封星，并采用新型 PMVVC 算法",
      "B": "仅支持异步电机开环矢量控制，同步电机需另配专用机型",
      "C": "同步电机控制精度依赖 23bit 绝对值编码器闭环，开环下无法驱动同步电机",
      "D": "同步电机控制采用直接转矩控制（DTC）算法，转矩响应小于 1ms"
    },
    "answer": [
      "A"
    ],
    "analysis": "MD500-PLUS 官网产品概览『同步机控制性能突破』一条原文为『SVC 转矩精度 5%，SVC 节能算法；同步机转速跟踪、电子封星；新型 PMVVC 算法』，故选 A。B 项与官网矛盾：MD500-PLUS 产品介绍明确其『主要用于控制和调节三相交流异步电机和三相交流永磁电机的速度和转矩』，且控制算法集成 VF/SVC/FVC/PMVVC 四种；C 项把『高精度需要编码器』这一常识过度绝对化，官网标明同步机在 SVC（无速度传感器）下即可实现 5% 转矩精度；D 项的 DTC 算法与 1ms 响应在汇川变频器资料中无此表述，属编造。现场讲同步机改造方案时，PMVVC 与电子封星是 MD500-PLUS 相对早期机型的差异化能力。",
    "source": {
      "title": "MD500-PLUS系列高性能矢量型变频器产品页（产品概览）",
      "chapter": "产品概览：同步机控制性能突破",
      "url": "https://www.inovance.com/portal/product/details?productId=76"
    },
    "tags": [
      "MD500-PLUS",
      "同步电机",
      "PMVVC",
      "矢量控制"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-043",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 MD880 系列在产品结构上提供高度灵活的模块化设计。根据官网产品特性说明，该系列涵盖的产品类型包括？",
    "options": {
      "A": "单传变频器、基本整流、回馈整流、有源整流、逆变、DC/DC，可灵活搭配",
      "B": "仅包含整流单元与逆变单元两类，且必须一对一同功率配对",
      "C": "仅提供整机形态，不支持按单元拆分采购与组合",
      "D": "包含变频器与伺服驱动器两类，可混合组柜"
    },
    "answer": [
      "A"
    ],
    "analysis": "MD880 官网产品特性及优点中『高度灵活的模块化设计』一条原文为『产品涵盖类型：单传变频器、基本整流、回馈整流、有源整流、逆变、DC/DC，可灵活搭配』，故选 A。B 项与官网矛盾：MD880 的整流类型本身就有基本整流、回馈整流、有源整流三种，且模块化设计的价值正在于按需组合而非强制一对一；C 项直接否定了模块化这一核心特性；D 项把变频器与伺服驱动器混为一谈，MD880 属于变频传动产品平台，伺服驱动器是另一条产品线（如 SV660、SV680）。现场方案阶段，选择基本整流还是回馈/有源整流，直接决定能量能否回馈电网与谐波水平，是报价差异的主要来源。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页（产品特性及优点）",
      "chapter": "产品特性及优点：高度灵活的模块化设计",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "模块化",
      "整流单元",
      "多机传动",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-045",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网产品介绍，MD880 系列与 MD880LC 系列均可提供单机传动与多机传动两种拓扑形态，下列相关描述正确的有哪些？（多选）",
    "options": {
      "A": "MD880 系列电压等级涵盖 400V 和 690V，功率范围覆盖 3.7kW~5600kW",
      "B": "MD880LC 系列为水冷型产品，应用于冶金、船舶、海洋钻机、盾构机、大功率水冷测试台等场合",
      "C": "MD880 系列设计寿命可支持连续满载运行 10 年以上，具有黑匣子功能，最高转速可达 25000 转，转速波动可达到 0.01%，转矩精度可优于 3%",
      "D": "MD880 系列内置参数互联，支持双通道通讯、功能图调试、数字化远程平台调试检测监控",
      "E": "MD880 系列标配矿用隔爆兼本质安全型认证，可直接用于煤矿井下"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B、C、D 四项均取自官网：MD880 产品介绍写明『电压等级涵盖 400V 和 690V 电压的需求，功率范围覆盖 3.7kW~5600kW』；MD880LC 产品介绍写明『可广泛应用于冶金、船舶、海洋钻机、盾构机、大功率水冷测试台等大型连续性生产作业设备』；两系列共同的『性能稳定可靠的集大成者』一条写明『设计寿命可支持连续满载运行 10 年以上，具有黑匣子功能，最高转速可达 25000 转，转速波动可达到 0.01%，转矩精度可优于 3%』；『兼容并蓄的完美适配能力』一条写明『内置参数互联，支持双通道通讯、功能图调试、数字化远程平台调试检测监控』。E 项错误：矿用隔爆兼本质安全型是防爆变频器产品线（BPJ/BPJV 整机、CM3000/CM3000H 机芯）的资质表述，MD880 系列官网资料中无此认证，将其用于煤矿井下属于跨资质使用，是安全与合规红线。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页 / MD880LC水冷型多机传动变频器产品页",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "MD880LC",
      "多机传动",
      "参数配置",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-046",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网产品介绍与规格参数，MD580 高性能工程型变频器在安全、可靠与功能方面的描述正确的有哪些？（多选）",
    "options": {
      "A": "标配 STO，满足 TÜV SIL3 安全认证；支持黑匣子循环故障监控；国内首家发证 ATEX 认证",
      "B": "10 年设计寿命；满足 SEMI47 要求，具备低电压穿越功能；无电抗器最大 300 米长线驱动",
      "C": "同时支持三相交流异步电机与三相交流永磁电机的驱动",
      "D": "具备用户可编程功能及后台软件监控、通讯总线功能，支持多种编码器类型",
      "E": "输入电压仅为三相 220V，功率范围 0.4~2.2kW"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B 两项取自 MD580 官网产品特性及优点中的『安全保护』与『稳定可靠』两条原文：『标配 STO 满足 TUV SIL3 安全认证；支持黑匣子循环故障监控；国内首家发证 ATEX 认证』『10 年设计寿命；满足 SEMI47 要求，低电压穿越功能；无电抗器最大 300 米长线驱动』。C、D 两项取自产品介绍与规格表：产品介绍写明『同时支持三相交流永磁同步电机和异步电机的控制』，规格表『电机类型与控制方式』一栏亦分别列出异步电机与永磁同步电机的控制方式，并注明『具备用户可编程功能及后台软件监控、通讯总线功能，支持多种编码器类型』。E 项错误：MD580 规格表『变频器容量』一栏为 0.75kW~450kW（400V 系列）、5.5kW~250kW（690V 系列），输入电压 400V 系列为三相 380~480VAC、690V 系列为三相 525~690VAC，与 E 项描述完全不符——0.4~2.2kW 单相 220V 实际是 MD200 系列单相机型的功率段，把两者混淆会造成选型严重偏小。",
    "source": {
      "title": "MD580高性能工程型变频器产品页（产品介绍 / 规格参数）",
      "chapter": "产品特性及优点：安全保护 / 稳定可靠；规格参数表：变频器容量 / 输入电压 / 电机类型与控制方式",
      "url": "https://www.inovance.com/portal/product/details?productId=321"
    },
    "tags": [
      "MD580",
      "STO",
      "功能安全",
      "长线驱动",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-047",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "某 OEM 设备厂规划一条多轴传动产线，需要在 MD700、MD800、MD810、MD880 四个多传动系列中选型。根据汇川官网产品资料，下列描述正确的有哪些？（多选）",
    "options": {
      "A": "MD700 为 MD700 系列标准型多机传动变频器，属于低压多机传动产品",
      "B": "MD800 是标准型多机传动变频器，面向传统 OEM 行业小功率市场多点传动应用场合",
      "C": "MD810 是汇川新一代低压多点传动系统，与 AM610/H3U 等 PLC 高速总线组网，实现一网调试、一网驱控，兼容异步及同步伺服电机，搭载 23bit 绝对值编码器",
      "D": "MD880 是汇川高端变频调速产品技术平台，定位高端传动应用，可提供单机传动与多机传动两种拓扑形态",
      "E": "MD880-DCP 是 MD880 家族中面向电池模拟器应用的专用变频器，与其传动拓扑形态无关"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "analysis": "五项均与官网一致。MD700 在官网产品清单中登记为『MD700 系列标准型多机传动变频器』，与 MD800 同属低压多机传动平台；MD800 官网定位为『针对传统 OEM 行业小功率市场多点传动应用场合推出全新一代标准型多点传动平台产品』；MD810 官网介绍明确其『是汇川新一代低压多点传动系统』且『与 AM610/H3U 等 PLC 高速总线组网，实现一网调试，一网驱控，兼容异步及同步伺服电机，搭载 23bit 绝对值编码器』；MD880 与 MD880LC 的产品介绍均写明『分为单机传动和多机传动两种拓扑形态』；MD880-DCP 在官网产品清单中登记为『MD880-DCP 系列电池模拟器专用变频器』，属测试类专用衍生型号。本题的关键区分点有两层。第一层是官网分类：MD880 属「工程型变频器」分类（下分多机传动与单机传动），MD700/MD800/MD810 属「低压变频器—多机传动」分类，官网分类路径本身就界定了层级差异。第二层是能力与规模的量级差：MD800 面向 OEM 小功率市场，MD810 覆盖整流单元 22/45/110/160/355kW（同功率可并机）、逆变单元 G 型机双轴 1.5~18.5kW 与单轴 1.5~355kW；而 MD880 的功率上限达 5600kW，面向冶金、造纸、船舶、盾构等大型设备。需要留意的是，MD800 官网并未使用「共直流母线」这一表述（其规格表以「单轴逆变单元数量 + 2×双轴逆变单元数量 ≤ 8」给出单台整流最多带 8 轴的组网约束），而「共直流母线设计」是 MD810 产品介绍中的原文表述——把两者的话术互换，在技术交流中会被客户抓住。",
    "source": {
      "title": "MD700/MD800/MD810产品页 / MD880系列产品页（官网低压变频器—多机传动分类清单）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "MD810",
      "MD800",
      "MD700",
      "多机传动"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-048",
    "category": "inverter",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网产品介绍，起重行业专用变频器中，下列哪些功能或配置表述是正确的？（多选）",
    "options": {
      "A": "CS710 可支持起重工艺卡选件，实现变频器内置防摇、抓斗等复杂起重工艺控制",
      "B": "CS710 带有起重设备的抱闸机构控制功能",
      "C": "CS740 是欧式起重一体机，属于三合一高性能矢量变频器，集成欧式起重机多轴的控制与驱动部分",
      "D": "CS740 内置限位保护、防超载、防超速、防遛钩，内置起重机安全控系统",
      "E": "CS710 的防摇功能为标准配置，无需任何选件即可使用"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B 两项取自 CS710 官网产品介绍：『可对异步电机实现高性能的电流矢量控制、可支持起重工艺卡选件，实现变频器内置防摇、抓斗等复杂起重工艺控制』『带有起重设备的抱闸机构控制功能』。C、D 两项取自 CS740 官网产品介绍：CS740 定位为『欧式起重一体机』，是『一款三合一高性能矢量变频器』，『集成了欧式起重机多轴的控制与驱动部分』，并『内置限位保护、防超载、防超速、防遛钩，内置起重机安全控系统』。E 项错误且是本题最重要的干扰点：官网表述为『可支持起重工艺卡选件』，说明防摇、抓斗属于需要选配起重工艺卡后才具备的工艺控制能力，并非标配。起重项目报价时漏报工艺卡是典型漏项，会直接导致交付功能与客户预期不符。",
    "source": {
      "title": "CS710系列起重专用变频器产品页 / CS740系列起重专用变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=85"
    },
    "tags": [
      "CS710",
      "CS740",
      "起重",
      "工艺卡",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-053",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "根据汇川官网规格参数，MD580 高性能工程型变频器采用高性能矢量控制技术，低速高转矩输出，具备用户可编程功能及后台软件监控、通讯总线功能，支持多种编码器类型，应用于冶金、有色、建材、造纸、化工、市政等行业。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "该表述与 MD580 官网产品介绍原文一致：『MD580 系列变频器是一款低压高性能工程型变频器，同时支持三相交流永磁同步电机和异步电机的控制。变频器采用高性能的矢量控制技术，低速高转矩输出，具有良好的动态特性、超强的过载能力，具备用户可编程功能及后台软件监控、通讯总线功能，支持多种编码器类型，组合功能丰富强大，性能稳定。应用于冶金、有色、建材、造纸、化工、市政等行业』。规格表进一步给出了编码器支持范围：差分、开路集电极、旋转变压器、ABZ&SSI 全闭环、正余弦&SSI 全闭环等。现场在造纸、冶金这类连续生产线改造中，MD580 的市政/化工等行业覆盖使其成为水厂、污水厂等市政项目的对口选择。",
    "source": {
      "title": "MD580高性能工程型变频器产品页（产品介绍）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=321"
    },
    "tags": [
      "MD580",
      "工程型",
      "编码器",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-055",
    "category": "inverter",
    "type": "short",
    "difficulty": 2,
    "stem": "请按汇川官网产品线分类，说明 MD880 系列的产品定位、拓扑形态与主要应用领域，并列举该产品族在官网产品清单中包含的具体产品成员。",
    "options": null,
    "answer": "参考答案要点：\n1) 产品定位（据官网产品介绍）：MD880 系列高性能工程型变频器是汇川高端变频调速产品技术平台，分为单机传动和多机传动两种拓扑形态，是一款定位于高端传动应用、高性能、高可靠性的驱动产品。电压等级涵盖 400V 和 690V，功率范围覆盖 3.7kW~5600kW。\n2) 主要应用领域（据官网）：可广泛应用于冶金、造纸等连续性生产线以及船舶、钻机、盾构机、港口岸桥等大型设备；水冷型 MD880LC 系列进一步面向冶金、船舶、海洋钻机、盾构机、大功率水冷测试台等大型连续性生产作业设备。\n3) 产品成员（据官网低压变频器分类清单）：多机传动形态包括 MD880 风冷型多机传动变频器（productId=109）与 MD880LC 水冷型多机传动变频器（productId=408）；单机传动形态包括 MD880-01S 风冷型单机传动变频器（productId=111）与 MD880LC-01S 水冷型单机传动变频器（productId=112）；此外还有 MD880 系列多传产品扩展组件（productId=460）、MD880 系列单传产品扩展组件（productId=459），以及 MD880-DCP 系列电池模拟器专用变频器（productId=115）。\n4) 关键技术特性（据官网产品特性及优点）：高度灵活的模块化设计，产品涵盖单传变频器、基本整流、回馈整流、有源整流、逆变、DC/DC，可灵活搭配；设计寿命可支持连续满载运行 10 年以上，具有黑匣子功能，最高转速可达 25000 转，转速波动可达到 0.01%，转矩精度可优于 3%；内置参数互联，支持双通道通讯、功能图调试、数字化远程平台调试检测监控。\n5) 选型表达建议：向客户介绍时应强调『单传/多传 + 风冷/水冷』两个维度先在方案阶段定死，再谈功率与模块配置；MD880 与 MD800/MD810 不是同一层级产品，不能互相替代报价。",
    "analysis": "本题考察对汇川高端工程型传动平台的完整认知。常见错误有三个：一是把 MD880 说成『OEM 小功率多点传动平台』，与 MD800/MD810 的定位混淆；二是只记住风冷机型，漏掉 MD880LC 水冷系列——水冷机型在船舶、海工、盾构、大功率测试台场合是刚需，且散热方案完全不同；三是把 MD880-01S（风冷单传）与 MD880LC-01S（水冷单传）的命名后缀记混，导致报价时散热方案报错。官网命名规律可帮助记忆：LC 代表水冷，01S 代表单机传动，多传与单传在直流母线与柜体结构上差异很大。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页 / MD880LC水冷型多机传动变频器产品页 / MD880系列产品清单",
      "chapter": "产品介绍 / 产品特性及优点 / 官网低压变频器—多机传动与单机传动分类",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "工程型变频器",
      "水冷",
      "多机传动",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "INV-059",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某模具厂一台已运行三年的汇川变频器驱动一台挤出机螺杆电机，客户反馈设备近期频繁出现过流保护停机，且发生时间不固定：有时在启动瞬间，有时在正常生产中。现场已排除电机本体烧毁的可能，机械侧未做过改动。请给出你的故障排查思路，并说明处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 先取证据再动手：① 读取变频器故障记录与故障发生时的运行状态（输出频率、输出电流、直流母线电压、负载率），确认过流是发生在启动加速阶段还是稳态运行阶段；② 用汇川后台调试软件（如 MD580 等系列规格表明确支持后台软件监控与虚拟示波器功能，可实现对变频器内部状态的监视）录制故障前后一段时间的电流波形与母线电压波形；③ 记录故障发生时的工艺条件（料温、料压、是否换料、是否清机）。\n2) 按发生时机分类排查：① 启动瞬间过流——重点查加速时间设置是否过短、转矩提升（手动转矩提升设定值）是否过大、V/F 曲线选择是否与负载特性匹配，以及电机参数（额定电流、极数等）是否与实际电机铭牌一致、是否重新做过电机参数自学习；② 稳态运行中偶发过流——重点查负载侧是否有周期性卡阻或物料波动、机械传动（皮带/联轴器/轴承）是否劣化、电机绝缘与接线端子是否松动或局部过热、以及是否存在电网电压跌落导致变频器为维持输出而拉高电流。\n3) 借助变频器内置功能处理：汇川变频器规格表中普遍提供过压过流失速控制（对运行期间电流电压自动限制，防止频繁过流过压跳闸）、快速限流功能（最大限度减小过流故障）、转矩限定与控制（挖土机特性，对运行期间转矩自动限制以抑制频繁过流跳闸）等能力，可在确认机械与电机无异常后，合理启用这些功能缓解偶发跳闸，但必须明确这是缓解手段而非根因修复。\n4) 保护与告警排查：核对与过流相关的保护项是否被误触发或存在检测回路问题（如电流检测故障、输出缺相、缓冲电阻故障、制动回路过流保护、制动电阻短路保护、制动管直通保护等，具体项随系列不同略有差异，应以对应系列手册的保护功能清单为准）。\n5) 处理建议：① 若为参数问题，按负载特性重新整定加减速时间、转矩提升与 V/F 曲线，并重做电机参数自学习；② 若为机械问题，安排停机检查螺杆/轴承/传动件；③ 若为电网问题，记录母线电压跌落情况，评估是否需要电网适应性配置或低电压穿越能力；④ 处理后连续运行观察并留存波形记录，作为闭环依据。",
    "analysis": "本题考察现场故障排查的方法论。常见错误有三个：一是直接更换变频器或调大过流保护阈值——这既不能解决根因，又放弃了设备的保护能力；二是只看故障码不看发生时序，导致无法区分『启动加速期过流』（多为参数与电机匹配问题）与『稳态偶发过流』（多为机械负载或电网问题）；三是忽略变频器自身的诊断工具，汇川变频器支持后台软件与虚拟示波器，能直接录制故障前后波形，比凭经验猜测高效得多。此外要强调：过压过流失速控制、快速限流、转矩限定这些功能是缓解手段，启用前应先排除真实故障源，否则可能掩盖机械劣化等实质问题。",
    "source": {
      "title": "MD580高性能工程型变频器产品页（规格参数）/ MD500系列高性能矢量型变频器产品页（规格参数）",
      "chapter": "规格参数表：过压过流失速控制 / 快速限流功能 / 转矩限定与控制 / 保护功能 / 强大的后台软件",
      "url": "https://www.inovance.com/portal/product/details?productId=321"
    },
    "tags": [
      "故障排查",
      "过流",
      "参数配置",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "INV-060",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某客户采用汇川 MD500-PLUS 系列变频器驱动一台三相交流异步电机做收放卷张力控制，原方案使用闭环矢量控制（FVC）并配编码器。客户希望取消编码器以降低成本和接线故障率，但担心张力控制精度会明显下降。请结合该系列官网产品特性给出你的技术判断与实施建议，并说明需要核实的条件。",
    "options": null,
    "answer": "参考答案要点：\n1) 技术判断依据：MD500-PLUS 官网产品概览『异步机控制性能突破』一条明确列出：『SVC 调速比提升至 1:1000；零速悬停；零速建张；大于 10% 输出转矩场合 SVC 替代 FVC；SVC 收放卷转矩精度≤5%』。也就是说，在输出转矩大于 10% 额定转矩的收放卷场合，官网明确支持用 SVC（无速度传感器矢量控制）替代 FVC，且转矩精度可控制在 5% 以内；同时该系列『集成全部控制算法：VF / SVC / FVC / PMVVC』，取消编码器在控制方式上是可行的。\n2) 可以取消编码器的前提条件：① 负载转矩需求稳定且始终大于 10% 输出转矩（官网给出的替代前提）；② 设备不需要零速下的位置保持或高精度同步（虽然 MD500-PLUS 支持零速悬停，但取消编码器后零速相关性能仍需实测确认）；③ 收放卷对张力精度要求为 5% 量级即可接受，若工艺要求更高精度，仍应保留 FVC + 编码器方案。\n3) 实施建议：① 先在现有设备上做对比试验——保持机械与工艺不变，切换到 SVC 控制方式，实测张力波动与卷径变化过程中的表现，用数据说话再决定是否取消编码器；② 若决定取消，需重新进行电机参数自学习（SVC 对电机参数的准确性更敏感）；③ 核对张力控制相关工艺参数（卷径计算、张力给定、惯量补偿等）的整定是否需要随之调整；④ 编码器取消后要做好端子与线缆的清理，避免悬空信号线引入干扰。\n4) 需要核实的条件：① 电机铭牌参数与实际状态（是否变频专用电机、绝缘与轴承状态）；② 收放卷的最小/最大卷径、材料张力范围与加减速要求；③ 现场工艺对张力精度的量化指标（是 5% 可接受还是要求更高）；④ 是否存在零速建张/零速悬停的实际需求；⑤ 变频器与电机的安装距离与电缆长度，是否需要考虑长线驱动与输出电抗器；⑥ 是否还有其他轴需要同步（如牵引轴），同步精度要求如何；⑦ 现场 EMC 环境与接地情况。\n5) 结论表达：向客户明确『可以取消，但以实测为准』——官网给出的是在大于 10% 输出转矩场合 SVC 可替代 FVC、收放卷转矩精度≤5% 的能力边界，超出该边界（小转矩、高精度、零速定位）时不应承诺同等性能。",
    "analysis": "本题考察把官网产品特性转化为现场技术判断的能力。常见错误有两个：一是凭『闭环一定比开环好』的惯性直接否决客户需求，忽略了 MD500-PLUS 官网明确写出的『大于 10% 输出转矩场合 SVC 替代 FVC』与『SVC 收放卷转矩精度≤5%』这两条能力边界；二是反过来无条件承诺取消编码器后精度不变，超出官网给出的前提条件（小转矩、零速高精度场合）就容易造成交付争议。正确处理路径是：先引用官网能力边界给出可行性判断，再用现场对比试验验证，最后把不确定性写进沟通结论。此外取消编码器后必须重做电机参数自学习，这一点在现场最容易被遗漏。",
    "source": {
      "title": "MD500-PLUS系列高性能矢量型变频器产品页（产品概览）",
      "chapter": "产品概览：集成全部控制算法 / 异步机控制性能突破",
      "url": "https://www.inovance.com/portal/product/details?productId=76"
    },
    "tags": [
      "MD500-PLUS",
      "张力控制",
      "SVC",
      "FVC",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-064",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 CA500 系列中央空调专用变频器同功率机型体积相对公司 MD____ 通用变频器平均减小____% 以上；该系列宽电压范围可达____V ~ 528V，母线电容配置更高，设计寿命长达 10 年。",
    "options": null,
    "answer": [
      "380",
      "40",
      "323"
    ],
    "analysis": "数据取自 CA500 系列产品页：『同功率机型，体积相对公司 MD380 通用变频器平均减小 40% 以上』『额定输入三相 AC 380 ~ 480 V，宽电压可达 323 ~ 528 V』，故三空为 380、40、323。易错点有三个：一是把对比基准记成 MD500 或 MD290，官网明确的对比对象是 MD380 通用变频器，体积累计口径写错会在客户比价时被质疑；二是把宽电压下限 323V 与额定输入下限 380V 混为一谈——380V 是额定输入范围的下限，323V 才是宽电压可达的下限，中央空调机组在电网波动、压缩机重载启动时恰恰靠这段余量维持运行；三是只记体积与电压，漏掉『标配 STO，全硬件封锁 PWM 输出』这一条安全配置与 10 年设计寿命的电容配置，这两项在暖通项目的技术协议里经常被单独列出。",
    "source": {
      "title": "CA500系列中央空调专用变频器产品页（产品介绍）",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=95"
    },
    "tags": [
      "CA500",
      "中央空调",
      "宽电压",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-065",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 MD050N 系列主动式前端（AFE）单元可将电机在制动过程中产生的能量回馈给电网，把____% 以上的再生电能回收利用，功率因数可达____%。",
    "options": null,
    "answer": [
      "95",
      "99"
    ],
    "analysis": "数据取自 MD050N 系列产品页：AFE 单元『可将电机在制动过程中产生能量，通过 AFE 单元回馈给电网。从而在满足 AFE 单元有效制动的同时，能把 95% 以上的再生电能回收利用』；产品特性第一条写明『实现能量的双向流动，功率因数可达 99%』，同页另有『谐波可降至很低，通常小于 5%』，故两空为 95 与 99。易错点有两个：一是把 95%（再生电能回收率）与 99%（功率因数）两个数字互换；二是把 AFE 单元当成普通制动单元——制动单元是把再生能量消耗在制动电阻上变成热量白白浪费，而 AFE 单元是有源前端、可控整流，能把能量回送到电网并把谐波压到 5% 以内。龙门吊、矿井提升机、离心机等频繁制动的位势负载场合，改造成 AFE 后节能与谐波治理收益最明显，这也是向客户报价时最容易讲清的价值点。",
    "source": {
      "title": "MD050N系列主动式前端（AFE）单元产品页（产品介绍）",
      "chapter": "产品介绍 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=108"
    },
    "tags": [
      "MD050N",
      "AFE",
      "能量回馈",
      "方案应用"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-066",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 HD7X 系列高端专用型高压变频器中，面向橡胶行业密炼机开发的专用机型系列名称是 HD____；该系列为____型结构，最高输出电压等级 13.8kV。",
    "options": null,
    "answer": [
      "71S",
      "功率单元级联"
    ],
    "analysis": "官网 HD71S 系列产品页标题为『HD71S 系列密炼机专用高压变频器』，产品介绍写明『HD71S 系列密炼机专用高压变频器，为功率单元级联型结构，采用高性能矢量控制技术，最高输出电压等级 13.8kV……可满足现代工业对橡胶行业的需求』，故两空为 71S 与功率单元级联。易错点有两个：一是把 HD71S 与同处 13.8kV 电压等级的 HD9XS 通用型高压变频器混淆——HD9XS 面向通用高压传动场合，HD71S 是橡胶密炼机行业专机，官网标签为『低速大转矩、过载能力强』，密炼机是典型的低速大转矩冲击负载，通用机型在过载能力上未必够用；二是把『功率单元级联』与 HD30/HD33 的『NPC 三电平』拓扑记混，两者是完全不同的技术路线，写错会导致技术方案与投标文件不符。",
    "source": {
      "title": "HD71S系列密炼机专用高压变频器产品页（产品介绍）",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=135"
    },
    "tags": [
      "HD71S",
      "高压变频器",
      "密炼机",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-070",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD810-20M4T-45 和 MD810-50M4T-D1.5，以下描述正确的是？",
    "options": {
      "A": "20M 代表逆变，50M 才是整流",
      "B": "4T 代表电压等级是 220V",
      "C": "D1.5 代表双轴逆变，轴的功率是 1.5kW",
      "D": "D1.5 代表单轴逆变，轴的功率是 1.5kW"
    },
    "answer": [
      "C"
    ],
    "analysis": "MD810 多传型号的字段读法：MD810 是系列，20M 表示整流单元模块、50M 表示逆变单元模块，4T 表示三相 380~480V 电压等级（T 为三相、4 为 400V 级），D 表示双轴（一个逆变模块带两台电机），D 后面的数字是每轴功率，G 表示通用机型。因此 MD810-20M4T-45 是 45kW 整流单元（交流进、直流出，不能直接驱动电机），MD810-50M4T-D1.5 是双轴、每轴 1.5kW 的逆变单元（直流进、变频变压三相交流出）。依据：电天下 LDZ 电气选型库对 MD810-20M4T45G120 的字段标注为「模块类型:20M【整流单元模块】,电压等级:4T【380V-480V】,功率等级:45kW」，对 MD810-50M4TD18.5G210 的标注为「模块类型:50M【逆变单元模块】,电压等级:4T【380V-480V】,功率等级:18.5kW,输出电流:37A,D【双轴】,G【通用机型】」，其中 37A 正是 380V 下 18.5kW 单轴对应的额定输出电流，可反过来印证 D 后数字是「每轴」功率。A 项把整流与逆变换了位（整流是 20M、逆变是 50M，这也是填空题「用哪个字段判断整流模块」的答案）；B 项 4T 不是 220V——220V 等级在汇川型号中另作标识，与 4T 无关；D 项把双轴说成单轴，单轴逆变模块型号中不出现 D（例如选型库中的 MD810-50M4T18.5G531 即为单轴 18.5kW 逆变模块）。现场核算时若把「每轴功率」误当「模块总功率」，整流容量与轴数都会被算小一半。\n\n【官方手册核定】已调取《MD810 系列多机传动变频器硬件手册（PS00003911，A04）》：第 2.2 节「产品型号表」把 MD810-50M4TD1.5GXXX ~ D18.5GXXX 明确归入「逆变单元（双轴）」，同手册表 2-4「逆变单元（双轴）额定规格」给出 D1.5 额定功率 1.5kW、输出电流 3.8A（对应 380V 下 1.5kW 单轴电流），因此 D 前缀确为双轴、其后的数字为每轴功率，C 项正确。",
    "source": {
      "title": "MD810 系列多机传动变频器硬件手册（PS00003911，A04） / MD810 系列标准型多机传动变频器产品页（型号字段与规格参数）",
      "chapter": "第 2.2 节 产品型号表 / 表 2-4 逆变单元（双轴）额定规格",
      "url": "https://www.inovance.com/portal/serviceSupport/download"
    },
    "tags": [
      "MD810",
      "多机传动",
      "型号命名",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-072",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "MD810 系列变频器中，型号「MD810-50M4T-D7.5GXXX」中的「D7.5」表示？",
    "options": {
      "A": "单轴逆变，功率 7.5kW",
      "B": "双轴逆变，每轴功率 7.5kW",
      "C": "双轴逆变，总功率 7.5kW",
      "D": "整流单元，功率 7.5kW"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD810 型号中 50M 表示逆变单元模块、4T 表示三相 380~480V 电压等级，紧随其后的 D 表示双轴（一个逆变模块带两台电机），D 后面的数字是每轴功率，G 表示通用机型，末尾的数字后缀表示内置功能配置（选型库中可查到的 MD810-50M4TD7.5G201、MD810-50M4TD7.5G300W、MD810-50M4TD15G211、MD810-50M4TD18.5G210 均属此类）。因此 D7.5 的含义是「双轴逆变、每轴 7.5kW」，一个模块可以带两台 7.5kW 电机。A 项把双轴误读为单轴——单轴机型型号中不出现 D（如 MD810-50M4T18.5G531 为单轴 18.5kW 逆变模块）；C 项把「每轴」误读为「总功率」，若整模块只有 7.5kW，每轴仅 3.75kW，既与官方规格表「G 型机双轴 1.5kW~18.5kW」的功率档无法对应，也会让方案容量算小一半；D 项混淆模块类型，整流单元用 20M 标识（如 MD810-20M4T45G120 为 45kW 整流模块），50M 才是逆变。多传方案核算的正确顺序是：先按「每轴功率 × 轴数」统计电机容量，再判断是否存在能量互馈，最后定整流容量与是否并机。\n\n【官方手册核定】同上手册第 2.2 节产品型号表：MD810-50M4TD7.5GXXX 属「逆变单元（双轴）」且 100mm 宽度段覆盖 7.5kW~18.5kW，D 后数字为每轴功率，B 项正确。",
    "source": {
      "title": "MD810 系列多机传动变频器硬件手册（PS00003911，A04） / MD810 系列标准型多机传动变频器产品页（规格参数：逆变单元功率段）",
      "chapter": "第 2.2 节 产品型号表",
      "url": "https://www.inovance.com/portal/serviceSupport/download"
    },
    "tags": [
      "MD810",
      "多机传动",
      "型号命名",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-074",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "变频器既可以实现电机的平滑调速，也可以实现高精度的位置控制。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "变频器的核心能力是变频变压（V/F）与矢量控制下的平滑调速、软起软停与节能运行，控制目标是转速与转矩；「高精度位置控制」要求位置环带宽、编码器全闭环、插补与电子凸轮等运动控制功能，属于伺服系统（SV660/SV680 + MS1 系列电机）的能力范围，因此本判断为错。需要如实说明的是，汇川部分变频器机型确实在功能列表里写了位置相关能力——MD520 官网产品特性中有「位置控制、抱闸控制」，MD810 官网产品特性中有「支持位置控制、多轴同步、负荷分配等高端应用功能」，并支持 23bit 绝对值编码器闭环——但这些是变频器平台内的简易定位、抱闸时序与多轴同步功能，其定位精度与动态响应和伺服不在同一量级，不能据此认为变频器可以承担高精度位置控制。现场用法：客户说「要停在某个角度、反复精准定位」时直接引导伺服方案；只说「按工艺调速、要节能」时才留在变频器方案里。",
    "source": {
      "title": "MD520 高性能矢量变频器产品页 / MD810 系列标准型多机传动变频器产品页",
      "chapter": "产品概览：功能丰富（位置控制、抱闸控制）/ 产品概览：功能强大（位置控制、多轴同步、负荷分配）",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "选型",
      "位置控制",
      "矢量控制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-076",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "多传系统中，只有变频器才有逆变模块。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "该判断有两处不成立。其一，多机传动系统本身就是由「整流单元 + 逆变单元」共同组成的：以 MD810 为例，20M 是整流单元模块、50M 是逆变单元模块，二者同属多传变频器产品家族，把「变频器」与「逆变模块」对立起来描述，在概念上就说不通。其二，「逆变」（DC→AC 变换）并非变频器独有环节：伺服驱动器、中高压变频器、储能变流器、UPS、光伏逆变器等都包含逆变模块，把它说成变频器的专属部件过于绝对。更准确的表述是：多传系统采用整流单元与逆变单元分离的共直流母线架构，整流单元（20M）完成 AC→DC 并建立直流母线，逆变单元（50M）完成 DC→AC 驱动各自轴上的电机。现场意义在于：核算多传方案必须把整流容量与逆变容量分开计算，并先判断是否存在能量互馈工况（某轴制动、某轴电动），把两者混为一谈会直接算错整流单元选型与是否并机。",
    "source": {
      "title": "MD810 系列标准型多机传动变频器产品页 / MD800 系列标准型多机传动变频器产品页",
      "chapter": "产品介绍 / 规格参数表：变频器容量（整流单元与逆变单元）",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "多机传动",
      "整流单元",
      "MD810",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-079",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川多传系统通常用型号中的「____」去判断是否为整流模块。",
    "options": null,
    "answer": [
      "20M"
    ],
    "analysis": "汇川多传（多机传动）型号用「数字 + M」字段区分模块类型：20M 表示整流单元模块（AC→DC），50M 表示逆变单元模块（DC→AC）。例如 MD810-20M4T110G 是 110kW 整流单元、MD810-50M4T-D18.5G 是双轴每轴 18.5kW 的逆变单元；电天下 LDZ 电气选型库对 MD810-20M4T45G120 的标注即为「模块类型:20M【整流单元模块】」，对 MD810-50M4TD18.5G210 的标注为「模块类型:50M【逆变单元模块】」，可以直接对应。因此判断是否为整流模块看 20M 即可。易错点有两个：一是记成 50M（那是逆变单元，本题最容易失分的地方）；二是试图用 G/P 或功率字段判断模块类型——G 只表示通用/恒转矩机型，功率字段只表示容量，都与「整流还是逆变」无关。现场做多传方案时，先用 20M/50M 把模块分成整流与逆变两类，再分别核算整流容量、轴数、是否并机与能量互馈，这是避免「把各轴功率简单相加当整流容量」这类错误的第一步。\n\n【官方手册核定】同上手册第 2.2 节产品型号表：整流单元型号一律为 MD810-「20M」4T…（如 20M4T22G / 20M4T45G / 20M4T110G），逆变单元一律为「50M」，故用 20M 判断整流模块，答案「20M」成立。",
    "source": {
      "title": "MD810 系列多机传动变频器硬件手册（PS00003911，A04） / MD810 系列标准型多机传动变频器产品页 / MD800 系列标准型多机传动变频器产品页（规格参数）",
      "chapter": "第 2.2 节 产品型号表",
      "url": "https://www.inovance.com/portal/serviceSupport/download"
    },
    "tags": [
      "MD810",
      "多机传动",
      "型号命名",
      "整流单元"
    ],
    "roles": [
      "sales",
      "purchase",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-080",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某项目需为恒压供水系统选型：水泵电机功率 7.5kW、电压等级 380V，要求根据管网压力自动调节转速以实现节能运行，并明确不需要扩展卡。请判断应选变频器还是伺服，给出推荐的具体系列方向与可落地的完整型号，并列出需要向客户确认的关键信息。",
    "options": null,
    "answer": "参考答案要点：\n1) 产品类型判断：选变频器，不用伺服。恒压供水是典型的平方转矩（风机水泵类）负载，控制目标是管网压力闭环下的转速调节与节能运行，不需要角度/位置控制，用伺服属于能力过剩且成本大幅上升。\n2) 系列方向（按预算与功能分两档）：\n① 成本优先——MD290 系列通用型变频器：官网规格「控制方式」一栏仅标 V/F 控制，定位「轻松驱动和控制异步电机」，应用涵盖风机、水泵；官网写明配有 PID 控制功能，无需温度调节器即可实现温度、压力、流量控制运转，因此不配扩展卡也能完成压力闭环恒压供水（压力变送器/远传压力表接入模拟量输入，PID 内置）。\n② 功能优先——MD610 系列标准型变频器：官网定位「基于 MD630 产品研发，针对风机水泵类应用，预置多个行业工艺宏」，明确支持水泵休眠、水泵出入压力检测、止回阀检测、节能控制、转速追踪再启动、瞬停不停、故障后自动复位等功能，适合夜间小流量频繁启停、需要节能控制与休眠唤醒的管网。\n③ 若属中央空调/暖通水系统可评估 CA200/CA300/CA500 中央空调专用系列；若希望一体化（电机+驱动）可看 MD100P 系列水泵一体机（官网标注永磁同步电机、IE5 效率设计、IP55 防护、EMC 过 C2 标准）。\n3) 完整型号：MD290 的订货型号写法为「MD290T + 功率 + G/P + 附加代码」。参考真实在售型号 MD290T7.5G/11PB——该写法表示同一台机器在 G 型（恒转矩）下额定 7.5kW、在 P 型（风机水泵）下额定 11kW，B 表示内置制动单元。本项目 7.5kW/380V 水泵建议按 P 型档位使用，推荐订货型号示例：MD290T7.5G/11PB（三相 380V，7.5kW 电机按 P 型档驱动）。机型代号必须重视：官方功能码明确「1=G 型（恒转矩负载机型）、2=P 型（风机、水泵类负载机型）」，同功率下 G 型与 P 型额定输出电流不同，报错机型会导致过载判定与保护失配。若选 MD610，则按其在售选型表对应 7.5kW、三相 380V 的功率档报型，并在方案中写明所配工艺宏（水泵休眠、出入压力检测等）。\n4) 需要向客户确认的关键信息：① 水泵电机铭牌（额定功率/电压/电流/极数、是否变频专用电机、是否永磁同步）；② 控制目标与传感器——恒压还是变压/变流量，压力传感器类型（0~10V 或 4~20mA）、量程与安装位置；③ 是单泵还是多泵，是否需要一拖多、轮换、休眠唤醒与出水压力检测；④ 夜间最小流量与允许的启停频次；⑤ 是否需要制动单元/制动电阻（水泵类一般不需要，但大惯量或要求快速停机时要核算）；⑥ 是否要接入上位监控或物联网（涉及通信卡等选件）；⑦ 现场海拔、环境温度与柜内散热条件，按规格表核对降额。\n5) 关于「不需要扩展卡」：压力闭环用变频器内置 PID 加模拟量输入即可实现，压力传感器直接接 AI 端子，确实无需扩展卡；但前提是维持本地/端子控制方式。若后期需要总线通信（Modbus、Profibus-DP、EtherCAT 等）或编码器闭环，才需另配通信卡/PG 卡，这部分应在方案中写成「当前配置不含、后续可选」以免交付时产生争议。",
    "analysis": "本题考察风机水泵类负载的机型选择与「诉求—功能」对应能力。判断链是：负载类型（平方转矩）→ 控制方式（V/F 足够）→ 机型代号（P 型档位）→ 额定输出电流校核 → 附加功能（PID、休眠、瞬停不停）。高频错误有三个：一是直接上 MD500/MD520 等高配机型，平方转矩负载无编码器场合用 V/F 即可，属于成本浪费；二是只报系列不报完整订货型号，MD290 的 G/P 双标写法（MD290T7.5G/11PB）决定同一台机器带 7.5kW 还是 11kW，漏写会导致额定电流判定不同；三是把「不需要扩展卡」理解成「什么功能都不需要」，忽略了恒压供水必须落实压力闭环（内置 PID + 模拟量输入）与低流量工况处理（休眠功能），交付后客户会发现「压力没稳住」而追责。",
    "source": {
      "title": "MD290 通用型变频器产品页 / MD610 系列标准型变频器产品页 / MD100P 系列一体机产品页",
      "chapter": "规格参数表：控制方式（V/F）与 PID 功能；产品介绍：风机水泵类应用工艺宏；产品特性：IE5、IP55、EMC C2",
      "url": "https://www.inovance.com/portal/product/details?productId=74"
    },
    "tags": [
      "MD290",
      "MD610",
      "恒压供水",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-081",
    "category": "inverter",
    "type": "short",
    "difficulty": 2,
    "stem": "请写出 MD810 以下型号各部分的含义：\n「MD810-20M4T110G」\n「MD810-50M4T-D18.5G」",
    "options": null,
    "answer": "参考答案要点（逐段拆解）：\n1) MD810：系列代号。汇川新一代低压多点传动（多机传动）变频器平台，采用整流单元与逆变单元分离的共直流母线架构，与 AM610 / H3U 等 PLC 高速总线组网，实现一网调试、一网驱控，兼容异步及同步伺服电机，搭载 23bit 绝对值编码器。\n2) 20M / 50M：模块类型字段。20M = 整流单元模块（AC→DC，输出直流母线电压）；50M = 逆变单元模块（DC→AC，输出变频变压三相交流驱动电机）。故 MD810-20M4T110G 是整流单元，MD810-50M4T-D18.5G 是逆变单元。\n3) 4T：电压等级字段。T 表示三相，4 表示 400V 级，即三相 380~480V 等级（整流单元输入三相 380~480V；逆变单元从直流母线取电，其 4T 表示所配套的电压等级平台）。\n4) 110 与 D18.5：功率字段。110 = 110kW，表示整流单元容量；D 表示双轴（一个逆变模块带两台电机），18.5 表示每轴功率 18.5kW（整模块带两台 18.5kW 电机）。若为单轴机型，型号中不出现 D，例如 MD810-50M4T18.5G531 为单轴 18.5kW 逆变模块。\n5) G：机型代号。官方功能码表中「1=G 型（恒转矩负载机型）、2=P 型（风机、水泵类负载机型）」，此处为 G 型通用（恒转矩）机型。\n6) 完整订货型号在 G 后还有一位数字后缀表示内置功能配置，报价前务必以选型手册确认。参考选型库字段：MD810-20M4T45G120 为「G + 120」——内置制动单元、内置 Profinet 网桥与 CAN、无 STO 功能、风冷书本型；MD810-50M4TD18.5G210 为「G + 210」——内置 ABZ 编码器端子、内置 Profibus-DP 与 CAN、无 STO 功能、风冷书本型。\n7) 结论表述：MD810-20M4T110G = 汇川 MD810 多传平台的三相 380~480V、110kW 整流单元模块（G 型）；MD810-50M4T-D18.5G = 汇川 MD810 多传平台的三相 380~480V 等级、双轴逆变单元模块，每轴 18.5kW（一台模块带两台 18.5kW 电机），G 型。",
    "analysis": "本题考察多传型号的逐段解读能力，也是报价不出错的基本功。三个高频错误：一是把 20M 与 50M 记反（整流是 20M、逆变是 50M），一旦记反，方案里「整流单元」与「逆变单元」的位置会全部写错；二是把 D18.5 读成「总功率 18.5kW」，双轴机型的功率是每轴值，读错会让电机容量算小一半，进而整流容量、轴数与柜体布置全部失真；三是只写到 G 就结束，忽略 G 后面的功能后缀（内置制动单元、Profinet 网桥/CAN、ABZ 编码器端子、STO 等）——这些后缀直接决定模块能不能满足项目的通信与安全需求，也是报价差异的来源。正确做法是按「系列 → 模块类型（20M/50M）→ 电压等级（4T）→ 功率（含 D 双轴标记）→ 机型（G/P）→ 功能后缀」六段逐一核对，并以选型手册确认完整订货型号。\n\n【官方手册核定】同上手册第 2.2 节产品型号表：MD810-20M4T110GXXX 列为整流单元 110kW；MD810-50M4TD18.5GXXX 列为逆变单元（双轴）18.5kW，与本答案逐项一致。",
    "source": {
      "title": "MD810 系列多机传动变频器硬件手册（PS00003911，A04） / MD810 系列标准型多机传动变频器产品页（产品介绍 / 规格参数）/ 汇川变频器功能码表：机型类型 G/P",
      "chapter": "第 2.2 节 产品型号表",
      "url": "https://www.inovance.com/portal/serviceSupport/download"
    },
    "tags": [
      "MD810",
      "多机传动",
      "型号命名",
      "整流单元",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-082",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD630 的历史故障记录，哪项与当前资料相符？",
    "options": {
      "A": "固定存储 1000 组",
      "B": "只能记 1 组",
      "C": "可长期存储 30 组历史故障",
      "D": "没有故障记录功能"
    },
    "answer": [
      "C"
    ],
    "analysis": "故障记录有助于诊断，但仍需实际工况证据。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "历史故障记录"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-084",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD800 的产品定位时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "无整流单元",
      "B": "低功率、多机传动、书本型变频器",
      "C": "只用于一轴伺服",
      "D": "高压单机变频器"
    },
    "answer": [
      "B"
    ],
    "analysis": "多机方案还需核对整流与逆变容量配比。",
    "source": {
      "title": "MD800 Series 产品页",
      "chapter": "知识点 D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-085",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 MD800 的内置通信，选出可写入核对表的说法。",
    "options": {
      "A": "只内置 PROFINET",
      "B": "只支持模拟量",
      "C": "CANopen、CANlink、Modbus RTU",
      "D": "只内置 EtherCAT"
    },
    "answer": [
      "C"
    ],
    "analysis": "扩展通信与内置通信不能混写。",
    "source": {
      "title": "MD800 Series 产品页",
      "chapter": "知识点 D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "内置通信"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-088",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD800 单轴逆变的功率边界时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "只支持 0.75 kW",
      "B": "2T 0.2～3.7 kW，4T 0.4～7.5 kW",
      "C": "2T/4T 均为 200～355 kW",
      "D": "功率不区分电压"
    },
    "answer": [
      "B"
    ],
    "analysis": "单轴/双轴和 2T/4T 必须分别看表。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 单轴逆变",
      "功率边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-089",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 MD800 双轴逆变的功率边界，选出可写入核对表的说法。",
    "options": {
      "A": "2T 0.2～2.2 kW，4T 0.4～3.7 kW",
      "B": "双轴逆变不需整流",
      "C": "只支持 90 kW",
      "D": "2T 0.2～3.7，4T 0.4～7.5"
    },
    "answer": [
      "A"
    ],
    "analysis": "不能把单轴范围直接套给双轴。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 双轴逆变",
      "功率边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-092",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD800 的制动配置时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "整流 B 字段关联内置制动，逆变 S 字段不是制动",
      "B": "编码器 B 表示制动电阻",
      "C": "逆变 S 就是制动",
      "D": "所有整流都无制动端子"
    },
    "answer": [
      "A"
    ],
    "analysis": "制动单元、制动电阻和 STO 字段不能混淆。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-093",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 MD800 的直流母线，选出可写入核对表的说法。",
    "options": {
      "A": "只能 AC 220 V",
      "B": "固定 DC 24 V",
      "C": "无需母线范围",
      "D": "逆变单元 DC 510～720 V"
    },
    "answer": [
      "D"
    ],
    "analysis": "整流/逆变配比和母线保护需工程核对。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "直流母线"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-094",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD800 的防护等级，哪项与当前资料相符？",
    "options": {
      "A": "全系列 IP00",
      "B": "无需机柜保护",
      "C": "IP40，但接线端子和风扇部位除外",
      "D": "整机 IP67 可浸水"
    },
    "answer": [
      "C"
    ],
    "analysis": "IP 等级的例外部位不能省略。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D35",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "防护等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-096",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD810 整流的功率档时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "0.2、0.4、0.75 kW",
      "B": "22、45、110、160、355 kW",
      "C": "1.5～6500 kW",
      "D": "只有 1.5 kW"
    },
    "answer": [
      "B"
    ],
    "analysis": "整流功率要与逆变合计和再生需求匹配。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D37",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "功率档"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-097",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 MD810 整流的输入电压，选出可写入核对表的说法。",
    "options": {
      "A": "直流 24 V",
      "B": "三相 323～528 V",
      "C": "三相 690～1200 V",
      "D": "单相 200～240 V"
    },
    "answer": [
      "B"
    ],
    "analysis": "与逆变 DC 输入范围不能混写。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D38",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "输入电压"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-100",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD810 逆变的功率形式时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "单轴/双轴都只到 7.5 kW",
      "B": "单轴 1.5～355 kW、双轴 1.5～18.5 kW",
      "C": "只有整流模块",
      "D": "全部是 6500 kW"
    },
    "answer": [
      "B"
    ],
    "analysis": "双轴功率边界不能按单轴推断。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D41",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "功率形式"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-104",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD810 的防护等级时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "所有功率都 IP40",
      "B": "所有功率都 IP67",
      "C": "1.5～160 kW 为 IP20，200～355 kW 为 IP00",
      "D": "防护与功率无关"
    },
    "answer": [
      "C"
    ],
    "analysis": "大功率 IP00 机型必须在机柜设计中考虑防护。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D45",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "防护等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-105",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 MD880 的产品定位，选出可写入核对表的说法。",
    "options": {
      "A": "只用于 24 V 控制",
      "B": "0.05～7.5 kW 伺服",
      "C": "仅一只小型整流器",
      "D": "高端工程型变频器，1.5～6500 kW"
    },
    "answer": [
      "D"
    ],
    "analysis": "按电压、功率、冷却和整流形式分层选型。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D46",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-106",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD880 的电压级别，哪项与当前资料相符？",
    "options": {
      "A": "所有型号固定 1200 V",
      "B": "只支持 DC 24 V",
      "C": "380～480 V 与 525～690 V",
      "D": "只支持单相 220 V"
    },
    "answer": [
      "C"
    ],
    "analysis": "电压级别不能从功率范围反推。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D47",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "电压级别"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-108",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD880 的冷却方案时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "全部强制水冷",
      "B": "冷却与柜体无关",
      "C": "风冷和水冷均有方案",
      "D": "只能自然冷却"
    },
    "answer": [
      "C"
    ],
    "analysis": "具体型号与安装条件须核对。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D49",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "冷却方案"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-109",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 MD520 的产品定位，选出可写入核对表的说法。",
    "options": {
      "A": "仅是伺服电机",
      "B": "低压多机整流单元",
      "C": "通用高性能电流矢量变频器",
      "D": "只用于 PLC 输入模块"
    },
    "answer": [
      "C"
    ],
    "analysis": "定位不能代替功率、电压、过载和选件核对。",
    "source": {
      "title": "MD520 Series 产品页",
      "chapter": "知识点 D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-112",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD520 的载波频率时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "固定 50 Hz",
      "B": "0.5～16 kHz",
      "C": "20～100 kHz",
      "D": "0.8～6 kHz"
    },
    "answer": [
      "B"
    ],
    "analysis": "载波设置与温升、噪声和降额有关。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "载波频率"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-116",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "核对 MD520 T1～T4 的制动边界时，哪一项不能被其他系列的结论替代？",
    "options": {
      "A": "132～630 kW 档内置",
      "B": "0.4～15 kW 档内置制动单元",
      "C": "全系列无制动",
      "D": "只看过载等级就能判定"
    },
    "answer": [
      "B"
    ],
    "analysis": "机座分组直接影响制动 BOM。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 T1～T4",
      "制动边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-117",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "围绕 MD520 T9～T13 的制动配置，选出可写入核对表的说法。",
    "options": {
      "A": "必须把制动电阻直接接电机",
      "B": "0.4～15 kW 档标配外部 MDBUN",
      "C": "无需考虑制动能量",
      "D": "132～630 kW 档配外部 MDBUN"
    },
    "answer": [
      "D"
    ],
    "analysis": "外置制动单元还需确认额定能力和接线。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 T9～T13",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-118",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD810 的逆变控制模式，哪项技术处理符合手册边界？",
    "options": {
      "A": "PMSM 只支持 V/f",
      "B": "IM 只支持 FVC",
      "C": "MD800 控制模式可直接套用",
      "D": "IM 支持 V/f、SVC、FVC；PMSM 支持 SVC、FVC"
    },
    "answer": [
      "D"
    ],
    "analysis": "控制模式与反馈附件、电机类型密切相关。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "逆变控制模式"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-121",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD810 整流的现场联调中，哪项通信协议结论可直接用于检查表？",
    "options": {
      "A": "内置 EtherCAT 且无其他协议",
      "B": "只支持模拟量",
      "C": "Modbus RTU/PROFIBUS/CANopen/CANlink/PROFINET",
      "D": "协议与模块角色无关"
    },
    "answer": [
      "C"
    ],
    "analysis": "整流与逆变通信清单不同。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-122",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD810 逆变的通信协议，哪项技术处理符合手册边界？",
    "options": {
      "A": "仅 PROFINET",
      "B": "Modbus RTU/PROFIBUS/CANopen/CANlink/EtherCAT",
      "C": "只支持 RS232",
      "D": "与整流完全同协议"
    },
    "answer": [
      "B"
    ],
    "analysis": "逆变 EtherCAT 为当前手册支持，不应沿用旧风险备注。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-126",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD580 PROFIBUS 的通信速率，哪项技术处理符合手册边界？",
    "options": {
      "A": "9.6 kbit/s～12 Mbit/s，距离随速率约 1200～100 m",
      "B": "只支持 100 Mbit/s",
      "C": "协议无需终端电阻",
      "D": "全速率都可 1200 m"
    },
    "answer": [
      "A"
    ],
    "analysis": "实际距离、终端和屏蔽按通信手册核对。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 PROFIBUS",
      "通信速率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-128",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD630 故障记录的诊断取证疑问，哪项答复有依据？",
    "options": {
      "A": "只看当前显示一个字符",
      "B": "读 30 组历史故障并核对时间、负载、电网、参数和波形",
      "C": "直接更换驱动无复测",
      "D": "清故障后不留证据"
    },
    "answer": [
      "B"
    ],
    "analysis": "历史记录是线索，不是单独的最终根因。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 T-D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 故障记录",
      "诊断取证"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-129",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD800 STO 的现场联调中，哪项安全边界结论可直接用于检查表？",
    "options": {
      "A": "STO 可代替 PE",
      "B": "任意逆变都标配 STO",
      "C": "仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO",
      "D": "整流 B 就是双通道 STO"
    },
    "answer": [
      "C"
    ],
    "analysis": "安全回路还须整机验证。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 STO",
      "安全边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-130",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD580 STO 的实施边界，哪项技术处理符合手册边界？",
    "options": {
      "A": "STO 可直接代替抱闸",
      "B": "STO 不能代替断电、残压测量或机械保持",
      "C": "STO 等于母线零电压",
      "D": "软件急停等同 SIL3"
    },
    "answer": [
      "B"
    ],
    "analysis": "检修与运动风险分别处理。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 STO",
      "实施边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-131",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 MD880 黑盒的诊断能力时，应采用哪项？",
    "options": {
      "A": "与故障分析无关",
      "B": "可替代所有测量",
      "C": "只有 1 条数据",
      "D": "官网资料提及 50 组波形与 1000 条数据，须核对具体配置"
    },
    "answer": [
      "D"
    ],
    "analysis": "波形取证还需结合现场外部测量。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 T-D34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880 黑盒",
      "诊断能力"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-133",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD520 断电的现场联调中，哪项残余电压结论可直接用于检查表？",
    "options": {
      "A": "等待规定时间并测量直流母线电压后再作业",
      "B": "只断开控制电源",
      "C": "短接母线帮助放电",
      "D": "看到指示灯灭即可碰端子"
    },
    "answer": [
      "A"
    ],
    "analysis": "PM 电机被外力带动仍可能产生电压。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 断电",
      "残余电压"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-134",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD520 PM 电机的外拖风险，哪项技术处理符合手册边界？",
    "options": {
      "A": "断电后一定零电压",
      "B": "电机不可能反电动势",
      "C": "只需打开 USB 端口",
      "D": "外力拖动 PM 电机可能在驱动端产生危险电压"
    },
    "answer": [
      "D"
    ],
    "analysis": "机械负载与旋转惯量必须纳入隔离。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 PM 电机",
      "外拖风险"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-136",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD580 的高海拔边界疑问，哪项答复有依据？",
    "options": {
      "A": "与供电电网无关",
      "B": "最高 4000 m；超过 2000 m 需隔离变压器条件",
      "C": "仅 1000 m 且无措施",
      "D": "海拔不限"
    },
    "answer": [
      "B"
    ],
    "analysis": "海拔还影响散热与电气绝缘。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "高海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-138",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD580 T10～T12 的柜体安装，哪项技术处理符合手册边界？",
    "options": {
      "A": "只能安装在户外",
      "B": "可无间距任意叠装",
      "C": "无需通风",
      "D": "单机柜内不宜并排或上下叠装"
    },
    "answer": [
      "D"
    ],
    "analysis": "散热要求按硬件手册和柜体热设计验证。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "柜体安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-140",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD580 的独立控制电源疑问，哪项答复有依据？",
    "options": {
      "A": "官网列出独立 24 V 控制电源",
      "B": "只有 5 V USB 供电",
      "C": "控制电源必须 690 V",
      "D": "控制电源与主回路可任意混接"
    },
    "answer": [
      "A"
    ],
    "analysis": "电源端子与电压按同机座图复核。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "独立控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-141",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD630 的现场联调中，哪项温度降额结论可直接用于检查表？",
    "options": {
      "A": "工作温度没有上限",
      "B": "超过 45 ℃降额 1.5%",
      "C": "0～40 ℃，无需降额",
      "D": "-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%"
    },
    "answer": [
      "D"
    ],
    "analysis": "高温条件要并入柜体散热和负载选型。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "温度降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-142",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD630 的海拔降额，哪项技术处理符合手册边界？",
    "options": {
      "A": "超过 4000 m 无需隔离",
      "B": "超过 1000 m 每升高 100 m 降额 1%，最高 3000 m",
      "C": "海拔无关",
      "D": "每升高 100 m 增额 1%"
    },
    "answer": [
      "B"
    ],
    "analysis": "海拔影响冷却和绝缘边界。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-145",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD630 的现场联调中，哪项外部控制电源结论可直接用于检查表？",
    "options": {
      "A": "可接任意电压",
      "B": "E24V 为 EtherCAT 口",
      "C": "E24V 为 690 V 母线",
      "D": "E24V 为外部 24 V 端子"
    },
    "answer": [
      "D"
    ],
    "analysis": "端子定义须按同型号用户手册确认。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "外部控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-146",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD630 的CiA 402 前提，哪项技术处理符合手册边界？",
    "options": {
      "A": "只把 F0-03 设为 0",
      "B": "A0-00 复位、F0-03=2、F0-29=9、nd-00=1 等条件需核对",
      "C": "不需要复位和总线参数",
      "D": "只插网线即可"
    },
    "answer": [
      "B"
    ],
    "analysis": "CiA402 不是所有总线分支的默认状态。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "CiA 402 前提"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-149",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD800 的现场联调中，哪项海拔边界结论可直接用于检查表？",
    "options": {
      "A": "只可海拔 100 m",
      "B": "星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额",
      "C": "不需要确认电网接地",
      "D": "两种电网均无限高"
    },
    "answer": [
      "B"
    ],
    "analysis": "电网形态和绝缘要求要一起确认。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-150",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD800 的安装间距，哪项技术处理符合手册边界？",
    "options": {
      "A": "侧面至少 55 mm，上下至少 200 mm",
      "B": "间距可用软件参数替代",
      "C": "只需侧面 1 mm",
      "D": "所有方向零距离"
    },
    "answer": [
      "A"
    ],
    "analysis": "书本型也有明确散热空间。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "安装间距"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-152",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD810 的逆变控制模式疑问，哪项答复有依据？",
    "options": {
      "A": "PMSM 只支持 V/f",
      "B": "MD800 控制模式可直接套用",
      "C": "IM 支持 V/f、SVC、FVC；PMSM 支持 SVC、FVC",
      "D": "IM 只支持 FVC"
    },
    "answer": [
      "C"
    ],
    "analysis": "控制模式与反馈附件、电机类型密切相关。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "逆变控制模式"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-153",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD810 的现场联调中，哪项载波范围结论可直接用于检查表？",
    "options": {
      "A": "全部固定 50 Hz",
      "B": "V/f 0.8～12 kHz，SVC/FVC 2～6 kHz",
      "C": "载波与模式无关",
      "D": "全部固定 16 kHz"
    },
    "answer": [
      "B"
    ],
    "analysis": "载波频率不同于输出频率。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "载波范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-154",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD810 的速度范围，哪项技术处理符合手册边界？",
    "options": {
      "A": "V/f 1:50、IM SVC 1:100、FVC 1:1000",
      "B": "V/f 1:2000",
      "C": "三个模式都是 1:1000",
      "D": "范围与电机无关"
    },
    "answer": [
      "A"
    ],
    "analysis": "性能值要注明对应模式与电机。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "速度范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-155",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 MD810 整流的通信协议时，应采用哪项？",
    "options": {
      "A": "内置 EtherCAT 且无其他协议",
      "B": "协议与模块角色无关",
      "C": "Modbus RTU/PROFIBUS/CANopen/CANlink/PROFINET",
      "D": "只支持模拟量"
    },
    "answer": [
      "C"
    ],
    "analysis": "整流与逆变通信清单不同。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-156",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD810 逆变的通信协议疑问，哪项答复有依据？",
    "options": {
      "A": "Modbus RTU/PROFIBUS/CANopen/CANlink/EtherCAT",
      "B": "只支持 RS232",
      "C": "仅 PROFINET",
      "D": "与整流完全同协议"
    },
    "answer": [
      "A"
    ],
    "analysis": "逆变 EtherCAT 为当前手册支持，不应沿用旧风险备注。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-157",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD810 的现场联调中，哪项冷却方案结论可直接用于检查表？",
    "options": {
      "A": "所有模块都水冷",
      "B": "水冷可取代电气保护",
      "C": "仅自然冷却",
      "D": "风冷和水冷按具体模块选"
    },
    "answer": [
      "D"
    ],
    "analysis": "冷却配件和柜内热设计要同系统核对。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "冷却方案"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-158",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD810 的母线故障定位，哪项技术处理符合手册边界？",
    "options": {
      "A": "先比对整流输入、母线工作范围与逆变负载记录",
      "B": "把逆变输出当整流输入测",
      "C": "只重启全部逆变",
      "D": "不记录故障时间"
    },
    "answer": [
      "A"
    ],
    "analysis": "多机系统的故障应按模块角色分层。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "母线故障定位"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-162",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD630 故障记录的诊断取证，哪项技术处理符合手册边界？",
    "options": {
      "A": "直接更换驱动无复测",
      "B": "清故障后不留证据",
      "C": "读 30 组历史故障并核对时间、负载、电网、参数和波形",
      "D": "只看当前显示一个字符"
    },
    "answer": [
      "C"
    ],
    "analysis": "历史记录是线索，不是单独的最终根因。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 T-D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 故障记录",
      "诊断取证"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-163",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 MD800 STO 的安全边界时，应采用哪项？",
    "options": {
      "A": "仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO",
      "B": "STO 可代替 PE",
      "C": "整流 B 就是双通道 STO",
      "D": "任意逆变都标配 STO"
    },
    "answer": [
      "A"
    ],
    "analysis": "安全回路还须整机验证。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 STO",
      "安全边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-164",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD580 STO 的实施边界疑问，哪项答复有依据？",
    "options": {
      "A": "STO 等于母线零电压",
      "B": "STO 可直接代替抱闸",
      "C": "STO 不能代替断电、残压测量或机械保持",
      "D": "软件急停等同 SIL3"
    },
    "answer": [
      "C"
    ],
    "analysis": "检修与运动风险分别处理。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 STO",
      "实施边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-165",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD880 黑盒的现场联调中，哪项诊断能力结论可直接用于检查表？",
    "options": {
      "A": "只有 1 条数据",
      "B": "可替代所有测量",
      "C": "官网资料提及 50 组波形与 1000 条数据，须核对具体配置",
      "D": "与故障分析无关"
    },
    "answer": [
      "C"
    ],
    "analysis": "波形取证还需结合现场外部测量。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 T-D34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880 黑盒",
      "诊断能力"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-166",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD520 的电机辨识，哪项技术处理符合手册边界？",
    "options": {
      "A": "不用录入电机铭牌",
      "B": "任何工况可在线无准备调谐",
      "C": "F1-37=3 是恢复出厂",
      "D": "F1-37=3 为静态完整调谐，按手册前提执行"
    },
    "answer": [
      "D"
    ],
    "analysis": "调谐必须确认电机、机械和安全状态。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电机辨识"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-169",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD580 的现场联调中，哪项SVC 调速范围结论可直接用于检查表？",
    "options": {
      "A": "1:1000",
      "B": "1:200",
      "C": "只有固定 50 Hz",
      "D": "1:50"
    },
    "answer": [
      "B"
    ],
    "analysis": "控制模式和电机类型共同限定性能。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "SVC 调速范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-170",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD580 的高海拔边界，哪项技术处理符合手册边界？",
    "options": {
      "A": "与供电电网无关",
      "B": "海拔不限",
      "C": "仅 1000 m 且无措施",
      "D": "最高 4000 m；超过 2000 m 需隔离变压器条件"
    },
    "answer": [
      "D"
    ],
    "analysis": "海拔还影响散热与电气绝缘。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "高海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-174",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD580 的独立控制电源，哪项技术处理符合手册边界？",
    "options": {
      "A": "官网列出独立 24 V 控制电源",
      "B": "控制电源与主回路可任意混接",
      "C": "只有 5 V USB 供电",
      "D": "控制电源必须 690 V"
    },
    "answer": [
      "A"
    ],
    "analysis": "电源端子与电压按同机座图复核。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "独立控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-175",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 MD630 的温度降额时，应采用哪项？",
    "options": {
      "A": "0～40 ℃，无需降额",
      "B": "-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%",
      "C": "工作温度没有上限",
      "D": "超过 45 ℃降额 1.5%"
    },
    "answer": [
      "B"
    ],
    "analysis": "高温条件要并入柜体散热和负载选型。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "温度降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-176",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD630 的海拔降额疑问，哪项答复有依据？",
    "options": {
      "A": "超过 1000 m 每升高 100 m 降额 1%，最高 3000 m",
      "B": "超过 4000 m 无需隔离",
      "C": "海拔无关",
      "D": "每升高 100 m 增额 1%"
    },
    "answer": [
      "A"
    ],
    "analysis": "海拔影响冷却和绝缘边界。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-177",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD630 的现场联调中，哪项强弱电分离结论可直接用于检查表？",
    "options": {
      "A": "动力电缆与信号电缆间距大于 30 cm",
      "B": "紧贴捆扎最抗干扰",
      "C": "距离只看载波频率",
      "D": "只需 3 mm"
    },
    "answer": [
      "A"
    ],
    "analysis": "布线还需注意交叉角度和屏蔽接地。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "强弱电分离"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-178",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD630 的PE 接线，哪项技术处理符合手册边界？",
    "options": {
      "A": "PE 不经断路器，不与 N 共用",
      "B": "只接电机外壳无需驱动 PE",
      "C": "PE 与 N 可任意并接",
      "D": "PE 可用接触器切断"
    },
    "answer": [
      "A"
    ],
    "analysis": "保护接地属于不可省略的安全条件。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "PE 接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-181",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD630 的现场联调中，哪项故障响应设置结论可直接用于检查表？",
    "options": {
      "A": "报警可代替安全停机",
      "B": "手册列出 11 类动作，但并非所有故障可配置",
      "C": "全部故障可无条件屏蔽",
      "D": "故障响应只有两类"
    },
    "answer": [
      "B"
    ],
    "analysis": "不可配置故障要按手册和风险评估处理。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "故障响应设置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-182",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD800 的工作温度，哪项技术处理符合手册边界？",
    "options": {
      "A": "全工况 -20～60 ℃无降额",
      "B": "固定 25 ℃",
      "C": "有过载 -20～40 ℃，无过载 -20～50 ℃；超限每 ℃降额 2.5%",
      "D": "温度只影响整流不影响逆变"
    },
    "answer": [
      "C"
    ],
    "analysis": "热设计必须按过载状态区分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "工作温度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-183",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 MD800 的海拔边界时，应采用哪项？",
    "options": {
      "A": "不需要确认电网接地",
      "B": "两种电网均无限高",
      "C": "星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额",
      "D": "只可海拔 100 m"
    },
    "answer": [
      "C"
    ],
    "analysis": "电网形态和绝缘要求要一起确认。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-186",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD810 的逆变控制模式，哪项技术处理符合手册边界？",
    "options": {
      "A": "PMSM 只支持 V/f",
      "B": "MD800 控制模式可直接套用",
      "C": "IM 只支持 FVC",
      "D": "IM 支持 V/f、SVC、FVC；PMSM 支持 SVC、FVC"
    },
    "answer": [
      "D"
    ],
    "analysis": "控制模式与反馈附件、电机类型密切相关。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "逆变控制模式"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-188",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD810 的速度范围疑问，哪项答复有依据？",
    "options": {
      "A": "范围与电机无关",
      "B": "V/f 1:2000",
      "C": "三个模式都是 1:1000",
      "D": "V/f 1:50、IM SVC 1:100、FVC 1:1000"
    },
    "answer": [
      "D"
    ],
    "analysis": "性能值要注明对应模式与电机。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "速度范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-189",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD810 整流的现场联调中，哪项通信协议结论可直接用于检查表？",
    "options": {
      "A": "内置 EtherCAT 且无其他协议",
      "B": "只支持模拟量",
      "C": "Modbus RTU/PROFIBUS/CANopen/CANlink/PROFINET",
      "D": "协议与模块角色无关"
    },
    "answer": [
      "C"
    ],
    "analysis": "整流与逆变通信清单不同。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-190",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD810 逆变的通信协议，哪项技术处理符合手册边界？",
    "options": {
      "A": "只支持 RS232",
      "B": "仅 PROFINET",
      "C": "Modbus RTU/PROFIBUS/CANopen/CANlink/EtherCAT",
      "D": "与整流完全同协议"
    },
    "answer": [
      "C"
    ],
    "analysis": "逆变 EtherCAT 为当前手册支持，不应沿用旧风险备注。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-193",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD520 制动的现场联调中，哪项现场接线结论可直接用于检查表？",
    "options": {
      "A": "全部接 U/V/W",
      "B": "全部按 T1 图",
      "C": "制动端子可带电换线",
      "D": "按 T8 以下 (+)/BR、T9 以上 (+)/(-) 的同机座图接线"
    },
    "answer": [
      "D"
    ],
    "analysis": "任何接线前先执行断电、等待、测量。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 制动",
      "现场接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-194",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD580 PROFIBUS 的通信速率，哪项技术处理符合手册边界？",
    "options": {
      "A": "只支持 100 Mbit/s",
      "B": "协议无需终端电阻",
      "C": "全速率都可 1200 m",
      "D": "9.6 kbit/s～12 Mbit/s，距离随速率约 1200～100 m"
    },
    "answer": [
      "D"
    ],
    "analysis": "实际距离、终端和屏蔽按通信手册核对。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 PROFIBUS",
      "通信速率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-196",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD630 故障记录的诊断取证疑问，哪项答复有依据？",
    "options": {
      "A": "只看当前显示一个字符",
      "B": "清故障后不留证据",
      "C": "直接更换驱动无复测",
      "D": "读 30 组历史故障并核对时间、负载、电网、参数和波形"
    },
    "answer": [
      "D"
    ],
    "analysis": "历史记录是线索，不是单独的最终根因。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 T-D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 故障记录",
      "诊断取证"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-197",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD800 STO 的现场联调中，哪项安全边界结论可直接用于检查表？",
    "options": {
      "A": "整流 B 就是双通道 STO",
      "B": "STO 可代替 PE",
      "C": "仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO",
      "D": "任意逆变都标配 STO"
    },
    "answer": [
      "C"
    ],
    "analysis": "安全回路还须整机验证。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 STO",
      "安全边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-198",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "关于 MD580 STO 的实施边界，哪项技术处理符合手册边界？",
    "options": {
      "A": "STO 等于母线零电压",
      "B": "软件急停等同 SIL3",
      "C": "STO 不能代替断电、残压测量或机械保持",
      "D": "STO 可直接代替抱闸"
    },
    "answer": [
      "C"
    ],
    "analysis": "检修与运动风险分别处理。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 STO",
      "实施边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-199",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "技术人员核对 MD880 黑盒的诊断能力时，应采用哪项？",
    "options": {
      "A": "与故障分析无关",
      "B": "官网资料提及 50 组波形与 1000 条数据，须核对具体配置",
      "C": "可替代所有测量",
      "D": "只有 1 条数据"
    },
    "answer": [
      "B"
    ],
    "analysis": "波形取证还需结合现场外部测量。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 T-D34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880 黑盒",
      "诊断能力"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-200",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "客户提出 MD520 的电机辨识疑问，哪项答复有依据？",
    "options": {
      "A": "F1-37=3 为静态完整调谐，按手册前提执行",
      "B": "不用录入电机铭牌",
      "C": "任何工况可在线无准备调谐",
      "D": "F1-37=3 是恢复出厂"
    },
    "answer": [
      "A"
    ],
    "analysis": "调谐必须确认电机、机械和安全状态。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电机辨识"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-201",
    "category": "inverter",
    "type": "single",
    "difficulty": 2,
    "stem": "在 MD520 断电的现场联调中，哪项残余电压结论可直接用于检查表？",
    "options": {
      "A": "短接母线帮助放电",
      "B": "等待规定时间并测量直流母线电压后再作业",
      "C": "只断开控制电源",
      "D": "看到指示灯灭即可碰端子"
    },
    "answer": [
      "B"
    ],
    "analysis": "PM 电机被外力带动仍可能产生电压。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 断电",
      "残余电压"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-202",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 在电网类型方面应按“TN、TT、IT(Y) 可按手册条件使用”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520 在电网类型方面应按“TN、TT、IT(Y) 可按手册条件使用”核对。 IT 系统还需按手册核对滤波和接地条件。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电网类型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-203",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 型号 B 字段在制动含义方面应按“B 表示 CANopen”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD520 型号 B 字段在制动含义方面应按“B 表示内置制动单元/配置字段，须按功率机座表确认”核对。 制动单元和制动电阻不是同一个部件。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 型号 B 字段",
      "制动含义"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-204",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 T1～T4 在制动边界方面应按“0.4～15 kW 档内置制动单元”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520 T1～T4 在制动边界方面应按“0.4～15 kW 档内置制动单元”核对。 机座分组直接影响制动 BOM。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 T1～T4",
      "制动边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-205",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 T9～T13 在制动配置方面应按“0.4～15 kW 档标配外部 MDBUN”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD520 T9～T13 在制动配置方面应按“132～630 kW 档配外部 MDBUN”核对。 外置制动单元还需确认额定能力和接线。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 T9～T13",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-206",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 制动端子在机座差异方面应按“T8 及以下为 (+)/BR，T9 及以上为 (+)/(-)”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520 制动端子在机座差异方面应按“T8 及以下为 (+)/BR，T9 及以上为 (+)/(-)”核对。 端子图必须与实际机座一致。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 制动端子",
      "机座差异"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-207",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在产品定位方面应按“小功率通用伺服”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 在产品定位方面应按“低压高性能工程型单机变频器”核对。 工程型仍需按具体电压和过载等级选型。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 D11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-208",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 380 V 在P/G 双定额方面应按“P 110%/60 s，G 150%/60 s”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 380 V 在P/G 双定额方面应按“P 110%/60 s，G 150%/60 s”核对。 负载特性决定采用 P 档还是 G 档。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 D12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 380 V",
      "P/G 双定额"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-209",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在最大输出频率方面应按“50 Hz”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 在最大输出频率方面应按“599 Hz”核对。 不能把载波频率与输出频率混淆。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 D13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "最大输出频率"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-210",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 690 V 在低压边界方面应按“690 V 版本仍属于 MD580 低压工程型系列”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 690 V 在低压边界方面应按“690 V 版本仍属于 MD580 低压工程型系列”核对。 电压级别要回到对应版本硬件手册。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 D14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 690 V",
      "低压边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-211",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 690 V 在电抗配置方面应按“不允许用电抗器”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 690 V 在电抗配置方面应按“双直流电抗器”核对。 不同电压级别配件不可凭系列名称横向套用。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 D15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 690 V",
      "电抗配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-212",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在STO方面应按“官网列出 SIL3 级 STO 功能”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 在STO方面应按“官网列出 SIL3 级 STO 功能”核对。 STO 的可用性还需按具体选件和安全手册确认。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 D16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "STO"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-213",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在长电机线方面应按“任何距离都无需复核”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 在长电机线方面应按“官网给出 300 m 电机线无需电抗器的产品特性，仍须按配置复核”核对。 官网特性不是对任意现场布线的无条件承诺。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 D17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "长电机线"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-214",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在产品定位方面应按“通用数字智能型低压变频器”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在产品定位方面应按“通用数字智能型低压变频器”核对。 MD630 仍要结合输入、负载和协议核对。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 D18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-215",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在功率范围方面应按“0.05～7.5 kW”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在功率范围方面应按“0.37～90 kW，8 个机座”核对。 功率范围要按当前完整型号和分支确认。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 D19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "功率范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-216",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在电机兼容方面应按“IM、PMSM、SynRM”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在电机兼容方面应按“IM、PMSM、SynRM”核对。 兼容电机类型不等于无需电机参数辨识。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 D20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "电机兼容"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-217",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 型号在字段含义方面应按“S 只代表功率、N 是制动、B 是电压”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 型号在字段含义方面应按“S 标准、N 总线、B 制动，末尾 S 表 STO”核对。 位置不同的 S 字段意义不同。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 型号",
      "字段含义"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-218",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 4T 在输入电压方面应按“三相 380～480 V”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 4T 在输入电压方面应按“三相 380～480 V”核对。 4T 电压字段必须和机柜电网一起核对。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 4T",
      "输入电压"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-219",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在历史故障记录方面应按“只能记 1 组”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在历史故障记录方面应按“可长期存储 30 组历史故障”核对。 故障记录有助于诊断，但仍需实际工况证据。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "历史故障记录"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-220",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在机柜空间方面应按“官网称可节省超过 30% 柜内空间”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在机柜空间方面应按“官网称可节省超过 30% 柜内空间”核对。 空间宣传应按实际机座尺寸和散热设计复核。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "机柜空间"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-221",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在产品定位方面应按“高压单机变频器”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 在产品定位方面应按“低功率、多机传动、书本型变频器”核对。 多机方案还需核对整流与逆变容量配比。",
    "source": {
      "title": "MD800 Series 产品页",
      "chapter": "知识点 D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-222",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在内置通信方面应按“CANopen、CANlink、Modbus RTU”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 在内置通信方面应按“CANopen、CANlink、Modbus RTU”核对。 扩展通信与内置通信不能混写。",
    "source": {
      "title": "MD800 Series 产品页",
      "chapter": "知识点 D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "内置通信"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-223",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在扩展通信方面应按“只能扩展 RS232”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 在扩展通信方面应按“可扩展 PROFINET、EtherCAT、EtherNet/IP”核对。 订货时要确认扩展卡和主站方案。",
    "source": {
      "title": "MD800 Series 产品页",
      "chapter": "知识点 D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "扩展通信"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-224",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在控制方式方面应按“V/f 与 SVC，不能把 FVC 视为标配”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 在控制方式方面应按“V/f 与 SVC，不能把 FVC 视为标配”核对。 控制方式按当前手册，勿用相邻 MD810 功能套用。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "控制方式"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-225",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 单轴逆变在功率边界方面应按“2T/4T 均为 200～355 kW”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 单轴逆变在功率边界方面应按“2T 0.2～3.7 kW，4T 0.4～7.5 kW”核对。 单轴/双轴和 2T/4T 必须分别看表。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 单轴逆变",
      "功率边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-226",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 双轴逆变在功率边界方面应按“2T 0.2～2.2 kW，4T 0.4～3.7 kW”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 双轴逆变在功率边界方面应按“2T 0.2～2.2 kW，4T 0.4～3.7 kW”核对。 不能把单轴范围直接套给双轴。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 双轴逆变",
      "功率边界"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-227",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 型号在模块代码方面应按“0 为安全卡、1/2 为电压”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 型号在模块代码方面应按“0 为整流、1 为单轴逆变、2 为双轴逆变”核对。 多机系统模块角色是 BOM 的第一层。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 型号",
      "模块代码"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-228",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在STO 配置方面应按“逆变单元末尾 S 为 STO 选项”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 在STO 配置方面应按“逆变单元末尾 S 为 STO 选项”核对。 STO 要按末尾 S 和对应安全手册确认。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "STO 配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-229",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 PROFIBUS 在通信速率方面应按“全速率都可 1200 m”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 PROFIBUS 在通信速率方面应按“9.6 kbit/s～12 Mbit/s，距离随速率约 1200～100 m”核对。 实际距离、终端和屏蔽按通信手册核对。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 PROFIBUS",
      "通信速率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-230",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520/MD580 在输出频率方面应按“599 Hz 是驱动上限，不是电机许可转速”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520/MD580 在输出频率方面应按“599 Hz 是驱动上限，不是电机许可转速”核对。 客户高速需求还需核对电机和机械强度。",
    "source": {
      "title": "变频器速查审计（已核验）与变频器二次学习补充（2026-09）",
      "chapter": "知识点 T-D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520/MD580",
      "输出频率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-231",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 故障记录在诊断取证方面应按“只看当前显示一个字符”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 故障记录在诊断取证方面应按“读 30 组历史故障并核对时间、负载、电网、参数和波形”核对。 历史记录是线索，不是单独的最终根因。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 T-D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 故障记录",
      "诊断取证"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-232",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 STO 在安全边界方面应按“仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 STO 在安全边界方面应按“仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO”核对。 安全回路还须整机验证。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 STO",
      "安全边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-233",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 STO 在实施边界方面应按“STO 等于母线零电压”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 STO 在实施边界方面应按“STO 不能代替断电、残压测量或机械保持”核对。 检修与运动风险分别处理。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 STO",
      "实施边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-234",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD880 黑盒在诊断能力方面应按“官网资料提及 50 组波形与 1000 条数据，须核对具体配置”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD880 黑盒在诊断能力方面应按“官网资料提及 50 组波形与 1000 条数据，须核对具体配置”核对。 波形取证还需结合现场外部测量。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 T-D34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880 黑盒",
      "诊断能力"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-235",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 在电机辨识方面应按“F1-37=3 是恢复出厂”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD520 在电机辨识方面应按“F1-37=3 为静态完整调谐，按手册前提执行”核对。 调谐必须确认电机、机械和安全状态。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电机辨识"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-236",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 断电在残余电压方面应按“等待规定时间并测量直流母线电压后再作业”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520 断电在残余电压方面应按“等待规定时间并测量直流母线电压后再作业”核对。 PM 电机被外力带动仍可能产生电压。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 断电",
      "残余电压"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-237",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 PM 电机在外拖风险方面应按“断电后一定零电压”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD520 PM 电机在外拖风险方面应按“外力拖动 PM 电机可能在驱动端产生危险电压”核对。 机械负载与旋转惯量必须纳入隔离。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 PM 电机",
      "外拖风险"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-238",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在SVC 调速范围方面应按“1:200”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 在SVC 调速范围方面应按“1:200”核对。 控制模式和电机类型共同限定性能。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "SVC 调速范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-239",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在高海拔边界方面应按“海拔不限”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 在高海拔边界方面应按“最高 4000 m；超过 2000 m 需隔离变压器条件”核对。 海拔还影响散热与电气绝缘。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "高海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-240",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 T10～T12 在载波限制方面应按“最高 6 kHz”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 T10～T12 在载波限制方面应按“最高 6 kHz”核对。 T2～T9 的 12/8 kHz 限制不能套给大机座。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "载波限制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-241",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 T10～T12 在柜体安装方面应按“可无间距任意叠装”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 T10～T12 在柜体安装方面应按“单机柜内不宜并排或上下叠装”核对。 散热要求按硬件手册和柜体热设计验证。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "柜体安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-242",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在故障保护方面应按“应核对输入/输出缺相、过流、母线过欠压、制动异常等记录”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 在故障保护方面应按“应核对输入/输出缺相、过流、母线过欠压、制动异常等记录”核对。 诊断要结合黑盒和波形，而不是猜一个代码。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "故障保护"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-243",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在独立控制电源方面应按“只有 5 V USB 供电”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 在独立控制电源方面应按“官网列出独立 24 V 控制电源”核对。 电源端子与电压按同机座图复核。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "独立控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-244",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在温度降额方面应按“-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在温度降额方面应按“-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%”核对。 高温条件要并入柜体散热和负载选型。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "温度降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-245",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在海拔降额方面应按“海拔无关”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在海拔降额方面应按“超过 1000 m 每升高 100 m 降额 1%，最高 3000 m”核对。 海拔影响冷却和绝缘边界。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-246",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在强弱电分离方面应按“动力电缆与信号电缆间距大于 30 cm”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在强弱电分离方面应按“动力电缆与信号电缆间距大于 30 cm”核对。 布线还需注意交叉角度和屏蔽接地。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "强弱电分离"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-247",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在PE 接线方面应按“PE 与 N 可任意并接”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在PE 接线方面应按“PE 不经断路器，不与 N 共用”核对。 保护接地属于不可省略的安全条件。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "PE 接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-248",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在外部控制电源方面应按“E24V 为外部 24 V 端子”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在外部控制电源方面应按“E24V 为外部 24 V 端子”核对。 端子定义须按同型号用户手册确认。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "外部控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-249",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在CiA 402 前提方面应按“只插网线即可”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在CiA 402 前提方面应按“A0-00 复位、F0-03=2、F0-29=9、nd-00=1 等条件需核对”核对。 CiA402 不是所有总线分支的默认状态。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "CiA 402 前提"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-250",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在故障响应设置方面应按“手册列出 11 类动作，但并非所有故障可配置”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在故障响应设置方面应按“手册列出 11 类动作，但并非所有故障可配置”核对。 不可配置故障要按手册和风险评估处理。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "故障响应设置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-251",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在工作温度方面应按“全工况 -20～60 ℃无降额”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 在工作温度方面应按“有过载 -20～40 ℃，无过载 -20～50 ℃；超限每 ℃降额 2.5%”核对。 热设计必须按过载状态区分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "工作温度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-252",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在海拔边界方面应按“星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 在海拔边界方面应按“星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额”核对。 电网形态和绝缘要求要一起确认。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-253",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在安装间距方面应按“所有方向零距离”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 在安装间距方面应按“侧面至少 55 mm，上下至少 200 mm”核对。 书本型也有明确散热空间。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "安装间距"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-254",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在短路容量方面应按“手册给出 100 kA 短路能力边界”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 在短路容量方面应按“手册给出 100 kA 短路能力边界”核对。 还需结合上级保护器件和电网。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "短路容量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-255",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在逆变控制模式方面应按“PMSM 只支持 V/f”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD810 在逆变控制模式方面应按“IM 支持 V/f、SVC、FVC；PMSM 支持 SVC、FVC”核对。 控制模式与反馈附件、电机类型密切相关。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "逆变控制模式"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-256",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在载波范围方面应按“V/f 0.8～12 kHz，SVC/FVC 2～6 kHz”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD810 在载波范围方面应按“V/f 0.8～12 kHz，SVC/FVC 2～6 kHz”核对。 载波频率不同于输出频率。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "载波范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-257",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在速度范围方面应按“三个模式都是 1:1000”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD810 在速度范围方面应按“V/f 1:50、IM SVC 1:100、FVC 1:1000”核对。 性能值要注明对应模式与电机。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "速度范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-258",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 整流在通信协议方面应按“Modbus RTU/PROFIBUS/CANopen/CANlink/PROFINET”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD810 整流在通信协议方面应按“Modbus RTU/PROFIBUS/CANopen/CANlink/PROFINET”核对。 整流与逆变通信清单不同。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-259",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 逆变在通信协议方面应按“仅 PROFINET”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD810 逆变在通信协议方面应按“Modbus RTU/PROFIBUS/CANopen/CANlink/EtherCAT”核对。 逆变 EtherCAT 为当前手册支持，不应沿用旧风险备注。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-260",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在冷却方案方面应按“风冷和水冷按具体模块选”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD810 在冷却方案方面应按“风冷和水冷按具体模块选”核对。 冷却配件和柜内热设计要同系统核对。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "冷却方案"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-261",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在母线故障定位方面应按“只重启全部逆变”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD810 在母线故障定位方面应按“先比对整流输入、母线工作范围与逆变负载记录”核对。 多机系统的故障应按模块角色分层。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "母线故障定位"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-262",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 制动在现场接线方面应按“按 T8 以下 (+)/BR、T9 以上 (+)/(-) 的同机座图接线”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520 制动在现场接线方面应按“按 T8 以下 (+)/BR、T9 以上 (+)/(-) 的同机座图接线”核对。 任何接线前先执行断电、等待、测量。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 制动",
      "现场接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-263",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 PROFIBUS 在通信速率方面应按“全速率都可 1200 m”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 PROFIBUS 在通信速率方面应按“9.6 kbit/s～12 Mbit/s，距离随速率约 1200～100 m”核对。 实际距离、终端和屏蔽按通信手册核对。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 PROFIBUS",
      "通信速率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-264",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520/MD580 在输出频率方面应按“599 Hz 是驱动上限，不是电机许可转速”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520/MD580 在输出频率方面应按“599 Hz 是驱动上限，不是电机许可转速”核对。 客户高速需求还需核对电机和机械强度。",
    "source": {
      "title": "变频器速查审计（已核验）与变频器二次学习补充（2026-09）",
      "chapter": "知识点 T-D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520/MD580",
      "输出频率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-265",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 故障记录在诊断取证方面应按“只看当前显示一个字符”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 故障记录在诊断取证方面应按“读 30 组历史故障并核对时间、负载、电网、参数和波形”核对。 历史记录是线索，不是单独的最终根因。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 T-D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 故障记录",
      "诊断取证"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-266",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 STO 在安全边界方面应按“仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 STO 在安全边界方面应按“仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO”核对。 安全回路还须整机验证。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 STO",
      "安全边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-267",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 STO 在实施边界方面应按“STO 等于母线零电压”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 STO 在实施边界方面应按“STO 不能代替断电、残压测量或机械保持”核对。 检修与运动风险分别处理。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 STO",
      "实施边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-268",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD880 黑盒在诊断能力方面应按“官网资料提及 50 组波形与 1000 条数据，须核对具体配置”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD880 黑盒在诊断能力方面应按“官网资料提及 50 组波形与 1000 条数据，须核对具体配置”核对。 波形取证还需结合现场外部测量。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 T-D34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880 黑盒",
      "诊断能力"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-269",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 在电机辨识方面应按“F1-37=3 是恢复出厂”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD520 在电机辨识方面应按“F1-37=3 为静态完整调谐，按手册前提执行”核对。 调谐必须确认电机、机械和安全状态。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电机辨识"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-270",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 断电在残余电压方面应按“等待规定时间并测量直流母线电压后再作业”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD520 断电在残余电压方面应按“等待规定时间并测量直流母线电压后再作业”核对。 PM 电机被外力带动仍可能产生电压。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 断电",
      "残余电压"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-271",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD520 PM 电机在外拖风险方面应按“断电后一定零电压”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD520 PM 电机在外拖风险方面应按“外力拖动 PM 电机可能在驱动端产生危险电压”核对。 机械负载与旋转惯量必须纳入隔离。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 PM 电机",
      "外拖风险"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-272",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在SVC 调速范围方面应按“1:200”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 在SVC 调速范围方面应按“1:200”核对。 控制模式和电机类型共同限定性能。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "SVC 调速范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-273",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在高海拔边界方面应按“海拔不限”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 在高海拔边界方面应按“最高 4000 m；超过 2000 m 需隔离变压器条件”核对。 海拔还影响散热与电气绝缘。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "高海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-274",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 T10～T12 在载波限制方面应按“最高 6 kHz”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 T10～T12 在载波限制方面应按“最高 6 kHz”核对。 T2～T9 的 12/8 kHz 限制不能套给大机座。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "载波限制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-275",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 T10～T12 在柜体安装方面应按“可无间距任意叠装”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 T10～T12 在柜体安装方面应按“单机柜内不宜并排或上下叠装”核对。 散热要求按硬件手册和柜体热设计验证。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "柜体安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-276",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在故障保护方面应按“应核对输入/输出缺相、过流、母线过欠压、制动异常等记录”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD580 在故障保护方面应按“应核对输入/输出缺相、过流、母线过欠压、制动异常等记录”核对。 诊断要结合黑盒和波形，而不是猜一个代码。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "故障保护"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-277",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD580 在独立控制电源方面应按“只有 5 V USB 供电”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD580 在独立控制电源方面应按“官网列出独立 24 V 控制电源”核对。 电源端子与电压按同机座图复核。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "独立控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-278",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在温度降额方面应按“-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在温度降额方面应按“-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%”核对。 高温条件要并入柜体散热和负载选型。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "温度降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-279",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在海拔降额方面应按“海拔无关”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在海拔降额方面应按“超过 1000 m 每升高 100 m 降额 1%，最高 3000 m”核对。 海拔影响冷却和绝缘边界。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-280",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在强弱电分离方面应按“动力电缆与信号电缆间距大于 30 cm”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在强弱电分离方面应按“动力电缆与信号电缆间距大于 30 cm”核对。 布线还需注意交叉角度和屏蔽接地。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "强弱电分离"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-281",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在PE 接线方面应按“PE 与 N 可任意并接”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在PE 接线方面应按“PE 不经断路器，不与 N 共用”核对。 保护接地属于不可省略的安全条件。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "PE 接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-282",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在外部控制电源方面应按“E24V 为外部 24 V 端子”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在外部控制电源方面应按“E24V 为外部 24 V 端子”核对。 端子定义须按同型号用户手册确认。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "外部控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-283",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在CiA 402 前提方面应按“只插网线即可”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD630 在CiA 402 前提方面应按“A0-00 复位、F0-03=2、F0-29=9、nd-00=1 等条件需核对”核对。 CiA402 不是所有总线分支的默认状态。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "CiA 402 前提"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-284",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD630 在故障响应设置方面应按“手册列出 11 类动作，但并非所有故障可配置”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD630 在故障响应设置方面应按“手册列出 11 类动作，但并非所有故障可配置”核对。 不可配置故障要按手册和风险评估处理。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "故障响应设置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-285",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在工作温度方面应按“全工况 -20～60 ℃无降额”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 在工作温度方面应按“有过载 -20～40 ℃，无过载 -20～50 ℃；超限每 ℃降额 2.5%”核对。 热设计必须按过载状态区分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "工作温度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-286",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在海拔边界方面应按“星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 在海拔边界方面应按“星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额”核对。 电网形态和绝缘要求要一起确认。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-287",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在安装间距方面应按“所有方向零距离”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD800 在安装间距方面应按“侧面至少 55 mm，上下至少 200 mm”核对。 书本型也有明确散热空间。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "安装间距"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-288",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD800 在短路容量方面应按“手册给出 100 kA 短路能力边界”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD800 在短路容量方面应按“手册给出 100 kA 短路能力边界”核对。 还需结合上级保护器件和电网。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "短路容量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-289",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在逆变控制模式方面应按“PMSM 只支持 V/f”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD810 在逆变控制模式方面应按“IM 支持 V/f、SVC、FVC；PMSM 支持 SVC、FVC”核对。 控制模式与反馈附件、电机类型密切相关。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "逆变控制模式"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-290",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在载波范围方面应按“V/f 0.8～12 kHz，SVC/FVC 2～6 kHz”核对。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确边界：MD810 在载波范围方面应按“V/f 0.8～12 kHz，SVC/FVC 2～6 kHz”核对。 载波频率不同于输出频率。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "载波范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-291",
    "category": "inverter",
    "type": "judge",
    "difficulty": 2,
    "stem": "请按当前型号/版本资料判断：MD810 在速度范围方面应按“三个模式都是 1:1000”核对。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "正确边界：MD810 在速度范围方面应按“V/f 1:50、IM SVC 1:100、FVC 1:1000”核对。 性能值要注明对应模式与电机。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "速度范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-292",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD810 整流的输入电压关键边界：____。",
    "options": null,
    "answer": [
      "三相 323～528 V"
    ],
    "analysis": "与逆变 DC 输入范围不能混写。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D38",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "输入电压"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-293",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD810 逆变的额定直流输入应填为：____。",
    "options": null,
    "answer": [
      "DC 537～679 V"
    ],
    "analysis": "工作范围和额定范围需要分开看。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D39",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "额定直流输入"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-294",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD810 逆变的直流工作范围结论为：____。",
    "options": null,
    "answer": [
      "DC 350～800 V"
    ],
    "analysis": "系统设计需要关注母线波动和保护。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D40",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "直流工作范围"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-295",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD810 逆变的功率形式关键边界：____。",
    "options": null,
    "answer": [
      "单轴 1.5～355 kW、双轴 1.5～18.5 kW"
    ],
    "analysis": "双轴功率边界不能按单轴推断。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D41",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "功率形式"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-296",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD810 整流 22/45 的制动代码应填为：____。",
    "options": null,
    "answer": [
      "G1XX 为内置制动，G0XX 无内置制动"
    ],
    "analysis": "110 kW 及以上制动方案另按外部 MDBUN 核对。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D42",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流 22/45",
      "制动代码"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-297",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD810 110 kW+ 的制动配置结论为：____。",
    "options": null,
    "answer": [
      "外部 MDBUN 制动单元"
    ],
    "analysis": "制动与能量回馈方案应按实际工况选。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D43",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 110 kW+",
      "制动配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-298",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD810 的电机与控制关键边界：____。",
    "options": null,
    "answer": [
      "支持同步/异步伺服电机，多轴可用于位置/同步/负载分配"
    ],
    "analysis": "产品页定位应结合反馈和控制模式核对。",
    "source": {
      "title": "MD810 Series 产品页",
      "chapter": "知识点 D44",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "电机与控制"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-299",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD810 的防护等级应填为：____。",
    "options": null,
    "answer": [
      "1.5～160 kW 为 IP20，200～355 kW 为 IP00"
    ],
    "analysis": "大功率 IP00 机型必须在机柜设计中考虑防护。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 D45",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "防护等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-300",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD880 的产品定位结论为：____。",
    "options": null,
    "answer": [
      "高端工程型变频器，1.5～6500 kW"
    ],
    "analysis": "按电压、功率、冷却和整流形式分层选型。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D46",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-301",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD880 的电压级别关键边界：____。",
    "options": null,
    "answer": [
      "380～480 V 与 525～690 V"
    ],
    "analysis": "电压级别不能从功率范围反推。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D47",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "电压级别"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-302",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD880 的整流形式应填为：____。",
    "options": null,
    "answer": [
      "基本型、回馈型、AFE 型"
    ],
    "analysis": "需结合电网、再生能量和谐波要求选。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D48",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "整流形式"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-303",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD880 的冷却方案结论为：____。",
    "options": null,
    "answer": [
      "风冷和水冷均有方案"
    ],
    "analysis": "具体型号与安装条件须核对。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 D49",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880",
      "冷却方案"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-304",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD520 的产品定位关键边界：____。",
    "options": null,
    "answer": [
      "通用高性能电流矢量变频器"
    ],
    "analysis": "定位不能代替功率、电压、过载和选件核对。",
    "source": {
      "title": "MD520 Series 产品页",
      "chapter": "知识点 D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "产品定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-305",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD520 的输入规格应填为：____。",
    "options": null,
    "answer": [
      "三相 380～480 V、三相 200～240 V、单相 200～240 V 分表选型"
    ],
    "analysis": "三种输入表不可互相套用。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "输入规格"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-306",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD520 的最大输出频率结论为：____。",
    "options": null,
    "answer": [
      "599 Hz"
    ],
    "analysis": "频率上限不代表电机可长期按该转速运行。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "最大输出频率"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-307",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD520 的载波频率关键边界：____。",
    "options": null,
    "answer": [
      "0.5～16 kHz"
    ],
    "analysis": "载波设置与温升、噪声和降额有关。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "载波频率"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-308",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD520 的防护等级应填为：____。",
    "options": null,
    "answer": [
      "IP20/Type 1"
    ],
    "analysis": "安装防护需要按具体外壳和现场条件确认。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "防护等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-309",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD520 的电网类型结论为：____。",
    "options": null,
    "answer": [
      "TN、TT、IT(Y) 可按手册条件使用"
    ],
    "analysis": "IT 系统还需按手册核对滤波和接地条件。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电网类型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-310",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD520 PM 电机的外拖风险关键边界：____。",
    "options": null,
    "answer": [
      "外力拖动 PM 电机可能在驱动端产生危险电压"
    ],
    "analysis": "机械负载与旋转惯量必须纳入隔离。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 PM 电机",
      "外拖风险"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-311",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD580 的SVC 调速范围应填为：____。",
    "options": null,
    "answer": [
      "1:200"
    ],
    "analysis": "控制模式和电机类型共同限定性能。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "SVC 调速范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-312",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD580 的高海拔边界结论为：____。",
    "options": null,
    "answer": [
      "最高 4000 m；超过 2000 m 需隔离变压器条件"
    ],
    "analysis": "海拔还影响散热与电气绝缘。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "高海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-313",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD580 T10～T12 的载波限制关键边界：____。",
    "options": null,
    "answer": [
      "最高 6 kHz"
    ],
    "analysis": "T2～T9 的 12/8 kHz 限制不能套给大机座。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "载波限制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-314",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD580 T10～T12 的柜体安装应填为：____。",
    "options": null,
    "answer": [
      "单机柜内不宜并排或上下叠装"
    ],
    "analysis": "散热要求按硬件手册和柜体热设计验证。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "柜体安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-315",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD580 的故障保护结论为：____。",
    "options": null,
    "answer": [
      "应核对输入/输出缺相、过流、母线过欠压、制动异常等记录"
    ],
    "analysis": "诊断要结合黑盒和波形，而不是猜一个代码。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "故障保护"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-316",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD580 的独立控制电源关键边界：____。",
    "options": null,
    "answer": [
      "官网列出独立 24 V 控制电源"
    ],
    "analysis": "电源端子与电压按同机座图复核。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "独立控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-317",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD630 的温度降额应填为：____。",
    "options": null,
    "answer": [
      "-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%"
    ],
    "analysis": "高温条件要并入柜体散热和负载选型。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "温度降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-318",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD630 的海拔降额结论为：____。",
    "options": null,
    "answer": [
      "超过 1000 m 每升高 100 m 降额 1%，最高 3000 m"
    ],
    "analysis": "海拔影响冷却和绝缘边界。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-319",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD630 的强弱电分离关键边界：____。",
    "options": null,
    "answer": [
      "动力电缆与信号电缆间距大于 30 cm"
    ],
    "analysis": "布线还需注意交叉角度和屏蔽接地。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "强弱电分离"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-320",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD630 的PE 接线应填为：____。",
    "options": null,
    "answer": [
      "PE 不经断路器，不与 N 共用"
    ],
    "analysis": "保护接地属于不可省略的安全条件。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "PE 接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-321",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD630 的外部控制电源结论为：____。",
    "options": null,
    "answer": [
      "E24V 为外部 24 V 端子"
    ],
    "analysis": "端子定义须按同型号用户手册确认。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "外部控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-322",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD630 的CiA 402 前提关键边界：____。",
    "options": null,
    "answer": [
      "A0-00 复位、F0-03=2、F0-29=9、nd-00=1 等条件需核对"
    ],
    "analysis": "CiA402 不是所有总线分支的默认状态。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "CiA 402 前提"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-323",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD630 的故障响应设置应填为：____。",
    "options": null,
    "answer": [
      "手册列出 11 类动作，但并非所有故障可配置"
    ],
    "analysis": "不可配置故障要按手册和风险评估处理。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "故障响应设置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-324",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD800 的工作温度结论为：____。",
    "options": null,
    "answer": [
      "有过载 -20～40 ℃，无过载 -20～50 ℃；超限每 ℃降额 2.5%"
    ],
    "analysis": "热设计必须按过载状态区分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "工作温度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-325",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD800 的海拔边界关键边界：____。",
    "options": null,
    "answer": [
      "星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额"
    ],
    "analysis": "电网形态和绝缘要求要一起确认。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-326",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD800 的安装间距应填为：____。",
    "options": null,
    "answer": [
      "侧面至少 55 mm，上下至少 200 mm"
    ],
    "analysis": "书本型也有明确散热空间。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "安装间距"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-327",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD800 的短路容量结论为：____。",
    "options": null,
    "answer": [
      "手册给出 100 kA 短路能力边界"
    ],
    "analysis": "还需结合上级保护器件和电网。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "短路容量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-328",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD810 的逆变控制模式关键边界：____。",
    "options": null,
    "answer": [
      "IM 支持 V/f、SVC、FVC；PMSM 支持 SVC、FVC"
    ],
    "analysis": "控制模式与反馈附件、电机类型密切相关。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "逆变控制模式"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-329",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD810 的载波范围应填为：____。",
    "options": null,
    "answer": [
      "V/f 0.8～12 kHz，SVC/FVC 2～6 kHz"
    ],
    "analysis": "载波频率不同于输出频率。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "载波范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-330",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD810 的速度范围结论为：____。",
    "options": null,
    "answer": [
      "V/f 1:50、IM SVC 1:100、FVC 1:1000"
    ],
    "analysis": "性能值要注明对应模式与电机。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "速度范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-331",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD810 整流的通信协议关键边界：____。",
    "options": null,
    "answer": [
      "Modbus RTU/PROFIBUS/CANopen/CANlink/PROFINET"
    ],
    "analysis": "整流与逆变通信清单不同。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-332",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD810 逆变的通信协议应填为：____。",
    "options": null,
    "answer": [
      "Modbus RTU/PROFIBUS/CANopen/CANlink/EtherCAT"
    ],
    "analysis": "逆变 EtherCAT 为当前手册支持，不应沿用旧风险备注。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-333",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD810 的冷却方案结论为：____。",
    "options": null,
    "answer": [
      "风冷和水冷按具体模块选"
    ],
    "analysis": "冷却配件和柜内热设计要同系统核对。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "冷却方案"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-334",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD810 的母线故障定位关键边界：____。",
    "options": null,
    "answer": [
      "先比对整流输入、母线工作范围与逆变负载记录"
    ],
    "analysis": "多机系统的故障应按模块角色分层。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "母线故障定位"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-335",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD520 制动的现场接线应填为：____。",
    "options": null,
    "answer": [
      "按 T8 以下 (+)/BR、T9 以上 (+)/(-) 的同机座图接线"
    ],
    "analysis": "任何接线前先执行断电、等待、测量。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 制动",
      "现场接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-336",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD580 PROFIBUS 的通信速率结论为：____。",
    "options": null,
    "answer": [
      "9.6 kbit/s～12 Mbit/s，距离随速率约 1200～100 m"
    ],
    "analysis": "实际距离、终端和屏蔽按通信手册核对。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 PROFIBUS",
      "通信速率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-337",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD520/MD580 的输出频率关键边界：____。",
    "options": null,
    "answer": [
      "599 Hz 是驱动上限，不是电机许可转速"
    ],
    "analysis": "客户高速需求还需核对电机和机械强度。",
    "source": {
      "title": "变频器速查审计（已核验）与变频器二次学习补充（2026-09）",
      "chapter": "知识点 T-D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520/MD580",
      "输出频率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-338",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD630 故障记录的诊断取证应填为：____。",
    "options": null,
    "answer": [
      "读 30 组历史故障并核对时间、负载、电网、参数和波形"
    ],
    "analysis": "历史记录是线索，不是单独的最终根因。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 T-D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 故障记录",
      "诊断取证"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-339",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD800 STO 的安全边界结论为：____。",
    "options": null,
    "answer": [
      "仅确认带 S 逆变分支及安全手册，不能以整流 B 代替 STO"
    ],
    "analysis": "安全回路还须整机验证。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D32",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800 STO",
      "安全边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-340",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD580 STO 的实施边界关键边界：____。",
    "options": null,
    "answer": [
      "STO 不能代替断电、残压测量或机械保持"
    ],
    "analysis": "检修与运动风险分别处理。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D33",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 STO",
      "实施边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-341",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD880 黑盒的诊断能力应填为：____。",
    "options": null,
    "answer": [
      "官网资料提及 50 组波形与 1000 条数据，须核对具体配置"
    ],
    "analysis": "波形取证还需结合现场外部测量。",
    "source": {
      "title": "MD880 Series 官方产品资料",
      "chapter": "知识点 T-D34",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD880 黑盒",
      "诊断能力"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-342",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD520 的电机辨识结论为：____。",
    "options": null,
    "answer": [
      "F1-37=3 为静态完整调谐，按手册前提执行"
    ],
    "analysis": "调谐必须确认电机、机械和安全状态。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D01",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520",
      "电机辨识"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-343",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD520 断电的残余电压关键边界：____。",
    "options": null,
    "answer": [
      "等待规定时间并测量直流母线电压后再作业"
    ],
    "analysis": "PM 电机被外力带动仍可能产生电压。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 断电",
      "残余电压"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-344",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD520 PM 电机的外拖风险应填为：____。",
    "options": null,
    "answer": [
      "外力拖动 PM 电机可能在驱动端产生危险电压"
    ],
    "analysis": "机械负载与旋转惯量必须纳入隔离。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 PM 电机",
      "外拖风险"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-345",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD580 的SVC 调速范围结论为：____。",
    "options": null,
    "answer": [
      "1:200"
    ],
    "analysis": "控制模式和电机类型共同限定性能。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "SVC 调速范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-346",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD580 的高海拔边界关键边界：____。",
    "options": null,
    "answer": [
      "最高 4000 m；超过 2000 m 需隔离变压器条件"
    ],
    "analysis": "海拔还影响散热与电气绝缘。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "高海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-347",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD580 T10～T12 的载波限制应填为：____。",
    "options": null,
    "answer": [
      "最高 6 kHz"
    ],
    "analysis": "T2～T9 的 12/8 kHz 限制不能套给大机座。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "载波限制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-348",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD580 T10～T12 的柜体安装结论为：____。",
    "options": null,
    "answer": [
      "单机柜内不宜并排或上下叠装"
    ],
    "analysis": "散热要求按硬件手册和柜体热设计验证。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "柜体安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-349",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "请补全 MD580 的故障保护关键边界：____。",
    "options": null,
    "answer": [
      "应核对输入/输出缺相、过流、母线过欠压、制动异常等记录"
    ],
    "analysis": "诊断要结合黑盒和波形，而不是猜一个代码。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "故障保护"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-350",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "技术检查表中，MD580 的独立控制电源应填为：____。",
    "options": null,
    "answer": [
      "官网列出独立 24 V 控制电源"
    ],
    "analysis": "电源端子与电压按同机座图复核。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "独立控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-351",
    "category": "inverter",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据同版本资料，MD630 的温度降额结论为：____。",
    "options": null,
    "answer": [
      "-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%"
    ],
    "analysis": "高温条件要并入柜体散热和负载选型。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "温度降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-010",
    "category": "inverter",
    "type": "single",
    "difficulty": 3,
    "stem": "某项目使用汇川 MD800 系列多机传动变频器，规格表『变频器容量』一栏同时列出了整流单元与逆变单元。下列关于该产品功率标注的说法，正确的是？",
    "options": {
      "A": "整流单元与逆变单元功率段完全相同，均为 0.4~450kW",
      "B": "整流单元按 380~480Vac 输入并支持同功率并机，逆变单元按 G 型机双轴 1.5~18.5kW、单轴 1.5~355kW 标注，且直流侧输入为 537~679Vdc",
      "C": "逆变单元直接接入三相 380V 交流电网，无需整流单元",
      "D": "该产品的整流单元与逆变单元必须一对一配对，不能并机扩容"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD800 规格表『变频器容量』一栏明确：整流单元 22kW、45kW、110kW、160kW、355kW（同功率可并机）；逆变单元 G 型机双轴 1.5kW~18.5kW，单轴 1.5kW~355kW；『输入电压』一栏则区分整流单元三相 380Vac~480Vac（工作范围 323Vac~528Vac）与逆变单元 537Vdc~679Vdc（工作范围 350Vdc~800Vdc），故选 B。A 项把整流与逆变功率段混同（0.4~450kW 实际是 MD800 产品页给出的整机功率范围表述）；C 项违背了多机传动共直流母线的架构本质，逆变单元取的是直流母线电压；D 项与『同功率可并机』的官方标注直接矛盾。这类参数在核算产线总容量与柜体配置时必须逐项对齐。",
    "source": {
      "title": "MD800系列标准型多机传动变频器产品页（规格参数）",
      "chapter": "规格参数表：变频器容量 / 输入电压",
      "url": "https://www.inovance.com/portal/product/details?productId=82"
    },
    "tags": [
      "MD800",
      "多机传动",
      "选型",
      "整流单元"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-011",
    "category": "inverter",
    "type": "single",
    "difficulty": 3,
    "stem": "某高速流体设备（高速鼓风机）原方案采用常规变频器驱动高速永磁电机，现场反馈载波频率受限、电机发热明显、效率不理想。汇川针对该类高速流体场景推出的专用产品是？",
    "options": {
      "A": "MD500-PLUS 系列高性能矢量型变频器",
      "B": "MD520HS 系列混合碳化硅高速变频器",
      "C": "MD480 系列工程型单传变频器",
      "D": "CA300 系列中央空调专用变频器"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网对 MD520HS 的描述为『汇川首款混合碳化硅高速变频器，凭借着更高速、更高效、更稳定的产品特性，广泛应用于鼓风机、空压机和制冷机组等高速流体场景』，故选 B。A 项 MD500-PLUS 是通用高性能矢量机型，特性标签为开环零速悬停、张力控制工艺、兼容主流总线、同步机异步机兼容，并非高速专用；C 项 MD480 定位冶金、电力、矿山等工业过程领域；D 项 CA300 面向中央空调水冷机组压缩机，与高速流体场景不同。另需注意 MD510 系列高速电机专用驱动器（官网标注功率 22kW~160kW）也是高速场景的候选，方案比选时要按电机转速与功率段细分。",
    "source": {
      "title": "MD520HS系列混合碳化硅高速变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=927"
    },
    "tags": [
      "MD520HS",
      "碳化硅",
      "方案应用",
      "高速电机"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "INV-013",
    "category": "inverter",
    "type": "single",
    "difficulty": 3,
    "stem": "汇川 MD810 高性能多机传动变频器规格表中，采用 23bit 绝对值编码器闭环时，标称的调速范围与速度控制精度分别是多少？",
    "options": {
      "A": "调速范围 1:1000，速度控制精度 ±0.02%",
      "B": "调速范围 1:10000，速度控制精度 ±0.01%",
      "C": "调速范围 1:500，速度控制精度 ±0.05%",
      "D": "调速范围 1:200，速度控制精度 ±0.5%"
    },
    "answer": [
      "B"
    ],
    "analysis": "MD810 规格表『基本参数』一栏按反馈方式分级给出指标：调速范围 1:50（异步电机 V/F 控制）、1:100（异步无传感器矢量）、1:1000（异步有传感器矢量）、1:10000（23bit 绝对值编码器）；速度控制精度 ±1.0%（V/F）、±0.5%（无传感器矢量）、±0.02%（有传感器矢量）、±0.01%（23bit 绝对值编码器），故选 B。A 项是有传感器矢量控制的指标，是最强干扰项；C、D 项数值在 MD810 规格中并无对应（1:500 曾被误用于描述 MD520 开环矢量指标）。现场做高精度多轴同步时，必须按实际配置的反馈方式取指标，不能拿闭环最优值去承诺精度。",
    "source": {
      "title": "MD810系列标准型多机传动变频器产品页（规格参数）",
      "chapter": "规格参数表：基本参数（调速范围 / 速度控制精度）",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "MD810",
      "23bit编码器",
      "多机传动",
      "选型"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "confidential"
  },
  {
    "id": "INV-017",
    "category": "inverter",
    "type": "multi",
    "difficulty": 3,
    "stem": "根据汇川官网规格参数，MD520 系列变频器在显示与键盘操作、环境适应性方面，下列描述正确的有哪些？（多选）",
    "options": {
      "A": "标配 LED 键盘，可选配 LCD 外引键盘，支持中/英/俄三国语言提示操作内容",
      "B": "海拔 1000m 以下使用无需降额，1000m 以上每升高 100m 降额 1%，最高使用海拔为 3000m",
      "C": "环境温度 -10℃~+50℃，环境温度在 40~50℃ 时需降额使用，环境温度每升高 1℃ 降额 1.5%",
      "D": "支持按键锁定和功能选择，实现按键的部分锁定和定义部分按键的作用范围"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "四项均直接取自 MD520 官方规格表：『显示与键盘操作』栏目标注 LED 键盘用于显示和修改参数、变频器各种状态显示（含 STO 状态等），LCD 外引键盘为可选件、支持中/英/俄三国语言提示操作内容与参数修改；『环境』栏目标注海拔 1000m 以下无需降额，1000m 以上每升高 100m 降额 1%，最高使用海拔 3000m，超过 3000m 请联系厂家（并注明 T1 结构变频器最高使用海拔为 2000m），环境温度 -10℃~+50℃、40~50℃ 需降额、每升高 1℃ 降额 1.5%；按键锁定和功能选择栏目标注『实现按键的部分锁定和定义部分按键的作用范围，以防止误操作』。现场在高原、高温车间或需要防误操作的场合，这些降额与锁定参数必须在方案中体现，否则会出现高温跳机、高原过流等问题。",
    "source": {
      "title": "MD520高性能矢量变频器产品页（规格参数）",
      "chapter": "规格参数表：显示与键盘操作 / 环境",
      "url": "https://www.inovance.com/portal/product/details?productId=320"
    },
    "tags": [
      "MD520",
      "降额",
      "参数配置",
      "维护保养"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-025",
    "category": "inverter",
    "type": "judge",
    "difficulty": 3,
    "stem": "根据汇川官网产品介绍，DT60 系列现场级分布式变频器具备高防护特性，并配有独立的安全手册与 TÜV 功能安全认证证书。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "汇川官网 DT60 产品页资料下载区列有《DT60系列分布式变频器安全手册-中文》《FS-SGS-TÜV DT60 Series-Certification Certificate》（功能安全认证证书）以及用户手册、参数手册，且产品介绍明确其『高可靠、高防护、高安全、灵活的安装与配置功能以及高速总线通讯方案，非常适配于汽车、食品饮料、物流等输送与提升等驱动应用』，故正确。现场意义：分布式变频器直接安装在设备现场（而非电柜内），防护等级与功能安全等级是选型与验收的硬指标，需按安全手册要求核对安全功能接线与验证流程。",
    "source": {
      "title": "DT60系列现场级分布式变频器产品页（资料下载）",
      "chapter": "产品介绍 / 资料下载：安全手册、功能安全认证证书",
      "url": "https://www.inovance.com/portal/product/details?productId=741"
    },
    "tags": [
      "DT60",
      "防护等级",
      "功能安全",
      "维护保养"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-026",
    "category": "inverter",
    "type": "judge",
    "difficulty": 3,
    "stem": "根据汇川官网产品介绍，HD33 系列高性能中压传动基于 HV-IGCT 器件平台设计，整机采用 NPC 三电平技术，是水冷式中压大功率变频器，主要应用于冶金轧机、矿井提升机、船舶推进器等对精度与响应要求高的场合。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "该表述与官网 HD33 产品介绍逐项吻合：『HD33 系列产品是基于 HV-IGCT 器件平台设计，整机采用 NPC 三电平技术的中压大功率水冷变频器，满足两/四象限应用，兼容同步机和异步机控制，支持单机传动和多机传动等多种传动形式……广泛应用于冶金轧机、矿井提升机、船舶推进器等高精度高响应应用场合』。需注意同系列的 HD30（官网 id 118）是基于 HV-IGBT 器件平台、同样采用 NPC 三电平水冷方案，二者平台器件不同，选型时不可混用资料。",
    "source": {
      "title": "HD33系列高性能中压传动产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=121"
    },
    "tags": [
      "HD33",
      "中压传动",
      "三电平",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-031",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某钢厂原料库一台 75kW 桥式起重机大车行走机构原配某品牌通用变频器，客户反映两个问题：一是重载起停时偶尔出现溜钩、抱闸动作与变频器输出不同步；二是平移工况下负载摆动较大，操作手需要反复修正，效率低。客户希望整体更换为汇川方案，并要求保持原有主控 PLC 的 Profibus-DP 通信方式。请给出你的选型建议、需要向客户确认的信息，以及调试与验收要点。",
    "options": null,
    "answer": "参考答案要点：\n1) 选型方向：该工况属于起重设备的提升/平移驱动场合，应选用汇川起重专用变频器而非通用机型。官网起重子类提供 CS290、CS710、CS300、CS200（施工升降机专用）、CS740（欧式起重一体机，含卷扬式与葫芦式）等系列。提升机构（含大车行走的位势负载工况）优先推荐 CS710 系列起重专用变频器——官网明确其『带有起重设备的抱闸机构控制功能』，且『可支持起重工艺卡选件，实现变频器内置防摇、抓斗等复杂起重工艺控制』，可同时对应客户提到的溜钩与摆动两个痛点。\n2) 关键功能对应：① 溜钩与抱闸不同步——依靠 CS710 的抱闸机构控制功能，由变频器按转矩建立情况控制抱闸开合时序，实现抱闸与输出的时序配合；② 负载摆动——通过选配起重工艺卡启用内置防摇功能；若为抓斗工况则对应抓斗工艺。\n3) 通信确认：客户要求 Profibus-DP，需确认所选 CS710 机型是否需要加装 Profibus-DP 通信卡，并按官网资料核对通信配置文件（CS710 产品资料中包含 CS710DP2.GSD、CS710_COP_V1.04.eds、GSDML-V2.31-INOVANCE-CS710-20180705.xml、INOVANCE_CS710_1Axis_V1.06.xml 等通信配置文件），组态时使用对应 GSD/EDS 文件。\n4) 需向客户确认的信息：① 电机铭牌参数（功率、额定电流、极数、是否带编码器）；② 是否需要闭环（若需高精度停止与防摇效果，确认是否加装 PG 卡及编码器类型）；③ 抱闸类型（电磁抱闸的电压等级、动作时间、是否需独立控制电源）；④ 主控 PLC 型号与 Profibus-DP 站地址规划、通信速率；⑤ 是否需要能量回馈或制动单元/制动电阻（位势负载下降工况）；⑥ 现场环境（粉尘、温度、海拔），必要时确认降额；⑦ 安全功能需求（限位、超载、防遛钩等是否需要一体机方案 CS740）。\n5) 调试与验收要点：① 按官网《CS710起重专用变频器用户手册》完成电机参数自学习与抱闸时序参数设置，实测抱闸开合与转矩建立的配合；② 验证防摇工艺参数在不同载荷（空载/满载）下的效果；③ 验证 Profibus-DP 通信（站号、数据映射、断线保护动作）；④ 验证各类保护（过流、过压、超载）与限位联锁；⑤ 连续运行与满载起停测试，记录溜钩量并确认在验收标准内。",
    "analysis": "本题考察起重行业的方案级能力。最容易出错的是直接按功率选通用机型（如 MD500/MD520），忽略了起重工况对抱闸时序控制与防摇工艺的强需求——官网把 CS710 的抱闸机构控制功能与起重工艺卡单独列出，正是针对这类痛点。第二个易错点是把防摇说成标配：官网表述为『可支持起重工艺卡选件』，工艺卡必须计入报价。第三个易错点是通信配置文件：Profibus-DP 组态必须使用 CS710 对应的 GSD 文件，用错或直接用通用 GSD 会导致通信无法建立。此外位势负载的制动能量处理（制动单元/电阻或回馈）在现场必须核实，否则会出现下降工况过压跳闸。",
    "source": {
      "title": "CS710系列起重专用变频器产品页（含用户手册与通信配置文件）",
      "chapter": "产品介绍 / 资料下载：用户手册、通信配置文件",
      "url": "https://www.inovance.com/portal/product/details?productId=85"
    },
    "tags": [
      "CS710",
      "起重",
      "故障排查",
      "通信组网",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "INV-033",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某空压机厂开发新一代永磁变频螺杆空压机，主机为直驱高速永磁电机，机组内置变频器与触摸屏，出厂要求『一键启动、无需现场调试通信』。工厂同时生产双变频机型（主机变频 + 风机变频）。请给出汇川侧的专用产品选型方向，说明一体机相对通用变频器方案的集成化优势，并指出选型与出厂调试中需要重点确认的技术点。",
    "options": null,
    "answer": "参考答案要点：\n1) 选型方向：空压机属于汇川『行业专用型低压变频器』下的专机子类，可提供的产品包括 CP200 系列空压机一体机、CP650 系列空压机一体机、CP700 系列空压机一体机、MD510 系列高速电机专用驱动器（官网标注功率 22kW~160kW）、MD520HS 系列混合碳化硅高速变频器。\n2) 单变频与双变频机型对应：① 单变频机型对应 CP650 系列空压机一体机——官网定位为『空压机应用的单变频一体机』，支持壁挂式安装，内置 220VAC 交流电源、24V 对外输出、工频接触器，内置集成 PT100 和 PTC 等检测电路和保护电路。② 双变频机型对应 CP700 系列一体机——官网明确『CP700 系列空压机一体机包含 CP700 和 CP701 机型，CP700 采用双变频和工频控制，CP701 采用双变频控制』，采用钣金结构、支持壁挂式安装，内置 220VAC 交流电源、24V 对外输出、工频接触器，内置集成 PT100 等检测电路和保护电路。③ 若主机为高速永磁直驱电机，需重点评估 MD510 系列高速电机专用驱动器或 MD520HS 系列混合碳化硅高速变频器（官网明确其广泛应用于鼓风机、空压机和制冷机组等高速流体场景）。\n3) 集成化优势（据官网 CP200/CP650/CP700 描述归纳）：控制回路端子采用插拔式接插端子并做防错插设计，接线简单不易接错；内置 220VAC 交流电源与 24V 对外输出，无需外配控制变压器与开关电源；内置工频接触器；内置集成 PT100/PTC 检测电路和保护电路；软件采用专机软件，与 HMI、物联网等设备通信无须调试，实现一键启动。相比通用变频器方案，柜内器件数量、接线量与现场调试时间都显著下降。\n4) 需重点确认的技术点：① 电机类型与最高运行频率（永磁同步/异步、极数、最高转速）——决定是否需要 MD510/MD520HS 这类高速机型；② 单变频还是双变频（主机+风机），是否保留工频旁路（CP700 含工频控制，CP701 为双变频）；③ 机组控制电源与 24V 负载总容量，确认一体机内置电源容量是否够用；④ 温度检测点数与传感器类型（PT100/PTC）是否与内置检测电路匹配；⑤ 触摸屏与物联网模块的通信方式与协议（专机软件免调试的前提是使用汇川配套 HMI/物联网设备）；⑥ 安装方式（壁挂/柜内）与散热条件、防护要求；⑦ 出口机型需确认 CE/UL 等认证要求。\n5) 出厂调试要点：利用专机软件完成参数一键初始化与宏参数配置，验证一键启动流程、工频/变频切换逻辑（CP700）、温度检测与保护动作、通信联调（HMI 与物联网），并做满载加载试验确认无过流、无过热报警。",
    "analysis": "本题考察专机方案的集成化价值理解与选型边界。三个高频错误：一是把双变频需求配成 CP650（单变频一体机），官网明确 CP650 为空压机应用的『单变频一体机』，双变频必须选 CP700 系列；二是把 CP700 与 CP701 的配置记反——官网写明 CP700 采用双变频和工频控制、CP701 采用双变频控制，这直接决定是否需要工频旁路接触器；三是忽略高速永磁直驱主机需要 MD510/MD520HS 这类高速专用机型，仍按普通一体机配型，导致最高输出频率与载波能力不足。此外『与 HMI、物联网等设备通信无须调试』是使用汇川配套设备与专机软件的前提，换成第三方 HMI 就仍需按协议调试，这一点在向客户承诺时必须说清。",
    "source": {
      "title": "CP650系列空压机一体机产品页 / CP700系列空压机一体机产品页 / MD520HS系列混合碳化硅高速变频器产品页",
      "chapter": "产品介绍",
      "url": "https://www.inovance.com/portal/product/details?productId=94"
    },
    "tags": [
      "CP700",
      "CP650",
      "空压机",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "INV-051",
    "category": "inverter",
    "type": "judge",
    "difficulty": 3,
    "stem": "汇川 MD880 系列多机传动变频器功率范围覆盖 3.7kW~5600kW，其官网标注的设计寿命可支持连续满载运行 10 年以上，最高转速可达 25000 转，转矩精度可优于 3%。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "该表述与 MD880 官网产品介绍及产品特性及优点一致：产品介绍写明『功率范围覆盖 3.7kW~5600kW』；『性能稳定可靠的集大成者』一条写明『设计寿命可支持连续满载运行 10 年以上，具有黑匣子功能，最高转速可达 25000 转，转速波动可达到 0.01%，转矩精度可优于 3%』。需要提醒的是，这些指标是平台级标称能力，实际能达到的转速与转矩精度取决于所选模块型号、是否配置编码器闭环、电机类型与整定质量——最高转速 25000 转通常对应高速电机与闭环配置，转矩精度 3% 也是矢量控制下的指标，不能对客户笼统承诺为所有配置的保证值。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页（产品介绍 / 产品特性及优点）",
      "chapter": "产品介绍 / 产品特性及优点：性能稳定可靠的集大成者",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "性能指标",
      "选型",
      "多机传动"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-052",
    "category": "inverter",
    "type": "judge",
    "difficulty": 3,
    "stem": "根据汇川官网产品资料，MD880 系列内置参数互联，支持双通道通讯、功能图调试、数字化远程平台调试检测监控；其模块化设计涵盖单传变频器、基本整流、回馈整流、有源整流、逆变与 DC/DC 等类型，可灵活搭配。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "两项表述均逐字来自 MD880 官网产品特性及优点：『兼容并蓄的完美适配能力』一条为『内置参数互联，支持双通道通讯、功能图调试、数字化远程平台调试检测监控』；『高度灵活的模块化设计』一条为『产品涵盖类型：单传变频器、基本整流、回馈整流、有源整流、逆变、DC/DC，可灵活搭配』。现场意义在于：选择基本整流、回馈整流还是有源整流，直接决定能量能否回馈电网以及网侧谐波与功率因数水平——有源整流（AFE）可实现能量双向流动并显著改善谐波，但成本与调试复杂度也更高。方案阶段若只按功率选型而忽略整流形式，后期很容易在谐波治理或能量回馈需求上返工。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页（产品特性及优点）",
      "chapter": "产品特性及优点：兼容并蓄的完美适配能力 / 高度灵活的模块化设计",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "模块化",
      "整流单元",
      "调试",
      "谐波治理"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "INV-054",
    "category": "inverter",
    "type": "judge",
    "difficulty": 3,
    "stem": "汇川 HD5X 系列通用型高压变频器是基于 HV-IGBT 应用、单元级联架构的超大功率水冷型高压变频器，具备工变频无扰切换技术，支持带电抗器无扰投切和快速同步投切，并具有成熟可靠的一拖多技术。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "该表述与 HD5X 官网产品介绍及产品概览一致：『HD5X 系列单元级联超大功率高压变频器是基于 HV-IGBT 应用、单元级联架构的超大功率水冷型高压变频器』，主要应用于天然气管道压缩机、LNG 制冷压缩机、抽水蓄能电站软启动、大型试验站电源、大型风洞实验等场合；产品概览『工变频无扰切换技术』一条写明『支持带电抗器无扰投切和快速同步投切，网侧冲击电流小，实现无缝切换，适用于大功率软启应用场合，成熟可靠的一拖多技术，也节省了用户的一次投入』。注意与中压产品区分：HD30 基于 HV-IGBT 器件平台、HD33 基于 HV-IGCT 器件平台，二者均为 NPC 三电平水冷中压变频器，与 HD5X 的高压单元级联架构不是同一技术路线。",
    "source": {
      "title": "HD5X系列通用型高压变频器产品页（产品介绍 / 产品概览）",
      "chapter": "产品介绍 / 产品概览：工变频无扰切换技术",
      "url": "https://www.inovance.com/portal/product/details?productId=133"
    },
    "tags": [
      "HD5X",
      "高压变频器",
      "水冷",
      "一拖多",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "INV-056",
    "category": "inverter",
    "type": "short",
    "difficulty": 3,
    "stem": "某污水处理厂拟新建一条由多台电机协同驱动的输送与搅拌产线，客户希望减少电柜占地面积与配电容量，并希望所有轴能在同一套系统内统一调试。请结合汇川多机传动产品线说明方案思路。",
    "options": null,
    "answer": "参考答案要点：\n1) 方案思路：该需求属于典型的多机传动（多传）应用——多台电机共用整流单元与直流母线，各轴由独立逆变单元驱动。共直流母线带来的直接收益是：电机减速或位势负载下放时的再生能量可在直流母线内被其他正在电动运行的轴吸收，从而减少制动单元/制动电阻配置、降低系统配电容量；同时书本式结构可显著压缩柜体尺寸。\n2) 可选平台（据官网）：① MD810 高性能多机传动变频器——定位为汇川新一代低压多点传动系统，共母线拓扑搭配书本式结构，可节省系统配电成本、减少柜体尺寸；支持多种现场总线通讯，内置多电机驱动算法；支持位置控制、多轴同步、负荷分配等高端应用功能；与 AM610/H3U 等 PLC 高速总线组网，实现一网调试、一网驱控，兼容异步及同步伺服电机，搭载 23bit 绝对值编码器。② MD800 标准型多机传动变频器——官网定位为多机传动产品家族中的一员，是针对传统 OEM 行业小功率市场多点传动应用场合推出的全新一代标准型多点传动平台产品；其组网约束以规格表中的「单轴逆变单元数量 + 2×双轴逆变单元数量 ≤ 8」给出（即单台整流最多带 8 轴），现场按轴数配置时以此核算。③ 若为冶金、造纸等连续性生产线或大型设备场合，应升级到 MD880/MD880LC 高端工程型平台（单机传动与多机传动两种拓扑形态，400V/690V，3.7kW~5600kW）。\n3) 需向客户确认的关键信息：① 各轴功率、轴数及单轴/双轴逆变单元配置；② 是否存在能量互馈工况（决定整流单元容量与是否需要回馈/有源整流）；③ 主控 PLC 品牌与总线类型（EtherCAT / PROFINET / Ethernet/IP 或 RS485）；④ 是否需要同步伺服电机与高精度闭环；⑤ 电柜空间、散热与安装方式；⑥ 是否有多轴同步或负荷分配等工艺要求；⑦ 认证要求（出口项目）。\n4) 落地建议：统一后台调试软件与参数模板，先用一套系统完成组态与电机参数自学习，再批量下发到各轴，缩短产线调试周期。",
    "analysis": "本题考察多机传动方案的构建能力而非单机选型。最常见的错误是按『多少台变频器』简单相加报方案，忽略整流单元与逆变单元必须分开核算容量，也忽略共直流母线带来的配电与制动配置优化空间。第二个易错点是把 MD800 与 MD810 的能力颠倒，例如把 23bit 绝对值编码器、一网调试一网驱控说成 MD800 的特性——官网明确这些属于 MD810。第三个易错点是遇到冶金、造纸等重工况仍停留在 OEM 级平台，此时应升级到 MD880/MD880LC。",
    "source": {
      "title": "MD810高性能多机传动变频器产品页 / MD800系列标准型多机传动变频器产品页 / MD880风冷型多机传动变频器产品页",
      "chapter": "产品介绍 / 产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=83"
    },
    "tags": [
      "MD810",
      "多机传动",
      "共直流母线",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-057",
    "category": "inverter",
    "type": "short",
    "difficulty": 3,
    "stem": "某矿山项目需要为井下驱动设备配置防爆变频方案，现场同时存在 660V/1140V 低压设备与 3300V 工作面设备。请按汇川官网产品说明给出选型思路，并指出方案沟通中必须核实与不能承诺的事项。",
    "options": null,
    "answer": "参考答案要点：\n1) 产品分类（据官网防爆变频器分类）：整机类为 BPJ 系列（660V/1140V 矿用变频器）与 BPJV 系列（3300V 矿用高压（组合）变频器）；机芯类为 CM3000 系列与 CM3000H 系列高压防爆变频器。\n2) 660V/1140V 场合选型：BPJ 系列 660V/1140V 矿用变频器，官网定位为『矿用隔爆兼本质安全型交流变频器，可驱动永磁同步电机与异步电机，采用高性能 SVC 矢量控制，起动电流小，转矩大，过载能力强，可远距离驱动电机』，适用于煤矿井下皮带机、刮板机、乳化液泵和绞车等负载；具备自适应功率平衡功能，保证多机负载出力一致；兼容智慧矿山接口，可搭载矿鸿系统，支持 MDTP 总线协议。\n3) 3300V 工作面场合选型：BPJV 系列 3300V 矿用高压（组合）变频器，官网定位为『3300V 矿用隔爆兼本质安全型高压（组合）变频器，采用三电平拓扑结构，高性能 SVC 矢量控制』，适用于煤矿井下工作面刮板机和乳化液泵等负载；最远驱动距离可达 4000 米，启动转矩大于电机额定转矩 2.2 倍。\n4) 机芯方案：若客户自行集成防爆壳与热管，可采用 CM3000/CM3000H 机芯。CM3000H 两象限包含 690V、1140V 两个电压等级，最大功率可达 1000kW（690V：55-500kW；1140V：37-1000kW），与热管、防爆壳组成防爆变频一体机，应用于矿山提升机、皮带机、刮板机、采煤机、猴车、风机水泵等；CM3000H 四象限支持 690V 和 1140V，最大功率可达 710kW，具备能量回馈功能，可将 95% 以上的再生电能回收利用。CM3000 机芯输出电压等级 3300V，采用二极管箝位式三电平拓扑与去离子水冷散热，支持 1000m 以内长线缆驱动。\n5) 必须核实的事项：① 现场实际电压等级与供电制式；② 负载类型（皮带机、刮板机、乳化液泵、绞车、提升机等）与是否重载启动；③ 电机类型（永磁同步/异步）与是否多机功率平衡要求；④ 驱动距离与电缆长度；⑤ 是否需要能量回馈（位势负载）；⑥ 矿用防爆认证的具体要求与煤安标志，须以随机证件为准；⑦ 与矿方智慧矿山系统的接口协议（矿鸿/MDTP 等）。\n6) 不能承诺的事项：不得自行承诺具体的防爆认证代号或证书编号——官网仅给出『矿用隔爆兼本质安全型』这一表述；也不得凭官网未公开的数据承诺 BPJ/BPJV 的功率范围（官网未列出），需以正式选型手册与商务确认为准。",
    "analysis": "本题考察矿用防爆场合的方案能力与合规边界意识。常见错误有三个：一是把 3300V 需求错配到 BPJ（其官网电压等级为 660V/1140V），或反过来把 660V/1140V 设备配成 BPJV；二是把整机与机芯混为一谈——BPJ/BPJV 是整机形态，CM3000/CM3000H 是机芯形态，后者需要客户自行集成防爆壳与散热（CM3000 采用去离子水冷）；三是凭印象承诺防爆认证代号（如 Ex d、Ex ib）或编造功率范围，官网仅表述为『矿用隔爆兼本质安全型』且未公开 BPJ/BPJV 的功率数据。防爆与矿用项目涉及安全合规，任何证书与认证范围都必须以正式证件与商务确认为准。",
    "source": {
      "title": "BPJ系列660V/1140V矿用变频器产品页 / BPJV系列3300V矿用高压（组合）变频器产品页 / CM3000系列高压防爆变频器产品页 / CM3000H系列高压防爆变频器产品页",
      "chapter": "产品介绍 / 产品概览 / 规格参数",
      "url": "https://www.inovance.com/portal/product/details?productId=889"
    },
    "tags": [
      "BPJ",
      "BPJV",
      "CM3000",
      "防爆",
      "矿用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "INV-058",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某钢厂一条新建连续生产线拟采用汇川 MD880 系列作为主传动，现场包含轧机主传动与多台辅传动电机，车间夏季环境温度可达 40℃ 以上，粉尘较重，且厂区电网存在电压波动。客户在方案交流时提出三个问题：一是应该选风冷机型还是水冷机型；二是整流部分应该怎么配；三是如何保证连续生产不因变频器停机而中断。请给出你的回答要点，并列出需要向客户确认的关键信息。",
    "options": null,
    "answer": "参考答案要点：\n1) 风冷与水冷的选择：① MD880 风冷型多机传动变频器与 MD880LC 水冷型多机传动变频器同属 MD880 高端工程型平台，均提供单机传动与多机传动两种拓扑形态。② 官网应用定位上，MD880 系列可广泛应用于冶金、造纸等连续性生产线以及船舶、钻机、盾构机、港口岸桥等大型设备；MD880LC 系列可广泛应用于冶金、船舶、海洋钻机、盾构机、大功率水冷测试台等大型连续性生产作业设备。③ 选择依据：水冷机型的价值在高功率密度与散热能力，适合大功率、柜体空间受限、环境温度高或粉尘重的场合；但水冷需配套闭式冷却水系统（水质、流量、温度、压力保护），会增加一次投入与运维复杂度。风冷机型方案简单、维护门槛低，适合功率相对可控、通风条件可保证的柜内安装场合。在 40℃ 以上、粉尘较重的车间，若走风冷路线，必须核算柜内温升并落实独立风道/柜体通风与滤网维护；若走水冷路线，需先确认厂区是否有可靠的循环水条件。\n2) 整流部分的配置：MD880 的模块化设计涵盖单传变频器、基本整流、回馈整流、有源整流、逆变、DC/DC，可灵活搭配。① 若无能量回馈需求、谐波要求不严，可选基本整流；② 若存在位势负载或频繁制动、希望再生能量回馈电网，应选回馈整流；③ 若对网侧谐波与功率因数要求严格（如厂区已有谐波考核指标），有源整流是改善谐波与功率因数的手段，但成本与调试复杂度更高。轧机主传动属于典型的高动态、可能频繁制动的负载，能量流向必须与客户逐一确认。\n3) 连续生产不中断：① 主传动优先选用具备高可靠设计定位的平台，MD880 官网标注设计寿命可支持连续满载运行 10 年以上、具有黑匣子功能，便于故障后快速定位；② 对关键辅传动可考虑多传共直流母线方案，减少单点设备数量与配电容量；③ 变频器具备完善的保护功能（MD880 平台级与 MD580 等规格表中列出的保护项包括过流、过载、过压、欠压、过热、输出缺相、输入缺相、通讯故障、编码器故障检测、EEPROM 读写故障、缓冲电阻故障、制动回路过流保护、制动电阻短路保护、制动管直通保护等），方案中应据此设置报警与联锁；④ 电网波动方面，需与客户确认波动范围与持续时间，评估是否需要低电压穿越能力（如 MD580 官网明确具备低电压穿越功能）或更高的电网适应性配置，不能默认所有机型都具备同等电网穿越能力。\n4) 需向客户确认的关键信息：① 各传动点功率、轴数、过载要求与是否位势负载；② 电机类型（异步/永磁同步）、是否需要编码器闭环与精度指标；③ 电网电压等级（400V 或 690V）、变压器容量、谐波与功率因数考核要求；④ 车间环境温度、粉尘、海拔与安装方式（柜内/水冷机组）；⑤ 是否有厂区循环水条件（决定水冷可行性）；⑥ 主控 PLC 与总线类型；⑦ 连续生产对停机时间的要求与备件策略；⑧ 出口或行业认证要求。",
    "analysis": "本题考察高端工程型传动的方案级判断能力。三个高频错误：一是把风冷与水冷当成简单的价格选项，忽略水冷背后的冷却水系统条件与运维要求，或在高粉尘高温车间盲目走风冷而不核算柜内温升；二是把整流形式当成默认配置，不做能量流向分析——轧机类负载若频繁制动又选基本整流，再生能量只能靠制动电阻消耗，会造成能耗与散热问题，而盲目上有源整流又会显著抬高成本；三是把『高可靠』当成对所有机型的普遍承诺，电网穿越能力、低电压穿越等是特定系列的官网标注能力，不能跨系列套用。方案沟通中的正确做法是把不确定项全部列出，由客户确认后再定配置。",
    "source": {
      "title": "MD880风冷型多机传动变频器产品页 / MD880LC水冷型多机传动变频器产品页 / MD580高性能工程型变频器产品页（规格参数）",
      "chapter": "产品介绍 / 产品特性及优点 / 规格参数表：保护功能",
      "url": "https://www.inovance.com/portal/product/details?productId=109"
    },
    "tags": [
      "MD880",
      "水冷",
      "整流单元",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "INV-352",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD520 断电的残余电压并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“等待规定时间并测量直流母线电压后再作业”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。PM 电机被外力带动仍可能产生电压。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D02",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 断电",
      "残余电压"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-353",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD520 PM 电机的外拖风险相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“外力拖动 PM 电机可能在驱动端产生危险电压”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。机械负载与旋转惯量必须纳入隔离。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D03",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 PM 电机",
      "外拖风险"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-354",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD580 的SVC 调速范围上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“1:200”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。控制模式和电机类型共同限定性能。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D04",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "SVC 调速范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-355",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD580 的高海拔边界并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“最高 4000 m；超过 2000 m 需隔离变压器条件”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。海拔还影响散热与电气绝缘。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D05",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "高海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-356",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD580 T10～T12 的载波限制相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“最高 6 kHz”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。T2～T9 的 12/8 kHz 限制不能套给大机座。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D06",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "载波限制"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-357",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD580 T10～T12 的柜体安装上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“单机柜内不宜并排或上下叠装”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。散热要求按硬件手册和柜体热设计验证。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D07",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 T10～T12",
      "柜体安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-358",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD580 的故障保护并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“应核对输入/输出缺相、过流、母线过欠压、制动异常等记录”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。诊断要结合黑盒和波形，而不是猜一个代码。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D08",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "故障保护"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-359",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD580 的独立控制电源相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“官网列出独立 24 V 控制电源”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。电源端子与电压按同机座图复核。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD580 Single Drive Series 产品页",
      "chapter": "知识点 T-D09",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580",
      "独立控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-360",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD630 的温度降额上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“-20～60 ℃，超过 50 ℃每升高 1 ℃降额 2.5%”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。高温条件要并入柜体散热和负载选型。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D10",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "温度降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-361",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD630 的海拔降额并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“超过 1000 m 每升高 100 m 降额 1%，最高 3000 m”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。海拔影响冷却和绝缘边界。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D11",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "海拔降额"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-362",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD630 的强弱电分离相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“动力电缆与信号电缆间距大于 30 cm”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。布线还需注意交叉角度和屏蔽接地。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D12",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "强弱电分离"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-363",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD630 的PE 接线上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“PE 不经断路器，不与 N 共用”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。保护接地属于不可省略的安全条件。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D13",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "PE 接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-364",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD630 的外部控制电源并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“E24V 为外部 24 V 端子”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。端子定义须按同型号用户手册确认。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D14",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "外部控制电源"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-365",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD630 的CiA 402 前提相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“A0-00 复位、F0-03=2、F0-29=9、nd-00=1 等条件需核对”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。CiA402 不是所有总线分支的默认状态。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D15",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "CiA 402 前提"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-366",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD630 的故障响应设置上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“手册列出 11 类动作，但并非所有故障可配置”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。不可配置故障要按手册和风险评估处理。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630系列通用型变频器用户手册-CN-A00（PS00021993）",
      "chapter": "知识点 T-D16",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630",
      "故障响应设置"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-367",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD800 的工作温度并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“有过载 -20～40 ℃，无过载 -20～50 ℃；超限每 ℃降额 2.5%”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。热设计必须按过载状态区分。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D17",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "工作温度"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-368",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD800 的海拔边界相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“星形电网最高 4000 m，角形电网最高 2000 m；1000 m 以上降额”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。电网形态和绝缘要求要一起确认。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D18",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "海拔边界"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-369",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD800 的安装间距上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“侧面至少 55 mm，上下至少 200 mm”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。书本型也有明确散热空间。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D19",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "安装间距"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-370",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD800 的短路容量并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“手册给出 100 kA 短路能力边界”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。还需结合上级保护器件和电网。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD800系列多机传动变频器用户手册-CN-A07、综合手册-CN-A04、通信手册-CN-B05",
      "chapter": "知识点 T-D20",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD800",
      "短路容量"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-371",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD810 的逆变控制模式相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“IM 支持 V/f、SVC、FVC；PMSM 支持 SVC、FVC”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。控制模式与反馈附件、电机类型密切相关。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D21",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "逆变控制模式"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-372",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD810 的载波范围上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“V/f 0.8～12 kHz，SVC/FVC 2～6 kHz”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。载波频率不同于输出频率。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D22",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "载波范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-373",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD810 的速度范围并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“V/f 1:50、IM SVC 1:100、FVC 1:1000”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。性能值要注明对应模式与电机。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D23",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "速度范围"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-374",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD810 整流的通信协议相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“Modbus RTU/PROFIBUS/CANopen/CANlink/PROFINET”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。整流与逆变通信清单不同。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D24",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 整流",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-375",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD810 逆变的通信协议上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“Modbus RTU/PROFIBUS/CANopen/CANlink/EtherCAT”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。逆变 EtherCAT 为当前手册支持，不应沿用旧风险备注。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D25",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810 逆变",
      "通信协议"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-376",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD810 的冷却方案并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“风冷和水冷按具体模块选”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。冷却配件和柜内热设计要同系统核对。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D26",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "冷却方案"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-377",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD810 的母线故障定位相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“先比对整流输入、母线工作范围与逆变负载记录”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。多机系统的故障应按模块角色分层。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD810系列多机传动变频器硬件手册-CN-A04、功能手册 A05",
      "chapter": "知识点 T-D27",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD810",
      "母线故障定位"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-378",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD520 制动的现场接线上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。",
    "options": null,
    "answer": "评分要点：①核心结论为“按 T8 以下 (+)/BR、T9 以上 (+)/(-) 的同机座图接线”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。任何接线前先执行断电、等待、测量。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD520系列通用变频器硬件手册-CN-B02、功能手册-CN-B05、安全手册-CN-A04",
      "chapter": "知识点 T-D28",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520 制动",
      "现场接线"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-379",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "客户要求解释 MD580 PROFIBUS 的通信速率并给出现场验证方案。请按安全、测量、参数/配置和复测顺序作答。",
    "options": null,
    "answer": "评分要点：①核心结论为“9.6 kbit/s～12 Mbit/s，距离随速率约 1200～100 m”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。实际距离、终端和屏蔽按通信手册核对。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD580系列低压高性能工程型变频器用户/硬件/功能/通信手册 A03/B03；690 V 用户手册 A04",
      "chapter": "知识点 T-D29",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD580 PROFIBUS",
      "通信速率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-380",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "现场出现与 MD520/MD580 的输出频率相关的异常。请写出你会收集哪些证据、如何隔离风险、怎样定位与验证。",
    "options": null,
    "answer": "评分要点：①核心结论为“599 Hz 是驱动上限，不是电机许可转速”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。客户高速需求还需核对电机和机械强度。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "变频器速查审计（已核验）与变频器二次学习补充（2026-09）",
      "chapter": "知识点 T-D30",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD520/MD580",
      "输出频率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "INV-381",
    "category": "inverter",
    "type": "scenario",
    "difficulty": 3,
    "stem": "新旧工程在 MD630 故障记录的诊断取证上存在差异。请说明迁移前的版本核对、调试步骤和验收边界。使用与复核提示本题库用于培训和能力测评准备，不取代同型号同版本手册、现场风险评估或正式项目技术确认。如手册更新、型号停产或商务条款变化，应先复核题中结论及答案，再用于考试。资料来源索引本地已核验资料：伺服速查审计、伺服与电机二次学习补充、变频器速查审计、变频器二次学习补充；题后注明的系列手册按分支和版本号复核。以下官网页面用于公开产品定位及已核验特性。[表格开始]官网来源 |链接 |汇川技术官网资料下载入口 |https://www.inovance.com/global/support/download-documentation.html |SV660 Series 产品页 |https://www.inovance.com/global/content/details_815_403229.html |SV670 Series 产品页 |https://www.inovance.com/global/content/details_815_403230.html |SV680 Series 产品页 |https://www.inovance.com/global/content/details_815_557127.html |IS810 Series 产品页 |https://www.inovance.com/global/content/details_815_403232.html |MD520 Series 产品页 |https://www.inovance.com/global/content/details_815_403226.html |MD580 Single Drive Series 产品页 |https://www.inovance.com/global/content/details_815_555072.html |MD630 Series 产品页 |https://www.inovance.com/global/content/details_815_580654.html |MD800 Series 产品页 |https://www.inovance.com/global/content/details_815_403213.html |MD810 Series 产品页 |https://www.inovance.com/global/content/details_815_403220.html |MD880 Series 官方产品资料 |https://www.inovance.com/owfile/ProdDoc/upload-phase-2/2023/03/16/e8e60ca9-c43a-4740-ac0a-8cc7b9d1430c.pdf |[表格结束]",
    "options": null,
    "answer": "评分要点：①核心结论为“读 30 组历史故障并核对时间、负载、电网、参数和波形”；②先停机/断电/验证残余电压及机械负载风险；③保留完整型号、手册版本、故障/波形、参数、接线、主站和电机反馈证据；④按手册隔离变量，复测并记录；⑤安全功能须按整机风险评估及对应手册验证。历史记录是线索，不是单独的最终根因。",
    "analysis": "按评分要点给分；合理等价步骤可酌情给分。",
    "source": {
      "title": "MD630 Series 产品页",
      "chapter": "知识点 T-D31",
      "url": "https://www.inovance.com/portal/product?pathIds=1&typeId=1"
    },
    "tags": [
      "MD630 故障记录",
      "诊断取证"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-001",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川技术推出首个应用 EtherCAT 总线的小型 PLC、被官方定位为「EtherCAT 总线高性能小型 PLC」的是下列哪个系列？",
    "options": {
      "A": "H1U/S 系列",
      "B": "H3U/S 系列",
      "C": "H5U 系列",
      "D": "Easy301 系列"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网对 H5U 的定位是「EtherCAT 总线高性能小型 PLC」，产品简介明确写到「汇川技术推出首个应用 EtherCAT 总线的小型 PLC H5U」，因此 C 正确。A 的 H1U/S 是简易型经济系列，靠 3 轴 100KHz 脉冲做定位，本体不带 EtherCAT；B 的 H3U/S 是 CAN 总线高性能小型 PLC，走脉冲 + CANopen/CANlink 路线；D 的 Easy301 属于 Easy 全场景紧凑型系列中的入门机型，EtherCAT 主站能力集中在 Easy511、Easy52X 等机型上，301 本身不以 EtherCAT 为卖点。现场选型时不要把「小型机」和「不带总线」划等号，H5U 与 Easy511 都属于小型机里带 EtherCAT 主站的产品。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=54"
    },
    "tags": [
      "H5U",
      "EtherCAT",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-002",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 AM400、AM600、AM500、AM760 等中型 PLC 系列，官方配套的后台编程软件是哪一个？",
    "options": {
      "A": "AutoShop",
      "B": "InoProShop",
      "C": "iFA Evolution（驭沃）",
      "D": "InoDriveShop"
    },
    "answer": [
      "B"
    ],
    "analysis": "AM400、AM600、AM300、AM500、AM760 以及 AC700/AC800 的产品页「资料下载」中，软件类资料统一为「InoProShop 中型PLC后台编程软件完整包」，编程手册也是《中型PLC编程手册（软件使用篇）》，因此 B 正确。A 的 AutoShop 是小型 PLC 的后台软件，官方挂在 H5U、H3U、H1U、Easy 系列的下载区，是本题最主要的干扰项；C 的 iFA Evolution（驭沃）是 EVO400/EVO500/EVO700/EVO800 与功能安全 PLC 的新一代全场景智能化平台，不用于 AM 系列；D 的 InoDriveShop 是伺服调试软件。现场遇到「AM 系列连不上、找不到工程文件」的问题，先确认工程师用的到底是 InoProShop 还是 AutoShop。",
    "source": {
      "title": "汇川技术 AM600 系列通用型中型 PLC 产品页",
      "chapter": "资料下载 / 软件",
      "url": "https://www.inovance.com/portal/product/details?productId=52"
    },
    "tags": [
      "AM400",
      "AM600",
      "InoProShop",
      "编程软件"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-003",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川官网将 EVO400、EVO500、EVO700、EVO800 以及 EVO1000EF 功能安全 PLC 的编程平台统一描述为下列哪一个？",
    "options": {
      "A": "AutoShop 小型 PLC 后台编程软件",
      "B": "InoProShop 中型 PLC 后台编程软件",
      "C": "iFA Evolution（驭沃）全场景智能化工业控制软件平台",
      "D": "iFA EX 机电一体化仿真软件"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网对 iFA Evolution（驭沃）的定义是「全场景智能化工业控制软件平台」，可对汇川全体系自动化产品进行组态、编程、调试和仿真；EVO400 被明确写成「基于 iFA Evolution（驭沃）平台自主研发的新一代标准中型 PLC」，EVO52X、EVO760、EVO800、EVO1000EF 的下载区软件也统一是 iFA Evolution，因此 C 正确。A 的 AutoShop 只覆盖小型 PLC；B 的 InoProShop 覆盖的是 AM/AC 系列这一代中型控制器；D 的 iFA EX 是机电一体化仿真软件（虚拟调试），它是 iFA 体系里的仿真工具而非组态编程主体，是很容易混淆的一项。",
    "source": {
      "title": "汇川技术 iFA Evolution（驭沃）产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=652"
    },
    "tags": [
      "EVO",
      "iFA Evolution",
      "编程软件"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-005",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 H1U/S 系列属于经济型小型 PLC，其官网标称的点数覆盖范围是多少？",
    "options": {
      "A": "14~60 点",
      "B": "8~32 点",
      "C": "16~128 点",
      "D": "32~256 点"
    },
    "answer": [
      "A"
    ],
    "analysis": "H1U 产品页原文为「该系列 PLC 点数覆盖 14~60 点。是小型自动化设备高性价比的选择」，A 正确。H1U 的关键定位是「小体积、大程序容量（无需外部扩展内存卡即可达到 16K 步）+ 3 轴高速 100K 脉冲」，本体标配 2 个独立串口并支持 USB 监控下载，支持 CANlink3.0 组网。B、C、D 都是常见的「凭印象填」的干扰项：8~32 点通常是更小型的专用控制器形态，128 点以上一般要靠扩展模块或直接进入中型 PLC 的范畴。向客户报价时，点数上限要连同扩展能力一起讲清楚，避免客户按最大点数理解成单机本体就能做到。",
    "source": {
      "title": "汇川技术 H1U/S 系列简易型小型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=59"
    },
    "tags": [
      "H1U",
      "选型",
      "点数"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-009",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 EVO1000EF 系列功能安全 PLC，官方标称最高可达到的功能安全等级是？",
    "options": {
      "A": "PL c / Cat.2 / SIL 1",
      "B": "PL d / Cat.3 / SIL 2",
      "C": "PL e / Cat.4 / SIL 3",
      "D": "仅满足 IEC 61131-3，不涉及功能安全等级"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网对 EVO1000EF&Hi50 的描述是「符合 IEC 61508、IEC 62061 以及 ISO 13849 等国际安全标准，最高可达 PL e/Cat.4/SIL 3 的安全级别，具备高可靠性和实时性」，并采用冗余架构和故障安全机制、支持本地和远程扩展安全 I/O，因此 C 正确。A、B 都是低一档的安全等级，属于「记不牢就往低报」的典型错误；D 把功能安全 PLC 混同于普通 PLC，安全 PLC 的核心价值恰恰在于安全功能而不是编程标准符合性。对客户讲这类型号时应同时说明适用领域（汽车制造、智能物流、新能源、半导体、食品饮料等对机械安全要求严苛的场合），避免被当成普通 CPU 报价。",
    "source": {
      "title": "汇川技术 EVO1000EF 系列功能安全 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=797"
    },
    "tags": [
      "EVO1000EF",
      "功能安全",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-012",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "某客户做空调箱、水处理等过程控制项目，控制点数不多但对内外网隔离、EtherNet/IP 与 OPC UA 接入上位系统有明确要求，且希望走标准化编程模板降低人员培训成本。按汇川官网定位，下列系列中最贴合的是？",
    "options": {
      "A": "H1U/S 简易型小型 PLC",
      "B": "AM300 系列纯网络型中型 PLC",
      "C": "H5U 系列 EtherCAT 总线高性能小型 PLC",
      "D": "EVO1000EF 功能安全 PLC"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网对 AM300 的定位是「纯网络型中型 PLC」，明确写到集成 EtherNet/IP、OPC UA、Modbus TCP（支持两路不同网段的 IP 地址）、TCP/IP、RS485、CAN 总线等全球标准工业网络，主要应用于暖通空调、化工印染、水处理、污水处理、热处理等过程控制行业，并「可搭载汇川技术基于 ISA88 标准开发的 InoQuickPro 标准化编程模板框架」，与题目要求逐条对应，B 正确。A 的 H1U 是经济型小型机，无 OPC UA 能力；C 的 H5U 强项是 EtherCAT 带轴而非过程控制组网；D 的 EVO1000EF 是功能安全产品，用在这里既不经济也不对口。",
    "source": {
      "title": "汇川技术 AM300 系列纯网络型中型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=454"
    },
    "tags": [
      "AM300",
      "过程控制",
      "通信组网",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-019",
    "category": "plc",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 H5U 系列小型 PLC 主机本体自带 16 路输入和 14 路输出，其中包含 4 路高速输入、4 路中速输入和 4 路高速输出。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "该描述与 H5U 产品页「支持扩展模块」条目完全一致：「主机本体自带 16 路输入和 14 路输出，含 4 路高速输入、4 路中速输入和 4 路高速输出，可实现 4 轴脉冲输出和 4 轴编码器计数；最大可扩展 16 个本地扩展模块」。判断此类题的关键是抓住「16 进 14 出」这个不对称配置，以及高速点数与轴数的对应关系：4 路高速输出对应 4 轴脉冲输出，4 路高速输入对应编码器计数。现场做 IO 点表时若按 16 进 16 出预留端子，会直接导致接线图返工。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页",
      "chapter": "产品概览 / 支持扩展模块",
      "url": "https://www.inovance.com/portal/product/details?productId=54"
    },
    "tags": [
      "H5U",
      "I/O点数",
      "接线安装"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-020",
    "category": "plc",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 AM 系列中型 PLC 与 Easy 系列小型 PLC 使用同一套后台编程软件，工程师只需要安装一个软件即可同时维护这两类设备。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "说法错误。AM400、AM600、AM300、AM500、AM760 以及 AC700/AC800 的后台编程软件是 InoProShop（官方资料名称为「InoProShop 中型PLC后台编程软件完整包」），而 H5U、H3U、H1U、Easy 系列小型 PLC 的后台软件是 AutoShop（「AutoShop 小型PLC后台编程软件」）。两者是定位不同的两套平台，工程文件也不能通用。新同事入职配备电脑时，如果只装了 AutoShop，接到 AM 系列项目就会完全无从下手。EVO 系列则进一步切换到 iFA Evolution（驭沃）平台，形成第三套体系。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页 / AM600 系列通用型中型 PLC 产品页",
      "chapter": "资料下载 / 软件",
      "url": "https://www.inovance.com/portal/product/details?productId=52"
    },
    "tags": [
      "InoProShop",
      "AutoShop",
      "编程软件"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-021",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 H3U/S 系列 CAN 总线高性能小型 PLC 本体自带 1 路 CAN 接口，该接口支持的协议是？",
    "options": {
      "A": "仅支持 CANlink 协议",
      "B": "仅支持 CANopen 协议",
      "C": "同时支持 CANlink 和 CANopen 协议",
      "D": "仅支持 DeviceNet 协议"
    },
    "answer": [
      "C"
    ],
    "analysis": "H3U/S 产品页原文为「2 路串口支持 MODBUS、监控等其他协议；1 路 CAN 接口支持 CANlink 和 CANopen 协议」，因此 C 正确。CANlink 是汇川自有的组网协议（H1U/S 也支持 CANlink3.0 组网），CANopen 则是国际标准协议，同一个物理 CAN 口同时支持两种协议意味着现场可以按对端设备类型灵活选择，这是 H3U 作为「CAN 总线高性能小型 PLC」的核心价值。A、B 都把能力砍掉一半，属于典型的「只记住一种协议」的错误；D 的 DeviceNet 在汇川该系列产品页中没有出现，属于无依据选项。另外该系列本体还提供 1 路 100M 以太网口（支持 MODBUS TCP/IP 和自由口协议），编程口支持 USB 与以太网两种通用接口。",
    "source": {
      "title": "汇川技术 H3U/S 系列 CAN 总线高性能小型 PLC 产品页",
      "chapter": "产品概览 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=55"
    },
    "tags": [
      "H3U",
      "CANopen",
      "通信组网"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-022",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "在汇川 H5U、Easy 系列等小型 PLC 组建的 EtherCAT 网络中，从站设备（如 SV660N 伺服）的站地址通常是如何确定的？",
    "options": {
      "A": "通过从站设备上的旋转拨码开关手动设定",
      "B": "由 EtherCAT 主站在组态扫描时按拓扑顺序自动分配，现场一般无需拨码设定",
      "C": "由上位机软件 InoProShop 在线逐个分配后固化到从站",
      "D": "由从站设备上电时随机生成，冲突时自动重排"
    },
    "answer": [
      "B"
    ],
    "analysis": "汇川的 EtherCAT 从站（伺服、远程 IO 等）站地址由主站扫描组态时按拓扑顺序分配，现场用拨码去设站号反而容易与主站组态产生冲突，因此 B 正确。与之对应，H5U、Easy 系列的官方资料中都提供 EDS/GSDML 等组态描述文件（如「H5U_V1.00.eds」「GSDML-V2.31-inovance-EASY」），说明这类设备的标准接入方式是靠主站组态文件识别，而非硬件拨码。A 描述的是脉冲型或早期 CANopen 产品的习惯做法；C 的平台对应关系错误，InoProShop 是 AM/AC 系列中型控制器的软件，H5U 与 Easy 系列使用 AutoShop；D 的「随机生成」在 EtherCAT 协议中不存在。若现场扫描不到从站，应按「物理链路 → 机型接口 → 站号/拓扑 → 软件启用状态」的顺序排查，而不是先动拨码。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页",
      "chapter": "资料下载 / 组态文件",
      "url": "https://www.inovance.com/portal/product/details?productId=54"
    },
    "tags": [
      "EtherCAT",
      "站地址",
      "通信组网"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-025",
    "category": "plc",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 EVO400 系列标准中型 PLC 的主机自带 3 路以太网，其中 2 路为交换机模式、另外 1 路为独立 IP 模式。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "描述与 EVO400 产品页一致：「网络通信：主机自带 3 路以太网，其中 2 路是交换机模式，另外一路是独立 IP 模式，可以快速完成现场设备间和设备内进行组网」，因此说法正确。同一页「外设接口」条目进一步细化为「LAN1 口：2 路百兆网口支持交换机模式，实现多 PLC 互联；LAN2 口：1 路百兆网口支持独立 IP 模式」。这种「2+1」的网口设计价值在于免交换机级联、同时把设备内部网络与对外的信息层网络在物理上分开，是做产线数据采集时的常见需求；EVO51X 也采用相同的 3 路以太网设计。",
    "source": {
      "title": "汇川技术 EVO400 系列标准中型 PLC 产品页",
      "chapter": "产品概览 / 网络通信、外设接口",
      "url": "https://www.inovance.com/portal/product/details?productId=943"
    },
    "tags": [
      "EVO400",
      "以太网",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-027",
    "category": "plc",
    "type": "short",
    "difficulty": 1,
    "stem": "请简述汇川小型 PLC 四个主要系列——H1U/S、H3U/S、H5U、Easy 系列——各自的官方定位与典型适用场景。",
    "options": null,
    "answer": "参考答案要点：\n1）H1U/S 系列：官网定位「简易型小型 PLC」，属经济型系列，小体积、大程序容量（无需外部扩展内存卡即可达到 16K 步），具备 3 轴高速 100K 脉冲用于高精度定位，支持 CANlink3.0 组网并提供 Modbus 指令，点数覆盖 14~60 点。适用于点位少、以逻辑控制和小规模定位为主、对成本敏感的小型自动化设备。\n2）H3U/S 系列：官网定位「CAN 总线高性能小型 PLC」，第三代高性能小型 PLC；程序存储空间 64K 步、数据存储容量 48K 字；5 路 200KHz 脉冲输出，支持 S 曲线加减速、凸轮同步控制、2 轴直线与圆弧插补；8 路 200KHz 高速输入；2 路串口 + 1 路 CAN（CANlink/CANopen）+ 1 路 100M 以太网（Modbus TCP/IP 与自由口）。主要应用于产线自动化、木工机械、玻璃机械、搬运上下料、电子非标等。\n3）H5U 系列：官网定位「EtherCAT 总线高性能小型 PLC」，是汇川首个应用 EtherCAT 总线的小型 PLC；支持 32 轴 EtherCAT 运动控制、最大 72 个从站；本体 16 入 14 出，4 轴 200KHz 脉冲输出、4 路 200KHz 高速输入，最大可扩展 16 个本地扩展模块；支持 RS485、CAN、以太网和 EtherCAT；支持直线圆弧插补与电子凸轮/齿轮（脉冲轴与 EtherCAT 轴可混合）。适用于需要多轴同步的中小型线体设备。\n4）Easy 系列：官网定位「全场景紧凑型小型 PLC」，全系列 8 个机型，四核处理器、纳秒级指令处理速度，32 轴高速总线控制，集成免调试自整定自适应 PID；双网口设计、支持双网段 IP，支持 EtherNet/IP（最小通信周期 5ms）、Modbus-TCP、CANopen；本地可扩展 GL20 系列刀片式 IO，CPU 及核心器件 100% 国产化。适用于严苛体积、多轴运控、温度控制、通信组网等中小型设备场景。\n5）选型落点：先看轴数与轴控方式（脉冲还是总线），再看通信接口与组网需求，最后看编程平台（四个系列均使用 AutoShop）。",
    "analysis": "本题考察小型 PLC 全系列的整体谱系认知，是销售和工程师做选型推荐的基础。答题时最容易失分的是把四条产品线的规格互相串号，例如把 H3U 的 5 路 200KHz 脉冲说成 H5U 的、把 H1U 的 3 轴 100KHz 当成全系标配。建议按「定位一句话 + 轴控能力 + 通信接口 + 点数/程序容量」四要素成组记忆，并牢记这四条线共用 AutoShop 平台，这是与 AM/EVO 系列最本质的分界。",
    "source": {
      "title": "汇川技术小型 PLC 产品线（H1U/S、H3U/S、H5U、Easy 系列）产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/list?typeId=158"
    },
    "tags": [
      "H1U",
      "H3U",
      "H5U",
      "Easy系列",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-035",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 EVO500 系列分为 EVO51X 与 EVO52X 两条产品线。按官网对 EVO51X 的描述，它的官方定位与目标应用场景是？",
    "options": {
      "A": "高性能小体积中型 PLC，面向 256 回路 PID 同步运算与 1ms/12 轴高精运动控制场景",
      "B": "纯网络型小体积中型 PLC，基于 iFA Evolution（驭沃）平台开发的标准型 PLC 产品，专为非流程行业 OEM 设备场景打造",
      "C": "大型冗余 PLC 控制系统，面向冶金、化工、电力等行业的长距离流程产线",
      "D": "功能安全 PLC，面向汽车制造、智能物流等对机械安全要求严苛的领域"
    },
    "answer": [
      "B"
    ],
    "analysis": "B 与官网原文一致，官网写「EVO51X 是汇川技术基于 iFA Evolution（驭沃）平台开发的标准型 PLC 产品，专为非流程行业 OEM 设备场景打造」，并写明它自带 3 路以太网（其中 2 路是交换机模式、另外 1 路是独立 IP 模式），支持 PN 从站、EtherNet/IP、Modbus、OPC UA、CANopen、自由协议等，处理速度 2.5ns/位指令、程序容量最大 8MByte。A 描述的是同系列另一条线 EVO52X 的官方卖点（纳秒级指令处理速度、256 回路 PID 同步运算、1ms/12 轴高精运动控制、高阶凸轮），把 51X 与 52X 对调是这一代产品最常见的串号。C 对应官网 PLC 品类下「大型冗余 PLC」子类目的 EVO800 系列，D 对应「功能安全 PLC」子类目的 EVO1000EF 系列。谈方案时必须把「纯网络型」与「高性能型」讲清楚：前者主打通信覆盖与性价比，后者主打运动控制与过程控制算力，两者的选型落点完全不同。",
    "source": {
      "title": "汇川技术 EVO500 系列—EVO51X 纯网络型小体积中型 PLC 产品页",
      "chapter": "产品概览 / 产品特性及优点（紧凑小巧、高性能、丰富通信、可靠耐用、扩展灵活）",
      "url": "https://www.inovance.com/portal/product/details?productId=970"
    },
    "tags": [
      "EVO51X",
      "选型",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "PLC-036",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "按汇川官网 EVO400 系列标准中型 PLC 产品页给出的规格，它主打的「指令性能」与「扩展能力」分别是？",
    "options": {
      "A": "位指令运算 2.5ns、整型运算 3ns、浮点运算（双精度）5ns；支持 2 个 GE20 系列扩展卡与 16 个 GL20 系列扩展模块",
      "B": "位指令运算 1ns、整型运算 2ns、浮点运算（双精度）4ns；支持 4 个 GE20 扩展卡与 32 个 GL20 扩展模块",
      "C": "位指令运算 5ns、整型运算 5ns、浮点运算（双精度）10ns；支持 1 个 GE20 扩展卡与 4 个 GL20 扩展模块",
      "D": "位指令运算 2.5ns、整型运算 3ns、浮点运算（双精度）5ns；本体只支持扩展卡，不支持 GL20 系列扩展模块"
    },
    "answer": [
      "A"
    ],
    "analysis": "A 与官网 EVO400 页面逐条对应：官网「指令性能」条目写「位指令运算：2.5ns；整型运算：3ns；浮点运算（双精度）：5ns」，「扩展能力」条目写「支持 2 个 GE20 系列扩展卡扩展，16 个 GL20 系列扩展模块扩展，可以快速完成现场输入输出和通信扩展」。B 把所有数字整体抬高，属于凭「新一代一定更快」的直觉放大，实际产品页并没有 1ns/2ns 这类指标。C 把 5ns 错记成位指令速度——5ns 是双精度浮点的数字，官网也不存在「位指令 5ns、浮点 10ns」的组合。D 错在官网明确写 EVO400「搭载刀片式 GL20 系列模块，整体体积更加小巧」。另外要分清两个口径：官网「产品概览」的「扩展能力」条目写「支持 2 个 GE20 系列扩展卡扩展，16 个 GL20 系列扩展模块扩展」，同一页「灵活扩展」条目又写「扩展模块扩展：支持通过本地（最多扩展 8 个模块）和远程扩展」，而「规格参数」页签写「本地可扩展 16 个 GL20 系列模块」——官网在同页给出了合计 16 个、本地最多 8 个、本地 16 个三种口径。落方案时不要按印象取其中一个数字，应以具体订货型号的规格参数与选型手册为准并向原厂确认。",
    "source": {
      "title": "汇川技术 EVO400 系列标准中型 PLC 产品页",
      "chapter": "产品概览 / 指令性能、扩展能力、外设接口",
      "url": "https://www.inovance.com/portal/product/details?productId=943"
    },
    "tags": [
      "EVO400",
      "指令性能",
      "扩展",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-038",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 APC520 系列先进工艺控制器的官方定位，以及它内置的控制算法与专用指令分别是？",
    "options": {
      "A": "回路级控制的先进工艺控制器，内置标准预测函数控制算法，包含 PFCS、PFCm、PFCS dv 3 个指令",
      "B": "多轴运动控制器，内置电子凸轮与电子齿轮指令库",
      "C": "大型冗余 PLC 控制系统，内置 DLR 设备级环网冗余算法",
      "D": "功能安全 PLC，内置故障安全机制与安全 I/O 处理指令"
    },
    "answer": [
      "A"
    ],
    "analysis": "A 是官网原文：「APC520 系列产品是汇川技术回路级控制的先进工艺控制器，包括 NPN 和 PNP 机型，内置标准预测函数控制算法，包含 PFCS、PFCm、PFCS dv 3 个指令，并提供对应的参数配置界面与调试界面，可有效提升控制过程的快速性、稳定性以及鲁棒性」，官网同时点明其应用行业为半导体、锂电和光伏，产品特性标签为「高算力、易开发、易接入」。B 的电子凸轮/电子齿轮是运动控制类产品的指令库特征，例如 AC800 官网写「同步支持机械手、电子凸轮、电子齿轮」——需要说明的是 APC520 确实同时具备一定的运动控制能力（官网规格区列有 8 轴同步），但它的官方定位是「回路级控制的先进工艺控制器」，内置算法是预测函数控制（PFC）而非电子凸轮/电子齿轮指令库，所以 B 在定位与算法两处都错。C 的 DLR 环网冗余是 EVO800 大型冗余系统的能力。D 的故障安全机制与安全 I/O 是 EVO1000EF&Hi50 功能安全产品线的特征。答题时抓住「预测函数控制」「PFCS 系列指令」这两个独有特征，就能把 APC 与其它三条产品线区分开。",
    "source": {
      "title": "汇川技术 APC520 系列先进工艺控制器产品页",
      "chapter": "产品概览 / 产品简介",
      "url": "https://www.inovance.com/portal/product/details?productId=913"
    },
    "tags": [
      "APC520",
      "工艺控制",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-039",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 APC760C 系列先进工艺控制器基于哪个平台开发，系列内的机型版本又是如何划分的？",
    "options": {
      "A": "基于 InoProShop 平台，分为 APC760C-A10、A20、A30 三个版本",
      "B": "基于 iDA 数智平台，分为 APC760C-A10 基础版、APC760C-A20 标准版、APC760C-A30 专业版",
      "C": "基于 AutoShop 平台，分为 APC760C-B10、B20 两个版本",
      "D": "基于 iFA Evolution 平台，分为 APC760C-E10、E20、E30 三个版本"
    },
    "answer": [
      "B"
    ],
    "analysis": "B 与官网一致：产品页写「APC760C 系列产品尺寸小巧，基于 iDA 数智平台，实现进程间通信、拓展通信协议支持，并支持运控与过程共存，可广泛应用于温度、压力、流程等应用场景。本系列产品不同机型差异点如下：APC760C-A10 基础版机型。APC760C-A20 标准版机型。APC760C-A30 专业版机型」。A、C、D 都是把 APC 错误挂到了别的产品线平台上：InoProShop 覆盖 AM300/AM400/AM500/AM600/AM760 以及 AC700/AC800；AutoShop 覆盖 H1U、H3U、H5U、Easy 等小型 PLC；iFA Evolution 覆盖 EVO400、EVO51X、EVO52X、EVO760、EVO800、EVO1000EF。要特别记住 iDA 数智平台与 iFA Evolution 是两个并列的平台体系——前者服务 APC 先进工艺控制器，后者服务 EVO 系列控制器，把两者混为一谈会直接导致软件选型与授权报错。",
    "source": {
      "title": "汇川技术 APC760C 系列先进工艺控制器产品页",
      "chapter": "产品概览 / 产品简介、机型差异",
      "url": "https://www.inovance.com/portal/product/details?productId=914"
    },
    "tags": [
      "APC760C",
      "iDA",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "PLC-042",
    "category": "plc",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 EVO800 大型冗余控制系统配套 Hi80 系列高性能分布式 IO 模块。按官网对 Hi80 的描述，下列哪一项正确？",
    "options": {
      "A": "全系列支持热插拔设计，并具备通道级故障诊断能力，可精准定位故障通道",
      "B": "不支持带电插拔，更换任一 IO 模块都必须整机断电",
      "C": "只支持 EtherNet/IP 一种总线，不支持环网接入与冗余功能",
      "D": "工作温度 0℃~+55℃，工作海拔不超过 2000m"
    },
    "answer": [
      "A"
    ],
    "analysis": "A 与官网 Hi80 产品页「强诊断，易维护」条目逐字对应：「全系列支持热插拔设计」「通道级故障诊断，精准定位故障通道，快速诊断，快速处理」。B 与官网直接矛盾。C 与官网「主流总线全覆盖」「模块支持单机、环网接入、多种冗余功能」相反——Hi80 正是为 EVO800 的 DLR 设备级环网冗余配套的分布式 IO，官网明确它「按照车规级高可靠标准，遵循 IEC 规范，倾力打造的适配大型冗余控制系统的 IO 模块」。D 的数字远低于官网公布的极端环境指标：官网写宽温区满足 -40℃~+70℃、工作海拔最高可达 5000m、高标准三防漆满足 3C4/GX 级防护需求、2g 超强抗震与 25g 抗冲击。冶金、矿山、港口、化工这类现场正是按这些环境指标做资格筛选，指标答低会直接影响项目入围。",
    "source": {
      "title": "汇川技术 Hi80 系列高性能分布式 IO 模块产品页",
      "chapter": "产品概览 / 强诊断易维护、极端环境依旧可靠",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "EVO800",
      "Hi80",
      "热插拔",
      "冗余"
    ],
    "roles": [
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "PLC-049",
    "category": "plc",
    "type": "multi",
    "difficulty": 1,
    "stem": "按汇川官网对 iFA Evolution（驭沃）全场景智能化工业控制软件平台的描述，下列哪些属于该平台的能力？（多选）",
    "options": {
      "A": "全集成：支持多品类产品开发，可对汇川全体系自动化产品进行组态、编程、调试和仿真",
      "B": "联合仿真：支持 PLC&HMI&驱动联合仿真，可随时随地进行项目开发",
      "C": "多设备工程：支持多控制器在同一项目管理，快速实现产线联调",
      "D": "变量共享：变量必须在每个设备下重复定义，平台不支持跨设备复用",
      "E": "轻量化部署：软件必须依赖特定型号加密狗才能安装，且不支持在线升级，每次升级都要卸载重装"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均为 iFA Evolution 产品页原文条目。官网对该平台的完整定位是「新一代工业自动化的数字底座开发平台，可对汇川全体系自动化产品进行组态、编程、调试和仿真……深度集成工业自动化中执行/传感层、驱动层、控制层、边缘层所有类别产品，并可与最上层的信息层充分链接实现自动化、数字化、智能化的代次融合」，多设备工程的典型场景列出汽车组装、物流手机组装、医药产线、作业岛等。D 与官网「变量共享」条目直接矛盾：官网写「变量一次定义，跨设备多路复用，拖拽式编程，效率提升 30% 以上」。E 与官网「轻量化部署」条目直接矛盾：官网写「软件支持在线升级安装，免去版本管理烦恼；30 秒完成软件安装卸载，快速完成部署」。此外官网还列出图符模板、多样化控件（PDF 控件、视频控件）与 Web 技术应用（浏览器动态显示网页内容、Web 远程设备监控），这些在讲平台价值时比罗列协议更有说服力。",
    "source": {
      "title": "汇川技术 iFA Evolution（驭沃）全场景智能化工业控制软件平台产品页",
      "chapter": "产品概览 / 全集成、联合仿真、轻量化部署、多设备工程、变量共享",
      "url": "https://www.inovance.com/portal/product/details?productId=652"
    },
    "tags": [
      "iFA Evolution",
      "联合仿真",
      "多设备工程"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "PLC-050",
    "category": "plc",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 H5U 系列内部存在不带 CAN、电子凸轮、电子齿轮功能的机型，官方为此单独提供了《H5U 系列可编程逻辑控制器用户手册（无 CAN、电子凸轮、电子齿轮）》，选型时必须先确认具体机型的功能配置。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "说法正确。汇川官网 H5U 产品页「资料下载—产品手册」中同时列出《H5U 系列可编程逻辑控制器用户手册》与《H5U 系列可编程逻辑控制器用户手册（无 CAN、电子凸轮、电子齿轮）》两份分册，说明该系列内部确实存在功能配置不同的机型。这一点在方案阶段极容易被忽略：同一系列名下的低配机型若被写进需要电子凸轮或 CAN 组网的方案，现场调试时才会发现指令不可用，返工代价很高。正确做法是按具体订货型号核对功能清单，并结合同一资料区提供的《H5U&Easy 系列可编程逻辑控制器指令手册》与《H5U&Easy 系列可编程逻辑控制器编程手册》确认可用指令范围。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页",
      "chapter": "资料下载 / 产品手册（用户手册、编程手册、指令手册）",
      "url": "https://www.inovance.com/portal/product/details?productId=54"
    },
    "tags": [
      "H5U",
      "选型",
      "电子凸轮"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-051",
    "category": "plc",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 AM300 系列与 AM500 系列中型 PLC 的 Modbus TCP 都支持两路不同网段的 IP 地址。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "说法错误。官网对两代产品的表述不同：AM300 系列写「Modbus TCP（支持两路不同网段的 IP 地址）」，它主要面向暖通空调、化工印染、水处理、污水处理、热处理等过程控制行业，官网明确其场景需求包含「内外网隔离」；而 AM500 系列写的是「Modbus TCP（支持两路同一网段的 IP 地址）」，面向食品饮料、包装、印刷、硅晶、医疗、SMT 周边等单机自动化设备及单机组合产线。如果按错误记忆给客户承诺「AM500 可以做内外网双网段隔离」，会在组态阶段直接卡住。需要真正做内外网隔离时，可选方案包括改用 AM300，或选择 EVO400、EVO51X 这类主机自带 3 路以太网（2 路交换机模式 + 1 路独立 IP 模式）的机型。",
    "source": {
      "title": "汇川技术 AM300 系列纯网络型中型 PLC 产品页 / AM500 系列标准型中型 PLC 产品页",
      "chapter": "产品概览 / 产品简介、助力过程控制智能化升级",
      "url": "https://www.inovance.com/portal/product/details?productId=454"
    },
    "tags": [
      "AM300",
      "AM500",
      "Modbus TCP",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-052",
    "category": "plc",
    "type": "judge",
    "difficulty": 1,
    "stem": "按汇川官网规格，EVO51X 的工作温度为 -20℃～+55℃（水平方向安装），防护等级 IP20，抗振动 15g，EMC 满足 Zone B、IEC61131-2。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "说法正确，与 EVO51X 产品页「可靠耐用」条目逐项对应：「工作温度：-20 ℃～+55 ℃（水平方向安装）；防护等级：IP20；抗振动：15g；EMC：Zone B，IEC61131-2，适应现场多变工况」。要特别注意「水平方向安装」这个限定条件——安装姿态不同散热条件不同，允许的环境温度也会随之变化，报价与电柜设计时必须按实际安装姿态核对。与大型冗余系统的环境指标对比能看出产品定位差异：EVO800 配套的 Hi80 系列 IO 官网标称宽温区 -40℃~+70℃、工作海拔最高 5000m、三防漆满足 3C4/GX 级防护，面向冶金、矿山、港口等恶劣现场；而 EVO51X 面向的是非流程行业 OEM 设备场景。",
    "source": {
      "title": "汇川技术 EVO500 系列—EVO51X 纯网络型小体积中型 PLC 产品页",
      "chapter": "产品概览 / 可靠耐用、紧凑小巧",
      "url": "https://www.inovance.com/portal/product/details?productId=970"
    },
    "tags": [
      "EVO51X",
      "环境适应性",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "PLC-061",
    "category": "plc",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 H1U/S 系列小型 PLC 主打「小体积、大程序容量」，按官网产品页描述，其程序存储空间无需外部扩展内存卡即可达到 ____。",
    "options": null,
    "answer": [
      "16K步"
    ],
    "analysis": "官网 H1U/S 系列产品页原文为「程序存储空间大，无需外部扩展内存卡即可达到 16k 步」，故填 16K 步。易错点是把它记成 H3U/S 的 64K 步，或误以为必须插入内存卡/扩展卡才能达到该容量——H1U/S 恰恰是以「无需外部扩展内存卡」为卖点的。销售向成本敏感客户介绍时，这一条可直接对应「省一张存储卡的钱」；采购核对 BOM 时也不必为 H1U/S 配套内存卡。",
    "source": {
      "title": "汇川技术 H1U/S 系列简易型小型 PLC 产品页",
      "chapter": "产品概览 / 产品特性及优点（程序存储空间）",
      "url": "https://www.inovance.com/portal/product/details?productId=59"
    },
    "tags": [
      "H1U",
      "程序容量",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-062",
    "category": "plc",
    "type": "fill",
    "difficulty": 1,
    "stem": "按汇川官网 H3U/S 系列产品页给出的规格，该系列支持的程序存储空间为 ____，数据存储容量为 ____。",
    "options": null,
    "answer": [
      "64K步",
      "48K字"
    ],
    "analysis": "官网 H3U/S 产品页原文为「支持程序存储空间 64K 步，数据存储容量 48K 字」，两空依次为 64K 步与 48K 字。易错点是把 H3U/S 的容量记成 H1U/S 的 16K 步（两者相差 4 倍，同属小型机但定位不同），以及把程序空间与数据空间写反。另需注意汇川还有型号极为相近的 H3S 系列，官网给出的存储规格同为 64K 步 / 48K 字，二者真正的差别在 CAN 等通信与功能配置，采购下单时不能只凭「H3U」这一串字符判断。",
    "source": {
      "title": "汇川技术 H3U/S 系列 CAN 总线高性能小型 PLC 产品页",
      "chapter": "产品概览 / 产品特性及优点（高性能，大容量）",
      "url": "https://www.inovance.com/portal/product/details?productId=55"
    },
    "tags": [
      "H3U",
      "程序容量",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-063",
    "category": "plc",
    "type": "fill",
    "difficulty": 1,
    "stem": "某工程师的电脑需要同时维护一台 H5U 小型 PLC 和一台 AM400 中型 PLC。按汇川官方资料命名，维护 H5U 要安装「____ 小型PLC后台编程软件」，而维护 AM400 需要安装「____ 中型PLC后台编程软件完整包」。",
    "options": null,
    "answer": [
      "AutoShop",
      "InoProShop"
    ],
    "analysis": "汇川官网软件下载区的资料名称为「AutoShop 小型PLC后台编程软件」与「InoProShop 中型PLC后台编程软件完整包」：小型 PLC（H1U/S、H3U/S、H5U、Easy 系列）统一用 AutoShop，AM300/AM400/AM500/AM600/AM760 及 AC700/AC800 统一用 InoProShop，故第一空填 AutoShop、第二空填 InoProShop。易错点是把两者对调，或把伺服调试软件 InoDriveShop 当成 PLC 编程软件。EVO 系列与功能安全 PLC 又改用 iFA Evolution（驭沃）平台，属第三套体系，工程文件不能直接互导。给工程师配电脑时两套软件都要装，只装一套就会出现「拿到程序却打不开」的尴尬。",
    "source": {
      "title": "汇川技术 AM600 系列通用型中型 PLC 产品页 / H1U/S 系列简易型小型 PLC 产品页",
      "chapter": "资料下载 / 软件",
      "url": "https://www.inovance.com/portal/product/details?productId=52"
    },
    "tags": [
      "InoProShop",
      "AutoShop",
      "编程软件"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-004",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "某设备需要 5 个轴做脉冲定位，并要求本体自带 CAN 口可接入 CANopen 从站、同时自带百兆以太网口支持 Modbus TCP，成本敏感。按汇川官网规格，下列哪个系列最贴合该需求？",
    "options": {
      "A": "H1U/S 系列（3 轴 100KHz 脉冲）",
      "B": "H3U/S 系列（5 路 200KHz 脉冲输出，本体带 CAN 与以太网口）",
      "C": "H5U 系列（4 轴 200KHz 脉冲输出）",
      "D": "AM600 系列（中型 PLC）"
    },
    "answer": [
      "B"
    ],
    "analysis": "H3U/S 的官网规格为「5 路 200KHz 脉冲输出」「1 路 CAN 接口支持 CANlink 和 CANopen 协议」「1 路 100M 的以太网接口支持 MODBUS TCP/IP 和自由口协议」，5 轴脉冲 + 本体 CAN + 本体以太网三项完全对上，B 正确。A 的 H1U/S 只有 3 轴高速 100K 脉冲，轴数不够；C 的 H5U 本体是 4 轴 200KHz 脉冲输出，脉冲轴数差 1 轴，虽然它能用 EtherCAT 扩到 32 轴，但本题明确要求脉冲定位且成本敏感；D 的 AM600 是中型 PLC，用在这里属于能力与成本双过剩。选型时先数「脉冲轴数」，再核「本体通信口」，最后才考虑升级到总线方案。",
    "source": {
      "title": "汇川技术 H3U/S 系列 CAN 总线高性能小型 PLC 产品页",
      "chapter": "产品概览 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=55"
    },
    "tags": [
      "H3U",
      "选型",
      "脉冲定位"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-006",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 Easy 系列有下列几款紧凑型机型，其中本体自带 EtherCAT 口、出厂标配 GE21-EN 以太网卡，可同时兼顾 EtherCAT 主站与标准以太网通信的是哪一款？",
    "options": {
      "A": "Easy301",
      "B": "Easy302",
      "C": "Easy321",
      "D": "Easy511"
    },
    "answer": [
      "D"
    ],
    "analysis": "Easy 系列卧式形态产品页写明「Easy511 产品包含 NPN 机型，本体自带一路 EtherCAT 口，支持 EtherNet 切换，且出厂标配 GE21-EN 以太网卡，支持标准以太网通信协议」，D 正确。A 的 Easy301、B 的 Easy302 是 Easy 系列里的紧凑型入门机型，官方下载区对应的是《Easy301 用户手册》《Easy302 用户手册》，不以 EtherCAT 主站为核心配置；C 的 Easy321 是卧式形态机型，官方描述为「包含继电器、NPN 和 PNP 机型，本体自带一路 EtherNet 口」，它的强项是 EtherNet 与 GE21-RTU 配置卡转智能 IO，本体并不自带 EtherCAT 口。这是 Easy 系列选型里最容易出错的一处，谈方案前务必按机型逐一核对本体接口。",
    "source": {
      "title": "汇川技术 Easy 系列卧式形态小型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=740"
    },
    "tags": [
      "Easy511",
      "EtherCAT",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-007",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "按汇川官网产品页给出的规格，AM760 系列高性能中型 PLC 的带轴能力与 GL20 模块扩展能力分别是多少？",
    "options": {
      "A": "1ms 周期 32 轴同步，可扩展 16 个 GL20 模块",
      "B": "1ms 周期 64 轴同步，可扩展 32 个 GL20 模块",
      "C": "4ms 周期 256 轴运算，可扩展 8 个 GL20 模块",
      "D": "500μs 周期 32 轴同步，可扩展 64 个 GL20 模块"
    },
    "answer": [
      "B"
    ],
    "analysis": "AM760 产品页卖点原文为「基于风电设计打造的稳定性、1ms 周期 64 轴同步能力、可扩展 32 个 GL20 模块」，B 正确。A 的「32 轴」出现在 AC700（最大支持 1ms-32 轴同步运行）和 H5U（32 轴 EtherCAT）身上，属于跨系列串号；C 的「4ms-256 轴运算速度」是 AC800 的规格（还包含 250μs-8 轴、500μs-32 轴），而且 GL20 扩展 8 个是 EVO400 的本地扩展模块数；D 的 500μs 也是 AC800 的档位。AM760 面向硅晶、锂电、汽车、金属线缆等对运动控制要求高的场景，讲轴数时最好连「周期」一起讲，单说轴数没有意义。",
    "source": {
      "title": "汇川技术 AM760 系列高性能中型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=559"
    },
    "tags": [
      "AM760",
      "带轴能力",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-008",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "某高速包装设备需要 EtherCAT 总线带轴、并要求本体集成 UPS 实现数据掉电保存，同时要求用 InoProShop 平台开发。下列汇川产品中最合适的是？",
    "options": {
      "A": "H5U-1614MTD",
      "B": "EVO521-0808TN",
      "C": "AC700 系列书本式智能机械控制器",
      "D": "Easy511-2416TN"
    },
    "answer": [
      "C"
    ],
    "analysis": "AC700 产品页写明「本体集成 UPS（不间断电源），即无需外接 UPS 即可实现数据掉电保存」，其规格为「最大支持 1ms-32 轴同步运行」，软件侧归属中型 PLC 体系（下载区为 InoProShop 与《中型PLC编程手册》系列），三项要求全部命中，C 正确。A 的 H5U 虽支持 32 轴 EtherCAT，但编程平台是 AutoShop，本体也不带 UPS；B 的 EVO521 基于 iFA Evolution 平台，平台要求不符；D 的 Easy511 同为 AutoShop 平台的小型机。这说明「带轴能力」只是选型的第一层，编程平台、掉电保持、行业工艺库这些隐性要求往往才是决定系列归属的关键。",
    "source": {
      "title": "汇川技术 AC700 系列书本式智能机械控制器产品页",
      "chapter": "产品概览 / 集成化设计",
      "url": "https://www.inovance.com/portal/product/details?productId=327"
    },
    "tags": [
      "AC700",
      "掉电保持",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-011",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 Easy 系列卧式形态小型 PLC 家族目前包含 Easy321 与 Easy511 两款。按官网描述，其编程平台与运动控制指令的规范基础是？",
    "options": {
      "A": "基于 AutoShop 编程平台，运动控制指令符合 PLCopen 规范",
      "B": "基于 InoProShop 编程平台，运动控制指令符合 PLCopen 规范",
      "C": "基于 AutoShop 编程平台，运动控制指令为自定义非标指令集",
      "D": "基于 iFA Evolution 编程平台，运动控制指令符合 IEC 61131-3 规范"
    },
    "answer": [
      "A"
    ],
    "analysis": "产品页原文为「Easy321 和 Easy511 是汇川技术新推出的 Easy 系列卧式形态小型 PLC，基于 Autoshop 编程平台，其运动控制指令符合 PLCopen 规范，支持 ST、LD、SFC 等编程语言」，因此 A 正确。B 把平台错配成 InoProShop（AM/AC 系列平台）；C 错在这是标准 PLCopen 指令集而非自定义非标指令，这一点在客户做工艺库复用时很关键；D 同时错了两处，平台不是 iFA Evolution，而 PLCopen 本身就是建立在 IEC 61131-3 之上的运动控制规范，两者不该混为一谈。",
    "source": {
      "title": "汇川技术 Easy 系列卧式形态小型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=740"
    },
    "tags": [
      "Easy321",
      "AutoShop",
      "PLCopen"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-013",
    "category": "plc",
    "type": "multi",
    "difficulty": 2,
    "stem": "按汇川官网 H5U 系列产品页给出的规格，下列关于 H5U 本体能力的描述，正确的有哪些？（多选）",
    "options": {
      "A": "支持 32 轴 EtherCAT 总线运动控制，最大支持 72 个 EtherCAT 从站",
      "B": "本体自带 16 路输入和 14 路输出，最大可扩展 16 个本地扩展模块",
      "C": "支持直线圆弧插补，并支持电子凸轮、电子齿轮（脉冲轴与 EtherCAT 轴可混合凸轮与插补）",
      "D": "本体自带 5 路 200KHz 脉冲输出，与 H3U/S 的脉冲输出路数一致",
      "E": "不支持 CAN 接口，只能通过 EtherCAT 组网"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均为 H5U 产品页原文条目：A 对应「功能强大」，B 对应「支持扩展模块」，C 对应「圆弧插补/凸轮/齿轮」。D 错在把 H3U/S 的规格安到了 H5U 头上——H5U 主机是「4 轴 200KHz 脉冲输出，4 路 200KHz 高速输入」，5 路 200KHz 脉冲输出是 H3U/S 的规格，这是两条产品线间最典型的串号；E 明显错误，H5U 明确「支持 RS485、CAN、以太网和 EtherCAT 接口，可实现多层次网络通信」。做方案比对时建议直接调出两家的产品页逐条对照，不要凭「都是汇川小型机」的印象推算。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页",
      "chapter": "产品概览 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=54"
    },
    "tags": [
      "H5U",
      "运动控制",
      "I/O点数",
      "EtherCAT"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-014",
    "category": "plc",
    "type": "multi",
    "difficulty": 2,
    "stem": "按汇川官网对 Easy 系列全场景紧凑型小型 PLC 的介绍，下列哪些属于该系列的官方特性？（多选）",
    "options": {
      "A": "全系列 8 个机型，机身模块化设计，支持扩展卡和模块扩展",
      "B": "本地可扩展 GL20 系列刀片式 IO，采用 Push-in 端子、免工具接线",
      "C": "支持 ST 语言编程与功能块封装，支持和 IT7000 进行联合离线仿真",
      "D": "CPU 及核心器件 100% 国产化",
      "E": "本体为单网口设计，必须外接交换机才能组网"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A 对应「Easy 系列全场景紧凑型小型控制器全系列 8 个机型……机身模块化设计，支持扩展卡和模块扩展」；B 对应「本地扩展 GL20 系列刀片式 IO，采用 Push-in 端子，免工具接线，垂直插拔装配工时缩短 80%」；C 对应「支持 ST 语言编程……支持功能块封装……支持和汇川技术 HMI 产品 IT7000 进行联合离线仿真」；D 对应「CPU 及核心器件 100% 国产化，保证客户供应安全」，四项均正确。E 与官网描述相反，Easy 采用「双网口设计，省网线省交换机的同时，实现便捷组网可级联」，还支持双网段 IP 做内外网隔离。E 这类反向描述在客户比价时经常被其它品牌拿来攻击，一线人员要能当场纠正。",
    "source": {
      "title": "汇川技术 Easy 系列全场景紧凑型小型 PLC 产品页",
      "chapter": "产品概览 / 产品特点及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=350"
    },
    "tags": [
      "Easy系列",
      "选型",
      "国产化",
      "扩展"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-015",
    "category": "plc",
    "type": "multi",
    "difficulty": 2,
    "stem": "汇川 AM400 系列经济型中型 PLC 的开发符合 IEC-61131-3 模型规范。按官网产品页描述，下列哪些属于该系列支持的编程语言或随平台提供的应用库？（多选）",
    "options": {
      "A": "支持 IL、LD、SFC、CFC、ST 等编程语言",
      "B": "提供基于 EtherCAT 的运动控制库，涵盖点对点运动、凸轮运动、插补运动",
      "C": "提供 CANopen 通信库、文件处理、字符串处理、以太网通信、485 通信等库",
      "D": "提供基于 PLCopen 的机器人正逆解算库，可直接做六轴机器人控制",
      "E": "仅支持梯形图 LD 一种编程语言，其它语言需额外购买授权"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均出自 AM400 产品页原文：「完全符合 IEC-61131-3 模型规范。支持 IL,LD,SFC,CFC,ST 等编程语言，同时提供各种应用库，包括基于 EtherCAT 的运动控制库，运动控制包括点对点运动，凸轮运动，插补运动等，另外还包括 CANopen 通信库，文件处理，字符串处理，以太网通信，485 通信等库」。D 是编造的：机器人集成控制能力对应的是《中型PLC编程手册（机器人集成控制篇）》所覆盖的 AC 系列智能机械控制器，不是 AM400 的官方卖点；E 与 A 直接矛盾，IEC-61131-3 多语言支持本身就是 AM 系列的基础能力，不存在按语言收费的说法。遇到客户拿 D 这类说法询价，应先澄清是控制器选型问题而不是软件授权问题。",
    "source": {
      "title": "汇川技术 AM400 系列经济型中型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=53"
    },
    "tags": [
      "AM400",
      "IEC61131-3",
      "运动控制库"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-017",
    "category": "plc",
    "type": "multi",
    "difficulty": 2,
    "stem": "现场一台 Easy 系列小型 PLC 作为 EtherCAT 主站，上电后组态中的 EtherCAT 从站全部扫描不到。下列排查方向中，合理的有哪些？（多选）",
    "options": {
      "A": "确认该机型本体是否具备 EtherCAT 主站口，例如 Easy511 本体自带 EtherCAT 口，而部分机型本体只有 EtherNet 口",
      "B": "确认 EtherCAT 从站的站地址设置是否重复或冲突，并逐一核对拓扑顺序",
      "C": "确认从站是否被工程中的变量或系统参数禁用，部分机型支持通过变量启动和禁用 EtherCAT 从站",
      "D": "检查 EtherCAT 网线水晶头压接质量与屏蔽层接地，排除接触不良或电磁干扰",
      "E": "重新给伺服驱动器做电机参数自整定，从站扫描不到主要是驱动器环路增益不合适造成的"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A 是首要动作：Easy 系列不同机型本体接口差异很大，官网明确 Easy511 本体自带 EtherCAT 口并支持 EtherNet 切换、Easy321 本体自带一路 EtherNet 口，用错机型或错插网口是最常见的低错；B、C、D 分属站号/拓扑、软件禁用、物理链路三类原因，都是 EtherCAT 扫描失败的常规排查项，其中 C 的依据是官网「支持通过变量启动和禁用本地模块/EtherCAT 从站/伺服轴，支持系统参数程序修改」这一特性。E 不成立：环路增益影响的是伺服运行平稳性，与主站能否在组态中扫描到从站没有因果关系，把它列为第一步会浪费大量现场时间。排查应遵循「物理链路 → 机型接口 → 站号拓扑 → 软件启用状态」的顺序。",
    "source": {
      "title": "汇川技术 Easy 系列全场景紧凑型小型 PLC 产品页",
      "chapter": "产品概览 / 易编程、易调试",
      "url": "https://www.inovance.com/portal/product/details?productId=350"
    },
    "tags": [
      "Easy系列",
      "EtherCAT",
      "故障排查"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-023",
    "category": "plc",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 Easy 系列支持 EtherNet/IP 通信，其最小通信周期可以达到 5ms。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "描述与官网一致：Easy 系列产品页写有「支持 EtherNet/IP（最小通信周期 5ms）、Modbus-TCP、CANopen 等多种工业通信协议，从容接入周边设备，高速数据传输」。要注意区分不同产品线的 EtherNet/IP 性能指标：EVO400 的官网规格是「EtherNet/IP 最小通信周期可以达到 1ms，最大连接数可以达到 128」，与 Easy 系列的 5ms 不是同一档位。在方案里写通信周期指标时，必须与具体系列的产品页对齐，否则容易被客户在评测阶段抓住前后矛盾。",
    "source": {
      "title": "汇川技术 Easy 系列全场景紧凑型小型 PLC 产品页",
      "chapter": "产品概览 / 易互联、易组网",
      "url": "https://www.inovance.com/portal/product/details?productId=350"
    },
    "tags": [
      "Easy系列",
      "EtherNet/IP",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-026",
    "category": "plc",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 EVO52X 高性能小体积中型 PLC 的官方规格中包含「支持 256 回路 PID 同步运算」与「1ms/12 轴高精运动控制」。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "描述与官网 EVO52X 产品页「高性能」条目原文一致：「纳秒级指令处理速度、支持 256 回路 PID 同步运算、1ms/12 轴高精运动控制、高阶凸轮」。这一条规格很值得一线人员记住，因为它同时体现了 EVO52X 的两个能力面：256 回路 PID 同步运算说明它在过程控制（温度、压力、流量等多回路场合）上有余量，1ms/12 轴高精运动控制说明它同时能带多轴做高精度运动控制，属于「运动 + 过程」兼顾的定位。要避免与其它系列的指标串号：1ms 周期 64 轴对应 AM760，1ms-32 轴同步对应 AC700，Easy 系列的 EtherNet/IP 最小通信周期 5ms 与 EVO400 的 1ms 也不是同一回事。",
    "source": {
      "title": "汇川技术 EVO500 系列—EVO52X 高性能小体积中型 PLC 产品页",
      "chapter": "产品概览 / 高性能",
      "url": "https://www.inovance.com/portal/product/details?productId=615"
    },
    "tags": [
      "EVO52X",
      "运动控制",
      "PID"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-028",
    "category": "plc",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川中型及以上 PLC 当前涉及的三套编程/软件平台分别是什么，各自覆盖哪些产品线，并说明 InoQuickPro 在其中的作用。",
    "options": null,
    "answer": "参考答案要点：\n1）AutoShop：小型 PLC 后台编程软件（官方资料名为「AutoShop 小型PLC后台编程软件」），覆盖 H1U/S、H3U/S、H5U、Easy 系列。Easy 系列卧式形态机型（Easy321/Easy511）也明确「基于 Autoshop 编程平台」，运动控制指令符合 PLCopen 规范，支持 ST、LD、SFC 等语言、支持梯形图内嵌 ST 执行块。\n2）InoProShop：中型 PLC 后台编程软件，覆盖 AM300、AM400、AM500、AM600、AM760 以及 AC700/AC800 智能机械控制器。这些产品页的「资料下载」中，软件类资料统一为「InoProShop 中型PLC后台编程软件完整包」，配套文档为《中型PLC编程手册（软件使用篇）》《（运动控制篇）》《（机器人集成控制篇）》和《中型PLC指令手册》等。\n3）iFA Evolution（驭沃）：全场景智能化工业控制软件平台，可对汇川全体系自动化产品进行组态、编程、调试和仿真，覆盖 EVO400、EVO500（EVO51X/EVO52X）、EVO700（EVO760）、EVO800 大型冗余 PLC、EVO1000EF 功能安全 PLC 等新一代产品；APC760C 则基于 iDA 数智平台（IDA_Designer），属于工艺控制器专用软件体系。\n4）InoQuickPro 的作用：它是汇川基于 ISA88 标准开发的标准化编程模板框架，可搭载在 InoProShop 平台上（AM300、AM500、AM760 产品页均有说明），用于实现规范的标准化管理开发，降低人才培训成本；AM760 产品页称其可「提升至少 50% 开发效率」；EVO400 也提供基于汇川 InoQuickPro 工艺规范的编程模板。\n5）实践提醒：三套平台对应三代产品，工程文件不可直接互导，跨平台迁移需按项目评估；工程师电脑上应同时具备 AutoShop 与 InoProShop，涉及 EVO 项目时另装 iFA Evolution。",
    "analysis": "本题考察「产品线—软件平台」的对应关系，这是实际工作中出错率最高的一类问题，也是客户做技术评测时最容易问倒一线人员的点。答题的关键在于把三套平台与产品代际绑定：AutoShop 对应小型 PLC、InoProShop 对应 AM/AC 这一代中型控制器、iFA Evolution 对应 EVO 新一代产品。常见错误是把 AM500 与 EVO500 归为同一平台（两者型号都带 500，但分属 InoProShop 与 iFA Evolution），以及把 InoQuickPro 误当成一套独立软件（它是运行在 InoProShop 上的编程模板框架，不是软件本身）。",
    "source": {
      "title": "汇川技术 AM500 系列标准型中型 PLC 产品页 / iFA Evolution（驭沃）产品页",
      "chapter": "产品概览、资料下载",
      "url": "https://www.inovance.com/portal/product/details?productId=455"
    },
    "tags": [
      "InoProShop",
      "AutoShop",
      "iFA Evolution",
      "InoQuickPro",
      "编程软件"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-029",
    "category": "plc",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川 AM 系列中型 PLC 各型号的定位差异（AM300、AM400、AM500、AM600、AM760），以及 AC700/AC800 与之的本质区别。",
    "options": null,
    "answer": "参考答案要点：\n1）AM600 系列：官网定位「通用型中型 PLC」，是汇川技术自主开发的首款中型 PLC，适用于大规模控制的工厂自动化、产线自动化、过程控制自动化设备。\n2）AM400 系列：官网定位「经济型中型 PLC」，为经济型高性能中型 PLC，完全符合 IEC-61131-3 模型规范，支持 IL、LD、SFC、CFC、ST 等语言，提供基于 EtherCAT 的运动控制库（点对点、凸轮、插补）以及 CANopen 通信库、文件处理、字符串处理、以太网通信、485 通信等库。\n3）AM300 系列：官网定位「纯网络型中型 PLC」，符合 PLCopen 规范和 IEC-61131-3，高性能、小体积、模块化；集成 EtherNet/IP、OPC UA、Modbus TCP（支持两路不同网段的 IP 地址）、TCP/IP、RS485（最大可扩展至 3 路）、CAN 等；主要面向暖通空调、化工印染、水处理、污水处理、热处理等过程控制行业，也可作为物流、汽车、日用品等单机组合产线的网络通信站点。\n4）AM500 系列：官网定位「标准型中型 PLC」，小巧 CPU 体积、模块化灵活组合、高节拍生产；支持 EtherCAT、EtherNet/IP、OPC UA、Modbus TCP（支持两路同一网段的 IP 地址）、TCP/IP、RS485（最大可扩展至 3 路）、CAN；主要应用于食品饮料、包装、印刷、硅晶、医疗、SMT 周边等单机自动化设备及单机组合产线。\n5）AM760 系列：官网定位「高性能中型 PLC」，卧式形态，基于风电设计打造的稳定性，1ms 周期 64 轴同步能力，可扩展 32 个 GL20 模块；面向硅晶、锂电、汽车、金属线缆等对运动控制要求较高的场景，以及需要多路 CAN/多路串口/多网段 IP/EtherCAT 环网的大型产线复杂组网场景。\n6）与 AC700/AC800 的本质区别：AM 系列是标准中型 PLC；AC700/AC800 是「书本式智能机械控制器」，基于 Intel X86 处理器硬件平台，以 EtherCAT 为总线实现多轴伺服控制（AC700 最大 1ms-32 轴同步、EtherCAT 单口最大 128 从站、本体集成 UPS；AC800 支持 250μs-8 轴、500μs-32 轴、4ms-256 轴运算速度，双 EtherCAT 口 + 双 EtherNet 口，支持机械手、电子凸轮、电子齿轮，抖动 40μs），定位是高性能多轴运动控制与边缘计算载体，尤其适用于高速生产装备和大型设备控制。\n7）平台共性：AM 系列与 AC 系列均使用 InoProShop，并可搭载基于 ISA88 的 InoQuickPro 标准化编程模板。",
    "analysis": "本题考察中型控制器内部的定位分层，是方案阶段区分「经济型/标准型/高性能型/网络型」的关键。失分点通常集中在三处：一是把 AM300 与 AM500 的 Modbus TCP 网段能力搞混（前者两路不同网段，后者两路同一网段）；二是把 AM760 的 1ms 周期 64 轴与 AC700 的 1ms 周期 32 轴记反；三是把 AC 系列当成「更高配的 AM」，忽略了它基于 Intel X86 硬件平台、定位为智能机械控制器/边缘计算载体这一根本差异。建议按「定位关键词 + 带轴能力 + 网络能力 + 目标行业」四栏做一张对照表随身使用。",
    "source": {
      "title": "汇川技术 AM 系列与 AC 系列产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/list?typeId=157"
    },
    "tags": [
      "AM400",
      "AM500",
      "AM760",
      "AC700",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-033",
    "category": "plc",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某客户要改造一台小型包装机，需求为：8 轴运动控制（其中 2 轴做主从同步）、需要与上位管理系统通过以太网交换数据、现场还有一批老设备走 CAN 总线和 RS485，客户希望尽量统一到一套 PLC 上，并且对成本比较敏感。请给出基于汇川小型 PLC 的方案建议，说明芯片/接口层面的匹配关系，以及必须向客户澄清的关键参数。",
    "options": null,
    "answer": "参考答案要点：\n1）主控选型：推荐 H5U 系列 EtherCAT 总线高性能小型 PLC。依据：官网明确其「支持 32 轴 EtherCAT 总线运动控制，支持绝对/相对、速度、转矩、点动控制、插补功能，最大支持 72 个 EtherCAT 从站」，8 轴远在能力范围内；「支持 RS485、CAN、以太网和 EtherCAT 接口，可实现多层次网络通信；以太网接口支持 ModbusTCP 协议和套接字通信」，恰好覆盖客户的以太网数据交换 + CAN + RS485 三类需求；「支持直线圆弧插补，支持电子凸轮、电子齿轮（脉冲轴和 EtherCAT 轴可以混合凸轮与插补）」，2 轴主从同步可用电子齿轮/电子凸轮实现。成本敏感场景下，H5U 相比中型 PLC 有明确的价格优势，编程平台为 AutoShop。\n2）接口与轴控匹配：H5U 本体自带 16 路输入和 14 路输出，含 4 路高速输入、4 路中速输入和 4 路高速输出，可实现 4 轴 200KHz 脉冲输出和 4 轴编码器计数，最大可扩展 16 个本地扩展模块。若 8 轴全部走 EtherCAT 总线（配汇川总线型伺服），本体 IO 可留给传感器与执行机构；若其中部分轴必须走脉冲，则要注意本体脉冲轴上限为 4 轴，超出部分需改用总线轴或增加扩展。\n3）老设备接入：CAN 侧需确认老设备协议是 CANopen 还是汇川 CANlink（H3U/S 官网明确「1 路 CAN 接口支持 CANlink 和 CANopen 协议」），H5U 的 CAN 口协议能力需按具体机型与手册确认；RS485 侧走 Modbus RTU 主站方式接入。若老设备协议不标准，需评估是否加协议转换网关。\n4）数据上传：以太网口支持 Modbus TCP 与套接字通信，可直接与上位系统（SCADA/MES）对接；若上位要求 OPC UA 或 EtherNet/IP，则需要评估升级到 Easy 系列（Easy 支持 EtherNet/IP、OPC UA（服务器）、Socket 等）或中型 PLC。\n5）必须澄清的关键参数：a）8 轴的轴类型构成（总线轴/脉冲轴各几个、是否全部使用汇川伺服）；b）「2 轴主从同步」的精度与相位要求，决定用电子齿轮还是电子凸轮，以及是否需要色标/编码器反馈；c）上位管理系统的具体协议与数据点表规模；d）CAN 老设备的协议类型、波特率与节点数；e）是否需要运动控制与数据上传的实时性隔离（如双网段 IP）；f）电柜空间与散热、本体点数是否够用，需要的扩展模块数量与类型。\n6）备选与升级路径：若客户后续对数据层要求提高到 OPC UA/EtherNet/IP 或要求 100% 国产化核心器件，可切换到 Easy 系列（全系列 8 个机型、双网口设计、支持双网段 IP、CPU 及核心器件 100% 国产化）；若点数与工艺复杂度增长则进入 AM 系列中型 PLC（InoProShop 平台）。",
    "analysis": "本题考察在成本约束下做「小型 PLC 多协议一体化」方案的取舍能力。关键判断点有两处：一是 H5U 同时具备 EtherCAT、以太网、CAN、RS485 四类接口，这是它区别于 H1U/H3U 的核心价值，也是本题的最优解基础；二是必须把「8 轴」拆开看——EtherCAT 总线轴可到 32 轴，但本体脉冲轴只有 4 轴，混用时的分配直接决定方案是否可行。常见错答是直接推荐中型 PLC（成本过剩）或忽略 CAN/RS485 老设备协议差异（实施阶段返工）。答题时给出「主控 + 接口匹配 + 待澄清清单 + 升级路径」四段结构，能体现完整的方案思维。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页",
      "chapter": "产品概览 / 产品特性及优点",
      "url": "https://www.inovance.com/portal/product/details?productId=54"
    },
    "tags": [
      "H5U",
      "通信组网",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-037",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "某系统集成商希望在机械设计阶段就验证产线方案可行性、做机器人焊接轨迹干涉检查与虚拟调试。按汇川官网对 iFA EX 的描述，下列哪一项说法正确？",
    "options": {
      "A": "iFA EX 是 iFA Evolution 平台内的一个组态插件，随 iFA Evolution 安装即可使用，因此对电脑配置没有额外要求",
      "B": "iFA EX 是机电一体化仿真软件，支持主流 3D 模型导入、内置标准化基础模型库，并兼容多种主流控制器与机器人，可用于方案仿真验证与虚拟调试",
      "C": "iFA EX 是伺服环路整定与增益自整定的调试软件，与设备三维模型和产线仿真无关",
      "D": "iFA EX 只能对已连接的实体控制器做在线监视，不能脱离硬件进行虚拟仿真"
    },
    "answer": [
      "B"
    ],
    "analysis": "B 对应官网原文：「iFA EX 仿真软件由国内汇川技术与海外团队共同研发，融合国内自动化经验与全球前沿仿真技术，打造的先进虚拟设备与产线仿真调试平台。该平台支持主流 3D 模型导入，内置丰富的标准化基础模型库，并兼容多种主流控制器与机器人，可快速实现设备仿真与虚拟调试」。A 错在两处：在官网 PLC 品类下，iFA EX 是与 iFA Evolution 并列的独立子类目，有自己的独立安装环境要求，且门槛明显更高——CPU 需 Intel Core i5 标准版 4xxx 及以上、内存 16G DDR4 及以上、显卡 RTX3060/RTX3060Ti/GTX1080Ti 及以上、可用空间＞120G，而 iFA Evolution 只要求 8G 以上内存（推荐 16G）与＞100G 硬盘、无独立显卡要求。C 把仿真软件与伺服调试工具混为一谈，环路整定属于 InoDriveShop 一类软件的工作。D 与官网「虚拟调试」「方案可行性仿真验证」的定位完全相反。",
    "source": {
      "title": "汇川技术 iFA EX 仿真软件（机电一体化仿真软件）产品页",
      "chapter": "产品概览 / 安装环境要求、产品特点（方案仿真验证、集成虚拟调试、广泛的兼容性）",
      "url": "https://www.inovance.com/portal/product/details?productId=739"
    },
    "tags": [
      "iFA EX",
      "仿真",
      "虚拟调试"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-040",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 AC700 与 AC800 同为书本式智能机械控制器。按官网规格，两者在核心算力配置上的对应关系是？",
    "options": {
      "A": "AC700 为 Intel Celeron x86 高性能 CPU+64GSSD+4GDDR；AC800 为 i7+128GSSD+4GDDR",
      "B": "AC700 为 i7+128GSSD+4GDDR；AC800 为 Intel Celeron x86+64GSSD+4GDDR",
      "C": "两者均为 Intel Celeron x86+64GSSD+4GDDR，差异只体现在带轴能力上",
      "D": "AC700 为 ARM 四核处理器；AC800 为 i5+256GSSD+8GDDR"
    },
    "answer": [
      "A"
    ],
    "analysis": "A 与官网原文逐字对应：AC700 页面「高性能」条目写「采用 Intel Celeron x86 高性能 CPU+64GSSD+4GDDR。最大支持 1ms-32 轴同步运行。」；AC800 页面「强计算能力」条目写「i7+128GSSD+4GDDR 为计算提供澎湃动力」。需要提醒的是这两个数字都是各自产品页「产品概览」的头条口径，实际选型还要看「规格参数」页签的分型号档位——AC700 内部再分 AC702（16 轴）与 AC703（32 轴），AC800 内部再分 AC812/AC810（i7 2.7GHz 与 i5 2.5GHz）与 AC802/AC801（Celeron 1.6GHz），因此报「AC800」时若不加型号，客户拿到的可能是 Celeron 档而不是 i7 档。B 把两者对调，是本题最主要的干扰项。C 把 AC800 的算力拉平到 AC700 水平，忽略了官网给 AC800 定义的「边缘计算载体」定位与配套的数据处理库（用于大数据处理、文件处理、产线数据收集与处理），也忽略了它 250μs-8 轴、500μs-32 轴、4ms-256 轴的算力档位。D 的「四核处理器」说法来自中型 PLC 产品线——官网写 AM300、AM500 为「四核处理器、纳秒级指令处理速度」，AM760 为「四核处理器、1.8GHz 主频」，而 Easy 系列卧式形态为「高性能双核处理器」，把小型或中型 PLC 的处理器描述安到 X86 书本式控制器上属于典型的跨品类串号。",
    "source": {
      "title": "汇川技术 AC700 系列书本式智能机械控制器产品页 / AC800 系列书本式高性能智能机械控制器产品页",
      "chapter": "产品概览 / 高性能、强计算能力",
      "url": "https://www.inovance.com/portal/product/details?productId=327"
    },
    "tags": [
      "AC700",
      "AC800",
      "算力",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-041",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "某包装机械客户要求控制平台自带行业标准化程序开发模板以缩短开发周期。按汇川官网对 AC700 的描述，其明确提供的标准化程序开发模板是基于什么标准？",
    "options": {
      "A": "基于 PackML 的标准化程序开发模板",
      "B": "基于 ISA88 的 InoQuickPro 标准化编程模板框架",
      "C": "基于 PLCopen TC6 的运动控制模板",
      "D": "基于 IEC 61499 的功能块模板"
    },
    "answer": [
      "A"
    ],
    "analysis": "AC700 产品页在「电气工程师轻松玩转运动控制」条目中写明「符合 IEC 61131-3 及 PLCopen 标准。提供易用的 EtherCAT 整套解决方案和基于 PackML 的标准化程序开发模板」，因此 A 正确。B 是最具迷惑性的一项：InoQuickPro 确实是汇川基于 ISA88 标准开发的标准化编程模板框架，但它出现在 AM300、AM500、AM760 的产品页中，运行在 InoProShop 平台上（EVO400 页面提到的是基于汇川 InoQuickPro 工艺规范的编程模板），并非 AC700 页面所述的模板来源。C 的 PLCopen 在 AC700 页面里是以「符合……标准」的合规表述出现，TC6 是运动控制规范本身，不是汇川交付的成套模板。D 的 IEC 61499 在汇川该产品线的官方描述中并未作为模板标准出现。PackML 面向包装机械的状态机建模，与本题客户行业高度对口。",
    "source": {
      "title": "汇川技术 AC700 系列书本式智能机械控制器产品页",
      "chapter": "产品概览 / 电气工程师轻松玩转运动控制",
      "url": "https://www.inovance.com/portal/product/details?productId=327"
    },
    "tags": [
      "AC700",
      "PackML",
      "标准化模板",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-043",
    "category": "plc",
    "type": "single",
    "difficulty": 2,
    "stem": "某新能源电池产线要做机械安全改造，客户询问汇川功能安全 PLC 的产品形态、安全认证依据与配套安全 IO。按官网信息，下列说法正确的是？",
    "options": {
      "A": "产品为 EVO1000EF，配套 Hi50 系列分布式安全 IO 模块，符合 IEC 61508、IEC 62061 以及 ISO 13849 等国际安全标准",
      "B": "产品为 EVO1000EF，配套 Hi80 系列安全 IO 模块，符合 IEC 61131-3 与 PLCopen 规范",
      "C": "产品为 EVO800，配套 Hi50 系列安全 IO 模块，最高可达 PL d/Cat.3/SIL 2",
      "D": "产品为 EVO400，配套 GL20 系列安全模块，最高可达 PL e/Cat.4/SIL 3"
    },
    "answer": [
      "A"
    ],
    "analysis": "A 与官网一致：官网产品名为「EVO1000EF&Hi50」，描述为「汇川技术推出的高性能的 FA 安全产品，专为工业安全控制场景设计，符合 IEC 61508，IEC 62061，以及 ISO 13849 等国际安全标准，最高可达 PL e/Cat.4/SIL 3 的安全级别……支持本地和远程扩展安全 I/O」。B 错在配套型号与标准两处：Hi80 是 EVO800 大型冗余系统配套的高性能分布式 IO，不是安全 IO；IEC 61131-3 与 PLCopen 是常规编程规范，不能作为功能安全等级的认证依据。C 把型号与安全等级一并改写，EVO800 是大型冗余 PLC，不是功能安全认证主体。D 错在 EVO400 属标准中型 PLC、GL20 属通用刀片式 IO，二者都不在功能安全产品线内。安全产品的型号与安全等级必须成对出现，报错型号等于丢掉整条安全业务。",
    "source": {
      "title": "汇川技术 EVO1000EF 系列功能安全 PLC 产品页",
      "chapter": "产品概览 / 产品简介（国产功能安全解决方案、高功能安全等级）",
      "url": "https://www.inovance.com/portal/product/details?productId=797"
    },
    "tags": [
      "EVO1000EF",
      "Hi50",
      "功能安全"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-046",
    "category": "plc",
    "type": "multi",
    "difficulty": 2,
    "stem": "按汇川官网 AC700 系列产品页的描述，下列关于其集成化设计与本体能力的表述，正确的有哪些？（多选）",
    "options": {
      "A": "本体集成 UPS（不间断电源），无需外接 UPS 即可实现数据掉电保存",
      "B": "数据存储区 128MB、程序存储区 128MB，掉电保持空间 5MB",
      "C": "采用 EtherCAT+2*EtherNet 的三网口设计，EtherCAT 单口最大支持 128 从站，双网口采用独立 IP 设计，满足内外网隔离需求",
      "D": "官方资料下载区提供《中型PLC编程手册（机器人集成控制篇）》，说明该系列可承担机器人集成控制应用",
      "E": "本体不带高速 IO 与串口，这两项能力必须通过 GL20 扩展模块补齐"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B、C、D 均为 AC700 产品页可核实的官方信息：A 见「集成化设计」；B 见「大容量」；C 见「三网口设计」；D 见「资料下载」栏目中的《中型PLC编程手册（机器人集成控制篇）-中文》（编号 PS00017338_PDF_CN，A01 版本），该手册同时出现在 AC700 与 AC800 的资料下载区，是官网上这两款控制器可做机器人集成控制应用的最直接资料，配套的还有《中型PLC编程手册（运动控制篇）》《中型PLC编程手册（软件使用篇）》《中型PLC指令手册》。E 与官网直接矛盾，属于把高集成书本式控制器当成普通模块化 PLC 理解的典型错误——官网在「集成化设计」中写明本体「集成一路 RS232/RS485 串口，支持 Modbus 主从站及自由协议」「集成停止/启动 PLC 接口，通过外部输入信号控制 PLC 启停」「本地自带 200kHz 高速 IO(8*DI+4*DO)」。另外官网在「助力传统企业实现工厂数字化」中还列出支持 EtherNet/IP、OPC UA、ModbusTCP、UDP、Socket 等多种通信协议，提供上位机通信 API 接口，并支持 MySQL 数据库远程访问与 Sqlite 本地部署访问。",
    "source": {
      "title": "汇川技术 AC700 系列书本式智能机械控制器产品页",
      "chapter": "产品概览 / 高性能、大容量、集成化设计、三网口设计",
      "url": "https://www.inovance.com/portal/product/details?productId=327"
    },
    "tags": [
      "AC700",
      "集成化设计",
      "掉电保持",
      "三网口"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-047",
    "category": "plc",
    "type": "multi",
    "difficulty": 2,
    "stem": "按汇川官网 Easy 系列卧式形态小型 PLC（Easy321/Easy511）产品页的规格，下列关于其网络、存储与编程能力的表述，正确的有哪些？（多选）",
    "options": {
      "A": "网络通信：EtherNet×1 支持 Modbus TCP、OPC UA（服务器）、Socket、EtherNet/IP、PN（从站）、MC（从站）、Fins（从站）",
      "B": "存储空间：128K 步用户程序、1MByte 自定义变量（其中 128kByte 支持掉电保持），约 150K 软元件，编号 1000 以后支持掉电保持",
      "C": "软件编程：支持 ST、LD、SFC 等编程语言，支持梯形图内嵌 ST 执行块，支持 FB、FC 与结构体、联合体、数组，编程软件支持无实物仿真",
      "D": "本体不提供 OPC UA 服务器功能，接入上位系统必须额外购买 OPC UA 网关",
      "E": "本体没有扩展卡槽，所有通信与存储功能都必须依靠外接扩展模块实现"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均为 Easy 系列卧式形态产品页原文条目。A 中的「Fins（从站）」一项很多工程师不熟悉，它是欧姆龙体系的通信协议，官网把它列为从站支持，说明该机型在替换日系小型 PLC 的存量设备时具备协议层面的兼容性，是做老机改造方案时的关键依据。B 的掉电保持口径要记准：128kByte 属于 1MByte 自定义变量的一部分，且软元件编号 1000 以后支持掉电保持，两处限定条件在变量规划时都要考虑。C 的「无实物仿真」是该系列降低调试门槛的能力，可与 IT7000 的联合离线仿真配套使用。D 与 A 直接矛盾，把标准内置能力说成需要外购网关，属于自我压低配置；E 与官网「本体自带两个扩展卡槽」的表述相反，Easy511 的扩展卡槽 A 默认安装 GE21-EN 卡、扩展卡槽 B 可安装 GE21-TF-RTC、GE21-RTU 扩展卡等。",
    "source": {
      "title": "汇川技术 Easy 系列卧式形态小型 PLC 产品页",
      "chapter": "产品概览 / 网络通信、存储空间、软件编程",
      "url": "https://www.inovance.com/portal/product/details?productId=740"
    },
    "tags": [
      "Easy系列",
      "OPC UA",
      "存储",
      "扩展卡"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-048",
    "category": "plc",
    "type": "multi",
    "difficulty": 2,
    "stem": "某项目要在中型 PLC 下挂分布式 IO，并需要区分控制器层面与 IO 层面的组网能力。下列关于汇川 GL20 系列刀片式模块与 AM 系列网段能力的表述，正确的有哪些？（多选）",
    "options": {
      "A": "GL20 模块薄至 12mm，内部总线速度可达 100Mbps，IO 开断时间＜100us，模拟量转换速度＜62.5us",
      "B": "GL20 支持 EtherCAT、PROFINET 双重协议，耦合器最低扫描周期可达 125us，并具备通道级诊断能力",
      "C": "AM300 系列的 Modbus TCP 支持两路不同网段的 IP 地址，AM500 系列的 Modbus TCP 支持两路同一网段的 IP 地址",
      "D": "GL20 采用螺钉端子接线，接线时间比上一代产品增加，且不支持模拟量与温度量模块",
      "E": "AM300 与 AM500 本体均自带两个扩展卡槽，可扩展模拟量、数字量、CAN、RS485、TF 存储卡、RTC 时钟，本地可扩展 16 个 GL20 系列刀片式模块"
    },
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "analysis": "A、B 出自 GL20 产品页「性能优越，微秒级响应」与「可实现多种系统构成」条目，官网还写明它「相比上一代 GL10 性能提升 10 倍以上」、安装维护效率较上一代提升 3 倍、采用大口径 PUSH IN 端子使接线时间节省 66%。C 是两代中型 PLC 的重要区分点：AM300 官网写「支持两路不同网段的 IP 地址」，AM500 官网写的是「两路同一网段的 IP 地址」，把两者记反会直接导致内外网隔离方案失效。E 对应 AM300 与 AM500 产品页「模块化组合配置」条目。D 三处均与官网相反：GL20 用大口径 PUSH IN 端子实现免工具接线、接线时间节省 66%，官网明确支持「多种点数、类型的 IO 模块，模拟量、温度量、通讯量等各种类型」，并具备通道级诊断。",
    "source": {
      "title": "汇川技术 GL20 系列刀片式扩展模块产品页 / AM300 系列纯网络型中型 PLC 产品页 / AM500 系列标准型中型 PLC 产品页",
      "chapter": "产品概览 / 性能优越微秒级响应、模块化组合配置、助力过程控制智能化升级",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "AM300",
      "AM500",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-053",
    "category": "plc",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 Easy 系列卧式形态小型 PLC 本体的扩展模块数量固定为最多 8 个，即使增加电源模块也无法再提升。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "说法错误。官网 Easy 系列卧式形态产品页「扩展能力」条目写的是「最大可带 8 个扩展模块，增加 GL20-PS2 电源可支持 15 个扩展模块」。也就是说 8 个是本体直接带载时的上限，增加 GL20-PS2 电源模块后可以扩展到 15 个。这个差异在点数较多的项目中直接影响配置清单与电柜空间：若按「只能 8 个」报价，客户点数一多就得被迫升级到中型 PLC，成本上升；若按「能带 15 个」报价却漏配电源模块，现场会因供电不足无法带满。正确做法是按客户实际模块数量核算，超过 8 个时明确在 BOM 中加入 GL20-PS2。",
    "source": {
      "title": "汇川技术 Easy 系列卧式形态小型 PLC 产品页",
      "chapter": "产品概览 / 扩展能力",
      "url": "https://www.inovance.com/portal/product/details?productId=740"
    },
    "tags": [
      "Easy系列",
      "扩展模块",
      "GL20",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-054",
    "category": "plc",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 AM300 与 AM500 系列中型 PLC 的数据容量均为 20 MByte，其中 512 KByte 支持掉电保持；而 Easy 系列卧式形态小型 PLC 为 1 MByte 自定义变量，其中 128 kByte 支持掉电保持。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "说法正确，两组数字分别对应官网原文：AM300 与 AM500 产品页「大容量」条目写「10 MByte 程序容量」「20 MByte 数据容量，其中 512 KByte（AM500 页面写 512 kByte）支持掉电保持」；Easy 系列卧式形态产品页「存储空间」条目写「128K 步用户程序，1MByte 自定义变量，其中 128kByte 支持掉电保持，约 150K 软元件，编号 1000 以后支持掉电保持」。现场意义在于：掉电保持空间直接决定设备断电后能否恢复夹具位置、配方与计数，选型时必须按需要保持的变量量核算，而不是只看总数据容量——把 20 MByte 数据容量当作可全部保持是常见误区。若需要保持的数据超出该范围，可通过扩展卡增加 TF 存储卡做持久化（AM300/AM500 本体自带两个扩展卡槽，支持扩展模拟量、数字量、CAN、RS485、TF 存储卡、RTC 时钟），或改用上位机数据库方案。另外 AC700 的掉电保持空间为 5MB，与本体的 128MB 数据存储区、128MB 程序存储区也不是同一口径。",
    "source": {
      "title": "汇川技术 AM300 系列纯网络型中型 PLC 产品页 / AM500 系列标准型中型 PLC 产品页 / Easy 系列卧式形态小型 PLC 产品页",
      "chapter": "产品概览 / 大容量、存储空间、模块化组合配置",
      "url": "https://www.inovance.com/portal/product/details?productId=455"
    },
    "tags": [
      "掉电保持",
      "数据容量",
      "选型"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-055",
    "category": "plc",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明使用汇川 H5U 系列小型 PLC 做 EtherCAT 轴控组网时的关键要点，以及在该平台上编程与选型时必须注意的事项。",
    "options": null,
    "answer": "参考答案要点：\n1）官方定位：官网称 H5U 为「汇川技术推出首个应用 EtherCAT 总线的小型 PLC」，产品定位「EtherCAT 总线高性能小型 PLC」，卖点是「EtherCAT 平民化一站式解决方案、高效率编程实现」。\n2）总线与轴控能力：支持 32 轴 EtherCAT 总线运动控制，支持绝对/相对、速度、转矩、点动控制与插补功能，最大支持 72 个 EtherCAT 从站；支持直线圆弧插补，支持电子凸轮、电子齿轮，且脉冲轴与 EtherCAT 轴可以混合凸轮与插补——这一点在做「部分轴走总线、部分轴走脉冲」的混合方案时非常关键。\n3）本体脉冲与 IO 资源核算：主机本体自带 16 路输入和 14 路输出，含 4 路高速输入、4 路中速输入和 4 路高速输出，可实现 4 轴 200KHz 脉冲输出和 4 轴编码器计数；最大可扩展 16 个本地扩展模块。选型第一步是算「总线轴数 + 脉冲轴数」：本体脉冲轴上限只有 4 轴，超出的轴必须走 EtherCAT 总线轴。\n4）通信接口分配：支持 RS485、CAN、以太网和 EtherCAT 接口，可实现多层次网络通信；以太网接口支持 Modbus TCP 协议和套接字通信。做「伺服 + 变频器 + 仪表 + 上位系统」混合组网时，要按协议分配接口，不要把 EtherCAT 从站接到普通以太网口上。\n5）组网与站地址：EtherCAT 从站地址由主站扫描组态时按拓扑顺序自动分配，现场一般无需也不应通过拨码另行设定；组态需使用官方提供的描述文件（产品页资料下载区提供 H5U_V1.00.eds 等通讯配置文件）。扫描不到从站时按「物理链路 → 机型接口 → 站号与拓扑 → 软件启用状态」的顺序排查。\n6）编程平台与官方手册：H5U 使用 AutoShop 小型 PLC 后台编程软件（与 H3U、H1U、Easy 系列同平台），不同系列工程文件不可直接互导。官方编程资料为《H5U&Easy 系列可编程逻辑控制器编程手册》与《H5U&Easy 系列可编程逻辑控制器指令手册》，两份手册同时覆盖 H5U 与 Easy，说明指令体系同源，但机型功能仍有差异。\n7）选型陷阱：官网资料下载区同时存在《H5U 系列可编程逻辑控制器用户手册》与《H5U 系列可编程逻辑控制器用户手册（无 CAN、电子凸轮、电子齿轮）》，说明该系列内存在不带 CAN 与电子凸轮/电子齿轮功能的机型。方案里一旦用到 CAN 组网或凸轮/齿轮功能，必须按具体订货型号核对，避免把低配机型写进方案。\n8）与同门的边界：H5U 主打 EtherCAT 带轴的小型化与性价比；若项目对核心器件国产化率、双网口双网段、与 IT7000 联合离线仿真有要求，应评估 Easy 系列；若需要 ISA88 标准化模板、过程控制回路或更大的组网规模，则应升级到 AM 系列中型 PLC（InoProShop 平台）。",
    "analysis": "本题考察 H5U 这条「EtherCAT 平民化」产品线的实战把握，重点不在背参数，而在把「轴数怎么算、接口怎么分、站号怎么来、手册怎么选」四件事说清楚。最容易失分的是轴数核算：很多人只记住 32 轴 EtherCAT，却忽略本体脉冲轴只有 4 轴，遇到「6 轴脉冲定位」的需求会直接判断失误。第二处失分点是把 EtherCAT 从站当成需要拨码设地址的设备——汇川 EtherCAT 从站地址由主站扫描时按拓扑顺序分配，现场拨码反而容易与组态冲突。第三处是忽略 H5U 系列内存在无 CAN/无凸轮齿轮的机型，方案里写了凸轮功能却选了低配型号。把这些点讲清楚，比单纯罗列 32 轴与 72 从站更能体现专业度。",
    "source": {
      "title": "汇川技术 H5U 系列 EtherCAT 总线高性能小型 PLC 产品页（含资料下载区手册与组态文件清单）",
      "chapter": "产品概览 / 产品特性及优点、资料下载 / 产品手册与通讯配置文件",
      "url": "https://www.inovance.com/portal/product/details?productId=54"
    },
    "tags": [
      "H5U",
      "EtherCAT",
      "AutoShop",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "PLC-056",
    "category": "plc",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川 iFA Evolution（驭沃）与 iFA EX 两款软件各自的定位与能力边界，并说明什么情况下必须使用 iFA EX 而不能只靠 iFA Evolution。",
    "options": null,
    "answer": "参考答案要点：\n1）iFA Evolution（驭沃）定位：官网称其为「全场景智能化工业控制软件平台」，是「新一代工业自动化的数字底座开发平台，可对汇川全体系自动化产品进行组态、编程、调试和仿真」，深度集成执行/传感层、驱动层、控制层、边缘层所有类别产品，并可与最上层的信息层充分链接。核心能力包括：全集成（支持多品类产品开发）、联合仿真（支持 PLC&HMI&驱动联合仿真）、轻量化部署（支持在线升级安装，30 秒完成软件安装卸载）、多设备工程（支持多控制器在同一项目管理，典型场景为汽车组装、物流手机组装、医药产线、作业岛）、变量共享（变量一次定义、跨设备多路复用，效率提升 30% 以上）、图符模板、多样化控件（PDF 控件、视频控件）、Web 技术应用。安装环境：Intel Core i5 标准版 4xxx 及以上 CPU、8G 以上内存（推荐 16G）、可用空间＞100G、分辨率 1920*1080 或 22 寸显示器、Windows 10/11 企业版或专业版（64 位）。\n2）iFA EX 定位：官网产品名为「iFA EX 仿真软件／机电一体化仿真软件」，由汇川与海外团队共同研发，是「先进虚拟设备与产线仿真调试平台」，三大特点是方案仿真验证、集成虚拟调试、广泛的兼容性；支持主流 3D 模型导入，内置丰富的标准化基础模型库，并兼容多种主流控制器与机器人。\n3）能力边界：iFA Evolution 的「仿真」是控制器与 HMI、驱动层面的逻辑与画面联合仿真，解决的是程序逻辑、画面联动、变量映射层面的验证，不承担机械机构运动学、三维几何干涉、产线节拍与物流仿真。iFA EX 面向设备与产线的三维仿真与虚拟调试，官网列出的典型价值包括：与客户共同探索非标设备研发创新模式、更直观的方案展示与需求沟通以减少变更、方案可行性仿真验证、虚拟调试显著提升调试效率、机器人焊接轨迹仿真与干涉验证以降低现场碰撞风险、数字孪生赋能物流高效集成。\n4）必须使用 iFA EX 的场景：a）需要在机械设计阶段验证机构动作可行性、做干涉与可达性分析（如机器人焊接轨迹仿真）；b）需要做产线级节拍与物流仿真、数字孪生与生产系统对接模拟；c）需要把三维设备模型与控制器程序联动做虚拟调试，提前在办公室暴露撞机与逻辑冲突；d）客户在合同中要求交付仿真验证与虚拟调试成果。\n5）安装环境差异（说明 iFA EX 是独立软件而非插件）：iFA EX 要求 CPU Intel Core i5 标准版 4xxx 及以上、内存 16G DDR4 及以上、显卡 RTX3060/RTX3060Ti/GTX1080Ti 及以上、可用硬盘空间＞120G、Windows 系统；指标明显高于 iFA Evolution，尤其是独立显卡与内存要求。\n6）配套资源：iFA Evolution 的官方学习与交流入口为汇川技术星球官网的 iFA 课程平台与水滴社区，官方编程资料为《iFA 信息系统-中文》（A17 版本）。",
    "analysis": "本题考察「两个 iFA 软件到底谁干什么」这一在实际项目中极易混淆的问题，销售与售前答错的代价是要么漏卖 iFA EX（丢掉仿真相关预算），要么把 iFA EX 当成 iFA Evolution 的免费插件承诺给客户，交付时无法兑现。答题要点在于把边界讲清楚：iFA Evolution 管的是控制器侧的组态、编程、调试与 PLC/HMI/驱动联合仿真；iFA EX 管的是三维设备与产线的仿真验证、虚拟调试与机器人轨迹干涉检查。两者在官网 PLC 品类下是并列的两个子类目，安装环境要求不同（尤其在内存与显卡上差异明显），可以互相配合但不可相互替代。答题时若只罗列 iFA Evolution 的功能而说不出 iFA EX 的独立价值，等于没有回答「边界」二字。",
    "source": {
      "title": "汇川技术 iFA Evolution（驭沃）产品页 / iFA EX 仿真软件产品页",
      "chapter": "产品概览 / 能力清单与安装环境要求",
      "url": "https://www.inovance.com/portal/product/details?productId=739"
    },
    "tags": [
      "iFA Evolution",
      "iFA EX",
      "仿真",
      "选型"
    ],
    "roles": [
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "PLC-064",
    "category": "plc",
    "type": "fill",
    "difficulty": 2,
    "stem": "按汇川官网 Easy 系列卧式形态小型 PLC（Easy321/Easy511）产品页的「处理性能」条目，该系列本体采用的是 ____ 处理器，带来 ____ 级指令处理速度。",
    "options": null,
    "answer": [
      "高性能双核",
      "纳秒"
    ],
    "analysis": "Easy 系列卧式形态产品页「处理性能」条目原文为「高性能双核处理器、纳秒级指令处理速度」，两空依次为高性能双核与纳秒。易错点是把 Easy 系列的两个形态混为一谈：卧式形态（Easy321/Easy511）官网写的是双核处理器，而全场景紧凑型 Easy 系列写的是四核处理器，两者不是同一档性能口径；此外还会与 H3U/S 等早期小型机「综合扫描速度相比上一代提升」这类相对指标串号。向客户介绍本体的运算能力时要分清机型形态，不要笼统说「Easy 系列都是四核」。",
    "source": {
      "title": "汇川技术 Easy 系列卧式形态小型 PLC 产品页",
      "chapter": "产品概览 / 处理性能",
      "url": "https://www.inovance.com/portal/product/details?productId=740"
    },
    "tags": [
      "Easy511",
      "Easy321",
      "处理性能",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-065",
    "category": "plc",
    "type": "fill",
    "difficulty": 2,
    "stem": "按汇川官网 AM500 系列标准型中型 PLC 产品页给出的通信规格，其 EtherCAT 单口最大支持 ____ 个从站，同时支持 ____ 个 Modbus TCP 从站。",
    "options": null,
    "answer": [
      "127",
      "63"
    ],
    "analysis": "官网 AM500 产品页「强大的组网能力」条目原文为「EtherNet*2（单IP，内置交换机）+ EtherCAT*1，EtherCAT 单口最大支持 127 从站……同时支持 EtherNet/IP 主站和从站、支持 63 个 Modbus TCP 从站」，两空依次为 127 与 63。易错点是把 AM500 的从站上限与小型的 H5U（最大 72 个 EtherCAT 从站）或 AM760（可连接 256 个 EtherCAT 从站）串号，以及把「Modbus TCP 从站 63 个」与「单路 RS485 支持 31 个从站」混淆。做大产线方案或采购核对通信负载时，这些数字直接决定是否需要增加通信口或改用更高一档的控制器。",
    "source": {
      "title": "汇川技术 AM500 系列标准型中型 PLC 产品页",
      "chapter": "产品概览 / 强大的组网能力",
      "url": "https://www.inovance.com/portal/product/details?productId=455"
    },
    "tags": [
      "AM500",
      "EtherCAT",
      "从站数",
      "通信组网"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-066",
    "category": "plc",
    "type": "fill",
    "difficulty": 2,
    "stem": "按汇川官网 GE20 系列扩展卡产品页的描述，该系列扩展卡当前共有 ____ 种类型，可适配 Easy 系列全场景紧凑型中小型 PLC，Easy 系列最多可扩展 ____ 个扩展卡。",
    "options": null,
    "answer": [
      "8",
      "2"
    ],
    "analysis": "官网 GE20 系列扩展卡产品页原文为「GE20 系列扩展卡，当前共有 8 种类型，涵盖输入/出数字量、输入和输出模拟量混合、串口通信、时钟扩展、TF 卡扩展等……当前可适配 EASY 系列全场景紧凑型中小型 PLC 使用，EASY 系列最多可扩展两个扩展卡」，两空依次为 8 与 2。易错点是只记住「Easy 支持扩展卡」而记不住数量上限，报价时把串口、模拟量、TF 卡三种需求都排给同一台机器——实际只有两个卡槽，必须取舍。另外要注意 Easy 卧式形态机型用的是 GE21 系列扩展卡（如 GE21-EN、GE21-TF-RTC），与本页的 GE20 系列不是同一组型号，采购下单前必须按机型核对。",
    "source": {
      "title": "汇川技术 GE20 系列扩展卡产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=493"
    },
    "tags": [
      "GE20",
      "扩展卡",
      "Easy系列",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "PLC-010",
    "category": "plc",
    "type": "single",
    "difficulty": 3,
    "stem": "AM500 系列与 EVO500 系列都带「5」字头，但二者分属不同代际。按汇川官网信息，下列关于两者编程平台的对应关系，正确的是？",
    "options": {
      "A": "AM500 使用 iFA Evolution，EVO500 使用 InoProShop",
      "B": "AM500 使用 InoProShop，EVO500 使用 iFA Evolution（驭沃）",
      "C": "两者都使用 AutoShop，可直接互换工程文件",
      "D": "两者都使用 iFA Evolution，工程文件完全通用"
    },
    "answer": [
      "B"
    ],
    "analysis": "AM500 系列产品页在介绍「其开发编程平台 InoProShop 覆盖从多轴复杂应用、离散单机应用到基本逻辑应用」，下载区软件也是 InoProShop；而 EVO500 系列（EVO51X/EVO52X）明确写为「基于 iFA Evolution（驭沃）平台打造」，下载区软件是 iFA Evolution，因此 B 正确。A 把两者对调，是本题最容易上当的选项；C 的 AutoShop 只服务小型 PLC；D 的「完全通用」不成立，两代平台是不同架构，工程文件不能直接互导。销售的常见事故是客户手里有 AM500 的程序就想直接搬到 EVO500 上，这种情况必须按迁移项目评估而不是换型号了事。",
    "source": {
      "title": "汇川技术 AM500 系列标准型中型 PLC 产品页",
      "chapter": "产品概览 / 编程平台",
      "url": "https://www.inovance.com/portal/product/details?productId=455"
    },
    "tags": [
      "AM500",
      "EVO500",
      "iFA Evolution",
      "InoProShop"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-016",
    "category": "plc",
    "type": "multi",
    "difficulty": 3,
    "stem": "某大型产线改造项目要求控制器具备多路 CAN 通讯、多路串口、多网段 IP 地址以及 EtherCAT 组网能力。按汇川官网对 AM760 系列的描述，下列哪些说法是正确的？（多选）",
    "options": {
      "A": "AM760 属于卧式形态的高性能中型 PLC，设计完全符合 PLCopen 规范和 IEC 61131-3 标准",
      "B": "支持 EtherCAT、EtherNet/IP、OPC UA、Modbus TCP、TCP/IP、RS485、CAN 总线等工业网络",
      "C": "开发编程平台为 InoProShop，可搭载基于 ISA88 标准开发的 InoQuickPro 标准化编程模板框架",
      "D": "硬件平台为 Intel X86 架构，本体标配 4 个千兆网口",
      "E": "支持 1ms 周期 64 轴同步能力，并可扩展 32 个 GL20 模块"
    },
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "analysis": "A、B、C、E 均为 AM760 产品页原文：它被定义为「卧式形态的高性能中型 PLC」，符合 PLCopen 规范与 IEC 61131-3，支持 ST/LD/SFC/CFC，网络覆盖 EtherCAT、EtherNet/IP、OPC UA、Modbus TCP、TCP/IP、RS485、CAN，平台为 InoProShop 并可搭载 InoQuickPro 模板，官方卖点还写明「1ms 周期 64 轴同步能力、可扩展 32 个 GL20 模块」。D 错在两点：Intel X86 硬件平台与四网口设计是 AC700/AC800 智能机械控制器的特征（官网写 AC700「EtherCAT+2*EtherNet」，AC800 为双 EtherCAT 口 + 双 EtherNet 口），AM760 并未以此作为产品定位。把 AC 系列的特征安到 AM760 上是方案对比阶段最容易出现的张冠李戴，落笔前务必回到产品页核对。",
    "source": {
      "title": "汇川技术 AM760 系列高性能中型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=559"
    },
    "tags": [
      "AM760",
      "通信组网",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-018",
    "category": "plc",
    "type": "multi",
    "difficulty": 3,
    "stem": "一名新同事在整理汇川中型控制器的组网与平台资料，下列哪些表述是符合汇川官网信息的？（多选）",
    "options": {
      "A": "AM300 集成 OPC UA、EtherNet/IP、Modbus TCP、RS485、CAN 等网络，其 Modbus TCP 支持两路不同网段的 IP 地址",
      "B": "AM500 本体支持 EtherCAT、EtherNet/IP、OPC UA、Modbus TCP、TCP/IP、RS485、CAN 等工业网络",
      "C": "AC700 标配 EtherCAT 工业以太网实时总线，可实现最大 32 轴同步控制，全系配置两路千兆以太网口",
      "D": "AC800 采用双 EtherCAT 口与双 EtherNet 口设计，其中两个 EtherNet 口独立 IP，一个用于设备间组网、一个连接信息层",
      "E": "AM400 与 EVO400 使用同一套编程平台，工程文件可双向直接导入导出"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B、C、D 均对应官网原文：AM300「Modbus TCP（支持两路不同网段的 IP 地址）」；AM500 的网络清单与 AM300 同源但 Modbus TCP 为「两路同一网段的 IP 地址」，这个「不同网段/同一网段」的差异是两代产品的重要区分点；AC700「标配 EtherCAT 工业以太网实时总线，可以实现最大 32 轴同步控制。全系配置两路千兆以太网口」；AC800「双 EtherCAT 口……双 EtherNet 口独立 IP，一个口设备间的组网，一个口连接信息层，IP 分开，安全隔离」。E 错误：AM400 使用 InoProShop，EVO400 基于 iFA Evolution（驭沃）平台，两者是不同代际的不同平台，工程文件不能双向直接导入导出。",
    "source": {
      "title": "汇川技术 AM300 系列纯网络型中型 PLC 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=454"
    },
    "tags": [
      "AM300",
      "AC700",
      "AC800",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-024",
    "category": "plc",
    "type": "judge",
    "difficulty": 3,
    "stem": "汇川 EVO800 系列大型冗余 PLC 控制系统仅支持 CPU 冗余一种架构，且只支持 EtherNet/IP 一种总线协议。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "说法错误，两处都不成立。官网对 EVO800 的描述是「具备强兼容、易迁移、高保护、全自主等特性，PLC 支持单机模式、单机架多 CPU、冗余模式」，即该系列并非只有 CPU 冗余一种架构（提示：官网「规格参数」表对「CPU 冗余」标注为“不支持”，与产品概览文案存在口径差异；凡涉及 EVO800 冗余方案，均应以《EVO800&Hi80 系列大型 PLC 系统选型手册》与冗余系统手册确认后再承诺），并支持电源冗余、DLR 设备级环网冗余与 PRP 并行冗余网络；总线方面明确「主流总线全覆盖，支持 EtherNet/IP、OPC UA、Modbus TCP、PROFINET、PROFIBUS DP 等主流总线和协议」。EVO800 面向冶金、汽车、市政、水利、石油、矿山、港口、化工、电力等大型产线改造，这类现场往往混杂多品牌老设备，「强兼容、继承现有资产」正是其核心卖点，把它说成单一协议会直接丢掉项目。",
    "source": {
      "title": "汇川技术 EVO800 系列大型冗余 PLC 控制系统产品页",
      "chapter": "产品概览 / 强兼容",
      "url": "https://www.inovance.com/portal/product/details?productId=765"
    },
    "tags": [
      "EVO800",
      "冗余",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-030",
    "category": "plc",
    "type": "short",
    "difficulty": 3,
    "stem": "请梳理汇川 EVO 系列 PLC 的产品构成（基于 iFA Evolution 平台），说明各型号的定位，并把该系列与「大型冗余 PLC」「功能安全 PLC」两个子品类的关系讲清楚。",
    "options": null,
    "answer": "参考答案要点：\n1）平台基础：EVO 系列是汇川基于 iFA Evolution（驭沃）全场景智能化工业控制软件平台打造的新一代控制器家族，产品设计符合 PLCopen 规范和 IEC 61131-3 标准，EVO52X 被官方称为「基于 iFA Evolution 平台打造的首款产品」，综合性能相较前代提升 3-4 倍。\n2）EVO400 系列：标准中型 PLC，机身小巧（53mm/80mm/100mm 级别），位指令运算 2.5ns、整型运算 3ns、双精度浮点运算 5ns；主机自带 3 路以太网，其中 2 路为交换机模式、1 路为独立 IP 模式；支持 2 个 GE20 系列扩展卡、16 个 GL20 系列扩展模块（本地及远程扩展，官方另表述为本地最多扩展 8 个模块）；EtherNet/IP 最小通信周期 1ms、最大连接数 128。\n3）EVO500 系列分两条：EVO52X 为高性能小体积中型 PLC，纳秒级指令处理速度、支持 256 回路 PID 同步运算、1ms/12 轴高精运动控制、高阶凸轮；EVO51X 为纯网络型小体积中型 PLC，面向非流程行业 OEM 设备，自带 3 路以太网（2 路交换机模式 + 1 路独立 IP 模式），支持 PN 从站、EtherNet/IP、Modbus、OPC UA、CANopen、自由协议。\n4）EVO700 系列：EVO760 为旗舰型中型 PLC，支持 EtherCAT、EtherNet/IP、OPC UA、Modbus TCP、TCP/IP、CAN 等标准工业网络。\n5）与「大型冗余 PLC」的关系：该子品类对应 EVO800 系列大型冗余 PLC 控制系统，同样依托 iFA Evolution 平台，按车规级高可靠标准打造，支持单机模式、单机架多 CPU、冗余模式，以及电源冗余、DLR 设备级环网冗余、PRP 并行冗余网络；总线覆盖 EtherNet/IP、OPC UA、Modbus TCP、PROFINET、PROFIBUS DP；配套高可靠 Hi80 系列 IO 与自研光电复用一体式 DLR 交换机，支持星型、线型、环形、环形+分支等拓扑，可覆盖长距离 10Km 光纤通信；面向冶金、汽车、市政、水利、石油、矿山、港口、化工、电力等大型产线。\n6）与「功能安全 PLC」的关系：该子品类对应 EVO1000EF 系列功能安全 PLC（配套 Hi50），符合 IEC 61508、IEC 62061、ISO 13849 等标准，最高可达 PL e/Cat.4/SIL 3，采用冗余架构和故障安全机制，支持本地和远程扩展安全 I/O，适用于汽车制造、智能物流、新能源、半导体、食品饮料等对机械安全要求严苛的领域。\n7）共性结论：EVO400/500/700/800/1000EF 同属 iFA Evolution 生态，官方称该平台「支持多 PLC、多设备编程，图形化组态，可覆盖大型冗余、功能安全、中型标准 PLC 等应用场景，一次学习，全场景适用」，并提供覆盖仿真模型、信号处理、回路控制、阀门电机控制的工艺算法库，还集成 AI 助手（AI 问答、AI 注释、AI 代码自动生成）。",
    "analysis": "本题考察对汇川新一代控制器家族的整体把握，难度在于要把「四个中型型号 + 一个大类冗余品类 + 一个功能安全品类」放进同一平台框架里讲清楚。常见错误：把 EVO800 和 EVO1000EF 当成独立于 EVO 家族之外的产品；把 EVO51X 与 EVO52X 的能力对调（52X 强在运动控制，51X 强在纯网络通信）；混淆 EVO400 与 EVO52X 的带轴指标。做客户宣讲时，最有效的切入点是「一次学习、全场景适用」这一平台价值主张，而不是逐个型号堆参数。",
    "source": {
      "title": "汇川技术 EVO400 / EVO500 / EVO700 / EVO800 / EVO1000EF 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/list?typeId=420"
    },
    "tags": [
      "EVO",
      "iFA Evolution",
      "冗余",
      "功能安全",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-031",
    "category": "plc",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某包装机械客户新机型需要做 10 轴同步运动控制，节拍要求 1ms 级别，同时希望用一台控制器同时承担运动控制与产线数据上传（OPC UA + EtherNet/IP 接入上位 MES），并且要求本体自带 UPS 实现数据掉电保存、支持电子凸轮与电子齿轮。客户预算充足，明确不接受外置 UPS 方案。请从汇川 PLC 产品线中给出选型建议，说明你选择哪个系列/型号，并列出判断依据与需要向客户确认的边界条件。",
    "options": null,
    "answer": "参考答案要点：\n1）首选方向：AC 系列书本式智能机械控制器，具体可在 AC700 与 AC800 之间按轴数与算力定档。AC700 官网规格为「采用 Intel Celeron x86 高性能 CPU+64GSSD+4GDDR，最大支持 1ms-32 轴同步运行」，10 轴同步落在能力范围内；其官网明确「本体集成 UPS 设计，无需外接 UPS 即可实现数据掉电保存」，与客户「不接受外置 UPS」的要求直接命中；同时 AC700「标配 EtherCAT 工业以太网实时总线」「全系配置两路千兆以太网口，支持 EtherNet/IP 与 OPC UA 等主流通讯协议，可以轻松实现生产现场与 IT 系统的数据交互」，运动 + 数据上传一体化的诉求也满足；本体还自带 200kHz 高速 IO（8×DI+4×DO）与一路 RS232/RS485 串口，本体集成度高。\n2）若节拍与算力要求进一步上探，可直接选 AC800：官网规格为「支持 250μs-8 轴、500μs-32 轴、4ms-256 轴运算速度」「同步支持机械手、电子凸轮、电子齿轮」「抖动 40μs」「双 EtherCAT 口，可以兼顾高响应实时轴控和 PTP 点位控制，轻松实现环形组网；双 EtherNet 口独立 IP，一个口设备间的组网，一个口连接信息层，IP 分开，安全隔离」，10 轴 1ms 级别绰绰有余，且四网口设计天然满足内外网隔离。\n3）编程平台与工艺复用：AC700/AC800 均使用 InoProShop 中型 PLC 后台编程软件，官方下载区提供《中型PLC编程手册（机器人集成控制篇）》与基于 PackML 的标准化程序开发模板（AC700 页面提及），电子凸轮/电子齿轮属于平台运动控制功能的常规能力；包装机械属于标准化程度较高的机型，PackML 模板可直接降低开发工作量。\n4）AM760 是否可行——需要明确说明而不是简单地排除：AM760 同样满足本题的多项硬指标，官网写明其「本体集成 UPS，无需外接 UPS 即可实现数据掉电保存」「500μs 周期 32 轴同步控制，1ms 周期 64 轴同步控制，支持 32/64/96 轴控制」「本体可扩展 32 个 GL20 系列模块」，性能甚至在部分维度超过 AC700。因此两者都能做，差别在于定位与配套：AC 系列是「书本式智能机械控制器」，面向高速高精的多轴运动控制与边缘计算，本体自带高速 IO，开发模板（PackML）与包装行业工艺贴合度更高；AM760 是通用型高性能中型 PLC，强在大型产线复杂组网（多路 CAN、多路串口、多网段 IP、EtherCAT 环网）与过程控制回路。若客户后续还要在同一控制器上做大量过程控制回路或跨车间组网，AM760 的性价比更好；若以纯运动控制为主且追求开机即用的行业模板，AC 系列更合适。\n5）需向客户确认的边界条件：a）10 轴是 EtherCAT 总线轴还是脉冲轴，是否全部为汇川伺服（SV660N/SV680N 等），从站总数与拓扑形式（线型/环型）；b）1ms 是指总线周期还是整机节拍，若为整机节拍需进一步核算单周期运算量；c）是否需要机器人集成控制或视觉协同；d）电柜安装空间与散热条件，AC 系列为书本式形态；e）上位 MES 侧的协议栈与标签规范，EtherNet/IP 侧是否需要 EIP 标签通信库支持；f）是否需要冗余或功能安全，若有则需升级到 EVO800 / EVO1000EF 体系（平台切换为 iFA Evolution）。\n6）不建议的方案：不要用小型 PLC（H5U 支持 32 轴 EtherCAT，但平台为 AutoShop，本体不集成 UPS，数据层与 V/I 刷新能力也有限，与客户「本体自带 UPS、不接受外置 UPS」的要求冲突）。",
    "analysis": "本题是典型的「多约束条件选型」场景题，考察的不仅是被不被「轴数」这一个显性指标带偏，更在于能否意识到「多个系列都满足硬指标」这一现实，并给出有理据的优先级排序。客户提了五个条件：10 轴、1ms、运动+数据一体、本体 UPS、电子凸轮/齿轮。AC700 本体集成 UPS、最大 1ms-32 轴同步、标配 EtherCAT 与两路千兆网口、本体自带 200kHz 高速 IO，是本题的最佳落点；AC800 是算力更充裕的同族升级项。最关键的一处专业度体现在 AM760 的判断上：AM760 官网同样写明「本体集成 UPS，无需外接 UPS 即可实现数据掉电保存」，并支持 500μs/32 轴与 1ms/64 轴，性能甚至更强，所以把它简单说成「本体不集成 UPS、方案不可行」是事实性错误——正确的答法是承认两者都可行，再从产品定位（智能机械控制器 vs 通用型中型 PLC）、本体高速 IO、行业开发模板、后续过程控制与复杂组网需求四个维度给出取舍理由。本题配 AC700 与 AM760 两个产品页交叉印证，建议答题时同时打开两份资料对照。",
    "source": {
      "title": "汇川技术 AC700 系列书本式智能机械控制器产品页 / AM760 系列高性能中型 PLC 产品页",
      "chapter": "产品概览、集成化设计、可靠的系统设计",
      "url": "https://www.inovance.com/portal/product/details?productId=327"
    },
    "tags": [
      "AC700",
      "AC800",
      "方案应用",
      "选型",
      "多轴同步"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-032",
    "category": "plc",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某电子非标设备使用汇川 Easy 系列小型 PLC 作为 EtherCAT 主站，带 6 台伺服轴。设备出厂前在厂内调试一切正常，运到终端客户现场后，上电时偶发「EtherCAT 从站扫描不到」，重新上电有时又能恢复；发生故障时上位机与 PLC 的以太网通信仍然正常。现场电柜内装有变频器与开关电源。请说明你的排查思路、优先怀疑的原因以及处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1）现象分析：以太网通信正常说明 PLC 本体工作正常、供电与程序运行无碍，问题被限定在 EtherCAT 网段本身；「偶发、重新上电有时恢复」进一步指向物理层/时序类问题，而不是组态配置的硬性错误（若为组态或站号错误，应当每次都不通）。\n2）优先怀疑顺序与排查动作：\na）物理链路与EMC：检查 EtherCAT 网线是否使用带屏蔽的专用网线、水晶头压接质量、屏蔽层是否按规范单端或双端接地；网线是否与变频器动力线、电机线同槽并行敷设；电柜内变频器/开关电源是否加装滤波器、动力线与信号线是否分区走线。这是与「现场环境有变频器」这一线索最匹配的方向。\nb）机型接口核对：确认所选 Easy 机型本体确实具备 EtherCAT 主站口（官网明确 Easy511 本体自带一路 EtherCAT 口并支持 EtherNet 切换、出厂标配 GE21-EN 以太网卡；Easy321 本体自带一路 EtherNet 口），并确认 EtherCAT 从站未误接到普通 EtherNet 口上。\nc）从站供电与上电时序：6 台伺服的 24V 控制电源是否与主站同时上电、是否存在从站上电慢于主站扫描窗口的情况；建议核对从站供电容量与上电顺序。\nd）从站地址与拓扑：核对拓扑顺序与组态是否一致，站号有无重复；注意 EtherCAT 从站站号由主站扫描时按拓扑顺序分配，现场不应通过拨码另行设定。\ne）软件启用状态：核对工程中是否有变量或系统参数在特定条件下禁用了 EtherCAT 从站（官网明确 Easy 系列「支持通过变量启动和禁用本地模块/EtherCAT 从站/伺服轴，支持系统参数程序修改」），这类逻辑在厂内调试时可能因条件不同而未触发。\nf）固件与组态文件版本：核对各从站 EDS 与主站组态版本是否一致。\n3）处理建议：优先整治电柜 EMC 与线缆敷设（信号线与动力线分槽、加装滤波器、完善接地），更换合格屏蔽网线并重新压接；把伺服控制电源与主站电源做统一上电管理；在程序侧增加 EtherCAT 通信状态诊断与报警提示，出厂前加做满载与变频器同时运行的联动老化测试，把这类现场偶发问题提前暴露在厂内。\n4）闭环动作：把本次故障现象、排查路径与最终原因记入设备出厂检查清单（EtherCAT 组网专项），并在客户现场交付时同步说明电柜走线与接地的要求。",
    "analysis": "本题考察「EtherCAT 偶发掉站」这一类现场疑难问题的判断能力，核心是能否用「以太网正常而 EtherCAT 异常」「偶发且可恢复」这两条线索把范围快速收敛到物理层与 EMC，而不是一上来就怀疑配置或换件。依据官网信息，Easy 系列本身具备自动扫描和一键配置 EtherCAT 从站、免程序调试伺服的能力，也支持通过变量启用/禁用从站，因此排查顺序应当是「物理层 → 机型接口 → 上电时序 → 站号拓扑 → 软件启用状态」。最典型的错误是把偶发通信问题归因于伺服环路增益或电机参数，去做自整定，既解决不了问题又拉长停机时间。",
    "source": {
      "title": "汇川技术 Easy 系列全场景紧凑型小型 PLC 产品页",
      "chapter": "产品概览 / 易编程、易调试",
      "url": "https://www.inovance.com/portal/product/details?productId=350"
    },
    "tags": [
      "Easy系列",
      "EtherCAT",
      "故障排查",
      "接线安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "PLC-034",
    "category": "plc",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某冶金产线的老控制系统需要整体改造，现场情况：控制器要按冗余架构设计，要求接入既有的大量第三方设备（含 PROFINET、PROFIBUS DP 等总线），产线跨度大、有长距离通信需求，还要支持环网冗余，并且客户非常在意既有程序与工程资产的复用、不希望全部重写。客户的技术负责人问你：汇川有没有对应的大型冗余 PLC 方案？请把可以复述给客户的关键信息整理出来。",
    "options": null,
    "answer": "参考答案要点：\n1）方案对应产品：汇川 EVO800 系列大型冗余 PLC 控制系统，属官网 PLC 品类下「大型冗余 PLC」子品类，基于 iFA Evolution（驭沃）全场景智能化工业控制平台，按车规级高可靠标准、遵循 IEC 规范打造，官网概括其特性为「强兼容、易迁移、高保护、全自主」。\n2）冗余架构：官网明确「PLC 支持单机模式、单机架多 CPU、冗余模式」，即不止 CPU 冗余一种形态；同时「全面的冗余架构，支持 CPU 单机/单机架多 CPU/CPU 冗余/电源冗余等多种模式，支持 DLR 设备级环网冗余、支持 PRP 并行冗余网络，可灵活应对多种冗余场景需求」。\n3）总线与兼容性（对应客户「既有第三方设备多」的诉求）：官网写明「主流总线全覆盖，支持 EtherNet/IP、OPC UA、Modbus TCP、PROFINET、PROFIBUS DP 等主流总线和协议，继承现有资产，降低投资成本」——这是本题最关键的卖点，正面回应了客户对既有资产复用的担忧。\n4）拓扑与长距离（对应「产线跨度大、要环网」）：官网写「灵活的拓扑组态，搭配自研的光电复用一体式 DLR 交换机，支持星型、线型、环形、环形+分支等多种组网形式，拓扑灵活，并可覆盖长距离 10Km 光纤通信的工业应用场景」。\n5）IO 配套：搭配高可靠 Hi80 系列高性能分布式 IO 模块。\n6）工程资产复用（对应「不希望全部重写」）：依托 iFA Evolution 平台，官网表述为「一站式开发平台，支持多 PLC、多设备编程，图形化组态，可覆盖大型冗余、功能安全、中型标准 PLC 等应用场景，一次学习，全场景适用」，并提供「丰富的工艺算法库，分层分类功能块，覆盖仿真模型、信号处理、回路控制、阀门电机控制多种算法集，满足不同项目开发场景、助力工程快速交付和迁移」；平台还集成汇川 AI 助手，支持 AI 问答、AI 注释、AI 代码自动生成。此外官网提到「高保护」——完整的工程加密体系。\n7）适用行业印证：官网明确 EVO800 可广泛用于冶金、汽车、市政、水利、石油、矿山、港口、化工、电力等大型产线，冶金正是其官方列出的目标行业之一。\n8）需要与客户确认的事项（避免过度承诺）：a）既有程序的具体平台与语言，迁移工作量需实测评估，「易迁移」指平台提供迁移支持能力，不等于零改造；b）第三方设备清单与协议明细，特别是有无 PROFIBUS DP 从站需要网关；c）长距离光纤段的具体距离与拓扑冗余等级（DLR 与 PRP 的取舍）；d）IO 点数与分布式站点分布；e）是否需要同时满足功能安全要求，若是则需并行引入 EVO1000EF 系列功能安全 PLC（最高 PL e/Cat.4/SIL 3）。",
    "analysis": "本题考察面向大型产线客户做方案宣讲的能力，重点不是背参数，而是能否把官网的四个价值关键词「强兼容、易迁移、高保护、全自主」翻译成客户的具体关切：第三方设备多→主流总线全覆盖、继承现有资产；跨度大→10Km 光纤与多种拓扑；要冗余→单机/单机架多 CPU/CPU 冗余/电源冗余 + DLR/PRP；怕重写→iFA Evolution 统一平台与工艺算法库。常见错答是把 EVO800 说成只支持 EtherNet/IP 或只有 CPU 冗余（这是对公司产品能力的严重低报），以及在「易迁移」上给出零改造的承诺。答题时应保留最后的待确认清单，这是方案类问题专业度的体现。",
    "source": {
      "title": "汇川技术 EVO800 系列大型冗余 PLC 控制系统产品页",
      "chapter": "产品概览 / 强兼容、易迁移、高保护",
      "url": "https://www.inovance.com/portal/product/details?productId=765"
    },
    "tags": [
      "EVO800",
      "冗余",
      "方案应用",
      "通信组网"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "PLC-044",
    "category": "plc",
    "type": "single",
    "difficulty": 3,
    "stem": "按汇川官网规格，Easy511 的 EtherCAT 从站数量上限与两档带轴能力分别是多少？",
    "options": {
      "A": "最大支持 72 个从站；周期同步模式 8 轴、轮廓模式 12 轴",
      "B": "最大支持 72 个从站；周期同步模式 32 轴、轮廓模式 32 轴",
      "C": "最大支持 128 个从站；周期同步模式 12 轴、轮廓模式 8 轴",
      "D": "最大支持 127 个从站；周期同步模式 8 轴、轮廓模式 12 轴"
    },
    "answer": [
      "A"
    ],
    "analysis": "A 与官网 Easy 系列卧式形态产品页原文一致：「运动控制：支持 EtherCAT 总线通讯，最大支持 72 从站；带轴能力：周期同步模式 8 轴，轮廓模式 12 轴」。B 把轴数按系列级宣传口径「32 轴高速总线控制」放大，混淆了系列能力与 Easy511 具体机型的规格。C 的 128 从站是 AC700 的指标（官网写 AC700「EtherCAT 单口最大支持 128 从站」）。D 的 127 从站是 AM500 的指标（官网写 AM500「EtherCAT 单口最大支持 127 从站」），与 Easy511 的 72 仅差一个数字，是本题最容易看走眼的干扰项。还要注意「周期同步模式」与「轮廓模式」是两种不同的同步方式，轴数上限不同；方案与报价中必须写明是哪一档，否则后期加轴会直接撞上限。",
    "source": {
      "title": "汇川技术 Easy 系列卧式形态小型 PLC 产品页",
      "chapter": "产品概览 / 运动控制、扩展能力、存储空间",
      "url": "https://www.inovance.com/portal/product/details?productId=740"
    },
    "tags": [
      "Easy511",
      "EtherCAT",
      "带轴能力",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-045",
    "category": "plc",
    "type": "multi",
    "difficulty": 3,
    "stem": "下列关于汇川 EVO 系列各型号平台归属与关键规格的表述，符合官网信息的有哪些？（多选）",
    "options": {
      "A": "EVO400 是「基于 iFA Evolution（驭沃）平台自主研发的新一代标准中型 PLC 控制器」，主机自带 3 路以太网，其中 2 路交换机模式、1 路独立 IP 模式",
      "B": "EVO51X 是「基于 iFA Evolution（驭沃）平台开发的标准型 PLC 产品，专为非流程行业 OEM 设备场景打造」，处理速度 2.5ns/位指令、程序容量最大 8MByte",
      "C": "EVO52X 的官方卖点包含「纳秒级指令处理速度、支持 256 回路 PID 同步运算、1ms/12 轴高精运动控制、高阶凸轮」",
      "D": "EVO760 是「基于 iFA Evolution（驭沃）平台开发的旗舰型 PLC 产品」，支持 EtherCAT、EtherNet/IP、OPC UA、Modbus TCP、TCP/IP、CAN 等标准工业网络",
      "E": "EVO400 与 EVO760 属于同一代产品，两者的程序容量与带轴能力规格完全一致，可以按价格直接互换选型"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B、C、D 分别对应官网原文：A 见 EVO400 页面产品简介与「网络通信」「外设接口」条目（LAN1 口为 2 路百兆网口支持交换机模式、LAN2 口为 1 路百兆网口支持独立 IP 模式）；B 见 EVO51X 页面产品简介与「高性能」条目；C 见 EVO52X 页面「高性能」条目；D 见 EVO760 页面产品简介。E 错误：EVO400 官方定位「标准中型 PLC」，EVO760 官方定位「旗舰型中型 PLC」，两者在带轴能力、程序容量与扩展规模上并不相同，官网也以不同卖点分别呈现（EVO760 的标语是「提升设备开发效率、降低设备停机时间、数据链助力设备智能化」）。报价时不能按「同代同规格」互相替代，必须以具体型号的产品页规格逐条比对。",
    "source": {
      "title": "汇川技术 EVO400 / EVO51X / EVO52X / EVO760 产品页",
      "chapter": "产品概览 / 产品简介、高性能、网络通信、外设接口",
      "url": "https://www.inovance.com/portal/product/list?typeId=420"
    },
    "tags": [
      "EVO400",
      "EVO51X",
      "EVO52X",
      "EVO760",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-057",
    "category": "plc",
    "type": "short",
    "difficulty": 3,
    "stem": "请说明汇川功能安全 PLC 的产品形态、达到的安全等级与认证依据、配套的安全 IO 产品与典型适用场景，并说明为什么普通 PLC 不能替代功能安全 PLC 用于安全回路。",
    "options": null,
    "answer": "参考答案要点：\n1）产品形态：官网 PLC 品类下设「功能安全 PLC」子类目，产品为 EVO1000EF 系列功能安全 PLC，官方描述的产品名为「EVO1000EF&Hi50」，是「汇川技术推出的高性能的 FA 安全产品，专为工业安全控制场景设计」。\n2）安全等级与认证依据：符合 IEC 61508、IEC 62061 以及 ISO 13849 等国际安全标准，最高可达 PL e/Cat.4/SIL 3 的安全级别，具备高可靠性和实时性。官网同时写明其「采用冗余架构和故障安全机制，支持本地和远程扩展安全 I/O，提供丰富的功能安全类型模块，可有效保障设备与人员安全」。\n3）配套安全 IO 与规模：Hi50 系列分布式安全 IO 模块。官网给出的安全 I/O 形态为 8DI、4DO、8DIO、4ADI、4ADV、4PT、4ATC 共 7 种模块，安全系统最大支持 1976 个安全信号。安全 PLC 侧支持安全程序运行与安全/标准 I/O 控制，支持数据记录功能；通信方面 LAN1 口支持下载与调试，支持安全 PLC 与安全 PLC 之间通过 CIP Safety 通信、安全 PLC 与标准 PLC 之间通过 EtherNet/IP 协议通信，EIP 2A/2B 口同时支持 CIP Safety 与 EtherNet/IP；USB Type-C 口用于模块升级与安全地址配置。要特别注意与另一条线区分：Hi80 系列高性能分布式 IO 是 EVO800 大型冗余系统的配套 IO，虽然同样具备全系列热插拔与通道级诊断，但不属于功能安全产品。把 Hi50 与 Hi80 张冠李戴是这类题目最常见的错误。\n4）适用场景：汽车制造、智能物流、新能源、半导体、食品饮料等对机械安全要求严苛的领域；典型用途包括安全门、急停、安全光幕、安全区域监控等安全功能回路。\n5）平台归属：EVO1000EF 与 EVO400、EVO500、EVO700、EVO800 同属 iFA Evolution（驭沃）生态。EVO800 产品页明确该平台「可覆盖大型冗余、功能安全、中型标准 PLC 等应用场景，一次学习，全场景适用」；EVO1000EF 页面还写明 iFA 软件的硬件组态支持把安全 PLC（EVO1000EF）与标准 PLC（EVO52X）添加在同一个解决方案中，安全指令库分为基础库、类型转化库、安全基础库与安全功能块库并遵循 PLCopen Safety，编程变量支持 SAFEBOOL、SAFEINT、SAFEDINT、SAFEWORD、SAFETIME 等安全数据类型，说明安全程序与标准程序可在同一平台体系内开发，能降低人员学习成本。官方对外的认证标识还包含 TÜV SÜD Functional Safety。\n6）为什么普通 PLC 不能替代：普通 PLC（如 H1U/H3U/H5U、Easy 系列、AM 系列、EVO400 等）的设计目标的功能正确性与可用性，其硬件失效模式、诊断覆盖率、软件安全完整性都不是按功能安全标准设计与评估的，无法提供 PL e/Cat.4/SIL 3 所要求的冗余架构、故障安全机制与安全 I/O；用普通 PLC 承担安全功能无法通过机械安全评估与验收，属于合规风险。合规做法是按目标安全等级选择 EVO1000EF&Hi50 组成安全回路，并明确它与标准控制系统之间的信号交互边界。\n7）销售提示：安全产品的 CPU 与安全 IO 是成套关系，报价时不能只报 CPU 漏掉 Hi50；同时目标安全等级应由客户的安全评估报告给定，不应由供方倒推承诺。",
    "analysis": "本题考察功能安全产品的完整认知，难点有三：一是要记住「EVO1000EF&Hi50」是一个成套产品名，把安全 CPU 与安全 IO 分开记很容易在报价时漏项；二是要把 Hi50 与 Hi80 分清楚（前者分布式安全 IO、后者大型冗余系统的高性能分布式 IO），这是本批题目里最容易混淆的一对型号；三是要能从设计目标与评估依据的原理层面说明普通 PLC 不能替代安全 PLC，而不是只回答「等级不够」。面向汽车、新能源、半导体等客户时，安全回路往往与设备验收直接挂钩，答错会影响整个项目的合规性判断与投标资格。",
    "source": {
      "title": "汇川技术 EVO1000EF 系列功能安全 PLC 产品页 / Hi50 系列分布式安全 IO 模块产品页",
      "chapter": "产品概览 / 国产功能安全解决方案、高功能安全等级、产线到单机设备全场景覆盖",
      "url": "https://www.inovance.com/portal/product/details?productId=797"
    },
    "tags": [
      "EVO1000EF",
      "Hi50",
      "功能安全",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "PLC-058",
    "category": "plc",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某日化产线改造，主控需要同时完成：① 通过 EtherCAT 带 18 台汇川伺服与 4 个远程 IO 站；② 与厂务 SCADA 通过 OPC UA 交换数据，同时用 Modbus TCP 与 20 台第三方仪表通信；③ 与车间另一套老系统用 RS485（Modbus RTU）对接，现场另有 3 台老设备走 CAN；④ 设备内部网络与厂务信息网需要做隔离。客户还要求单机本体 IO 尽量少、扩展走分布式。请给出汇川中型 PLC 的选型与组网建议，并列出必须与客户确认的边界条件。",
    "options": null,
    "answer": "参考答案要点：\n1）主控选型：优先 AM760 系列高性能中型 PLC。依据：官网写明它「支持 EtherCAT、EtherNet/IP、OPC UA、Modbus TCP、TCP/IP、RS485、CAN 总线等全球标准的工业网络」，网络覆盖面与本题四类需求逐条对应；同时具备「1ms 周期 64 轴同步能力」「500μs 周期 32 轴同步控制」「可扩展 32 个 GL20 模块」；针对本题的串口与 CAN 数量要求，官网还写它「支持 CAN 和串口通信扩展，最大可支持 9 路串口，9 路 CAN 通信」，并且「本体集成 2 路 IP 网段独立的以太网口」——后者正是需求④网络隔离的现成基础。该系列官方应用场景明确包含「需要多路 CAN 通讯/多路串口/多网段 IP 地址/EtherCAT 环网等场景」，与本题契合。\n2）备选与对比：若运动控制权重低、以过程控制与通信为主，可考虑 AM300（官方定位「纯网络型中型 PLC」，Modbus TCP 支持两路不同网段的 IP 地址，主要面向暖通空调、化工印染、水处理等过程控制行业，官网明确其场景需求包含内外网隔离）或 AM500（官方定位「标准型中型 PLC」，Modbus TCP 为两路同一网段，面向食品饮料、包装、印刷、硅晶、医疗、SMT 周边等单机与单机组合产线）。两者本地均可扩展 16 个 GL20 系列刀片式模块，数据容量 20 MByte（其中 512 KByte 支持掉电保持），最大可支持 3 路 RS485 通信（单路支持 31 个从站），支持 16 个 OPC UA 客户端连接，同时支持 EtherNet/IP 主站和从站、支持 63 个 Modbus TCP 从站。若客户明确要求内外网双网段隔离而预算有限，AM300 的「两路不同网段 IP」比 AM500 的「两路同一网段」更合适——这是两代产品最容易记错的一处差异。\n3）EtherCAT 规模核算：AM760 官网写「500μs 周期 32 轴同步控制，1ms 周期 64 轴同步控制，支持 32/64/96 轴控制，可连接 256 个 EtherCAT 从站」，18 台伺服加 4 个远程 IO 站共 22 个从站余量充足。作为横向参照，AM500 官网写「EtherCAT 单口最大支持 127 从站」，AC700 写「EtherCAT 单口最大支持 128 从站」，Easy511 写「最大支持 72 从站」。但必须同时核算 1ms 或 500μs 周期下的总线负载率，不能只看从站数量。\n4）远程 IO 选型：推荐 GL20 系列刀片式扩展模块。依据官网规格：模块薄至 12mm、内部总线速度可达 100Mbps、IO 开断时间＜100us、模拟量转换速度＜62.5us、耦合器最低扫描周期可达 125us、支持 EtherCAT 与 PROFINET 双重协议、采用大口径 PUSH IN 端子（接线时间节省 66%）、具备通道级诊断。AM760 整体可扩展 32 个 GL20 模块，适合本题「本体 IO 尽量少、扩展走分布式」的要求。\n5）网络隔离方案：a）选 AM760 时，可按其多网段 IP 能力把设备内网与厂务信息网分到不同网段；b）选 AM300 时，可直接用其 Modbus TCP 的两路不同网段 IP 实现内外网隔离；c）若隔离等级要求更高，可评估切换到 EVO400 或 EVO51X——两者主机自带 3 路以太网（其中 2 路交换机模式、1 路独立 IP 模式），EVO400 的 EtherNet/IP 最小通信周期可达 1ms、最大连接数 128，适合产线级数据交互。\n6）必须与客户确认的边界条件：a）18 台伺服的型号（如 SV660N/SV680N）与总线周期要求，是否全部走 EtherCAT 还是部分脉冲轴；b）4 个远程 IO 站的距离、点数与是否需要环网冗余；c）OPC UA 的角色（服务器/客户端）与数据点表规模，注意 AM 系列单机 OPC UA 客户端连接数为 16；d）20 台第三方仪表的协议细节、波特率、站号与轮询周期，Modbus TCP 从站数上限为 63；e）3 台 CAN 老设备的协议是 CANopen 还是汇川 CANlink，是否需要协议转换网关；f）内外网隔离的具体验收要求（是否要求物理隔离、是否要求独立网口）；g）电柜空间与散热条件；h）是否需要搭载基于 ISA88 标准的 InoQuickPro 标准化编程模板框架（AM 系列使用 InoProShop 平台）。\n7）不建议的方案：用小型 PLC（H5U / Easy 系列）承担本题规模。H5U 本体脉冲轴只有 4 轴，Easy511 带轴能力为周期同步模式 8 轴、轮廓模式 12 轴，且两者的网段与串口扩展规模均不足以覆盖「20 台仪表 + 3 台 CAN 设备 + 内外网隔离」的组合需求。",
    "analysis": "本题是「中型 PLC 多网段组网 + 远程 IO 扩展」的综合场景题，考察的是能否把一堆并列需求拆成「运控规模 / 网络协议 / 网段隔离 / IO 形态 / 串口与 CAN 数量」五个维度逐一匹配，而不是一看到 18 轴就直接跳到最大型号。关键的专业度体现在三处：一是能引用 AM300 与 AM500「两路不同网段 vs 两路同一网段」这一真实差异，避免给客户做出无法兑现的内外网隔离承诺；二是知道 GL20 的关键规格（12mm、100Mbps、IO 开断＜100us、模拟量＜62.5us、耦合器最低扫描周期 125us、EtherCAT+PROFINET 双协议、通道级诊断）而不是只笼统说「刀片式 IO」；三是能把 EtherCAT 从站数与总线周期负载分开核算。常见错答是直接推荐 EVO 系列或大型冗余系统（能力与成本双过剩），或者忽略 RS485 与 CAN 的路数与协议细节，导致实施阶段返工。",
    "source": {
      "title": "汇川技术 AM760 系列高性能中型 PLC 产品页 / AM300 系列纯网络型中型 PLC 产品页 / AM500 系列标准型中型 PLC 产品页 / GL20 系列刀片式扩展模块产品页",
      "chapter": "产品概览 / 强大的组网能力、模块化组合配置、性能优越微秒级响应",
      "url": "https://www.inovance.com/portal/product/details?productId=559"
    },
    "tags": [
      "AM760",
      "GL20",
      "通信组网",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "PLC-059",
    "category": "plc",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某终端客户反馈设备最近出现四类问题：① EtherCAT 伺服偶发掉站，掉站时设备急停，重新上电后可恢复，一天出现 2～3 次；② 客户反映「设备越跑越慢」，观察发现 PLC 扫描周期从初始的 2ms 缓慢增长到 8ms 以上；③ 现场服务工程师尝试用笔记本重新下载程序时多次提示下载失败，更换网线后偶尔能成功；④ 客户抱怨「上次停电后配方丢了」。请给出完整的排查思路、优先怀疑的原因与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1）先做信息隔离与相关性判断：a）确认四类问题是否同时发生、有无相关性（若掉站与扫描周期增长同时出现，优先怀疑同一批新增从站或新增程序段）；b）读取 PLC 的故障记录、扫描周期监控（当前/最大周期）、EtherCAT 通信状态与从站诊断信息；c）确认近期是否做过程序修改、增加从站、增加通信设备或更换过网线、交换机；d）记录掉站的具体从站位置——是固定某一台还是随机漂移，这一点直接决定后续方向。\n2）问题① EtherCAT 偶发掉站：优先怀疑物理层与 EMC，而不是先动伺服参数。排查顺序：a）EtherCAT 网线是否为带屏蔽专用线、水晶头压接质量、屏蔽层接地方式；b）网线是否与变频器动力线、伺服动力线、电机线同槽并行敷设，电柜内是否加装滤波器并做动力与信号分区；c）从站 24V 控制电源是否与主站同时上电，是否存在从站上电慢于主站扫描窗口；d）从站站号与拓扑是否与组态一致（注意 EtherCAT 从站地址由主站扫描时按拓扑顺序分配，现场不应通过拨码另行设定）；e）工程中是否有变量或系统参数在特定条件下禁用 EtherCAT 从站（汇川 Easy 系列官网明确「支持通过变量启动和禁用本地模块/EtherCAT 从站/伺服轴，支持系统参数程序修改」，这类逻辑在厂内调试时可能因条件不同而未触发）；f）从站 EDS 与主站组态版本是否一致；g）掉站固定在某一台时重点查该台的供电与接线，随机漂移时重点查接地与屏蔽。\n3）问题② 扫描周期持续增长：这是「随时间劣化」型问题，指向程序侧或负载侧的累积效应，而不是 CPU 突发失效。排查方向：a）程序中出现随条件变化而不断增长的循环（如未设退出条件的 WHILE/FOR）、递归或大数组遍历；b）中断程序执行时间过长，或把大量浮点运算、字符串处理放进了高速任务；c）通信任务变重——EtherCAT 从站数量增加、Modbus TCP 从站轮询周期过短、OPC UA 客户端数量与刷新频率过高（注意 AM 系列单机 OPC UA 客户端连接数为 16，Modbus TCP 从站上限为 63，接近上限后重试与超时会显著占用周期）；d）变量表或数据区持续增长导致访问变慢；e）用软件的任务执行时间统计功能定位是哪一段任务拖长了周期，再做任务拆分与优化。不建议直接更换 CPU——换件解决不了程序侧的根因，还会把缺陷带到新设备上。\n4）问题③ 程序下载失败：按以下顺序排查：a）物理链路与编程口选择——网线质量、水晶头、交换机端口，以及是否误接在非编程用的网口上（汇川多个系列采用多网口设计：EVO400 与 EVO51X 主机自带 3 路以太网且分交换机模式与独立 IP 模式，AM500 为 EtherNet×2 单 IP 内置交换机 + EtherCAT×1，Easy511 为 EtherNet×1 并出厂标配 GE21-EN 网卡，编程口选错是最常见的低级错误）；b）IP 地址与网段是否与 PLC 同网段、是否与现场其它设备 IP 冲突；c）PLC 是否处于运行态或存在未解除的故障与强制状态；d）工程中的设备型号与固件版本是否与实际硬件一致（型号选错会直接拒绝下载）；e）是否设置了工程加密或功能块加密导致权限不足（EVO800 官网提到「完整的工程加密体系，支持工程加密、功能块加密，用户权限分级操作，程序与设备授权保护」）；f）杀毒软件或防火墙拦截、USB 转网口驱动异常；g）更换笔记本与网线做交叉验证。既然「换网线后偶尔能成功」，首要怀疑仍是链路质量与网口选择，而不是软件本身。\n5）问题④ 停电后配方丢失：先明确掉电保持的真实容量口径——AM300/AM500 的数据容量为 20 MByte，其中 512 KByte 支持掉电保持；Easy 系列卧式形态为 1 MByte 自定义变量，其中 128 kByte 支持掉电保持；AC700 的掉电保持空间为 5 MB。处理建议：a）确认配方变量是否被规划在掉电保持区内，以及保持区是否已用满；b）确认软元件编号规划——Easy 系列卧式形态官网写「约 150K 软元件，编号 1000 以后支持掉电保持」，编号规划不当会导致变量根本不在保持区；c）必要时通过扩展卡增加 TF 存储卡做数据持久化（AM300/AM500 本体自带两个扩展卡槽，可支持扩展模拟量、数字量、CAN、RS485、TF 存储卡、RTC 时钟）；d）对关键配方采用「双备份 + 上电校验 + 异常回滚」策略，并把配方管理上移到 HMI 或上位系统。\n6）闭环与预防：把四类问题的排查路径固化为出厂检查清单（EtherCAT 组网专项、扫描周期基线、掉电保持变量清单、编程口标识），出厂前加做满载与变频器同时运行的老化测试；在客户现场交付时同步说明电柜走线、接地、编程口与配方备份的要求。",
    "analysis": "本题把现场最高频的四类问题（偶发掉站、扫描周期变长、程序下载失败、掉电保持丢失）放进同一个案例，考察的是能否先做信息隔离与相关性判断，再分头深挖，而不是被客户的情绪带着走。专业度体现在三处：一是能指出 EtherCAT 从站地址由主站扫描分配、现场不应拨码，并把偶发掉站的第一嫌疑落在 EMC 与屏蔽接地；二是能把「扫描周期缓慢增长」与更换 CPU 区分开，明确这类问题属于程序与负载的累积效应；三是能报出掉电保持的真实容量口径（AM300/AM500 为 20 MByte 中的 512 KByte、Easy 卧式为 1 MByte 中的 128 kByte、AC700 为 5 MB），而不是笼统回答「加大保持区」。常见错答包括：把偶发掉站归因于伺服环路增益去做自整定；把下载失败归因于 PLC 损坏直接换件；把配方丢失简单归因于「电池没电」而忽略变量编号是否落在保持区。",
    "source": {
      "title": "汇川技术 Easy 系列全场景紧凑型小型 PLC 产品页 / AM300 系列纯网络型中型 PLC 产品页 / AM500 系列标准型中型 PLC 产品页 / AC700 系列书本式智能机械控制器产品页 / EVO800 系列大型冗余 PLC 控制系统产品页",
      "chapter": "产品概览 / 易编程易调试、强大的组网能力、大容量、集成化设计、高保护",
      "url": "https://www.inovance.com/portal/product/details?productId=455"
    },
    "tags": [
      "故障排查",
      "EtherCAT",
      "扫描周期",
      "掉电保持"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "PLC-060",
    "category": "plc",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某市政水厂的老控制系统要整体改造：① 要求控制器按冗余架构设计，主备切换不能造成产线停机；② 现场有既有第三方设备走 PROFINET 与 PROFIBUS DP，客户要求尽量继承现有资产；③ 泵站分布跨度大，最远约 6km，要求环网冗余；④ 泵房里有安全门与急停回路，需要通过机械安全验收；⑤ 客户对控制器软硬件的自主可控与国产化有明确要求，需要提供相应资质；⑥ 现场为高湿高腐蚀环境，海拔约 1500m。请给出汇川的选型与方案要点，并列出必须与客户确认的事项。",
    "options": null,
    "answer": "参考答案要点：\n1）主控与平台：选择 EVO800 系列大型冗余 PLC 控制系统。官网对其定位是「基于多年的控制器开发底蕴，按照车规级高可靠标准，遵循 IEC 规范，倾力打造的大型冗余控制系统」，具备「强兼容、易迁移、高保护、全自主」四大特性，软件编程依托 iFA Evolution（驭沃）平台，可广泛用于冶金、汽车、市政、水利、石油、矿山、港口、化工、电力等大型产线——市政与水利正是其官方列出的目标行业。\n2）需求① 冗余架构与硬件形态：官网「强兼容」条目写「全面的冗余架构，支持 CPU 单机/单机架多 CPU/CPU 冗余/电源冗余等多种模式，支持 DLR 设备级环网冗余、支持 PRP 并行冗余网络，可灵活应对多种冗余场景需求」，产品简介也写「PLC 支持单机模式、单机架多 CPU、冗余模式」。但必须提醒：同一产品页「规格参数」页签的表格中「冗余模式」一行写的是「CPU 冗余=不支持；电源冗余=支持；PRP=支持；DLR=支持」，与产品概览的表述并不一致。因此给客户的方案里应写「支持电源冗余、DLR 设备级环网冗余、PRP 并行冗余网络，以及单机架多 CPU 形态」，CPU 冗余是否可用必须按具体型号查《EVO800&Hi80 系列大型 PLC 系统选型手册》与《EVO800 系列大型可编程控制器冗余系统系统手册》后再承诺，不要直接照抄概览文案。硬件形态可从官方资料下载区印证：该产品提供《冗余系统手册合集》《系统手册》《机架设备手册》《电源模块设备手册》《控制模块设备手册》《冗余模块设备手册》《以太网扩展模块设备手册》，说明它是机架式模块化结构，具备独立的机架、电源模块、控制模块与冗余模块，官网规格表还写有「安装方式=机架安装」「热插拔=支持」「单机架多 CPU 最多支持 4 个控制模块通过背板交互数据，最大数据交互量为 2KB/5ms」。\n3）需求② 既有资产继承：官网写「主流总线全覆盖，支持 EtherNet/IP、OPC UA、Modbus TCP、PROFINET、PROFIBUS DP 等主流总线和协议，继承现有资产，降低投资成本」。PROFINET 侧可直接接入；PROFIBUS DP 老设备需按现场情况逐台评估是否加装网关，这一点必须提前说明，避免客户理解为「所有老设备都能直接插上」。\n4）需求③ 长距离与环网：官网写「灵活的拓扑组态，搭配自研的光电复用一体式 DLR 交换机，支持星型、线型、环形、环形+分支等多种组网形式，拓扑灵活，并可覆盖长距离 10Km 光纤通信的工业应用场景」。最远 6km 落在 10Km 指标之内，建议按环形加分支拓扑设计，并核算各泵站的光纤跳数与交换机数量。\n5）需求④ 功能安全：EVO800 是大型冗余 PLC，本身不承担功能安全等级认证；泵房的安全门与急停回路应并行引入 EVO1000EF 系列功能安全 PLC（官方产品名「EVO1000EF&Hi50」），它符合 IEC 61508、IEC 62061、ISO 13849，最高可达 PL e/Cat.4/SIL 3，采用冗余架构与故障安全机制，支持本地和远程扩展安全 I/O。好处是两者同属 iFA Evolution 平台，官网写该平台「可覆盖大型冗余、功能安全、中型标准 PLC 等应用场景，一次学习，全场景适用」，安全程序与标准程序可在同一平台开发，降低人员学习成本。同时要提醒客户：安全功能不能由标准 PLC 承担，安全回路与标准控制系统之间需要明确信号交互边界。\n6）需求⑤ 自主可控与国产化资质：官网「全自主」条目写明「软硬件全栈 100% 自主可控，深度覆盖硬件、嵌入式操作系统、运行时、编译器、编程软件等多个层次，取得产品级信创认证证书」，并提到车规级质量体系、正向设计及逆向完整测试。这是可以直接回应客户国产化诉求的官方依据，投标时按官网表述提供信创认证证书等材料。\n7）需求⑥ 恶劣环境：官网「强环境设计」条目写「全系标配宽温设计、高海拔 5000 米、3C4/GX 最强防腐等级、高于行业的 EMC 标准、TUV 权威机构 CE 认证，专为工业恶劣环境打造」，海拔 1500m 与高湿高腐蚀环境均在其指标范围内。配套 IO 建议采用 Hi80 系列高性能分布式 IO——官网写它按车规级高可靠标准打造、适配大型冗余控制系统，具备「全系列支持热插拔设计」与「通道级故障诊断」，以及宽温 -40℃~+70℃、高标准三防漆满足 3C4/GX 级防护需求、工作海拔最高可达 5000m、2g 超强抗震与 25g 抗冲击，与本题环境要求逐条对应。\n8）工程资产保护：官网「高保护」条目写「完整的工程加密体系，支持工程加密、功能块加密，用户权限分级操作，程序与设备授权保护；不可逆算法保护机制，独创源码加密技术从底层切断知识资产的恶意访问和破解的可能性」。官网「易迁移」条目还提到「丰富的工艺算法库，分层分类功能块，覆盖仿真模型，信号处理，回路控制，阀门电机控制多种算法集，满足不同项目开发场景、助力工程快速交付和迁移」，并集成汇川 AI 助手（AI 问答、AI 注释、AI 代码自动生成）。\n9）必须与客户确认的事项：a）既有程序的原平台与语言，迁移工作量需实测评估——「易迁移」指平台提供迁移支持能力，不等于零改造；b）第三方设备清单与协议明细，逐台确认 PROFIBUS DP 设备数量及是否接受网关方案；c）6km 光纤的实际路由、跳数与是否已有管道资源，以及环网冗余等级（DLR 与 PRP 的取舍）；d）IO 点数与分布式站点分布，是否全部采用 Hi80 以及是否需要远程扩展安全 I/O；e）安全回路的目标 SIL/PL 等级应由客户的安全评估报告给定，不能由供方倒推承诺；f）国产化资质的具体要求（信创认证证书的形式与覆盖范围）；g）是否需要与既有 SCADA/MES 做 OPC UA 对接及其数据点表；h）机房与泵房的电柜空间、散热与接地条件；i）验收标准与停机窗口安排。\n10）不建议的做法：a）不要用 AM 系列或 EVO400 代替 EVO800 承担冗余要求，它们不属于大型冗余子品类；b）不要承诺所有 PROFIBUS DP 老设备可无网关直连；c）不要承诺安全回路可由标准 PLC 的软件逻辑实现。",
    "analysis": "本题是面向大型市政客户做整体改造方案的场景题，考察点是把六条并列约束准确映射到对应的产品子品类与官方依据上，而不是堆参数。最关键的判断有两处：一是必须把「冗余控制」与「功能安全」拆成 EVO800 与 EVO1000EF 两条产品线，同时能说明它们同属 iFA Evolution 平台因而可以统一开发；二是要能把官网的官方话术（强兼容、易迁移、高保护、全自主）翻译成客户的具体关切——第三方设备多对应「主流总线全覆盖、继承现有资产」，跨度大对应「10Km 光纤与多种拓扑」，环境恶劣对应「宽温、5000m 海拔、3C4/GX 防腐、TUV CE」，怕资产流失对应「工程加密与功能块加密」，国产化要求对应「软硬件全栈 100% 自主可控加信创认证证书」。常见错答包括：把 EVO800 说成只支持 EtherNet/IP 或只有 CPU 冗余一种模式；把 Hi50 与 Hi80 张冠李戴；在「易迁移」上给出零改造承诺。答题时保留最后的待确认清单，是方案类问题专业度的体现。",
    "source": {
      "title": "汇川技术 EVO800 系列大型冗余 PLC 控制系统产品页 / EVO1000EF 系列功能安全 PLC 产品页 / Hi80 系列高性能分布式 IO 模块产品页",
      "chapter": "产品概览 / 强兼容、易迁移、高保护、全自主（含强环境设计）、资料下载 / 产品手册",
      "url": "https://www.inovance.com/portal/product/details?productId=765"
    },
    "tags": [
      "EVO800",
      "功能安全",
      "冗余",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "HMI-001",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 ITS7000 系列标准型 HMI 的规格参数表中，\"组态软件\"一栏标注的软件是下列哪一个？",
    "options": {
      "A": "InoTouchPad",
      "B": "AutoShop",
      "C": "iFA Evolution（驭沃）",
      "D": "InoDriveShop"
    },
    "answer": [
      "A"
    ],
    "analysis": "ITS7000 系列标准型 HMI（ITS7043S/E、ITS7070 系列、ITS7100 系列、ITS7156E 等）规格表中组态软件明确为 InoTouchPad，这也是汇川 IT7000/ITS7000/ITP60 等通用 HMI 的统一组态平台。B 项 AutoShop 是汇川小型 PLC 的编程软件，只在 ITU7000 显控一体机上与 InoTouchPad 配合使用；C 项 iFA Evolution（驭沃）是汇川新一代全集成平台，IT9000 系列高端型 HMI 才用它组态；D 项 InoDriveShop 是伺服调试软件，与 HMI 无关。选型报价时若把 ITS7000 与 IT9000 的软件混谈，会导致客户拿到屏后无法打开工程。",
    "source": {
      "title": "汇川技术 ITS7000 系列标准型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 软件-组态软件",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7000",
      "InoTouchPad",
      "参数配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-002",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 ITS7000 系列高防护型 HMI 的核心卖点是可直接安装于潮湿、多尘、油污的严苛工况，其整机防护等级是下列哪一项？",
    "options": {
      "A": "前面板 IP65、后盖板 IP20",
      "B": "前面板 IP66、后盖板 IP20",
      "C": "整机 IP67",
      "D": "整机 IP54"
    },
    "answer": [
      "C"
    ],
    "analysis": "ITS7000 系列高防护型 HMI（ITS7070S-HP、ITS7070E-HP、ITS7070EIW-HP、ITS7070EI4-HP 等）主打\"整机 IP67 极致防护、一体密封\"，因此现场无需再加防护柜即可直装使用。A、B 两项是汇川其它 HMI 的等级表述：ITS7000 标准型与 ITU7000 显控一体机都是\"前面板 IP66、后盖板 IP20\"，IT7000 通用 HMI 是\"前面板 IP65、后盖板 IP20\"，都属于仅正面防尘防水、背面必须装在电柜内的产品；D 项 IP54 是 ITP60 系列移动示教器的面板防护等级。把\"前面板 IPxx\"当成\"整机 IPxx\"去承诺客户，是现场最常见的选型失误。",
    "source": {
      "title": "汇川技术 ITS7000 系列高防护型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 环境-防护等级",
      "url": "https://www.inovance.com/portal/product/details?productId=972"
    },
    "tags": [
      "ITS7000高防护",
      "IP67",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-003",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "某产线控制柜内已有汇川 H5U 系列 PLC，现要配一台汇川 HMI 做本地画面。下列哪款 HMI 是\"屏与 PLC 集成在同一硬件平台、单机即可同时承担 HMI 组态与 PLC 逻辑控制\"的产品？",
    "options": {
      "A": "ITS7000 系列标准型 HMI",
      "B": "ITP60 系列移动示教器",
      "C": "ITU7000 系列显控一体型 HMI",
      "D": "IT7000 系列物联 HMI"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网对 ITU7000 系列的定位原文是\"将人机界面（HMI）和可编程逻辑控制器（PLC）的核心功能集成在单一硬件平台上\"，即显控一体机，单台设备同时承担画面组态与逻辑控制，适合柜内空间紧张、要求紧凑设计的场合。A 项 ITS7000 是纯 HMI，必须外挂 PLC；B 项 ITP60 是移动示教器，用于产线调试与检修的移动操控；D 项 IT7000 物联 HMI 的强项是 4G/Wi-Fi 联网与 Uweb 远程运维，不带 PLC 控制功能。现场若按\"显控一体\"报价却发了普通 HMI，客户会发现无法下载 PLC 程序。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "显控一体",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-004",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "客户要求 HMI 分辨率达到 1920×1080 全高清。在汇川 IT9000 系列高端型 HMI 中，符合该分辨率的型号是？",
    "options": {
      "A": "IT9070E",
      "B": "IT9100E",
      "C": "IT9156E",
      "D": "IT9070E 与 IT9100E 均可"
    },
    "answer": [
      "C"
    ],
    "analysis": "IT9000 系列规格表中三款型号的屏幕参数为：IT9070E 为 7″/1024×600，IT9100E 为 10.1″/1024×600，IT9156E 为 15.6″/1920×1080，只有 15.6 寸机型是全高清。除分辨率外，IT9156E 还与另两款有本质差别：它采用四核 Cortex-A55 处理器和电容触摸屏，而 IT9070E、IT9100E 是四核 Cortex-A53 加四线电阻式触摸。A、B、D 三项的典型错误是把 10.1 寸的 1024×600 误当成 1080P。需要全高清画面的场合（如放大显示高清趋势曲线、视频/多媒体控件）必须选 IT9156E。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 屏幕",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "IT9156E",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-005",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 IT7000 系列物联 HMI 的硬件平台采用的处理器规格是？",
    "options": {
      "A": "单核 Cortex-A8 600MHz",
      "B": "单核 Cortex-A8 1GHz",
      "C": "4 核 Cortex-A7 1.2GHz",
      "D": "四核 Cortex-A53"
    },
    "answer": [
      "C"
    ],
    "analysis": "IT7000 系列物联 HMI（IT7070Si-4G、IT7070Si-WIFI、IT7070Ei-4G、IT7100Ei-4G 等）官网概览明确\"高性能 4 核 A7 架构 CPU，主频高达 1.2GHz\"，规格表中 CPU 一栏也标注\"4 核 Cortex A7 1.2GHz\"。A、B 两项是上一代 IT7000 通用 HMI 的配置：IT7070E 等 7 寸与 IT7100E 等 10 寸为单核 Cortex-A8 600MHz，IT7100S/IT7150E 为单核 Cortex-A8 1GHz；D 项四核 Cortex-A53 是 IT9000 系列 IT9070E/IT9100E 的处理器。物联屏要同时跑 4G 通信、Uweb 对接和最多 1000 点数据采集，把老款单核平台的配置当作物联屏参数去承诺是不可行的。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页（规格参数）",
      "chapter": "产品概览 / 规格参数-系统",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "处理器",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-006",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "现场使用 ITP60 系列移动示教器进行产线调试与检修，该产品为保障人身与设备安全而内置的两项关键硬件安全部件是？",
    "options": {
      "A": "物理急停按钮与三位使能开关",
      "B": "安全继电器与安全光幕",
      "C": "双手启动按钮与安全地毯",
      "D": "安全门锁与拉绳急停"
    },
    "answer": [
      "A"
    ],
    "analysis": "ITP60 系列移动示教器的两大安全设计是\"物理急停，人机安全\"（工业级按钮、突发风险瞬时停机）和\"安全使能，防误操作\"（三位开关、松手即停），ITP60S 型号还配置 3 档开关。B、C、D 三项虽然在工业安全防护中确实存在，但都是安装在设备本体或围栏上的外围安全元件，不是示教器内置部件。需要特别注意：ITP60 移动示教器支持 5 米或 15 米电缆\"边走边调\"，操作人员在设备运动范围内活动，使能开关松开即停是防止失控的最后一道硬件防线，验收与日常点检必须确认这两个部件动作有效。",
    "source": {
      "title": "汇川技术 ITP60 系列移动示教器产品页",
      "chapter": "产品概览 / 规格参数-按键",
      "url": "https://www.inovance.com/portal/product/details?productId=939"
    },
    "tags": [
      "ITP60",
      "安全使能",
      "接线安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-007",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "客户要在一条混线产线上用汇川 IT7000 系列 HMI 同时连接西门子、三菱、台达等不同品牌的 PLC，作为集中监控画面。选型沟通时应重点确认的通信能力是？",
    "options": {
      "A": "HMI 是否带 EtherCAT 主站口",
      "B": "HMI 是否支持以太网与串口组网，并提供上述品牌 PLC 的通信协议驱动",
      "C": "HMI 是否支持 PROFINET IRT 等时同步",
      "D": "HMI 是否支持 CANopen 主站"
    },
    "answer": [
      "B"
    ],
    "analysis": "IT7000 通用 HMI 的通信定位是\"协议丰富，组网灵活：支持以太网、串口的通信组网方案，支持西门子、欧姆龙、三菱、松下、安川、基恩士、台达、永宏、信捷等主流厂家协议\"，同时支持自由协议扩展，这正是混线集中监控的核心能力。A、C、D 三项都是汇川 PLC/伺服/驱动侧的总线能力（EtherCAT 主站、PROFINET、CANopen），HMI 作为上位监控设备不需要也不提供这些主站功能。现场经验：做多品牌 PLC 混线画面时，优先用以太网方式连接，串口数量有限且多台设备串接后轮询周期会明显变长，画面刷新会变慢。",
    "source": {
      "title": "汇川技术 IT7000 系列通用 HMI 产品页",
      "chapter": "产品概览 / 功能特性",
      "url": "https://www.inovance.com/portal/product/details?productId=47"
    },
    "tags": [
      "IT7000",
      "通信组网",
      "多品牌PLC"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-010",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "ITU7000 系列显控一体机在工程实施时的软件搭配方式是？",
    "options": {
      "A": "HMI 画面与 PLC 逻辑全部在 InoTouchPad 中完成",
      "B": "HMI 画面与 PLC 逻辑全部在 AutoShop 中完成",
      "C": "HMI 组态用 InoTouchPad，PLC 逻辑编程用 AutoShop，两者配合使用",
      "D": "HMI 组态用 iFA Evolution，PLC 逻辑编程用 InoTouchPad"
    },
    "answer": [
      "C"
    ],
    "analysis": "ITU7000 显控一体机的规格表中\"组态软件\"一栏为\"AutoShop + InoTouchPad\"，即画面侧走 InoTouchPad 组态、控制侧走 AutoShop 编程，这与它\"硬件融合 + 软件统一\"的产品定位一致——汇川官方资料下载区同时提供 InoTouchPad 安装包和 AutoShop V4.10.2.0.Litu7000_01（ITU7000S 系列）安装包，也印证了这一点。A、B 两项试图用单一软件包打天下，是现场新手最常犯的错；D 项把 IT9000 高端型的软件平台 iFA Evolution 错配到 ITU7000 上。工程交接时务必写清两套软件各自的版本号，否则后期维护无法复现。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页（资料下载）",
      "chapter": "规格参数表 / 软件-组态软件；资料下载-软件与调试工具",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "AutoShop",
      "InoTouchPad"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-011",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "下列关于汇川 IT7000 系列物联 HMI 联网方式的描述，正确的是？",
    "options": {
      "A": "仅支持以太网有线联网",
      "B": "仅支持 4G 无线联网",
      "C": "支持 4G 与 Wi-Fi，配合有线以太网口组成多种联网方式",
      "D": "必须外接第三方物联网关才能联网"
    },
    "answer": [
      "C"
    ],
    "analysis": "IT7000 系列物联 HMI 按联网配置分为 IT7070Si-4G、IT7070Ei-4G、IT7100Ei-4G 等 4G 版本和 IT7070Si-WIFI、IT7070Ei-WIFI、IT7100Ei-WIFI 等 Wi-Fi 版本，其中 4G 版本另配 1 个 micro SIM 卡槽；规格表中以太网接口为\"1 个 10M/100M 自适应 RJ45 以太网口\"（IT7070Si 版本不支持以太网）。因此 4G、Wi-Fi、有线以太网三种方式按型号取舍。A、B 两项把型号差异说成系列共性；D 项恰恰相反——物联屏本身就是网关，它能免配置快速连接汇川 Uweb 平台，无需再外挂网关。选型时必须先确认现场是否有可用 SIM 卡与信号覆盖，否则 4G 版本到现场无法联网。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / I/O 接口-无线通讯、以太网接口",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "4G",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-015",
    "category": "hmi",
    "type": "multi",
    "difficulty": 1,
    "stem": "下列哪些是汇川 ITS7000 系列标准型 HMI 的官方产品特性？（多选）",
    "options": {
      "A": "采用国产高性能芯片、多核处理器与全新架构",
      "B": "15.6 寸机型采用铝合金外壳",
      "C": "内置 4G 与 Wi-Fi 物联通信模块",
      "D": "支持一键换肤与开放式 QSS 样式设置",
      "E": "新增 IO 组合控件，支持 PLC 标签变量组态自动同步"
    },
    "answer": [
      "A",
      "B",
      "D",
      "E"
    ],
    "analysis": "A、B、D、E 四项均来自 ITS7000 系列标准型的官方概览特性：自主国产（国产高性能芯片、多核处理器）、全新外观设计（15.6 寸采用铝合金外壳）、样式灵活（一键换肤、开放式 QSS 样式设置）、组合高效（IO 组合控件、PLC 标签变量组态自动同步）。C 项是典型干扰项——内置 4G/Wi-Fi 物联通信模块是 IT7000 系列物联 HMI 的特性，ITS7000 标准型规格表中没有无线通讯一行。ITS7000 系列中真正带无线的是高防护型的 ITS7070EIW-HP（WiFi）与 ITS7070EI4-HP（4G），但那是另一个子系列。销售在讲卖点时必须区分\"标准型\"和\"物联型\"，否则会在投标应答中留下虚假应标风险。",
    "source": {
      "title": "汇川技术 ITS7000 系列标准型 HMI 产品页",
      "chapter": "产品概览 / 产品特性",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7000",
      "产品特性",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-021",
    "category": "hmi",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 IT7000 系列物联 HMI 标配 EtherCAT 主站接口，可以直接带汇川 SV660N 系列伺服做多轴运动控制。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。IT7000 系列物联 HMI 的接口能力是无线通讯（4G/Wi-Fi）、1 个 10M/100M 自适应 RJ45 以太网口、COM1~COM3 串口（RS422/RS485、RS232、RS485）、1 个 Micro SD 卡槽、1 个 Micro SIM 卡槽（4G 版本）与 USB 接口，规格表中没有任何 EtherCAT 相关项。它的定位是\"快速连接、丰富应用、安全可靠\"的物联监控终端，负责远程监控、调试、告警、上下载与数据采集（最高 1000 点）。带伺服轴做实时运动控制必须由 PLC（如 AM400、AM600 系列）或运动控制系统承担，HMI 通过以太网/串口与 PLC 交换数据。这一条是方案沟通中的高危误区，直接关系到系统架构是否成立。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / I/O 接口",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "EtherCAT",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-026",
    "category": "hmi",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 ITS7000 系列标准型 HMI 的以太网接口为 10M/100M 自适应，而 IT9000 系列高端型 HMI 最高提供 10M/100M/1000Mbit 千兆网口。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。ITS7000 系列标准型规格表中带网口的型号（如 ITS7043E、ITS7070E、ITS7100E 等）以太网一栏均为\"10M/100Mbit/s*1\"；IT9000 系列高端型则为\"10M/100Mbit×1\"加\"10M/100M/1000Mbit×1\"双网口，其中一路为千兆。这个差异在大数据量场景下会体现出来：IT9000 支持 Web 发布、音视频多媒体控件与上亿条数据记录，对带宽要求高，千兆口是必要配置；ITS7000 标准型面向常规监控画面，百兆口足以满足。方案设计时若需通过 HMI 转发大量数据到上层信息系统，应优先选择 IT9000 系列并规划好双网口的网段划分。",
    "source": {
      "title": "汇川技术 ITS7000 系列标准型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 接口-以太网",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7000",
      "IT9000",
      "以太网",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-035",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 InoTouchPad 人机界面开发平台的\"仿真调试\"能力，官方描述是下列哪一项？",
    "options": {
      "A": "仅支持连接实际 PLC 的在线仿真，没有设备就无法调试",
      "B": "支持在线与离线双重仿真模式，方便进行调试优化，确保系统上线后的稳定运行",
      "C": "只提供离线仿真，无法与真实 PLC 联调",
      "D": "不提供仿真功能，必须下载到 HMI 后到现场调试"
    },
    "answer": [
      "B"
    ],
    "analysis": "InoTouchPad 官方功能列表中\"仿真调试\"一栏原文为\"支持在线与离线双重仿真模式，方便进行调试优化，确保系统上线后的稳定运行\"。A、C 两项把双重仿真模式割裂成单一模式：在线仿真用于与真实 PLC 或 PLC 工程联调，离线仿真用于无设备时先验证画面逻辑、变量与脚本，两者互补而非互斥；D 项与官方能力直接矛盾。现场价值在于：屏体或 PLC 尚未到货、电柜未接线时，先用离线仿真把画面逻辑与报警、配方逻辑跑通，能把现场调试时间压缩下来；联调阶段再切到在线仿真，用真实变量验证地址映射是否正确。",
    "source": {
      "title": "汇川技术 InoTouchPad 人机界面开发平台产品页",
      "chapter": "产品概览 / 功能特性-仿真调试",
      "url": "https://www.inovance.com/portal/product/details?productId=736"
    },
    "tags": [
      "InoTouchPad",
      "仿真调试",
      "组态"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-036",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "关于汇川 InoTouchPad 内置的图库与模板资源，官方描述是下列哪一项？",
    "options": {
      "A": "内置 30+ 图库资源，不提供行业模板",
      "B": "内置 100+ 图库资源，模板需另行购买",
      "C": "内置 300+ 行业图库资源（2D/3D），并提供内置行业模板",
      "D": "不提供图库，所有控件必须由工程人员自行绘制"
    },
    "answer": [
      "C"
    ],
    "analysis": "InoTouchPad 官方产品页\"丰富的 2D/3D 图库\"一栏写明内置 300+ 行业图库资源，\"行业模板\"一栏写明内置行业模板、可大幅缩短开发周期。A、B 两项把资源数量大幅缩小，B 还虚构了\"模板需另行购买\"，这在向客户报价与承诺交期时会造成误导；D 项与实际能力相反——InoTouchPad 采用拖拽式编程，控件与图库即取即用，无需从零绘制。工程实践上，行业模板与图库的直接价值是缩短画面开发与美工时间，例如 ITU7000 显控一体机就随平台提供空压机行业模板，新项目可以在此框架上修改，减少重复劳动与人为错误风险。",
    "source": {
      "title": "汇川技术 InoTouchPad 人机界面开发平台产品页",
      "chapter": "产品概览 / 功能特性-丰富的 2D/3D 图库、行业模板",
      "url": "https://www.inovance.com/portal/product/details?productId=736"
    },
    "tags": [
      "InoTouchPad",
      "图库",
      "行业模板",
      "组态"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-037",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "现场调试时需要快速生成一个与 PLC 实际 IO 点对应的监控页面，便于逐点核对接线与信号。InoTouchPad 提供的对应能力是？",
    "options": {
      "A": "只能逐个手工新建变量并绑定地址，无法快速生成",
      "B": "I/O 监控功能支持一键配置，自动生成 IO 点位监控页面",
      "C": "只能通过自行编写 JavaScript 脚本来实现",
      "D": "需要额外采购 IO 监控选件模块后才能使用"
    },
    "answer": [
      "B"
    ],
    "analysis": "InoTouchPad 官方功能列表中的\"I/O 监控\"原文为\"一键配置，生成 IO 点位监控页面\"。这正是调试期最省事的做法：按工程中设定的 PLC 型号与 IO 配置一键生成点位画面，不必逐个拖控件、建变量、绑地址。A 项把它描述成纯手工操作，C 项误认为必须写脚本，两项都忽略了官方内置能力；D 项虚构了收费选件。使用要点是：该功能生成的点位表依赖工程中 PLC 型号与 IO 配置的正确性，型号或模块配置选错时，画面上的点位会与实物端子不符，因此生成后仍要抽样核对，并配合变量监控确认信号通断。",
    "source": {
      "title": "汇川技术 InoTouchPad 人机界面开发平台产品页",
      "chapter": "产品概览 / 功能特性-I/O 监控",
      "url": "https://www.inovance.com/portal/product/details?productId=736"
    },
    "tags": [
      "InoTouchPad",
      "IO监控",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-038",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "客户希望把设备运行数据上传到自有物联网平台做二次开发。汇川 IT7000 系列物联 HMI 官方声明兼容的主流物联协议是？",
    "options": {
      "A": "MQTT 等主流物联协议",
      "B": "EtherCAT",
      "C": "PROFIBUS DP",
      "D": "CANopen"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方对 IT7000 系列物联 HMI 的定位描述为\"集成 4G、Wi-Fi、网口等多种网络接口，兼容 MQTT 等主流物联协议，大幅降低设备联网门槛\"，并可快速对接汇川 Uweb 平台实现远程调试、数据采集与维护管理。B、C、D 三项都是现场总线或实时运动控制总线：EtherCAT 在汇川官方定义中是 PLC 与伺服、远程 IO 等从站设备之间的总线，PROFIBUS DP 与 CANopen 同属驱动与 IO 侧总线，物联 HMI 不提供这类主站接口。方案沟通时要注意区分：客户自有平台若使用私有协议，应确认能否通过网口以标准协议对接，或经上层网关转换，不能默认 HMI 支持任意协议。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页",
      "chapter": "产品概览 / 产品定位与网络能力",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "MQTT",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-040",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "关于汇川 ITP60 系列移动示教器的规格与环境指标，下列描述正确的是？",
    "options": {
      "A": "7 英寸 800×480 屏、四线电阻式触摸，面板防护等级 IP54 密封",
      "B": "10.1 英寸 1024×600 屏、防护等级为整机 IP67",
      "C": "7 英寸 800×480 屏、前面板 IP66、后盖板 IP20",
      "D": "4.3 英寸 480×272 屏、电容触摸屏"
    },
    "answer": [
      "A"
    ],
    "analysis": "ITP60 系列移动示教器规格表显示：屏幕为 7 英寸 800×480、16.7M 色、LED 背光、亮度 250cd/m²、四线电阻式触摸，整机外形 277×162.5×62mm、工程塑料外壳，面板按键 25 个，环境一栏明确\"面板防护等级 IP54 密封\"、工作温度 -10℃~+45℃、存储温度 -20℃~+80℃。B 项的 10.1 英寸屏与整机 IP67 属于 ITS7000 高防护型的规格；C 项\"前面板 IP66、后盖板 IP20\"是 ITS7000 标准型与 ITU7000 显控一体机的表述；D 项的 4.3 英寸/480×272 是 ITS7043S/E 的屏幕规格，且 ITP60 不是电容屏。示教器是手持移动终端，壳体上有按键、急停、使能开关与线缆出口，现场不能按\"整机防水\"宣传或冲洗。",
    "source": {
      "title": "汇川技术 ITP60 系列移动示教器产品页（规格参数）",
      "chapter": "规格参数表 / 屏幕、结构、环境",
      "url": "https://www.inovance.com/portal/product/details?productId=939"
    },
    "tags": [
      "ITP60",
      "规格",
      "防护等级"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-041",
    "category": "hmi",
    "type": "single",
    "difficulty": 1,
    "stem": "某客户的设备分布在不同车间，维护人员不足，希望\"人在办公室就能看到现场画面并升级程序\"。ITU7000 系列显控一体机在\"极致运维\"方向提供的官方能力是？",
    "options": {
      "A": "仅支持本机 U 盘备份，不支持任何远程操作",
      "B": "支持远程投屏监控现场数据，并可远程升级 HMI 与 PLC",
      "C": "只支持远程升级 HMI 画面，PLC 程序必须到现场下载",
      "D": "远程功能必须外接第三方远程模块才能实现"
    },
    "answer": [
      "B"
    ],
    "analysis": "官方对 ITU7000 系列\"足不出户 高效维护\"的表述为：远程投屏，监控现场数据；远程升级 HMI、PLC，设备升级更快捷。由于显控一体机把 HMI 与 PLC 的核心功能集成在单一硬件平台上，远程升级可以同时覆盖画面侧与控制侧，这是\"独立 HMI + 独立 PLC\"的分体方案难以一次完成的。A 项低估了产品能力；C 项错误地把 PLC 侧排除在远程升级之外；D 项虚构了必须外接第三方模块的前提。落地时要提醒客户：远程升级前应做好工程备份与版本登记，升级过程中确保网络稳定，避免升级中断造成设备停机。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页",
      "chapter": "产品概览 / 足不出户 高效维护",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "远程运维",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-045",
    "category": "hmi",
    "type": "multi",
    "difficulty": 1,
    "stem": "下列关于汇川 InoTouchPad 人机界面开发平台官方能力的描述，正确的有？（多选）",
    "options": {
      "A": "创新采用拖拽式编程模式，降低人为错误风险、提升工作效率",
      "B": "提供 EIP 快速协议，支持欧姆龙及汇川 EIP，全面配套汇川 PLC",
      "C": "提供 I/O 监控，一键配置即可生成 IO 点位监控页面",
      "D": "支持在线与离线双重仿真模式，方便调试优化",
      "E": "屏体内置 4G 模组，无需 PLC 即可直接把数据上传云平台"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A~D 四项均能在 InoTouchPad 官方产品页找到对应原文：拖拽式编程（降低人为错误风险，提升工作效率）、EIP 快速协议（支持欧姆龙及汇川 EIP，全面配套汇川 PLC，高效传输）、I/O 监控（一键配置，生成 IO 点位监控页面）、仿真调试（在线与离线双重仿真模式）。E 项是干扰项：4G/Wi-Fi 物联通信属于 IT7000 系列物联 HMI 的硬件配置，InoTouchPad 是组态软件，本身不含联网硬件。软件侧协议兼容范围为 Modbus、EIP、OPC UA 等，因此做\"数据上云\"方案时，必须先确认所选屏型号是否带物联模组，不能把软件能力当成硬件能力卖给客户。",
    "source": {
      "title": "汇川技术 InoTouchPad 人机界面开发平台产品页",
      "chapter": "产品概览 / 功能特性（拖拽式编程、EIP 快速协议、I/O 监控、仿真调试）",
      "url": "https://www.inovance.com/portal/product/details?productId=736"
    },
    "tags": [
      "InoTouchPad",
      "软件能力",
      "组态"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-050",
    "category": "hmi",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 ITS7000 系列标准型 HMI 充分支持汇川 InoQuickPro 标准化编程平台，并在通信上支持自由协议灵活开放。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。ITS7000 标准型的官方定位原文为\"ITS7000 基于高品质的产品质感和稳定安全的供应链体系构建，充分支持汇川 InoQuickPro 标准化编程平台，适应广泛的工业环境应用需求\"，其\"连接便捷\"特性则表述为\"自由协议灵活开放，高效互联互通；接口丰富，配套 EASY，调试灵活\"。这两点在实际项目中常被忽略：支持 InoQuickPro 意味着 PLC 侧采用标准化编程模板时，HMI 侧可配套复用变量与程序结构，减少重复建变量与手工绑定；自由协议则让非标设备、老旧设备也能接入监控。销售讲\"生态协同\"时可直接引用这条官方表述，比笼统说\"兼容性好\"更有说服力。",
    "source": {
      "title": "汇川技术 ITS7000 系列标准型 HMI 产品页",
      "chapter": "产品概览 / 产品定位、连接便捷",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7000",
      "InoQuickPro",
      "自由协议"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-054",
    "category": "hmi",
    "type": "judge",
    "difficulty": 1,
    "stem": "ITP60 系列移动示教器的防护等级为整机 IP67，因此可以直接放在高压水枪下冲洗。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。ITP60 规格表环境一栏为\"面板防护等级 IP54 密封\"，属于防尘防溅级别，既不是整机 IP67，也不能承受高压水枪冲洗；其工作温度为 -10℃~+45℃、存储温度 -20℃~+80℃，工作湿度 ≤95%RH（30℃）无凝露，存放与使用都要避免进水与凝露。整机 IP67 是 ITS7000 系列高防护型 HMI 的指标，两者定位完全不同：示教器是手持移动操作终端，壳体上有 25 个按键、急停按钮、使能开关与线缆出口，防护能力天然低于一体密封的柜外安装屏。现场若把示教器随手搁在冲洗区或用水管直接冲，进水损坏的概率很高，且属于使用不当。",
    "source": {
      "title": "汇川技术 ITP60 系列移动示教器产品页（规格参数）",
      "chapter": "规格参数表 / 环境-面板防护等级、工作温度、工作湿度",
      "url": "https://www.inovance.com/portal/product/details?productId=939"
    },
    "tags": [
      "ITP60",
      "防护等级",
      "维护保养"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-061",
    "category": "hmi",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 ITS7000 系列标准型 HMI 中，屏幕尺寸最大的机型型号是 ____，其屏幕分辨率为 ____。",
    "options": null,
    "answer": [
      "ITS7156E",
      "1920×1080"
    ],
    "analysis": "依据汇川《ITS7000 系列HMI产品选型》3.6 节 15.6 寸基本参数：ITS7156E 屏幕尺寸 15.6 英寸、分辨率 1920×1080、亮度 300cd/m²、显示颜色 16.2M，处理器为四核 Cortex-A7，内存 512MB DDR3、存储 8GB，外壳为铸铝面板（银色）。ITS7000 标准型其余尺寸段的分辨率分别是：4.3 寸 480×272、7 寸 800×480 或 1024×600、10.1 寸 1024×600，只有 15.6 寸达到全高清。易错点是把 ITS7000 标准型的 ITS7156E 与 IT9000 高端型的 IT9156E 混为一谈，两者屏幕规格接近但组态软件完全不同（前者 InoTouchPad、后者 iFA Evolution），下单与报价时必须区分型号前缀 ITS 与 IT9。",
    "source": {
      "title": "汇川技术 ITS7000 系列HMI产品选型-中文（PS00017482，B02）",
      "chapter": "3.6 15.6 寸基本参数（屏幕和处理器）",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7156E",
      "15.6寸",
      "分辨率",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-062",
    "category": "hmi",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 ITS7000 系列标准型 7 英寸机型中，ITS7070SH 与 ITS7070EH 的屏幕分辨率为 ____，而 ITS7070S 与 ITS7070E 的分辨率为 ____。",
    "options": null,
    "answer": [
      "1024×600",
      "800×480"
    ],
    "analysis": "依据《ITS7000 系列HMI产品选型》3.4 节 7 寸基本参数：7 英寸机型的分辨率按型号分为两档——ITS7070SH、ITS7070EH 为 1024×600（亮度 500cd/m²），ITS7070S 与 ITS7070E 为 800×480（亮度 350cd/m²），型号中的 H 后缀正对应高清分档。易错点是采购和售前只按“7 寸”报价或下单，漏掉后缀 H，把标清型号当成高清交付。两种分辨率机型的安装开孔尺寸同为 192×138mm，装到现场才发现画面清晰度不符的返工代价很高，技术协议里必须写明带 H 后缀的完整型号。",
    "source": {
      "title": "汇川技术 ITS7000 系列HMI产品选型-中文（PS00017482，B02）",
      "chapter": "3.4 7 寸基本参数（屏幕和处理器）",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7070SH",
      "ITS7070E",
      "分辨率",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-063",
    "category": "hmi",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 ITU7000 系列显控一体机的屏幕分辨率为 ____，其触摸屏类型为 ____ 线工业电阻式。",
    "options": null,
    "answer": [
      "800×480",
      "4"
    ],
    "analysis": "依据《ITU7000 系列显控一体机用户手册》2.3 节基本参数：显示规格为 7 英寸、分辨率 800×480、亮度 350cd/m²、显示颜色 16.7M、背光灯寿命 30000H，触摸屏类型为 4 线工业电阻式；系统侧 CPU 为 A7 四核 1.2GHz，DRAM 256MB DDR3。易错点是 ITU7000 的卖点是把 HMI 与 PLC 集成在同一硬件平台上，屏幕规格以 7 寸 800×480 为基线，不能拿 IT7100E 的 1024×600、也不能拿 IT9000 高端型的全高清参数去套。客户若同时要求更大更高清的显示，应改为 ITS7000 或 IT9000 系列另配 PLC 的方案，不要把显控一体机硬塞进高清需求里。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体机用户手册-中文（PS00011154，A07）",
      "chapter": "2.3 基本参数（显示规格、系统规格）",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "显控一体",
      "屏幕规格"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-008",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 ITS7000 系列标准型 HMI 中，型号 ITS7043S 的屏幕尺寸、分辨率与 CPU 配置是？",
    "options": {
      "A": "4.3″、480×272、双核 Cortex-A7",
      "B": "7″、800×480、双核 Cortex-A7",
      "C": "4.3″、800×480、单核 Cortex-A8",
      "D": "10.1″、1024×600、四核 Cortex-A7"
    },
    "answer": [
      "A"
    ],
    "analysis": "ITS7000 标准型规格表中 ITS7043S 与 ITS7043E 均为 4.3″、480×272、350cd/m²、四线电阻式触摸，CPU 为双核 Cortex-A7，DRAM/Flash 各 128MB。B 项 7″/800×480 对应的是 ITS7070S、ITS7070E、ITS7070SH、ITS7070EH；C 项把老款 IT7000 的单核 Cortex-A8 与 ITS7000 的双核 A7 混淆；D 项 10.1″/1024×600 对应 ITS7100S、ITS7100E、ITS7100P。ITS7043S 与 ITS7043E 的差别只在以太网口有无：S 型无以太网口、E 型带 10M/100Mbit/s 网口，报价时必须确认客户是否需要以太网通信。",
    "source": {
      "title": "汇川技术 ITS7000 系列标准型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 屏幕、性能",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7043S",
      "选型",
      "屏幕规格"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-009",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "IT9000 系列高端型 HMI 的定位是\"高容量\"，其数据与报警记录存储能力的官方描述是？",
    "options": {
      "A": "支持 10 万条数据记录、1 万条报警记录",
      "B": "支持 2000 万条以上数据记录、1000 万条以上报警记录，配 SD 卡/U 盘存储时数据记录最高可达上亿条",
      "C": "仅支持 1000 条数据记录，超出后循环覆盖",
      "D": "不支持本地记录，所有数据必须上传至云端"
    },
    "answer": [
      "B"
    ],
    "analysis": "IT9000 系列官网\"高容量\"特性原文为：2000 万条以上的数据记录、1000 万条以上报警记录，支持 SD 卡/U 盘存储时数据记录存储最高可达上亿条，并支持 100 条以上趋势曲线。这是它能用于高容量数据追溯场景（如需要长期保存工艺曲线的设备）的关键。A、C 两项把容量量级缩小了几个数量级，是竞争对手常用来贬低汇川的表述；D 项把物联屏的云平台能力与 IT9000 的本地存储能力混为一谈。做方案时要提醒客户：本地存储容量依赖 SD 卡/U 盘的实际容量与品质，工程中应设置好记录条数上限与循环覆盖策略，避免卡满后停止记录。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页",
      "chapter": "产品概览 / 高容量特性",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "数据记录",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-012",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "食品加工车间要用高压水枪每日冲洗设备表面，客户希望 HMI 免防护柜直接装在设备上。从汇川 HMI 产品线中选择，最合适的系列及理由是？",
    "options": {
      "A": "ITS7000 系列标准型，因为前面板 IP66 已满足冲洗要求",
      "B": "ITS7000 系列高防护型，因为整机 IP67 且三防面板适配手套操作、耐受消毒液与油污",
      "C": "ITP60 系列移动示教器，因为可以拿在手里避开冲洗",
      "D": "ITU7000 系列显控一体机，因为集成 PLC 可省掉一个电柜"
    },
    "answer": [
      "B"
    ],
    "analysis": "ITS7000 高防护型就是为潮湿、多尘、油污、腐蚀的室内严苛环境打造的一体化人机界面：整机 IP67（6 级完全防尘 + 7 级短时浸水，1 米水深 30 分钟）、高强度 ABS 壳体耐酸碱水汽、三防面板配专业电阻触控，可直接戴乳胶/橡胶/棉纱手套操作，无需防护柜即可直装使用，并可跟随产线同步清洗消杀。A 项是最危险的误判：ITS7000 标准型只有前面板 IP66，后盖板仅 IP20，水枪从背面或缝隙进水会直接损坏设备；C 项示教器是移动调试工具，不能作为固定操作界面长期暴露在冲洗环境；D 项 ITU7000 的防护等级同样是前面板 IP66、后盖板 IP20，仍需装柜。",
    "source": {
      "title": "汇川技术 ITS7000 系列高防护型 HMI 产品页",
      "chapter": "产品概览 / 规格参数-防护等级",
      "url": "https://www.inovance.com/portal/product/details?productId=972"
    },
    "tags": [
      "ITS7000高防护",
      "IP67",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-013",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "使用 InoTouchPad 组态汇川 ITS7000 系列标准型 HMI 时，下列哪项功能可以显著减少\"PLC 变量与 HMI 变量手工逐个对应\"的工作量？",
    "options": {
      "A": "PLC 标签变量组态自动同步",
      "B": "一键换肤",
      "C": "开放式 QSS 样式设置",
      "D": "行业系统图库"
    },
    "answer": [
      "A"
    ],
    "analysis": "ITS7000 标准型的\"组合高效\"特性原文是\"新增 IO 组合控件、PLC 标签变量组态自动同步，显著提高编程效率\"，配合 InoQuickPro 标准化编程平台使用，可直接复用 PLC 侧已定义的标签，避免在 HMI 里重复建变量并手工绑定地址。B、C 两项是界面外观层面的能力（一键换肤、QSS 开放式样式），解决的是画面美观与个性化，与工程效率无关；D 项行业图库缩短的是画图时间，也不解决变量对应问题。现场经验：用标签同步功能后，PLC 侧变量改名或改地址时 HMI 侧可同步更新，能避免大量\"画面上数值不动\"的低级故障。",
    "source": {
      "title": "汇川技术 ITS7000 系列标准型 HMI 产品页",
      "chapter": "产品概览 / 组合高效",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "InoTouchPad",
      "变量组态",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-016",
    "category": "hmi",
    "type": "multi",
    "difficulty": 2,
    "stem": "关于汇川 IT9000 系列高端型 HMI，下列描述正确的有？（多选）",
    "options": {
      "A": "搭载于汇川自主研发的 iFA Evolution（驭沃）全集成软件平台",
      "B": "采用四核高性能处理器，DRAM 1GB、Flash 8GB",
      "C": "支持 1000+ 画面与 5 万+ 标签变量通信，支持 Web 发布",
      "D": "内置 4G 与 Wi-Fi 物联模块，可直接对接 Uweb 平台",
      "E": "配置 Type-C 调试端口，支持上下位机联合仿真调试"
    },
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "analysis": "A、B、C、E 均与官网一致：IT9000 搭载 iFA Evolution（驭沃）平台，四核处理器配 1GB DRAM/8GB Flash，支持 1000+ 画面与 5 万+ 标签变量、Web 发布、自定义复杂报表与音视频多媒体控件，\"全集成\"特性包含上下位机联合仿真调试、组态软件版本在线升级、集成诊断与指导式排障、Type-C 调试端口即插即用。D 项是核心干扰项：4G/Wi-Fi 物联与 Uweb 对接是 IT7000 系列物联 HMI 的能力，IT9000 的规格表中无线通讯一栏为空，其以太网为 10M/100Mbit×1 加 10M/100M/1000Mbit×1 双网口。把物联屏的能力写进 IT9000 方案，会导致技术协议与实际交付不符。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页",
      "chapter": "产品概览 / 高颜值、高性能、高容量、全集成",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "iFA Evolution",
      "产品特性"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-017",
    "category": "hmi",
    "type": "multi",
    "difficulty": 2,
    "stem": "汇川 IT7000 系列物联 HMI 能够帮助客户完成设备联网与远程运维，下列属于其官方能力的有？（多选）",
    "options": {
      "A": "搭载高可靠性 IoT 通信模组，支持 4G/Wi-Fi 快速联网",
      "B": "免配置快速连接汇川 Uweb 平台，支持远程监控、调试、告警与上下载",
      "C": "最高可支持 1000 点数据采集",
      "D": "支持 EtherCAT 主站，可直接带伺服轴做运动控制",
      "E": "内置隐藏式天线，无需外接天线即可联网"
    },
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "analysis": "A、B、C、E 都是 IT7000 系列物联 HMI 的官方特性：可靠的网络接口（高可靠性 IoT 通信模组、支持 4G/Wi-Fi）、快速连接 Uweb 平台（免配置，支持远程监控、调试、告警、上下载、设备定位、物联网卡充值）、功能应用丰富（最高支持 1000 点数据采集）、隐藏式天线设计（内置天线、一体化设计、减少人为拆装质量风险）。D 项是干扰项：EtherCAT 主站运动控制是汇川 PLC（如 AM400、AM600 系列）与运动控制系统的能力，物联 HMI 是监控与数据采集设备，不承担实时运动控制。向客户介绍时若把物联屏说成\"能控轴\"，会带来严重的方案预期偏差。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页",
      "chapter": "产品概览 / 产品特性",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "Uweb",
      "远程运维"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-018",
    "category": "hmi",
    "type": "multi",
    "difficulty": 2,
    "stem": "关于汇川 ITU7000 系列显控一体机，下列描述正确的有？（多选）",
    "options": {
      "A": "把 HMI 与 PLC 的核心功能集成在单一硬件平台上，可节省柜内空间、简化系统架构",
      "B": "画面组态用 InoTouchPad，控制逻辑编程用 AutoShop",
      "C": "支持 AC 供电，输入电压范围约 AC 17V~28V",
      "D": "必须外接一台汇川 PLC 才能实现逻辑控制",
      "E": "提供多路 RS485 串口，方便连接扩展设备"
    },
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "analysis": "A、B、C、E 均有依据：A 来自官网对 ITU7000\"将人机界面（HMI）和可编程逻辑控制器（PLC）的核心功能集成在单一硬件平台上\"的定位；B 来自规格表\"组态软件：AutoShop + InoTouchPad\"以及官方同时提供两款软件安装包；C 来自规格表\"输入额定电压：DC 19V~28V / AC 17V~24V 电源隔离（ITU7070T-AC）\"与\"DC 20.4V~28.8V / AC 18V~22V（ITU7070S 系列）\"，即支持交直流宽压输入；E 来自官方\"接口丰富、扩展灵活\"特性中的\"3 路 RS485，连接扩展更方便\"。D 项与显控一体机的定义直接矛盾。注意 C 项的电压范围按型号有差异，现场接线前必须核对所选型号铭牌与手册。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页（规格参数）",
      "chapter": "产品概览 / 规格参数-电气、接口",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "显控一体",
      "供电"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-022",
    "category": "hmi",
    "type": "judge",
    "difficulty": 2,
    "stem": "ITU7000 系列显控一体机支持在 AutoShop 中完成全部工程，包括 HMI 画面组态，因此现场只需要安装 AutoShop 一款软件。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。ITU7000 显控一体机是一个硬件平台承载两套功能，软件上也是两套：规格表\"组态软件\"一栏写明\"AutoShop + InoTouchPad\"，官网资料下载区同时列出 InoTouchPad_Setup-V1R7C01SPC7(HMI+PAC+IOT 合并版) 与 AutoShop V4.10.2.0.Litu7000_01(ITU7000S 系列) 两个安装包。AutoShop 负责 PLC 侧逻辑（梯形图/指令表等），InoTouchPad 负责画面组态，二者不能互相替代。工程交付时应在文档中记录两套软件各自的版本号，否则后期维护人员升级其中一套后可能出现 HMI 与 PLC 工程不匹配、下载失败或变量失效的问题。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页（资料下载）",
      "chapter": "规格参数表 / 软件-组态软件；资料下载-软件与调试工具",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "AutoShop",
      "InoTouchPad"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-023",
    "category": "hmi",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 iFA Evolution（驭沃）是 HMI 与 PLC 全集成软件平台，因此 ITS7000 系列标准型 HMI 也可以直接使用 iFA Evolution 进行画面组态。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。iFA Evolution（驭沃）确实是\"全场景智能化工业控制软件平台\"，可对汇川全体系自动化产品进行组态、编程、调试和仿真，但目前 HMI 侧使用该平台的是 IT9000 系列高端型（规格表：iFA Evolution（驭沃），IT9156E 标注 iFA Evolution（驭沃））。ITS7000 系列标准型、ITS7000 系列高防护型、ITP60 系列移动示教器、IT7000 系列物联 HMI 的规格表组态软件均为 InoTouchPad；ITU7000 显控一体机为 AutoShop + InoTouchPad。\"全集成平台\"描述的是软件的能力边界与演进方向，不等于所有在售 HMI 型号都已适配，选型与交付必须以对应型号规格表为准。",
    "source": {
      "title": "汇川技术 InoTouchPad 人机界面开发平台 / IT9000 系列高端型 HMI 产品页",
      "chapter": "产品概览；规格参数表 / 软件-组态软件",
      "url": "https://www.inovance.com/portal/product/details?productId=736"
    },
    "tags": [
      "InoTouchPad",
      "iFA Evolution",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-024",
    "category": "hmi",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 IT9000 系列高端型 HMI 的高性能定位包括支持 1000+ 画面、5 万+ 标签变量通信，以及上下位机联合仿真调试和组态软件版本在线升级。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。IT9000 系列官网\"高性能\"特性原文为：支持 1000+ 画面、5 万+ 标签变量通信、自定义复杂报表、音视频多媒体控件、Web 发布；\"全集成\"特性包含上下位机联合仿真调试、组态软件版本在线升级、集成诊断和指导式排障、Type-C 调试端口即插即用。这些能力配合四核处理器与 1GB DRAM/8GB Flash 硬件平台，使它适合大画面量、大变量规模的高端通用 HMI 场景。方案沟通中可以据此正面回应客户对\"画面多、变量多会不会卡\"的疑虑，并用联合仿真调试说明能缩短现场调试时间。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页",
      "chapter": "产品概览 / 高性能、全集成",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "产品特性",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-027",
    "category": "hmi",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川 ITS7000 系列\"标准型 HMI\"与\"高防护型 HMI\"在防护等级、安装方式和典型适用场景上的区别，并指出选型时最容易被忽略的一个关键点。",
    "options": null,
    "answer": "参考答案要点：\n1) 防护等级：标准型为前面板 IP66、后盖板 IP20，属于仅正面防尘防水、背面必须置于电柜或防护箱内的产品；高防护型为整机 IP67（6 级完全防尘 + 7 级短时浸水，1 米水深 30 分钟），机身全域密封，无惧水枪冲洗。\n2) 安装方式：标准型采用面板安装，装在设备面板上、机身背面处于电柜内；高防护型无需防护柜即可直装使用，可跟随产线同步清洗消杀，面板为高耐候三防面板并采用专业电阻触控，可戴乳胶/橡胶/棉纱手套直接操作。\n3) 典型场景：标准型适用于常规电柜内环境（一般车间、机房、包装线等）；高防护型针对潮湿、多尘、油污、腐蚀的室内严苛工况，如食品饮料、机械加工、陶瓷水泥、化工、环卫等。\n4) 最易忽略的关键点：高防护型规格表中 SD 卡一栏为\"不支持\"，也没有千兆网口，接口相对精简（1 路 USB2.0 Type-A、COM1 可定制为 RS232），因此不要用高防护型承担需要本地大容量数据记录或大量扩展接口的场合；反过来，标准型只有前面板防护，绝不能承诺\"可直接用水冲洗\"。",
    "analysis": "本题考察销售与工程师最常见的选型混淆点。核心是分清\"前面板 IPxx\"与\"整机 IPxx\"：标准型、ITU7000 显控一体机都是前面板 IP66/后盖板 IP20，IT7000 通用 HMI 是前面板 IP65/后盖板 IP20，只有 ITS7000 高防护型是整机 IP67。现场误判的后果很直接——按\"能冲洗\"承诺了标准型，水从背面或缝隙进入就会批量损坏。第二个易错点是把高防护型当作\"万能增强版\"，忽略它不支持 SD 卡、接口精简的限制。",
    "source": {
      "title": "汇川技术 ITS7000 系列高防护型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 环境-防护等级、接口-USB/SD 卡",
      "url": "https://www.inovance.com/portal/product/details?productId=972"
    },
    "tags": [
      "ITS7000",
      "IP67",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-028",
    "category": "hmi",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川 HMI 当前在售各系列分别使用哪款组态软件，并说明选用 ITU7000 系列显控一体机时，软件开发需要准备哪些软件环境。",
    "options": null,
    "answer": "参考答案要点：\n1) 软件对应关系（以官网规格表\"组态软件\"一栏为准）：\n   - ITS7000 系列标准型 HMI（ITS7043S/E、ITS7070 系列、ITS7100 系列、ITS7110P、ITS7156E、IT7150P 等）：InoTouchPad；\n   - ITS7000 系列高防护型 HMI（ITS7070S-HP、ITS7070E-HP、ITS7070EIW-HP、ITS7070EI4-HP 等）：InoTouchPad；\n   - ITP60 系列移动示教器（ITP60L-E-L15-LF、ITP60S-E-L5、ITP60S-E-L5-XY01）：InoTouchPad；\n   - IT7000 系列物联 HMI（IT7070Si-4G/WIFI、IT7070Ei-4G/WIFI、IT7100Ei-4G/WIFI 等）：InoTouchPad；\n   - IT9000 系列高端型 HMI（IT9070E、IT9100E、IT9156E）：iFA Evolution（驭沃），IT9156E 标注 iFA Evolution（驭沃）；\n   - ITU7000 系列显控一体机：AutoShop + InoTouchPad。\n2) ITU7000 的开发环境：需要同时准备两套软件——画面侧用 InoTouchPad（官网提供 InoTouchPad_Setup-V1R7C03SPC2 等 HMI+PAC+IOT 合并版安装包），控制侧用 AutoShop（官网提供 AutoShop V4.10.2.0.Litu7000_01，针对 ITU7000S 系列）；现场下载与后期维护都要保证两套软件的版本与工程匹配。\n3) 工程交付建议：在设备档案中记录屏型号、两套软件名称与版本号、工程文件路径，避免后续维护因软件版本不一致导致下载失败。",
    "analysis": "本题考察\"型号—软件\"对应关系这一基础但高频出错的知识点。现场最常见的三类错误：一是把 ITS7000 与 IT9000 的软件混用（前者 InoTouchPad、后者 iFA Evolution）；二是以为 ITU7000 显控一体机只需要 AutoShop（漏装 InoTouchPad 后无法组态画面）；三是拿着老版本的 InoTouchPad 去打新硬件（V1R7 版本才有 HMI+PAC+IOT 合并版安装包）。回答时以规格表\"组态软件\"一栏为唯一依据，不凭印象作答。",
    "source": {
      "title": "汇川技术 InoTouchPad 人机界面开发平台产品页",
      "chapter": "产品概览；各系列规格参数表-软件",
      "url": "https://www.inovance.com/portal/product/details?productId=736"
    },
    "tags": [
      "InoTouchPad",
      "iFA Evolution",
      "AutoShop",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-029",
    "category": "hmi",
    "type": "short",
    "difficulty": 2,
    "stem": "客户有一台分散在多个厂区的空压机设备，希望实现远程查看运行数据、远程上下载 HMI 工程、远程排查故障。请基于汇川 IT7000 系列物联 HMI 给出联网方案与实施要点。",
    "options": null,
    "answer": "参考答案要点：\n1) 硬件选型：选择 IT7000 系列物联 HMI 的 4G 版本（如 IT7070Ei-4G、IT7100Ei-4G）用于无固定网络的厂区，或 WIFI 版本（IT7070Ei-WIFI、IT7100Ei-WIFI）用于厂内有稳定无线覆盖的场景；4G 版本自带 micro SIM 卡槽（4G 版本），需现场准备并激活物联网卡。7 寸机型分辨率为 800×480，10 寸机型为 1024×600，按显示内容量选择。\n2) 网络准备：确认设备安装位置的 4G 信号强度/Wi-Fi 覆盖质量，天线为内置隐藏式设计，无需外接但安装位置应避开金属屏蔽柜体的封闭遮挡；记录 SIM 卡与设备绑定关系。\n3) 平台对接：利用\"免配置快速连接汇川 Uweb 平台\"的能力完成设备注册，实现远程监控、调试、告警、工程上下载、设备定位与物联网卡充值等功能。\n4) 容量与规划：单台设备最高支持 1000 点数据采集，需按实际监控点位提前规划采集清单，避免点位超限后需要二次调整工程；报警与数据记录的关键点位要在组态阶段就定义好，便于远程排障时直接调取。\n5) 安全与运维：按物联屏的网络安全设计原则做好账号与权限管理，避免工程文件与账号口令外泄；建立设备台账（型号、SIM 卡号、所在厂区、工程版本），便于批量设备统一升级与故障定位。",
    "analysis": "本题是典型的\"设备联网+远程运维\"方案题，考察对物联屏能力边界的掌握。回答必须落到 IT7000 物联系列的真实能力上：4G/Wi-Fi 型号区分、micro SIM 卡槽、免配置对接 Uweb、最高 1000 点采集、隐藏式内置天线、远程上下载与告警。常见错误有三类：一是把 4G 与 Wi-Fi 型号的能力说反（IT7070Si-WIFI 不支持以太网口，而 4G 机型才有 SIM 卡槽）；二是承诺无限制的数据采集点数，忽略 1000 点的官方上限；三是只讲联网不讲安全与台账，交付后几十台设备无法统一管理。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页（规格参数）",
      "chapter": "产品概览 / 产品特性；规格参数表 / I-O 接口",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "Uweb",
      "通信组网",
      "远程运维"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-030",
    "category": "hmi",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明 InoTouchPad 作为汇川人机界面开发平台的官方定位与主要能力，并列举在工程组态阶段提高效率的 3 项具体做法。",
    "options": null,
    "answer": "参考答案要点：\n1) 官方定位：InoTouchPad 是汇川专为工业自动化领域打造的人机界面（HMI）开发平台，创新采用拖拽式编程模式，极大降低开发门槛。\n2) 协议兼容：全面兼容 Modbus、EIP、OPC UA 等工业领域主流通信协议，能够无缝对接 PLC、变频器、传感器等各类工业设备，实现不同品牌、不同型号设备之间的数据互通与协同工作；IT7000 通用 HMI 还支持自由协议扩展，并内置西门子、欧姆龙、三菱、松下、安川、基恩士、台达、永宏、信捷等主流厂家协议驱动。\n3) 提高组态效率的具体做法（任选 3 项并说明）：\n   - 使用 PLC 标签变量组态自动同步：直接复用 PLC 侧标签，避免在 HMI 中重复建变量与手工绑定地址，PLC 变量改名/改地址后可同步更新；\n   - 使用 IO 组合控件：把常用的一组指示、按钮、设定值封装成组合控件，减少重复绘制与逐个绑定；\n   - 用拖拽方式生成控件并关联变量，配合表格式与批量式的创建、导入导出功能，批量生成同类对象；\n   - 使用行业系统图库与控件库，缩短画面美工与元件绘制时间；\n   - 使用 JavaScript 脚本与丰富的系统函数实现复杂逻辑，替代大量离散组态；\n   - 使用一键换肤与开放式 QSS 样式设置，快速统一整套画面的视觉风格。\n4) 版本提示：ITU7000 显控一体机、ITS7000 系列、ITP60 系列、IT7000 物联系列使用 InoTouchPad；IT9000 高端型使用 iFA Evolution，不要把两个平台的工程互相混用。",
    "analysis": "本题考察对组态平台的整体认识，避免把 HMI 组态当成\"画图工具\"来理解。回答要点在于：一是平台定位（拖拽式、降低门槛）；二是协议兼容广度（Modbus/EIP/OPC UA 及主流品牌 PLC 驱动，这是混线集中监控能成立的前提）；三是提效手段要落到具体功能名称（标签变量自动同步、IO 组合控件、批量导入导出、脚本与系统函数），而不是笼统说\"效率高\"。同时要提醒软件与型号的对应关系，这是现场最容易造成工程打不开、下载失败的隐性坑。",
    "source": {
      "title": "汇川技术 InoTouchPad 人机界面开发平台产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=736"
    },
    "tags": [
      "InoTouchPad",
      "组态",
      "效率"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-031",
    "category": "hmi",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某食品加工厂杀菌工段，去年上一批设备用的是汇川 ITS7000 系列标准型 HMI，装在设备面板上、机身背面在电柜内。今年客户要求 HMI 免防护柜直装、并跟随产线每日用高压水枪冲洗机身与消毒液擦拭，还要工人戴棉纱手套直接点按操作。销售同事认为\"标准型前面板是 IP66，水冲正面没问题\"，准备直接沿用原型号。请判断该方案是否可行，说明理由，并给出正确的选型与实施建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 结论：不可行。不能沿用 ITS7000 系列标准型。\n2) 理由：标准型的防护等级是\"前面板 IP66、后盖板 IP20\"，属于仅正面防尘防水、背面必须处于电柜/防护箱内的产品；高压水枪冲洗与每日消毒液擦拭必然有水从机身背面、接缝与线缆入口进入，IP20 背板无任何防水能力，会直接导致设备损坏甚至短路。IP66 只描述正面，不能作为整机可冲洗的依据。\n3) 正确选型：改用 ITS7000 系列高防护型 HMI（如 ITS7070S-HP、ITS7070E-HP、ITS7070EIW-HP 或 ITS7070EI4-HP 等），其整机 IP67（6 级完全防尘、7 级短时浸水：1 米水深浸泡 30 分钟、无惧水枪直接冲），高强度 ABS 壳体耐受含盐含脂污水与酸碱水汽，高耐候三防面板适配乳胶、橡胶、棉纱手套直接操作，无需防护柜即可直装使用，契合食品车间每日多次消杀的场景。\n4) 实施要点与需同步确认的限制：\n   - 高防护型规格表中 SD 卡一栏为\"不支持\"，接口较精简（1 路 USB2.0 Type-A、COM1 可定制为 RS232、以太网部分型号才有）；若原方案依赖 SD 卡做本地数据记录，必须改为网络上传或改用其它系列，不要默认沿用；\n   - 10.1 寸机型（ITS7100E-HP、ITS7100EIW-HP、ITS7100EI4-HP）官方状态为\"即将上市\"，交付节点要与供货状态对齐，不能直接写进近期交付清单；\n   - 供电支持 9~28V DC 宽压，现场确认电柜侧电源与线缆入口的密封处理；\n   - 安装方式为面板安装，需核对开孔尺寸（7 寸为 192×138mm、10.1 寸为 260×202mm）与安装板厚（MAX 6mm）。",
    "analysis": "本题的关键是纠正\"前面板 IP66 等于整机防水\"这一现场高频误判。汇川产品线中，ITS7000 标准型与 ITU7000 显控一体机都是前面板 IP66、后盖板 IP20，IT7000 通用 HMI 是前面板 IP65、后盖板 IP20，只有 ITS7000 高防护型是整机 IP67。第二个考点是\"选型不能只看防护\"——高防护型为了密封精简了接口（不支持 SD 卡），若原方案有本地数据记录需求，换型时必须同步调整数据存储方案，否则换完屏发现记录功能做不了。第三个考点是对供货状态的把关，10.1 寸高防护机型官网标注\"即将上市\"，销售方案里必须如实标注，避免承诺无法交付的节点。",
    "source": {
      "title": "汇川技术 ITS7000 系列高防护型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 环境-防护等级、接口、结构；产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=972"
    },
    "tags": [
      "ITS7000高防护",
      "IP67",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-032",
    "category": "hmi",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某包装线正在调试：现场有汇川 H5U 系列 PLC 控制主传动，另有一台老设备的西门子 S7-200 SMART 需要把产量数据送到同一块汇川 IT7000 系列通用 HMI 上做集中显示。调试人员反馈\"HMI 连 PLC 一直连不上，画面数值全不动\"。请给出你的排查思路与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 先分清两类链路，分别定位：\n   - 链路一（H5U ↔ HMI）：常见于以太网方式，检查 HMI 与 PLC 的 IP 地址是否同网段、是否冲突，网线/交换机端口是否正常，PLC 侧是否已允许通信连接，HMI 工程中的设备类型与站号/端口号是否与 PLC 实际一致。\n   - 链路二（S7-200 SMART ↔ HMI）：确认通信物理层（以太网口还是串口）、S7-200 SMART 的 IP 与端口（以太网方式）、或串口参数（波特率、数据位、停止位、校验、站号）是否与 HMI 工程一致；S7-200 SMART 的以太网口与串口不是同一套参数，必须与 HMI 工程里选用的驱动一致。\n2) 确认协议驱动选择：IT7000 系列 HMI 支持以太网与串口的通信组网方案，并支持西门子、欧姆龙、三菱、松下、安川、基恩士、台达、永宏、信捷等主流厂家协议，组态时必须在设备列表中选择对应的品牌/型号驱动，选错驱动即使物理层通了也读不到数据。若设备型号不在预置驱动列表内，可使用自由协议方式自行组帧。\n3) 用分段验证法排除：先用电脑 ping 通两台 PLC（以太网方式），再用 InoTouchPad 的在线模拟/通信诊断功能单独测试每一台设备的通信，把\"两块屏都连不上\"拆成\"哪一台连不上、物理层还是协议层\"，避免在错误方向反复改工程。\n4) 检查共性原因：若两条链路同时不通，优先怀疑 HMI 本体的通信参数配置被误改、HMI 以太网口未启用、或交换机/网段整体规划错误——这类\"共因故障\"比两台设备同时各自出问题概率更高。\n5) 长期建议：把两台 PLC 的连接参数（IP、端口、串口参数、站号、驱动名称）整理成调试记录随工程归档；多台设备串口串接时注意轮询周期会随设备数量增加而变长，画面刷新变慢时不要误判为 HMI 故障。",
    "analysis": "本题考察\"多品牌设备集中监控\"的实战排查能力。核心方法是先按链路拆分、再按物理层/协议层分层定位，而不是笼统地怀疑 HMI。IT7000 系列 HMI 的协议兼容性是方案成立的前提（支持以太网、串口组网与主流品牌协议驱动、自由协议扩展），但\"支持\"不等于\"自动识别\"，驱动、站号、串口参数仍需在工程中逐一匹配。常见的两个误判：一是把 S7-200 SMART 的以太网与串口参数混为一谈；二是两台设备同时不通时仍分头排查，忽略 HMI 侧或网络侧的共因。",
    "source": {
      "title": "汇川技术 IT7000 系列通用 HMI 产品页",
      "chapter": "产品概览 / 协议丰富，组网灵活；通信组网",
      "url": "https://www.inovance.com/portal/product/details?productId=47"
    },
    "tags": [
      "IT7000",
      "通信组网",
      "故障排查",
      "多品牌PLC"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-039",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "工程师要为一台 IT9000 系列高端型 HMI 准备 iFA Evolution（驭沃）的开发用电脑。按官方公布的安装环境要求，下列配置中不满足要求的是？",
    "options": {
      "A": "CPU 为 Intel Core i3（第 10 代）、内存 8G、可用硬盘空间 120G、分辨率 1920×1080、Windows 11 专业版（64 位）",
      "B": "CPU 为 Intel Core i5 标准版（第 4 代）、内存 16G、可用硬盘空间 150G、分辨率 1920×1080、Windows 10 专业版（64 位）",
      "C": "CPU 为 Intel Core i5（第 8 代）、内存 8G、可用硬盘空间 120G、分辨率 1920×1080、Windows 10 企业版（64 位）",
      "D": "CPU 为 Intel Core i5（第 12 代）、内存 16G、可用硬盘空间 200G、分辨率 2560×1440、Windows 11 企业版（64 位）"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方公布的 iFA Evolution（驭沃）安装环境要求为：CPU 需 Intel Core i5 标准版 4xxx 及以上；内存 8G 以上、推荐 16G；可用硬盘空间大于 100G；分辨率 1920×1080 或 22 寸显示器；操作系统为 Windows10 企业版/专业版（64 位）或 Windows11 企业版/专业版（64 位）。对照可知 A 项 CPU 仅为 i3，低于官方要求，是唯一不满足项；B、C 两项的 CPU 代次、内存、硬盘与系统版本均在要求范围内（C 的内存 8G 为官方下限值，硬盘 120G 已高于 100G 的下限）；D 项分辨率高于要求，属于可用配置。现场最常见的错误就是拿一台办公轻薄本（i3/8G 内存/小容量固态）直接装软件，结果大工程编译卡顿甚至安装失败。",
    "source": {
      "title": "汇川技术 iFA Evolution（驭沃）产品页",
      "chapter": "产品概览 / 安装环境要求",
      "url": "https://www.inovance.com/portal/product/details?productId=735"
    },
    "tags": [
      "iFA Evolution",
      "IT9000",
      "环境要求",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-042",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "设备改造后需要临时变更所连 PLC 的串口参数与连接对象，而 HMI 工程已固化。ITU7000 系列显控一体机在\"组态组网\"方面提供的对应能力是？",
    "options": {
      "A": "必须重新组态并整包下载工程才能生效",
      "B": "支持动态修改串口配置和连接配置，现场组网更方便",
      "C": "只能通过修改 PLC 程序间接改变串口参数",
      "D": "串口参数出厂固化，任何情况下都不可修改"
    },
    "answer": [
      "B"
    ],
    "analysis": "ITU7000 官方特性\"组态组网更高效\"明确包含\"动态修改串口配置和连接配置，现场组网更方便\"，同一特性还包含\"全新设计空压机模板，美观、操作简易、组态更高效\"。这意味着现场更换波特率、站号或连接对象时不必重做整套工程，可显著缩短改造停机时间。A、D 两项都假设配置不可调整，与官方能力不符；C 项把 HMI 侧的配置问题错误地引向 PLC 程序，属于现场容易走偏的排查方向——串口参数是通信双方的约定，改一侧就要同步改另一侧。使用该能力后应同步更新调试记录与工程备份，避免后续维护人员按旧参数排障。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页",
      "chapter": "产品概览 / 组态组网更高效",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "串口配置",
      "通信组网"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-043",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "某项目需要同时接入 RS232 条码枪、RS485 智能仪表和 RS422 称重设备。按 IT9000 系列高端型 HMI 的规格参数，其串口配置是？",
    "options": {
      "A": "只有 1 路 RS232，其余设备必须外加转换器",
      "B": "Con.A：1 路 RS232 加 3 路 RS485；Con.B：1 路 RS232、1 路 RS485、1 路 RS422",
      "C": "只提供 RS232 与 RS485，不提供 RS422，接 RS422 设备必须外加转换器",
      "D": "Con.A 与 Con.B 均为 2 路 RS232，仅电气隔离等级不同"
    },
    "answer": [
      "B"
    ],
    "analysis": "IT9000 系列规格表串口一栏为\"Con.A：1 路 RS232、3 路 RS485；Con.B：1 路 RS232、1 路 RS485、1 路 RS422\"，因此 RS232、RS485、RS422 三类设备均可直接接入，无需额外转换器。A 项低估了串口数量；C 项漏掉了 Con.B 上的 RS422，会导致 RS422 设备被误判为必须加转换器；D 项把串口类型说成全为 RS232，与实际配置不符。选型时要注意三点：一是\"3 路 RS485\"是 ITU7000 显控一体机的串口配置（RS485×3），与 IT9000 的 Con.A/Con.B 结构不同，不要跨系列套用；二是用户手册中以 COM1~COM4 的方式描述同一组串口，并注明部分通道不能同时使用，工程配置时应以所选用机型的最新规格表与手册为准；三是要把每路串口的电气标准与所接设备一一对应——RS422 为四线全双工、RS485 通常为两线半双工，接线端子与终端电阻处理方式不同。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页（规格参数）；IT9000 系列人机界面用户手册-中文",
      "chapter": "规格参数表 / 接口-串口；用户手册-产品规格与接口说明",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "串口",
      "通信组网",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-044",
    "category": "hmi",
    "type": "single",
    "difficulty": 2,
    "stem": "某国企项目的技术协议要求\"核心器件国产化、软件自主可控\"，需要供应商给出明确说法。向客户介绍 IT9000 系列高端型 HMI 时，官方\"自主可控\"的表述是？",
    "options": {
      "A": "仅软件自研，硬件核心器件仍全部依赖进口",
      "B": "硬件核心器件国产化、方案自主可控，软件 100% 自研并达到自主可控 A 级（自主级）",
      "C": "整机为贴牌产品，核心器件与软件均由第三方提供",
      "D": "只承诺供应链稳定，不涉及自主可控等级"
    },
    "answer": [
      "B"
    ],
    "analysis": "IT9000 系列产品页\"自主可控\"特性原文为：硬件核心器件国产化，方案自主可控；软件 100% 自研，自主可控 A 级（自主级）；从内到外，全面掌控。A 项与\"硬件核心器件国产化\"直接矛盾；C 项属于对产品的失实描述，若出现在投标应答中会带来合规与信誉风险；D 项回避了官方已有的明确表述，等于主动放弃评分项。信创、国企与出口管制敏感类项目常把自主可控等级写入评分表，销售与售前应直接引用官方口径，并注意与 ITS7000 系列\"国产高性能芯片\"的表述分层说明，不要互相混用。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页",
      "chapter": "产品概览 / 自主可控",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "自主可控",
      "信创",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-046",
    "category": "hmi",
    "type": "multi",
    "difficulty": 2,
    "stem": "用汇川 HMI 连接第三方 PLC 做集中监控，在工程组态阶段必须逐项核对的内容有哪些？（多选）",
    "options": {
      "A": "设备类型与通信协议驱动的选择（品牌、系列、型号）",
      "B": "站号（从站地址）与通信端口号",
      "C": "串口的波特率、数据位、停止位、校验方式",
      "D": "以太网连接时的 IP 地址、子网掩码与端口",
      "E": "HMI 侧的 EtherCAT 站地址分配"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "IT7000 通用 HMI 支持以太网与串口的通信组网方案，并内置西门子、欧姆龙、三菱、松下、安川、基恩士、台达、永宏、信捷等主流厂家协议，同时支持自由协议扩展，其通信手册的协议一览中还列有光洋、LG、经纬、厦门宇电、和利时、苏浩、横河等品牌驱动。工程中需要逐一匹配的正是 A~D 四类参数：驱动选错时物理层通了也读不到数据；站号或串口参数不一致会直接表现为通信超时；IP 与端口不对应则连接根本建立不起来。E 项是干扰项——官方 HMI 通信协议清单中不含 EtherCAT，EtherCAT 在汇川官方定义中是 PLC 与伺服、远程 IO 等从站设备之间的总线，HMI 不承担 EtherCAT 主站角色。多品牌混线时建议优先用以太网连接，串口挂多台设备会拉长轮询周期，画面刷新会变慢。",
    "source": {
      "title": "汇川技术 IT7000 系列通用 HMI 产品页；IT7000 系列 HMI 产品与多设备通信手册-中文",
      "chapter": "产品概览 / 协议丰富，组网灵活；通信手册-第 2 章协议一览、通信组网与参数配置",
      "url": "https://www.inovance.com/portal/product/details?productId=47"
    },
    "tags": [
      "通信组网",
      "多品牌PLC",
      "参数配置"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-051",
    "category": "hmi",
    "type": "judge",
    "difficulty": 2,
    "stem": "ITU7000 系列显控一体机的串口与连接配置在工程下载后即固化，现场若要更换连接对象或串口参数，必须重新组态并整包下载工程。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。ITU7000 官方特性\"组态组网更高效\"明确写明支持\"动态修改串口配置和连接配置，现场组网更方便\"，即现场可以动态调整串口与连接配置，不必整包重做工程。该能力在设备改造、临时接入调试设备、更换仪表品牌等场景价值明显，可减少停机时间。需要注意两点：一是配置改动后要同步更新调试记录与工程备份，否则后续维护人员按旧参数排障会走弯路；二是不同型号在接口与供电上存在差异（如 ITU7070T-AC 与 ITU7070S 系列的数字量点数、供电范围不同），配置前应核对铭牌与手册，不要在未确认型号的情况下照搬参数。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页",
      "chapter": "产品概览 / 组态组网更高效",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "串口配置",
      "现场调试"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-053",
    "category": "hmi",
    "type": "judge",
    "difficulty": 2,
    "stem": "与 ITU7000 显控一体机（串口为 3 路 RS485）不同，IT9000 系列高端型 HMI 的 Con.A 为 1 路 RS232 加 3 路 RS485，Con.B 还额外提供 1 路 RS422。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。IT9000 规格表串口一栏为\"Con.A：1 路 RS232、3 路 RS485；Con.B：1 路 RS232、1 路 RS485、1 路 RS422\"；而 ITU7000 显控一体机的串口为 RS485×3，官方特性亦称\"3 路 RS485，连接扩展更方便\"。这一差异在\"既要接 RS232 扫码枪、又要接 RS485 仪表与 RS422 设备\"的项目里很关键：选 ITU7000 需要外加协议转换器，选 IT9000 则可直接接入。做跨系列对比选型时务必按串口电气类型逐项核对，不要只看\"串口数量\"；同时 IT9000 用户手册中以 COM1~COM4 的方式描述同一组串口并注明部分通道不能同时使用，最终以所选用机型的规格表与用户手册为准，并注意 RS422 与 RS485 的接线端子与终端电阻处理方式不同。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页（规格参数）；ITU7000 系列显控一体型 HMI 产品页",
      "chapter": "规格参数表 / 接口-串口；ITU7000 产品概览-接口丰富、扩展灵活",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "ITU7000",
      "串口",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-055",
    "category": "hmi",
    "type": "short",
    "difficulty": 2,
    "stem": "某项目用一台汇川 HMI 同时连接汇川 H5U 系列 PLC（以太网方式）和一台第三方 PLC（串口方式），调试时出现\"部分数据不刷新、偶发通信超时\"。请给出一份分层的通信检查清单（至少覆盖物理层、参数层、组态层、负载层），并说明如何快速把故障范围缩小到某一侧。",
    "options": null,
    "answer": "参考答案要点：\n1) 物理层：确认网线、水晶头与交换机端口正常，HMI 与 PLC 是否同网段且 IP 无冲突；串口侧确认 A/B 线序正确、屏蔽层单端接地。官方明确要求（IT7000 系列手册）：连接 RS485/RS422 设备时通信电缆长度不要超过 150 米，连接 RS232 设备时不要超过 15 米；该距离上限随系列而异——IT9000 系列用户手册给出的是 RS-485/422 在 115.2kbps 时最远 100 米、RS-232 最长 10 米，现场应以所用手册为准；RS485 总线推荐带屏蔽双绞线，两端各接 120Ω 终端匹配电阻，最多连接 31 个节点，每个节点支线小于 3 米，坚决杜绝星型连接；通信电缆不得与交流电源线或噪声源并行走线，通信过程中不要拔插通信电缆。\n2) 参数层：逐项核对设备类型与协议驱动（品牌/系列/型号）、站号（从站地址）、通信端口号；串口核对波特率、数据位、停止位、校验方式是否与第三方 PLC 完全一致；以太网核对 IP、掩码、端口。官方强调 HMI 与 PLC 两侧必须选择相同的通信协议与数据格式设置。\n3) 组态层：确认变量绑定的地址与数据格式（位/字/浮点、字节顺序）正确，PLC 侧程序已把该数据放入对应地址；确认是否存在同一地址被重复定义，或 PLC 侧变量改名、改地址后 HMI 侧未同步。\n4) 负载层：关注官方给出的硬性上限——每个硬件端口（串口与以太网各自独立）最多建立 32 个同类型连接，多端口同时采集会影响 CPU 负载率；串口挂多台设备会拉长轮询周期，应减少同一条串口上的设备数量、分层设置采样周期或改用以太网。同时检查通信超时时间与重发次数（重发次数一般为 0~15），超时或重试设置过长会让一次失败拖慢整轮刷新。\n5) 快速定位方法：先分别单独测试两条链路，判断是\"全部不通\"还是\"部分不刷新\"；HMI 通信异常时屏幕会出现\"连接失败\"类提示（含连接序号、站号与错误码），可据此先锁定是哪一条连接；再用 InoTouchPad 的仿真、在线监控与通信诊断功能分别对两台 PLC 单独建连，把\"两台都有问题\"拆成\"某一台、某一层\"的问题；若两条链路同时异常，优先怀疑 HMI 侧配置被改动、网口或串口参数整体错位，以及现场网络与接地等共因。\n6) 收尾：把 IP、端口、站号、串口参数、驱动名称整理成调试记录随工程归档，便于后续维护与故障复盘。",
    "analysis": "本题考察\"多设备、多链路\"场景下的分层排查能力，属于工程师与售后最常用的基本功。关键在于先拆链路（以太网、串口各一条）、再分层（物理层—参数层—组态层—负载层），而不是一上来就怀疑 HMI 坏了。常见误区有三：一是把\"部分数据不刷新\"当成硬件故障，实际多由变量地址或数据格式绑定错误引起；二是忽略负载层，官方明确每个硬件端口最多 32 个同类型连接、串口挂多台设备后轮询周期被拉长，表现为\"偶发超时\"，其实通信链路本身正常；三是忽略物理层的硬性限制，例如 RS485/RS422 超过 150 米、RS232 超过 15 米、RS485 总线未接两端 120Ω 终端电阻或采用星型接线，都会造成随机的通信失败。用仿真与通信诊断把故障边界卡到具体某一侧，是最省时间的做法。",
    "source": {
      "title": "汇川技术 IT7000 系列人机界面用户手册-中文；IT7000 系列 HMI 产品与多设备通信手册-中文",
      "chapter": "用户手册-通讯连接注意事项与通信电缆要求；通信手册-协议一览、通信组网与参数配置、RS485/RS422 总线拓扑结构附录",
      "url": "https://www.inovance.com/portal/product/details?productId=47"
    },
    "tags": [
      "通信组网",
      "故障排查",
      "H5U",
      "调试"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-057",
    "category": "hmi",
    "type": "short",
    "difficulty": 2,
    "stem": "某机台要新增若干外设与上位系统对接：扫码枪（RS232）、称重仪表（RS422）、车间 MES 数据上传，并要求本地保存工艺数据。请依据 IT9000 系列高端型 HMI 的接口配置说明可实现的对接方案，并列出接口使用的注意事项。",
    "options": null,
    "answer": "参考答案要点：\n1) 串口侧：IT9000 提供 Con.A（1 路 RS232 加 3 路 RS485）与 Con.B（1 路 RS232、1 路 RS485、1 路 RS422），可直接接入 RS232 扫码枪与 RS422 称重仪表，无需外加转换器；RS422 为四线全双工、RS485 通常为两线半双工，端子接线与终端电阻处理方式不同，需按手册接线；按 IT9000 用户手册，RS-485/422 在 115.2kbps 时最远 100 米、RS-232 最长 10 米（IT7000 系列手册则为 RS485/422 不超过 150 米、RS232 不超过 15 米，实施时按对应系列手册核对）；用户手册以 COM1~COM4 描述同一组串口并注明部分通道不能同时使用，选型时以对应机型规格表为准。\n2) 网络侧：IT9000 为双网口——1 路 10M/100Mbit 与 1 路 10M/100M/1000Mbit，建议控制网（连 PLC）与信息网（连 MES、车间网络）物理分开，数据上传走千兆口以满足大流量场景（Web 发布、报表与数据上传）。\n3) 本地存储：支持 SD 卡（同类机型官方支持 exFAT、FAT32、NTFS 等格式），可用于数据记录与工程备份；工艺数据长期保存要规划记录条数上限与循环覆盖策略，并选用工业级存储介质；IT9000 官方数据容量为 2000 万条以上数据记录、1000 万条以上报警记录，配 SD 卡或 U 盘时数据记录最高可达上亿条。\n4) USB 使用注意：设备提供 1 路 Device USB2.0 Type-C（下载、调试）、1 路 Host USB2.0 Type-A、1 路 Host USB3.0 Type-A；规格表明确\"Type-C 和 USB3.0 不能同时使用\"，调试时不要同时占用；导出数据时避免带电热插拔造成写入中断。\n5) 其他：面板防护为前面板 IP66、后盖板 IP20，背面必须置于电柜内，有潜在液体污染（油污、盐雾、水雾、消毒液等）时柜体防护等级应不低于 IP50；供电 24V DC±20% 电源隔离（额定电流按机型为 700mA 或 800mA）；组态软件为 iFA Evolution（驭沃）V1.5.2.5 及以上（IT9070E、IT9100E）；背面小孔\"恢复出厂设置\"按键与三色指示灯可用于现场快速处置与状态观察。",
    "analysis": "本题考察\"接口规划\"能力，即先把外设按电气标准归类，再对号入座选接口，而不是笼统地说\"接口够用\"。IT9000 的串口价值在于同时具备 RS232、RS485、RS422 三类，能直接覆盖扫码枪、仪表、称重设备；双网口中有一路千兆，适合 MES 上传、Web 发布这类大流量场景，控制网与信息网分开还能降低互相干扰。常见错误有四：一是把 RS422 设备接到 RS485 端子上（或反之）导致通信不通；二是只看到\"有 USB 口\"就同时插 Type-C 与 USB3.0 设备，忽略规格表中\"不能同时使用\"的注明；三是把工艺数据长期存在 U 盘且不设循环覆盖策略，出现介质写满后停止记录；四是忽略电缆长度限制（RS485/RS422 不超过 150 米、RS232 不超过 15 米），长距离拉线后随机通信失败却查不出原因。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页（规格参数）；IT9000 系列人机界面用户手册-中文",
      "chapter": "规格参数表 / 接口-串口、以太网、USB、SD 卡；电气；软件-组态软件；用户手册-安装要求与清洁保养",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "接口",
      "通信组网",
      "方案应用"
    ],
    "roles": [
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "HMI-058",
    "category": "hmi",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某食品厂杀菌工段设备上安装了一台汇川 ITS7000 系列高防护型 HMI（ITS7070E-HP，面板安装、整机 IP67），已连续运行半年。近期操作工反映三个现象：①画面显示正常，但点击按钮经常\"点不准\"，要按偏一点的位置才响应；②戴厚棉纱手套时点击基本无效；③偶发点击位置与响应位置不一致的漂移感。请分析可能原因，给出排查步骤与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 先做现象分类，不要直接判定屏体损坏：\n   - \"点不准、要按偏一点\"多为触摸校准偏移或面板受力变形；\n   - \"戴厚手套无效\"与手套材质、厚度及面板表面状态有关；\n   - \"偶发漂移\"要优先怀疑表面水膜与油污、安装紧固力矩、接地与供电干扰。\n2) 表面状态检查与清洁：该系列面板为高耐候三防面板，官方表述为耐刮耐磨、耐受消毒水、隔绝油污附着，机身采用低沾油设计，擦拭清洁更轻松；彩页亦说明其为工业电阻触控，支持戴手套、湿手操作且触控精准不漂移，面膜表面哑光防眩光防指纹并支持直接冲洗。但每日消毒液擦拭后若残留液膜或油污，仍可能改变触摸层耦合状态导致触点判断偏移，需擦净并干燥后再测试。注意：ITS7000 高防护型官方未公开专属的可用、禁用清洗剂清单，工程上可参照同厂商 IT9000 用户手册的清洁规范（清洁前关闭设备并断开电源；用柔软无绒布蘸少量中性清洁剂或酒精且以不滴液为准；禁止直接向设备喷洒液体；禁用氯化清洁剂、过氧化物、强溶剂与研磨类清洁剂；禁用压缩空气与高压蒸汽喷射），并按现场实际验证。\n3) 保护膜检查与触摸校准：官方对电阻屏触控失准的排查首先要求确认屏面是否仍贴有保护膜，若有应先去除保护膜（保护膜会改变触摸层受力与耦合状态）；随后执行触摸校准——ITS7000 系列用户手册的\"产品触控校准\"章节给出的方法是：进入控制面板后选择\"屏幕校准\"，屏幕上依次出现十字光标，用触控笔或手指点触光标中心，共完成 5 点校准后光标消失，若校准失败光标会回到起点，重复 5 点校准即可（IT7000、ITU7000 系列同为长按进入设置面板、输入系统设置密码后选择\"校准\"的 5 点法；IT9000 系列则是在控制面板密码验证界面长按、等待约 20 秒倒计时结束自动进入校准模式，或直接选择\"屏幕校准\"按钮）。校准前应保证面板洁净、安装紧固到位，校准后复测四角与常用按钮区域；同类机型的官方定期检查表把触摸屏漂移与触控校准列为季度点检项，若校准后短期内再次漂移，应继续检查安装与接地等根因。\n4) 安装与机械因素：核对安装开孔与安装板厚（高防护型 7 英寸开孔 192×138mm、10.1 英寸 260×202mm，安装板厚 MAX 6mm），按对角顺序均匀锁附、不要过分用力。官方在触控失准的排查指引中明确：多因固定螺栓拧得过紧导致屏幕面板变形，建议按标准扭矩紧固并将过紧的螺栓适当拧松；同厂商嵌入式安装的官方推荐扭矩为 6.0±0.5 kgf·cm，并要求安装面板平整、清洁、无变形。注意高防护型规格表未单独给出安装扭矩，现场应以随机安装说明为准。\n5) 手套因素：官方明确该系列适配乳胶、橡胶、棉纱手套直接操作；若现场使用的是加厚棉纱或内衬橡胶的厚重手套，可能超出可用范围，建议统一手套规格或改用薄型乳胶、棉纱手套；用裸手、薄手套、厚手套做对比测试可快速判断是否为手套问题。\n6) 电气与环境：检查设备接地线截面与接地点是否合规、供电是否在 9VDC~28VDC 范围内且无频繁波动；环境温度应处于 -10℃~+50℃、湿度 ≤95%RH（30℃）无凝露范围，凝露会显著影响触摸判断。\n7) 处理建议：清洁加校准确认无效后，依次排查安装应力、接地与供电、手套规格；若确定为屏体触摸层损伤（面板明显划痕、磕碰），联系售后更换。同时从工程侧优化：常用按钮加大尺寸并留足间距，关键动作增加二次确认，降低戴手套误触风险；并把触摸校准、密封件状态与安装紧固纳入定期点检表。",
    "analysis": "本题把\"触摸不准\"这一高频现场问题拆成五类原因：表面状态（保护膜、液膜与油污）、触摸校准、安装应力、手套材质、电气与环境干扰，考查的是分类排查而不是直接换屏。最容易被忽略的是两点：一是高防护型虽然耐受消毒液与油污，但每日擦拭后的残留液膜会改变触摸判断，必须先清洁再判断硬件；二是面板安装的紧固力矩与安装面平整度会造成持续应力，官方在触控失准的排查指引中就明确指出多因固定螺栓拧得过紧导致面板变形，这类问题换屏也解决不了。另外，官方明确该系列适配乳胶、橡胶、棉纱手套，但\"适配\"不等于任何厚度都可用，用对比测试区分手套问题与屏体问题是现场最省事的做法。需要注意出处差异：高防护型产品本身只提供规格表与彩页，清洁剂清单与安装扭矩口径来自同厂商 IT9000 与 ITS7000 嵌入式安装的官方手册，答题与培训时应说明来源系列，不能当作高防护型的专属规定。",
    "source": {
      "title": "汇川技术 ITS7000 系列高防护型 HMI 产品页与产品彩页（19120665-CY，A01）；IT9000 系列人机界面用户手册-中文（清洁与触控失准排查口径）",
      "chapter": "高防护型产品概览-三防面板电阻触控、防油耐冲洁净生产，彩页-工业触控与清晰显示；规格参数表-结构（开孔尺寸、安装板厚）、环境（工作温度、湿度、防护等级）；IT9000 用户手册-清洁屏幕、触控失准排查与定期检查表",
      "url": "https://www.inovance.com/portal/product/details?productId=972"
    },
    "tags": [
      "ITS7000高防护",
      "触摸校准",
      "故障排查",
      "维护保养"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-060",
    "category": "hmi",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某设备厂交付的机台使用汇川 IT7000 系列物联 HMI（4G 版本）做远程运维。客户现场反馈两件事：①设备在客户厂区\"连不上 Uweb 平台，设备一直显示离线\"；②维护人员用 U 盘从屏上导出数据记录时反复失败。请给出排查思路与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 4G 联网与平台离线排查：\n   - 硬件与卡：确认 micro SIM 卡已正确插入顶针抽屉式卡座（4G 版本配置该卡座），物联网卡已激活、有流量、未欠费，并确认卡与设备的绑定关系；\n   - 安装位置与信号：设备采用隐藏式内置天线，无需外接，但整机若被金属电柜完全包围或在强屏蔽区域，会明显削弱信号，应调整安装位置或把设备移到柜外、开窗位置后复测；\n   - 官方自检入口与平台侧核对：先进入系统设置界面单击\"排障汇总\"，查看系统变量、错误状态与连接状态，并用物联网系统变量 $IOTLoginStatus 判断是否成功连接 Uweb（0 失败、1 成功）；同时确认上网方式与机型匹配（4G 型号默认 4G、Wi-Fi 型号默认 Wi-Fi），APN 由运营商提供、官方不建议手动设置；平台侧绑定链路任一步未完成都会显示离线——注册并登录 Uweb 账户、在\"档案管理 > IOT 模块\"中添加该屏的 IOT 模块 ID（每台物联网屏有唯一的十位大写字母或数字识别 ID）、选择设备型号并添加云协议、导入变量 CSV 并下发协议、把 IOT 模块绑定到设备名称；若设备列表中存在重复或历史绑定记录，先清理再加；\n   - 对照测试：改用以太网口（IT7070Ei、IT7100Ei 等型号配 1 个 10M/100M 自适应 RJ45）接入现场网络做对照，若网口可上线而 4G 不行，问题集中在 SIM 卡与信号；若两者都不行，重点查平台账号与绑定关系。\n2) U 盘导出失败排查：\n   - 供电能力：规格表明确 USB A 型口\"只对外提供 500mA 以内的电流\"，高功耗 U 盘、带指示灯的 U 盘或移动硬盘可能供电不足，表现为识别不到或写入中断，应改用低功耗 U 盘；\n   - 改用卡槽：该系列配 1 个 Micro SD 卡槽（自弹式卡座），可用 SD 卡导出，避开 USB 口供电限制；\n   - 介质格式与容量（按系列区分）：IT7000、ITU7000、ITS7000 系列手册口径为 FAT32（最大 32G，且单个文件不超过 4G）与 exFAT（最大 128G）；IT9000 系列手册口径为 exFAT（不超过 32GB）、FAT32 与 NTFS（各不超过 256GB）；核对无误后仍无法识别时，先在电脑上按上述格式格式化再测试；\n   - 操作规范：导出过程中不要插拔介质，等待写入完成后再按流程移除；官方提示数据产生后系统约需 2 秒完成处理与存储，建议数据生成 2 秒后再执行导出，已配置历史记录时先调用\"停止记录\"或\"停止所有记录\"系统函数并等待 2 秒；若导出过程中意外拔掉 SD 卡或 U 盘导致后续无法写入，官方处置是重新插拔使其恢复；\n   - 与记录策略的关系：若数据记录条数上限或循环覆盖策略设置不当，会出现\"记录已满、导出内容异常\"的假象，应在组态阶段就把记录条数与覆盖策略设置好。\n3) 长期建议：建立设备台账（屏型号、SIM 卡号、所在厂区、工程版本、是否使用 SD 卡或 U 盘导出），把\"USB 口对外供电不超过 500mA\"写入现场维护注意事项；远程排障前先让现场确认供电、卡与介质状态，可减少无效出差。",
    "analysis": "本题把\"物联屏远程运维\"与\"本地数据导出\"两类现场问题放在一起，考的是能否分清\"网络侧\"与\"介质侧\"两条独立的排查路径。第一问的关键是把 4G 离线拆成卡状态、信号与安装位置、平台绑定三层，并用网口做对照测试——物联屏带网口的型号可上线，是区分网络问题与平台问题的有效手段；隐藏式内置天线虽然免外接，但对金属屏蔽很敏感，这是现场最常被忽略的一点。第二问的关键是记住规格表中\"USB A 型口只对外提供 500mA 以内的电流\"这一限制：很多现场导出失败的根因就是 U 盘功耗超限，改用低功耗 U 盘或 Micro SD 卡槽即可解决，而不是怀疑工程或屏体故障。介质格式与容量口径取自同厂商高端机型用户手册，现场应以设备实际支持范围为准。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页（规格参数）；IT9000 系列人机界面用户手册-中文（存储介质格式与容量参考）",
      "chapter": "规格参数表 / I/O 接口（Micro SD 卡槽、micro SIM 卡槽、USB A 型口供电能力、以太网）；产品概览-快速连接 Uweb 平台、隐藏式天线设计",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "Uweb",
      "故障排查",
      "维护保养"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-064",
    "category": "hmi",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 ITS7000 系列标准型 4.3 英寸机型（ITS7043S/ITS7043E）的外形尺寸为 128mm×102mm×33mm，其面板安装开孔尺寸为 ____ mm（宽×高），安装板最大厚度为 ____ mm。",
    "options": null,
    "answer": [
      "120×94",
      "6.5"
    ],
    "analysis": "依据《ITS7000 系列HMI产品选型》3.3 节 4.3 寸基本参数：ITS7043S 与 ITS7043E 外形尺寸 128×102×33mm，面板安装开孔尺寸 120×94mm，安装板最大厚度 6.5mm，重量约 225~231g。易错点有两个：一是把开孔尺寸记成外形尺寸的长宽（128×102），二是直接套用 7 寸机型的 192×138mm 开孔。开孔开小装不进去只能返工，开得过大则密封面压不实，前面板 IP66 的防护能力无法保证。现场开孔前应按对应型号手册的开孔图核对，并确认安装板厚度不超过 6.5mm。",
    "source": {
      "title": "汇川技术 ITS7000 系列HMI产品选型-中文（PS00017482，B02）",
      "chapter": "3.3 4.3 寸基本参数（机械特性）",
      "url": "https://www.inovance.com/portal/product/details?productId=531"
    },
    "tags": [
      "ITS7043",
      "开孔尺寸",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-065",
    "category": "hmi",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 IT9000 系列高端型 HMI 中，7 英寸机型 IT9070E 的整机重量（不含包装）约为 ____ kg，15.6 英寸机型 IT9156E 约为 ____ kg。",
    "options": null,
    "answer": [
      "0.8",
      "2.7"
    ],
    "analysis": "依据《IT9000 系列人机界面用户手册》8.1.3 节结构参数：IT9070E 整机重量（不含包装）约 0.8kg、IT9100E 约 1.3kg、IT9156E 约 2.7kg；三款外形尺寸分别为 203×149×40.5mm、271×198×41.5mm、395×258×28mm。易错点是把 IT9000 高端型的 IT9156E（约 2.7kg、工程塑料外壳）与 ITS7000 标准型同为 15.6 寸的 ITS7156E（约 2kg、铸铝面板）混为一谈。重量数据直接用于电柜门板承重、悬臂与安装支架选型、以及运输包装核算，必须按具体型号查手册，不能用同尺寸机型的经验值估算。",
    "source": {
      "title": "汇川技术 IT9000 系列人机界面用户手册-中文（PS00022244，A01）",
      "chapter": "8.1.3 结构（外形尺寸、重量）",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "IT9156E",
      "重量",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-066",
    "category": "hmi",
    "type": "fill",
    "difficulty": 2,
    "stem": "汇川 IT7000 系列通用 HMI 中，15 英寸机型（IT7150E、IT7150P）的屏幕分辨率为 ____，其面板开孔尺寸为 ____ mm（宽×高）。",
    "options": null,
    "answer": [
      "1024×768",
      "352×279"
    ],
    "analysis": "依据《IT7000 系列人机界面用户手册》2.2 节基本参数：15 英寸机型 IT7150E、IT7150P 的分辨率为 1024×768、面板开孔尺寸 352mm×279mm、背光灯寿命 50000H、处理器为 4 核 Cortex A7 1.2GHz；而 10 英寸机型（IT7100E、IT7100S）为 1024×600、开孔 260×202mm。1024×768 是汇川在售 HMI 中较特殊的一档分辨率，只有 IT7000 通用系列的 15 寸机型采用。易错点是做画面移植或柜体开孔时按 10 寸机型的 1024×600 与 260×202mm 套用，导致开孔与分辨率双双不符，采购备件时也会拿错型号。",
    "source": {
      "title": "汇川技术 IT7000 系列人机界面用户手册-中文（PS00005849，A08）",
      "chapter": "2.2 基本参数（显示规格、结构规格）",
      "url": "https://www.inovance.com/portal/product/details?productId=47"
    },
    "tags": [
      "IT7150E",
      "IT7000",
      "开孔尺寸",
      "分辨率"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-014",
    "category": "hmi",
    "type": "single",
    "difficulty": 3,
    "stem": "某设备需在 HMI 与 PLC 之间做 4 轴运动的集中监控，画面数量多、变量规模大（数千点），并要求支持 Web 发布和多媒体控件展示。从汇川 HMI 产品线中选择最合适的是？",
    "options": {
      "A": "ITS7000 系列标准型，ITS7156E",
      "B": "IT9000 系列高端型，IT9156E",
      "C": "IT7000 系列物联 HMI，IT7100Ei-4G",
      "D": "ITS7000 系列高防护型，ITS7100E-HP"
    },
    "answer": [
      "B"
    ],
    "analysis": "IT9000 系列高端型定位\"高颜值、高性能、高容量、全集成\"，官方给出支持 1000+ 画面、5 万+ 标签变量通信、自定义复杂报表、音视频多媒体控件、Web 发布，且搭载四核处理器与 1GB DRAM/8GB Flash 存储，正是大画面量、大变量规模、需要 Web 发布与多媒体展示的场景。A 项 ITS7156E 虽同为 15.6 寸且用 InoTouchPad，但属于标准型，容量与性能定位低于 IT9000；C 项 IT7100Ei-4G 是 10 寸物联屏，强项是远程联网运维而非本地大容量监控；D 项高防护型面向严苛环境，10.1 寸机型官方标注\"即将上市\"，性能也非为大容量场景设计。选型沟通时要问清画面数、变量数与是否要 Web 发布，这三项直接决定系列档次。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页",
      "chapter": "产品概览 / 高性能、高容量、全集成",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "IT9156E",
      "Web发布",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-019",
    "category": "hmi",
    "type": "multi",
    "difficulty": 3,
    "stem": "某食品饮料厂要做\"免防护柜直装\"的现场操作界面，计划选用汇川 ITS7000 系列高防护型 HMI。下列哪些是该系列的官方能力或配置？（多选）",
    "options": {
      "A": "整机 IP67 防护，可直接用水枪冲洗机身",
      "B": "采用专业电阻触控，可戴乳胶、橡胶、棉纱手套直接操作",
      "C": "部分型号支持 WiFi 或 4G 无线通信",
      "D": "配备 1 个 Micro SD 卡槽，用于本地数据记录与工程备份",
      "E": "高强度 ABS 壳体，耐受含盐、含脂污水的冲刷与酸碱水汽侵蚀"
    },
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "analysis": "A、B、C、E 均与官网一致：整机 IP67（6 级完全防尘、1 米水深 30 分钟短时浸水、无惧水枪直接冲）、三防面板配专业电阻触控（适配乳胶/橡胶/棉纱手套，无需反复摘戴）、ITS7070EIW-HP 支持 WiFi 而 ITS7070EI4-HP 支持 4G、高强度 ABS 壳体耐酸碱水汽侵蚀。D 项是干扰项：ITS7000 高防护型规格表中\"SD 卡\"一栏明确为\"不支持\"，USB 只有 1 路 USB2.0 Type-A 接口。现场若需要本地大容量数据记录或工程备份，高防护型不是合适选择，应考虑 IT9000 高端型（支持 SD 卡/U 盘）或通过网络把数据送出去。这条差异在选型阶段最容易被忽略。",
    "source": {
      "title": "汇川技术 ITS7000 系列高防护型 HMI 产品页（规格参数）",
      "chapter": "产品概览 / 规格参数-接口、结构",
      "url": "https://www.inovance.com/portal/product/details?productId=972"
    },
    "tags": [
      "ITS7000高防护",
      "IP67",
      "SD卡",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-020",
    "category": "hmi",
    "type": "multi",
    "difficulty": 3,
    "stem": "某机床厂需要一款可移动操作的调试终端：能边走边调、单手长时间握持不累、并能从硬件层面杜绝误操作引发的失控风险。关于汇川 ITP60 系列移动示教器，符合该需求的有？（多选）",
    "options": {
      "A": "提供 5 米与 15 米电缆规格，可在设备周边移动完成监控、调试与检修",
      "B": "采用人体工学设计，贴合手掌，支持单手/双手舒适操作",
      "C": "内置物理急停按钮，可在突发风险时瞬时停机",
      "D": "配置三位使能开关，松手即停，防止误操作与失控",
      "E": "内置锂电池，可脱离电缆无线使用 8 小时"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A、B、C、D 均是 ITP60 系列移动示教器的官方四大特性：移动操控（5/15 米电缆，边走边调）、舒适握持（人体工学贴合手掌）、物理急停（工业级按钮，突发风险瞬时停机）、安全使能（三位开关，松手即停）。其中 ITP60L-E-L15-LF 为 15 米以太网线缆版本，ITP60S-E-L5 与 ITP60S-E-L5-XY01 为 5 米线缆版本，后者带三档开关。E 项是干扰项：ITP60 通过线缆与设备连接（规格表中\"网线长度\"\"散线长度\"为结构参数），官方资料中没有内置锂电池无线续航的配置。现场把示教器当成无线平板使用，既不符合安全设计逻辑，也无法实现。",
    "source": {
      "title": "汇川技术 ITP60 系列移动示教器产品页（规格参数）",
      "chapter": "产品概览 / 规格参数-结构",
      "url": "https://www.inovance.com/portal/product/details?productId=939"
    },
    "tags": [
      "ITP60",
      "安全使能",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "HMI-025",
    "category": "hmi",
    "type": "judge",
    "difficulty": 3,
    "stem": "IT9000 系列中 IT9070E 与 IT9100E 均采用四核 Cortex-A53 处理器，屏幕分辨率也都是 1024×600；IT9156E 则升级为四核 Cortex-A55 处理器、15.6 寸 1920×1080 分辨率并采用电容触摸屏。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。IT9000 系列规格表显示：IT9070E 为 7″/1024×600、四线电阻式触摸、四核 Cortex-A53；IT9100E 为 10.1″/1024×600、四线电阻式触摸、四核 Cortex-A53（两者亮度均为 500cd/m²，与 IT9156E 的 300cd/m² 不同）；IT9156E 为 15.6″/1920×1080、电容触摸屏、四核 Cortex-A55、显示颜色 16.2M。这组差异在现场很关键：若客户要求电容触摸（戴手套不方便、追求手感与多点操作）或要求全高清，只有 IT9156E 满足；若客户要求高亮度（强光环境），7 寸与 10.1 寸的 500cd/m² 反而优于 15.6 寸的 300cd/m²，需要按实际工况权衡。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 屏幕、性能",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "IT9156E",
      "屏幕规格"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-033",
    "category": "hmi",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某注塑机设备厂要为出口机型配置 HMI：要求 15.6 寸全高清（1920×1080）电容触摸屏、支持 1000+ 画面与大量标签变量、需要 Web 发布把画面投到车间看板，还要能长期保存工艺曲线数据用于质量追溯，现场调试希望能做上下位机联合仿真以缩短调试周期。请给出选型结论、理由，以及需要提醒客户注意的实施要点。",
    "options": null,
    "answer": "参考答案要点：\n1) 选型结论：选用汇川 IT9000 系列高端型 HMI 的 IT9156E。\n2) 选择理由（逐条对应客户需求）：\n   - 15.6 寸、1920×1080 全高清、电容触摸屏：IT9000 系列中只有 IT9156E 是该规格（IT9070E 为 7″/1024×600、IT9100E 为 10.1″/1024×600，且均为四线电阻式触摸）；\n   - 大画面量与变量规模：IT9000\"高性能\"特性支持 1000+ 画面、5 万+ 标签变量通信，硬件为四核处理器配 1GB DRAM、8GB Flash（IT9156E 采用四核 Cortex-A55），满足大容量需求；\n   - Web 发布：属于 IT9000\"高性能\"特性之一，可直接满足车间看板需求，无需额外组态软件；\n   - 数据追溯：IT9000\"高容量\"特性支持 2000 万条以上数据记录、1000 万条以上报警记录，并可支持 100 条以上趋势曲线，数据记录配 SD 卡/U 盘存储时最高可达上亿条；\n   - 缩短调试周期：\"全集成\"特性包含上下位机联合仿真调试、集成诊断和指导式排障、Type-C 调试端口即插即用。\n3) 实施要点与提醒：\n   - 软件平台是 iFA Evolution（驭沃），不是 InoTouchPad；客户现有 ITS7000/IT7000 工程不能直接沿用，需重新组态，培训与工程周期要计入项目计划；设备档案中要记录 iFA Evolution 版本号；\n   - 存储可靠性：上亿条记录依赖 SD 卡/U 盘的实际容量与品质，必须设置记录条数上限与循环覆盖策略，并选用工业级存储介质，避免卡满或卡损坏导致记录中断；\n   - 组态软件版本在线升级、集成诊断与指导式排障属于内部调试技巧，向客户培训时可讲操作方法，但涉及工程内部结构的内容需按内部资料口径输出；\n   - 供电为 24V DC（@24V DC 额定电流 800mA），接地与屏蔽按手册要求执行。",
    "analysis": "本题是\"高端 HMI 选型 + 实施风险\"的综合题。主要考点有三：一是能在同一系列内按屏幕尺寸、分辨率、触摸类型三项硬指标准确落到 IT9156E；二是能把客户需求逐条映射到 IT9000 的官方特性（1000+ 画面、5 万+ 标签、Web 发布、2000 万条以上记录、100 条以上趋势曲线、联合仿真）；三是能识别换平台带来的隐性成本——IT9000 走 iFA Evolution（驭沃），与 ITS7000/IT7000 的 InoTouchPad 工程不通用，这是方案报价与交期最容易漏算的一项。另外要提醒客户工艺数据的长期存储不能只依赖 HMI 本地卡，需与上层系统做好数据归档。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页（规格参数）",
      "chapter": "产品概览 / 高性能、高容量、全集成；规格参数表",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "IT9156E",
      "Web发布",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "HMI-034",
    "category": "hmi",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某设备厂用 ITU7000 系列显控一体机（ITU7070T-AC）替代原来\"7 寸 HMI + 小型 PLC\"的分体方案，已进入调试阶段。调试人员反馈三个问题：①上位机连不上设备，无法下载工程；②画面组态文件下载后不生效；③部分数字量输入点接上信号后画面上没有反应。请给出排查思路与处理建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 先厘清一个前提：ITU7000 显控一体机是一个硬件平台承载 HMI 与 PLC 两套功能，软件也是两套——画面侧用 InoTouchPad 组态，控制侧用 AutoShop 编程（规格表\"组态软件\"一栏为 AutoShop + InoTouchPad，官网分别提供 InoTouchPad_Setup-V1R7C03SPC2 与 AutoShop V4.10.2.0.Litu7000_01 两个安装包）。很多\"连不上、下载不生效\"的问题根源是先搞混了这两套软件。\n2) 问题① 上位机连不上设备：\n   - 确认下载线缆与端口：该机型调试可用以太网或 USB（规格表为 1 路 USB2.0 Type-A 接口）；核对上位机 IP 与设备 IP 是否同网段；\n   - 确认下载对象：画面工程要用 InoTouchPad 连接，PLC 工程要用 AutoShop 连接，用错软件会出现\"连不上\"；\n   - 核对软件版本是否与 ITU7000S 系列匹配（官网 AutoShop 安装包标注 Litu7000_01、适用于 ITU7000S 系列）。\n3) 问题② 画面组态下载后不生效：\n   - 常见原因是下载到了错误的对象（把画面工程下到 PLC 侧）或工程实际未下载完成；\n   - 确认是否使用了正确的工程文件与目标设备型号；确认下载后是否执行了重启/重新运行；\n   - 若画面能打开但数值不动，转向检查变量与 PLC 侧的对应关系（是否已用标签同步方式绑定）。\n4) 问题③ 数字量输入点无反应：\n   - 硬件通道分配要按所选型号的规格核对：ITU7070T-AC 为 9 路 X0~X7、X10 数字量输入（其中 X5~X7、X10 支持 PTC 输入）加 12 路 Y0~Y7、Y10~Y13 全继电器输出；而 ITU7070S 系列为 8 路 X0~X7（其中 X6~X7 支持 PTC）加 6 路（3 继电器 + 3 晶体管）或 6 路继电器输出。通道号与型号不匹配会导致组态里的地址对不上实际端子；\n   - 确认输入的公共端接线方式与信号类型（PTC 输入端子与普通数字量输入端子的用法不同，接错会导致该点无动作）；\n   - 确认该点已在 PLC 侧程序中正确读取，并在画面变量中绑定到对应地址；\n   - 用 AutoShop 在线监控该输入点状态：PLC 侧有变化而画面无变化 → 变量绑定问题；PLC 侧也无变化 → 接线或端子问题。\n5) 供电与结构核对：ITU7070T-AC 支持 DC 19V~28V / AC 17V~24V 电源隔离输入，额定电流最大 2A，接线前确认供电形式与端子；安装为面板安装、开孔 243×179.5mm、外形 258×194×67mm、安装板厚 MAX 6.5mm。",
    "analysis": "本题紧贴显控一体机\"一台设备、两套软件\"的特点设计，是 ITU7000 调试中最集中的一类问题。核心方法论是\"先分清是哪一侧的问题，再用在线监控把故障边界卡在 PLC 侧还是画面侧\"。三个小问分别对应三类典型原因：①软件选错/版本不匹配/网段不对；②下载对象或工程本身不对；③型号通道分配与实际接线/变量绑定不一致——其中把 ITU7070T 的 9 入 12 出（Y 为全继电器）与 ITU7070S 的 8 入 6 出混淆，是最容易导致\"点接上了但没反应\"的根因。回答时能引用具体通道数与型号差异，才算真正掌握该产品。",
    "source": {
      "title": "汇川技术 ITU7000 系列显控一体型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 接口-数字量输入、数字量输出、电气；资料下载-软件与调试工具",
      "url": "https://www.inovance.com/portal/product/details?productId=938"
    },
    "tags": [
      "ITU7000",
      "AutoShop",
      "调试",
      "故障排查"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "HMI-047",
    "category": "hmi",
    "type": "multi",
    "difficulty": 3,
    "stem": "某食品车间要求 HMI 免防护柜直装，并每日用消毒液擦拭、高压水枪冲洗机身。关于 ITS7000 系列高防护型 HMI 的官方表述，正确的有？（多选）",
    "options": {
      "A": "面向潮湿、多尘、油污、腐蚀等室内严苛工业环境，无需防护柜即可直装使用",
      "B": "整机 IP67：6 级完全防尘，7 级短时浸水（1 米水深浸泡 30 分钟），无惧水枪直接冲",
      "C": "全介质防护，可耐受切削液、消毒液、油污与酸碱腐蚀",
      "D": "支持免拆屏消杀维护，可跟随产线同步清洗",
      "E": "按户外设备标准设计，可长期露天日晒雨淋安装"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A~D 均出自官方对 ITS7000 高防护型的描述：定位为\"专为潮湿、多尘、油污、腐蚀等室内严苛工业环境打造的一体化人机界面\"，以整机 IP67 为核心，无惧水枪直接冲洗；全介质防护涵盖切削液、消毒液、油污与酸碱腐蚀；并支持免拆屏消杀维护、可跟随产线同步清洗，适配食品车间每日多次消杀。其产品彩页还把防护维度并列写成防尘防水、防油污、防盐雾、抗振动与 4G/WiFi，并明确\"免柜直装——无需防水外壳或控制柜，省成本省空间\"。E 项是典型误读：IP67 只说明防尘与短时浸水能力，不等同于户外长期耐候（紫外线、温度骤变、长期雨淋另有考核项），官方定位明确限定在室内严苛环境；同厂商其它系列的手册中也明确要求避免长时间在强紫外线环境（阳光直射的户外等场合）运输、存储和使用，向客户承诺\"户外也能装\"属于超范围承诺。",
    "source": {
      "title": "汇川技术 ITS7000 系列高防护型 HMI 产品页；ITS7000 系列高防护型 HMI 产品彩页（19120665-CY，A01）",
      "chapter": "产品概览 / IP67 极致防护、三防面板电阻触控、防油耐冲洁净生产；彩页-产品卖点与产品规格",
      "url": "https://www.inovance.com/portal/product/details?productId=972"
    },
    "tags": [
      "ITS7000高防护",
      "IP67",
      "清洗消杀",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-048",
    "category": "hmi",
    "type": "multi",
    "difficulty": 3,
    "stem": "关于汇川 IT7000 系列物联 HMI 的接口配置，下列描述正确的有？（多选）",
    "options": {
      "A": "串口定义通常为 COM1（RS422/RS485）、COM2（RS232）、COM3（RS485）",
      "B": "提供 1 个 Micro SD 卡槽（自弹式卡座），用于数据存储与工程备份",
      "C": "4G 版本提供 1 个 micro SIM 卡槽（顶针抽屉式卡座）",
      "D": "提供 1 个 USB A 型口，对外提供 500mA 以内的电流",
      "E": "以太网口在系列内所有型号上均为标配"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A~D 与 IT7000 物联 HMI 规格表一致：串口为 COM1（RS422/RS485）、COM2（RS232）、COM3（RS485）；配 1 个 Micro SD 卡槽（自弹式卡座）与 1 个 micro SIM 卡槽（顶针抽屉式卡座，4G 版本）；USB 为 1 个 A 型口并注明\"对外提供 500mA 以内的电流\"，另有 1 个 Mini USB（USB B 型）口用于调试。E 项错误：IT7070Si 版本以太网一栏为\"不支持\"，只有 IT7070Ei、IT7100Ei 等型号才配 1 个 10M/100M 自适应 RJ45 网口。选型时必须逐型号确认网口有无，否则\"用网线连 PLC\"的方案会直接落空；同时要注意 USB 口对外供电能力有限，不宜接高功耗外设。",
    "source": {
      "title": "汇川技术 IT7000 系列物联 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / I/O 接口-串口、SD 卡槽、SIM 卡槽、USB、以太网",
      "url": "https://www.inovance.com/portal/product/details?productId=856"
    },
    "tags": [
      "IT7000物联",
      "接口",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "HMI-049",
    "category": "hmi",
    "type": "multi",
    "difficulty": 3,
    "stem": "IT9000 系列高端型 HMI 搭载于 iFA Evolution（驭沃）全场景智能化工业控制软件平台。关于该平台的能力，下列描述正确的有？（多选）",
    "options": {
      "A": "支持多品类产品开发，可对汇川全体系自动化产品进行组态、编程、调试和仿真",
      "B": "支持 PLC&HMI&驱动联合仿真，可随时随地进行项目开发",
      "C": "支持软件在线升级安装，30 秒完成软件安装卸载",
      "D": "支持多控制器在同一项目管理，变量一次定义、跨设备多路复用",
      "E": "平台只能对 HMI 进行组态，PLC 与驱动必须使用其它软件"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "A~D 均来自 iFA Evolution 官方介绍：全集成（支持多品类产品开发）、联合仿真（支持 PLC&HMI&驱动联合仿真）、轻量化部署（支持在线升级安装，30 秒完成软件安装卸载）、多设备工程与变量共享（变量一次定义、跨设备多路复用，拖拽式编程效率提升 30% 以上）；平台还提供图符模板、PDF/视频控件与 Web 技术应用等能力。E 项与\"全集成、数自融合\"的平台定位完全相反，是干扰项。对 IT9000 项目来说，A、B 两项直接决定调试方式：可以在办公室先把 PLC、HMI、驱动三端联合仿真跑通，再进现场联调，显著压缩现场调试窗口。",
    "source": {
      "title": "汇川技术 iFA Evolution（驭沃）产品页",
      "chapter": "产品概览 / 全集成、联合仿真、轻量化部署、多设备工程、变量共享",
      "url": "https://www.inovance.com/portal/product/details?productId=735"
    },
    "tags": [
      "iFA Evolution",
      "IT9000",
      "全集成",
      "调试"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "HMI-052",
    "category": "hmi",
    "type": "judge",
    "difficulty": 3,
    "stem": "IT9000 系列 7 英寸与 10.1 英寸机型（IT9070E、IT9100E）需要使用 iFA Evolution（驭沃）V1.5.2.5 及以上版本组态，且支持 SD 卡扩展与 Type-C 调试端口。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。IT9000 规格表\"组态软件\"一栏对 IT9070E、IT9100E 标注为\"iFA Evolution（驭沃）V1.5.2.5 及以上版本\"，IT9156E 标注为 iFA Evolution（驭沃）；接口一栏 SD 卡为\"支持\"，USB 包含 1 路 Device USB2.0 Type-C 接口、1 路 Host USB2.0 Type-A 接口与 1 路 Host USB3.0 Type-A 接口。版本要求在工程交付中最容易出错：现场若装的是低于 V1.5.2.5 的旧版软件，可能无法打开或下载工程；另外规格表特别注明\"Type-C 和 USB3.0 不能同时使用\"，调试时不要同时占用这两个口，否则会出现识别异常。设备档案中应记录软件版本与工程文件版本，本页规格中的产品认证行对 IT9070E、IT9100E 标注为\"-\"、仅 IT9156E 标注 CE，认证口径也应以设备铭牌与官方证书为准。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页（规格参数）",
      "chapter": "规格参数表 / 软件-组态软件、接口-USB 与 SD 卡、认证",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "IT9000",
      "iFA Evolution",
      "版本管理"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "HMI-056",
    "category": "hmi",
    "type": "short",
    "difficulty": 3,
    "stem": "客户原有一批 ITS7000 系列标准型 HMI 工程（InoTouchPad 组态），现新增一条产线要选用 IT9000 系列高端型并做集中监控。请说明平台与工程层面的迁移要点，并给出开发端软件环境要求与工程交付建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 平台不可直接复用：ITS7000 标准型用 InoTouchPad 组态，IT9000 高端型搭载 iFA Evolution（驭沃）平台，两者工程文件不通用，迁移等于重新组态，报价与交期必须把这段工作量算进去。iFA Evolution 具备全集成（支持多品类产品开发）、PLC&HMI&驱动联合仿真、在线升级安装（30 秒完成安装卸载）、多设备工程与变量共享、图符模板、PDF/视频控件与 Web 技术应用等能力，可据此重新规划工程结构，而不必照搬旧画面。\n2) 软件版本要求：IT9070E、IT9100E 需 iFA Evolution（驭沃）V1.5.2.5 及以上版本；IT9156E 标注为 iFA Evolution（驭沃）。现场与办公室的软件版本要统一登记，避免出现打不开或下载失败。\n3) 开发端环境要求（官方）：CPU 为 Intel Core i5 标准版 4xxx 及以上；内存 8G 以上、推荐 16G；可用硬盘空间大于 100G；分辨率 1920×1080 或 22 寸显示器；操作系统为 Windows10/11 企业版或专业版（64 位）。\n4) 硬件侧需同步确认：屏幕与触摸（IT9070E、IT9100E 为 7″/10.1″、1024×600、四线电阻式；IT9156E 为 15.6″、1920×1080、电容触摸）；双网口（1 路 10M/100Mbit 加 1 路 10M/100M/1000Mbit）用于控制网与信息网分离；串口 Con.A 与 Con.B（RS232/RS485/RS422）；支持 SD 卡；注意\"Type-C 与 USB3.0 不能同时使用\"；工作温度 IT9070E、IT9100E 为 -10℃~+55℃，IT9156E 为 0℃~+50℃；面板防护为前面板 IP66、后盖板 IP20，背面必须置于电柜内。\n5) 工程交付建议：建立统一的变量命名与画面编号规范，用标签变量同步方式绑定；用联合仿真先在办公室验证逻辑，再进现场；数据记录依赖 SD 卡或 U 盘时设置记录条数上限与循环覆盖策略，并选用工业级介质；交付档案中记录屏型号、iFA Evolution 版本号、工程路径与调试记录；同时留意规格表中 IT9070E、IT9100E 的认证行标注为\"-\"、仅 IT9156E 标注 CE，涉及认证要求的项目应以设备铭牌与官方证书为准。",
    "analysis": "本题是\"跨平台迁移\"类型的综合题，考的是售前与工程最容易漏算的成本项。第一要点是平台不通：IT9000 走 iFA Evolution（驭沃），与 ITS7000、IT7000 的 InoTouchPad 工程不通用，旧工程只能作为画面逻辑参考，不能直接升级复用，这点若在报价阶段没算进去，项目后期必然扯皮。第二要点是版本与环境门槛：7 英寸与 10.1 英寸机型明确要求 iFA Evolution V1.5.2.5 及以上，开发电脑要达到 i5 4xxx、8G 以上内存、100G 以上可用空间与 1920×1080 分辨率，用办公轻薄本做大工程会明显卡顿。第三要点是把平台能力用足——联合仿真、多设备工程、变量共享正是压缩现场调试时间的手段；同时不要忘记硬件侧的接口与温度限制、以及认证口径需以铭牌和官方证书为准，避免选型与实施、投标应答脱节。",
    "source": {
      "title": "汇川技术 iFA Evolution（驭沃）产品页；IT9000 系列高端型 HMI 产品页（规格参数）",
      "chapter": "iFA Evolution-产品概览与安装环境要求；IT9000-规格参数表（软件、接口、结构、环境、认证）",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "iFA Evolution",
      "IT9000",
      "工程迁移",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "HMI-059",
    "category": "hmi",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某产线用一块汇川 HMI 做集中监控：工程内画面 60 余张、变量约 3000 点，同时通过串口轮询 4 台仪表、通过以太网连接 1 台 PLC。客户反馈\"切换画面要等 2~3 秒、数值刷新慢，有时还报通信超时\"。请从画面与控件、变量与采样、通信负载、工程与硬件选型四个角度给出原因分析与优化方案。",
    "options": null,
    "answer": "参考答案要点：\n1) 通信负载角度：串口挂 4 台仪表会显著拉长单轮轮询周期，是\"刷新慢、偶发超时\"的首要嫌疑。优化做法：减少同一条串口上的设备数量（改用多路串口分开挂），或把支持以太网通信的仪表改到网口；核对通信超时时间与重发次数（官方取值范围 0~15），超时设置过长会让一次失败拖慢整轮刷新；核对每台设备的寄存器读取范围与单帧最大读取字数，避免一次读取大量无用寄存器。\n2) 变量与采样角度：只对需要显示的变量建立通信连接，按工艺需要分级设置采样周期（关键联锁快、温度压力等慢变量可放慢）；用标签变量组态自动同步方式绑定 PLC 变量，避免重复建变量与手工绑地址带来的隐性错误；官方把变量采集模式分为\"根据命令\"（调用系统函数刷新）、\"循环使用\"（仅当前画面出现的变量刷新）与\"循环连续\"（一直刷新）三类，非关键变量优先用前两类以降低通信负载。\n3) 画面与控件角度：单画面控件数量过多、动画与脚本开销过大是切换慢的常见原因。优化做法：精简动画与脚本、拆分过于复杂的画面、用弹出子画面或分组显隐替代整页切换；对不常看的画面降低刷新频率；避免在同一画面上堆叠大量历史趋势曲线同时刷新。官方给出的 IT9000 设备容量基线可作对照：画面数量 2000、单画面控件 500、单画面变量 300、外部变量 50000、脚本 128 个（单脚本最大 1000 行）、调度周期 1s，且明确各项为独立上限、不可叠加使用，画面复杂程度会显著影响设备响应性能；官方对卡顿的处理建议同样是优化画面——减少矢量图、降低非必要数据刷新率。\n4) 工程与硬件选型角度：这块屏当前的负载（60 余张画面、约 3000 变量、多路串口加以太网，可能还要做数据记录或 Web 发布）应按下述档位核对产品能力——IT9000 系列高端型官方支持 1000+ 画面、5 万+ 标签变量通信，配四核处理器与 1GB DRAM、8GB Flash，双网口含一路千兆，适合大画面量与大数据量场景；而 IT7000 系列物联 HMI 的定位是联网与远程运维（最高支持 1000 点数据采集，4 核 A7 1.2GHz），不适合承担大规模本地集中监控。若负载确实超出当前屏的能力，应如实提出更换高端型机型的建议，而不是靠压缩功能硬扛。\n5) 落地顺序建议：先做\"零成本\"优化（精简画面与控件、分级采样、减少串口设备与无用变量），再评估通信改造（分串口、改以太网，官方也建议把波特率调到合适的最大值仍不满足速度要求时改用网口协议），最后才讨论换屏；每次调整后用同一组工况复测切换时间与刷新周期，形成可对比的优化记录。",
    "analysis": "本题是\"性能类问题\"的综合分析题，考的是能否把\"慢\"拆解成可量化的四类原因，而不是笼统归因于\"HMI 不行\"。核心判断逻辑：先看通信侧（串口轮询设备数与超时、重发设置），再看数据侧（变量数量、采样周期与采集模式），再看画面侧（控件、动画、脚本开销），最后才看硬件档位是否匹配。最容易被忽略的是负载层——串口挂多台设备后轮询周期会明显变长，表现为\"偶发通信超时\"，实际通信链路是好的；其次是变量侧，把大量无关变量设置为循环连续采集会让刷新周期成倍增长。选型提醒也很关键：IT9000 高端型支持 1000+ 画面与 5 万+ 标签变量，而物联型 HMI 官方数据采集上限为 1000 点、定位在联网运维，两者不能互相顶替。",
    "source": {
      "title": "汇川技术 IT9000 系列高端型 HMI 产品页；IT7000 系列物联 HMI 产品页；IT7000 系列 HMI 产品与多设备通信手册-中文",
      "chapter": "IT9000-产品概览（高性能：1000+ 画面、5 万+ 标签变量通信、四核处理器）；IT7000 物联-产品概览（最高 1000 点数据采集）；通信手册-通信参数配置与变量采集模式",
      "url": "https://www.inovance.com/portal/product/details?productId=707"
    },
    "tags": [
      "故障排查",
      "性能优化",
      "通信组网",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "IO-001",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "在汇川官网产品中心「IO 系统」品类下，以下哪一个系列属于「柜内IO」中的板载式 IO 模块？",
    "options": {
      "A": "Hi30J 系列",
      "B": "GR20 系列",
      "C": "GS20 系列",
      "D": "GR10 系列"
    },
    "answer": [
      "A"
    ],
    "analysis": "汇川 IO 系统品类的「柜内IO」包含 Hi80 系列高性能分布式IO模块、Hi50 系列分布式安全IO模块、Hi30J 系列板载式IO模块、GL20 系列刀片式扩展模块、GR20 系列分布式IO、GR20T 系列卧式IO模块、GE20 系列扩展卡、H2U 系列扩展模块、GR10 系列分布式扩展模块、GL10 系列集中式扩展模块。Hi30J 官方定位即「板载式IO模块」。GR20 是主打经济型柜外 IO 的远程端子台模块；GR10 是分布式扩展模块（需配 H3U/AM400/AM600 等 PLC）；GS20 是 IO-Link 主站（型号如 GS20-ECT-8L、GS20-PN-8L、GS20-EIP-8L），是 GR20 IO-Link 子站的配套主站，本身不属于板载式模块。",
    "source": {
      "title": "汇川技术官网 产品中心 IO 系统品类页（柜内IO）",
      "chapter": "柜内IO 产品列表",
      "url": "https://www.inovance.com/portal/product/list?typeId=347"
    },
    "tags": [
      "Hi30J",
      "IO系统",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-002",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 GL20 系列刀片式扩展模块中，用于 EtherCAT 总线组网的通信接口（耦合器）模块型号是？",
    "options": {
      "A": "GL20-RTU-PN",
      "B": "GL20-RTU-EIP",
      "C": "GL20-2CAN",
      "D": "GL20-RTU-ECT32"
    },
    "answer": [
      "D"
    ],
    "analysis": "GL20 系列的通信接口模块按总线区分：GL20-RTU-ECT32（EtherCAT，官方描述为「EtherCAT 通信接口模块（支持 32 个模块）」，即单个耦合器可带 32 个扩展模块）、GL20-RTU-PN（PROFINET）、GL20-RTU-EIP（EtherNet/IP），此外还有 GL20-4IOL 作为 IO-Link 主站通信模块。因此 A 是 PROFINET 耦合器、B 是 EtherNet/IP 耦合器，均不能用于 EtherCAT 组网；C 的 GL20-2CAN 是 2 通道 CAN 通信模块，属于挂在耦合器后面的扩展模块，本身不是总线耦合器。现场选型时先确认上位 PLC 的总线类型，再对应挑选耦合器型号，并按耦合器可带模块数核算点数是否够用。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册",
      "chapter": "GL20 系列模块型号与通信接口模块选型",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "EtherCAT",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-003",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川技术推出的新一代远程 IO 中，主打经济型柜外 IO、子站采用 IO-Link 协议的是哪个系列？",
    "options": {
      "A": "GL20 系列",
      "B": "Hi80 系列",
      "C": "GR20 系列",
      "D": "GR20T 系列"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网对 GR20 系列的定位是「汇川技术推出的新一代远程 IO，主打经济型的柜外 IO」，目前拥有 IO-Link 协议的 GR20 子站，采用传感器接线三线一组的形式，传感器连接无需并线，可降低客户成本、节省维护时间。GL20 是柜内刀片式扩展模块（EtherCAT/PROFINET/EtherNet/IP 耦合器）；Hi80 是面向大型冗余控制系统的高性能分布式 IO，配套 EVO800 大型 PLC；GR20T 是卧式 IO 模块，耦合器与 IO 模块一体化。注意 IO-Link 子站必须配合主站使用，这是它区别于其它三个系列的组网前提。",
    "source": {
      "title": "汇川技术官网 GR20 系列分布式IO 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=490"
    },
    "tags": [
      "GR20",
      "IO-Link",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-004",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 Hi80 系列高性能分布式 IO 模块官方明确配套的 PLC 系列是？",
    "options": {
      "A": "H5U 系列",
      "B": "AM400 系列",
      "C": "EVO800 系列",
      "D": "H2U 系列"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网 Hi80 系列产品页写明：「搭配 EVO800 系列大型 PLC 和配套交换机，可进行灵活的系统组网」，软件编程依托 iFA Evolution（驭沃）平台，面向冶金、汽车、市政、水利、石油、矿山、港口、化工、电力等大型产线。H5U 是小型 PLC，AM400 是中型 PLC，H2U 是第二代小型 PLC，它们本身也支持 IO 扩展，但不是 Hi80 官方配套的主控对象；H2U 在 IO 系统品类下是以「H2U 系列扩展模块」的形式出现的。",
    "source": {
      "title": "汇川技术 Hi80 系列高性能分布式IO模块 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "Hi80",
      "EVO800",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-005",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "现场已有的 GR20 系列 IO-Link 子站需要组网投入使用时，必须额外配置下列哪一类设备？",
    "options": {
      "A": "无需任何额外设备，子站直接接 PLC 的以太网口即可",
      "B": "GS20 IO-Link 主站",
      "C": "GL20 通信接口（耦合器）模块",
      "D": "EtherCAT 从站分支器"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网说明：IO-Link 的 GR20 子站需要配合 GS20 IO-Link 主站使用，一个 IO-Link 主站可连接 8 个 IO-Link 子站。官网资料中 GS20 主站的型号为 GS20-ECT-8L、GS20-PN-8L、GS20-EIP-8L，按总线类型区分。IO-Link 是主从架构的点对点通信，子站自身不能直接挂在 PLC 的以太网口上，因此 A 错误。GL20 耦合器用于 GL20 刀片式模块的 EtherCAT/PROFINET/EtherNet/IP 组网，与 IO-Link 子站不是同一套体系；EtherCAT 从站分支器是 GL10/GR10 扩展模块中的一种模块类型，也不能替代 IO-Link 主站。销售在报 GR20 方案时务必把主站数量一起算进去。",
    "source": {
      "title": "汇川技术官网 GR20 系列分布式IO 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=490"
    },
    "tags": [
      "GR20",
      "IO-Link",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-006",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 GL20 系列模块的手册资料中，用于说明整个 IO 系统构成、电源计算与组网规则的官方文档是？",
    "options": {
      "A": "GL20 系列模块系统手册",
      "B": "GL20 系列模块手册合集",
      "C": "GL20-4AD 模拟量输入模块设备手册",
      "D": "GL20-INT 系列 I/O 系统彩页"
    },
    "answer": [
      "A"
    ],
    "analysis": "GL20 系列官方资料按层级划分：系统手册（PS00022010）讲整个 IO 系统的构成、模块组合与选型规则；手册合集（PS00022154）是把各模块手册打包；设备手册（如 GL20-4AD 模拟量输入模块设备手册 PS00022175 一类）只讲单个模块的接线、参数与故障；彩页（19120247-CY）是销售宣传资料。做系统方案与电源/分支计算应查系统手册，查具体某个模块的端子定义和拨码设置才查设备手册。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册",
      "chapter": "资料下载 - 产品手册",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "官方资料",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-007",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 Hi50 系列分布式安全 IO 模块官方公布的最高安全等级可达？",
    "options": {
      "A": "PL c / Cat.2 / SIL 1",
      "B": "PL d / Cat.3 / SIL 2",
      "C": "PL e / Cat.4 / SIL 3",
      "D": "仅满足 SIL 2，无 Cat 等级要求"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网 Hi50 系列产品页明确：符合 IEC 61508、IEC 62061、ISO 13849 等国际标准，其最高安全等级可达 PL e/Cat.4/SIL 3，并成为国内首家通过 IEC 61131-6 国际标准功能安全认证的工业控制系统。因此 A、B 都把等级说低了；D 的说法既降低了 SIL 等级，也忽略了 ISO 13849 的 Cat 分类要求。在做安全方案报价时，SIL 3/PL e 是 Hi50 区别于普通 IO 的核心卖点。",
    "source": {
      "title": "汇川技术 Hi50 系列分布式安全IO模块 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=801"
    },
    "tags": [
      "Hi50",
      "功能安全",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-008",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 GL10 与 GR10 系列扩展模块可适配的汇川 PLC 系列是？",
    "options": {
      "A": "仅 H5U 系列",
      "B": "H3U、AM400、AM600 系列",
      "C": "仅 EVO800 系列",
      "D": "H2U、H1U 系列"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网 GL10/GR10 产品页写明：应用范围辐射汇川 H3U、AM400、AM600 各系列 PLC，可满足用户的多方位应用需求。H5U 是小型 PLC，其 IO 扩展走的是 GL10 之外的其它扩展体系，不能简单套用；EVO800 是大型冗余 PLC，其配套分布式 IO 是 Hi80 系列；H2U/H1U 属于更早的小型 PLC 平台，其扩展模块在 IO 系统品类下单独作为「H2U 系列扩展模块」列出。选型时要按主控 PLC 平台反查可用的扩展模块清单。",
    "source": {
      "title": "汇川技术 GL10/GR10 系列扩展模块 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=492"
    },
    "tags": [
      "GL10",
      "GR10",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-009",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 GL20 系列刀片式模块的产品页中，用于宣传产品特性的官方资料名称是？",
    "options": {
      "A": "GL20 系列刀片式模块 产品彩页",
      "B": "GL20 系列模块系统手册",
      "C": "GL20-RTU-ECT32 通信接口模块设备手册",
      "D": "GL20-INT 系列模块系统手册"
    },
    "answer": [
      "A"
    ],
    "analysis": "在 GL20 产品页「资料下载 - 彩页/样本」分类下，可查到《GL20 系列刀片式模块》产品彩页（A07 版，资料编号 19120247-CY），这是给客户做方案介绍时使用的宣传资料。B 是系统手册，面向设计与调试；C 是单个通信接口模块的设备手册；D 虽然名称相近，但它属于 GL20-INT 系统的系统手册，与 GL20 系列的常规彩页不是同一份资料。给客户发资料时要按用途区分手册与彩页。",
    "source": {
      "title": "汇川技术 GL20 系列刀片式模块 产品彩页（19120247-CY）",
      "chapter": "资料下载 - 彩页/样本",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "官方资料",
      "方案应用"
    ],
    "roles": [
      "sales",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-010",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 Hi30J 系列板载式 IO 模块的产品定位是？",
    "options": {
      "A": "柜外防护型远程 IO",
      "B": "PCB 板载式远程 IO 扩展模块",
      "C": "大型冗余系统的高性能 IO",
      "D": "IO-Link 主站模块"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网 Hi30J 系列产品页明确其定位为「汇川技术推出行业体积最小的 PCB 板载式远程 IO 扩展模块」，具有高可靠、高防护、高响应、一网到底的特点，可通过定制化底板集成各类接口，配合预制化线缆实现快速批量生产。A 对应 GR20/GR20T 的柜外安装方案；C 对应 Hi80 高性能分布式 IO；D 是 GL20-4IOL 这类 IO-Link 主站通信模块以及 GS20 主站。板载式模块的价值在于把 IO 直接做进设备内部，减少接线与电柜空间。",
    "source": {
      "title": "汇川技术 Hi30J 系列板载式IO模块 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=887"
    },
    "tags": [
      "Hi30J",
      "板载IO",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-013",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 GR20 系列在传感器接线方式上的官方特点是？",
    "options": {
      "A": "采用三线一组、端子排接线形式，传感器接入无需并线",
      "B": "采用单线直插式弹片端子，必须共用一个公共端并线",
      "C": "采用 M12 圆形连接器，每通道独立出线",
      "D": "采用预制航空插头，不可现场接线"
    },
    "answer": [
      "A"
    ],
    "analysis": "官网 GR20 系列产品页写明：采用远程端子台形式，提升用户的接线、安装体验；「采用三线一组，端子排接线形式，传感器接入无需并线，提升用户的接线、安装体验」，并可通过选配 GR20-FCZ 配件实现柜外安装、显示直观的诊断信息。B 描述的是需要并线的传统公共端接法，与官方「无需并线」的卖点相反；C 的 M12 圆形连接器与 D 的航空插头都不是 GR20 的官方接线形式（GL20 采用的是大口径 PUSH IN 端子）。柜外安装时务必确认是否选了 GR20-FCZ 配件。",
    "source": {
      "title": "汇川技术官网 GR20 系列分布式IO 产品页",
      "chapter": "产品概览 - 高效端子排接线、安装",
      "url": "https://www.inovance.com/portal/product/details?productId=490"
    },
    "tags": [
      "GR20",
      "接线安装",
      "选型"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-021",
    "category": "io",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 GL20 系列刀片式模块采用大口径 PUSH IN 端子，支持免工具接线、换线。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。官网 GL20 产品页「紧凑设计，免工具安装」一节写明：垂直拔插，端子可拆卸，安装、维护效率较上一代提升 3 倍；采用大口径 PUSH IN 端子，不同端子只需轻轻推入即可实现接线，接线时间节省 66%，并明确「免工具接线、换线」。这类接线方式能显著缩短电柜装配与现场维护工时，是 GL20 相较上一代 GL10 的重要升级点。现场培训时应提醒施工人员使用符合线径要求的线缆，PUSH IN 端子对导体截面与剥线长度有要求，不能凭手感硬插。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 紧凑设计，免工具安装",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "接线安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-022",
    "category": "io",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 GR20T 系列卧式 IO 模块将耦合器与 IO 模块做成一体化形态，并提供横、竖两种背部安装设计。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。官网 GR20T 系列产品页写明：「GR20T 系列是卧式 IO 形态的产品，将耦合器和 IO 模块一体化，横竖两种背部安装设计，柜内更省空间更灵活；防护罩设计，柜外安装更省心，采取一网到底的形式丰富柜内柜外的解决方案」。一体化形态减少了模块间连接器与背板，配合 3pin 一组接线和 ECON 接线模式，柜内仅需名片宽度即可安装，适合小型电柜与空间紧张的场景。注意它与 GL20 刀片式「耦合器 + 若干模块」的组合方式不同，选型时点数与形态要一起考虑。",
    "source": {
      "title": "汇川技术官网 GR20T 系列卧式IO模块 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=558"
    },
    "tags": [
      "GR20T",
      "结构安装"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-035",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川官网 GL20 系列刀片式扩展模块产品页在「可实现多种系统构成」一节中，对诊断能力的表述是？",
    "options": {
      "A": "通道级的诊断，快速获取故障信息",
      "B": "仅支持模块级报警，无法定位到具体通道",
      "C": "仅支持通过上位机软件离线读取诊断日志",
      "D": "不具备诊断功能，需外接诊断模块"
    },
    "answer": [
      "A"
    ],
    "analysis": "官方原文为「诊断可靠：通道级的诊断，快速获取故障信息」，说明诊断粒度已经下沉到单个通道，现场排查时可直接把范围收敛到某一路，而不是停留在整块模块的报警层面。B 把诊断粒度说低了一级，与「通道级」这一官方表述直接矛盾；C 描述的离线读日志方式在 GL20 官方资料中并不存在；D 更是不符合实际，GL20 自身即具备诊断能力，无需额外诊断模块。需要注意的是，GL20 的通道级诊断与 Hi80 的「通道级故障诊断，精准定位故障通道」是不同系列各自的官方表述，做方案引用时要对号入座。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 可实现多种系统构成 / 诊断可靠",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "诊断",
      "故障排查"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-036",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "在汇川 GL20 系列刀片式扩展模块的数字量输入模块型号中，GL20-1600END 对应的官方规格是？",
    "options": {
      "A": "16 路数字量输入模块（NPN/PNP）",
      "B": "8 路数字量输入模块",
      "C": "16 路数字量晶体管输出模块",
      "D": "16 路继电器输出模块"
    },
    "answer": [
      "A"
    ],
    "analysis": "按 GL20 官方型号命名规则，数字量输入模块以「位数 + 00END」形式命名：GL20-1600END 为 16 路数字量输入模块，输入类型兼容 NPN/PNP；GL20-0800END 才是 8 路数字量输入模块，因此 B 混淆了位数。C 与 D 属于输出类模块：16 路数字量晶体管输出是 GL20-0016ETN（NPN）/GL20-0016ETP（PNP），8 路继电器输出是 GL20-0008ER，与输入模块的「1600END」字段完全不同。现场备件与订货时必须写全型号，仅凭「16 路」这类点数描述极易订错模块。",
    "source": {
      "title": "汇川技术 GL20 系列刀片式扩展模块 产品技术信息选型参考（GL20 系列型号表）",
      "chapter": "GL20 系列模块型号与功能对照表",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "数字量模块",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-042",
    "category": "io",
    "type": "multi",
    "difficulty": 1,
    "stem": "根据汇川官网 GL20 系列产品页「更稳定、可靠的设计」与「可实现多种系统构成」两节，下列关于 GL20 的描述正确的有哪些？",
    "options": {
      "A": "模块连接器采用夹紧式设计，相比贴片式提高 1 倍稳定性",
      "B": "连接器采用镀金工艺，手摸汗渍不腐蚀连接器，十年设计寿命",
      "C": "支持 EtherCAT、PROFINET 等协议，可无缝接入主流机型与协议",
      "D": "每路输出通道均内置独立的短路保护与断线检测电路，无需任何外部保护"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 三项均为官网原文：模块连接器采用夹紧式设计、相比贴片式提高 1 倍稳定性；连接器采用镀金工艺、手摸汗渍不腐蚀连接器、十年设计寿命；支持 EtherCAT、PROFINET 双重协议，适配主流厂家、无缝接入主流协议，GL20 产品页另有类型丰富与通道级诊断的官方描述。D 的问题在于把「通道级诊断」这一已核实的官方能力，夸大成「每路输出通道均内置独立短路保护与断线检测电路且无需外部保护」——官方资料并未给出这样的表述，回路保护设计仍应按手册要求与外部保护器件配合考虑，向客户承诺未核实的保护能力会造成后续验收争议。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 更稳定、可靠的设计 / 可实现多种系统构成",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "可靠性",
      "诊断"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-047",
    "category": "io",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 GL20 刀片式 IO 系统中的 GL20-PS2 为中继电源模块，当扩展模块数量较多、系统电源或 IO 电源压降过大时，可用它进行电源中继。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。GL20 官方型号表中明确列有 GL20-PS2「中继电源模块」，与 GL20-16AUX-24V（16 路 24V 等电位模块）、GL20-16AUX-0V、GL20-0808AUX 等辅助模块同属系统配套器件。刀片式 IO 由耦合器供电、模块沿背板依次取电，模块数量多或线缆较长时，末端模块的电源电压会下降，出现输入误动作或输出驱动能力不足等现象，此时按系统手册核算电源并加装中继电源模块是标准做法。现场排查时若发现故障集中在排列靠后的模块上，应优先怀疑供电压降，而不是逐块更换模块。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册 / GL20 系列型号表",
      "chapter": "GL20 系列系统构成与电源模块（GL20-PS2 中继电源模块）",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "电源",
      "接线安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-048",
    "category": "io",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 GS20 IO-Link 主站依靠通信电缆从 IO-Link 端口取电，因此不需要为 GS20 主站单独提供 24V 工作电源。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。GS20-ECT-8L、GS20-PN-8L、GS20-EIP-8L 是挂在 EtherCAT/PROFINET/EtherNet/IP 总线上的 IO-Link 主站设备，属于有源从站，必须按手册要求接入 24V 工作电源，IO-Link 端口对子站与传感器的供电同样由主站侧电源提供。把主站当成无源附件、指望从通信电缆或子站取电，会导致上电后主站无法启动、总线扫描不到设备等故障，是柜外 IO 方案接线阶段的典型错误。柜外安装方案在做器件清单与布线图时，必须把主站与子站的 24V 供电回路一并规划，并核算总电流与线径。",
    "source": {
      "title": "汇川技术官网 GS20 系列柜外高防护 I/O 模块 产品页 / GR20 系列分布式 IO 产品页",
      "chapter": "产品概览 - 高效接线、安装",
      "url": "https://www.inovance.com/global/content/details_816_556243.html"
    },
    "tags": [
      "GS20",
      "供电",
      "接线安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-057",
    "category": "io",
    "type": "single",
    "difficulty": 1,
    "stem": "汇川 GS20-ECT-8L、GS20-PN-8L、GS20-EIP-8L 三款 IO-Link 主站的型号后缀差异，对应的是下列哪一项的区分？",
    "options": {
      "A": "所接入的上位现场总线类型（EtherCAT、PROFINET、EtherNet/IP）",
      "B": "所连接的 IO-Link 子站数量上限（8 个、16 个、32 个）",
      "C": "主站的防护等级（IP20、IP54、IP67）",
      "D": "主站支持的 IO-Link 通信速率档位（COM1、COM2、COM3）"
    },
    "answer": [
      "A"
    ],
    "analysis": "GS20 主站按上位总线类型区分型号：GS20-ECT-8L 对应 EtherCAT、GS20-PN-8L 对应 PROFINET、GS20-EIP-8L 对应 EtherNet/IP；型号中的「8L」表示可连接 8 个 IO-Link 子站，三款主站的这一能力是相同的。B 错在把「8L」误解为分档数量，实际上三款均为 8 个子站；C 与 D 都不是型号后缀所区分的维度——GS20 系列整体为 IP67 高防护等级，IO-Link 通信速率档位也不是靠主站型号来区分。选型第一步永远是先确认上位控制器的总线类型，再据此锁定主站型号，选错总线型号会导致主站无法挂到控制系统上。",
    "source": {
      "title": "汇川技术 GS20 系列柜外高防护 I/O 模块型号表 / 官网 GS20 系列产品页",
      "chapter": "GS20 系列 IO-Link 主站型号与总线类型对照",
      "url": "https://www.inovance.com/global/content/details_816_556243.html"
    },
    "tags": [
      "GS20",
      "IO-Link",
      "选型",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-058",
    "category": "io",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 GL20 系列刀片式模块与 GL20S 系列模块的型号可以互换使用，两者在备件与订货中可视为同一系列。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。GL20 与 GL20S 是官方资料中两个并行的模块体系：GL20 系列包含 GL20-RTU-ECT32/GL20-RTU-PN/GL20-RTU-EIP 耦合器以及 GL20-1600END 数字量输入、GL20-0016ETP 数字量输出、GL20-4AD/GL20-8ADI 模拟量输入、GL20-4PT/GL20-4TC 温度检测、GL20-2CAN/GL20-2S485/GL20-2SCOM/GL20-4IOL 通信模块等；GL20S 系列则另有 GL20S-RTU-ECT32/GL20S-RTU-EIP/GL20S-RTU-PN 耦合器与 GL20S-0004ER 通道隔离型数字量输出、GL20S-0004ETP-2A 大电流数字量输出等特色模块。两套型号的手册各自独立，技术协议、订货单与备件清单中必须写清完整型号；现场更换前应核对铭牌与对应手册，避免因「都是 GL20」而订错、装错模块。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册 / GL20S 系列模块用户手册",
      "chapter": "资料下载 - 产品手册（GL20 与 GL20S 型号体系）",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "GL20S",
      "选型",
      "维护保养"
    ],
    "roles": [
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-059",
    "category": "io",
    "type": "judge",
    "difficulty": 1,
    "stem": "汇川 GS20 IO-Link 主站通过 IO-Link 协议对子站进行配置参数自动下发，因此替换同型号 IO-Link 子站时通常无需在现场逐项重新设置参数。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。汇川官方对 GS20 的说明中包含「配置参数自动下发状态监视等功能助力客户节省维护成本，缩短停机时间，提高换产效率」，并在「高效工程」一节明确其可统一部署传感器配置参数以消除人工配置、通过 ID 识别防止安装错误从而实现即插即用。这正是 IO-Link 参数服务器机制带来的维护方式变化：参数集中保存在主站侧，更换同型号子站后由主站自动下装，工程师不必带调试软件到现场逐项重设。需要注意这一便利的前提是使用 GS20 主站（子站不能直接接 PLC 以太网口）、替换件型号与原型号一致，并且主站侧保存的参数集未被修改或清空。",
    "source": {
      "title": "汇川技术官网 GS20 系列柜外高防护 I/O 模块 产品页",
      "chapter": "产品概览 - 高效工程（统一部署配置参数、ID 识别）/ 高效诊断",
      "url": "https://www.inovance.com/global/content/details_816_556243.html"
    },
    "tags": [
      "GS20",
      "IO-Link",
      "维护保养",
      "参数配置"
    ],
    "roles": [
      "engineer",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-060",
    "category": "io",
    "type": "judge",
    "difficulty": 1,
    "stem": "某产线数字量输出点偶发不动作，但控制器侧程序输出状态正常。排查时应先测量模块输出端子与负载之间的回路（含负载电源、公共端与中间继电器），而不是直接更换 IO 模块。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。控制器侧程序输出状态正常，说明指令已经发出；而 GL20 产品页明确具备「通道级的诊断，快速获取故障信息」，应先用通道级诊断把范围收敛到具体通道，再按「模块输出端子有无电平 → 负载电源与公共端分组是否正常 → 端子压接是否可靠（GL20 为大口径 PUSH IN 端子）→ 负载类型与极性、电流是否匹配 → 中间继电器与线缆」的顺序分段验证。直接更换 IO 模块属于用更换代替诊断：既无法解决外部回路问题，又可能在换件后再次损坏同一通道，还会丢失原始故障信息和造成不必要停机。只有在排除外部因素、且有诊断证据指向模块通道本身失效时，才更换同型号模块（注意 GL20 与 GL20S 型号不可混用）。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页 / GL20 系列模块系统手册",
      "chapter": "产品概览 - 诊断可靠 / 数字量输出接线与故障处理",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "故障排查",
      "数字量输出",
      "诊断"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-061",
    "category": "io",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 GL20 系列的通信接口（耦合器）模块按所接入的现场总线区分型号：用于 PROFINET 组网的耦合器型号为 ____，其型号后缀 PN 所对应的总线协议名称为 ____。",
    "options": null,
    "answer": [
      "GL20-RTU-PN",
      "PROFINET"
    ],
    "analysis": "GL20 系列官方型号表按总线划分通信接口模块：GL20-RTU-ECT32 对应 EtherCAT（最多可扩展 32 个模块）、GL20-RTU-PN 对应 PROFINET、GL20-RTU-EIP 对应 EtherNet/IP。题干已给出「PN 后缀」，因此第一空应填完整型号 GL20-RTU-PN，只写「PN」或写成 GL20-RTU-ECT32 都不符合要求；第二空必须写规范协议名 PROFINET（不是 PROFIBUS、不是 PROFINET IO 的其它写法）。采购与销售核对型号时最容易犯的错是把 ECT、PN、EIP 三个后缀张冠李戴，建议按「总线类型→耦合器型号」成对记忆，报价单与订货单上都应写全型号而不能只写「GL20 耦合器」。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页（规格参数 - GL20 系列型号表）",
      "chapter": "规格参数 / 通信接口模块型号与产品描述",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "耦合器",
      "PROFINET",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-063",
    "category": "io",
    "type": "fill",
    "difficulty": 1,
    "stem": "汇川 GS20 系列柜外高防护 IO-Link 主站按所接入的上位总线分为三款型号，除 EtherCAT 型的 GS20-ECT-8L 与 PROFINET 型的 ____ 之外，还有 EtherNet/IP 型的 ____；该系列单个主站可连接的 IO-Link 子站数量为 ____ 个。",
    "options": null,
    "answer": [
      "GS20-PN-8L",
      "GS20-EIP-8L",
      "8"
    ],
    "analysis": "GS20 系列 IO-Link 主站按上位总线区分型号：GS20-ECT-8L（EtherCAT）、GS20-PN-8L（PROFINET）、GS20-EIP-8L（EtherNet/IP），三款的带载能力相同，均为可连接 8 个 IO-Link 子站；官网对 GR20 系列亦明确「一个 IO-Link 主站可连接 8 个 IO-Link 子站」。第一、二空必须写全型号，只写「PN 型」「EIP 型」不构成可订货的型号；第三空是方案核算的关键数字。做柜外 IO 方案时须按 8 个子站一组拆分配置主站数量，例如 24 个子站需要 3 台主站，漏算主站是这类方案最常见的缺项。",
    "source": {
      "title": "汇川技术官网 GS20 系列高防护 IO 产品页 / GR20 系列分布式 IO 产品页",
      "chapter": "规格参数 - GS20 系列 IO-Link 主站型号表；产品概览 - 主站与子站配比",
      "url": "https://www.inovance.com/portal/product/details?productId=488"
    },
    "tags": [
      "GS20",
      "IO-Link",
      "主站",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-065",
    "category": "io",
    "type": "fill",
    "difficulty": 1,
    "stem": "在汇川 GL20 系列官方型号表中，工艺模块 GL20-2SSI 的官方产品描述为「____ 路 SSI 通信」，工艺模块 GL20-2HC 的官方产品描述为「____ 路高速计数模块」。",
    "options": null,
    "answer": [
      "2",
      "2"
    ],
    "analysis": "GL20 系列官方型号表将 2SSI 与 2HC 归入「工艺模块」：GL20-2SSI 为 2 路 SSI 通信模块，用于直接接入 SSI 接口的绝对值编码器，把位置数据送进 IO 系统；GL20-2HC 为 2 路高速计数模块，用于高频脉冲计数与测速。两处空均填 2，因为型号中的首位数字即通道数——这也是 GL20 全系列（如 GL20-2CAN、GL20-2S485、GL20-4IOL）通用的命名规律，掌握后可反推大部分模块的通道数。采购与销售须注意：高速计数与 SSI 编码器输入属于工艺类模块，不能由普通数字量输入模块替代，做点数清单时要单独列出，避免与 DI 点数混算导致漏项。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页（规格参数 - GL20 系列型号表）",
      "chapter": "规格参数 / 工艺模块型号与产品描述",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "工艺模块",
      "高速计数",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-011",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 GL20 系列刀片式模块的产品页中，官方给出的耦合器最低扫描周期是？",
    "options": {
      "A": "1 ms",
      "B": "500 μs",
      "C": "125 μs",
      "D": "62.5 μs"
    },
    "answer": [
      "C"
    ],
    "analysis": "官网 GL20 产品页「性能优越，微秒级响应」一节写明：耦合器最低扫描周期可达 125 μs，生产中可以实现快速的信息获取，I/O 刷新可以实现与控制器的扫描周期同步。D 的 62.5 μs 容易被误选，那是官方给出的模拟量转换速度指标，属于模块内部转换时间，不是耦合器扫描周期；A、B 都远大于官方指标，说明没有抓住「微秒级」这一代产品的特征。做高速高精度方案时这两个指标要分别对应到总线周期和模拟量采样能力上。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 性能优越，微秒级响应",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "扫描周期",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-012",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 GL20 系列刀片式模块的产品页中，官方给出的模块机身厚度是？",
    "options": {
      "A": "12 mm",
      "B": "24 mm",
      "C": "30 mm",
      "D": "48 mm"
    },
    "answer": [
      "A"
    ],
    "analysis": "官网 GL20 产品页写明「GL20 系列模块薄至 12mm，刀片式设计更省电柜空间，适用体积要求更严苛的场景」，因此 12 mm 是官方指标。Hi30J 板载式模块的尺寸为 60mm×53mm×12mm，其产品页提到「较上代 GL20 产品体积减少 55%」，两个系列的 12mm 指的是不同维度（GL20 为模块宽度/厚度，Hi30J 为模块高度方向），现场沟通时不要混淆。B、C、D 均为偏大的常规模块尺寸，体现不出刀片式的空间优势。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 紧凑设计，免工具安装",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "结构安装",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-014",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 GR20T 系列卧式 IO 模块新增的「自适应 DI/O 功能」，其官方价值描述是？",
    "options": {
      "A": "自动识别所接传感器的 NPN/PNP 类型",
      "B": "通过功能拨码设置自适应模式，减少单独输入模块的配置，缩减产品型号数量",
      "C": "自动识别总线类型并在 EtherCAT 与 PROFINET 之间切换",
      "D": "自动调节模拟量滤波时间常数"
    },
    "answer": [
      "B"
    ],
    "analysis": "官网 GR20T 系列产品页写明：功能拨码简单设置自适应模式，更适应短生命周期设备，自适应 DI/DO 拨码节省单独输入模块，缩减 40% 产品型号，减少库存备件，采购更方便。A 所指的 NPN/PNP 识别属于数字量输入的漏/源型适配问题，不是该功能的官方描述；C 的总线自动切换在 IR 产品中并不存在，总线类型由所选耦合器型号决定；D 的模拟量滤波是模拟量模块的参数，与自适应 DI/O 无关。库存型号精简是 GR20T 面向快速交付场景的核心卖点。",
    "source": {
      "title": "汇川技术官网 GR20T 系列卧式IO模块 产品页",
      "chapter": "产品概览 - 自适应 DI/O 功能",
      "url": "https://www.inovance.com/portal/product/details?productId=558"
    },
    "tags": [
      "GR20T",
      "自适应",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-015",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 GL20 系列产品页，GL20 系列刀片式模块支持的现场总线协议包括哪些？",
    "options": {
      "A": "EtherCAT",
      "B": "PROFINET",
      "C": "EtherNet/IP",
      "D": "CANopen"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "GL20 系列在型号上按总线区分耦合器：GL20-RTU-ECT32 对应 EtherCAT、GL20-RTU-PN 对应 PROFINET、GL20-RTU-EIP 对应 EtherNet/IP，另外还有 GL20-4IOL 作为 IO-Link 主站通信模块，官方描述为「支持 EtherCAT、PROFINET 双重协议」并在型号与手册中体现 EtherNet/IP 支持。D 的 CANopen 不是 GL20 的耦合器协议：GL20-2CAN 是插在耦合器后面的 2 通道 CAN 通信扩展模块，用于带 CAN 设备，属于「模块级 CAN 接口」而非「总线耦合器协议」。区分「耦合器协议」与「扩展通信模块」是选型时的常见错误点。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册",
      "chapter": "GL20 通信接口模块型号与协议说明",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "总线协议",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-016",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 Hi80 系列产品页，该系列高性能分布式 IO 模块具备下列哪些特性？",
    "options": {
      "A": "支持单机、环网接入以及多种冗余功能",
      "B": "全系列支持热插拔设计",
      "C": "通道级故障诊断，可精准定位故障通道",
      "D": "全系列模块机身宽度统一为 12mm，不支持背板扩展"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "官网 Hi80 产品页明确列出：「模块支持单机、环网接入、多种冗余功能」；「全系列支持热插拔设计」；「通道级故障诊断，精准定位故障通道，快速诊断，快速处理」。D 明显错误：12mm 是 GL20 刀片式模块的机身厚度指标，而 Hi80 是以背板模块（Hi80-8EM/11EM/14EM/18EM 背板模块）加功能模块构成的系统，官方配套文档中专门有背板模块设备手册，说明它恰恰支持背板扩展。A、B、C 都是面向大型冗余产线（冶金、化工、电力等）连续生产不可长时间停机的关键能力。",
    "source": {
      "title": "汇川技术官网 Hi80 系列高性能分布式IO模块 产品页",
      "chapter": "产品概览 - 强诊断，易维护 / 极端环境依旧可靠",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "Hi80",
      "冗余",
      "诊断"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-017",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 Hi80 系列产品页，该系列面向极端环境给出的可靠性指标包括哪些？",
    "options": {
      "A": "宽温区：满足 -40℃ ~ +70℃ 使用场景",
      "B": "强防腐：高标准三防漆设计，满足 3C4/GX 级防护需求",
      "C": "高海拔：工作海拔最高可达 5000m",
      "D": "高强度：2g 超强抗震，25g 抗冲击"
    },
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "analysis": "本题四项均为官网 Hi80 产品页「极端环境依旧可靠」一节的原文指标：宽温区 -40℃~+70℃、高标准三防漆满足 3C4/GX 级防护需求、工作海拔最高可达 5000m、2g 超强抗震与 25g 抗冲击。这些指标是 Hi80 面向冶金、矿山、港口、化工、电力、水利等户外与恶劣工况场景的核心论据。需要提醒的是，这些是 Hi80 系列（基于车规级高可靠标准、遵循 IEC 规范打造）的指标，不能直接套用给 GL20、GR20 等其它 IO 系列，报价与技术协议中引用环境指标必须按系列区分。",
    "source": {
      "title": "汇川技术官网 Hi80 系列高性能分布式IO模块 产品页",
      "chapter": "产品概览 - 极端环境依旧可靠",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "Hi80",
      "环境适应性",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-018",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 GL20 系列产品页，GL20 系列刀片式模块可提供的模块类型包括哪些？",
    "options": {
      "A": "模拟量模块",
      "B": "温度量模块",
      "C": "通信模块",
      "D": "安全功能模块（达到 SIL 3）"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "官网 GL20 产品页写明「类型丰富：支持多种点数、类型的 IO 模块，模拟量、温度量、通讯量等各种类型」，其官方手册清单中也可查到 GL20-4AD/GL20-8ADI/GL20-8ADV 模拟量输入、GL20-4DA/GL20-8DAI/GL20-8DAV 模拟量输出、GL20-4PT/GL20-4TC 温度检测、GL20-2CAN/GL20-2S485/GL20-2SCOM/GL20-4IOL 通信模块等。D 错误：达到 PL e/Cat.4/SIL 3 最高安全等级的是 Hi50 系列分布式安全 IO 模块，GL20 是通用型刀片式 IO，官方资料中不存在 GL20 的安全功能模块。把别的系列才有的安全特性写进通用 IO 方案是投标中的典型风险点。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 类型丰富 / 资料下载",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "模块类型",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-019",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 GL10/GR10 系列产品页，GL10/GR10 系列扩展模块涵盖的产品类型包括哪些？",
    "options": {
      "A": "数字量 IO 模块、模拟量 IO 模块、温度模块",
      "B": "CAN/EtherCAT 通信模块、EtherCAT 从站分支器",
      "C": "远程高速计数模块、远程脉冲定位模块、探针模块",
      "D": "安全继电器模块、安全门监控模块"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "官网 GL10/GR10 产品页明确：GL10/GR10 系列扩展模块分为分布式扩展模块与集中式扩展模块，涵盖数字量 IO 模块、模拟量 IO 模块、温度模块、CAN/EtherCAT 通信模块、远程高速计数模块、远程脉冲定位模块、探针模块、EtherCAT 从站分支器等丰富的产品类型。D 错误：安全继电器与安全门监控属于独立的安全控制产品，汇川 IO 系统中承担功能安全职责的是 Hi50 系列分布式安全 IO 模块（PL e/Cat.4/SIL 3），GL10/GR10 是通用扩展模块。探针模块与远程脉冲定位模块是 GL10/GR10 在运动控制类应用中的特色能力，常被忽略。",
    "source": {
      "title": "汇川技术官网 GL10/GR10 系列扩展模块 产品页",
      "chapter": "产品概览 - 种类丰富，满足用户多种需求",
      "url": "https://www.inovance.com/portal/product/details?productId=492"
    },
    "tags": [
      "GL10",
      "GR10",
      "模块类型"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-023",
    "category": "io",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 Hi30J 系列板载式 IO 模块采用 EBUS 本地通信总线，每个模块都是独立的 EtherCAT 节点并支持 DC 同步。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。官网 Hi30J 产品页「高性能，极速响应」一节写明：一网到底，极速响应，EBUS 本地通信总线，每个模块都是独立的 EtherCAT 节点，支持 DC 同步，可在一个通信周期内完成本地模块数据刷新。这意味着板载式模块在设备内部也能保持与主站同步的高响应特性，而不是退化成慢速的本地总线扩展。现场调试时要注意 DC 同步相关的时钟配置与从站拓扑，节点数量多时需核对主站的从站容量与周期设置。",
    "source": {
      "title": "汇川技术官网 Hi30J 系列板载式IO模块 产品页",
      "chapter": "产品概览 - 高性能，极速响应",
      "url": "https://www.inovance.com/portal/product/details?productId=887"
    },
    "tags": [
      "Hi30J",
      "EtherCAT",
      "通信组网"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-024",
    "category": "io",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 GL20 系列模块的连接器采用镀金工艺，官方给出的设计寿命为十年。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。官网 GL20 产品页「更稳定、可靠的设计」一节写明：模块连接器采用夹紧式设计，相比贴片式提高 1 倍稳定性；连接器采用镀金工艺，手摸汗渍不腐蚀连接器，十年设计寿命力保产品长时间稳定运行。结合模块经过更严格的 EMC 高低温测试（比行业标准更可靠），这些是 GL20 在长周期连续生产设备上替代上一代产品的论据。需要注意的是「十年设计寿命」指连接器与模块的设计寿命指标，不代表可以免维护，电柜内的粉尘、油雾与温度仍需按规范控制。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 更稳定、可靠的设计",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "维护保养"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-026",
    "category": "io",
    "type": "judge",
    "difficulty": 2,
    "stem": "汇川 GL20 系列与 GL20S 系列是同一个产品系列的不同叫法，两者型号可以互换使用。",
    "options": null,
    "answer": [
      "F"
    ],
    "analysis": "错误。GL20 与 GL20S 在官方资料中是两个并行的模块体系：GL20 系列包含 GL20-RTU-ECT32/GL20-RTU-PN/GL20-RTU-EIP 耦合器、GL20-1600END 数字量输入、GL20-0016ETP 数字量输出、GL20-4AD/GL20-8ADI 模拟量输入、GL20-4PT/GL20-4TC 温度检测、GL20-2CAN/GL20-2S485/GL20-2SCOM/GL20-4IOL 通信模块等；GL20S 系列则另有 GL20S-RTU-ECT32/GL20S-RTU-EIP/GL20S-RTU-PN 耦合器与 GL20S-0004ER 通道隔离型数字量输出、GL20S-0004ETP-2A 大电流数字量输出等特色模块。两套型号的手册各自独立，备件与技术协议中必须写清完整型号，混用会导致订货与备件错误，现场更换前应核对铭牌与手册。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册 / GL20S 系列模块用户手册",
      "chapter": "资料下载 - 产品手册",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "GL20S",
      "选型"
    ],
    "roles": [
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "IO-027",
    "category": "io",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川 GL20 系列刀片式模块在「快速安装与维护」方面相比上一代 GL10 的官方改进点，以及这些改进对电柜装配和现场维护的实际价值。",
    "options": null,
    "answer": "参考答案要点：\n1) 结构形态：刀片式设计，模块薄至 12mm，体积小巧更省电柜空间，适用体积要求更严苛的场景。\n2) 安装方式：垂直拔插，端子可拆卸，安装、维护效率较上一代提升 3 倍。\n3) 接线方式：采用大口径 PUSH IN 端子，不同端子只需轻轻推入即可实现接线，接线时间节省 66%，并支持免工具接线、换线。\n4) 连接可靠性：模块连接器采用夹紧式设计，相比贴片式提高 1 倍稳定性；连接器采用镀金工艺，手摸汗渍不腐蚀连接器，十年设计寿命。\n5) 实际价值：电柜装配工时与线缆整理工作量下降，产线改造时模块更换速度快、停机时间短；免工具维护降低了对现场工具与人员技能的依赖，备件更换更便捷。",
    "analysis": "本题考察对 GL20 产品价值的结构化表达，而不是背参数。回答时容易只答「12mm 薄」「PUSH IN 端子」而漏掉「垂直拔插、端子可拆卸、效率提升 3 倍」与「夹紧式连接器、镀金工艺、十年设计寿命」这两组信息。前者对应装配与维护效率，后者对应长期可靠性，两者共同构成替换上一代 GL10 的完整理由。向客户讲价值时应把「工时节省」与「停机时间缩短」量化表达，避免只罗列技术名词。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 紧凑设计，免工具安装 / 更稳定、可靠的设计",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "接线安装",
      "维护保养"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-028",
    "category": "io",
    "type": "short",
    "difficulty": 2,
    "stem": "请说明汇川 Hi80 系列高性能分布式 IO 模块的产品定位与适用行业，并至少列出三项官方给出的可靠性/环境指标。",
    "options": null,
    "answer": "参考答案要点：\n1) 定位：汇川基于多年 IO 模块开发积累，按照车规级高可靠标准、遵循 IEC 规范打造的、适配大型冗余控制系统的 IO 模块，具备强兼容、高稳定、极致可靠等特性。\n2) 系统能力：模块支持单机、环网接入、多种冗余功能；全系列支持热插拔设计；通道级故障诊断，可精准定位故障通道，快速诊断、快速处理。\n3) 系统组网：搭配 EVO800 系列大型 PLC 和配套交换机进行灵活组网，软件编程依托全场景智能化的 iFA Evolution（驭沃）平台。\n4) 适用行业：冶金、汽车、市政、水利、石油、矿山、港口、化工、电力等大型产线，助力产线改造与数智化转型。\n5) 环境指标（任答三项）：宽温区满足 -40℃~+70℃；高标准三防漆设计，满足 3C4/GX 级防护需求；工作海拔最高可达 5000m；2g 超强抗震、25g 抗冲击。",
    "analysis": "本题用于检验销售与工程师能否把 Hi80 讲清楚。常见问题是把 Hi80 与 GL20 混为一谈：GL20 是柜内刀片式扩展模块，面向中小型设备与常规产线；Hi80 面向的是不可长时间停机的大型冗余产线，核心差异在冗余（单机/环网/多种冗余）、热插拔与通道级诊断，以及 -40℃~+70℃、3C4/GX 三防、5000m 海拔、2g/25g 抗振抗冲击这类极端环境指标。答题时若只答「分布式 IO」而不点出冗余与热插拔，就无法体现选型差异。",
    "source": {
      "title": "汇川技术官网 Hi80 系列高性能分布式IO模块 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "Hi80",
      "方案应用",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-031",
    "category": "io",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某汽车零部件加工线原有一套以中型 PLC 为核心的控制系统，标准 IO 点位约 400 点。客户因新增安全门、安全光幕、急停回路等需求，提出把安全信号从原标准系统中剥离出来独立处理，同时要求不能因为引入安全系统而降低原有标准系统的安全标准、也不能大面积停产改造。请给出 IO 选型思路与实施建议。",
    "options": null,
    "answer": "参考答案要点：\n1) 选型结论：安全信号部分优先选用汇川 Hi50 系列分布式安全 IO 模块。官方定位是分布式安全 IO，最高安全等级可达 PL e/Cat.4/SIL 3，符合 IEC 61508、IEC 62061、ISO 13849 等国际标准，且是国内首家通过 IEC 61131-6 国际标准功能安全认证的工业控制系统。\n2) 满足「不降低原有标准系统安全标准」的诉求：官网「快速匹配标准系统」一节明确，新增的安全系统不会对现有标准系统带来冲击，且不降低安全标准，兼容主流机器人和安全传感器，符合客户分步改造的要求。\n3) 架构建议：安全信号集中到 Hi50 安全 IO，通过安全通信/安全控制器处理急停、安全门、光幕等回路；原有 400 点标准 IO 保持原系统不变或按需扩展（若为 H3U/AM400/AM600 平台可沿用 GL10/GR10，若新建可考虑 GL20）。\n4) 工程要点：安全信号规模较大时利用 Hi50 支持 32 模块扩展、全信号类型采集与热插拔安全温度模块的能力；日常运维方面，故障诊断信息集成在控制系统中、安全数据记录与日志信息详尽，便于追溯；部署形态上可结合「分布安全、集成安全的多种灵活产品形态」就近安装。\n5) 认证与文档：向客户提供 TÜV SÜD 功能安全认证证书（官方公布 Hi50 获 TÜV SÜD 颁发的功能安全认证证书，并获 2025 红点国际设计大奖），用于安全评估与验收资料。\n6) 实施节奏：按区域分批把安全回路切换到 Hi50，利用其与主流安全传感器、机器人的兼容性，减少对现有产线的扰动。",
    "analysis": "本题的关键是识别客户诉求中的两个约束——「不降低原标准系统安全标准」与「不大面积停产」。前者对应 Hi50 作为独立安全系统与标准系统并行、不冲击现有安全标准的官方定位；后者对应分批改造与就近分布式安装的形态优势。容易犯的错误是直接推荐用普通 IO 加安全继电器的拼凑方案，既达不到 PL e/Cat.4/SIL 3 的等级，也难以提供完整的安全数据记录与诊断信息。另需注意在方案中引用 TÜV SÜD 认证与 IEC 61131-6 认证作为验收支撑材料，这是同类改造项目中最常被客户追问的点。",
    "source": {
      "title": "汇川技术官网 Hi50 系列分布式安全IO模块 产品页",
      "chapter": "产品概览 - 高安全保护级 / 快速匹配标准系统 / 部署灵活便捷 / 简便日常运维",
      "url": "https://www.inovance.com/portal/product/details?productId=801"
    },
    "tags": [
      "Hi50",
      "功能安全",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-032",
    "category": "io",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某 3C 电子组装设备要求 IO 系统具备高速响应能力，用于配合高节拍动作控制，且电柜空间紧张、现场希望减少接线工时。客户当前控制平台为 AM500 系列。请给出 IO 选型建议，并说明支撑该建议的官方性能指标与结构特点。",
    "options": null,
    "answer": "参考答案要点：\n1) 选型建议一（推荐用于高节拍）：GR20T 系列卧式 IO 模块。官网明确「搭配 AM500 的高节拍控制解决方案，实现 3T 周期通讯 IO 高速响应，提升设备产能 30%」，与客户 AM500 平台直接匹配；同时它把耦合器与 IO 模块一体化，横竖两种背部安装设计，柜内仅需名片宽度即可，采取一网到底形式，适合小型电柜。\n2) 选型建议二（柜内密集安装、多协议可选）：GL20 系列刀片式模块。官方性能指标：内部总线速度可达 100Mbps，IO 开断时间 <100us，模拟量转换速度 <62.5us，相比上一代 GL10 性能提升 10 倍以上；耦合器最低扫描周期可达 125us，I/O 刷新可与控制器扫描周期同步。结构上模块薄至 12mm，垂直拔插、端子可拆卸，安装维护效率较上一代提升 3 倍，大口径 PUSH IN 端子接线时间节省 66%，支持 EtherCAT、PROFINET 等协议。\n3) 减少接线工时的支撑点：GL20 的免工具 PUSH IN 接线与可拆卸端子；GR20T 的 3pin 一组接线、ECON 接线模式，可取消小型电柜中等电端子排位置空间和接线时间。\n4) 若设备为短生命周期、多机型共线：可关注 GR20T 的自适应 DI/O 功能——功能拨码简单设置自适应模式，自适应 DI/DO 拨码节省单独输入模块，缩减 40% 产品型号，减少库存备件。\n5) 需向客户确认：实际 IO 点数与类型（DI/DO/AI/温度）、是否需要 EtherCAT 或 PROFINET 耦合器、电柜可分配宽度、洁净车间或柜外就近安装要求（GR20T 支持防护罩订制与洁净车间柜外安装）。",
    "analysis": "本题有两个明确的抓手：「高节拍」与「AM500」，官网上唯一直接给出 AM500 搭配性能数据的是 GR20T（3T 周期通讯 IO 高速响应、提升设备产能 30%），因此把 GR20T 作为首选是本题的关键判断。若答题者只答 GL20 而忽略 GR20T 与 AM500 的官方组合，说明没有把官网的性能数据与客户平台对应起来。另一方面，GL20 的微秒级指标（内部总线 100Mbps、IO 开断 <100us、模拟量转换 <62.5us、耦合器扫描周期 125us）应准确引用，常被误记为「毫秒级」。此外不要遗漏减少接线工时的两类官方能力：PUSH IN 免工具接线与 GR20T 的 3pin 一组/ECON 接线。",
    "source": {
      "title": "汇川技术官网 GR20T 系列卧式IO模块 产品页；GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 高性能 / 自适应 DI/O 功能；性能优越，微秒级响应",
      "url": "https://www.inovance.com/portal/product/details?productId=558"
    },
    "tags": [
      "GR20T",
      "GL20",
      "高节拍",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-037",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "某设备采用汇川 GS20 系列柜外高防护 IO 作为 IO-Link 主站，其官方给出的防护等级与现场安装方式是？",
    "options": {
      "A": "IP67 防护等级，无需控制柜即可现场安装",
      "B": "IP20 防护等级，必须安装在电柜内",
      "C": "IP54 防护等级，需加装防护箱后户外使用",
      "D": "IP65 防护等级，仅可安装在电气室内"
    },
    "answer": [
      "A"
    ],
    "analysis": "汇川官方对 GS20 系列的描述是「新一代高防护 IO，其高达 IP67 的防护等级，可无需控制柜现场安装」，并采用结构紧凑的工业级金属全密封设计，具备很强的抗振动和抗冲击能力，可直达现场层。B 的 IP20 是常规柜内模块的典型防护水平，与 GS20 的定位完全不符；C 的 IP54 与 D 的 IP65 都低于官方指标，且「需加装防护箱」「仅可安装在电气室」与「无需控制柜现场安装」的官方结论相反。柜外就近安装带来的直接收益是节省柜内空间与柜到现场的线缆成本，这是 GS20 方案的核心卖点。",
    "source": {
      "title": "汇川技术官网 GS20 系列柜外高防护 I/O 模块 产品页",
      "chapter": "产品概览 / External I/O Solution for Lifetime Use",
      "url": "https://www.inovance.com/global/content/details_816_556243.html"
    },
    "tags": [
      "GS20",
      "防护等级",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-038",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "汇川 Hi30J 系列板载式 IO 模块与上一代 GL20 产品相比，官方公布的单模块体积变化是？",
    "options": {
      "A": "较上代 GL20 产品体积减少 55%",
      "B": "较上代 GL20 产品体积减少 15%",
      "C": "较上代 GL20 产品体积增加 30%",
      "D": "与上代 GL20 产品体积完全相同"
    },
    "answer": [
      "A"
    ],
    "analysis": "Hi30J 官方产品页明确：精巧体积为 60mm×53mm×12mm，较上代 GL20 产品体积减少 55%，安装排布更灵活；整套组合小体积解决方案较传统方案还可节省 81% 机柜空间。B 把减少比例说小了一个量级，C 的方向完全相反，D 则无视了两代产品在体积上的差异。需要提醒的是，Hi30J 与 GL20 的「12mm」含义不同——GL20 的 12mm 是刀片式模块的机身厚度指标，Hi30J 的 12mm 是 60mm×53mm×12mm 三维尺寸中的一个方向，向客户介绍时不要混为一谈。",
    "source": {
      "title": "汇川技术官网 Hi30J 系列板载式 IO 模块 产品页",
      "chapter": "产品概览 - 小体积，节省空间",
      "url": "https://www.inovance.com/portal/product/details?productId=887"
    },
    "tags": [
      "Hi30J",
      "结构安装",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-039",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "为汇川 GL20 刀片式 IO 系统选择通信接口（耦合器）模块时，关于各耦合器最多可扩展的模块数量，下列哪一项描述是正确的？",
    "options": {
      "A": "GL20-RTU-ECT32（EtherCAT）与 GL20-RTU-PN（PROFINET）最多均可扩展 32 个模块，GL20-RTU-EIP（EtherNet/IP）最多可扩展 16 个模块",
      "B": "三种耦合器最多都可以扩展 32 个模块，与总线类型无关",
      "C": "三种耦合器最多都只能扩展 16 个模块，与总线类型无关",
      "D": "GL20-RTU-ECT32 最多可扩展 64 个模块，PROFINET 与 EtherNet/IP 耦合器不限制模块数量"
    },
    "answer": [
      "A"
    ],
    "analysis": "GL20 官方型号表中的描述是：GL20-RTU-ECT32 为 EtherCAT 通信接口模块、最多可扩展 32 个模块；GL20-RTU-PN 为 PROFINET 通信接口模块、最多可扩展 32 个模块；GL20-RTU-EIP 为 EtherNet/IP 通信接口模块、最多可扩展 16 个模块。B、C 都把带载能力简化成与总线无关的固定值，忽略了 EtherNet/IP 耦合器的 16 模块上限，做方案时容易高估点数；D 的 64 模块与「不限制」在官方资料中都没有依据。按模块点数折算总 IO 点数时，必须先区分耦合器型号，再核算是否需要增加耦合器分段。",
    "source": {
      "title": "汇川技术 GL20 系列刀片式扩展模块 产品技术信息选型参考（GL20 系列型号表）",
      "chapter": "GL20 通信接口模块型号与可扩展模块数量",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "耦合器",
      "选型",
      "通信组网"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-040",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "向客户介绍汇川 IO-Link 方案时，关于 GS20 主站与 IO-Link 子站之间的标准配比关系，下列描述正确的是？",
    "options": {
      "A": "一个 GS20 IO-Link 主站最多可连接 8 个 IO-Link 子站，超出后需增加主站",
      "B": "一个 GS20 IO-Link 主站只能连接 1 个 IO-Link 子站，属于点对点专用连接",
      "C": "一个 GS20 IO-Link 主站最多可连接 32 个 IO-Link 子站，与 GL20 耦合器带载能力相同",
      "D": "GS20 主站不限制所连子站数量，仅受 24V 电源容量限制"
    },
    "answer": [
      "A"
    ],
    "analysis": "汇川官网对 GR20 系列的说明是：IO-Link 的 GR20 子站需要配合 GS20 IO-Link 主站使用，一个 IO-Link 主站可连接 8 个 IO-Link 子站；官方选型资料中 GS20-ECT-8L、GS20-PN-8L、GS20-EIP-8L 三款主站的描述均为「IO-Link 主站，可连接 8 个子站」。B 把 IO-Link 主站与子站的关系误当成单个点对点端口；C 把 GL20 耦合器最多 32 个扩展模块的能力错套到 IO-Link 主站上；D 的「不限制」没有任何官方依据。报价与图纸设计时必须按 8 个子站一组拆分配置主站数量，这是最容易漏项的地方。",
    "source": {
      "title": "汇川技术官网 GR20 系列分布式 IO 产品页 / GS20 系列柜外高防护 I/O 模块型号表",
      "chapter": "产品概览 / GS20 系列 IO-Link 主站型号与子站配比",
      "url": "https://www.inovance.com/portal/product/details?productId=490"
    },
    "tags": [
      "GS20",
      "IO-Link",
      "选型",
      "方案应用"
    ],
    "roles": [
      "sales",
      "purchase",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-043",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "某大型连续生产产线选用汇川 Hi80 系列高性能分布式 IO 构建冗余控制系统，根据官方产品页，下列描述正确的有哪些？",
    "options": {
      "A": "模块支持单机、环网接入以及多种冗余功能",
      "B": "具备通道级故障诊断，可精准定位故障通道，快速诊断、快速处理",
      "C": "全系列支持热插拔设计，便于在线更换故障模块",
      "D": "以 12mm 机身厚度与免工具 PUSH IN 接线为主要空间优势，不采用背板模块形态"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均为官网 Hi80 产品页原文，也正是该系列面向大型冗余控制系统、支撑不间断生产的三项核心能力。D 把 GL20 刀片式模块的特征（薄至 12mm、免工具 PUSH IN 端子）错安到 Hi80 上：Hi80 是由背板模块与功能模块构成的系统型 IO，官方配套资料中专门列有背板模块设备手册，说明它恰恰依赖背板扩展而非刀片式拼装。选型文件里若把不同系列的结构与接线特征混写，会在技术协议评审阶段被客户直接质疑。",
    "source": {
      "title": "汇川技术官网 Hi80 系列高性能分布式 IO 模块 产品页",
      "chapter": "产品概览 - 强诊断，易维护 / 配套 EVO800 系列大型 PLC",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "Hi80",
      "冗余",
      "诊断",
      "热插拔"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-044",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官方资料，关于 GS20 高防护 IO-Link 主站及其子站方案，下列描述正确的有哪些？",
    "options": {
      "A": "只需一根三芯非屏蔽线即可完成接线，节省约 50% 接线与维护时间",
      "B": "支持配置参数自动下发与状态监视，可减少现场维护工作量与停机时间",
      "C": "采用工业级金属全密封设计，具备很强的抗振动和抗冲击能力，适用于硅晶、锂电、医药、汽车、物流、冶金等行业",
      "D": "GR20 或 GS20 子站可独立直接接入 PLC 的以太网口，无需额外配置 IO-Link 主站"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均来自汇川官方对 GS20 的描述：采用 IO-Link 标准化技术，只需要一根三芯非屏蔽线即可完成接线，节省 50% 接线与维护时间；配置参数自动下发与状态监视等功能助力客户节省维护成本、缩短停机时间；结构紧凑的工业级金属全密封设计适用于恶劣工况，抗振动抗冲击能力强，广泛应用于硅晶、锂电、医药、汽车、物流、冶金等行业。D 与官方对 GR20 系列的说明相反：IO-Link 子站必须配合 GS20 主站使用，一个主站可连接 8 个子站，子站本身不能直接挂在 PLC 以太网口上。方案清单里漏掉主站是最常见的配置错误。",
    "source": {
      "title": "汇川技术官网 GS20 系列柜外高防护 I/O 模块 产品页 / GR20 系列分布式 IO 产品页",
      "chapter": "产品概览 - 高效接线安装 / 高效工程 / 高效诊断",
      "url": "https://www.inovance.com/global/content/details_816_556243.html"
    },
    "tags": [
      "GS20",
      "IO-Link",
      "接线安装",
      "诊断"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-046",
    "category": "io",
    "type": "multi",
    "difficulty": 2,
    "stem": "根据汇川官网 GR20 系列产品页，下列关于 GR20 在柜外安装与端子排接线方面的描述正确的有哪些？",
    "options": {
      "A": "采用三线一组、端子排接线形式，传感器接入无需并线",
      "B": "可通过选择 GR20-FCZ 配件实现柜外安装，从而显示直观的诊断信息",
      "C": "IO-Link 的 GR20 子站需要配合 GS20 IO-Link 主站使用，一个主站可连接 8 个子站",
      "D": "采用远程端子台形式，但端子排仅支持 PNP 型传感器，NPN 型必须更换模块"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 三项都是官网 GR20 产品页的原文表述：三线一组、端子排接线形式、传感器接入无需并线；可通过选择 GR20-FCZ 配件实现柜外安装并显示直观的诊断信息；IO-Link 的 GR20 子站需配合 GS20 IO-Link 主站使用、一个主站可连接 8 个子站。D 的错误在于无依据地限定传感器类型：官方资料强调的是「采用远程端子台形式，提升用户的接线、安装体验」与三线一组无需并线，并未给出「端子排仅支持 PNP、NPN 必须更换模块」的结论，用未核实的限制条件误导客户会影响其选型判断。",
    "source": {
      "title": "汇川技术官网 GR20 系列分布式 IO 产品页",
      "chapter": "产品概览 - 高效端子排接线、安装 / 可选配可拆卸式外壳",
      "url": "https://www.inovance.com/portal/product/details?productId=490"
    },
    "tags": [
      "GR20",
      "接线安装",
      "IO-Link"
    ],
    "roles": [
      "sales",
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-049",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "某产线数字量输入点偶发误动作、模拟量输入通道读数持续漂移。现场查得：信号电缆未采用屏蔽双绞线，屏蔽层为单端接地，且信号线与变频器输出电缆捆扎在同一线槽内敷设。关于该现象的原因判断，下列哪一项是正确的？",
    "options": {
      "A": "上述三项都可能引起干扰，从而造成数字量输入误动作与模拟量通道漂移，应优先从信号电缆选型、分槽敷设与屏蔽接地三方面整改",
      "B": "只有未采用屏蔽双绞线会导致问题，屏蔽层单端接地与信号线走同一线槽均符合规范，无需整改",
      "C": "屏蔽层必须两端接地才能抑制干扰，单端接地是本次故障的直接原因，其余两项与干扰无关",
      "D": "模拟量通道漂移属于模块精度问题，与电缆选型、敷设和接地方式无关，更换模块即可解决"
    },
    "answer": [
      "A"
    ],
    "analysis": "模拟量与数字量通道受干扰的三大常见来源正是接线与电磁兼容问题：一是未采用屏蔽双绞线，失去对磁场耦合的抑制能力；二是屏蔽层处理不当，应按手册要求单端接地，两端接地会因电位差在屏蔽层形成环流反而引入干扰，因此 B 把单端接地说成没有问题的同时 C 又反过来要求两端接地，两者都站不住；三是信号线与变频器输出电缆捆扎敷设，变频器输出的高 dv/dt 共模干扰会进入信号回路，B 认为这样敷设符合规范是错误的。D 的结论最危险：漂移在多数场合是 EMC 与接地问题，直接更换模块往往短期「好转」后又复现。正确顺序是先整改电缆选型、分槽敷设与屏蔽接地，再核对模块滤波时间常数与量程组态。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册 / GL20-4AD 模拟量输入模块设备手册",
      "chapter": "安装与接线要求 / 模拟量输入接线与抗干扰措施",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "模拟量",
      "故障排查",
      "接线安装"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-050",
    "category": "io",
    "type": "single",
    "difficulty": 2,
    "stem": "某 EtherCAT 远程 IO 从站在运行中偶发掉站，总线诊断中可记录到间歇性通信错误，但每次重新插拔线缆后又能恢复。下列哪一项是该类故障的首选排查方向？",
    "options": {
      "A": "优先排查物理层与拓扑末端：网线接头压接与受力情况、线缆走线与屏蔽接地、末端模块是否按要求安装到位，并利用总线错误计数定位发生的时刻与规律",
      "B": "直接更换该从站 IO 模块，若仍掉站则更换耦合器模块",
      "C": "降低上位控制器的程序扫描周期，通过缩短扫描时间来掩盖偶发通信错误",
      "D": "在组态中把该从站的看门狗与错误响应时间调到最大，使掉站不再被上报"
    },
    "answer": [
      "A"
    ],
    "analysis": "总线型从站偶发掉站且「插拔后恢复」，几乎都指向物理层与拓扑问题：水晶头压接不牢会随振动与温度变化出现时通时断；线缆与动力线同槽敷设、屏蔽接地不规范会把干扰耦合进通信回路；GL20 系列在末位需按要求安装末端（END）模块，官方型号表中列有 GL20-1600END 等 END 结尾模块，缺装会使链路末端处于不良状态，在干扰下更易误码掉站。B 属于用更换代替诊断，物理层隐患未除时换件不能解决问题；C 与 D 都是掩盖现象——EtherCAT 具备 CRC 校验与错误计数能力，正确的做法是用错误计数与发生时刻做关联分析（附近大功率设备启停、机械振动、温度变化），而不是调大看门狗或降低扫描周期把报警压下去。",
    "source": {
      "title": "汇川技术 GL20 系列模块系统手册 / GL20 系列型号表",
      "chapter": "系统安装与接线 / 模块排列与末端模块要求",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "EtherCAT",
      "故障排查",
      "通信组网"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-051",
    "category": "io",
    "type": "short",
    "difficulty": 2,
    "stem": "请列举汇川 IO 系统中可用于「柜外安装」的产品方案，并分别说明各方案的官方定位、总线接入方式与典型应用场景，以及它们对电柜空间与接线工时的价值。",
    "options": null,
    "answer": "参考答案要点：\n1) GR20 系列：官方定位为「主打经济型的柜外 IO」，采用远程端子台形式、三线一组端子排接线、传感器接入无需并线；可通过选择 GR20-FCZ 配件实现柜外安装并显示直观的诊断信息；IO-Link 的 GR20 子站需配合 GS20 IO-Link 主站使用，一个主站可连接 8 个子站。\n2) GS20 系列（IO-Link 主站/高防护 IO）：官方给出高达 IP67 的防护等级，无需控制柜即可现场安装；采用 IO-Link 标准化技术，只需一根三芯非屏蔽线即可完成接线，节省约 50% 接线与维护时间；配置参数自动下发与状态监视可缩短停机时间与换产时间；型号含 GS20-ECT-8L、GS20-PN-8L、GS20-EIP-8L（分别对应 EtherCAT、PROFINET、EtherNet/IP）。\n3) GR20T 系列：卧式 IO，将耦合器与 IO 模块一体化，横竖两种背部安装设计；防护罩设计、防尘罩保护与强 EMC 指标，支持洁净车间柜外安装与气动装置侧就近安装，缩短气动动作时间、提升 CT 节拍；3pin 一组接线可取消小型电柜中等电端子排的位置空间与接线时间。\n4) Hi30J 系列：PCB 板载式远程 IO 扩展模块，体积 60mm×53mm×12mm，较上代 GL20 产品体积减少 55%；可通过定制化底板集成各类接口，配合预制化线缆减少接线投入，适合把 IO 做进设备内部的批量生产场景。\n5) Hi80 系列：面向大型冗余控制系统的高性能分布式 IO，搭配 EVO800 系列大型 PLC 与配套交换机灵活组网，支持单机、环网接入与多种冗余功能、全系列热插拔，宽温区 -40℃~+70℃，适合户外与恶劣工况的连续生产产线。\n6) Hi50 系列：分布式安全 IO，最高 PL e/Cat.4/SIL 3，-20℃~55℃稳定运行，用于安全回路独立于标准系统的场景。\n7) 共同价值：柜外就近安装可省去柜内端子与柜到现场的集中布线，缩短线缆长度与施工工时，并让诊断信息在现场可见；电柜空间上，GL20 刀片式模块薄至 12mm、Hi30J 整套组合可节省 81% 机柜空间，是柜内空间的另一条优化路径。",
    "analysis": "本题考察能否把「柜外安装」这一需求拆解到具体系列，而不是笼统回答「用远程 IO」。常见问题有三类：一是把 GS20 只说成 IO-Link 主站，遗漏其 IP67、无需控制柜现场安装、三芯非屏蔽线节省 50% 接线维护时间的官方定位；二是漏掉 GR20 柜外安装必须选配 GR20-FCZ 配件、以及 GR20 子站必须配 GS20 主站（8 个子站一组）这两个配置前提；三是把 GR20T 的防护罩与洁净车间安装、Hi30J 的板载集成混为一谈。答题时按「系列 → 定位 → 总线接入 → 场景 → 价值」组织，才能体现方案级思路。",
    "source": {
      "title": "汇川技术官网 GR20 系列分布式 IO / GS20 系列柜外高防护 I/O / GR20T 系列卧式 IO / Hi30J 系列板载式 IO 产品页",
      "chapter": "产品概览 - 柜外安装方案与产品定位",
      "url": "https://www.inovance.com/portal/product/details?productId=490"
    },
    "tags": [
      "GR20",
      "GS20",
      "柜外安装",
      "选型"
    ],
    "roles": [
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-054",
    "category": "io",
    "type": "scenario",
    "difficulty": 2,
    "stem": "某新能源电池 PACK 产线新增一批工位，需要在设备旁就近安装 IO。现场条件为：产线主控采用汇川 EtherCAT 总线架构；新增工位共 24 个，每个工位约 16 点数字量输入输出，点位集中在工位附近的工装夹具与气动装置侧；车间湿度与粉尘较大、无独立电柜空间；客户要求缩短接线工时、后期换型时维护方便，并希望故障能在现场直观看到。请给出 IO 组网方案（含主站数量与子站相关布线），并说明理由与需要向客户确认的事项。",
    "options": null,
    "answer": "参考答案要点：\n1) 方案主线：采用「GS20 IO-Link 主站 + IO-Link 子站」的柜外高防护方案。主站选用 EtherCAT 型 GS20-ECT-8L，直接挂在产线的 EtherCAT 总线上，与主控架构一致；子站选择 16 路数字量可配置 DIO 的 IO-Link 子站（官方型号含 GS20-16EMNL/GS20-16EMPL 等铝合金外壳型，以及塑料外壳的 -S 型；GR20-16EMNL/GR20-16EMPL 为同类 GR20 子站），单工位 16 点的规模与一个子站的通道数正好匹配。\n2) 主站数量核算：官方明确一个 IO-Link 主站可连接 8 个 IO-Link 子站，24 个工位需要 24 个子站，因此至少需要 3 个 GS20-ECT-8L 主站（3×8=24）。主站可分布在产线不同区段就近安装，减少主站到子站的线缆长度；若后续工位还会增加，应预留主站端口余量或再加主站。\n3) 安装与防护：GS20 官方给出高达 IP67 的防护等级，可无需控制柜现场安装，正对「无独立电柜空间、湿度粉尘较大」的现场条件；采用结构紧凑的工业级金属全密封设计，抗振动抗冲击能力强。\n4) 接线与维护：IO-Link 采用标准化技术，只需要一根三芯非屏蔽线即可完成接线，节省约 50% 接线与维护时间；配置参数自动下发与状态监视可缩短停机时间、提高换产效率；ID 识别可防止安装错误、实现即插即用；柜外安装使诊断信息在现场直观可见，柜外就近安装还便于在工装夹具与气动装置侧缩短气动动作时间、提升节拍。\n5) 需要向客户确认的事项：a) 每工位 16 点的 DI/DO 实际分配，以及子站是否为可配置 DIO 类型（避免买错通道类型比例）；b) 24 个工位是否全部新增、后续是否扩容，以决定主站数量与备用端口；c) 主站接入的 EtherCAT 段、从站地址与扫描周期要求，确认主控可容纳的主站节点数与总线拓扑；d) 24V 供电回路规划（主站与子站均为有源设备，需核算总电流与线径、是否分段供电）；e) 现场是否有强振动、油污、冲洗等超出 IP67 的工况，以及传感器线缆长度是否在 IO-Link 允许范围内；f) 是否需要同时保留柜内 IO（如集中供电、急停等回路），以及安全信号是否需另配 Hi50 安全 IO；g) 备件策略（子站/主站型号、是否需要同型号备件以配合参数自动下发实现快速替换）。",
    "analysis": "本题的题眼是「就近安装 + 无电柜空间 + 接线工时 + 现场可见诊断」，与 GS20/GR20 柜外高防护 IO-Link 方案的官方定位高度吻合，因此主线方案应锁定 IO-Link，而不是把 GL20 刀片式模块搬到工位旁边（GL20 是柜内模块，其 12mm 薄型与 PUSH IN 接线的价值在于电柜内空间与装配工时）。最容易出错的地方是主站数量：必须按官方「一个 GS20 主站可连接 8 个子站」的配比，用 24÷8=3 个主站，漏算主站会导致器件清单与报价缺项，这在柜外 IO 方案中是最常见的失误；其次是忽略主站与子站的 24V 供电回路规划。答题时还应主动区分标准信号与安全信号（安全回路需另选 Hi50），并给出需向客户确认的点数与扩容边界。",
    "source": {
      "title": "汇川技术官网 GS20 系列柜外高防护 I/O 模块 产品页 / GR20 系列分布式 IO 产品页",
      "chapter": "产品概览 - 高效接线安装 / 高效工程 / 高效诊断；GR20 主站子站配比",
      "url": "https://www.inovance.com/global/content/details_816_556243.html"
    },
    "tags": [
      "GS20",
      "IO-Link",
      "通信组网",
      "方案应用"
    ],
    "roles": [
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-062",
    "category": "io",
    "type": "fill",
    "difficulty": 2,
    "stem": "除数字量、模拟量模块外，汇川 GR20 系列还提供多种特殊功能模块：官方描述为「光纤转换模块（EtherCAT 通信）」的型号是 ____，「网桥模块（适用于 PLC 之间通过 EtherCAT 通信）」的型号是 ____，「称重模块」的型号是 ____。",
    "options": null,
    "answer": [
      "GR20-1OP-N",
      "GR20-EC-EC",
      "GR20-1WTE"
    ],
    "analysis": "汇川官方型号表中 GR20 系列的三款特殊功能模块有明确描述：GR20-1OP-N 为光纤转换模块（EtherCAT 通信），用于延长与隔离 EtherCAT 链路；GR20-EC-EC 为网桥模块，适用于 PLC 之间通过 EtherCAT 通信；GR20-1WTE 为称重模块，官方型号表与《GR20-1WTE 称重模块用户手册》均可查证。每个系列型号都成对配有用户手册，采购下单时必须写全型号，仅写「GR20 光纤模块」「GR20 称重模块」会造成订货歧义。注意区分同属光纤转换器的 GR20-1OP-EN——官方描述为「无协议以太网版本」，与 EtherCAT 版本用途不同，这是本题最典型的错填点。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页（规格参数型号表，含 GR20 系列模块）/ GR20 系列分布式 IO 产品页",
      "chapter": "规格参数 / 通信模块（GR20 系列特殊功能模块型号与描述）",
      "url": "https://www.inovance.com/portal/product/details?productId=490"
    },
    "tags": [
      "GR20",
      "称重模块",
      "光纤转换",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-064",
    "category": "io",
    "type": "fill",
    "difficulty": 2,
    "stem": "在汇川 GL20 系列官方型号表中，通信模块 GL20-2SCOM 所支持的三种串行通信标准依次为 ____、____ 与 ____。",
    "options": null,
    "answer": [
      "RS232",
      "RS485",
      "RS422"
    ],
    "analysis": "官方型号表对 GL20-2SCOM 的描述是「2 路 RS232/RS485/RS422 通信模块」，即同一模块的 2 个通道可通过组态在三种串行标准间选用；此外还有 GL20-2SCOM-MDB（同规格、Modbus 协议版本）、GL20-2S485、GL20-2S485-MDB 等相近型号。答题时必须写标准的 RS 编号，写成「232」「485」「422」或「串口 1/2/3」都不规范；三个空之间顺序可对应官方描述中的书写顺序。采购核对时要注意 GL20-2SCOM 与 GL20-2SCOM-MDB、GL20-2S485 属不同型号，功能定位与协议支持不同，不能相互替代，订货单上漏写「-MDB」会导致交付型号不符。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页（规格参数 - GL20 系列型号表）",
      "chapter": "规格参数 / 通信模块型号与产品描述",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "通信模块",
      "串口",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-066",
    "category": "io",
    "type": "fill",
    "difficulty": 2,
    "stem": "根据汇川官网 Hi50 系列分布式安全 IO 模块产品页，该系列支持 ____ 模块扩展与全信号类型采集，并在 ____ ℃ ~ ____ ℃ 环境下仍保持稳定运行。",
    "options": null,
    "answer": [
      "32",
      "-20",
      "55"
    ],
    "analysis": "Hi50 系列官方产品页原文：「Hi50 系列分布式安全 IO 系统：全球首发热插拔安全温度模块，支持 32 模块扩展与全信号类型采集，在 -20℃~55℃ 极端环境下仍保持稳定运行，为汽车、半导体、锂电、压铸等高标准行业提供可靠保障。」因此三空依次为 32、-20、55。易错点有二：一是把宽温区指标误记为 Hi80 系列的 -40℃~+70℃——那是面向冶金、矿山、港口等户外恶劣工况的高性能分布式 IO 指标，两个系列不能串用；二是低温值必须带负号，漏写负号即变成错误答案。安全类项目的技术协议中，温度范围、模块扩展能力与最高安全等级（PL e/Cat.4/SIL 3）通常会被客户逐条核对，引用时须按系列对号入座。",
    "source": {
      "title": "汇川技术官网 Hi50 系列分布式安全 IO 模块 产品页",
      "chapter": "产品概览 - 高安全保护级 / 环境适应性",
      "url": "https://www.inovance.com/portal/product/details?productId=801"
    },
    "tags": [
      "Hi50",
      "功能安全",
      "环境适应性",
      "选型"
    ],
    "roles": [
      "sales",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-020",
    "category": "io",
    "type": "multi",
    "difficulty": 3,
    "stem": "某汽车零部件产线需要选用汇川 Hi50 系列分布式安全 IO 模块构建安全控制系统，根据官网信息，下列描述正确的有哪些？",
    "options": {
      "A": "最高安全等级可达 PL e/Cat.4/SIL 3",
      "B": "是国内首家通过 IEC 61131-6 国际标准功能安全认证的工业控制系统",
      "C": "支持热插拔安全温度模块，并支持 32 模块扩展",
      "D": "引入安全系统会显著降低原有标准系统的安全等级，需要整体重新认证"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B 为官网原文：Hi50 符合 IEC 61508、IEC 62061、ISO 13849 等国际标准，最高安全等级可达 PL e/Cat.4/SIL 3，并成为国内首家通过 IEC 61131-6 国际标准功能安全认证的工业控制系统；C 也为官网原文：全球首发热插拔安全温度模块，支持 32 模块扩展与全信号类型采集。D 恰与官网「快速匹配标准系统」一节相反——官方明确「新增的安全系统不会对现有标准系统带来冲击，且不降低安全标准，兼容主流机器人和安全传感器」，这正是安全改造类项目可以分步实施、降低停产风险的依据。",
    "source": {
      "title": "汇川技术官网 Hi50 系列分布式安全IO模块 产品页",
      "chapter": "产品概览 - 高安全保护级 / 快速匹配标准系统",
      "url": "https://www.inovance.com/portal/product/details?productId=801"
    },
    "tags": [
      "Hi50",
      "功能安全",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "public"
  },
  {
    "id": "IO-025",
    "category": "io",
    "type": "judge",
    "difficulty": 3,
    "stem": "汇川 GE20 系列扩展卡可适配 EASY 系列全场景紧凑型中小型 PLC，EASY 系列最多可扩展两个扩展卡。",
    "options": null,
    "answer": [
      "T"
    ],
    "analysis": "正确。官网 GE20 系列产品页写明：GE20 系列扩展卡当前共有 8 种类型，涵盖输入/输出数字量、输入和输出模拟量混合、串口通信、时钟扩展、TF 卡扩展等，可精准适配特定需求的同时节省空间，当前可适配 EASY 系列全场景紧凑型中小型 PLC 使用，EASY 系列最多可扩展两个扩展卡。选型时要注意「最多两个」的槽位限制，若项目需要同时做模拟量采集、串口通信和时钟功能，必须核对组合后是否能放进两个槽位，超出时应改用更高规格的主机或改用 GL20 等扩展 IO 方案。",
    "source": {
      "title": "汇川技术官网 GE20 系列扩展卡 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=493"
    },
    "tags": [
      "GE20",
      "扩展能力",
      "选型"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "public"
  },
  {
    "id": "IO-029",
    "category": "io",
    "type": "short",
    "difficulty": 3,
    "stem": "请说明汇川 IO 系统中 GL10 与 GR10 的区别，以及 GL10/GR10 与 GL20 在系统架构与选型思路上的差异。",
    "options": null,
    "answer": "参考答案要点：\n1) GL10 与 GR10 的官方划分：GL10/GR10 系列扩展模块分为「集中式扩展模块」（GL10 系列）与「分布式扩展模块」（GR10 系列），二者共用品类体系，涵盖数字量 IO 模块、模拟量 IO 模块、温度模块、CAN/EtherCAT 通信模块、远程高速计数模块、远程脉冲定位模块、探针模块、EtherCAT 从站分支器等丰富的产品类型。\n2) 适配平台：应用范围辐射汇川 H3U、AM400、AM600 各系列 PLC。集中式指模块直接在本机机架/背板侧扩展，分布式指模块通过通信方式远程布置在现场，二者按「模块离主控的距离」区分使用场景。\n3) 与 GL20 的差异：GL20 是新一代刀片式 IO 系统，采用「通信接口模块（耦合器）+ 各类 IO 模块」的架构，耦合器提供 EtherCAT/PROFINET/EtherNet/IP 等总线接入；模块薄至 12mm，内部总线速度可达 100Mbps，IO 开断时间 <100us，模拟量转换速度 <62.5us，耦合器最低扫描周期可达 125us，相比上一代 GL10 性能提升 10 倍以上；采用 PUSH IN 端子免工具接线，接线时间节省 66%。\n4) 选型思路：老平台（H3U/AM400/AM600）改造或补充点位优先沿用 GL10/GR10 以保持兼容；新建项目、对速度与柜内空间有要求、需要 EtherCAT/PROFINET/EtherNet/IP 多协议接入时选 GL20；有安全功能需求时另选 Hi50，大型冗余产线选 Hi80。",
    "analysis": "本题是选型类高阶题，考的是把三个系列放进同一张选型图里。常见错误有两种：一是把 GL10/GR10 当成「老型号已被淘汰」，忽略官方明确其适配 H3U、AM400、AM600 各系列 PLC 的现实意义——大量在役设备仍在使用这套模块，改造项目必须考虑兼容；二是把 GL20 简单理解为「更薄的 GL10」，遗漏它是以耦合器为核心、支持多总线协议并可实现微秒级响应的新一代 IO 系统。回答时建议按「平台适配 → 安装形态 → 性能指标 → 协议支持」四步给出结论。",
    "source": {
      "title": "汇川技术官网 GL10/GR10 系列扩展模块 产品页；GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览",
      "url": "https://www.inovance.com/portal/product/details?productId=492"
    },
    "tags": [
      "GL10",
      "GR10",
      "GL20",
      "选型"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "IO-030",
    "category": "io",
    "type": "short",
    "difficulty": 3,
    "stem": "在汇川 IO 系统品类中，对于「柜内安装」与「柜外就近安装」两类场景，应分别优先考虑哪些 IO 系列？请结合官方产品定位说明理由，并给出选型时需要向客户确认的关键信息。",
    "options": null,
    "answer": "参考答案要点：\n1) 柜内安装优先考虑：GL20 系列刀片式模块（薄至 12mm、免工具 PUSH IN 接线、多总线耦合器，适合空间紧张、点数密集、需要高性能响应的电柜）；GL10 集中式扩展模块（适配 H3U/AM400/AM600，用于本机扩展）；Hi80 系列（面向大型冗余控制系统，配 EVO800 大型 PLC 与背板模块）；GE20 系列扩展卡（适配 EASY 系列紧凑型中小型 PLC，最多扩展两个）。\n2) 柜外就近安装优先考虑：GR20 系列（官方定位为主打经济型的柜外 IO，IO-Link 子站需配 GS20 主站，一个主站可连 8 个子站；三线一组端子排接线，无需并线；可选配 GR20-FCZ 配件实现柜外安装并显示直观诊断信息）；GR20T 系列（卧式一体化形态，防护罩设计，支持洁净车间柜外安装、气动装置侧就近安装，缩短气动动作时间）；Hi30J 系列（PCB 板载式，体积 60mm×53mm×12mm，配合定制底板与预制化线缆，直接做进设备内部）。\n3) 选型需确认的关键信息：主控 PLC 型号与支持总线（决定耦合器/主站型号）；IO 点数与类型（DI/DO/AI/AO/温度/高速计数等）；是否需要功能安全（需 PL e/Cat.4/SIL 3 时选 Hi50）；安装位置与环境（柜内/柜外、粉尘油污、温度、振动）；是否需要热插拔与冗余（大型产线选 Hi80）；柜内空间与接线工时要求；诊断与维护需求；以及 IO-Link 方案中主站数量与子站配比。",
    "analysis": "本题考察把品类全貌转成落地选型逻辑的能力。最容易出现的偏差是忽略 GS20 主站与 GR20 子站的配比关系（一个主站最多 8 个子站），导致柜外方案的器件清单漏项；其次是把柜外安装当成「把柜内模块搬到柜外」，而官方对柜外场景给出的是 GR20（配 GR20-FCZ）、GR20T（防护罩）与 Hi30J（板载）三条不同技术路线。回答时按「场景 → 系列 → 理由」组织，并明确列出需向客户确认的信息，才能体现方案级思维。",
    "source": {
      "title": "汇川技术官网 IO 系统品类页（柜内IO / 柜外IO）",
      "chapter": "柜内IO、柜外IO 产品定位",
      "url": "https://www.inovance.com/portal/product/list?typeId=347"
    },
    "tags": [
      "IO系统",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-033",
    "category": "io",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某老旧水处理厂泵站改造项目，控制室与现场设备相距较远，现场环境潮湿、温差大，部分设备位于户外区域，改造期间不能长时间停产。客户希望新增一批远程 IO 采集水泵状态、阀位与液位信号，并希望后期点位扩展和维护尽量方便。请给出汇川 IO 选型思路，说明理由以及需要向客户确认的关键参数。",
    "options": null,
    "answer": "参考答案要点：\n1) 选型方向：优先推荐 Hi80 系列高性能分布式 IO 模块。官方定位为适配大型冗余控制系统的 IO 模块，具备强兼容、高稳定、极致可靠等特性；适用于冶金、汽车、市政、水利、石油、矿山、港口、化工、电力等大型产线，市政与水利正是其典型行业。\n2) 环境适配理由：官方指标为宽温区满足 -40℃~+70℃、高标准三防漆设计满足 3C4/GX 级防护需求、工作海拔最高可达 5000m、2g 超强抗震与 25g 抗冲击，可覆盖潮湿、温差大、户外安装的泵站场景。\n3) 不停产改造与后期维护：模块支持单机、环网接入、多种冗余功能，全系列支持热插拔设计，通道级故障诊断可精准定位故障通道、快速诊断快速处理；可在改造期间分区域接入、按需扩展点位，减少停机时间。\n4) 主控与组网：搭配 EVO800 系列大型 PLC 和配套交换机进行灵活组网，软件编程依托 iFA Evolution（驭沃）平台；若现场已有其它平台，需先确认总线协议与耦合器/接口模块的匹配性。\n5) 需向客户确认的关键参数：主控 PLC 型号与总线类型；DI/DO/AI/AO 与温度、液位信号的具体点数与信号类型；是否需要冗余（环网/电源冗余）与热插拔；安装位置（柜内/柜外/户外）及防护柜体要求；通讯距离与拓扑；供电与接地条件；以及后期扩展的预留点位数。\n6) 备选方案：若预算有限且为柜外经济型点位，可评估 GR20 系列（IO-Link 子站需配 GS20 主站，一个主站可连 8 个子站，可选配 GR20-FCZ 实现柜外安装并显示诊断信息）；但潮湿户外+长距离+不停产改造的组合下，Hi80 的环境指标与热插拔、冗余能力更契合。",
    "analysis": "本题的题眼是「市政/水利 + 潮湿温差大 + 户外 + 不能停产」这一组合，与 Hi80 官方定位与指标高度吻合，因此首选 Hi80 是有据可依的。常见失误是直接按「远程 IO」字面选 GR20 这类经济型柜外方案，却忽略了客户的户外潮湿、温差大与不停产要求——GR20 的官方定位是经济型柜外 IO，通道级诊断与热插拔、冗余能力不在其描述范围内。答题时还要注意把「通道级故障诊断」「热插拔」「环网/冗余」与「不停产改造」的关系讲透，并主动列出需要向客户确认的点数与信号类型，避免只给结论不给边界条件。",
    "source": {
      "title": "汇川技术官网 Hi80 系列高性能分布式IO模块 产品页",
      "chapter": "产品概览 - 强诊断，易维护 / 极端环境依旧可靠",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "Hi80",
      "选型",
      "故障排查",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "IO-034",
    "category": "io",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某冶金产线的控制系统采用汇川面向大型冗余产线的高性能分布式 IO 模块（搭配 EVO800 系列大型 PLC 组网）。近期出现两类现象：一是单个通道偶发信号异常，但模块整体工作正常，现场人员难以判断是哪个通道的传感器还是接线问题；二是产线连续生产不允许整体停电，客户希望在不整体停电的情况下更换故障模块。请说明应优先利用该系列 IO 的哪些官方能力来定位与处理这两类问题，并说明选型/配置层面应如何满足这两项诉求。",
    "options": null,
    "answer": "参考答案要点：\n1) 针对「单通道偶发异常」：优先使用通道级故障诊断能力。汇川 Hi80 系列高性能分布式 IO 模块官方明确具备「通道级故障诊断，精准定位故障通道，快速诊断，快速处理」，可直接把排查范围收敛到具体通道；GL20 系列也具备「通道级的诊断，快速获取故障信息」。\n2) 排查顺序建议：读取控制系统中的通道级诊断信息 → 依据通道号核对现场接线与端子（GL20 采用大口径 PUSH IN 端子，需确认导体截面与剥线长度符合要求、端子压接可靠）→ 检查传感器供电与公共端（GR20 采用三线一组端子排接线、传感器接入无需并线，需确认公共端连接方式与现场实际一致）→ 检查电柜内温度、粉尘与油雾，必要时核对模块环境指标（Hi80 宽温区 -40℃~+70℃、高标准三防漆满足 3C4/GX 级防护需求；GL20 连接器采用镀金工艺、夹紧式设计，十年设计寿命）→ 对模拟量通道排查干扰与屏蔽接地，核对滤波与量程设置。\n3) 针对「不停电更换模块」：选用支持热插拔的系列，Hi80 官方明确「全系列支持热插拔设计」；GL20 采用垂直拔插与可拆卸端子，安装维护效率较上一代提升 3 倍，便于快速更换。\n4) 配置层面的建议：若产线为大型连续生产（冶金属 Hi80 官方典型行业），建议采用支持单机、环网接入与多种冗余功能的架构，并搭配 EVO800 系列大型 PLC 与配套交换机，软件依托 iFA Evolution（驭沃）平台统一组态与诊断。\n5) 管理与记录：更换前通过控制系统导出或记录通道诊断与故障日志，更换后核对通道映射与组态一致性；对反复出现的通道建立台账，区分传感器/接线/模块三类原因。",
    "analysis": "本题把「诊断定位」与「热插拔维护」两个诉求放在一起考。第一类现象的正确答案只有一个方向——用通道级诊断把范围收敛到通道，而不是靠逐点测量碰运气；官方对 Hi80 与 GL20 都描述了通道级诊断能力，回答时应对应到系列。第二类现象对应 Hi80「全系列支持热插拔设计」以及 GL20 的垂直拔插与可拆卸端子，这是能在不停电条件下更换模块的官方依据。常见错误是笼统回答「换模块试试」或「整柜断电检查」，既浪费时间又违背客户不停产的要求；另外冶金属于 Hi80 官方典型行业，配置上应体现冗余架构与统一编程/诊断平台。",
    "source": {
      "title": "汇川技术 Hi80 系列高性能分布式IO系统手册；汇川技术官网 GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 强诊断，易维护；GL20 诊断可靠 / 快速维护",
      "url": "https://www.inovance.com/portal/product/details?productId=805"
    },
    "tags": [
      "Hi80",
      "GL20",
      "诊断",
      "故障排查"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "IO-041",
    "category": "io",
    "type": "single",
    "difficulty": 3,
    "stem": "某设备原设计采用汇川 GL20 系列刀片式 IO 模块，现因设备内部空间压缩需要改用板载式方案。关于 Hi30J 与 GL20 在组成与集成方式上的差别，下列描述正确的是？",
    "options": {
      "A": "Hi30J 由通信接口模块、数字量模块、模拟量模块、通信模块等功能模块组成，可通过定制化底板集成各类接口并配合预制化线缆使用",
      "B": "Hi30J 是 GL20 的缩小版机壳，两者的模块型号完全通用，可直接互换",
      "C": "Hi30J 不需要任何通信接口模块，全部模块直接并接在现场总线上",
      "D": "Hi30J 只能作为 GL20 的配件使用，自身不能独立组成 IO 系统"
    },
    "answer": [
      "A"
    ],
    "analysis": "Hi30J 官方产品页写明：该系列当前由通信接口模块、数字量模块、模拟量模块、通信模块等功能模块组成，可通过定制化底板集成各类接口、搭配多种功能模块与预制化线缆，减少接线投入，实现快速批量生产。B 错误，Hi30J 与 GL20 是两套独立的产品体系，型号与手册各自独立，不存在通用互换关系；C 错误，Hi30J 同样配有通信接口模块，只是形态为板载式；D 错误，Hi30J 本身就是一套完整的远程 IO 扩展模块，可独立组建系统。做设备内嵌方案时要同步确认底板定制需求与线缆预制清单。",
    "source": {
      "title": "汇川技术官网 Hi30J 系列板载式 IO 模块 产品页",
      "chapter": "产品概览 / 预制化，即装即用",
      "url": "https://www.inovance.com/portal/product/details?productId=887"
    },
    "tags": [
      "Hi30J",
      "GL20",
      "选型",
      "方案应用"
    ],
    "roles": [
      "sales",
      "engineer",
      "purchase"
    ],
    "security": "internal"
  },
  {
    "id": "IO-045",
    "category": "io",
    "type": "multi",
    "difficulty": 3,
    "stem": "某汽车零部件产线规划功能安全控制系统，安全信号规模超过一千个，且分布在产线多个区域。根据汇川官网 Hi50 系列产品页，下列描述正确的有哪些？",
    "options": {
      "A": "针对超千个安全信号、分散布置的产线，提供「分布安全、集成安全」的多种灵活产品形态",
      "B": "故障诊断信息在控制系统中集成，安全数据记录与日志信息详尽，便于日常运维与追溯",
      "C": "获全球权威认证机构 TÜV 南德意志集团（TÜV SÜD）颁发的功能安全认证证书，并斩获 2025 红点国际设计大奖",
      "D": "引入该安全系统后，原有标准系统的安全等级会被拉低，必须整体重新做功能安全认证"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "analysis": "A、B、C 均为官网 Hi50 产品页原文：「部署灵活便捷」一节写明产线安全系统的安全信号规模超千个，提供分布安全、集成安全的多种灵活产品形态；「简便日常运维」一节写明故障诊断信息在控制系统中集成、安全数据记录与日志信息详尽；产品页还明确 Hi50 系列斩获 2025 红点国际设计大奖和 TÜV 南德意志集团（TÜV SÜD）颁发的功能安全认证证书。D 与官方「快速匹配标准系统」一节的结论完全相反——官方明确「新增的安全系统不会对现有标准系统带来冲击，且不降低安全标准，兼容主流机器人和安全传感器」，因此分步实施安全改造在标准层面是成立的，不需要对原有标准系统整体重新认证。安全类项目的技术协议中，认证证书与「不降低现有标准」往往是客户逐条核对的条款。",
    "source": {
      "title": "汇川技术官网 Hi50 系列分布式安全 IO 模块 产品页",
      "chapter": "产品概览 - 部署灵活便捷 / 简便日常运维 / 快速匹配标准系统",
      "url": "https://www.inovance.com/portal/product/details?productId=801"
    },
    "tags": [
      "Hi50",
      "功能安全",
      "部署形态",
      "维护保养"
    ],
    "roles": [
      "sales",
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-052",
    "category": "io",
    "type": "short",
    "difficulty": 3,
    "stem": "某产线采用汇川 GL20 刀片式 IO 系统，EtherCAT 耦合器下挂多块模块。现场反馈：一块数字量输出模块上电后 RUN 指示正常、控制器侧也能扫描到该模块，但其中若干路输出通道长期无输出，而同一模块其余通道动作正常。请说明应如何利用 GL20 的诊断能力定位问题范围，给出排查顺序，并说明为什么不应首先更换模块。",
    "options": null,
    "answer": "参考答案要点：\n1) 先利用官方诊断能力定位范围：GL20 产品页明确「诊断可靠：通道级的诊断，快速获取故障信息」，应先在控制器/组态软件中读取该模块的通道级诊断信息，把问题范围从「整块模块」收敛到「具体哪几路通道」，这是后续所有动作的前提。\n2) 排查顺序建议：a) 读取并记录通道诊断结果与故障发生的时间点，确认是持续无输出还是仅在某些工况下出现；b) 核对该模块的供电与公共端回路，包括模块工作电源、输出负载电源以及公共端（COM）连接是否正确、是否与其他通道共用的保险或断路器已断开；c) 检查相关通道的端子连接是否可靠——GL20 采用大口径 PUSH IN 端子，需确认导体截面、剥线长度符合手册要求且端子完全推入到位；d) 区分模块侧与负载侧：在模块输出端子处测量有无输出电平，若模块侧正常而负载侧无动作，问题在外部回路（中间继电器、电磁阀、线缆断点）；e) 核对通道所带负载的电流与类型是否在模块额定范围内，以及输出类型（NPN/PNP）与实际负载极性是否匹配；f) 可将负载临时改接到同模块备用通道验证，判断是通道自身失效还是外部回路问题。\n3) 为什么不应先换模块：通道级诊断已经把范围指向具体通道，在未排除公共端、负载电源、端子压接与负载匹配等外部因素之前更换模块，既不能解决问题，还可能在更换后因外部原因再次损坏同一通道，同时造成不必要的停机与备件消耗，并使原始故障信息丢失、无法复盘。\n4) 处理建议：按诊断结果分类处置——外部回路问题整改线缆与端子；负载不匹配则加装中间继电器或更换合适模块；确认模块通道本身失效时再更换同型号模块（注意 GL20 与 GL20S 型号不可混用），更换前记录原通道映射并在更换后核对组态一致性。\n5) 向客户说明的边界条件：单通道故障不代表模块整体报废，也不属于安全功能范畴；是否需要停机更换需结合该通道所承担的动作重要性评估，必要时先切到备用通道维持生产。",
    "analysis": "本题的关键是分清「模块能通信」与「通道能输出」两件事：控制器扫描得到模块，只证明总线通信与模块工作正常，不代表输出通道与外部回路无问题，因此必须依靠官方的通道级诊断把范围收敛到通道。常见错误有两种：一是直接换模块，用更换代替诊断；二是只测模块输出端子就下结论，忽略公共端（COM）与负载电源往往按组共用这一结构特点——同一模块上部分通道正常、部分异常，恰恰是分组公共端或分组电源存在问题的典型特征。答题时把「先诊断取信息、再按电源与负载分段验证、最后才动模块」的顺序讲清楚，并主动说明 GL20 与 GL20S 型号不可混用，才算完整。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页 / GL20 系列模块系统手册",
      "chapter": "产品概览 - 诊断可靠、免工具安装 / 数字量输出模块接线与故障处理",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "诊断",
      "故障排查",
      "数字量输出"
    ],
    "roles": [
      "engineer"
    ],
    "security": "internal"
  },
  {
    "id": "IO-053",
    "category": "io",
    "type": "short",
    "difficulty": 3,
    "stem": "请说明汇川 IO-Link 方案（GS20 主站 + GR20/GS20 子站）在设备维护与快速换产方面的官方能力，重点解释配置参数自动下发（参数服务器）机制为什么能支持「故障后快速替换、无需重新配置」，并说明它与普通远程 IO 在维护方式上的差异。",
    "options": null,
    "answer": "参考答案要点：\n1) 方案构成与配比：GR20 或 GS20 的 IO-Link 子站需配合 GS20 IO-Link 主站使用，一个 IO-Link 主站可连接 8 个 IO-Link 子站；主站按总线分为 GS20-ECT-8L（EtherCAT）、GS20-PN-8L（PROFINET）、GS20-EIP-8L（EtherNet/IP）三种型号。\n2) 官方维护相关能力：GS20 官方描述为「配置参数自动下发、状态监视等功能助力客户节省维护成本，缩短停机时间，提高换产效率」；「高效工程」一节写明统一部署传感器配置参数以消除人工配置，并具备 ID 识别功能以防止安装错误、实现即插即用。\n3) 参数服务器（配置参数自动下发）机制：IO-Link 主站把连接在其端口上的子站/设备的参数配置集中保存在主站侧，设备上电或更换后由主站自动把参数下装到新设备，无需工程师携带调试软件到现场逐项重新设置；配合 ID 识别，主站还能发现接错端口或装错型号的情况，从而避免「装上去能通信但参数不对」这类隐性错误。\n4) 与传统远程 IO 的差异：普通远程 IO 模块通常只提供 IO 数据与有限的诊断信息，更换同型号模块后需要重新核对量程、滤波、通道使能等组态参数，某些场景还要重新校线；IO-Link 方案把参数与设备身份管理上移到主站，替换动作简化为主站自动下发，且状态监视与诊断信息更丰富、更直观，柜外安装后现场人员即可看到诊断结果。\n5) 工程价值与前提：换产时可按机型预先保存不同参数集，缩短换型调试时间；前提是必须使用 GS20 主站（不能把子站直接接到 PLC 以太网口）、按 8 个子站一组规划主站数量，并保证柜外安装所需的 IP67 防护与三芯非屏蔽线接线条件。",
    "analysis": "本题要回答的是「机制」而不是「概念」：参数服务器的价值在于把设备参数从现场调试动作变成主站侧的自动下装，因此替换同型号子站后不需要重新逐项配置，配合 ID 识别还能防错装。答题时最容易出现的偏差是把 GR20 子站说成可以独立接 PLC、或忽略一个 GS20 主站只能带 8 个子站这一官方配比，导致方案本身不成立；另一类偏差是只泛泛说「支持热插拔」而不说明参数由主站集中管理，无法解释为什么能「免配置替换」。此外应点出该能力对换产（多机型参数集切换）与柜外安装（现场可见诊断）的实际收益。",
    "source": {
      "title": "汇川技术官网 GS20 系列柜外高防护 I/O 模块 产品页 / GR20 系列分布式 IO 产品页",
      "chapter": "产品概览 - 高效工程（参数自动下发、ID 识别）/ 高效诊断",
      "url": "https://www.inovance.com/global/content/details_816_556243.html"
    },
    "tags": [
      "GS20",
      "IO-Link",
      "维护保养",
      "参数配置"
    ],
    "roles": [
      "engineer",
      "partner"
    ],
    "security": "public"
  },
  {
    "id": "IO-055",
    "category": "io",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某汽车零部件焊装线采用汇川 GL20 刀片式 IO 系统，EtherCAT 耦合器下挂多块模块。近期出现两类问题：一是某块数字量输出模块上的 4 个焊枪夹紧阀动作通道不起作用，但控制器侧能扫描到该模块、同一模块其它输出通道动作正常；二是产线偶尔出现该从站掉站，恢复后继续生产，现场已重新插拔过网线与端子，问题仍会复现。请给出这两类问题的排查思路与处理建议，并说明在方案与备件层面应做哪些改进。",
    "options": null,
    "answer": "参考答案要点：\n1) 第一类问题（部分输出通道不动作）：\n a) 先用官方诊断能力定位范围。GL20 产品页明确「诊断可靠：通道级的诊断，快速获取故障信息」，应先在控制器/组态软件中读取该模块的通道级诊断信息，将范围收敛到具体通道，而不是从整块模块入手。\n b) 排查顺序：核对模块工作电源与输出负载电源、公共端（COM）分组连接是否正确，确认对应分组的保险/断路器未断开；检查相关通道 PUSH IN 端子的导体截面、剥线长度与推入是否到位（GL20 采用大口径 PUSH IN 端子、支持免工具接线换线）；在模块输出端子处测量有无输出电平，区分模块侧与负载侧；核对负载类型与极性（NPN/PNP）及电流是否在额定范围内，必要时用备用通道验证；若确认通道本身失效再更换同型号模块，注意 GL20 与 GL20S 型号不可混用。\n c) 为什么不能先换模块：通道级诊断已把范围指向通道，未排除公共端、负载电源、端子与负载匹配等外部因素就换模块，既解决不了问题，还可能再次损坏同一通道并丢失原始故障信息。\n2) 第二类问题（偶发掉站）：\n a) 物理层优先：检查 EtherCAT 网线的压接质量与预制线缆是否受力、弯折半径是否过小；确认该段线缆是否与动力电缆（尤其变频器、伺服输出线）同槽敷设，必要时分开走线或采用屏蔽良好的预制线缆并做好屏蔽接地。\n b) 拓扑与终端：核对从站排列与末端模块（END 模块）是否按要求安装到位，末端缺失会使链路处于不良状态；核对从站站号与地址分配是否冲突。\n c) 供电与干扰：核算模块电源是否存在压降（模块数量多、线缆长时末端电压下降会引发异常），必要时加装中继电源模块；检查电柜接地与 24V 电源质量。\n d) 证据留存：利用总线诊断/错误计数功能记录掉站发生的时刻与错误类型（如 CRC 错误），与环境因素（附近大功率设备启停、机械振动、温度变化）关联分析，定位偶发规律；不要仅靠重新插拔网线这类「复位式」处理掩盖问题。\n3) 方案与备件层面改进：\n a) 对焊装这类高振动、强干扰场景，优先使用厂家预制线缆并规范走线分槽，减少现场压接环节；模块安装与线缆固定需考虑抗振。\n b) 关键工位预留备用通道与备用模块，缩短故障处理时间；备件型号必须与在用型号一致（区分 GL20 与 GL20S），并建立通道台账，记录历史故障通道及其原因分类（传感器/接线/模块）。\n c) 若产线对连续性要求高、且故障涉及整线停机，可评估改用支持热插拔与环网冗余的高性能分布式 IO（Hi80 系列，官方明确全系列支持热插拔设计、支持单机与环网接入及多种冗余功能）。\n d) 检查是否存在安全回路与标准回路混接的情况，安全相关信号应由安全 IO（Hi50 系列，最高 PL e/Cat.4/SIL 3）承担，避免把安全功能寄托在普通 IO 通道上。",
    "analysis": "本题把「通道级故障」与「偶发掉站」两类现象放在同一现场，考的是分层排查能力。第一类现象的关键判断是：控制器能扫描到模块只说明总线通信与模块工作正常，不代表输出通道与外部回路无问题；同一模块部分通道正常、部分异常，最典型的成因是分组公共端/分组负载电源或端子压接问题，因此必须先用 GL20 官方的通道级诊断收敛范围，再从电源、公共端、端子、负载极性逐段验证，最后才考虑换模块。第二类现象的关键判断是优先查物理层与末端模块：EtherCAT 有 CRC 校验与错误计数，偶发掉站应先怀疑网线压接、走线干扰与末端（END 模块）缺失，而不是先怀疑设备；「重新插拔已恢复」恰恰说明是接触或干扰类问题，必须留证据、查规律。若答题者直接给出「换模块」「换网线」而不说明诊断与验证顺序，说明缺少现场排查的方法论。",
    "source": {
      "title": "汇川技术官网 GL20 系列刀片式扩展模块 产品页 / GL20 系列模块系统手册",
      "chapter": "产品概览 - 诊断可靠、免工具安装 / 系统安装接线与故障处理",
      "url": "https://www.inovance.com/portal/product/details?productId=489"
    },
    "tags": [
      "GL20",
      "故障排查",
      "诊断",
      "EtherCAT"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  },
  {
    "id": "IO-056",
    "category": "io",
    "type": "scenario",
    "difficulty": 3,
    "stem": "某老旧设备改造项目，主控为汇川 AM400 系列中型 PLC，现场已装有一批 GL10 集中式扩展模块与 GR10 分布式扩展模块并正常运行。客户需要新增约 150 点 24V 数字量输入输出，点位分布在设备三个区域；客户希望尽量沿用现有平台以减少工艺改动与验证工作量，但对新增点位的响应速度和后期维护便利性也有要求。请给出两种可选方案并比较其适用条件、限制与实施注意事项。",
    "options": null,
    "answer": "参考答案要点：\n1) 方案一：沿用 GL10/GR10 扩展模块。适用条件是主控平台为 AM400（官方明确 GL10/GR10 应用范围辐射汇川 H3U、AM400、AM600 各系列 PLC），且客户以「减少工艺改动与验证工作量」为第一优先。做法是按区域就近使用集中式（GL10，本机侧扩展）与分布式（GR10，现场远程布置）模块组合，把新增点位分配到三个区域。限制与注意事项：a) 必须按主控平台核算可扩展的模块数量、槽位与供电余量，尤其是集中式扩展对本机带载能力有约束，超出时需改用分布式或增加通信分支；b) 需确认该项目所用主控固件/编程软件版本对模块类型的支持范围；c) 交付前需核对新增模块与原系统的组态、地址分配方式保持一致，避免与原有点位冲突。\n2) 方案二：新增 GL20 刀片式 IO 系统（单独组网或作为补充）。理由与优势：GL20 是新一代刀片式模块，模块薄至 12mm、可省电柜空间；采用大口径 PUSH IN 端子、支持免工具接线换线，接线时间节省 66%，安装维护效率较上一代提升 3 倍；内部总线速度可达 100Mbps、IO 开断时间 <100us、模拟量转换速度 <62.5us、耦合器最低扫描周期可达 125us，响应速度优于上一代；具备通道级诊断，便于后期维护定位。适用条件与限制：GL20 是「耦合器 + 扩展模块」架构，需要按上位控制器总线类型选择耦合器（GL20-RTU-ECT32 为 EtherCAT，GL20-RTU-PN 为 PROFINET，GL20-RTU-EIP 为 EtherNet/IP），并遵守各耦合器的模块数量上限（EtherCAT 与 PROFINET 最多 32 个模块，EtherNet/IP 最多 16 个模块）；若 AM400 侧无对应总线主站或总线资源受限，需要评估增加总线接口/耦合器带来的改动量，这正与客户「减少改动」的诉求相权衡。\n3) 选型比较结论：若客户以最小改动、最快验证为第一优先，选方案一沿用 GL10/GR10；若新增点位对响应速度、柜内空间、接线与维护效率有明确要求，且愿意接受增加一套 GL20 系统（含耦合器）的改动，则选方案二，或采用「关键区域用 GL20、其余区域沿用 GL10/GR10」的混合方案。\n4) 两种方案共同需要向客户确认的边界条件：a) 新增 150 点的 DI/DO 具体分配与信号类型（是否有高速计数、脉冲输出、模拟量、温度等特殊需求，特殊需求会影响模块类型甚至平台选择）；b) 三个区域各自的点位数与到主控/耦合器的距离，决定集中式与分布式的划分；c) 供电与接地条件、是否需要独立的 24V 分支电源；d) 是否涉及安全回路（如涉及，应另配 Hi50 系列分布式安全 IO，最高 PL e/Cat.4/SIL 3，不能由普通 IO 承担）；e) 停机窗口与验收标准（含原有工艺验证是否需重做）；f) 备件与后期维护策略，包括模块型号书写规范（区分 GL10、GR10、GL20、GL20S）。",
    "analysis": "本题考的是在「沿用老平台降低风险」与「用新系列提升性能与维护便利」之间的权衡，而不是简单选一个系列。方案一的关键依据是官方明确 GL10/GR10 适配 H3U、AM400、AM600 各系列 PLC，因此在役 AM400 平台沿用现有模块在工程上完全成立，其真正限制是扩展模块数量与槽位、供电余量，而不是「型号老旧不能用」。方案二的关键依据是 GL20 的官方性能与结构指标（12mm、PUSH IN、100Mbps、IO 开断 <100us、耦合器扫描周期 125us、通道级诊断），但必须同时说明它需要耦合器并按总线类型选型、且不同耦合器的模块数量上限不同（EtherCAT/PROFINET 32 个、EtherNet/IP 16 个）——只讲性能不讲接入前提是本题最常见的失分点。答题时若漏掉安全回路的归属（应由 Hi50 承担）与模块型号书写规范（GL20 与 GL20S 不可混用），说明方案边界考虑不完整。",
    "source": {
      "title": "汇川技术官网 GL10/GR10 系列扩展模块 产品页 / GL20 系列刀片式扩展模块 产品页",
      "chapter": "产品概览 - 应用范围辐射 H3U、AM400、AM600 各系列 PLC / GL20 性能与诊断特性",
      "url": "https://www.inovance.com/portal/product/details?productId=492"
    },
    "tags": [
      "GL10",
      "GR10",
      "GL20",
      "选型",
      "方案应用"
    ],
    "roles": [
      "engineer"
    ],
    "security": "confidential"
  }
];
