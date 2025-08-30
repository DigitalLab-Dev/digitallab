'use client';
// import Image from 'next/image';
// import React from 'react';

// const WhyUs = () => {
//   return (
//     <section className="w-full flex flex-col mt-10 items-center justify-center gap-5 px-5 mb-10">
//       <header className="text-center w-full flex flex-col items-center justify-center gap-5">
//         <h2 className="text-xl text-[#f0750f]">WHY US</h2>
//         <h3 className="text-5xl md:w-2/3 lg:w-1/2 capitalize">
//           How we deliver <span className="italican">better</span> work that
//           lasts
//         </h3>
//       </header>
      {/* <div className="flex flex-col md:flex-row items-center mt-5 justify-center gap-5 md:gap-2 min-h-screen">
        <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[30%]  h-screen">
          <div className="h-[60%] border rounded-xl bg-black relative overflow-hidden w-full flex flex-col items-center justify-start gap-2 p-3 ">
            <div className='z-10'>
              <h4 className="text-2xl font-bold text-white">
                Fast turnarounds
              </h4>
              <p className="text-white">
                Timelines are respected here. Expect quick handoffs, clear
                communication, and momentum that doesn’t stall.
              </p>
            </div>
            <Image
              src="/images/fast-turnaround.jpg"
              width={300}
              height={200}
              className="absolute bottom-0 right-20 md:left-0 "
              alt="fast clock"
            />
          </div>
          <div className="h-[40%] relative overflow-hidden bg-black border rounded-xl w-full flex flex-col items-end justify-start gap-2 p-3">
            <div className='z-10'>
              <h4 className="text-2xl font-bold">
                Iteration until satisfaction
              </h4>
              <p>
                Refinement is part of the process. We stay in the loop until
                you’re genuinely happy with the outcome.
              </p>
            </div>
            <Image
              src="/images/iteration.jpg"
              width={200}
              height={200}
              className="absolute bottom-0 right-20 md:right-0 "
              alt="fast clock"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[70%] h-screen">
          <div className="h-[40%] relative border rounded-xl w-full flex overflow-hidden bg-black  items-start justify-start gap-2 p-3">
            <div className='z-10'>
              <h4 className="text-2xl font-bold">Conversion focused</h4>
              <p className="w-1/2">
                Good design looks great, but it also works. Every decision is
                made with performance and user goals in mind.
              </p>
            </div>
            <Image
              src="/images/growth.jpg"
              width={400}
              height={200}
              className="absolute top-0 h-full right-0 "
              alt="fast clock"
            />
          </div>
          <div className="h-[60%] border relative rounded-xl bg-black w-full flex overflow-hidden items-start justify-start gap-2 p-3">
            <div className='z-10'>
              <h4 className="text-2xl font-bold">Quality over quantity</h4>
              <p className="w-1/2">
                We take on fewer projects so each one gets the attention,
                detail, and care it deserves.
              </p>
            </div>
            <Image
              src="/images/quantity.jpg"
              width={900}
              height={400}
              className="absolute top-0 right-0 h-full"
              alt="fast clock"
            />
          </div>
        </div>
//       </div> */}
//     </section>
//   );
// };

// export default WhyUs;




import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaBullseye, FaBolt, FaShieldAlt, FaGem, FaHandshake } from 'react-icons/fa';

const WhyUs = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  const reasons = [
    {
      id: 1,
      icon: FaBullseye,
      title: "Strategic Vision",
      description: "We don't just build websites, we craft digital strategies that align with your business goals and drive measurable results.",
      position: "left"
    },
    {
      id: 2,
      icon: FaBolt,
      title: "Lightning Fast Delivery",
      description: "Our streamlined processes and expert team ensure rapid development without compromising on quality or attention to detail.",
      position: "right"
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Future-Proof Solutions",
      description: "Built with scalability in mind, our solutions grow with your business and adapt to changing market demands effortlessly.",
      position: "left"
    },
    {
      id: 4,
      icon: FaGem,
      title: "Premium Quality",
      description: "Every pixel, every line of code, every interaction is meticulously crafted to deliver an exceptional user experience.",
      position: "right"
    },
    {
      id: 5,
      icon: FaHandshake,
      title: "Partnership Approach",
      description: "We become an extension of your team, providing ongoing support and strategic guidance for long-term success.",
      position: "left"
    }
  ];

  const ReasonCard = ({ reason, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { 
      threshold: 0.5,
      margin: "-20% 0px -20% 0px"
    });

    return (
      <motion.div
        ref={cardRef}
        initial={{ 
          opacity: 0, 
          x: reason.position === 'left' ? -100 : 100,
          y: 50 
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0, 
          y: 0 
        }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        viewport={{ once: true, amount: 0.3 }}
        className={`relative w-full max-w-lg ${reason.position === 'right' ? 'ml-auto' : ''}`}
      >
        {/* Glassmorphism Card */}
        <motion.div
          whileHover={{ 
            scale: 1.02,
            y: -5
          }}
          transition={{ duration: 0.3 }}
          className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(244, 128, 32, 0.15) 0%, transparent 70%)'
            }}
          />
          
          {/* Lit up effect when in view */}
          <motion.div
            className="absolute inset-0 transition-all duration-1000"
            animate={isInView ? {
              background: [
                'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0) 0%, rgba(255, 193, 7, 0) 100%)',
                'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0) 70%)',
                'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0) 60%)'
              ]
            } : {
              background: 'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0) 0%, rgba(255, 193, 7, 0) 100%)'
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent"
            animate={isInView ? {
              borderColor: ["rgba(244, 128, 32, 0)", "rgba(244, 128, 32, 0.3)", "rgba(244, 128, 32, 0.5)"]
            } : {
              borderColor: "rgba(244, 128, 32, 0)"
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          
          <div className="relative z-10">
            {/* Icon with pulsing animation when active */}
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f48020] to-[#e67017] flex items-center justify-center text-2xl mb-6 shadow-lg"
              animate={isInView ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 8px 32px rgba(244, 128, 32, 0.3)",
                  "0 8px 32px rgba(244, 128, 32, 0.6)",
                  "0 8px 32px rgba(244, 128, 32, 0.3)"
                ]
              } : {
                scale: 1,
                boxShadow: "0 8px 32px rgba(244, 128, 32, 0.2)"
              }}
              transition={{ 
                duration: 2, 
                repeat: isInView ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <reason.icon className="text-white text-xl filter drop-shadow-sm" />
            </motion.div>

            {/* Content */}
            <motion.h4
              className="text-2xl font-bold text-white mb-4"
              animate={isInView ? { color: ["#ffffff", "#f48020", "#ffffff"] } : { color: "#ffffff" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {reason.title}
            </motion.h4>
            
            <motion.p
              className="text-gray-300 leading-relaxed text-lg"
              animate={isInView ? { opacity: [0.8, 1, 0.8] } : { opacity: 0.8 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              {reason.description}
            </motion.p>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-[#f48020] rounded-full"
            animate={isInView ? {
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            } : {
              scale: 1,
              opacity: 0.3
            }}
            transition={{ duration: 2, repeat: isInView ? Infinity : 0 }}
          />
          
          <motion.div
            className="absolute bottom-6 right-6 w-1 h-1 bg-white rounded-full"
            animate={isInView ? {
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3]
            } : {
              scale: 1,
              opacity: 0.2
            }}
            transition={{ duration: 1.5, repeat: isInView ? Infinity : 0, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="w-full flex flex-col mt-10 items-center overflow-hidden justify-center gap-5 px-5 mb-10 bg-black min-h-screen">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center w-full flex flex-col items-center justify-center gap-5 mb-16"
      >
        <motion.h2 
          className="text-xl text-[#f0750f] font-semibold tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          WHY US
        </motion.h2>
        <motion.h3 
          className="text-5xl md:w-2/3 lg:w-1/2 capitalize text-white font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          How we deliver <span className="italican text-[#f48020]">better</span> work that lasts
        </motion.h3>
      </motion.header>

      {/* Main Content */}
      <div 
        ref={containerRef}
        className="w-full max-w-7xl mx-auto relative"
      >
        {/* Desktop Layout with Progress Bar */}
        <div className="hidden lg:block relative">
          {/* Progress Bar Container */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex flex-col items-center z-10">
            {/* Background Track */}
            <motion.div
              ref={progressRef}
              className="w-1 bg-white/20 relative rounded-full overflow-hidden"
              style={{ height: `${reasons.length * 380}px` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Progress Fill */}
              <motion.div
                className="w-full bg-gradient-to-b from-[#f48020] to-[#e67017] rounded-full origin-top shadow-lg shadow-orange-500/50"
                style={{ height: progressHeight }}
                initial={{ height: "0%" }}
              />
              
              {/* Glowing dot at the end */}
              <motion.div
                className="absolute w-4 h-4 bg-[#f48020] rounded-full shadow-lg shadow-orange-500/50 left-1/2 transform -translate-x-1/2"
                style={{ 
                  top: progressHeight,
                  y: useTransform(progressHeight, (value) => `calc(${value} - 8px)`)
                }}
              />
            </motion.div>
          </div>

          {/* Reason Cards */}
          <div className="space-y-32 py-10">
            {reasons.map((reason, index) => (
              <div 
                key={reason.id}
                className={`flex ${reason.position === 'left' ? 'justify-start' : 'justify-end'} px-16`}
              >
                <ReasonCard reason={reason} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <motion.div
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#f48020]/50 to-transparent mt-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </section>
  );
};

export default WhyUs;