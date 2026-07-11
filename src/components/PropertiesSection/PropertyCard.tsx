import { useState } from 'react';
import { Property } from '../../types';
import { formatPrice } from '../../utils/formatPrice';

interface PropertyCardProps {
  property: Property;
}

/**
 * Displays a single property listing with image, name, location,
 * formatted price, and key features (bedrooms, bathrooms, area).
 * Includes hover scale transform and elevated box-shadow.
 * Property images use lazy loading for performance (Requirement 10.5).
 * Uses <picture> element with WebP source and fallback (Requirement 10.4).
 * Shows placeholder with property name on image load error.
 */
export function PropertyCard({ property }: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Derive JPEG fallback path from WebP path
  const fallbackSrc = property.image.replace('.webp', '.jpg');

  return (
    <article className="group bg-brand-dark-lighter rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Property Image with <picture> for WebP + fallback, or placeholder on error */}
      <div className="relative w-full h-56 overflow-hidden">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-brand-dark-card">
            <div className="text-center px-4">
              <svg
                className="w-12 h-12 mx-auto mb-2 text-brand-gold/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-brand-gold/60 text-sm font-body">{property.name}</p>
            </div>
          </div>
        ) : (
          <picture>
            <source srcSet={property.image} type="image/webp" />
            <img
              src={fallbackSrc}
              alt={`${property.name} — ${property.bedrooms} bedroom property in ${property.location}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={handleImageError}
            />
          </picture>
        )}
      </div>

      {/* Property Details */}
      <div className="p-5">
        <h3 className="font-heading text-xl text-brand-gold mb-1">
          {property.name}
        </h3>
        <p className="text-gray-400 text-sm mb-3 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {property.location}
        </p>

        {/* Price */}
        <p className="text-brand-gold-light text-lg font-semibold mb-4">
          {formatPrice(property.price, property.currency)}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between text-gray-300 text-sm border-t border-gray-700 pt-3">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {property.bedrooms} Beds
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            {property.bathrooms} Baths
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            {property.areaSqFt} sq ft
          </span>
        </div>
      </div>
    </article>
  );
}
