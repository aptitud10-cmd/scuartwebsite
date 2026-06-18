import { chromium } from '@playwright/test';

const PORT = process.env.PORT || '4322';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 832 } });
await p.goto(`http://localhost:${PORT}/en/`, { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
await p.waitForTimeout(2600);

// Altura total del documento
const total = await p.evaluate(() => document.body.scrollHeight);
const vh = 832;
let i = 0;
for (let y = 0; y < total; y += vh) {
  await p.evaluate((yy) => window.scrollTo(0, yy), y);
  await p.waitForTimeout(900); // dejar entrar animaciones de scroll
  await p.screenshot({ path: `c:/Users/willi/scuartwebsite/redesign/shots/full-${String(i).padStart(2,'0')}.png` });
  console.log(`full-${String(i).padStart(2,'0')}.png @ y=${y}`);
  i++;
}
await b.close();
console.log(`total height: ${total}px, ${i} shots`);
