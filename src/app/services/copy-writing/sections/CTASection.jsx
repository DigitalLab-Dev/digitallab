'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  return (
    <section className="relative overflow-hidden w-full text-white py-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Right-side image (visible on lg+ screens) */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:flex items-center pr-12">
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/copywriting.jpg"
            alt="Copywriting"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay for blend */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80" />

          {/* Decorative frame */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Left content */}
          <motion.div variants={item} className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block">
              <motion.p
                variants={item}
                className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-3 flex items-center gap-2"
              >
                <span className="w-8 h-[2px] bg-orange-400" />
                Conversion-focused copy
              </motion.p>
            </div>

            <motion.h2
              variants={item}
              className="text-white font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl"
            >
              Let's turn browsers into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                buyers
              </span>{' '}
              with powerful copy.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
            >
              High-converting headlines, persuasive microcopy and CTA-driven
              messaging tailored to your audience — so every visitor is guided
              to the next step.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-xl hover:shadow-orange-500/50 transition-shadow"
              >
                Start Your Project
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile & Tablet image */}
          <motion.div
            variants={item}
            className="w-full lg:hidden flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/copywriting.jpg"
                alt="Copywriting"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <p className="text-white font-semibold text-lg">
                  Professional Copywriting
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Converting words into revenue
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
    </section>
  );
}
