import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';

/** Feature items matching the live site */
const FEATURES = [
  {
    title: 'Prime Locations',
    description: 'Emphasize the strategic locations of your plots, highlighting proximity to amenities, transportation, and natural surroundings.',
    icon: (
      <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Amenities',
    description: 'Showcase the modern amenities and facilities you offer, such as clubhouses, swimming pools, parks, and security systems.',
    icon: (
      <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Vast Land',
    description: 'Highlight the spaciousness of your plots, offering ample room for dream homes and gardens.',
    icon: (
      <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Dealings',
    description: "Emphasize your company's commitment to ethical practices, clear pricing, and hassle-free transactions.",
    icon: (
      <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Expert Guidance',
    description: 'Emphasize the strategic locations of your plots, highlighting proximity to amenities, transportation, and natural surroundings.',
    icon: (
      <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Customer Support',
    description: 'Emphasize your dedication to customer satisfaction through excellent after-sales service and support.',
    icon: (
      <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

/**
 * Features section showcasing the company's key differentiators.
 * Matches the live site layout with a 3x2 grid of feature cards.
 */
export function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left: Heading */}
        <AnimatedSection>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-dark flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-brand-gold inline-block" />
            Royal Reality Groups
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-dark font-bold">
            Features
          </h2>
        </AnimatedSection>

        {/* Right: Description */}
        <AnimatedSection delay={0.1}>
          <p className="font-body text-brand-dark/80 text-base md:text-lg leading-relaxed">
            At Royal Reality Groups, we believe that every client deserves personalized
            attention. Our dedicated team of agents works closely with you to understand your
            unique needs and preferences. We tailor our services to your specific
            requirements, ensuring that you receive the highest level of support throughout
            the entire real estate process. From finding the perfect property to negotiating
            the best deal, our agents are committed to providing you with a seamless and
            stress-free experience.
          </p>
        </AnimatedSection>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => (
          <AnimatedSection key={feature.title} delay={index * 0.1}>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl text-brand-dark font-bold mb-3">
                {feature.title}:
              </h3>
              <p className="font-body text-brand-dark/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
