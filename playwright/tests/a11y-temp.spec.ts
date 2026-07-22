import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

const pages = ['/es/', '/en/'];

for (const viewport of viewports) {
  for (const path of pages) {
    test(`a11y ${viewport.name} ${path}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(`http://localhost:4400${path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1500); // dejar correr GSAP/SplitText

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();

      if (results.violations.length > 0) {
        console.log(`\n=== VIOLATIONS ${viewport.name} ${path} ===`);
        console.log(JSON.stringify(results.violations.map(v => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          nodes: v.nodes.map(n => ({ target: n.target, failureSummary: n.failureSummary }))
        })), null, 2));
      }

      expect(results.violations).toEqual([]);
    });
  }
}
