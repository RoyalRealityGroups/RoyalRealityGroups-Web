import { useState } from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';
import { SECTION_IDS } from '../../utils/constants';

/** Skill bars for CEO section */
const SKILLS = [
  { label: 'Analysis', value: 95 },
  { label: 'Advanced Tools', value: 90 },
  { label: 'Success Project', value: 100 },
  { label: 'Service Planning', value: 85 },
];

/** About FAQ items */
const ABOUT_FAQ = [
  {
    question: 'What Services Does Royal Reality Groups Offer?',
    answer: 'We offer a comprehensive range of real estate services, including residential and commercial property development, project management, and investment consultancy.',
  },
  {
    question: 'How Long Have Royal Reality Groups Been In The Industry?',
    answer: 'We have over 25 years of experience in the real estate industry, delivering top-tier solutions to our clients.',
  },
  {
    question: 'What Makes Royal Reality Groups Different From Other Developers?',
    answer: 'Our commitment to quality, transparent dealings, and personalized service sets us apart. We focus on building lasting relationships with our clients.',
  },
  {
    question: 'Do You Offer Customised Property Solutions?',
    answer: 'Yes, we work closely with each client to understand their unique requirements and deliver tailored property solutions.',
  },
  {
    question: 'How Can I Invest In A Royal Reality Groups Project?',
    answer: 'Contact us directly for investment opportunities. Our team will guide you through available projects and the investment process.',
  },
];

/** Company stats */
const STATS = [
  { value: '100+', label: 'Happy Clients' },
  { value: '50+', label: 'Project Complete' },
  { value: '25+', label: 'Team Members' },
  { value: '10+', label: 'Awards Winning' },
];

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-body text-sm text-brand-dark/80">{label}</span>
        <span className="font-body text-sm text-brand-gold font-semibold">{value}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-gold rounded-full transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="font-body text-brand-dark font-medium text-sm">{question}</span>
        <svg
          className={`w-5 h-5 text-brand-gold flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 font-body text-brand-dark/70 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

/**
 * About Us section matching the live site:
 * - "Shaping Tomorrow's Skylines, Today" intro
 * - CEO section with skill bars
 * - FAQ section
 * - Stats
 * - Mission & Vision
 */
export function AboutSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Main About Section — White background */}
      <section id={SECTION_IDS.about} className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-dark/60 text-center mb-2">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-brand-dark font-bold text-center mb-4">
              "Shaping Tomorrow's Skylines, Today"
            </h2>
            <p className="font-body text-brand-dark/70 text-center max-w-3xl mx-auto mb-12">
              At Royal Reality Groups, we are committed to transforming dreams into reality
              with precision and integrity. Our team brings a wealth of expertise to every
              project, ensuring unparalleled excellence in real estate development.
            </p>
          </AnimatedSection>

          {/* CEO + Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection>
              <div className="bg-brand-dark rounded-lg p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-brand-gold font-bold">MURALIDHAR MODALAVALASA</h3>
                <p className="font-body text-white/70 text-sm mt-1">CEO of Royal Reality Groups</p>
                <div className="mt-4 inline-block bg-brand-gold/20 px-4 py-2 rounded">
                  <span className="font-heading text-2xl text-brand-gold font-bold">25+</span>
                  <p className="font-body text-white/70 text-xs">Years Experience</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                {SKILLS.map((skill) => (
                  <SkillBar key={skill.label} label={skill.label} value={skill.value} />
                ))}
                <p className="font-body text-brand-dark/60 italic text-sm mt-4">
                  "Building with integrity, delivering with precision."
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* FAQ */}
          <AnimatedSection>
            <h3 className="font-heading text-2xl md:text-3xl text-brand-dark font-bold text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto">
              {ABOUT_FAQ.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar — Teal background */}
      <section className="bg-brand-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-heading text-3xl md:text-4xl text-brand-gold font-bold">{stat.value}</span>
                <p className="font-body text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision — White background */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-dark/60 flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-brand-gold inline-block" />
                Royal Reality Groups
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-brand-dark font-bold mb-6">
                Commitment To Excellence
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-heading text-lg text-brand-dark font-bold">Our Mission</h4>
                    <p className="font-body text-brand-dark/70 text-sm">
                      To redefine real estate by delivering high-quality, sustainable developments
                      that enhance the way people live and work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-heading text-lg text-brand-dark font-bold">Our Vision</h4>
                    <p className="font-body text-brand-dark/70 text-sm">
                      To be the leading real estate developer known for our integrity, innovation,
                      and client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="font-heading text-xl text-brand-dark font-bold mb-4">
                  Crafting Iconic Spaces With Precision And Passion
                </h4>
                <p className="font-body text-brand-dark/70 text-sm leading-relaxed mb-6">
                  At Royal Reality Groups, we are dedicated to designing and delivering
                  exceptional real estate projects that stand the test of time. With a commitment
                  to quality and innovation, we transform visions into landmark developments
                  that define the future.
                </p>
                <blockquote className="border-l-4 border-brand-gold pl-4 italic text-brand-dark/60 font-body text-sm">
                  "On time, every time – that's our promise to you."
                  <footer className="mt-2 font-semibold text-brand-dark not-italic">— Royal Reality Groups</footer>
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
