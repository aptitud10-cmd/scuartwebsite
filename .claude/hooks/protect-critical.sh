#!/bin/bash
# protect-critical.sh — PreToolUse hook, matcher: Write|Edit|MultiEdit
# Bloquea edición de archivos críticos sin confirmación explícita.
# Exit 2 = bloqueado. Exit 0 = permitido.

INPUT=$(cat)
FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

[ -z "$FILE" ] && exit 0

# Archivos críticos que no se editan por accidente
case "$FILE" in
  *.specify/memory/constitution.md)
    echo "🛑 PROTEGIDO: constitution.md es un archivo crítico del proyecto." >&2
    echo "   Si realmente querés modificar la constitución, decílo explícitamente a William primero." >&2
    exit 2
    ;;
  *.specify/specs/in-progress/*)
    echo "⚠️ PROTEGIDO: estás por editar un spec activo. Los specs se cambian con cuidado." >&2
    echo "   Confirmá con William que este cambio al spec es intencional." >&2
    exit 2
    ;;
  *.env|*.env.local|*.env.production)
    echo "🛑 PROTEGIDO: archivos .env no se editan automáticamente (contienen secrets)." >&2
    echo "   William debe editar las variables de entorno manualmente." >&2
    exit 2
    ;;
esac

exit 0
