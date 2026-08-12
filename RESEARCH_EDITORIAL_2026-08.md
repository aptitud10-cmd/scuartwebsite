# Investigación — Diseño Editorial Web nivel Awwwards (2025–2026)

**Fecha:** 2026-08-09
**Proyecto:** scuart.com
**Foco:** composición, tipografía, grid, jerarquía. NO motion.
**Método:** web search + fetch directo de sitios. Cada afirmación marcada [VERIFICADO] / [INFERIDO].

---

## ⚠️ Nota de honestidad metodológica — LEER PRIMERO

Antes de nada, tres límites reales de esta investigación. No los escondo porque cambian cuánto peso darle a cada sección:

1. **La mayoría de los sitios premiados son JS-driven.** Cuando hago fetch, obtengo el HTML servido, no el DOM renderizado. Eso significa que **no pude leer valores CSS reales** (px, ratios, tracking, hex) de casi ningún sitio. Todo número tipográfico concreto de este informe viene de **documentación de tipografía web, no de medir los sitios premiados**. Lo marco explícitamente.
2. **No pude entrar a las fichas de Awwwards con puntajes/jurado.** Awwwards sirve su contenido detrás de JS y paginación. Obtuve listados (nombres, URLs, fechas, premios) pero **no los criterios de jurado ni los puntajes desglosados**. Cualquiera que te diga "el jurado de Awwwards puntúa X en composición" sin mostrarte la ficha está inventando.
3. **Del target de 10-12 sitios editoriales verificados, conseguí ~5 realmente editoriales.** El resto de lo que abrí resultó NO ser editorial (te lo digo abajo, sitio por sitio). Prefiero darte 5 verificados que inflar la lista con 7 que no miré.

**Consecuencia práctica:** la sección 1 (sitios) es sólida en *qué* y débil en *medidas exactas*. La sección 3 (escalas) es sólida en principio y **no está medida de los ganadores**. Tomá las secciones 2, 5 y 6 como las de mayor valor real.

---

## 1. Sitios verificados

### 1.1 Vero — verostudio.com [VERIFICADO — fetch exitoso]
**Premio:** Awwwards Site of the Day + Developer Award — **8 de agosto de 2026** (el más reciente que encontré).
Fuente del premio: listado de Awwwards typography. [VERIFICADO]

**Lo notable de su composición:**
- **Jerarquía por ITÁLICA, no por tamaño.** Este es el hallazgo más aplicable de todo el informe. Su headline mezcla romana e itálica *dentro de la misma línea*: `"your wedding dress becomes art"` donde *your* y *art* van en itálica. La énfasis no viene de agrandar ni de cambiar color — viene del contraste romana/itálica en el mismo cuerpo. [VERIFICADO — copy textual]
- Paleta de contención extrema: **blanco ~80% de la superficie visual**, negro para texto, grises secundarios. 3-4 colores totales. [VERIFICADO en descripción del fetch; los % son estimación del lector, marcá como aproximado]
- Ritmo: hero → propuesta de valor → proceso → testimonio → galería → CTA. Bloques verticalmente apilados con aire generoso, alternando **imagen full-width con bloques de texto centrados**. [VERIFICADO]

**Copy textual [VERIFICADO]:**
> "your most important dress DESERVES TO last forever"
> "Worn once. Never meant to disappear."
> "Technology often pulls us away from what's real. Vero does the opposite — we use it to bring memory back to physical form."

Fijate en "Worn once. Never meant to disappear." — **cuatro palabras, dos frases, cero adjetivos de agencia.** Ese es el nivel de copy que gana.

---

### 1.2 By-Kin — by-kin.com [PARCIALMENTE VERIFICADO]
**Premios:** Awwwards SOTD + Developer Award + FWA + CSS Design Awards Web of the Day. [VERIFICADO vía reseña de Hon Tran]

Es **el sitio más citado como referencia editorial de 2026**. La reseña lo describe como *"a masterclass in restraint with confident editorial typography, weighted smooth scroll, and transitions that never call attention to themselves."* [VERIFICADO — cita textual de la reseña]

**Lo que SÍ pude verificar del sitio [VERIFICADO]:**
- Usa **numeración de secciones visible**: `01/`, `02/`, `03/` como elementos display. Esto es señal editorial fuerte — trata las secciones como capítulos de un impreso.
- Tiene un **toggle de layout** con opciones "1" y "2" — el usuario puede cambiar la grilla. Densidad como elección del lector, muy de revista.
- Headline: *"'kin are a creative commercial interiors, branding and graphic design studio."* — descripción plana, sin adjetivo vendedor. [VERIFICADO]
- Nav de 4 ítems: About, Work, Journal, Contact. [VERIFICADO]

**[NO VERIFICADO]:** no pude leer sus tipografías, hex ni medidas — el sitio es JS-driven y el HTML servido no las expone. **No te puedo decir qué serif usa.**

---

### 1.3 Truekind Skincare — truekindskincare.com [VERIFICADO]
**Premio:** Awwwards SOTD + Developer Award, 29 abril 2025. Usa **Editorial New**. [VERIFICADO vía colección Awwwards "Editorial New"]

Este es el más cercano a tu stack tipográfico real (PP Editorial New).

- **Tracking diferenciado por rol:** tracking *suelto* en display, *más cerrado* en cuerpo. [VERIFICADO en el análisis del fetch] Ojo que esto es lo **inverso** de lo que hace mucha gente (suelen apretar el display y soltar el cuerpo). En Editorial New, soltar el display deja respirar las serifas condensadas.
- Proporción de color reportada: **~70% espacio blanco, ~20% texto neutro, ~10% acento.** [VERIFICADO como descripción; los números son aproximados del lector]
- Headline en **dos líneas con quiebre deliberado y cambio de caja**: *"True to Oneself / kind to Nature"* — nótese la minúscula en "kind" arrancando la segunda línea. Rompe la convención de capitalizar cada línea. [VERIFICADO]
- Copy de filosofía: *"Hide Nothing"* / *"Radical Transparency"*. Dos palabras por concepto. [VERIFICADO]

---

### 1.4 Floema — floema.com/en [VERIFICADO]
**Premio:** Awwwards **Site of the Month — mayo 2026**. [VERIFICADO vía listado SOTM]

Importante: **es sans-serif, no serif.** Lo incluyo porque demuestra que *editorial ≠ serif obligatorio*; lo editorial está en la composición.

- Bloques **alternados imagen-texto** como motor de ritmo: hero → intro de texto → showcase → testimonio → metodología → footer. [VERIFICADO]
- Grid de colecciones a **6 columnas** con imágenes de dimensión uniforme. [VERIFICADO]
- Copy [VERIFICADO]:
  > "Spaces for people, made for life"
  > "Going beyond the expected is our calling"
  > "Made to last, designed to endure"

Los tres headlines siguen el mismo patrón rítmico: **frase corta + coma + frase corta**. Es una cadencia, no una casualidad.

---

### 1.5 Elena Scott [VERIFICADO parcialmente]
**Premio:** Typewolf Site of the Day, 9 diciembre 2025.
**Fuentes: Editorial Old + Neue Montreal.** [VERIFICADO]

Es exactamente tu pairing conceptual: **serif display editorial + grotesca neutra para cuerpo**. Confirma que PP Editorial New + Geist Sans es una combinación vigente, no fechada. [INFERIDO — la validación es del *patrón*, no de tu pairing exacto]

---

### 1.6–1.9 Sitios que abrí y NO son editoriales (los reporto para que no pierdas tiempo)

| Sitio | Qué es realmente | Veredicto |
|---|---|---|
| **2xa.studio** — SOTD 31 jul 2026 | Sans-serif, Helvetica + tipografía pixelada, generativo/código. *"The aim is not to aestheticize technology"* | **NO editorial.** Anti-ornamental. [VERIFICADO] |
| **trionn.com** (tu referencia) | **Sans-serif bold**, no serif. Headline *"Designed to mean something."* | ⚠️ **Ver nota crítica abajo.** [VERIFICADO] |
| **locomotive.ca** | Neutro b/n, card-based, sans. Emojis en el copy. | Editorial moderado, no serif-display. [VERIFICADO] |
| **14islands.com** | Sans, cards uniformes, acentos en gradiente | **NO editorial.** [VERIFICADO] |
| **hellomonday.com** | Sans puro, sin serifas. *"We make digital (and magical)…"* | **NO editorial.** [VERIFICADO] |
| **basement.studio** | *"making cool shit that performs"* | **NO editorial.** Voz opuesta. [VERIFICADO] |
| **uncommonstudio.com.au** | Redirige a uncommondesign.group | **NO ABIERTO.** [NO VERIFICADO] |

### ⚠️ Nota crítica sobre trionn.com — tu referencia declarada

Tenés que saber esto porque afecta toda la dirección: **Trionn es sans-serif bold, no editorial-serif.** [VERIFICADO por fetch] Su headline es *"Designed to mean something."* con tipografía sans en gran escala.

Es decir: **la referencia declarada del dueño y la dirección editorial-serif del proyecto no son la misma cosa.** Trionn logra su impacto con sans en escala grande + mucho aire, no con serif display.

Esto no es un problema — pero es una **decisión sin tomar**, no un detalle. Hay que elegir conscientemente:
- **(A)** Editorial-serif real (línea Vero / Truekind / Elena Scott), o
- **(B)** La contención de Trionn, que es otra cosa.

Perseguir las dos a la vez es exactamente cómo se produce el Frankenstein que ya apareció antes en este proyecto. **Recomiendo (A)**, porque tu stack (PP Editorial New) y tu paleta cálida ya están construidos para eso — pero es una decisión de William, no mía.

---

## 2. Patrones que se repiten en los ganadores editoriales

Esta es la sección de mayor valor. Todo esto sale de comparar los sitios verificados arriba.

**1. Restraint (contención) es el criterio nº1, y es lo que separa premiado de correcto.**
La palabra que aparece literal en la reseña de By-Kin es *"restraint"*, y en Vero *"the restraint demonstrates confidence"*. [VERIFICADO — citas textuales] El sitio correcto-no-premiado agrega; el premiado **saca**. Un sitio correcto usa 5 tamaños, 4 colores y 3 pesos "porque quedan bien". El premiado usa 3, 2 y 2 y **defiende cada uno**.

**2. Una sola idea tipográfica ejecutada con disciplina total.**
Vero: itálica como énfasis. By-Kin: numeración de capítulos. Truekind: quiebre de línea con caja mixta. **Cada uno tiene UN gesto**, repetido en todo el sitio. El sitio no-premiado tiene cinco gestos y ninguno se lee como decisión.

**3. Blanco/fondo dominante en ~70-80% de la superficie.** [VERIFICADO como patrón en Vero y Truekind]
El acento NO es un color de marca esparcido — es una intervención rara.

**4. El copy es literal y corto, no aspiracional.**
Los ganadores editoriales describen lo que hacen en lenguaje plano. By-Kin: *"'kin are a creative commercial interiors, branding and graphic design studio."* Punto. Sin "transformamos". [VERIFICADO]

**5. Ritmo por ALTERNANCIA, no por repetición.**
Floema y Vero alternan imagen full-bleed ↔ bloque de texto contenido. La variación de *anchura de medida* es el motor del ritmo vertical, más que el espaciado.

**6. Densidad como decisión, no como default.**
By-Kin llega a dar al usuario un toggle de layout. Lo editorial acepta zonas **densas** (mucho texto junto, medida angosta) contra zonas **vacías**. El sitio no-premiado tiene densidad uniforme y media en todo — que es lo que lo hace leer como plantilla.

---

## 3. Escalas tipográficas — ⚠️ NO MEDIDAS DE LOS GANADORES

**Advertencia explícita:** no pude extraer CSS real de los sitios premiados. Lo siguiente viene de **documentación de tipografía web** [VERIFICADO como documentación] y es **[INFERIDO]** como práctica de los ganadores. No presentes estos números como "lo que usa By-Kin".

**Ratios modulares** [VERIFICADO como documentación]:
- 1.25 (tercera mayor), 1.333 (cuarta justa), 1.5 (quinta justa).
- Para **editorial específicamente, la recomendación documentada es 1.5 (quinta justa)**: *"creates significant contrast between scale steps and is best suited for editorial sites, landing pages, or anywhere a large H1 is the deliberate focal point."* [VERIFICADO — cita textual]

Traducción para vos: **contraste ALTO entre display y cuerpo.** Si tu H1 es 1.25× tu H2, no estás haciendo editorial — estás haciendo un documento.

**Line-height** [VERIFICADO como documentación]:
- Display grande (~4.5rem): **~1.1**, no 1.5.
- Cuerpo: 1.5–1.6.
- Regla: a mayor tamaño, menor line-height. Es proporcional inverso.

**Tracking** [VERIFICADO en Truekind, [INFERIDO] como regla general]:
- Serif display condensada (Editorial New): tracking **suelto/positivo**.
- Cuerpo: tracking **neutro o ligeramente negativo**.

**Fluid con clamp()** [VERIFICADO como documentación]:
- Patrón: `clamp(min, Xvw + Yrem, max)` — elimina el efecto escalera sin media queries. Soporte >90% desde fines de 2025.
- Importante: el término `+ Yrem` (no `vw` puro) es lo que mantiene el escalado accesible al zoom.

**Cuántos tamaños conviven:** [INFERIDO] — no lo pude medir. Por el principio de contención (punto 1 de sección 2), **la apuesta segura es 5-6 escalones totales**, no 9.

---

## 4. Grid — [MAYORMENTE INFERIDO]

Honestidad: **no pude medir grillas reales.** Lo poco verificado:

- **Floema: grid de 6 columnas** con imágenes de dimensión uniforme. [VERIFICADO]
- **By-Kin: grilla conmutable** (toggle 1/2) + disposición asimétrica de proyectos destacados. [VERIFICADO]
- **Vero: grid modular con alternancia** full-width ↔ centrado. [VERIFICADO]

**¿Columnas visibles?** [INFERIDO] — no lo pude confirmar en ningún sitio. Las hairlines visibles como retícula son un recurso editorial real, pero **no lo verifiqué en estos ganadores**. No lo apliques asumiendo que "así lo hacen ellos".

**Asimetría:** verificada sólo en By-Kin. [VERIFICADO]

**Baseline grid:** [NO VERIFICADO] — cero evidencia recogida. No puedo afirmar que los ganadores lo usen.

---

## 5. Lo que está QUEMADO en 2026

De la encuesta a creativos de Creative Boom [VERIFICADO — citas textuales] y del análisis de tendencias:

| Patrón | Cita / razón | Nota para vos |
|---|---|---|
| **Minimalismo vacío** | *"Minimalism without soul"*, *"Minimalism close to absence of design"* | ⚠️ **El riesgo nº1 de tu proyecto.** Crema + serif + mucho aire, sin una idea tipográfica, cae acá directo. |
| **Bento grids** | *"Bento boxes… but can't stop using them"* | Evitar en Servicios/Portfolio. |
| **Gradientes** | Ubicuos vía generadores y plantillas | Ya no los tenés. Bien. |
| **Glassmorphism / liquid glass** | *"Glass everything"* | No aplica. |
| **Y2K / retro** | *"Uniformed Y2K nostalgia"* | No aplica. |
| **AI slop** | *"polished with AI and templates but lack any sense of intention or perspective"* | ⚠️ **Aplica a tus imágenes IA.** Ya tenés registro de que las imágenes IA abstractas no funcionan. |
| **Motion porque sí** | *"Motion for motion's sake"* = *"dishonesty"* | Coherente con rechazar fade-up/scramble/parallax. |
| **Homogeneidad IA** | "mismo fingerprint estético, mismos layouts" | — |
| **Maximalismo perezoso** | *"hard to read and aren't well done"* | — |

**Específicos editoriales que el dueño ya rechazó y quedan confirmados como correctos de rechazar:** fade-up, scramble de texto, parallax. Los tres caen bajo *"motion for motion's sake"*. [VERIFICADO como categoría]

**[INFERIDO]** — agrego, sin verificación directa, patrones editoriales que leen como plantilla en 2026: serif display gigante centrado + una línea de sans debajo (el "template Editorial New"), y la lista de proyectos tipográfica con hover de imagen flotante — **este último es literalmente el patrón Locomotive que tenés en Portfolio.** Está tan replicado que ya es genérico. No digo sacarlo; digo que **no te va a dar puntos por sí solo** y necesita un gesto propio encima.

---

## 6. Copy editorial — ejemplos reales verificados

Todos textuales [VERIFICADO]:

**El nivel alto (editorial real):**
> **Vero:** "Worn once. Never meant to disappear."
> **Vero:** "Technology often pulls us away from what's real. Vero does the opposite — we use it to bring memory back to physical form."
> **By-Kin:** "'kin are a creative commercial interiors, branding and graphic design studio."
> **Truekind:** "Hide Nothing"
> **Floema:** "Made to last, designed to endure"

**El nivel genérico (para contraste — sitios premiados pero de voz vendedora):**
> **14islands:** "We design and build premium digital products, brands, and experiences."
> **Hello Monday:** "We creates joyful digital ideas, products, brand identities and experiences that connect the hearts of brands to the hearts of their audiences." (sic — el error "We creates" es del sitio)
> **Trionn:** "Websites, AI products, brands, and systems built for clarity, scale and impact."
> **Locomotive:** "We're a small group of creative thinkers who craft bespoke digital-first brand identities and experiences, tailor-made for you and your audience"

**Qué diferencia a los primeros:**
1. **Frases cortas, a veces sin verbo.** "Worn once." "Hide Nothing."
2. **Cero tríadas de sustantivos abstractos.** Los genéricos SIEMPRE listan tres o más: *"products, brands, and experiences"*, *"clarity, scale and impact"*. Es el tic delator.
3. **Concreto y físico**: dress, memory, physical form. Los genéricos son abstractos: visión, impacto, potencial.
4. **Describen antes de vender.** By-Kin literalmente dice qué es, sin adjetivo.
5. **Contraste declarativo:** Vero dice qué hace la tecnología *mal* y después qué hace ella. Estructura de oposición, no de superlativo.

**Regla operativa para SCUART:** si una frase sobrevive borrándole todos los adjetivos, es editorial. Si al borrarlos no queda nada, es genérica.

---

## QUÉ APLICAR A SCUART — 9 acciones priorizadas

**P0 — Decisión previa (bloquea todo lo demás)**

**1. Resolver la contradicción Trionn vs editorial-serif.**
Trionn es sans-bold; tu dirección es serif-editorial. [VERIFICADO] Son caminos distintos. Elegir uno explícitamente **antes** de tocar nada. Mi recomendación es editorial-serif (A), porque tu stack ya está construido para eso — pero es decisión de William. Esta es la causa raíz de Frankensteins pasados.

**2. Definir UN gesto tipográfico propio y repetirlo en todo el sitio.**
Es lo que tienen los tres ganadores editoriales verificados. Opciones tomadas de los ganadores (elegir UNA, no varias):
- **Itálica como énfasis dentro de la línea** (patrón Vero) — el más fuerte y el más aplicable a PP Editorial New, que tiene itálicas en 8 pesos. [VERIFICADO que Editorial New las tiene]
- Numeración de secciones `01/ 02/ 03/` (patrón By-Kin).
- Quiebre de línea con caja mixta deliberada (patrón Truekind).

**P1 — Tipografía**

**3. Subir el ratio de escala a ~1.5 entre display y cuerpo.**
Documentación recomienda quinta justa (1.5) para editorial. [VERIFICADO como doc, [INFERIDO] para los ganadores] Si hoy tu H1 y tu cuerpo están cerca, el sitio lee a documento, no a editorial.

**4. Line-height inverso al tamaño: display ~1.1, cuerpo 1.5-1.6.** [VERIFICADO como doc]

**5. Tracking suelto en display serif, neutro en cuerpo.**
Verificado en Truekind, que usa el mismo Editorial New que vos. [VERIFICADO]

**6. Reducir a 5-6 escalones tipográficos totales y defender cada uno.**
Aplicación del principio de contención. [INFERIDO]

**P2 — Composición y color**

**7. Llevar crema #f4f2ec a ~70-80% de la superficie y volver el lima #c6f24e una intervención RARA.**
Proporción verificada como patrón en Vero y Truekind. [VERIFICADO como patrón] El lima usado como color de marca esparcido mata el efecto editorial. Además ya tenés registrado que lima sobre claro falla en contraste (1.16:1) — usalo sobre el bloque oscuro del Statement, ahí sí funciona.

**8. Construir el ritmo vertical por ALTERNANCIA de anchura de medida, no por más espaciado.**
Patrón verificado en Vero y Floema: full-bleed ↔ contenido angosto. Tus secciones (Hero → Manifiesto → Portfolio → Statement → Servicios → Contacto) ya tienen el esqueleto; falta que **alternen densidad**: Manifiesto denso y angosto, Statement vacío y full-bleed, Servicios denso.

**P3 — Copy**

**9. Reescribir el copy contra la regla del adjetivo.**
Borrale los adjetivos a cada frase del sitio: si no queda nada, reescribir. Eliminar toda tríada de sustantivos abstractos ("estrategia, diseño e impacto") — es el tic que separa a Hello Monday/Trionn de Vero. [VERIFICADO como patrón diferencial]
Para un estudio de 0 clientes y 3 proyectos, el modelo By-Kin es el correcto: **decir qué sos, plano, sin adjetivo.** No prometer transformación.

---

## Lo que NO pude responder

Lo dejo explícito para que no se llene con suposiciones después:

- **Medidas CSS reales de los ganadores** (px, ratios, tracking, hex): no extraíbles por fetch en sitios JS-driven.
- **Criterios y puntajes del jurado de Awwwards:** no accesibles.
- **Si los ganadores usan baseline grid:** cero evidencia. No afirmarlo.
- **Si usan columnas/hairlines visibles:** no verificado en ningún sitio.
- **Tipografías de By-Kin:** desconocidas pese a ser la referencia editorial más citada.
- **uncommondesign.group:** no abierto (redirección).
- **Sitios editoriales verificados: 5, no 10-12.** El resto de lo que abrí no era editorial.

**Siguiente paso recomendado si necesitás las medidas:** abrir 3-4 de estos sitios en el navegador con DevTools y leer el CSS computado directamente. Es la única vía real para los números — y es media hora de trabajo que convertiría la sección 3 de [INFERIDO] a [VERIFICADO].

---

## Fuentes

- [Awwwards — Typography](https://www.awwwards.com/websites/typography/)
- [Awwwards — Sites of the Month](https://www.awwwards.com/websites/sites_of_the_month/)
- [Awwwards — Websites using Editorial New](https://www.awwwards.com/websites/Editorial%20New/)
- [Typewolf](https://www.typewolf.com/)
- [Typewolf — Top 40 Portfolio Sites 2026](https://www.typewolf.com/portfolio-sites)
- [Typewolf — Editorial New](https://www.typewolf.com/editorial-new)
- [Typewolf — Elena Scott](https://www.typewolf.com/site-of-the-day/elena-scott)
- [Creative Boom — 10 trends creatives are so over in 2026](https://www.creativeboom.com/insight/10-trends-creatives-are-so-over-in-2026/)
- [Hon Tran — 10 Award-Winning Websites of 2026, Judged](https://www.hontran.dev/blog/best-award-winning-websites-2026)
- [Vero Studio](https://verostudio.com)
- [By-Kin](https://by-kin.com)
- [Truekind Skincare](https://truekindskincare.com)
- [Floema](https://floema.com/en)
- [Trionn](https://trionn.com)
- [Locomotive](https://locomotive.ca)
- [14islands](https://www.14islands.com)
- [Hello Monday](https://www.hellomonday.com)
- [basement.studio](https://www.basement.studio)
- [2xA Studio](https://2xa.studio)
- [Modern CSS Tools — Fluid Typography with clamp()](https://moderncsstools.com/guides/fluid-typography/)
- [Clamp Generator — Fluid Typescale](https://clampgenerator.com/blog/fluid-typescale-modern-css-without-media-queries/)
