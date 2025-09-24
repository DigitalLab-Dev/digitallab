"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const InfluencerShowcase = () => {
  const influencers = [
    {
      id: 1,
      name: "Sarah Johnson",
      description: "Lifestyle & Fashion Creator with 2M+ followers across platforms. Specializes in sustainable fashion and wellness content.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marcus Chen",
      description: "Tech Reviewer & Gaming Enthusiast. Known for in-depth product reviews and gaming tutorials.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      description: "Food & Travel Blogger exploring cuisines worldwide. Creates mouth-watering content for food lovers.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      description: "Fitness Coach & Nutrition Expert helping people achieve their health goals through science-based approaches.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Aria Patel",
      description: "Creative Director & Digital Artist showcasing innovative designs and creative processes to inspire others.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Jake Wilson",
      description: "Business & Entrepreneurship Mentor sharing insights on scaling startups and building successful ventures.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
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
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4" />
            Our Influencer Partners
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Creative Minds
            </span>
            <br />
            <span className="text-white">We Collaborate With</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the talented creators who bring brands to life through authentic storytelling 
            and engaging content across multiple platforms.
          </p>
        </motion.div>

        {/* Influencer List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {influencers.map((influencer, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={influencer.id}
                variants={itemVariants}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
              >
                {/* Image Section */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-md opacity-20"></div>
                    
                    {/* Image */}
                    <img
                      src={influencer.image}
                      alt={influencer.name}
                      className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-orange-500/30"
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className={`flex-1 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'} max-w-2xl`}>
                  <motion.h3
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                  >
                    <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      {influencer.name}
                    </span>
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-white/80 text-lg md:text-xl leading-relaxed"
                  >
                    {influencer.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerShowcase;