import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
}

/**
 * Provides consistent section layout with responsive padding,
 * dark background, and a centered container.
 * Uses `alternate` prop to toggle between brand-dark and brand-dark-lighter backgrounds.
 */
export function SectionWrapper({
  id,
  children,
  className = '',
  alternate = false,
}: SectionWrapperProps) {
  const bgClass = alternate ? 'bg-brand-dark-lighter' : 'bg-brand-dark';

  return (
    <section id={id} className={`${bgClass} py-16 md:py-24 ${className}`.trim()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
