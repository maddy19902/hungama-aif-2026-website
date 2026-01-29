'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function AwardCategories() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = [
    {
      title: 'Direction',
      icon: '▶',
      criteria: 'Innovative directorial vision',
      count: '24 Submissions',
      brandAccent: 'blue',
    },
    {
      title: 'Cinematography',
      icon: '◉',
      criteria: 'Visual storytelling excellence',
      count: '19 Submissions',
      brandAccent: 'orange',
    },
    {
      title: 'Sound Design',
      icon: '♪',
      criteria: 'Immersive audio experience',
      count: '16 Submissions',
      brandAccent: 'lime',
    },
    {
      title: 'Screenplay',
      icon: '✎',
      criteria: 'Compelling narrative structure',
      count: '21 Submissions',
      brandAccent: 'blue',
    },
    {
      title: 'Post-Production',
      icon: '◈',
      criteria: 'Technical excellence',
      count: '14 Submissions',
      brandAccent: 'orange',
    },
    {
      title: 'AI Innovation',
      icon: '⚡',
      criteria: 'Creative AI integration',
      count: '32 Submissions',
      brandAccent: 'lime',
    },
  ];

  // Collage layout pattern - asymmetric sizes
  const getCollageSizing = (index: number) => {
    const patterns = [
      { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2', h: 'h-48 md:h-80' },
      { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', h: 'h-40 md:h-56' },
      { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', h: 'h-40 md:h-56' },
      { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2', h: 'h-48 md:h-80' },
      { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', h: 'h-40 md:h-56' },
      { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', h: 'h-40 md:h-56' },
    ];
    return patterns[index % patterns.length];
  };

  const getVignette = (accent: string) => {
    const vignettes = {
      blue: 'radial-gradient(ellipse at center, rgba(79, 150, 220, 0.08) 0%, transparent 65%)',
      orange: 'radial-gradient(ellipse at center, rgba(220, 100, 50, 0.08) 0%, transparent 65%)',
      lime: 'radial-gradient(ellipse at center, rgba(150, 200, 50, 0.08) 0%, transparent 65%)',
    };
    return vignettes[accent as keyof typeof vignettes];
  };

  return (
    <section ref={ref} id="categories" className="w-full py-16 md:py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-5xl font-light leading-tight md:leading-tight text-white mb-4">
            Film Categories
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-400">
            Showcasing visionary films at the forefront of AI-driven storytelling.
          </p>
        </div>

        {/* Collage Layout - Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-max">
          {categories.map((category, index) => {
            const sizing = getCollageSizing(index);
            return (
              <div
                key={index}
                className={`${sizing.colSpan} ${sizing.rowSpan} group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: isVisible ? `${Math.min(index * 60, 500)}ms` : '0ms' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Base background */}
                <div className="absolute inset-0 bg-zinc-900/60 border border-zinc-800" />

                {/* Vignette with brand color */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: getVignette(category.brandAccent) }}
                />

                {/* Shutter reveal - top to bottom */}
                <div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-zinc-800/50 via-zinc-800/30 to-transparent pointer-events-none"
                  style={{
                    height: hoveredIndex === index || activeIndex === index ? '0%' : '100%',
                    transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 20,
                  }}
                />

                {/* Content container */}
                <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6">
                  {/* Top content */}
                  <div>
                    <div className="text-3xl md:text-4xl mb-2 text-zinc-600 group-hover:text-white transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Bottom content */}
                  <div>
                    {/* Criteria - revealed on hover/tap */}
                    <p
                      className={`text-xs md:text-sm font-light mb-2 transition-all duration-500 ${
                        hoveredIndex === index || activeIndex === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-1 pointer-events-none'
                      }`}
                    >
                      {category.criteria}
                    </p>

                    <p className="text-xs font-light text-zinc-400">
                      {category.count}
                    </p>

                    {/* Bottom accent bar */}
                    <div
                      className="mt-2 h-0.5 bg-gradient-to-r transition-all duration-500 rounded-full"
                      style={{
                        backgroundImage:
                          category.brandAccent === 'blue'
                            ? 'linear-gradient(90deg, rgba(79, 150, 220, 0.6) 0%, transparent 100%)'
                            : category.brandAccent === 'orange'
                              ? 'linear-gradient(90deg, rgba(220, 100, 50, 0.6) 0%, transparent 100%)'
                              : 'linear-gradient(90deg, rgba(150, 200, 50, 0.6) 0%, transparent 100%)',
                        opacity: hoveredIndex === index || activeIndex === index ? 1 : 0.3,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
