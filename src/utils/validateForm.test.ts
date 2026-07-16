import { describe, it, expect } from 'vitest';
import { validateContactForm, isValidEmail, isValidPhone } from './validateForm';

describe('isValidEmail', () => {
  it('returns true for valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('returns true for email with subdomain', () => {
    expect(isValidEmail('user@mail.example.com')).toBe(true);
  });

  it('returns false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('returns false for string without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  it('returns false for string with multiple @', () => {
    expect(isValidEmail('user@@example.com')).toBe(false);
  });

  it('returns false for nothing before @', () => {
    expect(isValidEmail('@example.com')).toBe(false);
  });

  it('returns false for no dot in domain', () => {
    expect(isValidEmail('user@example')).toBe(false);
  });

  it('returns false for dot at start of domain', () => {
    expect(isValidEmail('user@.example')).toBe(false);
  });

  it('returns false for dot at end of domain', () => {
    expect(isValidEmail('user@example.')).toBe(false);
  });
});

describe('isValidPhone', () => {
  it('returns true for 10-digit phone number', () => {
    expect(isValidPhone('9876543210')).toBe(true);
  });

  it('returns true for phone with dashes (10 digits)', () => {
    expect(isValidPhone('987-654-3210')).toBe(true);
  });

  it('returns true for phone with spaces', () => {
    expect(isValidPhone('98765 43210')).toBe(true);
  });

  it('returns false for empty string', () => {
    expect(isValidPhone('')).toBe(false);
  });

  it('returns false for less than 10 digits', () => {
    expect(isValidPhone('12345')).toBe(false);
  });

  it('returns false for more than 10 digits', () => {
    expect(isValidPhone('12345678901')).toBe(false);
  });

  it('returns true for phone with country code prefix stripped to 10 digits', () => {
    // +91 prefix would add digits making it invalid (12 digits total)
    expect(isValidPhone('+919876543210')).toBe(false);
  });
});

describe('validateContactForm', () => {
  it('returns no errors for valid complete form', () => {
    const result = validateContactForm({
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '9876543210',
      message: 'Hello, I am interested in your properties.',
    });
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('returns error for empty fullName', () => {
    const result = validateContactForm({
      fullName: '',
      email: 'john@example.com',
      phone: '',
      message: 'Hello',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'fullName',
      message: 'Full Name is required',
    });
  });

  it('returns error for whitespace-only fullName', () => {
    const result = validateContactForm({
      fullName: '   ',
      email: 'john@example.com',
      phone: '',
      message: 'Hello',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.field === 'fullName')).toBe(true);
  });

  it('returns error for empty email', () => {
    const result = validateContactForm({
      fullName: 'John',
      email: '',
      phone: '',
      message: 'Hello',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'email',
      message: 'Email is required',
    });
  });

  it('returns error for invalid email format', () => {
    const result = validateContactForm({
      fullName: 'John',
      email: 'invalid-email',
      phone: '',
      message: 'Hello',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'email',
      message: 'Please enter a valid email address',
    });
  });

  it('returns error for empty message', () => {
    const result = validateContactForm({
      fullName: 'John',
      email: 'john@example.com',
      phone: '',
      message: '',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'message',
      message: 'Message is required',
    });
  });

  it('does NOT return error for empty phone (optional field)', () => {
    const result = validateContactForm({
      fullName: 'John',
      email: 'john@example.com',
      phone: '',
      message: 'Hello',
    });
    expect(result.isValid).toBe(true);
    expect(result.errors.some((e) => e.field === 'phone')).toBe(false);
  });

  it('does NOT return error for undefined phone', () => {
    const result = validateContactForm({
      fullName: 'John',
      email: 'john@example.com',
      message: 'Hello',
    });
    expect(result.isValid).toBe(true);
    expect(result.errors.some((e) => e.field === 'phone')).toBe(false);
  });

  it('returns error for invalid phone when provided', () => {
    const result = validateContactForm({
      fullName: 'John',
      email: 'john@example.com',
      phone: '123',
      message: 'Hello',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'phone',
      message: 'Please enter a valid 10-digit phone number',
    });
  });

  it('returns multiple errors for multiple invalid fields', () => {
    const result = validateContactForm({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(3); // fullName, email, message (phone is optional)
  });
});
