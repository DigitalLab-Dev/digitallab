'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

// Testimonials stay in their original language (they're personal quotes)
const testimonials = [
  {
    quote: 'We cut our staff costs by 70% in the first month. The kitchen runs smoother than ever and customers actually love ordering from the tablet.',
    name: 'Khalid R.',
    role: 'Restaurant Owner',
    location: 'Dubai',
    flag: '🇦🇪',
    stars: 5,
    saving: '70% cost saved',
  },
  {
    quote: 'The inventory alerts alone saved us thousands. We used to waste so much product — now we restock exactly when we need to.',
    name: 'Marco T.',
    role: 'F&B Manager',
    location: 'Italy',
    flag: '🇮🇹',
    stars: 5,
    saving: 'Zero wastage',
  },
  {
    quote: 'Setup was incredibly fast. The QR menu works in Arabic and English and our customers were using it on day one.',
    name: 'Sara M.',
    role: 'Café Owner',
    location: 'Riyadh',
    flag: '🇸🇦',
    stars: 5,
    saving: 'Live in 24hrs',
  },
];

export default function RestCartTestimonials() {
  const { lang } = useLanguage();
  const t = translations.testimonials[lang];

  return (
    <section className="w-full px-5 sm:px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/20 mb-4">
            <Star className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span className="text-xs text-red-400 font-semibold uppercase tracking-widest">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            {t.headline1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t.headlineHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-red-500/20 hover:bg-white/[0.05] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">{testimonial.saving}</span>
              </div>
              <Quote className="w-8 h-8 text-red-900/60 mb-4" />
              <p className="text-gray-300 leading-relaxed text-sm mb-8 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-xl">{testimonial.flag}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role} · {testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}>
          <p className="text-gray-400 text-sm">
            {t.footer}{' '}<span className="text-white font-bold">{t.footerHighlight}</span>{' '}{t.footerSuffix}
          </p>
          <div className="flex justify-center gap-3 mt-4 text-2xl">
            {['🇦🇪','🇸🇦','🇮🇹','🇫🇷','🇬🇧','🇺🇸','🇪🇸','🇵🇰','🇹🇷','🇪🇬'].map((flag, i) => (
              <span key={i} className="hover:scale-125 transition-transform duration-200 cursor-default">{flag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
