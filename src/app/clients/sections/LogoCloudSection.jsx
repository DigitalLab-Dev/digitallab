"use client"
import React, { useState, useEffect, useRef } from 'react';

const LogoCloudSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const orbitalRef = useRef(null);

  // Enhanced dummy client logos with more data
  const clientLogos = [
    {
      id: 1, name: "TechCorp", imageUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=120&fit=crop",
      category: "Technology", year: "2023", projects: "15+"
    },
    {
      id: 2, name: "FinanceFlow", imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop",
      category: "Finance", year: "2022", projects: "8+"
    },
    {
      id: 3, name: "HealthPlus", imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=120&fit=crop",
      category: "Healthcare", year: "2023", projects: "12+"
    },
    {
      id: 4, name: "RetailMax", imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=120&fit=crop",
      category: "Retail", year: "2021", projects: "20+"
    },
    {
      id: 5, name: "EduTech", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=120&fit=crop",
      category: "Education", year: "2023", projects: "6+"
    },
    {
      id: 6, name: "GreenEnergy", imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&h=120&fit=crop",
      category: "Energy", year: "2022", projects: "10+"
    },
    {
      id: 7, name: "FoodieHub", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=120&fit=crop",
      category: "Food & Beverage", year: "2023", projects: "14+"
    },
    {
      id: 8, name: "TravelWise", imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=120&fit=crop",
      category: "Travel", year: "2022", projects: "9+"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create orbital animation paths
  const getOrbitalPosition = (index, time = 0) => {
    const radius = 200 + (index * 30);
    const speed = 0.0005 + (index * 0.0002);
    const angle = (time * speed) + (index * (Math.PI * 2 / 8));
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <>
      <style jsx>{`
        @keyframes logoReveal {
          0% { opacity: 0; transform: scale(0) rotate(180deg); }
          50% { opacity: 0.7; transform: scale(1.2) rotate(90deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        
        @keyframes orbitalSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
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
        
        @keyframes dataStream {
          0% { opacity: 0; transform: translateY(100px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-100px); }
        }
        
        .orbital-container {
          animation: orbitalSpin 60s linear infinite;
        }
        
        .morph-bg {
          animation: morphShape 8s ease-in-out infinite;
        }
        
        .logo-reveal {
          animation: logoReveal 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .glow-active {
          animation: glowPulse 2s ease-in-out infinite;
        }
        
        .data-stream {
          animation: dataStream 3s linear infinite;
        }
        
        .hexagon {
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
        }
        
        .diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        .perspective-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .flip-card {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-front, .flip-back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
      
      <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden min-h-screen flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Animated Morphing Shapes */}
          <div className="morph-bg absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-xl"></div>
          <div className="morph-bg absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-l from-amber-500/15 to-orange-500/5 blur-2xl" style={{animationDelay: '2s'}}></div>
          
          {/* Data Stream Lines */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="data-stream absolute w-1 h-32 bg-gradient-to-t from-transparent via-orange-500/50 to-transparent"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header with 3D Effect */}
          <div className="text-center mb-20 perspective-3d">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 relative">
              <span className="inline-block transform hover:rotateX(15deg) transition-transform duration-500">
                Our
              </span>
              <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent transform hover:rotateY(15deg) transition-transform duration-500">
                Partners
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Central Orbital Display */}
          <div className="relative flex justify-center items-center h-96 md:h-[500px]">
            {/* Center Hub */}
            <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center glow-active">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">WE</span>
              </div>
            </div>

            {/* Orbital Logos */}
            <div ref={orbitalRef} className="orbital-container absolute inset-0">
              {clientLogos.map((logo, index) => {
                const position = getOrbitalPosition(index, Date.now());
                return (
                  <div
                    key={logo.id}
                    className={`absolute w-24 h-24 cursor-pointer transition-all duration-500 ${
                      activeIndex === index ? 'z-30 scale-150' : 'z-10'
                    }`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                      animationDelay: `${index * 0.2}s`
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className={`flip-card relative w-full h-full ${activeIndex === index ? 'flipped' : ''}`}>
                      {/* Front Face */}
                      <div className="flip-front">
                        <div className={`w-full h-full rounded-full p-2 ${
                          activeIndex === index ? 'bg-gradient-to-br from-orange-500 to-amber-500' : 'bg-white/10'
                        } backdrop-blur-md border border-white/20 transition-all duration-500`}>
                          <img
                            src={logo.imageUrl}
                            alt={logo.name}
                            className={`w-full h-full object-cover rounded-full transition-all duration-500 ${
                              activeIndex === index ? 'filter-none' : 'grayscale brightness-50'
                            }`}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/100x100/333/fff?text=${logo.name}`;
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Back Face */}
                      <div className="flip-back">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1">
                          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-white text-xs text-center">
                            <div className="font-bold">{logo.name}</div>
                            <div className="text-orange-400 text-[10px]">{logo.projects}</div>
                            <div className="text-white/70 text-[9px]">{logo.year}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connection Lines */}
            {activeIndex !== null && (
              <svg className="absolute inset-0 pointer-events-none z-15">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                <line 
                  x1="50%" 
                  y1="50%" 
                  x2={`calc(50% + ${getOrbitalPosition(activeIndex, Date.now()).x}px)`}
                  y2={`calc(50% + ${getOrbitalPosition(activeIndex, Date.now()).y}px)`}
                  stroke="url(#connectionGradient)" 
                  strokeWidth="2"
                  className="animate-pulse"
                />
              </svg>
            )}
          </div>

          {/* Active Logo Details Panel */}
          {activeIndex !== null && (
            <div className="mt-16 text-center">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2">{clientLogos[activeIndex].name}</h3>
                <p className="text-orange-400 mb-2">{clientLogos[activeIndex].category}</p>
                <div className="flex justify-center gap-6 text-sm text-white/70">
                  <div>
                    <span className="block text-amber-500 font-bold">{clientLogos[activeIndex].projects}</span>
                    <span>Projects</span>
                  </div>
                  <div>
                    <span className="block text-orange-500 font-bold">{clientLogos[activeIndex].year}</span>
                    <span>Since</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LogoCloudSection;