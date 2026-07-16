import { useState, useEffect, useCallback } from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { CTAButton } from '../shared/CTAButton';
import { SECTION_IDS } from '../../utils/constants';

/** Hero background slides — replace with your real property images */
const HERO_SLIDES = [
  {
    webp: '/images/hero/hero-slide-1.webp',
    fallback: '/images/hero/hero-slide-1.jpg',
    alt: 'Luxury villa with modern architecture',
  },
  {
    webp: '/images/hero/hero-slide-2.webp',
    fallback: '/images/hero/hero-slide-2.jpg',
    alt: 'Premium apartment complex with landscaped gardens',
  },
  {
    webp: '/images/hero/hero-slide-3.webp',
    fallback: '/images/hero/hero-slide-3.jpg',
    alt: 'Spacious residential plot in prime location',
  },
];

/** Service highlights shown at the bottom of the hero */
const HERO_SERVICES = [
  { title: 'Royal Homes', description: 'Exquisite properties, unparalleled service.' },
  { title: 'Regal Realty', description: 'Your partner in finding the perfect home.' },
  { title: 'Luxury Living', description: 'Experience the finest in real estate.' },
];

const SLIDE_INTERVAL = 5000;

/**
 * Full-viewport hero section with sliding background images,
 * left-aligned text overlay, and service highlight cards at the bottom.
 * Matches the live site's design at royalrealitygroups.com.
 */
export function HeroSection() {
  const scrollTo = useScrollTo();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleExploreClick = () => {
    scrollTo(SECTION_IDS.properties);
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Sliding background images */}
      <div
        className="absolute inset-0 w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
            aria-hidden={index !== currentSlide}
          >
            {failedImages.has(index) ? (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-dark via-brand-dark-lighter to-brand-dark-card" />
            ) : (
              <picture className="absolute inset-0 w-full h-full">
                <source srcSet={slide.webp} type="image/webp" />
                <img
                  src={slide.fallback}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  onError={() => handleImageError(index)}
                />
              </picture>
            )}
          </div>
        ))}
      </div>

      {/* Dark teal overlay */}
      <div className="absolute inset-0 bg-brand-dark/70" aria-hidden="true" />

      {/* Main content — left-aligned like the live site */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-4 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-brand-gold inline-block" />
            Vision, Quality, and Pride.
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight font-bold">
            Royal Reality Groups | Crafting Your Royal Abode
          </h1>
          <p className="font-body text-base md:text-lg text-white/80 mb-8 leading-relaxed">
            Royal Reality Groups specializes in crafting luxurious living spaces. We offer a
            wide range of premium properties, expert guidance, and personalized service to
            help you find your ideal home.
          </p>
          <CTAButton onClick={handleExploreClick} variant="primary">
            Learn More
          </CTAButton>
        </div>
      </div>

      {/* Service highlight cards at the bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {HERO_SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 text-center ${
                index === 2
                  ? 'bg-brand-gold text-brand-dark'
                  : 'bg-brand-dark-card/90 text-white border border-brand-gold/20'
              }`}
            >
              <h3 className={`font-heading text-lg font-bold mb-2 ${
                index === 2 ? 'text-brand-dark' : 'text-white'
              }`}>
                {service.title}
              </h3>
              <p className={`font-body text-sm ${
                index === 2 ? 'text-brand-dark/80' : 'text-white/70'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-brand-gold' : 'bg-white/40'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
