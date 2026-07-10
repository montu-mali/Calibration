const fs = require('fs');
let content = fs.readFileSync('lib/constants.ts', 'utf8');

const updates = [
  {
    id: 'iso-9001-service',
    newImg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    newDesc: 'Expert consultancy for achieving ISO 9001 certification. We optimize your Quality Management System for zero-defect compliance.'
  },
  {
    id: 'iso-9001-documentation-kit',
    newImg: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=800&auto=format&fit=crop',
    newDesc: 'Comprehensive, ready-to-deploy templates including procedures, forms, and policies designed for rapid ISO compliance.'
  },
  {
    id: 'iso-9001-manual',
    newImg: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop',
    newDesc: 'Custom-developed Quality Manuals that accurately map your core processes and fulfill all mandatory ISO 9001 requirements.'
  }
];

for (const update of updates) {
  // Regex to match the block starting with id and replacing image and description
  const regex = new RegExp(`(id:\\s*"${update.id}"[\\s\\S]*?image:\\s*")[^"]+("[\\s\\S]*?description:\\s*")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${update.newImg}$2${update.newDesc}$3`);
}

fs.writeFileSync('lib/constants.ts', content);
console.log("Updated ISO services successfully.");
