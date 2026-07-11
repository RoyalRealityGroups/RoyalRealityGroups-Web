import type { ContactFormData, ValidationError } from '../types';

/**
 * Validates an email address format.
 * Returns true if the string contains exactly one "@" character,
 * has at least one character before the "@", and the portion after
 * the "@" contains at least one "." with characters on both sides.
 *
 * @param email - The email string to validate
 * @returns true if the email format is valid
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  const atIndex = email.indexOf('@');
  const lastAtIndex = email.lastIndexOf('@');

  // Must contain exactly one "@"
  if (atIndex === -1 || atIndex !== lastAtIndex) return false;

  // Must have at least one character before "@"
  if (atIndex === 0) return false;

  const domain = email.slice(atIndex + 1);

  // Domain must contain at least one "."
  const dotIndex = domain.indexOf('.');
  if (dotIndex === -1) return false;

  // Must have characters on both sides of the "."
  if (dotIndex === 0 || dotIndex === domain.length - 1) return false;

  return true;
}

/**
 * Validates an Indian phone number.
 * A valid Indian phone number has exactly 10 digits (after stripping non-digit characters).
 *
 * @param phone - The phone string to validate
 * @returns true if the phone number is valid (10 digits)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;

  const digits = phone.replace(/\D/g, '');
  return digits.length === 10;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validates a contact form data object.
 * Required fields: fullName, email, message.
 * Optional field: phone.
 *
 * Returns validation errors for:
 * - Empty or whitespace-only required fields
 * - Invalid email format (when email is provided)
 * - Invalid phone format (when phone is provided and non-empty)
 *
 * @param data - The form data to validate (may be partial)
 * @returns ValidationResult with isValid flag and array of errors
 */
export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate fullName (required)
  if (!data.fullName || data.fullName.trim().length === 0) {
    errors.push({ field: 'fullName', message: 'Full Name is required' });
  }

  // Validate email (required + format)
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!isValidEmail(data.email.trim())) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Validate message (required)
  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: 'message', message: 'Message is required' });
  }

  // Validate phone (optional, but if provided must be valid format)
  if (data.phone && data.phone.trim().length > 0 && !isValidPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid 10-digit phone number' });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
