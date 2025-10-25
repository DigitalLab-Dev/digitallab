

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Mock feed posts with more engaging content
  const feedPosts = [
    { id: 1, platform: 'instagram', growth: '+245%', metric: 'Engagement' },
    { id: 2, platform: 'tiktok', growth: '+180%', metric: 'Views' },
    { id: 3, platform: 'linkedin', growth: '+92%', metric: 'Connections' },
    { id: 4, platform: 'youtube', growth: '+310%', metric: 'Subscribers' },
    { id: 5, platform: 'facebook', growth: '+156%', metric: 'Reach' },
  ];

  // Content cards for the feed
  const contentCards = [
    {
      id: 1,
      type: 'story',
      platform: 'Instagram',
      content: '10M+ Views',
      icon: '📸',
      position: { top: '15%', left: '8%' }
    },
    {
      id: 2,
      type: 'reel',
      platform: 'TikTok',
      content: 'Viral Campaign',
      icon: '🎵',
      position: { top: '25%', right: '12%' }
    },
    {
      id: 3,
      type: 'post',
      platform: 'LinkedIn',
      content: 'B2B Success',
      icon: '💼',
      position: { top: '45%', left: '5%' }
    },
    {
      id: 4,
      type: 'video',
      platform: 'YouTube',
      content: '500K Subs',
      icon: '🎬',
      position: { bottom: '20%', right: '8%' }
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-20 bg-black">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating content cards with glow */}
      {contentCards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute z-10 md:opacity-100 opacity-0"
          style={card.position}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            delay: 1.5 + index * 0.2,
            duration: 0.8,
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Glow behind card */}
          <div className="absolute -inset-6 rounded-2xl blur-3xl opacity-40 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500"></div>

          {/* Actual card */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
            <div className="text-2xl mb-2">{card.icon}</div>
            <div className="text-white font-semibold text-sm">{card.platform}</div>
            <div className="text-orange-300 text-xs font-medium">{card.content}</div>
          </div>
        </motion.div>
      ))}

      {/* Main content container */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-black leading-tighter mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <span className="block text-white">Building Brands</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              That Trend,
            </span>
            <span className="block text-white">One Post at a Time</span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            className="max-w-4xl mx-auto"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              We craft viral content and drive engagement across all major platforms
            </p>
            
            {/* Platform badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Instagram', 'TikTok', 'LinkedIn', 'Facebook', 'YouTube'].map((platform, index) => (
                <motion.div
                  key={platform}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 0.2)' }}
                >
                  <span className="text-white text-sm font-medium">{platform}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { number: '15M+', label: 'Views Generated' },
              { number: '50+', label: 'Brands Grown' },
              { number: '98%', label: 'Client Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.button
              className="group relative p-3 bg-gradient-to-r from-orange-500 to-amber-700 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <a href="#work">

                View Our Work
                </a>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
