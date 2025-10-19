"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 102, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 102, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Dynamic Floating Particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#ff6600' : '#ffffff',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Large Animated Circles */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 102, 0, 0.15) 0%, transparent 70%)',
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 102, 0, 0.1) 0%, transparent 70%)',
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-8 lg:px-16 z-10"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl  font-black mb-6 leading-tight"
              >
                <span className="text-white">Transform Your</span>
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  Digital Future
                </motion.span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                We craft extraordinary digital experiences that drive growth, engagement, and innovation. From stunning websites to powerful marketing strategies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 102, 0, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300"
                >
                  <Link href="/contact">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

             
              </motion.div>
            </motion.div>

            {/* Right Content - Abstract 3D Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ y: y1 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              {/* 3D Floating Elements */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Large Central Circle */}
                <motion.div
                  className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-orange-500"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  style={{ y: y2 }}
                />

                {/* Medium Ring */}
                <motion.div
                  className="absolute w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white/30"
                  animate={{
                    rotate: -360,
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />

                {/* Inner Glowing Core */}
                <motion.div
                  className="absolute w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-orange-500 to-orange-600"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Orbiting Spheres */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-orange-500"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * Math.PI * 2) / 8) * 150,
                      y: Math.sin((i * Math.PI * 2) / 8) * 150,
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                      x: { duration: 10, repeat: Infinity, ease: 'linear' },
                      y: { duration: 10, repeat: Infinity, ease: 'linear' },
                    }}
                  />
                ))}





                {/* Glowing Orbs */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <motion.div
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-40"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Connecting Lines */}
                <motion.div
                  className="absolute w-64 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'left center',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}