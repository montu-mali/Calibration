import {
  Zap,
  Settings,
  Thermometer,
  Gauge,
  Scale,
  Ruler,
  Activity,
  Truck,
  Factory,
  Car,
  Stethoscope,
  FlaskConical,
  Utensils,
  ZapOff,
  Droplets,
  Microscope,
  Fuel,
  Beaker,
  Cpu,
  Shirt,
  ShieldCheck,
  FileText,
  Boxes,
  CircleCheck,
  LucideIcon
} from "lucide-react";
import { Service, Industry } from "@/types";

export const ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap,
  settings: Settings,
  thermometer: Thermometer,
  gauge: Gauge,
  scale: Scale,
  ruler: Ruler,
  activity: Activity,
  truck: Truck,
  factory: Factory,
  car: Car,
  stethoscope: Stethoscope,
  flask: FlaskConical,
  utensils: Utensils,
  zapoff: ZapOff,
  droplets: Droplets,
  microscope: Microscope,
  fuel: Fuel,
  beaker: Beaker,
  cpu: Cpu,
  shirt: Shirt,
  shield: ShieldCheck,
  file: FileText,
  boxes: Boxes,
  check: CircleCheck,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Calibration Instruments", href: "/services?category=instruments" },
      { label: "Calibration Services", href: "/services?category=services" },
      { label: "ISO Services", href: "/services?category=iso" },
      { label: "Support Service", href: "/services?category=support" },
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Certificates", href: "/certificates" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  // --- Calibration Instruments ---
  {
    id: "dial-calibration-tester",
    title: "Dial Calibration Tester",
    slug: "dial-calibration-tester",
    category: "Calibration Instruments",
    image: "/images/instruments/dial_calibration_tester.jpg",
    description: "High-precision testing equipment for dial gauges and indicators with ultra-fine resolution.",
    iconId: "settings",
    longDescription: "Our Dial Calibration Tester is designed for the precise verification and calibration of dial indicators, test indicators, and bore gauges. It features a robust mechanical structure combined with high-resolution digital feedback to ensure micron-level accuracy.",
    benefits: ["Micron-level precision", "Robust mechanical design", "Digital read-out compatibility", "Repeatable measurement results"],
    process: [
      { step: "Initial Alignment", description: "Securing the dial indicator in the testing jig." },
      { step: "Full Range Testing", description: "Verification at multiple points across the instrument's span." },
      { step: "Hysteresis Check", description: "Measuring deviation between forward and backward strokes." }
    ],
    equipment: ["Master Dial Tester", "Resolution Gauges", "Stability Blocks"],
    standards: ["ISO 463", "ASME B89.1.10M"],
    applications: ["Tool Rooms", "Quality Control Labs", "Machine Tool Manufacturers"],
    faqs: [
      { question: "What is the accuracy of the tester?", answer: "Our testers provide accuracy up to ±0.001mm." },
      { question: "Can it calibrate digital indicators?", answer: "Yes, it is compatible with both analog and digital indicators." }
    ]
  },
  {
    id: "power-clamp-meter",
    title: "Power Clamp Meter",
    slug: "power-clamp-meter",
    category: "Calibration Instruments",
    image: "/images/instruments/power_clamp_meter.jpg",
    description: "Advanced electrical measurement tool for non-invasive current and power analysis.",
    iconId: "zap",
    longDescription: "The Power Clamp Meter is an essential tool for electrical engineers, allowing for the measurement of current, voltage, and power without breaking the circuit. It is calibrated to provide accurate True-RMS readings in complex industrial environments.",
    benefits: ["Non-invasive measurement", "True-RMS accuracy", "Safety rated for industrial use", "Multiple parameter tracking"],
    process: [
      { step: "Safety Check", description: "Visual inspection for insulation integrity." },
      { step: "Load Simulation", description: "Testing against precision current sources." },
      { step: "Harmonic Analysis", description: "Verification of accuracy across various frequencies." }
    ],
    equipment: ["Multi-product Calibrator", "Current Coils", "Power Standards"],
    standards: ["IEC 61010", "IEEE 519"],
    applications: ["Electrical Maintenance", "Energy Auditing", "Power Quality Analysis"],
    faqs: [
      { question: "Does it measure power factor?", answer: "Yes, our advanced models measure Active, Reactive, and Apparent power as well as Power Factor." }
    ]
  },
  {
    id: "slip-gauge-set",
    title: "Slip Gauge Set",
    slug: "slip-gauge-set",
    category: "Calibration Instruments",
    image: "/images/instruments/slip_gauge_set.jpg",
    description: "Primary standards for dimensional metrology, available in Grade 0, 1, and 2.",
    iconId: "ruler",
    longDescription: "Our Slip Gauge Sets (also known as Gauge Blocks) serve as the foundation of dimensional measurement in tool rooms. Made from high-quality alloy steel or ceramic, they offer exceptional stability and wear resistance.",
    benefits: ["Exceptional surface finish", "High thermal stability", "Wringability excellence", "NABL traceable"],
    process: [
      { step: "Cleaning", description: "Removal of protective oils using high-grade solvents." },
      { step: "De-magnetization", description: "Ensuring no magnetic attraction affects wringing." },
      { step: "Interferometry", description: "Comparison against laser standards for Grade 0 blocks." }
    ],
    equipment: ["Gauge Block Comparator", "Monochromatic Light Source", "Optical Flats"],
    standards: ["ISO 3650", "IS 2984"],
    applications: ["Standard Labs", "Tool & Die Making", "Inspection Calibration"],
    faqs: [
      { question: "Steel vs Ceramic - which is better?", answer: "Ceramic is better for wear resistance and corrosion, while steel is the traditional choice for thermal coefficient matching." }
    ]
  },
  {
    id: "thermocouple-sensor",
    title: "Thermocouple Sensor",
    slug: "thermocouple-sensor",
    category: "Calibration Instruments",
    image: "/images/instruments/thermocouple_sensor.jpg",
    description: "Reliable temperature sensing solutions for extreme industrial environments.",
    iconId: "thermometer",
    longDescription: "We provide high-quality Thermocouple Sensors (Types J, K, T, R, S, B) designed for a wide range of temperature measurements, from cryogenic applications to high-temperature furnaces.",
    benefits: ["Wide temperature range", "Fast response time", "Durable sheath materials", "Custom lengths available"],
    process: [
      { step: "Thermal Equilibrium", description: "Placement in high-stability calibration baths." },
      { step: "EMF Measurement", description: "Comparison against primary SPRT standards." },
      { step: "Cold Junction Comp", description: "Verification of internal compensation accuracy." }
    ],
    equipment: ["Dry Block Calibrator", "Standard PRT", "High-stability Furnaces"],
    standards: ["ASTM E230", "IEC 60584"],
    applications: ["Heat Treatment", "Plastic Molding", "Food Processing"],
    faqs: [
      { question: "Which type is best for 1000°C?", answer: "Type K or Type N are commonly used, but Type S/R are preferred for high-precision laboratory use at those temperatures." }
    ]
  },
  {
    id: "vernier-face-caliper",
    title: "Vernier Face Caliper",
    slug: "vernier-face-caliper",
    category: "Calibration Instruments",
    image: "/images/instruments/vernier_face_caliper.jpg",
    description: "Versatile dimensional measurement tool for internal, external, and depth checks.",
    iconId: "ruler",
    longDescription: "The Vernier Face Caliper is a staple in every machine shop. Our calipers are precision-ground to provide smooth movement and clear, easy-to-read scales, ensuring accurate measurements every time.",
    benefits: ["Stainless steel construction", "Four-way measurement", "Fine adjustment screw", "Anti-glare satin chrome finish"],
    process: [
      { step: "Zero Verification", description: "Checking the alignment of jaws at the closed position." },
      { step: "Linearity Test", description: "Measurement against grade 0 slip gauges at 5 points." },
      { step: "Parallelism Check", description: "Ensuring measurement jaws are perfectly parallel." }
    ],
    equipment: ["Calibration Grade Gauge Blocks", "Granite Surface Plate", "Master Caliper"],
    standards: ["ISO 13385-1", "DIN 862"],
    applications: ["Machining", "Automotive Parts", "General Engineering"],
    faqs: [
      { question: "What is the typical resolution?", answer: "Our analog calipers typically offer 0.02mm, while digital versions offer 0.01mm." }
    ]
  },
  {
    id: "pressure-calibrator",
    title: "Pressure Calibrator",
    slug: "pressure-calibrator",
    category: "Calibration Instruments",
    image: "/images/instruments/pressure_calibrator.jpg",
    description: "Field and lab solutions for testing pressure gauges and transmitters.",
    iconId: "gauge",
    longDescription: "Our Pressure Calibrators combine high-accuracy sensors with integrated pressure generation. They are rugged enough for field use while maintaining the precision required for laboratory standards.",
    benefits: ["Dual-range capability", "Built-in hand pump", "Loop power supply", "Rugged field-ready design"],
    process: [
      { step: "Leak Test", description: "Pressure stabilization to ensure system integrity." },
      { step: "Comparison", description: "Readings against internal master sensor." },
      { step: "Logging", description: "Automatic capture of pressure vs. mA output for transmitters." }
    ],
    equipment: ["Deadweight Tester", "Digital Pressure Controller", "Vacuum Pumps"],
    standards: ["DKD-R 6-1", "EURAMET cg-17"],
    applications: ["Petrochemical Plants", "Hydraulic Maintenance", "Process Instrumentation"],
    faqs: [
      { question: "What is the max pressure?", answer: "We offer models ranging from vacuum up to 10,000 psi." }
    ]
  },
  {
    id: "multi-meter",
    title: "Multi Meter",
    slug: "multi-meter",
    category: "Calibration Instruments",
    image: "/images/instruments/multimeter.jpg",
    description: "High-precision 8.5 digit multimeters for the most demanding lab requirements.",
    iconId: "zap",
    longDescription: "Our high-precision multimeters are the reference standard for DC and low-frequency AC measurements. Featuring up to 8.5 digits of resolution, they are essential for primary metrology labs.",
    benefits: ["8.5 digit resolution", "Self-calibration technology", "Direct current measurement", "Graphic display for trend analysis"],
    process: [
      { step: "Warm-up", description: "24-hour stabilization to reach thermal equilibrium." },
      { step: "Full Function Test", description: "Testing V, I, R, C across all ranges." },
      { step: "Linearity Verification", description: "Using Josephsen Junction standards (for 8.5 digit models)." }
    ],
    equipment: ["Multi-product Calibrator", "Standard Resistors", "Saturated Buffer Cells"],
    standards: ["ISO/IEC 17025", "MIL-STD-45662A"],
    applications: ["Primary Metrology Labs", "Military Electronics", "Avionics Testing"],
    faqs: [
      { question: "How often should it be calibrated?", answer: "For primary standards, every 180 days; for general use, every 12 months." }
    ]
  },
  {
    id: "length-bar",
    title: "Length Bar",
    slug: "length-bar",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800",
    description: "Master standards for large-scale dimensional calibration.",
    iconId: "ruler",
    longDescription: "Length bars are used for calibrating large instruments like long-reach micrometers and height gauges. Our bars are made from specialized steel with high thermal stability and precision-lapped ends.",
    benefits: ["Standard lengths up to 1000mm", "High parallelism", "Serialized for traceability", "Protective wooden casing"],
    process: [
      { step: "Stabilization", description: "Minimum 48-hour soak in a 20°C environment." },
      { step: "Lapping Inspection", description: "Surface finish check using optical flats." },
      { step: "Comparator Measurement", description: "Verification against laser interferometer." }
    ],
    equipment: ["Horizontal Bench Micrometer", "Laser Interferometer", "Temp probes"],
    standards: ["BS 1788", "ISO 3650"],
    applications: ["Aerospace Manufacturing", "Heavy Engineering", "Metrology Facilities"],
    faqs: [
      { question: "Are these available in sets?", answer: "Yes, we offer standard sets and individual bars for custom requirements." }
    ]
  },
  {
    id: "digital-clamp-meters",
    title: "Digital Clamp Meters",
    slug: "digital-clamp-meters",
    category: "Calibration Instruments",
    image: "/images/instruments/power_clamp_meter.jpg",
    description: "Compact and reliable digital clamps for quick current measurements.",
    iconId: "activity",
    longDescription: "Our Digital Clamp Meters are designed for electricians who need a reliable, easy-to-use tool for everyday maintenance. They offer quick current readings with integrated voltage and resistance measurement capabilities.",
    benefits: ["Auto-ranging", "Backlit LCD", "CAT III 600V safety rating", "Compact jaw design"],
    process: [
      { step: "Function Verification", description: "Testing all dial positions for continuity and range." },
      { step: "Clamp Calibration", description: "Using 50-turn coil to simulate high current loads." },
      { step: "Accuracy Tuning", description: "Internal potentiometer adjustment if needed." }
    ],
    equipment: ["5522A Calibrator", "Current Coil", "Resistance Boxes"],
    standards: ["IEC 61010-2-032", "EN 61326"],
    applications: ["Residential Electrical", "HVAC Maintenance", "Panel Board Testing"],
    faqs: [
      { question: "Can it measure DC current?", answer: "Specific models feature Hall Effect sensors for both AC and DC measurement." }
    ]
  },
  {
    id: "earth-resistance-tester",
    title: "Earth Resistance Tester",
    slug: "earth-resistance-tester",
    category: "Calibration Instruments",
    image: "/images/instruments/earth_resistance_tester.jpg",
    description: "Safety critical instrument for verifying grounding and bonding systems.",
    iconId: "zapoff",
    longDescription: "Ensuring a low-resistance path to ground is vital for electrical safety. Our Earth Resistance Testers are calibrated to provide accurate soil resistivity and grounding system measurements.",
    benefits: ["2, 3, and 4 pole testing", "High noise rejection", "Integrated battery charger", "Rugged outdoor case"],
    process: [
      { step: "Open Circuit Test", description: "Verifying the instrument's drive voltage." },
      { step: "Resistance Check", description: "Testing against standard decade boxes with 4-wire leads." },
      { step: "Frequency Sweep", description: "Checking noise filtering at 128Hz and other frequencies." }
    ],
    equipment: ["Standard Decade Resistance Box", "Variable Ground Simulator", "Precision Leads"],
    standards: ["IEEE 81", "IEC 61557"],
    applications: ["Substation Commissioning", "Lightning Protection", "Telecommunication Sites"],
    faqs: [
      { question: "Does it come with stakes?", answer: "Yes, our standard kits include earth stakes and reels of wire." }
    ]
  },
  {
    id: "cycling-power-meter",
    title: "Cycling Power Meter",
    slug: "cycling-power-meter",
    category: "Calibration Instruments",
    image: "/images/instruments/cycling_power_meter.jpg",
    description: "Precision strain-gauge based power measurement for athletic performance.",
    iconId: "activity",
    longDescription: "Calibration of cycling power meters ensures that athletes are training at the correct intensities. We use specialized dynamic test benches to verify wattage accuracy across various cadences.",
    benefits: ["±1% accuracy target", "Cadence verification", "Temperature compensation check", "Wireless signal integrity"],
    process: [
      { step: "Static Weight Test", description: "Applying known masses to verify torque calculation." },
      { step: "Dynamic Bench Test", description: "Comparing against an SRM or PowerTap master hub." },
      { step: "Thermal Drift Test", description: "Cycling between 5°C and 40°C to check offset." }
    ],
    equipment: ["Cyclus2 Ergometer", "Standard Masses", "ANT+/BLE Analyzers"],
    standards: ["NIST Traceable Mass", "Proprietary Dynamic Standards"],
    applications: ["Professional Sports Teams", "Performance Labs", "Manufacturer R&D"],
    faqs: [
      { question: "Can you calibrate pedal-based meters?", answer: "Yes, we support pedal, crank, and hub-based power meters." }
    ]
  },
  {
    id: "ampere-meter",
    title: "Ampere Meter",
    slug: "ampere-meter",
    category: "Calibration Instruments",
    image: "/images/instruments/ampere_meter.jpg",
    description: "Analog and digital ammeters for panel mounting or portable use.",
    iconId: "zap",
    longDescription: "Our Ampere Meters provide accurate current monitoring for industrial panels. Whether analog (moving iron/coil) or digital, we ensure they meet their specified accuracy class for reliable operation.",
    benefits: ["Clear visibility", "High overload capacity", "Shunt and CT compatible", "Standard DIN sizes"],
    process: [
      { step: "Zero Adjustment", description: "Mechanical or electronic zeroing of the pointer/display." },
      { step: "Scale Verification", description: "Testing at 20%, 40%, 60%, 80%, and 100% of f.s.d." },
      { step: "Load Cycle", description: "Ensuring thermal stability under continuous rated current." }
    ],
    equipment: ["High Current Source", "Precision Shunts", "Standard Ammeter"],
    standards: ["IEC 60051", "IS 1248"],
    applications: ["Switchgear Panels", "Battery Charging Systems", "Process Control"],
    faqs: [
      { question: "Do you calibrate DC shunts as well?", answer: "Yes, we provide resistance calibration for high-current shunts up to 5000A." }
    ]
  },
  {
    id: "multimeter-standard",
    title: "Multimeter",
    slug: "multimeter",
    category: "Calibration Instruments",
    image: "/images/instruments/multimeter.jpg",
    description: "Versatile handheld multimeters for general electrical and electronic testing.",
    iconId: "activity",
    longDescription: "The most commonly used tool in electrical engineering. We provide a range of handheld multimeters from leading brands, all calibrated and ready for use in industrial or laboratory environments.",
    benefits: ["True-RMS measurement", "Ruggedized housing", "Long battery life", "Comprehensive test lead sets"],
    process: [
      { step: "Full Range Calibration", description: "Verifying all electrical parameters across all ranges." },
      { step: "Environmental Testing", description: "Checking performance under humidity and temperature extremes." },
      { step: "Safety Verification", description: "Fused input testing and CAT rating compliance." }
    ],
    equipment: ["5502A/5522A Calibrator", "Standard Decade Boxes", "Frequency Standards"],
    standards: ["EN 61010", "ISO 17025"],
    applications: ["Industrial Maintenance", "Electronic Repair", "Engineering Labs"],
    faqs: [
      { question: "Does it come with a certificate?", answer: "Yes, all our multimeters are supplied with a NABL traceable calibration certificate." }
    ]
  },

  // --- Calibration Services ---
  {
    id: "mass-balance-calibration",
    title: "Mass Balance Calibration Service",
    slug: "mass-balance-calibration-service",
    category: "Calibration Services",
    image: "/images/services/mass_balance.jpg",
    description: "Expert calibration for analytical and industrial weighing systems.",
    iconId: "scale",
    longDescription: "Precision weighing is critical in chemistry and manufacturing. Our mass balance calibration service uses Class E2 and F1 weights to ensure your balances are accurate to the sub-milligram level.",
    benefits: ["OIML R111 compliance", "Linearity and Repeatability checks", "Corner load verification", "Uncertainty budget provided"],
    process: [
      { step: "Leveling", description: "Ensuring the balance is perfectly horizontal." },
      { step: "Internal Cal", description: "Triggering and verifying the balance's internal calibration." },
      { step: "External Verification", description: "Multi-point testing with certified standard weights." }
    ],
    equipment: ["Class E2 Weight Set", "Anti-vibration Table", "Temp/Humidity loggers"],
    standards: ["OIML R76", "NIST Handbook 44"],
    applications: ["Analytical Chemistry", "Pharmaceutical Filling", "Jewelry Trading"],
    faqs: [
      { question: "How often should I calibrate my lab balance?", answer: "We recommend daily internal checks and annual professional external calibration." }
    ]
  },
  {
    id: "hot-wire-anemometer-calibration",
    title: "Hot Wire Anemometer NABL Calibration",
    slug: "hot-wire-anemometer-nabl-calibration",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    description: "Specialized low-flow velocity calibration for cleanrooms and HVAC.",
    iconId: "droplets",
    longDescription: "Hot wire anemometers are sensitive instruments used for measuring very low air velocities. Our NABL-accredited wind tunnel ensures accurate calibration for laminar flow hoods and cleanroom monitoring.",
    benefits: ["Accredited low-flow ranges", "Temperature compensation check", "Digital signal verification", "Traceable to NPL standards"],
    process: [
      { step: "Probe Inspection", description: "Checking the delicate wire sensor for contamination." },
      { step: "Tunnel Stabilization", description: "Establishing steady laminar air flow." },
      { step: "Velocity Comparison", description: "Reading against primary Pitot tube or Laser Doppler Anemometer." }
    ],
    equipment: ["Low-speed Wind Tunnel", "LDA Master", "Precision Barometer"],
    standards: ["ISO 17713", "ASTM D4480"],
    applications: ["HVAC Validation", "Cleanroom Certification", "Environmental Monitoring"],
    faqs: [
      { question: "What is the minimum velocity you can calibrate?", answer: "We can calibrate down to 0.05 m/s in our specialized low-flow tunnel." }
    ]
  },
  {
    id: "mechanical-instrument-calibration",
    title: "Mechanical Instrument Calibration Service",
    slug: "mechanical-instrument-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1535813540-d18117ab765a?auto=format&fit=crop&q=80&w=800",
    description: "Comprehensive calibration for all hand-held mechanical measuring tools.",
    iconId: "settings",
    longDescription: "From micrometers to torque wrenches, our mechanical calibration service ensures your production tools are within tolerance. We utilize high-grade master standards and controlled environments to minimize measurement uncertainty.",
    benefits: ["One-stop shop for all tools", "Rapid turnaround", "Repair and adjustment services", "Digital certificate management"],
    process: [
      { step: "Reception & Log", description: "Unique tracking for every customer tool." },
      { step: "Cleaning & Deburring", description: "Restoring measurement surfaces to optimal condition." },
      { step: "Calibration", description: "Verification against NABL traceable standards." }
    ],
    equipment: ["Universal Length Machine", "Torque Tester", "Hardness Standards"],
    standards: ["ISO/IEC 17025", "VDI/VDE 2617"],
    applications: ["Automotive Manufacturing", "General Machined Parts", "Defense Contractors"],
    faqs: [
      { question: "Do you provide adjustment for torque wrenches?", answer: "Yes, we provide minor adjustment and click-mechanism lubrication as part of our service." }
    ]
  },
  {
    id: "process-instrument-calibration",
    title: "Process Instrument Calibration",
    slug: "process-instrument-calibration",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800",
    description: "Calibration of transmitters, valves, and controllers in industrial process loops.",
    iconId: "activity",
    longDescription: "Our process instrument calibration service focuses on the critical components of your control loops. We calibrate pressure transmitters, temperature controllers, and I/P converters to ensure optimal process stability.",
    benefits: ["Improved process yield", "Reduced energy consumption", "Regulatory compliance (FDA/EPA)", "Minimized safety risks"],
    process: [
      { step: "Loop Check", description: "Verifying signal integrity from sensor to DCS." },
      { step: "Instrument Cal", description: "Using portable calibrators for 5-point verification." },
      { step: "HART/Foundation Fieldbus", description: "Digital configuration and trim for smart instruments." }
    ],
    equipment: ["Documenting Process Calibrators", "Dry Block Heaters", "Pneumatic Hand Pumps"],
    standards: ["ISA-S51.1", "IEC 60770"],
    applications: ["Refineries", "Chemical Plants", "Power Generation"],
    faqs: [
      { question: "Can you perform this during a turnaround?", answer: "Yes, we specialize in high-volume calibration during scheduled plant shutdowns." }
    ]
  },
  {
    id: "analytical-instrument-calibration",
    title: "Analytical Instrument Calibration Service",
    slug: "analytical-instrument-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    description: "Precision calibration for pH meters, spectrophotometers, and HPLC systems.",
    iconId: "flask",
    longDescription: "Analytical results are only as good as the calibration behind them. We provide comprehensive calibration for laboratory analytical equipment using certified reference materials (CRMs).",
    benefits: ["Compliance with GLP/GMP", "Certified Reference Materials", "Full IQ/OQ/PQ support", "Highly trained chemists"],
    process: [
      { step: "Baseline Check", description: "Verifying detector noise and drift levels." },
      { step: "CRM Comparison", description: "Testing against NIST traceable standard solutions." },
      { step: "Software Validation", description: "Ensuring data integrity and 21 CFR Part 11 compliance." }
    ],
    equipment: ["Standard Buffer Solutions", "Holmium Oxide Filters", "Precision Pipettes"],
    standards: ["USP <1058>", "ISO 15189"],
    applications: ["Pharma R&D", "Food Quality Labs", "Environmental Testing"],
    faqs: [
      { question: "Do you supply the buffer solutions?", answer: "Yes, we use only high-purity, certified buffer solutions for our pH and conductivity calibrations." }
    ]
  },
  {
    id: "sensor-calibration",
    title: "Sensor Calibration",
    slug: "sensor-calibration",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    description: "Verification of proximity, level, and specialized industrial sensors.",
    iconId: "cpu",
    longDescription: "Sensors are the eyes and ears of automation. We provide specialized calibration for proximity sensors, ultrasonic level transmitters, and gas detection sensors to ensure reliable feedback for your PLC/SCADA systems.",
    benefits: ["Prevent false trips", "Ensure operator safety", "Optimize machine speed", "Traceable signal verification"],
    process: [
      { step: "Physical Align", description: "Checking the sensor mounting and target path." },
      { step: "Response Test", description: "Triggering the sensor at various distances or concentrations." },
      { step: "Switch Point Cal", description: "Adjusting hystersis and setpoints for precision switching." }
    ],
    equipment: ["Laser Distance Standards", "Standard Gas Mixtures", "Frequency Counters"],
    standards: ["IEC 60947", "ISO 13849"],
    applications: ["Robotic Assembly", "Warehouse Automation", "Safety Interlocks"],
    faqs: [
      { question: "Do you calibrate gas sensors?", answer: "Yes, we use certified span gases for CO, H2S, O2, and LEL sensors." }
    ]
  },
  {
    id: "in-lab-calibration",
    title: "In-Lab Calibration Service",
    slug: "in-lab-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
    description: "Environmentally controlled calibration in our world-class facility.",
    iconId: "microscope",
    longDescription: "Our main laboratory provides the highest level of measurement precision. With strict temperature, humidity, and vibration controls, we offer the lowest possible measurement uncertainties for your reference standards.",
    benefits: ["Lowest uncertainty levels", "Controlled environment (20°C ±0.5°C)", "Primary standard availability", "Comprehensive measurement reports"],
    process: [
      { step: "Quarantine", description: "Incoming inspection and environmental acclimation." },
      { step: "Calibration", description: "Performed by senior metrologists on primary benches." },
      { step: "Quality Audit", description: "Secondary review of all data before certificate issuance." }
    ],
    equipment: ["Air-bearing Benches", "SPRT Standards", "Josephson Voltage Array"],
    standards: ["ISO/IEC 17025", "NABL"],
    applications: ["Reference Standard Calibration", "Complex Instrumentation", "High-accuracy Tooling"],
    faqs: [
      { question: "What is your typical turnaround?", answer: "Standard turnaround is 5-7 working days for in-lab services." }
    ]
  },
  {
    id: "mobile-calibration",
    title: "Mobile Calibration Service",
    slug: "mobile-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=800",
    description: "Precision on wheels - we bring our lab to your doorstep.",
    iconId: "truck",
    longDescription: "Our mobile calibration units are fully equipped climate-controlled labs on wheels. They offer the convenience of on-site service with the precision and environmental control of a fixed facility.",
    benefits: ["Zero transport risk", "Same-day turnaround", "Minimal equipment downtime", "Face-to-face consultation"],
    process: [
      { step: "Site Arrival", description: "Powering up and stabilizing mobile standards." },
      { step: "Execution", description: "Engineers collect and calibrate items inside the van." },
      { step: "Instant Delivery", description: "Return of tools with printed certificates on-site." }
    ],
    equipment: ["Multi-product Calibrator", "Portable Dry Blocks", "Master Gauge Blocks"],
    standards: ["ISO/IEC 17025 (Mobile Scope)", "ISO 9001"],
    applications: ["Large Manufacturing Sites", "Defense Bases", "Remote Infrastructure"],
    faqs: [
      { question: "Do you need our power supply?", answer: "Our mobile labs are equipped with high-stability onboard generators and UPS systems." }
    ]
  },
  {
    id: "in-process-calibration",
    title: "In-Process Calibration Service",
    slug: "in-process-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    description: "Calibration of instruments while they remain active in the production line.",
    iconId: "activity",
    longDescription: "Stop losing production time to calibration. Our in-process service uses non-invasive methods and bypass loops to verify instrument accuracy while your plant keeps running.",
    benefits: ["No production stops", "Real-world conditions", "Trend analysis of live data", "Reduced operational cost"],
    process: [
      { step: "Bypass Setup", description: "Safely isolating the instrument signal without process interruption." },
      { step: "Comparison", description: "Using clamp-on or insertion standards for verification." },
      { step: "Live Trim", description: "Fine-tuning transmitter output to match actual process values." }
    ],
    equipment: ["Clamp-on Ultrasonic Flowmeters", "Comparison Probes", "Loop Simulators"],
    standards: ["ASME PTC 19.3", "ISA TR20.00.01"],
    applications: ["Continuous Flow Industries", "Critical Power Systems", "HVAC Control"],
    faqs: [
      { question: "Is it as accurate as lab calibration?", answer: "While uncertainties are slightly higher, the benefit of calibrating at operating conditions often yields more practical accuracy." }
    ]
  },
  {
    id: "onsite-calibration-service",
    title: "Onsite Calibration Service",
    slug: "onsite-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    description: "Professional engineers performing calibration directly at your workstation.",
    iconId: "settings",
    longDescription: "Our engineers visit your facility to calibrate fixed equipment like surface plates, ovens, and large scales. We bring the standards and expertise to you, ensuring your large-scale assets are verified without removal.",
    benefits: ["No shipping costs", "Immediate adjustments", "Process-specific advice", "Bulk calibration efficiency"],
    process: [
      { step: "Area Preparation", description: "Setting up portable master standards at the equipment location." },
      { step: "Verification", description: "Executing test protocols on the customer's equipment." },
      { step: "Tagging", description: "Applying calibration labels and updating site records." }
    ],
    equipment: ["Precision Levels", "Data Loggers", "Electronic Load Banks"],
    standards: ["ISO/IEC 17025", "Customer-specific SOPs"],
    applications: ["Large Scale Weighing", "Thermal Processing", "Environmental Chambers"],
    faqs: [
      { question: "How many items can you do in a day?", answer: "A typical team can calibrate between 15-30 handheld instruments or 2-3 large systems per day." }
    ]
  },
  {
    id: "laboratory-instrument-services",
    title: "Laboratory Instrument Services",
    slug: "laboratory-instrument-services",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    description: "Maintenance and validation for centrifuges, incubators, and shakers.",
    iconId: "beaker",
    longDescription: "Beyond simple calibration, we provide comprehensive maintenance and validation for general laboratory equipment. We ensure that your incubators maintain uniform temperature and your centrifuges operate at the correct RPM.",
    benefits: ["Extended equipment life", "Compliance with ISO 15189", "Preventative maintenance included", "Detailed validation protocols"],
    process: [
      { step: "RPM Verification", description: "Non-contact tachometer check for centrifuges and shakers." },
      { step: "Mapping", description: "Multipoint temperature/CO2 mapping for incubators." },
      { step: "Filter Check", description: "Verifying HEPA filter integrity in safety cabinets." }
    ],
    equipment: ["Laser Tachometer", "Wireless Data Loggers", "Particle Counters"],
    standards: ["ISO 15189", "EN 12469"],
    applications: ["Clinical Labs", "Bio-Tech Research", "University Science Depts"],
    faqs: [
      { question: "Do you offer service contracts?", answer: "Yes, we provide annual maintenance contracts (AMC) for complete lab setups." }
    ]
  },

  // --- ISO Services ---
  {
    id: "iso-9001-service",
    title: "ISO 9001 Service",
    slug: "iso-9001-service",
    category: "ISO Services",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    description: "Expert consultancy for achieving ISO 9001 certification. We optimize your Quality Management System for zero-defect compliance.",
    iconId: "shield",
    longDescription: "We provide end-to-end support for ISO 9001 Quality Management Systems. Our experts guide you through the entire process, from gap analysis to the final certification audit, ensuring a robust and efficient QMS.",
    benefits: ["Global recognition", "Improved process efficiency", "Customer satisfaction boost", "Risk-based thinking implementation"],
    process: [
      { step: "Gap Analysis", description: "Reviewing existing processes against ISO standards." },
      { step: "Training", description: "Educating staff on QMS principles and internal auditing." },
      { step: "Internal Audit", description: "Pre-certification check to ensure compliance." }
    ],
    equipment: ["QMS Management Software", "Audit Checklists", "Training Modules"],
    standards: ["ISO 9001:2015"],
    applications: ["Manufacturing", "Service Sector", "Healthcare Management"],
    faqs: [
      { question: "How long does it take?", answer: "A typical implementation takes between 3 to 6 months depending on the organization's size." }
    ]
  },
  {
    id: "iso-9001-documentation-kit",
    title: "ISO 9001:2015 Documentation Kit",
    slug: "iso-9001-2015-documentation-kit",
    category: "ISO Services",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=800&auto=format&fit=crop",
    description: "Comprehensive, ready-to-deploy templates including procedures, forms, and policies designed for rapid ISO compliance.",
    iconId: "file",
    longDescription: "Save hundreds of hours with our professionally developed ISO 9001:2015 Documentation Kit. It includes fully editable Word/Excel templates for Quality Manuals, Procedures, and essential forms.",
    benefits: ["Save time and effort", "Expert-designed templates", "Easily customizable", "Ensure 100% compliance"],
    process: [
      { step: "Template Selection", description: "Choosing the documents relevant to your business scope." },
      { step: "Customization", description: "Adding company-specific details and workflows." },
      { step: "Deployment", description: "Rolling out the new documentation to relevant departments." }
    ],
    equipment: ["Digital Template Library", "Instructional Guides"],
    standards: ["ISO 9001:2015 Clause Requirements"],
    applications: ["Startups", "SMEs", "Internal Compliance Teams"],
    faqs: [
      { question: "Are the templates editable?", answer: "Yes, all files are provided in MS Word and Excel formats for easy editing." }
    ]
  },
  {
    id: "iso-9001-manual",
    title: "ISO 9001 Manual",
    slug: "iso-9001-manual",
    category: "ISO Services",
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop",
    description: "Custom-developed Quality Manuals that accurately map your core processes and fulfill all mandatory ISO 9001 requirements.",
    iconId: "boxes",
    longDescription: "The Quality Manual is the heart of your QMS. We develop bespoke manuals that accurately reflect your business processes while meeting all requirements of the ISO 9001 standard.",
    benefits: ["Clearly defined processes", "Regulatory alignment", "Employee clarity", "Strong audit foundation"],
    process: [
      { step: "Process Mapping", description: "Identifying and documenting key business interactions." },
      { step: "Drafting", description: "Writing the manual in clear, concise professional language." },
      { step: "Approval", description: "Final review and management sign-off." }
    ],
    equipment: ["Standard Operating Procedures", "Quality Policy Templates"],
    standards: ["ISO 9001 Section 4, 5, 6"],
    applications: ["Corporate Quality Depts", "Production Facilities", "Consultancy Firms"],
    faqs: [
      { question: "Is a manual still required in 2015 version?", answer: "While not explicitly named 'Quality Manual' in the standard, having a centralized document for scope and process interaction is still highly recommended." }
    ]
  },

  // --- Support Service ---
  {
    id: "pickup-delivery-service",
    title: "Pick-up and Delivery Service",
    slug: "pick-up-and-delivery-service",
    category: "Support Service",
    image: "https://images.unsplash.com/photo-1580674684081-77699479b47e?auto=format&fit=crop&q=80&w=800",
    description: "Safe and secure transport for your valuable precision instruments.",
    iconId: "truck",
    longDescription: "Don't risk your sensitive instruments with general couriers. Our specialized pick-up and delivery service uses padded cases and climate-monitored vehicles to ensure your tools arrive at our lab and back to you in perfect condition.",
    benefits: ["Insurance coverage included", "Shock-absorbent packaging", "Real-time tracking", "Dedicated logistics team"],
    process: [
      { step: "Scheduling", description: "Booking a slot via our online portal or phone." },
      { step: "Secure Packing", description: "Our driver assists with protective wrapping and casing." },
      { step: "Direct Transport", description: "Non-stop transit to our laboratory facility." }
    ],
    equipment: ["Padded Transit Cases", "Shock Loggers", "GPS Tracked Vehicles"],
    standards: ["Internal Logistics Quality Protocol", "ISO 9001"],
    applications: ["All Calibration Clients", "Delicate Electronics", "Primary Standards"],
    faqs: [
      { question: "Is there a weight limit?", answer: "We can handle items from small sensors to large equipment up to 500kg with our tail-lift vehicles." }
    ]
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    iconId: "factory",
    description: "Supporting heavy and light industries with comprehensive tool calibration.",
    keyServices: ["Dimensional", "Torque", "Pressure"],
    compliance: "ISO 9001, ISO 17025"
  },
  {
    id: "automobile",
    name: "Automobile",
    iconId: "car",
    description: "Precision for assembly lines, powertrain testing, and component manufacturing.",
    keyServices: ["Torque", "Mechanical", "Electrical"],
    compliance: "IATF 16949, ISO 17025"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    iconId: "stethoscope",
    description: "Ensuring patient safety through accurate medical device calibration.",
    keyServices: ["Temperature", "Mass", "Pressure"],
    compliance: "ISO 13485, NABH"
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    iconId: "flask",
    description: "Compliance with FDA/GMP standards for temperature and mass measurements.",
    keyServices: ["Temperature", "Mass", "Humidity"],
    compliance: "FDA 21 CFR Part 11, GMP"
  },
  {
    id: "food",
    name: "Food Processing",
    iconId: "utensils",
    description: "Quality control for temperature, flow, and weighing in food production.",
    keyServices: ["Temperature", "Flow", "Mass"],
    compliance: "HACCP, ISO 22000"
  },
  {
    id: "power",
    name: "Power Plant",
    iconId: "zapoff",
    description: "Critical measurement for grid stability and plant efficiency.",
    keyServices: ["Electrical", "Pressure", "Flow"],
    compliance: "IEEE, ISO 17025"
  },
  {
    id: "laboratories",
    name: "Laboratories",
    iconId: "microscope",
    description: "High-precision standards for diagnostic and analytical labs.",
    keyServices: ["Electrical", "Mass", "Temperature"],
    compliance: "ISO 15189, ISO 17025"
  },
  {
    id: "research",
    name: "Research Institutes",
    iconId: "beaker",
    description: "Custom metrology solutions for cutting-edge scientific research.",
    keyServices: ["All Parameters", "Custom Prototypes"],
    compliance: "NIST, NABL Traceable"
  },
  {
    id: "oilgas",
    name: "Oil & Gas",
    iconId: "fuel",
    description: "Explosion-proof pressure and flow calibration for refineries.",
    keyServices: ["Pressure", "Flow", "Temperature"],
    compliance: "ATEX, SIL 2/3"
  },
  {
    id: "chemical",
    name: "Chemical",
    iconId: "droplets",
    description: "Corrosion-resistant measurement tools and process control calibration.",
    keyServices: ["Flow", "Pressure", "Temperature"],
    compliance: "Responsible Care, ISO 14001"
  },
  {
    id: "electronics",
    name: "Electronics",
    iconId: "cpu",
    description: "Sub-micron dimensional and high-frequency electrical calibration.",
    keyServices: ["Electrical", "Dimensional", "Mass"],
    compliance: "IPC, ISO 17025"
  },
  {
    id: "textile",
    name: "Textile",
    iconId: "shirt",
    description: "Tension, speed, and color measurement calibration for textile mills.",
    keyServices: ["Mechanical", "Temperature", "Electrical"],
    compliance: "OEKO-TEX, ISO 9001"
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Rajesh Kumar",
    company: "Tata Motors",
    content: "Calibration's precision and quick turnaround time have significantly improved our production efficiency. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rajesh",
  },
  {
    id: "2",
    name: "Dr. Ananya Singh",
    company: "Cipla Pharmaceuticals",
    content: "Reliable calibration is non-negotiable in the pharma industry. Calibration has been our trusted partner for over 5 years.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ananya",
  },
  {
    id: "3",
    name: "Vikram Mehta",
    company: "Reliance Industries",
    content: "The level of expertise and the detailed reports provided by the team are exceptional. They truly understand industrial needs.",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=vikram",
  },
];

export const FAQS = [
  {
    question: "What is the importance of calibration?",
    answer: "Calibration ensures that your instruments provide accurate and reliable measurements, which is crucial for quality control, safety, and regulatory compliance.",
  },
  {
    question: "How often should my equipment be calibrated?",
    answer: "The frequency depends on the type of equipment, its usage, and industry regulations. Generally, annual calibration is recommended for most instruments.",
  },
  {
    question: "What is ISO/IEC 17025 accreditation?",
    answer: "It is the main international standard for testing and calibration laboratories. It ensures that a laboratory is technically competent and able to produce precise results.",
  },
  {
    question: "Do you provide on-site calibration?",
    answer: "Yes, we offer on-site calibration services for large or fixed equipment that cannot be easily moved to our laboratory.",
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Our standard turnaround time is 3-5 business days, though we also offer express services for urgent requirements.",
  },
  {
    question: "Are your certificates traceable?",
    answer: "Yes, all our calibration certificates are traceable to national and international standards (NABL, NIST, etc.).",
  },
  {
    question: "Can you calibrate multi-parameter instruments?",
    answer: "Absolutely. We have the capability to calibrate complex instruments with multiple parameters across various domains.",
  },
  {
    question: "What happens if my instrument fails calibration?",
    answer: "We will inform you immediately and, if possible, provide adjustment services to bring it back within specifications.",
  },
  {
    question: "Do you provide digital certificates?",
    answer: "Yes, we provide both hard copies and digital (PDF) versions of all calibration certificates for your convenience.",
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a quote through our website contact form, via email, or by calling our customer service line.",
  },
];

export const STATS = [
  { label: "Years Experience", value: "20+", target: 20 },
  { label: "Instruments Calibrated", value: "12000+", target: 12000 },
  { label: "Clients", value: "1500+", target: 1500 },
  { label: "Accuracy", value: "99.8%", target: 99.8 },
];

export const CERTIFICATES = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    description: "Quality Management Systems certification ensuring consistent excellence. Includes complete ISO 9001 Documentation Kits.",
    image: "/images/certificates/iso_9001_cert.jpg",
  },
  {
    id: "nabl",
    title: "NABL Accreditation",
    description: "ISO/IEC 17025:2017 accreditation for technical competence in calibration.",
    image: "/images/certificates/nabl_cert.jpg",
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description: "Internal and external QA protocols following international standards.",
    image: "/images/certificates/qa_cert.jpg",
  },
  {
    id: "gov-approved",
    title: "Government Approved",
    description: "Registered and approved by national regulatory authorities.",
    image: "/images/certificates/gov_approved_cert.jpg",
  },
];

export const CLIENT_LOGOS = [
  "Tata Motors",
  "Reliance",
  "Cipla",
  "L&T",
  "BHEL",
  "Siemens",
  "ABB",
  "Bosch",
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "Understanding ISO/IEC 17025",
    excerpt: "Why it matters for your laboratory and how it ensures measurement quality across every instrument you calibrate.",
    date: "Oct 24, 2024",
    category: "Standards",
    image: "/images/blog/iso_17025_blog.jpg",
    slug: "understanding-iso-17025",
    readTime: "7 min read",
    author: {
      name: "Dr. Arvind Sharma",
      role: "Chief Metrologist",
      avatar: "https://i.pravatar.cc/150?u=arvind",
    },
    tags: ["ISO 17025", "NABL", "Accreditation", "Quality", "Standards"],
    content: [
      {
        type: "intro",
        text: "ISO/IEC 17025 is the world's most widely used standard for testing and calibration laboratories. Whether you are an instrument manufacturer, a quality manager, or a factory owner, understanding this standard is fundamental to ensuring that your measurements are accurate, traceable, and globally accepted.",
      },
      {
        type: "heading",
        text: "What Is ISO/IEC 17025?",
      },
      {
        type: "paragraph",
        text: "ISO/IEC 17025:2017 is the international standard that specifies the general requirements for the competence, impartiality, and consistent operation of testing and calibration laboratories. It was developed by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC). The standard replaces the earlier 1999 version and introduces a stronger focus on risk-based thinking and process approach.",
      },
      {
        type: "callout",
        title: "Key Fact",
        text: "Over 85,000 laboratories in more than 160 countries are currently accredited to ISO/IEC 17025 — making it the most recognized laboratory quality standard in the world.",
      },
      {
        type: "heading",
        text: "The Two Pillars: Technical Competence & Management System",
      },
      {
        type: "paragraph",
        text: "The standard is built on two equally important pillars. The first is technical competence — the laboratory must demonstrate that it has the right staff, equipment, methods, and environment to produce reliable results. The second is a sound management system, ensuring processes are documented, reviewed, and continuously improved.",
      },
      {
        type: "list",
        title: "Core Requirements of ISO/IEC 17025",
        items: [
          "Impartiality and confidentiality obligations",
          "Documented structure, responsibilities, and authority",
          "Resource management — personnel, facilities, equipment",
          "Method validation and measurement uncertainty estimation",
          "Ensuring metrological traceability of all results",
          "Sampling, handling, and transport of test items",
          "Technical records and reporting of results",
          "Management system requirements (aligned with ISO 9001)",
        ],
      },
      {
        type: "heading",
        text: "Why Metrological Traceability Matters",
      },
      {
        type: "paragraph",
        text: "One of the most critical concepts in ISO/IEC 17025 is metrological traceability — the property of a measurement result whereby it can be related to a stated reference through an unbroken chain of calibrations. This chain ultimately leads back to national or international standards such as those maintained by CSIR-NPL in India or NIST in the USA.",
      },
      {
        type: "paragraph",
        text: "Without traceability, your calibration certificates are essentially meaningless. A torque wrench calibrated against an uncalibrated reference cannot guarantee any accuracy. This is why NABL-accredited laboratories, which are India's implementation of ISO/IEC 17025, are so critical for industrial quality.",
      },
      {
        type: "callout",
        title: "What NABL Means for You",
        text: "NABL (National Accreditation Board for Testing and Calibration Laboratories) is India's premier accreditation body operating under ISO/IEC 17025. A calibration certificate from a NABL-accredited lab like Mechatronics Calibration LLP is recognised by government agencies, courts of law, and international trade bodies.",
      },
      {
        type: "heading",
        text: "ISO 17025 vs ISO 9001: What's the Difference?",
      },
      {
        type: "paragraph",
        text: "Many businesses confuse ISO 9001 (quality management) with ISO/IEC 17025. While ISO 9001 ensures a quality management system is in place across an organisation, ISO/IEC 17025 goes deeper — it validates the technical competence to produce accurate measurement results. In fact, ISO 17025 incorporates ISO 9001 principles but adds layer upon layer of technical requirements specific to laboratory operations.",
      },
      {
        type: "list",
        title: "Benefits of Working with an ISO 17025 Accredited Lab",
        items: [
          "Globally accepted calibration certificates",
          "Reduced risk of product recalls and quality failures",
          "Compliance with regulatory and export requirements",
          "Lower measurement uncertainty = higher product quality",
          "Defensible data in case of legal disputes",
          "Access to international mutual recognition arrangements (MRAs)",
        ],
      },
      {
        type: "heading",
        text: "How to Verify a Lab's Accreditation",
      },
      {
        type: "paragraph",
        text: "Before sending your instruments for calibration, always verify the laboratory's accreditation status. In India, you can check on the NABL portal (nabl-india.org) by entering the lab's NABL registration number. Look for the specific scope of accreditation — a lab accredited for electrical calibration may not be accredited for dimensional or thermal measurements.",
      },
      {
        type: "paragraph",
        text: "Mechatronics Calibration LLP holds NABL accreditation across electrical, mechanical, thermal, and pressure domains, ensuring your complete calibration requirements are met under a single accredited roof.",
      },
    ],
  },
  {
    id: "2",
    title: "Common Mistakes in Tool Maintenance",
    excerpt: "Avoid these frequent errors to prolong the life of your precision instruments and maintain calibration integrity.",
    date: "Oct 15, 2024",
    category: "Maintenance",
    image: "/images/blog/tool_maintenance_blog.jpg",
    slug: "common-mistakes-tool-maintenance",
    readTime: "6 min read",
    author: {
      name: "Priya Nair",
      role: "Senior Calibration Engineer",
      avatar: "https://i.pravatar.cc/150?u=priya",
    },
    tags: ["Maintenance", "Precision Instruments", "Best Practices", "Quality"],
    content: [
      {
        type: "intro",
        text: "Precision instruments are significant investments for any manufacturing or laboratory operation. Yet, every day, expensive instruments are rendered inaccurate — or outright damaged — by avoidable maintenance mistakes. Here is our definitive guide to the most common errors and how to fix them.",
      },
      {
        type: "heading",
        text: "Mistake #1: Ignoring the Calibration Schedule",
      },
      {
        type: "paragraph",
        text: "The single most costly mistake is skipping or delaying calibration. All measuring instruments drift over time due to mechanical wear, thermal cycling, and environmental exposure. A multimeter that was accurate 12 months ago may now be reading 2–5% off — enough to cause product rejections or, worse, to accept out-of-tolerance products.",
      },
      {
        type: "callout",
        title: "Industry Rule of Thumb",
        text: "If in doubt, calibrate annually. For instruments in harsh environments, high-usage applications, or critical safety roles (such as torque wrenches on aircraft assemblies), calibrate every 3–6 months.",
      },
      {
        type: "heading",
        text: "Mistake #2: Improper Storage Conditions",
      },
      {
        type: "paragraph",
        text: "Precision instruments should be stored in a controlled environment — typically between 18°C and 25°C with relative humidity below 60%. Storing calipers in a hot toolbox, leaving thermocouples exposed to direct sunlight, or keeping digital multimeters near strong magnetic fields can all introduce drift that won't be caught until the next calibration.",
      },
      {
        type: "list",
        title: "Storage Best Practices",
        items: [
          "Always return instruments to their protective cases after use",
          "Use silica gel desiccant packs in storage areas with humidity issues",
          "Keep digital instruments away from strong electromagnetic sources",
          "Store optical instruments (surface plates, optical flats) in vibration-free areas",
          "Remove batteries from instruments stored for more than 3 months",
          "Label instruments clearly with their calibration due date",
        ],
      },
      {
        type: "heading",
        text: "Mistake #3: Skipping Zero Verification",
      },
      {
        type: "paragraph",
        text: "Many operators forget to zero their instruments before use. A vernier caliper with a 0.02 mm zero error, used across 500 measurements per day, will introduce systematic error into every single measurement. Most digital instruments have an automatic zeroing function — make it a non-negotiable step in your work instructions.",
      },
      {
        type: "heading",
        text: "Mistake #4: Using the Wrong Cleaning Methods",
      },
      {
        type: "paragraph",
        text: "Cleaning precision instruments incorrectly can be as damaging as not cleaning them at all. Abrasive cloths scratch measurement surfaces, reducing accuracy. Petroleum-based solvents attack rubber seals and lacquer coatings. Strong acids or alkalines can destroy surface hardening treatments on gauge blocks and slip gauges.",
      },
      {
        type: "list",
        title: "Approved Cleaning Methods by Instrument Type",
        items: [
          "Calipers & micrometers: lint-free cloth with isopropyl alcohol (IPA)",
          "Gauge blocks: optical-grade tissue with petroleum ether or IPA",
          "Electrical instruments: dry brush only — no liquids near terminals",
          "Pressure gauges: soft cloth; never immerse in liquid",
          "Thermocouples: dry wipe; check sheath integrity regularly",
        ],
      },
      {
        type: "heading",
        text: "Mistake #5: Ignoring Physical Damage",
      },
      {
        type: "paragraph",
        text: "A dropped torque wrench, a scratched micrometer anvil, or a bent thermocouple sheath are often \"fixed\" by a cosmetic wipe-down and returned to service. Physical damage almost always introduces measurement error. If an instrument has been dropped or impacted, it must be sent for calibration before further use — regardless of whether it appears damaged.",
      },
      {
        type: "callout",
        title: "Damage Protocol",
        text: "Implement a formal 'Drop and Shock' protocol in your quality management system. Any instrument involved in a physical incident must be tagged 'Out of Service — Calibration Required' and quarantined until recalibrated.",
      },
      {
        type: "heading",
        text: "Mistake #6: Failing to Document Calibration History",
      },
      {
        type: "paragraph",
        text: "A calibration certificate is only valuable if it is filed, tracked, and acted upon. Many organisations receive NABL certificates and simply store them — never reviewing the measurement uncertainties, never tracking drift trends, and never identifying instruments that consistently fail. A well-maintained instrument history register allows you to predict failure before it happens.",
      },
      {
        type: "list",
        title: "What a Good Instrument Register Should Track",
        items: [
          "Unique instrument ID and description",
          "Calibration due date (with automated reminder)",
          "As-found and as-left readings from each calibration",
          "Measurement uncertainty at last calibration",
          "History of any damage, repair, or adjustment",
          "Location and responsible user",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "The Future of Digital Calibration",
    excerpt: "How Industry 4.0 is transforming the landscape of measurement science, traceability, and calibration management.",
    date: "Oct 02, 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-digital-calibration",
    readTime: "8 min read",
    author: {
      name: "Rahul Desai",
      role: "R&D Technology Lead",
      avatar: "https://i.pravatar.cc/150?u=rahul",
    },
    tags: ["Industry 4.0", "Digital Calibration", "IoT", "Automation", "Technology"],
    content: [
      {
        type: "intro",
        text: "The calibration industry, traditionally one of the most conservative in metrology, is undergoing a quiet revolution. Driven by Industry 4.0, IoT connectivity, and artificial intelligence, the way instruments are calibrated, tracked, and certified is changing faster than at any point in the past 50 years.",
      },
      {
        type: "heading",
        text: "The Problem with Traditional Calibration",
      },
      {
        type: "paragraph",
        text: "For decades, calibration followed a predictable, time-based cycle: an instrument is removed from service, sent to a laboratory, calibrated manually against a standard, and returned with a paper certificate. This process, while reliable, is slow, expensive, and reactive. It tells you how accurate an instrument was at the moment of calibration — not how accurate it is right now.",
      },
      {
        type: "callout",
        title: "The Calibration Gap",
        text: "Studies show that over 60% of measurement errors in manufacturing are not caught by periodic calibration schedules. They occur between calibration events, when no one is looking.",
      },
      {
        type: "heading",
        text: "Connected Instruments: Real-Time Monitoring",
      },
      {
        type: "paragraph",
        text: "The first wave of digital calibration is already here — connected instruments that continuously report their own health metrics. Smart pressure transmitters, for example, can detect internal sensor drift and flag anomalies to a SCADA system in real time. Temperature sensors with embedded self-verification algorithms can compare their readings against internal reference junctions and report uncertainty values continuously.",
      },
      {
        type: "list",
        title: "What Connected Calibration Enables",
        items: [
          "Condition-based calibration intervals (instead of fixed time periods)",
          "Instant alerts when drift exceeds acceptable thresholds",
          "Automated calibration records without manual documentation",
          "Traceability data embedded directly in measurement output",
          "Remote calibration verification for instruments in hazardous areas",
          "Predictive maintenance based on drift trend analysis",
        ],
      },
      {
        type: "heading",
        text: "AI and Machine Learning in Metrology",
      },
      {
        type: "paragraph",
        text: "Artificial intelligence is beginning to transform how laboratories process calibration data. Machine learning models trained on thousands of historical calibration records can predict when an instrument is likely to go out of tolerance — before it actually does. This shifts calibration from a reactive to a predictive discipline.",
      },
      {
        type: "paragraph",
        text: "At the national metrology level, AI is being used to analyse uncertainty chains, identify systematic errors in measurement standards, and accelerate the development of new primary standards. The UK's National Physical Laboratory (NPL) has demonstrated AI systems that can reduce measurement uncertainty in certain electrical standards by up to 40%.",
      },
      {
        type: "heading",
        text: "Digital Calibration Certificates (DCC)",
      },
      {
        type: "paragraph",
        text: "The Physikalisch-Technische Bundesanstalt (PTB) of Germany, along with EURAMET (the European association of national metrology institutes), has been developing the Digital Calibration Certificate (DCC) — a machine-readable XML-based replacement for paper calibration certificates. DCCs can be read by ERP systems, quality management software, and even the instruments themselves.",
      },
      {
        type: "callout",
        title: "India's Digital Push",
        text: "NABL India is actively working on digital certificate frameworks aligned with global DCC standards. Laboratories like Mechatronics Calibration LLP are already issuing digital PDF certificates with QR code verification, bridging the gap until full DCC adoption.",
      },
      {
        type: "heading",
        text: "Blockchain for Calibration Traceability",
      },
      {
        type: "paragraph",
        text: "Blockchain technology offers a tamper-proof, decentralised ledger for recording calibration events. Several pilot projects in aerospace and pharmaceutical sectors have demonstrated blockchain-based systems where every calibration event — from the primary national standard down to the factory-floor instrument — is recorded as an immutable transaction. This creates a continuous, auditable chain of traceability that cannot be falsified.",
      },
      {
        type: "heading",
        text: "What This Means for Industry",
      },
      {
        type: "paragraph",
        text: "For manufacturers, the shift to digital calibration means lower costs through optimised calibration intervals, faster production cycles through reduced instrument downtime, and higher confidence in measurement quality. For calibration laboratories, it means investment in digital infrastructure, staff retraining, and new business models built around data services rather than one-time certificate issuance.",
      },
      {
        type: "list",
        title: "Steps to Prepare Your Organisation",
        items: [
          "Audit your current instrument fleet for IoT/digital connectivity capability",
          "Invest in a calibration management software (CMMS or dedicated LIMS)",
          "Establish a digital instrument register with QR-coded asset tags",
          "Work with your calibration lab to receive digital certificates",
          "Train quality teams on reading and using measurement uncertainty data",
          "Plan a phased move to condition-based calibration intervals",
        ],
      },
      {
        type: "paragraph",
        text: "The future of calibration is not just more accurate — it is continuous, connected, and intelligent. Organisations that embrace digital metrology today will have a significant competitive advantage in quality, compliance, and cost efficiency over the next decade.",
      },
    ],
  },
];

export const JOBS = [
  { id: "1", title: "Calibration Engineer", department: "Operations", location: "Ahmedabad", type: "Full-time" },
  { id: "2", title: "Quality Manager", department: "Quality", location: "Ahmedabad", type: "Full-time" },
  { id: "3", title: "Technical Sales Executive", department: "Sales", location: "Ahmedabad", type: "Full-time" },
];

export const CONTACT_INFO = {
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Plot No. 45, GIDC Estate, Vatva, Ahmedabad, GJ 382445",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mechatronics018@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 7984193798",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
};

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Mechatronics Calibration LLP",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mechatronics-calibration.vercel.app/",
};

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.indiamart.com%2Fmechatronics-calibration-services%2F",
    icon: "Facebook",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/share?url=https%3A%2F%2Fwww.indiamart.com%2Fmechatronics-calibration-services%2F",
    icon: "Twitter",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/cws/share?url=https%3A%2F%2Fwww.indiamart.com%2Fmechatronics-calibration-services%2F",
    icon: "LinkedIn",
  },
];
