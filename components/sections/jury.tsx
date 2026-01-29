'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Jury() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const jurors = [
    { name: 'Sanjay Leela', title: 'Director', initials: 'SL' },
    { name: 'Priyanka Seth', title: 'Strategist', initials: 'PS' },
    { name: 'Rahul Khurana', title: 'Cinematographer', initials: 'RK' },
    { name: 'Asha Parekh', title: 'Producer', initials: 'AP' },
    { name: 'Vikram Singh', title: 'Technologist', initials: 'VS' },
    { name: 'Ananya Verma', title: 'Sound Designer', initials: 'AV' },
    { name: 'Deepak Choudhury', title: 'Editor', initials: 'DC' },
    { name: 'Meera Bhat', title: 'Screenwriter', initials: 'MB' },
    { name: 'Arjun Nair', title: 'VFX Director', initials: 'AN' },
    { name: 'Nisha Gupta', title: 'Composer', initials: 'NG' },
    { name: 'Rohan Kapoor', title: 'Photographer', initials: 'RK' },
    { name: 'Divya Sharma', title: 'Creative Lead', initials: 'DS' },
    { name: 'Zara Khan', title: 'Animator', initials: 'ZK' },
    { name: 'Samir Das', title: 'Colorist', initials: 'SD' },
    { name: 'Pooja Malhotra', title: 'Casting Director', initials: 'PM' },
    { name: 'Aditya Verma', title: 'Composer', initials: 'AV' },
    { name: 'Kavya Singh', title: 'Production', initials: 'KS' },
    { name: 'Nikhil Roy', title: 'Innovation', initials: 'NR' },
  ];

  // Editorial collage pattern - asymmetric Masonry-like layout
  const getCollageSize = (index: number) => {
    const patterns = [
      { w: 'md:col-span-2 md:row-span-2', h: 'h-40 md:h-72', accent: 'blue' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-2', h: 'h-40 md:h-72', accent: 'blue' },
      { w: 'md:col-span-2 md:row-span-1', h: 'h-40 md:h-48', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'blue' },
      { w: 'md:col-span-2 md:row-span-1', h: 'h-40 md:h-48', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'blue' },
      { w: 'md:col-span-2 md:row-span-1', h: 'h-40 md:h-48', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'blue' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'orange' },
      { w: 'md:col-span-2 md:row-span-2', h: 'h-40 md:h-72', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'blue' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-40 md:h-48', accent: 'lime' },
    ];
    return patterns[index % patterns.length];
  };

  const getVignette = (accent: string) => {
    const vignettes = {
      blue: 'radial-gradient(ellipse at center, rgba(79, 150, 220, 0.1) 0%, transparent 60%)',
      orange: 'radial-gradient(ellipse at center, rgba(220, 100, 50, 0.1) 0%, transparent 60%)',
      lime: 'radial-gradient(ellipse at center, rgba(150, 200, 50, 0.1) 0%, transparent 60%)',
    };
    return vignettes[accent as keyof typeof vignettes];
  };

  return (
    <section ref={ref} id="council" className="w-full py-16 md:py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-white mb-4">
            The Council
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-400">
            Industry titans guiding the future of creative excellence
          </p>
        </div>

        {/* Editorial Collage - True Masonry Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-max">
          {jurors.map((juror, index) => {
            const sizing = getCollageSize(index);
            return (
              <div
                key={index}
                className={`${sizing.w} ${sizing.h} group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${Math.min(index * 40, 600)}ms` : '0ms' }}
              >
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/70 via-zinc-900/50 to-black border border-zinc-800" />

                {/* Vignette overlay with brand color */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: getVignette(sizing.accent) }}
                />

                {/* Initials display - center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl md:text-6xl font-light text-zinc-700 group-hover:text-zinc-500 transition-colors duration-300">
                    {juror.initials}
                  </span>
                </div>

                {/* Name and title overlay - bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black via-black/90 to-transparent z-10">
                  <h3 className="text-xs md:text-sm font-semibold text-white leading-tight mb-0.5">
                    {juror.name}
                  </h3>
                  <p className="text-xs font-light text-zinc-400">
                    {juror.title}
                  </p>
                </div>

                {/* Interactive accent bar - reveals on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{
                    background:
                      sizing.accent === 'blue'
                        ? 'linear-gradient(90deg, rgba(79, 150, 220, 0.7) 0%, transparent 100%)'
                        : sizing.accent === 'orange'
                          ? 'linear-gradient(90deg, rgba(220, 100, 50, 0.7) 0%, transparent 100%)'
                          : 'linear-gradient(90deg, rgba(150, 200, 50, 0.7) 0%, transparent 100%)',
                    opacity: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0';
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className={`mt-12 md:mt-16 p-6 md:p-8 card-dark rounded-lg border border-zinc-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          <p className="text-sm md:text-base font-light text-zinc-300">
            <span className="font-semibold text-white">Jury Expertise:</span> Spanning direction, cinematography, sound design, visual effects, screenwriting, production, technology, and emerging innovation
          </p>
        </div>
      </div>
    </section>
  );
}
