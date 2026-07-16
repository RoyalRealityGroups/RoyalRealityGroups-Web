import { companyInfo } from '../../data/companyInfo';

/**
 * CTA Banner — "Want To Start A Project?" with contact details.
 */
export function CTABanner() {
  return (
    <section className="bg-brand-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-brand-gold inline-block" />
            Royal Reality Groups
            <span className="w-8 h-0.5 bg-brand-gold inline-block" />
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-white font-bold mb-4">
            Want To Start A Project With Royal Reality Groups? Let's Book Here!
          </h2>
          <p className="font-body text-white/70 max-w-2xl mx-auto">
            Ready to embark on your real estate journey with Royal Reality Groups? Schedule
            a consultation today and let's turn your dream home into a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Contact Number */}
          <div className="flex items-center gap-4 bg-brand-dark-card p-6 rounded-lg border border-brand-gold/20">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-gold/20">
              <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-white/60 text-sm font-body">Contact Number</p>
              <a href={`tel:${companyInfo.phone.replace(/[^+\d]/g, '')}`} className="text-white font-heading text-lg font-bold hover:text-brand-gold transition-colors">
                {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex items-start gap-4 bg-brand-dark-card p-6 rounded-lg border border-brand-gold/20">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-gold/20 flex-shrink-0">
              <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white/60 text-sm font-body">Office Address</p>
              <p className="text-white font-body text-sm leading-relaxed">{companyInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
