'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do you choose a web development company?',
    answer:
      "Choosing a web development company comes down to reviewing real, live examples of past work, confirming they've built sites similar to what you need, and getting a clear scope and timeline before starting. Digital Lab has delivered 500+ web development projects and shares relevant examples before any contract is signed.",
  },
  {
    question: 'What should you look for when hiring a web developer?',
    answer:
      'Look for a developer with a portfolio of live, working sites, clear communication about timelines, and transparency about what happens after launch. Digital Lab includes post-launch support and maintenance as part of every web development engagement, not as a hidden extra.',
  },
  {
    question: 'Why hire a web developer instead of building it yourself?',
    answer:
      'DIY website builders work for simple sites, but custom functionality, e-commerce, or integrations with other business systems usually need a developer. Digital Lab builds custom sites and web applications that go beyond what template builders can support.',
  },
  {
    question: 'How do you outsource web development?',
    answer:
      'Outsourcing web development starts with defining your scope and budget, then vetting agencies on portfolio and communication style, and agreeing on milestones before work begins. Digital Lab works this way with every client, with regular check-ins throughout the build rather than a single handoff at the end.',
  },
  {
    question: 'How much does it cost to hire a web developer?',
    answer:
      'Web development costs vary widely based on complexity, from a few thousand dollars for a simple business site to significantly more for custom web applications or e-commerce platforms. Digital Lab provides a clear quote based on your specific scope before any work begins.',
  },
  {
    question: 'How much does website maintenance cost after launch?',
    answer:
      'Website maintenance typically involves ongoing costs for updates, security, and hosting, and is often overlooked when budgeting for a new site. Digital Lab includes maintenance options as part of its web development packages so there are no surprises after launch.',
  },
  {
    question: 'Do you own your website after it launches?',
    answer:
      'Yes. With Digital Lab, you own all custom code, design files, content, and the domain once the project is complete, with no hidden lock-in that requires ongoing payments just to keep control of your own site.',
  },
  {
    question: 'Who will actually work on my project?',
    answer:
      "Digital Lab gives you direct access to the actual team working on your build, not just senior staff during sales calls followed by a handoff to unnamed juniors. You'll know who's building your site from the first conversation.",
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
      aria-labelledby="web-dev-faq-heading"
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
            id="web-dev-faq-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about hiring a web development team.
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
