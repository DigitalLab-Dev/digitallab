
'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    // Throttle mouse movement updates for better performance
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    // Use passive event listener for better scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Memoize transform calculation
  const gridTransform = useMemo(
    () => `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
    [mousePosition.x, mousePosition.y]
  );

  const geometricShapes = useMemo(
    () => [
      {
        className: 'top-1/4 left-1/6 w-20 h-20 border-2 border-orange-500/30 rotate-45',
        animation: 'animate-float-slow',
      },
      {
        className: 'top-3/4 right-1/4 w-16 h-16 bg-orange-500/10 rotate-12',
        animation: 'animate-float-medium',
      },
      {
        className: 'top-1/2 right-1/6 w-12 h-12 border border-orange-400/20 rounded-full',
        animation: 'animate-float-fast',
      },
      {
        className: 'bottom-1/4 left-1/3 w-8 h-20 bg-gradient-to-b from-orange-500/20 to-transparent',
        animation: 'animate-float-slow',
      },
    ],
    []
  );

  return (
    <header className="relative  h-[70vh] pb-5 md:min-h-screen w-full pt-20 overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="relative w-full h-full">
          <Image
            src="/portfolios/graphic-design/6.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3AAAAAA//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        </div>
      </div>

      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: gridTransform,
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {geometricShapes.map((shape, index) => (
          <div
            key={`shape-${index}`}
            className={`geometric-shape absolute backdrop-blur-sm ${shape.className} ${shape.animation}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Heading with Staggered Animation */}
        <h1 className="text-5xl sm:text-6xl  md:text-7xl xl:text-8xl font-bold text-white leading-tighter mb-6 " aria-label="Graphic Design Services">
          <div className="overflow-hidden">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-full opacity-0'
                }`}
            >
              We Create
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className={`text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-1000 delay-400 ${isVisible
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-full opacity-0'
                }`}
            >
              Extraordinary
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className={`transition-all duration-1000 delay-600 ${isVisible
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-full opacity-0'
                }`}
            >
              Digital Experiences
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed px-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Where innovation meets artistry. We transform ideas into stunning
          visual narratives that leave lasting impressions.
        </p>

        {/* CTA Buttons */}
        <nav
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          aria-label="Primary navigation"
        >
          <Link
            href="#portfolio"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="View our portfolio work"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-2">
              View Our Work
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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

          <Link
            href="https://calendly.com/syed-ali-turab/30min"
            target="_blank"
            className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-orange-500 hover:text-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Contact us"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <svg
                className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </span>
          </Link>
        </nav>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-15px) rotate(20deg);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }

        .geometric-shape {
          backdrop-filter: blur(1px);
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
    </header>
  );
};

export default Hero;