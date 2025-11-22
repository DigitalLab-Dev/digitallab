// 'use client';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { 
//   FaChevronLeft, 
//   FaChevronRight, 
//   FaQuoteLeft,
//   FaStar,
//   FaYoutube,
//   FaPlay
// } from 'react-icons/fa';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       youtubeId: 'ChJAhQe-kew',
//       clientName: 'Emerson Gill',
//       company: 'Emesta Official',
//       rating: 5,
//       quote: 'Businesses are growing fast because of their smart marketing strategies.',
//     },
//     {
//       youtubeId: 'XUAJM5ZxO0E',
//       clientName: 'Muhammad Sufiyan',
//       company: 'Agency',
//       rating: 5,
//       quote: 'They are very professional and skilled in their work.',
//     },
//     {
//       youtubeId: 'd1UdWkDMWpw',
//       clientName: 'Muhammad Haseeb',
//       company: 'Agency',
//       rating: 5,
//       quote: 'They exactly know what to do and their suggestions are always on point.',
//     },
//     {
//       youtubeId: '4vHPK-HxrfA',
//       clientName: 'Mando Hernandez',
//       company: 'Invetor Deli Podcast',
//       rating: 5,
//       quote: 'I had a vision, they saw, they executed.',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [activeVideo, setActiveVideo] = useState(null);
  
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });
//   const autoPlayRef = useRef(null);

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying && !activeVideo) {
//       autoPlayRef.current = setInterval(() => {
//         goToNext();
//       }, 6000);
//     }
//     return () => {
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     };
//   }, [isAutoPlaying, currentIndex, activeVideo]);

//   const goToNext = useCallback(() => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     setActiveVideo(null);
//   }, [testimonials.length]);

//   const goToPrevious = useCallback(() => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     setActiveVideo(null);
//   }, [testimonials.length]);

//   const handleDotClick = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//     setIsAutoPlaying(false);
//     setActiveVideo(null);
//   };

//   const handlePlayVideo = () => {
//     setActiveVideo(currentIndex);
//     setIsAutoPlaying(false);
//   };

//   const handleMouseEnter = () => setIsAutoPlaying(false);
//   const handleMouseLeave = () => {
//     if (!activeVideo) setIsAutoPlaying(true);
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0,
//     }),
//   };

//   return (
//     <section
//       ref={containerRef}
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
//       aria-labelledby="testimonials-heading"
//     >
//       {/* Modern gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5" />
      
//       {/* Animated grid pattern */}
//       <div className="absolute inset-0 opacity-[0.02]" 
//         style={{
//           backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.5) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(251, 146, 60, 0.5) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-block mb-4"
//           >
//             <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider">
//               Client Testimonials
//             </span>
//           </motion.div>
          
//           <h2
//             id="testimonials-heading"
//             className="text-4xl sm:text-5xl  font-bold text-white mb-6"
//           >
//             How Our Clients{" "}
//             <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
//               Value Our Work
//             </span>
//           </h2>
          
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Don't just take our word for it - hear directly from our satisfied clients
//           </p>
//         </motion.div>

//         {/* Main Carousel Container */}
//         <div
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           className="relative"
//         >
//           <div className="flex flex-col lg:flex-row gap-8  justify-center items-center">
//             {/* Video Section - Left Side */}
//             <div className="w-full lg:w-1/2   relative">
//               <div className="relative aspect-[12/16]   max-h-[500px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl  mx-auto">
//                 <AnimatePresence mode="wait" custom={direction}>
//                   <motion.div
//                     key={currentIndex}
//                     custom={direction}
//                     variants={slideVariants}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                     transition={{
//                       duration: 0.5,
//                       ease: [0.25, 0.46, 0.45, 0.94]
//                     }}
//                     className="absolute inset-0"
//                   >
//                     {activeVideo === currentIndex ? (
//                       <iframe
//                         src={`https://www.youtube.com/embed/${testimonials[currentIndex].youtubeId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
//                         title={`Testimonial from ${testimonials[currentIndex].clientName}`}
//                         className="w-full h-full"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowFullScreen
//                         style={{ border: 'none' }}
//                       />
//                     ) : (
//                       <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayVideo}>
//                         {/* YouTube Thumbnail */}
//                         <img
//                           src={`https://img.youtube.com/vi/${testimonials[currentIndex].youtubeId}/maxresdefault.jpg`}
//                           alt={`${testimonials[currentIndex].clientName} testimonial`}
//                           className="w-full h-full object-cover"
//                           loading="lazy"
//                         />
                        
//                         {/* Dark overlay */}
//                         <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                        
//                         {/* Play button */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <motion.div
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-orange-600 transition-colors duration-300"
//                           >
//                             <FaPlay className="text-white text-2xl ml-1" />
//                           </motion.div>
//                         </div>

//                         {/* YouTube Badge */}
//                         <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
//                           <FaYoutube className="text-xl" />
//                           <span className="text-sm font-semibold">YouTube</span>
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Navigation Arrows */}
//                 <button
//                   onClick={goToPrevious}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   aria-label="Previous testimonial"
//                 >
//                   <FaChevronLeft />
//                 </button>
//                 <button
//                   onClick={goToNext}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   aria-label="Next testimonial"
//                 >
//                   <FaChevronRight />
//                 </button>
//               </div>
//             </div>

//             {/* Content Section - Right Side */}
//             <div className="w-full lg:w-1/2">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentIndex}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5 }}
//                   className="space-y-8"
//                 >
//                   {/* Rating Stars */}
//                   <div className="flex gap-2">
//                     {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: i * 0.1 }}
//                       >
//                         <FaStar className="text-orange-400 text-2xl" />
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Quote */}
//                   <div className="relative">
//                     <FaQuoteLeft className="text-5xl text-orange-500/20 absolute -top-4 -left-2" />
//                     <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight pl-8">
//                       {testimonials[currentIndex].quote}
//                     </blockquote>
//                   </div>

//                   {/* Client Info */}
//                   <div className="pt-6 border-t border-white/10">
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {testimonials[currentIndex].clientName}
//                     </h3>
//                     <p className="text-lg text-orange-400 font-medium">
//                       {testimonials[currentIndex].company}
//                     </p>
//                   </div>

//                   {/* Dot Navigation */}
//                   <div className="flex gap-3 pt-4">
//                     {testimonials.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleDotClick(index)}
//                         className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black ${
//                           index === currentIndex
//                             ? 'w-12 bg-orange-500'
//                             : 'w-2 bg-white/20 hover:bg-white/40'
//                         }`}
//                         aria-label={`Go to testimonial ${index + 1}`}
//                         aria-current={index === currentIndex}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
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
  FaYoutube,
  FaPlay
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
    company: 'Invetor Deli Podcast',
    rating: 5,
    quote: 'I had a vision, they saw, they executed.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const autoPlayRef = useRef(null);

  // FIX 2: Optimized Auto-play - removed currentIndex from dependencies
  useEffect(() => {
    if (isAutoPlaying && !activeVideo) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        // Use updater function to avoid dependency on currentIndex
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setActiveVideo(null);
      }, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, activeVideo]); // Removed currentIndex

  // FIX 1: Now useCallback works properly with stable testimonials.length
  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setActiveVideo(null);
  }, []); // Empty array now works correctly

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setActiveVideo(null);
  }, []); // Empty array now works correctly

  const handleDotClick = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setActiveVideo(null);
  }, [currentIndex]);

  const handlePlayVideo = useCallback(() => {
    setActiveVideo(currentIndex);
    setIsAutoPlaying(false);
  }, [currentIndex]);

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => {
    if (!activeVideo) setIsAutoPlaying(true);
  }, [activeVideo]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {/* Video Section - Left Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[12/16] max-h-[500px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl mx-auto">
                {/* FIX 3: Removed mode="wait" for faster loading */}
                <AnimatePresence custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="absolute inset-0"
                  >
                    {activeVideo === currentIndex ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${testimonials[currentIndex].youtubeId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                        title={`Testimonial from ${testimonials[currentIndex].clientName}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ border: 'none' }}
                      />
                    ) : (
                      <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayVideo}>
                        {/* FIX 4: Use hqdefault instead of maxresdefault for faster loading */}
                        <img
                          src={`https://img.youtube.com/vi/${testimonials[currentIndex].youtubeId}/hqdefault.jpg`}
                          alt={`${testimonials[currentIndex].clientName} testimonial`}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                        
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-orange-600 transition-colors duration-300"
                          >
                            <FaPlay className="text-white text-2xl ml-1" />
                          </motion.div>
                        </div>

                        {/* YouTube Badge */}
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                          <FaYoutube className="text-xl" />
                          <span className="text-sm font-semibold">YouTube</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
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