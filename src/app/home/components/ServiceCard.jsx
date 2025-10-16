'use client';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { MdArrowForward } from 'react-icons/md';
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [showPara, setShowPara] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Smooth cursor-following animation
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 30, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.25 });

  // Initialize position to center on mount
  useEffect(() => {
    if (ref.current && !isInitialized) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      rawX.set(centerX);
      rawY.set(centerY);
      setIsInitialized(true);
    }
  }, [ref.current, isInitialized, rawX, rawY]);

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setShowPara(true);
    // Reset to center when mouse enters
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      rawX.set(rect.width / 2);
      rawY.set(rect.height / 2);
    }
  };

  const handleMouseLeave = () => setShowPara(false);

  return (
    <motion.article
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1 
      }}
      className="relative flex items-center justify-between py-6 md:py-8 border-b border-orange-400/30 group hover:border-orange-400 transition-colors duration-500"
      role="article"
      aria-labelledby={`service-${index}`}
    >
      <div className="flex flex-col flex-1 pr-4">
        <motion.h3
          id={`service-${index}`}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-neutral-200 font-bold transition-all duration-500 group-hover:text-orange-400"
          initial={{ x: 0 }}
          whileHover={{ x: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {service.heading}
        </motion.h3>
        
        {/* Show description on mobile */}
        <p className="mt-3 text-sm sm:text-base text-neutral-400 md:hidden">
          {service.para}
        </p>
      </div>

      {/* CTA Button */}
      <Link
        href={service.link}
        className="sm:w-20 sm:h-20 w-12 h-12 rounded-full bg-neutral-600 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 flex-shrink-0 group/btn focus:outline-none focus:ring-4 focus:ring-orange-500/50"
        aria-label={`Learn more about ${service.heading}`}
      >
        <motion.div
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <MdArrowForward className="text-2xl sm:text-3xl text-white" aria-hidden="true" />
        </motion.div>
      </Link>

      {/* Floating glassmorphic tooltip (desktop only) */}
      <AnimatePresence>
        {showPara && (
          <motion.div
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              type: 'spring', 
              stiffness: 350, 
              damping: 25,
              opacity: { duration: 0.2 }
            }}
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 hidden md:block"
            role="tooltip"
            aria-hidden="true"
          >
            <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-xl shadow-2xl px-5 py-3 min-w-[200px] max-w-[280px]">
              <p className="text-sm lg:text-base text-white/95 leading-relaxed">
                {service.para}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default ServiceCard;