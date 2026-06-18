# Art Direction V3 — FINAL — SCUART

**Fecha:** 2026-06-10
**Director:** director-creativo (Opus 4.8)
**Cliente:** SCUART (proyecto propio, tratado como proyecto cliente)
**Estado:** PARA VALIDACIÓN EN VIVO con William antes de escribir una sola línea de código.
**Reemplaza:** la implementación en producción bloqueada por visual-critic (4.9/10, "dark-tech template").
**Base elegida por William:** ART_DIRECTION_V2_TERRACOTA.md (terracota suave + calidez).
**Hereda decisiones útiles de:** ART_DIRECTION.md (V1 crema — tipografía, escala, mapa de secciones, manejo de MENIUS) y DIRECCION_B_v2_REFINADA.md (sistema de índices mono, portfolio como lista editorial, motion narrativo, grano).

---

## 0. Por qué V3 existe (no repetir el error)

El 2026-06-10 el visual-critic bloqueó la build de producción con 4.9/10: **carbón `#0E0E0E` + rojo `#D70321` + grotesca condensada en mayúsculas = "dark-tech template" genérico.** Era una TERCERA dirección que nunca se validó (derivó de DIRECCION_B sin pasar por el ojo de William en terracota).

El diagnóstico exacto NO fue "es oscuro". Fue: **oscuro VACÍO, frío, plano, sin material, sin gesto de marca.** Carbón liso + rojo tecno + caps condensadas se lee como plantilla de startup, no como estudio con mano de artista.

V3 corrige eso con tres anclas innegociables, en este orden de importancia:

1. **Gesto de marca real en píxeles:** color cálido (terracota/tierra) + grano/textura material + serif display con alma. Las tres cosas, juntas, visibles en el primer scroll.
2. **Calidez como antídoto al carbón frío.** El sitio debe sentirse hecho a mano, prensado, físico — no renderizado por IA.
3. **Restraint Locomotive:** premium porque QUITA. 2 familias tipográficas, 4 estilos máximo, 2-3 momentos de motion. Cero cursor custom, cero partículas, cero magnetic buttons.

El ancla estética NO es teoría: es el asset propio **Jamón Casero** (`assets/portfolio/jamon-casero.webp`). Ese mockup YA es lo que buscamos — fondo oscuro cálido, foto con luz de fuego, serif display "JAMON" imponente + itálica dorada "CASERO", índices mono laterales, números grandes. El sitio de SCUART debe ser el hermano editorial de ese trabajo. Si SCUART hizo eso para un cliente, su propio sitio no puede verse peor.

---

## 1. Concepto + Mood

**Concepto (una frase):**
> **"El cuaderno de taller de un estudio que diseña con la mano: tierra cocida, tinta y luz de fuego — donde se ve la decisión humana detrás de cada pieza."**

No es un slogan. Es la metáfora que conecta todo: la terracota es barro cocido (material, oficio, fuego), el grano es la textura del papel del taller, la serif es la mano del artista, los índices mono son las anotaciones técnicas al margen, y la luz de fuego de los assets es lo apetitoso del rubro food. Caro porque está hecho a mano y se nota, no porque grita.

**Mood (5 adjetivos):** Cálido · Material · Editorial · Confiado · Reposado.

NO es: frío, tecno, gritón, condensado, vacío.

---

## 2. Paleta — terracota cálida en arquitectura de alternancia

### Decisión estructural (la pregunta que William debe aprobar primero)

**El fondo NO es terracota full-bleed a pantalla completa.** Un solo color saturado de borde a borde durante todo el scroll cansa la vista, aplana, y — más importante — **pelea con los 4 assets reales** (Healthy Choice es naranja-terracota saturado: chocaría; MENIUS esmeralda y Arriba azul son fríos: chocarían peor).

La arquitectura elegida es **alternancia cálida claro↔oscuro, estilo Locomotive**: el sitio respira entre secciones de fondo claro cálido y secciones de fondo oscuro cálido, y **la terracota es el color de marca que une todo** (acento dominante, no fondo dominante). Esto da el ritmo cinematográfico de Locomotive sin copiar su paleta, y da a cada asset un marco que lo favorece en vez de pelearlo.

**Por qué no V2 literal (terracota como fondo dominante):** V2 acertó en "la marca es el color cálido" pero el fondo `#8B3A1F` full-bleed era el mismo riesgo que el carbón full-bleed — un solo plano saturado sin variación. V3 conserva el alma cálida de V2 y le da la respiración de Locomotive. La terracota sigue siendo protagonista: aparece como fondo de la sección manifiesto, como acento estructural en todo el sitio, y como el color que el ojo recuerda.

### Tokens (hex exactos + rol + proporción de uso)

**Bases claras (las superficies de respiro — ~50% del scroll)**
- **`hueso`** `#F0E9DC` — fondo claro dominante. Blanco cálido tostado, NUNCA `#FFF`. Hero, portfolio, capabilities, method. ~45% de superficie total.
- **`tinta`** `#1C140E` — texto/titulares sobre hueso. Marrón casi-negro, NUNCA `#000`. Contraste sobre hueso ~13.5:1 (AAA).
- **`tinta-suave`** `#6B5D4F` — texto secundario, metadatos, captions sobre hueso. Contraste ~5.2:1 (AA en body 16px+). 

**Bases oscuras cálidas (ritmo y tensión — ~35% del scroll)**
- **`barro-oscuro`** `#241710` — fondo oscuro cálido. Marrón profundo tostado, NO carbón frío. Manifiesto, contacto, footer. ~30% de superficie. Sobre esto, hueso da ~12:1 (AAA).
- **`barro-elevado`** `#2E1F15` — un paso más claro que barro-oscuro, para bloques/cards sobre la base oscura (da profundidad de plano sin sombras duras).

**Terracota (el gesto de marca — protagonista como acento, ~12% de superficie)**
- **`terracota`** `#A4471F` — color de marca. Fondo de la sección manifiesto, CTA primario, franja/regla estructural, número de sección activo, palabra de acento del hero. Es el color que el sitio "es".
  - Sobre `terracota` el texto va en **`hueso` `#F0E9DC`** → contraste ~5.0:1 (AA para texto ≥18px y UI/botones; el manifiesto usa titulares grandes, OK).
- **`terracota-profunda`** `#7E3415` — hover/pressed de CTA terracota (oscurece, no aclara), y variación tonal para profundidad.

**Acento de luz (escasísimo — el "brillo" — ≤3% de superficie, 1-2 apariciones por pantalla)**
- **`ambar`** `#D99A4E` — dorado/ámbar cálido, robado directo de la itálica "CASERO" del asset Jamón. Para EL momento que brilla: una palabra del hero, un índice clave, un detalle del footer. Escaso = caro. Sobre barro-oscuro da ~7:1; sobre hueso da ~2.3:1 → **ámbar nunca como texto sobre hueso, solo sobre fondos oscuros o como elemento gráfico (filete, glifo, número grande decorativo).**

**Neutros de apoyo (derivados cálidos, jamás grises fríos)**
- **`borde`** `#D8C9B4` — hairlines/divisores sobre hueso. Tierra aclarada.
- **`borde-oscuro`** `#473321` — hairlines/divisores sobre barro-oscuro.

### Proporción objetivo (verificable en cualquier captura)
| Superficie | Token | % aprox |
|---|---|---|
| Fondo claro cálido | hueso | ~45% |
| Fondo oscuro cálido | barro-oscuro / elevado | ~30% |
| Terracota (manifiesto + acentos + CTA) | terracota | ~12% |
| Texto/tinta | tinta / hueso según fondo | ~10% |
| Ámbar (el brillo) | ambar | ≤3% |

### Textura — GRANO OBLIGATORIO (esto fue lo que faltó y mató la build anterior)
- **Grano/noise sobre TODOS los fondos** (claros y oscuros), no solo el oscuro. SVG `feTurbulence` en pseudo-elemento fijo, `mix-blend-mode: overlay` (sobre claro) / `soft-light` (sobre oscuro).
- Opacidad: **0.05–0.07 sobre hueso**, **0.06–0.09 sobre barro-oscuro/terracota**. Lo justo para que se lea "papel/barro prensado", no para que ensucie.
- SIN drift animado (el grano no se mueve — es material, no efecto).
- **Regla dura:** sin grano, cualquiera de estos fondos se ve como un `<div>` de color plano = barato = el error de la build bloqueada. El grano es lo que vuelve "hecho a mano" lo que sería "generado por IA".

### Riesgo a vigilar EN VIVO
La primera cosa que William juzga al montar el hero: ¿el `hueso #F0E9DC` se siente cálido y caro, o lavado/sucio? ¿el `terracota #A4471F` del manifiesto cansa o tiene peso? Ajuste en vivo: si el hueso lava, oscurecer hacia `#EAE0CE`; si la terracota cansa, terrosear hacia `#9A4220` o subir el grano. NO a ciegas.

---

## 3. Tipografía — 2 familias, 4 estilos, fin

### Display — Fraunces (serif con alma, gratis, variable)
- **Familia:** **Fraunces** (Google Fonts, variable, self-hosted woff2). Old-style con eje `SOFT` + `WONK` que le da carácter cálido/orgánico, terminaciones suaves, e **itálica con personalidad** — exactamente el registro de la itálica "CASERO" del asset Jamón. Es la fuente que da "mano de artista".
- **Estilos usados (2 de los 4 totales):**
  1. **Fraunces Light 300 / Normal** — titulares gigantes (H1, H2). En tamaño enorme, el peso BAJO es lo elegante, no el bold.
  2. **Fraunces Italic 400** — palabra/frase de acento (eco del "CASERO" dorado). Se usa en `terracota` o `ambar` en los momentos clave.
- **Tracking:** -0.02em a -0.03em en display grande. **Leading:** 1.0–1.05 (titulares casi tocándose = look editorial).
- **Por qué Fraunces y no una grotesca extended:** la build bloqueada usó grotesca condensada en caps = "dark-tech". La serif con alma es literalmente el antídoto que pidió el critic. Fraunces da el carácter de Theory Verse / Scout Motors (referentes Locomotive) sin licencia de pago.
- **Si William quiere comprar premium:** Canela o Reckless sustituyen a Fraunces 1:1 en el token `--font-display`, sin tocar nada más. Default ejecutable = Fraunces gratis.

### Body + Mono — Hanken Grotesk (una sola familia para cuerpo y ficha técnica)
- **Familia:** **Hanken Grotesk** (Google Fonts, self-hosted). Grotesca neutra, legible, bien dibujada. NO Inter (el research la marca como señal "barata" por ubicuidad SaaS).
- **Estilos usados (los otros 2 de 4):**
  3. **Hanken Grotesk Regular 400** — párrafos, subheads, nav, labels, inputs, botones.
  4. **Hanken Grotesk Medium 500 UPPERCASE +0.14em tracking** — sistema de índices/metadatos (`001 / MANIFIESTO`, coordenadas, categorías). Cumple el rol "mono/ficha técnica" SIN sumar una tercera familia.

> **Decisión de restraint sobre V2/Dirección B:** Dirección B usaba TRES familias (Monument + Messina + Messina Mono). Eso es exceso. V3 logra el mismo sistema de tres registros (display / cuerpo / ficha técnica) con SOLO DOS familias: la ficha técnica es Hanken Medium en mayúscula con tracking abierto, no una mono aparte. Locomotive: 2 familias máximo. Cumplido.

### Pairing — por qué funciona
Serif old-style de alto carácter (Fraunces) + grotesca neutra (Hanken) es el pairing editorial clásico de revistas y menús finos. El contraste serif/sans crea jerarquía dramática sin esfuerzo; la neutralidad de Hanken hace que Fraunces se sienta aún más expresiva. Es el ADN exacto del asset Jamón Casero (serif display imponente + texto pequeño sans). Replicamos el ADN del trabajo de SCUART en el sitio de SCUART.

### Escala (mobile-first, rem, base body 16px mínimo — regla dura)
| Rol | Mobile (375) | Desktop (1280+) | Fuente / peso |
|---|---|---|---|
| Display XL (Hero) | 2.75rem (44px) | clamp → 5.5–7rem (88–112px) | Fraunces 300 |
| Display L (H2) | 2rem (32px) | 3.5–4.5rem (56–72px) | Fraunces 300/400 |
| Display M (H3 / nombre proyecto) | 1.625rem (26px) | 2.25rem (36px) | Fraunces 400 |
| Lead / subhead | 1.125rem (18px) | 1.375rem (22px) | Hanken 400, tinta-suave |
| Body | 1rem (16px) | 1.0625rem (17px) | Hanken 400 |
| Índice / metadato | 0.75rem (12px) UPPER +0.14em | 0.8125rem (13px) | Hanken 500 |

---

## 4. Material, fotografía y tratamiento de los 4 assets

### Principio
El research es claro: SCUART es un estudio, no un restaurante. Se juzga por tipografía + grilla + motion + **cómo presenta su obra**, no por abundancia de foto. Los 4 mockups se tratan como **OBRA ENMARCADA**, no como capturas pegadas. Cada uno vive en el fondo (claro u oscuro) que lo favorece.

### Los 4 assets, uno por uno
1. **Jamón Casero** (`jamon-casero.webp`) — **el featured y el ancla**. Es cálido-oscuro, ya tiene grano natural por la foto de fuego, su paleta (negro cálido + dorado + crema) ES nuestra paleta. Va GRANDE, casi full-bleed, sobre fondo `barro-oscuro` para que se funda con el sitio. Es la primera pieza de portfolio que se ve. El ámbar del sitio dialoga con su dorado.
2. **MENIUS** (`menius.webp`) — oscuro, esmeralda, SaaS, mockup de iPhone. **NO se repinta** (sería deshonesto y rompería su identidad). Tratamiento passe-partout: se enmarca dentro de un bloque `barro-oscuro` con `borde-oscuro` hairline, con aire generoso alrededor (el marco "hace de galería"). El verde esmeralda sobre marrón oscuro cálido NO choca — son ambos tonos profundos. Etiqueta de la pieza: "PRODUCTO PROPIO" para encuadrarlo como credencial, no como servicio.
3. **Healthy Choice NY** (`healthy-choice.webp`) — naranja-terracota saturado, ilustrado, vintage-juguetón. **Cromáticamente es casi nuestro color de marca.** Va sobre fondo `hueso` claro para que el naranja respire y no se sume con la terracota del sitio (dos naranjas pegados se ensucian). Marco hairline `borde`.
4. **Arriba Gold** (`arriba-gold.webp`) — el más frío (azul-grafito, spotlight, render de chocolate). Es el outlier. Va sobre `barro-oscuro` (lo neutraliza mejor que el hueso) y se le baja un punto de jerarquía visual (es secundario). El chocolate cálido del centro ancla; el azul de fondo queda contenido por el marco oscuro cálido.

### Encuadre común
- Aspect editorial **4/5** (vertical) en mobile/lista; **3/2 o 16/9** según asset en piezas grandes desktop. Evitar 16/9 genérico para el featured.
- Cada pieza lleva su **ficha mono** al lado: `001 / JAMÓN CASERO · IDENTIDAD + WEB · 2025`. Categorías reales, sin inventar resultados ni métricas (P4).
- Sombra: ninguna pesada. Profundidad por marco hairline + cambio de fondo, no por drop-shadow de Bootstrap.

### Fotografía a futuro (no bloqueante para lanzar — ver §8)
El sitio puede lanzar premium HOY con los 4 mockups. La única inversión que mueve la aguja de "estudio web genérico" a "estudio que entiende food" es 1 sesión de food photography editorial cálida (luz de fuego, estilo del asset Jamón). Está en la lista de assets como nice-to-have priorizado.

---

## 5. Sección por sección — qué cambia, composición, dónde rompe la grilla

> Grilla base: 12 col desktop / 4 col mobile. Márgenes laterales amplios (el contenido no llega al borde = sensación de "página"). Alternancia de fondo claro/oscuro cálido como ritmo. Una línea vertical sutil (borde 12%) recorre el sitio como "margen de cuaderno" — el esqueleto editorial visible que prueba el criterio (heredado de Dirección B, en clave cálida).

### HERO — fondo `hueso`
- **Qué se conserva (aprobado, NO tocar):** copy exacto. H1: *"DESIGN + TECHNOLOGY FOR BUSINESSES THAT NEED TO LOOK SHARP AND WORK BETTER."* + lead *"We don't build websites. We build competitive advantages."* (Bilingüe EN/ES, layout idéntico — C9.)
- **Qué cambia vs la build bloqueada:** se va el carbón + rojo + caps condensadas. Entra: fondo `hueso` con grano, H1 en **Fraunces light** (no caps condensadas — sentence/title case editorial), tinta sobre hueso. UNA palabra clave del H1 en **Fraunces itálica `terracota`** (ej. *"sharp"* / *"competitive"*) — el gesto de marca en el primer renglón.
- **Composición:** H1 alineado izquierda, ocupa col 1–9, rompiendo a 3–4 líneas con leading apretado. Índice mono arriba a la derecha (col 10–12): `SCUART / DESIGN STUDIO · BOGOTÁ · 2026`. **Rompe la grilla:** el H1 sangra ligeramente fuera del margen izquierdo (overshoot tipográfico editorial), y un filete `terracota` vertical vive sobre la línea de col 9.
- **Material en el hero (exigencia critic #1 — gesto en píxeles):** NO es un div de color vacío. Tiene grano visible + un detalle gráfico cálido a la derecha. Opción A (sin assets nuevos): un número/glifo `ambar` gigante de fondo semitransparente (textura tipo Locomotive). Opción B (con asset): un crop cálido del asset Jamón (la luz de fuego) como banda lateral. Decisión en vivo.
- **Llenar la pantalla (exigencia critic #3):** bajo el H1, fila de metadatos mono + el primer CTA. Nada de medio viewport muerto.

### MANIFESTO — fondo `terracota` (LA sección de marca)
- **Esta es la sección donde la terracota es protagonista absoluta a pantalla completa**, con grano fuerte. Es el corazón cálido del sitio y el contraste de ritmo contra el hueso.
- **Copy con actitud (voz de marca, no descriptivo):** algo del registro *"La mayoría de los sitios son olvidables. Nosotros hacemos lo contrario."* / en gastro *"Tu sazón tardó años. Tu web no puede parecer hecha en una tarde."* (William elige la línea final; cero clichés de marketing, P4 no inventar).
- **Composición:** casi solo tipografía y aire. Fraunces grande en `hueso` sobre terracota, con una frase/palabra en `ambar` itálica. Mucho respiro — pero respiro CON tensión (una sola frase enorme, centrada o sangrada, no un elemento flotando solo — ese fue el "vacío sin alma" anterior).
- **Rompe la grilla:** la frase puede partirse en líneas desalineadas (escalonadas) que rompen la columna intencionalmente.

### PORTFOLIO — fondo alterna (`barro-oscuro` para featured, `hueso` para grilla)
- **Qué cambia (exigencia critic #2 — imagen EN REPOSO):** NADA de portfolio que solo aparece en hover. Mobile y tablet no tienen hover. La imagen del proyecto está **SIEMPRE visible en reposo.**
- **Layout:** lista editorial, no grid de cards uniformes.
  - **Featured (Jamón Casero):** bloque grande full-width sobre `barro-oscuro`, imagen casi full-bleed + nombre Fraunces gigante + ficha mono. La pieza ancla del sitio.
  - **Los otros 3:** lista vertical de nombres Fraunces grandes (uno por fila), cada uno con su imagen real al lado SIEMPRE visible (no hover-only), número mono y categoría. Healthy Choice sobre hueso; MENIUS y Arriba sobre barro-oscuro.
- **Mejora del hover (desktop, encima del reposo):** al hover, el nombre pasa a `terracota` + subrayado que se dibuja (scaleX), y la imagen tiene un scale levísimo (1.0→1.03). El hover MEJORA, no REVELA — la imagen ya estaba.
- **Rompe la grilla:** los nombres gigantes sangran fuera del margen; las imágenes se anclan asimétricamente (una a la derecha, la siguiente a la izquierda).

### CAPABILITIES / SERVICIOS — fondo `hueso`
- **Qué cambia (exigencia critic #3 — llenar la media pantalla muerta):** la build anterior tenía media pantalla vacía acá. Solución: lista editorial vertical de los 4 servicios con **números gigantes en Fraunces** (`01`–`04`) que ocupan y dan peso, descripción en Hanken, divisores hairline `borde`. Los números grandes LLENAN el espacio con jerarquía, no con relleno.
  - 01 Diseño Web · 02 Identidad de Marca · 03 Sistemas a Medida · 04 SEO Local (copy del brief).
- **PROHIBIDO:** cards oscuras genéricas con "01 02 03" en gris. Lista editorial, cero cards.
- **Rompe la grilla:** los numerales `01–04` en Fraunces enorme se solapan parcialmente con el texto del servicio (composición editorial superpuesta, tipo Locomotive numerales del Method).

### METHOD — fondo `hueso` o `barro-elevado` (a definir en vivo)
- **Qué se conserva (gesto válido):** los **numerales gigantes 001–004** (Discovery · Strategy · Design · Development). Es un gesto de marca aprobado; evoluciona pero se mantiene.
- **Evolución:** numerales en Fraunces enorme, `terracota` o `ambar` como filete, paso a paso con filetes hairline. Timeline editorial horizontal (desktop) / vertical (mobile). Cero cards.
- **Rompe la grilla:** los 001–004 viven en una columna lateral fija mientras el contenido del paso scrollea al lado (pin sutil con ScrollTrigger — ver motion §6).

### CONTACTO — fondo `barro-oscuro` (sección invertida cálida)
- **Qué se conserva (aprobado, NO tocar):** estructura del formulario con un solo CTA. Copy *"¿Listo para destacar? Trabajamos con un número limitado de proyectos por mes."* (escasez = premium).
- **Composición:** titular Fraunces en `hueso` sobre barro-oscuro. Form con inputs de borde hairline `borde-oscuro`, foco `terracota`. UN CTA `terracota` (texto `hueso`). El `ambar` puede aparecer en un detalle (el filete del foco, un glifo).
- **Rompe la grilla:** el titular grande a la izquierda (col 1–6), el form a la derecha (col 7–12), asimétrico.

### FOOTER — fondo `barro-oscuro` (hereda la inversión)
- **Qué se conserva/evoluciona (gesto válido):** el **wordmark SCUART+** del footer. Puede evolucionar pero es un gesto de marca aprobado.
- **Evolución:** footer como tarjeta de presentación standalone con personalidad — wordmark SCUART en Fraunces gigante (sangrando los bordes, tipo firma), coordenadas Bogotá, glifos, el `+` como detalle `ambar`. Quien llegue solo al footer debe saber qué hace SCUART y cómo contactar.
- **Rompe la grilla:** el wordmark SCUART ocupa todo el ancho, sangrando fuera de ambos márgenes (firma a sangre).

---

## 6. Motion — 2-3 momentos narrativos + reglas

### Los momentos que SÍ (exigencia critic #4 — concretos, dónde y qué hacen)

**MOMENTO 1 — Hero: el titular emerge del material.**
- Sección: HERO. Qué hace: el H1 (Fraunces) entra **por líneas** con máscara (SplitText line-by-line, clip de abajo hacia arriba), `expo.out`, ~0.9s, stagger 0.12s entre líneas. La palabra en itálica `terracota` entra con un delay extra de 0.2s — el gesto de marca aterriza último, como una firma.
- Por qué cuenta algo: el titular no "aparece", se revela como pasando la página de una revista. Narrativo, no decorativo.

**MOMENTO 2 — Portfolio: el caso featured se compone al scrollear.**
- Sección: PORTFOLIO (featured Jamón Casero). Qué hace: al entrar en viewport, la imagen del proyecto hace un reveal con clip-path (`inset(100% 0 0 0)` → `0`) ~0.7s `expo.out` mientras el nombre Fraunces hace un parallax LEVÍSIMO (≤8% de desplazamiento) sobre ella. La ficha mono aparece después con un micro-fade.
- Por qué cuenta algo: el caso se "monta" frente al usuario como una pieza que se está colocando en una galería. Es el momento comercial principal — el portfolio es lo que vende.

**MOMENTO 3 — Method: los numerales fijos mientras el paso scrollea.**
- Sección: METHOD. Qué hace: los numerales `001–004` se quedan pineados (ScrollTrigger pin sutil) mientras el texto de cada paso entra y sale al lado. El numeral activo pasa a `terracota`/`ambar`.
- Por qué cuenta algo: el método se lee como capítulos — el numeral es el ancla estable, el contenido fluye. Refuerza "proceso con criterio".

### Reglas generales
- Page transitions: máscara/wipe cálido (hueso o barro según destino) + Astro View Transitions, ~0.6–0.8s `expo.inOut`. Consistente en TODA navegación interna (ES/EN, case studies).
- Scroll: Lenis smooth (lerp ~0.08), sincronizado con GSAP ScrollTrigger.
- Micro-interacciones: links de texto con subrayado `terracota` que se dibuja en hover (~0.3s); CTA terracota oscurece+comprime levísimo al click; portfolio scale 1.0→1.03 lento.
- Timing global: reveals 0.7–1s `expo.out`/`power3.out`; hover 0.13–0.3s; stagger 0.04–0.12s. NUNCA easing lineal visible. NUNCA >1.2s en UI.

### Lo que NO se anima (restraint — esto bloqueó la build, no repetir)
- ❌ `whileInView` fade en cada elemento (señal de tutorial).
- ❌ Cursor custom (Locomotive no tiene).
- ❌ Magnetic buttons.
- ❌ Partículas flotantes.
- ❌ Stagger char-by-char aleatorio.
- ❌ El grano NO se mueve (es material, no efecto).
- ❌ Cualquier animación que se luzca a sí misma en vez de servir al contenido.

### prefers-reduced-motion (obligatorio)
Sin parallax, sin SplitText (titulares estáticos), sin Lenis (scroll nativo), sin clip-path reveals (imágenes visibles directo). El color, el grano y la terracota se MANTIENEN (son identidad, no motion). El sitio queda 100% legible y navegable.

---

## 7. Detalles con personalidad (mínimo 3 — robados de la sensación Locomotive, no de su paleta)

1. **Sistema de índices mono (CONSERVAR — aprobado):** `001`, `002`... + metadatos laterales en Hanken Medium uppercase tracking abierto (`001 / MANIFIESTO · BOGOTÁ · 2026`). Da textura de archivo/ficha de taller. Atraviesa todo el sitio.
2. **Coordenadas de Bogotá:** en el footer y el índice del hero, las coordenadas reales del estudio (`4.7110° N, 74.0721° W`) en mono. Detalle de gravitas institucional (como Noma muestra la temperatura de Copenhague). Honesto y específico (P4).
3. **Wordmark SCUART+ a sangre (CONSERVAR/EVOLUCIONAR):** el `+` en `ambar` como sello del estudio, el wordmark Fraunces sangrando los bordes del footer = firma.
4. **Sello/glifo de barro:** un glifo o monograma SCUART tratado como sello de lacre/estampa (eco del concepto "tierra cocida"), en `terracota` o `ambar`, apareciendo 1–2 veces como marca de autoría.
5. **Numerales gigantes en Fraunces** (servicios 01–04, method 001–004) usados como elemento gráfico-arquitectónico que rompe la grilla, no solo como etiqueta.

---

## 8. Assets que William debe aportar (mínima, priorizada)

### BLOQUEANTES (sin esto no se puede codear con fidelidad)
- **Ninguno nuevo de producción.** Los 4 mockups existentes (`jamon-casero`, `menius`, `healthy-choice`, `arriba-gold` .webp) son suficientes para lanzar premium. ESTO ES INTENCIONAL: el sitio se apoya en tipografía + grano + motion, no en foto abundante.
- **Confirmaciones de William (no son assets pero bloquean):** (a) coordenadas/ciudad reales del estudio para los detalles mono; (b) datos reales de cada proyecto para las fichas (año, categoría) — sin inventar; (c) la línea final del manifiesto.

### NICE-TO-HAVE (mueven la aguja, en orden de impacto/costo)
1. **(Alto impacto, costo bajo-medio) 1 sesión de food photography editorial cálida** — 8–12 tomas estilo asset Jamón (luz de fuego, soft-focus, cálido). Da el banda lateral del hero y rompe el "premium pero vacío de comida". Es la ÚNICA inversión casi-obligatoria del rubro food según el research. NO Hollywood: un día de fotógrafo resuelve el 80%.
2. **(Gratis-bajo) Foto de proceso/taller** — manos, papel, bocetos, paleta de colores física, el grano real del taller. Da "alma de oficio" y refuerza el concepto "cuaderno de taller" sin necesitar platos.
3. **(Gratis) Re-render de los 4 mockups en mayor resolución** con marcos device premium, si los actuales pixelan en pantallas grandes.
4. **(Evitar) Stock photos de comida** — matan la percepción premium al instante. Mejor sin foto que con stock (P4).

---

## 9. Checklist de validación EN VIVO con William (decisiones explícitas a aprobar)

Antes de que el dev escriba código, William debe aprobar punto por punto:

1. ☐ **Arquitectura de paleta:** ¿alternancia cálida claro↔oscuro (V3) o terracota full-bleed (V2 literal)? *[Recomendación director: alternancia — favorece los assets, da ritmo Locomotive, evita el "un solo plano saturado" que fue gemelo del error carbón.]*
2. ☐ **Calibración de hex en vivo en el hero:** ¿`hueso #F0E9DC` se siente cálido/caro? ¿`terracota #A4471F` del manifiesto tiene peso sin cansar? Ajustar EN VIVO.
3. ☐ **Grano visible:** confirmar que el grano se ve "material/papel" y no "sucio" en hueso y en barro-oscuro.
4. ☐ **Tipografía:** ¿Fraunces da el alma buscada, o William quiere comprar Canela/Reckless? ¿Hanken como cuerpo+ficha (2 familias) OK?
5. ☐ **El gesto de marca en el primer scroll:** ¿se ve color cálido + grano + serif con alma juntos en el hero? (criterio que bloqueó la build anterior).
6. ☐ **Manifiesto en terracota full:** ¿la sección de marca a pantalla terracota funciona como corazón cálido, o cansa?
7. ☐ **Portfolio en reposo:** confirmar que las 4 imágenes se ven SIEMPRE (no hover-only) y que el tratamiento de MENIUS (esmeralda enmarcado, sin repintar) y Arriba (azul sobre barro-oscuro) no choca.
8. ☐ **Los 3 momentos de motion:** ¿hero reveal, portfolio compose, method pin — son los correctos, o sobra/falta alguno?
9. ☐ **Copy del manifiesto:** elegir la línea final (voz con actitud, cero clichés).
10. ☐ **Assets:** ¿se lanza con los 4 mockups (recomendado) o William consigue la sesión de food photo antes?
11. ☐ **Confirmaciones honestas:** coordenadas reales, datos reales de proyectos, cero premios/stats/testimonios inventados (P4).

**Proceso (no repetir el error de construir a ciegas):** scaffold Astro → montar SOLO el hero (hueso + grano + Fraunces + momento 1 de motion) → William lo ve en localhost y aprueba el rumbo → recién ahí, sección por sección validando en vivo. Nada se construye completo antes de que el ojo de William diga "este es el rumbo".

---

## Resumen para el dev (qué responder tras leer esto)
- **Sensación:** cuaderno de taller cálido — tierra cocida, tinta, luz de fuego. Hecho a mano, no generado. ✓
- **Paleta:** alternancia hueso `#F0E9DC` ↔ barro-oscuro `#241710`, terracota `#A4471F` protagonista como acento + sección manifiesto, ámbar `#D99A4E` escaso, grano OBLIGATORIO en todo fondo. ✓
- **Tipografía:** Fraunces (display, light + itálica) + Hanken Grotesk (cuerpo + ficha técnica uppercase). 2 familias, 4 estilos. ✓
- **Motion:** 3 momentos narrativos (hero reveal, portfolio compose, method pin) + micro-interacciones. Sin cursor/partículas/magnetic. reduced-motion total. ✓
- **Layout:** editorial asimétrico 12-col, alternancia de fondo como ritmo, numerales y wordmark rompiendo la grilla, índices mono de archivo. ✓
- **Qué evito:** carbón frío, rojo tecno, caps condensadas, fondo plano sin grano, cards oscuras, hover-only portfolio, Inter, stock, inventar datos. ✓
