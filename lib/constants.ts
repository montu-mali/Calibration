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
  Shirt
} from "lucide-react";

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

export const SERVICES = [
  {
    id: "electrical",
    title: "Electrical Calibration",
    slug: "electrical-calibration",
    description: "Precise calibration for multimeters, oscilloscopes, and power supplies with traceable standards.",
    icon: Zap,
    longDescription: "Our electrical calibration services cover a wide range of instruments, ensuring they meet strict accuracy requirements. We utilize high-precision calibrators and standards traceable to national and international bodies.",
    equipment: ["Digital Multimeters", "Oscilloscopes", "Power Supplies", "Clamp Meters", "LCR Meters"],
    standards: ["ISO/IEC 17025", "NIST Traceable", "NABL"],
    applications: ["Electronics Manufacturing", "Power Plants", "Research Labs"],
  },
  {
    id: "mechanical",
    title: "Mechanical Calibration",
    slug: "mechanical-calibration",
    description: "Accurate measurement for torque wrenches, force gauges, and weighing scales.",
    icon: Settings,
    longDescription: "Mechanical calibration is critical for maintaining the integrity of physical measurements. We provide services for force, torque, and mass instruments with exceptional precision.",
    equipment: ["Torque Wrenches", "Force Gauges", "Load Cells", "Weighing Scales", "Pressure Gauges"],
    standards: ["ISO/IEC 17025", "NIST Traceable"],
    applications: ["Automotive", "Aerospace", "Construction"],
  },
  {
    id: "temperature",
    title: "Temperature Calibration",
    slug: "temperature-calibration",
    description: "Calibration for RTDs, thermocouples, and infrared thermometers across broad ranges.",
    icon: Thermometer,
    longDescription: "Ensuring accurate temperature readings is vital in many industries. Our lab provides high-stability temperature sources and reference probes for precise calibration.",
    equipment: ["RTDs", "Thermocouples", "IR Thermometers", "Data Loggers", "Ovens/Furnaces"],
    standards: ["ITS-90", "ISO/IEC 17025"],
    applications: ["Pharmaceutical", "Food Processing", "Healthcare"],
  },
  {
    id: "pressure",
    title: "Pressure Calibration",
    slug: "pressure-calibration",
    description: "High-precision pressure calibration for gauges, transducers, and transmitters.",
    icon: Gauge,
    longDescription: "Our pressure calibration capabilities range from vacuum to high pressure, utilizing deadweight testers and high-accuracy digital controllers.",
    equipment: ["Digital Pressure Gauges", "Transmitters", "Deadweight Testers", "Barometers"],
    standards: ["ISO/IEC 17025", "NIST Traceable"],
    applications: ["Oil & Gas", "Chemical Plants", "Hydraulic Systems"],
  },
  {
    id: "mass",
    title: "Mass Calibration",
    slug: "mass-calibration",
    description: "Standard weight and balance calibration ensuring high measurement integrity.",
    icon: Scale,
    longDescription: "We offer mass calibration services for weights and balances ranging from laboratory micro-balances to high-capacity industrial scales.",
    equipment: ["Analytical Balances", "Standard Weights (E1, E2, F1)", "Industrial Scales"],
    standards: ["OIML R111", "ISO/IEC 17025"],
    applications: ["Laboratories", "Jewelry", "Manufacturing"],
  },
  {
    id: "torque",
    title: "Torque Calibration",
    slug: "torque-calibration",
    description: "Precision torque tool calibration for consistent and reliable fastening.",
    icon: Activity,
    longDescription: "Accuracy in torque is essential for safety and quality in assembly. We calibrate all types of torque tools including manual and electric drivers.",
    equipment: ["Click Torque Wrenches", "Digital Torque Meters", "Pneumatic Tools"],
    standards: ["ISO 6789", "ISO/IEC 17025"],
    applications: ["Automotive Assembly", "Aeronautics", "Maintenance"],
  },
  {
    id: "flow",
    title: "Flow Calibration",
    slug: "flow-calibration",
    description: "Liquid and gas flow meter calibration for optimized process control.",
    icon: Droplets,
    longDescription: "Our flow calibration services ensure your meters provide accurate data for process efficiency and billing accuracy.",
    equipment: ["Liquid Flow Meters", "Gas Flow Meters", "Rotameters"],
    standards: ["ISO/IEC 17025", "Traceable to NABL"],
    applications: ["Water Management", "Chemical Processing", "Petroleum"],
  },
  {
    id: "dimensional",
    title: "Dimensional Calibration",
    slug: "dimensional-calibration",
    description: "Micrometer, caliper, and dial gauge calibration with micron-level precision.",
    icon: Ruler,
    longDescription: "Dimensional accuracy is the foundation of quality manufacturing. We provide high-precision measurements for all standard hand tools.",
    equipment: ["Vernier Calipers", "Micrometers", "Dial Gauges", "Height Gauges"],
    standards: ["ISO/IEC 17025", "NIST Traceable"],
    applications: ["Precision Engineering", "Machining", "Quality Control"],
  },
  {
    id: "onsite",
    title: "On-Site Calibration",
    slug: "on-site-calibration",
    description: "Expert calibration services delivered directly to your facility for convenience.",
    icon: Truck,
    longDescription: "Minimize downtime with our on-site calibration services. Our mobile lab brings the same level of precision and expertise to your doorstep.",
    equipment: ["Process Instruments", "Fixed Gauges", "Large Machinery"],
    standards: ["Same as Lab Standards"],
    applications: ["Large Factories", "Remote Sites", "Critical Infrastructure"],
  },
];

export const INDUSTRIES = [
  { id: "manufacturing", name: "Manufacturing", icon: Factory },
  { id: "automobile", name: "Automobile", icon: Car },
  { id: "healthcare", name: "Healthcare", icon: Stethoscope },
  { id: "pharmaceutical", name: "Pharmaceutical", icon: FlaskConical },
  { id: "food", name: "Food Processing", icon: Utensils },
  { id: "power", name: "Power Plant", icon: ZapOff },
  { id: "laboratories", name: "Laboratories", icon: Microscope },
  { id: "research", name: "Research Institutes", icon: Beaker },
  { id: "oilgas", name: "Oil & Gas", icon: Fuel },
  { id: "chemical", name: "Chemical", icon: Droplets },
  { id: "electronics", name: "Electronics", icon: Cpu },
  { id: "textile", name: "Textile", icon: Shirt },
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
    description: "Quality Management Systems certification ensuring consistent excellence.",
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
  { id: "1", title: "Calibration Engineer", department: "Operations", location: "Mumbai", type: "Full-time" },
  { id: "2", title: "Quality Manager", department: "Quality", location: "Bangalore", type: "Full-time" },
  { id: "3", title: "Technical Sales Executive", department: "Sales", location: "Pune", type: "Full-time" },
];

export const CONTACT_INFO = {
  address: "123 Precision Way, Industrial Area, Phase II, Mumbai - 400001",
  email: "info@calibration.com",
  phone: "+91 22 1234 5678",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
};
