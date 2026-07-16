import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';
import { CTAButton } from '../shared/CTAButton';
import { PropertyCard } from './PropertyCard';
import { properties } from '../../data/properties';
import { SECTION_IDS } from '../../utils/constants';

/**
 * Featured Properties section displaying property listings in a responsive grid.
 * Grid layout: 3 columns on desktop (lg), 2 on tablet (md), 1 on mobile.
 * Includes "View All Properties" CTA below the grid.
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 10.5
 */
export function PropertiesSection() {
  return (
    <SectionWrapper id={SECTION_IDS.properties} alternate>
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-brand-gold text-center mb-12">
          Featured Properties
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <AnimatedSection key={property.id} delay={index * 0.1}>
            <PropertyCard property={property} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <CTAButton variant="outline" href={`#${SECTION_IDS.contact}`}>
          View All Properties
        </CTAButton>
      </AnimatedSection>
    </SectionWrapper>
  );
}
