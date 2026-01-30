'use client';

import React, { useState } from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

export default function FAQs() {
  const { ref, isVisible } = useInViewReveal({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'General Festival Information',
      items: [
        {
          question: 'What is the Hungama AI Film Festival?',
          answer: 'Hungama AI Film Festival is a global platform celebrating AI-developed films and AI-native storytelling. The festival aims to discover creators and connect them with industry leaders, platforms, and paid opportunities.',
        },
        {
          question: 'Where and how is the festival conducted?',
          answer: 'The final showcase of the Hungama AI Film Festival will be held as a physical event in Mumbai.',
        },
      ],
    },
    {
      category: 'Eligibility & Participation',
      items: [
        {
          question: 'Who can submit a film to the festival?',
          answer: 'Individual creators, studios, students, and creative collectives from anywhere in the world are eligible to submit.',
        },
        {
          question: 'Can students and first-time filmmakers participate?',
          answer: 'Yes. Students and first-time filmmakers are explicitly encouraged to participate.',
        },
        {
          question: 'Is prior filmmaking experience required?',
          answer: 'No. There is no requirement for prior professional filmmaking experience.',
        },
        {
          question: 'Are there any geographic restrictions?',
          answer: 'No. Submissions are open globally.',
        },
        {
          question: 'Is there an age limit for participation?',
          answer: 'A minimum age applies as per the official submission terms. Minors may be required to submit guardian consent.',
        },
        {
          question: 'Can teams submit films, or only individuals?',
          answer: 'Both individuals and teams (studios or collectives) may submit films.',
        },
        {
          question: 'How many films can one individual or team submit?',
          answer: 'Multiple submissions are allowed, provided each entry meets the relevant category specifications.',
        },
      ],
    },
    {
      category: 'AI Usage & Disclosure',
      items: [
        {
          question: 'Does the film need to be fully created using AI tools?',
          answer: 'No. Films must be substantially AI-developed, but human creative contribution is expected.',
        },
        {
          question: 'How should AI be incorporated into the film?',
          answer: 'Creators must disclose the AI tools used, approximate percentage of AI involvement, and human creative contribution.',
        },
        {
          question: 'Which AI tools or platforms are allowed?',
          answer: 'Any legally used AI tools or platforms are permitted, provided they are disclosed.',
        },
        {
          question: 'Is it mandatory to use a specific AI software?',
          answer: 'No. There are no restrictions on the choice of AI tools.',
        },
      ],
    },
    {
      category: 'Film Formats & Content Guidelines',
      items: [
        {
          question: 'What types of films are accepted?',
          answer: 'Narrative films, experimental films, documentaries, music videos, branded films, micro dramas, art films, animated films, fully AI-generated films, and hybrid formats are accepted.',
        },
        {
          question: 'Are live-action films with AI elements allowed?',
          answer: 'Yes, provided AI plays a substantial creative role in the film.',
        },
        {
          question: 'What is the minimum and maximum duration of a film?',
          answer: 'Duration varies by category, typically ranging from 30 seconds to 20 minutes.',
        },
        {
          question: 'Are trailers or teasers accepted?',
          answer: 'No. Only complete films are accepted. Episodic content may submit a pilot episode.',
        },
        {
          question: 'Can I submit a film screened elsewhere?',
          answer: 'Yes, unless restricted by prior distribution or licensing agreements.',
        },
        {
          question: 'What language should the film be in?',
          answer: 'Films may be in any language. English subtitles are mandatory for non-English films.',
        },
      ],
    },
    {
      category: 'Submission Process',
      items: [
        {
          question: 'How do I submit my film?',
          answer: 'Creators must register on the official website, upload their film or screener link, complete disclosure forms, and accept the festival terms.',
        },
        // {
        //   question: 'Is there a submission fee?',
        //   answer: 'Submission fee details will be announced on the official festival website.',
        // },
        {
          question: 'Can I edit or replace my film after submission?',
          answer: 'Once submitted, films generally cannot be replaced unless explicitly permitted.',
        },
        {
          question: 'How will I know my submission was received?',
          answer: 'You will receive a submission confirmation with a unique Creator ID.',
        },
      ],
    },
    {
      category: 'Awards, Judging & Recognition',
      items: [
        {
          question: 'What are the award categories?',
          answer: 'Awards include Best AI Film, Best AI Micro Drama, Best AI Music Video, Best AI Visual Innovation, and Jury Special Mention.',
        },
        {
          question: 'How are films evaluated?',
          answer: 'Films are judged on storytelling, originality, creative use of AI, emotional engagement, and future potential.',
        },
        {
          question: 'Who will judge the films?',
          answer: 'A jury of industry professionals, AI creators, and international experts.',
        },
        {
          question: 'What do winners receive?',
          answer: 'Winners may receive paid development contracts, mentorship, platform access, certificates, and trophies.',
        },
      ],
    },
    {
      category: 'Screening, Rights & Promotion',
      items: [
        {
          question: 'Will all submitted films be screened?',
          answer: 'Only shortlisted and selected films will be publicly screened.',
        },
        {
          question: 'Who owns the copyright?',
          answer: 'Creators retain full ownership of their films.',
        },
        {
          question: 'Who is responsible for copyright clearance?',
          answer: 'The submitting creator is fully responsible for all rights and licenses.',
        },
        {
          question: 'Will Hungama promote selected films?',
          answer: 'Yes. Selected films may be promoted across social and partner platforms.',
        },
        {
          question: 'Can Hungama AI use clips or stills?',
          answer: 'Yes. Submission implies consent for promotional usage.',
        },
        {
          question: 'What happens if guidelines are violated?',
          answer: 'Such films may be disqualified at any stage.',
        },
      ],
    },
    {
      category: 'Terms, Guidelines & Support',
      items: [
        {
          question: 'What are the terms and conditions?',
          answer: 'Participants must accept the festival\'s rights, ethics, and AI disclosure charter.',
        },
        {
          question: 'Where can I find official guidelines?',
          answer: 'All official guidelines and updates will be published on the festival website.',
        },
        {
          question: 'Who can I contact for support?',
          answer: 'For all queries, write to awards@hungama.com.',
        },
      ],
    },
  ];

  return (
    <section ref={ref} id="faqs" className={`w-full py-16 md:py-24 px-4 md:px-8 bg-black transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light leading-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-400">
            Everything you need to know about the AIF 2026 Awards
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqCategories.map((categoryGroup, index) => (
            <div
              key={index}
              className="group border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-700"
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
                  {categoryGroup.category}
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
                  <div className="space-y-6">
                    {categoryGroup.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={itemIndex > 0 ? 'pt-6 border-t border-zinc-800/50' : ''}>
                        <h4 className="text-sm md:text-base font-light text-white mb-3">
                          {item.question}
                        </h4>
                        <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 card-dark rounded-lg text-center">
          <p className="text-sm md:text-base font-light text-zinc-300 mb-4">
            Can't find the answer you're looking for?
          </p>
          <a href="mailto:awards@hungama.com" className="text-sm md:text-base font-light text-blue-400 hover:text-blue-300 transition-colors">
            awards@hungama.com
          </a>
        </div>
      </div>
    </section>
  );
}
