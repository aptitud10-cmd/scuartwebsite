# ART DIRECTION V5 — "Design with Intent"

**Fecha:** 2026-06-23
**Director:** director-creativo (Opus 4.8)
**Cliente:** SCUART — agencia digital propia (William Cuartas, Bogotá, LATAM)
**Branch:** redesign-v3
**Reemplaza como fuente de verdad estética a:** `ART_DIRECTION_V4_RESTRINGIDO.md`, `ART_DIRECTION_LOCOMOTIVE_UNIFICADO.md`, `ART_DIRECTION_STUDIO_V2.md`, `ART_DIRECTION_STUDIO_CONTACT_FOOTER.md`
**Estado:** PROPUESTA — no se implementa nada sin OK explícito de William (memoria: nunca tocar composición sin que él la vea antes).

> **Método de este documento.** No partí de las versiones anteriores ni de las tendencias. Partí del ADN que William definió y bajé a decisiones. Después leí el código real (`tokens.css`, `HeroSection.astro`, `ManifestoSection.astro`, `PortfolioSection.astro`, `StudioSection.astro`) y los dos screenshots (`opinion-desktop-full.png`, `opinion-mobile-full.png`) para anclar cada decisión a lo que el sitio RENDERIZA hoy, no a lo que los docs viejos dicen que renderiza. Cuando un doc viejo contradice el código, gana el código y lo nombro. Cada elemento pasó por una sola pregunta: **¿refuerza el ADN o es decoración?**

---

## El conflicto de raíz que esta V5 cierra (lo nombro antes de todo)

Hay una mentira heredada en el repo y hay que matarla para que el dev no tropiece:

**Los docs V4 y Locomotive declaran CUERPO OSCURO (`#0E0E0C` de punta a punta). El código real es CUERPO CLARO.** `tokens.css` tiene `--bg: #f4f2ec` (hueso claro), `--ink: #14130f` (tinta casi-negra), y un comentario que dice *"PRUEBA BLANCO (como Locomotive)"*. El screenshot lo confirma: el cuerpo es crema, no negro. Y el `--brand` real es **lima `#c6f24e` (la opción D · "Volt" del V4)**, no el naranja "Yema" que el director recomendó en V4 §3. El comentario de `tokens.css` además fija `--accent-text: var(--ink)` — o sea: el lima NO se usa como tinta de texto (sobre crema no contrasta), exactamente como Locomotive usa el rojo solo como acento puntual, no como color de letra.

**Decisión V5: el código gana. El sitio es CLARO + lima.** El ADN no pide oscuro ni claro — pide *intención y diferenciación*. Y el camino claro + lima ya es la decisión más diferenciadora y la más coherente con el ground truth implementado. No vamos a re-litigar oscuro vs. claro: William ya lo decidió con el código. Esta V5 ratifica el sistema claro + lima y lo somete entero al filtro del ADN. Los docs que dicen "oscuro" quedan **obsoletos** y se nombran como descartados abajo.

---

## Concepto central

**"Cada elemento gana su lugar o no existe."** El sitio no se decora: se argumenta. Lo que ves está porque mejora confianza, conversión, claridad o memoria de marca — y lo que no, no está. El vacío y la restricción no son estética: son la prueba visible de que SCUART decide.

Una sola frase operativa que todo lo demás sirve: **el espacio en blanco es el argumento; el lima es la firma de una decisión; la serif gigante es la voz.** Tres recursos, cero ruido. Si un cuarto recurso quiere entrar, tiene que desplazar a uno de estos tres, no sumarse.

---

## Qué descartamos y por qué

Cada uno es decoración, tendencia, o contradice el ADN. Por nombre:

1. **Cuerpo oscuro `#0E0E0C` de punta a punta** (V4 §4.1, Locomotive Unificado §3). DESCARTADO. Contradice el código real (`--bg: #f4f2ec`). "Dark = premium" es tendencia (research §"Dark vs Light"), no intención. El sitio claro + lima ya está implementado y es MÁS diferenciador (la mayoría de agencias premium van oscuras; ir claro con disciplina es la decisión menos esperada). El oscuro era una apuesta de moda; el claro es la decisión.

2. **El sistema de 4 planos de color saturado** (rojo/azul/naranja/negro, Locomotive Unificado entero). DESCARTADO — el propio V4 ya lo había matado por la razón correcta: "cuatro saturados peleando no se lee como criterio, se lee como inseguridad". Es el cliché del diseñador mostrando el color-picker. Contradice frontalmente *"design with intent, not templates"*.

3. **`mix-blend-mode: difference` en el cuerpo** (Locomotive Unificado §7). DESCARTADO. En el cuerpo claro no aporta nada (es complejidad GPU gratis, peor en mobile gama baja LATAM, riesgo de stacking-context con sticky). El blend se queda EXCLUSIVAMENTE en el hero, sobre el video. Esto no es decoración eliminada por gusto: es performance, y la performance en mobile LATAM es parte del ADN (LATAM elevada = funciona en el teléfono real de la región).

4. **La columna de medición / lomo lateral rotado de Studio** (`ART_DIRECTION_STUDIO_CONTACT_FOOTER.md` §1.1). DESCARTADO. El propio segundo doc de Studio (V3) ya lo había rechazado por introducir un segundo eje óptico que pelea con el eje central del cuerpo. Un kicker rotado 90° es un gesto de "agencia que quiere verse de agencia" — decoración con coartada editorial. El cuerpo de scuart.com es de **eje central** (Manifiesto sangrado, Portfolio `text-align: center`, Contacto centrado, Footer centrado): meterle un lomo lateral lo rompe.

5. **El numeral fantasma gigante detrás del nombre** (`clamp(...,9rem)`, `--ink-18`, código actual de Studio). DESCARTADO. Es marca-de-agua decorativa: ocupa peso visual sin agregar información. Un número de catálogo ordena, no grita. Pasa a metadata mono pequeña.

6. **El "split educado" del contacto** (statement col 1-5 / form col 7-12). DESCARTADO como default. Es "el split que hace todo el mundo" — template. Lo reemplaza el statement que domina arriba y el form sobrio debajo (concepto que SÍ sobrevive del doc de Contacto, ver abajo).

7. **El hairline kicker full-width arriba de cada sección.** DESCARTADO transversalmente. Es el tic que hace que las tres secciones finales se sientan idénticas: "el ojo aprende el patrón y deja de mirar". Repetir un patrón hasta volverlo invisible es lo opuesto a la intención.

8. **El énfasis por color (palabra en lima dentro de un statement)** como opción abierta (V4 §4.2.1 lo dejaba a elección). DESCARTADO como ambigüedad. Se cierra: **el énfasis es SIEMPRE itálica de PP Editorial New; el lima es SIEMPRE acción/inscripción, nunca énfasis semántico.** Una regla, no un menú. Un menú A/B en un doc de dirección es el director no decidiendo — exactamente lo que el ADN prohíbe.

9. **Los menús "camino A / camino B" y "¿lo intentamos o no?"** que arrastran los docs viejos (V4 §9 entero, Locomotive §"Resumen", Studio V2). DESCARTADOS como formato. Este documento entrega decisiones, no opciones. Donde falta input real de William (copy que solo él puede escribir), lo marco como `[PENDIENTE: requiere input de William]` — eso es un gap honesto, no un menú estético.

10. **El recuadro DIS/DEV/AI repetido en el footer** (Locomotive Unificado §9). DESCARTADO. Repetir el glifo de apertura en el cierre suena a simetría elegante pero es redundancia: el wordmark `SCUART*` ya firma el cierre. Dos firmas diluyen. El recuadro vive SOLO en el hero (apertura), una vez.

---

## Qué conservamos y por qué

Cada uno pasa el filtro "¿refuerza el ADN?" — y varios ya están en el código y son buenos:

1. **Cuerpo claro crema + tinta casi-negra + lima como único color** (`tokens.css` real). CONSERVADO. Es el sistema más restrictivo posible: 1 fondo, 1 tinta, 1 acento. Restricción = intención. Y diferencia (agencias premium = oscuras; SCUART claro es la decisión rara).

2. **El lima `#c6f24e` como bisturí, <8% de superficie, jamás fondo de sección, jamás tinta de body** (V4 §4.2, confirmado en código con `--accent-text: var(--ink)`). CONSERVADO y endurecido. El lima es la firma de una decisión: aparece donde algo es accionable o donde una afirmación se inscribe. En ningún otro lado.

3. **PP Editorial New light gigante como voz + Geist Sans como sistema técnico** (código real, todas las secciones). CONSERVADO. La serif es la voz de autor; la sans mono-uppercase es la ficha técnica. El contraste extremo de escala entre ambas ES la composición. Esto es lo que separa a SCUART de un template de Webflow con Inter en todo.

4. **El hero video full-bleed oscuro con `mix-blend-mode: difference` y wordmark abajo-izquierda** (`HeroSection.astro` real). CONSERVADO INTACTO. Es el ancla. Es la única "portada" oscura; el cuerpo es el documento claro. El contraste portada-oscura / cuerpo-claro es intencional y se siente dirigido (el corte del cine al papel).

5. **El recuadro de disciplinas DIS/DEV/AI + el asterisco `*` como glifos de marca** (hero). CONSERVADOS. El asterisco es el equivalente SCUART del puente tipográfico de Locomotive: identidad en un glifo de la propia fuente, no en un logo agregado. Vive en el hero y en el wordmark del footer (`SCUART*`).

6. **El eje central del cuerpo** (Manifiesto, Portfolio, Contacto, Footer todos centrados — verificado en código). CONSERVADO. Es la unidad de autor. Toda sección del cuerpo comparte ese eje. Studio se suma a él (no inventa lomo lateral).

7. **El mask-reveal por líneas como gesto firma de motion** (hero + manifiesto, código real). CONSERVADO. Es el único gesto de entrada del sitio, repetido con disciplina. Type-as-event.

8. **El gesto del portfolio: imagen incrustada inline dentro del nombre en hover** (`PortfolioSection.astro`). CONSERVADO. Es el momento premium del scroll y ya está bien resuelto. Hover → el nombre vira a lima + la imagen entra a color pleno.

9. **El statement gigante que domina el contacto** (idea del doc de Contacto §2.1, despojada del split). CONSERVADO. `EMPECEMOS.` como evento; el form sobrio debajo. Emoción arriba, ejecución abajo — el contraste ES la composición.

10. **El lema "No decoramos. Decidimos." / "We don't decorate. We decide."** (Locomotive Unificado §6). CONSERVADO como tagline del footer. Es la traducción verbal exacta del concepto central. La forma del sitio tiene que probar este lema, no desmentirlo.

11. **El wordmark `SCUART*` gigante a sangre como horizonte del footer** (código + screenshot). CONSERVADO. Cierra el sitio como eco del wordmark del hero.

---

## Tipografía

Sistema de **dos familias, sin excepción.** La justificación contra el ADN: un sistema de dos familias con contraste extremo de escala dice "tenemos un punto de vista tipográfico"; tres o más familias dicen "no nos decidimos". Y Inter/Roboto/Poppins en todo es la firma del template — exactamente lo que el ADN combate.

### Display — `PP Editorial New` (Light 300)
- **Rol:** la VOZ. Statements, nombres de proyecto, títulos de capacidad, `EMPECEMOS.`, wordmark `SCUART*`, la itálica de énfasis.
- **Por qué contra el ADN:** una serif de autor (Pangram Pangram, licenciada, self-hosted) en peso Light a tamaño gigante es lo opuesto a la sans corporativa genérica. Light en grande = elegancia con seguridad: no necesita gritar con peso bold. Es "LATAM al nivel global" — la misma tipografía que usaría un estudio de Montreal o Londres, usada con la misma frialdad.
- **El asterisco `*`** es carácter auténtico de la fuente — el glifo-firma. No es un signo agregado.
- **La itálica de PP Editorial New es el ÚNICO recurso de énfasis** dentro de los statements. Nunca bold, nunca mayúsculas extra, nunca color.

### Body / UI / metadatos — `Geist Sans`
- **Rol:** la FICHA TÉCNICA. Kickers, labels de form, body de lectura, créditos, numerales de metadata, nav, CTA.
- **Por qué contra el ADN:** Geist es neutra, precisa, "de ingeniería" — el contrapunto frío de la serif emocional. Mono-uppercase con tracking abierto (`0.14em`) lee como especificación técnica, no como decoración. Comunica el lado DEV/AI del estudio sin un solo ícono.
- **Nunca** una monoespaciada real (IBM Plex Mono etc.): el efecto "técnico" se logra con Geist 500 uppercase + tracking, no con una tercera familia.

### Mono
- **No aplica.** No hay tercera familia. Donde un doc viejo dijo "mono", se entiende **Geist 500 uppercase tracking `0.06–0.14em` con `tabular-nums`**. Eso es la "mono" del sistema. Cero familias extra.

### Jerarquía de pesos y tamaños por sección
(Anclada a los tokens reales de `tokens.css` — no invento escalas nuevas, salvo el único token nuevo que se nombra explícitamente abajo.)

| Elemento | Familia | Peso | Tamaño (token / clamp) | Tracking · Leading |
|---|---|---|---|---|
| Wordmark hero (2 líneas) | PP Editorial New | 400 | `clamp(2.5rem, 11vw, 4.375rem)` | `-0.005em` · 1.1 |
| Statement manifiesto | PP Editorial New | 300 | `clamp(2rem, 5.5vw, 4.5rem)` | `-0.025em` · 1.02 |
| Nombre proyecto (portfolio) | PP Editorial New | 300 | `clamp(3rem, 12vw, 3.5rem)` | `-0.02em` · 1.02 |
| Declaración de capacidad (studio) | PP Editorial New | 300 | `clamp(1.75rem, 7vw, 6rem)` | `-0.03em` · 0.95 |
| Título de paso (proceso) | PP Editorial New | 300 | `clamp(2.5rem, 6vw, 5rem)` | `-0.025em` · 1.0 |
| `whatChanges` / tagline / énfasis | PP Editorial New *italic* | 400 | hereda del contexto | — |
| Statement contacto `EMPECEMOS.` | PP Editorial New | 300 | `clamp(2.75rem, 12vw, 9rem)` — **token NUEVO `--text-empecemos`** (el dev debe agregarlo a `tokens.css`; ver nota ↓) | `-0.04em` · 0.85 (1 línea, `white-space: nowrap`) |
| Wordmark footer `SCUART*` | PP Editorial New | 300 | `clamp(5.5rem, 20vw, 16rem)` | `-0.04em` · 0.82 (1 línea, `white-space: nowrap`) |
| Kicker de sección | Geist | 500 | `--text-mono` (11–13px) | `0.14em` uppercase |
| Numeral metadata `01·` | Geist | 400 | `--text-mono` | `0.06em` · `tabular-nums` |
| Body / resolves | Geist | 400 | `--text-body` (16–17px) | normal · 1.55–1.6 |
| Labels form / nav / CTA | Geist | 500 | `--text-mono` / 26px (hero) | `0.14em` uppercase |

**Regla dura:** no existen tamaños "tibios" intermedios. O es serif gigante (la voz) o es Geist 11–17px (la ficha). El salto de escala de ~6× entre ambos ES la jerarquía. Un tamaño intermedio diluye el sistema y lee a template.

#### Token nuevo `--text-empecemos` — por qué existe y por qué NO es `--text-cta`
El token real en `tokens.css` es `--text-cta: clamp(2.5rem, 10vw, 8rem)` y se usa para el **relleno del CTA del contacto** (`ENVIAR BRIEF →`), no para el statement. `EMPECEMOS.` es el **evento emocional clímax** del cuerpo: necesita techo más alto (`9rem` = 144px en desktop, a la altura del wordmark del hero) y aceleración más agresiva (`12vw`) que el botón. Reusar `--text-cta` aplastaría el statement al tamaño del botón — y el statement y el botón NO son la misma jerarquía (uno es la voz, el otro es la ficha de acción). Por eso:

```css
/* tokens.css — agregar bajo --text-cta */
--text-empecemos: clamp(2.75rem, 12vw, 9rem); /* statement clímax de contacto, 1 línea garantizada en 375px */
```

- **Verificación 375px (1 línea):** `EMPECEMOS.` son 10 glifos. En 375px, `12vw` = 45px; el `min` de `2.75rem` = 44px domina. A 44px en PP Editorial New Light, 10 glifos con tracking `-0.04em` miden ~235–250px de avance horizontal. El ancho usable a 375px con `--margin` mínimo (`1.25rem` = 20px por lado) es ~335px. Entra holgado en una línea. El `min` se fijó deliberadamente en `2.75rem` (no `4.5rem` como decía la versión vieja) precisamente para garantizar esa única línea: a `4.5rem` (72px) los 10 glifos rondarían ~385px y se desbordarían a dos líneas en 375px, exactamente lo que el leading 0.85 NO está preparado para sostener.
- **`white-space: nowrap` obligatorio** como seguro: el statement es de una sola línea SIEMPRE, en todos los viewports. El `nowrap` impide cualquier wrap accidental si el copy cambiara; si algún día el statement fuera más largo que `EMPECEMOS.`, se replantea el tamaño, no se permite el wrap.
- **Leading 0.85:** como el statement es de una sola línea, el `line-height` no genera espaciado entre líneas — es visualmente irrelevante para la colisión de ascendentes/descendentes. Se mantiene 0.85 sólo para que la caja de línea quede ceñida al texto (control de la altura del bloque y del aire que lo rodea), no por interlineado. No hay riesgo de colisión porque no hay segunda línea.

#### Leadings sub-0.85 — verificación explícita de colisión
La regla del sistema: **cualquier titular serif que pueda ser multilínea tiene leading ≥ 0.90** para evitar que los ascendentes de PP Editorial New Light (que en Light son delgados y altos, con remates que suben) choquen con los descendentes de la línea anterior. Los dos únicos elementos con leading sub-0.85 son, por diseño, de **una sola línea** y por eso conservan su leading apretado:

- **`EMPECEMOS.` (contacto), leading 0.85** — 1 línea siempre (`white-space: nowrap`, clamp verificado arriba). Sin segunda línea no hay colisión posible.
- **Wordmark footer `SCUART*`, leading 0.82** — 7 glifos, 1 palabra, 1 línea siempre (`white-space: nowrap`). El `min` de `5.5rem` (88px) con `20vw` en 375px = 75px, dominando el min; 7 glifos a 88px ≈ 290–310px, entra a sangre dentro del viewport (el wordmark va full-bleed, sin `--margin`, tocando ambos bordes a propósito — es el horizonte). Sin segunda línea no hay colisión.

**Conclusión:** ninguno de los dos leadings sub-0.85 toca multilínea, por lo tanto no se sube ninguno. Si en algún rediseño futuro cualquiera de los dos dejara de ser de una línea, ese leading sube a ≥0.90 antes de permitir el wrap. Queda escrito como condición.

---

## Paleta

Tres tokens. Tres. Esa es la prueba visible del ADN: una agencia que vende criterio no necesita una paleta, necesita una decisión.

- **Color base:** crema cálido `--bg: #f4f2ec` (fondo del cuerpo). NUNCA `#fff` puro — el blanco clínico lee a default. El crema cálido lee a papel de autor, a libro de diseño impreso. Tinta `--ink: #14130f` (casi-negro cálido, nunca `#000`). Derivados por opacidad: `--ink-62` (kickers/labels), `--ink-42` (metadata/placeholders), `--ink-18` (hairlines de numeral), `--hairline` (líneas).
- **Acento:** lima ácido `--brand: #c6f24e`. Un solo color. Es el "estado en vivo" de lo digital (cursores, terminales, debug) — coherente con DIS/DEV/AI sin un solo ícono. Y es el color que ninguna agencia "seria" se anima a sostener: el que lo hace con frialdad se vuelve memorable. `--on-brand: #0e0e0c` (texto sobre relleno lima). `--brand-press: #b2dd3e`.
- **El hero es la excepción cromática.** El video oscuro (rojo placeholder hoy, video real de Runway después) es la única zona de color saturado y movimiento. Vive aislado por `isolation: isolate`. El cuerpo claro NO lo continúa: el contraste portada-saturada / cuerpo-restringido ES la dirección.

### Regla de uso del lima (no descripción — reglas duras)

> **El lima aparece SOLO en cuatro lugares, y en ningún otro:**
> 1. **El relleno del CTA del contacto** (`ENVIAR BRIEF →`) — único bloque sólido de lima del sitio, al final, como clímax de acción.
> 2. **El hover de elementos accionables** — nombre de portfolio que vira a lima, underline que crece en lima en nav/links, outline de `:focus-visible`.
> 3. **La barra de inscripción de Studio** — el trazo lima que firma cada declaración de capacidad cuando entra al viewport (`scaleX`, ancho de la palabra-ancla).
> 4. **El asterisco `*` del wordmark del footer** — el sello de autor. Un glifo.

> **El lima NUNCA:** es fondo de sección · es tinta de texto de lectura · es color de un numeral (el numeral activo se marca con un tick/barra lima, no se tiñe) · es énfasis semántico (eso es itálica) · aparece dos veces compitiendo en el mismo viewport como evento · supera el 8% de superficie de cualquier pantalla (objetivo real <5%).

**Test de validación:** un screenshot de cualquier punto del cuerpo debe leerse "crema con tinta negra y serif" a primera vista. El lima debe ser lo que el ojo encuentra *después*, como recompensa. Si el lima salta primero, está mal dosificado.

---

## Composición

- **Grid:** sin grilla rígida de 12 columnas impuesta. Composición de **eje central** con `--margin` amplio (`clamp(1.25rem, 5vw, 7rem)`) — el contenido nunca toca el borde. La excepción es el grid `5fr 7fr` del proceso de Studio (Parte 2), que es deliberadamente "anexo tabular técnico" y por eso puede usar dos columnas sin pelear con el eje central.

- **La asimetría real del sistema: ficha técnica anclada al margen mientras el statement vive en el eje central.** La asimetría NO es apilar serif-gigante sobre Geist-chica en la misma columna centrada (eso es contraste de tamaño sobre un eje simétrico — el statement se lee igual de "centrado", solo más grande). La asimetría real es **espacial**: el statement serif permanece en el eje central (la voz, donde el ojo la busca), y la **metadata Geist se desprende del centro y se ancla al borde izquierdo del `--margin`**, como una signatura o numeración al margen de un documento impreso. Eso crea un eje dominante (el central, ocupado por la voz) y un eje subordinado real (el margen izquierdo, ocupado por la ficha) — tensión horizontal genuina, no simulada con tamaños. El borde derecho queda libre para que la afirmación respire hacia el horizonte. El statement sigue siendo el centro de gravedad; la ficha es la anotación técnica que prueba que detrás de la voz hay método.

- **El vacío deliberado** sigue siendo la otra mitad de la asimetría: los nombres y títulos NO llegan a full-width ni full-height; el espacio negativo alrededor de cada afirmación es lo que la convierte en evento. El vacío es la asimetría más fuerte y la más barata. Layout genérico = todo relleno, todo del mismo peso, todo centrado simétrico sin un solo elemento desprendido del eje. Esto es lo contrario: un eje dominante habitado, un margen subordinado con la ficha, y vacío que aísla cada afirmación.

- **Cuántas secciones llevan eje central simétrico y cuántas llevan ficha anclada:**
  - **Eje central simétrico puro (statement centrado, sin ficha anclada al margen): 2 secciones — Manifiesto y Footer.** El Manifiesto es el primer susurro: una sola voz centrada, sin ficha que la flanquee, porque su trabajo es ser puro statement (la ficha aparecería como ruido tras el grito del hero). El Footer es el horizonte/firma: el wordmark `SCUART*` va a sangre centrado; las coordenadas/metadata viven debajo como pie, no ancladas a un margen como signatura de sección.
  - **Ficha técnica anclada al margen izquierdo (statement en eje central + metadata al borde): 3 secciones — Portfolio, Studio (Parte 1, las tres declaraciones) y Contacto.** Estas son las secciones donde existe una ficha técnica real que ordena (numeral de proyecto/crédito, numeral de capacidad, "WHAT CHANGES") y que gana al desprenderse del centro.
  - El Hero queda fuera de esta regla: tiene su propia composición (wordmark abajo-izquierda, recuadro DIS/DEV/AI) ya resuelta en código y conservada intacta — no se le aplica la ficha anclada.

- **Espaciado:** escala fluida de `tokens.css` (`--space-2xs` a `--space-3xl`, base 8). Entre afirmaciones (declaraciones de Studio, statements, filas de portfolio) el espacio es generoso: `clamp(var(--space-2xl), 14vh, 11rem)`. Cada afirmación debe poder casi ocupar el viewport sola, separada de la siguiente por aire. El ritmo afirmación → vacío → afirmación es el elemento compositivo, no el relleno.

- **Máximo de jerarquías visuales por sección: TRES.** Una voz (serif gigante), una ficha (Geist metadata), un soporte (body/resolves). Si una sección necesita una cuarta jerarquía, está haciendo dos trabajos y hay que partirla. Tres pesos, tres tintas (`--ink` / `--ink-62` / `--ink-42`), un eje dominante.

### Ficha técnica anclada — regla de uso

**Qué metadata se ancla (Geist 500 uppercase, `--text-mono`, `--ink-62`, tracking `0.14em`; numerales en `--ink-42` con `tabular-nums`):**
- **Portfolio:** el numeral/crédito de cada proyecto (ej. `01· SCUART` / `CLIENTE · AÑO · ROL`) se ancla al borde izquierdo, alineado verticalmente con el comienzo del nombre serif centrado.
- **Studio (Parte 1):** el numeral de cada declaración de capacidad (`01·` / `02·` / `03·`) se ancla al borde izquierdo, a la altura de la primera línea de la declaración serif centrada. La barra lima de inscripción sigue firmando bajo la declaración, en el eje central — no se mueve al margen.
- **Contacto:** el kicker `WHAT CHANGES` (o el rótulo de sección equivalente) se ancla al borde izquierdo, arriba-a-la-izquierda del statement `EMPECEMOS.` que domina el eje central.

**A qué margen — IZQUIERDA, y por qué (no es menú):**
- El sitio nace en español, lectura izquierda→derecha. El margen izquierdo es donde empieza el barrido del ojo: anclar la ficha ahí la lee como **signatura / numeración al margen** (la convención del documento impreso de autor), no como decoración flotante. Anclarla a la derecha la leería como "elemento suelto que sobró" — más cerca del adorno que del método.
- El borde izquierdo es el borde "de origen" coherente con el resto del cuerpo: el wordmark del hero ya vive **abajo-izquierda**. Anclar la ficha a la izquierda hace que el ojo encuentre el mismo borde-de-firma de punta a punta. Un anclaje a la derecha introduciría un segundo borde-de-referencia que pelearía con el del hero — exactamente el "segundo eje" que el ADN descarta.
- Decisión cerrada: **margen izquierdo**, en las tres secciones. No hay variante a derecha.

**Cómo se comporta en mobile 375px:**
- En mobile el `--margin` colapsa a su mínimo (`1.25rem` = 20px). La ficha **se mantiene anclada al borde izquierdo, NO se centra y NO se apila bajo el statement como bloque centrado.** Va arriba del statement (o a la izquierda del comienzo del nombre, en Portfolio), pegada al margen izquierdo de 20px, en su tamaño `--text-mono` (11px). El statement serif sigue centrado en el eje. El contraste se mantiene: ficha al margen izquierdo, voz al centro — la misma asimetría que en desktop, solo con el margen comprimido.
- Por qué no se centra en mobile: centrar la ficha colapsaría la asimetría a "todo en el eje", que es justo el layout genérico que el ADN combate. La ficha es chica (11px, una o dos palabras + numeral): pegada al borde izquierdo no compite con el statement ni genera línea huérfana. Se mantiene la decisión de autor incluso en el viewport más chico.
- Por qué arriba del statement y no a su izquierda en mobile: a 375px no hay ancho para que la ficha conviva al costado de un statement serif gigante sin chocar. Va arriba, anclada a la izquierda, como un rótulo de sección al margen del bloque que sigue.

---

## Motion

Tempo **mecánico-editorial**: nada rebota, nada hace bounce. La precisión es el estilo. `expo.out` para tipografía, `cubic-bezier(0.16,1,0.3,1)` para la barra lima y los underlines.

### Qué anima y por qué (justificado contra el ADN)
- **Mask-reveal por líneas** en todos los titulares/statements (`SplitText lines+mask`, `yPercent 105→0`, 0.8–0.9s, stagger 0.12s). Por qué: el texto es la voz; revelarlo por líneas hace que la afirmación *llegue* en vez de estar simplemente puesta. Es el único gesto de entrada, repetido con disciplina (gesto firma del hero extendido al cuerpo). Type-as-event refuerza "la tipografía es el argumento".
- **La barra lima de inscripción de Studio** (`scaleX 0→1`, 0.5s, tras la frase). Por qué: el lima en movimiento al firmar una declaración hace que el acento sea memorable usándose poquísimo. Es semántica, no decoración: marca que la afirmación se inscribió.
- **Hover del portfolio** (imagen inline + nombre a lima). Por qué: es el momento de descubrimiento del trabajo — el contenido (el trabajo del estudio) es lo que tiene que brillar.
- **El video del hero** (scale 1.06→1 de entrada, parallax sutil de salida desktop). Por qué: es la portada; el único momento cinemático. Se conserva intacto.
- **El pin de numerales del proceso (Studio desktop)** y su tick lima activo. Por qué: da sensación de "avanzar por el documento" — coherente con "documento de autor".

### Qué NO anima (la lista de rechazos importa tanto como la de aceptados)
- **NO hay fade-in en cada elemento al scrollear.** Máximo 3–4 momentos de motion por scroll. El fade-in universal es el cliché #1 (research §"Animaciones cliché").
- **NO hay parallax pesado en todo.** Solo el sutil de salida del hero, y es cortable.
- **NO hay stagger de caracteres aleatorio**, ni cursor personalizado, ni botones magnéticos, ni partículas, ni cubos 3D girando. Todo eso es "agencia mostrando que sabe animar" — decoración. (Locomotive, la mejor del mundo, no tiene NADA de esto.)
- **NO se anima nada mientras el usuario escribe en el formulario.** Regla dura de conversión.
- **NO hay `mix-blend-mode` en el cuerpo** (solo hero — ver descartado #3).
- **NO hay wipe de color entre secciones** (era una propuesta-menú del Locomotive Unificado; muere con el sistema de planos).
- **El hover nunca cambia tamaño/tracking del texto** (genera reflow y ruido). El hover comunica con color y líneas, no moviendo el texto.

### Timing y easing
- Entradas de tipografía: `expo.out`, 0.8–0.9s, stagger 0.12s.
- Barra lima / underlines: `cubic-bezier(0.16,1,0.3,1)`, 0.3–0.5s.
- Video hero: `expo.out`, 1.6s (entrada).
- **`prefers-reduced-motion`: fallback estático REAL en todo** (no `transition: none` sobre un estado oculto — el contenido aparece completo y legible). El lima, la tipografía y el crema se mantienen: son identidad, no motion.
- **Performance LATAM (no negociable):** todo motion en `transform`/`opacity` (compositor, sin reflow). Barra lima en `scaleX` con ancho cacheado, nunca `width` real. `SplitText` se importa dinámicamente solo si no hay reduced-motion. Respeta el *body scroll container* de la directiva global en mobile (medir `document.body.scrollTop`, no `window.scrollY`).

---

## Voz visual por sección (ROLES, no descripciones)

**Hero** — *Tiene que detener al visitante en 5 segundos y decir "esto no es un template" antes de leer una palabra.* No decora: establece que SCUART juega en la liga global (video, blend, serif, glifo de marca propio). Es la única portada oscura; su trabajo es crear la tensión que el cuerpo claro va a resolver. No debe explicar nada — debe imponer presencia. Composición propia ya resuelta en código (wordmark abajo-izquierda + recuadro DIS/DEV/AI): no se le aplica la regla de ficha anclada del cuerpo.

**Manifiesto** — *Tiene que convertir el "wow" del hero en una afirmación de criterio.* "No hacemos webs. Construimos ventajas competitivas." Es el primer susurro tras el grito del hero: crema liso, serif gigante centrada escalonada, cero lima. **Eje central simétrico puro: una sola voz centrada, SIN ficha anclada al margen** — la ficha aparecería como ruido tras el grito del hero, y el rol del Manifiesto es ser puro statement. La itálica marca el énfasis — el único adorno permitido, y es estructural.

**Portfolio** — *Tiene que dejar que el trabajo hable y desviar toda la atención hacia él.* El estudio se calla; los nombres de proyecto (serif gigante centrada en el eje) y las imágenes mandan. **Ficha técnica anclada al borde izquierdo:** el numeral + crédito de cada proyecto (`01· SCUART` / `CLIENTE · AÑO · ROL`) vive pegado al margen izquierdo, alineado con el inicio del nombre serif centrado — lee como entrada de catálogo / signatura, no como rótulo decorativo. La ficha al margen es lo que da la asimetría real (eje central habitado por el nombre, margen izquierdo por la metadata); el borde derecho queda libre. El único momento de lima (hover) premia la exploración. En mobile la ficha sube arriba del nombre, pegada al margen izquierdo de 20px, sin centrarse. Es la prueba de "no decoramos": cero ornamento alrededor del trabajo, solo la ficha que ordena.

**Studio** — *Tiene que demostrar que el estudio se define escribiéndose, no listando servicios.* Tres declaraciones de capacidad (DISEÑO+MARCA / WEB/PRODUCTO / MÉTODO) centradas en el eje, que se inscriben una por una con el scroll, cada una firmada por una barra lima bajo la declaración (en el eje central, NO al margen). El copy de las tres frases lo entregó William (ver "Gaps" resueltos abajo) y va textual. **Ficha técnica anclada al borde izquierdo:** el numeral de cada capacidad (`01·` / `02·` / `03·`) vive pegado al margen izquierdo, a la altura de la primera línea de la declaración serif centrada — la numeración al margen del manifiesto, como versos numerados. No es un menú de servicios (eso es template) — es un manifiesto de tres frases con su signatura técnica al costado. En mobile el numeral va arriba-izquierda de cada declaración, pegado al margen, sin centrarse; la barra lima sigue bajo la frase. Su rol es transformar "qué hacemos" de catálogo a argumento. La Parte 2 (proceso) es la letra técnica subordinada: el grid `5fr 7fr` (anexo tabular, única excepción al eje central) prueba que detrás de la voz hay método (DIAGNÓSTICO/DIRECCIÓN/SISTEMA/LANZAMIENTO).

**Contacto** — *Tiene que cerrar con voz, no con un formulario educado.* `EMPECEMOS.` gigante (serif, una sola línea, token `--text-empecemos`) es el evento emocional, dominando el eje central; el form sobrio (inputs de línea, labels mono, cero cajas) es la ejecución técnica debajo. **Ficha técnica anclada al borde izquierdo:** el kicker `WHAT CHANGES` (o rótulo de sección equivalente) vive pegado al margen izquierdo, arriba-a-la-izquierda del statement centrado — anuncia la sección como signatura sin robarle el eje a la voz. El contraste emoción-arriba / ejecución-abajo, y voz-al-centro / ficha-al-margen, ES la composición. En mobile el kicker va arriba del statement, pegado al margen izquierdo de 20px, sin centrarse; el statement sigue centrado en una línea. El CTA lima es el único bloque sólido de color del sitio — el clímax de acción, donde el color por fin se vuelve superficie porque ahí SÍ importa. Su rol es que pedir el proyecto se sienta como una decisión, no como llenar un campo.

**Footer** — *Tiene que firmar.* `SCUART*` a sangre (serif, una sola línea, `white-space: nowrap`) es el horizonte/piso del sitio; el asterisco lima es el sello de autor; "No decoramos. Decidimos." es la última palabra. **Eje central simétrico puro: el wordmark va centrado a sangre, SIN ficha anclada al margen como las secciones de cuerpo** — las coordenadas (Bogotá · US · LATAM · 4.7110°N 74.0721°W) viven debajo como pie de página, no como signatura de sección anclada al margen, porque el footer no es una sección de contenido con una voz que flanquear, es el cierre. Su rol no es navegación (eso es secundario) — es dejar el lema grabado como lo último que el ojo lee. Cierra el círculo con el wordmark del hero.

---

## Señales de LATAM elevada (sin folklore)

LATAM no se siente con colores de bandera ni patrones precolombinos ni "calidez tropical". Se siente en la **actitud de la composición**. Elementos concretos:

1. **El crema cálido en vez de blanco frío.** El blanco clínico es el default del SaaS del norte global. El crema cálido tiene temperatura humana — es papel, no pantalla. Es calidez sin folklore: la temperatura de la región sin un solo cliché visual.

2. **El lima ácido sostenido con frialdad total.** Un color con energía, casi atrevido — pero usado con la disciplina de un estudio suizo. Esa tensión (color con hambre + ejecución fría) ES la "mirada latina con estándares globales" del ADN. El norte global no se anima al lima; lo usa quien tiene calle y criterio a la vez.

3. **El español como idioma de origen, no traducción.** El sitio es bilingüe pero los statements (`EMPECEMOS.`, "No decoramos. Decidimos.") nacen en español con punto final, voz directa, sin rodeos. La voz seca y afirmativa es latina-urbana, no corporate-neutra.

4. **Las coordenadas y el anclaje territorial en el footer** (Bogotá · US · LATAM · 4.7110°N 74.0721°W). No como decoración geográfica — como ficha técnica que dice "estamos acá y operamos global". Hablar desde Colombia sin pedir permiso.

5. **La ambición de la escala tipográfica.** Serif a 144–256px es un gesto de seguridad: "tenemos algo que decir y lo decimos grande". Es lo opuesto a la timidez del proveedor latino que se achica ante el cliente del norte. La escala es la postura.

**Lo que NO es LATAM elevada (folklore prohibido):** colores de bandera, terracota/barro/ámbar gastronómico (toda la era gastro muere), patrones étnicos, tipografías "artesanales", fotos de paisaje, cualquier guiño "exótico". LATAM elevada se ve al nivel de Montreal o Londres — la diferencia es la actitud, no el ornamento.

---

## Lo que el panel de jurados (visual-critic) debe evaluar

Tres preguntas específicas que el critic tiene que contestar sobre esta dirección, en su orden de prioridad:

1. **¿El lima pasa el test de bisturí en CADA viewport?** Tomá un screenshot de cualquier punto del cuerpo (mobile y desktop). ¿Se lee "crema + tinta + serif" a primera vista y el lima aparece *después* como recompensa? ¿El lima supera el 8% de superficie en algún punto, o aparece dos veces compitiendo como evento en un mismo viewport? Si el lima salta primero o se repite como evento, la dirección falló su propio principio rector — bloquear.

2. **¿El sistema sobrevive sin un solo efecto, o depende de ellos?** Desactivá todo el motion (simulá `prefers-reduced-motion`). ¿La composición sigue siendo claramente "de autor" — eje central dominante, ficha anclada al margen izquierdo en Portfolio/Studio/Contacto, contraste de escala 6×, vacío deliberado, tres jerarquías máximo — o se cae a "título sobre lista" / "secciones apiladas genéricas"? El ADN dice que la decisión está en la estructura, no en el movimiento. Si sin motion el sitio se ve como un template, la estructura no era intencional — bloquear.

3. **¿Se siente del mismo cerebro de punta a punta, incluyendo el corte hero→cuerpo?** ¿El salto de la portada oscura saturada (hero) al documento claro restringido (cuerpo) se lee como una decisión dirigida (cine → papel) o como "dos personas distintas hicieron el hero y el cuerpo"? ¿Las seis secciones comparten eje central, serif-como-voz, Geist-como-ficha, lima-como-firma, y mask-reveal-como-gesto? ¿La ficha anclada al margen izquierdo aparece consistentemente en las tres secciones que la llevan (Portfolio, Studio, Contacto) y se mantiene anclada —no centrada— en mobile? Una sola sección que rompa esa unidad (un segundo eje, un segundo acento, un tamaño tibio intermedio, un kicker full-width que vuelva, o una ficha que se centre en mobile rompiendo la asimetría) baja la nota de coherencia de autor — nombrarla y bloquear.

---

## Gaps que requieren input de William (no son menús — son texto que solo él escribe)

- **[RESUELTO por William — 2026-06-23]** Las **tres declaraciones de capacidad de Studio** (una frase de autor por capacidad, que se inscriben una por una con el scroll, cada una firmada por su barra lima bajo la declaración en el eje central y su numeral anclado al margen izquierdo). El concepto de Studio ("el estudio se define escribiéndose") se implementa con este copy, exacto como William lo entregó:
  - **`01·` DISEÑO+MARCA** — Hacemos que tu marca se sienta memorable.
  - **`02·` WEB/PRODUCTO** — Webs que transmiten confianza, no solo diseño.
  - **`03·` MÉTODO** — Diseño con criterio, no por tendencia.

  Estas frases van textuales en el render (PP Editorial New 300, `clamp(1.75rem, 7vw, 6rem)`, eje central) — no se reformulan, no se acortan, no se reescriben. La itálica de PP Editorial New es el único recurso de énfasis si alguna palabra dentro de una frase se enfatiza; el lima nunca es énfasis semántico (regla del sistema). No hay fallback a "rótulo gigante": el copy ya existe, Studio Parte 1 queda desbloqueado para el dev tras la aprobación de William y el paso por el visual-critic.

- **[PENDIENTE: requiere coordinación con el video real]** El **video del hero** (Runway → montaje). Hoy es el placeholder rojo `#d61f16` con blend. Cuando exista el video real, hay que verificar que su paleta de luces no pelee con el lima del cuerpo. El sistema está construido para que el swap sea solo poner el archivo en `/public/video/hero.mp4` — cero cambios de código. Pero la decisión cromática del video la valida William viendo el corte.

---

## Lo único que el dev necesita saber para implementar sin preguntas estéticas

- **Tokens:** los de `tokens.css` actuales son la verdad. NO migrar a oscuro. `--bg #f4f2ec` / `--ink #14130f` / `--brand #c6f24e` / `--on-brand #0e0e0c`. No inventar colores. **Único token nuevo a agregar:** `--text-empecemos: clamp(2.75rem, 12vw, 9rem)` (ver tabla tipográfica). Ningún otro token nuevo.
- **Tipografía:** PP Editorial New (display) + Geist (UI). Cero tercera familia. Tabla de jerarquía arriba. `EMPECEMOS.` y `SCUART*` llevan `white-space: nowrap` (una sola línea siempre).
- **Eje:** central dominante en todo el cuerpo. La ficha técnica (numeral/kicker/crédito Geist) se ancla al **borde izquierdo** del `--margin` en Portfolio, Studio (Parte 1) y Contacto; el statement serif queda en el eje central. Manifiesto y Footer NO llevan ficha anclada (eje central simétrico puro). En mobile la ficha se mantiene anclada al margen izquierdo, NO se centra. La única excepción al eje central es el grid `5fr 7fr` del proceso de Studio (Parte 2).
- **Studio Parte 1 — copy cerrado (William, 2026-06-23):** `01· DISEÑO+MARCA` → "Hacemos que tu marca se sienta memorable." · `02· WEB/PRODUCTO` → "Webs que transmiten confianza, no solo diseño." · `03· MÉTODO` → "Diseño con criterio, no por tendencia." Textual, sin reformular.
- **Lima:** las cuatro reglas de uso arriba. En ningún otro lado.
- **Énfasis:** itálica de PP Editorial New. Siempre. El color es acción/inscripción, nunca énfasis.
- **Motion:** mask-reveal por líneas como gesto único; 3–4 momentos por scroll; `transform`/`opacity`; reduced-motion con fallback real; body scroll container en mobile.
- **Hero:** intacto. No se toca.
- **Formulario de contacto:** campos, honeypot, endpoint `/api/contact`, estados — íntegros. Solo cambia composición/posición.
- **iOS:** `viewport-fit=cover`, safe-areas con `max()+env()` en el footer, body scroll container en `@media (max-width: 768px)` — directivas globales, no negociables.

---

## ⚠️ Nota de proceso (obligatoria)

Memoria del proyecto: **NUNCA implementar cambios de composición/layout sin que William los vea ANTES.** Este documento es una PROPUESTA de dirección. El dev no toca código hasta que William apruebe explícitamente. El gap del copy de las tres declaraciones de Studio quedó RESUELTO con el input de William (2026-06-23); el único gap abierto es el video real del hero (no bloquea la maqueta del cuerpo). Tras la aprobación de William, el flujo pasa al `visual-critic` (las tres preguntas de arriba) antes de que el dev reciba luz verde.
