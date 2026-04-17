'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Sparkles } from 'lucide-react';

export default function ProductsHero() {
  return (
    <motion.section
      className="w-full relative min-h-[55vh] flex mt-16 sm:mt-20 justify-center items-center flex-col px-5 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500/30 animate-pulse"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,128,32,0.07),transparent_65%)]" />
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-6 relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          className="flex items-center gap-2 rounded-full px-5 py-2 bg-white/5 border border-orange-500/30 shadow-lg backdrop-blur-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Package className="w-4 h-4 text-orange-400" />
          <p className="text-sm tracking-wide text-orange-300 font-medium">Our SaaS Products</p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tools Built to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Transform
          </span>{' '}
          Industries
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          We don't just build marketing campaigns — we build products. Each one engineered to solve a
          real industry problem, automate operations, and unlock new levels of profitability.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { label: 'Countries', value: '10+' },
            { label: 'Happy Clients', value: '500+' },
            { label: 'Products Launched', value: '1' },
            { label: 'Setup Time', value: '24hrs' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
