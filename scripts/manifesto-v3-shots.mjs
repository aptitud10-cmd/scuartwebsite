import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'test-results/manifesto-v3';
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1280', width: 1280, height: 800 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  for (const lang of ['en', 'es']) {
    await page.goto(`http://localhost:4336/${lang}`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1500);
    // scroll al manifiesto y dejar que el reveal corra
    await page.evaluate(() => {
      const el = document.querySelector('[aria-label*="anifest"], #manifesto, .manifesto, section[class*="manifesto"]');
      if (el) el.scrollIntoView({ block: 'center' });
      else window.scrollTo(0, window.innerHeight * 1.2);
    });
    await page.waitForTimeout(1800);
    await page.screenshot({ path: `${OUT}/${vp.name}-manifesto-${lang}.png` });
    // el corte hero -> manifiesto (solo EN, alcanza)
    if (lang === 'en') {
      await page.evaluate(() => {
        const el = document.querySelector('[aria-label*="anifest"], section[class*="manifesto"]');
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.5);
      });
      await page.waitForTimeout(1200);
      await page.screenshot({ path: `${OUT}/${vp.name}-corte-hero-manifesto.png` });
    }
  }
  await page.close();
}
await browser.close();
console.log('done');
