'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is PPC and ads management?',
    answer:
      'PPC (pay-per-click) advertising is a model where you pay each time someone clicks your ad, running on platforms like Google, Meta, and TikTok. Ads management is the ongoing work of building, running, and optimizing those campaigns, from targeting and budget decisions to creative testing and performance tracking, so your ad spend actually turns into revenue.',
  },
  {
    question: 'How do you choose an ads management agency?',
    answer:
      'Look at real campaign results across accounts similar to yours, not just basic badges or certifications. Digital Lab shares real performance data from comparable campaigns before you sign any contract.',
  },
  {
    question: 'Is it better to hire a freelancer or an agency for PPC management?',
    answer:
      'Freelancers can work well for a single, simple campaign. An agency like Digital Lab gives you a full team covering multiple platforms, consistent daily support, and the ability to scale up easily as your budget grows.',
  },
  {
    question: 'How do you outsource PPC management?',
    answer:
      'Start by defining your goals, budget, and target audience clearly. Then, review the agency\'s real campaign history before handing over account access. Digital Lab uses regular reporting and check-ins so you are always in the loop.',
  },
  {
    question: 'How much does PPC management cost?',
    answer:
      'Costs depend on your total ad spend, how many platforms you use, and how complex your funnel setup needs to be. Digital Lab provides a clear, specific quote based on your exact goals before work begins.',
  },
  {
    question: 'Do you offer white-label PPC management for other agencies?',
    answer:
      "Yes. We manage campaigns under your agency's own name and brand. We handle the strategy, execution, and reporting behind the scenes so you can offer paid ads to your clients without hiring an in-house team.",
  },
  {
    question: 'Which ad platform is right for my business?',
    answer:
      'It depends on where your customers are. Google Ads is best for capturing people who are already actively searching to buy. Meta and TikTok are great for reaching people earlier in the decision cycle. LinkedIn Ads work best for reaching B2B decision-makers directly. We help you find the perfect mix.',
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

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.faq-answer'],
  },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="ads-management-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2
            id="ads-management-faq-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about hiring an ads management team.
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
                  <p className="faq-answer px-6 pb-6 text-gray-300 leading-relaxed">
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
