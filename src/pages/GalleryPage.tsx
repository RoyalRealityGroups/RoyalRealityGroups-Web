import { AnimatedSection } from '../components/shared/AnimatedSection';

/** Gallery images — placeholders for now */
const OFFICE_TEAM = [
  '/images/gallery/team-1.jpg',
  '/images/gallery/team-2.jpg',
  '/images/gallery/team-3.jpg',
];

const RECENT_PHOTOS = [
  '/images/gallery/photo-1.jpg',
  '/images/gallery/photo-2.jpg',
  '/images/gallery/photo-3.jpg',
  '/images/gallery/photo-4.jpg',
  '/images/gallery/photo-5.jpg',
  '/images/gallery/photo-6.jpg',
];

/**
 * Gallery page — shows office team and recent photos.
 */
export function GalleryPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-brand-dark pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-white font-bold mb-2">Gallery</h1>
          <p className="font-body text-white/60">
            <a href="/" className="hover:text-brand-gold transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-brand-gold">Gallery</span>
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Office Team */}
          <AnimatedSection>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-dark/60 text-center mb-2">
              Royal Reality Groups
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark font-bold text-center mb-8">
              Office Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {OFFICE_TEAM.map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={img}
                    alt={`Office team photo ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100"><p class="text-gray-400 font-body text-sm">Team Photo ${i + 1}</p></div>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Recent Photos */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark font-bold text-center mb-8">
              Recent Photos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {RECENT_PHOTOS.map((img, i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={img}
                    alt={`Recent photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100"><p class="text-gray-400 font-body text-sm">Photo ${i + 1}</p></div>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
