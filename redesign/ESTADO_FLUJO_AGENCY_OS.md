# Estado del flujo Agency OS — Rediseño scuart.com

**Última actualización:** 2026-06-04
**Motivo del handoff:** reiniciar Claude Code para que cargue visual-critic y disenador-desktop como subagentes reales del plugin 1.4.0 (se actualizó el plugin durante la sesión, después de que el registro de agentes ya estaba cargado en memoria).

---

## ⬛ HITO 1 — HERO: CERRADO (sesión implementación)

Estado: **hero implementado y aprobado**. Astro 5 limpio, código viejo en `_old/`, bilingüe EN(default)/ES con i18n + SEO (hreflang/canonical/OG por idioma), 3 fuentes self-hosted OFL (Archivo/DM Sans/IBM Plex Mono).

Recorrido: 7 iteraciones. Bugs/ajustes resueltos: H1 sobredimensionado desktop (166→64px, 3 bloques), grilla subida a 9%, ficha técnica derecha agregada, mobile menos fragmentado (2 palabras/línea), franja roja tablet reposicionada (col 6, ya no cruza texto), **H1 invisible → reescrito como HTML real server-rendered (progressive enhancement, robusto sin JS, SEO/a11y OK)**, **grilla invisible en 1280 → fix lógica GSAP (offsetParent), ahora 3 líneas visibles col 3/6/9**.

**visual-critic Etapa B: APPROVED_WITH_MINOR_FIXES** (9/10 ≥8.5; único fallo desktop 8.4 = grilla invisible 1280, YA RESUELTO). Scores: Originalidad 8.6, Dirección 8.7, Jerarquía 8.8, Tipografía 8.5, Composición 8.5, Premium 8.6, Claridad 8.5, Mobile 8.6, Desktop 8.4→resuelto, Diferenciación 8.7. Los 6 puntos del checklist Etapa B: todos PASAN en pixeles (grilla 1280 tras fix).

**DEUDA DE COPY (pendiente, NO bloquea):** el hero quedó con "YOUR FOOD HAS CHARACTER / YOUR WEBSITE SHOULD TOO" (EN) y "TU COMIDA TIENE CARÁCTER / TU WEB TAMBIÉN DEBERÍA" (ES) — palabra roja CHARACTER/CARÁCTER. William NO está convencido del copy (objeción: "carácter" no concuerda bien con "comida"; quería sacar la metáfora comida↔web). Se cambia en 2 líneas de i18n (src/i18n/en.ts + es.ts) cuando se decida. Research de copy hecho (6 opciones, ver historial). PENDIENTE TAMBIÉN: decidir posicionamiento (solo-food vs amplio) — afecta el copy final. El subhead-filtro "Diseño con criterio, no plantillas / no templates" el critic recomendó conservarlo aunque cambie el H1.
NOTA: cuando se cambie el copy, mantener: palabra roja corta (no desborda mobile), 2 líneas/bloques máx.

## DÓNDE RETOMAR (próxima sesión)

**SECCIÓN 2 — PORTFOLIO.** Hito 1 (hero) CERRADO ✅. Siguiente: implementar el portfolio (peso comercial principal — no hay testimonios/métricas). 4 proyectos reales: Jamón Casero, MENIUS, Healthy Choice NY, Arriba Gold (imágenes en public/images/ o donde el dev las copió en el scaffold Astro). Diseño: lista editorial de nombres gigantes Monument/Archivo, NO grid de cards. Desktop: hover → nombre rojo + otros a taupe + imagen real clip-path reveal col 9-12 + GSAP Flip entre proyectos. Tablet: touch, imagen visible col 5-6. Mobile: scroll-reveal, imagen 4/5 siempre visible. Ver DESIGN_RESPONSIVE.md §10. Bilingüe ES/EN. Tras implementar: screenshots 375/768/1280 EN+ES → William OK visual → visual-critic Etapa B.

Orden incremental restante:
2. Portfolio ← ACÁ
3. Servicios / Método
4. About / posicionamiento
5. CTA final
6. SEO / metadata / polish
7. QA responsive completo (reviewer + qa-responsive al final)

Pendientes no bloqueantes: copy del hero (deuda de copy, arriba), posicionamiento solo-food vs amplio.

Cada sección/hito: screenshots 375/768/1280 → visual-critic Etapa B (checklist 6 puntos) → OK visual de William antes de seguir. Al final del todo: reviewer → qa-responsive.

El dev implementa SOLO la dirección B v2 + sistema responsive (`redesign/DESIGN_RESPONSIVE.md`), NO reabre art direction (P11). Migración Astro completa desde cero (ver DECISIÓN DE ALCANCE abajo).

CHECKLIST ETAPA B (6 puntos, vigilar en screenshots): grain 0.06+velo (sobre carbón-elev, techo 0.08), grilla 7% col 3/6/9 (editorial no wireframe), densidad hero mobile 375px, no-competencia niveles (primario ≥40%), franja roja=columna activada, HEALTHY CHOICE NY rompe 2 líneas sin overflow. + tipografía: hero Archivo a tamaño real (¿afiche o estirada?), 3 registros distinguibles, mono ¿blueprint o GitHub README?.

### Fase 5 (diseño responsive) — CERRADA
Sistema unificado en `redesign/DESIGN_RESPONSIVE.md`. Producido por disenador-desktop actuando como responsive-completo.

### Fase 6 (visual-critic Etapa A sobre el sistema) — CERRADA: APPROVED_WITH_MINOR_FIXES
10 categorías ≥8.5 (Originalidad 9.0, Dirección 9.2, Jerarquía 8.7, Tipografía 9.0, Composición 8.8, Premium 8.6, Claridad 8.8, Mobile 8.7, Desktop 9.0, Diferenciación 9.1). Los 5 puntos de vigilancia resueltos en diseño. CHECKLIST ETAPA B actualizado (6 puntos): grain 0.06+velo (mirar sobre carbón-elev, techo 0.08), grilla 7% col 3/6/9, densidad hero mobile 375px, no-competencia niveles (primario ≥40%), franja roja=columna activada, HEALTHY CHOICE NY rompe 2 líneas sin overflow.

### Veredicto Fase 4 (visual-critic Etapa A) — CERRADO
- 1ra vuelta: las 3 direcciones (A/B/C) BLOCKED. B la de mayor techo (fallaba solo Composición 8.0 + Mobile 7.5, no por concepto). A "promedio culto". C cliché de raíz (descartada).
- B v2 refinada: **APPROVED_WITH_MINOR_FIXES**. Las 10 categorías ≥8.5 (Composición 8.0→8.7, Mobile 7.5→8.6 resueltos). Dirección elegida: **B v2 "Declaración en Rojo"** (`redesign/DIRECCION_B_v2_REFINADA.md`). El dev implementa SOLO esta dirección, no reabre el concepto (P7/P11).

### CHECKLIST OBLIGATORIO ETAPA B (visual-critic, post-implementación, sobre screenshots 375/768/1280)
1. Opacidad grilla crema 7%: editorial-con-alma vs wireframe-ruidoso. Ajustar en render.
2. Densidad hero mobile: H1 ~48.75px en 2 líneas + índice mono debajo en 375px, ¿respira o se siente apretado?
3. Grain 0.04 sobre carbón #0E0E0E + mix-blend overlay: confirmar que se PERCIBE (0.04 es muy bajo, riesgo de invisible). Si no se ve, no aporta anti-vacío.
4. No-competencia de niveles: grilla+índices+grain+carbón-elevado+nombres gigantes+fichas mono → UN foco primario claro por sección (≤3 niveles, primario ≥40%).
5. Franja roja anclada col 9: que lea como "columna activada", no barra decorativa flotante.

---

## DECISIONES CERRADAS POR WILLIAM (no volver a preguntar)

- **Stack deseado:** Astro (migración desde Vite/React CSR actual — verificado con evidencia: package.json scripts vite, solo vite.config.ts, vercel.json framework vite + rewrite SPA). NO Next.js. Landing estática, rápida, SEO, deploy Vercel. Evitar sobreingeniería. Portar componentes interactivos (Framer/GSAP/Lenis/Radix/react-hook-form) como islas Astro. Confirmar migración antes de codear.
- **Posicionamiento:** gastronomía/restaurantes como PUNTA DE LANZA + apertura sutil a comercios locales (salones, marcas, e-commerce pequeño). NO gastronomía pura, NO genérico amplio.
- **Responsive:** UN solo diseño responsive unificado mobile-first con clamp()/grid para 375/768/1280. NO disenador-mobile/tablet/desktop separados (consistente con feedback previo de William: sobre archivos existentes los diseñadores de viewport separados generan specs que chocan). El visual-critic igual evalúa los 3 viewports. Una sola dirección visual fuerte, desktop editorial premium.
- **Assets:** solo portfolio actual (4 proyectos reales: Jamón Casero, MENIUS, Healthy Choice NY, Arriba Gold). SIN testimonios/métricas reales. PROHIBIDO inventarlos (C1/P4). Testimonios y "resultados medibles" = secciones futuras u omitidas. El portfolio carga más peso visual/comercial. Confianza viene de dirección artística + proceso + calidad + posicionamiento.
- **Flujo:** desde cero (no construir sobre la v2 Terracota previa). El research previo y la v2 quedan solo como benchmark de calidad para el visual-critic, no condicionan la propuesta.

---

## FASES COMPLETADAS

- **Fase 1 — spec-writer:** COMPLETA. Spec en el historial de chat (objetivo: conversión visitante→lead ≥3% mobile; audiencia; promesa "convierte negocios comunes en marcas que se ven caras, diseño hecho a mano no plantillas"; tono/copy; secciones con propósito comercial; restricciones LATAM/mobile/performance/assets; éxito verificable). NO guardado como archivo todavía (era fase de aprobación).
- **Fase 2 — investigador-tendencias:** COMPLETA (fresco, web search real junio 2026). Conclusiones clave: minimalismo CON convicción cromática + tipografía como estructura + motion que nace del contenido. Tipografías premium 2026 (Editorial New, GT Sectra, Canela, Monument; body Founders Grotesk, Messina, GT Flexa, Apercu; QUEMADAS Inter sola/Montserrat/Playfair/Poppins/DM Sans). Paletas (bicromía austera con temperatura; rojo declaración Don Molinico; tierra+blanco roto gastro; QUEMADAS morado→azul, blobs, terracota+beige #E07B54, dorado+negro literal). Refs gastro premium reales: Don Molinico, Ruinart, La Revoltosa, Alma Hospitality, Son Daven. NOTA: research completo previo también en redesign/RESEARCH_QUE_HACE_BUENA_UNA_WEB.md y RESEARCH_GASTRONOMICO_PREMIUM.md.
- **Fase 3 — director-creativo:** COMPLETA. 3 direcciones en `redesign/DIRECCIONES_CREATIVAS_FASE3.md` (A Menú Degustación / B Declaración en Rojo / C Terreno y Mano).

---

## FASES PENDIENTES

4. **visual-critic Etapa A** — juzgar las 3 direcciones (RETOMAR ACÁ).
5. **Diseño responsive unificado** — un solo paso (no 3 agentes), mobile-first clamp() 375/768/1280, sobre la dirección que apruebe el critic. (Para esto, dado el feedback de responsive unificado, evaluar si lo hace disenador-desktop adaptado a responsive-completo, o el dev con la dirección — decidir con William al llegar.)
6. **visual-critic Etapa A** — juzgar el diseño responsive.
   ═══ DESIGN GATE ═══
7. **dev** — implementa SOLO la dirección aprobada (NO inventa art direction). Incluye/precede la migración a Astro (confirmar antes).
8. **Screenshots / QA visual** 375/768/1280.
9. **visual-critic Etapa B** — juzgar implementación con pixeles.
10. **reviewer** — código.
11. **qa-responsive** — métricas + responsive + Safari iOS.
12. **Entrega.**

NO escribir código hasta que el visual-critic apruebe dirección + diseño (Design Gate, P7/P11/P12).

---

## SET TIPOGRÁFICO APROBADO (gratis, OFL, score 8.6 — visual-critic OK)
Reemplaza las de pago (Monument Extended + Messina) hasta que William compre. Swap futuro = 3 tokens CSS.
- **Display: Archivo** variable (Omnibus-Type, Google Fonts/Fontsource, OFL-1.1). **wdth 105-115 NO 125**, wght 900 (H1/H2/CTA) y 400 (nombres portfolio). Tracking -0.025em.
- **Body: DM Sans** (Google Fonts, OFL-1.1), pesos 400/700. [Satoshi DESCARTADA: licencia Fontshare no verificable como OFL.]
- **Mono: IBM Plex Mono** (Bold Monday/IBM, OFL-1.1), uppercase + taupe + 11-13px, tracking +0.02em mobile / +0.04em desktop. Fallback: Spline Sans Mono si lee "dev/GitHub".
- Tokens swap: --font-display / --font-body / --font-mono + --display-weight-heavy/light (var settings). Self-host woff2, no <link> Google.

## CAMBIO DE POSICIONAMIENTO — BILINGÜE (William, sesión implementación)
SCUART ya NO es solo LATAM. Es un **estudio web bilingüe** para restaurantes, food brands y negocios locales que quieren verse premium/confiables/memorables online, vendiendo en: USA + LATAM + restaurantes latinos en USA + negocios bilingües. Como Menius.
- **Default público: INGLÉS.** `/` redirige a `/en`. /en = versión principal, /es = versión español (sigue importante para LATAM + latinos USA, pero el default es EN).
- Arquitectura: rutas `/en` y `/es` (Astro i18n nativo). Selector EN/ES en nav. hreflang en/es/x-default. canonical por idioma. metadata (title/desc/OG) por idioma. Copy comercial nativo en ambos, NO traducción literal.
- **Hero ES:** "TU COCINA ES DISTINTA. / TU WEB NO PUEDE VERSE IGUAL." — palabra roja DISTINTA. (sin voseo — neutro LATAM/USA)
- **Hero EN:** "YOUR KITCHEN STANDS OUT. / YOUR WEBSITE SHOULD TOO." — palabra roja STANDS OUT.
- **Subhead ES:** "No hacemos webs lindas. Hacemos que tu negocio se vea tan bien como sabe tu comida. Diseño con criterio, no plantillas."
- **Subhead EN:** "We don't make pretty websites. We make your business look as good as it tastes. Design with intent, not templates."
- El copy viejo con voseo ("Cocinás", "sos") queda DESCARTADO.

## DECISIÓN DE ALCANCE (William, 2026-06-04)
Migración COMPLETA a Astro desde cero. Descartar implementación Vite/React vieja. NO conservar copy/diseño/componentes/estructura viejos. Conservar SOLO: carpeta redesign/, los 4 assets reales de portfolio (portfolio-jamon-casero.webp, portfolio-menius-real.webp, portfolio-healthy-choice-real.webp, portfolio-arriba-gold-real.webp), documentación del proceso. Producción real de scuart.com está en OTRO proyecto viejo, no se toca. Este repo = nueva web SCUART en Astro.
Material extra disponible no usado aún (decidir si sumar al portfolio): portfolio-etnia-braids-* y portfolio-eva-beauty-* (salón belleza, encaja con apertura a comercios locales).

## VERSIÓN PLUGIN

scuart-agency-os 1.4.0 (commit f7ccf3f). Cache activo: cache/scuart-marketplace/scuart-agency-os/1.4.0. Tiene visual-critic.md y disenador-desktop.md verificados en disco.
