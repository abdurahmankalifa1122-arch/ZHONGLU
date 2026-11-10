import { Vehicle } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'zl-t520',
    name: 'ZHONGLU ZL-T520',
    model: {
      en: '6x4 Long-Haul Prime Mover',
      zh: '6x4 公路长途重卡牵引车',
    },
    category: 'tractor',
    tagline: {
      en: 'Engineered for high-efficiency interstate and cross-border commercial freight corridors.',
      zh: '专为跨国长途干线物流打造的高出勤、低油耗重型牵引车。',
    },
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    specs: {
      engine: {
        en: '13L Turbocharged Inline-6 Diesel',
        zh: '13升 直列六缸涡轮增压柴油发动机',
      },
      power: {
        en: '520 HP / 2,500 Nm Torque',
        zh: '520 马力 / 2,500 牛·米 扭矩',
      },
      transmission: {
        en: '12-Speed Automated Manual (AMT) with Retarder',
        zh: '12挡 自动换挡变速箱（带液力缓速器）',
      },
      drive: {
        en: '6x4 (Tandem Drive)',
        zh: '6x4 (双级驱动桥)',
      },
      gvw: {
        en: 'Gross Combination Weight: 55,000 kg',
        zh: '准拖挂总质量：55,000 千克',
      },
      emission: {
        en: 'Euro V / Euro VI Configurable',
        zh: '国六 / 欧五 / 欧六 可选配',
      },
      wheelbase: {
        en: '3,450 mm + 1,400 mm',
        zh: '3,450 毫米 + 1,400 毫米',
      },
      fuelCapacity: {
        en: 'Dual Aluminum Tanks (600L + 400L)',
        zh: '双铝合金主副油箱 (600升 + 400升)',
      },
    },
    highlights: {
      en: [
        'Aerodynamic high-roof luxury sleeper cabin',
        'Electronic Braking System (EBS) & Lane Departure Warning',
        'Dual fuel tank configuration for ultra-long range',
        'Heavy-duty fifth wheel assembly',
      ],
      zh: [
        '流线型高顶双卧豪华宽体驾驶室',
        'EBS电子制动系统与车道偏离预警',
        '千升超大双油箱长续航配置',
        '加强型双摆重型鞍座总成',
      ],
    },
    isSample: false,
  },
  {
    id: 'zl-d460',
    name: 'ZHONGLU ZL-D460',
    model: {
      en: '6x4 Heavy Duty Mining Tipper',
      zh: '6x4 重载矿山与工程自卸车',
    },
    category: 'tipper',
    tagline: {
      en: 'Reinforced high-tensile steel construction for severe civil engineering and quarry operations.',
      zh: '高强度耐磨钢厢体与双级轮减桥，适配严苛矿区与基础设施建设。',
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    specs: {
      engine: {
        en: '11.5L Heavy-Duty Intercooled Diesel',
        zh: '11.5升 重型中冷柴油发动机',
      },
      power: {
        en: '460 HP / 2,200 Nm Torque',
        zh: '460 马力 / 2,200 牛·米 扭矩',
      },
      transmission: {
        en: '10-Speed Heavy Duty Manual with Crawler Gears',
        zh: '10挡 重载手动变速箱（带爬坡挡）',
      },
      drive: {
        en: '6x4 (Hub Reduction Double Axle)',
        zh: '6x4 (轮边减速双驱动桥)',
      },
      gvw: {
        en: 'Gross Vehicle Weight: 40,000 kg',
        zh: '最大设计总质量：40,000 千克',
      },
      emission: {
        en: 'Euro III / Euro V Configurable',
        zh: '欧三 / 欧五 依出口国法规匹配',
      },
      wheelbase: {
        en: '3,800 mm + 1,450 mm',
        zh: '3,800 毫米 + 1,450 毫米',
      },
      fuelCapacity: {
        en: '400L Steel Reinforced Fuel Tank',
        zh: '400升 底部加固钢制防护油箱',
      },
    },
    highlights: {
      en: [
        'HARDOX wear-resistant bucket with front tipping cylinder',
        'Reinforced multi-leaf parabolic steel suspension',
        'Integrated desert oil-bath air pre-filtration',
        'Protective steel headlight grille and rock guards',
      ],
      zh: [
        '高耐磨U型工程自卸车厢与前顶多级油缸',
        '多片式加强型双骑马螺栓板簧悬架',
        '沙漠级高位油浴式双空滤进气系统',
        '金属防撞杠与全封闭大灯防护格栅',
      ],
    },
    isSample: false,
  },
  {
    id: 'zl-c380',
    name: 'ZHONGLU ZL-C380',
    model: {
      en: '6x2 Logistics Freight Carrier',
      zh: '6x2 高效干线物流载货车',
    },
    category: 'cargo',
    tagline: {
      en: 'High-cube containerized transport and high-payload regional distribution chassis.',
      zh: '轻量化高承载公路长箱货运底盘，兼顾载重量与低燃油消耗。',
    },
    image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=80',
    specs: {
      engine: {
        en: '9.5L High-Efficiency Common Rail Diesel',
        zh: '9.5升 高效高压共轨柴油机',
      },
      power: {
        en: '380 HP / 1,800 Nm Torque',
        zh: '380 马力 / 1,800 牛·米 扭矩',
      },
      transmission: {
        en: '9-Speed Synchronized Manual',
        zh: '9挡 全同步手动变速箱',
      },
      drive: {
        en: '6x2 (Liftable Tag Axle)',
        zh: '6x2 (后随动可提升桥)',
      },
      gvw: {
        en: 'Gross Vehicle Weight: 25,000 kg',
        zh: '总质量：25,000 千克',
      },
      emission: {
        en: 'Euro V Compliant',
        zh: '欧五 / 国五 标准',
      },
      wheelbase: {
        en: '5,600 mm + 1,350 mm',
        zh: '5,600 毫米 + 1,350 毫米',
      },
      fuelCapacity: {
        en: '600L Aluminum Fuel Tank',
        zh: '600升 单体轻量化铝合金油箱',
      },
    },
    highlights: {
      en: [
        'Air suspension on rear axle for fragile cargo protection',
        'Optimized tare weight for maximum legal payload',
        'Sleeper cabin with air-suspended driver seat',
        'Configurable for van body, curtain-side, or refrigerated box',
      ],
      zh: [
        '后桥可选空气悬架，保护精密仪器与易碎货物',
        '整车轻量化拓扑优化，合规有效载荷最大化',
        '配备气囊减震座椅与舒适双层卧铺',
        '支持厢式货厢、侧帘厢及冷藏保温厢定制',
      ],
    },
    isSample: false,
  },
  {
    id: 'zl-s560',
    name: 'ZHONGLU ZL-S560',
    model: {
      en: '6x4 Severe-Duty Heavy Hauler',
      zh: '6x4 特种大件大马力牵引车',
    },
    category: 'specialized',
    tagline: {
      en: 'Purpose-built for oversized industrial machinery and heavy equipment transport.',
      zh: '专为大型工业特种设备、工程机械与超限货物运输定制的重型鞍座底盘。',
    },
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80',
    specs: {
      engine: {
        en: '15L Industrial High-Torque Turbo Diesel',
        zh: '15升 大排量工业级高扭矩涡轮柴油机',
      },
      power: {
        en: '560 HP / 2,650 Nm Torque',
        zh: '560 马力 / 2,650 牛·米 扭矩',
      },
      transmission: {
        en: '16-Speed Manual with Integrated Hydrodynamic Retarder',
        zh: '16挡 重型齿轮箱（集成大制动扭矩液力缓速器）',
      },
      drive: {
        en: '6x4 (Planetary Hub Reduction)',
        zh: '6x4 (行星齿轮轮边减速桥)',
      },
      gvw: {
        en: 'Gross Combination Weight: 70,000+ kg',
        zh: '准拖挂总质量：70,000+ 千克',
      },
      emission: {
        en: 'Euro V / Euro VI Configurable',
        zh: '欧五 / 欧六 可选配',
      },
      wheelbase: {
        en: '3,600 mm + 1,450 mm',
        zh: '3,600 毫米 + 1,450 毫米',
      },
      fuelCapacity: {
        en: '700L Heavy Duty Tank',
        zh: '700升 工业级大容量油箱',
      },
    },
    highlights: {
      en: [
        'Heavy-duty 90# oscillating fifth wheel',
        'Double-layer full-length chassis reinforcement frame (8+8mm)',
        'Auxiliary cooling tower for continuous high-load towing',
        'Front and rear heavy-duty towing couplings',
      ],
      zh: [
        '配备 90# 铸钢重型十字摆动鞍座',
        '双层高强度大梁通体加强夹层（8+8毫米）',
        '驾驶室后置辅助冷却系统，保障持续重载工况',
        '前后标配重型拖钩与气电连接控制面板',
      ],
    },
    isSample: false,
  },
  {
    id: 'zl-e420',
    name: 'ZHONGLU ZL-E420',
    model: {
      en: '6x4 New Energy Pure Electric Tractor',
      zh: '6x4 新能源纯电动重卡牵引车',
    },
    category: 'electric',
    tagline: {
      en: 'Zero-emission electric commercial propulsion for green port and metropolitan hub routes.',
      zh: '零碳排放纯电驱动商用车，适用于绿色港口倒运、钢厂短驳与城市物流。',
    },
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80',
    specs: {
      engine: {
        en: 'Permanent Magnet Synchronous Dual Motor',
        zh: '永磁同步双电机驱动系统',
      },
      power: {
        en: 'Peak 420 kW (570 HP equivalent) / 3,000 Nm',
        zh: '峰值功率 420 千瓦（约合570马力）/ 3,000 牛·米',
      },
      transmission: {
        en: '4-Speed Dedicated EV Automated Transmission',
        zh: '4挡 新能源重卡专属自动变速器',
      },
      drive: {
        en: '6x4 Electric Drive Axle',
        zh: '6x4 电驱动桥系统',
      },
      gvw: {
        en: 'Gross Combination Weight: 49,000 kg',
        zh: '准拖挂总质量：49,000 千克',
      },
      emission: {
        en: 'Zero Tailpipe Emissions (ZEV)',
        zh: '零尾气排放（纯电动ZEV）',
      },
      wheelbase: {
        en: '3,800 mm + 1,400 mm',
        zh: '3,800 毫米 + 1,400 毫米',
      },
      fuelCapacity: {
        en: '282 kWh / 350 kWh LFP Battery (Fast Charging & Swapping)',
        zh: '282 / 350 千瓦时 磷酸铁锂动力电池（支持双枪快充与极速换电）',
      },
    },
    highlights: {
      en: [
        'Dual-gun fast charging (20% to 80% in 45 minutes)',
        'Battery swapping ready in under 5 minutes',
        'Intelligent regenerative braking energy recovery up to 25%',
        'Integrated smart thermal management system',
      ],
      zh: [
        '双枪大功率快充（20%至80%仅需45分钟）',
        '支持智能底盘顶吊换电，5分钟满电出发',
        '多级制动能量回收系统，综合回收率最高达25%',
        '电池液冷温控系统，支持全天候高负荷运行',
      ],
    },
    isSample: false,
  },
  {
    id: 'zl-v260',
    name: 'ZHONGLU ZL-V260',
    model: {
      en: '4x2 Urban Commercial Freight Truck',
      zh: '4x2 城市商用物流配送载货车',
    },
    category: 'cargo',
    tagline: {
      en: 'Maneuverable urban distribution chassis designed for multi-stop city delivery fleets.',
      zh: '轻巧灵活的城市中重型物流载货车，适配城市商圈配送与区域分拨。',
    },
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    specs: {
      engine: {
        en: '6.7L Turbocharged Diesel Engine',
        zh: '6.7升 高效直列六缸涡轮柴油机',
      },
      power: {
        en: '260 HP / 1,000 Nm Torque',
        zh: '260 马力 / 1,000 牛·米 扭矩',
      },
      transmission: {
        en: '8-Speed Synchromesh Manual',
        zh: '8挡 机械式全同步变速箱',
      },
      drive: {
        en: '4x2 (Single Rear Axle)',
        zh: '4x2 (单后驱动桥)',
      },
      gvw: {
        en: 'Gross Vehicle Weight: 18,000 kg',
        zh: '总质量：18,000 千克',
      },
      emission: {
        en: 'Euro V / Euro VI Configurable',
        zh: '欧五 / 欧六 排放标准',
      },
      wheelbase: {
        en: '5,200 mm',
        zh: '5,200 毫米',
      },
      fuelCapacity: {
        en: '300L Aluminum Fuel Tank',
        zh: '300升 铝合金防腐油箱',
      },
    },
    highlights: {
      en: [
        'Tight turning radius for inner-city navigation',
        'Low chassis height for fast loading dock alignment',
        'Comfort day cabin with rear storage window',
        'Compatible with hydraulic tail-lift installation',
      ],
      zh: [
        '超小转弯半径，轻松出入市区仓库与货运场站',
        '低车架设计，对接升降装卸月台便捷高效',
        '人体工学宽体平头驾驶室，盲区小视野开阔',
        '支持加装各类液压垂直尾板及专用装载设备',
      ],
    },
    isSample: false,
  },
];
