# Propuesta — Copy nuevo + Sección dark con scroll-reveal

**Fecha:** 2026-07-22
**Estado:** PROPUESTA — nada implementado. Espera OK de William, sección por sección.
**Método:** referencia de William (páginas viejas) → rescatar lo bueno, descartar el humo.

---

## 0. El efecto de scroll-reveal que pidió William (spec técnica)

**Qué es:** el texto arranca en gris tenue (`--ink-42` sobre tinta, o gris sobre
crema) y **cada palabra se aclara a hueso/tinta pleno a medida que scrolleás**.
No es un fade que se dispara una vez — la opacidad de cada palabra está atada al
progreso del scroll (efecto "text focus on scroll", patrón Locomotive / Aristide
Benoist). En el screenshot viejo se ve a medio camino: "designed" ya blanco,
"with intent, not trend" todavía gris.

**Con qué se hace (ya está en el repo, no hace falta librería nueva):**
- **GSAP + SplitText** → parte el statement en palabras (`type: 'words'`).
- **ScrollTrigger con `scrub: true`** → liga la animación al scroll en vez de
  dispararla una vez. Esta es la única diferencia con el reveal del Manifesto
  actual (que usa `once: true`).
- **Lenis** → ya monta el smooth-scroll (`window.__lenis`); el scrub se siente
  fluido gracias a eso.
- `stagger` sobre las palabras: cada una entra a color pleno un pelín después de
  la anterior, ligado al avance del scroll.
- **prefers-reduced-motion:** todo el texto a color pleno, estático (igual que
  hoy hacen las otras secciones).

**Confirmado por el research 2026** (DESIGN_RESEARCH_AUDIT §6): "motion narrativo
ligado a scroll que revela contenido progresivamente" está vigente, no fechado.

---

## 1. Copy — veredicto sobre lo viejo

### RESCATAR (es concreto, dice algo propio)

**Servicios con línea de beneficio** — hoy el sitio NO tiene esto y es lo más
valioso de las páginas viejas. Cada servicio dice qué resuelve:

| Servicio | Línea (EN) | Línea (ES) |
|---|---|---|
| Web Platforms | Sites that load fast, rank on search, and turn visitors into clients. | Sitios que cargan rápido, rankean en Google y convierten visitas en clientes. |
| SaaS + Systems | Full products — auth, billing, dashboards, APIs. From zero to launch. | Productos completos — auth, cobros, dashboards, APIs. De cero a producción. |
| E-commerce | Stores built to sell — fast checkout, inventory, ready to grow. | Tiendas hechas para vender — checkout rápido, inventario, listas para crecer. |
| AI Automation | Automate the repetitive work so the team focuses on what actually matters. | Automatizá lo repetitivo para que el equipo se enfoque en lo que importa. |
| Ordering · Booking | Take orders, manage bookings and run operations without the manual chaos. | Tomá pedidos, gestioná reservas y operá sin el caos manual. |
| Brand Identity | A visual system that looks consistent everywhere — not assembled by accident. | Un sistema visual coherente en todos lados — no armado por accidente. |

**Headline hero viejo** — mejor que el actual (el hero actual no tiene headline,
solo wordmark):
> "Design + technology for businesses that need to look sharp and work better."
> ES: "Diseño y tecnología para negocios que necesitan verse bien y funcionar mejor."

**Método con "what changes"** — el formato "qué cambia para el negocio" ya está
en el sitio (StudioSection), el viejo lo confirma como acierto. Se mantiene.

### DESCARTAR (humo genérico — cualquier agencia lo diría)

- ❌ "We make your brand feel unforgettable, with websites that earn trust, not
  just attention — designed with intent, not trend." → suena bien, no dice nada.
- ❌ "Our mission is to make technology feel human by designing digital products
  that are intuitive, purposeful, and meaningful to people." → mission statement de relleno.
- ❌ "LET'S BUILD SOMETHING." → cliché de portfolio.
- ❌ "WE DESIGN FOR LONGEVITY / CLARITY FIRST, CRAFT ALWAYS, BUILT TO SCALE" →
  las tres palabras-virtud genéricas. (La *estructura* de nota lateral sí sirve;
  el texto no.)

### YA TENÉS y es mejor que todo lo viejo
- ✅ "No hacemos webs. Construimos ventajas competitivas." (Manifesto) — filoso, propio.

---

## 2. La sección dark — lo que realmente funciona del screenshot

Lo bueno de esa página vieja NO es el copy — es la **estructura**: un statement
grande centrado + dos notas de anclaje al pie (una a la izquierda, una a la
derecha) + el scroll-reveal por palabra. Ese esqueleto es sólido. El relleno era
malo.

**Nota importante:** tu sitio YA tiene secciones oscuras (Manifesto y Studio son
fondo tinta). Una sección dark no rompe nada — el sistema ya alterna crema/tinta.

### Candidata A — "Servicios" como sección dark con scroll-reveal (RECOMENDADA)

Reemplaza al marquee de servicios actual (que el visual-critic marcó como "el
patrón más de plantilla del sitio"). En vez de texto corriendo infinito, una
sección dark donde los 6 servicios se revelan al scroll, cada uno con su línea de
beneficio (las de la tabla de arriba).

```
[ fondo tinta ]

  SERVICIOS / SERVICES                          (kicker mono, arriba-izq)

  001  WEB PLATFORMS
       Sitios que cargan rápido, rankean en Google
       y convierten visitas en clientes.          ← scroll-reveal por palabra

  002  SAAS + SYSTEMS
       Productos completos — auth, cobros...

  ... (los 6)
```

- El scroll-reveal aplica a las líneas de beneficio: grises al entrar, se aclaran
  al scrollear.
- Es el lugar natural del copy bueno que hoy no tiene dónde vivir.
- Mata el marquee genérico de un tiro.

### Candidata B — Statement dark de cierre (statement + 2 notas laterales)

Toma la estructura exacta del screenshot viejo (statement grande + nota izq +
nota der), pero con copy propio. Ejemplo con material que ya es tuyo:

```
[ fondo tinta ]

       No decoramos.
       Decidimos.                    ← statement, scroll-reveal por palabra

  ESTUDIO INDEPENDIENTE          Diseño y tecnología, en
  NUEVA YORK · LATAM             un solo equipo.
  (nota izq, mono)               (nota der, cuerpo)
```

- Reutiliza el tagline que ya existe ("No decoramos. Decidimos.").
- Riesgo: puede solaparse con el Manifesto (que ya es un statement dark). Habría
  que ubicarla lejos, como cierre antes del footer.

---

## 3. Recomendación

1. **Candidata A** (servicios dark con scroll-reveal) — es la que suma copy nuevo
   valioso Y elimina el marquee flojo. Máximo impacto.
2. El **headline del hero viejo** entra cuando ataquemos el hero (pendiente aparte).
3. **Candidata B** solo si querés un cierre fuerte antes del footer — opcional, y
   con cuidado de no repetir el Manifesto.

**Nada de esto se implementa sin tu OK, sección por sección.** Y todo lo visual
lo ves en 3 viewports antes de pasar a nada.
