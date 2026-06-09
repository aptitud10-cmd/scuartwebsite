# Estado del flujo Agency OS — Rediseño scuart.com

**Última actualización:** 2026-06-07
**Motivo del handoff:** Hito 1 (hero) RE-HECHO de cero al Concepto B "Diseño + Tecnología". El hero anterior ("Declaración en Rojo" / copy de comida) fue descartado por William. Ver HERO_RESET.md.

---

## ⬛ HITO 1 — HERO: CERRADO v2 (Concepto B "Diseño + Tecnología")

Estado: **hero re-hecho y aprobado visualmente por William (2026-06-07)**. Astro 5 limpio, bilingüe EN(default)/ES con i18n + SEO (hreflang/canonical/OG por idioma), 3 fuentes self-hosted OFL (Archivo/DM Sans/IBM Plex Mono).

**Qué cambió vs la v1 (Declaración en Rojo):** se descartó por completo el concepto de comida/carácter y la "declaración roja" como afiche tipográfico. William lo encontró genérico ("texto grande + línea roja + grain") y rechazó dos intentos de elevarlo que resultaron ser INVENTOS de Claude disfrazados de research: (1) marcas de coordenadas X:03·Y:02 espolvoreadas en la grilla, (2) morphing bilingüe del H1 (el headline cambiaba EN↔ES solo en loop — ridículo, nadie navega en 2 idiomas a la vez). Ambos revertidos. Lección registrada en HERO_RESET.md: NO inventar ideas visuales y anclarlas a research falso.

**Concepto B aprobado (ver HERO_RESET.md §3):** "Diseño + Tecnología como sistema". Estudio de diseño + tecnología (NO solo restaurantes; entrada local/gastro pero capacidad técnica visible: web/SaaS/IA/workflows).
- **Copy hero EN:** "DESIGN + TECHNOLOGY / FOR BUSINESSES THAT NEED TO / LOOK SHARP AND WORK BETTER." Subhead: "A studio building premium websites, platforms and digital systems for ambitious businesses across the US and LATAM."
- **Copy hero ES:** "DISEÑO + TECNOLOGÍA / PARA NEGOCIOS QUE NECESITAN / VERSE MEJOR Y FUNCIONAR MEJOR." Subhead: "Estudio que construye webs premium, plataformas y sistemas digitales para negocios ambiciosos en USA y LATAM."
- **Protagonista visual = el "+" rojo** entre DESIGN y TECHNOLOGY. ÚNICO elemento rojo del headline, signo tipográfico integrado (mismo peso/baseline, NO icono). Hace literal "diseño + tecnología como una sola cosa". Tiene micro-interacción sutil al cursor (solo el +, solo desktop).
- **Lado derecho (col 9-12) = índice mono de capacidades** como documento editorial de estudio (NO dashboard, NO cards, NO iconos tech): 001/WEB PLATFORMS · 002/SAAS + SYSTEMS · 003/AI AUTOMATION · 004/ORDERING·BOOKING·WORKFLOWS. Términos técnicos en inglés en ambos idiomas (como PORTFOLIO). Conecta con MÉTODO.
- **Franja roja:** regla vertical fina sobre col 9 = "costura" entre lado diseño (izq) y lado sistema (der). Ya no es protagonista (lo es el +). Presupuesto rojo: 2 instancias (+ y costura).
- **Kicker mono** arriba-izq: "SCUART — DESIGN & TECHNOLOGY STUDIO" / "ESTUDIO DE DISEÑO Y TECNOLOGÍA". "Bilingüe" NO va en el copy visible (es arquitectura, no se anuncia); solo en meta.title/ogTitle para SEO.
- **CTA hero:** "START A PROJECT →" / "EMPEZAR UN PROYECTO →".
- **Motion:** entrada sobria UNA vez (grilla → word-reveal headline → el + entra último con beat propio → índice stagger → subhead/CTA). Sin loops. reduced-motion estático.
- **Responsive:** desktop editorial 12-col con índice a la derecha; tablet 768 headline contenido (3-4 líneas) + todo en fold; mobile 375 apilado limpio (kicker→headline 5-6 líneas→subhead→CTA→índice). H1 con override de font-size en mobile/tablet (clamp menor que --text-h1 global, que quedó para otras secciones).

Archivos del hero: src/components/HeroSection.astro, src/i18n/en.ts, src/i18n/es.ts. Screenshots: redesign/shots/hero-b-{en,es}-{375,768,1280}.png.

**DEUDA NO BLOQUEANTE:** el copy del Concepto B es base aprobada pero William puede afinar las frases más adelante (sin cambiar el concepto). El campo meta_col en i18n quedó conservado pero NO se renderiza (lo reemplazó el índice de capacidades).

## ESTADO ACTUAL (2026-06-09 — fin de sesión larga)

ESTRUCTURA COMPLETA + EXPANSIÓN tanda 1 hecha. Sitio = 7 secciones, en orden:
**hero → manifesto → portfolio → capabilities → método → contacto → footer**

Secciones (todas commiteadas, aprobadas por William, astro check 0/0, build limpio):
- HERO (Concepto B, el "+" rojo) — commit cd49ba5
- MANIFESTO ("No hacemos webs / Construimos ventajas competitivas" — copy rescatado del SCUART viejo scuart-next.vercel.app) — ManifestoSection.astro
- PORTFOLIO (lista editorial 4 proyectos) — commit 3299f85. DEUDA: 3/4 imágenes son screenshots de UI; reemplazar por mockups/fotos (mismo nombre .webp). Textos = placeholder.
- CAPABILITIES (lista editorial 01-06 + "qué resuelve") — CapabilitiesSection.astro
- MÉTODO (expediente click/tap 001-004) — MethodSection.astro
- CONTACTO (cierre "EMPECEMOS/LET'S BUILD SOMETHING" + form Resend) — ContactSection.astro
- FOOTER (firma SCUART+) — FooterSection.astro

FUNCIONAL HECHO:
- Nav links arreglados (#portfolio/#method/#contact) + scroll-margin.
- SEO completo: site scuart.com, sitemap, robots, OG image propia (public/og.png), canonicals/hreflang/twitter/theme-color. Verificado: cero vercel.app/localhost en SEO.
- Form Resend: endpoint /api/contact serverless, adaptador @astrojs/vercel. Sitio sigue estático salvo endpoint.
- Redirect raíz / → /en = 301 HTTP real (no meta-refresh).
- scripts/shot.mjs + shot-scroll.mjs (screenshots, @playwright/test, anchos custom).
- .vercel/output gitignoreado.

PENDIENTE WILLIAM (para que el sitio funcione 100% en prod, NO bloquea dev):
- Vercel env vars: RESEND_API_KEY + CONTACT_EMAIL (Settings → Environment Variables → redeploy).
- Reemplazar placeholder: número WhatsApp ([WHATSAPP_NUMBER] en i18n contact+footer), from de Resend (dominio verificado en Resend).
- Imágenes reales del portfolio (3/4 son screenshots). Textos reales de proyectos (placeholders).
- Posible afinado de copy (hero, whatChanges del método) — base aprobada, no urgente.

PRÓXIMO (decisión de William, sin decidir al cerrar):
- Opción A: FASE ART LAYER (Lenis smooth scroll + transiciones entre secciones + portfolio vivo + rojo con momentos memorables). Ver bloque FASE ART LAYER abajo. Es lo que lleva de "competente" a "award".
- Opción B: QA final (reviewer + qa-responsive: Lighthouse/WCAG/perf 3 viewports) + deploy prod.
- Recomendación Claude: Art Layer primero (va a cambiar código igual), QA al final sobre sitio terminado.
- Último preview deploy: https://scuartwebsite-o1ximit4y-william-2622f910.vercel.app (desactualizado — re-deployar para ver las 3 secciones nuevas).

## DÓNDE RETOMAR (sesión anterior — 2026-06-08, ya resuelto)

**SECCIÓN 3 — MÉTODO. EN CURSO (rehacer).** Hero ✅ y Portfolio ✅ cerrados.

ESTADO MÉTODO (pausa 2026-06-08):
- Enfoque elegido por William: PROCESO DE TRABAJO, 4 pasos. Contenido textual dado por William (no inventar):
  001 DISCOVER/DIAGNÓSTICO · 002 DIRECTION/DIRECCIÓN · 003 SYSTEM/SISTEMA · 004 LAUNCH/LANZAMIENTO.
  Los body ES son TEXTUAL de William; los body EN son copy nativo ya en el diccionario (bloque `method` en src/i18n/en.ts y es.ts — YA EXISTE).
- PRIMERA implementación (filas editoriales + índice técnico lateral) quedó PLANA — William la rechazó ("proceso de agencia convencional, sin movimiento"). Esa versión está en src/components/MethodSection.astro SIN COMMITEAR. Montada en en/index.astro y es/index.astro.
- CONCEPTO DE REEMPLAZO APROBADO: "EL EXPEDIENTE QUE SE ABRE" (Concepto 1 de 5 propuestos). Sticky split scroll-driven:
  · Desktop: sección pineada (ScrollTrigger pin ~100vh). IZQ = índice expediente 001-004 (activo crema+rojo, inactivos taupe, número activo grande protagonista). DER = panel que MUTA con crossfade entre los 4 pasos al scrollear (título + párrafo + capacidades del paso + "qué cambia para el negocio"). Franja roja costura marca activo. Al completar 004, libera.
  · Tablet: índice horizontal arriba + panel; sticky liviano o tap-able si pin complica.
  · Mobile: SIN sticky. Secuencia vertical editorial, cada paso bloque limpio (número/título/texto/capacidades/qué cambia), regla fina entre pasos, reveal sobrio. Sensación de expediente, NO cards.
- WIREFRAME aprobado por William (ver historial chat sesión 06-08).
- CAMPOS i18n NUEVOS a agregar al rehacer: por cada step → `stepCapabilities` (array, capacidades técnicas de ese paso, inglés ambos idiomas) + `whatChanges` (string por idioma, "qué cambia para el negocio" — copy nativo SIN métricas/resultados inventados, solo cambio cualitativo). Y labels `capabilitiesLabel` (CAPABILITIES/CAPACIDADES) + `whatChangesLabel` (WHAT CHANGES/QUÉ CAMBIA).
- PROHIBICIONES (William): nada de cards, nada de timeline corporativo, nada de contador gimmick, nada de iconos, nada de horizontal complejo todavía. Grilla fina visible, mono para datos, rojo disciplinado.
- Progressive enhancement obligatorio: sin JS los 4 pasos visibles/legibles (NO que quede 1 solo). El pin/crossfade es enhancement. reduced-motion = secuencia vertical estática.

→ RETOMAR: mandar el dev a reescribir MethodSection.astro con el concepto expediente sticky (el spec detallado quedó redactado en el chat, listo para reenviar). Luego screenshots con `node scripts/shot.mjs "section.method" method <puerto>` → OK visual de William.

NOTA TÉCNICA: dev server a veces arranca en 4322 si 4321 ocupado. Error de esbuild dev "Expected identifier but found *" en PortfolioSection = FALSO POSITIVO del pre-scanner, verificado: el build de producción pasa y el script compila. No perseguir.
NOTA HERRAMIENTA: hay script de screenshots reutilizable en scripts/shot.mjs (usa @playwright/test). Uso: node scripts/shot.mjs "<selector>" <nombre> <puerto>.

Orden incremental restante:
3. Método ✅ CERRADO (expediente click/tap)
4. CTA / contacto ← ACÁ
5. SEO / metadata / polish
6. QA responsive completo (reviewer + qa-responsive al final)
7. FASE ART LAYER / EMOTIONAL LAYER (post-estructura, antes de final) — ver abajo

## CTA / CONTACTO — decisiones de William (2026-06-09)
- Mecanismo PRINCIPAL: FORMULARIO tipo brief corto y elegante. CTA "Start a project / Empezar un proyecto".
- NO WhatsApp como principal (SCUART = estudio premium, no negocio local informal). NO botón flotante, NO verde, NO protagonista.
- Jerarquía: 1) Formulario estructurado (leads serios). 2) Email directo (respaldo). 3) WhatsApp opcional SECUNDARIO discreto al final ("Prefer a quick message? WhatsApp / Email").
- Diseñar como CIERRE PREMIUM DE PROYECTO, no página de contacto común.
- PENDIENTE resolver al implementar: backend del form (cómo se reciben los envíos — servicio tipo Formspree/Resend/Vercel, o email). Decidir con William.

## FASE ART LAYER / EMOTIONAL LAYER (marcada por William 2026-06-09, NO implementar aún)
CRITERIO: William siente que el sitio, aunque sólido, puede terminar siendo "web negra con texto + líneas + tipografía grande" sin capa visual memorable. Tras cerrar estructura (CTA + SEO + QA), hacer una fase de ELEVACIÓN visual/emocional para que SCUART se sienta estudio premium con dirección artística real, no solo texto editorial oscuro.
Explorar (sin implementar hasta la fase): motion editorial con intención (no trucos); previews de proyectos más vivos; video loops / micro-reels de proyectos REALES; interacciones portfolio que muestren UI real; transiciones entre secciones; detalles visuales más allá de líneas; textura/material más refinado; rojo con momentos memorables; CTA con más personalidad; una pieza visual que DEMUESTRE "design + technology" (no solo lo diga).
REGLAS: no video stock genérico; no humo/luces/futurismo vacío/dashboards falsos/SaaS común; no sacrificar performance; no tapar copy; no adornos sin concepto. Todo refuerza "verse premium + funcionar mejor online".
NOTA Claude: esta fase es la que el research (RESEARCH_HERO_2026.md) identificó como la diferencia real entre "muy bueno" y "award". No es opcional para el nivel que William quiere. Las deudas de imágenes del portfolio (3/4 son screenshots) se resuelven naturalmente acá.

## ESTADO DE SECCIONES (sesión 2026-06-07)

- **HERO ✅** Concepto B "Diseño + Tecnología". Commit cd49ba5. Aprobado por William. Ver bloque Hito 1 arriba + HERO_RESET.md.
- **PORTFOLIO ✅** Sección 2. Commit 3299f85. src/components/PortfolioSection.astro. Lista editorial 4 proyectos reales (JAMÓN CASERO/MENIUS/HEALTHY CHOICE NY/ARRIBA GOLD), hover-reveal+Flip desktop, scroll-reveal mobile. Aprobado funcional por William.
  - DEUDA PORTFOLIO (no bloquea): 3 de 4 imágenes son screenshots de UI con fondo claro que bajan el nivel premium. El código tiene tratamiento (overlay carbón + filtro) pero no transforma un screenshot en pieza editorial. William va a reemplazar por mockups/fotos editoriales → SOLO cambiar el archivo .webp (mismo nombre/ruta en public/images/), no toca código.
  - DEUDA PORTFOLIO: descripciones/categorías/años son PLACEHOLDER marcado ([CATEGORÍA — PENDIENTE], etc.) en src/i18n/en.ts y es.ts bloque `portfolio`. William completa con datos reales (C1/P4 — no inventar). Cuando ponga texto corto real, el layout ya es robusto (no se encima).
  - Páginas de caso individuales NO existen (hito futuro). "VIEW CASE / VER CASO" es visual, no navega.

Pendientes no bloqueantes globales:
- Copy del hero: base aprobada, William puede afinar frases sin cambiar concepto.
- Imágenes y textos reales del portfolio (arriba).
- Lenis (smooth scroll) NO integrado aún — evaluar si se agrega en alguna sección o al final.

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
