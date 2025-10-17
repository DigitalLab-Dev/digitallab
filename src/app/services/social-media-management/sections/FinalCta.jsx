'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Rocket,
  Heart,
  MessageCircle,
  Share2,
  Star,
  Zap,
} from 'lucide-react';

const FinalCTA = () => {
  // Mock blurred feed posts for background
  const feedPosts = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=200&fit=crop',
      x: 10,
      y: 20,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=200&h=300&fit=crop',
      x: 70,
      y: 10,
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop',
      x: 15,
      y: 70,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1611262588019-db6cc2032da3?w=200&h=200&fit=crop',
      x: 80,
      y: 65,
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop',
      x: 45,
      y: 15,
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop',
      x: 25,
      y: 45,
    },
  ];

  // Animated emojis and reactions
  const reactions = [
    { emoji: '🔥', x: 20, y: 30, delay: 0 },
    { emoji: '❤️', x: 75, y: 25, delay: 0.5 },
    { emoji: '👍', x: 15, y: 60, delay: 1 },
    { emoji: '😍', x: 85, y: 70, delay: 1.5 },
    { emoji: '🚀', x: 40, y: 80, delay: 2 },
    { emoji: '💯', x: 65, y: 15, delay: 2.5 },
    { emoji: '⭐', x: 30, y: 25, delay: 3 },
    { emoji: '🎉', x: 55, y: 60, delay: 3.5 },
    { emoji: '💡', x: 10, y: 75, delay: 4 },
    { emoji: '🔥', x: 90, y: 40, delay: 4.5 },
  ];

  // Social media icons floating
  const socialIcons = [
    { Icon: Heart, color: 'text-red-400', x: 25, y: 35, delay: 0.2 },
    { Icon: MessageCircle, color: 'text-blue-400', x: 70, y: 50, delay: 0.7 },
    { Icon: Share2, color: 'text-green-400', x: 15, y: 80, delay: 1.2 },
    { Icon: Star, color: 'text-yellow-400', x: 80, y: 20, delay: 1.7 },
    { Icon: Zap, color: 'text-purple-400', x: 45, y: 70, delay: 2.2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const emojiFloatAnimation = {
    y: [-15, 15, -15],
    x: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section className="relative min-h-screen  bg-black overflow-hidden flex items-center justify-center">
      {/* Blurred feed mockup background */}
      <div className="absolute inset-0">
        {feedPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="absolute"
            style={{
              left: `${post.x}%`,
              top: `${post.y}%`,
              filter: 'blur(8px)',
              opacity: 0.1,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.1,
              scale: 1,
              ...floatingAnimation,
            }}
            transition={{
              delay: index * 0.2,
              ...floatingAnimation.transition,
            }}
          >
            <div className="w-32 h-32 bg-white/10 rounded-lg overflow-hidden border border-white/20">
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Animated emojis */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {reactions.map((reaction, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl"
              style={{
                left: `${reaction.x}%`,
                top: `${reaction.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.8,
                scale: 1,
                ...emojiFloatAnimation,
              }}
              exit={{
                opacity: 0,
                scale: 0,
                y: 50, // push down as it disappears (reverse float)
              }}
              transition={{
                delay: reaction.delay,
                scale: { duration: 0.5 },
                ...emojiFloatAnimation.transition,
              }}
            >
              {reaction.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Floating social icons */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {socialIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.6,
                scale: 1,
                y: [-8, 8, -8],
                rotate: [0, 180, 360],
              }}
              exit={{
                opacity: 0,
                scale: 0,
                y: 30, // falls down while disappearing
                rotate: 0,
              }}
              transition={{
                delay: item.delay,
                scale: { duration: 0.5 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              <div
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${item.color}`}
              >
                <item.Icon className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Main content */}
      <div className="relative z-20 py-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-3 backdrop-blur-sm"
          >
            <Rocket className="w-5 h-5 text-orange-400" />
            <span className="text-orange-200 font-medium">
              Ready to Launch?
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl  font-black leading-tighter max-w-5xl mx-auto"
          >
            <span className="text-white block mb-4">Let's Make Your Brand</span>
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 pb-4 to-orange-500 bg-clip-text text-transparent block">
              the Next Big Thing
            </span>
            <span className="text-white">on Social Media.</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Stop dreaming about viral success and start creating it. Join
            hundreds of brands that trust us to amplify their voice and drive
            real results.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 py-8"
          >
            {[
              { number: '500M+', label: 'Content Views' },
              { number: '2.5K+', label: 'Brands Grown' },
              { number: '98%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              className="group relative px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold text-xl rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                Start Your Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Particle effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FinalCTA;
