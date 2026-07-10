const fs = require('fs');

const services = [
  {
    id: "dial-calibration-tester",
    title: "Dial Calibration Tester",
    slug: "dial-calibration-tester",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    description: "High-precision testing equipment for dial gauges and indicators with ultra-fine resolution.",
    iconId: "settings"
  },
  {
    id: "power-clamp-meter",
    title: "Power Clamp Meter",
    slug: "power-clamp-meter",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
    description: "Advanced electrical measurement tool for non-invasive current and power analysis.",
    iconId: "zap"
  },
  {
    id: "slip-gauge-set",
    title: "Slip Gauge Set",
    slug: "slip-gauge-set",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    description: "Primary standards for dimensional metrology, available in multiple grades.",
    iconId: "ruler"
  },
  {
    id: "thermocouple-sensor",
    title: "Thermocouple Sensor",
    slug: "thermocouple-sensor",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1527634311077-9943f7df34e2?q=80&w=800&auto=format&fit=crop",
    description: "Reliable temperature sensing solutions for extreme industrial environments.",
    iconId: "thermometer"
  },
  {
    id: "vernier-face-caliper",
    title: "Vernier Face Caliper",
    slug: "vernier-face-caliper",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1503691010413-b60f27109152?q=80&w=800&auto=format&fit=crop",
    description: "Versatile dimensional measurement tool for internal, external, and depth checks.",
    iconId: "ruler"
  },
  {
    id: "pressure-calibrator",
    title: "Pressure Calibrator",
    slug: "pressure-calibrator",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    description: "Field and lab solutions for testing pressure gauges and transmitters.",
    iconId: "gauge"
  },
  {
    id: "multi-meter",
    title: "Multi Meter",
    slug: "multi-meter",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1517420812313-8fc196557673?q=80&w=800&auto=format&fit=crop",
    description: "High-precision digital multimeters for the most demanding lab requirements.",
    iconId: "zap"
  },
  {
    id: "length-bar",
    title: "Length Bar",
    slug: "length-bar",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1531284895878-a284a1420cc0?q=80&w=800&auto=format&fit=crop",
    description: "Master standards for large-scale dimensional calibration.",
    iconId: "ruler"
  },
  {
    id: "digital-clamp-meters",
    title: "Digital Clamp Meters",
    slug: "digital-clamp-meters",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    description: "Compact and reliable digital clamps for quick current measurements.",
    iconId: "activity"
  },
  {
    id: "earth-resistance-tester",
    title: "Earth Resistance Tester",
    slug: "earth-resistance-tester",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1581092918225-827878347209?q=80&w=800&auto=format&fit=crop",
    description: "Safety critical instrument for verifying grounding and bonding systems.",
    iconId: "zapoff"
  },
  {
    id: "cycling-power-meter",
    title: "Cycling Power Meter",
    slug: "cycling-power-meter",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=800&auto=format&fit=crop",
    description: "Precision strain-gauge based power measurement for athletic performance.",
    iconId: "activity"
  },
  {
    id: "ampere-meter",
    title: "Ampere Meter",
    slug: "ampere-meter",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1590218126489-09b750977a0c?q=80&w=800&auto=format&fit=crop",
    description: "Analog and digital ammeters for panel mounting or portable use.",
    iconId: "zap"
  },
  {
    id: "multimeter",
    title: "Multimeter",
    slug: "multimeter",
    category: "Calibration Instruments",
    image: "https://images.unsplash.com/photo-1635339004551-b213529b3e0b?q=80&w=800&auto=format&fit=crop",
    description: "Versatile handheld multimeters for general electrical and electronic testing.",
    iconId: "activity"
  },
  {
    id: "mass-balance-calibration-service",
    title: "Mass Balance Calibration Service",
    slug: "mass-balance-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1516149668043-341a92a853bc?q=80&w=800&auto=format&fit=crop",
    description: "Expert calibration for analytical and industrial weighing systems.",
    iconId: "scale"
  },
  {
    id: "hot-wire-anemometer-nabl-calibration",
    title: "Hot Wire Anemometer NABL Calibration",
    slug: "hot-wire-anemometer-nabl-calibration",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    description: "Specialized low-flow velocity calibration for cleanrooms and HVAC.",
    iconId: "droplets"
  },
  {
    id: "mechanical-instrument-calibration-service",
    title: "Mechanical Instrument Calibration Service",
    slug: "mechanical-instrument-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1504328156602-ff1447153abb?q=80&w=800&auto=format&fit=crop",
    description: "Comprehensive calibration for all hand-held mechanical measuring tools.",
    iconId: "settings"
  },
  {
    id: "process-instrument-calibration",
    title: "Process Instrument Calibration",
    slug: "process-instrument-calibration",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1535813540-d18117ab765a?q=80&w=800&auto=format&fit=crop",
    description: "Calibration of transmitters, valves, and controllers in industrial process loops.",
    iconId: "activity"
  },
  {
    id: "analytical-instrument-calibration-service",
    title: "Analytical Instrument Calibration Service",
    slug: "analytical-instrument-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=800&auto=format&fit=crop",
    description: "Precision calibration for pH meters, spectrophotometers, and HPLC systems.",
    iconId: "flask"
  },
  {
    id: "sensor-calibration",
    title: "Sensor Calibration",
    slug: "sensor-calibration",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    description: "Verification of proximity, level, and specialized industrial sensors.",
    iconId: "cpu"
  },
  {
    id: "in-lab-calibration-service",
    title: "In-Lab Calibration Service",
    slug: "in-lab-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1532187875605-1ef6c237a1a0?q=80&w=800&auto=format&fit=crop",
    description: "Environmentally controlled calibration in our world-class facility.",
    iconId: "microscope"
  },
  {
    id: "mobile-calibration-service",
    title: "Mobile Calibration Service",
    slug: "mobile-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
    description: "Precision on wheels - we bring our lab to your doorstep.",
    iconId: "truck"
  },
  {
    id: "in-process-calibration-service",
    title: "In-Process Calibration Service",
    slug: "in-process-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1565608411311-2930c78f182e?q=80&w=800&auto=format&fit=crop",
    description: "Calibration of instruments while they remain active in the production line.",
    iconId: "activity"
  },
  {
    id: "onsite-calibration-service",
    title: "Onsite Calibration Service",
    slug: "onsite-calibration-service",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    description: "Professional engineers performing calibration directly at your workstation.",
    iconId: "settings"
  },
  {
    id: "laboratory-instrument-services",
    title: "Laboratory Instrument Services",
    slug: "laboratory-instrument-services",
    category: "Calibration Services",
    image: "https://images.unsplash.com/photo-1576086213369-97a306dca664?q=80&w=800&auto=format&fit=crop",
    description: "Maintenance and validation for centrifuges, incubators, and shakers.",
    iconId: "beaker"
  },
  {
    id: "iso-9001-service",
    title: "ISO 9001 Service",
    slug: "iso-9001-service",
    category: "ISO Services",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    description: "Complete consultancy for achieving and maintaining ISO 9001 certification.",
    iconId: "shield"
  },
  {
    id: "iso-9001-2015-documentation-kit",
    title: "ISO 9001:2015 Documentation Kit",
    slug: "iso-9001-2015-documentation-kit",
    category: "ISO Services",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop",
    description: "Ready-to-use templates for procedures, forms, and policies.",
    iconId: "file"
  },
  {
    id: "iso-9001-manual",
    title: "ISO 9001 Manual",
    slug: "iso-9001-manual",
    category: "ISO Services",
    image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800&auto=format&fit=crop",
    description: "Comprehensive quality manual development tailored to your organization.",
    iconId: "boxes"
  },
  {
    id: "pick-up-and-delivery-service",
    title: "Pick-up and Delivery Service",
    slug: "pick-up-and-delivery-service",
    category: "Support Service",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    description: "Safe and secure transport for your valuable precision instruments.",
    iconId: "truck"
  }
];

let servicesString = 'export const SERVICES: Service[] = [\n';
services.forEach(s => {
  servicesString += `  {
    id: "${s.id}",
    title: "${s.title}",
    slug: "${s.slug}",
    category: "${s.category}",
    image: "${s.image}",
    description: "${s.description}",
    iconId: "${s.iconId}"
  },\n`;
});
servicesString += '];';

let content = fs.readFileSync('lib/constants.ts', 'utf8');

// Find the start and end of export const SERVICES: Service[] = [ ... ];
const startIdx = content.indexOf('export const SERVICES: Service[] = [');
let endIdx = content.indexOf('];', startIdx);
if (startIdx !== -1 && endIdx !== -1) {
  endIdx += 2; // include ];
  
  const newContent = content.substring(0, startIdx) + servicesString + content.substring(endIdx);
  fs.writeFileSync('lib/constants.ts', newContent);
  console.log("Services successfully updated.");
} else {
  console.log("Could not find SERVICES array.");
}

