'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Sponsors() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const sponsors = [
    { name: 'CreatiCities', logo: '◆' },
    { name: 'TRIBECA', logo: '▲' },
    { name: 'NETFLIX', logo: '■' },
    { name: 'Outdoor Boots', logo: '●' },
  ];

  return (
    <section ref={ref} className="relative w-full py-12 md:py-16 px-4 md:px-8 bg-black border-t border-zinc-900 overflow-hidden">
      {/* Ambient color bloom */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 400px 250px at 50% 0%, rgba(79, 150, 220, 0.06) 0%, transparent 50%)
          `,
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <p
          className={`text-xs md:text-sm font-light tracking-widest text-zinc-500 uppercase mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Presented Partners
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`flex flex-col items-start gap-3 p-4 md:p-6 rounded-lg card-dark-interactive group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="text-2xl md:text-3xl text-zinc-700 group-hover:text-blue-400 transition-colors">
                {sponsor.logo}
              </div>
              <p className="text-xs md:text-sm font-light text-zinc-400 group-hover:text-white transition-colors">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
