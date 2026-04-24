# OM Studio

Monorepo scaffold for the OM Studio gallery project.

Current MVP direction:

- deploy as a static site on GitHub Pages
- frontend is the MVP delivery target
- content is served from static frontend data files

Current structure:

```text
apps/
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

## Run The App

Frontend dev server:

```bash
npm run dev
```

or:

```bash
npm run dev:frontend
```

- App URL: `http://localhost:5173`

## Build

Build all workspaces:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Test

Run all workspace tests:

```bash
npm test
```

Current test stack:

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
npm run typecheck -w @om-studio/shared-types
```

## GitHub Pages Deployment

The repo includes a GitHub Actions workflow at [.github/workflows/deploy-pages.yml](/Users/omar/Documents/repos/catalogo_test/.github/workflows/deploy-pages.yml:1).

It will:

- install dependencies with `npm ci`
- run `npm run typecheck`
- run `npm test`
- run `npm run build`
- publish `apps/frontend/dist` to GitHub Pages

The Vite config is set up to use the repository base path `/catalogo_test/` during GitHub Actions builds.

## Current Scope

This repo is currently at the Phase 1 scaffold stage, and the plan has shifted to a GitHub Pages MVP:

- workspace layout is in place
- frontend app is the MVP target
- shared types package exists
- lint, formatting, and test runners are configured

Feature work from later phases is not implemented yet.
