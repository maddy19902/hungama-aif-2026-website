'use client';

import React from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

export default function Manifesto() {
  const { ref, isVisible } = useInViewReveal({ threshold: 0.2 });

  return (
    <section id="manifesto" className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-black border-t border-zinc-900 overflow-hidden" ref={ref}>
      {/* Subtle ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 700px 500px at 15% 50%, rgba(220, 100, 50, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 600px 450px at 85% 60%, rgba(79, 150, 220, 0.03) 0%, transparent 50%)
          `,
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <div className={`mb-6 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs font-light tracking-[0.25em] text-zinc-500 uppercase">
            THE MANIFESTO
          </p>
        </div>

        {/* Heading block */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
          <h2 className="text-2xl md:text-4xl font-light leading-relaxed md:leading-relaxed tracking-tight text-white">
            Merging Hungama's rich heritage in global film culture<br />
            with the cutting-edge precision of AI technology.
          </h2>
        </div>

        {/* Body copy block */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <div>
            <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
              This is not just a festival; it is cinema reimagined for a new era of intelligence.
              Hungama stands at the intersection of content, creators, intellectual property,
              and global distribution — uniquely positioned to define what AI-native
              storytelling means for the world.
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
              From neural rendering to generative scripts, we celebrate the symbiotic
              relationship between human intent and machine execution. AI is no longer
              a tool behind the scenes — it is a creative collaborator. The future of
              storytelling is collaborative, and it begins here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
