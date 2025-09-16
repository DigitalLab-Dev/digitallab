'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full pt-20 overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
          }}
        ></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="geometric-shape absolute top-1/4 left-1/6 w-20 h-20 border-2 border-orange-500/30 rotate-45 animate-float-slow"></div>
        <div className="geometric-shape absolute top-3/4 right-1/4 w-16 h-16 bg-orange-500/10 rotate-12 animate-float-medium"></div>
        <div className="geometric-shape absolute top-1/2 right-1/6 w-12 h-12 border border-orange-400/20 rounded-full animate-float-fast"></div>
        <div className="geometric-shape absolute bottom-1/4 left-1/3 w-8 h-20 bg-gradient-to-b from-orange-500/20 to-transparent animate-float-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}

        {/* Main Heading with Staggered Animation */}
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-tighter mb-8">
          <div className="overflow-hidden">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-full opacity-0'
              }`}
            >
              We Create
            </div>
          </div>
          <div className="">
            <div
              className={`text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-full opacity-0'
              }`}
            >
              Extraordinary
            </div>
          </div>
          <div className="">
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
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
          className={`text-xl md:text-xl text-gray-300 max-w-3xl mx-auto mb-2 leading-relaxed transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Where innovation meets artistry. We transform ideas into stunning
          visual narratives that leave lasting impressions.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="group relative px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="relative z-10 flex items-center gap-2">
              View Our Work
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </button>

          <button className="group px-4 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-orange-500 hover:text-orange-400 transition-all duration-300">
            <span className="flex items-center gap-2">
              Get In Touch
              <svg
                className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>



      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="/portfolios/graphic-design/6.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/50"></div> */}
        </div>
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

        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
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

        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
        }

        .geometric-shape {
          backdrop-filter: blur(1px);
        }

        .counter {
          animation: countUp 2s ease-out forwards;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
