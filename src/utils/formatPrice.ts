/**
 * Formats a number as a price string with currency symbol and thousand separators.
 * Uses the Indian numbering system (en-IN locale) by default for INR (₹),
 * which formats as lakhs and crores (e.g., ₹12,50,000).
 * For other currencies, uses standard international formatting.
 *
 * @param amount - The numeric price value to format
 * @param currency - The currency symbol (defaults to "₹")
 * @returns Formatted price string with currency symbol and separators
 *
 * @example
 * formatPrice(1250000) => "₹12,50,000"
 * formatPrice(1250000, "$") => "$1,250,000"
 * formatPrice(25000000, "₹") => "₹2,50,00,000"
 */
export function formatPrice(amount: number, currency: string = '₹'): string {
  const locale = currency === '₹' ? 'en-IN' : 'en-US';

  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(amount);

  return `${currency}${formatted}`;
}
