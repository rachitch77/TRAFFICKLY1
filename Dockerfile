# ─── Stage 1: Builder ────────────────────────────────────────────────────────
FROM node:22-slim AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY tsconfig.base.json ./tsconfig.base.json

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY lib/db/package.json                     lib/db/package.json
COPY lib/api-spec/package.json               lib/api-spec/package.json
COPY lib/api-zod/package.json                lib/api-zod/package.json
COPY lib/api-client-react/package.json       lib/api-client-react/package.json
COPY artifacts/api-server/package.json       artifacts/api-server/package.json
COPY artifacts/agency-website/package.json   artifacts/agency-website/package.json

COPY lib/ lib/
COPY artifacts/api-server/ artifacts/api-server/
COPY artifacts/agency-website/ artifacts/agency-website/

RUN pnpm install --frozen-lockfile
RUN NODE_ENV=production BASE_PATH=/ PORT=3000 \
    pnpm --filter @workspace/agency-website run build

RUN pnpm --filter @workspace/api-server run build


# ─── Stage 2: Runner ─────────────────────────────────────────────────────────
FROM node:22-slim AS runner

ENV NODE_ENV=production
ENV PORT=8080
ENV STATIC_DIR=/app/artifacts/agency-website/dist/public

WORKDIR /app

COPY --from=builder /app/artifacts/api-server/dist ./artifacts/api-server/dist
COPY --from=builder /app/artifacts/agency-website/dist/public ./artifacts/agency-website/dist/public

# ✅ FIXED PROPERLY (pnpm is enabled first)
RUN corepack enable && corepack prepare pnpm@latest --activate

# install only production dependencies
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY artifacts/api-server/package.json artifacts/api-server/package.json

RUN pnpm install --prod --frozen-lockfile

EXPOSE 8080

CMD ["node", "--enable-source-maps", "./artifacts/api-server/dist/index.mjs"]