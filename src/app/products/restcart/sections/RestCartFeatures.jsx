'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  QrCode, ShoppingCart, CreditCard, Monitor,
  Package, Trash2, FileText, BarChart3, Globe, Tablet,
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const ICONS = [QrCode, ShoppingCart, CreditCard, Monitor, Package, Trash2, FileText, BarChart3, Globe, Tablet];
const IMAGES = [
  '/images/restcart-qr-menu.webp',
  '/images/restcart-orders.webp',
  '/images/restcart-payments.webp',
  '/images/restcart-pos.webp',
  '/images/restcart-inventory.webp',
  '/images/restcart-waste.webp',
  '/images/restcart-tax.webp',
  '/images/restcart-kpi.webp',
  '/images/restcart-languages.webp',
  '/images/restcart-pos.webp',
];

export default function RestCartFeatures() {
  const { lang } = useLanguage();
  const t = translations.features[lang];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = t.items[activeIndex];

  return (
    <section className="w-full px-5 sm:px-10 py-24" id="features">
      {/* Header */}
      <motion.div className="max-w-3xl mx-auto text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/20 mb-4">
          <span className="text-xs text-red-400 font-semibold uppercase tracking-widest">{t.badge}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          {t.headline1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t.headlineHighlight}</span>{' '}
          {t.headline2}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">{t.subtitle}</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Feature list – left */}
          <div className="lg:col-span-2 space-y-2">
            {t.items.map((feature, index) => {
              const Icon = ICONS[index];
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${isActive
                    ? 'border-red-500/50 bg-red-950/30 shadow-lg shadow-red-900/20'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-red-500/30 border border-red-500/40' : 'bg-white/5 border border-white/10'}`}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-red-400' : 'text-gray-500'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>{feature.title}</div>
                    <div className="text-xs text-gray-600 mt-0.5 truncate">{feature.short}</div>
                  </div>
                  {isActive && (
                    <span className="text-xs font-bold text-red-400 bg-red-500/15 px-2 py-1 rounded-full border border-red-500/20 flex-shrink-0">{feature.highlight}</span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Feature detail – right */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id + lang}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <Image src={IMAGES[activeIndex]} alt={activeFeature.title} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-red-500/30 rounded-xl px-3 py-1.5">
                    <span className="text-xs font-bold text-red-400">{activeFeature.highlight}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {React.createElement(ICONS[activeIndex], { className: 'w-6 h-6 text-red-400' })}
                    <h3 className="text-2xl font-bold text-white">{activeFeature.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-base">{activeFeature.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
