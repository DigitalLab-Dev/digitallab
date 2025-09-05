'use client';
import React, { useState, useEffect, useRef } from 'react';

// UHeading Component
const UHeading = ({ text1, text2 }) => {
  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
      <span className="text-white mr-4">{text1}</span>
      <span
        className="text-orange-500"
        style={{
          textShadow:
            '3px 3px 0px rgba(0, 0, 0, 0.8), 6px 6px 0px rgba(255, 165, 0, 0.3)',
        }}
      >
        {text2}
      </span>
    </h2>
  );
};

const Mission = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  const missions = [
    {
      id: 'vision',
      text1: 'Our',
      text2: 'vision',
      content:
        'We envision a world where innovative technology seamlessly integrates with human creativity to solve complex challenges. Our vision is to be the leading catalyst for digital transformation, empowering businesses and individuals to achieve extraordinary results through cutting-edge solutions and sustainable practices.',
    },
    {
      id: 'mission',
      text1: 'Our',
      text2: 'mission',
      content:
        "Our mission is to deliver exceptional digital experiences that drive meaningful impact. We are committed to creating solutions that not only meet our clients' needs but exceed their expectations. Through collaboration, innovation, and relentless pursuit of excellence, we transform ideas into reality.",
    },
    {
      id: 'journey',
      text1: 'Our',
      text2: 'journey',
      content:
        'Founded on the principles of innovation and integrity, our journey began with a simple belief: that technology should serve humanity. Over the years, we have grown from a small team of passionate individuals to a trusted partner for businesses worldwide, always staying true to our core values and commitment to excellence.',
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({
                ...prev,
                [index]: true,
              }));
            }
          },
          {
            threshold: 0.2,
            rootMargin: '-50px 0px',
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="w-full mt-10 md:mt-20 mb-10 flex flex-col gap-16 md:gap-20 lg:gap-24 items-center justify-center px-4 md:px-10 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '3s' }}
        />
      </div>

      {missions.map((mission, index) => {
        const isVisible = visibleSections[index];
        const isEven = index % 2 === 0;

        return (
          <div
            key={mission.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="w-full flex flex-col items-center justify-center relative"
          >
            {/* Mission Content */}
            <div
              className={`w-full max-w-4xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Text Content */}
              <div
                className={`flex-1 flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left transition-all duration-1000 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : `opacity-0 translate-y-12 ${
                        isEven ? 'lg:-translate-x-12' : 'lg:translate-x-12'
                      }`
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Animated Heading */}
                <div
                  className={`transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
                >
                  <UHeading text1={mission.text1} text2={mission.text2} />
                </div>

                {/* Animated Underline */}
                <div
                  className={`h-1 w-24 bg-gradient-to-r from-orange-500 to-white origin-center transition-all duration-1000 ease-out ${
                    isVisible
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.2 + 0.6}s` }}
                />

                {/* Animated Paragraph */}
                <p
                  className={`text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl transition-all duration-1000 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 0.2 + 0.9}s` }}
                >
                  {mission.content}
                </p>
              </div>

              {/* Decorative Visual Element */}
              <div
                className={`flex-shrink-0 transition-all duration-1200 ease-out ${
                  isVisible
                    ? 'opacity-100 scale-100 rotate-0'
                    : `opacity-0 scale-75 ${
                        isEven ? 'rotate-12' : '-rotate-12'
                      }`
                }`}
                style={{ transitionDelay: `${index * 0.2 + 0.4}s` }}
              >
                <div className="relative">
                  {/* Main Circle */}
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-white/5 border-2 border-orange-500/30 flex items-center justify-center backdrop-blur-sm">
                    {/* Inner Content */}
                    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-black/80 border border-white/20 flex items-center justify-center">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-bounce"
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: '2s',
                    }}
                  />
                  <div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full animate-bounce"
                    style={{
                      animationDelay: `${index * 0.5 + 1}s`,
                      animationDuration: '2.5s',
                    }}
                  />

                  {/* Rotating Ring */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 border-dashed border-orange-500/40 transition-all duration-1000 ${
                      isVisible ? 'animate-spin' : ''
                    }`}
                    style={{
                      animationDuration: '15s',
                      animationDelay: `${index * 0.2 + 1}s`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Section Divider (except last) */}
            {index < missions.length - 1 && (
              <div
                className={`mt-16 md:mt-20 lg:mt-24 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-30 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
                style={{ transitionDelay: `${index * 0.2 + 1.2}s` }}
              >
                <div className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                <div className="flex justify-center mt-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Bottom Decorative Element */}
      <div
        className={`mt-10 transition-all duration-1000 ease-out ${
          visibleSections[2]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '2.5s' }}
      >
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-500" />
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-500" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
