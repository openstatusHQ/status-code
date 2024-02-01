FROM oven/bun

WORKDIR /app

# Copy project
COPY . .

RUN bun install

CMD ["bun", "start"]