'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaQuoteLeft,
  FaStar,
  FaYoutube,
  FaPlay,
  FaVolumeUp,
  FaVolumeMute
} from 'react-icons/fa';

// FIX 1: Move testimonials array OUTSIDE component to prevent re-creation
const testimonials = [
  {
    youtubeId: 'ChJAhQe-kew',
    clientName: 'Emerson Gill',
    company: 'Emesta Official',
    rating: 5,
    quote: 'Businesses are growing fast because of their smart marketing strategies.',
  },
  {
    youtubeId: 'XUAJM5ZxO0E',
    clientName: 'Muhammad Sufiyan',
    company: 'Agency',
    rating: 5,
    quote: 'They are very professional and skilled in their work.',
  },
  {
    youtubeId: 'd1UdWkDMWpw',
    clientName: 'Muhammad Haseeb',
    company: 'Agency',
    rating: 5,
    quote: 'They exactly know what to do and their suggestions are always on point.',
  },
  {
    youtubeId: '4vHPK-HxrfA',
    clientName: 'Mando Hernandez',
    company: 'Investor Deli Podcast',
    rating: 5,
    quote: 'I had a vision, they saw, they executed.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleDotClick = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  // Switch to simple fade to reduce lag with iframes
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.95
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.95
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(251, 146, 60, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider">
              Client Testimonials
            </span>
          </motion.div>
          
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            How Our Clients{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Value Our Work
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear directly from our satisfied clients
          </p>
        </motion.div>

        {/* Main Carousel Container */}
        <div
          className="relative"
        >
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {/* Video Section - Left Side */}
            <div className="w-full lg:w-1/2 relative flex justify-center">
                {/* Reduced height constraint (max-h) and width. 
                    h-[450px] to ensure it's not too tall. 
                    w-auto to let aspect ratio define width. */}
              <div className="relative h-[400px] sm:h-[450px] aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl ring-1 ring-white/10">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                    style={{ willChange: 'opacity, transform' }} 
                  >
                     <iframe
                        src={`https://www.youtube.com/embed/${testimonials[currentIndex].youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&loop=1&playlist=${testimonials[currentIndex].youtubeId}`}
                        title={`Testimonial from ${testimonials[currentIndex].clientName}`}
                        className="w-full h-full pointer-events-none" // pointer-events-none so clicks go to our overlay
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ border: 'none' }}
                        loading="eager"
                      />
                      
                      {/* Interaction Overlay: Toggle Mute / Play */}
                      <div 
                        className="absolute inset-0 cursor-pointer group bg-transparent"
                        onClick={toggleMute}
                      >
                         {/* Mute/Unmute Icon Button */}
                         <button 
                            className="absolute bottom-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-orange-500 hover:scale-110 z-20"
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                         >
                            {isMuted ? <FaVolumeMute className="text-sm" /> : <FaVolumeUp className="text-sm" />}
                         </button>
                      </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Adjusted size */}
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >


                  {/* Quote */}
                  <div className="relative">
                    <FaQuoteLeft className="text-5xl text-orange-500/20 absolute -top-4 -left-2" />
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight pl-8">
                      {testimonials[currentIndex].quote}
                    </blockquote>
                  </div>

                  {/* Client Info */}
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonials[currentIndex].clientName}
                    </h3>
                    <p className="text-lg text-orange-400 font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>

                  {/* Dot Navigation */}
                  <div className="flex gap-3 pt-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black ${
                          index === currentIndex
                            ? 'w-12 bg-orange-500'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        aria-current={index === currentIndex}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;