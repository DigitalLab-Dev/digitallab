'use client';
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import {
  motion,
  useInView,
} from 'framer-motion';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      heading: 'Video Editing',
      para: 'Professional video editing with effects, transitions, and motion graphics that captivate your audience.',
      link: '/services/video-editing',
    },
    {
      heading: 'Graphic Design',
      para: 'Creative graphics, branding, and visuals that stand out and elevate your brand identity.',
      link: '/services/graphic-design',
    },
    {
      heading: 'Social Media Marketing',
      para: 'Engage your audience with tailored social strategies that drive growth and build community.',
      link: '/services/social-media-management',
    },
    {
      heading: 'Ads Management',
      para: 'Google, Facebook & Instagram Ads that convert visitors into customers with proven ROI.',
      link: '/services/ads-management',
    },
    {
      heading: 'Copywriting',
      para: 'Powerful words that sell, engage, and inspire action with compelling storytelling.',
      link: '/services/copy-writing',
    },
    {
      heading: 'SEO',
      para: 'Search engine optimization strategies that boost rankings and drive organic traffic to your site.',
      link: '/services/seo',
    },
    {
      heading: 'Web Development',
      para: 'Powerful websites that sell, engage, and inspire action with modern design and functionality.',
      link: '/services/web-development',
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

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 md:py-20 flex flex-col items-center justify-center px-5 sm:px-8 lg:px-10 "
      aria-labelledby="services-heading"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl w-full"
      >
        {/* Header Section */}
        <div className="flex w-full items-center flex-col lg:flex-row gap-8 lg:gap-12 justify-between mb-16 lg:mb-20">
          <motion.header 
            variants={itemVariants}
            className="flex flex-col w-full lg:w-1/2 lg:items-start items-center justify-center lg:justify-start"
          >
            <motion.span 
              className="uppercase text-sm md:text-base font-semibold text-orange-400 tracking-[0.3em] mb-4"
              variants={itemVariants}
            >
              Our Services
            </motion.span>
            <motion.h2 
              id="services-heading"
              className="text-4xl sm:text-5xl md:text-6xl  font-bold lg:text-left text-center uppercase leading-tight"
              variants={itemVariants}
            >
              Top <span className="text-orange-400">Services</span> We
              Specialize In
            </motion.h2>
          </motion.header>
          
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2"
          >
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 lg:text-left text-center leading-relaxed">
              Backed by proven digital strategies, we help businesses gain visibility, build reputation, expand reach, and grow revenue. Explore the services we've mastered to make that happen:
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <motion.div 
          className="w-full flex flex-col"
          role="list"
          aria-label="Our services list"
        >
          {services.map((service, index) => (
            <ServiceCard 
              service={service} 
              key={service.heading} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
 
        </motion.div>
      </motion.div>

   </section>
  );
};

export default Services;