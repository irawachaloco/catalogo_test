# OM Studio Implementation Plan

## 1. Delivery Constraint

The MVP must be deployable to GitHub Pages.

That changes the implementation strategy in a material way:

- the MVP must run as a static frontend application
- no custom backend server is part of the MVP
- no server-side authentication is part of the MVP
- no private email-routing endpoint is part of the MVP

Because GitHub Pages only hosts static assets, any feature that requires a protected server, hidden secrets, or runtime persistence must be deferred or replaced with a static alternative.

## 2. Recommended Frontend Stack

Recommended frontend stack:

- Framework: React
- Build tool: Vite
- Language: TypeScript
- Routing: React Router
- Styling: CSS modules or plain CSS
- Localization: simple in-app dictionaries or `react-i18next`
- Tests: Vitest + React Testing Library
- Deployment target: GitHub Pages

## 3. MVP Product Scope

The MVP should focus on a polished static gallery experience.

In scope for the GitHub Pages MVP:

- public marketing site
- bilingual shell with Spanish as default
- gallery page
- product detail page
- About page
- Contact page
- static product/content data stored in the frontend repo
- deployment to GitHub Pages

Out of scope for the GitHub Pages MVP:

- backend API
- protected admin area
- login
- in-browser content editing
- private email relay
- durable content management

## 4. Feature Adjustments Required By GitHub Pages

### Inquiry Flow

The original requirements assumed a backend-mediated inquiry flow so the destination email address would not be exposed publicly.

That is not compatible with a GitHub Pages-only MVP.

For the MVP, choose one of these static alternatives:

- link users to Instagram DM
- show a public contact email
- use a third-party hosted form service later

Recommended MVP choice:

- use Instagram as the primary contact CTA
- optionally display a public contact email if the business accepts that tradeoff

### Admin Area

The original plan included an admin area for product and content management.

That is not compatible with a GitHub Pages-only MVP unless a third-party CMS or hosted backend is introduced.

For the MVP:

- manage products and page content directly in repository data files
- treat content updates as developer or maintainer edits followed by redeployment

### Data Storage

All MVP data should live in static TypeScript or JSON files inside the frontend codebase.

Recommended content sources:

```text
src/data/products.ts
src/data/about.ts
src/data/contact.ts
src/data/site.ts
```

## 5. High-Level Architecture

### Frontend Responsibilities

- render the public website
- render the bilingual UI
- load static product and page content from local data modules
- render product detail views
- expose contact CTAs

### Data Responsibilities

- keep product and page content in version-controlled frontend data files
- keep bilingual content co-located with the relevant content model
- keep image references as static assets or hosted image URLs

## 6. Proposed Repository Structure

Recommended MVP structure:

```text
/apps
  /frontend
/packages
  /shared-types
```

Notes:

- the existing backend scaffold can remain temporarily while the repo transitions
- it is no longer part of the MVP plan
- future hosted services can be added later if admin or private inquiry routing becomes necessary

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
- provide contact CTA

#### `pages/about`

Responsibility:

- render bilingual About content from static data

#### `pages/contact`

Responsibility:

- render static contact guidance
- render Instagram link
- optionally render public email or other public contact method

### 7.2 Shared Frontend Modules

#### `components/products`

Responsibility:

- product card
- product gallery grid
- product badge for availability
- product detail image gallery

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
- default Spanish behavior

#### `features/content`

Responsibility:

- static data loading
- locale-aware mapping
- content selectors

### 7.3 Frontend Route Plan

Public routes:

- `/`
- `/gallery`
- `/product/:slug`
- `/about`
- `/contact`

### 7.4 Frontend State Plan

Use a simple approach:

- static content imports for site data
- local component state for UI interactions
- no remote server state layer in the MVP

## 8. Shared TypeScript Contracts

Create a shared types package or shared folder for:

- `Product`
- `AvailabilityStatus`
- `LocalizedText`
- `AboutContent`
- `ContactContent`

This keeps the content structure consistent even without a backend.

## 9. Implementation Phases

### Phase 1: Project Setup

- initialize frontend React + TypeScript app
- configure linting, formatting, and test runners
- define shared types
- configure GitHub Pages deployment path expectations

### Phase 2: Static Content Foundations

- add static seed data files for products and page content
- define bilingual content structure
- define image asset strategy
- add content access helpers/selectors

### Phase 3: Public Site

- build layout and navigation
- implement bilingual shell
- build Gallery page
- build Product Detail page
- build About and Contact pages
- wire pages to static content

### Phase 4: Deployment Hardening

- verify GitHub Pages routing strategy
- verify production asset paths
- verify responsive behavior
- verify language switching and availability rendering

### Phase 5: Future Extensions

- evaluate hosted form service for inquiries
- evaluate headless CMS or hosted backend for admin editing
- evaluate protected admin workflow outside GitHub Pages

## 10. Testing Scope

### Frontend

- component unit tests
- content rendering tests
- route rendering tests
- language switch tests

### End-to-End Smoke Tests

At minimum, automate these smoke flows:

- browse gallery
- open product detail
- switch language
- navigate to About and Contact

## 11. Risks and Constraints

### Main Risks

- static hosting prevents private secret handling
- no admin area means content updates require repo changes and redeploys
- inquiry flow tradeoffs may reduce convenience or privacy
- GitHub Pages SPA routing can require deployment-specific configuration

### Mitigations

- keep content in clear structured data files
- keep frontend architecture modular so hosted services can be added later
- use GitHub Pages-compatible routing and asset settings from the start
- explicitly treat admin and private inquiry routing as post-MVP hosted-service work

## 12. Recommended Technical Decisions

- Use React + Vite for the frontend
- Use TypeScript across the codebase
- Keep all MVP data in static TypeScript files
- Optimize for GitHub Pages deployment simplicity
- Use unit tests from the first iteration, not as later cleanup

## 13. Definition of Done

The MVP should be considered complete when:

- the site builds as a static frontend and deploys to GitHub Pages
- all public pages from the adjusted MVP scope are implemented
- products are served from static frontend data
- Spanish is the default language and English is supported
- gallery and product detail pages render the required product information
- Contact page provides a clear public contact path
- unit tests exist for core frontend modules
- smoke-level coverage exists for the primary public user flows
