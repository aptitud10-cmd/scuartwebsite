# Art Direction — SCUART (rediseño del sitio propio)

**Fecha:** 2026-06-02
**Director:** director-creativo (Opus 4.8)
**Cliente:** SCUART (proyecto propio — la agencia rediseñando su sitio)
**Stack real:** React 19 + Vite 7 + Tailwind 4 + Radix UI + wouter + framer-motion + GSAP + Lenis
**Documentos base:** BRIEF-SCUART-REDISENO.md + DIRECCION-ARTE-SCUART.md (concepto "Editorial Cálido" definido por William)

> Este documento NO redefine la dirección — William ya la fijó ("Editorial Cálido"). Lo que hace es **operativizarla**: convertir el mood en valores concretos (hex con roles, fuentes reales con fallbacks honestos, escala tipográfica, motion ejecutable, y un mapa sección por sección) para que se pueda codear sin reinterpretar nada.

---

## Concepto central

**Idea:** "Un menú de degustación, no un brochure de agencia."

Entrás y no se siente como software ni como otra agencia tech. Se siente como abrir la carta de un restaurante fino o pasar la página de una revista gastronómica premium: papel cálido, una tipografía con carácter que respira, mucho aire, y un solo gesto de color — terracota — que funciona como el sello de lacre del lugar.

**Por qué este concepto:**

SCUART vende una sola promesa: "le damos a los restaurantes la web que su comida merece". Esa promesa muere si el propio sitio de SCUART se ve como las 10.000 agencias tech con dark-navy y gradiente cyan/magenta. El research de tendencias 2026 (`research_tendencias2026.md`) confirma que ese look ya es el cliché del año, y que los *warm neutrals* (Pantone Cloud Dancer, #F5F0EB) están reemplazando al blanco frío en el segmento premium. El brief y la dirección de William empujan en la misma dirección: salir del frío, ir a lo cálido editorial.

El ancla no es teórica — es el portfolio real. El asset de **Jamón Casero** ya ES el Editorial Cálido ejecutado: serif display imponente, fotografía con luz de fuego, acento dorado/ámbar, fondo cálido. El sitio de SCUART debe verse como el hermano editorial de ese trabajo. Cuando un dueño de restaurante lo vea, debe pensar "esta gente entiende cómo se ve la comida buena", no "esta gente hace software".

**Tensión que resolví (importante para la sección MENIUS):** el screenshot real de MENIUS es oscuro, verde-esmeralda, look SaaS. NO es cálido. No vamos a re-pintarlo. La art direction NO obliga a que MENIUS sea terracota — al contrario: usamos el marco crema de SCUART para *enmarcar* ese screenshot oscuro como una credencial, y el verde oliva secundario de la paleta tiende un puente cromático hacia el esmeralda de MENIUS para que no choque. Ver "Aplicación por sección → MENIUS".

---

## Mood & Atmósfera

- **Tono:** aireado y luminoso, pero cálido — no clínico. Densidad baja: pocas cosas por pantalla, cada una con peso.
- **Sensación táctil:** papel cálido / cartón de menú fino. Orgánico antes que geométrico. Refinado, no crudo; pero con textura sutil (grano levísimo) para que no se sienta plano-digital.
- **Ritmo visual:** contemplativo. Scroll lento, reveals pausados, transiciones largas. Es un sitio que se "lee", no que se "consume" rápido.

---

## Paleta

Todos los valores con rol explícito. Convención de tokens propuesta (Tailwind 4 `@theme`): `--color-crema`, `--color-tinta`, etc.

### Primarios (la firma)
- **`crema`** `#F5F0E8` — fondo dominante de TODO el sitio. Es la firma anti-tech. ~80% de la superficie.
- **`tinta`** `#1A1410` — texto principal, titulares, líneas. Marrón casi negro, NUNCA `#000`.

### Acentos
- **`terracota`** `#C2703D` — CTAs, links activos, subrayados editoriales, números de sección, detalles de hover. Máximo ~10% de superficie. Es el "sello de lacre": escaso = caro.
- **`terracota-hover`** `#A85A2C` — estado hover/pressed de botones terracota (oscurece, no aclara).
- **`oliva`** `#6B7253` — acento secundario, usado con moderación: etiquetas, líneas de la sección MENIUS (puente al esmeralda del producto), detalles de "proceso". Opcional pero recomendado para evitar que TODO acento sea terracota.

### Neutrales de apoyo (derivados de la crema, no grises fríos)
- **`crema-profunda`** `#EBE3D6` — fondo de cards y secciones que necesitan separarse del fondo base sin usar sombra dura. Es crema un paso más oscura.
- **`tinta-suave`** `#5C5246` — texto secundario, subheads, captions, metadatos. Marrón desaturado, legible pero jerárquicamente menor.
- **`borde`** `#D8CDBC` — bordes hairline, divisores, marcos de portfolio. Tono tierra, nunca gris frío.

### Sección invertida (footer / contacto)
- **`tinta` como fondo (`#1A1410`) + `crema` como texto (`#F5F0E8`)** — la inversión es la única zona "oscura" permitida, y es cálida (marrón sobre crema), no navy. Terracota mantiene su rol de acento sobre el fondo oscuro.

### Razón de la paleta
La crema es el diferenciador estructural: el research valida warm-neutrals 2026 y separa instantáneamente a SCUART del mar de fondos navy/negro de las agencias tech. El par tinta-sobre-crema da **contraste verificado ~13:1** (muy por encima de WCAG AA 4.5:1). Terracota `#C2703D` sobre crema da ~3.4:1 — suficiente para AA en texto grande/UI y para acento, pero **NO debe usarse para body text pequeño sobre crema**; el texto de botones terracota va en crema (`#F5F0E8` sobre `#C2703D` ≈ 3.5:1, AA large/UI OK, y el botón es elemento grande). La combinación tierra/oliva/crema es además segura para daltonismo (no depende de oposición rojo-verde para transmitir información: el acento se distingue por valor y posición, no solo por matiz).

> **Verificación obligatoria antes de cerrar UI:** correr contrastes reales en los tamaños finales. Regla dura: terracota nunca como color de párrafo sobre crema.

---

## Tipografía

### Honestidad sobre las fuentes premium
La dirección de William nombra **Ogg, Canela, Reckless** (display) y **Suisse, Neue Haas** (cuerpo). Son todas de pago y caras (Commercial Type / Klim / Sharp Type — licencias web de cientos a miles de USD). Para el sitio *propio* de SCUART, si hay presupuesto y se quiere el carácter máximo, vale comprar **una** (la display). Pero entregables sobre React+Vite cargan fuentes self-hosted igual, así que abajo doy un **pairing 100% gratuito (Google Fonts / open source) que preserva el carácter editorial** y es el que recomiendo como default ejecutable. Si William aprueba comprar la serif premium, se sustituye solo la display sin tocar el resto.

### Display (titulares) — protagonista
- **Recomendado (gratis):** **Fraunces** (Google Fonts, variable). Serif "old-style" con opsz alto, terminaciones suaves, y eje *SOFT* + *WONK* que le da personalidad cálida/editorial muy cercana a Canela/Recia. Tiene itálica con carácter (clave para imitar el "CASERO" de Jamón Casero).
- **Alternativa gratis:** **Playfair Display** (más alto contraste, más "revista") o **Newsreader** (más sobrio).
- **Si se compra premium:** **Canela** o **Reckless** sustituyen a Fraunces 1:1 en el token `--font-display`.
- **Pesos:** 300 (light, para titulares enormes), 400, 500, 600 (raro). En titulares gigantes el peso BAJO + tamaño ENORME es lo que da elegancia editorial — no el bold.
- **Cuándo:** H1/H2/H3, números de sección, citas destacadas, nombres de proyecto. Mayormente en `tinta`; el acento itálico puede ir en `terracota` (como el dorado de Jamón Casero).
- **Por qué:** la serif display ES el carácter. Sin ella esto sería otro sitio sans-genérico. Fraunces da el alma editorial sin costo.

### Body (lectura) — silenciosa y limpia
- **Recomendado (gratis):** **Inter** o, preferible por menos "ubicuidad SaaS", **Geist Sans** (Vercel, gratis) o **Hanken Grotesk**. Recomiendo **Hanken Grotesk** o **Geist** sobre Inter para no caer en el cliché "Inter en todo" que el research marca como señal barata.
- **Pesos:** 400, 500, 600.
- **Cuándo:** párrafos, subheads, nav, labels, captions, formularios, botones.
- **Por qué:** la sans debe DESAPARECER y dejar respirar a la serif. Una grotesca neutral y bien dibujada da legibilidad sin competir.

### Pairing — por qué funciona
Serif display de alto carácter + grotesca neutra es el pairing editorial clásico (revistas, menús finos): el contraste serif/sans crea jerarquía dramática sin esfuerzo, y la neutralidad del cuerpo hace que la serif se sienta aún más expresiva. Es exactamente la lógica del asset de Jamón Casero (display serif imponente + texto pequeño sans). Replica el ADN del trabajo de SCUART en el sitio de SCUART.

### Detalles tipográficos
- **Tracking display:** negativo. `-0.02em` a `-0.03em` en titulares grandes (la serif respira mejor apretada en tamaño grande).
- **Tracking body:** `0` (normal). Labels/eyebrows en mayúscula: `+0.12em` a `+0.16em`.
- **Leading display:** apretado, `1.0`–`1.1`. Titulares de varias líneas casi tocándose = look editorial.
- **Leading body:** `1.6`–`1.7` (lectura cómoda, aireada).
- **Case:** sentence case por defecto (lo pide la dirección). Eyebrows/labels en UPPERCASE con tracking abierto y en `tinta-suave` o `terracota`.

### Escala tipográfica (mobile-first, en `rem`)
Definir escala desde mobile y escalar con `clamp()` a desktop. Base body = 16px mínimo (regla dura, accesibilidad).

| Rol | Mobile | Desktop | Fuente / peso |
|---|---|---|---|
| Display XL (Hero H1) | 2.75rem (44px) | clamp → 5.5–7rem (88–112px) | Fraunces 300/400 |
| Display L (H2 sección) | 2rem (32px) | 3.5–4.5rem (56–72px) | Fraunces 400 |
| Display M (H3) | 1.5rem (24px) | 2rem (32px) | Fraunces 500 |
| Lead / subhead | 1.125rem (18px) | 1.375rem (22px) | Hanken 400, `tinta-suave` |
| Body | 1rem (16px) | 1.0625rem (17px) | Hanken 400 |
| Caption / meta | 0.875rem (14px) | 0.875rem (14px) | Hanken 500, `tinta-suave` |
| Eyebrow / label | 0.75rem (12px) UPPER +0.14em | 0.8125rem (13px) | Hanken 600, `terracota`/`oliva` |

---

## Motion Treatment

### Intensidad
**Híbrido: cinemático-lento + sutil.** Movimiento elegante, pausado, de lujo. NADA de efectos llamativos, partículas, ni stagger aleatorio de caracteres (el research lo marca como cliché 2026). La regla mental: si una animación llama la atención sobre SÍ MISMA en vez de sobre el contenido, se elimina. Reveals que se sienten como pasar páginas de una revista, no como una demo de WebGL.

### Stack técnico (ya disponible en el repo)
- **Lenis** (`useLenis` ya existe) — smooth scroll, base de todo. Duración generosa (≈1.0–1.2s), easing suave.
- **GSAP + ScrollTrigger** — reveals on-scroll editoriales (no más de 2–3 elementos clave por sección).
- **framer-motion** — micro-interacciones y transiciones de página.
- **PageTransition** (ya existe) — usar para transición entre rutas (ES/EN y case studies) con un fade/wipe en crema, lento.
- Componentes existentes a reutilizar: `SplitText` (con moderación — solo en el H1 del hero, line-by-line, NO char-by-char aleatorio), `MagneticButton` (CTAs), `CustomCursor` (revisar que sea sutil y desactivable; en mobile no aplica).

### Treatments específicos
- **Hero:** el H1 serif entra por líneas (mask reveal de abajo hacia arriba con `SplitText` por línea), suave, ≈0.8s con stagger 0.12s entre líneas. La fotografía/elemento visual hace un parallax LEVÍSIMO (≤8% de desplazamiento) al scrollear. CTA terracota con micro-magnetismo.
- **Scroll behavior:** Lenis smooth scroll en todo el sitio. Reveals: opacidad 0→1 + translateY 24px→0, duración 0.7–0.9s, easing `power3.out`. Una sola vez (no re-trigger).
- **Page transitions:** wipe/fade en crema entre rutas. Shared element opcional para el portfolio (imagen del proyecto → hero del case study) si el tiempo lo permite; si no, fade simple. No bloqueante.
- **Micro-interactions:** botones terracota oscurecen + comprimen levísimo al click. Links de texto: subrayado terracota que se dibuja en hover (línea creciendo de izq a der, ≈0.3s). Cards de portfolio: imagen con scale 1.0→1.03 muy lento (0.6s) + leve elevación de borde en hover. Nada de sombras pesadas.

### prefers-reduced-motion
**Obligatorio.** Con reduced-motion: sin parallax, sin SplitText (titulares aparecen estáticos), sin smooth scroll de Lenis (scroll nativo), reveals reducidos a fade corto o nada. Todo el contenido debe ser legible y navegable sin una sola animación.

### Performance (clientes LATAM, mobile gama media, redes lentas)
- Fotos del portfolio ya son `.webp`. Servir responsive + lazy.
- GSAP/ScrollTrigger solo en desktop/tablet para los efectos pesados; en mobile, reveals CSS simples.
- Presupuesto: LCP < 2.5s, sin layout shift. El research recuerda: +1s de carga = -7% conversión. La calidez NO justifica un sitio lento.

---

## Composición / Layout patterns

- **Pattern primario:** **editorial asimétrico**. Columnas desbalanceadas, titulares que rompen la grilla, márgenes generosos e intencionalmente desiguales (más aire alrededor de lo importante). NO bento de cards uniformes (eso es look SaaS).
- **Grid sistema:** 12 columnas desktop / 4 columnas mobile, con uso intencional de column-span asimétrico. Márgenes laterales amplios en desktop (el contenido no llega a los bordes — sensación de "página").
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Las secciones respiran con padding vertical grande (96–128px desktop, 64–80px mobile).
- **Aspect ratios:** portfolio en 4/5 (vertical, editorial) o 3/2 según asset; hero flexible. Evitar 16/9 genérico para piezas destacadas.
- **Marcos de portfolio:** borde hairline `borde` o filete fino, con la imagen como protagonista absoluta sobre crema. El marco "hace de galería", no compite.

---

## Aplicación sección por sección (estructura de 8 del brief)

### 1. Hero
Fondo crema. H1 serif display GIGANTE en tinta: *"Le damos a los restaurantes la web que su comida merece."* — peso bajo, tamaño enorme, leading apretado, ocupando la mayor parte del viewport. Subhead en sans `tinta-suave`. UN CTA primario terracota *[Empezá tu proyecto]* + un secundario texto-con-subrayado *[Ver nuestro trabajo]*. Muchísimo aire. Opcional: una pieza visual cálida a un lado (no stock — un detalle gráfico, una foto de comida propia, o el wordmark editorial). Se debe sentir como abrir una carta de menú fino.

### 2. Prueba social
Tira sobria sobre crema: nombres reales en sans o serif pequeña — **Jamón Casero · Healthy Choice NY · Arriba Gold · MENIUS**. Sin logos genéricos inventados. Eyebrow tipo "Marcas que confían" en uppercase tracking abierto, `tinta-suave`. Si hay logotipos reales, en monocromo tinta. Densidad baja, mucho espacio entre nombres.

### 3. El problema que resolvemos
Momento editorial puro. Titular serif grande: *"Tu comida es excepcional. ¿Tu sitio web también?"* — la segunda frase puede ir en itálica terracota (eco del "CASERO" dorado de Jamón Casero). Texto de apoyo corto en sans. Esta sección es casi solo tipografía y aire — como una página de apertura de revista. NADA de delivery/comisiones (es dolor de MENIUS, no de SCUART).

### 4. Servicios
Cuatro servicios (01–04) con numeración elegante en serif/terracota. **OJO con el anti-patrón:** el brief y la dirección PROHÍBEN cards oscuras genéricas con "01 02 03" en gris. Solución: lista editorial vertical, números grandes en serif terracota o tinta, título de servicio en serif, descripción en sans, divisores hairline `borde` entre ítems. Mucho aire. Cero cards oscuras. Hover: el número o el título se subraya/colorea terracota.
- 01 Diseño Web — "Sitios que se ven tan bien como tu mejor plato."
- 02 Identidad de Marca — "Tu marca coherente desde el logo hasta el menú."
- 03 Sistemas a Medida — "Reservas, pedidos, automatizaciones."
- 04 SEO Local — "Que cuando alguien busque dónde comer, te encuentren a vos."

### 5. MENIUS (producto propio / credencial)
La sección más delicada cromáticamente. El screenshot real de MENIUS es **oscuro, verde-esmeralda, SaaS** — no se recolorea. Tratamiento: bloque diferenciado con fondo `crema-profunda` (o el bloque invertido tinta) que actúa de **galería/passe-partout** alrededor del screenshot oscuro. Acentos de la sección en **`oliva`** (no terracota): el oliva tiende el puente cromático hacia el esmeralda de MENIUS y evita el choque. Titular serif: *"No solo diseñamos. Construimos."* Texto: MENIUS es nuestro sistema de pedidos, diseñado y operado por nosotros. CTA secundario *[Conocé MENIUS]* → menius.app. Encuadre que diga "esto es una credencial de capacidad", no "esto es un servicio que te vendemos".

### 6. Proceso
Discovery · Strategy · Design · Development. Timeline editorial horizontal (desktop) / vertical (mobile) con tipografía y filetes hairline. Numeración serif, sin cards. Acento `oliva` o `terracota` alternado. Mucho aire entre pasos. Se lee como los capítulos de un menú de degustación.

### 7. Sobre nosotros (HONESTO)
*"Un estudio pequeño, obsesionado con el detalle."* Tono cálido, primera persona. **CRÍTICO (del brief):** quitar premios falsos (Awwwards/FWA/CSS Design) y stats infladas (50+/30+/8 países). Si se usan números, que sean reales; si no hay, se quitan y se reemplaza por una declaración de oficio. Visualmente: serif + sans, foto real del equipo/trabajo si existe (no stock), o solo tipografía sobre crema.

### 8. Contacto
**Sección invertida**: fondo `tinta` `#1A1410`, texto `crema`. Es la única zona oscura del sitio y cierra cálida, no fría. Titular serif crema: *"¿Listo para destacar?"* + "Trabajamos con un número limitado de proyectos por mes" (escasez = premium). Formulario: nombre, email, presupuesto, mensaje — inputs con borde hairline crema/terracota, fondo levemente más claro que el tinta, foco terracota. CTA terracota. El footer hereda esta inversión.

---

## Referencias visuales (mood, NO copiar)

### 1. Jamón Casero (asset propio — `redesign/assets/portfolio/jamon-casero.webp`)
- **Qué tomar:** serif display imponente + itálica de acento en dorado/ámbar; fotografía cálida con luz; jerarquía tipográfica dramática.
- **Qué adaptar:** pasar de fondo oscuro (es un restaurante) a fondo crema (es la agencia); el dorado se vuelve terracota.
- **Qué NO tomar:** el fondo oscuro full-bleed — SCUART vive en crema.

### 2. Kinfolk / Cherry Bombe (revistas gastronómicas premium)
- **Qué tomar:** densidad baja, aire enorme, fotografía como protagonista, tipografía serif editorial, paleta de papel cálido.
- **Qué adaptar:** sumar interactividad y motion lento (es web, no print).
- **Qué NO tomar:** layouts puramente print que no escalan a mobile.

### 3. Estudios editoriales/branding premium (referencia de *estructura web*, p. ej. el tipo de sitio de un estudio como Ueno-era, Daylight, o portfolios de food-branding en Awwwards/SOTD con fondo cálido)
- **Qué tomar:** ritmo de scroll pausado, reveals editoriales, márgenes generosos, navegación mínima.
- **Qué adaptar:** mantenerlo cálido (terracota/crema), no monocromo frío.
- **Qué NO tomar:** WebGL pesado, cursores excéntricos, motion que se luce — choca con el mood calmo y con el performance budget LATAM.

---

## Anti-patrones específicos de este proyecto

NO usar bajo ninguna circunstancia (adicionales a los del brief/dirección):

- **Dark navy de fondo, gradientes cyan→magenta, blanco frío puro `#FFF`, negro puro `#000`** — es el cliché tech que justamente estamos matando. (Nota: el sitio actual lo usa; hay que removerlo, no heredarlo.)
- **Cards oscuras genéricas con "01 02 03" en gris** — prohibido explícito; servicios y proceso van editoriales, no en cards.
- **Inter en absolutamente todo** — señal "barata" según research; el cuerpo usa Geist/Hanken y la display SIEMPRE serif.
- **Stock photos cliché** (gente sonriendo con laptops, platos de banco de imágenes) — solo fotografía real propia o nada.
- **`FloatingParticles`** (componente existente) — partículas flotantes = cliché 2026, NO usar en el rediseño.
- **Stagger char-by-char aleatorio** en titulares — cliché; reveals por línea, intencionales.
- **Terracota como color de párrafo** sobre crema — falla contraste para texto pequeño; terracota es solo acento/UI/large.
- **Repintar el screenshot de MENIUS** a cálido — se respeta su identidad esmeralda y se enmarca; el puente es el oliva.
- **Premios/stats inventados** — el brief lo prohíbe; honestidad o se quita.

---

## Brief para quien codee la UI

Tras leer esto se debe poder responder:
- **Sensación primaria:** abrir un menú de restaurante fino / revista gastronómica premium. Cálido, curado, caro, calmo. ✓
- **Paleta y dónde:** crema `#F5F0E8` fondo (80%), tinta `#1A1410` texto, terracota `#C2703D` solo acentos/CTA (≤10%), oliva `#6B7253` secundario y puente a MENIUS, footer/contacto invertidos (tinta fondo + crema texto). ✓
- **Tipografía:** display serif **Fraunces** (gratis; o Canela/Reckless si se compra), cuerpo grotesca **Hanken Grotesk/Geist** (no Inter-en-todo). Serif protagonista, peso bajo + tamaño enorme en titulares, sentence case. ✓
- **Motion:** híbrido cinemático-lento/sutil. Lenis + GSAP + framer-motion (ya en repo). Reveals por línea, parallax levísimo, micro-interacciones discretas. reduced-motion obligatorio. Sin partículas, sin stagger aleatorio. ✓
- **Layout base:** editorial asimétrico, 12-col desktop, aire generoso, portfolio en marcos hairline sobre crema. No bento de cards uniformes. ✓
- **Qué evito:** lista de anti-patrones de arriba. ✓

---

## Test de éxito (del brief, traducido a criterios verificables)

El test de la dirección de William: *"al lado de 10 agencias genéricas, el único que NO parece agencia tech."* Verificables:

1. **Cero azul-navy / cyan-magenta / `#000` / `#FFF` puro** en todo el sitio. (grep de tokens + inspección visual)
2. **Fondo crema dominante** y serif display como primer elemento que se lee en el hero. (inspección hero)
3. **Terracota ≤ ~10%** de la superficie en cualquier captura. (revisión visual sección por sección)
4. **Servicios y proceso SIN cards oscuras** y SIN "01 02 03" en gris. (inspección secciones 4 y 6)
5. **Screenshot de MENIUS respetado** (esmeralda intacto), enmarcado en crema con acento oliva. (inspección sección 5)
6. **Sin partículas, sin stagger aleatorio**; toda animación pasa el "test del propósito" (clarifica contenido, no se luce). (revisión de motion)
7. **reduced-motion** deja el sitio 100% usable y legible. (test con flag activado)
8. **LCP < 2.5s en mobile gama media**, sin layout shift. (Lighthouse / WebPageTest)
9. **Sin premios ni stats inventados**; números reales o ausentes. (revisión de copy en "Sobre nosotros")
10. **Contraste:** tinta/crema AA+ verificado; terracota nunca en body. (checker de contraste)

Si los 10 pasan, el posicionamiento "estudio editorial gastronómico premium" quedó hecho visual.

---

## Notas de ejecución sobre el stack (honestidad técnica)

- El brief menciona **Astro 5 + i18n nativo**. Decisión final de William: **NO migrar**. Se rediseña sobre **React 19 + Vite 7 + Tailwind 4 + wouter**. El bilingüe ES/EN se resuelve con routing de wouter (`/es/`, `/en/`), no con Astro. **Nada de esto afecta lo visual** de este documento — la art direction aplica 100% igual.
- **Tokens en Tailwind 4** vía `@theme` (crema, tinta, terracota, terracota-hover, oliva, crema-profunda, tinta-suave, borde) + `--font-display` / `--font-body`.
- **Componentes de motion ya existen** y se reutilizan: `useLenis`, `SplitText`, `MagneticButton`, `PageTransition`, `CustomCursor`. `FloatingParticles` se descarta.
- **Limpieza pendiente** (no es trabajo de art direction pero lo señalo): el sitio actual usa el dark-navy + gradiente cyan/magenta — hay que removerlo, no heredar clases. Assets viejos en `client/public/images/` que no se usan en el rediseño deben quedar fuera. Corregir `og:url` (vercel.app → scuart.com) según brief.
- **Fuentes:** self-hosted (woff2) para performance, no `<link>` a Google. Fraunces y Hanken/Geist son descargables sin costo. Si se compra la serif premium, se sustituye solo `--font-display`.
