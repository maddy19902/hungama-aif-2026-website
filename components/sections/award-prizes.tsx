'use client';

import React from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

export default function AwardPrizes() {
  const { ref, isVisible } = useInViewReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-black overflow-hidden">
      {/* Ambient color blooms */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          background: `
            radial-gradient(ellipse 500px 350px at 40% 50%, rgba(79, 150, 220, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 450px 300px at 60% 30%, rgba(220, 100, 50, 0.06) 0%, transparent 50%)
          `,
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-4xl font-light leading-tight text-white mb-4">
              Award Prizes
            </h2>
            <div
              className="absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-[rgba(79,150,220,0.5)] via-[rgba(220,100,50,0.4)] to-transparent"
              style={{ width: '60%' }}
            />
          </div>
        </div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          {/* Grand Prize - Flagship */}
          <div className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
            <div className="relative p-8 md:p-12 card-dark rounded-xl border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute -top-4 left-4 md:left-6 px-3 py-1 bg-gradient-primary rounded-full">
                <p className="text-xs font-semibold text-white">FLAGSHIP</p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  Grand Prize
                </h3>

                <ul className="space-y-3 text-sm font-light text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Paid development contract with Hungama for micro drama series, music video slate, or short/feature film</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Mentorship with senior creators and storytellers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Access to Hungama distribution platforms and international showcase</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Category & Recognition Prizes */}
          <div className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <div className="relative p-8 md:p-12 card-dark rounded-xl border-2 border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute -top-4 left-4 md:left-6 px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full">
                <p className="text-xs font-semibold text-white">CATEGORY AWARDS</p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-xl md:text-2xl font-light text-white mb-6">
                  Award Benefits
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">Compute Credits</p>
                    <p className="text-sm font-light text-zinc-400">Cloud rendering and processing resources</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">Software Licenses</p>
                    <p className="text-sm font-light text-zinc-400">Professional creative tools and plugins</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">Hardware & Cloud Grants</p>
                    <p className="text-sm font-light text-zinc-400">Equipment and infrastructure support</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">Global Showcase</p>
                    <p className="text-sm font-light text-zinc-400">International festival placement and distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
