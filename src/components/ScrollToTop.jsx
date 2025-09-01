'use client';
import React, { useState, useEffect } from 'react';

import { MdArrowUpward } from 'react-icons/md';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);

      // Show/hide button based on scroll position (100vh = window.innerHeight)
      setIsVisible(scrollTop > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Convert percentage to stroke-dashoffset for circular progress
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-14 h-14 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-200 ease-out group active:scale-95"
        aria-label="Scroll to top"
      >
        {/* Circular Progress Bar */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 48 48"
        >
          {/* Background Circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150 ease-out"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))',
            }}
          />
        </svg>

        {/* Arrow Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MdArrowUpward className="w-6 h-6 text-white/90 group-hover:text-white transition-all duration-200 group-hover:-translate-y-0.5" />
        </div>

        {/* Glassmorphic shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default ScrollToTop;
