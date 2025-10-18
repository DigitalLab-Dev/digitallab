'use client';
import React, { useRef } from 'react';
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
      href: '#brands',
      icon: FaBriefcase,
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Our Creator Network',
      description: 'Meet our talented creators',
      href: '#creators',
      icon: FaUsers,
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      title: 'Case Studies',
      description: 'See our success stories',
      href: '#case-studies',
      icon: FaStar,
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Adjust for fixed header if you have one
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8"
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
              key={`particle-${i}`}
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
            className="text-4xl sm:text-5xl md:text-6xl uppercase lg:text-7xl font-bold leading-tighter px-4"
          >
            <span className="text-white block mb-2">We are the first choice</span>
            <span className="gradient-text block pb-4">for big dreamers</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-12 mt-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            From solo creators to global enterprises, we partner with those who chase growth, 
            measurable success, and results that never disappoint.
          </motion.p>
          
{/* CTA Buttons */}
          <motion.nav
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto px-4 justify-center items-center"
            aria-label="Navigate to sections"
          >
            {ctaButtons.map((cta, index) => {
              const IconComponent = cta.icon;
              return (
                <motion.a
                  key={`cta-${index}`}
                  href={cta.href}
                  onClick={(e) => scrollToSection(e, cta.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-6 py-3 rounded-lg bg-gradient-to-r ${cta.gradient} text-white font-semibold text-sm sm:text-base flex items-center gap-2 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300`}
                  aria-label={`Scroll to ${cta.title} section`}
                >
                  <IconComponent className="text-base" aria-hidden="true" />
                  <span>{cta.title}</span>
                  <FaArrowRight 
                    className="text-sm group-hover:translate-x-1 transition-transform duration-300" 
                    aria-hidden="true"
                  />
                </motion.a>
              );
            })}
          </motion.nav>
        </motion.div>
      </section>
    </>
  );
};

export default ClientsHeroSection;