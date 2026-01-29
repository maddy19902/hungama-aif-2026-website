'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onSubmitClick: () => void;
  onContactClick: () => void;
}

export default function Header({ onSubmitClick, onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 md:h-20 flex items-center justify-between px-4 md:px-8 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900/50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Left: AIF 2026 Text */}
      <div className="text-xs md:text-sm font-light tracking-widest text-white">
        AIF 2026
      </div>

      {/* Desktop Navigation - Center */}
      <div className="hidden md:flex gap-8 text-sm font-light text-zinc-400">
        <a href="#manifesto" className="hover:text-white transition-colors">
          MANIFESTO
        </a>
        <a href="#categories" className="hover:text-white transition-colors">
          CATEGORIES
        </a>
        <a href="#council" className="hover:text-white transition-colors">
          COUNCIL
        </a>
      </div>

      {/* Desktop CTA Buttons - Right */}
      <div className="hidden md:flex gap-4">
        <button
          onClick={onSubmitClick}
          className="px-4 py-2 text-sm font-light text-white hover:text-zinc-300 transition-colors"
        >
          Submit Entry
        </button>
        <button
          onClick={onContactClick}
          className="px-4 py-2 text-sm font-semibold bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Contact
        </button>
      </div>

      {/* Right: Hungama Logo (visible on all screens) */}
      <div className="flex items-center gap-4">
        {/* Hungama Logo - Using brand colors */}
        <img
          src="/images/hungama-logo.png"
          alt="Hungama"
          className="h-6 md:h-8 w-auto"
        />

        {/* Mobile Hamburger Menu - Right */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-zinc-900/50 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-zinc-900 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#manifesto"
              className="text-sm font-light text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              MANIFESTO
            </a>
            <a
              href="#categories"
              className="text-sm font-light text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CATEGORIES
            </a>
            <a
              href="#council"
              className="text-sm font-light text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              COUNCIL
            </a>
            <div className="border-t border-zinc-900 pt-4 space-y-2">
              <button
                onClick={() => {
                  onSubmitClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-light text-white hover:text-zinc-300 transition-colors text-left"
              >
                Submit Entry
              </button>
              <button
                onClick={() => {
                  onContactClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-semibold bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
