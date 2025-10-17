'use client';
import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  Target,
  DollarSign,
  Play,
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  Star,
} from 'lucide-react';
import Link from 'next/link';

const AdsHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { id: 1, icon: BarChart3, delay: 0, x: '15%', y: '25%', size: 'w-12 h-12' },
    {
      id: 2,
      icon: TrendingUp,
      delay: 1.5,
      x: '70%',
      y: '20%',
      size: 'w-10 h-10',
    },
    { id: 3, icon: Target, delay: 3, x: '20%', y: '60%', size: 'w-8 h-8' },
    { id: 4, icon: Zap, delay: 4.5, x: '80%', y: '70%', size: 'w-14 h-14' },
    {
      id: 5,
      icon: DollarSign,
      delay: 2,
      x: '85%',
      y: '45%',
      size: 'w-10 h-10',
    },
    { id: 6, icon: Users, delay: 3.5, x: '25%', y: '80%', size: 'w-12 h-12' },
  ];

  const adMockups = [
    {
      platform: 'Google Ads',
      color: 'from-blue-500 to-blue-700',
      stats: '+250% ROI',
      delay: 1,
    },
    {
      platform: 'Facebook',
      color: 'from-blue-600 to-purple-700',
      stats: '89% CTR',
      delay: 2,
    },
    {
      platform: 'TikTok',
      color: 'from-pink-500 to-red-600',
      stats: '2.4M Reach',
      delay: 3,
    },
  ];

  return (
    <section
      className="relative min-h-screen pt-10 bg-black overflow-hidden flex items-center"
      role="banner"
      aria-label="Smart Ads Management Hero Section"
    >
      {/* Enhanced Background with Orange Accents */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

        {/* Orange glow effects */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 via-orange-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-400/15 via-orange-500/8 to-transparent blur-3xl" />

        {/* Interactive mouse glow */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/20 to-orange-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>
      </div>

      {/* Floating Elements (Right Side Only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute right-0 w-1/2 ${
              element.size
            } transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-60'
                : 'translate-y-10 opacity-0'
            }`}
            style={{
              left: element.x,
              top: element.y,
              animationDelay: `${element.delay}s`,
              animation: `float 8s ease-in-out infinite ${element.delay}s`,
            }}
            aria-hidden="true"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full backdrop-blur-sm border border-orange-400/30 flex items-center justify-center hover:scale-110 hover:border-orange-400/50 transition-all duration-300">
                <element.icon className="text-orange-400 w-full h-full p-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* LEFT SIDE - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main Headline */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tighter">
                <span className="block text-white mb-2">Turn Clicks Into</span>
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-3">
                  Customers
                </span>
                <span className="block text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium">
                  with Smart Ads Management
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl lg:text-xl text-gray-300 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              Maximize your{' '}
              <span className="text-orange-400 font-semibold">ROI</span> with
              precision
              <span className="text-orange-400 font-semibold">
                {' '}
                targeting
              </span>{' '}
              that delivers
              <span className="text-orange-400 font-semibold">
                {' '}
                measurable results
              </span>
              . Transform your ad spend into profitable growth.
            </p>

            {/* Stats Row */}
            <div
              className={`grid grid-cols-3 gap-4 lg:gap-6 transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              {[
                { value: '300%', label: 'ROI Boost', icon: TrendingUp },
                { value: '89%', label: 'Accuracy', icon: Target },
                { value: '2.5M+', label: 'Reached', icon: Users },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-2">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs lg:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div
              className={`space-y-4 transform transition-all duration-1000 delay-800 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <button className="group relative inline-flex items-center justify-center px-8 py-4 lg:px-4 lg:py-4 text-lg lg:text-xl font-bold text-white cursor-pointer bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full hover:from-orange-300 hover:via-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 focus:outline-none focus:ring-4 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-black">
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Get Your Free Ad Strategy Call
                    <ArrowRight className="ml-3 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Visual Elements */}
          <div className="relative lg:h-full flex items-center justify-center">
            {/* Central Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Ad Platform Mockups */}
            <div
              className={`relative z-10 transform transition-all duration-1000 delay-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="space-y-6 lg:space-y-8">
                {adMockups.map((ad, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-1000 hover:scale-105 ${
                      index % 2 === 0
                        ? 'translate-x-0'
                        : 'translate-x-8 lg:translate-x-12'
                    }`}
                    style={{
                      animationDelay: `${ad.delay}s`,
                      animation: `slideIn 10s ease-in-out infinite ${ad.delay}s`,
                    }}
                  >
                    <div
                      className={`relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${ad.color} backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300`}
                    >
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent rounded-2xl" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-white font-bold text-lg lg:text-xl">
                            {ad.platform}
                          </h3>
                          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                          </div>
                        </div>
                        <div className="text-orange-200 text-2xl lg:text-3xl font-bold mb-2">
                          {ad.stats}
                        </div>
                        <div className="text-white/80 text-sm lg:text-base">
                          Campaign Performance
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(2deg);
          }
          66% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }

        @keyframes slideIn {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-5px) translateX(-3px);
          }
          50% {
            transform: translateY(-12px) translateX(2px);
          }
          75% {
            transform: translateY(-7px) translateX(-1px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AdsHero;
