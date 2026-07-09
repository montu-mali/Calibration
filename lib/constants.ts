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
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Electrical Calibration", href: "/services/electrical-calibration" },
      { label: "Mechanical Calibration", href: "/services/mechanical-calibration" },
      { label: "Temperature Calibration", href: "/services/temperature-calibration" },
      { label: "Pressure Calibration", href: "/services/pressure-calibration" },
      { label: "Mass Calibration", href: "/services/mass-calibration" },
      { label: "Torque Calibration", href: "/services/torque-calibration" },
      { label: "Flow Calibration", href: "/services/flow-calibration" },
      { label: "Dimensional Calibration", href: "/services/dimensional-calibration" },
      { label: "On-site Calibration", href: "/services/on-site-calibration" },
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Certificates", href: "/certificates" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "electrical",
    title: "Electrical Calibration",
    slug: "electrical-calibration",
    description: "Precise calibration for multimeters, oscilloscopes, and power supplies with traceable standards.",
    iconId: "zap",
    longDescription: "Our electrical calibration services cover a wide range of instruments, ensuring they meet strict accuracy requirements. We utilize high-precision calibrators and standards traceable to national and international bodies.",
    benefits: [
      "Minimize measurement uncertainty",
      "Ensure compliance with international standards",
      "Extend equipment lifespan",
      "Prevent costly production errors"
    ],
    process: [
      { step: "Reception", description: "Equipment is logged and inspected for physical damage." },
      { step: "Stabilization", description: "Instruments are acclimated to controlled laboratory conditions." },
      { step: "Calibration", description: "Comparison against high-precision master standards." },
      { step: "Documentation", description: "Generation of traceable calibration certificates." }
    ],
    equipment: [
      "Digital Multimeters (up to 8.5 digits)",
      "Digital Storage Oscilloscopes (up to 2GHz)",
      "DC Power Supplies & Electronic Loads",
      "Power Clamp Meter & Current Transformers",
      "LCR Meters & Impedance Analyzers",
      "Insulation Testers & Earth Testers"
    ],
    standards: [
      "ISO/IEC 17025:2017 Accredited",
      "NIST (USA) Traceable",
      "NABL (India) Accredited"
    ],
    applications: [
      "Electronics Manufacturing",
      "Power Generation & Distribution",
      "Research & Development Laboratories"
    ],
    faqs: [
      {
        question: "What parameters are covered under electrical calibration?",
        answer: "We cover Voltage (AC/DC), Current (AC/DC), Resistance, Capacitance, Inductance, Frequency, and Phase."
      },
      {
        question: "Can you calibrate high-precision 8.5 digit multimeters?",
        answer: "Yes, our lab is equipped with Fluke 5720A/5730A calibrators capable of supporting ultra-high precision instruments."
      }
    ]
  },
  {
    id: "mechanical",
    title: "Mechanical Calibration",
    slug: "mechanical-calibration",
    description: "Accurate measurement for torque wrenches, force gauges, and weighing scales.",
    iconId: "settings",
    longDescription: "Mechanical calibration is critical for maintaining the integrity of physical measurements. We provide services for force, torque, and mass instruments with exceptional precision.",
    benefits: [
      "Ensure structural integrity",
      "Optimized assembly performance",
      "Regulatory compliance",
      "Reduced equipment downtime"
    ],
    process: [
      { step: "Initial Test", description: "Pre-calibration verification to determine 'as-found' data." },
      { step: "Adjustment", description: "Fine-tuning of the instrument if found out of tolerance." },
      { step: "Final Verification", description: "Post-adjustment testing to confirm accuracy." },
      { step: "Certification", description: "Detailed reporting of all measurements and uncertainties." }
    ],
    equipment: [
      "Dial Calibration Tester (High Precision)",
      "Torque Wrenches & Drivers (up to 2000 Nm)",
      "Digital Force Gauges (Tension & Compression)",
      "Hydraulic & Pneumatic Load Cells",
      "Analytical & Industrial Weighing Scales"
    ],
    standards: [
      "ISO 6789 (Torque Tools)",
      "ASTM E4 (Force Verification)",
      "ISO/IEC 17025"
    ],
    applications: [
      "Automotive Assembly Lines",
      "Aerospace Component Testing",
      "Construction Material Testing"
    ],
    faqs: [
      {
        question: "How often should torque wrenches be calibrated?",
        answer: "As per ISO 6789, it is recommended every 12 months or every 5,000 cycles, whichever comes first."
      }
    ]
  },
  {
    id: "temperature",
    title: "Temperature Calibration",
    slug: "temperature-calibration",
    description: "Calibration for RTDs, thermocouples, and infrared thermometers across broad ranges.",
    iconId: "thermometer",
    longDescription: "Ensuring accurate temperature readings is vital in many industries. Our lab provides high-stability temperature sources and reference probes for precise calibration.",
    benefits: [
      "Ensured product quality in pharma/food",
      "Process safety optimization",
      "Energy efficiency",
      "Regulatory audit readiness"
    ],
    process: [
      { step: "Thermal Loading", description: "Placement of sensors in high-stability baths or dry blocks." },
      { step: "Equilibrium", description: "Waiting for temperature stabilization at various setpoints." },
      { step: "Comparison", description: "Readings against primary SPRTs or thermocouples." },
      { step: "Reporting", description: "Complete data set with correction factors provided." }
    ],
    equipment: [
      "Platinum Resistance Thermometers (RTDs)",
      "Thermocouples (Type J, K, T, E, R, S, B, N)",
      "Infrared Pyrometers & Thermal Imagers",
      "Digital Thermometers & Data Loggers"
    ],
    standards: [
      "ITS-90 Temperature Scale",
      "ASTM E220 (Thermocouples)",
      "ISO/IEC 17025"
    ],
    applications: [
      "Pharmaceutical Storage & Production",
      "Food Safety & Processing",
      "Healthcare & Cold Chain Logistics"
    ],
    faqs: [
      {
        question: "What is the temperature range of your calibration services?",
        answer: "Our capabilities span from -196°C (Liquid Nitrogen) to +1200°C (Furnace)."
      }
    ]
  },
  {
    id: "pressure",
    title: "Pressure Calibration",
    slug: "pressure-calibration",
    description: "High-precision pressure calibration for gauges, transducers, and transmitters.",
    iconId: "gauge",
    longDescription: "Our pressure calibration capabilities range from vacuum to high pressure, utilizing deadweight testers and high-accuracy digital controllers.",
    benefits: [
      "Enhanced process safety",
      "Improved system reliability",
      "Cost reduction through accuracy",
      "Extended sensor life"
    ],
    process: [
      { step: "System Cleanse", description: "Ensuring no contamination in pressure lines." },
      { step: "Pressure Cycling", description: "Exercising the sensor to eliminate hysteresis." },
      { step: "Point-to-Point Test", description: "Multiple pressure levels checked for linearity." },
      { step: "Analysis", description: "Calculated error vs. manufacturer specifications." }
    ],
    equipment: [
      "Digital & Analog Pressure Gauges",
      "Pressure Transmitters & Transducers",
      "Deadweight Testers (Hydraulic & Pneumatic)",
      "Barometers & Manometers"
    ],
    standards: [
      "EURAMET cg-17 (Pressure Gauges)",
      "ISO/IEC 17025",
      "NIST Traceable"
    ],
    applications: [
      "Oil & Gas Pipeline Monitoring",
      "Chemical Process Control",
      "Hydraulic System Maintenance"
    ],
    faqs: [
      {
        question: "What is the maximum pressure you can calibrate?",
        answer: "We can calibrate up to 40,000 psi (approx. 2800 bar) using our primary deadweight testers."
      }
    ]
  },
  {
    id: "mass",
    title: "Mass Calibration",
    slug: "mass-calibration",
    description: "Standard weight and balance calibration ensuring high measurement integrity.",
    iconId: "scale",
    longDescription: "We offer mass calibration services for weights and balances ranging from laboratory micro-balances to high-capacity industrial scales.",
    benefits: [
      "Legal metrology compliance",
      "Material savings through precision",
      "Audit-proof documentation",
      "High sensitivity verification"
    ],
    process: [
      { step: "Cleaning", description: "Removal of dust and surface contaminants." },
      { step: "Environmental Compensation", description: "Buoyancy correction based on air density." },
      { step: "Comparison", description: "Substitution weighing against class E2 weights." },
      { step: "Calibration Report", description: "Individual weight values and uncertainties." }
    ],
    equipment: [
      "E1, E2, F1, F2, M1 Class Weights",
      "Analytical Micro-Balances",
      "Industrial Floor & Bench Scales"
    ],
    standards: [
      "OIML R111 (Weights)",
      "ISO/IEC 17025",
      "NABL Accredited"
    ],
    applications: [
      "Analytical Laboratories",
      "Jewelry & Precious Metals",
      "Pharmaceutical Compounding"
    ],
    faqs: [
      {
        question: "What mass classes do you support?",
        answer: "We are accredited to calibrate weights from Class E2 through M1."
      }
    ]
  },
  {
    id: "torque",
    title: "Torque Calibration",
    slug: "torque-calibration",
    description: "Precision torque tool calibration for consistent and reliable fastening.",
    iconId: "activity",
    longDescription: "Accuracy in torque is essential for safety and quality in assembly. We calibrate all types of torque tools including manual and electric drivers.",
    benefits: [
      "Joint integrity assurance",
      "Operator safety",
      "Warranty cost reduction",
      "Process repeatability"
    ],
    process: [
      { step: "Visual Check", description: "Inspection of drive, mechanism, and scales." },
      { step: "Functional Test", description: "Checking the clicking or releasing mechanism." },
      { step: "Torque Application", description: "Multiple hits at 20%, 60%, and 100% of range." },
      { step: "Data Recording", description: "Average error and standard deviation calculated." }
    ],
    equipment: [
      "Click-Type Torque Wrenches",
      "Dial Torque Wrenches",
      "Digital Torque Testers"
    ],
    standards: [
      "ISO 6789:2017",
      "ASME B107.300",
      "ISO/IEC 17025"
    ],
    applications: [
      "Automotive Powertrain Assembly",
      "Aerospace Structural Fastening",
      "Oil & Gas Flange Bolting"
    ],
    faqs: [
      {
        question: "Do you provide adjustment services for torque wrenches?",
        answer: "Yes, we provide minor adjustments and repair services if the tool is found out of tolerance."
      }
    ]
  },
  {
    id: "flow",
    title: "Flow Calibration",
    slug: "flow-calibration",
    description: "Liquid and gas flow meter calibration for optimized process control.",
    iconId: "droplets",
    longDescription: "Our flow calibration services ensure your meters provide accurate data for process efficiency and billing accuracy.",
    benefits: [
      "Billing accuracy",
      "Improved process efficiency",
      "Leak detection support",
      "Environmental compliance"
    ],
    process: [
      { step: "Installation", description: "Meter mounted in a stable test loop." },
      { step: "Priming", description: "Removal of air bubbles and establishing flow." },
      { step: "Multi-point Verification", description: "Testing at 25%, 50%, 75%, and 100% flow rates." },
      { step: "Final Check", description: "Pressure drop and signal integrity check." }
    ],
    equipment: [
      "Liquid Flow Meters (Electromagnetic, Ultrasonic)",
      "Gas Flow Meters (Vortex, Turbine)",
      "Mass Flow Controllers (MFCs)"
    ],
    standards: [
      "ISO 17025 Accredited",
      "NIST Traceable Standards"
    ],
    applications: [
      "Municipal Water Management",
      "Chemical Processing",
      "Energy Metering"
    ],
    faqs: [
      {
        question: "Can you calibrate flow meters on-site?",
        answer: "Yes, we use portable ultrasonic flow meters for non-invasive on-site verification."
      }
    ]
  },
  {
    id: "dimensional",
    title: "Dimensional Calibration",
    slug: "dimensional-calibration",
    description: "Micrometer, caliper, and dial gauge calibration with micron-level precision.",
    iconId: "ruler",
    longDescription: "Dimensional accuracy is the foundation of quality manufacturing. We provide high-precision measurements for all standard hand tools.",
    benefits: [
      "Product fit and finish",
      "Interchangeability of parts",
      "Scrap reduction",
      "Quality control assurance"
    ],
    process: [
      { step: "De-magnetization", description: "Ensuring no magnetic pull affects measurements." },
      { step: "Zeroing", description: "Establishment of the reference point." },
      { step: "Point Verification", description: "Testing across the full range using gauge blocks." },
      { step: "Certification", description: "Measurement results with uncertainty budget." }
    ],
    equipment: [
      "Slip Gauge Set (Grade 0, 1, 2)",
      "Vernier, Dial & Digital Calipers",
      "Outside & Inside Micrometers",
      "Plunger & Lever Type Dial Gauges",
      "Height Gauges & Depth Gauges"
    ],
    standards: [
      "ISO 3650 (Gauge Blocks)",
      "ISO/IEC 17025"
    ],
    applications: [
      "Precision Machining & Tooling",
      "Automotive Component Quality",
      "Aerospace Manufacturing"
    ],
    faqs: [
      {
        question: "What is your measurement uncertainty for gauge blocks?",
        answer: "We offer ultra-low uncertainty levels suitable for Grade 0 slip gauges."
      }
    ]
  },
  {
    id: "onsite",
    title: "On-Site Calibration",
    slug: "on-site-calibration",
    description: "Expert calibration services delivered directly to your facility for convenience.",
    iconId: "truck",
    longDescription: "Minimize downtime with our on-site calibration services. Our mobile lab brings the same level of precision and expertise to your doorstep.",
    benefits: [
      "Minimized production downtime",
      "Zero transport risk for fragile equipment",
      "Immediate results and adjustments",
      "Reduced logistical costs"
    ],
    process: [
      { step: "Site Survey", description: "Reviewing environment and safety requirements." },
      { step: "Setup", description: "Mobile standards deployment at the work area." },
      { step: "Execution", description: "Calibration of fixed instruments and machinery." },
      { step: "Instant Reporting", description: "Initial data provided before the team leaves." }
    ],
    equipment: [
      "Fixed Industrial Process Instruments",
      "Large Weighing Systems (Silos & Bridges)",
      "Environmental Chambers & Ovens"
    ],
    standards: [
      "Accredited Mobile Lab Procedures",
      "ISO/IEC 17025 Compliance"
    ],
    applications: [
      "Large Scale Manufacturing Plants",
      "Continuous Process Industries",
      "Remote Industrial Sites"
    ],
    faqs: [
      {
        question: "How do you ensure lab-grade accuracy on-site?",
        answer: "Our mobile teams use ruggedized master standards with superior environmental compensation."
      }
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
    image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "nabl",
    title: "NABL Accreditation",
    description: "ISO/IEC 17025:2017 accreditation for technical competence in calibration.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description: "Internal and external QA protocols following international standards.",
    image: "https://images.unsplash.com/photo-1454165833767-131435bb4496?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "gov-approved",
    title: "Government Approved",
    description: "Registered and approved by national regulatory authorities.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=400",
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
    excerpt: "Why it matters for your laboratory and how it ensures measurement quality.",
    date: "Oct 24, 2024",
    category: "Standards",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    slug: "understanding-iso-17025",
  },
  {
    id: "2",
    title: "Common Mistakes in Tool Maintenance",
    excerpt: "Avoid these frequent errors to prolong the life of your precision instruments.",
    date: "Oct 15, 2024",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1530124560676-4fbc91848b81?auto=format&fit=crop&q=80&w=800",
    slug: "common-mistakes-tool-maintenance",
  },
  {
    id: "3",
    title: "The Future of Digital Calibration",
    excerpt: "How Industry 4.0 is transforming the landscape of measurement and traceability.",
    date: "Oct 02, 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-digital-calibration",
  },
];

export const JOBS = [
  { id: "1", title: "Calibration Engineer", department: "Operations", location: "Ahmedabad", type: "Full-time" },
  { id: "2", title: "Quality Manager", department: "Quality", location: "Ahmedabad", type: "Full-time" },
  { id: "3", title: "Technical Sales Executive", department: "Sales", location: "Ahmedabad", type: "Full-time" },
];

export const CONTACT_INFO = {
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Plot No. 45, GIDC Estate, Vatva, Ahmedabad, GJ 382445",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@calibration.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 (79) 2583-0000",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
};

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Calibration",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://calibration.com",
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
