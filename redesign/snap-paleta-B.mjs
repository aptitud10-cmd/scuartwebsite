import { chromium } from '@playwright/test';

// Paleta B "Arquitecto" (claro, método Locomotive) inyectada en runtime — NO toca el código.
// Dos variantes de acento: verde botella vs casi-sin-color (negro puro tipo Locomotive).
const variantes = [
  {
    tag: 'B1-verde',
    css: `:root{
      --hueso:#F5F4F0; --papel:#FFFFFF; --hueso-sombra:#ECEAE4;
      --tinta:#131312; --tinta-suave:#888783;
      --barro-oscuro:#131312; --barro-elevado:#1F1F1D;
      --terracota:#1A3A2A; --terracota-prof:#0F271C; --terracota-arcilla:#1A3A2A;
      --ambar:#1A3A2A; --borde:#DAD8D2; --borde-oscuro:#2A2A28;
      --linea-claro:#DAD8D2; --linea-oscuro:#2A2A28;
    }`,
  },
  {
    tag: 'B2-mono',
    css: `:root{
      --hueso:#F5F4F0; --papel:#FFFFFF; --hueso-sombra:#ECEAE4;
      --tinta:#131312; --tinta-suave:#888783;
      --barro-oscuro:#131312; --barro-elevado:#1F1F1D;
      --terracota:#131312; --terracota-prof:#000000; --terracota-arcilla:#F5F4F0;
      --ambar:#F5F4F0; --borde:#DAD8D2; --borde-oscuro:#2A2A28;
      --linea-claro:#DAD8D2; --linea-oscuro:#2A2A28;
    }`,
  },
];

const viewports = [
  { w: 1280, h: 832, tag: '1280' },
  { w: 390, h: 844, tag: '390' },
];

const browser = await chromium.launch();
for (const v of variantes) {
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto('http://localhost:4321/es/', { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
    await page.addStyleTag({ content: v.css });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `c:/Users/willi/scuartwebsite/redesign/shots/paleta${v.tag}-hero-${vp.tag}.png` });
    console.log(`paleta${v.tag}-hero-${vp.tag}.png OK`);
    await page.close();
  }
}
await browser.close();
