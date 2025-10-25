'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CalendarCheck, Sparkles, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const CtaSectionAnimated = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [particles, setParticles] = useState([]);
  const [hoveredWord, setHoveredWord] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      requestAnimationFrame(() => {
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      });
    }
  }, []);

  const heading = 'It’s time to scale smarter';
  const words = heading.split(' ');

  const icons = [
    { Icon: Sparkles, delay: 0 },
    { Icon: Zap, delay: 0.2 },
    { Icon: TrendingUp, delay: 0.4 },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden py-10"
      aria-labelledby="cta-heading"
    >
      {/* Dynamic gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(249, 115, 22, 0.4), transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-orange-500 opacity-20 blur-sm pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {icons.map(({ Icon, delay }, i) => (
          <div
            key={`icon-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${20 + i * 30}%`,
              top: '20%',
              animation: `floatIcon 6s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon size={48} className="text-orange-500" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated heading */}
        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 sm:mb-8"
        >
          {words.map((word, i) => (
            <span
              key={`word-${word}-${i}`}
              onMouseEnter={() => setHoveredWord(i)}
              onMouseLeave={() => setHoveredWord(null)}
              className={`inline-block mr-2  sm:mr-3 cursor-pointer transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${hoveredWord === i ? 'scale-110 text-orange-400' : ''}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                textShadow:
                  hoveredWord === i
                    ? '0 0 30px rgba(249, 115, 22, 0.8)'
                    : 'none',
              }}
            >
              {word === 'scale' ? (
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text animate-gradientShift">
                    {word}
                  </span>
                  <span
                    className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-orange-600/20 blur-xl -z-10 animate-pulse"
                    aria-hidden="true"
                  />
                </span>
              ) : (
                <span className="text-white">{word}</span>
              )}
            </span>
          ))}
        </h2>

        {/* Subheading with stagger */}
        <p
          className={`text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 max-w-3xl mx-auto font-light transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Let's have a{' '}
          <strong className="text-orange-400 font-semibold">1-on-1 call</strong>{' '}
          to discuss your project. We'll dive into your goals and figure out the
          perfect strategy to bring your vision to life.
        </p>

        {/* CTA Button with intense effects */}
        <div
          className={`mt-10 sm:mt-14 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-orange-500/50 hover:scale-110 active:scale-95 overflow-hidden focus:outline-none focus:ring-4 focus:ring-orange-500/50"
            aria-label="Reserve your consultation spot"
          >
            {/* Animated background layers */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* Rotating border */}
            <span
              className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-full opacity-75 blur group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
              aria-hidden="true"
            />

            {/* Shimmer effect */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer" />
            </span>

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2 sm:gap-4">
              <Link href="/contact">
                <span className="group-hover:tracking-wider transition-all duration-300">
                  Reserve Your Spot
                </span>
              </Link>
            </span>
          </Link>

          {/* Trust indicators */}
          <div
            className={`mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base transition-all duration-700 delay-1200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-orange-400" aria-hidden="true" />
              Quick Response
            </span>
            <span className="flex items-center gap-2">
              <Sparkles
                size={16}
                className="text-orange-400"
                aria-hidden="true"
              />
              Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp
                size={16}
                className="text-orange-400"
                aria-hidden="true"
              />
              Proven Results
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatIcon {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CtaSectionAnimated;
