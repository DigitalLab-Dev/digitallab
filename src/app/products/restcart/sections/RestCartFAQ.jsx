'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '"But will my customers be okay with no waiters?"',
    answer:
      'Absolutely. Studies show 73% of diners prefer ordering at their own pace without waiting for staff. Tablet and QR ordering means faster orders, fewer errors, and happier customers.',
  },
  {
    question: '"Is it hard to set up?"',
    answer:
      'Not at all. Our onboarding team walks you through everything. Most restaurants are fully live within 24 hours.',
  },
  {
    question: '"What if I have a large menu with many variations?"',
    answer:
      'No problem. Our system handles unlimited menu items, categories, add-ons, and variations — with photos, descriptions, and pricing in multiple languages.',
  },
  {
    question: '"What about internet issues?"',
    answer:
      'RestCart is built with offline resilience. Core functions continue working even during connectivity drops — so your restaurant never stops.',
  },
  {
    question: '"Do I need technical knowledge to use it?"',
    answer:
      "Not at all. RestCart is designed for restaurant owners, not tech experts. If you can use a smartphone, you can run RestCart. Our interface is intuitive and we provide full training.",
  },
  {
    question: '"Can I manage multiple restaurant locations?"',
    answer:
      'Yes. RestCart supports multi-branch management from a single dashboard. Perfect for restaurant chains looking to standardize operations across all locations.',
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/20 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className="font-semibold text-white text-sm sm:text-base leading-snug pr-4 italic">
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-red-500/20 border-red-500/30 rotate-180' : 'group-hover:border-white/20'}`}>
          <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-red-400' : 'text-gray-500'}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/5">
              <p className="text-gray-400 leading-relaxed text-sm mt-4">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function RestCartFAQ() {
  return (
    <section className="w-full px-5 sm:px-10 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs text-red-400 font-semibold uppercase tracking-widest">Objections</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            We've Heard Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Question.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No commitment needed. Just honest answers.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
