import { useState, useCallback, useEffect, useRef } from 'react';
import { TIMING } from '../utils/constants';

export interface UseCarouselReturn {
  currentIndex: number;
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
  pause: () => void;
  resume: () => void;
  isPaused: boolean;
}

/**
 * Custom hook for managing a carousel with auto-rotation, pause/resume, and wrapping.
 *
 * @param totalItems - Total number of items in the carousel (must be > 0)
 * @param interval - Auto-rotation interval in ms (defaults to TIMING.carousel_interval)
 * @returns Carousel state and control functions
 */
export function useCarousel(
  totalItems: number,
  interval: number = TIMING.carousel_interval
): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback(
    (index: number) => {
      const clampedIndex = ((index % totalItems) + totalItems) % totalItems;
      setCurrentIndex(clampedIndex);
    },
    [totalItems]
  );

  const clearAutoRotation = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoRotation = useCallback(() => {
    clearAutoRotation();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, interval);
  }, [totalItems, interval, clearAutoRotation]);

  const pause = useCallback(() => {
    setIsPaused(true);
    clearAutoRotation();
  }, [clearAutoRotation]);

  const resume = useCallback(() => {
    setIsPaused(false);
    startAutoRotation();
  }, [startAutoRotation]);

  // Start auto-rotation on mount and when dependencies change
  useEffect(() => {
    if (!isPaused) {
      startAutoRotation();
    }
    return clearAutoRotation;
  }, [isPaused, startAutoRotation, clearAutoRotation]);

  return {
    currentIndex,
    next,
    previous,
    goTo,
    pause,
    resume,
    isPaused,
  };
}
