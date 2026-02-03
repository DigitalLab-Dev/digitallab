"use client"
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

// Move animation variants outside component
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const AdsManagementCTA = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-500 rounded-full" />
            <div className="absolute top-32 right-20 w-16 h-16 bg-orange-500 rounded-full opacity-20" />
            <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10" />
          </div>

          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 rounded-3xl p-8 md:p-12 lg:p-16 relative shadow-2xl">
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-8 right-8 w-32 h-32 border border-white/30 rounded-full"
            />

            <motion.div
              animate={{
                rotate: -360,
                y: [0, -10, 0]
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-8 left-8 w-24 h-24 border-2 border-black/10 rounded-lg"
            />

            <div className="relative z-10 text-center max-w-5xl mx-auto">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">Premium Ads Management</span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4 leading-tight">
                  Ready to <span className="text-white drop-shadow-lg">10x</span> Your ROI?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-black/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Join 50+ successful businesses who've transformed their advertising performance
                  with our proven strategies. Your competitors are already ahead – catch up now.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-black/60 transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center"
                >
                  <Link href="https://calendly.com/syed-ali-turab/30min" target="_blank" rel="noopener noreferrer">
                    <span>Start Your Campaign</span>
                  </Link>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>

              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(AdsManagementCTA);