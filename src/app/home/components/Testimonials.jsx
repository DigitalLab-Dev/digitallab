import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const videos = [
    '/videos/testimonial-1.mp4',
    '/videos/testimonial-2.mp4',
    '/videos/testimonial-3.mp4',
    '/videos/testimonial-4.mp4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  const [direction, setDirection] = useState(1);

  const videoRefs = useRef([]);
  const autoPlayRef = useRef();

  // Preload adjacent videos for smooth transitions
  const preloadVideo = useCallback(
    (index) => {
      if (videoRefs.current[index] && !loadedVideos.has(index)) {
        const video = videoRefs.current[index];
        video.load();
        setLoadedVideos((prev) => {
          const newSet = new Set(prev);
          newSet.add(index);
          return newSet;
        });
      }
    },
    [loadedVideos]
  );

  // Navigate to next/previous video
  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % videos.length;
      preloadVideo(nextIndex);
      return nextIndex;
    });
  }, [videos.length, preloadVideo]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + videos.length) % videos.length;
      preloadVideo(prevIndex);
      return prevIndex;
    });
  }, [videos.length, preloadVideo]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isPlaying) {
      autoPlayRef.current = setInterval(goToNext, 4000);
    } else {
      clearInterval(autoPlayRef.current);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, isPlaying, goToNext]);

  // Preload current and adjacent videos
  useEffect(() => {
    preloadVideo(currentIndex);
    preloadVideo((currentIndex + 1) % videos.length);
    preloadVideo((currentIndex - 1 + videos.length) % videos.length);
  }, [currentIndex, preloadVideo, videos.length]);

  // Handle video play/pause
  const togglePlay = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
        setIsPlaying(false);
      } else {
        currentVideo.play();
        setIsPlaying(true);
      }
    }
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (isAutoPlay) {
      goToNext();
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
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
      scale: 0.8,
    }),
  };

  const thumbnailVariants = {
    inactive: {
      scale: 0.8,
      opacity: 0.6,
    },
    active: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section className="py-15 px-4 sm:px-10 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <header className="text-center mb-12">
        <h2 className="text-xl text-orange-500 mb-4">TESTIMONIALS</h2>
        <h3 className="text-3xl sm:text-5xl font-bold text-white mb-8">
          WHAT OUR CLIENTS SAY ABOUT US
        </h3>
      </header>

      {/* Main Carousel Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Video Container */}
        <div className="relative h-[300px] sm:h-[500px] mb-8 overflow-hidden rounded-2xl shadow-2xl">
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
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                ref={(el) => (videoRefs.current[currentIndex] = el)}
                className="w-full h-full object-cover rounded-2xl"
                muted
                playsInline
                preload="metadata"
                onEnded={handleVideoEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={videos[currentIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay with Controls */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center group rounded-2xl">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-black bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white border-opacity-50"
                >
                  {isPlaying ? (
                    <FaPause className="text-xl sm:text-2xl" />
                  ) : (
                    <FaPlay className="text-xl sm:text-2xl ml-1" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-400 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300 z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-400 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300 z-10"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
          {videos.map((video, index) => (
            <motion.button
              key={index}
              variants={thumbnailVariants}
              animate={index === currentIndex ? 'active' : 'inactive'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex(index)}
              className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 border-transparent focus:border-orange-500 transition-all duration-300"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                muted
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
              </video>
              {index === currentIndex && (
                <motion.div
                  layoutId="activeThumbnail"
                  className="absolute inset-0 border-2 border-orange-500 rounded-lg"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20" />
            </motion.button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
              isAutoPlay
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-transparent border-gray-500 text-gray-300 hover:border-orange-500 hover:text-orange-500'
            }`}
          >
            {isAutoPlay ? 'Auto ON' : 'Auto OFF'}
          </button>

          {/* Progress Indicators */}
          <div className="flex space-x-2">
            {videos.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
                }`}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Preload hidden videos for performance */}
      <div className="hidden">
        {videos.map((video, index) =>
          index !== currentIndex ? (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              preload="metadata"
              
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Testimonials;
