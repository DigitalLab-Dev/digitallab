"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// Move data outside component
const clientLogos = [
  {
    id: 1, name: "TechCorp", imageUrl: "/logos/logo1.jpg",
    category: "Technology", year: "2023", projects: "15+"
  },
  {
    id: 2, name: "FinanceFlow", imageUrl: "/logos/logo2.png",
    category: "Finance", year: "2022", projects: "8+"
  },
  {
    id: 3, name: "HealthPlus", imageUrl: "/logos/logo3.png",
    category: "Healthcare", year: "2023", projects: "12+"
  },
  {
    id: 4, name: "RetailMax", imageUrl: "/logos/logo9.png",
    category: "Retail", year: "2021", projects: "20+"
  },
  {
    id: 5, name: "EduTech", imageUrl: "/logos/logo5.png",
    category: "Education", year: "2023", projects: "6+"
  },
  {
    id: 6, name: "GreenEnergy", imageUrl: "/logos/logo6.png",
    category: "Energy", year: "2022", projects: "10+"
  },
  {
    id: 7, name: "FoodieHub", imageUrl: "/logos/logo7.png",
    category: "Food & Beverage", year: "2023", projects: "14+"
  },
  {
    id: 8, name: "TravelWise", imageUrl: "/logos/logo8.jpg",
    category: "Travel", year: "2022", projects: "9+"
  },
  {
    id: 9, name: "MediaCo", imageUrl: "/logos/logo4.png",
    category: "Media", year: "2022", projects: "9+"
  }
];

// Separate logo component for better performance
const OrbitalLogo = React.memo(({ logo, index, totalLogos, rotation, isActive, onEnter, onLeave }) => {
  // Use useTransform to calculate position from rotation without re-rendering
  const angle = useTransform(
    rotation,
    (r) => (r + (index * 360 / totalLogos)) * (Math.PI / 180)
  );
  
  const x = useTransform(angle, (a) => Math.cos(a) * 220 - 56);
  const y = useTransform(angle, (a) => Math.sin(a) * 220 * 0.6 - 56);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        x,
        y
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.4 : 1,
        zIndex: isActive ? 30 : 10
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.5, delay: index * 0.1 }
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.div 
        className="relative w-28 h-28"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ 
          rotateY: isActive ? 180 : 0 
        }}
        transition={{ 
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1]
        }}
      >
        {/* Front Face - Logo (FIXED: Now circular with cover) */}
        <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div 
            className="w-full h-full rounded-full p-3 backdrop-blur-md border-2 border-orange-500/30"
            animate={{
              borderColor: isActive ? "rgba(249, 115, 22, 0.8)" : "rgba(249, 115, 22, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full flex items-center justify-center bg-black rounded-full overflow-hidden">
              <img
                src={logo.imageUrl}
                alt={logo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/100x100/f97316/ffffff?text=${logo.name.charAt(0)}`;
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Back Face - Details (FIXED: Now circular to match front) */}
        <div 
          className="absolute inset-0"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1 shadow-2xl">
            <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-white text-center px-3">
              <div className="font-bold text-sm mb-1 truncate w-full px-2">{logo.name}</div>
              <div className="text-orange-400 text-xs font-semibold">{logo.projects}</div>
              <div className="text-white/70 text-[10px] mt-1">{logo.year}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

OrbitalLogo.displayName = 'OrbitalLogo';

const LogoCloudSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // CRITICAL FIX: Use useMotionValue instead of useState for smooth animation
  const rotation = useMotionValue(0);

  // Smooth rotation using RAF without triggering re-renders
  useEffect(() => {
    let animationFrame;
    let lastTime = Date.now();
    
    const animate = () => {
      if (!isPaused) {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;
        
        // Update motion value directly - no re-render!
        rotation.set((rotation.get() + deltaTime * 0.02) % 360);
      } else {
        lastTime = Date.now();
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isPaused, rotation]);

  const handleLogoEnter = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const handleLogoLeave = () => {
    setActiveIndex(null);
    setIsPaused(false);
  };

  // Calculate connection line position
  const getLogoPosition = (index) => {
    const angle = (rotation.get() + (index * 360 / clientLogos.length)) * (Math.PI / 180);
    const radius = 220;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 0.6;
    return { x, y };
  };

  return (
    <>
      <style jsx>{`
        @keyframes morphShape {
          0%, 100% { border-radius: 50% 20% 80% 30%; }
          25% { border-radius: 30% 70% 40% 60%; }
          50% { border-radius: 80% 30% 50% 70%; }
          75% { border-radius: 40% 80% 30% 50%; }
        }
        
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6), 0 0 80px rgba(245, 158, 11, 0.4); }
        }
        
        .morph-bg {
          animation: morphShape 8s ease-in-out infinite;
        }
        
        .glow-active {
          animation: glowPulse 2s ease-in-out infinite;
        }
        
        .perspective-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
      `}</style>
      
      <section id='brands' className="relative bg-black overflow-hidden min-h-screen flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="morph-bg absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="morph-bg absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-l from-amber-500/15 to-orange-500/5 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
           
          {/* Data Stream Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-32 bg-gradient-to-t from-transparent via-orange-500/50 to-transparent"
              style={{ left: `${20 + i * 15}%` }}
              animate={{
                y: [-100, 200],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-5 perspective-3d">
            <motion.h2 
              className="text-6xl md:text-7xl font-bold text-white mb-6 relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Our
              </motion.span>
              {" "}
              <motion.span 
                className="inline-block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Brand Network
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Central Orbital Display */}
          <div className="relative flex justify-center items-center h-96 md:h-[500px]">
            {/* Center Hub */}
            <motion.div 
              className="absolute z-20 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center glow-active"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">WE</span>
              </div>
            </motion.div>

            {/* Orbital Logos */}
            <div className="absolute inset-0 flex items-center justify-center">
              {clientLogos.map((logo, index) => (
                <OrbitalLogo
                  key={logo.id}
                  logo={logo}
                  index={index}
                  totalLogos={clientLogos.length}
                  rotation={rotation}
                  isActive={activeIndex === index}
                  onEnter={() => handleLogoEnter(index)}
                  onLeave={handleLogoLeave}
                />
              ))}
            </div>

            {/* Connection Line */}
            <AnimatePresence>
              {activeIndex !== null && (
                <motion.svg 
                  className="absolute inset-0 pointer-events-none"
                  style={{ width: '100%', height: '100%' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  <motion.line 
                    x1="50%" 
                    y1="50%" 
                    x2={`calc(50% + ${getLogoPosition(activeIndex).x}px)`}
                    y2={`calc(50% + ${getLogoPosition(activeIndex).y}px)`}
                    stroke="url(#connectionGradient)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>

          {/* Active Logo Details Panel */}
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {clientLogos[activeIndex].name}
                  </motion.h3>
                  <motion.p 
                    className="text-orange-400 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {clientLogos[activeIndex].category}
                  </motion.p>
                  <motion.div 
                    className="flex justify-center gap-6 text-sm text-white/70"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div>
                      <span className="block text-amber-500 font-bold text-lg">{clientLogos[activeIndex].projects}</span>
                      <span>Projects</span>
                    </div>
                    <div>
                      <span className="block text-orange-500 font-bold text-lg">{clientLogos[activeIndex].year}</span>
                      <span>Since</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default LogoCloudSection;