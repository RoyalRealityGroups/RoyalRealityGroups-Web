import { companyInfo } from '../../data/companyInfo';

/**
 * Top contact info bar above the navigation bar.
 * Shows phone, email, address, and social links.
 */
export function TopBar() {
  return (
    <div className="bg-brand-dark border-b border-brand-gold/10 py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
        {/* Contact info */}
        <div className="flex items-center gap-6 text-white/80 font-body">
          <a href={`tel:${companyInfo.phone.replace(/[^+\d]/g, '')}`} className="hover:text-brand-gold transition-colors flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {companyInfo.phone}
          </a>
          <span className="uppercase hover:text-brand-gold transition-colors">
            {companyInfo.email}
          </span>
          <span className="text-white/60 hidden lg:inline">Madhurawada, Visakhapatnam 530048</span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {Object.entries(companyInfo.socialLinks).filter(([key]) => key !== 'whatsapp').map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-gold transition-colors capitalize text-xs"
              aria-label={key}
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
