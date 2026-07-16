import { AboutSection } from '../components/AboutSection/AboutSection';

/**
 * About Us page — dedicated page with full about content.
 */
export function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-brand-dark pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-white font-bold mb-2">About Us.</h1>
          <p className="font-body text-white/60">
            <a href="/" className="hover:text-brand-gold transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-brand-gold">About Us</span>
          </p>
        </div>
      </section>

      <AboutSection />
    </>
  );
}
