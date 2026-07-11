import { useState } from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What kind of plots do you offer?',
    answer: 'We offer a range of plots suitable for residential, commercial, and agricultural purposes.',
  },
  {
    question: 'Where are your projects located?',
    answer: 'Our projects are strategically located in Visakhapatnam, including Madhurawada, Kommadi, Boyapalem, and surrounding areas with excellent connectivity.',
  },
  {
    question: 'What is the booking process?',
    answer: 'The booking process is simple — contact us for a site visit, choose your plot, complete the documentation, and make the payment. Our team guides you through every step.',
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/20">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-6 bg-brand-teal-light/50 text-white font-body text-left hover:bg-brand-teal-light/70 transition-colors min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{item.question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-brand-dark font-body text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

/**
 * FAQ section matching the live site — teal background with accordion Q&A.
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left side */}
        <AnimatedSection>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-brand-gold inline-block" />
            Royal Reality Groups
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4">
            Royal Reality Groups | Your Gateway To Opulent Living
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Discover the epitome of luxury real estate with Royal Reality Groups.
          </p>
        </AnimatedSection>

        {/* Right side — FAQ */}
        <AnimatedSection delay={0.1}>
          <h3 className="font-heading text-2xl md:text-3xl text-brand-gold font-bold mb-4 text-center">
            Find Answers To Your Real Estate Questions
          </h3>
          <p className="font-body text-white/70 text-sm mb-6 text-center">
            Unsure about the real estate process? Our FAQ section provides clear and concise answers to your questions.
          </p>
          <div className="rounded-lg overflow-hidden">
            {FAQ_ITEMS.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
