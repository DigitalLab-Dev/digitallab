// 'use client';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { 
//   FaChevronLeft, 
//   FaChevronRight, 
//   FaQuoteLeft,
//   FaStar,
//   FaYoutube
// } from 'react-icons/fa';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       youtubeId: 'ChJAhQe-kew', // Replace with your actual YouTube Shorts ID
//       clientName: 'Emerson Gill',
//       company: 'Emesta Official',
//       rating: 5,
//       quote: 'Businesses are growing fast because of their smart marketing strategies.',
//     },
//     {
//       youtubeId: 'XUAJM5ZxO0E', // Replace with your actual YouTube Shorts ID
//       clientName: 'Muhammad Sufiyan',
//       company: 'Agency',
//       rating: 5,
//       quote: 'They are very professional and skilled in their work.',
//     },
//     {
//       youtubeId: 'd1UdWkDMWpw', // Replace with your actual YouTube Shorts ID
//       clientName: 'Muhammad Haseeb',
//       company: 'Agency',
//       rating: 5,
//       quote: 'They exactly know what to do and their suggestions are always on point.',
//     },
//     {
//       youtubeId: '4vHPK-HxrfA', // Replace with your actual YouTube Shorts ID
//       clientName: 'Mando Hernandez',
//       company: 'Invetor Deli Podcast',
//       rating: 5,
//       quote: 'I had a vision, they saw, they executed.',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });
//   const autoPlayRef = useRef(null);

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying) {
//       autoPlayRef.current = setInterval(() => {
//         goToNext();
//       }, 5000);
//     }
//     return () => {
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     };
//   }, [isAutoPlaying, currentIndex]);

//   const goToNext = useCallback(() => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   }, [testimonials.length]);

//   const goToPrevious = useCallback(() => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   }, [testimonials.length]);

//   const handleDotClick = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//     setIsAutoPlaying(false);
//   };

//   const handleMouseEnter = () => setIsAutoPlaying(false);
//   const handleMouseLeave = () => setIsAutoPlaying(true);

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.9,
//       rotateY: direction > 0 ? 45 : -45,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       rotateY: 0,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.9,
//       rotateY: direction < 0 ? 45 : -45,
//     }),
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section
//       ref={containerRef}
//       className="py-16  px-4 sm:px-8 lg:px-10 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden"
//       aria-labelledby="testimonials-heading"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.03, 0.08, 0.03],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.02, 0.06, 0.02],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
//           className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl"
//         />
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? 'visible' : 'hidden'}
//         className="max-w-7xl w-full relative z-10"
//       >
//         {/* Header */}
//         <motion.header variants={itemVariants} className="text-center mb-12 lg:mb-16">
//           <motion.span
//             className="text-xs md:text-sm font-semibold text-orange-400 uppercase tracking-[0.3em] block mb-4"
//             variants={itemVariants}
//           >
//             Testimonials
//           </motion.span>
//           <motion.h2
//             id="testimonials-heading"
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-white mb-4 leading-tight"
//             variants={itemVariants}
//           >
//             The Way Clients{' '}
//             <span className="text-orange-400 block mt-2">Value Our Work</span>
//           </motion.h2>
//           <motion.p
//             variants={itemVariants}
//             className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto"
//           >
//             Real stories from real clients who achieved extraordinary results
//           </motion.p>
//         </motion.header>

//         {/* Main Testimonial Slider */}
//         <motion.div
//           variants={itemVariants}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           className="relative w-full max-w-6xl mx-auto"
//         >
//           {/* Video and Info Grid */}
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
//             {/* Video Container */}
//             <div className="relative h-[450px]  rounded-2xl overflow-hidden shadow-2xl">
//               <AnimatePresence mode="wait" custom={direction}>
//                 <motion.div
//                   key={currentIndex}
//                   custom={direction}
//                   variants={slideVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{
//                     x: { type: 'spring', stiffness: 300, damping: 30 },
//                     opacity: { duration: 0.4 },
//                     scale: { duration: 0.4 },
//                     rotateY: { duration: 0.6 },
//                   }}
//                   className="absolute inset-0"
//                   style={{ perspective: 1000 }}
//                 >
//                   {/* YouTube Shorts Iframe */}
//                   <iframe
//                     src={`https://www.youtube.com/embed/${testimonials[currentIndex].youtubeId}?autoplay=0&mute=0&controls=1&loop=1&playlist=${testimonials[currentIndex].youtubeId}`}
//                     title={`Testimonial from ${testimonials[currentIndex].clientName}`}
//                     className="w-full h-full rounded-2xl"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     loading="lazy"
//                   />
                  
//                   {/* YouTube Badge */}
//                   <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg">
//                     <FaYoutube className="text-xl" />
//                     <span className="text-sm font-semibold">Reviews</span>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Navigation Buttons */}
//               <button
//                 onClick={goToPrevious}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500/40 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-orange-500/50 group"
//                 aria-label="Previous testimonial"
//               >
//                 <FaChevronLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
//               </button>
//               <button
//                 onClick={goToNext}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500/40 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-orange-500/50 group"
//                 aria-label="Next testimonial"
//               >
//                 <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </div>

//             {/* Client Info Card */}
//             <AnimatePresence mode="wait">
//               <motion.article
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-xl border border-white/10 shadow-2xl"
//               >
//                 {/* Quote Icon */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={{ scale: 1, rotate: 0 }}
//                   transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
//                   className="absolute -top-6 -left-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
//                   aria-hidden="true"
//                 >
//                   <FaQuoteLeft className="text-2xl text-white" />
//                 </motion.div>



//                 {/* Quote */}
//                 <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
//                   "{testimonials[currentIndex].quote}"
//                 </blockquote>

//                 {/* Client Info */}
//                 <div className="border-t border-white/20 pt-6">
//                   <h3 className="text-2xl font-bold text-white mb-2">
//                     {testimonials[currentIndex].clientName}
//                   </h3>
//                   <p className="text-lg text-orange-400 font-semibold">
//                     {testimonials[currentIndex].company}
//                   </p>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute bottom-4 right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" aria-hidden="true" />
//               </motion.article>
//             </AnimatePresence>
//           </div>

//           {/* Thumbnail Navigation */}
   
//         </motion.div>
//       </motion.div>


//     </section>
//   );
// };

// export default Testimonials;


'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaQuoteLeft,
  FaStar,
  FaYoutube
} from 'react-icons/fa';

const Testimonials = () => {
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
      company: 'Invetor Deli Podcast',
      rating: 5,
      quote: 'I had a vision, they saw, they executed.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(new Set([0])); // Preload first video
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const autoPlayRef = useRef(null);

  // Preload adjacent videos
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    
    setLoadedVideos(prev => new Set([...prev, currentIndex, nextIndex, prevIndex]));
  }, [currentIndex, testimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-16 px-4 sm:px-8 lg:px-10 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl w-full relative z-10"
      >
        {/* Header */}
        <motion.header variants={itemVariants} className="text-center mb-12 lg:mb-16">
          <motion.span
            className="text-xs md:text-sm font-semibold text-orange-400 uppercase tracking-[0.3em] block mb-4"
            variants={itemVariants}
          >
            Testimonials
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            The Way Clients{' '}
            <span className="text-orange-400 block mt-2">Value Our Work</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Real stories from real clients who achieved extraordinary results
          </motion.p>
        </motion.header>

        {/* Main Testimonial Slider */}
        <motion.div
          variants={itemVariants}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-6xl mx-auto"
        >
          {/* Video and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
            {/* Video Container */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  {/* YouTube Shorts Iframe - Optimized */}
                  <iframe
                    src={`https://www.youtube.com/embed/${testimonials[currentIndex].youtubeId}?autoplay=0&mute=0&controls=1&loop=1&playlist=${testimonials[currentIndex].youtubeId}&rel=0&modestbranding=1&playsinline=1`}
                    title={`Testimonial from ${testimonials[currentIndex].clientName}`}
                    className="w-full h-full rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="eager"
                    style={{ border: 'none' }}
                  />
                  
                  {/* YouTube Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg z-10">
                    <FaYoutube className="text-xl" />
                    <span className="text-sm font-semibold">Reviews</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Preload adjacent videos (hidden) */}
              {testimonials.map((testimonial, index) => {
                if (loadedVideos.has(index) && index !== currentIndex) {
                  return (
                    <div key={index} className="hidden">
                      <link
                        rel="preload"
                        as="fetch"
                        href={`https://www.youtube.com/embed/${testimonial.youtubeId}`}
                        crossOrigin="anonymous"
                      />
                    </div>
                  );
                }
                return null;
              })}

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500/40 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-orange-500/50 group"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500/40 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-orange-500/50 group"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Client Info Card */}
            <AnimatePresence mode="wait">
              <motion.article
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="absolute -top-6 -left-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  aria-hidden="true"
                >
                  <FaQuoteLeft className="text-2xl text-white" />
                </motion.div>

                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {testimonials[currentIndex].clientName}
                  </h3>
                  <p className="text-lg text-orange-400 font-semibold">
                    {testimonials[currentIndex].company}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" aria-hidden="true" />
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;