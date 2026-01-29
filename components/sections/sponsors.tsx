'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Sponsors() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const sponsors = [
    { name: 'India AI Impact Summit 2026', src: '/images/sponsors/ai-summit-logo-copy.png' },
    { name: 'Bollywood Hungama', src: '/images/sponsors/bh_logo-copy.png' },
    { name: 'Ministry of Electronics and Information Technology (MeitY)', src: '/images/sponsors/meit_logo-copy.png' },
    { name: 'NVIDIA', src: '/images/sponsors/nvidia_wbg-copy.png' },
  ];

  return (
    <section ref={ref} className="relative w-full py-8 md:py-12 px-4 md:px-8 bg-black border-t border-zinc-900 overflow-x-auto overflow-y-hidden">
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 min-w-max md:min-w-full md:mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-700 hover:opacity-90 ${
                isVisible
                  ? 'opacity-55'
                  : 'opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
            >
              <img
                src={sponsor.src}
                alt={`${sponsor.name} logo`}
                className="h-5 md:h-7 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
