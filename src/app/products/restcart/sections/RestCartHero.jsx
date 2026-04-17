'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function RestCartHero() {
  const { lang } = useLanguage();
  const t = translations.hero[lang];

  return (
    <section className="w-full relative min-h-screen flex flex-col justify-center items-center px-5 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left – text */}
        <div>
          {/* Breadcrumb */}
          <motion.div className="flex items-center gap-2 mb-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/products" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">{t.breadcrumb}</Link>
            <span className="text-gray-700">/</span>
            <span className="text-red-400 text-sm font-medium">RestCart</span>
          </motion.div>

          {/* Badge */}
          <motion.div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/30 mb-6" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-400 font-semibold uppercase tracking-widest">{t.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            {t.headline1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t.headline2}</span>{' '}
            {t.headline3}
          </motion.h1>

          {/* Subheadline */}
          <motion.p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            {t.subheadline}{' '}
            <span className="text-white font-semibold">{t.subheadlineHighlight}</span>
            {t.subheadlineSuffix}
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
            <Link href="https://calendly.com/syed-ali-turab/30min" target="_blank">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm hover:shadow-xl hover:shadow-red-500/30 hover:gap-3 transition-all duration-300 active:scale-95">
                {t.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="https://restcart.app" target="_blank">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:border-white/30 hover:bg-white/5 transition-all duration-300 active:scale-95">
                <Play className="w-4 h-4 fill-current" />
                {t.ctaSecondary}
              </button>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div className="flex flex-wrap items-center gap-6 text-sm text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
            <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-green-500" /><span>{t.trust1}</span></div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /><span>{t.trust2}</span></div>
          </motion.div>
        </div>

        {/* Right – image */}
        <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.9 }}>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <Image src="/images/restcart-hero.png" alt="RestCart Restaurant System" width={700} height={500} className="w-full object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <motion.div className="absolute -bottom-5 -left-5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
            <div className="text-2xl font-black text-green-400">{t.stat1Value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{t.stat1Label}</div>
          </motion.div>
          <motion.div className="absolute -top-5 -right-5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-xl" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}>
            <div className="text-2xl font-black text-red-400">{t.stat2Value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{t.stat2Label}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
