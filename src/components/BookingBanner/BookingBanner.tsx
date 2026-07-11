import { useScrollTo } from '../../hooks/useScrollTo';
import { SECTION_IDS } from '../../utils/constants';

/**
 * "Let's Build A Project" banner with background image and Submit Now button.
 * Clicking Submit Now scrolls to the contact form.
 */
export function BookingBanner() {
  const scrollTo = useScrollTo();

  const handleSubmit = () => {
    scrollTo(SECTION_IDS.contact);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-slide-1.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-brand-gold inline-block" />
          Royal Reality Groups
          <span className="w-8 h-0.5 bg-brand-gold inline-block" />
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-8">
          Let's Build A Project With Our Company, And Booking Now!
        </h2>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-dark font-body font-bold text-base uppercase tracking-wider hover:bg-brand-gold-light transition-colors duration-300 min-h-[44px]"
        >
          Submit Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
