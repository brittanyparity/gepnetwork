#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="${HOME}/.local/bin:${HOME}/.local/share/mise/shims:${PATH}"
eval "$("${HOME}/.local/bin/mise" activate bash 2>/dev/null || "${HOME}/.local/bin/mise" activate zsh)"
cd "$ROOT"
corepack enable 2>/dev/null || true
corepack prepare pnpm@10.34.3 --activate 2>/dev/null || true
exec pnpm run dev
