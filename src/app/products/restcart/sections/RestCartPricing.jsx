'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, Shield, MapPin, RefreshCcw, Zap, CreditCard, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const TAG_COLORS = {
  KEY: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
  HOT: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
  NEW: 'bg-blue-500/10   text-blue-400   border border-blue-500/20',
  VIP: 'bg-red-500/10    text-red-400    border border-red-500/20',
};
const TRUST_ICONS = [Shield, MapPin, RefreshCcw, Zap, CreditCard, Globe];

function annualMonthly(base) { return Math.round(base * 0.8); }
function annualTotal(base)   { return annualMonthly(base) * 12; }
function annualSaving(base)  { return (base - annualMonthly(base)) * 12; }

function FeatureItem({ feature, isPro }) {
  return (
    <li className={`flex items-start gap-3 text-sm leading-snug ${feature.on ? '' : 'opacity-30'}`}>
      <span className={`mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] ${
        feature.on
          ? isPro ? 'bg-yellow-500/15 text-yellow-400' : 'bg-green-500/12 text-green-400'
          : 'bg-white/5 text-gray-600'
      }`}>
        {feature.on ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
      </span>
      <span className="flex-1 text-gray-300" dangerouslySetInnerHTML={{ __html: feature.text }} />
      {feature.on && feature.tag && (
        <span className={`flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${TAG_COLORS[feature.tag]}`}>{feature.tag}</span>
      )}
    </li>
  );
}

function PlanCard({ plan, isAnnual, popularBadge, perMonth, annualLabel }) {
  const isPro = !!plan.popular;
  const price = isAnnual ? annualMonthly(plan.monthlyPrice) : plan.monthlyPrice;

  return (
    <motion.div
      className={`relative rounded-[20px] flex flex-col overflow-hidden border transition-all duration-300 ${
        isPro
          ? 'border-yellow-500/25 bg-gradient-to-b from-[#0E1C14] to-[#091510] shadow-[0_30px_80px_rgba(245,166,35,0.12)] -translate-y-3 hover:-translate-y-5'
          : 'border-white/7 bg-[#131820] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]'
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      {/* shimmer line */}
      <div className={`absolute top-0 left-0 right-0 h-px ${isPro ? 'bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent' : 'bg-gradient-to-r from-transparent via-white/8 to-transparent'}`} />
      {isPro && <div className="absolute top-[-60px] right-[-60px] w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.1)_0%,transparent_70%)] pointer-events-none" />}

      {isPro && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-b-xl">
          {popularBadge}
        </div>
      )}

      <div className="p-8 flex flex-col flex-1 gap-0">
        <div className={isPro ? 'mt-5' : ''}>
          <span className="text-3xl mb-3 block">{plan.emoji}</span>
          <h3 className="text-xl font-black text-white tracking-tight mb-1">{plan.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-7">{plan.tagline}</p>
        </div>

        <div className="flex items-end gap-1.5 mb-1">
          <span className={`text-xl font-bold mb-1.5 ${isPro ? 'text-yellow-400' : 'text-gray-400'}`}>$</span>
          <span className={`text-[3.2rem] font-black leading-none tracking-tighter ${isPro ? 'text-yellow-300' : 'text-white'}`}>{price}</span>
        </div>
        <p className="text-xs text-gray-500 mb-1">{perMonth}</p>
        <p className="text-xs text-green-400 font-medium min-h-[18px] mb-7">
          {isAnnual ? annualLabel(annualMonthly(plan.monthlyPrice), annualTotal(plan.monthlyPrice), annualSaving(plan.monthlyPrice)) : ''}
        </p>

        <Link href="https://calendly.com/syed-ali-turab/30min" target="_blank"
          className={`block w-full text-center py-3.5 rounded-xl font-black text-sm tracking-wide transition-all duration-200 ${
            isPro
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[0_6px_24px_rgba(245,166,35,0.3)] hover:shadow-[0_10px_36px_rgba(245,166,35,0.45)] hover:-translate-y-0.5'
              : 'bg-white/5 text-white border border-white/10 hover:bg-white/9 hover:border-white/18'
          }`}
        >
          {plan.cta}
        </Link>

        <hr className={`my-7 border-0 border-t ${isPro ? 'border-yellow-500/15' : 'border-white/7'}`} />
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${isPro ? 'text-yellow-500/50' : 'text-gray-600'}`}>{plan.featuresLabel}</p>
        <ul className="flex flex-col gap-[11px] flex-1">
          {plan.features.map((f, i) => <FeatureItem key={i} feature={f} isPro={isPro} />)}
        </ul>
      </div>
    </motion.div>
  );
}

export default function RestCartPricing() {
  const { lang } = useLanguage();
  const t = translations.pricing[lang];
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full px-5 sm:px-10 py-24" id="pricing">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs text-orange-400 font-semibold uppercase tracking-widest">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
            {t.headline1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">{t.headlineHighlight}</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">{t.subtitle}</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm transition-colors duration-200 ${!isAnnual ? 'text-white font-medium' : 'text-gray-500'}`}>{t.toggleMonthly}</span>
            <button
              onClick={() => setIsAnnual(v => !v)}
              className={`relative w-[52px] h-7 rounded-full border transition-all duration-300 ${isAnnual ? 'bg-orange-500/25 border-orange-500/40' : 'bg-white/8 border-white/10'}`}
              aria-label="Toggle billing period"
            >
              <span className={`absolute top-[3px] w-5 h-5 rounded-full transition-all duration-300 ${isAnnual ? 'left-[27px] bg-orange-400' : 'left-[3px] bg-gray-500'}`} />
            </button>
            <span className={`text-sm transition-colors duration-200 ${isAnnual ? 'text-white font-medium' : 'text-gray-500'}`}>{t.toggleAnnual}</span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition-all duration-300 ${isAnnual ? 'bg-green-500/12 border-green-500/25 text-green-400 opacity-100' : 'opacity-0 pointer-events-none'}`}>
              {t.toggleSave}
            </span>
          </div>
        </motion.div>

        {/* ROI Banner */}
        <motion.div
          className="flex items-center justify-between gap-6 flex-wrap rounded-2xl border border-orange-500/15 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 px-7 py-5 mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.roiDesc1}{' '}<span className="text-yellow-400 font-bold">{t.roiAmount}</span>{' '}{t.roiDesc2}
            </p>
            <p className="text-xs text-gray-600 mt-1">{t.roiNote}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-3xl font-black text-green-400">{t.roiYearly}</div>
            <div className="text-xs text-gray-500">{t.roiYearlySub}</div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {t.plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              popularBadge={t.popularBadge}
              perMonth={t.perMonth}
              annualLabel={t.annualLabel}
            />
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-14 pt-10 border-t border-white/7"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }}
        >
          {t.trust.map((text, i) => {
            const Icon = TRUST_ICONS[i];
            return (
              <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                <Icon className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                {text}
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
