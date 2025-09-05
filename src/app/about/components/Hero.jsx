"use client"
import { Mouse } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Split text into words for animation
  const orangeText = "Collaborating with genuine brands";
  const whiteText = "that follow their own paths";
  
  const orangeWords = orangeText.split(' ');
  const whiteWords = whiteText.split(' ');

  return (
    <section className="min-h-screen pt-20 items-center flex-col justify-end px-10 pb-10 flex relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center relative z-10 w-full">
        
        {/* Text Content */}
        <div className="w-2/3 relative">
          <h1 className="text-6xl leading-tight uppercase text-white overflow-hidden">
            
            {/* Orange Text Animation */}
            <span className="font-semibold text-orange-500 block mb-2">
              {orangeWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-4 transition-all duration-1000 ease-out ${
                    textVisible 
                      ? 'opacity-100 translate-y-0 blur-0' 
                      : 'opacity-0 translate-y-12 blur-sm'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.15}s`,
                    transform: textVisible ? 'rotateX(0deg)' : 'rotateX(-90deg)'
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
            
            {/* White Text Animation */}
            <span className="block">
              {whiteWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-4 transition-all duration-1000 ease-out ${
                    textVisible 
                      ? 'opacity-100 translate-y-0 blur-0' 
                      : 'opacity-0 -translate-y-12 blur-sm'
                  }`}
                  style={{
                    transitionDelay: `${(orangeWords.length + index) * 0.15}s`,
                    transform: textVisible ? 'rotateX(0deg)' : 'rotateX(90deg)'
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          
          {/* Animated Underline */}
          <div className={`h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-white mt-8 origin-left transition-all duration-1500 ease-out ${
            textVisible ? 'scale-x-100' : 'scale-x-0'
          }`} 
          style={{ transitionDelay: '2s' }} />
        </div>

        {/* Image with Advanced Animations */}
        <div className="absolute right-20 -top-30">
          <div className={`relative transition-all duration-2000 ease-out ${
            mounted 
              ? 'opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100' 
              : 'opacity-0 translate-x-32 -translate-y-16 rotate-12 scale-75'
          }`}>
            
            {/* Glowing Ring Effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-3000 ${
              textVisible ? 'animate-spin' : ''
            }`} 
            style={{ animationDuration: '20s' }}>
              <div className="w-full h-full border-2 border-orange-500/20 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-2 shadow-lg shadow-orange-500/50"></div>
            </div>
            
            {/* Pulsing Background */}
            <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-white/5 rounded-full blur-xl transition-all duration-1000 ${
              textVisible ? 'animate-pulse scale-110' : 'scale-100'
            }`} />
            
            {/* Main Image */}
            <img
              src="/images/aboutPage.png"
              width={600}
              height={600}
              className={`relative z-10 transition-all duration-1000 hover:scale-105 hover:rotate-1 filter ${
                textVisible ? 'drop-shadow-2xl' : 'drop-shadow-lg'
              }`}
              alt="About Page"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.target.src = "data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAbout Image%3C/text%3E%3C/svg%3E";
              }}
            />
            
            {/* Floating Elements Around Image */}
            <div className="absolute -top-8 -left-8 w-6 h-6 bg-white rounded-full animate-bounce" 
                 style={{ animationDelay: '0s', animationDuration: '3s' }} />
            <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-orange-500 rounded-full animate-bounce" 
                 style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
            <div className="absolute top-1/4 -left-12 w-2 h-2 bg-orange-300 rounded-full animate-ping" 
                 style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Advanced Animation */}
      <div className={`flex items-center justify-center w-full mt-20 relative z-10 transition-all duration-1500 ease-out ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} 
      style={{ transitionDelay: '2.5s' }}>
        
        {/* Animated Container */}
        <div className="relative group cursor-pointer">
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 w-16 h-16 border-2 border-white/20 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-12 h-12 border border-orange-500/30 rounded-full animate-pulse transform translate-x-2 translate-y-2"></div>
          
          {/* Mouse Icon with Custom Animation */}
          <div className="relative z-10 p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-orange-500 transition-all duration-300 group-hover:bg-orange-500/10">
            <Mouse 
              className="text-white group-hover:text-orange-500 transition-all duration-300 animate-bounce" 
              size={30}
              style={{ animationDuration: '2s' }}
            />
          </div>
          
          {/* Scroll Text */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white/60 text-sm uppercase tracking-wider">Scroll</p>
          </div>
        </div>
        
        {/* Animated Scroll Line */}
        <div className="absolute left-1/2 top-20 w-px h-20 bg-gradient-to-b from-orange-500 via-white to-transparent transform -translate-x-1/2 animate-pulse"></div>
      </div>

      {/* Side Decorative Elements - Hidden on Mobile */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden md:block">
        <div className="w-1 h-40 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse"></div>
      </div>
      <div className="absolute right-0 top-1/3 transform -translate-y-1/2 opacity-10 hidden md:block">
        <div className="w-1 h-60 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Text Reveal Effect Overlay */}
      <div className={`absolute inset-0 bg-black transition-all duration-2000 ease-out pointer-events-none ${
        mounted ? 'opacity-0' : 'opacity-100'
      }`} />
      
      <style jsx>{`
        @keyframes textReveal {
          0% { transform: rotateX(-90deg); opacity: 0; }
          50% { transform: rotateX(-45deg); opacity: 0.5; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;