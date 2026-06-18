import { chromium } from '@playwright/test';
const OUT = 'c:/Users/willi/scuartwebsite/redesign/shots';
const vps = [{n:'375',w:375,h:812},{n:'768',w:768,h:1024},{n:'1280',w:1280,h:832}];
const b = await chromium.launch();
for (const vp of vps) {
  const p = await b.newPage({ viewport: { width: vp.w, height: vp.h } });
  await p.goto('http://localhost:4321/en/', { waitUntil: 'networkidle' });
  await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
  await p.waitForTimeout(2200);
  // scroll al manifiesto y esperar el reveal
  await p.evaluate(() => document.querySelector('.manifesto')?.scrollIntoView({block:'start'}));
  await p.waitForTimeout(1600);
  await p.screenshot({ path: `${OUT}/manif-blue-${vp.n}.png` });
  await p.close();
  console.log('manif', vp.n, 'OK');
}
await b.close();
