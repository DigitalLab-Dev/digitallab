'use client';
import Image from 'next/image';
import Process from './Process';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Methods = () => {
  const steps = [
    {
      index: 1,
      heading: 'Planning',
      desc: 'Before we start, we determine if and how I can help you. What are your requirements for your new design? Why do you need a new design? What goals do you have in that, and what problem can we solve with a new design?',
      points: [
        'We get to know each other better',
        'Determine how I can best assist you',
        'Understand the goals you have for the work',
      ],
      image: '/images/planning.svg',
    },
    {
      index: 2,
      heading: 'Concept & Strategy',
      desc: 'Once we have assessed your requirements and objectives, we move into the concept and strategy phase. Here, we define the overall vision and strategic approach for your design project. What are the core ideas we want to develop?',
      points: ['UX/UI Design', 'Wireframes', 'Interactive Prototype'],
      image: '/images/strategy.svg',
    },
    {
      index: 3,
      heading: 'Design & Development',
      desc: 'In this phase, we turn concepts into tangible designs and start building functional components. Visuals, layouts, and interactions are crafted to bring the vision to life.',
      points: [
        'High-fidelity UI Designs',
        'Frontend Development',
        'Responsive Implementation',
      ],
      image: '/images/planning.svg', // reused
    },
    {
      index: 4,
      heading: 'Optimize & Scale',
      desc: 'At this stage, we fine-tune performance, implement best practices, and prepare your product to handle growth seamlessly. The focus is on efficiency, reliability, and scalability.',
      points: [
        'Performance Optimization',
        'Deployment & Monitoring',
        'Scalable Architecture',
      ],
      image: '/images/optimization.svg',
    },
    {
      index: 5,
      heading: 'Launch & Support',
      desc: 'Finally, we launch your product and continue to provide support. This includes tracking performance, resolving issues, and iterating on improvements.',
      points: [
        'Product Launch',
        'Post-launch Support',
        'Continuous Improvement',
      ],
      image: '/images/strategy.svg', // reused
    },
  ];
  const [currentImage, setCurrentImage] = useState(1);
  const images = [
    '/images/planning.webp',
    '/images/strategy.webp',
    '/images/development.webp',
    '/images/optimization.webp',
    '/images/launch.webp',
  ];
  return (
    <section className="w-full  py-20 flex flex-col items-center justify-center">
      <header className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="uppercase text-2xl sm:text-4xl text-[#f0750f]">
          Let me show HOW We do
        </h2>
        <h3 className="uppercase text-2xl  sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          discover our work method
        </h3>
        <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl uppercase">
          [ ©elevate your visual design with expert techniques and advicE ]
        </h4>
      </header>
      <div className="relative flex w-full rounded-4xl bg-black lg:items-start  items-center justify-center mt-10 min-h-screen">
        {/* Left Column (sticky) */}

        <div className="w-1/2 p-10 hidden sticky top-0 h-screen bg-black lg:flex items-center justify-center">
          <div className="w-full flex items-center justify-center relative">
            {images.map((img, i) => {
              if (i > currentImage - 1) return null; // future images not shown

              const isActive = i === currentImage - 1;

              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 1 - (currentImage - 1 - i) * 0.05,
                    rotate: isActive ? 0 : (currentImage - 1 - i) * 5,
                    y: isActive ? 0 : (currentImage - 1 - i) * 20,
                    zIndex: isActive ? 100 : i,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Image
                    src={img}
                    width={400}
                    height={400}
                    alt={`process-step-${i}`}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* <div className="relative w-[400px] h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={images[currentImage - 1]}
                  alt="process represent image"
                  fill
                  className="rounded-xl object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div> */}
        </div>
        {/* Right Section - Image stack */}

        {/* Right Column (scrollable content) */}
        <div className="w-full lg:w-1/2 p-10 space-y-20">
          {steps.map((step, index) => (
            <Process
              key={index}
              index={step.index}
              heading={step.heading}
              desc={step.desc}
              points={step.points}
              image={step.image}
              setCurrentImage={setCurrentImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;
