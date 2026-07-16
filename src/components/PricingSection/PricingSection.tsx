import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';

/**
 * "We Have Best Price For Our Client" section — teal background with quote.
 */
export function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-brand-gold inline-block" />
            Royal Reality Groups
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold">
            We Have Best Price For Our Client
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <blockquote className="font-body text-white/90 text-base md:text-lg leading-relaxed italic">
            "At Royal Reality Groups, we're committed to providing exceptional value to our
            clients. Our team works tirelessly to negotiate the best possible deals on
            properties, ensuring that you get the most for your money. Whether you're buying,
            selling, or renting, we're dedicated to offering competitive pricing without
            compromising on quality. With our expertise and dedication to customer satisfaction,
            you can trust us to find you the perfect property at the best possible price."
          </blockquote>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
