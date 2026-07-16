import React from 'react';

interface CTAButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
}

/**
 * Gold-accent styled call-to-action button.
 * Renders as <a> if href is provided, otherwise <button>.
 * Meets 44x44px minimum touch target (Requirement 9.6 / 10.7).
 */
export function CTAButton({
  variant = 'primary',
  children,
  onClick,
  href,
  className = '',
  type = 'button',
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 rounded-md font-body font-semibold text-base transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark';

  const variantStyles =
    variant === 'primary'
      ? 'bg-brand-gold text-brand-dark hover:bg-brand-gold-light'
      : 'bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark';

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
}
