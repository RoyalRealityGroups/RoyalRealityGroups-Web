import { AnimatedSection } from '../shared/AnimatedSection';
import { ContactForm } from './ContactForm';
import { SECTION_IDS } from '../../utils/constants';
import { companyInfo } from '../../data/companyInfo';

/**
 * Contact section matching the live site:
 * Left: "Get In Touch With Us" form (white background)
 * Right: "Want To Start A Project?" with contact number and office address
 */
export function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact Form */}
          <AnimatedSection>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-brand-gold text-center mb-4">
                Get In Touch With Us
              </h2>
              <p className="font-body text-brand-dark/70 text-center mb-8">
                Have questions or need assistance? Contact us today and let our team help you.
              </p>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Right — Project Info with Contact Details */}
          <AnimatedSection delay={0.1}>
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-dark/60 flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-brand-gold inline-block" />
                Royal Reality Groups
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-brand-dark font-bold mb-4">
                Want To Start A Project With Royal Reality Groups? Let's Book Here!
              </h3>
              <p className="font-body text-brand-dark/70 mb-8">
                Ready to embark on your real estate journey with Royal Reality Groups?
                Schedule a consultation today and let's turn your dream home into a reality.
              </p>

              {/* Contact Number */}
              <div className="mb-6">
                <h4 className="font-heading text-lg text-brand-dark font-bold mb-2">Contact Number</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-gold/20">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^+\d]/g, '')}`}
                    className="font-body text-brand-dark font-bold text-lg hover:text-brand-gold transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div>
                <h4 className="font-heading text-lg text-brand-dark font-bold mb-2">Office Address</h4>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-gold/20 flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-body text-brand-dark/80 leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
