'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingDown } from 'lucide-react';

const staffCosts = [
  { role: '3 Waiters', cost: '$1,800' },
  { role: '1 Cashier', cost: '$800' },
  { role: '1 Manager', cost: '$1,500' },
];

export default function RestCartMath() {
  return (
    <section className="w-full px-5 sm:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 mb-4">
            <TrendingDown className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs text-orange-400 font-semibold uppercase tracking-widest italic">"Let's talk numbers."</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            What Are You Actually{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Spending on Staff
            </span>{' '}
            Right Now?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Cost table - left */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-6">Monthly Staff Cost</h3>

              <div className="space-y-4">
                {staffCosts.map((item, index) => (
                  <motion.div
                    key={item.role}
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
                      <span className="text-gray-300 font-medium">{item.role}</span>
                    </div>
                    <span className="text-white font-bold text-lg">{item.cost}</span>
                  </motion.div>
                ))}
              </div>

              {/* Total */}
              <motion.div
                className="mt-6 p-5 rounded-2xl bg-red-950/30 border border-red-900/40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-lg">Total Monthly</span>
                  <span className="font-black text-red-400 text-3xl">$4,100</span>
                </div>
                <p className="text-red-400/60 text-xs mt-2">Per month, every month — rain or shine.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RestCart comparison - right */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* VS card */}
            <div className="rounded-3xl border border-green-500/20 bg-green-950/10 p-8">
              <div className="text-center mb-6">
                <span className="text-6xl font-black text-green-400">VS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">RestCart costs a fraction of that.</h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
                Less than 20% of what you're currently spending — with zero sick days, zero attitude, and zero mistakes.
              </p>

              {/* Savings visualization */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Current staff cost</span>
                  <span className="text-red-400 font-bold">$4,100/mo</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full w-full" />
                </div>
                <div className="flex items-center justify-between text-sm mt-4">
                  <span className="text-gray-500">RestCart cost</span>
                  <span className="text-green-400 font-bold">~$400/mo</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full w-[20%]" />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-3xl font-black text-green-400">Save $3,700/mo</span>
                </div>
              </div>
            </div>

            {/* Closing argument */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-950/10 p-6 text-center">
              <p className="text-white font-bold text-lg mb-2">
                The question isn't can you afford this.
              </p>
              <p className="text-orange-300 font-bold text-lg">
                The question is: how long can you afford NOT to have it?
              </p>
              <Link href="https://calendly.com/syed-ali-turab/30min" target="_blank" className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-orange-500/30 hover:gap-3 transition-all duration-300">
                Let's Customise it
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
