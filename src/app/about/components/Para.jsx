// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitType from 'split-type';

// gsap.registerPlugin(ScrollTrigger);

// const Para = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     // Split text into words
//     const split = new SplitType(textRef.current, { types: 'words' });

//     // Animate words
//     gsap.from(split.words, {
//       y: 100,           // slide up
//       opacity: 0,
//       stagger: 0.05,    // delay between words
//       ease: 'power3.out',
//       duration: 1,
//       scrollTrigger: {
//         trigger: textRef.current,
//         start: 'top 80%',
//         end: 'bottom 60%',
//         toggleActions: 'play reverse play reverse',
//       },
//     });

//     return () => {
//       split.revert(); // clean up
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section className="mt-20 px-10 flex items-center justify-center text-center">
//       <h4
//         ref={textRef}
//         className="text-5xl w-3/4 font-light text-white leading-snug"
//       >
//         <span className="font-semibold">We are a Brand Evolution Studio. </span>{' '}
//         <span className="font-semibold">We partner with our clients</span> to
//         bring about their vision through brand experiences,{' '}
//         <span className="font-semibold">
//           that connect, transform and empower their businesses.
//         </span>
//       </h4>
//     </section>
//   );
// };

// export default Para;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Para = () => {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into words
    splitRef.current = new SplitType(textRef.current, { types: 'words' });

    // Animate words
    gsap.from(splitRef.current.words, {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 75%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      className="py-10  px-4 sm:px-6 md:px-8 lg:px-12"
      aria-labelledby="brand-statement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <h2
          id="brand-statement"
          ref={textRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-3/4 font-light text-white leading-relaxed sm:leading-relaxed md:leading-snug text-center"
        >
          <strong className="font-semibold">We are a Brand Evolution Studio.</strong>{' '}
          <strong className="font-semibold">We partner with ambitious clients</strong>
         to create brand experiences ,{' '}
          <strong className="font-semibold">
           that connect, inspire, and deliver real results.
          </strong>
        </h2>
      </div>
    </section>
  );
};

export default Para;