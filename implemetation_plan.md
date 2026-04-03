# OM Studio Implementation Plan

## 1. Recommended Backend Frameworks

### Recommended Choice: NestJS with Fastify Adapter

This is the best fit for the current project.

Why:

- NestJS is built with TypeScript support and provides a strong modular architecture for separating product, inquiry, content, i18n, and admin concerns.
- NestJS is well-suited for teams because it gives a predictable structure around controllers, services, modules, validation, and testing.
- NestJS can run on Fastify, which gives better runtime performance than using Express directly while keeping Nest's architecture.
- The project is small now, but the requirements already point toward future growth into e-commerce, admin workflows, and more backend logic. NestJS handles that transition better than a minimal framework.

Recommended backend stack:

- Framework: NestJS
- HTTP adapter: Fastify
- Language: TypeScript
- Validation: Nest validation pipeline
- Tests: Jest or Vitest, with a preference for Jest if the team uses standard Nest scaffolding

Official sources:

- NestJS docs: https://docs.nestjs.com/
- NestJS overview: https://docs.nestjs.com/
- Fastify docs: https://fastify.dev/docs/latest/

### Alternative 1: Fastify

Why consider it:

- Very fast and lightweight
- Good plugin model
- Strong JSON schema support

Why not the primary recommendation:

- It gives less structure out of the box than NestJS
- The team would need to define more architecture conventions manually
- It is a better fit for teams that already know how they want to organize services and modules

Official source:

- Fastify docs: https://fastify.dev/docs/latest/

### Alternative 2: Hono

Why consider it:

- Very lightweight
- TypeScript-friendly
- Simple setup

Why not the primary recommendation:

- Better suited for very small APIs or edge-style deployments
- Less aligned with the planned growth toward a more feature-rich admin and future commerce flows

Official source:

- Hono docs: https://hono.dev/docs/

## 2. Recommended Frontend Stack

Frontend requirements are fixed to React and TypeScript.

Recommended frontend stack:

- Framework: React
- Build tool: Vite
- Language: TypeScript
- Routing: React Router
- Styling: CSS modules or Tailwind CSS, depending on team preference
- Localization: `react-i18next` or equivalent
- Tests: Vitest + React Testing Library

## 3. Delivery Strategy

The v1 site should be implemented as two separate applications:

- Frontend application
- Backend application

The backend should expose a simple API consumed by the React frontend.

Important constraint for v1:

- All data is hardcoded
- No database is required in this phase
- Admin changes should be treated as in-memory changes only unless the team explicitly adds a mock persistence layer
- If the server restarts, data resets to its seeded hardcoded state

This keeps the first implementation simple while preserving a clean boundary for later replacement with a real database and storage system.

## 4. High-Level Architecture

### Frontend Responsibilities

- Render the public website
- Render the admin UI
- Fetch data from the backend API
- Handle language switching
- Submit product inquiry forms
- Manage authenticated admin session UI state

### Backend Responsibilities

- Serve public API endpoints for products and content
- Serve admin API endpoints for mock CRUD operations
- Validate incoming requests
- Handle inquiry submission and email service integration boundary
- Enforce admin authentication
- Own hardcoded source data and in-memory mutations

## 5. Proposed Repository Structure

If using a monorepo:

```text
/apps
  /frontend
  /backend
/packages
  /shared-types
```

If using separate repos, keep the same logical split:

- `frontend`
- `backend`
- optional shared TypeScript package for contracts

## 6. Backend Module Plan

Recommended backend architecture using NestJS modules.

### 6.1 Core Modules

#### `app`

Responsibility:

- App bootstrap
- global middleware
- CORS
- validation setup
- route registration

#### `config`

Responsibility:

- environment configuration
- feature flags
- admin credentials configuration
- email provider configuration placeholders

#### `auth`

Responsibility:

- admin login endpoint
- session or token issuance
- route protection for admin endpoints

Notes:

- For v1, a single admin user is enough
- Credentials can come from environment variables

#### `products`

Responsibility:

- expose public product data
- expose admin CRUD for products
- manage in-memory product list seeded from hardcoded fixtures

Product model fields:

- `id`
- `slug`
- `name`
- `photos`
- `dimensions`
- `material`
- `price`
- `currency`
- `availability`
- `localeContent`

#### `content`

Responsibility:

- manage About page content
- manage Contact page content
- expose public and admin content endpoints
- store seeded bilingual page content in memory

#### `inquiries`

Responsibility:

- receive product inquiry submissions
- validate request payloads
- map inquiries to product references
- forward inquiries to an email service abstraction

Notes:

- For v1, the implementation can use a mock email adapter if no real email service exists yet
- The backend must never expose the destination email address to the client

#### `i18n`

Responsibility:

- language normalization
- content mapping between Spanish and English
- fallback behavior

#### `health`

Responsibility:

- lightweight health endpoint for deployment verification

### 6.2 Backend Data Strategy

Use hardcoded seed files in TypeScript:

```text
src/seeds/products.seed.ts
src/seeds/content.seed.ts
src/seeds/admin.seed.ts
```

Behavior:

- Application starts with hardcoded data
- Services load seed data into memory
- Admin actions mutate in-memory state
- No persistence across restarts

### 6.3 Backend API Plan

Public endpoints:

- `GET /api/products`
- `GET /api/products/:slug`
- `GET /api/content/about`
- `GET /api/content/contact`
- `POST /api/inquiries`

Admin endpoints:

- `POST /api/admin/auth/login`
- `POST /api/admin/auth/logout`
- `GET /api/admin/products`
- `POST /api/admin/products`
- `PUT /api/admin/products/:id`
- `DELETE /api/admin/products/:id`
- `PUT /api/admin/content/about`
- `PUT /api/admin/content/contact`

### 6.4 Backend Validation Rules

Validate at minimum:

- inquiry name required
- inquiry email valid
- inquiry message required
- product reference required
- price must be numeric
- availability limited to `Disponible` and `Vendido`
- required bilingual fields enforced where applicable

### 6.5 Backend Unit Test Plan

Unit tests should cover:

- product service returns seeded products correctly
- product service filters or maps by locale correctly
- product service updates availability correctly
- content service returns About and Contact content correctly
- inquiry service validates payloads
- inquiry service attaches the correct product reference
- auth service accepts valid admin credentials and rejects invalid ones
- DTO or schema validation rejects malformed requests

Additional API-level tests recommended:

- public product endpoints return expected shapes
- inquiry endpoint rejects invalid payloads
- admin endpoints reject unauthenticated access

## 7. Frontend Module Plan

Use React with TypeScript and route-based feature separation.

### 7.1 Core Frontend Modules

#### `app`

Responsibility:

- app bootstrapping
- router setup
- layout shell
- language provider

#### `pages/home`

Responsibility:

- landing experience
- featured gallery introduction
- route into the Gallery experience

#### `pages/gallery`

Responsibility:

- render product list
- render product cards
- surface price and availability clearly

#### `pages/product`

Responsibility:

- render detailed product view
- show photos, dimensions, material, price, and availability
- provide inquiry CTA

#### `pages/about`

Responsibility:

- render bilingual About content fetched from the backend

#### `pages/contact`

Responsibility:

- render contact information from backend
- render Instagram link
- optionally render general contact guidance if defined later

#### `pages/admin`

Responsibility:

- admin login screen
- protected admin dashboard
- product management UI
- content management UI

### 7.2 Shared Frontend Modules

#### `components/products`

Responsibility:

- product card
- product gallery grid
- product badge for availability
- product detail image gallery

#### `components/forms`

Responsibility:

- inquiry form
- admin product form
- admin content form
- validation message rendering

#### `components/layout`

Responsibility:

- header
- footer
- language switcher
- navigation

#### `features/i18n`

Responsibility:

- translation dictionaries for UI chrome
- locale switching
- default Spanish routing behavior

#### `features/api`

Responsibility:

- typed API client
- request/response mapping
- auth token handling

#### `features/auth`

Responsibility:

- admin login state
- route guards
- session storage handling

### 7.3 Frontend Route Plan

Public routes:

- `/`
- `/gallery`
- `/product/:slug`
- `/about`
- `/contact`

Admin routes:

- `/admin/login`
- `/admin`
- `/admin/products`
- `/admin/content`

### 7.4 Frontend State Plan

Use a simple approach:

- server state via fetch layer or TanStack Query
- local form state inside components
- auth session state in context or a small store

Because v1 is small, avoid adding heavy state management unless the team already standardizes on it.

### 7.5 Frontend Unit Test Plan

Unit tests should cover:

- product card renders price and availability correctly
- product detail page renders all required fields
- inquiry form validates required fields before submit
- language switcher changes visible UI language
- admin route guard blocks unauthenticated access
- admin product form submits expected payload shape
- About and Contact pages render API content correctly

Additional UI integration tests recommended:

- visitor can navigate from gallery to product detail
- visitor can submit an inquiry for a product
- admin can log in and update a product in memory

## 8. Shared TypeScript Contracts

Create a shared types package or shared folder for:

- `Product`
- `AvailabilityStatus`
- `InquiryRequest`
- `InquiryResponse`
- `AboutContent`
- `ContactContent`
- `AdminLoginRequest`
- API response envelopes if used

This reduces drift between frontend and backend.

## 9. Implementation Phases

### Phase 1: Project Setup

- initialize frontend React + TypeScript app
- initialize backend NestJS + TypeScript app
- configure linting, formatting, and test runners
- define shared types

### Phase 2: Backend Foundations

- create backend module structure
- add seed data files
- implement public products and content endpoints
- implement inquiry endpoint with mock email service
- add auth guard and mock admin login

### Phase 3: Frontend Public Site

- build layout and navigation
- implement bilingual shell
- build Gallery page
- build Product Detail page
- build About and Contact pages
- connect to backend API

### Phase 4: Admin Area

- implement admin login
- build product list and edit flows
- build About and Contact content management
- wire admin changes to in-memory backend services

### Phase 5: Testing and Hardening

- add unit tests for backend services
- add unit tests for frontend components and forms
- add selected API and UI integration tests
- verify responsive behavior
- verify language switching and availability rendering

## 10. Testing Scope

### Backend

- service unit tests
- controller or route tests
- validation tests
- auth guard tests

### Frontend

- component unit tests
- form validation tests
- route protection tests
- page rendering tests

### End-to-End Smoke Tests

At minimum, automate these smoke flows:

- browse gallery
- open product detail
- submit inquiry
- admin login
- update product availability

## 11. Risks and Constraints

### Main Risks

- Hardcoded data means admin edits are not durable across restarts
- Bilingual content doubles content management effort
- Product photo handling can become complex if image hosting is deferred too long
- Mock authentication is sufficient for v1 but not for production-hardening without follow-up work

### Mitigations

- keep data access behind service interfaces
- keep frontend fully API-driven
- isolate authentication, inquiry, and content modules
- treat image storage as a replaceable service boundary

## 12. Recommended Technical Decisions

- Use NestJS with Fastify for the backend
- Use React + Vite for the frontend
- Use TypeScript across both applications
- Keep a strict API contract between frontend and backend
- Keep data in TypeScript seed files for v1
- Use unit tests from the first iteration, not as a later cleanup step

## 13. Definition of Done

The implementation should be considered complete when:

- the frontend and backend run as separate applications
- all public pages from the requirements document are implemented
- products are served from backend hardcoded data
- admin can log in and update content in memory
- inquiry submission works through the backend
- the public site never exposes the destination email address
- Spanish is the default language and English is supported
- unit tests exist for core backend and frontend modules
- smoke-level integration coverage exists for the primary user flows
