# Art Direction v2 — SCUART "Terracota"

**Fecha:** 2026-06-03
**Reemplaza:** ART_DIRECTION.md ("Editorial Cálido" — el intento crema que se sintió pobre/vacío/template)
**Base de evidencia:** RESEARCH_QUE_HACE_BUENA_UNA_WEB.md (junio 2026)
**Para:** proyecto Astro NUEVO y limpio (no el repo React+Vite viejo)

---

## Por qué v2 (el diagnóstico del fracaso de v1)

El primer rediseño se sintió "pobre, vacío, aburrido, sin alma, template, motion flojo". La investigación identificó las causas exactas, y v2 las corrige una por una:

| Error de v1 | Corrección v2 |
|---|---|
| `whileInView` fade en cada elemento (señal de tutorial) | Motion NARRATIVO: 2-3 momentos que cuentan algo |
| Fondo liso sin textura | Grano encima — la diferencia "hecho por humano" vs "renderizado por IA" |
| Aire sin intención = vacío | Aire que jerarquiza algo específico; densidad calibrada con ritmo |
| Copy descriptivo ("diseño premium para…") | Copy con ACTITUD: "la mayoría de los sitios son olvidables" |
| Cursor custom + magnetic buttons + partículas | QUITAR. Locomotive (7× Agency of the Year) no tiene nada de eso |
| Portfolio = grid de cards uniformes | Portfolio con MECÁNICA: asimetría + image-trail / hover memorable |
| Crema (off-white perdona cero, se vio vacío) | Color de marca saturado: terracota protagonista, da peso y personalidad |

**Principio rector (del research):** "La lista de lo que Locomotive NO tiene es más instructiva que la de lo que tiene." Premium = sustracción, no acumulación.

---

## Posicionamiento (corregido)

SCUART es una **agencia de diseño y desarrollo web para comercios locales**: restaurantes, salones de belleza, tiendas, marcas pequeñas. NO es solo gastronomía (ese fue un error de encuadre de v1). El sitio vende **el trabajo de SCUART**, no comida. Activo principal: los proyectos reales (4 por ahora: Jamón Casero, MENIUS, Healthy Choice NY, Arriba Gold), presentados como obra premium.

Punto de vista de marca (la voz del sitio): **"la mayoría de los sitios son olvidables — nosotros hacemos lo contrario."** Opinión, no catálogo de servicios.

---

## Paleta — "Terracota" (la marca ES el color)

El fondo es color, no neutro. Esto es lo que vuelve el sitio imposible de confundir y difícil de ver genérico.

### Base
- **`terracota`** `#8B3A1F` — FONDO dominante. Terracota profundo, tierra quemada. Cálido, artesanal, humano.
- **`crema`** `#F2EDE4` — texto principal y titulares sobre terracota. NUNCA #FFF puro.

### Acentos (disciplina de lujo — 3-4 apariciones MÁX por pantalla)
- **`tinta`** `#1A1208` — negro cálido casi-marrón. Para contraste fuerte, secciones invertidas, detalles.
- **`ambar`** `#E0A04D` — dorado/ámbar cálido. El acento que "brilla". Para 1-2 momentos clave (un CTA, una palabra del hero, un índice). Escaso = caro.
- **`terracota-claro`** `#A8apenas` (derivar) — variaciones tonales para profundidad sin romper la base.

### Neutros de apoyo (derivados cálidos, no grises fríos)
- **`crema-apagada`** `#C9BBA8` — texto secundario sobre terracota (off-white desaturado).
- **`terracota-profunda`** `#6B2C15` — bloques/secciones un paso más oscuras que la base, para ritmo.
- **`borde`** `#A85A3D` — hairlines, divisores; terracota aclarado, nunca gris.

### Sección invertida (contraste, ritmo)
- Bloque con fondo `tinta` `#1A1208` + texto `crema`. Para 1 sección (ej. contacto) que rompe el terracota y crea respiro/tensión. El ámbar mantiene su rol de acento sobre el oscuro.

### Textura — OBLIGATORIA (esto nos faltó en v1)
- **Grano/noise** sobre el fondo terracota. SVG filter (feTurbulence) o PNG en pseudo-elemento, `opacity ~0.30-0.40`, `mix-blend-mode: overlay` o `soft-light`. Da "material" — el sitio se siente prensado, físico, hecho. SIN esto, el terracota se ve como un `<div>` de color plano = barato.

### Riesgo a vigilar EN VIVO
Un fondo de color saturado a pantalla completa puede cansar la vista o verse pesado. Al montar el hero, lo PRIMERO que William juzga es si `#8B3A1F` está bien calibrado. Si cansa: bajar saturación, oscurecer hacia `#7A3219`, o terrosear hacia `#83402A`. Ajuste en vivo, no a ciegas.

---

## Tipografía

### Display (titulares) — protagonista con personalidad
- **Recomendado:** **Fraunces** (variable, gratis, óptico) — ya validada, tiene alma y la itálica con carácter. O si se busca más impacto/brutalismo: **una grotesca extended** (tipo Monument Extended) para un hero más arquitectónico. Decisión final al montar el hero.
- Sobre terracota, la crema en Fraunces grande se ve editorial y cálida.
- Pesos: bajo (300/400) en tamaños gigantes — elegancia, no bold.

### Body — limpia, que desaparezca
- **Hanken Grotesk** o **Neue Haas Grotesk** (NO Inter en todo — el research lo marca como señal "barata"). Sans neutra, legible, que deja respirar a la display.

### Reglas
- Tensión de pesos y tamaños dramática (research: la falta de tensión = placeholder).
- Tracking display negativo (-0.02 a -0.03em), leading apretado (1.0-1.1).
- Sistema de números/índices (01, 02 / 001) que atraviesa el sitio — da sensación de archivo editorial, no de portfolio básico.

---

## Motion — NARRATIVO, no decorativo

Regla mental: si una animación no cuenta nada, se elimina. 2-3 "momentos" memorables en toda la home, no 20 fades.

### Los momentos que SÍ (del research, factibles con GSAP+Lenis)
1. **Hero text reveal** — SplitText por carácter/línea con máscara, `expo.out`, ~1s. El titular "emerge del mundo", no aparece de la nada.
2. **Portfolio con mecánica** — image-trail al hover (las imágenes de proyectos siguen el cursor, tipo For The People) O scroll-driven scaling de un caso destacado (tipo Plusdrie). UN comportamiento memorable, ejecutado perfecto.
3. **Page transitions** — máscara/clip-path consistente en TODA navegación interna (Astro view transitions + GSAP). El sitio se siente como espacio continuo.

### Timing (calibración del research — coherente en TODO el sitio)
- Reveal carácter/línea: 0.8-1s, `expo.out`
- Fade imagen: 0.7-0.8s, `power2.out`
- Hover response: 0.13-0.2s, `power2.out`
- Page transition: 0.6-0.8s, `expo.inOut`
- Stagger: 0.04-0.08s
- NUNCA easing lineal en algo visible. NUNCA >1.2s en UI.

### Lo PROHIBIDO (lo que hicimos mal en v1)
- `whileInView` fade en cada sección
- Cursor personalizado (Locomotive no tiene)
- Magnetic buttons en todo
- Partículas flotantes
- Stagger de caracteres aleatorio sin propósito
- Motion que se luce a sí mismo en vez de servir al contenido

### Scroll
- Lenis smooth scroll, sincronizado con GSAP ScrollTrigger.
- `prefers-reduced-motion`: TODO degradado a estático/legible.

---

## Estructura / Layout

- **Editorial asimétrico.** Romper la grilla con intención. NO bento de cards uniformes.
- **Densidad con ritmo:** alternar secciones densas (portfolio, lista) con secciones de aire (declaración editorial). El "vacío" de v1 vino de un elemento solo flotando sin tensión — la cura no es más elementos, es más intención en el que está.
- **Sistema de índices numéricos** a lo largo del sitio (servicios, proyectos, proceso).
- **Footer como tarjeta de presentación standalone** — con personalidad, no logo+links genérico. Quien llegue solo al footer debe saber qué hace SCUART y cómo contactar.

---

## Filosofía de ejecución (lo más importante)

Del research, palabra por palabra: *"SCUART no necesita WebGL. Necesita 3 cosas bien ejecutadas: una tipografía con personalidad, un sistema de motion narrativo (no decorativo), y un copy que tenga un punto de vista real."*

QUITAR antes que agregar. Si un elemento se puede sacar y la página sigue funcionando, se saca. El lujo está en la calidad de las pocas decisiones que quedan: el color, el grano, la fuente, el copy, los 2-3 momentos de motion que existen por una razón.

---

## Stack

- **Astro 5** (nuevo proyecto, limpio) — rápido, SEO, view transitions nativas, lo que usan los estudios premium 2026 (ej. Joffrey Spitzer es Astro+GSAP).
- **GSAP** (core + ScrollTrigger + SplitText) — motion principal.
- **Lenis** — smooth scroll.
- **i18n nativo de Astro** — bilingüe ES/EN (/es/, /en/), default español.
- Fuentes self-hosted woff2 (no Google `<link>`) para performance.
- Grano: SVG/CSS, sin librería.

---

## Proceso de validación (NO repetir el error de v1)

v1 construyó 8 secciones antes de que William viera nada en vivo → se rechazó todo junto. v2:

1. Scaffold Astro + montar SOLO el hero en terracota con grano + motion.
2. William lo ve EN VIVO en localhost. Juzga: ¿el terracota cansa? ¿tiene alma? ¿el motion se siente caro?
3. Ajuste de hero hasta que William diga "este es el rumbo".
4. RECIÉN ahí, sección por sección, validando en vivo cada una.

Nada de construir a ciegas. El ojo de William valida cada paso.
