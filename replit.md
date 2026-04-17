# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Hybrid AI Marketing Agency Website (`artifacts/agency-website`)
- Preview path: `/`
- React + Vite frontend, single-page landing site
- Agency name: **GrowthAI**
- Dark SaaS-style design (deep dark bg + purple/cyan gradient accents)
- Sections: Hero, Services, Industries, How It Works, Pricing, Testimonials, About, Contact, Footer
- Contact form connects to backend API (`POST /api/leads`) — stores leads in PostgreSQL

### API Server (`artifacts/api-server`)
- Express 5 backend
- Routes: `GET /api/healthz`, `POST /api/leads`, `GET /api/leads`
- Lead submissions stored in `leads` table via Drizzle ORM

## Database Schema

### `leads` table
- `id` (serial PK)
- `name` (text)
- `email` (text)
- `phone` (text)
- `business_type` (text)
- `message` (text)
- `created_at` (timestamp)
