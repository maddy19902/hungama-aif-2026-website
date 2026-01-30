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

    // Add smooth scroll behavior
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [lastScrollY]);

  // Close mobile menu on outside click or scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll is handled by document.documentElement.style.scrollBehavior
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 md:h-14 flex items-center justify-between px-4 md:px-8 z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        background: 'rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Left: Hungama Logo Image */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMobileMenuOpen(false);
        }}
        className="flex-shrink-0"
      >
        <img
          src="/images/hungama-logo.png"
          alt="Hungama"
          className="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity"
        />
      </a>

      {/* Desktop Navigation - Right aligned */}
      <div className="hidden md:flex gap-8 text-sm font-light text-zinc-300 ml-auto">
        <a
          href="#categories"
          className="hover:text-white transition-colors duration-200"
        >
          Categories
        </a>
        <a
          href="#council"
          className="hover:text-white transition-colors duration-200"
        >
          Council
        </a>
        <a
          href="#faqs"
          className="hover:text-white transition-colors duration-200"
        >
          FAQs
        </a>
        <a
          href="#contact"
          className="hover:text-white transition-colors duration-200"
          onClick={(e) => {
            e.preventDefault();
            onContactClick();
          }}
        >
          Contact
        </a>
      </div>

      {/* Right: Mobile Hamburger */}
      <div className="flex items-center gap-4">

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Glassmorphic overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 md:hidden z-40 backdrop-blur-sm"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-black/70 backdrop-blur-md border-b border-white/10 p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="#manifesto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#manifesto');
                const element = document.querySelector('#manifesto');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block text-sm font-light text-zinc-300 hover:text-white transition-colors duration-200 py-2"
            >
              Manifesto
            </a>
            <a
              href="#categories"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#categories');
                const element = document.querySelector('#categories');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block text-sm font-light text-zinc-300 hover:text-white transition-colors duration-200 py-2"
            >
              Categories
            </a>
            <a
              href="#council"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#council');
                const element = document.querySelector('#council');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block text-sm font-light text-zinc-300 hover:text-white transition-colors duration-200 py-2"
            >
              Council
            </a>
            <a
              href="#faqs"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#faqs');
                const element = document.querySelector('#faqs');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block text-sm font-light text-zinc-300 hover:text-white transition-colors duration-200 py-2"
            >
              FAQs
            </a>
            <div className="border-t border-white/10 pt-4 space-y-2">
              <button
                onClick={() => {
                  onSubmitClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-semibold bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Submit Entry
              </button>
              <button
                onClick={() => {
                  onContactClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-semibold bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
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
