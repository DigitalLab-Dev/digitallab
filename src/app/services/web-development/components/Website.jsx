"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

const Website = ({ image, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for custom cursor
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isHovered]);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      filter: "brightness(0.7)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cursorVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Custom Cursor */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="fixed pointer-events-none z-50 mix-blend-difference"
            style={{
              left: mousePosition.x - 40,
              top: mousePosition.y - 40,
            }}
            variants={cursorVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30">
              <motion.span 
                className="text-white font-bold text-sm"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity 
                }}
              >
                VIEW
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Component */}
      <motion.div 
        className="w-full md:w-[45%] h-full group cursor-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Container with glow effect */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-orange-500/20 transition-shadow duration-500">
          {/* Glow border effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
            style={{ padding: '2px' }}
          >
            <div className="w-full h-full bg-black rounded-2xl"></div>
          </motion.div>

          {/* Image container */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src={image}
              width={400}
              height={400}
              className="w-full h-[80vh] rounded-2xl object-cover"
              alt="Website preview"
            />

            {/* Overlay gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              variants={overlayVariants}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
            />

            {/* Floating elements on hover */}
            <AnimatePresence>
              {isHovered && (
                <>
                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{ transformOrigin: 'left' }}
                  />

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 20}%`,
                      }}
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        y: 20 
                      }}
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [0, 1, 0.8],
                        y: [20, 0, -10]
                      }}
                      exit={{ 
                        opacity: 0,
                        scale: 0,
                        y: -20
                      }}
                      transition={{ 
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? { scale: 2, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        {/* Reflection effect */}
        <motion.div 
          className="absolute -bottom-20 left-0 right-0 h-20 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to bottom, rgba(251, 146, 60, 0.3), transparent)',
            transform: 'scaleY(-1)',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
      </motion.div>
    </>
  );
};

export default Website;