"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const leaders = [
    {
      name: 'Sayed Ali Turab',
      designation: 'CEO & Founder',
      image: '/images/ali.jpg',
      socials: {
        instagram: 'https://instagram.com/aliturabi',
        linkedin: 'https://linkedin.com/in/aliturabi',
        whatsapp: 'https://wa.me/+923001234567'
      }
    },
    {
      name: 'Sayed Tassawar Abbas',
      designation: 'Co-Founder',
      image: '/images/tassawar.webp',
      socials: {
        instagram: 'https://instagram.com/tassawarabbas',
        linkedin: 'https://linkedin.com/in/tassawarabbas',
        whatsapp: 'https://wa.me/+923001234568'
      }
    },
    {
      name: 'Sadaqat Mehmood',
      designation: 'COO',
      image: '/images/sadaqat.jpg',
      socials: {
        instagram: 'https://instagram.com/sadaqatmehmood',
        linkedin: 'https://linkedin.com/in/sadaqatmehmood',
        whatsapp: 'https://wa.me/+923001234569'
      }
    },
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

  const LeaderCard = ({ leader, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 mt-10 transition-all duration-700 transform ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div
          className="relative w-65 h-65 rounded-full overflow-hidden cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="260" height="260" xmlns="http://www.w3.org/2000/svg">
                  <rect width="260" height="260" fill="#000"/>
                  <circle cx="130" cy="100" r="40" fill="#ff6600"/>
                  <ellipse cx="130" cy="200" rx="60" ry="40" fill="#ff6600"/>
                </svg>
              `)}`;
            }}
          />
          
          {/* Overlay */}
          <div
            className={`absolute inset-0  bg-opacity-80 mt-30 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex gap-4">
              <a
                href={leader.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href={leader.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={leader.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Orange ring on hover */}
          <div
            className={`absolute inset-0 rounded-full border-4 border-orange-500 transition-all duration-300 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
            }`}
          />
        </div>

        <h4
          className={`text-2xl font-semibold text-white transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 200 + 100}ms` }}
        >
          {leader.name}
        </h4>
        <p
          className={`text-lg italic text-orange-400 transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 200 + 200}ms` }}
        >
          {leader.designation}
        </p>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className=" mt-20  px-10 flex items-center justify-center flex-col  min-h-screen "
    >
      <h4
        className={`text-6xl font-semibold text-white mb-4 transition-all duration-900 transform ${
          isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-12 opacity-0 scale-95'
        }`}
      >
        OUR{' '}
        <span className="text-orange-500 relative">
          LEADERS
          <div
            className={`absolute bottom-0 left-0 h-1 bg-orange-500 transition-all duration-1000 ${
              isVisible ? 'w-full' : 'w-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          />
        </span>
      </h4>

      {/* Decorative line */}
      <div
        className={`w-24 h-0.5 bg-orange-500  transition-all duration-800 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}
        style={{ transitionDelay: '300ms' }}
      />

      <div className="flex items-center justify-center gap-8 flex-wrap max-w-6xl">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} leader={leader} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Leadership;