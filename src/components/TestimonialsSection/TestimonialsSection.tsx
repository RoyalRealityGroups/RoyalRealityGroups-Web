import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';
import { TestimonialCarousel } from './TestimonialCarousel';
import { testimonials } from '../../data/testimonials';
import { SECTION_IDS } from '../../utils/constants';

/**
 * Testimonials section displaying client reviews in a carousel.
 * Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6
 */
export function TestimonialsSection() {
  return (
    <SectionWrapper id={SECTION_IDS.testimonials}>
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-brand-gold text-center mb-12">
          What Our Clients Say
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialCarousel testimonials={testimonials} />
      </AnimatedSection>
    </SectionWrapper>
  );
}
