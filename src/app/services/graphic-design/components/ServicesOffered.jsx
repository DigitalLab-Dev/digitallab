'use client';
import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  PenTool,
  RefreshCw,
  Package,
  Printer,
  Palette,
  Share2,
} from 'lucide-react';

const ServicesOffered = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const services = useMemo(
    () => [
      {
        icon: PenTool,
        title: 'Logo & Brand Identity Design',
        description:
          'Custom logo design built around what makes your business unique. We build complete identity systems, not cheap templates with your name swapped in.',
        gradient: 'from-orange-500 to-red-500',
      },
      {
        icon: RefreshCw,
        title: 'Branding & Rebranding',
        description:
          'Whether you are starting from zero or updating an old look, we build your full identity. This includes colors, fonts, and clear guidelines to keep your brand consistent as you grow.',
        gradient: 'from-orange-500 to-yellow-500',
      },
      {
        icon: Package,
        title: 'Packaging Design',
        description:
          'Product packaging that pops on the shelf and looks great in unboxing videos. We design for real production sizes and materials, not just flat digital screens.',
        gradient: 'from-orange-500 to-pink-500',
      },
      {
        icon: Printer,
        title: 'Print Design',
        description:
          'Business cards, brochures, and signs. We make sure your brand looks perfect when it moves into the real world.',
        gradient: 'from-orange-500 to-red-500',
      },
      {
        icon: Palette,
        title: 'Illustration Services',
        description:
          'Custom artwork for when stock photos just will not work. We create unique icons and visual styles made exactly for your brand.',
        gradient: 'from-orange-500 to-yellow-500',
      },
      {
        icon: Share2,
        title: 'Social Media Graphics',
        description:
          'Clean, ready-to-use templates for your social channels. Keep your feed looking sharp and planned, not random and improvised.',
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
      aria-labelledby="services-offered-heading"
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
            id="services-offered-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent pb-3 mb-4"
          >
            Graphic Design Services We Offer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            From a simple logo to a full brand system, we design everything
            you need to look sharp everywhere your brand shows up.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.title}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="bg-neutral-950 border-2 border-gray-800 group-hover:border-orange-500 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden backdrop-blur-sm transition-colors duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className="w-7 h-7 sm:w-8 sm:h-8 text-white"
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
