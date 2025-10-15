'use client';
import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Play, X, Film } from 'lucide-react';

export default function LongFormShowcase() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const videos = [
    { id: 1, ytLong: 'KvRWl2koK9U', Title: 'Documentary Talking Head' },
    { id: 2, ytLong: 'f-CkgeEB9QI', Title: 'Cashcow' },
    { id: 3, ytLong: '1yHGUXx_DXE', Title: 'Talking Head Health' },
    { id: 4, ytLong: 'Hya05rr6-7Y', Title: 'Documentary' },
    { id: 5, ytLong: 'unEKDg37vO8', Title: 'Documentary' },
    { id: 6, ytLong: '99DraSjkOa0', Title: 'Podcast' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black mb-10  px-6 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        <motion.div className="absolute inset-0" style={{ y }}>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8 backdrop-blur-sm"
          >
            <Film className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Long Form Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.4,
              duration: 1,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-4"
          >
            STORIES THAT
          </motion.h2>
          
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.6,
              duration: 1,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-8"
          >
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 blur-xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                CAPTIVATE
              </motion.span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                CAPTIVATE
              </span>
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            Cinematic storytelling that keeps audiences engaged from beginning to end
          </motion.p>
        </motion.div>

        {/* Grid of videos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 1.2 + index * 0.1,
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setSelectedVideo(video)}
              className="group relative cursor-pointer"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-orange-500/40 to-orange-600/40 rounded-2xl opacity-0 blur-xl"
                animate={
                  hoveredVideo === video.id ? { opacity: 1 } : { opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              />

              {/* Video container */}
              <motion.div
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${video.ytLong}/maxresdefault.jpg`}
                  alt={video.Title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Play button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    hoveredVideo === video.id
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.7, scale: 0.9 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/50"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg line-clamp-2">
                    {video.Title}
                  </h3>
                </div>

                {/* Corner accents */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredVideo === video.id ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-orange-500" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-orange-500" />
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl shadow-orange-500/20">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.ytLong}?autoplay=1&rel=0`}
                title={selectedVideo.Title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Title below video */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedVideo.Title}
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}