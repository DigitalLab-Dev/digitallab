'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What does a digital marketing agency do for small businesses?',
    answer:
      'For small businesses, Digital Lab manages SEO, paid advertising, social media, content, and web development under one team, so owners get consistent execution across channels instead of coordinating multiple freelancers or building an in-house department from scratch.',
  },
  {
    question: 'How do you choose a digital marketing agency?',
    answer:
      'Choosing the right agency comes down to verifiable results, not promises. Digital Lab has delivered 500+ projects for 100+ clients, and we walk every prospective client through real case studies and transparent pricing before any contract is signed.',
  },
  {
    question: 'Why hire a digital marketing agency instead of doing it in-house?',
    answer:
      'Hiring an agency like Digital Lab gives you a full team of SEO, ad, design, and development specialists for less than the cost of hiring even one or two in-house marketers, backed by experience gained across 100+ client accounts.',
  },
  {
    question: 'What services do digital marketing agencies offer?',
    answer:
      'Digital Lab offers SEO, Google and Facebook ads management, social media management, copywriting, web development, and graphic design, plus in-house software products like RestCart for businesses that need more than marketing alone.',
  },
  {
    question: 'How do you find the right digital marketing agency?',
    answer:
      'The right agency fits your specific goals, not just your budget. Digital Lab works across web development, marketing, and custom software, making it a fit for businesses that want one accountable partner instead of juggling separate vendors.',
  },
  {
    question: 'How do you evaluate a digital marketing agency before signing a contract?',
    answer:
      "Evaluate an agency on what they've actually delivered, not what they promise. Ask to see real case studies, confirm exactly who will work on your account, and get clear terms on reporting, ownership of assets, and contract length before signing.",
  },
  {
    question: 'Are digital marketing agencies worth the cost?',
    answer:
      "A good agency pays for itself through results you couldn't get alone or affordably in-house. Digital Lab has delivered 500+ projects for 100+ clients, combining marketing execution with technical capabilities most agencies outsource.",
  },
  {
    question: 'How much do digital marketing agencies charge?',
    answer:
      'Pricing depends on scope: single-service work like copywriting or ads management costs less than full-service packages covering SEO, social, web development, and design together. Contact Digital Lab for a quote based on your specific goals.',
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
      aria-labelledby="home-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Modern gradient background, matching other homepage sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2
            id="home-faq-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with a digital marketing agency.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
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
