'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const BlogFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
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
  );
};

export default BlogFAQ;
