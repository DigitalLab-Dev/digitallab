"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Right-side image (visible on md+ screens) */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/copywriting.png"
            alt="Copywriting"
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-28 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center gap-8 md:gap-6"
        >
          {/* Left content */}
          <motion.div variants={item} className="w-full md:w-1/2">
            <p className="text-sm font-medium uppercase tracking-wider text-orange-400 mb-3">
              Conversion-focused copy
            </p>

            <h2 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Let’s turn browsers into buyers with powerful copy.
            </h2>

            <p className="mt-4 text-gray-200 max-w-xl">
              High-converting headlines, persuasive microcopy and CTA-driven
              messaging tailored to your audience — so every visitor is guided
              to the next step.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#start"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-orange-300/30"
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>

          {/* Mobile image block */}
          <motion.div
            variants={item}
            className="w-full md:w-1/2 flex items-center justify-center md:justify-end"
          >
            <div className="block md:hidden w-48 h-48 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/5 bg-black relative">
              <Image
                src="/images/copywriting.jpg"
                alt="Copywriting"
                fill
                className="object-cover object-right rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-black/80 via-black/50 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Orange accent strip */}
      <div className="absolute inset-y-0 right-0 hidden md:block w-2 bg-gradient-to-b from-orange-400 to-orange-600 opacity-60" />
    </section>
  );
}
