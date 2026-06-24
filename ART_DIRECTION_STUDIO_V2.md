# Art Direction — Studio · V3 (corrige la V2 bloqueada)

**Fecha:** 2026-06-23
**Director:** director-creativo (Opus 4.8)
**Proyecto:** scuart.com — branch `redesign-v3`
**Scope:** SOLO la sección `StudioSection.astro`. Hero, Manifiesto, Portfolio, Contacto y Footer NO se tocan.
**Estado:** Esta V3 SOBRESCRIBE la V2, que el visual-critic bloqueó (coherencia 6.0 · composición 7.0 · concepto 7.0 · responsive 7.0). Antes de escribir esto se leyó el código real de Hero, Portfolio y Studio, y el screenshot `redesign/shots/opinion-desktop-full.png`. Las decisiones de abajo se basan en lo que el código RENDERIZA, no en una descripción del ADN.

> **Revisión V3.1 (post-segundo-pase del critic):** el critic aprobó 8/10 categorías y bloqueó por dos correcciones quirúrgicas: (1) composición 7.8 — contradicción entre el eje central declarado en §2 y la metadata descentrada propuesta como única tensión en §3.2; (2) implementabilidad 8.0 — el §3.4 entregaba un menú A/B en vez de una dirección. Esta revisión corrige SOLO §2, §3.2, §3.4 y la nota final. Todo lo demás (concepto §1, mecánica §4, lima §5, motion §6, proceso §7, responsive §8, tipografía §9, anti-patrones §10, brief §12) quedó aprobado ≥8.5 y se conserva textual.

---

## 0. Por qué la V2 fue bloqueada (verificado contra el código, no contra el gusto)

La V2 cometió **dos errores factuales de coherencia** y **dos errores de criterio**. Los factuales son los graves, porque toda la dirección colgaba de ellos:

### Error factual 1 — Mintió sobre el Hero
La V2 declaró el sitio entero como "papel de manifiesto crema, luminoso, `--bg` + `--ink`". **Falso para el Hero.** `HeroSection.astro` es un **video full-bleed `100svh`** (`object-fit: cover`), con `background-color: #0b0b0a` mientras carga y un `.hero-fallback` rojo bombero animado hasta que exista `/video/hero.mp4`. El texto va ENCIMA del video con `mix-blend-mode: difference`, alineado **abajo-izquierda**. El crema `--bg` recién aparece en el cuerpo (Manifiesto, Portfolio, Studio, Contacto). El Hero es la **portada oscura**; el cuerpo es el documento crema. La V2 no distinguió portada de cuerpo.

### Error factual 2 — Mintió sobre la alineación del Portfolio
La V2 afirmó que el sitio es "todo ancla izquierda / borde-a-borde" y **prohibió explícitamente centrar** (anti-patrón §9: "❌ Centrar el enunciado o las filas"). **El Portfolio aprobado usa `text-align: center`** (`PortfolioSection.astro` línea 146). El screenshot lo confirma: Jamón Casero / Menius / Healthy Choice NY / Arriba Gold están **centrados**, serif light gigante, hairlines borde-a-borde, imagen incrustada inline en hover. Y no es solo el Portfolio: el **Manifiesto** ("No hacemos webs. / Construimos ventajas competitivas.") está centrado, el **Contacto** ("EMPECEMOS.") está centrado, el **Footer** ("SCUART*") está centrado.

**El eje editorial del cuerpo de scuart.com es CENTRADO.** El Hero es la única excepción (portada abajo-izquierda, video). La V2 construyó toda su dirección sobre "ancla izquierda" — el opuesto exacto del idioma real del sitio. Ese fue el 6.0 en coherencia.

### Error de criterio 1 — Composición apilada
La V2 propuso "enunciado grande arriba + índice de filas abajo". Eso es un título sobre una lista: el default más genérico que existe. El critic lo leyó como apilado vertical que viola anti-slop (7.0). Tenía razón.

### Error de criterio 2 — El concepto se rompía en mobile
La mecánica estrella de la V2 era "una palabra del enunciado se reescribe al hacer hover sobre cada fila". **No hay hover en mobile.** La V2 lo parchó mostrando las 3 capacidades subrayadas con barra lima a la vez — rompiendo su propia regla de "máximo 2 manchas lima". Un concepto que necesita una excepción que viola su propia regla no es un concepto fuerte: es un truco de escritorio con un parche móvil.

**Lección operativa:** Studio debe hablar el idioma real del cuerpo del sitio (**centrado, serif light, hairlines borde-a-borde, tipografía-como-evento**), no inventar uno. Y su mecánica conceptual tiene que nacer del **scroll**, que existe idéntico en mobile y desktop, no del hover, que solo existe en una mitad de los usuarios.

---

## 1. Qué es Studio realmente — leído del código y del screenshot

Antes de proponer, fijo el ground truth de las secciones hermanas para anclar la coherencia:

| Sección | Fondo | Alineación | Tipografía protagonista | Gesto firma |
|---|---|---|---|---|
| **Hero** (portada) | Video / rojo `#0b0b0a` | Abajo-izquierda | PP Editorial New, wordmark blanco, blend difference | Wordmark + recuadro disciplinas; mask-reveal por líneas |
| **Manifiesto** | Crema `--bg` | **Centrado** | PP Editorial New gigante | Declaración a 2 líneas, acento itálico |
| **Portfolio** | Crema `--bg` | **Centrado** | PP Editorial New light gigante, `text-align: center` | Imagen incrustada INLINE dentro del nombre en hover; hairlines borde-a-borde |
| **Contacto** | Crema/terracota | **Centrado** | PP Editorial New ("EMPECEMOS.") | CTA gigante |
| **Footer** | — | **Centrado** | "SCUART*" gigante | Asterisco de marca |
| **Studio** (esta sección) | Crema `--bg` | **A DEFINIR** | PP Editorial New | **A DEFINIR** |

El idioma del cuerpo es claro: **serif light gigante, centrado, hairlines borde-a-borde, tipografía como el evento principal, el lima como bisturí (<3%).** El motion firma compartido es el **mask-reveal por líneas** (Hero usa line-reveal; el Portfolio usa fade-up con stagger; Studio actual ya usa SplitText mask en mobile).

---

## 2. Corrección 1 — ¿Studio va centrado o ancla izquierda? (decisión + razón compositiva)

### Decisión: **Studio va CENTRADO en su eje editorial, igual que el Portfolio. Un solo eje, sin excepciones ópticas.**

No "como el Portfolio porque lo dije" — por una razón compositiva concreta:

El cuerpo de scuart.com es un **documento editorial de eje central**. Manifiesto, Portfolio, Contacto y Footer comparten una columna óptica centrada que el ojo sigue verticalmente como un hilo. Si Studio se va a ancla izquierda, **introduce un segundo eje** en mitad del documento y el ojo tiene que reorientarse — exactamente la "plantilla pegada" que el critic castiga como ruptura de unidad de autor. El Portfolio ya resolvió "lista editorial centrada nivel Locomotive"; Studio es su sección hermana inmediata (van seguidas), así que **comparten eje o se pelean.**

**La ley operativa de esta sección, sin ambigüedad: todo bloque de la Parte 1 se alinea al eje central. Nada se descentra — ni la declaración, ni el numeral, ni el nombre técnico, ni el resolves.** Si algún elemento se moviera a un costado, sería un segundo eje óptico, y el segundo eje es precisamente lo que el doc prohíbe. No hay "salvo la metadata": esa era la grieta de la versión anterior y queda cerrada.

**Pero centrado NO significa apilado simétrico aburrido.** Acá está la sutileza que separa esta V3 del default, y de dónde sale TODA la tensión:

- El **eje** es central y único (la composición respira desde el centro, igual que el Portfolio).
- La **tensión** no la da mover cosas a la izquierda; la da **el contraste de peso, escala y vacío entre los registros tipográficos APILADOS SOBRE EL MISMO EJE** (ver §3.2). Una declaración serif a `6rem`, una metadata mono a `0.75rem` y un resolves a `1rem` son tres pesos radicalmente distintos centrados en la misma columna: eso ya es asimetría — asimetría de jerarquía, no de posición.

Es decir: Studio es centrado en alineación (coherencia con el cuerpo) y **asimétrico en peso vertical** (composición que no es apilado-default). Centrado ≠ simétrico. Esa distinción es la clave de toda la sección, y **es así como Locomotive descentra el ojo sin descentrar la alineación**: no empujan la metadata al margen, la minimizan hasta volverla un susurro bajo la declaración. El eje aguanta; la jerarquía hace el trabajo.

### Excepción justificada: el proceso (Parte 2) conserva su grid 5/7 en desktop
La Parte 2 ("Cómo trabajamos") ya tiene en el código un grid desktop `grid-template-columns: 5fr 7fr` con numerales pineados a la izquierda y pasos a la derecha. **Eso se conserva** (es la mecánica de pin que funciona y no fue lo rechazado). No contradice el eje central porque la Parte 2 es deliberadamente la "letra técnica" subordinada — un sistema de medición, no la declaración. La declaración (Parte 1) es la que vive en el eje central; el proceso es el anexo tabular. La jerarquía es: **Parte 1 centrada y emocional / Parte 2 grid-técnica y subordinada.** Esa diferencia de tratamiento ES intencional, no incoherente — y es la ÚNICA excepción al eje en toda la sección, declarada como tal.

---

## 3. Corrección 2 — La composición (no apilado: el manifiesto que se construye con el scroll)

### 3.1 Concepto central — "El estudio se construye frase por frase"

Studio no es un menú de tres servicios. Es **un manifiesto de tres declaraciones que se construye solo a medida que scrolleás.**

El gesto firma del cuerpo de scuart.com es "una declaración serif gigante, centrada, que es el evento" (Manifiesto: *"No hacemos webs. Construimos ventajas competitivas."*). Studio toma EXACTAMENTE ese gesto y lo aplica a los servicios: en vez de tres ítems de lista, son **tres declaraciones de capacidad**, cada una construida como una frase manifiesto que **se inscribe al entrar en el viewport.**

Las tres declaraciones, leídas en orden de scroll, son el manifiesto del estudio:

```
            Diseñamos lo que
            se ve. ───────                 ← capacidad 01 (DISEÑO + WEB)

           Construimos lo que
           trabaja. ──────                 ← capacidad 02 (PRODUCTO DIGITAL)

         Automatizamos lo que
         no debería ser manual. ──         ← capacidad 03 (IA + AUTOMATIZACIÓN)
```

(Las tres frases van centradas — el esquema arriba es ilustrativo del peso, no de la alineación. El copy real lo escribe William; ver §3.4: esta dirección NO arranca sin ese copy.)

**Por qué esto NO es apilado vertical:** lo apilado es "título + lista". Esto es **tres composiciones individuales, cada una con su jerarquía interna de peso sobre el mismo eje central, que el scroll activa una por una.** La diferencia es que cada declaración tiene su propia tensión interna (§3.2) y el evento es la **construcción progresiva por scroll**, no un bloque estático con una lista debajo. Es la misma lógica que hace que el Manifiesto funcione, multiplicada por tres y coreografiada con el scroll.

### 3.2 La tensión compositiva DENTRO de cada declaración (toda sobre el eje central)

Cada capacidad es un bloque centrado en su eje, y **la tensión nace de los tres registros de peso apilados sobre ese mismo eje**, no de mover nada de lugar:

```
│                  Diseñamos lo que                    │   ← línea 1: peso pleno, --ink, ~6rem
│                  se ve.━━━━━━                         │   ← línea 2: la palabra-ancla + barra lima
│                                                       │
│                  01 · DISEÑO + WEB                    │   ← metadata mono ~0.75rem, --ink-42, CENTRADA
│           Identidad visual y sitios de autor con      │   ← resolves ~1rem, --ink-62, 42ch, CENTRADO
│           motion y scroll coreografiado...            │
```

La tensión es **de escala y peso sobre un único eje vertical centrado, no de columnas ni de posición horizontal:**

1. **La declaración serif gigante** (peso máximo, centrada, `clamp(1.75rem, 7vw, 6rem)`, `--ink`) domina. Es el evento.
2. **La metadata** (numeral mono `01` + nombre técnico `DISEÑO + WEB`) es **diminuta, mono, `--ink-42`, y CENTRADA bajo la declaración** — un susurro técnico de catálogo. No se descentra: se **minimiza**. El salto de `~6rem` serif a `~0.75rem` mono sobre el mismo eje es un contraste de escala de casi 8× — esa caída brutal de peso ES la asimetría, sin tocar la alineación. (Esto reemplaza la "metadata al margen izquierdo" de la versión anterior, que introducía un segundo eje y se contradecía con §2. Corregido.)
3. **El resolves** (`~1rem`, `--ink-62`, `42ch`, centrado) es el tercer registro: ni el evento ni el susurro, sino el cuerpo de lectura. Tres pesos (`6rem` / `0.75rem` / `1rem`), tres tintas (`--ink` / `--ink-42` / `--ink-62`), un solo eje.
4. **El espacio negativo entre capacidades ES la composición.** Cada declaración tiene aire generoso arriba y abajo (`clamp(var(--space-2xl), 14vh, 11rem)` — el mismo ritmo del pin del proceso). El vacío no es relleno: es lo que hace que cada frase llegue como un golpe separado en vez de un párrafo continuo. El ritmo del scroll (frase → vacío → frase → vacío) es el elemento compositivo, igual que en el proceso pineado.

**Por qué pasa el filtro anti-slop:** no hay título-sobre-lista. Hay tres declaraciones con jerarquía interna intencional de peso (serif dominante / metadata mono minimizada / resolves de soporte), todas centradas sobre el mismo eje, separadas por vacío coreografiado. El peso visual está distribuido a propósito por escala y tinta, no apilado por default y no descentrado por truco. **Asimetría de jerarquía sobre un eje único — exactamente lo que hace Locomotive.**

### 3.3 El numeral — degradado a metadata (CONSERVADO de la V2)

El numeral (`01/02/03`) **deja de ser el fantasma gigante** (`clamp(...,9rem)`, `--ink-18`, detrás del nombre) que tiene el código actual. Pasa a ser metadata:

- **Geist mono** (`--font-body`), tamaño `--text-mono` (11–13px), `--ink-42`, `tabular-nums`, tracking `0.06em`.
- Vive en la línea de metadata, **antes del nombre técnico**: `01 · DISEÑO + WEB`.
- **NUNCA** lima, **NUNCA** `clamp(...,9rem)`, **NUNCA** detrás del nombre. **Centrado bajo la declaración, sobre el eje** (corregido respecto de la versión anterior, que lo descentraba — ver §3.2).

Razón (conservada de la V2, sigue siendo correcta): en un documento de autor el número de página no grita, ordena. Devolverlo a su rol de referencia de catálogo es lo que hace que el conjunto se lea 2026 y no 2021. Esto el critic NO lo objetó; se conserva intacto (salvo la alineación, que ahora es centrada para no romper el eje único de §2).

### 3.4 LA dirección de copy — camino A, declarado (cierra la decisión, no ofrece menú)

El i18n actual tiene por servicio: `num` (`01`), `name` (`DISEÑO + WEB`), `resolves` (la descripción). **No hay copy de "declaración manifiesto" todavía.** El concepto central de esta sección (§1, §3.1) es *"el estudio se define escribiéndose"*: el evento es una **declaración** — una frase de autor en primera persona del plural que afirma qué hace el estudio. Una etiqueta de servicio (`DISEÑO + WEB`) NO es una declaración: es un rótulo. Solo el copy de manifiesto realiza el concepto completo.

**Por eso LA dirección es el camino A, sin alternativa:**

> **Cada capacidad se declara con una frase de autor (`statement`) que William escribe. La declaración serif gigante usa ese `statement` (ej. *"Diseñamos lo que se ve."*); el `name` técnico baja a la metadata mono centrada; el `resolves` se conserva como soporte.**

Esto se añade como un campo `statement` por servicio en el i18n. Tres frases, una por capacidad, de **4–8 palabras** cada una, en primera persona del plural, capitalización normal.

**Condición de arranque — el dev NO empieza hasta tener ese copy:**

> **Esta dirección necesita que William apruebe y escriba 3 frases de 4–8 palabras (una por capacidad) ANTES de implementar. El dev no toca código hasta recibir ese copy.**

Se descarta explícitamente el "camino B" de la versión anterior (reusar `name` —`DISEÑO + WEB`— como declaración serif gigante). Razón dura: una etiqueta de servicio decorada con tamaño grande sigue siendo un rótulo, no un manifiesto; no realiza *"el estudio se define escribiéndose"* y el propio critic lo puntuó por debajo del umbral (concepto ~7.5 vs. ~8.7 del camino A). **Un documento de dirección entrega UNA dirección. No hay fallback a un camino que no pasa el umbral conceptual.** Si William no quiere escribir copy nuevo, la decisión correcta no es degradar a un rótulo gigante: es volver a este documento y replantear el concepto — no implementar una versión que sabemos que no llega a SOTD.

Lo único que NO cambia entre "antes de tener el copy" y "después": la composición (§3.2) y el motion (§4, §6) están definidos y son estables. Lo que falta es exclusivamente el texto de las tres declaraciones, que es de William.

---

## 4. Corrección 3 — Concepto nativo de mobile (scroll, no hover)

### La mecánica es por SCROLL, idéntica en mobile y desktop. No hay rama hover.

Esto resuelve el error de criterio 2 de raíz: el concepto **no depende del hover en absoluto.** El evento es "cada declaración se inscribe al entrar en el viewport" — y el viewport y el scroll existen iguales en las dos plataformas.

**Mecánica única (mobile = desktop, mismo código):**

1. Cada capacidad `.stu-svc` se observa con `IntersectionObserver` (ya existe el patrón en el código). Al entrar al viewport (threshold ~0.4, cuando la frase está claramente en pantalla):
   - La declaración serif entra con **mask-reveal por líneas** (`SplitText type: lines, mask: lines, yPercent 105→0, expo.out, 0.8s`) — el mismo motion del Hero y del Studio mobile actual. Esto cose Studio al resto.
   - **Inmediatamente después** (delay ~0.25s), la **barra lima de inscripción** se dibuja bajo la palabra-ancla con `scaleX 0→1` desde la izquierda, 0.5s, `cubic-bezier(0.16,1,0.3,1)`. El lima entra como un trazo de marcador editorial que firma la declaración recién escrita.
   - La metadata (numeral + nombre técnico + resolves) hace fade-in sutil (`y:16→0`, 0.6s).
2. Una vez inscrita, la declaración **queda inscrita** (la barra lima permanece). No se borra al salir del viewport. El manifiesto se va construyendo y QUEDA construido.

**Por qué es nativo de mobile y no un parche:**
- El hover no participa. En desktop con puntero se puede AÑADIR un realce opcional al pasar el mouse (la barra lima pulsa levemente, o el resolves sube de `--ink-62` a `--ink`), pero es **enhancement cosmético, no la mecánica.** Si se quita el hover, el concepto sigue intacto. El critic objetaba que el concepto MORÍA sin hover — ahora el hover no es parte del concepto.
- En mobile, scrolleás y las tres declaraciones se inscriben una por una con su barra lima a medida que pasan. Misma experiencia, mismo código, cero excepciones.

### La regla del lima se respeta sin parches (CONSERVADA de la V2)

Acá está la diferencia clave con la V2: en la V2 mobile mostraba **3 barras lima a la vez** (rompía su propia regla). En la V3, la regla se cumple naturalmente:

- Solo se inscribe **una barra lima por declaración**, y las declaraciones están separadas por vacío vertical (§3.2). En un viewport mobile normal **rara vez hay más de una declaración completamente visible a la vez** — el espacio negativo lo garantiza. Cuando hacés scroll, una se inscribe, avanzás, la siguiente se inscribe.
- En desktop, idem: las declaraciones están separadas por `~14vh` de aire, así que el viewport encuadra una declaración protagonista por vez.
- **No hay un instante de diseño donde aparezcan 3 manchas lima simultáneas como evento.** Si al final del scroll las tres quedaron inscritas y por casualidad entran las tres en un viewport muy alto, las tres barras son cada una **<1% de superficie** y subrayan palabras distintas en frases distintas — no es "3 acentos compitiendo", es "un manifiesto firmado tres veces". Eso es legítimo y no viola el espíritu de la regla (que prohibía 2+ acentos compitiendo por la atención EN EL MISMO MOMENTO de decisión).

Superficie total de lima: **<3%.** Bisturí, como manda V4.

---

## 5. El rol exacto del lima (`#c6f24e`) — CONSERVADO de la V2

El lima tiene **un solo trabajo en Studio, estructural no decorativo:**

> **El lima es la marca de inscripción: firma cada declaración del manifiesto subrayando su palabra-ancla cuando entra al viewport.**

Forma concreta:

1. **Barra de inscripción bajo la palabra-ancla de cada declaración.** Barra sólida lima, altura `0.1em`, ancho EXACTO de la palabra-ancla (la palabra-clave de la capacidad: `ve`, `trabaja`, `automatizamos`). NO es subrayado tipográfico — es marca de resaltador editorial deliberada.
2. **Animada por `scaleX` (NUNCA `width` real).** El ancho objetivo se mide 1 vez por palabra y se cachea; la animación es `transform: scaleX(0→1)` con `transform-origin: left`. Compositor puro, cero layout thrash.
3. **Es lo único lima visible en reposo en toda la sección.** El proceso (Parte 2) NO reparte lima en las declaraciones.

Reglas duras del lima (las del brief, intactas):
- ❌ NUNCA en el numeral (ni activo ni inactivo).
- ❌ NUNCA como texto del nombre del servicio (el texto siempre `--ink`).
- ❌ NUNCA como fondo de zona ni caja.
- ❌ NUNCA más de una mancha lima como evento simultáneo en un viewport (ver §4 — el vacío vertical lo garantiza; el "manifiesto firmado 3 veces" al final del scroll no es un evento simultáneo).
- ✅ El lima siempre firma UNA declaración: la que se acaba de inscribir.

### El lima en el proceso (Parte 2) — CONSERVADO de la V2
El pin de numerales en desktop ya marca el numeral activo. En vez de **teñir el numeral de lima** (lo que el código actual hace con `.stu-num-item.is-active { color: var(--brand); }` — eso es lima-como-tinte-de-glifo, prohibido), el `.is-active` muestra un **tick lima vertical** (`2px × 1em`, barra) a la izquierda del numeral. Coherencia total: el lima es SIEMPRE una marca-tick/barra de inscripción, jamás tinte de un glifo. Cambio de CSS, la clase `.is-active` y el JS se conservan.

---

## 6. Lógica de motion (paso a paso) — CONSERVADA y endurecida

Tempo: **mecánico-editorial.** `expo.out` para entradas de tipografía, `cubic-bezier(0.16,1,0.3,1)` para la barra lima. Nada rebota, nada hace bounce. La precisión es el estilo.

### 6.1 Entrada de la sección (Parte 1 — por scroll, IntersectionObserver)
Se conserva el patrón del código (`.stu-svc.is-hidden → .is-visible`, threshold del observer), endurecido:

1. El label `ESTUDIO` aparece (fade, 0.4s) al entrar la sección.
2. **Por cada declaración `.stu-svc` que entra al viewport** (threshold ~0.4):
   - Declaración serif: **mask-reveal por líneas** (`SplitText lines+mask`, `yPercent 105→0`, `expo.out`, 0.8s). Mismo motion que Hero.
   - Barra lima de inscripción: `scaleX 0→1` desde la izquierda, 0.5s, delay 0.25s tras la frase.
   - Metadata (numeral + nombre técnico + resolves): fade-up `y:16→0`, 0.6s.
3. La declaración queda inscrita (barra lima permanece).

### 6.2 Enhancement de puntero (desktop, OPCIONAL, cortable)
Si hay `(hover: hover)`: al pasar el mouse sobre una declaración inscrita, el resolves sube de `--ink-62` a `--ink` (0.3s) y/o la barra lima ensancha levemente su altura. **Es cosmético. Si se quita, el concepto no se entera.** Sin reflow: solo `color`/`transform`. No cambia tamaño ni tracking del texto (anti-patrón).

### 6.3 `prefers-reduced-motion`
- Sin mask-reveal: la declaración aparece estática y completa.
- La barra lima aparece estática a su ancho final (sin `scaleX`).
- La metadata aparece estática.
- Todo legible y operable. Fallback REAL, no `transition: none` sobre un estado oculto.

### 6.4 Performance (mobile gama baja / 3G — no negociable, CONSERVADO)
- Mask-reveal y reveals usan `transform`/`opacity` (compositor, sin reflow).
- Barra lima: `transform: scaleX` + `transform-origin: left`, **NUNCA `width` real.** Ancho objetivo medido 1 vez por palabra y cacheado.
- `SplitText` solo se importa si no hay reduced-motion (import dinámico, ya es el patrón actual).
- Sin scroll-jacking. La sección no introduce ningún scroller propio (respeta el body scroll container de la directiva global — leer `document.body.scrollTop`, no `window.scrollY`, en cualquier medición; los IntersectionObservers usan el viewport y no se tocan).

---

## 7. Parte 2 — "Cómo trabajamos" (proceso) — CONSERVADA casi intacta

El código actual del proceso (pin de numerales desktop, SplitText mobile, hairline corto 30% derecha, `whatChanges` en itálica) **ya es decente y no fue lo rechazado.** Se conserva. Las únicas ediciones:

- **El numeral pineado activo recibe el tick lima a su izquierda** en vez de teñirse de lima (ver §5). Reconcilia el proceso con la regla del lima.
- **`whatChanges` se conserva como PP Editorial New itálica** (gesto de marca, ya en el código). NO TOCAR.
- **El hairline corto del 30% a la derecha** (`.stu-step__rule`) se conserva — buen detalle editorial. NO TOCAR.

Tratamiento jerárquico: el proceso es deliberadamente la "letra técnica" subordinada a las declaraciones de la Parte 1. Su grid 5/7 desktop con pin es un sistema de medición, no una declaración — por eso puede usar grid lateral sin pelear con el eje central de la Parte 1 (ver §2, excepción justificada).

---

## 8. Responsive

### Desktop (≥1280px)
- **Parte 1:** declaraciones serif centradas en su eje, `clamp(2.5rem, 7vw, 6rem)`, separadas por `clamp(var(--space-2xl), 14vh, 11rem)` de aire. Metadata mono **centrada** bajo la declaración (numeral + nombre técnico, sobre el eje — ver §3.2). Resolves `42ch` centrado bajo la metadata. Barra lima por declaración. Mecánica por scroll. Enhancement de hover opcional.
- **Parte 2:** grid `5fr 7fr` con numerales pineados (conservado), tick lima en el activo.

### Tablet (768–1279px)
- **Parte 1:** declaraciones serif centradas, un punto más chicas (`clamp(2.25rem, 8vw, 4.5rem)`). Metadata mono centrada bajo la declaración igual. Misma mecánica por scroll (idéntica a desktop — es scroll, no hover). Resolves centrado, `42ch`.
- **Parte 2:** stack vertical, sin pin (igual que hoy). Numeral mono pequeño por paso (NO fantasma gigante), título serif, body, `whatChanges` itálica, hairline corto. El tick lima puede marcar el paso visible (opcional).

### Mobile (375–767px) — el concepto NO se rompe, es el mismo
- **Parte 1:** declaraciones serif centradas, `clamp(1.75rem, 8vw, 2.75rem)`. Metadata mono pequeña **centrada bajo la declaración** (sobre el eje, no descentrada). Resolves centrado, `--ink-62`, ancho cómodo. **Misma mecánica de scroll que desktop** — cada declaración se inscribe (mask-reveal + barra lima `scaleX`) al entrar al viewport. **CERO rama de excepción, CERO 3-barras-a-la-vez** (el error de la V2 desaparece porque la mecánica es scroll, no hover).
- **Sin sangría arbitraria de 6vw** (el código actual tiene `padding-left: 6vw` en mobile — se elimina; alineación al eje central, coherente con el Manifiesto y el Portfolio mobile).
- **Parte 2:** cada paso con numeral mono pequeño, título serif, body, `whatChanges` itálica, hairline corto. Reveal por scroll (conservado, el código ya hace SplitText mask en mobile).
- **Body scroll container** (directiva global): la sección no introduce scroller propio; no se rompe el scroll del `body`. Cualquier medición de scroll usa `document.body.scrollTop`.
- `viewport-fit=cover` y safe-areas: esta sección no tiene elementos `fixed`/`sticky` pegados a bordes, así que no requiere insets propios — pero no debe anular los del layout.

---

## 9. Reglas tipográficas

| Elemento | Familia | Peso | Tamaño | Color | Notas |
|---|---|---|---|---|---|
| Label `ESTUDIO` | Geist | 500 | `--text-mono` | `--ink-62` | uppercase, tracking `0.14em`. Se conserva su posición actual (derecha, sin hairline full-width) — es un detalle correcto del código. |
| **Declaración serif** (Parte 1) | PP Editorial New | 300 | `clamp(1.75rem, 7vw, 6rem)` | `--ink` | line-height `0.95`, tracking `-0.03em`, **centrada**. Palabra-ancla subrayada por barra lima. |
| Palabra-ancla | PP Editorial New | 300 | igual a la declaración | `--ink` (NUNCA lima) | barra lima debajo (`scaleX`) |
| Numeral metadata `01/02/03` | Geist | 400 | `--text-mono` | `--ink-42` | `tabular-nums`, tracking `0.06em`. **Pequeño, centrado bajo la declaración, metadata.** |
| Nombre técnico (metadata) | Geist | 500 | `--text-mono` | `--ink-62` | uppercase, junto al numeral: `01 · DISEÑO + WEB`. Centrado, sobre el eje. |
| Resolves | Geist | 400 | `--text-body` | `--ink-62` (hover→`--ink` opcional) | max-width `42ch`, line-height 1.6, centrado bajo la metadata |
| Título de paso (proceso) | PP Editorial New | 300 | `clamp(2.5rem, 6vw, 5rem)` | `--ink` | se conserva |
| `whatChanges` | PP Editorial New | 400 **itálica** | `--text-body` | `--ink` | gesto de marca, **NO TOCAR** |

Detalles:
- **El énfasis es la barra lima + la itálica, NUNCA bold ni mayúsculas extra.** Sistema V4: itálica = énfasis, color = inscripción/acción. La palabra-ancla no se pone lima (sería acción); se *marca* con barra lima (señal de inscripción). Coherente.
- La declaración debe poder quebrar a 2 líneas sin romper la barra lima (la barra solo subraya la palabra-ancla, idealmente al final de la última línea).

---

## 10. Anti-patrones (lo que NO hacer)

Errores propios de la V2 que esta V3 corrige:
- ❌ **Tratar el sitio como crema uniforme.** El Hero es video/oscuro (portada); el cuerpo es crema (documento). Studio es cuerpo.
- ❌ **Ancla izquierda / prohibir centrar.** El cuerpo de scuart.com es de eje CENTRAL (Manifiesto, Portfolio, Contacto, Footer). Studio va centrado.
- ❌ **Descentrar la metadata (segundo eje óptico).** Toda la Parte 1 va sobre un eje central único; la tensión es de peso/escala, no de posición. Descentrar la metadata sería el "segundo eje" que el propio doc prohíbe (§2).
- ❌ **Título grande arriba + lista abajo (apilado).** Son tres declaraciones con tensión interna de peso sobre el mismo eje, separadas por vacío coreografiado, activadas por scroll.
- ❌ **Concepto que depende del hover.** La mecánica es scroll (nativa en mobile y desktop). El hover es enhancement cortable.
- ❌ **3 barras lima a la vez como evento.** El vacío vertical garantiza una declaración protagonista por viewport.

Del sistema (vigentes):
- ❌ **Numeral fantasma gigante** (`clamp(...,9rem)`, `--ink-18`, detrás del nombre) — el código actual lo tiene; se elimina. Numeral = metadata mono pequeña.
- ❌ **Lima en el numeral** (tinte de glifo). El lima es barra/tick de inscripción.
- ❌ **Columna de medición / lomo lateral rotado.** Idioma ajeno.
- ❌ **Sangría arbitraria de 6vw** en mobile (el código la tiene en `.stu-svc__name-wrap` / `.stu-svc__resolves`) — se elimina, alineación al eje central.
- ❌ **Gris fantasma 0.4 en inactivos** (el código actual dimea hermanos a `opacity: 0.4` en hover) — se elimina; la jerarquía es por presencia/ausencia de barra lima y por tinta, no por opacidad "rota".
- ❌ **Hover que cambia tamaño/tracking** del texto (reflow/ruido).
- ❌ **Cajas o fondos de color** en las filas.
- ❌ **Acordeón / `max-height`** en resolves (ya eliminado, mantener eliminado).

---

## 11. Por qué esta V3 pasa el filtro Awwwards SOTD / Locomotive

1. **Una idea fuerte, nombrable en una frase:** "el estudio se construye, declaración por declaración, mientras scrolleás." Concepto memorable, no efectos sueltos.
2. **La tipografía ES el evento, activada por scroll.** Mask-reveal de la declaración + barra lima que firma — type-as-interface, la corriente dominante 2025-26. Funciona idéntico en mobile (donde se juzga primero el SOTD).
3. **Coherencia de autor REAL, verificada contra el código:** mismo eje central del Portfolio/Manifiesto, mismo mask-reveal del Hero, mismo lima-bisturí del sistema V4. Cada sección se siente del mismo cerebro.
4. **Restricción cromática disciplinada:** un solo color, con trabajo semántico (firma de inscripción), <3% de superficie, una mancha por viewport. Madurez, no timidez.
5. **El número en su sitio:** metadata mono pequeña, no fantasma. El detalle que separa 2026 de 2021.
6. **Performance y a11y como base:** `transform`/`opacity`, `scaleX` no `width`, reduced-motion con fallback real, mecánica por scroll (no depende de hover ni puntero), contraste AA (tinta sobre crema cumple), body scroll container respetado. No se rompe en mobile ni en lectores.

---

## 12. Brief para el dev (clases JS que NO se pueden romper)

Clases/estados que el script y otros sistemas referencian — **deben sobrevivir** aunque cambie el CSS y se añadan elementos:

`.stu-svc` · `.stu-svc__num` · `.stu-svc__content` · `.stu-svc__name` · `.stu-svc__resolves` · `.stu-nums` · `.stu-num-item` · `.stu-step` · `.stu-step__title` · `.stu-step__num-mobile` · `.stu-method` · `.stu-steps` · `.is-hidden` · `.is-visible` · `.is-active`

Mapeo conceptual V3 → estructura existente:
- `.stu-svc` = **una declaración de capacidad** (sigue siendo `<li>` en `.stu-services`). Su IntersectionObserver dispara la inscripción (mask-reveal + barra lima). YA tiene el patrón observer en el script — se endurece, no se reemplaza.
- `.stu-svc__num` = numeral, **ahora mono pequeño y centrado bajo la declaración** (cambio de CSS, no de clase). Sigue `aria-hidden`.
- `.stu-svc__name` = el nombre técnico de la capacidad, **ahora metadata mono centrada** junto al numeral (`01 · DISEÑO + WEB`). La declaración serif gigante es un elemento nuevo (`.stu-svc__statement`, ver abajo), NO `.stu-svc__name`.
- `.stu-svc__resolves` = descripción, siempre visible, centrada bajo la metadata.
- **Elementos NUEVOS a añadir** (no rompen nada): el slot de la declaración serif (`.stu-svc__statement`, alimentado por el campo `statement` del i18n que escribe William — ver §3.4) y la barra lima de inscripción (`.stu-svc__bar`, animada con `scaleX`). El estado inscrito puede reusar `.is-visible`.
- `.stu-num-item.is-active` (proceso): el CSS de `.is-active` ahora muestra un **tick lima** a su izquierda en vez de teñir el glifo. La clase y el JS del pin se conservan.
- Eliminar del CSS actual: el dimeo `opacity: 0.4` de hermanos en hover, la sangría `6vw`, el `font-size: clamp(...,9rem)` fantasma del numeral, y `.stu-num-item.is-active { color: var(--brand) }` (reemplazado por el tick).

Si con esto el dev no puede posicionar un elemento, falta detalle — pero **antes de iterar o implementar, esto pasa por William.**

---

## ⚠️ Nota de proceso (obligatoria)

Según la memoria del proyecto: **NUNCA implementar cambios de composición/layout sin que William los vea ANTES.** Este documento es una PROPUESTA de dirección, no una orden de implementación.

**La decisión de copy está cerrada — no hay menú A/B.** LA dirección es el camino A (§3.4): cada capacidad se declara con una frase de autor (`statement`) en primera persona del plural, 4–8 palabras, que William escribe. El "camino B" (reusar `DISEÑO + WEB` como declaración serif) queda descartado porque no realiza el concepto *"el estudio se define escribiéndose"* y el critic lo puntuó por debajo del umbral.

**Bloqueo de arranque (obligatorio):** esta dirección necesita que William apruebe Y escriba 3 frases de 4–8 palabras (una por capacidad) ANTES de implementar. **El dev NO toca código hasta recibir ese copy.** Si William no quiere escribir copy nuevo, NO se degrada a un rótulo gigante: se vuelve a este documento y se replantea el concepto. No se implementa una versión que sabemos que no llega a SOTD.

La composición (§3.2) y el motion (§4, §6) están definidos y estables; lo único pendiente es el texto de las tres declaraciones, que es de William.
