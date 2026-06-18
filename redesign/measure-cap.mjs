import { chromium } from '@playwright/test';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 832 } });
await p.goto('http://localhost:4322/en/', { waitUntil: 'networkidle' });
await p.waitForTimeout(2600);

const data = await p.evaluate(() => {
  const disc = document.querySelector('.hero-disc');
  const word = document.querySelector('.hero-wordmark__word');
  const desc = document.querySelector('.hero-wordmark__descriptor');
  if (!disc || !word) return { err: 'no encontrado' };
  const d = disc.getBoundingClientRect();
  const w = word.getBoundingClientRect();
  const ds = desc.getBoundingClientRect();
  window.__descLeft = Math.round(ds.left);
  window.__discLeft = Math.round(d.left);
  // cap-height aproximada: rango Range sobre el texto
  const range = document.createRange();
  range.selectNodeContents(word);
  const r = range.getBoundingClientRect();
  return {
    disc:  { top: Math.round(d.top), bottom: Math.round(d.bottom), h: Math.round(d.height) },
    wordBox: { top: Math.round(w.top), bottom: Math.round(w.bottom), h: Math.round(w.height) },
    textRange: { top: Math.round(r.top), bottom: Math.round(r.bottom), h: Math.round(r.height) },
    fontSize: getComputedStyle(word).fontSize,
    discLeft: Math.round(d.left),
    descLeft: Math.round(document.querySelector('.hero-wordmark__descriptor').getBoundingClientRect().left),
  };
});
console.log(JSON.stringify(data, null, 2));
await b.close();
