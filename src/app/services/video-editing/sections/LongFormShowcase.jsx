"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Film } from "lucide-react";

export default function LongFormShowcase() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const backendUrl =
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
        const response = await fetch(`${backendUrl}/api/long-videos`);

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();
        if (data.success) {
          setVideos(data.videos);
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black mb-10 px-6 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </div>

        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
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
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
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
                  ease: "easeInOut",
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
            Cinematic storytelling that keeps audiences engaged from beginning
            to end
          </motion.p>
        </motion.div>

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
          /* Grid of videos */
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {videos.map((video, index) => (
              <motion.article
                key={video._id || index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.8,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                onMouseEnter={() => setHoveredVideo(video._id)}
                onMouseLeave={() => setHoveredVideo(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-br from-orange-500/40 to-orange-600/40 rounded-2xl opacity-0 blur-xl"
                  animate={
                    hoveredVideo === video._id ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />

                {/* Video container */}
                <motion.div
                  className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900"
                  whileHover={
                    playingVideoId !== video._id ? { scale: 1.05 } : {}
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {playingVideoId === video._id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setPlayingVideoId(video._id)}
                    >
                      {/* YouTube Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
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
                          hoveredVideo === video._id
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
                          {video.title}
                        </h3>
                      </div>

                      {/* Corner accents */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={
                          hoveredVideo === video._id
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-orange-500" />
                        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-orange-500" />
                        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-orange-500" />
                        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-orange-500" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
