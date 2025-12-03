"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await fetch(`${backendUrl}/api/faq`);

        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }

        const data = await response.json();
        setFaqs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-neutral-500 text-lg">Loading FAQs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-red-500 text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
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
                animate={{ rotate: expandedItems.has(index) ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {expandedItems.has(index) ? (
                  <Minus className="w-5 h-5 text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </motion.div>
            </div>

            {/* Answer Section with Animation */}
            <AnimatePresence>
              {expandedItems.has(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-neutral-600 mt-5 border-neutral-600 rounded-xl">
                    <p className="text-neutral-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {faqs.length === 0 && !loading && (
        <div className="text-center text-neutral-500 text-lg">
          No FAQs available at the moment.
        </div>
      )}
    </div>
  );
};

export default FAQ;
