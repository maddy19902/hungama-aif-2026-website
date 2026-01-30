'use client';

import React from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

export default function Manifesto() {
  const { ref, isVisible } = useInViewReveal({ threshold: 0.2 });

  return (
    <section id="manifesto" className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-black overflow-hidden" ref={ref}>
      {/* Background - solid black, no gradients */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <div className={`mb-6 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs font-light tracking-[0.25em] text-zinc-500 uppercase">
            PROLOGUE
          </p>
        </div>

        {/* Heading block */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
          <h2 className="text-2xl md:text-4xl font-light leading-relaxed md:leading-relaxed tracking-tight text-white">
            Merging Hungama’s global cinematic soul with the cutting-edge precision of AI.
          </h2>
        </div>

        {/* Body copy block */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <div>
            <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
              Since 1999, Hungama has shaped how stories are discovered, distributed, and experienced across 
              platforms, languages, and borders. The Hungama AI Film Festival carries this legacy into a decisive 
              moment—where AI is reshaping cinema itself. This is not a novel reinvention, but a grounded 
              evolution in scale, culture, and creative responsibility.
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
              Today, AI isn't an expedient bypass or a hollow performance. It is a collaborator—working alongside 
              human intent to unlock new cinematic forms. Creator-first, globally open, and tool-agnostic, the
              festival is a proving ground for what AI-native storytelling can become: meaningful, original, and built
              for the future of cinema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



