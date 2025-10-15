'use client';
import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Play, Sparkles, TrendingUp } from 'lucide-react';

export default function ShowcasePortfolio() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const videos = [
    { id: 1, ytId: 'E4MN690kGYk' },
    { id: 2, ytId: 'X3ZONuspih8' },
    { id: 3, ytId: 'Mm9WRmFAqFU' },
    { id: 4, ytId: 'lw4u3imx_QI' },
    { id: 5, ytId: 'S4_g9Kvt_og' },
    { id: 6, ytId: 'XQFYN8rc_JI' },
    { id: 7, ytId: 'vrZEqsHbHpE' },
    { id: 8, ytId: 'g9NdYpAmzmk' },
    { id: 9, ytId: 'wvQ2HmeJaqA' },
    { id: 10, ytId: 'UFaQ-GGw4Rc' },
  ];

  return (
    <section
      id="short-form"
      ref={sectionRef}
      className="relative min-h-screen bg-black  px-6 overflow-hidden"
    >
      {/* Hidden heading for accessibility */}
      <h3 className="sr-only">
        Short Form Video Content Portfolio - Viral Instagram Reels, TikTok &
        YouTube Shorts
      </h3>

      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1.5, 1, 1.5],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        style={{ opacity, scale }}
      >
        {/* Header */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8 backdrop-blur-sm"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
              </motion.div>
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Viral Content
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="w-4 h-4 text-orange-500" />
              </motion.div>
            </motion.div>

            {/* Main heading with reveal animation */}
            <div className="overflow-hidden mb-6">
              <motion.h4
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none"
              >
                SHORT FORM
              </motion.h4>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h5
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.6,
                  duration: 1,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 blur-lg">
                    DOMINATION
                  </span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                    DOMINATION
                  </span>
                </span>
              </motion.h5>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto"
            >
              Scroll-stopping content that racks up millions of views
            </motion.p>
          </motion.div>
        </header>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3  gap-6"
        >
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: 1.2 + index * 0.1,
                duration: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setSelectedVideo(video)}
              className="group relative aspect-[9/16] cursor-pointer"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 blur-lg"
                animate={
                  hoveredVideo === video.id ? { opacity: 0.6 } : { opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              />

              {/* Video container */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* YouTube iframe */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.ytId}?autoplay=${
                    hoveredVideo === video.id ? 1 : 0
                  }&mute=1&controls=0&loop=1&playlist=${
                    video.ytId
                  }&modestbranding=1&rel=0`}
                  title={`Short video ${index + 1}`}
                  allow="autoplay; encrypted-media"
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Play button overlay when not hovering */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 1 }}
                  animate={
                    hoveredVideo === video.id ? { opacity: 0 } : { opacity: 1 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </motion.div>

                {/* Corner accents */}
                <motion.div
                  className="pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredVideo === video.id ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-orange-500" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                </motion.div>
              </motion.div>

              {/* Floating number badge */}
              <motion.div
                className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/50"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  delay: 1.2 + index * 0.1 + 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                {index + 1}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              View Full Portfolio
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Modal for video playback */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Video player modal"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full screen YouTube player with controls */}
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.ytId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
              title="Video player"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors z-10"
              aria-label="Close video player"
            >
              <span className="text-xl leading-none">✕</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
