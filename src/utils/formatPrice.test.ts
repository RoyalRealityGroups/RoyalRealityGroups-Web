import { describe, it, expect } from 'vitest';
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('formats INR with Indian numbering system by default', () => {
    expect(formatPrice(1250000)).toBe('₹12,50,000');
  });

  it('formats large INR amounts with crores', () => {
    expect(formatPrice(25000000)).toBe('₹2,50,00,000');
  });

  it('formats small amounts correctly', () => {
    expect(formatPrice(500)).toBe('₹500');
  });

  it('formats thousands in INR', () => {
    expect(formatPrice(50000)).toBe('₹50,000');
  });

  it('formats lakhs in INR', () => {
    expect(formatPrice(100000)).toBe('₹1,00,000');
  });

  it('uses dollar sign with international formatting', () => {
    expect(formatPrice(1250000, '$')).toBe('$1,250,000');
  });

  it('uses euro sign with international formatting', () => {
    expect(formatPrice(1250000, '€')).toBe('€1,250,000');
  });

  it('handles zero', () => {
    expect(formatPrice(0)).toBe('₹0');
  });

  it('handles single digit', () => {
    expect(formatPrice(5)).toBe('₹5');
  });

  it('uses custom currency symbol', () => {
    expect(formatPrice(1000, '£')).toBe('£1,000');
  });
});
