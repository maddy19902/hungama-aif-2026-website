'use client';

import React from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

export default function Jury() {
  const { ref, isVisible } = useInViewReveal({ threshold: 0.1 });

  const juryMembers = [
    { name: 'Ajay Devgn', designation: 'Actor, Producer & Filmmaker', image: 'ajay-devgn.jpg', active: true },
    { name: 'Bhushan Kumar', designation: 'Chairman, T-Series', image: 'bhushan_kumar.jpg', active: true },
    { name: 'Ralph Simon', designation: 'Chairman, Mobilium', image: 'ralph_simon.jpg', active: true },
    { name: 'Ty Roberts', designation: 'Eminent Media Technologist', image: 'ty_roberts.jpg', active: true },
    { name: 'Siddharth Anand', designation: 'Filmmaker, Director & Producer', image: 'siddharth_anand.jpg', active: true },
    { name: 'Om Raut', designation: 'Filmmaker, Director & Writer', image: 'om_raut.jpg', active: true },
    { name: 'Riteish Deshmukh', designation: 'Actor, Producer & Filmmaker', image: 'riteish_deshmukh.jpg', active: true },
    { name: 'Ashish Chaudhary', designation: 'Actor', image: 'ashish_chaudhary.jpg', active: true },
    { name: 'Sulaiman Merchant', designation: 'Musician & Producer', image: 'sulaiman_merchant.jpg', active: true },
    { name: 'Madhur Bhandarkar', designation: 'Filmmaker, Director & Producer', image: 'Madhur_Bhandarkar.jpg', active: true },
    { name: 'Ken Ghosh', designation: 'Film Director', image: 'ken_ghosh.jpg', active: true },
    { name: 'Kailash Surendranath', designation: 'Filmmaker, Director & Producer', image: 'kailash_s.jpg', active: true },

    // FUTURE JURY MEMBERS (INACTIVE)
    // { name: 'Future Member 13', designation: 'Role', image: 'placeholder.jpg', active: false },
    // { name: 'Future Member 14', designation: 'Role', image: 'placeholder.jpg', active: false },
    // { name: 'Future Member 15', designation: 'Role', image: 'placeholder.jpg', active: false },
    // { name: 'Future Member 16', designation: 'Role', image: 'placeholder.jpg', active: false },
    // { name: 'Future Member 17', designation: 'Role', image: 'placeholder.jpg', active: false },
    // { name: 'Future Member 18', designation: 'Role', image: 'placeholder.jpg', active: false },
  ];

  const activeJurors = juryMembers.filter(juror => juror.active);

  // Editorial collage pattern - asymmetric Masonry-like layout
  const getCollageSize = (index: number) => {
    const patterns = [
      { w: 'md:col-span-2 md:row-span-2', h: 'h-44 md:h-80', accent: 'blue' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-80', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-2', h: 'h-44 md:h-80', accent: 'blue' },
      { w: 'md:col-span-2 md:row-span-1', h: 'h-44 md:h-80', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'blue' },
      { w: 'md:col-span-2 md:row-span-1', h: 'h-44 md:h-80', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'blue' },
      { w: 'md:col-span-2 md:row-span-1', h: 'h-44 md:h-80', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'blue' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'orange' },
      { w: 'md:col-span-2 md:row-span-2', h: 'h-44 md:h-80', accent: 'lime' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'blue' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'orange' },
      { w: 'md:col-span-1 md:row-span-1', h: 'h-44 md:h-64', accent: 'lime' },
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
    <section ref={ref} id="council" className={`w-full py-16 md:py-24 px-4 md:px-8 bg-black transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light leading-tight text-white mb-4">
            Creative Council
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-400">
            Visionary filmmakers, producers, and media leaders shaping the future of cinema and storytelling.
          </p>
        </div>

        {/* Editorial Collage - True Masonry Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-max">
          {activeJurors.map((juror, index) => {
            const sizing = getCollageSize(index);
            return (
              <div
                key={juror.name}
                  className={`${sizing.w} ${sizing.h} group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700`}
              >
                {/* Jury member image */}
                <img
                  src={`/images/jury/${juror.image}`}
                  alt={`${juror.name} – ${juror.designation}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />

                {/* Vignette overlay with brand color */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: getVignette(sizing.accent) }}
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />

                {/* Name and designation overlay - bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black via-black/90 to-transparent z-10">
                  <h3 className="text-xs md:text-sm font-semibold text-white leading-tight mb-0.5">
                    {juror.name}
                  </h3>
                  <p className="text-xs font-light text-zinc-400">
                    {juror.designation}
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
