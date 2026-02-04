"use client";
import { useRef, useState, useEffect, memo, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Sparkles, TrendingUp, Volume2, VolumeX } from "lucide-react";

// Video card component - moved outside to prevent recreation on parent re-renders
const VideoCard = memo(({ video, index, isMobile, isInView, mutedStates, onToggleMute }) => {
  const cardRef = useRef(null);
  // Larger margin to preload videos before they're visible (aggressive preloading)
  const isCardInView = useInView(cardRef, { margin: "500px" });
  const iframeRef = useRef(null);

  // Only auto-play on desktop for first 5 videos when in view
  const shouldAutoPlay = !isMobile && index < 5 && isCardInView;

  // Handle play/pause based on scroll position
  useEffect(() => {
    if (iframeRef.current && !isMobile && index < 5) {
      const iframe = iframeRef.current;
      const message = isCardInView ? 'playVideo' : 'pauseVideo';
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: message, args: '' }),
        '*'
      );
    }
  }, [isCardInView, isMobile, index]);

  // Handle mute/unmute using YouTube iframe API
  const handleToggleMute = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (iframeRef.current) {
      const currentMutedState = mutedStates[index];
      const message = currentMutedState ? 'unMute' : 'mute';

      // Send command to YouTube iframe FIRST
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: message, args: '' }),
        '*'
      );

      // Then update state
      onToggleMute(index);
    }
  }, [index, mutedStates, onToggleMute]);

  return (
    <motion.article
      ref={cardRef}
      key={video._id || index}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: 1.2 + index * 0.1,
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
      className="group relative aspect-[9/16]"
    >
      {/* Video container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
        {/* YouTube iframe - static src with enablejsapi */}
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${video.videoId}?${shouldAutoPlay ? 'autoplay=1&' : ''
            }mute=1&controls=1&loop=1&playlist=${video.videoId
            }&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
          title={`Short video ${index + 1}`}
          allow={shouldAutoPlay ? "autoplay; encrypted-media" : "encrypted-media"}
          className="w-full h-full object-cover"
          loading={index < 10 ? "eager" : "lazy"}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* Unmute button */}
        <button
          onClick={handleToggleMute}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 z-10"
          aria-label={mutedStates[index] ? "Unmute video" : "Mute video"}
          type="button"
        >
          {mutedStates[index] ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {/* Corner accents - always visible */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-orange-500/50" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-orange-500/50" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-orange-500/50" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-orange-500/50" />
      </div>

      {/* Floating number badge */}
      <motion.div
        className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/50"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          delay: 1.2 + index * 0.1 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        {index + 1}
      </motion.div>
    </motion.article>
  );
});

VideoCard.displayName = 'VideoCard';

export default function ShowcasePortfolio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mutedStates, setMutedStates] = useState({});

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const backendUrl =
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
        const response = await fetch(`${backendUrl}/api/short-videos`);

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();
        if (data.success) {
          setVideos(data.videos);
          // Initialize all videos as muted
          const initialMutedStates = {};
          data.videos.forEach((_, index) => {
            initialMutedStates[index] = true;
          });
          setMutedStates(initialMutedStates);
        } else {
          throw new Error(data.message || "Failed to fetch videos");
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []); // Only run once on mount

  // Memoized toggle function to prevent recreation on every render
  const handleToggleMute = useCallback((index) => {
    setMutedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);

  return (
    <section
      id="short-form"
      ref={sectionRef}
      className="relative min-h-screen bg-black px-6 py-10 overflow-hidden"
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
            ease: "easeInOut",
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
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        style={{ opacity }}
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
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
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
                  ease: "easeInOut",
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
              {!isMobile && " · First 4 videos auto-play on desktop"}
            </motion.p>
          </motion.div>
        </header>

        {/* Content based on state */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-orange-500 text-xl">Loading videos...</div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center py-20">
            <div className="text-red-500 text-xl">Error: {error}</div>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Video Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {videos?.map((video, index) => (
                <VideoCard
                  key={video._id || index}
                  video={video}
                  index={index}
                  isMobile={isMobile}
                  isInView={isInView}
                  mutedStates={mutedStates}
                  onToggleMute={handleToggleMute}
                />
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
                className="group relative cursor-pointer px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <a target="_blank" href="https://drive.google.com/drive/folders/15MokUI_m7qu5Avwm2VTCMH6Y_ENT0ZoO" className="relative z-10 flex items-center gap-3">
                  View Full Portfolio
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.button>
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}
