import { NavLinks } from './NavLinks';
import { HamburgerMenu } from './HamburgerMenu';
import { CTAButton } from '../shared/CTAButton';
import { useScrollTo } from '../../hooks/useScrollTo';
import { SECTION_IDS } from '../../utils/constants';

/**
 * Fixed navigation bar with logo, nav links, CTA button, and mobile hamburger menu.
 * Stays fixed at the top of the viewport with a semi-transparent dark background
 * and backdrop blur for readability over content.
 *
 * Requirements: 1.1-1.9
 */
export function NavigationBar() {
  const scrollTo = useScrollTo();

  const handleContactClick = () => {
    scrollTo(SECTION_IDS.contact);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center min-h-[44px] min-w-[44px]"
            aria-label="Royal Reality Groups - Home"
          >
            <img
              src="/images/IMG-20260709-WA0004.jpg"
              alt="Royal Reality Groups - Key to Your Dream Home"
              className="h-28 sm:h-32 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <NavLinks direction="horizontal" />

          {/* Right side: Search + CTA (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* Search icon */}
            <button
              type="button"
              className="hidden md:flex items-center justify-center w-10 h-10 text-white/80 hover:text-brand-gold transition-colors"
              aria-label="Search"
              onClick={() => {
                const searchQuery = window.prompt('Search Royal Reality Groups:');
                if (searchQuery) {
                  // Simple scroll to matching section or show alert
                  alert(`Search results for: "${searchQuery}" — coming soon!`);
                }
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* CTA Button - hidden on mobile */}
            <div className="hidden md:block">
              <CTAButton variant="primary" onClick={handleContactClick}>
                Contact Us
              </CTAButton>
            </div>

            {/* Hamburger Menu - visible on mobile only */}
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
