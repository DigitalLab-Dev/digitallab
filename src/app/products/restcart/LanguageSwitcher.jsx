'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const isES = lang === 'es';

  return (
    <motion.div
      className="fixed bottom-24 right-5 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
    >
      {/* Pill container */}
      <div
        className="flex items-center gap-0 rounded-full border border-white/15 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden p-1"
        role="group"
        aria-label="Language selector"
      >
        {/* EN button */}
        <button
          onClick={() => setLang('en')}
          aria-pressed={!isES}
          className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
            !isES
              ? 'bg-white text-black shadow-md'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="text-sm leading-none" aria-hidden>🇬🇧</span>
          <span className="tracking-wide">EN</span>
        </button>

        {/* ES button */}
        <button
          onClick={() => setLang('es')}
          aria-pressed={isES}
          className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
            isES
              ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-orange-600/30'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="text-sm leading-none" aria-hidden>🇪🇸</span>
          <span className="tracking-wide">ES</span>
        </button>
      </div>

      {/* Animated label that appears briefly on first load */}
      <AnimatePresence>
        {isES && (
          <motion.div
            key="es-tip"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap"
          >
            <span className="text-[10px] text-orange-400 font-semibold bg-black/70 backdrop-blur px-2.5 py-1.5 rounded-full border border-orange-500/20">
              🇪🇸 Versión en Español
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
