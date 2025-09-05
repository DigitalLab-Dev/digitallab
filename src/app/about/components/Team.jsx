"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  // Dummy team data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Chief Executive Officer",
      description: "Sarah brings over 15 years of experience in strategic leadership and business development. She's passionate about innovation and driving sustainable growth in the tech industry.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Chief Technology Officer",
      description: "Michael is a visionary technologist with expertise in AI and machine learning. He leads our technical strategy and ensures we stay at the forefront of technological advancement.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Head of Design",
      description: "Emily combines creativity with user-centered design principles to create exceptional experiences. Her innovative approach has transformed how users interact with our products.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      designation: "VP of Marketing",
      description: "David is a strategic marketing leader who excels at building brands and driving customer engagement. His data-driven approach has consistently delivered exceptional results.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Wang",
      designation: "Head of Operations",
      description: "Lisa ensures operational excellence across all departments. Her systematic approach and attention to detail keep our organization running smoothly and efficiently.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible && !isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isVisible, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      setIsTransitioning(false);
    }, 150);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className=" min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Team Member Card */}
        <div className={`relative transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Image Section */}
              <div className="relative flex-shrink-0">
                <div className={`transition-all duration-500 ${
                  isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                }`}>
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-orange-500/30">
                      <img 
                        src={currentMember.image} 
                        alt={currentMember.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x400/1f2937/ffffff?text=${currentMember.name.split(' ').map(n => n[0]).join('')}`;
                        }}
                      />
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className={`transition-all duration-500 delay-100 ${
                  isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
                }`}>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                    {currentMember.name}
                  </h3>
                  <p className="text-orange-500 text-xl md:text-2xl font-semibold mb-6 uppercase tracking-wide">
                    {currentMember.designation}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                    {currentMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="pointer-events-auto bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-full border border-gray-700 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft size={24} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="pointer-events-auto bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-full border border-gray-700 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className={`flex justify-center mt-8 space-x-3 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 150);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-orange-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Member Counter */}
        <div className={`text-center mt-6 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-gray-400 text-lg">
            <span className="text-orange-500 font-bold">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{teamMembers.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;