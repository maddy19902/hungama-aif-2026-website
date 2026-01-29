'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function FAQs() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who is eligible to submit?',
      answer:
        'Any creative professional aged 18+ from around the world can submit their work. This includes directors, cinematographers, sound designers, screenwriters, VFX artists, and innovators in AI-driven creative fields.',
    },
    {
      question: 'What is the submission fee?',
      answer:
        'Standard submission fee is $25 USD per entry. Early bird submissions (before February 15) receive a 20% discount. Students and emerging filmmakers get special rates.',
    },
    {
      question: 'How are winners selected?',
      answer:
        'Submissions are evaluated by our council of industry experts across multiple rounds. Judging criteria include technical excellence, innovation, originality, and impact.',
    },
    {
      question: 'When will winners be announced?',
      answer:
        'Winners will be announced on May 15, 2026 during our grand ceremony. Early notifications go out to shortlisted candidates.',
    },
    {
      question: 'Can I submit multiple entries?',
      answer:
        'Yes, you can submit up to 5 entries across different categories. Each submission counts separately and is evaluated independently.',
    },
    {
      question: 'What happens after I win?',
      answer:
        'Winners receive cash prizes, global promotion, mentorship opportunities, and featured placement in our international exhibitions and digital platforms.',
    },
  ];

  return (
    <section ref={ref} className="w-full py-16 md:py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-400">
            Everything you need to know about the AIF 2026 Awards
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${Math.min(index * 50, 400)}ms` : '0ms' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full p-6 md:p-8 flex items-center justify-between text-left transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-zinc-900/50 border-l-2 border-[rgba(79,150,220,0.4)]'
                    : 'hover:bg-zinc-900/30'
                }`}
              >
                <h3 className="text-base md:text-lg font-light text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              </button>

              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[rgba(79,150,220,0.2)] bg-gradient-to-b from-[rgba(79,150,220,0.03)] to-transparent">
                  <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 card-dark rounded-lg text-center">
          <p className="text-sm md:text-base font-light text-zinc-300 mb-4">
            Can't find the answer you're looking for?
          </p>
          <button className="text-sm md:text-base font-light text-blue-400 hover:text-blue-300 transition-colors">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
}
