import { chromium } from '@playwright/test';
const OUT = 'c:/Users/willi/scuartwebsite/redesign/shots';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 832 } });
await p.goto('http://localhost:4321/en/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
await p.waitForTimeout(1500);
const caps = [
  { sel: '#portfolio', name: 'sec-portfolio' },
  { sel: '#capabilities', name: 'sec-capabilities' },
  { sel: '#method', name: 'sec-method' },
];
for (const c of caps) {
  await p.evaluate((s) => document.querySelector(s)?.scrollIntoView({block:'start'}), c.sel);
  await p.waitForTimeout(1600); // espera el reveal
  await p.screenshot({ path: `${OUT}/${c.name}.png` });
  console.log(c.name, 'OK');
}
await b.close();
