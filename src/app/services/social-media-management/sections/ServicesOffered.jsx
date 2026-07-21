'use client';
import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Camera,
  MessageCircle,
  Target,
  Video,
  Calendar,
  Briefcase,
} from 'lucide-react';

const ServicesOffered = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const services = useMemo(
    () => [
      {
        icon: Camera,
        title: 'Content Creation',
        description:
          'Custom photos, graphics, and videos built for each platform. We make content that looks native to where it is posted, from clean brand photos to fast-paced short videos.',
      },
      {
        icon: MessageCircle,
        title: 'Community Management',
        description:
          'Real daily engagement, not just scheduled posts. We reply to comments and messages to build real trust with your audience in real time.',
      },
      {
        icon: Target,
        title: 'Platform Strategy',
        description:
          'We find the right channels and content mix for your exact business. We focus only on the apps where your buyers actually spend their time.',
      },
      {
        icon: Video,
        title: 'TikTok Content Creation',
        description:
          'Short-form video built specifically for how TikTok works. We use trend-aware editing and hot sounds so your videos feel natural, not forced.',
      },
      {
        icon: Calendar,
        title: 'Content Calendar Management',
        description:
          'A steady, planned posting schedule. Your brand will show up reliably instead of in random bursts followed by long gaps.',
      },
      {
        icon: Briefcase,
        title: 'White Label Social Media Management',
        description:
          "We run social media accounts under your agency's own name and branding. We handle the content and tech work behind the scenes so you can serve your clients easily.",
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="social-services-offered-heading"
    >
      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.header className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2
            id="social-services-offered-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto mb-4"
          >
            <span className="text-white">Social Media Management </span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Services We Offer
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From daily posts to a full platform strategy, we handle every
            part of your social media presence so your brand shows up
            consistently everywhere.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.title}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent
                      className="w-7 h-7 sm:w-8 sm:h-8 text-black"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesOffered;
