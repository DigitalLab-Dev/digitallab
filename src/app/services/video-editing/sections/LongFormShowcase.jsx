"use client"
import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Play, Clock, Eye, TrendingUp, Youtube, Film } from 'lucide-react';

export default function LongFormShowcase() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
      title: "The Future of AI Technology",
      duration: "24:15",
      views: "1.2M",
      platform: "YouTube"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      title: "Behind The Scenes: Film Production",
      duration: "18:42",
      views: "856K",
      platform: "YouTube"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
      title: "Travel Vlog: Exploring Iceland",
      duration: "32:08",
      views: "2.4M",
      platform: "YouTube"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&q=80",
      title: "Product Launch Event Coverage",
      duration: "15:30",
      views: "945K",
      platform: "Documentary"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
      title: "Corporate Brand Story",
      duration: "12:45",
      views: "678K",
      platform: "Commercial"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
      title: "Cinematic Short Film",
      duration: "21:16",
      views: "1.8M",
      platform: "Film"
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-10 px-6 overflow-hidden">
      {/* SEO */}
      <div className="sr-only">
        <h2>Long Form Video Content Portfolio - YouTube Videos, Documentaries, Brand Stories</h2>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Moving gradient */}
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </motion.div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8 backdrop-blur-sm"
          >
            <Film className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Long Form Excellence
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none"
            >
              STORIES THAT
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none"
            >
              <span className="relative inline-block">
                <motion.span 
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 blur-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  CAPTIVATE
                </motion.span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                  CAPTIVATE
                </span>
              </span>
            </motion.h3>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl"
          >
            Cinematic storytelling that keeps audiences engaged from beginning to end
          </motion.p>
        </motion.div>

        {/* Featured Video - Large */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          onMouseEnter={() => setHoveredVideo(videos[0].id)}
          onMouseLeave={() => setHoveredVideo(null)}
          onClick={() => setSelectedVideo(videos[0])}
          className="group relative mb-12 cursor-pointer"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-3xl opacity-0 blur-2xl"
            animate={hoveredVideo === videos[0].id ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Video container */}
          <motion.div
            className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img 
              src={videos[0].thumbnail} 
              alt={videos[0].title}
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Play button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={hoveredVideo === videos[0].id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/50"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-10 h-10 text-white fill-white ml-2" />
              </motion.div>
            </motion.div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={hoveredVideo === videos[0].id ? { y: 0, opacity: 1 } : { y: 20, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-orange-500 text-white text-sm font-bold rounded-full">
                    FEATURED
                  </span>
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{videos[0].duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-semibold">{videos[0].views}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">
                  {videos[0].title}
                </h3>
              </motion.div>
            </div>

            {/* Corner accents */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={hoveredVideo === videos[0].id ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-orange-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-orange-500" />
            </motion.div>

            {/* Scan line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-orange-500/10 to-orange-500/0"
              animate={hoveredVideo === videos[0].id ? { y: ['-100%', '200%'] } : {}}
              transition={{ duration: 2, repeat: hoveredVideo === videos[0].id ? Infinity : 0 }}
            />
          </motion.div>
        </motion.article>

        {/* Grid of videos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.slice(1).map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 1.4 + index * 0.15,
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setSelectedVideo(video)}
              className="group relative cursor-pointer"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 blur-xl"
                animate={hoveredVideo === video.id ? { opacity: 0.5 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Video container */}
              <motion.div
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Play button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={hoveredVideo === video.id ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </motion.div>
                </motion.div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="px-2 py-1 bg-orange-500/80 backdrop-blur-sm text-white font-bold rounded">
                      {video.platform}
                    </span>
                    <div className="flex items-center gap-1 text-white">
                      <Clock className="w-3 h-3" />
                      <span className="font-semibold">{video.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <Eye className="w-3 h-3" />
                      <span className="font-semibold">{video.views}</span>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm line-clamp-2">
                    {video.title}
                  </h4>
                </div>

                {/* Corner accents */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredVideo === video.id ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-orange-500" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-transparent border-2 border-orange-500 text-white font-bold text-lg rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <Youtube className="w-5 h-5" />
              Watch More Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl w-full aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedVideo.thumbnail} 
              alt={selectedVideo.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors text-xl"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedVideo.title}</h3>
              <div className="flex items-center gap-4 text-white">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {selectedVideo.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  {selectedVideo.views}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}