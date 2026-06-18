# Art Direction — SCUART (rediseño desde cero, referencia maestra Locomotive)

**Fecha:** 2026-06-14
**Director:** director-creativo (Opus 4.8)
**Cliente:** SCUART (proyecto propio, tratado como proyecto cliente)
**Estado:** PROPUESTA para validación EN VIVO con William. Nada se implementa sin su OK. William ve cada etapa en localhost antes de avanzar.
**Reemplaza:** toda dirección terracota anterior (V1 crema, V2 terracota, V3_FINAL). El rumbo cálido-gastro queda archivado por decisión de William.
**Base (decisiones cerradas por William, fijas, NO re-discutir):** Referencia maestra Locomotive (CLARO) · Paleta B1 "Arquitecto" claro · Fraunces + Geist Sans · Motion completo.
**Insumos:** `DESIGN_RESEARCH_LOCOMOTIVE.md` (sistema Locomotive verificado) + skill `visual-composition` (reglas anti-slop R1–R10, jerarquía medible).

---

## 0. Regla de oro de esta dirección

> **Copiamos el SISTEMA de Locomotive, no su skin.** Locomotive es premium porque QUITA: 2 familias tipográficas, 1 acento, cero gradientes, cero multicolor, motion que sirve la jerarquía (3–4 momentos por página, no en cada elemento). SCUART hereda ese método y lo viste con su propia identidad (verde botella en vez de los emojis de tren, Bogotá en vez de Montréal, EN/ES en vez de EN/FR).

El error a no repetir (de sesiones pasadas): inventar dirección genérica AI-slop o construir a ciegas. **Todo aquí es medible** (hex, clamp, ms, %). Si una regla no es verificable en una captura de pantalla, no es una regla — es decoración.

---

## 1. Concepto central

**Idea (una frase):**
> **"El estudio como plano de arquitecto: papel de yeso, tinta negra, una sola línea verde. Todo el peso lo carga la tipografía y el espacio — el color no grita porque el trabajo no necesita gritar."**

**Por qué este concepto conecta con SCUART y se diferencia:**

SCUART es un estudio de diseño + tecnología, no una marca gastronómica (la gastronomía son sus clientes, no su identidad). El concepto "plano de arquitecto" comunica exactamente lo que un estudio digital premium vende: **criterio, precisión, autoridad silenciosa.** El fondo de yeso `#F5F4F0` y la tinta casi-negra `#131312` son el papel y el grafito; el verde botella `#1A3A2A` es la única anotación de color, usada como un arquitecto subraya una cota crítica — con escasez, no con relleno. El research confirma que el minimalismo cromático de las agencias top (Locomotive, Instrument, O/O) "desplaza la atención hacia la tipografía y el motion. Es una señal de confianza: no necesitamos color para capturar la atención, el trabajo habla solo."

La diferenciación es doble. Frente a la competencia genérica (azul/blanco/gris SaaS, gradientes, blobs 3D — todo lo que el research marca como AI-slop), SCUART se ve como un estudio con criterio editorial. Frente a la propia referencia Locomotive, SCUART NO clona: el verde botella es un acento que Locomotive no usa (ellos van casi-acromáticos + emojis), la tipografía display es Fraunces (no PP Editorial New), y la personalidad es Bogotá/LATAM, no Montréal. Es el mismo método, distinta voz.

El concepto NO es un slogan. Es la metáfora que ata cada decisión: el yeso (fondo), el grafito (tinta), la línea verde (acento mínimo), las cotas y números (índices mono, contadores reales), y la mano firme que dibuja sin titubear (motion por líneas, no por bloques).

---

## 2. Mood & Atmósfera

- **Tono:** Luminoso y aireado (NO dark, NO denso). Claro de yeso, no blanco clínico. Formal con filo, no acartonado.
- **Sensación táctil:** Refinado y preciso, levemente material (grano sutil que evita el "div de color plano"), geométrico antes que orgánico, fresco antes que cálido. Papel técnico, no papel de revista vintage.
- **Ritmo visual:** Reposado y confiado, con 3–4 picos de motion cinematográfico. Contemplativo en el espacio negativo, exacto en la jerarquía. El sitio "respira" — el aire entre secciones está tan diseñado como las secciones.

**5 adjetivos:** Preciso · Luminoso · Editorial · Autoritario · Restraint.

**NO es:** cálido-gastro, terracota, oscuro, gritón, multicolor, SaaS azul, denso.

---

## 3. Paleta — B1 "Arquitecto" claro (método Locomotive: 1–2 neutrales + 1 acento, cero gradientes)

### Tokens (hex exactos + rol + proporción de uso verificable en captura)

**Neutrales (el papel y el grafito — ~95% del sitio)**

| Token | Hex | Rol | % aprox de superficie |
|---|---|---|---|
| `--bg` | `#F5F4F0` | Fondo dominante. Blanco roto / yeso. **NUNCA `#FFFFFF`** (el blanco clínico mata el carácter material). Hero, portfolio, capabilities, footer base. | ~70% |
| `--surface` | `#ECEAE4` | Superficie elevada / secciones alternadas / cards de marco. Un paso más cálido-gris que el bg, da plano sin sombras. Manifiesto y/o method como sección alternada. | ~12% |
| `--ink` | `#131312` | Texto y titulares. Negro casi absoluto, levísimo cálido. **NUNCA `#000000`**. Sobre `--bg` = contraste ~16:1 (AAA). | ~10% (tinta) |
| `--mid` | `#888783` | Gris UI: metadatos, labels mono, captions, placeholders, índices secundarios. Sobre `--bg` = ~3.4:1 → **solo para texto ≥18.66px bold o ≥24px regular, o elementos no-texto (hairlines, iconos).** Para body secundario legible usar `--ink` al 70% opacidad, no `--mid`. | ~3% |

**Acento (la única línea verde — token AISLADO, afinable en vivo)**

| Token | Hex | Rol | % de superficie |
|---|---|---|---|
| `--accent` | `#1A3A2A` | **Verde botella.** El único color del sistema. Uso **<5% total.** Aplica a: links (texto y subrayado), itálica de énfasis en titulares (UNA palabra clave por titular grande), franja/regla estructural, número de sección activo, hover de portfolio, sellos/glifos, foco de inputs, CTA primario (relleno). | **<5%** |
| `--accent-press` | `#12281D` | Hover/pressed del CTA y estados activos (oscurece, nunca aclara). | mínimo |
| `--on-accent` | `#F5F4F0` | Texto sobre relleno verde (= `--bg`). Sobre `--accent` da contraste ~10:1 (AAA). | — |

> **Nota crítica de William (respetada):** el verde botella es la propuesta del research, aprobado en el hero. **El acento queda como UN token claramente aislado (`--accent`)** para afinar el tono exacto en contexto sin tocar nada más. Si en method/manifiesto el verde no cierra, se afina solo ese token. Candidatos de afinación a tener listos: `#1A3A2A` (botella, default) → `#13332A` (más frío/profundo) → `#214A33` (más vivo) → `#1E3D2C` (intermedio). William decide en vivo; el dev expone el token para swap inmediato.

### Reglas de uso (inviolables — método Locomotive)
- **CERO gradientes.** En ningún fondo, botón, overlay ni texto. (Anti-slop: gradientes no están en el vocabulario de agencias premium 2026.)
- **CERO segundo acento.** Si aparece la tentación de "un naranja para los CTA y verde para links", se rechaza. Un acento, fin.
- **El verde es escaso por diseño.** Si una captura tiene >5% de verde, está mal — el verde pierde su peso. La escasez ES lo que lo hace caro.
- **Neutrales nunca grises fríos azulados.** `--mid #888783` es gris neutro-cálido, no `#8A8A99`.
- **Sin dark mode.** Locomotive es claro; SCUART es claro. (Decisión cerrada.)

### Razón de la paleta
Sigue el modelo Locomotive casi directamente (claro + bicromático neutral + 1 acento), validado en vivo por William. El verde botella es el acento que las agencias premium usaron en 2024–2026 (O/O Studio, Instrument): transmite solidez, naturaleza, autoridad — **sin la calidez gastronómica** que se descartó. Contraste WCAG verificado: `--ink` sobre `--bg` ~16:1 (AAA), `--on-accent` sobre `--accent` ~10:1 (AAA), CTA verde sobre yeso ~9.5:1 (AAA). El gris `--mid` está deliberadamente restringido a texto grande / no-texto por su contraste 3.4:1.

### Textura — grano sutil (anti "div de color plano", R1)
- Grano/noise SVG `feTurbulence` en pseudo-elemento fijo sobre el `--bg`, `mix-blend-mode: multiply`, **opacidad 0.025–0.04** (muchísimo más sutil que en la dirección terracota — aquí es "papel técnico liso", no "papel prensado").
- SIN drift animado (el grano es material, no efecto — no se mueve).
- Regla: lo justo para que `#F5F4F0` no se lea como un `<div>` plano en pantallas grandes. Si se ve "sucio", bajar a 0.02. Calibración en vivo en el hero.

---

## 4. Tipografía — Fraunces (display) + Geist Sans (cuerpo/UI), 2 familias, contraste extremo de escala

### Display — Fraunces
- **Familia:** **Fraunces** (Google Fonts, variable, self-hosted woff2). Serif old-style óptico con ejes `opsz`, `SOFT`, `WONK` e **itálica expresiva** — mismo ADN "revivalista contemporáneo" que el PP Editorial New de Locomotive, disponible gratis. (Posible upgrade futuro a PP Editorial New si William licencia — sustituye el token `--font-display` 1:1; NO diseñar sobre esa hoy.)
- **Foundry:** Undercase Type (Google Fonts).
- **Pesos / estilos usados (máximo 3 para respetar el restraint Locomotive de ~4 estilos totales):**
  1. **Fraunces 300 (Light), `opsz` alto** — titulares gigantes (Hero H1, Manifiesto). En tamaño enorme el peso BAJO es lo elegante.
  2. **Fraunces 400 Italic** — la palabra/frase de énfasis, en `--accent` verde. El gesto de autoría.
  3. **Fraunces 500/600** — H3 / nombres de proyecto en portfolio / numerales gigantes (cuando necesitan presencia sin ser hero).
- **Cuándo usar:** SOLO en los momentos de mayor jerarquía — Hero H1, Manifiesto, nombres de proyecto, numerales de sección gigantes, wordmark del footer. **NUNCA en nav, body, labels, inputs ni botones.**
- **Por qué:** el contraste serif-display / sans-body es el pairing editorial que da jerarquía dramática sin esfuerzo y lee "estudio con criterio", no "template SaaS". Fraunces en pesos extremos (light + bold) con itálica agresiva evita el registro "literary/orgánico" de sus pesos medios — exactamente lo que pide el research para un mood de agencia digital fría-premium.

### Body / UI — Geist Sans
- **Familia:** **Geist Sans** (Vercel, gratis, variable, self-hosted woff2). Grotesca con carácter técnico — comunica "studio digital" mejor que un grotesco genérico. Reemplaza a Hanken (que el research marca como "correcto pero no premium / genérico").
- **Foundry:** Vercel.
- **Pesos / estilos usados:**
  4. **Geist 400 (Regular)** — párrafos, leads, nav, inputs, botones, descripciones.
  5. **Geist 500 (Medium) UPPERCASE +0.12em** — sistema de índices/metadatos (`01 / WORK · BOGOTÁ`, contadores, categorías). Cumple el rol "ficha técnica/mono" SIN sumar una tercera familia display.
- **Cuándo usar:** todo lo que NO es momento de máxima jerarquía. Cuerpo, navegación, UI, labels, fichas técnicas.

> **Sobre la mono:** el layout actual preloadea IBM Plex Mono (resto de iteraciones viejas). Decisión de restraint: NO usar una mono aparte como Locomotive (ellos solo tienen 2 familias). El registro "mono/ficha técnica" lo da **Geist 500 uppercase con tracking abierto.** Si William prefiere una mono real para los datos/coordenadas (gesto Locomotive más literal), se evalúa Geist Mono (misma foundry, gratis) como tercer estilo controlado — pero el default ejecutable es 2 familias. **Acción para el dev: la wiring de fuentes del `Layout.astro` (preloads `archivo-variable`, `dm-sans-variable`, `ibm-plex-mono`) NO corresponde a esta dirección — debe re-cablearse a Fraunces + Geist antes de montar el hero.**

### Pairing — por qué funciona
Serif old-style de alto carácter (Fraunces) + grotesca técnica neutra (Geist) replica el ADN exacto de la referencia (Editorial New + Neue Montreal/Helvetica Now). El contraste serif/sans crea la jerarquía; la neutralidad técnica de Geist hace que Fraunces se sienta aún más expresiva y deliberada. Geist suma el "olor a producto digital" que diferencia a SCUART de un estudio puramente editorial.

### Contraste extremo de escala (el principio del research: "la diferencia de escala ES el diseño")
Si el hero es Fraunces a 8–12vw, el cuerpo es Geist a 0.9–1rem. Esa brecha es intencional y dramática. No hay tamaños "intermedios cómodos" que diluyan el contraste.

### Escala fluida (mobile-first, base body 16px mínimo — regla dura, clamp ejecutable)
| Rol | Mobile (375px) | Fluido (clamp) | Desktop (1440px+) | Fuente / peso |
|---|---|---|---|---|
| Display XXL (Hero, Manifiesto) | 3rem (48px) | `clamp(3rem, 9vw, 9rem)` | ~9rem (144px ≈ 10vw) | Fraunces 300 |
| Display XL (H2 de sección) | 2.25rem (36px) | `clamp(2.25rem, 5.5vw, 5rem)` | 5rem (80px) | Fraunces 300/400 |
| Display L (H3 / nombre proyecto) | 1.75rem (28px) | `clamp(1.75rem, 3.5vw, 3rem)` | 3rem (48px) | Fraunces 500 |
| Numeral gigante (sección) | 4rem (64px) | `clamp(4rem, 12vw, 11rem)` | ~11rem (176px) | Fraunces 300/500 |
| Lead / subhead | 1.125rem (18px) | `clamp(1.125rem, 1.6vw, 1.375rem)` | 1.375rem (22px) | Geist 400, ink 70% |
| Body | 1rem (16px) | `clamp(1rem, 1.1vw, 1.0625rem)` | 1.0625rem (17px) | Geist 400 |
| Índice / metadato | 0.75rem (12px) UPPER +0.12em | — | 0.8125rem (13px) | Geist 500, `--mid` o `--ink` |

### Detalles tipográficos
- **Tracking display:** `-0.025em` a `-0.035em` (titulares grandes Fraunces casi tocándose en horizontal).
- **Tracking body:** `0` (Geist regular neutro).
- **Tracking índices/mono:** `+0.12em` uppercase.
- **Leading display:** `0.95`–`1.05` (titulares editoriales casi tocándose en vertical).
- **Leading body:** `1.5`–`1.6` (lectura cómoda).
- **Leading lead/subhead:** `1.35`.

---

## 5. Composición / Layout — editorial asimétrico, método Locomotive

- **Pattern primario:** **editorial asimétrico** (NO bento, NO card-grid uniforme, NO apilado centrado-simétrico — eso es AI-slop R2). Texto izquierda, contenido derecha en proporciones NO 50/50. Texto que sangra fuera del grid intencionalmente. Espacio negativo agresivo y deliberado.
- **Grid:** **12 columnas desktop / 4 columnas mobile.** Gutter 24px desktop / 16px mobile. Márgenes laterales amplios (el contenido NO llega al borde = sensación de "página"): margen `clamp(1.25rem, 5vw, 7rem)`.
- **Línea de margen:** una hairline vertical sutil (`--mid` al 30%) recorre el sitio como "margen de cuaderno técnico" / cota de plano — el esqueleto editorial visible. Gesto de personalidad heredado de la sensación Locomotive (cotas de arquitecto).
- **Spacing scale (8-based, ejecutable como tokens):** 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192px. Section padding vertical: `clamp(4rem, 10vw, 10rem)` (64px mobile → 160px desktop). **Regla dura: ningún bloque vertical excede 600px sin un quiebre visual** (R10 / checklist anti-slop).
- **Aspect ratios:** 4/5 (vertical, lista de portfolio mobile), 3/2 (piezas grandes desktop), 16/10 para el featured (NO 16/9 genérico). 1/1 prohibido para imágenes de proyecto (lee a card-grid).
- **Asimetría obligatoria por sección:** cada sección documenta dónde rompe la simetría. Si una sección es perfectamente centrada-simétrica, se rechaza (R2).
- **Navegación:** header con logo SCUART + links horizontales VISIBLES + CTA "Hablemos / Let's talk" prominente + toggle EN/ES. **Sin hamburger en desktop** (gesto Locomotive). Hamburger solo <768px.

---

## 6. Ritmo del scroll — sección por sección (las 7 secciones)

> Ritmo Locomotive: cada sección tiene una proposición única, ninguna repite plantilla, el espacio entre secciones está diseñado. Alternancia sutil `--bg` (yeso) ↔ `--surface` (yeso elevado) como respiración — sin saltar a oscuro (el sitio es claro). El acento verde aparece 1–2 veces por pantalla máximo.

Para cada sección incluyo la **tabla de jerarquía obligatoria** (skill visual-composition: máximo 3 niveles, nivel 1 ≥40% del peso).

### 1 — HERO · fondo `--bg` (yeso)
- **Proposición:** una declaración, no una descripción de servicios (gesto Locomotive: "Digital-First Design™"). Claim de agencia + badge de ubicación Bogotá.
- **Jerarquía:**
  - **N1 (≥45%):** H1 Fraunces 300 gigante (`clamp(3rem, 9vw, 9rem)`), alineado izquierda, col 1–9, 3–4 líneas con leading 0.95. UNA palabra clave en Fraunces itálica `--accent` verde (el gesto de marca en el primer renglón). Domina por tamaño + posición arriba-izquierda + aislamiento.
  - **N2:** lead Geist 400 (1 línea, `--ink` 70%), debajo del H1, col 1–6.
  - **N3:** índice mono arriba-derecha (col 10–12): `SCUART® / DESIGN + TECHNOLOGY STUDIO · BOGOTÁ 4.7110°N 74.0721°W · EST. [año]` + fila de metadatos + CTA único debajo del lead.
  - **Eliminados:** segundo CTA, scroll-cue genérico, foto de fondo, ilustración decorativa.
- **Rompe la grilla:** el H1 sangra ligeramente fuera del margen izquierdo (overshoot editorial); una franja/filete `--accent` vertical vive sobre la línea de col 9.
- **Material (anti R1):** NO es un div vacío. Grano sutil + un detalle gráfico: numeral/glifo `--mid` semitransparente gigante de fondo, O el filete verde estructural. NO foto de equipo, NO mockup (R8/R3 no aplica — SCUART confía en tipografía como Locomotive).
- **Llenar la pantalla:** índice + lead + CTA bajo el H1; nada de medio viewport muerto.

### 2 — MANIFESTO · fondo `--surface` (yeso elevado) — sección de voz
- **Proposición:** la voz de marca con actitud, casi solo tipografía y aire. Es el contraste de ritmo (superficie elevada).
- **Jerarquía:**
  - **N1 (≥55%):** una frase grande Fraunces 300 (`clamp(2.25rem, 6vw, 6rem)`) en `--ink`, con una palabra/frase clave en itálica `--accent` verde. Mucho respiro CON tensión (no un elemento flotando solo — eso fue "vacío sin alma" en errores pasados).
  - **N2:** sub-frase Geist 400 o segunda línea del manifiesto, subordinada.
  - **N3:** índice mono `01 / MANIFESTO`.
  - **Eliminados:** imagen, iconos, cards, CTA.
- **Copy:** declaración, no descripción (R9 + gesto Locomotive). Ej. registro *"Most websites are forgettable. We build the opposite."* / ES *"La mayoría de los sitios se olvidan. Nosotros construimos lo contrario."* William elige la línea final; cero clichés de marketing.
- **Rompe la grilla:** la frase se parte en líneas escalonadas/desalineadas que rompen la columna intencionalmente.

### 3 — PORTFOLIO · fondo `--bg` (yeso) — el patrón que William ya aprobó, CONSERVAR
- **Proposición:** lista editorial estilo Locomotive (NO card-grid). Proyectos como filas: nombre + cliente + año + categoría, imagen real inline. Es lo que vende — máximo cuidado.
- **Jerarquía:**
  - **N1 (≥40%):** los nombres de proyecto en Fraunces 500 grandes (`clamp(1.75rem, 4vw, 3.5rem)`), uno por fila, sangrando fuera del margen. El tamaño los hace dominantes — sin badges "destacado".
  - **N2:** la imagen real de cada proyecto, SIEMPRE visible en reposo (mobile/tablet no tienen hover — R3/R8). Anclada asimétricamente (una derecha, la siguiente izquierda). Parallax al 70% del scroll (motion §7).
  - **N3:** ficha mono por fila: `01 / [PROYECTO] · [CLIENTE] · [CATEGORÍA] · [AÑO]`. Datos reales, sin inventar métricas (constitución P4).
  - **Eliminados:** cards con shadow + border-radius (slop 2019–2022), filtros complejos si hay pocos proyectos, badges PNG de premios.
- **Hover (desktop, MEJORA no revela):** el nombre pasa a `--accent` verde + subrayado que se dibuja (scaleX); la imagen sigue al cursor (cursor follower, motion §7) y escala 1.0→1.03. La imagen YA estaba visible — el hover enriquece.
- **Filtros (si aplican):** texto mínimo tipo Locomotive (`All / Branding / Digital / Experience`), no dropdowns.

### 4 — CAPABILITIES · fondo `--surface` o `--bg` (a definir en vivo)
- **Proposición:** servicios como lista editorial con numerales gigantes (gesto Locomotive de contadores de sección), NO cards.
- **Jerarquía:**
  - **N1 (≥40%):** numerales `01`–`04` en Fraunces gigante (`clamp(4rem, 12vw, 11rem)`) que LLENAN el espacio con peso (resuelve "media pantalla vacía" sin relleno). El numeral activo en `--accent` verde.
  - **N2:** nombre del servicio en Fraunces 500 / Geist 500, junto al numeral (composición superpuesta editorial).
  - **N3:** descripción corta Geist 400 + divisor hairline `--mid` 30%.
  - **Eliminados:** cards genéricas con "01 02 03" en gris (PROHIBIDO), iconos decorativos, grid de 3.
- **Copy servicios:** del brief (ej. 01 Web Design · 02 Brand Identity · 03 Custom Systems · 04 Local SEO).
- **Rompe la grilla:** los numerales se solapan parcialmente con el texto del servicio (tipo numerales del Method de Locomotive).

### 5 — METHOD · fondo `--bg` (yeso)
- **Proposición:** el proceso como capítulos numerados, con motion de pin (gesto memorable).
- **Jerarquía:**
  - **N1 (≥40%):** numerales `001`–`004` (Discovery · Strategy · Design · Development) en Fraunces gigante, en columna lateral fija (pin sutil ScrollTrigger). El numeral activo en `--accent`.
  - **N2:** título del paso Fraunces 500 + descripción Geist 400, scrolleando al lado del numeral pineado.
  - **N3:** filetes hairline `--mid` que separan pasos; índice mono.
  - **Eliminados:** cards, iconos por paso, líneas de timeline decorativas con puntos.
- **Rompe la grilla:** numerales en columna lateral fija mientras el contenido del paso fluye (pin).

### 6 — CONTACTO · fondo `--surface` (yeso elevado, cierre)
- **Proposición:** datos reales que humanizan + un solo CTA (gesto Locomotive: dirección física, sin formulario genérico vacío).
- **Jerarquía:**
  - **N1 (≥40%):** titular Fraunces 300 grande a la izquierda (col 1–6), declaración + escasez ("Trabajamos con un número limitado de proyectos por mes / We take on a limited number of projects").
  - **N2:** datos reales en Geist + mono a la derecha (col 7–12): email, Bogotá + coordenadas, EN/ES. UN CTA `--accent` verde (texto `--on-accent`).
  - **N3:** índice mono `06 / CONTACT`, foco de inputs en `--accent` verde si hay form.
  - **Eliminados:** múltiples CTAs compitiendo, mapa embebido genérico, campos de form innecesarios.
- **Rompe la grilla:** asimetría 6/6 con el titular sangrando a la izquierda.

### 7 — FOOTER · fondo `--bg` o `--surface` (hereda)
- **Proposición:** tarjeta de presentación standalone — quien llegue solo al footer sabe qué hace SCUART y cómo contactar. Datos reales como diseño (gesto Locomotive: dirección, contadores, ®).
- **Jerarquía:**
  - **N1 (≥45%):** wordmark **SCUART®** en Fraunces gigante sangrando ambos márgenes (firma a sangre). El `®` o un glifo en `--accent` verde como sello.
  - **N2:** coordenadas Bogotá (`4.7110°N 74.0721°W`), email, links de nav, toggle EN/ES, redes — en Geist + mono.
  - **N3:** contadores reales si existen (años activo, nº de proyectos — texto puro, NO badges), copyright, créditos.
  - **Eliminados:** logos de "tecnologías que usamos", badges de premios PNG, newsletter genérico (salvo que William lo pida).
- **Rompe la grilla:** el wordmark ocupa todo el ancho a sangre = firma del estudio.

---

## 7. Motion — COMPLETO (decisión cerrada): 3–4 momentos memorables, el motion sirve la jerarquía

### Intensidad
**Cinemático con restraint Locomotive.** Motion abundante pero NO exhibicionista: solo 3–4 momentos memorables por página, el resto son micro-interacciones funcionales. El motion SIRVE la jerarquía (el título aparece antes, el subtítulo después), nunca se luce a sí mismo.

### Stack técnico (ya en el proyecto)
- **Lenis** — smooth scroll base (lerp ~0.1, ya configurado en `Layout.astro`, integrado con GSAP ticker). Hace sentir el sitio como app nativa.
- **GSAP + ScrollTrigger** — reveals por líneas, parallax, pin del method.
- **Astro View Transitions** — transiciones de página (EN/ES, case studies).
- **Cursor follower** — GSAP en portfolio (la imagen sigue al cursor en hover).

### Los momentos que SÍ (medibles)

**MOMENTO 1 — Hero: titular emerge por líneas.**
- H1 Fraunces entra **por líneas** (SplitText line-by-line, clip de abajo hacia arriba), `expo.out`, ~0.9s, stagger 0.12s. La palabra itálica `--accent` entra con +0.2s de delay — la firma aterriza última. NO fade de bloque (eso es el slop universal R5).

**MOMENTO 2 — Portfolio: cursor follower + parallax (la interacción más premium de Locomotive).**
- En hover sobre cada fila de proyecto (desktop), la imagen real **sigue al cursor** con lerp suave (GSAP, lerp ~0.1) y escala 1.0→1.03; el nombre pasa a `--accent` con subrayado dibujándose. Las imágenes en reposo tienen **parallax al 70% del scroll** (se mueven más lento que el scroll = profundidad sin 3D). En mobile (sin hover): la imagen aparece con reveal clip-path al entrar en viewport (`inset(100% 0 0 0)` → `0`, ~0.7s `expo.out`).

**MOMENTO 3 — Method: numerales pineados.**
- Numerales `001`–`004` pineados (ScrollTrigger) mientras el texto de cada paso entra/sale al lado. El numeral activo transiciona a `--accent` verde. El método se lee como capítulos.

**MOMENTO 4 (transición global) — Page transitions.**
- Astro View Transitions: wipe/fade suave (yeso) entre páginas, ~0.6–0.8s `expo.inOut`, consistente en TODA navegación interna (EN/ES, case studies). Opción de shared-element en el wordmark/nav.

### Micro-interacciones (presentes siempre — R7)
- Links de texto: subrayado `--accent` que se dibuja en hover (~0.3s, scaleX desde la izquierda).
- CTA verde: oscurece a `--accent-press` + comprime levísimo (scale 0.98) en :active.
- Todo elemento interactivo tiene hover + active + **focus visible** (`--accent` outline, accesibilidad teclado).
- Reveals de texto de sección (H2): por líneas, `expo.out`, al entrar en viewport.

### Timing global
- Reveals: 0.7–1s `expo.out` / `power3.out`. Hover: 0.13–0.3s. Stagger: 0.04–0.12s. Cursor follower lerp: ~0.1.
- **NUNCA** easing lineal visible. **NUNCA** >1.2s en UI. **NUNCA** el mismo `fade-in-up` universal en cada elemento (R5).

### Lo que NO se anima (restraint Locomotive)
- ❌ `whileInView`/fade en CADA elemento (señal de tutorial, R5).
- ❌ Loaders de 3+ segundos.
- ❌ Scroll horizontal obligatorio.
- ❌ Partículas flotantes, magnetic buttons exagerados, char-by-char aleatorio.
- ❌ El grano NO se mueve (material, no efecto).
- ❌ Three.js / shaders (Locomotive los usa, pero suman peso y riesgo en mobile gama baja LATAM/3G — fuera de alcance salvo pedido explícito).

### prefers-reduced-motion (OBLIGATORIO — fallback estático total)
Sin Lenis (scroll nativo), sin SplitText (titulares estáticos visibles), sin parallax, sin cursor follower, sin clip-path reveals (imágenes visibles directo), sin page transitions (navegación dura). El color, el grano y el verde se MANTIENEN (identidad, no motion). El sitio queda 100% legible y navegable. (Ya hay base en `Layout.astro`.)

---

## 8. Detalles de personalidad concretos para SCUART (gestos Locomotive traducidos, NO clonados)

1. **Sistema de índices mono:** `01`, `02`... + metadatos laterales en Geist 500 uppercase tracking +0.12em (`03 / WORK · BOGOTÁ`). Textura de archivo/ficha técnica. Atraviesa todo el sitio. (Traduce los contadores de sección de Locomotive — sin sus emojis de tren, que son SU identidad.)
2. **Coordenadas reales de Bogotá:** `4.7110°N 74.0721°W` en el hero index y el footer (verificar las exactas del estudio con William). Datos reales como diseño = gravitas institucional. (Traduce "1211 Jean-Talon Est, Montréal".)
3. **Contadores exactos, no vagos:** año de fundación, nº de proyectos, años activos — números específicos como texto puro, nunca "múltiples premios" ni badges. (Traduce "288 reconocimientos / Seven Years Running 2018–2024".) Solo datos REALES — cero invención (constitución P4).
4. **SCUART® con marca registrada:** el wordmark con `®` (si aplica legalmente) o un sello/glifo en `--accent` verde como marca de autoría, 1–2 apariciones. (Traduce "Locomotive®".)
5. **Sello/claim del estudio:** un claim corto tipo "Design + Technology" o equivalente que William defina, tratado como sello, no slogan genérico. (Traduce "Digital-First Design™".)
6. **Bilingüe EN/ES como personalidad:** el toggle es parte de la identidad, visible en nav y footer. (Traduce el EN/FR de Montréal.)
7. **Numerales gigantes Fraunces** (capabilities 01–04, method 001–004) como elemento gráfico-arquitectónico que rompe la grilla — cotas del plano, no etiquetas.
8. **Wordmark a sangre en el footer:** SCUART en Fraunces sangrando los bordes = firma del estudio.

---

## 9. Anti-patrones específicos de este proyecto (adicionales a constitución C2)

NO usar bajo ninguna circunstancia:
- **Gradientes de color** (cualquier fondo/botón/texto) — fuera del vocabulario premium 2026.
- **Segundo color de acento** — un solo verde, escaso. Más de 5% de verde en una captura = mal.
- **`#FFFFFF` o `#000000` puros** — siempre `--bg #F5F4F0` y `--ink #131312`.
- **Dark mode** — el sitio es claro (decisión cerrada).
- **Cards con shadow + border-radius** (slop 2019–2022) — el portfolio es lista editorial, no card-grid.
- **Hero con foto de equipo / pantallas de proyectos** — SCUART confía en tipografía (gesto Locomotive). El hero no lleva foto.
- **Hamburger menu en desktop** — navegación horizontal visible.
- **Copy descriptivo "Nuestros servicios son…"** — declaraciones, no descripciones (R9).
- **Stock photography / blobs 3D / ilustraciones AI** — solo trabajo real o ausencia de imagen.
- **Inter / Roboto / Poppins** o cualquier sans default sin razón — es Geist.
- **Apilado vertical centrado-simétrico por default** (R2) — asimetría intencional por sección.
- **El mismo fade-in-up universal en cada elemento** (R5).
- **Cualquier tono terracota / café / arena / cálido-gastro** — descartado por William.
- **Azul corporativo SaaS** — lee a startup genérica.

---

## 10. Brief para el dev / diseñadores — debe poder responder tras leer esto

- ¿Sensación primaria? → Plano de arquitecto: yeso + tinta + una línea verde. Luminoso, preciso, autoritario, restraint. ✓
- ¿Paleta y dónde? → `--bg #F5F4F0` (70%), `--surface #ECEAE4`, `--ink #131312`, `--mid #888783`, `--accent #1A3A2A` verde <5% (token aislado, afinable). Cero gradientes, cero 2º acento. ✓
- ¿Tipografía para qué? → Fraunces (display: hero, manifiesto, nombres, numerales, wordmark — NUNCA nav/body) + Geist (cuerpo/UI/índices). Contraste extremo de escala. ✓
- ¿Motion? → Completo: 4 momentos (hero por líneas, portfolio cursor-follower+parallax, method pin, page transitions) + micro-interacciones. reduced-motion total. ✓
- ¿Layout base? → Editorial asimétrico, 12-col/4-col, márgenes amplios, numerales/wordmark rompen la grilla, índices mono, alternancia `--bg`↔`--surface`. ✓
- ¿Qué evito? → Gradientes, 2º acento, dark, cards, foto de equipo, hamburger desktop, terracota, Inter, fade universal, datos inventados. ✓

---

## 11. Validación EN VIVO con William (proceso, no construir a ciegas)

**Proceso:** re-cablear fuentes (Fraunces + Geist) → scaffold tokens de paleta B1 → montar SOLO el hero (yeso + grano sutil + Fraunces + verde en la palabra clave + Momento 1 de motion) → **William lo ve en localhost y aprueba el rumbo** → recién ahí, sección por sección validando en vivo. Nada completo antes del OK del rumbo.

**Decisiones a aprobar en vivo:**
1. ☐ Calibración del yeso `#F5F4F0`: ¿se siente premium/material o lavado? (ajuste: hacia `#F2F1EC` si lava.)
2. ☐ Tono exacto del verde `--accent` en contexto (hero + manifiesto): ¿`#1A3A2A` o afinar a `#13332A` / `#214A33` / `#1E3D2C`? (token aislado, swap inmediato.)
3. ☐ Grano sutil: ¿material o sucio? (0.025–0.04; bajar a 0.02 si ensucia.)
4. ☐ Fraunces da el carácter buscado, o se evalúa licenciar PP Editorial New a futuro.
5. ☐ ¿Geist 500 uppercase como ficha técnica (2 familias) o se suma Geist Mono para datos/coordenadas?
6. ☐ Los 4 momentos de motion: ¿correctos, sobra/falta alguno?
7. ☐ Copy del manifiesto (línea final con actitud) + claim/sello del estudio.
8. ☐ Datos reales: coordenadas Bogotá exactas, año fundación, contadores, qué proyectos van al portfolio (cero invención — P4).

---

## Fuentes
- `DESIGN_RESEARCH_LOCOMOTIVE.md` (sistema Locomotive verificado, paletas, motion, personalidad).
- Skill `visual-composition` (reglas anti-slop R1–R10, sistema de jerarquía, constraints medibles).
- Decisiones cerradas de William (2026-06-14): Locomotive claro · B1 Arquitecto · Fraunces+Geist · motion completo.
