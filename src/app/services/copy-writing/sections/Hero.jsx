'use client';
import React, { useState, useEffect } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import TextType from '@/components/ReactBit-Components/TextType';

const CopywritingHero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rotatingWords = ['Convert', 'Engage', 'Inspire', 'Transform'];

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Initial fade in
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const GridDot = ({ delay, x, y }) => (
    <div
      className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `pulseDelay 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );

  const FloatingElement = ({ children, className, delay = 0 }) => (
    <div
      className={`absolute opacity-10 ${className}`}
      style={{
        animation: `floatSlow 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeRotate {
            0% {
              opacity: 0;
              transform: rotateX(90deg) scale(0.8);
            }
            20%, 80% {
              opacity: 1;
              transform: rotateX(0deg) scale(1);
            }
            100% {
              opacity: 0;
              transform: rotateX(-90deg) scale(0.8);
            }
          }

          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes pulseDelay {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.5);
            }
          }

          @keyframes floatSlow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes morphBlob {
            0%, 100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            50% {
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }
          }

          @keyframes buttonGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(255, 138, 0, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(255, 138, 0, 0.6);
            }
          }

          .gradient-text {
            background: linear-gradient(-45deg, #fff, #ff8a00, #ffb347, #fff);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 4s ease infinite;
          }

          .morphing-blob {
            animation: morphBlob 8s ease-in-out infinite;
          }

          .button-glow {
            animation: buttonGlow 2s ease-in-out infinite;
          }

          .slide-up {
            animation: slideUp 1s ease-out 0.3s both;
          }

          .slide-down {
            animation: slideDown 0.8s ease-out 0.8s both;
          }

          .fade-in-1 { animation: slideUp 0.8s ease-out 1.2s both; }
          .fade-in-2 { animation: slideUp 0.8s ease-out 1.5s both; }
        `,
        }}
      />

      <section className="relative  md:min-h-screen  text-white overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0" aria-hidden="true">
          {[...Array(50)].map((_, i) => (
            <GridDot
              key={i}
              delay={Math.random() * 3}
              x={Math.random() * 100}
              y={Math.random() * 100}
            />
          ))}
        </div>

        {/* Morphing Background Blobs */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-amber-500/10 morphing-blob" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-600/8 to-red-500/8 morphing-blob"
            style={{ animationDelay: '-4s' }}
          />
        </div>

        {/* Floating Typography Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <FloatingElement
            className="top-[15%] left-[5%] text-6xl font-bold text-orange-500"
            delay={0}
          >
            "
          </FloatingElement>
          <FloatingElement
            className="top-[25%] right-[8%] text-4xl font-light text-white"
            delay={-2}
          >
            Copy
          </FloatingElement>
          <FloatingElement
            className="bottom-[30%] left-[3%] text-5xl font-bold text-orange-400"
            delay={-4}
          >
            &
          </FloatingElement>
          <FloatingElement
            className="bottom-[15%] right-[5%] text-6xl font-bold text-orange-500"
            delay={-6}
          >
            "
          </FloatingElement>
        </div>

        {/* Interactive Cursor Glow */}
        <div
          className="absolute w-32 h-32 pointer-events-none opacity-20"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            background:
              'radial-gradient(circle, rgba(255, 138, 0, 0.4) 0%, transparent 70%)',
            transition: 'all 0.1s ease-out',
          }}
          aria-hidden="true"
        />

        {/* Main Content */}
        <div className="relative pt-20 pb-10 z-10 flex items-center justify-center  px-6">
          <div className="text-center max-w-5xl mx-auto space-y-2">
            {/* Pre-title */}
            <div className={`${isVisible ? 'slide-down' : 'opacity-0'}`}>
              <span className="inline-block bg-orange-500/20 text-orange-400 px-6 py-2 rounded-full text-sm font-medium tracking-wide border border-orange-500/30">
                ✨ Premium Copywriting Services
              </span>
            </div>

            {/* Main Headline */}
            <div
              className={`space-y-4 ${isVisible ? 'slide-up' : 'opacity-0'}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-black leading-tighter">
                <span className="block gradient-text">Words That</span>
                <span className="flex flex-col items-center justify-center mt-2 ">
                  <span className="text-white">Make Your Brand </span>
            <span className="italican lowercase text-[#BED3CC] rounded-2xl">
            <TextType
              text={['amazing', 'impressive', 'optmized']}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter=""
            />
          </span>{' '}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`fade-in-1 ${!isVisible && 'opacity-0'}`}>
              <p className="text-xl md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                We don't just write copy—we craft experiences that turn browsers
                into buyers. Every word is strategically placed to drive action
                and boost your bottom line.
              </p>
            </div>

            {/* CTA */}
            <div className={`fade-in-2 ${!isVisible && 'opacity-0'}`}>
              <div className="flex justify-center ">
                <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-3 rounded-full text-md button-glow transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-5 h-5" />
                    Transform Your Copy Now
                    <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default CopywritingHero;
