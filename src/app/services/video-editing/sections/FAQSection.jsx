'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do you hire a video editor?',
    answer:
      'Hiring a video editor comes down to reviewing real examples of past work relevant to your project type and confirming how revisions are handled before starting. Digital Lab reviews relevant past work with every client and agrees on scope before any project begins.',
  },
  {
    question: 'How does outsourcing video editing work?',
    answer:
      'Outsourcing video editing means sending raw footage to an external team who handles cuts, transitions, effects, and final delivery. Digital Lab works this way with clients on an ongoing or per-project basis, with check-ins throughout so the final result matches the intended direction.',
  },
  {
    question: 'Where can you hire a video editor?',
    answer:
      "Freelance marketplaces offer video editors at inconsistent quality and reliability, since you're often working with a different person each time. Digital Lab provides a dedicated team so the same people stay familiar with your brand and footage across projects.",
  },
  {
    question: 'What should you look for in a video editor?',
    answer:
      'Look for a portfolio with real, relevant examples, clarity on how many revision rounds are included, and a clear process for how feedback gets incorporated. Digital Lab agrees on these details with every client before work begins, not after.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
      aria-labelledby="video-editing-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2
            id="video-editing-faq-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about hiring a video editing team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-white font-semibold text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    className="bg-orange-500 p-2 rounded-full flex-shrink-0"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </motion.span>
                </button>

                {/* Answer is always present in the rendered HTML (for SEO/crawlers) —
                    only its visual height/opacity is animated client-side. */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
