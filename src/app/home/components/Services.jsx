'use client';
import ServiceCard from './ServiceCard';
import React, { useRef} from 'react';
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

  // Main container variants - staggers direct children (Header, Description, List)
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

  // Variants for header and description sections
  const sectionVariants = {
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

  // Variants for the services list container - staggers the cards
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Variants for individual service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-10 flex flex-col items-center justify-center px-5 sm:px-8 lg:px-10"
      aria-labelledby="services-heading"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl w-full"
      >
        {/* Header Section - Single animation, no nested variants */}
        <motion.div 
          variants={sectionVariants}
          className="flex w-full items-center flex-col lg:flex-row gap-8 lg:gap-12 justify-between mb-16 lg:mb-20"
        >
          <header 
            className="flex flex-col w-full lg:w-1/2 lg:items-start items-center justify-center lg:justify-start"
          >
            <span 
              className="uppercase text-sm md:text-base font-semibold text-orange-400 tracking-[0.3em] mb-4"
            >
              Our Services
            </span>
            <h2 
              id="services-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold lg:text-left text-center uppercase leading-tight"
            >
              Top <span className="text-orange-400">Services</span> We
              Specialize In
            </h2>
          </header>
          
          <div className="w-full lg:w-1/2">
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 lg:text-left text-center leading-relaxed">
              Backed by proven digital strategies, we help businesses gain visibility, build reputation, expand reach, and grow revenue. Explore the services we've mastered to make that happen:
            </p>
          </div>
        </motion.div>

        {/* Services List - Staggers the cards */}
        <motion.div 
          variants={listContainerVariants}
          className="w-full flex flex-col"
          role="list"
          aria-label="Our services list"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.heading}
              variants={cardVariants}
            >
              <ServiceCard 
                service={service} 
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={sectionVariants}
          className="mt-16 text-center"
        >
          {/* Add your CTA content here if needed */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;