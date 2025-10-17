"use client"
import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Zap, Users, DollarSign, MousePointer } from 'lucide-react';


const WhyCopyMatters = () => {
  const [typedText, setTypedText] = useState('');
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const typewriterText = "The right words at the right time can change everything.";
  const stats = [
    { number: "113%", label: "Conversion Increase" },
    { number: "200%", label: "Click-Through Rate Boost" },
    { number: "89%", label: "Brand Recall Improvement" },
    { number: "156%", label: "Email Open Rate Jump" }
  ];

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= typewriterText.length) {
        setTypedText(typewriterText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Stat rotation
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('copy-matters-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const AnimatedPen = () => (
    <div className="relative w-full h-80 flex items-center justify-center">
      <svg
        width="400"
        height="300"
        viewBox="0 0 300 200"
        className="absolute"
      >
        {/* Paper background */}
        <rect
          x="20"
          y="30"
          width="260"
          height="140"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="2"
          rx="8"
          className="drop-shadow-lg"
        />
        
        {/* Paper lines */}
        {[60, 80, 100, 120, 140].map((y, index) => (
          <line
            key={index}
            x1="35"
            y1={y}
            x2="265"
            y2={y}
            stroke="#f3f4f6"
            strokeWidth="1"
          />
        ))}
        
        {/* Animated writing */}
        <path
          d="M 45 70 Q 80 65 120 70 T 180 70 Q 200 70 220 75"
          fill="none"
          stroke="#ff8a00"
          strokeWidth="3"
          strokeLinecap="round"
          className={`${isVisible ? 'animate-draw-line' : 'opacity-0'}`}
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isVisible ? '0' : '200',
            transition: 'stroke-dashoffset 2s ease-in-out 0.5s'
          }}
        />
        
        <path
          d="M 45 90 Q 90 85 140 90 T 200 90 Q 225 90 245 95"
          fill="none"
          stroke="#ff8a00"
          strokeWidth="3"
          strokeLinecap="round"
          className={`${isVisible ? 'animate-draw-line' : 'opacity-0'}`}
          style={{
            strokeDasharray: '220',
            strokeDashoffset: isVisible ? '0' : '220',
            transition: 'stroke-dashoffset 2.2s ease-in-out 1s'
          }}
        />
        
        <path
          d="M 45 110 Q 75 105 110 110 T 170 110 Q 190 110 210 115"
          fill="none"
          stroke="#ff8a00"
          strokeWidth="3"
          strokeLinecap="round"
          className={`${isVisible ? 'animate-draw-line' : 'opacity-0'}`}
          style={{
            strokeDasharray: '180',
            strokeDashoffset: isVisible ? '0' : '180',
            transition: 'stroke-dashoffset 2.4s ease-in-out 1.5s'
          }}
        />
        
        {/* Pen */}
        <g className={`${isVisible ? 'animate-pen-write' : 'opacity-0'}`}>
          <line
            x1="210"
            y1="100"
            x2="240"
            y2="85"
            stroke="#4b5563"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="210" cy="100" r="3" fill="#ff8a00" />
        </g>
      </svg>
    </div>
  );

  const StatCard = ({ icon: Icon, stat, description, delay }) => (
    <div 
      className={`bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transform transition-all duration-700 hover:scale-105 hover:bg-gray-800/50 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-orange-500/20 rounded-full">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <div>
          <div className="text-3xl font-bold text-orange-400">{stat}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </div>
  );


  return (
    <div className="relative">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes pen-write {
            0% {
              transform: translate(0, 0) rotate(25deg);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translate(-30px, 15px) rotate(25deg);
              opacity: 1;
            }
          }

          @keyframes pulse-stat {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          .animate-pen-write {
            animation: pen-write 3s ease-in-out 2s forwards;
          }

          .animate-fade-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-slide-left {
            animation: slideInLeft 1s ease-out forwards;
          }

          .animate-slide-right {
            animation: slideInRight 1s ease-out forwards;
          }

          .pulse-stat {
            animation: pulse-stat 2s ease-in-out infinite;
          }
        `
      }} />

      <section 
        id="copy-matters-section"
        className="relative py-10  text-white overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/6 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-600/5 to-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                  Why Copy Matters
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Behind every successful business is copy that doesn't just communicate—it converts. 
                Here's why the right words make all the difference.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Side - Story & Typewriter */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">The Story Behind Every Click</h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Imagine two identical websites. Same product, same price, same design. 
                    The only difference? The words on the page.
                  </p>
                  
                  <p>
                    Website A uses generic, bland copy: "We offer quality services." 
                    Website B speaks directly to pain points: "Stop losing customers to competitors who simply communicate better."
                  </p>
                  
                  <p className="text-white font-medium">
                    Guess which one converts 3x better?
                  </p>
                </div>

                {/* Typewriter Animation */}
                <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-orange-500/20">
                  <div className="text-orange-400 text-lg font-mono">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Pen */}
            <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              <AnimatedPen />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mb-16">
            <h3 className="text-5xl font-bold text-center mb-12">
              <span className="text-white">
                The Numbers Don't Lie
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                icon={TrendingUp} 
                stat="113%" 
                description="Conversion Increase" 
                delay={0}
              />
              <StatCard 
                icon={MousePointer} 
                stat="200%" 
                description="Click-Through Rate" 
                delay={200}
              />
              <StatCard 
                icon={Users} 
                stat="89%" 
                description="Brand Recall" 
                delay={400}
              />
              <StatCard 
                icon={DollarSign} 
                stat="156%" 
                description="Revenue Growth" 
                delay={600}
              />
            </div>
          </div>

          {/* The Impact Section */}
          <div className="text-center">
            <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-3xl p-12">
                <h3 className="text-3xl font-bold mb-8 text-white">Copy Influences Everything</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <Target className="w-12 h-12 text-orange-400 mx-auto" />
                    <h4 className="text-xl font-semibold text-white">Clicks</h4>
                    <p className="text-gray-300">
                      Compelling headlines and meta descriptions drive 67% more organic clicks
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Zap className="w-12 h-12 text-orange-400 mx-auto" />
                    <h4 className="text-xl font-semibold text-white">Conversions</h4>
                    <p className="text-gray-300">
                      Persuasive copy transforms visitors into customers at 3x higher rates
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Users className="w-12 h-12 text-orange-400 mx-auto" />
                    <h4 className="text-xl font-semibold text-white">Branding</h4>
                    <p className="text-gray-300">
                      Consistent voice builds trust and increases brand recognition by 89%
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-2xl font-semibold text-orange-400 mb-4">
                    Great copy isn't just words—it's strategy in action.
                  </p>
                  <p className="text-gray-300 text-lg">
                    Every sentence is crafted to guide your audience toward the action you want them to take.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCopyMatters;