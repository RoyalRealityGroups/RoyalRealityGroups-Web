import { useState, useRef, useEffect, useCallback } from 'react';
import { NavLinks } from './NavLinks';

/**
 * Mobile hamburger menu with full-width dropdown overlay.
 * Handles toggling, close-on-outside-click, and close-on-link-click.
 * Visible only on viewports < 768px (md breakpoint).
 */
export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Don't close if clicking the hamburger button itself (toggle handles that)
      if (buttonRef.current?.contains(target)) return;
      if (menuRef.current && !menuRef.current.contains(target)) {
        close();
      }
    };

    // Use setTimeout to avoid immediately triggering from the click that opened the menu
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, close]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        className="relative flex items-center justify-center w-11 h-11 text-brand-cream hover:text-brand-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark rounded-md"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {/* Animated hamburger icon */}
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        <span className="flex flex-col items-center justify-center w-6 h-6">
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-1'
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[3px]' : 'translate-y-1'
            }`}
          />
        </span>
      </button>

      {/* Dropdown overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-md border-t border-brand-gold/20 shadow-lg py-4 z-40"
          role="menu"
        >
          <NavLinks direction="vertical" onLinkClick={close} />
        </div>
      )}
    </div>
  );
}
