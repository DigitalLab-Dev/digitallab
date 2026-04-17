'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, Calculator, DollarSign } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const ICONS = [Users, TrendingDown, AlertTriangle, Calculator, DollarSign];

export default function RestCartPain() {
  const { lang } = useLanguage();
  const t = translations.pain[lang];

  return (
    <section className="w-full px-5 sm:px-10 py-24 max-w-6xl mx-auto">
      <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/20 mb-4">
          <span className="text-xs text-red-400 font-semibold uppercase tracking-widest italic">{t.badge}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          {t.headline}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">{t.headlineHighlight}</span>{' '}
          {t.headlineSuffix}
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {t.points.map((point, index) => {
          const Icon = ICONS[index];
          return (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-red-900/30 bg-red-950/10 p-6 group hover:border-red-700/50 hover:bg-red-950/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Closing card – full width */}
        <motion.div
          className="sm:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative rounded-2xl border border-orange-900/30 bg-orange-950/10 p-8 text-center">
            <p className="text-xl font-bold text-white mb-2">{t.closingBold}</p>
            <p className="text-gray-400 font-medium">{t.closingRegular}</p>
            <div className="mt-5 inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-orange-500/20">
              <p className="text-orange-300 font-semibold text-sm italic">{t.tagline}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
