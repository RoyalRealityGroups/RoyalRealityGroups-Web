import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to detect the currently active section.
 * Returns the ID of the most-visible section based on a threshold of 40% from the top of the viewport.
 *
 * @param sectionIds - Array of section element IDs to observe
 * @returns The ID of the currently active (most visible) section
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Track intersection ratios for each section
    const sectionRatios = new Map<string, number>();

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        sectionRatios.set(entry.target.id, entry.intersectionRatio);
      });

      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let mostVisibleSection = sectionIds[0] ?? '';

      sectionRatios.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      if (maxRatio > 0) {
        setActiveSection(mostVisibleSection);
      }
    };

    // Create observer with multiple thresholds for granular detection
    observerRef.current = new IntersectionObserver(handleIntersection, {
      // rootMargin accounts for the fixed navbar (top 80px offset)
      // Observes when sections are within the top 40% of the viewport
      rootMargin: '-80px 0px -60% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    });

    // Observe all section elements
    const elements: Element[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
        elements.push(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [sectionIds]);

  return activeSection;
}
