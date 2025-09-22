'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Eye,
  Play,
  Users,
  RefreshCw,
  BarChart3,
  Target,
  TrendingUp,
  ArrowRight,
  Check,
  Star,
  Zap,
} from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'meta',
      title: 'Meta Ads',
      subtitle: 'Facebook & Instagram',
      icon: Users,
      color: 'from-orange-400 via-orange-500 to-orange-600',
      bgColor: 'from-orange-400/20 via-orange-500/20 to-orange-600/20',
      description:
        'Reach 3.8 billion users across Facebook and Instagram with precision targeting',
      features: [
        'Advanced Audience Targeting',
        'Creative A/B Testing',
        'Conversion Optimization',
        'Retargeting Campaigns',
      ],
      stats: { metric: 'ROAS', value: '4.2x', label: 'Average Return' },
      platforms: ['Facebook', 'Instagram', 'Messenger', 'Audience Network'],
    },
    {
      id: 'google',
      title: 'Google Ads',
      subtitle: 'Search, Display & YouTube',
      icon: Search,
      color: 'from-orange-400 via-orange-500 to-orange-600',
      bgColor: 'from-orange-400/20 via-orange-500/20 to-orange-600/20',
      description:
        'Dominate search results and capture high-intent customers actively searching',
      features: [
        'Search Campaigns',
        'Display Network',
        'YouTube Advertising',
        'Shopping Ads',
      ],
      stats: { metric: 'CTR', value: '8.5%', label: 'Click-Through Rate' },
      platforms: ['Search', 'Display', 'YouTube', 'Shopping'],
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Ads',
      subtitle: 'B2B Professional Targeting',
      icon: Target,
      color: 'from-orange-400 via-orange-500 to-orange-600',
      bgColor: 'from-orange-400/20 via-orange-500/20 to-orange-600/20',
      description:
        'Connect with decision-makers and professionals in your industry',
      features: [
        'B2B Lead Generation',
        'Professional Targeting',
        'Sponsored Content',
        'InMail Campaigns',
      ],
      stats: { metric: 'Leads', value: '340%', label: 'Quality Increase' },
      platforms: [
        'Sponsored Content',
        'Message Ads',
        'Text Ads',
        'Dynamic Ads',
      ],
    },
    {
      id: 'tiktok',
      title: 'TikTok Ads',
      subtitle: 'Viral Video Marketing',
      icon: Play,
      color: 'from-orange-400 via-orange-500 to-orange-600',
      bgColor: 'from-orange-400/20 via-orange-500/20 to-orange-600/20',
      description:
        'Engage Gen Z and millennials with creative video content that goes viral',
      features: [
        'Video Ad Creation',
        'Hashtag Challenges',
        'Brand Takeovers',
        'Spark Ads',
      ],
      stats: { metric: 'Engagement', value: '6.2%', label: 'Avg Rate' },
      platforms: ['In-Feed Ads', 'TopView', 'Branded Effects', 'Spark Ads'],
    },
    {
      id: 'retargeting',
      title: 'Retargeting',
      subtitle: 'Re-engage Lost Visitors',
      icon: RefreshCw,
      color: 'from-orange-400 via-orange-500 to-orange-600',
      bgColor: 'from-orange-400/20 via-orange-500/20 to-orange-600/20',
      description:
        'Convert abandoned carts and re-engage website visitors across all platforms',
      features: [
        'Cross-Platform Retargeting',
        'Dynamic Product Ads',
        'Lookalike Audiences',
        'Sequential Messaging',
      ],
      stats: { metric: 'CVR', value: '12.8%', label: 'Conversion Rate' },
      platforms: ['Web Visitors', 'App Users', 'Customer Lists', 'Lookalikes'],
    },
    {
      id: 'funnel',
      title: 'Funnel Setup',
      subtitle: 'Tracking & Analytics',
      icon: BarChart3,
      color: 'from-orange-400 via-orange-500 to-orange-600',
      bgColor: 'from-orange-400/20 via-orange-500/20 to-orange-600/20',
      description:
        'Complete funnel optimization with advanced tracking and conversion analytics',
      features: [
        'Conversion Tracking',
        'Attribution Modeling',
        'Custom Dashboards',
        'ROI Analysis',
      ],
      stats: { metric: 'Accuracy', value: '99.2%', label: 'Tracking Rate' },
      platforms: [
        'GA4',
        'Facebook Pixel',
        'Google Tag Manager',
        'Custom Events',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen  py-10 lg:py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 via-orange-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-400/15 via-orange-500/8 to-transparent blur-3xl" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2 fill-current" />
            Premium Ad Management Services
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            <span className="block mb-2">Dominate Every Platform</span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              We've Got You Covered
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            From Google Search to TikTok videos, we create and manage
            high-converting ad campaigns across all major platforms to maximize
            your reach and ROI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
            >
              {/* Card Background with Gradient Border */}
              <div className="relative h-full p-6 lg:p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden group-hover:border-orange-400/50 transition-all duration-500">
                {/* Gradient Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm lg:text-base">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`px-8 py-2 bg-gradient-to-r  bg-opacity-20 backdrop-blur-sm border border-orange-400/30 rounded-xl`}
                    >
                      <div className="text-orange-300 font-bold text-lg">
                        {service.stats.value}
                      </div>
                      <div className="text-orange-200 text-xs">
                        {service.stats.label}
                      </div>
                    </div>

                    <div className="text-gray-400">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Platform Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.platforms.slice(0, 2).map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 bg-gray-800/50 border border-gray-600/30 rounded-md text-xs text-gray-300"
                      >
                        {platform}
                      </span>
                    ))}
                    {service.platforms.length > 2 && (
                      <span className="px-2 py-1 bg-orange-500/20 border border-orange-400/30 rounded-md text-xs text-orange-300">
                        +{service.platforms.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="group inline-flex items-center px-4 py-3 text-lg lg:text-xl font-semibold text-white cursor-pointer bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full hover:from-orange-300 hover:via-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Multi-Platform Campaign
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            {/* Modal */}
            <div className="fixed inset-0 flex  items-center justify-center z-50 p-4">
              <motion.div
                className="relative max-w-2xl h-[95%] w-full bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-400/30 rounded-3xl p-8 shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-600/50 hover:border-orange-400/50 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300"
                >
                  ×
                </button>

                {/* Modal Content */}
                <div className="pr-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${selectedService.color} rounded-2xl flex items-center justify-center mr-6`}
                    >
                      <selectedService.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {selectedService.title}
                      </h3>
                      <p className="text-orange-400 text-lg">
                        {selectedService.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedService.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-orange-400 font-semibold mb-4 text-lg">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Check className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Platforms */}
                    <div>
                      <h4 className="text-orange-400 font-semibold mb-4 text-lg">
                        Platforms Covered
                      </h4>
                      <div className="space-y-2">
                        {selectedService.platforms.map((platform, index) => (
                          <motion.div
                            key={index}
                            className="px-4 py-2 bg-gray-800/50 border border-gray-600/30 rounded-lg text-gray-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {platform}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
