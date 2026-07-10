const fs = require('fs');

const uniqueImages = {
  "dial-calibration-tester": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  "power-clamp-meter": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
  "slip-gauge-set": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
  "thermocouple-sensor": "https://images.unsplash.com/photo-1527634311077-9943f7df34e2?q=80&w=800&auto=format&fit=crop",
  "vernier-face-caliper": "https://images.unsplash.com/photo-1503691010413-b60f27109152?q=80&w=800&auto=format&fit=crop",
  "pressure-calibrator": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
  "multi-meter": "https://images.unsplash.com/photo-1517420812313-8fc196557673?q=80&w=800&auto=format&fit=crop",
  "length-bar": "https://images.unsplash.com/photo-1531284895878-a284a1420cc0?q=80&w=800&auto=format&fit=crop",
  "digital-clamp-meters": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
  "earth-resistance-tester": "https://images.unsplash.com/photo-1581092918225-827878347209?q=80&w=800&auto=format&fit=crop",
  "cycling-power-meter": "https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=800&auto=format&fit=crop",
  "ampere-meter": "https://images.unsplash.com/photo-1590218126489-09b750977a0c?q=80&w=800&auto=format&fit=crop",
  "multimeter-standard": "https://images.unsplash.com/photo-1635339004551-b213529b3e0b?q=80&w=800&auto=format&fit=crop",
  "mass-balance-calibration": "https://images.unsplash.com/photo-1516149668043-341a92a853bc?q=80&w=800&auto=format&fit=crop",
  "hot-wire-anemometer-calibration": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
  "mechanical-instrument-calibration": "https://images.unsplash.com/photo-1504328156602-ff1447153abb?q=80&w=800&auto=format&fit=crop",
  "process-instrument-calibration": "https://images.unsplash.com/photo-1535813540-d18117ab765a?q=80&w=800&auto=format&fit=crop",
  "analytical-instrument-calibration": "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=800&auto=format&fit=crop",
  "sensor-calibration": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  "in-lab-calibration": "https://images.unsplash.com/photo-1532187875605-1ef6c237a1a0?q=80&w=800&auto=format&fit=crop",
  "mobile-calibration": "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
  "in-process-calibration": "https://images.unsplash.com/photo-1565608411311-2930c78f182e?q=80&w=800&auto=format&fit=crop",
  "onsite-calibration-service": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "laboratory-instrument-services": "https://images.unsplash.com/photo-1576086213369-97a306dca664?q=80&w=800&auto=format&fit=crop",
  "iso-9001-service": "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
  "iso-9001-documentation-kit": "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop",
  "iso-9001-manual": "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800&auto=format&fit=crop",
  "pickup-delivery-service": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop"
};

let content = fs.readFileSync('lib/constants.ts', 'utf8');

// We will find each id and update its image property in the string.
for (const [id, url] of Object.entries(uniqueImages)) {
  const idRegex = new RegExp(`id:\\s*"${id}"[\\s\\S]*?image:\\s*"([^"]+)"`);
  content = content.replace(idRegex, (match, oldUrl) => {
    return match.replace(oldUrl, url);
  });
}

fs.writeFileSync('lib/constants.ts', content);
console.log("Images successfully updated.");
