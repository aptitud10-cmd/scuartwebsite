/**
 * generate-og-png.mjs
 * Rasteriza public/og.svg → public/og.png (1200x630) usando Playwright.
 * Uso: node scripts/generate-og-png.mjs
 */

import { chromium } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const svgPath = resolve(projectRoot, 'public', 'og.svg');
const outputPath = resolve(projectRoot, 'public', 'og.png');

const svgContent = readFileSync(svgPath, 'utf-8');

// Embebe el SVG en un HTML mínimo para que Playwright lo renderice exactamente a 1200x630
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 1200px; height: 630px; overflow: hidden; background: #0E0E0E; }
    svg { display: block; width: 1200px; height: 630px; }
  </style>
</head>
<body>${svgContent}</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.screenshot({ path: outputPath, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

console.log(`OG image generada: ${outputPath}`);
