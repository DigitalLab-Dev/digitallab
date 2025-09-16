"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Eye, Users, TrendingUp, Award, Zap, Heart } from 'lucide-react';

const DesignMattersComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const benefits = [
    {
      icon: Eye,
      title: 'Brand Recognition',
      description: 'Memorable visuals that stick in customers\' minds',
      stat: '80%',
      metric: 'brand recall increase'
    },
    {
      icon: Award,
      title: 'Professional Identity',
      description: 'Credibility that converts prospects into customers',
      stat: '75%',
      metric: 'trust improvement'
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Compelling designs that drive interaction and loyalty',
      stat: '94%',
      metric: 'engagement boost'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-black" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
              Why Design Matters
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            In today's competitive landscape, <span className="text-orange-500 font-semibold">exceptional graphic design</span> isn't 
            just aesthetics—it's your business's most powerful asset. Great design builds <span className="text-orange-500 font-semibold">brand trust</span>, 
            captures <span className="text-orange-500 font-semibold">customer attention</span>, and drives <span className="text-orange-500 font-semibold">higher conversions</span>. 
            It's the invisible force that transforms casual browsers into loyal customers and elevates your brand above the competition.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full relative overflow-hidden"
                  animate={{
                    borderColor: hoveredCard === index ? '#f97316' : '#374151',
                    boxShadow: hoveredCard === index 
                      ? '0 20px 40px rgba(249, 115, 22, 0.3)' 
                      : '0 10px 20px rgba(0, 0, 0, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="w-8 h-8 text-black" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-center mb-4 text-white">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-400 text-center mb-6 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    <motion.div 
                      className="text-center border-t border-gray-800 pt-6"
                      animate={{
                        borderColor: hoveredCard === index ? '#f97316' : '#374151'
                      }}
                    >
                      <motion.div
                        className="text-4xl font-bold text-orange-500 mb-1"
                        animate={{
                          scale: hoveredCard === index ? 1.15 : 1
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {benefit.stat}
                      </motion.div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        {benefit.metric}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-neutral-400 to-orange-400 text-black px-8 py-4 rounded-full font-bold text-lg cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Heart className="w-6 h-6" />
            <span>Transform Your Brand Today</span>
            <TrendingUp className="w-6 h-6" />
          </motion.div>
          
          <motion.p 
            className="mt-4 text-gray-400"
            variants={itemVariants}
          >
            Ready to see the difference exceptional design can make?
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DesignMattersComponent;