// 'use client';
// import Image from 'next/image';
// import Process from './Process';
// import { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Methods = () => {
//   const steps = useMemo(() => [
//     {
//       index: 1,
//       heading: 'Planning',
//       desc: 'We start by listening. Together, we define what you need, why you need it, and how it connects to your bigger goals.',
//       points: [
//         'Understand your business challenges and goals',
//         'Discuss opportunities and expectations',
//         'Map out a clear plan forward',
//       ],
//       image: '/images/planning.svg',
//     },
//     {
//       index: 2,
//       heading: 'Concept & Strategy',
//       desc: 'This is where ideas meet direction. We shape a strategy that reflects your vision and ensures every move has a clear purpose.',
//       points: ['Define the big idea behind the project', 'Outline the right digital approach', 'Align the concept with your business goals'],
//       image: '/images/strategy.svg',
//     },
//     {
//       index: 3,
//       heading: 'Design & Development',
//       desc: 'Now your vision starts taking shape. From visuals to functionality, we craft experiences that look great, work seamlessly, and feel effortless to use.',
//       points: [
//         'Beautiful, user-friendly designs',
//         'Clean, reliable development',
//         'Responsive layouts for all devices',
//       ],
//       image: '/images/planning.svg',
//     },
//     {
//       index: 4,
//       heading: 'Optimize & Scale',
//       desc: 'We refine, improve, and prepare your project for growth. Performance and scalability are built-in so you are ready for tomorrow.',
//       points: [
//         'Test and improve for best performance',
//         'Ensure scalability for future growth',
//         'Build efficiency into every detail',
//       ],
//       image: '/images/optimization.svg',
//     },
//     {
//       index: 5,
//       heading: 'Launch & Support',
//       desc: 'Your project goes live, but we dont stop there. We provide ongoing support, improvements, and care to help your brand thrive long term.',
//       points: [
//         'Smooth launch and rollout',
//         'Dedicated post-launch support',
//         'Continuous updates and improvements',
//       ],
//       image: '/images/strategy.svg', 
//     },
//   ], []);

//   const [currentImage, setCurrentImage] = useState(1);
  
//   const images = useMemo(() => [
//     '/images/planning.webp',
//     '/images/concept.webp',
//     '/images/design.webp',
//     '/images/optimize.webp',
//     '/images/launch.webp',
//   ], []);

//   return (
//     <section 
//       className="w-full py-10 px-5 flex flex-col items-center justify-center"
//       aria-labelledby="methods-heading"
//       itemScope
//       itemType="https://schema.org/HowTo"
//     >
//       <header className="w-full flex flex-col items-center justify-center gap-5">
//         <p className="uppercase text-center text-2xl sm:text-4xl text-[#f0750f]">
//           Let's Walk You Through Our Process
//         </p>
//         <h2 
//           id="methods-heading"
//           className="uppercase text-2xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
//           itemProp="name"
//         >
//           discover our work method
//         </h2>
//         <p className="text-sm sm:text-lg md:text-xl text-center uppercase">
//           Discover the journey we take together to grow your brand <br /> Step by step,
//           your brand moves closer to its best version
//         </p>
//       </header>

//       <div className="relative flex w-full rounded-4xl bg-black lg:items-start items-center justify-center mt-10 min-h-screen">
//         {/* Left Column (sticky) - Image Stack */}
//         <div 
//           className="w-1/2 p-10 hidden sticky top-0 h-screen bg-black lg:flex items-center justify-center"
//           aria-hidden="true"
//         >
//           <div className="w-full flex items-center justify-center relative">
//             <AnimatePresence mode="wait">
//               {images.map((img, i) => {
//                 if (i > currentImage - 1) return null;

//                 const isActive = i === currentImage - 1;
//                 const stackPosition = currentImage - 1 - i;

//                 return (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     initial={{ 
//                       opacity: 0,
//                       scale: 0.9,
//                       y: 20
//                     }}
//                     animate={{
//                       scale: isActive ? 1 : 1 - stackPosition * 0.05,
//                       rotate: isActive ? 0 : stackPosition * 5,
//                       y: isActive ? 0 : stackPosition * 20,
//                       zIndex: isActive ? 100 : i,
//                       opacity: isActive ? 1 : 0.7 - stackPosition * 0.2,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       scale: 0.9,
//                       y: -20,
//                       transition: { duration: 0.4, ease: 'easeInOut' }
//                     }}
//                     transition={{ 
//                       duration: 0.6, 
//                       ease: 'easeInOut',
//                       opacity: { duration: 0.5 }
//                     }}
//                   >
//                     <Image
//                       src={img}
//                       width={400}
//                       height={400}
//                       alt={`${steps[i].heading} process visualization`}
//                       className="rounded-lg shadow-lg"
//                       priority={i === 0}
//                       loading={i === 0 ? 'eager' : 'lazy'}
//                     />
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Column (scrollable content) */}
//         <div 
//           className="w-full lg:w-1/2 p-10 space-y-20"
//           role="list"
//           aria-label="Process steps"
//         >
//           {steps.map((step, index) => (
//             <Process
//               key={step.index}
//               index={step.index}
//               heading={step.heading}
//               desc={step.desc}
//               points={step.points}
//               image={step.image}
//               setCurrentImage={setCurrentImage}
//               totalSteps={steps.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Methods;



'use client';
import Image from 'next/image';
import Process from './Process';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Methods = () => {
  const steps = useMemo(() => [
    {
      index: 1,
      heading: 'Planning',
      desc: 'We start by listening. Together, we define what you need, why you need it, and how it connects to your bigger goals.',
      points: [
        'Understand your business challenges and goals',
        'Discuss opportunities and expectations',
        'Map out a clear plan forward',
      ],
      image: '/images/planning.svg',
    },
    {
      index: 2,
      heading: 'Concept & Strategy',
      desc: 'This is where ideas meet direction. We shape a strategy that reflects your vision and ensures every move has a clear purpose.',
      points: ['Define the big idea behind the project', 'Outline the right digital approach', 'Align the concept with your business goals'],
      image: '/images/strategy.svg',
    },
    {
      index: 3,
      heading: 'Design & Development',
      desc: 'Now your vision starts taking shape. From visuals to functionality, we craft experiences that look great, work seamlessly, and feel effortless to use.',
      points: [
        'Beautiful, user-friendly designs',
        'Clean, reliable development',
        'Responsive layouts for all devices',
      ],
      image: '/images/planning.svg',
    },
    {
      index: 4,
      heading: 'Optimize & Scale',
      desc: 'We refine, improve, and prepare your project for growth. Performance and scalability are built-in so you are ready for tomorrow.',
      points: [
        'Test and improve for best performance',
        'Ensure scalability for future growth',
        'Build efficiency into every detail',
      ],
      image: '/images/optimization.svg',
    },
    {
      index: 5,
      heading: 'Launch & Support',
      desc: 'Your project goes live, but we dont stop there. We provide ongoing support, improvements, and care to help your brand thrive long term.',
      points: [
        'Smooth launch and rollout',
        'Dedicated post-launch support',
        'Continuous updates and improvements',
      ],
      image: '/images/strategy.svg', 
    },
  ], []);

  const [currentImage, setCurrentImage] = useState(1);
  
  const images = useMemo(() => [
    '/images/planning.webp',
    '/images/concept.webp',
    '/images/design.webp',
    '/images/optimize.webp',
    '/images/launch.webp',
  ], []);

  return (
    <section 
      className="w-full py-10 px-5 flex flex-col items-center justify-center"
      aria-labelledby="methods-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <header className="w-full flex flex-col items-center justify-center gap-5">
        <p className="uppercase text-center text-2xl sm:text-4xl text-[#f0750f]">
          Let's Walk You Through Our Process
        </p>
        <h2 
          id="methods-heading"
          className="uppercase text-2xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          itemProp="name"
        >
          discover our work method
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-center uppercase">
          Discover the journey we take together to grow your brand <br /> Step by step,
          your brand moves closer to its best version
        </p>
      </header>

      <div className="relative flex w-full rounded-4xl bg-black lg:items-start items-center justify-center mt-10 min-h-screen">
        {/* Left Column (sticky) - Image Stack - Hidden on mobile/tablet, visible on lg+ */}
        <div 
          className="w-1/2 p-10 hidden lg:flex sticky top-0 h-screen bg-black items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-full flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {images.map((img, i) => {
                if (i > currentImage - 1) return null;

                const isActive = i === currentImage - 1;
                const stackPosition = currentImage - 1 - i;

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{ 
                      opacity: 0,
                      scale: 0.9,
                      y: 20
                    }}
                    animate={{
                      scale: isActive ? 1 : 1 - stackPosition * 0.05,
                      rotate: isActive ? 0 : stackPosition * 5,
                      y: isActive ? 0 : stackPosition * 20,
                      zIndex: isActive ? 100 : i,
                      opacity: isActive ? 1 : 0.7 - stackPosition * 0.2,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: -20,
                      transition: { duration: 0.4, ease: 'easeInOut' }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: 'easeInOut',
                      opacity: { duration: 0.5 }
                    }}
                  >
                    <Image
                      src={img}
                      width={400}
                      height={400}
                      alt={`${steps[i].heading} process visualization`}
                      className="rounded-lg shadow-lg"
                      priority={i === 0}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column (scrollable content) */}
        <div 
          className="w-full lg:w-1/2 p-5 md:p-10 space-y-10 md:space-y-20"
          role="list"
          aria-label="Process steps"
        >
          {steps.map((step, index) => (
            <Process
              key={step.index}
              index={step.index}
              heading={step.heading}
              desc={step.desc}
              points={step.points}
              image={step.image}
              setCurrentImage={setCurrentImage}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;