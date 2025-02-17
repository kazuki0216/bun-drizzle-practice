FROM oven/bun:latest

WORKDIR /app

# Copy and install dependencies
COPY package.json bun.lockb ./
RUN bun install --production

# Copy project files
COPY . .

# Expose port (Hono typically runs on 3000)
EXPOSE 3000

# Start the Bun app
CMD ["bun", "run", "src/app.tsx"]
