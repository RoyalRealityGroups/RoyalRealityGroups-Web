import { companyInfo } from '../../data/companyInfo';

/**
 * Displays company contact information including phone, email,
 * office address, and a static map placeholder.
 * Phone uses tel: link, email uses mailto: link.
 */
export function ContactInfo() {
  // Strip non-digit characters for the tel: link (keep + for international)
  const telHref = `tel:${companyInfo.phone.replace(/[^+\d]/g, '')}`;

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-heading text-brand-gold">Get in Touch</h3>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-gold/10">
            <svg
              className="w-5 h-5 text-brand-gold"
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
          </div>
          <div>
            <p className="text-sm text-brand-cream/60 font-body">Phone</p>
            <a
              href={telHref}
              className="text-brand-cream font-body hover:text-brand-gold transition-colors duration-200"
              aria-label={`Call us at ${companyInfo.phone}`}
            >
              {companyInfo.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-gold/10">
            <svg
              className="w-5 h-5 text-brand-gold"
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
          </div>
          <div>
            <p className="text-sm text-brand-cream/60 font-body">Email</p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-brand-cream font-body hover:text-brand-gold transition-colors duration-200"
              aria-label={`Email us at ${companyInfo.email}`}
            >
              {companyInfo.email}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-gold/10">
            <svg
              className="w-5 h-5 text-brand-gold"
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
          </div>
          <div>
            <p className="text-sm text-brand-cream/60 font-body">Office Address</p>
            <p className="text-brand-cream font-body">{companyInfo.address}</p>
          </div>
        </div>
      </div>

      {/* Static Map Placeholder */}
      <div
        className="w-full h-48 rounded-lg bg-brand-dark-card border border-brand-gold/20 flex items-center justify-center overflow-hidden"
        aria-label="Office location map placeholder"
        role="img"
      >
        <div className="text-center">
          <svg
            className="w-10 h-10 text-brand-gold/40 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <p className="text-brand-cream/40 text-sm font-body">Map — Mumbai, Maharashtra</p>
        </div>
      </div>
    </div>
  );
}
