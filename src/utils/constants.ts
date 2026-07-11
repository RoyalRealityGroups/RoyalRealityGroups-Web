/**
 * Section IDs used for navigation and scroll targeting.
 * These must match the id attributes on section elements in the DOM.
 */
export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  properties: 'properties',
  services: 'services',
  testimonials: 'testimonials',
  contact: 'contact',
} as const;

/**
 * Responsive breakpoints in pixels.
 * Aligned with Tailwind CSS defaults and requirement 10.2.
 */
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
} as const;

/**
 * Timing constants used across the application.
 */
export const TIMING = {
  /** Testimonial carousel auto-rotation interval in milliseconds */
  carousel_interval: 5000,
  /** Animation duration for scroll-triggered entrance animations in seconds */
  animation_duration: 0.6,
  /** Simulated form submission delay in milliseconds */
  form_submit_delay: 1500,
} as const;
