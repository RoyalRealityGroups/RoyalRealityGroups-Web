import { useState } from 'react';
import { Testimonial } from '../../types';
import { useCarousel } from '../../hooks/useCarousel';
import { TIMING } from '../../utils/constants';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotateInterval?: number;
}

/**
 * Renders a single star (filled or empty) as an SVG icon.
 */
function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-brand-gold' : 'text-gray-600'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

/**
 * Renders a star rating display (1-5 stars).
 */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

/**
 * Testimonial client image with error fallback showing initials.
 */
function ClientImage({ src, name }: { src: string; name: string }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (error) {
    return (
      <div className="w-16 h-16 rounded-full border-2 border-brand-gold bg-brand-dark-card flex items-center justify-center">
        <span className="text-brand-gold font-heading text-lg">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

/**
 * Carousel component for displaying testimonials one at a time with
 * auto-rotation, pause on hover, navigation arrows, and dot indicators.
 *
 * Requirements: 6.2, 6.3, 6.4, 6.6
 */
export function TestimonialCarousel({
  testimonials,
  autoRotateInterval = TIMING.carousel_interval,
}: TestimonialCarouselProps) {
  const { currentIndex, next, previous, goTo, pause, resume } = useCarousel(
    testimonials.length,
    autoRotateInterval
  );

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={pause}
      onMouseLeave={resume}
      role="region"
      aria-label="Client testimonials"
      aria-roledescription="carousel"
    >
      {/* Testimonial Content */}
      <div className="text-center px-12 md:px-16">
        {/* Client Image */}
        {currentTestimonial.image && (
          <div className="mb-6 flex justify-center">
            <ClientImage
              src={currentTestimonial.image}
              name={currentTestimonial.clientName}
            />
          </div>
        )}

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          <StarRating rating={currentTestimonial.rating} />
        </div>

        {/* Review Text */}
        <blockquote className="text-brand-cream text-lg md:text-xl leading-relaxed mb-6 font-body italic">
          &ldquo;{currentTestimonial.reviewText}&rdquo;
        </blockquote>

        {/* Client Name */}
        <p className="text-brand-gold font-heading text-xl font-semibold">
          {currentTestimonial.clientName}
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={previous}
        className="absolute left-0 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-brand-dark-card/50 text-brand-gold hover:bg-brand-dark-card transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-brand-dark-card/50 text-brand-gold hover:bg-brand-dark-card transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
        aria-label="Next testimonial"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-gold ${
              index === currentIndex
                ? 'bg-brand-gold'
                : 'bg-gray-600 hover:bg-brand-gold-dark'
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <span
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-brand-gold' : 'bg-gray-600'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
