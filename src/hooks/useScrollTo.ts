import { useCallback } from 'react';

/** Fixed navbar height offset in pixels */
const NAVBAR_OFFSET = 80;

/**
 * Custom hook that returns a function to smooth-scroll to a section by its ID.
 * Accounts for the fixed navbar offset so the section isn't hidden behind it.
 *
 * @returns A function that scrolls to the element with the given section ID
 */
export function useScrollTo(): (sectionId: string) => void {
  const scrollTo = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - NAVBAR_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  return scrollTo;
}
