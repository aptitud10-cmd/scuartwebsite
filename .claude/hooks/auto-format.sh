#!/bin/bash
# auto-format.sh — PostToolUse hook, matcher: Write|Edit|MultiEdit
# Formatea automáticamente el archivo después de editarlo.
# Siempre exit 0 (PostToolUse no puede bloquear).

INPUT=$(cat)
FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Si no hay archivo, salir
[ -z "$FILE" ] && exit 0
# Si el archivo no existe, salir
[ ! -f "$FILE" ] && exit 0

# Formatear según extensión
case "$FILE" in
  *.ts|*.tsx|*.js|*.jsx|*.json|*.css)
    # Preferir Biome si existe, sino Prettier
    if command -v biome >/dev/null 2>&1; then
      npx biome format --write "$FILE" 2>/dev/null
    elif [ -f "node_modules/.bin/prettier" ]; then
      npx prettier --write "$FILE" 2>/dev/null
    fi
    ;;
  *.astro)
    # Astro: solo Prettier con plugin
    if [ -f "node_modules/.bin/prettier" ]; then
      npx prettier --write "$FILE" 2>/dev/null
    fi
    ;;
  *.py)
    if command -v black >/dev/null 2>&1; then
      black "$FILE" 2>/dev/null
    fi
    ;;
esac

exit 0
