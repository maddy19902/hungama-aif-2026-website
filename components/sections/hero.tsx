'use client';

import React from 'react';

interface HeroProps {
  opacity: number;
  onSubmitClick: () => void;
}

export default function Hero({ opacity, onSubmitClick }: HeroProps) {

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        background: `rgba(0, 0, 0, ${1 - opacity * 0.3})`,
        transition: 'background 0.1s ease-out',
      }}
    >
      {/* Background video - loads immediately after hero text */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/YT_BG_Vid.webm" type="video/webm" />
      </video>

      {/* Fallback solid overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `rgba(0, 0, 0, 1)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Subtitle */}
        {/* <div className="mb-6 md:mb-8">
          <p className="text-xs md:text-sm font-light tracking-[0.3em] text-zinc-500 uppercase accent-line-blue">
            THE HUNGAMA ARTIST IN FOCUS AWARDS
          </p>
        </div> */}

        {/* Main headline - renders instantly */}
        <h1 className="mb-4 md:mb-6">
          <span className="block text-3xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-none text-gradient-hungama">
            HUNGAMA
          </span>
          <div className="text-3xl md:text-6xl lg:text-7xl font-bold italic leading-tight md:leading-none text-white">
            AI FILM FESTIVAL
          </div>
        </h1>

        {/* Supporting line - renders instantly */}
        <div className="mt-8 md:mt-12 mb-16 md:mb-24 max-w-2xl">
          <p className="text-base md:text-lg font-light text-zinc-300 leading-relaxed">
            Celebrating the Future of Storytelling
          </p>
        </div>

        {/* CTA Button - renders instantly */}
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

        {/* Presenting Partners Logo Strip */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <p className="text-xs md:text-sm font-light tracking-[0.2em] text-zinc-500 uppercase">
            PRESENTING PARTNERS:
          </p>
          {/* <div className="flex items-center justify-center gap-6 md:gap-8">
            <img
              src="/images/sponsors/ai-summit-logo-copy.png"
              alt="India AI Impact Summit 2026 logo"
              className="h-4 md:h-5 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300"
            />
            <img
              src="/images/sponsors/bh_logo-copy.png"
              alt="Bollywood Hungama logo"
              className="h-4 md:h-5 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300"
            />
            <img
              src="/images/sponsors/meit_logo-copy.png"
              alt="Ministry of Electronics and Information Technology logo"
              className="h-4 md:h-5 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300"
            />
            <img
              src="/images/sponsors/nvidia_wbg-copy.png"
              alt="NVIDIA logo"
              className="h-4 md:h-5 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300"
            />
          </div> */}
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

      {/* Fade to black gradient - eased */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black pointer-events-none"
        style={{
          height: '40%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,1) 100%)',
        }}
      />
    </section>
  );
}
