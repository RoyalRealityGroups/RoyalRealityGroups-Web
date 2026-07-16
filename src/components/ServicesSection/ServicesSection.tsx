import { services } from '../../data/services';
import { SECTION_IDS } from '../../utils/constants';
import { useScrollTo } from '../../hooks/useScrollTo';
import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';
import { CTAButton } from '../shared/CTAButton';
import { ServiceCard } from './ServiceCard';

/**
 * ServicesSection displays the company's service offerings in a responsive grid.
 * Includes an H2 heading "Our Services", service cards, and a CTA button.
 *
 * Layout:
 * - Mobile (<768px): single-column grid
 * - Tablet (≥768px): 2-column grid
 * - Desktop (≥1024px): 4-column grid
 */
export function ServicesSection() {
  const scrollTo = useScrollTo();

  const handleCTAClick = () => {
    scrollTo(SECTION_IDS.contact);
  };

  return (
    <SectionWrapper id={SECTION_IDS.services} alternate>
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-gold mb-4">
            Our Services
          </h2>
          <p className="font-body text-brand-cream/70 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <AnimatedSection key={service.id} delay={index * 0.1}>
            <ServiceCard service={service} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="text-center">
          <CTAButton onClick={handleCTAClick} variant="outline">
            Get in Touch
          </CTAButton>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
