#!/usr/bin/env bash
# Serve the Curious Engineer Studio site locally.
# Usage: ./serve.sh [port]
# Open http://127.0.0.1:PORT/ (default 8080)

set -euo pipefail

cd "$(dirname "$0")"
PORT="${1:-8080}"

echo "Serving $(pwd) at http://127.0.0.1:${PORT}/"
echo "Press Ctrl+C to stop."

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT" --bind 127.0.0.1
elif command -v python >/dev/null 2>&1; then
  exec python -m http.server "$PORT" --bind 127.0.0.1
else
  echo "Python not found. Install Python 3, or run: npx --yes serve -l ${PORT}" >&2
  exit 1
fi
