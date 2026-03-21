"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const TopRepresentators = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const representators = [
    {
      name: 'Mubahil Ahmad',
      designation: 'PR Manager',
      image: 'https://res.cloudinary.com/dt9wziort/image/upload/v1760173180/team_members/lh6ozowvcrar6o914fpn.png',
      socials: {
        linkedin: 'https://www.linkedin.com/',
      }
    },
    {
      name: 'Syed Adnan Hamdani',
      designation: 'PR Manager',
      image: 'https://res.cloudinary.com/dt9wziort/image/upload/v1771271558/WhatsApp_Image_2026-02-16_at_18.20.02_oiop8a.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/adnan-hassan-b7525515a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const RepresentatorCard = ({ person, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleSocialClick = (e, url) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 mt-10 transition-all duration-700 transform ${isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-12 opacity-0'
          }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-end justify-center pb-4 transition-all duration-300 ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
          >
            <div className="z-10">
              <button
                onClick={(e) => handleSocialClick(e, person.socials.linkedin)}
                className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
                aria-label={`Visit ${person.name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          {/* Orange ring on hover */}
          <div
            className={`absolute inset-0 rounded-full border-4 border-orange-500 transition-all duration-300 pointer-events-none ${isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
              }`}
          />
        </div>

        <div className="text-center">
          <h4
            className={`text-xl font-semibold text-white transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            style={{ transitionDelay: `${index * 150 + 100}ms` }}
          >
            {person.name}
          </h4>
          <p
            className={`text-base italic text-orange-400 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            style={{ transitionDelay: `${index * 150 + 200}ms` }}
          >
            {person.designation}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="px-6 py-16 flex items-center justify-center flex-col min-h-[70vh]"
    >
      <h4
        className={`text-4xl md:text-5xl font-semibold text-white mb-4 text-center transition-all duration-900 transform ${isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-12 opacity-0 scale-95'
          }`}
      >
        OUR TOP{' '}
        <span className="text-orange-500 relative">
          REPRESENTATORS
          <div
            className={`absolute bottom-0 left-0 h-1 bg-orange-500 transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'
              }`}
            style={{ transitionDelay: '500ms' }}
          />
        </span>
      </h4>

      {/* Decorative line */}
      <div
        className={`w-24 h-0.5 bg-orange-500 mb-8 transition-all duration-800 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        style={{ transitionDelay: '300ms' }}
      />

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl w-full px-4">
        {representators.map((person, index) => (
          <div key={index} className="w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(20%-2rem)] min-w-[140px]">
            <RepresentatorCard person={person} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRepresentators;
