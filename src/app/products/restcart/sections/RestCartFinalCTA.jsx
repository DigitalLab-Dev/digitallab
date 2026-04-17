'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Lock, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function RestCartFinalCTA() {
  const { lang } = useLanguage();
  const t = translations.finalCta[lang];

  return (
    <section className="w-full px-5 sm:px-10 py-24 pb-36">
      <motion.div
        className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 via-black to-black border border-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.2),transparent_60%)]" />
        <div className="absolute top-8 left-12 w-3 h-3 rounded-full bg-red-500/40 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-12 right-16 w-2 h-2 rounded-full bg-orange-500/40 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />

        <div className="relative z-10 p-10 sm:p-16 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {t.headline1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t.headlineHighlight}</span>{' '}
            {t.headline2}
          </motion.h2>

          <motion.div
            className="space-y-2 text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p>{t.point1}</p>
            <p>{t.point2}</p>
            <p className="text-white font-medium">{t.point3}</p>
          </motion.div>

          <motion.div className="mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}>
            <p className="text-gray-400 text-sm mb-2">{t.subLabel}</p>
            <p className="text-gray-500 text-xs italic">{t.subNote}</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="https://calendly.com/syed-ali-turab/30min" target="_blank">
              <button className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-base hover:shadow-2xl hover:shadow-red-500/40 hover:gap-4 transition-all duration-300 active:scale-95">
                {t.cta1}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="https://calendly.com/syed-ali-turab/30min" target="_blank">
              <button className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-all duration-300 active:scale-95">
                <Phone className="w-5 h-5" />
                {t.cta2}
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center gap-2"><Lock className="w-4 h-4" /><span>{t.trust1}</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>{t.trust2}</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>{t.trust3}</span></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
