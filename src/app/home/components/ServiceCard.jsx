// "use client";

// import Link from "next/link";
// import React, { useRef } from "react";
// import { MdArrowForward } from "react-icons/md";
// import { motion, useAnimation } from "framer-motion";

// const ServiceCard = ({ icon: Icon, heading, para, link, index }) => {
//   const glowRef = useRef(null);
//   const cardRef = useRef(null);
//   const controls = useAnimation();

//   // Tilt + glow effect
//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // glow
//     if (glowRef.current) {
//       glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(251,191,36,0.2), transparent 40%)`;
//     }

//     // tilt
//     const rotateX = ((y / rect.height) - 0.5) * 10;
//     const rotateY = ((x / rect.width) - 0.5) * 10;
//     cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const handleMouseLeave = () => {
//     if (glowRef.current) glowRef.current.style.background = "transparent";
//     cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="relative w-full sm:w-[350px] h-[400px] flex flex-col items-start justify-between p-6 rounded-xl overflow-hidden border border-white/20 backdrop-blur-xl bg-black/10 shadow-xl transition-transform duration-300"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       viewport={{ once: true }}
//     >
//       {/* Glow Effect */}
//       <div
//         ref={glowRef}
//         className="absolute inset-0 pointer-events-none transition duration-300"
//       />

//       {/* Icon */}
//       <Icon className="text-6xl text-orange-400 relative z-10" />

//       {/* Content */}
//       <div className="flex flex-col items-start justify-start gap-4 relative z-10">
//         <h3 className="text-3xl mb-3 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//           {heading}
//         </h3>
//         <p className="text-zinc-300">{para}</p>
//         <Link
//           href={link}
//           className="flex gap-2 items-center justify-center text-orange-400 hover:text-orange-500 transition"
//         >
//           Learn More <MdArrowForward />
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCard;

"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Mock icon component for demo
const MockIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
    🚀
  </div>
);

// Particle component
const Particle = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-1 h-1 bg-orange-400 rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 1, 0], 
      scale: [0, 1, 1, 0],
      x: [0, Math.random() * 20 - 10],
      y: [0, Math.random() * 20 - 10]
    }}
    transition={{ 
      duration: 3,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const ServiceCard = ({ 
  icon: Icon = MockIcon, 
  heading = "Sample Service", 
  para = "This is a sample service description that shows how the card will look with your content.",
  link = "#",
  index = 0 
}) => {
  const cardRef = useRef(null);
  const iconGlowRef = useRef(null);
  const [showGlow, setShowGlow] = useState(false);

  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Inverted for natural tilt
    const rotateY = ((x - centerX) / centerX) * 15;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseEnter = () => {
    setShowGlow(true);
    // Auto hide glow after 5 seconds
    setTimeout(() => {
      setShowGlow(false);
    }, 5000);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full sm:w-[350px] h-[400px] bg-[#1a1a1a] rounded-xl overflow-hidden border border-orange-500/20 shadow-2xl transition-all duration-300 ease-out"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Background Particles */}
      {particles.map(particle => (
        <Particle 
          key={particle.id} 
          x={particle.x} 
          y={particle.y} 
          delay={particle.delay}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Icon Section */}
        <div className="relative">
          <motion.div
            ref={iconGlowRef}
            className="absolute -top-10 -left-10 w-32 h-32 rounded-full"
            style={{
              background: showGlow 
                ? 'radial-gradient(circle, rgba(251,146,60,0.4) 0%, rgba(251,191,36,0.2) 40%, transparent 70%)'
                : 'transparent'
            }}
            animate={{
              opacity: showGlow ? [0, 1, 1, 0] : 0,
              scale: showGlow ? [0.8, 1.2, 1.2, 0.8] : 1
            }}
            transition={{
              duration: showGlow ? 5 :0.3,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-20">
            <Icon className="text-6xl text-orange-400" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {heading}
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            {para}
          </p>
          
          <motion.a
            href={link}
            className="flex gap-2 items-center text-orange-400 hover:text-orange-300 transition-colors group"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Learn More 
            <motion.span
              className="text-xl"
              animate={{ x: [0, 3, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Subtle border glow on hover */}
      <motion.div 
        className="absolute inset-0 rounded-xl border border-orange-500/0 pointer-events-none"
        whileHover={{
          borderColor: "rgba(251,146,60,0.3)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
export default ServiceCard;