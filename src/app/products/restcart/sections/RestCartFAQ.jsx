'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

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
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left group">
        <span className="font-semibold text-white text-sm sm:text-base leading-snug pr-4 italic">{faq.question}</span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-red-500/20 border-red-500/30 rotate-180' : 'group-hover:border-white/20'}`}>
          <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-red-400' : 'text-gray-500'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
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
  const { lang } = useLanguage();
  const t = translations.faq[lang];

  return (
    <section className="w-full px-5 sm:px-10 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs text-red-400 font-semibold uppercase tracking-widest">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            {t.headline1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t.headlineHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>
        <div className="space-y-3">
          {t.items.map((faq, index) => (
            <FAQItem key={`${lang}-${index}`} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
