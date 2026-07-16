# Implementation Plan: Royal Reality Website

## Overview

This plan implements a static single-page React application for Royal Reality Groups using React 18 + Vite, Tailwind CSS 3, Framer Motion, and React Hook Form. The implementation proceeds from project scaffolding and design tokens through core shared components, individual page sections, and finally integration/wiring. Each task builds incrementally on previous work with no orphaned code.

## Tasks

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Initialize Vite + React + TypeScript project and install dependencies
    - Run `npm create vite@latest` with React TypeScript template
    - Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `react-hook-form`, `fast-check`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
    - Configure `vite.config.ts`, `tsconfig.json`
    - _Requirements: 10.3, 10.4_

  - [x] 1.2 Configure Tailwind CSS with brand design tokens
    - Initialize Tailwind with `tailwind.config.ts` and `postcss.config.js`
    - Add brand colors (gold, dark, cream), font families (Playfair Display, Inter), and spacing scale
    - Set up `src/index.css` with Tailwind directives and `@font-face` declarations with `font-display: swap`
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 1.3 Create type definitions and static data files
    - Create `src/types/index.ts` with `Property`, `Service`, `Testimonial`, `ContactFormData`, `ValidationError`, `CompanyInfo` interfaces
    - Create `src/data/properties.ts` with minimum 6 property entries
    - Create `src/data/services.ts` with 4 services (Property Buying, Selling, Rental, Management)
    - Create `src/data/testimonials.ts` with minimum 4 testimonials
    - Create `src/data/companyInfo.ts` with phone, email, address, and social links
    - _Requirements: 4.3, 4.5, 5.4, 6.5_

  - [x] 1.4 Create utility functions (formatPrice, validateForm, constants)
    - Implement `src/utils/formatPrice.ts` — format number with currency symbol and thousand separators
    - Implement `src/utils/validateForm.ts` — `validateContactForm`, `isValidEmail`, `isValidPhone` functions
    - Create `src/utils/constants.ts` — section IDs, breakpoints, timing constants
    - _Requirements: 4.3, 7.3, 7.4_

  - [x]* 1.5 Write property tests for formatPrice utility
    - **Property 1: Price formatting preserves value and includes separators**
    - **Validates: Requirements 4.3**

  - [x]* 1.6 Write property tests for contact form validation
    - **Property 3: Contact form validation reports errors exactly for empty required fields**
    - **Validates: Requirements 7.3**

  - [x]* 1.7 Write property tests for email validation
    - **Property 4: Email validation correctly classifies valid and invalid formats**
    - **Validates: Requirements 7.4**

- [x] 2. Custom hooks and shared components
  - [x] 2.1 Implement custom hooks (useCarousel, useActiveSection, useScrollTo)
    - Create `src/hooks/useCarousel.ts` — manages carousel index, auto-rotation, pause/resume, wrapping
    - Create `src/hooks/useActiveSection.ts` — uses IntersectionObserver to detect active section
    - Create `src/hooks/useScrollTo.ts` — smooth-scroll to section by ID
    - _Requirements: 1.3, 1.9, 6.3, 6.6_

  - [x]* 2.2 Write property test for useCarousel hook
    - **Property 2: Carousel index always stays within bounds**
    - **Validates: Requirements 6.3**

  - [x]* 2.3 Write property test for useActiveSection hook
    - **Property 5: Active section detection returns the correct section for any scroll position**
    - **Validates: Requirements 1.9**

  - [x] 2.4 Implement shared components (CTAButton, SectionWrapper, AnimatedSection)
    - Create `src/components/shared/CTAButton.tsx` — gold-accent styled button with primary/outline variants
    - Create `src/components/shared/SectionWrapper.tsx` — consistent section padding, dark background, responsive container
    - Create `src/components/shared/AnimatedSection.tsx` — Framer Motion wrapper that respects `prefers-reduced-motion`
    - _Requirements: 9.5, 9.7, 11.2_

- [x] 3. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Navigation bar and hero section
  - [x] 4.1 Implement NavigationBar component
    - Create `src/components/NavigationBar/NavigationBar.tsx` — fixed header with logo, nav links, CTA button
    - Create `src/components/NavigationBar/NavLinks.tsx` — section links with active highlighting using `useActiveSection`
    - Create `src/components/NavigationBar/HamburgerMenu.tsx` — mobile dropdown overlay, toggling, close-on-outside-click
    - Wire smooth-scroll navigation using `useScrollTo` hook
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9_

  - [x] 4.2 Implement HeroSection component
    - Create `src/components/HeroSection/HeroSection.tsx` — full-viewport background image with dark overlay (opacity 0.4-0.6)
    - Display H1 heading "Royal Reality Groups" and subtitle "Key to Your Dream Home" in gold text
    - Include "Explore Properties" CTA that scrolls to properties section
    - Use `<picture>` element with WebP and fallback formats
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [x]* 4.3 Write unit tests for NavigationBar and HeroSection
    - Test nav links render correctly, hamburger toggle works, active section highlighting
    - Test hero section renders heading, tagline, CTA button, and correct image structure
    - _Requirements: 1.1, 1.2, 1.5, 1.6, 2.2, 2.3, 2.4_

- [x] 5. About and properties sections
  - [x] 5.1 Implement AboutSection component
    - Create `src/components/AboutSection/AboutSection.tsx` — H2 "About Us", mission/history text, value propositions with icons/stats, team image
    - Include CTA button ("Get in Touch") per requirement 11.2
    - Implement responsive single-column on mobile, side-by-side on desktop
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 11.2_

  - [x] 5.2 Implement PropertiesSection with PropertyCard component
    - Create `src/components/PropertiesSection/PropertiesSection.tsx` — H2 "Featured Properties", responsive grid (3/2/1 columns), "View All Properties" CTA
    - Create `src/components/PropertiesSection/PropertyCard.tsx` — image, name, location, formatted price, bedrooms/bathrooms/area, hover scale transform with box-shadow
    - Use `formatPrice` utility for currency formatting
    - Implement lazy loading for property images
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 10.5_

  - [x]* 5.3 Write unit tests for AboutSection and PropertiesSection
    - Test AboutSection renders heading, paragraphs, value propositions, image with alt text
    - Test PropertyCard renders all fields, hover interaction class setup
    - Test responsive grid classes are applied correctly
    - _Requirements: 3.1, 3.2, 3.3, 4.2, 4.3_

- [x] 6. Services and testimonials sections
  - [x] 6.1 Implement ServicesSection with ServiceCard component
    - Create `src/components/ServicesSection/ServicesSection.tsx` — H2 "Our Services", responsive grid layout
    - Create `src/components/ServicesSection/ServiceCard.tsx` — icon, title, description card with dark-card background
    - Include CTA button per requirement 11.2
    - Implement responsive: multi-column ≥768px, single-column <768px
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 11.2_

  - [x] 6.2 Implement TestimonialsSection with TestimonialCarousel component
    - Create `src/components/TestimonialsSection/TestimonialsSection.tsx` — H2 "What Our Clients Say"
    - Create `src/components/TestimonialsSection/TestimonialCarousel.tsx` — uses `useCarousel` hook, displays client name, review text, star rating, navigation arrows/dots
    - Implement auto-rotation (5s interval), pause on hover, resume on hover end
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [x]* 6.3 Write unit tests for ServicesSection and TestimonialsSection
    - Test ServiceCard renders title, description, icon
    - Test TestimonialCarousel renders testimonial content, navigation controls, star ratings
    - _Requirements: 5.2, 5.3, 6.2, 6.4_

- [x] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Contact section and footer
  - [x] 8.1 Implement ContactSection with ContactForm and ContactInfo
    - Create `src/components/ContactSection/ContactSection.tsx` — section container with form and info side by side
    - Create `src/components/ContactSection/ContactForm.tsx` — React Hook Form integration, fields (fullName, email, phone, message), validation errors displayed inline, success/error messages, simulated submission
    - Create `src/components/ContactSection/ContactInfo.tsx` — phone (tel: link), email (mailto: link), office address, static map placeholder
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8_

  - [x] 8.2 Implement Footer component
    - Create `src/components/Footer/Footer.tsx` — logo, tagline, navigation links (smooth-scroll), contact info, social media links (open in new tab), copyright with dynamic year
    - Style with dark background and gold accent text
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8_

  - [x] 8.3 Implement FloatingCTA component
    - Create `src/components/FloatingCTA/FloatingCTA.tsx` — fixed-position button visible only on mobile (<768px), links to WhatsApp/phone, 16px minimum margin from other elements
    - _Requirements: 11.1, 11.3, 11.4_

  - [x]* 8.4 Write unit tests for ContactForm, Footer, and FloatingCTA
    - Test ContactForm displays validation errors for empty required fields, success message on submit
    - Test Footer renders logo, links, social icons, copyright year
    - Test FloatingCTA visibility based on viewport
    - _Requirements: 7.3, 7.4, 7.7, 8.1, 8.7, 11.1_

- [x] 9. Integration, SEO, and final wiring
  - [x] 9.1 Wire App.tsx with all sections and configure routing
    - Create `src/App.tsx` — compose all section components in order (NavigationBar, HeroSection, AboutSection, PropertiesSection, ServicesSection, TestimonialsSection, ContactSection, Footer, FloatingCTA)
    - Set up `src/main.tsx` entry point with React 18 `createRoot`
    - Ensure section IDs match navigation link targets for smooth scrolling
    - _Requirements: 1.2, 1.3_

  - [x] 9.2 Add SEO meta tags and accessibility attributes
    - Update `index.html` with page title (≤60 chars), meta description (≤160 chars), Open Graph tags (title, description, image, type)
    - Ensure all images have descriptive alt text
    - Add ARIA labels to interactive elements (hamburger menu, carousel controls, form fields)
    - Ensure minimum 44×44px touch targets on mobile
    - _Requirements: 10.6, 10.7, 9.6, 3.4_

  - [x] 9.3 Configure image optimization and performance
    - Add placeholder WebP images in `public/images/` directory structure
    - Implement `<picture>` elements with WebP source and JPEG/PNG fallback for all property and hero images
    - Verify lazy loading attributes on below-fold images
    - Add image error fallback handlers (placeholder for properties, gradient for hero)
    - _Requirements: 10.3, 10.4, 10.5_

  - [x]* 9.4 Write integration tests for full-page flows
    - Test smooth scroll navigation between sections
    - Test form submission flow (success and error paths)
    - Test responsive layout rendering at 320px, 768px, 1024px breakpoints
    - _Requirements: 1.3, 7.7, 7.8, 10.1, 10.2_

- [ ] 10. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document using `fast-check`
- Unit tests validate specific examples and edge cases using Vitest + React Testing Library
- All static data uses placeholder content — images should be placeholder WebP files
- The contact form simulates submission (no backend) with a configurable delay

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["1.4"] },
    { "id": 3, "tasks": ["1.5", "1.6", "1.7", "2.1"] },
    { "id": 4, "tasks": ["2.2", "2.3", "2.4"] },
    { "id": 5, "tasks": ["4.1", "4.2", "5.1", "5.2"] },
    { "id": 6, "tasks": ["4.3", "5.3", "6.1", "6.2"] },
    { "id": 7, "tasks": ["6.3", "8.1", "8.2", "8.3"] },
    { "id": 8, "tasks": ["8.4", "9.1"] },
    { "id": 9, "tasks": ["9.2", "9.3"] },
    { "id": 10, "tasks": ["9.4"] }
  ]
}
```
