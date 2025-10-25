"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Heart, MessageCircle, Play, Eye, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PhilosophySection = () => {
  // Mock social media content for the collage
  const socialContent = [
    {
      id: 1,
      type: 'instagram-post',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=300&h=300&fit=crop',
      likes: '12.4k',
      comments: '234',
      platform: 'instagram',
      size: 'medium'
    },
    {
      id: 2,
      type: 'tiktok-reel',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=200&h=350&fit=crop',
      views: '2.1M',
      platform: 'tiktok',
      size: 'tall'
    },
    {
      id: 3,
      type: 'instagram-story',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=350&fit=crop',
      views: '15.2k',
      platform: 'instagram',
      size: 'story'
    },
    {
      id: 4,
      type: 'linkedin-post',
      content: 'Just launched our biggest campaign yet! 🚀 The results speak for themselves...',
      author: 'Marketing Pro',
      reactions: '1.2k',
      platform: 'linkedin',
      size: 'wide'
    },
    {
      id: 5,
      type: 'youtube-short',
      image: 'https://images.unsplash.com/photo-1611262588019-db6cc2032da3?w=200&h=350&fit=crop',
      views: '340k',
      duration: '0:45',
      platform: 'youtube',
      size: 'tall'
    },
    {
      id: 6,
      type: 'facebook-post',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
      reactions: '892',
      shares: '156',
      platform: 'facebook',
      size: 'medium'
    }
  ];

  const InstagramPost = ({ content }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <img
          src={content.image} 
          alt="Instagram post" 
          fill
          className="object-cover"
          sizes="300px"
        />
        <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span className="text-sm font-semibold text-gray-800">{content.likes}</span>
            <MessageCircle className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-800">{content.comments}</span>
          </div>
          <Bookmark className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </motion.div>
  );

  const TikTokReel = ({ content }) => (
    <motion.div
      className="bg-black rounded-xl shadow-lg overflow-hidden relative h-full"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full min-h-[320px]">
        <img
          src={content.image} 
          alt="TikTok reel" 
          fill
          className="object-cover"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/80" />
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <Eye className="w-4 h-4" />
            {content.views}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
          TikTok
        </div>
      </div>
    </motion.div>
  );

  const InstagramStory = ({ content }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden relative h-full"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full min-h-[240px]">
        <img 
          src={content.image} 
          alt="Instagram story" 
          fill
          className="object-cover"
          sizes="200px"
        />
        <div className="absolute top-2 left-2 right-2 h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
        <div className="absolute bottom-4 left-4 text-white text-sm">
          {content.views} views
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
      </div>
    </motion.div>
  );

  const LinkedInPost = ({ content }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-4 h-full"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {content.author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm text-gray-800">{content.author}</div>
          <div className="text-xs text-gray-500">Marketing Director</div>
        </div>
        <div className="ml-auto bg-blue-600 text-white px-2 py-1 rounded text-xs">
          LinkedIn
        </div>
      </div>
      <p className="text-sm text-gray-800 mb-3">{content.content}</p>
      <div className="flex items-center gap-4 pt-2 border-t">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <Heart className="w-3 h-3 text-white fill-current" />
          </div>
          <span className="text-sm text-blue-600 font-medium">{content.reactions}</span>
        </div>
      </div>
    </motion.div>
  );

  const YouTubeShort = ({ content }) => (
    <motion.div
      className="bg-black rounded-xl shadow-lg overflow-hidden relative h-full"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full min-h-[320px]">
        <img
          src={content.image} 
          alt="YouTube short" 
          fill
          className="object-cover"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-black/20" />
        <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/90" />
        <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-1">
          <Eye className="w-4 h-4" />
          {content.views}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {content.duration}
        </div>
        <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs">
          Shorts
        </div>
      </div>
    </motion.div>
  );

  const FacebookPost = ({ content }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xs">
            B
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-800">Brand Page</div>
            <div className="text-xs text-gray-500">2 hours ago</div>
          </div>
        </div>
      </div>
      <div className="relative h-32">
        <img
          src={content.image} 
          alt="Facebook post" 
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-2 h-2 text-white fill-current" />
              </div>
              <span className="text-gray-800">{content.reactions}</span>
            </div>
            <div className="flex items-center gap-1">
              <Share2 className="w-4 h-4 text-gray-600" />
              <span className="text-gray-800">{content.shares}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = (content) => {
    switch (content.type) {
      case 'instagram-post':
        return <InstagramPost key={content.id} content={content} />;
      case 'tiktok-reel':
        return <TikTokReel key={content.id} content={content} />;
      case 'instagram-story':
        return <InstagramStory key={content.id} content={content} />;
      case 'linkedin-post':
        return <LinkedInPost key={content.id} content={content} />;
      case 'youtube-short':
        return <YouTubeShort key={content.id} content={content} />;
      case 'facebook-post':
        return <FacebookPost key={content.id} content={content} />;
      default:
        return null;
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 py-10">
        {/* Centered heading section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-200 text-sm font-medium">Our Philosophy</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto">
            <span className="text-white mb-2 mr-4">Not just</span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
              Posting.
            </span>
            <span className="text-white block">We create experiences</span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              that convert.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Copy and Cards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Every post we create serves a purpose. Every story we tell drives action. 
                We don't just fill your feed – we craft strategic content that turns 
                <span className="text-orange-400 font-semibold"> followers into customers</span>.
              </p>
              
              <p>
                Our secret? We blend <span className="text-white font-semibold">data-driven strategy</span> with 
                <span className="text-amber-400 font-semibold"> creative storytelling</span>. 
                The result? Content that doesn't just get seen – it gets remembered, 
                shared, and most importantly, it converts.
              </p>
            </div>

            {/* Key principles */}
            <div className="space-y-4">
              {[
                { icon: Target, title: 'Strategic Planning', desc: 'Every post aligns with your business goals' },
                { icon: Zap, title: 'Creative Excellence', desc: 'Content that stops the scroll and starts conversations' },
                { icon: TrendingUp, title: 'Data-Driven Results', desc: 'We measure what matters and optimize for growth' }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-xl">
                    <principle.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{principle.title}</h4>
                    <p className="text-gray-400 text-sm">{principle.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <motion.button
                className="group relative px-4 py-3 cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="relative z-10">See Our Strategy in Action</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side - Animated Collage */}
          <motion.div
            className="hidden md:block relative h-[800px]  -mt-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Grid layout for the collage */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 p-4">
              
              {/* Instagram Post */}
              <motion.div 
                className="col-span-6 row-span-6 z-10"
                variants={itemVariants}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {renderContent(socialContent[0])}
              </motion.div>

              {/* TikTok Reel */}
              <motion.div 
                className="col-span-4 row-span-8 col-start-7 z-10"
                variants={itemVariants}
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -1, 0] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5 
                }}
              >
                {renderContent(socialContent[1])}
              </motion.div>

              {/* Instagram Story */}
              <motion.div 
                className="col-span-3 row-span-6 col-start-1 row-start-7 z-10"
                variants={itemVariants}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 2, 0] 
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                {renderContent(socialContent[2])}
              </motion.div>

              {/* LinkedIn Post */}
              <motion.div 
                className="col-span-7 row-span-4 col-start-5 row-start-9 z-10"
                variants={itemVariants}
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, -0.5, 0] 
                }}
                transition={{ 
                  duration: 4.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.5 
                }}
              >
                {renderContent(socialContent[3])}
              </motion.div>

              {/* YouTube Short */}
              <motion.div 
                className="col-span-3 row-span-6 col-start-9 row-start-1 z-10"
                variants={itemVariants}
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 1.5, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.8 
                }}
              >
                {renderContent(socialContent[4])}
              </motion.div>

              {/* Facebook Post */}
              <motion.div 
                className="col-span-5 row-span-4 col-start-5 row-start-5 z-10"
                variants={itemVariants}
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -1.5, 0] 
                }}
                transition={{ 
                  duration: 3.8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2 
                }}
              >
                {renderContent(socialContent[5])}
              </motion.div>
            </div>

            {/* Floating connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <motion.path
                d="M200,300 Q350,200 500,400"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M100,500 Q300,350 600,600"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;