"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = ({ initialFaqs = [] }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  if (initialFaqs.length === 0) {
    return (
      <div className="text-center text-neutral-500 text-lg">
        No FAQs available at the moment.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {initialFaqs.map((faq, index) => {
          const isOpen = expandedItems.has(index);
          return (
            <motion.div
              key={faq._id || index}
              className="bg-neutral-700 p-6 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Question Header */}
              <div
                className="flex items-center justify-between  cursor-pointer  transition-colors duration-200"
                onClick={() => toggleExpanded(index)}
              >
                <h6 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h6>

                <motion.div
                  className="bg-orange-500 p-2 rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </motion.div>
              </div>

              {/* Answer Section — always present in the DOM (for SEO/crawlers);
                  only its height/opacity is animated client-side. */}
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-neutral-600 mt-5 border-neutral-600 rounded-xl">
                  <p className="text-neutral-100 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
