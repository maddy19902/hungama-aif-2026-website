'use client';

import React from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

export default function Sponsors() {
  const { ref, isVisible } = useInViewReveal({ threshold: 0.3 });

  const sponsors = [
    { name: 'India AI Impact Summit 2026', src: '/images/sponsors/ai-summit-logo-copy.png' },
    { name: 'Bollywood Hungama', src: '/images/sponsors/bh_logo-copy.png' },
    { name: 'Ministry of Electronics and Information Technology (MeitY)', src: '/images/sponsors/meit_logo-copy.png' },
    { name: 'NVIDIA', src: '/images/sponsors/nvidia_wbg-copy.png' },
  ];

  return (
    <section ref={ref} className={`relative w-full py-8 md:py-12 px-4 md:px-8 bg-black overflow-x-auto overflow-y-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 min-w-max md:min-w-full md:mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-all duration-700 hover:opacity-90"
              style={{
                opacity: isVisible ? 0.55 : 0.4,
                transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
              }}
            >
              <img
                src={sponsor.src}
                alt={`${sponsor.name} logo`}
                className="h-10 md:h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
