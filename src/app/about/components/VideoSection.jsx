'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    gsap.fromTo(
      el,
      { scale: 0.5 },
      {
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',   // when section enters viewport
          end: 'bottom 20%',  // when leaving
          scrub: true,        // smooth scroll animation
          toggleActions: 'play reverse play reverse', 
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 px-10">
      <div className="w-full mx-auto">
        <Image
          ref={imgRef}
          src="/images/about.webp"
          width={300}
          height={300}
          alt="about"
          className="w-full h-[600px] rounded-2xl"
        />
      </div>
    </section>
  );
};

export default VideoSection;
