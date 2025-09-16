'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const AnimatedCTA = () => {
  // Create refs for each element or group of elements to be animated
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const mainTitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const trustIndicatorsRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Simple CSS-based animations for floating elements
    const animateFloatingElements = () => {
      floatingElementsRef.current.forEach((el, index) => {
        if (!el) return;

        // Set initial random positions within viewport
        const initialX = Math.random() * (window.innerWidth - 120);
        const initialY = Math.random() * (window.innerHeight - 120);

        el.style.left = `${initialX}px`;
        el.style.top = `${initialY}px`;

        // Add CSS animation classes
        el.style.animation = `float-${index % 3} ${
          6 + Math.random() * 4
        }s ease-in-out infinite, rotate ${
          8 + Math.random() * 4
        }s linear infinite`;
      });
    };

    // Animate particles
    const animateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        if (!particle) return;

        const initialX = Math.random() * window.innerWidth;
        const initialY = window.innerHeight + 10;

        particle.style.left = `${initialX}px`;
        particle.style.top = `${initialY}px`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        particle.style.animation = `rise ${
          3 + Math.random() * 2
        }s linear infinite ${Math.random() * 2}s`;
      });
    };

    // Content animations with CSS transitions
    const animateContent = () => {
      const elements = [
        { ref: subtitleRef, delay: 500 },
        { ref: mainTitleRef, delay: 800 },
        { ref: descriptionRef, delay: 1100 },
        { ref: ctaButtonsRef, delay: 1400 },
        { ref: trustIndicatorsRef, delay: 1700 },
      ];

      elements.forEach(({ ref, delay }) => {
        if (ref.current) {
          setTimeout(() => {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }, delay);
        }
      });
    };

    // Initialize animations
    setTimeout(() => {
      animateFloatingElements();
      animateParticles();
      animateContent();
    }, 100);

    // Cleanup function
    return () => {
      // Clear any timeouts if component unmounts
    };
  }, []);

  // Helper component for Floating SVGs
  const FloatingSVG = ({ index, className, children }) => (
    <div
      ref={(el) => (floatingElementsRef.current[index] = el)}
      className={`absolute pointer-events-none ${className}`}
      style={{
        opacity: '0.1',
        width: '120px',
        height: '120px',
      }}
    >
      {children}
    </div>
  );

  // Helper component for Particles
  const Particle = ({ index }) => (
    <div
      ref={(el) => (particlesRef.current[index] = el)}
      className="absolute w-1 h-1 bg-orange-500 rounded-full pointer-events-none"
      style={{ opacity: '0.2' }}
    />
  );

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(-15px);
          }
          66% {
            transform: translateY(-15px) translateX(20px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          20% {
            transform: translateY(-25px) translateX(15px);
          }
          40% {
            transform: translateY(-45px) translateX(-5px);
          }
          60% {
            transform: translateY(-30px) translateX(-20px);
          }
          80% {
            transform: translateY(-10px) translateX(10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rise {
          0% {
            transform: translateY(0px);
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-200px);
            opacity: 0;
          }
        }

        .content-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating SVG Elements */}
          <FloatingSVG index={0} className="text-orange-500">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="w-full h-full"
            >
              <path
                d="M60,10 L85,35 L85,85 L35,85 L35,35 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
          </FloatingSVG>

          <FloatingSVG index={1} className="text-white">
            <svg
              width="120"
              height="120"
              viewBox="0 0 80 80"
              className="w-full h-full"
            >
              <circle
                cx="40"
                cy="40"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10,5"
              />
            </svg>
          </FloatingSVG>

          <FloatingSVG index={2} className="text-orange-500">
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              className="w-full h-full"
            >
              <polygon
                points="50,10 90,50 50,90 10,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </FloatingSVG>

          <FloatingSVG index={3} className="text-white">
            <svg
              width="120"
              height="120"
              viewBox="0 0 60 60"
              className="w-full h-full"
            >
              <path
                d="M30,5 L55,30 L30,55 L5,30 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </FloatingSVG>

          {/* Particles */}
          {[...Array(20)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
          <div className="space-y-8">
            {/* Subtitle */}
            <div ref={subtitleRef} className="content-animate">
              <span className="text-orange-500 text-sm font-bold tracking-widest uppercase">
                Ready to Transform Your Business?
              </span>
            </div>

            {/* Main Title */}
            <h1
              ref={mainTitleRef}
              className="content-animate text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            >
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Extraordinary
              </span>
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="content-animate text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Partner with our expert team to create innovative solutions that
              drive growth, engage your audience, and transform your digital
              presence.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaButtonsRef}
              className="content-animate flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            >
              <button className="group relative px-4 py-3 cursor-pointer bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                <Link href="/contact">
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/20 rotate-45 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                </Link>
              </button>

              <button className="group px-4 cursor-pointer py-3 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white hover:scale-105 hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
                <Link href="/services">
                  <span className="flex items-center gap-2">
                    View Our Work
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              ref={trustIndicatorsRef}
              className="content-animate mt-16 trust-indicators"
            >
              <p className="text-gray-400 text-sm mb-6">
                Trusted by 500+ companies worldwide
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-40">
                <div className="text-white font-bold text-lg">BRAND</div>
                <div className="text-white font-bold text-lg">COMPANY</div>
                <div className="text-white font-bold text-lg">STARTUP</div>
                <div className="text-white font-bold text-lg">AGENCY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated SVG Background Pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-5"
          viewBox="0 0 1200 800"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </section>
    </>
  );
};

export default AnimatedCTA;
