'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const FloatingIcon = ({ children, delay = 0, className = '' }) => (
    <div
      className={`absolute opacity-20 text-orange-400 ${className}`}
      style={{
        animation: `float 4s ease-in-out infinite ${delay}s`,
      }}
    >
      {children}
    </div>
  );

  const CodeBlock = () => (
    <div className="relative group">
      {/* Radiant glow behind code block */}
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative bg-black/80 rounded-xl p-6 border border-orange-500/30 backdrop-blur-sm hover:border-orange-500/60 transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <div className="w-3 h-3 rounded-full bg-orange-300"></div>
          </div>
        </div>
        <div className="space-y-2 text-sm font-mono">
          <div className="text-orange-400">
            <span className="text-white">const</span>{' '}
            <span className="text-orange-500">digitalLab</span> = {'{'}
          </div>
          <div className="ml-4 text-white">
            innovation: <span className="text-orange-400">"unlimited"</span>,
          </div>
          <div className="ml-4 text-white">
            execution: <span className="text-orange-400">"flawless"</span>,
          </div>
          <div className="ml-4 text-white">
            results: <span className="text-orange-400">"extraordinary"</span>
          </div>
          <div className="text-orange-400">{'}'}</div>
        </div>
      </div>
    </div>
  );

  const CTAButton = ({ primary, children }) => (
    <button
      className={`
        relative px-4 py-3 cursor-pointer rounded-lg font-semibold text-lg transition-all duration-300 
        transform hover:scale-105 hover:-translate-y-1 overflow-hidden group
        ${
          primary
            ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-black shadow-lg'
            : 'border-2 border-orange-500/50 text-white hover:border-orange-500 bg-transparent hover:text-black'
        }
      `}
      style={{
        animation: isLoaded ? 'scaleIn 0.6s ease-out 0.8s both' : 'none',
      }}
    >
      {/* Radiant glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Button fill effect for secondary button */}
      {!primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}

      <span className="relative z-10">{children}</span>
    </button>
  );

  return (
    <div className="relative min-h-screen overflow-hidden pt-10">
      {/* Animated Background with Orange Glows */}
      <div className="absolute inset-0">
        {/* Main radiant glows */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl"
          style={{ animation: 'pulse 3s ease-in-out infinite 1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-3xl"
          style={{ animation: 'breathe 6s ease-in-out infinite' }}
        ></div>

        {/* Geometric light streaks */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-32 left-10 w-1 h-24 bg-gradient-to-b from-orange-500/60 to-transparent transform rotate-45"
            style={{
              animation: 'float 4s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)',
            }}
          ></div>
          <div
            className="absolute top-60 right-32 w-20 h-1 bg-gradient-to-r from-orange-500/60 to-transparent"
            style={{
              animation: 'float 3s ease-in-out infinite 1s',
              boxShadow: '0 0 15px rgba(249, 115, 22, 0.4)',
            }}
          ></div>
          <div
            className="absolute bottom-48 left-32 w-1 h-20 bg-gradient-to-t from-orange-400/60 to-transparent transform -rotate-12"
            style={{
              animation: 'float 5s ease-in-out infinite 2s',
              boxShadow: '0 0 18px rgba(251, 146, 60, 0.4)',
            }}
          ></div>
        </div>

        {/* Floating Tech Icons with Glow */}
        <FloatingIcon delay={0} className="top-24 left-1/4">
          <div
            className="text-4xl"
            style={{ textShadow: '0 0 20px rgba(249, 115, 22, 0.8)' }}
          >
            {'</>'}
          </div>
        </FloatingIcon>
        <FloatingIcon delay={1} className="top-40 right-1/4">
          <div
            className="text-3xl"
            style={{ textShadow: '0 0 15px rgba(249, 115, 22, 0.6)' }}
          >
            ⚡
          </div>
        </FloatingIcon>
        <FloatingIcon delay={0.5} className="bottom-48 right-1/3">
          <div
            className="text-2xl"
            style={{ textShadow: '0 0 12px rgba(249, 115, 22, 0.5)' }}
          >
            ◆
          </div>
        </FloatingIcon>
        <FloatingIcon delay={0.5} className="bottom-48 right-1/3">
          <div
            className="text-2xl"
            style={{ textShadow: '0 0 12px rgba(249, 115, 22, 0.5)' }}
          >
            ◆
          </div>
        </FloatingIcon>
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1
                className="text-5xl  font-bold text-white leading-tight"
                style={{
                  animation: isLoaded
                    ? 'slideUp 0.8s ease-out 0.2s both'
                    : 'none',
                }}
              >
                Beyond Code:{" "}
                <span
                  className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent relative"
                  style={{
                    textShadow: '0 0 40px rgba(249, 115, 22, 0.3)',
                    filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.4))',
                  }}
                >
                   Digital Solutions
                </span>{' '}
                That Drive Revenue.
              </h1>

              <p
                className="text-md lg:text-xl text-white/80 leading-relaxed max-w-lg"
                style={{
                  animation: isLoaded
                    ? 'slideUp 0.8s ease-out 0.4s both'
                    : 'none',
                }}
              >
                Transform your ideas into revolutionary digital solutions with
                cutting-edge technology and innovative design.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6"
                style={{
                  animation: isLoaded
                    ? 'slideUp 0.8s ease-out 0.6s both'
                    : 'none',
                }}
              >
                <CTAButton primary>Start Building</CTAButton>
                <CTAButton>Learn More</CTAButton>
              </div>
            </div>

            {/* Right Side - Animated Illustration */}
            <div
              className="relative transform hover:rotate-2 transition-all duration-500 hover:scale-105"
              style={{
                animation: isLoaded
                  ? 'slideUp 0.8s ease-out 0.5s both'
                  : 'none',
              }}
            >
              <CodeBlock />

              {/* Additional glowing elements around code block */}
              <div className="absolute -top-8 -right-8 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
              <div
                className="absolute -bottom-6 -left-6 w-3 h-3 bg-orange-400 rounded-full"
                style={{
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 1s',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.05;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.1;
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
