export interface Product {
  id: string;
  name: string;
  sub: string;
  category: 'automatic' | 'underbody' | 'lifts-pumps' | 'vacuum-detailing';
  categoryLabel: string;
  description: string;
  detailedExplanation: string;
  features: string[];
  image: string;
  banner?: string;
  youtubeId?: string;
  stages?: string[];
  specifications?: { label: string; value: string }[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  accessories?: string[];
}

export const productsData: Product[] = [
  {
    id: "jet-car-wash-plant",
    name: "Jet Car Wash Plant",
    sub: "High Pressure Automatic Contactless Wash",
    category: "automatic",
    categoryLabel: "Automatic Car Wash Systems",
    description: "Advanced robotic wash plant using touchless high-pressure water jet technology for swift, safe car washing.",
    detailedExplanation: "NexoTek Jet Wash Plant uses advanced high-pressure water jet technology to remove dirt, grease, mud, and road contaminants from vehicle surfaces without physical contact. Water is compressed under high pressure and sprayed through precision nozzles to deliver powerful cleaning performance while protecting the vehicle surface. The system ensures fast, efficient, and professional vehicle washing with minimum water consumption.",
    image: "/images/Jet Car Wash Plant.png",
    banner: "/images/Jet Car Wash Plant_Banner.png",
    stages: [
      "Robotic Underbody Wash: Cleans the chassis of mud and road salts.",
      "Pre Wash: Rinses away loose surface dust and grit.",
      "Foam Spray & Wheel Wash: Applies thick active foam and washes tires automatically.",
      "Wax Spray: Coats the vehicle in protective, hydrophobic shine wax.",
      "Final Jet Wash: Completes a high-pressure rinse to reveal a spotless finish."
    ],
    features: [
      "High-pressure precision spray nozzles",
      "Compact and space-efficient modern design",
      "Long operational life under heavy commercial duty",
      "Low maintenance, highly durable components",
      "Fast vehicle cleaning process (under 8 minutes)"
    ],
    specifications: [
      { label: "High Pressure Pump", value: "Triple Ceramic Plunger Pump (40 L/min)" },
      { label: "Nozzle Pressure", value: "150 Bar" },
      { label: "Power Requirement", value: "11-12 kW" },
      { label: "Water Consumption", value: "120 - 140 Litres / Vehicle" },
      { label: "Washing Time", value: "6 - 8 Minutes" },
      { label: "Wheel Wash", value: "Integrated Automatic System" },
      { label: "Chemical Wash", value: "Automatic Metered Injection" },
      { label: "Automation Control", value: "PLC with HMI Touchscreen System" },
      { label: "Underbody Wash", value: "9 Oscillating Nozzles" },
      { label: "Machine Structure", value: "Hot-Dip Galvanized & Powder Coated" },
      { label: "Dimensions (LxWxH)", value: "6.0m × 2.2m × 2.6m" }
    ]
  },
  {
    id: "jet-car-wash-with-dryer",
    name: "Jet Car Wash with Dryer Plant",
    sub: "Fully Automated Wash & Dry Solution",
    category: "automatic",
    categoryLabel: "Automatic Car Wash Systems",
    description: "Combines touchless high-pressure water jet technology, foam applications, wax treatments, and integrated air drying.",
    detailedExplanation: "NexoTek Touchless Jet Car Wash with Dryer combines high-pressure water cleaning, foam application, wax treatment, and integrated air drying into a fully automated washing solution. The system delivers consistent cleaning performance while reducing manual manpower requirements and accelerating vehicle turnaround times.",
    image: "/images/Jet Car Wash with Dryer Plant.png",
    banner: "/images/Jet Car Wash with Dryer Plant_Banner.png",
    stages: [
      "Robotic Underbody Wash: Precision chassis cleaning.",
      "Pre Wash: High-pressure water rinse.",
      "Foam Application: Automatic active foam coverage.",
      "Wax Spray: Hydrophobic sealant application.",
      "Final Wash & Air Drying: Integrated high-speed blowers remove surface moisture."
    ],
    features: [
      "Contactless touchless washing technology",
      "High-pressure water jet spray bars",
      "Integrated multi-blower air drying system",
      "Advanced PLC based automation and sensory safety controls",
      "Corrosion-resistant galvanized structure"
    ],
    specifications: [
      { label: "High Pressure Pump", value: "Triple Ceramic Plunger Pump (40 L/min)" },
      { label: "Nozzle Pressure", value: "150 Bar" },
      { label: "Power Requirement", value: "11-12 kW" },
      { label: "Water Consumption", value: "120 - 140 Litres / Vehicle" },
      { label: "Washing Time", value: "6 - 8 Minutes" },
      { label: "Wheel Wash", value: "Integrated Automatic System" },
      { label: "Chemical Wash", value: "Automatic Metered Injection" },
      { label: "Dryer Support", value: "Yes (Integrated Multi-Fan Blowers)" },
      { label: "Automation Control", value: "PLC with HMI Touchscreen System" },
      { label: "Underbody Wash", value: "9 Oscillating Nozzles" },
      { label: "Machine Structure", value: "Hot-Dip Galvanized & Powder Coated" },
      { label: "Dimensions (LxWxH)", value: "6.8m × 2.2m × 2.6m" }
    ]
  },
  {
    id: "360-single-arm-jet",
    name: "360° Automatic Single Arm Jet Wash Plant",
    sub: "Model: NT-360AJW | Rotating Arm System",
    category: "automatic",
    categoryLabel: "Automatic Car Wash Systems",
    description: "Intelligent rotating arm system delivering complete, rapid vehicle wash coverage with integrated air drying.",
    detailedExplanation: "NexoTek 360° Automatic Single Arm Jet Wash Plant is a next-generation touchless vehicle cleaning solution designed for high-volume car wash operations. The intelligent rotating arm system delivers complete vehicle coverage using high-pressure water jets and advanced automation, ensuring consistent cleaning performance without physical contact. Engineered for speed, reliability, and low operating costs, the system helps car wash centers increase vehicle throughput while maintaining superior wash quality. Its smart control technology, precision positioning, and efficient water usage make it an ideal solution for modern automotive cleaning facilities.",
    image: "/images/360° Automatic Single Arm Jet Wash Plant.png",
    banner: "/images/360° Automatic Single Arm Jet Wash Plant_banner.png",
    youtubeId: "5vWdCstK6X0", // Placeholder YouTube ID (User can replace later)
    features: [
      "360° smart rotating wash arm for full coverage",
      "100% touchless wash technology (prevents scratches)",
      "Advanced PLC-based control with electronic anti-collision system",
      "Integrated 4-motor high-efficiency air drying system",
      "Fast wash cycle (2 to 5 minutes per car)"
    ],
    specifications: [
      { label: "Model", value: "NT-360AJW" },
      { label: "Power Supply", value: "380V / 50Hz / 3Ph / 40KW" },
      { label: "Installation Size", value: "7000mm × 3500mm × 3200mm" },
      { label: "Maximum Vehicle Size", value: "5600mm × 2600mm × 2050mm" },
      { label: "Rail Length", value: "7000 mm" },
      { label: "Shipping Weight", value: "1900 kg / 10 m³" },
      { label: "Water Pump Power", value: "380V / 15 KW" },
      { label: "Air Fan Motor Power", value: "5.5 KW × 4 PCS" },
      { label: "Water Pressure", value: "60 – 100 Bar" },
      { label: "Water Consumption", value: "80 – 150 Litres / Car" },
      { label: "Chemical Consumption", value: "20 – 50 ml / Car" },
      { label: "Electricity Consumption", value: "0.3 – 0.8 Unit / Car" },
      { label: "Mounting Frame", value: "100 × 100 × 4 mm" },
      { label: "Under Wash System", value: "304 Stainless Steel" },
      { label: "Warranty", value: "3 Years Warranty" },
      { label: "Lighting System", value: "Main Light + Gradient LED Guidance Light" },
      { label: "Anti-Collision System", value: "Electronic Anti-Collision Safety System" },
      { label: "360° Rotating Rinse System", value: "304 Stainless Steel Swivel Arm (Up & Down Ectopic Flushing)" },
      { label: "Drive System", value: "Inverter Drive (Longitudinal / Transversal / Rotation)" },
      { label: "Chemical Mixing System", value: "Automatic Metering Pump Proportioning System" },
      { label: "Car Wash Capacity", value: "12 – 30 Vehicles / Hour" }
    ]
  },
  {
    id: "double-arm-jet",
    name: "Automatic Double Arm Jet Wash Plant",
    sub: "Model: NT-DAJW | Dual Swing Arm",
    category: "automatic",
    categoryLabel: "Automatic Car Wash Systems",
    description: "High-throughput overhead dual swing-arm system for ultra-fast and complete touchless cleaning.",
    detailedExplanation: "The NexoTek Automatic Double Arm Jet Wash Plant is engineered for fast, efficient, and touchless vehicle cleaning. Equipped with dual swing-arm technology, the system delivers complete vehicle coverage through high-pressure water jets, automatic foam application, and intelligent control systems. Built with heavy-duty galvanized steel construction and advanced automation, the machine minimizes manpower requirements while improving wash quality and operational efficiency. The dual-arm design enables faster wash cycles, making it an ideal solution for high-volume car wash centers, dealerships, and service stations.",
    image: "/images/Automatic Double Arm Jet Wash Plant.png",
    banner: "/images/Automatic Double Arm Jet Wash Plant_banner.png",
    features: [
      "Dual swing arm cleaning technology for doubled wash speed",
      "Fully automatic PLC-based operation with touch controls",
      "Automatic active foam application",
      "High-pressure water spray system (120 Bar)",
      "Integrated high-flow underbody washing system"
    ],
    specifications: [
      { label: "Model", value: "NT-DAJW" },
      { label: "Machine Type", value: "Overhead Carriage Dual Swing Arm Type" },
      { label: "Required Space", value: "6700mm × 4250mm × 3700mm" },
      { label: "Overall Dimensions", value: "5500mm × 3950mm × 3080mm" },
      { label: "Operating Water Pressure", value: "120 Bar" },
      { label: "Input Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Total Connected Load", value: "9 HP (High Energy Efficiency)" },
      { label: "Water Consumption", value: "125 Litres / Car" }
    ]
  },
  {
    id: "robotic-underbody-washer",
    name: "Robotic Underbody Washer",
    sub: "Moving Rail Chassis Cleaning System",
    category: "underbody",
    categoryLabel: "Underbody Wash Solutions",
    description: "Rail-mounted moving undercarriage cleaning system utilizing oscillating nozzles and logic sensors.",
    detailedExplanation: "The Nexotek Robotic Underbody Washer is provided with a robotic undercarriage wash using oscillating nozzles mounted on a moving rail mechanism. The complete system is integrated with relay logic controls and sensors for locating the vehicle and selecting the vehicle length, ensuring efficient and customized underbody cleaning for all vehicle sizes.",
    image: "/images/Robotic UnderBody Washer.png",
    banner: "/images/Robotic UnderBody Washer_Banner.png",
    features: [
      "Fully automatic robotic operation with vehicle detection sensors",
      "High-pressure underbody cleaning (200 Bar pressure)",
      "9-oscillating nozzle technology for complete coverage",
      "Rail-based movement system with automated length adjustment",
      "PLC-based smart control panel with IP65 waterproof components",
      "Low maintenance, heavy-duty industrial design"
    ],
    specifications: [
      { label: "High Pressure Pump", value: "High Pressure Triple Ceramic Plunger Pump" },
      { label: "Flow Rate", value: "20 / 42 Ltr/min" },
      { label: "Nozzle Pressure", value: "200 Bar" },
      { label: "Power Rating", value: "7.5 HP / 10 HP" },
      { label: "Time Required", value: "1.5 Minutes / Vehicle" },
      { label: "Washing Length", value: "6 meters" },
      { label: "Total No. Of Nozzles", value: "3 / 9 Oscillating Nozzles" },
      { label: "Nozzle Type", value: "Oscillating Multi-Spray System" },
      { label: "Automation Type", value: "Fully Automatic" },
      { label: "Switch Standard", value: "IP65 Waterproof Switch" },
      { label: "Gantry Type", value: "Robotic Rail-Mount" }
    ]
  },
  {
    id: "fixed-nozzle-underbody",
    name: "Fixed Nozzle Underbody Washer",
    sub: "Pit-Based High-Pressure Multi-Nozzle System",
    category: "underbody",
    categoryLabel: "Underbody Wash Solutions",
    description: "Strategically positioned multi-nozzle system designed for pits, offering high speed underbody cleaning.",
    detailedExplanation: "The NexoTek Fixed Nozzle Underbody Washer is designed for efficient cleaning of vehicle chassis and underbody components using strategically positioned high-pressure spray nozzles. The system helps remove mud, grease, dust, and road contaminants while reducing water consumption and operating time. Ideally suited for car wash centers, workshops, and fleet maintenance facilities.",
    image: "/images/4 Nozzel UnderBody Washer.png",
    banner: "/images/4 Nozzel UnderBody Washer_banner.png",
    features: [
      "High-pressure underbody cleaning with fixed spray paths",
      "Multi-nozzle configuration (4, 9, or 15 nozzles)",
      "Improved cleaning coverage through angle optimization",
      "Reduced water consumption per cycle",
      "Fast wash cycle operation (40 seconds per vehicle)",
      "Increases bay productivity in commercial setups"
    ],
    specifications: [
      { label: "Pit Dimensions Required", value: "5500mm × 850mm × 325mm" },
      { label: "Number of Nozzles", value: "4 / 9 / 15 Option" },
      { label: "Input Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Connected Load", value: "15 HP" },
      { label: "Power Consumption", value: "0.12 Units / Car" },
      { label: "Time Consumption", value: "40 Seconds / Cycle" },
      { label: "Water Consumption", value: "45 – 55 Litres / Car" },
      { label: "Operating Pressure", value: "100 Bar" },
      { label: "Applications", value: "Car Wash Centers, Detailing Studios, Fleet Maintenance, Workshops" }
    ]
  },
  {
    id: "compact-underbody-washers",
    name: "Manual & Rotating Underbody Washers",
    sub: "4-Nozzle & Rotating Wand Assemblies",
    category: "underbody",
    categoryLabel: "Underbody Wash Solutions",
    description: "Portable under-carriage washers featuring fixed 4-nozzle grids and rotary spray bars for entry-level setups.",
    detailedExplanation: "Designed as highly versatile, mobile attachments for detailers and smaller workshops. The 4-Nozzle Underbody Washer is a fixed nozzle solution that rolls under vehicles on wheels, utilizing high-pressure water spray for chassis cleaning. The Rotating Underbody Washer features a high-speed rotary spray system for lower vehicle cleaning, offering energy-efficient operation and sturdy stainless steel construction with low maintenance requirements.",
    image: "/images/Rotating UnderBody Washer.png",
    banner: "/images/Rotating UnderBody Washer_banner.png",
    features: [
      "Compact rolling caster designs for easy positioning",
      "High-speed rotating spray nozzle head (for Rotating version)",
      "High-pressure 4-nozzle spray bar (for 4-Nozzle version)",
      "Energy-efficient designs requiring zero electrical power",
      "Suitable for all passenger cars, SUVs, and commercial vans"
    ],
    specifications: [
      { label: "4-Nozzle Spray Bar", value: "Fixed alignment on high-grade caster wheels" },
      { label: "Rotating Spray System", value: "Self-rotating head powered by water pressure" },
      { label: "Construction", value: "Corrosion-resistant Stainless Steel" },
      { label: "Power Source", value: "Directly powered by high-pressure washer line" },
      { label: "Usage", value: "Under chassis cleaning, mud & debris clearing" }
    ]
  },
  {
    id: "scissor-lift",
    name: "Scissor Lift (Hydraulic)",
    sub: "4 Ton Capacity | Underbody Wash & Inspection Support",
    category: "lifts-pumps",
    categoryLabel: "Lifts & Pumps",
    description: "Heavy-duty 4-ton capacity hydraulic lift with mechanical locks, optimized for underbody detailing and access.",
    detailedExplanation: "NexoTek Scissor Lift is heavy-duty support equipment designed for vehicle inspection, servicing, and underbody cleaning. It features a fully synchronized hydraulic runway alignment system and integrated limit switches to secure high and low lift points. Constructed from mild steel and finished with hot-dip galvanizing, it offers extreme resistance to water, soaps, and rust in wet wash bays.",
    image: "/images/Scissor Lift.png",
    banner: "/images/Scissor Lift_Banner.png",
    features: [
      "Hydraulic synchronization system for uniform runway movement",
      "Integrated limit switches controlling high and low lift positions",
      "Push-button controls on an easy-to-use control panel",
      "Mechanical safety lock mechanism for secure servicing",
      "Hot-dip galvanized finish for long-lasting corrosion prevention"
    ],
    specifications: [
      { label: "Lifting Capacity", value: "4 Ton" },
      { label: "Max. Lifting Height", value: "6 Feet" },
      { label: "Dimensions (LxWxH)", value: "9' × 3.6' × 4'" },
      { label: "Motor Power", value: "3 HP" },
      { label: "Voltage", value: "220V / 415V" },
      { label: "Lower Height", value: "4 Inch" },
      { label: "Overall Weight", value: "450 Kg" },
      { label: "Safety Mechanism", value: "Heavy-duty Mechanical Lock" },
      { label: "Surface Finish", value: "Hot-Dip Galvanized" },
      { label: "Body Material", value: "Mild Steel" },
      { label: "Lifting Time", value: "40 Seconds" },
      { label: "Oil Tank Capacity", value: "10 Litres" },
      { label: "Oil Grade", value: "Hydraulic 68" }
    ]
  },
  {
    id: "two-post-lift",
    name: "Two Post Lift",
    sub: "4 Ton Capacity | Overhead Service Lift",
    category: "lifts-pumps",
    categoryLabel: "Lifts & Pumps",
    description: "Heavy-duty dual-column lift with telescoping lift arms, perfect for inspection and mechanical service.",
    detailedExplanation: "The NexoTek Two Post Lift is designed for vehicle servicing, inspection, and maintenance applications. The heavy-duty lifting columns and structure provide safe, balanced, and reliable operation. With dynamic telescoping lifting arms and front/rear adjustability, it ensures easy access to all vehicle underbody components and drivetrains.",
    image: "/images/Two Post Lift.png",
    banner: "/images/Two Post Lift_banner.png",
    features: [
      "Heavy-duty dual column lifting structure (4 Ton Capacity)",
      "Lifting arm adjustments (Front and Rear telescoping)",
      "Balanced load distribution of 2:3 (Front:Rear)",
      "Fast lifting speed (under 45 seconds)",
      "Dual phase input support (1 Phase or 3 Phase)"
    ],
    specifications: [
      { label: "Lifting Capacity", value: "4 Ton" },
      { label: "Overall Height", value: "2844 mm" },
      { label: "Bay Width", value: "3419 mm" },
      { label: "Inside Column Size", value: "2799 mm" },
      { label: "Load Distribution", value: "2 : 3 (Front : Rear)" },
      { label: "Lifting Time", value: "< 45 Seconds" },
      { label: "Drive Through Clearance", value: "2579 mm" },
      { label: "Maximum Lifting Height", value: "1800 mm" },
      { label: "Minimum Height", value: "110 mm" },
      { label: "Lifting Arm Range (Min)", value: "712 mm / 992 mm" },
      { label: "Lifting Arm Range (Max)", value: "1051 mm / 1462 mm" },
      { label: "Power Supply Options", value: "1 Phase / 3 Phase, 50 Hz" },
      { label: "Motor Power", value: "3 HP" }
    ]
  },
  {
    id: "high-pressure-pumps",
    name: "High Pressure Car Wash Pumps",
    sub: "Ceramic Plunger Pump Range (3HP – 20HP)",
    category: "lifts-pumps",
    categoryLabel: "Lifts & Pumps",
    description: "Complete professional range of ceramic plunger pumps for commercial wash bays and detailing studios.",
    detailedExplanation: "NexoTek offers a complete range of high-pressure ceramic plunger pumps designed for vehicle washing, detailing studios, and industrial cleaning applications. Built for reliable performance, high efficiency, and long service life, these pumps are available in Wall Hanging, Trolley Based, and heavy-duty static frames.",
    image: "/images/High Pressure Car Wash Pumps.png",
    banner: "/images/High Pressure Car Wash Pumps_banner.png",
    features: [
      "Solid ceramic plungers for low friction and long seal life",
      "High-grade stainless steel check valves",
      "Heat-treated forged crank shafts for heavy-duty rotation",
      "Heavy-duty forged brass manifolds for high pressure tolerance",
      "Available configurations: Wall Hanging, Trolley Mounted, Heavy Duty static frame"
    ],
    comparisonTable: {
      headers: ["Model/HP", "Phase", "Voltage", "Output (L/min)", "Pressure (Bar)", "RPM", "Weight", "Starter", "Mounting"],
      rows: [
        ["3 HP", "Single", "230V/415V", "12", "140", "1450", "40 kg", "DOL", "Trolley / Wall"],
        ["5 HP", "Three", "415V", "12", "170", "1450", "45 kg", "DOL", "Trolley / Wall"],
        ["7.5 HP", "Three", "415V", "15", "200", "1450", "70 kg", "DOL", "Trolley / Wall"],
        ["10 HP", "Three", "415V", "15/20", "250/200", "1450", "90 kg", "DOL", "Trolley Only"],
        ["15 HP", "Three", "415V", "20", "300", "1450", "90 kg", "Delta", "Trolley Only"],
        ["20 HP", "Three", "415V", "21", "350", "1450", "190 kg", "Delta", "Trolley Only"]
      ]
    },
    accessories: [
      "360° Stainless Steel Wash Boom",
      "Heavy-duty Lance Holder & Accessories Tray",
      "Foam/Wax Bottle Holders",
      "Foam Gun with Quick Connection Coupling",
      "Professional Foam Lance",
      "Long & Short Pressure Wash Lances",
      "Industrial-grade High Pressure Hose Pipes"
    ]
  },
  {
    id: "vacuum-cleaners",
    name: "Vacuum & Upholstery Cleaners",
    sub: "VC Wet & Dry Series / NT Injection Extraction Cleaners",
    category: "vacuum-detailing",
    categoryLabel: "Vacuum & Detailing",
    description: "Heavy-duty commercial wet & dry vacuums and upholstery spray-extraction systems.",
    detailedExplanation: "NexoTek Vacuum Cleaners are designed for professional vehicle detailing, workshop cleaning, and commercial cleaning applications. Built for powerful suction performance, durability, and reliable operation. Upholstery models feature double-stage bypass motors and automatic injection-extraction capabilities for washing fabric seats and carpets.",
    image: "/images/Vacuum & Upholstery Cleaners.png",
    banner: "/images/Vacuum & Upholstery Cleaners_banner.png",
    features: [
      "High suction wet & dry operational capability",
      "Double stage bypass motors for upholstery washing (NT Series)",
      "Robust stainless steel tanks with high capacities (up to 80 Litres)",
      "Wide diameter flex-hoses and heavy-duty steel wands",
      "Sturdy wheel casters and push handles for easy mobility"
    ],
    comparisonTable: {
      headers: ["Parameter", "VC-15WD", "VC-30WD", "VC-50WD", "VC-80WD", "NT-30UC", "NT-40UC"],
      rows: [
        ["Power Supply", "220V", "220-240V", "220-240V", "220-240V", "220-240V", "220-240V"],
        ["Capacity (Tank)", "15 Litres", "30 Litres", "50 Litres", "80 Litres", "30 Litres", "40 Litres"],
        ["Stage / Motors", "Single", "Single", "Double", "Double", "Double (1400W)", "Double (1400W)"],
        ["Vacuum Suction", "180 mbar", "230 mbar", "250 mbar", "280 mbar", "2400 mmH2O", "2400 mmH2O"],
        ["Air Flow Rate", "42 L/s", "53 L/s", "106 L/s", "106 L/s", "230 m³/h", "230 m³/h"],
        ["Hose Diameter", "36 mm", "34.5 mm", "40 mm", "40 mm", "Accessory set", "Accessory set"],
        ["Detergent Tank", "N/A", "N/A", "N/A", "N/A", "10 Litres", "10 Litres"],
        ["Total Weight", "10 kg", "12 kg", "15 kg", "17 kg", "18 kg", "20 kg"]
      ]
    }
  },
  {
    id: "detailing-consumables",
    name: "Consumables & Detailing Accessories",
    sub: "Professional Detailing Chemicals & Tools",
    category: "vacuum-detailing",
    categoryLabel: "Vacuum & Detailing",
    description: "Premium active wash foam, waxes, multi-purpose polishers, and essential detailing accessories.",
    detailedExplanation: "NexoTek offers a complete range of car wash chemicals and detailing consumables designed for professional cleaning, surface protection, and vehicle finishing applications. From dual-action orbital polishers to active colored snow foams and microfiber wands, we provide detailing businesses with a complete supply solution.",
    image: "/images/Consumables & Detailing Accessories.png",
    banner: "/images/Consumables & Detailing Accessories_banner.png",
    features: [
      "Concentrated active snow foam (including colored foam options)",
      "High-protection car waxes and multi-purpose dashboard/body polish",
      "High-density microfiber cloths and wash mitts for scratch-free washing",
      "Dual-action orbital polishers and standard rotary polishers",
      "High-pressure foam tanks (available in stainless steel and MS bodies)"
    ],
    accessories: [
      "Colored Active Wash Foam",
      "Jet Wash Hydrophobic Wax",
      "Upholstery Chemical Cleaner",
      "Multi-Purpose Dashboard & Body Polish",
      "Premium Microfiber Cloths & Glass Microfiber",
      "Chenille Wash Mitts & Heat-Resistant Steam Gloves",
      "Dual Action Orbital Polisher & Normal Car Polisher",
      "Heavy Duty Foam Tank (Stainless Steel & MS Body options)",
      "Long-Life Steam Hose Pipes & Accessories"
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return productsData.find(p => p.id === id);
}
