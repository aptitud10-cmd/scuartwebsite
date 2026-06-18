# Research: mejoras a Capabilities, Method y Paleta — PROPUESTAS PARA APROBACIÓN

> **⚠️ ESTO NO ES UN PLAN DE IMPLEMENTACIÓN.** Es una carta de propuestas para que William elija. Ningún movimiento de este documento se codea hasta que él lo apruebe explícitamente, uno por uno. William es el único gate de composición (regla grabada en la memoria del proyecto tras el rechazo de la V3 editorial). Lo único que puede ir directo es lo marcado como PIEL, porque ya está cubierto por la dirección de arte aprobada — y aun así se avisa antes.

---

## 1. CAPABILITIES

### Estado actual

`CapabilitiesSection.astro` sobre hueso: kicker mono "CAPABILITIES", lista de 6 filas con numeral Fraunces gigante en terracota al 15%, nombre Fraunces uppercase, línea "resolves" en Hanken, hairlines, asimetría de padding alternado en desktop y hover que dimea las filas hermanas. **Debilidad principal:** es la sección cromáticamente más muerta de la página — el numeral al 15% es casi invisible (contraste ~1.2:1, el solape compositivo no se percibe), cero terracota plena, cero ámbar, y viene después de un portfolio también 100% hueso: tres pantallas seguidas sin alternancia. Encima el hover dimea pero la fila hovered no gana nada y no es link — promete interactividad que no existe. El kicker es una palabra suelta, el label genérico de template.

*(Nota de piel, no compositiva: la opacidad del numeral hay que recalibrarla en vivo con William — probar 15/25/35% lado a lado. Al 15% el "elemento gráfico-arquitectónico" que exigía el art direction no existe.)*

### PROPUESTA A — Claim narrativo antes de la lista

- **Qué vería el usuario:** entre el kicker y la lista, una frase corta (1–2 líneas máximo) en Fraunces light a escala display, sentence case, con UNA palabra en itálica **terracota** (no ámbar: ámbar sobre hueso da 2.0:1, ilegible — ver §3). La lista de 6 baja medio nivel de jerarquía y se lee como inventario de taller, no como argumento de venta. Mismo gesto tipográfico del manifiesto, en versión clara.
- **De dónde viene:** Locomotive (locomotive.ca/en/about) — nunca abre con servicios: manifiesto primero, y la lista "Capabilities" después, compacta y sin iconos. En su homepage la capacidad es una frase narrativa, no una lista. La élite subordina el inventario a la voz.
- **Esfuerzo:** bajo (un bloque de texto + i18n EN/ES).
- **Riesgo:** bajo-medio. Es un elemento editorial nuevo — si la frase crece o le salen subtítulos, roza el "editorial recargado" que William ya rechazó. Mitigación: una sola frase, sin columnas, sin adornos.

### PROPUESTA B — Anclas de evidencia "VISTO EN — [PROYECTO]"

- **Qué vería el usuario:** bajo el "resolves" de cada fila (solo las que tengan caso real), una micro-línea en ficha Hanken uppercase con tracking ancho: `VISTO EN — [PROYECTO]`, link en terracota con hairline. La fila pasa a tener destino real: el hover-dim actual por fin apunta a algo.
- **De dónde viene:** Phantom (phantom.land) — no tiene sección de servicios: cada proyecto del índice lleva tags de capacidad, y la suma de tags ES el mapa de servicios. Hello Monday hace lo inverso: servicios solo como filtros del portfolio. En ambos, la capacidad nunca se afirma en abstracto — siempre está anclada a trabajo visible. Para un estudio con portfolio corto, cada caso rinde doble: pieza y credencial.
- **Esfuerzo:** bajo-medio (mapear capabilities→proyectos reales; tocar i18n + fila).
- **Riesgo:** bajo. No agrega cajas ni imágenes, usa el lenguaje de fichas ya aprobado. Único punto a mostrar: si el portfolio no cubre las 6 capacidades, algunas filas quedan sin ancla — eso es honesto, pero William tiene que verlo.

### PROPUESTA C — Spec-sheet de taller al cierre de la sección

- **Qué vería el usuario:** al final de la lista, un sub-bloque bajo de 2–3 columnas separado por hairlines `--borde`: `HERRAMIENTAS` (Astro, GSAP, Lenis…), `TERRITORIO` (restaurantes, marcas de comida, hotelería), `BASE` (Bogotá — 4.6097°N 74.0817°W). Todo en fichas Hanken uppercase pequeñas, tinta-suave, mucho aire. Funciona como ficha técnica del estudio y transición hacia Method.
- **De dónde viene:** Darkroom (darkroom.engineering — el estudio que creó Lenis, la librería que SCUART usa): services/technologies/clients/awards como listas planas adyacentes, cero decoración — la retícula es la composición. Las coordenadas son el gesto Locomotive de detalles con personalidad (§7 del art direction, hoy ausente en toda la sección).
- **Esfuerzo:** medio.
- **Riesgo:** medio — es la propuesta más cercana a "bloque editorial nuevo". Tres columnas de metadata mal respiradas leen como recargado. Mitigación: una sola fila de altura, tipografía mínima. Es la primera candidata a descartar si William duda.

---

## 2. METHOD

### Estado actual

`MethodSection.astro` sobre barro-elevado #2E1F15: 4 pasos (001 DISCOVER → 004 LAUNCH) con columna de numerales Fraunces pineada en desktop (activo en ámbar por toggle), títulos Fraunces uppercase, body Hanken a opacidades de hueso, chips mono y bloque "what changes". **Debilidad principal:** la arquitectura es la correcta (el research confirma que numerales pineados + 4 pasos ES el patrón de la élite: Locomotive, Ragged Edge, Exo Ape), pero la ejecución es monocroma y burocrática — todo lo secundario es hueso lavado a 0.5/0.65, ~12 hairlines seguidas dan ritmo de formulario, los 4 numerales fantasma compiten con el activo, mobile nunca ve el ámbar, y los nombres de paso (DISCOVER/DIRECTION/SYSTEM/LAUNCH) son las etiquetas de Gantt de cualquier consultora. Además es la única sección oscura SIN grano reforzado: el plano de color más liso del sitio, justo el "div plano = barato" que la dirección prohíbe.

### PROPUESTA A — Copy de creencia: títulos con postura y cierre-promesa

- **Qué vería el usuario:** los títulos Fraunces de 001–003 se renombran para sostenerse solos como postura (leídos en secuencia forman una narrativa, no un checklist). El 004 deja de ser una actividad del estudio ("LAUNCH") y pasa a nombrar el estado que vive el restaurante después — y su línea "what changes" se eleva a cierre del capítulo con la palabra clave en itálica ámbar (legal sobre barro: 7.21:1). El body de cada paso: máximo 3 frases con sustantivos del oficio gastro — la carta, la reserva, la mesa, el ticket promedio. Prohibido "soluciones integrales" y "alineación estratégica".
- **De dónde viene:** Ragged Edge (raggededge.com/approach) — su paso 04 es "Your different reality": el cierre es la promesa, no la tarea. Exo Ape (exoape.com/studio) — manifiesto numerado 01–04 donde cada titular es una creencia que funciona leída sola. Koto (koto.com/about) — la prueba de que el AI-slop de proceso está en el copy, no en el layout: frases cortas con sustantivos concretos ("In pixels. In print. In product.").
- **Esfuerzo:** bajo (i18n EN/ES).
- **Riesgo:** bajo. Es copy, pero cambia el énfasis del cierre — la redacción se le muestra a William antes de tocar nada.

### PROPUESTA B — Microfichas de datos verificables en los slots existentes

- **Qué vería el usuario:** cada paso gana en sus labels mono ya existentes un dato contable y real: duración típica (`SEM 01–02`) o entregable concreto. Al pie de la sección, una línea mono `BOGOTÁ — 4°39'N 74°03'W` en hueso al 50%. Nada de layout nuevo: los datos viven en los slots de ficha que ya están.
- **De dónde viene:** Locomotive (locomotive.ca/en/agency) — timestamp real del film "[01:11]", año de ingreso junto a cada persona del equipo, dirección formateada como coordenada. La credibilidad de la élite viene de lo verificable, no de lo declarado.
- **Esfuerzo:** bajo.
- **Riesgo:** bajo, con una condición dura: los datos tienen que ser reales. Duraciones inventadas son peor que no ponerlas.

### PROPUESTA C — Scrub progresivo del numeral (el numeral que transiciona, no que se enciende)

- **Qué vería el usuario:** el numeral activo deja de encenderse por toggle de clase y cruza en crossfade continuo hueso-15% → ámbar ligado al progreso de scroll del paso — se siente fabricado, no programado. Opcional: una hairline vertical junto a la columna de numerales que se va llenando de ámbar. De paso se arregla que mobile nunca ve ámbar (numeral del paso en viewport pasa a ámbar) y el bug real de `isDesktop()` evaluado una sola vez sin listener de resize.
- **De dónde viene:** patrón dominante en Awwwards 2025 — "Project Steps Scrolling" (Fooror) y "Process Scroll Section" (Maxima Finance): pin + contador con scrub GSAP. El layout pineado de SCUART ya es este patrón; falta el scrub.
- **Esfuerzo:** medio (GSAP scrub sobre el pin existente).
- **Riesgo:** bajo en desktop (mismo HTML, mismo layout). La hairline de progreso es el único elemento visible nuevo — se maqueta y se muestra antes. El ámbar en mobile es un cambio visible pequeño pero hay que enseñarlo.

### Descartado a propósito

El interludio declarativo a escala display entre los pasos 002 y 003 (patrón DixonBaxi, dixonbaxi.com/approach) es real y funciona — pero es exactamente el tipo de bloque editorial extra que William ya rechazó. No se propone; solo si él lo pide.

### Notas de PIEL (ya cubiertas por la dirección aprobada — se avisa, no se pide permiso de composición)

1. **Grano reforzado local en Method** (soft-light 0.08, como ya tienen manifiesto/contacto/footer): regla dura del §2 del art direction, hoy incumplida — Method es el plano liso del sitio.
2. **IBM Plex Mono → Hanken 500 uppercase** en kickers/labels/chips: el §3 dice "2 familias, 4 estilos, fin" y hoy hay una tercera familia real que encima se renderiza en faux-medium (fonts.css solo carga el 400).
3. **Fraunces display de UPPERCASE → title/sentence case**: el §3 lo pedía (en caps la serif pierde los rasgos que le dan alma). Es piel según la dirección, pero el cambio visual es notorio → antes/después a William primero.

---

## 3. PALETA

### Estado actual y veredicto del research

Hueso #F0E9DC · tinta #1C140E · barro-oscuro #241710 · barro-elevado #2E1F15 · terracota #A4471F · ámbar #D99A4E, más hairlines pigmentadas y un `--linea-claro` en rgba negro. El research (CSS reales extraídos de To'ak, WatchHouse, Daylight, Akaru, Imperiale Bolgheri) confirma: **los 4 valores núcleo están validados — no se tocan.** El barro #241710 (L* 9.2) está calibrado casi idéntico al chocolate de To'ak #241405 (la marca gastro más cara analizada); el terracota #A4471F (L* 42) es siena quemado, lejos del terracotta-salmón millennial #E2725B, y encima pasa WCAG AA como texto sobre hueso (4.97:1) — algo que casi ningún acento cálido premiado logra; el ámbar brilla como brasa sobre barro (7.21:1). La estructura (claro L*>92 + oscuro L*<10 + UN cromático con convicción) es la firma de la paleta tierra cara, no la nube de tonos medios "otoño 2019 Pinterest". Lo que falta es **infraestructura**, no re-pintado.

### AJUSTE A — Token `--papel` #F8F3E9 — **PIEL**

Quinto tono: mismo matiz del hueso, más luminoso (L* 96). Uso: texto pequeño (<18px) sobre terracota y barro (5.43:1 sobre terracota, 15.76:1 sobre barro — verificados) y futuras superficies elevadas. Patrón Daylight/To'ak/WatchHouse: dos claros cercanos = profundidad de papel sin sombras grises. Agregar el token y usarlo como color de texto es piel directa; si algún día crea superficies nuevas visibles, eso ya es compositivo y pasa por William.

### AJUSTE B — Token `--hueso-sombra` #E3D9C5 + regla "cero rgba-negro sobre claros" — **PIEL**

Sexto tono (L* 87, mismo matiz del hueso con más pigmento — análogo al #E8DED8 de Daylight). Uso: borders 1px, fondos de fichas Hanken uppercase, filas alternas, divisores. Reemplaza al actual `--linea-claro: rgba(28,20,14,0.08)` — el gris-negro translúcido que enfría la paleta justo en la capa que comunica artesanía. Equivalente sobre oscuro: toda variante del barro deriva del barro (techo #2E2018, L* < 14), nunca de blanco translúcido. Contrastes verificados: tinta sobre hueso-sombra 12.45:1; terracota sobre hueso-sombra 4.29:1 (solo display).

### AJUSTE C — Reglas de uso codificadas + limpieza — **PIEL**

En `tokens.css`, como comentario-contrato encima de los tokens:

- **Ámbar nunca como texto sobre hueso/papel** (2.00:1 — falla todo nivel WCAG). Solo sobre barro/terracota, o como elemento no-textual grande sobre claro.
- **Variantes del barro siempre L* < 14** — el marrón café medio es donde nace la "masa marrón" que data la paleta.
- **Prohibidos en V3:** verde salvia, oliva, rosa empolvado, mostaza-pastel — la firma medible del tierra-genérico (todo en L* 55–75 desaturado), aunque aparezcan en moodboards gastro.
- **Borrar la paleta V1 muerta** (`--carbon`, `--rojo`, `--crema`, `--taupe`) y los comentarios desactualizados — deuda que invita a errores.

Los tres ajustes son cambio de PIEL bajo la dirección ya aprobada. Cero cambios compositivos en esta sección.

---

## 4. Recomendación del research

**Capabilities → Propuesta A (claim narrativo).** La sección no falla por estructura — la lista de filas con numeral ya es el patrón Locomotive — falla porque es muda y genérica: un kicker-template y cero eventos de color. El claim le da voz y un acento terracota con el mismo gesto que ya existe en el manifiesto: coherencia de sistema al costo de una frase. La B (VISTO EN) es segunda por centímetros y tan barata que vale la pena presentarla junto a la A: arregla el hover que hoy miente. La C se cae primero si hay que recortar.

**Method → Propuesta A (copy de creencia).** Opinión sin diplomacia: el layout de Method ya es el de la élite — gastar esfuerzo en motion antes que en copy es pulir el marco de un cuadro sin pintar. Todas las fuentes coinciden en que el slop de las secciones de proceso vive en el copy ("Discovery/Design/Develop" + jerga motivacional), y "001 DISCOVER → 004 LAUNCH" es exactamente eso. Renombrar los pasos como creencias y cerrar con la promesa al restaurante es el mayor retorno por hora invertida de todo este documento, con riesgo compositivo casi nulo. El scrub (C) es el siguiente en la cola, no el primero.

**Paleta → Ajuste B (hueso-sombra + cero rgba-negro).** Los 4 valores núcleo no se tocan — el research los valida contra los CSS reales de To'ak y WatchHouse. Si solo entra un ajuste, que sea el B: la calidez no se decide en los fondos sino en los mil bordes y divisores, y hoy `--linea-claro` es gris-negro translúcido — exactamente el detalle que delata "generado" frente a "pigmentado hasta el border", que es la mano de artista que William pidió.
