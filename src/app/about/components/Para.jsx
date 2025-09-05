'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Para = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Split text into words
    const split = new SplitType(textRef.current, { types: 'words' });

    // Animate words
    gsap.from(split.words, {
      y: 100,           // slide up
      opacity: 0,
      stagger: 0.05,    // delay between words
      ease: 'power3.out',
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play reverse play reverse',
      },
    });

    return () => {
      split.revert(); // clean up
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="mt-20 px-10 flex items-center justify-center text-center">
      <h4
        ref={textRef}
        className="text-5xl w-3/4 font-light text-white leading-snug"
      >
        <span className="font-semibold">We are a Brand Evolution Studio. </span>{' '}
        <span className="font-semibold">We partner with our clients</span> to
        bring about their vision through brand experiences,{' '}
        <span className="font-semibold">
          that connect, transform and empower their businesses.
        </span>
      </h4>
    </section>
  );
};

export default Para;
