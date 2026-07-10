const fs = require('fs');

let content = fs.readFileSync('lib/constants.ts', 'utf8');

// The one AI generated image we just made
const massBalanceImg = "/images/services/mass_balance.jpg"; 

// Mappings for Services and Certificates based on keywords
const mappings = [
  // AI Generated
  { match: "Mass Balance", img: massBalanceImg },

  // Certificates
  { match: "iso-9001", img: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800" },
  { match: "NABL", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
  { match: "Quality Assurance", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" },
  { match: "Government Approved", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" },

  // Industries
  { match: "Aerospace", img: "https://images.unsplash.com/photo-1540855215849-063fb58c14d9?auto=format&fit=crop&q=80&w=800" },
  { match: "Automotive", img: "https://images.unsplash.com/photo-1562259921-c4880bb6be1f?auto=format&fit=crop&q=80&w=800" },
  { match: "Healthcare", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
  { match: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { match: "Energy", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { match: "Research", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" },
  { match: "Pharmaceutical", img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800" },
  { match: "Defense", img: "https://images.unsplash.com/photo-1506377711776-db0481284a1e?auto=format&fit=crop&q=80&w=800" },

  // Specific Services
  { match: "Thermocouple", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" },
  { match: "Pressure Calibrator", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
  { match: "Multimeter", img: "https://images.unsplash.com/photo-1621360144983-5095d3c8c6d1?auto=format&fit=crop&q=80&w=800" },
  { match: "Multi Meter", img: "https://images.unsplash.com/photo-1621360144983-5095d3c8c6d1?auto=format&fit=crop&q=80&w=800" },
  { match: "Ampere Meter", img: "https://images.unsplash.com/photo-1621360144983-5095d3c8c6d1?auto=format&fit=crop&q=80&w=800" },
  { match: "Dial Calibration", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
  { match: "Vernier", img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800" },
  { match: "Slip Gauge", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" },
  { match: "Length Bar", img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800" },
  { match: "Process Instrument", img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800" },
  { match: "Analytical", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" },
  { match: "Onsite", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { match: "Mobile", img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=800" },
  { match: "Earth Resistance", img: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80&w=800" },
  { match: "Power Clamp", img: "https://images.unsplash.com/photo-1581092334812-7f28ed5bc2c3?auto=format&fit=crop&q=80&w=800" },
  { match: "Pick-up", img: "https://images.unsplash.com/photo-1580674684081-77699479b47e?auto=format&fit=crop&q=80&w=800" },
  { match: "Laboratory", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
  { match: "Mechanical", img: "https://images.unsplash.com/photo-1535813540-d18117ab765a?auto=format&fit=crop&q=80&w=800" }
];

// We will iterate over every item in constants.ts and apply the best match
// Regex to match objects that have a title and an image
const itemRegex = /(id:\s*['"][^'"]+['"],\s*title:\s*['"]([^'"]+)['"][\s\S]*?image:\s*['"])([^'"]+)(['"])/g;

let matchCount = 0;
content = content.replace(itemRegex, (fullMatch, prefix, title, oldImg, suffix) => {
  // Find the first mapping that matches the title
  const mapping = mappings.find(m => title.toLowerCase().includes(m.match.toLowerCase()) || title.includes(m.match));
  
  if (mapping) {
    matchCount++;
    return `${prefix}${mapping.img}${suffix}`;
  }
  
  return fullMatch; // keep unchanged if no match
});

fs.writeFileSync('lib/constants.ts', content);
console.log(`Updated ${matchCount} items with highly relevant images.`);
