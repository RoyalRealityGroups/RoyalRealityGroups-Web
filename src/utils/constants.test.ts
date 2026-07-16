import { describe, it, expect } from 'vitest';
import { SECTION_IDS, BREAKPOINTS, TIMING } from './constants';

describe('SECTION_IDS', () => {
  it('contains all required section IDs', () => {
    expect(SECTION_IDS.hero).toBe('hero');
    expect(SECTION_IDS.about).toBe('about');
    expect(SECTION_IDS.properties).toBe('properties');
    expect(SECTION_IDS.services).toBe('services');
    expect(SECTION_IDS.testimonials).toBe('testimonials');
    expect(SECTION_IDS.contact).toBe('contact');
  });

  it('has exactly 6 section IDs', () => {
    expect(Object.keys(SECTION_IDS)).toHaveLength(6);
  });
});

describe('BREAKPOINTS', () => {
  it('defines mobile breakpoint at 320px', () => {
    expect(BREAKPOINTS.mobile).toBe(320);
  });

  it('defines tablet breakpoint at 768px', () => {
    expect(BREAKPOINTS.tablet).toBe(768);
  });

  it('defines desktop breakpoint at 1024px', () => {
    expect(BREAKPOINTS.desktop).toBe(1024);
  });
});

describe('TIMING', () => {
  it('defines carousel interval at 5000ms', () => {
    expect(TIMING.carousel_interval).toBe(5000);
  });

  it('defines animation duration at 0.6s', () => {
    expect(TIMING.animation_duration).toBe(0.6);
  });

  it('defines form submit delay at 1500ms', () => {
    expect(TIMING.form_submit_delay).toBe(1500);
  });
});
