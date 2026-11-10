import { BusinessCategory, TradeRoute } from '../types';

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: 'commercial-vehicles',
    title: {
      en: 'Commercial Vehicles',
      zh: '商用车辆',
    },
    subtitle: {
      en: 'Fleet Logistics & Transport',
      zh: '车队物流与干线客货运输',
    },
    description: {
      en: 'Comprehensive commercial transport solutions encompassing distribution trucks, urban delivery units, and high-capacity cargo carriers designed for reliability and uptime.',
      zh: '涵盖城市配送车辆、厢式货车、多轴干线物流车辆及商用车队定制化方案，注重高可靠性与运营出勤率。',
    },
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    capabilities: {
      en: [
        'Urban distribution & regional freight configurations',
        'Refrigerated, dry freight & curtain-side truck bodies',
        'Fleet procurement and customized chassis specifications',
        'Lifecycle technical guidance and spare parts support',
      ],
      zh: [
        '城市末端配送及区域中长途物流底盘选型',
        '冷链保温车厢、标准干货厢及侧帘翼开厢上装',
        '车队集中批量采购与差异化技术参数定制',
        '全生命周期技术资料指导与关键配件支持',
      ],
    },
    isEditable: false,
  },
  {
    id: 'trucks',
    title: {
      en: 'Heavy Trucks',
      zh: '重卡车辆',
    },
    subtitle: {
      en: 'Tractors & Tippers',
      zh: '重型牵引车与工程自卸车',
    },
    description: {
      en: 'Heavy-duty commercial prime movers and construction dump trucks built for demanding highways, mining terrains, and major civil infrastructure developments.',
      zh: '专为重载干线运输、矿山砂石骨料运输及重点基建工程定制的高承载公路牵引头与工程重卡。',
    },
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    capabilities: {
      en: [
        'Heavy-duty 6x4 & 4x2 highway tractor prime movers',
        'Reinforced 6x4 and 8x4 mining and construction tippers',
        'Hub reduction axles and severe-duty multi-leaf suspensions',
        'Retarder systems and long-haul sleeper cabins',
      ],
      zh: [
        '重载 6x4 及 4x2 公路干线重卡牵引车头',
        '加固型 6x4 / 8x4 矿山基建重型自卸翻斗车',
        '双级轮边减速驱动桥与多片重型抛物线板簧',
        '集成液力缓速器及舒适长途双卧宽体驾驶室',
      ],
    },
    isEditable: false,
  },
  {
    id: 'automotive-solutions',
    title: {
      en: 'Automotive Solutions',
      zh: '汽车解决方案',
    },
    subtitle: {
      en: 'Specification & Sourcing',
      zh: '技术参数匹配与定制采购',
    },
    description: {
      en: 'Targeted vehicle consultation matching engine horsepower, chassis dimensions, axle configurations, and emission classes with destination country regulations and road conditions.',
      zh: '根据海外目标市场法规准入、排放要求、道路承载限额与作业环境，进行马力、轴荷及变速箱速比的精准技术匹配。',
    },
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
    capabilities: {
      en: [
        'Destination market homologation & emission compliance matching',
        'Specialized superstructures & upper-body engineering coordination',
        'Comprehensive technical data sheets and bilingual documentation',
        'Maintenance schedule recommendations & service manuals',
      ],
      zh: [
        '目标国车辆法规准入与欧标/国标排放技术核对',
        '专用车上装制造技术对接（洒水车、油罐车、随车吊等）',
        '中英双语整车技术参数表与规格书制作',
        '海外保养周期规范建议及技术维修指引',
      ],
    },
    isEditable: false,
  },
  {
    id: 'vehicle-trading',
    title: {
      en: 'Vehicle Trading',
      zh: '车辆贸易',
    },
    subtitle: {
      en: 'Cross-Border Supply Chain',
      zh: '跨国供应链与外贸出口',
    },
    description: {
      en: 'Streamlined export management connecting vehicle buyers with verified manufacturing hubs through clear contract terms, rigorous pre-shipment inspections, and international shipping.',
      zh: '连接海外采购商与优质主机厂供应链，协助办理出口报关、商检发票、滚装船/集装箱航运订舱及全流程单证协作。',
    },
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80',
    capabilities: {
      en: [
        'Export licenses, commercial invoice & certificate of origin processing',
        'Ro-Ro (Roll-on/Roll-off), container & flat-rack ocean logistics',
        'Independent pre-delivery inspection (PDI) and photo verification',
        'Flexible trade terms including FOB, CFR, and CIF arrangements',
      ],
      zh: [
        '报关单证、原产地证明（CO/Form E）及外贸单据办理',
        '国际海运滚装船（Ro-Ro）、框架箱及散杂集装箱订舱',
        '出厂专业 PDI 检验、外观铭牌核实与发运视频照片留档',
        '支持灵活的外贸交货条款（FOB、CFR、CIF等）',
      ],
    },
    isEditable: false,
  },
];

export const TRADE_ROUTES: TradeRoute[] = [
  {
    id: 'middle-east',
    name: {
      en: 'Gulf & Middle East Maritime Corridor',
      zh: '中东与波斯湾航运干线',
    },
    origin: {
      en: 'Major Coastal Vehicle Export Ports',
      zh: '沿海主要汽车出口口岸',
    },
    destination: {
      en: 'Jebel Ali / Dammam / Jeddah / Kuwait Ports',
      zh: '杰贝阿里 / 达曼 / 吉达 / 科威特港',
    },
    transitType: {
      en: 'Ro-Ro & Container Shipping',
      zh: '滚装船专线 & 集装箱框架运输',
    },
    leadTime: {
      en: '18 - 25 Days Transit',
      zh: '约 18 - 25 天航程',
    },
    description: {
      en: 'Direct ocean transport services carrying heavy commercial prime movers and construction tippers into key Gulf distribution hubs.',
      zh: '定期海运滚装班轮直航，将大马力牵引车与工程重型自卸车送达海湾物流枢纽。',
    },
  },
  {
    id: 'central-asia',
    name: {
      en: 'Central Asia Overland Corridor',
      zh: '中亚跨境陆路走廊',
    },
    origin: {
      en: 'Inland Consolidation Terminals',
      zh: '内陆集结转运基地',
    },
    destination: {
      en: 'Almaty / Tashkent / Bishkek / Dushanbe',
      zh: '阿拉木图 / 塔什干 / 比什凯克 / 杜尚别',
    },
    transitType: {
      en: 'Overland TIR Truck Convoy & Rail Flatcar',
      zh: 'TIR 国际公路车队驾送 & 铁路平车联运',
    },
    leadTime: {
      en: '8 - 14 Days Transit',
      zh: '约 8 - 14 天陆运',
    },
    description: {
      en: 'Rapid border crossing and direct road driving delivery connecting western land ports with Central Asian commerce.',
      zh: '依托霍尔果斯、阿拉山口等口岸快速通关，支持整车自驾车队直接送达客户指定货场。',
    },
  },
  {
    id: 'africa',
    name: {
      en: 'Africa Maritime Trade Routes',
      zh: '非洲重点港口海运航线',
    },
    origin: {
      en: 'Deepwater Export Terminals',
      zh: '深水汽车专用码头',
    },
    destination: {
      en: 'Lagos / Mombasa / Dar es Salaam / Tema',
      zh: '拉各斯 / 蒙巴萨 / 达累斯萨拉姆 / 特马港',
    },
    transitType: {
      en: 'Scheduled Ro-Ro & Breakbulk',
      zh: '定期滚装船 & 散杂甲板配载',
    },
    leadTime: {
      en: '28 - 38 Days Transit',
      zh: '约 28 - 38 天航程',
    },
    description: {
      en: 'Dedicated shipping solutions serving African civil contracting, mining logistics, and transport operators.',
      zh: '服务非洲各国大型基建工程承包商、矿产开发运输及商业运输公司。',
    },
  },
  {
    id: 'latin-america',
    name: {
      en: 'Latin America Pacific Routes',
      zh: '拉美太平洋航线',
    },
    origin: {
      en: 'Pacific Rim Marine Hubs',
      zh: '环太平洋核心海港',
    },
    destination: {
      en: 'Callao / Valparaiso / Manzanillo / Santos',
      zh: '卡亚俄 / 瓦尔帕莱索 / 曼萨尼约 / 桑托斯',
    },
    transitType: {
      en: 'International Ocean Carrier',
      zh: '跨洋远洋货轮滚装运输',
    },
    leadTime: {
      en: '32 - 42 Days Transit',
      zh: '约 32 - 42 天航程',
    },
    description: {
      en: 'Connecting rugged heavy transport trucks and commercial utility units with South American mining and forestry fleets.',
      zh: '将高可靠性重载自卸车及矿山牵引设备远运至南美各大工矿林业作业基地。',
    },
  },
];
