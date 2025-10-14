'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaUsers, FaStar, FaBriefcase } from 'react-icons/fa';

const ClientsHeroSection = () => {
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

  const ctaButtons = [
    {
      title: 'Our Brand Network',
      description: 'Explore trusted brands we work with',
      href: '/brands',
      icon: FaBriefcase,
      gradient: 'from-orange-500 to-orange-600',
      hoverGradient: 'from-orange-600 to-orange-700',
    },
    {
      title: 'Our Creator Network',
      description: 'Meet our talented creators',
      href: '/creators',
      icon: FaUsers,
      gradient: 'from-amber-500 to-amber-600',
      hoverGradient: 'from-amber-600 to-amber-700',
    },
    {
      title: 'Case Studies',
      description: 'See our success stories',
      href: '/case-studies',
      icon: FaStar,
      gradient: 'from-orange-600 to-red-600',
      hoverGradient: 'from-orange-700 to-red-700',
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f97316, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="clients-hero-heading"
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-15"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          
          {/* Floating Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 text-center max-w-7xl mx-auto mt-20"
        >

          {/* Main Headline */}
          <motion.h1
            id="clients-hero-heading"
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl uppercase lg:text-7xl font-bold mb-6  leading-tighter px-4"
          >
            <span className="text-white block mb-2">We are the first choice</span>
            <span className="gradient-text block pb-4">for big dreamers</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4"
          >
            From solo creators to global enterprises, we partner with those who chase growth, 
            measurable success, and results that never disappoint.
          </motion.p>
          
          {/* CTA Buttons Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
          >
            {ctaButtons.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${cta.gradient} hover:${cta.hoverGradient} transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-left">
                    {/* Icon */}
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <cta.icon className="text-2xl sm:text-3xl text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {cta.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm sm:text-base mb-4">
                      {cta.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-white font-semibold text-sm">
                      <span className="mr-2">Explore</span>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ClientsHeroSection;