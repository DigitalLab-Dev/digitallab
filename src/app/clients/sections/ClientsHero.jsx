"use client"
import React, { useEffect, useRef } from 'react';

const ClientsHeroSection = () => {
  const containerRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Animate floating elements
    const animateFloatingElements = () => {
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          const delay = index * 0.5;
          const duration = 3 + Math.random() * 2;
          
          element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        }
      });
    };

    // Create floating particles
    const createParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full opacity-20';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = Math.random() > 0.5 ? '#f97316' : '#f59e0b';
        particle.style.animation = `pulse ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
        
        container.appendChild(particle);
      }
    };

    animateFloatingElements();
    createParticles();

    // Cleanup
    return () => {
      const container = containerRef.current;
      if (container) {
        const particles = container.querySelectorAll('.absolute.rounded-full');
        particles.forEach(particle => {
          if (particle.parentNode === container) {
            container.removeChild(particle);
          }
        });
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        .animated-grid {
          background-image: 
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f97316, #f59e0b, #eab308);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          filter: drop-shadow(0 0 20px rgba(249, 115, 22, 0.3));
        }
      `}</style>
      
      <section 
        ref={containerRef}
        className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 animated-grid opacity-20"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-amber-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent"></div>
        
        {/* Large Floating Geometric Shapes */}
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-20 w-32 h-32 border border-orange-500/30 rotate-45 rounded-lg"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-32 left-40 w-20 h-20 border-2 border-amber-500/40 rounded-full"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[3] = el}
          className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-bl from-orange-600/15 to-transparent rotate-12 rounded-lg"
        ></div>
        
        {/* Floating Logo Placeholders */}
        <div 
          ref={el => floatingElementsRef.current[4] = el}
          className="absolute top-32 right-1/4 w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded opacity-60"></div>
        </div>
        <div 
          ref={el => floatingElementsRef.current[5] = el}
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-60"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-effect">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Brands</span>
            <br />
            <span className="gradient-text">Worldwide</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Partnering with industry leaders across technology, finance, healthcare, and retail to deliver exceptional digital experiences.
          </p>
          
          {/* CTA Button */}
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur opacity-60"></div>
            <button className="relative bg-black border-2 border-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-border px-12 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 group">
              <span className="relative z-10 bg-black px-12 py-4 rounded-full -m-4 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300">
                Work With Us
              </span>
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-16 bg-gradient-to-b from-orange-500 to-transparent opacity-60"></div>
          </div>
        </div>
        
        {/* Corner Accent Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
};

export default ClientsHeroSection;