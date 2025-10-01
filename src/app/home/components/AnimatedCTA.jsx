'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const AnimatedCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Floating SVG elements data
  const floatingShapes = [
    {
      path: 'M60,10 L85,35 L85,85 L35,85 L35,35 Z',
      viewBox: '0 0 120 120',
      color: 'text-orange-500',
      size: 100,
      initialX: 15,
      initialY: 20,
      duration: 8,
    },
    {
      circle: { cx: 40, cy: 40, r: 30 },
      viewBox: '0 0 80 80',
      color: 'text-white',
      size: 80,
      initialX: 75,
      initialY: 15,
      duration: 10,
    },
    {
      polygon: '50,10 90,50 50,90 10,50',
      viewBox: '0 0 100 100',
      color: 'text-orange-500',
      size: 90,
      initialX: 85,
      initialY: 70,
      duration: 7,
    },
    {
      path: 'M30,5 L55,30 L30,55 L5,30 Z',
      viewBox: '0 0 60 60',
      color: 'text-white',
      size: 70,
      initialX: 10,
      initialY: 75,
      duration: 9,
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-15px, -40px) rotate(-5deg);
          }
          75% {
            transform: translate(10px, -25px) rotate(3deg);
          }
        }

        @keyframes rise {
          0% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }

        .floating-shape {
          animation: float var(--duration) ease-in-out infinite;
        }

        .particle {
          animation: rise var(--rise-duration) linear infinite;
          animation-delay: var(--delay);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black flex items-center justify-center overflow-hidden py-20 px-4"
        aria-labelledby="cta-heading"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Floating SVG Shapes - Fixed Implementation */}
          {floatingShapes.map((shape, index) => (
            <motion.div
              key={index}
              className="absolute floating-shape"
              style={{
                left: `${shape.initialX}%`,
                top: `${shape.initialY}%`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                opacity: 0.1,
                '--duration': `${shape.duration}s`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <svg
                width={shape.size}
                height={shape.size}
                viewBox={shape.viewBox}
                className={`w-full h-full ${shape.color}`}
              >
                {shape.path && (
                  <path
                    d={shape.path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                )}
                {shape.circle && (
                  <circle
                    cx={shape.circle.cx}
                    cy={shape.circle.cy}
                    r={shape.circle.r}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="10,5"
                  />
                )}
                {shape.polygon && (
                  <polygon
                    points={shape.polygon}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </motion.div>
          ))}

          {/* Rising Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-orange-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
                '--rise-duration': `${4 + Math.random() * 3}s`,
                '--delay': `${Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Gradient Glows */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
            style={{ opacity: 0.15 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
            style={{ opacity: 0.1 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </div>

        {/* Grid Pattern Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-5"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="container mx-auto px-6 text-center relative z-10 max-w-6xl"
        >
          <article className="space-y-8">
            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-orange-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
                Ready to Transform Your Business?
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              id="cta-heading"
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight"
            >
              Work Hand in Hand with{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 animate-gradient">
                Digital Lab
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              You focus on your business, we'll handle the digital magic, design,
              marketing, and results that matter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-3"
                aria-label="Start your project with Digital Lab"
              >
                <span className="relative z-10">Start Your Project</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                href="/services"
                className="group px-8 py-4 bg-transparent text-white font-bold text-base md:text-lg rounded-full border-2 border-white hover:border-orange-500 hover:text-orange-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 inline-flex items-center gap-3"
                aria-label="View our portfolio and services"
              >
                <span>View Our Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.aside
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-white/10"
              aria-label="Trust indicators"
            >
              <p className="text-gray-400 text-sm md:text-base mb-8 flex items-center justify-center gap-2">
                <FaCheckCircle className="text-orange-500" />
                Trusted by 500+ companies worldwide
              </p>
              
              {/* Brand Logos Placeholder */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 opacity-40">
                {['BRAND', 'COMPANY', 'STARTUP', 'AGENCY'].map((name, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 0.4, y: 0 } : {}}
                    transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                    className="text-white font-bold text-base md:text-lg tracking-wider hover:opacity-100 hover:text-orange-500 transition-all duration-300"
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </article>
        </motion.div>
      </section>
    </>
  );
};

export default AnimatedCTA;