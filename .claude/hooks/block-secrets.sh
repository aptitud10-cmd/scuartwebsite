#!/bin/bash
# block-secrets.sh — PreToolUse hook, matcher: Write|Edit|MultiEdit
# Impide escribir secrets/API keys en archivos.
# Exit 2 = bloqueado. Exit 0 = permitido.

INPUT=$(cat)
# El contenido puede venir en .content (Write) o .new_string (Edit)
CONTENT=$(echo "$INPUT" | jq -r '.tool_input.content // .tool_input.new_string // empty')
FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# No chequear archivos .env.example o documentación (pueden tener placeholders)
if echo "$FILE" | grep -qE '\.env\.example|\.md$|README'; then
  exit 0
fi

# Patterns de secrets reales
if echo "$CONTENT" | grep -qE 'sk_live_[a-zA-Z0-9]{20,}'; then
  echo "🛑 BLOQUEADO: Stripe live secret key detectada. Usá variable de entorno." >&2
  exit 2
fi

if echo "$CONTENT" | grep -qE 'ghp_[a-zA-Z0-9]{36}'; then
  echo "🛑 BLOQUEADO: GitHub personal token detectado. Usá variable de entorno." >&2
  exit 2
fi

if echo "$CONTENT" | grep -qE 'AKIA[A-Z0-9]{16}'; then
  echo "🛑 BLOQUEADO: AWS access key detectada. Usá variable de entorno." >&2
  exit 2
fi

# Supabase service role JWT (empieza con eyJ y es largo)
if echo "$CONTENT" | grep -qE 'service_role.*eyJ[a-zA-Z0-9_-]{40,}'; then
  echo "🛑 BLOQUEADO: Supabase service_role key detectada. NUNCA hardcodear (constitución S2)." >&2
  exit 2
fi

# Password hardcodeado obvio
if echo "$CONTENT" | grep -qiE 'password\s*[:=]\s*["'"'"'][^"'"'"']{8,}["'"'"']'; then
  echo "⚠️ Posible password hardcodeado. Verificá que no sea un secret real." >&2
  exit 2
fi

exit 0
