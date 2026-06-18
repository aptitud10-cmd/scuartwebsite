#!/bin/bash
# block-dangerous.sh — PreToolUse hook, matcher: Bash
# Bloquea comandos destructivos antes de que se ejecuten.
# Exit 2 = bloqueado. Exit 0 = permitido.

INPUT=$(cat)
CMD=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Patterns peligrosos
if echo "$CMD" | grep -qE 'rm -rf /|rm -rf ~|rm -rf \*|:\(\)\{|mkfs|dd if=.*of=/dev/'; then
  echo "🛑 BLOQUEADO: comando destructivo detectado: $CMD" >&2
  exit 2
fi

# Push forzado a main/master
if echo "$CMD" | grep -qE 'git push.*(--force|-f).*(main|master)'; then
  echo "🛑 BLOQUEADO: git push --force a main/master no permitido. Usá una branch." >&2
  exit 2
fi

# git reset --hard sin confirmar (destruye cambios)
if echo "$CMD" | grep -qE 'git reset --hard'; then
  echo "⚠️ git reset --hard destruye cambios no commiteados. Confirmá con William antes." >&2
  exit 2
fi

# Borrado de .git
if echo "$CMD" | grep -qE 'rm -rf \.git'; then
  echo "🛑 BLOQUEADO: no borres el repositorio Git." >&2
  exit 2
fi

exit 0
