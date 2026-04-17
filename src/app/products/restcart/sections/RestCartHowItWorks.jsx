'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Upload, LayoutDashboard, UtensilsCrossed } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Onboard Your Menu',
    description:
      'Upload your full menu, set your prices, add your languages. Done in hours, not weeks.',
    time: 'A few hours',
    color: 'from-red-600 to-red-400',
  },
  {
    number: '02',
    icon: LayoutDashboard,
    title: 'Set Up Your Tables',
    description:
      'Place tablets on tables or print QR codes. Connect your kitchen display. That\'s your entire setup.',
    time: 'Same day',
    color: 'from-orange-600 to-orange-400',
  },
  {
    number: '03',
    icon: UtensilsCrossed,
    title: 'Open Your Doors',
    description:
      'Customers order. Kitchen cooks. Payments process. Reports generate. You just run the show.',
    time: 'Day 1',
    color: 'from-green-600 to-green-400',
  },
];

export default function RestCartHowItWorks() {
  return (
    <section className="w-full px-5 sm:px-10 py-24" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/20 mb-4">
            <span className="text-xs text-red-400 font-semibold uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Up and Running in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Most restaurants are fully live within 24 hours. Our onboarding team guides you through every step.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute top-[60px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-red-500/30 via-orange-500/30 to-green-500/30 hidden lg:block" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 transition-all duration-300 group">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.color} leading-none`}>
                        {step.number}
                      </span>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500 font-medium">
                        {step.time}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
