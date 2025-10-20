'use client';
import React, { useState, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Users, Award, Zap, Heart, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';

const DesignMattersComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const benefits = useMemo(
    () => [
      {
        icon: Eye,
        title: 'Brand Recognition',
        description: 'Memorable visuals that stick in customers\' minds and create lasting impressions',
        stat: '80%',
        metric: 'brand recall increase',
        gradient: 'from-orange-500 to-red-500',
      },
      {
        icon: Award,
        title: 'Professional Identity',
        description: 'Credibility that converts prospects into loyal customers and builds trust',
        stat: '75%',
        metric: 'trust improvement',
        gradient: 'from-orange-500 to-yellow-500',
      },
      {
        icon: Users,
        title: 'Customer Engagement',
        description: 'Compelling designs that drive interaction, loyalty, and meaningful connections',
        stat: '94%',
        metric: 'engagement boost',
        gradient: 'from-orange-500 to-pink-500',
      },
    ],
    []
  );

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.85, opacity: 0, y: 40 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <section 
      className="min-h-screen text-white overflow-hidden relative py-10"
      aria-labelledby="design-matters-heading"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle, #f97316 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 container  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header Section */}
        <motion.header 
          className="text-center 
           mb-5"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 sm:mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </motion.div>
            <h2 
              id="design-matters-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent pb-3"
            >
              Why Design Matters
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            In today's competitive landscape,{' '}
            <strong className="text-orange-500 font-semibold">
              exceptional graphic design
            </strong>{' '}
            isn't just aesthetics—it's your business's most powerful asset. Great
            design builds{' '}
            <strong className="text-orange-500 font-semibold">brand trust</strong>,
            captures{' '}
            <strong className="text-orange-500 font-semibold">
              customer attention
            </strong>
            , and drives{' '}
            <strong className="text-orange-500 font-semibold">
              higher conversions
            </strong>
            . It's the invisible force that transforms casual browsers into loyal
            customers and elevates your brand above the competition.
          </motion.p>
        </motion.header>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.article
                key={`benefit-${index}`}
                className="relative group"
                variants={cardVariants}
                custom={index}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="bg-neutral-950 border-2 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden backdrop-blur-sm"
                  animate={{
                    borderColor: hoveredCard === index ? '#f97316' : '#1f2937',
                    boxShadow:
                      hoveredCard === index
                        ? '0 25px 50px -12px rgba(249, 115, 22, 0.4)'
                        : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
                    aria-hidden="true"
                  />

                  {/* Sparkle effect on hover */}
                  {hoveredCard === index && (
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      aria-hidden="true"
                    >
                      <Sparkles className="w-5 h-5 text-orange-400" />
                    </motion.div>
                  )}

                  <div className="relative z-10">
                    <motion.div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? 5 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-white">
                      {benefit.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-400 text-center mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <motion.div
                      className="text-center border-t-2 pt-6"
                      animate={{
                        borderColor: hoveredCard === index ? '#f97316' : '#374151',
                      }}
                    >
                      <motion.div
                        className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-1"
                        animate={{
                          scale: hoveredCard === index ? 1.15 : 1,
                        }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {benefit.stat}
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium">
                        {benefit.metric}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Link href="/contact" className="inline-block group">
            <motion.div
              className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-orange-500/30 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.5)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'linear',
                }}
                aria-hidden="true"
              />
              
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" aria-hidden="true" />
              <span className="relative z-10">Transform Your Brand Today</span>
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignMattersComponent;