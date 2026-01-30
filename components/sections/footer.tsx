'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm md:text-base font-light tracking-widest text-white uppercase mb-6">
              Hungama AI Film Festival
            </h3>
            <p className="text-xs md:text-sm font-light text-zinc-400">
              Celebrating the Future of Storytelling
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-light tracking-widest text-zinc-500 uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#categories" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#council" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  Council
                </a>
              </li>
              <li>
                <a href="#manifesto" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-light tracking-widest text-zinc-500 uppercase mb-4">
              Follow
            </p>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/share/1EFcmfd9ih/" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/company/hungama-digital-media-entertainment-pvt-ltd-/" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  YouTube
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-light tracking-widest text-zinc-500 uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@aif2026.com" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  awards@hungama.com
                </a>
              </li>
              {/* <li>
                <a href="tel:+1234567890" className="text-xs md:text-sm font-light text-zinc-400 hover:text-white transition-colors">
                  +1 (555) Awards
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs md:text-sm font-light text-zinc-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
          <p>© 2026 AI Film Festival by Hungama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
