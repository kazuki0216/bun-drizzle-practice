#!/bin/sh

# Check if the project folder exists (to avoid overwriting it)
if [ ! -d "/app/src" ]; then
  echo "No Hono project found. Creating a new Hono project..."
  bun create hono@latest
else
  echo "Hono project already exists. Skipping project creation."
fi
