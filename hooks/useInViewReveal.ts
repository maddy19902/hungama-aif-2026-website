'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Stable, SSR-safe IntersectionObserver hook for scroll-triggered reveals.
 * 
 * Returns isVisible: false by default (hidden state)
 * Triggers once on viewport entry, transitions to true (visible state)
 * 
 * Animation pattern:
 * - Hidden: opacity-0, translate-y-6/8, pointer-events-none
 * - Visible: opacity-100, translate-y-0, pointer-events-auto
 */
export function useInViewReveal(options: UseInViewRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  // Start with false: content hidden until observer triggers
  // This prevents flash of unstyled content and ensures animations fire
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: if IntersectionObserver not supported, reveal immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Observer configuration for once-per-element triggers
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger reveal once when element enters viewport
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
