'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is social media management?',
    answer:
      "Social media management is the daily work of planning, creating, and publishing content across your brand's social accounts. It also includes talking with your audience and tracking performance data to build a long-term platform strategy.",
  },
  {
    question: 'How do you choose a social media management agency?',
    answer:
      'Look at real examples of content and results they have delivered for brands like yours. Never sign a contract without seeing a clear strategy first. Digital Lab walks you through relevant past work before you commit.',
  },
  {
    question: 'Is it better to hire a freelancer or an agency for social media?',
    answer:
      'Freelancers can handle a single, simple account. An agency like Digital Lab gives you a full team that covers content creation, strategy, and community growth together across all your channels.',
  },
  {
    question: 'How do you outsource social media management?',
    answer:
      "Start by sharing your business goals, brand voice, and target audience clearly. Then, review the agency's past work before sharing account access. We use regular check-ins and clean dashboards so you are never left guessing.",
  },
  {
    question: 'How much does social media management cost?',
    answer:
      'Costs depend on how many platforms you use, how much content you need, and if you want active community management. We give you a clear, fixed quote based on your exact needs before any work begins.',
  },
  {
    question: 'Do you offer white-label social media management for other agencies?',
    answer:
      "Yes. We run accounts under your agency's name and brand. We handle the daily strategy, writing, and reporting behind the scenes so you can scale your services without hiring a new internal team.",
  },
  {
    question: 'Which social platforms do you manage?',
    answer:
      'We manage Instagram, TikTok, LinkedIn, Facebook, and YouTube. We build a custom mix based on where your exact buyers hang out, rather than blasting the same copy everywhere.',
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
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="social-media-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2
            id="social-media-faq-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about hiring a social media management team.
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
                  <p className="px-6 pb-6 text-gray-300 leading-relaxed">
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
