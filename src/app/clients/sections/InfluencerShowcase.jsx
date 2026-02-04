'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Tag, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import Image from 'next/image';

const InfluencerShowcase = () => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch influencers from API
  const fetchInfluencers = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}/api/influencers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch influencers: ${response.statusText}`);
      }

      const data = await response.json();
      setInfluencers(data);
    } catch (err) {
      console.error('Error fetching influencers:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfluencers();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Loading State
  if (loading) {
    return (
      <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-white/70 text-lg">Loading influencers...</p>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Failed to Load Influencers
          </h3>
          <p className="text-white/70 mb-6">{error}</p>
          <button
            onClick={fetchInfluencers}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            Retry
          </button>
        </div>
      </section>
    );
  }

  // Empty State
  if (influencers.length === 0) {
    return (
      <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center max-w-md">
          <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            No Influencers Yet
          </h3>
          <p className="text-white/70">
            Check back soon for our amazing influencer partners!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id='creators'
      className="min-h-screen  bg-black py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="influencer-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4" aria-hidden="true" />
            Our Influencer Partners
          </motion.div>

          <h3
            id="influencer-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Creative Minds
            </span>
            <br />
            <span className="text-white">We Collaborate With</span>
          </h3>

          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the talented creators who bring brands to life through authentic
            storytelling and engaging content across multiple platforms.
          </p>
        </motion.header>

        {/* Influencer List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {influencers.map((influencer, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={influencer._id}
                variants={itemVariants}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 lg:gap-16`}
              >
                {/* Image Section */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-md opacity-20"
                      aria-hidden="true"
                    />

                    {/* Image */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-orange-500/30">
                      <img
                        src={influencer.pic}
                        alt={`${influencer.name} - Influencer portrait`}
                        fill
                        sizes="(max-width: 768px) 256px, 320px"
                        className="object-cover"
                        loading="lazy"
                        quality={85}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div
                  className={`flex-1 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'
                    } max-w-2xl`}
                >
                  <motion.h2
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                  >
                    <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      {influencer.name}
                    </span>
                  </motion.h2>

                  {/* Keywords/Tags */}
                  {influencer.keywords && influencer.keywords.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'lg:justify-start' : 'lg:justify-end'
                        } justify-center`}
                    >
                      {influencer.keywords.map((keyword, idx) => (
                        <span
                          key={`${influencer._id}-keyword-${idx}`}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-sm font-medium"
                        >
                          <Tag className="w-3 h-3" aria-hidden="true" />
                          {keyword}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  <motion.p
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-white/80 text-lg md:text-xl leading-relaxed"
                  >
                    {influencer.desc}
                  </motion.p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerShowcase;