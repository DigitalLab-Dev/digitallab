"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Search, Edit3, BarChart3, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Mock useInView hook since Framer Motion is not available
const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: options.threshold || 0.3,
        rootMargin: options.rootMargin || '-50px 0px',
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, inView];
};

const ProcessTimeline = () => {
  const processSteps = [
    {
      id: 1,
      title: "Research & Audience Analysis",
      description: "We dive deep into understanding your target audience, analyzing competitors, and researching industry trends to create copy that truly resonates with your ideal customers.",
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      side: 'left'
    },
    {
      id: 2,
      title: "Copy Drafting",
      description: "Our expert copywriters craft compelling, persuasive content tailored to your brand voice and objectives, ensuring every word serves a purpose in driving conversions.",
      icon: <Edit3 className="w-6 h-6 md:w-8 md:h-8" />,
      side: 'right'
    },
    {
      id: 3,
      title: "A/B Testing & Revisions",
      description: "We test different versions of your copy to optimize performance, making data-driven revisions that maximize engagement and conversion rates.",
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
      side: 'left'
    },
    {
      id: 4,
      title: "Final Delivery",
      description: "You receive polished, high-converting copy ready for implementation, complete with guidelines and recommendations for maximum impact.",
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      side: 'right'
    }
  ];

  const StepCard = ({ step, index }) => {
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true,
      rootMargin: '-50px 0px'
    });

    return (
      <div
        ref={ref}
        className={`relative flex flex-col lg:flex-row items-center ${
          step.side === 'right' ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Step Content */}
        <div
          className={`w-full lg:w-5/12 ${
            step.side === 'right' ? 'lg:pl-8 xl:pl-12' : 'lg:pr-8 xl:pr-12'
          }`}
        >
          <div
            className={`relative group transition-all duration-1000 transform ${
              inView
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Glow Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl transition-all duration-1000 ${
                inView ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`}
            ></div>
            
            {/* Card */}
            <div
              className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border rounded-3xl p-6 md:p-8 transition-all duration-1000 ${
                inView
                  ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20'
                  : 'border-gray-800/50'
              }`}
            >
              {/* Step Number */}
              <div
                className={`absolute -top-3 md:-top-4 ${
                  step.side === 'right' ? 'right-6 md:right-8' : 'left-6 md:left-8'
                } w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs md:text-sm transition-all duration-500 ${
                  inView ? 'scale-125 shadow-lg shadow-orange-500/50' : 'scale-100'
                }`}
              >
                {step.id}
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl md:rounded-2xl flex items-center justify-center text-black mb-4 md:mb-6 transition-all duration-500 ${
                  inView ? 'scale-110 shadow-lg shadow-orange-500/50' : 'scale-100'
                }`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {step.description}
              </p>

              {/* Progress Indicator */}
              <div
                className={`mt-4 md:mt-6 w-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-1000 delay-300 ${
                  inView ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* Timeline Center Point (Desktop) */}
        <div className="hidden lg:flex w-2/12 justify-center">
          <div
            className={`w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-2 xl:border-4 border-black transition-all duration-500 ${
              inView ? 'scale-150 shadow-lg shadow-orange-500/50' : 'scale-100'
            }`}
          ></div>
        </div>

        {/* Empty Space for Alternating Layout */}
        <div className="hidden lg:block w-5/12"></div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen bg-black py-10 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Our proven process ensures exceptional results every time
          </p>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full mt-4 md:mt-6"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-800 via-orange-500 to-yellow-400 opacity-30"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-20">
          <div className="inline-flex items-center justify-center px-6 md:px-4 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 cursor-pointer text-sm md:text-base">
          <Link href="/contact">
          
            <span>Ready to Start Your Project?</span>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;