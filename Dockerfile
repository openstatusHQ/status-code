FROM oven/bun

WORKDIR /app

# Copy project
COPY . .

EXPOSE 3000

RUN bun install

CMD ["bun", "start"]