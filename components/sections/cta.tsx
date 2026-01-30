'use client';

import React from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

interface CTAProps {
  onSubmitClick: () => void;
}

export default function CTA({ onSubmitClick }: CTAProps) {
  const { ref, isVisible } = useInViewReveal({ threshold: 0.3 });

  return (
    <section ref={ref} className={`w-full py-16 md:py-24 px-4 md:px-8 bg-black border-t border-zinc-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 md:p-16 rounded-xl overflow-hidden">
          {/* Background gradient with Hungama brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(79,150,220,0.12)] via-[rgba(220,100,50,0.08)] to-black rounded-xl" />

          {/* Border with subtle brand accent */}
          <div className="absolute inset-0 border border-[rgba(79,150,220,0.25)] rounded-xl" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6 text-white">
              Ready to shape the future?
            </h2>
            <p className="text-sm md:text-base font-light text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Submit your work and join a fellowship of visionaries pushing the boundaries of creative excellence.
            </p>

            {/* Single primary action - with Hungama brand gradient */}
            <button
              onClick={onSubmitClick}
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(79,150,220,0.3)]"
              style={{
                background: 'linear-gradient(135deg, rgba(79, 150, 220, 0.9) 0%, rgba(220, 100, 50, 0.8) 100%)',
              }}
            >
              Start Your Application
            </button>

            <p className="text-xs md:text-sm text-zinc-500 mt-8 font-light">
              Submission deadline: March 31, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
