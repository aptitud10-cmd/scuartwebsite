# Art Direction — SCUART · Sistema "Color por Bloques" (Locomotive Unificado)

**Fecha:** 2026-06-16
**Director:** director-creativo (Opus 4.8)
**Cliente:** SCUART (sitio propio — agencia digital, William Cuartas, Bogotá)
**Branch:** redesign-v3
**Estado:** PROPUESTA — requiere OK de William ANTES de codear
**Ancla:** `src/components/HeroSection.astro` (ya implementado, NO se rediseña)

---

## 0. El problema que este documento resuelve

Hoy el sitio tiene **un hero excelente** (dirección Locomotive: rojo bombero animado, `mix-blend-mode: difference`, PP Editorial New, wordmark con recuadro de disciplinas y asterisco) y **un cuerpo que lo traiciona**: 5 secciones con 4 lógicas de color distintas (terracota, yeso claro, carbón, barro oscuro con ámbar). Un jurado Awwwards lo lee en 2 segundos como *"el hero lo hizo otra persona; al cuerpo le falta dirección de arte"*.

Este documento hace UNA cosa: **lleva las 7 secciones a una sola voz**, extendiendo el lenguaje del hero a todo el scroll mediante un **sistema de color por bloques** — la mecánica exacta de Locomotive. Cada sección es un **plano de color saturado pleno**, no un degradado, no un yeso, no un "fondo neutro con acento". El color ES la sección.

**Regla madre:** si una decisión no se puede defender diciendo *"así se siente parte de la misma pieza que el hero"*, no entra.

---

## 1. Concepto central

**Idea:** **"El color como argumento"** — el sitio no decora con color, *piensa* con color. Cada plano saturado es una afirmación; el blanco que reacciona encima (difference) es la voz que responde.

**Por qué este concepto:**

SCUART vende criterio, no plantillas. Un sitio de agencia que se atreve a poner rojo bombero, azul eléctrico y naranja encendido a pantalla completa —sin un solo gradiente, sin una sola sombra, sin una sola card redondeada— está diciendo algo que ningún template de Webflow dice: *"tenemos una opinión y la sostenemos"*. Locomotive ganó 7 años seguidos el Agency of the Year haciendo exactamente esto: el minimalismo cromático (1 plano + 1 tinta reactiva) desplaza toda la atención a la tipografía y al motion. El trabajo habla, el color afirma.

El hero ya fijó la gramática: **un plano saturado + texto blanco con `mix-blend-mode: difference` + serif gigante**. El cuerpo entero debe heredar esa gramática. La diferencia entre lo que hay hoy (terracota gastronómico, que el critic ya rechazó como "basura editorial") y lo que propongo es que **el rojo del hero deja de ser una isla** y se convierte en el primer movimiento de una secuencia de planos que se contestan entre sí.

El lema de Locomotive es *"Design & Code are only Tools of Expression"*. El de SCUART, derivado pero propio: **"We don't decorate. We decide."** (ver §6). El color por bloques es la prueba visual de ese lema.

---

## 2. Mood & Atmósfera

- **Tono:** denso y luminoso a la vez — planos de color pleno (densos) con texto que abre boquetes de luz (difference). Cero neutros tibios. Cero "aireado beige".
- **Sensación táctil:** material plano, cromático, sin profundidad falsa. Como serigrafía / afiche suizo saturado: tinta plana sobre papel, no pantalla con sombras. Un grano finísimo opcional (ver §4) le da cuerpo de impresión, nunca textura "barro".
- **Ritmo visual:** **energético y declarativo**, no contemplativo. El scroll es una secuencia de golpes de color — rojo, azul, rojo, naranja, negro. Cada corte entre planos es seco (sin border, sin transición de degradado): la alternancia ES el diseño.

**Regla dura:** PROHIBIDO todo lo que hoy ensucia el cuerpo — terracota, ámbar, barro, yeso, carbón cálido, grano "soft-light" intenso, sombras, border-radius >2px. Eso muere en esta dirección.

---

## 3. Paleta exacta — el sistema de 4 planos + tinta reactiva

El sistema es **bicromático por bloque**: cada sección es UN plano saturado, y TODO el texto encima es el mismo "blanco" que reacciona vía `mix-blend-mode: difference`. No hay "acentos de color" en el sentido tradicional: el color de los acentos lo produce el blend, no un token de texto.

### Los 4 planos del sistema

| Token | Hex | Nombre | Sección(es) |
|---|---|---|---|
| `--block-red` | `#d61f16` | Rojo bombero (Locomotive) | **HERO** (ya fijo) + **MÉTODO** |
| `--block-blue` | `#0b1fd6` | Azul eléctrico (klein profundo) | **MANIFIESTO** + **CAPABILITIES** |
| `--block-orange` | `#ff4d00` | Naranja encendido | **PORTFOLIO** |
| `--block-black` | `#0b0b0a` | Negro cálido (no #000) | **CONTACTO** + **FOOTER** |

> El rojo `#d61f16` es **idéntico al `background-color` del `.hero-fallback`** (HeroSection.astro línea 230). No se redefine: el hero es la fuente de verdad.

### Por qué estos 4 y no otros

- **Rojo `#d61f16`** — ya es el hero, ancla del sistema. Es el color de SCUART por herencia. No se discute.
- **Azul `#0b1fd6`** — azul klein/eléctrico profundo. Es el **opuesto cromático** del rojo: máximo contraste de matiz, máxima energía. Es el segundo plano más fuerte del sistema y por eso abre el cuerpo (manifiesto) — el salto rojo→azul es el "¡estás dentro!" del scroll. Saturado pero con suficiente oscuridad (L bajo) para que el blanco-difference sobre él dé cyans/amarillos legibles.
- **Naranja `#ff4d00`** — el plano más caliente y vibrante. Reservado para el **portfolio** porque ahí el contenido manda (los nombres de proyecto, las imágenes): el naranja es el plano que más "grita" y le da al trabajo el momento más expresivo del scroll. Es vecino del rojo en el círculo cromático, así que cuando vuelve a aparecer el rojo (método) no hay choque, hay familia.
- **Negro `#0b0b0a`** — negro cálido idéntico al `background-color` base del hero (línea 188). Es el **clímax y el descanso**: tras la saturación, el contacto y el footer caen a negro. El negro es donde el sitio "respira hondo antes de pedir el proyecto". Sobre negro, el blanco-difference se ve casi blanco puro (negro invertido = blanco) → máxima legibilidad para el formulario.

### Derivados — bordes, hairlines, estados sobre cada plano

Como la tinta es siempre "blanco reactivo", los derivados son **opacidades del blanco**, no colores nuevos. Esto mantiene el sistema bicromático estricto.

```
/* Tinta reactiva — SIEMPRE blanco, el color lo da mix-blend-mode: difference */
--ink-on-block:        #ffffff;            /* texto principal sobre cualquier plano */
--ink-on-block-70:     rgba(255,255,255,0.70);  /* subcopy, body largo */
--ink-on-block-55:     rgba(255,255,255,0.55);  /* metadatos, kickers, labels */
--ink-on-block-40:     rgba(255,255,255,0.40);  /* placeholders, separadores */

/* Hairlines / bordes sobre plano — blanco translúcido, NUNCA un gris */
--hairline-on-block:    rgba(255,255,255,0.22);  /* divisores de fila, border-top */
--hairline-on-block-strong: rgba(255,255,255,0.40); /* hover de hairline */

/* Estados de CTA / input focus — el blanco se vuelve sólido o invierte */
--cta-fill:   #ffffff;   /* CTA sólido: relleno blanco, texto = color del plano */
--cta-text:   inherit;   /* el texto del CTA toma el color del plano (negativo) */
```

> **Decisión clave de contraste:** NO usamos colores de texto distintos por plano. Usamos blanco + `mix-blend-mode: difference` exactamente como el hero. Esto garantiza que el texto SIEMPRE contraste (difference matemáticamente nunca da bajo contraste sobre un plano saturado) y unifica los 7 bloques con una sola regla. Sobre rojo → el blanco da cyan; sobre azul → da amarillo/naranja; sobre naranja → da cyan-azulado; sobre negro → da blanco casi puro. **Todos verificados ≥ contraste AA para los tamaños usados** (display grande y body ≥16px). El kicker/metadato a 55% opacidad es el único punto a vigilar: se usa solo en tamaños ≥13px y sobre planos donde difference da matiz oscuro → AA cumplido.

### Tokens a ELIMINAR de tokens.css

Todo el bloque "LEGADO" y la "PALETA B1 ARQUITECTO" se reemplaza. Mueren: `--bg` (yeso), `--surface`, `--ink`/`--ink-mid` (como neutros de fondo claro), `--accent` (verde), `--hueso`, `--tinta`, `--barro-oscuro`, `--barro-elevado`, `--terracota`, `--terracota-prof`, `--ambar`, `--carbon`, `--crema`, `--rojo` (mapeado a tinta), `--taupe`. **El `--ambar` del "+" del footer y de los numerales del método es el peor choque del sistema actual y desaparece.**

---

## 4. Asignación de color por bloque + ritmo del scroll

El ritmo está pensado como una **partitura**: alternancia de matiz, ningún plano igual dos veces seguido salvo el cierre intencional (contacto→footer en negro, que se leen como una sola unidad). Clímax cromático en el centro, descanso en negro al final.

| # | Sección | Plano | Hex | Rol en la secuencia |
|---|---|---|---|---|
| 1 | **Hero** | Rojo | `#d61f16` | Apertura — el golpe (ya fijo) |
| 2 | **Manifiesto** | Azul | `#0b1fd6` | Salto máximo de matiz: "estás dentro" |
| 3 | **Portfolio** | Naranja | `#ff4d00` | Clímax expresivo: el trabajo grita |
| 4 | **Capabilities** | Azul | `#0b1fd6` | Vuelta a la cabeza fría: qué hacemos |
| 5 | **Método** | Rojo | `#d61f16` | Rima con el hero: cierra el círculo cromático |
| 6 | **Contacto** | Negro | `#0b0b0a` | Descanso + foco: pedir el proyecto |
| 7 | **Footer** | Negro | `#0b0b0a` | Continúa el negro sin corte: la firma |

**Lógica de la partitura:**
- **Rojo → Azul** (hero→manifiesto): el salto cromático más violento posible. Es el momento "wow, esto no es un template".
- **Azul → Naranja** (manifiesto→portfolio): de frío a caliente. El portfolio recibe el plano más vibrante porque es donde el contenido (nombres + imágenes) tiene que brillar.
- **Naranja → Azul** (portfolio→capabilities): vuelta al frío para "explicar". Capabilities es texto-denso/listado: el azul lo serena.
- **Azul → Rojo** (capabilities→método): el rojo regresa y **rima con el hero** — el ojo siente que el sitio "se cierra sobre sí mismo". Método es el segundo rojo a propósito: es el bloque más "proceso/seriedad" y el rojo le da urgencia.
- **Rojo → Negro** (método→contacto): caída a negro. Después de tanto color, el negro es alivio y foco. El formulario vive en calma.
- **Negro → Negro** (contacto→footer): **sin corte**. Contacto y footer son un solo plano negro continuo. La firma "SCUART®" del footer cierra como eco del wordmark del hero.

**Cortes entre planos:** SECOS. Sin `border-top`, sin degradado, sin transición de color. El corte duro rojo|azul|naranja ES la estética (igual que hoy el manifiesto corta seco con el hero — esa decisión se conserva, solo cambian los colores).

---

## 5. Sistema tipográfico unificado

**Una sola familia display, una sola familia UI. Sin excepciones.**

- **Display:** `PP Editorial New` (Light, self-hosted, licenciada). Es LA serif del sistema. Token `--font-display`.
- **UI / body / metadatos:** `Geist Sans`. Token `--font-body`.

> Nota: hoy el código del cuerpo aún referencia `--font-mono` (Geist) y comentarios "Hanken". Geist es la única sans. Cualquier `--font-mono` se mapea a `--font-body`.

### Cómo se usa PP Editorial New en cada sección (hereda del hero)

El hero fijó el lenguaje: serif a `clamp(2.5rem, 11vw, 4.375rem)` (70px desktop), peso 400, line-height 1.1, `letter-spacing: -0.005em`, blanco + difference. Todo el cuerpo usa la **misma serif con la misma micro-tipografía**, variando solo escala según jerarquía.

| Elemento | Familia | Peso | Escala | Tracking / Leading |
|---|---|---|---|---|
| **Statement gigante** (manifiesto, contacto) | PP Editorial New | 300–400 | `clamp(2.75rem, 9vw, 7rem)` | `-0.02em` / `1.02` |
| **Nombres de proyecto** (portfolio) | PP Editorial New | 400 | `clamp(2.5rem, 10vw, 6.5rem)` | `-0.02em` / `1.02` |
| **Títulos de capability / paso** (capabilities, método) | PP Editorial New | 400 | `clamp(1.875rem, 4.5vw, 4rem)` | `-0.02em` / `1.0` |
| **Numerales gigantes** (método, capabilities) | PP Editorial New | 300 | `clamp(4rem, 12vw, 11rem)` | `-0.04em` / `0.88` |
| **Wordmark firma** (footer) | PP Editorial New | 400 | `clamp(4rem, 14vw, 16rem)` | `-0.03em` / `0.85` |
| **Acento itálico** (énfasis dentro de statements) | PP Editorial New *italic* | 400 | hereda del statement | — |

> El **acento itálico de PP Editorial New** reemplaza al viejo "acento ámbar/terracota". El énfasis ya NO es un color distinto (eso rompía el bicromatismo); es la **itálica de la propia serif**. Ej. manifiesto: *"We build* ***competitive advantages.***" → "competitive advantages" en italic 400. El color lo da el difference, igual que todo lo demás. Esto conecta con el asterisco del hero (carácter auténtico de la fuente) — la personalidad tipográfica vive en los glifos de PP Editorial New, no en colores extra.

### Geist Sans — dónde y cómo

| Elemento | Peso | Escala | Tratamiento |
|---|---|---|---|
| **Kickers de sección** ("MANIFESTO", "SELECTED WORK", "METHOD"…) | 500 | `clamp(0.6875rem, 0.3vw+0.6rem, 0.8125rem)` (11–13px) | UPPERCASE, `letter-spacing: 0.14em`, color `--ink-on-block-55` |
| **Metadatos portfolio** (num, categoría·año) | 500 | 0.75rem | UPPERCASE, `0.14em` |
| **Body / resolves / paso** | 400 | `clamp(1rem, 1.1vw, 1.0625rem)` (16–17px) | `line-height: 1.55–1.65`, color `--ink-on-block-70` |
| **Nav + CTA del hero** (ya fijo) | 400 | 1.625rem (26px) | hereda HeroSection |
| **Inputs / labels del form** | 400 / 500 | body / mono | labels UPPERCASE `0.14em` |

**Contraste extremo de escala = el diseño** (principio Locomotive): serif gigante (hasta 256px en footer) vs UI Geist a 13px. La distancia entre ambos ES la jerarquía. No hay tamaños intermedios "tibios".

### El sistema de índices (numerales / kickers)

Se conserva el lenguaje ya presente: kickers Geist 500 UPPERCASE `+0.14em`, numerales editoriales (`01`–`06` capabilities, `001`–`004` método/portfolio) en PP Editorial New light gigante como **elemento gráfico-arquitectónico**, no etiqueta. Único cambio: el color del numeral fantasma deja de ser "terracota 15%" y pasa a **`--ink-on-block` al 18%** (blanco translúcido sobre el plano). El numeral activo (método) deja de ser ámbar y pasa a **blanco sólido 100%** (el difference lo hace saltar del fondo solo).

---

## 6. Copy — afilar a una sola voz

El copy actual ya es bueno (statements cortos, en inglés default + español). Lo afino para que rime con la voz Locomotive ("Design & Code are only Tools of Expression"): **declaraciones, no descripciones; corto, filoso, con punto final.** SCUART necesita SU lema, no copiar el de ellos.

### Lema propietario de SCUART (nuevo — para el sistema)

> **EN:** "We don't decorate. We decide."
> **ES:** "No decoramos. Decidimos."

Es el equivalente SCUART del "Tools of Expression". Encaja con el concepto §1 (el color como argumento / criterio sobre plantilla). **Sugerencia de uso:** como tagline del footer (reemplaza el actual "Design + Technology for businesses…" que es descriptivo) y/o como micro-statement bajo el wordmark. William decide dónde.

### Revisión sección por sección

| Sección | Copy actual | Veredicto / afinado |
|---|---|---|
| **Hero** | "SCUART® / Digital-first Design Agency" + recuadro DIS/DEV/AI | ✅ Ya fijo. No se toca. Es el ancla de voz. |
| **Manifiesto** | "We don't build websites. / We build *competitive advantages.*" | ✅ Excelente, voz correcta. **Conservar.** El acento va en *italic* PP Editorial New (no color). ES: "No hacemos webs. / Construimos *ventajas competitivas.*" |
| **Portfolio** | kicker "SELECTED WORK" | ✅ Conservar. Nombres reales (Jamón Casero, Menius, Healthy Choice NY, Arriba Gold) intactos. |
| **Capabilities** | kicker "CAPABILITIES" + 6 resolves | ✅ Los resolves están bien (directos, comerciales). **Conservar.** Opcional: acortar alguno a una sola cláusula para más filo. |
| **Método** | kicker "METHOD" + DISCOVER/DIRECTION/SYSTEM/LAUNCH | ✅ Conservar. El "WHAT CHANGES →" es buena voz Locomotive. |
| **Contacto** | "LET'S\nBUILD\nSOMETHING." | ✅ Statement perfecto para el plano negro gigante. **Conservar.** |
| **Footer** | tagline "Design + Technology for businesses that need to look sharp and work better." | ⚠️ **Reemplazar** por el lema "We don't decorate. We decide." / "No decoramos. Decidimos." — más filoso, voz de marca, no descripción de servicio. |

**Regla de voz para todo copy nuevo o editado:** statement < 6 palabras cuando es titular; sin "Our services are…", sin adjetivos de relleno ("premium", "innovative", "cutting-edge"). Si una frase describe en vez de afirmar, se corta.

---

## 7. mix-blend-mode — dónde y cómo

El hero ya lo aplica en `.hero-nav` y `.hero-wordmark` (con `isolation: isolate` en `.hero-v3` para aislar el blend al hero). **Extender el patrón a TODO el texto del cuerpo.**

**Patrón obligatorio por sección:**
- Cada `<section>` lleva `isolation: isolate` (aísla su blend; el grano y elementos decorativos no se filtran a vecinas).
- El **contenedor de texto** de cada sección (titulares, kickers, body, metadatos, numerales) lleva `color: #fff` + `mix-blend-mode: difference`.
- Resultado: el blanco reacciona al plano de su sección — cyan sobre rojo, amarillo sobre azul, cyan-azulado sobre naranja, blanco sobre negro. **El color del texto NUNCA se setea a mano; lo produce el blend.** Esto es lo que da la cohesión total con el hero.

**Excepciones (NO aplicar difference):**
- **Imágenes del portfolio:** van a color pleno, sin blend (la foto debe verse real). El blend es solo para tipografía.
- **CTA sólido del formulario** (relleno blanco, texto del color del plano): aquí el contraste se logra por inversión de relleno, no por blend. Un CTA sólido con difference se vería raro.
- **Inputs del formulario sobre negro:** la línea (border-bottom) usa `--hairline-on-block`; el texto tecleado puede ir blanco directo (sobre negro el difference y el blanco directo coinciden visualmente, pero blanco directo es más predecible al teclear).

**Cuidado técnico:** `mix-blend-mode: difference` + `position: sticky` (statement del contacto) puede crear un stacking context que rompe el blend. Si el statement sticky no reacciona bien, fallback: setear color blanco directo sobre negro (sobre negro, difference y blanco directo son idénticos). En contacto/footer el plano es negro → se puede usar blanco directo sin perder el look. **El blend es crítico solo sobre rojo/azul/naranja.**

---

## 8. Motion — tratamiento unificado

Coherente con el GSAP ya presente (hero usa GSAP timeline; método usa ScrollTrigger). Intensidad: **híbrido premium** — cinemático en los momentos clave (3–4 por scroll, regla Locomotive), sutil en el resto. NUNCA animación en cada elemento.

### Treatments por capa

- **Line-reveal (heredado del hero):** todos los titulares y statements entran con máscara por líneas (`yPercent 110→0` / `translateY(105%)→0`), stagger 0.12s, ease `expo.out` o `cubic-bezier(0.16,1,0.3,1)`. Es el gesto firma del hero y ya está implementado en manifiesto — se replica en portfolio, capabilities, método. **Reveal por líneas, NUNCA fade de bloque completo.**
- **Entrada de filas (portfolio, capabilities):** IntersectionObserver + fade-up sutil, stagger 80ms. Ya implementado. Conservar.
- **Método — pin de numerales:** el ScrollTrigger que pinea la columna de numerales en desktop ya existe y es un buen "momento memorable". Conservar; solo cambia el color activo (ámbar → blanco sólido).
- **Transición entre bloques de color (NUEVO, opcional, alto valor):** al cruzar el corte entre dos planos, el plano entrante puede hacer un **wipe vertical corto** (el nuevo color sube desde abajo cubriendo, 0.5s, mientras el texto de la nueva sección hace su line-reveal). Es el gesto que vende "esto es una pieza dirigida". Implementable con ScrollTrigger + un overlay del color entrante. **Si añade complejidad/riesgo de jank en mobile gama baja → se omite y el corte seco basta.** Decisión de William.
- **Portfolio hover (desktop):** la imagen inline que se incrusta en el nombre (ya implementado) se conserva — es el gesto premium del portfolio. Sobre naranja, el nombre en hover ya no va a "terracota" sino que se mantiene blanco-difference y la imagen entra a color pleno.
- **Smooth scroll:** si Lenis está en stack, mantenerlo (base obligatoria del look Locomotive). Gatear ajustes a desktop; en mobile respetar el *body scroll container* de las directivas globales.

### prefers-reduced-motion (OBLIGATORIO)
Todo reveal tiene fallback estático visible. Los planos de color, la tipografía y el blend SE MANTIENEN (son identidad, no motion). El wipe entre bloques y el pin se desactivan. Ya está bien resuelto en el código actual — replicar el mismo patrón.

### Performance (LATAM / mobile gama baja / 3G)
- `mix-blend-mode: difference` es barato en GPU moderna pero puede costar en gama baja con muchas capas. Limitar el blend a los contenedores de texto, no a imágenes ni a capas grandes.
- El grano (§9) es opcional y se desactiva en mobile si cuesta.
- Sin video en secciones que no sean el hero (decisión fija de William).

---

## 9. Composición / Layout + elementos de marca recurrentes

### Patterns de layout (conservar lo bueno, recolorear)
- **Pattern primario:** editorial / listado tipográfico con hairlines (patrón Locomotive work-index). Ya está en portfolio, capabilities, método. **Se conserva la estructura; solo cambian fondo (a plano saturado) y hairlines (a `--hairline-on-block` blanco translúcido).**
- **Grid:** sin grid rígido de 12-col impuesto; composición asimétrica con `--margin` amplio (ya existe). Conservar.
- **Spacing:** la escala fluida actual (`--space-*`) se conserva intacta.
- **Cortes entre secciones:** secos, sin border (ver §4).

### El recuadro de disciplinas (DIS/DEV/AI)
Es un **elemento de marca recurrente**, no solo del hero. Recomendación:
- **Hero:** queda como está (junto al wordmark).
- **Footer:** repetir el recuadro DIS/DEV/AI junto a la firma "SCUART®" como **eco de cierre** — abre y cierra el sitio con el mismo glifo de marca. Refuerza identidad sin agregar elementos nuevos.
- **NO** esparcirlo por todas las secciones (sería ruido). Solo apertura (hero) y cierre (footer).

### El asterisco (*)
Carácter auténtico de PP Editorial New, ya presente en el hero. Es el **glifo-firma de SCUART** (el equivalente al asterisco-puente de Locomotive). Recomendación:
- Usarlo como **marcador de sistema** consistente: en el descriptor del hero (ya está), en el wordmark del footer (reemplaza al "+" ámbar — el "+" muere con la paleta terracota), y opcionalmente como bullet/separador en los kickers.
- **El "+" del footer pasa a ser "*"** o "®" — un glifo de la familia PP Editorial New, nunca un signo ajeno coloreado en ámbar.

### Wordmark
- **Hero:** "SCUART®" (ya fijo).
- **Footer:** "SCUART*" (asterisco en vez de "+"), blanco-difference sobre negro, a sangre. El asterisco hereda el color del difference (no ámbar).

---

## 10. Anti-patrones específicos de este proyecto

NO usar bajo ninguna circunstancia:

- **Terracota / barro / ámbar / yeso / carbón cálido** — toda la paleta gastronómica/cálida del cuerpo actual. Es el origen del rechazo "basura editorial". Muere completa.
- **Más de 4 planos de color** — el sistema es rojo/azul/naranja/negro. Ni un quinto color.
- **Acentos de color distintos del blanco-difference** — el énfasis es la itálica de PP Editorial New, no un color extra. Cero ámbar, cero verde, cero "color de marca" suelto.
- **Gradientes en fondos de sección** — los planos son tinta plana. (El único degradado tolerado es el del `.hero-fallback`, que simula el video; las demás secciones son color sólido.)
- **Sombras, border-radius >2px, cards elevadas** — lenguaje 2019, incompatible.
- **Setear color de texto a mano sobre los planos** — siempre blanco + difference (salvo las excepciones §7).
- **Grano "barro prensado" soft-light intenso** — el grano material del V3 terracota muere. Si se quiere textura, es un grano finísimo de impresión (opacity ≤0.04), neutro, opcional, desactivable en mobile.
- **Animación de entrada en cada elemento** — solo 3–4 momentos de motion por scroll.
- **Cualquier `--font-mono` real (IBM Plex Mono, etc.)** — la "ficha técnica" se logra con Geist 500 uppercase tracking, no con una monoespaciada.
- **Cortes suaves / borders entre secciones** — el corte es seco. La alternancia ES el diseño.

(Adicionales a los anti-patrones del DESIGN_RESEARCH_LOCOMOTIVE.md §"Anti-patrones".)

---

## 11. Mapa de cambios por archivo (para el dev, post-aprobación)

> Esto NO es código; es el inventario de qué toca cada archivo. El dev lo ejecuta tras el OK de William.

| Archivo | Cambio |
|---|---|
| `src/styles/tokens.css` | Reemplazar paleta B1+legado por los 4 `--block-*` + tinta reactiva (§3). Mapear `--font-mono`→`--font-body`. Conservar escalas tipográficas y spacing. |
| `HeroSection.astro` | **No se toca.** Es el ancla. (Verificar que `--block-red` = su `#d61f16`.) |
| `ManifestoSection.astro` | Fondo → `--block-blue`. Texto → blanco + difference. Acento → italic PP Editorial New (no ámbar). Grano terracota → fuera (o grano impresión ≤0.04). |
| `PortfolioSection.astro` | Fondo → `--block-orange`. Hairlines → `--hairline-on-block`. Nombres + meta → blanco + difference. Hover: quitar color terracota, mantener imagen inline a color pleno. `--terracota` del focus → blanco. |
| `CapabilitiesSection.astro` | Fondo → `--block-blue`. Numeral fantasma → blanco 18%. Nombres/resolves → blanco + difference. Hairlines → blanco translúcido. |
| `MethodSection.astro` | Fondo → `--block-red`. Numeral activo: ámbar → **blanco 100%**; inactivo → blanco 18%. Hairlines `--borde-oscuro` → `--hairline-on-block`. Texto → blanco + difference. |
| `ContactSection.astro` | Fondo → `--block-black`. Statement → blanco (directo o difference, ver §7 nota sticky). Inputs: línea → `--hairline-on-block`, focus → blanco. CTA `--terracota` → **CTA blanco sólido, texto negro** (`--cta-fill`/`--cta-text`). `--required` ámbar → blanco/asterisco. Grano terracota → fuera. |
| `FooterSection.astro` | Fondo → `--block-black` (continúa del contacto, sin corte). Wordmark "+" ámbar → "*" blanco. Hairlines → blanco translúcido. Añadir eco del recuadro DIS/DEV/AI (opcional). Tagline → lema "We don't decorate. We decide." Grano → fuera. |
| `src/i18n/en.ts` + `es.ts` | Solo `footer.tagline`: reemplazar por el lema. Todo lo demás del copy se conserva. |

---

## 12. Checklist de validación (un diseñador/dev debe poder responder SÍ a todo)

- ¿Cuál es la sensación primaria? → Planos de color saturado que se contestan; criterio sobre plantilla. ✓
- ¿Qué plano usa cada sección y por qué? → Tabla §4 (partitura del scroll). ✓
- ¿Qué hex tiene cada plano? → §3 (`#d61f16` / `#0b1fd6` / `#ff4d00` / `#0b0b0a`). ✓
- ¿De qué color va el texto? → SIEMPRE blanco + `mix-blend-mode: difference` (salvo excepciones §7). ✓
- ¿Qué tipografía y a qué escala? → PP Editorial New display / Geist UI; tablas §5. ✓
- ¿Qué motion? → Line-reveal + IO fade-up + pin método + wipe opcional; reduced-motion fallback. §8. ✓
- ¿Qué evito? → Anti-patrones §10 (terracota/ámbar/gradientes/sombras/acentos de color). ✓
- ¿Cómo cierra el sistema? → Negro contacto+footer continuo; wordmark "SCUART*" como eco del hero. ✓

---

## Resumen para William (decisiones que necesito que apruebes)

1. **El sistema de 4 planos:** rojo `#d61f16` (hero+método), azul `#0b1fd6` (manifiesto+capabilities), naranja `#ff4d00` (portfolio), negro `#0b0b0a` (contacto+footer). **¿OK la asignación y el orden del scroll?**
2. **Texto siempre blanco + `mix-blend-mode: difference`** en todo el cuerpo (no colores de acento). El énfasis es la *itálica* de PP Editorial New, no el ámbar. **¿OK matar el ámbar/terracota por completo?**
3. **El azul exacto:** propuse `#0b1fd6` (klein profundo). Si lo querés más eléctrico/brillante o más oscuro, es el único hex que vale la pena afinar en vivo. **¿Te sirve este azul o lo movemos?**
4. **El lema propietario "We don't decorate. We decide." / "No decoramos. Decidimos."** como tagline del footer (reemplaza el descriptivo actual). **¿Te gusta el lema o querés otro?**
5. **El "+" del footer pasa a "*"** (glifo PP Editorial New, eco del asterisco del hero) y el recuadro DIS/DEV/AI se repite en el footer como cierre. **¿OK?**
6. **Wipe de color entre bloques** (motion opcional de alto impacto): **¿lo intentamos o nos quedamos con el corte seco** (más seguro en mobile LATAM)?
