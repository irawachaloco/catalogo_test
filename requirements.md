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
- Allows visitors to submit an inquiry for a specific product by email without exposing the studio email address publicly
- Allows the studio owner to manage products, prices, photos, and availability through an admin area

### Phase 1 Scope Summary

In scope:

- Public marketing site
- Product gallery
- Product detail/information display
- Product inquiry flow
- Admin area for content and inventory management
- Spanish as primary language and English as secondary language

Out of scope:

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

Studio owner/admin who needs to maintain the gallery without developer assistance.

## 4. Business Objectives

- Establish an online presence for OM Studio
- Showcase pottery pieces in a clean and trustworthy way
- Help local buyers discover available products
- Generate product-specific inquiries
- Enable simple internal inventory/availability tracking

## 5. Success Criteria

The first release will be considered successful if:

- Visitors can browse the gallery in Spanish and English
- Visitors can view product photos, dimensions, material, price, and availability
- Visitors can submit an inquiry tied to a specific product
- The public site does not expose the studio email address
- The studio owner can log in to an admin area and update products and availability without engineering support

## 6. Information Architecture

The initial site must include the following public pages:

- Home / Gallery landing page
- Gallery
- About
- Contact

The site must also include:

- Product detail view or equivalent product-specific presentation
- Admin area (restricted access)

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
- Content must be manageable by the admin.

#### 7.1.5 Contact Page

- The Contact page must provide a contact method without exposing the email address in plain public text.
- The Contact page must include an Instagram link.

#### 7.1.6 Inquiry Flow

- A visitor must be able to submit an inquiry for a specific product.
- The inquiry must be delivered by email to the studio.
- The actual destination email address must not be visible on the public site.
- The inquiry flow must include enough context so the studio can identify the product being asked about.
- The system should prevent empty or clearly invalid submissions.

Minimum inquiry data to capture:

- Visitor name
- Visitor email
- Message
- Product reference

### 7.2 Admin Area

#### 7.2.1 Authentication

- The system must provide a protected admin area accessible only to authorized users.
- The admin area must require login.

#### 7.2.2 Product Management

- Admin users must be able to create a product.
- Admin users must be able to edit a product.
- Admin users must be able to remove or archive a product.
- Admin users must be able to update:
  - Product name
  - Product photos
  - Dimensions
  - Material
  - Price
  - Availability
  - Language content, if product text is managed separately by language

#### 7.2.3 Inventory and Availability Management

- Admin users must be able to mark a product as `Disponible` or `Vendido`.
- Availability updates must be reflected on the public gallery.

#### 7.2.4 Static Content Management

- Admin users should be able to edit About page content.
- Admin users should be able to edit Contact page content, including the Instagram link.

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

- The public site must not expose the studio email address directly.
- The admin area must be protected by authentication.
- Form submissions must be validated.

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

- Simple content management for a non-technical owner
- A lightweight admin workflow
- A gallery-first UX
- Clean bilingual content support
- A modular foundation that can evolve later

No framework or technology stack has been specified yet in this document.

## 12. Acceptance Criteria

The release should be accepted when all of the following are true:

- A public user can navigate to Gallery, About, and Contact pages
- A public user can browse products and view photo, dimensions, material, price, and availability
- A public user can submit an inquiry for a specific product
- The inquiry is routed through the system without exposing the studio email publicly
- The site is available in Spanish and English, with Spanish as default
- An admin user can log in
- An admin user can create, update, and manage products
- An admin user can update availability between `Disponible` and `Vendido`
- Public product availability reflects admin changes
- An admin user can update core site content such as About and Contact information

## 13. Open Product Decisions

The following items are not yet defined and should be resolved before design and development are finalized:

- Currency format for prices
- Whether sold products remain visible in the gallery or move to a separate sold/archive state
- Exact inquiry form fields beyond the minimum required fields listed above
- Whether the Contact page includes a general contact form in addition to product-specific inquiries
- Exact bilingual content workflow in the admin area
- Branding system beyond the temporary use of the name OM Studio
