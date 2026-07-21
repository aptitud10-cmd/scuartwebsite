# Auditoría Visual — scuart.com (redesign-v3) — 2026-07-21

Visual-critic, modo opinión (no bloqueante). Viewports: 375 / 768 / 1280.
Ancla de comparación: Locomotive (elegida por el propio equipo — el código documenta "RÉPLICA EXACTA de locomotive.ca").
Limitación: Portfolio/Marquee/Método/Studio salieron en blanco en capturas full-page (reveals `once:true`); evaluados por código + screenshots dedicados.

---

## HERO — 5.5/10

**Gusta:**
- Escala tipográfica real del wordmark (PP Editorial New, clamp hasta 4.375rem) — no es H1 de plantilla.
- Recuadro SVG "DIS/DEV/AI": gesto gráfico específico con contenido propio.
- `mix-blend-mode: difference` en nav/wordmark — decisión técnica con criterio.

**No gusta:**
- **CRÍTICO: el fondo es literalmente un placeholder** — gradiente radial rojo (#d61f16 → #ff3a24 → #b3140d) sin foto, video ni textura. Viola R1 anti-slop. Bloquearía en un gate formal.
- El cookie banner tapa parcialmente el wordmark (doble render visible) — sin jerarquía de capas coordinada.
- El copy "SCUART / Digital-first Design Agency*" es calca casi literal de "Locomotive® / Digital-first Design Agency" — mismo patrón, mismo asterisco. Un jurado lo reconoce al instante.
- Copy muerto en `es.ts` (`hero.line1/line2/capabilities`) que ya no se renderiza — deuda de iteraciones sin limpiar.
- Nav "Trabajo, Servicios, Contacto" unido con comas: otra calca directa de Locomotive.

**Agregaría:** imagen/video real del trabajo propio (aunque sea mockup estilizado) en vez del gradient; copy propio que refleje la realidad de SCUART, no el posicionamiento de una agencia de 15 años.
**Quitaría:** el gradient rojo como solución "final".

---

## MANIFESTO — 6.5/10

**Gusta:**
- "No hacemos webs. Construimos ventajas competitivas." — el mejor copy del sitio, con punto de vista real.
- Corte directo hero→manifesto, escala tipográfica, énfasis en itálica (no color).
- Reveal por máscara de línea — motion con propósito.

**No gusta:**
- Todo centrado (kicker + statement) — es exactamente R2 (centrado por default). El propio código documenta que ANTES había composición escalonada con sangría dramática y se abandonó.
- Fondo liso sin el "grano fuerte, terracota" que la dirección de arte prometía en comentarios.

**Agregaría:** recuperar la asimetría (line2 sangrada) que ya estaba diseñada y se descartó.
**Quitaría:** el centrado universal que lo hace ver como el 90% de manifiestos de agencia.

---

## PORTFOLIO — 8.0/10 (la mejor sección)

**Gusta:**
- Patrón "work index tipográfico" con imagen inline en hover — gesto real de composición, no grid de cards.
- Ficha técnica (numeral · categoría · año) al margen: jerarquía intencional de 3 niveles.
- Mobile/tablet con imagen siempre visible — buena decisión táctil.

**No gusta:**
- Es réplica directa y reconocida del patrón /work de Locomotive (el código lo admite). Ejecución impecable de una idea ajena.
- Con 0 clientes, la promesa de "trabajo real" depende de qué haya de verdad en los 4 proyectos.

**Agregaría:** UN detalle propio que lo diferencie de Locomotive (corte de imagen, acento en hover).
**Quitaría:** nada de la mecánica.

---

## MARQUEE DE SERVICIOS — 6.0/10

**Gusta:** velocidad reactiva a Lenis; nombres reales de servicios (no íconos de librería).
**No gusta:** el marquee infinito es de los patrones más "de plantilla" de 2026 — todo template Framer/Webflow lo tiene.
**Agregaría (si se mantiene):** tipografía mixta o dos líneas a velocidades/direcciones distintas.
**Quitaría:** consideraría eliminarlo y usar el espacio para algo con peso narrativo — SCUART necesita credibilidad, no decoración.

---

## MÉTODO — 7.5/10

**Gusta:**
- La sección mejor realizada del set en screenshots: verbo serif grande + numeral gigante gris + body chico = jerarquía real de 3 niveles (R6 con margen).
- Hairlines con ritmo editorial, sin cards con sombra.
- Copy específico y accionable, no genérico.

**No gusta:**
- Lista vertical de 4 filas simétricas — no se confirmó que herede la asimetría de padding pares/impares de la vieja CapabilitiesSection.
- El "numeral gigante de fondo" ya aparece en Manifesto, Portfolio y acá — se vuelve muletilla del sitio.

**Agregaría:** confirmar/recuperar la asimetría de padding entre pasos.
**Quitaría:** uno de los tres usos del numeral gigante en el sitio.

---

## STUDIO (bloque "Qué hacemos") — sin calificar

Sin evidencia visual con contenido cargado; no se califica por default. Conjunto Studio (ponderando Método): 7.0/10.

---

## CONTACTO — 8.0/10

**Gusta:**
- Composición asimétrica REAL: texto a la izquierda + "NUEVA YORK · LATAM" vertical al margen derecho.
- Email como protagonista tipográfico — UN elemento dominante claro.
- Jerarquía de 3 niveles limpia: kicker → statement → email → CTA+nota.

**No gusta:**
- **El cookie banner tapa el email `info@scuart.com` en desktop** — el elemento de conversión más importante del sitio semi-oculto. Defecto medible, severidad media-alta.
- El patrón es calca admitida de Lama Lama / Locomotive.

**Agregaría:** fix de z-index/timing del cookie banner.
**Quitaría:** nada estructural.

---

## FOOTER — 7.5/10

**Gusta:**
- Decisión honesta documentada: sin wordmark gigante ("en un estudio de 1 persona se siente pretencioso").
- 3 capas con jerarquía descendente, sin duplicar el CTA de Contacto.
- "No decoramos. Decidimos." — tagline con carácter.

**No gusta:** es el footer más "de manual" de agencia B2B. Aceptable (un footer debe ser discreto), pero sin gesto propio.
**Agregaría / quitaría:** nada urgente.

---

## TRANSVERSALES

- **Cookie banner** con z-index alto tapa contenido crítico en al menos 2 puntos (wordmark del hero, email de Contacto). Bug medible, barato de arreglar, alto impacto.
- Nav global sticky post-hero: bien resuelto, sin objeciones.

---

## DEL CONJUNTO — 7.0/10

**Gusta:** sistema tipográfico/espaciado consistente de punta a punta (no Frankenstein); Portfolio y Contacto con asimetría real; copy con voz propia en Manifesto y Método; lenguaje de motion unificado (máscara de línea, no fade-in universal).

**No gusta:**
- El hilo conductor es "copiar Locomotive", documentado en el propio código. Cualquier jurado de Awwwards reconoce el calco en segundos. No puede aspirar a award siendo traducción literal de otra agencia premiada.
- El hero sigue siendo placeholder confeso.
- Cookie banner rompe 2 de 3 secciones fotografiadas.
- Numeral gigante repetido en 3+ secciones — muletilla involuntaria.
- Copy muerto en i18n.

---

## TOP 5 ACCIONES (en orden de impacto)

1. **Resolver el hero real** — nada compensa esa primera impresión.
2. **Arreglar z-index/timing del cookie banner** — tapa el wordmark y el CTA principal; barato y de alto impacto.
3. **Diferenciarse de Locomotive en Hero + Portfolio** — al menos un gesto compositivo inequívocamente propio.
4. **Recuperar la asimetría del Manifesto** que ya estaba diseñada (está en los comentarios del código).
5. **Limpiar la repetición del numeral gigante + copy muerto en `i18n/es.ts`.**
