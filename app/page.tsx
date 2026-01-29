'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Sponsors from '@/components/sections/sponsors';
import Manifesto from '@/components/sections/manifesto';
import AwardCategories from '@/components/sections/award-categories';
import AwardPrizes from '@/components/sections/award-prizes';
import Jury from '@/components/sections/jury';
import CTA from '@/components/sections/cta';
import FAQs from '@/components/sections/faqs';
import Footer from '@/components/sections/footer';
import FAB from '@/components/fab';
import { SubmitEntryModal, ContactModal } from '@/components/modals';

export default function Home() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [showFAB, setShowFAB] = useState(false);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const newOpacity = Math.max(0, 1 - scrollY / (heroHeight * 0.6));
        setHeroOpacity(newOpacity);

        // Show FAB when hero is out of view
        setShowFAB(scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-black">
      <Header onSubmitClick={() => setSubmitModalOpen(true)} onContactClick={() => setContactModalOpen(true)} />
      <SubmitEntryModal isOpen={submitModalOpen} onClose={() => setSubmitModalOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <FAB isVisible={showFAB} onClick={() => setSubmitModalOpen(true)} />

      <div ref={heroRef}>
        <Hero opacity={heroOpacity} onSubmitClick={() => setSubmitModalOpen(true)} />
      </div>

      <Sponsors />
      <Manifesto />
      <AwardCategories />
      <AwardPrizes />
      <Jury />
      <CTA onSubmitClick={() => setSubmitModalOpen(true)} />
      <FAQs />
      <Footer />
    </main>
  );
}
