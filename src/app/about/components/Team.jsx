'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(0);

  // Fetch team members from backend
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://digitallab-server.vercel.app';
        const apiUrl = `${backendUrl}/api/team`;
        
        console.log('Fetching team from:', apiUrl);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const res = await fetch(apiUrl, {
          signal: controller.signal,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          mode: 'cors',
        });
        
        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new Error(`Failed to fetch team members: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log('Team data received:', data);
        
        // Handle different response structures
        let members = [];
        if (Array.isArray(data)) {
          members = data;
        } else if (data && Array.isArray(data.data)) {
          members = data.data;
        } else if (data && Array.isArray(data.members)) {
          members = data.members;
        } else if (data && typeof data === 'object') {
          // If single object, wrap in array
          members = [data];
        }

        if (members.length === 0) {
          throw new Error('No team members found in the response');
        }

        setTeamMembers(members);
      } catch (err) {
        console.error('Error fetching team:', err);
        
        // Provide more helpful error messages
        let errorMessage = err.message;
        if (err.name === 'AbortError') {
          errorMessage = 'Request timeout - Please check your internet connection';
        } else if (err.message.includes('Failed to fetch')) {
          errorMessage = 'CORS Error: Unable to connect to the server. Please ensure the backend allows requests from your domain.';
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (teamMembers.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, teamMembers.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const particleVariants = (delay, duration) => ({
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  const circleVariants = (duration, delay) => ({
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  // Loading state
  if (loading) {
    return (
      <section 
        className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
        aria-live="polite"
        aria-busy="true"
      >
        {/* Background Effects */}
        <div className="absolute inset-0" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={particleVariants(Math.random() * 2, 2 + Math.random() * 2)}
              animate="animate"
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          <motion.div
            className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <p className="text-gray-400 text-lg">Loading team members...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section 
        className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
        role="alert"
        aria-live="assertive"
      >
        {/* Background Effects */}
        <div className="absolute inset-0" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={particleVariants(Math.random() * 2, 2 + Math.random() * 2)}
              animate="animate"
            />
          ))}
        </div>

        <motion.div 
          className="text-center max-w-2xl px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-black/80 border-2 border-orange-500 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-orange-500 text-2xl font-bold mb-4">Unable to Load Team</h2>
            <p className="text-gray-300 mb-6">{error}</p>
            <motion.button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
          </div>
        </motion.div>
      </section>
    );
  }

  // No team members
  if (teamMembers.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-gray-400 text-xl">No team members available.</p>
      </section>
    );
  }

  const currentMember = teamMembers[currentIndex];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-black relative overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants(Math.random() * 3, 3 + Math.random() * 3)}
            animate="animate"
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          variants={circleVariants(8, 0)}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"
          variants={circleVariants(10, 2)}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"
          variants={circleVariants(12, 4)}
          animate="animate"
        />

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
            style={{
              width: '40%',
              left: `${Math.random() * 60}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="team-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-orange-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Team Member Card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-black/60 backdrop-blur-md rounded-3xl p-6 md:p-12 border-2 border-orange-500/30 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Image Section */}
                <motion.figure 
                  className="relative flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-orange-500/50">
                      <motion.img
                        src={currentMember.image}
                        alt={`Portrait of ${currentMember.name}`}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentMember.name)}&size=400&background=ff6600&color=fff&bold=true`;
                        }}
                      />
                    </div>
                    
                    {/* Floating accents */}
                    <motion.div 
                      className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full"
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      aria-hidden="true"
                    />
                    <motion.div 
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full"
                      animate={{ 
                        y: [0, 10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </motion.figure>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {currentMember.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-orange-500 text-xl md:text-2xl font-semibold mb-6 uppercase tracking-wide"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {currentMember.designation}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {currentMember.description}
                  </motion.p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {teamMembers.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-4 pointer-events-none">
              <motion.button
                onClick={handlePrev}
                className="pointer-events-auto bg-black/80 backdrop-blur-sm text-white p-3 md:p-4 rounded-full border-2 border-orange-500/50 hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous team member"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </motion.button>

              <motion.button
                onClick={handleNext}
                className="pointer-events-auto bg-black/80 backdrop-blur-sm text-white p-3 md:p-4 rounded-full border-2 border-orange-500/50 hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next team member"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;