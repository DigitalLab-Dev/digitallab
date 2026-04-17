'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Lightbulb } from 'lucide-react';

export default function ProductsCTA() {
  return (
    <section className="w-full px-5 sm:px-10 py-20">
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-black to-black p-10 sm:p-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,128,32,0.15),transparent_60%)]" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-7 h-7 text-orange-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Want a Product Built{' '}
            <span className="text-orange-400">For Your Industry?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We're always working on new SaaS solutions. Have an idea or need a custom system for your business?
            Let's talk — we build products that replace processes, not just software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:gap-3 active:scale-95">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/products/restcart">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:border-orange-500/40 hover:text-orange-400 transition-all duration-300 active:scale-95">
                View RestCart
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
