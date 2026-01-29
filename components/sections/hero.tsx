'use client';

import React from 'react';

interface HeroProps {
  opacity: number;
  onSubmitClick: () => void;
}

export default function Hero({ opacity, onSubmitClick }: HeroProps) {
  return (
    <section
      className="relative w-full min-h-[75vh] md:min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 md:py-0 overflow-hidden mt-16"
      style={{
        background: `rgba(0, 0, 0, ${1 - opacity * 0.3})`,
        transition: 'background 0.1s ease-out',
      }}
    >
      {/* Background gradient overlay - multiple color blooms */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, rgba(79, 150, 220, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 70% 30%, rgba(220, 100, 50, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(150, 200, 50, 0.06) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Subtitle */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs md:text-sm font-light tracking-[0.3em] text-zinc-500 uppercase accent-line-blue">
            THE HUNGAMA ARTIST IN FOCUS AWARDS
          </p>
        </div>

        {/* Main headline - responsive sizing */}
        <h1 className="mb-4 md:mb-6">
          <div className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight md:leading-none text-white">
            Defining
          </div>
          <div className="text-5xl md:text-8xl lg:text-9xl font-black italic leading-tight md:leading-none text-white">
            Excellence
          </div>
        </h1>

        {/* Supporting line */}
        <div className="mt-8 md:mt-12 mb-12 md:mb-16 max-w-2xl">
          <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
            Celebrating innovation, creativity, and the artists shaping tomorrow's world
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onSubmitClick}
          className="mb-16 md:mb-24 px-6 md:px-8 py-3 md:py-4 bg-gradient-primary text-white font-semibold text-sm md:text-base rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
        >
          Submit Entry
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        {/* Award categories preview - minimal */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-light text-zinc-400">
          <span>PRESENTED PARTNERS</span>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">
            CreatiCities
          </a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">
            TRIBECA
          </a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">
            NETFLIX
          </a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">
            Outdoor Boots
          </a>
        </div>
      </div>

      {/* Scroll indicator - optional */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50"
        style={{ opacity: opacity }}
      >
        <svg
          className="w-5 h-5 text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Fade to black gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}
