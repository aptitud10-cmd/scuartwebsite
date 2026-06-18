import { chromium } from '@playwright/test';

// Paletas a comparar: override de tokens base en runtime (NO toca el código real)
const paletas = [
  {
    tag: 'A-cafe-actual',
    css: ``, // sin override: la paleta café actual
  },
  {
    tag: 'B-blanco-negro',
    css: `:root{
      --hueso:#FAFAF8; --papel:#FFFFFF; --hueso-sombra:#E4E4E2;
      --tinta:#0E0E0E; --tinta-suave:#5A5A57;
      --barro-oscuro:#0E0E0E; --barro-elevado:#1A1A1A;
      --terracota:#0E0E0E; --terracota-prof:#000; --terracota-arcilla:#FAFAF8;
      --ambar:#FAFAF8; --borde:#DEDEDC; --borde-oscuro:#2A2A2A;
      --linea-claro:#E4E4E2; --linea-oscuro:#2A2A2A;
    }`,
  },
  {
    tag: 'C-negro-blanco',
    css: `:root{
      --hueso:#0E0E0E; --papel:#141414; --hueso-sombra:#2A2A2A;
      --tinta:#FAFAF8; --tinta-suave:#9A9A97;
      --barro-oscuro:#0A0A0A; --barro-elevado:#1A1A1A;
      --terracota:#FAFAF8; --terracota-prof:#FFF; --terracota-arcilla:#FAFAF8;
      --ambar:#FAFAF8; --borde:#2A2A2A; --borde-oscuro:#2A2A2A;
      --linea-claro:#2A2A2A; --linea-oscuro:#2A2A2A;
    }`,
  },
  {
    tag: 'D-blanco-azul',
    css: `:root{
      --hueso:#FAFAF8; --papel:#FFFFFF; --hueso-sombra:#E4E4E2;
      --tinta:#0E0E0E; --tinta-suave:#5A5A57;
      --barro-oscuro:#0E0E0E; --barro-elevado:#1A1A1A;
      --terracota:#1B43E0; --terracota-prof:#1233B8; --terracota-arcilla:#5C7BFF;
      --ambar:#5C7BFF; --borde:#DEDEDC; --borde-oscuro:#2A2A2A;
      --linea-claro:#E4E4E2; --linea-oscuro:#2A2A2A;
    }`,
  },
];

const browser = await chromium.launch();
for (const p of paletas) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 832 } });
  await page.goto('http://localhost:4321/es/', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  if (p.css) await page.addStyleTag({ content: p.css });
  await page.waitForTimeout(900);
  // Hero: viewport completo arriba
  await page.screenshot({ path: `c:/Users/willi/scuartwebsite/redesign/shots/pal-${p.tag}-hero.png` });
  console.log(`pal-${p.tag}-hero.png OK`);
  await page.close();
}
await browser.close();
