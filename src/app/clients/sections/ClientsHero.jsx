'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaUsers, FaStar, FaBriefcase, FaChartLine, FaRocket, FaTrophy } from 'react-icons/fa';

const ClientsHeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
      title: 'Brand Network',
      href: '#brands',
      icon: FaBriefcase,
      primary: false,
    },
    {
      title: 'Creator Network',
      href: '#creators',
      icon: FaUsers,
      primary: true,
    },
    {
      title: 'Case Studies',
      href: '#case-studies',
      icon: FaStar,
      primary: false,
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="clients-hero-heading"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Accent Lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 text-center max-w-7xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm"
        >
          <FaChartLine className="text-orange-500 text-sm" />
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
            Trusted by Industry Leaders
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          id="clients-hero-heading"
          variants={itemVariants}
          className="text-6xl sm:text-6xl md:text-7xl  font-black leading-none mb-6"
        >
          <span className="text-white block mb-4">
            We Are The First Choice
          </span>
          <span className="block">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 blur-2xl opacity-50" />
              <span className="relative bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                For Big Dreamers
              </span>
            </span>
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg sm:text-xl  mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          From solo creators to global enterprises, we partner with those who chase 
          <span className="text-orange-400 font-medium"> growth, measurable success,</span> and results that never disappoint.
        </motion.p>
        {/* CTA Buttons */}
        <motion.nav
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          aria-label="Navigate to sections"
        >
          {ctaButtons.map((cta, index) => {
            const IconComponent = cta.icon;
            return (
              <motion.a
                key={index}
                href={cta.href}
                onClick={(e) => scrollToSection(e, cta.href)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative px-8 py-4 w-full justify-center md:w-fit rounded-xl font-semibold text-base flex items-center gap-3 transition-all duration-300 ${
                  cta.primary
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-orange-500/30'
                }`}
                aria-label={`Scroll to ${cta.title} section`}
              >
                {!cta.primary && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-all duration-300" />
                )}
                <IconComponent className="text-lg relative z-10" aria-hidden="true" />
                <span className="relative z-10">{cta.title}</span>
                <FaArrowRight 
                  className="text-sm group-hover:translate-x-1 transition-transform duration-300 relative z-10" 
                  aria-hidden="true"
                />
              </motion.a>
            );
          })}
        </motion.nav>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs uppercase tracking-wider font-semibold">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-orange-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientsHeroSection;