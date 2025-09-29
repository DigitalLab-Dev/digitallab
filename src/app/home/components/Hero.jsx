'use client';
import ShinyText from '@/components/ReactBit-Components/ShinyText';
import TextType from '@/components/ReactBit-Components/TextType';
import React, { Suspense, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const onSplineLoad = () => {
    setSplineLoaded(true);
  };

  return (
    <motion.section
      className="w-full relative min-h-screen flex mt-20 justify-center items-center flex-col px-5 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      aria-label="Hero section - Digital marketing agency introduction"
    >
      {/* Spline 3D Model Background - Optimized with pointer-events */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ pointerEvents: 'auto' }}
        aria-hidden="true"
      >
        <div className="w-full h-full scale-125 sm:scale-125 md:scale-125 -translate-y-10 md:-translate-y-10">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
              <div className="w-16 h-16 border-4 border-[#f48020] border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Spline
              scene="https://prod.spline.design/7fTn8KMQWLjD9qLo/scene.splinecode"
              onLoad={onSplineLoad}
              style={{
                width: '100%',
                height: '100%',
                opacity: splineLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          </Suspense>
        </div>
      </div>

      {/* Content Container - pointer-events-none on container, but auto on interactive elements */}
      <div 
        className="flex flex-col w-fit items-center justify-center text-center gap-5 relative z-10"
        style={{ pointerEvents: 'none' }}
      >
        <motion.header
          className="flex flex-col w-fit items-center justify-center text-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Top Badge - Welcome message */}
          <motion.div
            className={
              'flex items-center justify-center gap-2 rounded-full px-5 py-1 ' +
              'bg-white/10 border border-white/20 shadow-lg shadow-black/30 ' +
              'backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md ' +
              'ring-1 ring-white/10'
            }
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            role="status"
            aria-live="polite"
          >
            <div 
              className="w-3 h-3 rounded-full bg-[#f48020] animate-pulse" 
              aria-hidden="true"
            />
            <p className="text-sm sm:text-base z-20 tracking-wide text-[#EBE9E4]">
              Welcome to Your Growth Playground
            </p>
          </motion.div>

          {/* Main Heading - Reduced line spacing */}
          <motion.h1
            className="text-[13vw] sm:text-[9vw] tracking-tight font-bold leading-tight sm:leading-[1] capitalize text-[#FFFFFF] max-w-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            We <span className="relative z-5">turn</span>{' '}
            <span className="italican lowercase text-[#BED3CC] rounded-2xl inline-block">
              <TextType
                text={['vision', 'ideas', 'aims', 'goals', 'designs']}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter=""
              />
            </span>{' '}
            <br className="hidden sm:block" />
            <span className="sm:inline block mt-2 sm:mt-0">into digital realities</span>
          </motion.h1>

          {/* Subheading - Shiny animated text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-4xl"
          >
            <ShinyText
              text="Trusted by brands that demand more than services, we deliver strategy, creativity, and technology that turn digital challenges into lasting growth"
              disabled={false}
              speed={3}
              className="text-base sm:text-xl md:w-3/4 w-full mx-auto leading-relaxed"
            />
          </motion.div>
        </motion.header>

        {/* CTA Button - Re-enable pointer events */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          style={{ pointerEvents: 'auto' }}
          className="mt-5"
        >
          <Link
            href="/clients"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-500 bg-[#f48020] text-white hover:gap-3 hover:bg-[#f0750f] hover:shadow-lg hover:shadow-[#f48020]/50 focus:outline-none focus:ring-4 focus:ring-[#f48020]/50 active:scale-95"
            aria-label="View our client results and case studies"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              VIEW OUR RESULTS
            </motion.span>
            <MdArrowOutward size={25} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;