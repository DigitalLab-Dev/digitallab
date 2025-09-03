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
import Image from 'next/image';

const ServiceCard = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // show/hide the floating para
  const [showPara, setShowPara] = useState(false);

  // State for image animation
  const [isHovered, setIsHovered] = useState(false);

  // follow-cursor motion values (smoothed with springs)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 30, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.25 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setShowPara(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setShowPara(false);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative flex items-center justify-between py-5 border-b border-orange-400 group"
    >
      <div className="flex flex-col">
        <h4 className="text-4xl sm:text-5xl uppercase text-neutral-200 group-hover:scale-75 font-bold transition-colors group-hover:text-neutral-500 mb-4">
          {service.heading}
        </h4>
      </div>

      {/* Right action button */}
      <Link
        href={service.link}
        className="sm:w-20 sm:h-20 w-10 h-10 rounded-full bg-neutral-500 hover:bg-orange-500 flex items-center justify-center transition-colors flex-shrink-0"
      >
        <MdArrowForward className="text-3xl text-white" />
      </Link>

      {/* Floating glassmorphic paragraph that follows the cursor */}
      <AnimatePresence>
        {showPara && (
          <motion.div
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 25 }}
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl px-4 py-2">
              <p className="text-base md:text-lg text-white/90 whitespace-pre-line max-w-[15rem]">
                {service.para}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
