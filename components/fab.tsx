'use client';

import React from 'react';

interface FABProps {
  isVisible: boolean;
  onClick: () => void;
}

export default function FAB({ isVisible, onClick }: FABProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-40 px-6 py-3 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(79, 150, 220, 0.95) 0%, rgba(220, 100, 50, 0.85) 100%)',
        boxShadow: isVisible ? '0 20px 40px rgba(79, 150, 220, 0.25)' : 'none',
      }}
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
  );
}
