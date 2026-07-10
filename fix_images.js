const fs = require('fs');
const https = require('https');

const fallbacks = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop"
];

let content = fs.readFileSync('lib/constants.ts', 'utf8');
const urls = [...content.matchAll(/image:\s*"(https:\/\/images\.unsplash\.com[^"]+)"/g)].map(m => m[1]);

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: 500 });
    });
  });
}

async function run() {
  const promises = [...new Set(urls)].map(url => checkUrl(url));
  const results = await Promise.all(promises);
  const broken = results.filter(r => r.status !== 200 && r.status !== 302);
  
  if (broken.length === 0) {
    console.log("No broken images found.");
    return;
  }
  
  console.log(`Found ${broken.length} broken images. Fixing...`);
  
  let fallbackIndex = 0;
  for (const b of broken) {
    const replacement = fallbacks[fallbackIndex % fallbacks.length];
    fallbackIndex++;
    
    // Replace all instances of this broken URL in the file
    content = content.split(b.url).join(replacement);
  }
  
  fs.writeFileSync('lib/constants.ts', content);
  console.log("Fixed broken images successfully.");
}

run();
