import { chromium } from '@playwright/test';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sharpPath = 'c:/Users/willi/scuartwebsite/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js';
const sharp = require(sharpPath);

const browser = await chromium.launch();

/**
 * Para mobile/tablet (768px, 375px):
 * El body-scroll-container fix (html: overflow:hidden, body: overflow:auto)
 * hace que fullPage no funcione en Playwright headless — el body scrollea pero
 * Chromium no puede capturar fuera del viewport con overflow:hidden en html.
 *
 * Solución: deshabilitar el body-scroll fix durante la captura (solo para screenshot)
 * y dejar que html scrollee normalmente, igual que desktop.
 */
async function screenshotStudio(page, width, outputPath) {
  await page.route('**/*.{png,jpg,jpeg,webp,gif,svg,mp4,webm}', route => route.abort());
  await page.goto('http://localhost:4322/en', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(600);

  // Deshabilitar body-scroll fix para que Playwright pueda capturar fullPage
  await page.evaluate(() => {
    // Revertir el body-scroll-container: devolver scroll al html
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.overflow = 'visible';
    document.body.style.height = 'auto';
    document.body.style.overscrollBehaviorY = 'auto';
  });

  // Forzar visibilidad de todos los elementos de reveal
  await page.evaluate(() => {
    const section = document.getElementById('studio');
    if (!section) return;
    section.querySelectorAll('*').forEach(el => {
      el.style.opacity = '';
      el.style.transform = '';
      el.style.visibility = '';
      el.style.transitionDelay = '';
      el.classList.remove('is-hidden');
      if (el.classList.contains('stu-svc') || el.classList.contains('stu-step')) {
        el.classList.add('is-visible');
      }
    });
  });

  await page.waitForTimeout(400);

  // Ahora getBoundingClientRect funciona correctamente con scroll en html
  const bbox = await page.evaluate(() => {
    const el = document.getElementById('studio');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const scrollY = window.scrollY;
    return {
      x: Math.round(rect.left),
      y: Math.round(rect.top + scrollY),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      docH: document.documentElement.scrollHeight,
    };
  });

  if (!bbox) throw new Error(`#studio no encontrado para ${outputPath}`);
  console.log(`  bbox: y=${bbox.y} h=${bbox.height} docH=${bbox.docH}`);

  const fullBuf = await page.screenshot({ fullPage: true });
  const meta = await sharp(fullBuf).metadata();
  console.log(`  PNG: ${meta.width}x${meta.height}`);

  if (bbox.y + bbox.height > (meta.height || 0)) {
    throw new Error(`bbox (${bbox.y}+${bbox.height}=${bbox.y+bbox.height}) excede PNG height (${meta.height})`);
  }

  await sharp(fullBuf)
    .extract({ left: bbox.x, top: bbox.y, width: bbox.width, height: bbox.height })
    .toFile(outputPath);

  console.log(`OK: ${outputPath} — ${bbox.width}x${bbox.height}px`);
}

// 1280px — desktop, body-scroll fix no aplica (media max-width:768px), funciona directo
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await screenshotStudio(page, 1280, 'redesign/shots/studio-1280.png');
  await page.close();
}

// 768px — aplica body-scroll fix, necesitamos revertirlo
{
  const page = await browser.newPage({ viewport: { width: 768, height: 1024 } });
  await screenshotStudio(page, 768, 'redesign/shots/studio-768.png');
  await page.close();
}

// 375px — ídem
{
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await screenshotStudio(page, 375, 'redesign/shots/studio-375.png');
  await page.close();
}

await browser.close();
