# BUILD

FROM node:20-alpine AS builder

WORKDIR /app

# INSTALL PNPM
RUN npm install -g pnpm

# COPY DEPENDENCIES FILES
COPY package.json pnpm-lock.yaml ./

# INSTALL DEPENDENCIES
RUN pnpm install --frozen-lockfile

# COPY SOURCE FILES
COPY . .

# BUILD APPLICATION
RUN pnpm build

# RUNTIME
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# INSTALL PNPM ON RUNTIME
RUN npm install -g pnpm

# COPY JUST THE NECESSARY FROM BUILDER
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["pnpm", "start"]