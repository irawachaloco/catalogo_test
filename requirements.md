# OM Studio Online Gallery Requirements

## 1. Document Purpose

This document defines the product requirements for the first version of the OM Studio website. It is intended for the software engineering team that will design and build the initial online gallery.

The first release is intentionally simple. Its primary goal is to showcase pottery products online for local buyers. The site is not intended to support e-commerce or checkout in this phase, but it should be structured so it can evolve into an e-commerce site later.

## 2. Product Overview

### Product Name

OM Studio

### Product Goal

Create a bilingual online gallery for pottery products that:

- Presents the studio and its products professionally
- Allows visitors to browse available pottery pieces
- Displays product details clearly
- Provides a clear contact path for interested visitors
- Supports a simple MVP that can be deployed on GitHub Pages

### Phase 1 Scope Summary

In scope:

- Public marketing site
- Product gallery
- Product detail/information display
- Spanish as primary language and English as secondary language
- Static hosting on GitHub Pages
- Content managed in repository data files for the MVP

Out of scope:

- Custom backend
- Protected admin area
- Server-routed inquiry flow
- Shopping cart
- Checkout
- Online payments
- Shipping flows
- Discount codes
- Customer accounts
- Broader e-commerce functionality

## 3. Target Users

### Primary Customer

Local buyers interested in pottery products from OM Studio.

### Internal User

Studio owner or maintainer who needs a simple way to keep the gallery content current, even if MVP updates are done through repo changes and redeployment.

## 4. Business Objectives

- Establish an online presence for OM Studio
- Showcase pottery pieces in a clean and trustworthy way
- Help local buyers discover available products
- Make contact paths clear for interested buyers
- Enable a lightweight MVP that can be deployed and maintained simply

## 5. Success Criteria

The first release will be considered successful if:

- Visitors can browse the gallery in Spanish and English
- Visitors can view product photos, dimensions, material, price, and availability
- Visitors can identify how to contact the studio
- The site runs successfully on GitHub Pages
- Core content can be updated through version-controlled data files

## 6. Information Architecture

The initial site must include the following public pages:

- Home / Gallery landing page
- Gallery
- About
- Contact

The site must also include:

- Product detail view or equivalent product-specific presentation

## 7. Functional Requirements

### 7.1 Public Site

#### 7.1.1 Navigation

- The public site must provide navigation to Gallery, About, and Contact.
- The site must allow users to switch between Spanish and English.
- Spanish must be the default language.

#### 7.1.2 Gallery

- The Gallery page must display pottery products in a browsable format.
- Each product card must show at minimum:
  - Product photo
  - Price
  - Availability
- The gallery should make it easy for visitors to identify whether a piece is available or sold.

#### 7.1.3 Product Details

- Each product must have a product-specific view or section with the following information:
  - Photo
  - Dimensions
  - Material
  - Price
  - Availability
- Availability values in v1 are limited to:
  - `Disponible`
  - `Vendido`
- The public site must support product-specific inquiries from this view.

#### 7.1.4 About Page

- The About page must introduce OM Studio.
- Content must be maintainable through the repo-managed content structure used by the MVP.

#### 7.1.5 Contact Page

- The Contact page must provide a clear public contact method compatible with GitHub Pages hosting.
- The Contact page must include an Instagram link.

Optional MVP contact patterns:

- Instagram DM link
- public email address
- public external contact form

## 8. Content Requirements

### 8.1 Product Data Model

Each product must support at least the following fields:

- Product name
- One or more photos
- Dimensions
- Material
- Price
- Availability
- Unique internal identifier

Recommended additional field:

- Short description

### 8.2 Localization

- The site must support Spanish and English.
- Spanish is the primary/default language.
- Public-facing content must be available in both languages.
- The engineering team should implement a content structure that supports bilingual product and page content.

## 9. Non-Functional Requirements

### 9.1 Usability

- The site must be easy to browse on desktop and mobile devices.
- The gallery experience must be visually clean and product-focused.
- Availability and inquiry actions must be clear.

### 9.2 Performance

- Public pages should load quickly under normal consumer network conditions.
- Product images should be optimized for web delivery without noticeably harming visual quality.

### 9.3 Security and Privacy

- The MVP must avoid implying private backend protections that do not exist on GitHub Pages.
- Any public contact channel used by the MVP should be treated as public.

### 9.4 Maintainability

- The implementation should favor a simple architecture appropriate for a small business site.
- The system should be maintainable and extensible for a future e-commerce phase.

## 10. Future Considerations

These are explicitly not part of v1, but the architecture should avoid blocking them later:

- Shopping cart
- Checkout
- Payment processing
- Shipping support
- Tax handling
- Promotional tools

## 11. Suggested Engineering Approach

The engineering team should prioritize:

- Simple content maintenance for a small static site
- A gallery-first UX
- Clean bilingual content support
- A modular foundation that can evolve later into hosted services if needed

No framework or technology stack has been specified yet in this document.

## 12. Acceptance Criteria

The release should be accepted when all of the following are true:

- A public user can navigate to Gallery, About, and Contact pages
- A public user can browse products and view photo, dimensions, material, price, and availability
- A public user can identify a clear contact path
- The site is available in Spanish and English, with Spanish as default
- The site can be deployed as a static app on GitHub Pages
- Product and page content can be updated through repo-managed data files

## 13. Open Product Decisions

The following items are not yet defined and should be resolved before design and development are finalized:

- Currency format for prices
- Whether sold products remain visible in the gallery or move to a separate sold/archive state
- Exact public contact method for the MVP
- Whether the Contact page includes a public external form in addition to Instagram
- Post-MVP content editing approach beyond repo-managed updates
- Branding system beyond the temporary use of the name OM Studio
