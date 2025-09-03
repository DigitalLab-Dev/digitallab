import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const videos = [
    "/videos/testimonial-1.mp4",
    "/videos/testimonial-2.mp4",
    "/videos/testimonial-3.mp4",
    "/videos/testimonial-4.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  const [direction, setDirection] = useState(1);

  const mainVideoRefs = useRef([]); // main player refs
  const thumbVideoRefs = useRef([]); // thumbnail refs
  const containerRef = useRef();

  // Preload adjacent videos
  const preloadVideo = useCallback(
    (index) => {
      if (mainVideoRefs.current[index] && !loadedVideos.has(index)) {
        const video = mainVideoRefs.current[index];
        video.load();
        setLoadedVideos((prev) => new Set(prev).add(index));
      }
    },
    [loadedVideos]
  );

  const stopVideo = () => {
    const currentVideo = mainVideoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const goToNext = useCallback(() => {
    stopVideo();
    setDirection(1);
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % videos.length;
      preloadVideo(nextIndex);
      return nextIndex;
    });
  }, [videos.length, preloadVideo]);

  const goToPrevious = useCallback(() => {
    stopVideo();
    setDirection(-1);
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + videos.length) % videos.length;
      preloadVideo(prevIndex);
      return prevIndex;
    });
  }, [videos.length, preloadVideo]);

  useEffect(() => {
    preloadVideo(currentIndex);
    preloadVideo((currentIndex + 1) % videos.length);
    preloadVideo((currentIndex - 1 + videos.length) % videos.length);
  }, [currentIndex, preloadVideo, videos.length]);

  const handleMouseLeave = () => stopVideo();

  const togglePlay = () => {
    const currentVideo = mainVideoRefs.current[currentIndex];
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

  const handleVideoEnd = () => setIsPlaying(false);

  const handleThumbnailClick = (index) => {
    if (index !== currentIndex) {
      stopVideo();
      setCurrentIndex(index);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const thumbnailVariants = {
    inactive: { scale: 0.8, opacity: 0.6 },
    active: { scale: 1, opacity: 1 },
  };

  return (
    <section className="py-15 px-4 sm:px-10 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <header className="text-center mb-12">
        <h2 className="text-xl text-orange-500 mb-4">TESTIMONIALS</h2>
        <h3 className="text-3xl sm:text-5xl font-bold text-white mb-8">
          WHAT OUR CLIENTS SAY ABOUT US
        </h3>
      </header>

      <div
        ref={containerRef}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-4xl mx-auto"
      >
        {/* Main Video Container */}
        <div className="relative h-[250px] sm:h-[400px] mb-8 overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center bg-black">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <video
                ref={(el) => (mainVideoRefs.current[currentIndex] = el)}
                className="max-w-full max-h-full object-contain rounded-2xl"
                playsInline
                preload="metadata"
                onEnded={handleVideoEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={videos[currentIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Play/Pause */}
              <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center group rounded-2xl">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300 border-2 border-white border-opacity-50"
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

          {/* Navigation */}
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

        {/* Thumbnails */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
          {videos.map((video, index) => (
            <motion.button
              key={index}
              variants={thumbnailVariants}
              animate={index === currentIndex ? "active" : "inactive"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleThumbnailClick(index)}
              className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 border-transparent focus:border-orange-500 transition-all duration-300"
            >
              <video
                ref={(el) => (thumbVideoRefs.current[index] = el)}
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
              <div className="absolute inset-0 bg-opacity-20" />
            </motion.button>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center space-x-2">
          {videos.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-600"
              }`}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
