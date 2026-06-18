#!/bin/bash
# block-ui-without-gate.sh — PreToolUse hook, matcher: Write|Edit|MultiEdit
# DESIGN GATE FÍSICO: impide CREAR un componente de UI cliente NUEVO si no hay
# un veredicto aprobado del visual-critic en el proyecto.
#
# Por qué existe: el Design Gate (P7/P12) se saltaba porque dependía de que
# alguien se acordara de invocar al visual-critic. Este hook lo convierte en
# barrera física — como block-secrets, no se puede ignorar.
#
# Alcance (decisión de William):
#   - Bloquea CREAR un componente de UI nuevo sin gate.
#   - Bloquea EDICIONES GRANDES de UI (rediseños: >30 líneas de cambio) sin gate.
#   - Ediciones CHICAS de UI (typo, color, espaciado: ≤30 líneas) PASAN — es fix,
#     no rediseño. No se traba el mantenimiento.
#   - Backend, lógica, tests, config, docs → PASAN sin molestar.
#
# El umbral de 30 líneas distingue fix (1-5 líneas) de rediseño (reescribir un
# grid/composición = 60+). Lo que rompió Capabilities hoy fueron ~60 líneas → habría bloqueado.
#
# Exit 2 = bloqueado. Exit 0 = permitido.

# Umbral de líneas que separa "fix chico" de "rediseño".
GATE_BIG_EDIT_LINES=30

INPUT=$(cat)
FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')
TOOL=$(echo "$INPUT" | jq -r '.tool_name // empty')

# Sin archivo → no aplica
[ -z "$FILE" ] && exit 0

# ── ¿Es UI de cara al usuario? ──────────────────────────────────────────────
# Solo .astro/.tsx/.jsx dentro de components/ pages/ sections/ (UI cliente).
# Cualquier otra cosa (.ts de lógica, server/, lib/, tests, config) pasa.
case "$FILE" in
  *components/*.astro|*components/*.tsx|*components/*.jsx|\
  *pages/*.astro|*pages/*.tsx|*pages/*.jsx|\
  *sections/*.astro|*sections/*.tsx|*sections/*.jsx)
    : # es UI cliente — seguimos chequeando
    ;;
  *)
    exit 0 # no es UI cliente — pasa sin molestar
    ;;
esac

# ── ¿Es archivo nuevo, edición chica, o edición grande? ─────────────────────
# Si el archivo NO existe → es CREACIÓN de UI nueva → siempre requiere gate.
# Si existe → medimos el tamaño del cambio:
#   - cambio ≤ 30 líneas  → fix chico (typo/color/espaciado) → PASA, no traba.
#   - cambio  > 30 líneas → rediseño (reescribir composición) → requiere gate.
if [ -f "$FILE" ]; then
  # Archivo existente → contar líneas del cambio entrante.
  # Write usa .content; Edit usa .new_string; MultiEdit usa .edits[].new_string.
  # Tomamos el primero que tenga texto (// hace fallback campo por campo).
  CHANGED_TEXT=$(echo "$INPUT" | jq -r '
    .tool_input.content
    // .tool_input.new_string
    // ([.tool_input.edits[]?.new_string] | join("\n"))
    // ""
  ')
  # Contar líneas (printf evita el problema de echo con \n; wc -l cuenta saltos).
  CHANGED=$(printf '%s\n' "$CHANGED_TEXT" | wc -l)

  if [ "${CHANGED:-0}" -le "$GATE_BIG_EDIT_LINES" ]; then
    exit 0 # edición chica → fix, no rediseño → pasa
  fi
  # else: edición grande de UI existente → cae al chequeo de gate abajo.
fi

# A partir de acá: es UI cliente NUEVA, o una edición GRANDE de UI existente.
# En ambos casos exigimos gate aprobado.

# ── ¿Hay veredicto aprobado del visual-critic? ──────────────────────────────
# Buscamos el archivo de gate desde el cwd hacia arriba (raíz del proyecto).
# Aprobado si existe .design-gate/APPROVED, o un DESIGN_GATE.md que contenga
# APPROVED_FOR_IMPLEMENTATION o APPROVED_WITH_MINOR_FIXES.
GATE_OK=0

# .design-gate/APPROVED en el cwd o ancestros cercanos
for dir in "." ".." "../.."; do
  if [ -f "$dir/.design-gate/APPROVED" ]; then GATE_OK=1; break; fi
  if [ -f "$dir/DESIGN_GATE.md" ] && grep -qE 'APPROVED_FOR_IMPLEMENTATION|APPROVED_WITH_MINOR_FIXES' "$dir/DESIGN_GATE.md"; then
    GATE_OK=1; break
  fi
done

if [ "$GATE_OK" -eq 1 ]; then
  exit 0 # gate aprobado → puede crear el componente
fi

# ── Bloqueo ─────────────────────────────────────────────────────────────────
if [ -f "$FILE" ]; then
  echo "🛑 DESIGN GATE: '$FILE' — rediseño grande de UI (>$GATE_BIG_EDIT_LINES líneas) sin diseño aprobado." >&2
else
  echo "🛑 DESIGN GATE: '$FILE' es un componente de UI NUEVO sin diseño aprobado." >&2
fi
echo "" >&2
echo "El Design Gate (P7/P12) exige que el visual-critic apruebe el diseño ANTES de codear UI." >&2
echo "Esto evita producir secciones genéricas saltándose la dirección artística." >&2
echo "" >&2
echo "Para destrabar:" >&2
echo "  1. Corré director-creativo → diseñadores → visual-critic (Etapa A)." >&2
echo "  2. Cuando el visual-critic dé APPROVED_FOR_IMPLEMENTATION, dejá constancia:" >&2
echo "     creá '.design-gate/APPROVED' o un 'DESIGN_GATE.md' con el veredicto." >&2
echo "  3. Reintentá. (O usá /scuart-agency-os:rediseno que corre el flujo correcto.)" >&2
exit 2
