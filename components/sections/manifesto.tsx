'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Manifesto() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="manifesto" className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-black border-t border-zinc-900 overflow-hidden" ref={ref}>
      {/* Ambient color blooms */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 20% 50%, rgba(220, 100, 50, 0.08) 0%, transparent 40%),
            radial-gradient(ellipse 500px 350px at 80% 70%, rgba(79, 150, 220, 0.06) 0%, transparent 45%)
          `,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Label */}
        <div className={`mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs md:text-sm font-light tracking-[0.3em] text-blue-400 uppercase">
            THE MANIFESTO
          </p>
        </div>

        {/* Main highlight heading */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '50ms' : '0ms' }}>
          <h2 className="text-4xl md:text-6xl font-light leading-tight md:leading-tight text-white">
            Merging Hungama's rich heritage in global film culture with the cutting-edge precision of AI technology.
          </h2>
        </div>

        {/* Supporting paragraphs - two columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
          <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed">
            This is not just a festival; it is cinema reimagined for a new era of intelligence. We challenge creators to push beyond the uncanny valley and into the realm of the sublime.
          </p>
          <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed">
            From neural rendering to generative scripts, we celebrate the symbiotic relationship between human intent and machine execution. The future of storytelling is collaborative, and it starts here.
          </p>
        </div>
      </div>
    </section>
  );
}
