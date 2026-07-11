import { useNavigate } from 'react-router-dom';
import { companyInfo } from '../../data/companyInfo';

/** Navigation links matching the navbar */
const FOOTER_NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact-us', label: 'Contact Us' },
];

/**
 * Footer component with logo, tagline, navigation links, contact info,
 * social media links, and copyright notice.
 *
 * Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8
 */
export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Multi-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={handleHomeClick}
              className="inline-block mb-4 min-h-[44px] min-w-[44px]"
              aria-label="Royal Reality Groups - Scroll to top"
            >
              <span className="text-brand-gold font-heading text-2xl font-bold tracking-wide">
                Royal Reality Groups
              </span>
            </button>
            <p className="text-brand-cream/80 font-body text-sm leading-relaxed">
              Key to Your Dream Home
            </p>
            <p className="text-brand-cream/60 font-body text-sm mt-3 leading-relaxed">
              Your trusted partner in finding premium properties that match your
              lifestyle and aspirations.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-brand-gold font-heading text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={handleHomeClick}
                    className="text-brand-cream/80 hover:text-brand-gold font-body text-sm transition-colors duration-200 min-h-[44px] min-w-[44px] inline-flex items-center"
                  >
                    Home
                  </button>
                </li>
                {FOOTER_NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.path)}
                      className="text-brand-cream/80 hover:text-brand-gold font-body text-sm transition-colors duration-200 min-h-[44px] min-w-[44px] inline-flex items-center"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-brand-gold font-heading text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                {/* Phone icon */}
                <svg
                  className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="text-brand-cream/80 hover:text-brand-gold font-body text-sm transition-colors duration-200"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                {/* Email icon */}
                <svg
                  className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-brand-cream/80 hover:text-brand-gold font-body text-sm transition-colors duration-200"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                {/* Address icon */}
                <svg
                  className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-brand-cream/80 font-body text-sm">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-brand-gold font-heading text-lg font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-dark-lighter hover:bg-brand-gold/20 border border-brand-gold/30 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-dark-lighter hover:bg-brand-gold/20 border border-brand-gold/30 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href={companyInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-dark-lighter hover:bg-brand-gold/20 border border-brand-gold/30 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={companyInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-dark-lighter hover:bg-brand-gold/20 border border-brand-gold/30 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-gold/20 mt-10 pt-8">
          <p className="text-brand-cream/60 font-body text-sm text-center">
            &copy; {currentYear} Royal Reality Groups. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
