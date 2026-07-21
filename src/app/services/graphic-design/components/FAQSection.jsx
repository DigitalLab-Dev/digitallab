'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Why hire a graphic designer instead of doing it yourself?',
    answer:
      'DIY tools work for quick, one-off graphics, but a professional designer builds a visual identity that stays consistent across your website, social media, and marketing materials. Digital Lab designs with that consistency in mind from the first project, not as an afterthought.',
  },
  {
    question: 'How do you choose a graphic design agency?',
    answer:
      'Choosing a graphic design agency comes down to reviewing real portfolio work relevant to your industry and understanding their process before committing. Digital Lab walks every client through relevant past work and a clear process before any project begins.',
  },
  {
    question: 'Is it better to hire a freelance graphic designer or an agency?',
    answer:
      'Freelancers can work well for a single small project, but an agency like Digital Lab gives you a full team, more consistent availability, and the ability to add related services like web development or branding without switching providers later.',
  },
  {
    question: 'Where do you find a graphic designer to hire?',
    answer:
      'Finding the right graphic designer means comparing real portfolios and past results, not just browsing freelance marketplaces with inconsistent quality. Digital Lab gives you direct access to the actual team working on your project from the first conversation.',
  },
  {
    question: "Do you own the rights to your design after it's completed?",
    answer:
      "Yes. Digital Lab transfers full ownership of the final design, including editable source files, once the project is complete and paid for, so you're never locked into needing us for basic future use of your own brand assets.",
  },
  {
    question: 'Do you offer packaging design?',
    answer:
      'Yes. We design packaging that works in the real world. We handle everything from the first idea to the print-ready files.',
  },
  {
    question: 'How much does professional graphic design cost?',
    answer:
      'Costs depend on what you need. A single logo costs less than a full brand system with multiple applications. Digital Lab always gives you a clear, fixed quote based on your needs before any work begins.',
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
      aria-labelledby="graphic-design-faq-heading"
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
            id="graphic-design-faq-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about hiring a graphic design team.
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
