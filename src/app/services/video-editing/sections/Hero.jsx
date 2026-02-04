"use client"
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function VideoAgencyHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }
    });
  }, [controls]);

  return (
    <header className="relative min-h-screen  overflow-hidden py-20  flex items-center justify-center">
      {/* SEO */}
      <div className="sr-only">
        <h1>Professional Video Editing Agency - Elevate Your Vision Into Cinematic Reality</h1>
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Glowing lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      {/* Floating video frame mockup */}
      <motion.div
        className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div
          className="relative"
          animate={{
            rotateY: [0, 5, 0, -5, 0],
            rotateX: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Video frame */}
          <div className="relative w-[70vw] h-[40vw] max-w-4xl max-h-96 rounded-2xl border-2 border-orange-500/20 bg-black/40 backdrop-blur-sm overflow-hidden">
            {/* Scan line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"
              animate={{
                y: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500" />

            {/* Glitch effect bars */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <div className="absolute top-1/4 left-0 right-0 h-px bg-orange-500" />
              <div className="absolute top-2/3 left-0 right-0 h-px bg-orange-500" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8 backdrop-blur-sm"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
          </motion.div>
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            Cinema-Grade Production
          </span>
        </motion.div>

        {/* Main Heading with split text animation */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            FRAME
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="relative inline-block"
          >
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 blur-xl">
              BY FRAME
            </span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600">
              BY FRAME
            </span>
          </motion.div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
        >
          We redefine raw footage into visual masterpieces that
          <span className="text-white font-medium"> captivate</span>,
          <span className="text-white font-medium"> inspire</span>, and
          <span className="text-orange-500 font-medium"> convert</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            className="group relative px-5 py-3 cursor-pointer bg-orange-400 text-black font-bold text-lg rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <a href="#short-form" className="relative z-10 flex items-center gap-3">
              <Play className="w-5 h-5 fill-current" />
              View Our Portfolio
            </a>
          </motion.button>

          <motion.button
            className="group relative px-5 py-3 cursor-pointer bg-transparent border-2 border-white text-white font-bold text-lg rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <Link href="/contact" className="relative z-10  transition-colors flex items-center gap-3">
              <Zap className="w-5 h-5" />
              Start Project
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Edge glow effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </header>
  );
}