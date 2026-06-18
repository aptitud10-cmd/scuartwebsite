import { chromium } from '@playwright/test';

// Paleta A "Papel negro" (dark) inyectada en runtime — NO toca el código real.
// Mapea los tokens actuales del sitio a los valores de la paleta A.
const cssA = `:root{
  --hueso:#0C0C0B; --papel:#141413; --hueso-sombra:#252420;
  --tinta:#F2EDE6; --tinta-suave:#6B6860;
  --barro-oscuro:#0C0C0B; --barro-elevado:#141413;
  --terracota:#E8D5A3; --terracota-prof:#D4C08A; --terracota-arcilla:#E8D5A3;
  --ambar:#E8D5A3; --borde:#252420; --borde-oscuro:#252420;
  --linea-claro:#252420; --linea-oscuro:#252420;
}`;

const viewports = [
  { w: 1280, h: 832, tag: '1280' },
  { w: 390, h: 844, tag: '390' },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  await page.goto('http://localhost:4321/es/', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  await page.addStyleTag({ content: cssA });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `c:/Users/willi/scuartwebsite/redesign/shots/paletaA-hero-${vp.tag}.png` });
  console.log(`paletaA-hero-${vp.tag}.png OK`);
  await page.close();
}
await browser.close();
