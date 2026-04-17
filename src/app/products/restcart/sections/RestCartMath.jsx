'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function RestCartMath() {
  const { lang } = useLanguage();
  const t = translations.math[lang];

  return (
    <section className="w-full px-5 sm:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 mb-4">
            <TrendingDown className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs text-orange-400 font-semibold uppercase tracking-widest italic">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            {t.headline1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t.headlineHighlight}</span>{' '}
            {t.headline2}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Cost table – left */}
          <motion.div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-6">{t.tableTitle}</h3>
              <div className="space-y-4">
                {t.staffRoles.map((role, index) => (
                  <motion.div
                    key={role}
                    className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-red-400">{index + 1}</span>
                      </div>
                      <span className="text-gray-300 font-medium">{role}</span>
                    </div>
                    <span className="text-white font-bold text-lg">{t.staffCosts[index]}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div className="mt-6 p-5 rounded-2xl bg-red-950/30 border border-red-900/40" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-lg">{t.total}</span>
                  <span className="font-black text-red-400 text-3xl">{t.totalAmount}</span>
                </div>
                <p className="text-red-400/60 text-xs mt-2">{t.totalNote}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – ROI + bridge */}
          <motion.div className="space-y-5" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="rounded-3xl border border-green-500/20 bg-green-950/10 p-8 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-3">{t.savingsTitle}</p>
              <div className="text-7xl font-black text-green-400 tracking-tighter leading-none mb-3">{t.savingsAmount}</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.savingsDesc}{' '}
                <span className="text-white font-semibold">{t.savingsHighlight}</span>{' '}
                {t.savingsSuffix}
              </p>
              <div className="mt-7 space-y-3 text-left">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>{t.barStaffLabel}</span>
                  <span className="text-red-400 font-bold">{t.totalAmount}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-red-500/70 rounded-full w-full" />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1 mt-3">
                  <span>{t.barRestCartLabel}</span>
                  <span className="text-green-400 font-bold">{t.barRestCartValue}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full w-[5%]" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-orange-500/20 bg-orange-950/10 p-7 text-center">
              <p className="text-white font-bold text-lg mb-2">{t.quoteMain}</p>
              <p className="text-orange-300 font-bold text-lg mb-6">{t.quoteSub}</p>
              <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-orange-500/30 hover:gap-3 transition-all duration-300">
                {t.quoteCTA}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
