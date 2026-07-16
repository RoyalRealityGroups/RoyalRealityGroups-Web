import { ContactSection } from '../components/ContactSection/ContactSection';

/**
 * Contact Us page — dedicated page with contact form.
 */
export function ContactPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-brand-dark pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-white font-bold mb-2">Contact Us</h1>
          <p className="font-body text-white/60">
            <a href="/" className="hover:text-brand-gold transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-brand-gold">Contact Us</span>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
