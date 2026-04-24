# OM Studio

Monorepo scaffold for the OM Studio gallery project.

Current structure:

```text
apps/
  backend/        NestJS + Fastify API
  frontend/       React + Vite app
packages/
  shared-types/   Shared TypeScript contracts
```

## Requirements

- Node `22.x`
- npm `10+`

This repo includes [.nvmrc](/Users/omar/Documents/repos/catalogo_test/.nvmrc:1), so if you use `nvm`:

```bash
nvm use
```

If Node 22 is not installed yet:

```bash
nvm install 22
nvm use 22
```

## Install

From the repo root:

```bash
npm install
```

## Run The Apps

Frontend dev server:

```bash
npm run dev:frontend
```

- App URL: `http://localhost:5173`

Backend dev server:

```bash
npm run dev:backend
```

- API URL: `http://localhost:3000`
- Health endpoint: `http://localhost:3000/health`

Run the frontend and backend in separate terminals.

## Build

Build all workspaces:

```bash
npm run build
```

## Test

Run all workspace tests:

```bash
npm test
```

Current test stack:

- Backend: Jest
- Frontend: Vitest + Testing Library

## Lint And Typecheck

Lint all workspaces:

```bash
npm run lint
```

Typecheck all workspaces:

```bash
npm run typecheck
```

Check formatting:

```bash
npm run format:check
```

Apply formatting:

```bash
npm run format
```

## Useful Workspace Commands

Run a command for only one workspace:

```bash
npm run test -w @om-studio/frontend
npm run test -w @om-studio/backend
npm run typecheck -w @om-studio/shared-types
```

## Current Scope

This repo is currently at the Phase 1 scaffold stage:

- workspace layout is in place
- frontend and backend app skeletons exist
- shared types package exists
- lint, formatting, and test runners are configured

Feature work from later phases is not implemented yet.
