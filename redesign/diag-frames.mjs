import { chromium } from '@playwright/test';
const OUT = 'c:/Users/willi/scuartwebsite/redesign/shots';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 832 } });
await p.goto('http://localhost:4321/en/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
await p.waitForTimeout(2600);
const clip = { x: 0, y: 0, width: 1280, height: 832 };
for (let i = 0; i < 3; i++) {
  await p.screenshot({ path: `${OUT}/anim-frame-${i}.png`, clip });
  await p.waitForTimeout(2300);
}
// confirmar src del video y is-ready
const v = await p.evaluate(() => {
  const vid = document.querySelector('.hero-video');
  return { isReady: vid?.classList.contains('is-ready'), opacity: getComputedStyle(vid).opacity, src: vid?.currentSrc||'(vacio)', readyState: vid?.readyState };
});
console.log(JSON.stringify(v));
await b.close();
console.log('frames OK');
