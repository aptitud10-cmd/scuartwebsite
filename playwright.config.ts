import { defineConfig, devices } from "@playwright/test";

/**
 * playwright.config.ts — configuración de los tests de accesibilidad.
 *
 * POR QUÉ EXISTE (2026-08-14): las páginas de servicio prometen "accesibilidad
 * WCAG AA verificada con herramientas, no a ojo". Las dependencias
 * (@axe-core/playwright, @playwright/test) estaban instaladas desde hacía
 * meses, pero NO había ni config ni un solo test — o sea, la afirmación
 * describía un proceso que no existía. Este archivo y e2e/a11y.spec.ts
 * convierten esa promesa en algo demostrable.
 *
 * Solo Chromium: axe-core evalúa el DOM y el CSS computado, que no cambian
 * entre motores. Correr los tres navegadores triplicaría el tiempo sin
 * encontrar una violación más.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Un fallo de accesibilidad es determinista: si falla, falla siempre.
     Reintentar solo escondería el problema. */
  retries: 0,
  reporter: [["list"]],
  /* 60s (default 30): recorrer una página entera para disparar los reveals de
     GSAP + esperar el banner de cookies + correr axe se pasaba del default en
     mobile, donde la home mide ~5.400px. El fallo se veía como "timeout", que
     no dice nada sobre accesibilidad. */
  timeout: 60_000,

  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },

  projects: [
    /* Los tres viewports que el sitio trata como diseños independientes
       (ver tokens.css): el contraste y las áreas táctiles cambian entre
       ellos, así que una violación puede existir en uno y no en los otros. */
    /* hasTouch/isMobile, no solo un viewport chico: varias reglas del sitio se
       gatean por `@media (hover: hover)` (la atenuación del banner de cookies,
       el gesto de imagen del portafolio). Un Chrome de escritorio con la
       ventana angosta reporta hover=true y ejecuta ramas de CSS que un teléfono
       real nunca ve — el test estaría auditando un estado inexistente. */
    {
      name: "mobile",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 375, height: 812 },
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "tablet",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 768, height: 1024 },
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
  ],

  /* Levanta el dev server solo si no hay uno corriendo ya. */
  webServer: {
    command: "npm run dev",
    url: "http://localhost:4321/es",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
