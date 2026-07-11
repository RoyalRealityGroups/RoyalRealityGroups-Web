import { HeroSection } from '../components/HeroSection/HeroSection';
import { FAQSection } from '../components/FAQSection/FAQSection';
import { FeaturesSection } from '../components/FeaturesSection/FeaturesSection';
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection';
import { PricingSection } from '../components/PricingSection/PricingSection';
import { ContactSection } from '../components/ContactSection/ContactSection';
import { BookingBanner } from '../components/BookingBanner/BookingBanner';

/**
 * Home page — shows all sections from the live site homepage.
 */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <FAQSection />
      <FeaturesSection />
      <ProjectsSection />
      <PricingSection />
      <ContactSection />
      <BookingBanner />
    </>
  );
}
