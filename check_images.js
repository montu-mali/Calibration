const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('lib/constants.ts', 'utf8');
const urls = [...content.matchAll(/image:\s*"(https:\/\/images\.unsplash\.com[^"]+)"/g)].map(m => m[1]);

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: 'Error: ' + e.message });
    });
  });
}

async function run() {
  const promises = urls.map(url => checkUrl(url));
  const results = await Promise.all(promises);
  const broken = results.filter(r => r.status !== 200 && r.status !== 302);
  if (broken.length === 0) {
    console.log("All images are valid!");
  } else {
    console.log("Broken images:");
    broken.forEach(b => console.log(`${b.status}: ${b.url}`));
  }
}

run();
