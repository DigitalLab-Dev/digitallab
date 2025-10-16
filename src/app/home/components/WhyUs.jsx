// 'use client';
// import React, { useRef, memo } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import { FaBullseye, FaBolt, FaShieldAlt, FaGem, FaHandshake } from 'react-icons/fa';

// // Memoized ReasonCard component for better performance
// const ReasonCard = memo(({ reason, index }) => {
//   const cardRef = useRef(null);
//   const isInView = useInView(cardRef, { 
//     threshold: 0.5,
//     margin: "-20% 0px -20% 0px",
//     once: false
//   });

//   // Optimized animation variants
//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       x: reason.position === 'left' ? -100 : 100,
//       y: 50 
//     },
//     visible: { 
//       opacity: 1, 
//       x: 0, 
//       y: 0,
//       transition: {
//         duration: 0.8, 
//         delay: index * 0.1,
//         ease: [0.25, 0.46, 0.45, 0.94]
//       }
//     }
//   };

//   const hoverVariants = {
//     scale: 1.02,
//     y: -5,
//     transition: { duration: 0.3 }
//   };

//   return (
//     <motion.article
//       ref={cardRef}
//       initial="hidden"
//       whileInView="visible"
//       variants={cardVariants}
//       viewport={{ once: true, amount: 0.3 }}
//       className={`relative w-full max-w-lg ${reason.position === 'right' ? 'ml-auto' : ''}`}
//       itemScope
//       itemType="https://schema.org/Service"
//     >
//       <motion.div
//         whileHover={hoverVariants}
//         className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
//       >
//         {/* Animated Background Glow */}
//         <div
//           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//           style={{
//             background: 'radial-gradient(circle at center, rgba(244, 128, 32, 0.15) 0%, transparent 70%)'
//           }}
//           aria-hidden="true"
//         />
        
//         {/* Lit up effect when in view */}
//         <motion.div
//           className="absolute inset-0 transition-all duration-1000 pointer-events-none"
//           animate={isInView ? {
//             background: [
//               'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0) 0%, rgba(255, 193, 7, 0) 100%)',
//               'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0) 70%)',
//               'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0) 60%)'
//             ]
//           } : {
//             background: 'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0) 0%, rgba(255, 193, 7, 0) 100%)'
//           }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           aria-hidden="true"
//         />
        
//         {/* Animated border */}
//         <motion.div
//           className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
//           animate={isInView ? {
//             borderColor: ["rgba(244, 128, 32, 0)", "rgba(244, 128, 32, 0.3)", "rgba(244, 128, 32, 0.5)"]
//           } : {
//             borderColor: "rgba(244, 128, 32, 0)"
//           }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           aria-hidden="true"
//         />
        
//         <div className="relative z-10">
//           {/* Icon with pulsing animation when active */}
//           <motion.div
//             className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f48020] to-[#e67017] flex items-center justify-center text-2xl mb-6 shadow-lg"
//             animate={isInView ? {
//               scale: [1, 1.1, 1],
//               boxShadow: [
//                 "0 8px 32px rgba(244, 128, 32, 0.3)",
//                 "0 8px 32px rgba(244, 128, 32, 0.6)",
//                 "0 8px 32px rgba(244, 128, 32, 0.3)"
//               ]
//             } : {
//               scale: 1,
//               boxShadow: "0 8px 32px rgba(244, 128, 32, 0.2)"
//             }}
//             transition={{ 
//               duration: 2, 
//               repeat: isInView ? Infinity : 0,
//               ease: "easeInOut"
//             }}
//             aria-hidden="true"
//           >
//             <reason.icon className="text-white text-xl filter drop-shadow-sm" />
//           </motion.div>

//           {/* Content */}
//           <motion.h3
//             className="text-2xl font-bold text-white mb-4"
//             animate={isInView ? { color: ["#ffffff", "#f48020", "#ffffff"] } : { color: "#ffffff" }}
//             transition={{ duration: 2, ease: "easeInOut" }}
//             itemProp="name"
//           >
//             {reason.title}
//           </motion.h3>
          
//           <motion.p
//             className="text-gray-300 leading-relaxed text-lg"
//             animate={isInView ? { opacity: [0.8, 1, 0.8] } : { opacity: 0.8 }}
//             transition={{ duration: 3, ease: "easeInOut" }}
//             itemProp="description"
//           >
//             {reason.description}
//           </motion.p>
//         </div>

//         {/* Decorative elements */}
//         <motion.div
//           className="absolute top-4 right-4 w-2 h-2 bg-[#f48020] rounded-full pointer-events-none"
//           animate={isInView ? {
//             scale: [1, 1.5, 1],
//             opacity: [0.5, 1, 0.5]
//           } : {
//             scale: 1,
//             opacity: 0.3
//           }}
//           transition={{ duration: 2, repeat: isInView ? Infinity : 0 }}
//           aria-hidden="true"
//         />
        
//         <motion.div
//           className="absolute bottom-6 right-6 w-1 h-1 bg-white rounded-full pointer-events-none"
//           animate={isInView ? {
//             scale: [1, 2, 1],
//             opacity: [0.3, 0.8, 0.3]
//           } : {
//             scale: 1,
//             opacity: 0.2
//           }}
//           transition={{ duration: 1.5, repeat: isInView ? Infinity : 0, delay: 0.5 }}
//           aria-hidden="true"
//         />
//       </motion.div>
//     </motion.article>
//   );
// });

// ReasonCard.displayName = 'ReasonCard';

// const WhyUs = () => {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"]
//   });
  
//   const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

//   // Structured data for reasons
//   const reasons = [
//     {
//       id: 1,
//       icon: FaBullseye,
//       title: "Strategic Vision",
//       description: "Your growth begins with a clear roadmap. We align strategies with your goals to ensure every move drives measurable success.",
//       position: "left"
//     },
//     {
//       id: 2,
//       icon: FaBolt,
//       title: "Lightning Fast Delivery",
//       description: "You don’t have to wait for results. Our efficient workflows bring your projects to life quickly, without compromising quality.",
//       position: "right"
//     },
//     {
//       id: 3,
//       icon: FaShieldAlt,
//       title: "Future-Proof Solutions",
//       description: "Your business deserves longevity. We design scalable, adaptable solutions that grow with you and stay ahead of digital trends.",
//       position: "left"
//     },
//     {
//       id: 4,
//       icon: FaGem,
//       title: "Premium Quality",
//       description: "You get nothing less than excellence. Every detail is crafted to elevate your brand and exceed expectations.",
//       position: "right"
//     },
//     {
//       id: 5,
//       icon: FaHandshake,
//       title: "Partnership Approach",
//       description: "You’re not just a client — you’re a partner. We collaborate closely, making your vision the foundation of everything we deliver.",
//       position: "left"
//     }
//   ];

//   return (
//     <section 
//       className="w-full flex flex-col items-center  overflow-hidden justify-center gap-5 px-5 mb-10 bg-black min-h-screen"
//       aria-labelledby="why-choose-us-heading"
//       itemScope
//     >
//       {/* Header */}
//       <header className="text-center w-full flex flex-col items-center justify-center gap-5 mb-16">
//         <motion.p 
//           className="text-xl text-orange-400 font-semibold tracking-widest"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//        Why Only Us? 
//         </motion.p>
//         <motion.h2 
//           id="why-choose-us-heading"
//           className="text-5xl md:w-2/3 lg:w-1/2 capitalize text-white font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
            
//           The qualities that make us your <span className="italican text-orange-400">trusted</span> partner.
//         </motion.h2>
//       </header>

//       {/* Main Content */}
//       <div 
//         ref={containerRef}
//         className="w-full max-w-7xl mx-auto relative"
//       >
//         {/* Desktop Layout with Progress Bar */}
//         <div className="hidden lg:block relative">
//           {/* Progress Bar Container */}
//           <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex flex-col items-center z-10 pointer-events-none">
//             {/* Background Track */}
//             <motion.div
//               className="w-1 bg-white/20 relative rounded-full overflow-hidden"
//               style={{ height: `${reasons.length * 380}px` }}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//               aria-hidden="true"
//             >
//               {/* Progress Fill */}
//               <motion.div
//                 className="w-full bg-gradient-to-b from-[#f48020] to-[#e67017] rounded-full origin-top shadow-lg shadow-orange-500/50"
//                 style={{ height: progressHeight }}
//                 initial={{ height: "0%" }}
//               />
              
//               {/* Glowing dot at the end */}
//               <motion.div
//                 className="absolute w-4 h-4 bg-[#f48020] rounded-full shadow-lg shadow-orange-500/50 left-1/2 transform -translate-x-1/2"
//                 style={{ 
//                   top: progressHeight,
//                   y: useTransform(progressHeight, (value) => `calc(${value} - 8px)`)
//                 }}
//               />
//             </motion.div>
//           </div>

//           {/* Reason Cards */}
//           <div className="space-y-32 py-10">
//             {reasons.map((reason, index) => (
//               <div 
//                 key={reason.id}
//                 className={`flex ${reason.position === 'left' ? 'justify-start' : 'justify-end'} px-16`}
//                 itemProp="itemListElement"
//                 itemScope
//                 itemType="https://schema.org/ListItem"
//               >
//                 <meta itemProp="position" content={String(index + 1)} />
//                 <ReasonCard reason={reason} index={index} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Layout - Single Column */}
//         <div className="lg:hidden space-y-8">
//           {reasons.map((reason, index) => (
//             <div
//               key={reason.id}
//               itemProp="itemListElement"
//               itemScope
//               itemType="https://schema.org/ListItem"
//             >
//               <meta itemProp="position" content={String(index + 1)} />
//               <ReasonCard reason={reason} index={index} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Decoration */}
//       <motion.div
//         className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#f48020]/50 to-transparent mt-20"
//         initial={{ scaleX: 0 }}
//         whileInView={{ scaleX: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         viewport={{ once: true }}
//         aria-hidden="true"
//       />
//     </section>
//   );
// };

// export default WhyUs;

'use client';
import React, { useRef, memo } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaBullseye, FaBolt, FaShieldAlt, FaGem, FaHandshake } from 'react-icons/fa';

// Memoized ReasonCard component for better performance
const ReasonCard = memo(({ reason, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    threshold: 0.3,
    margin: "-10% 0px -10% 0px",
    once: false
  });

  // Simplified and optimized animation variants with will-change
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: reason.position === 'left' ? -60 : 60,
      y: 30
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverVariants = {
    scale: 1.02,
    y: -8,
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  };

  return (
    <motion.article
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative w-full max-w-lg ${reason.position === 'right' ? 'ml-auto' : ''}`}
      style={{ willChange: 'transform, opacity' }}
      itemScope
      itemType="https://schema.org/Service"
    >
      <motion.div
        whileHover={hoverVariants}
        className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
        style={{ willChange: 'transform' }}
      >
        {/* Simplified Background Glow - Only on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(244, 128, 32, 0.12) 0%, transparent 70%)'
          }}
          aria-hidden="true"
        />
        
        {/* Simplified lit up effect - fewer animation steps */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: 'radial-gradient(circle at 50% 100%, rgba(255, 193, 7, 0.2) 0%, rgba(255, 193, 7, 0) 60%)'
          }}
          aria-hidden="true"
        />
        
        {/* Simplified border animation */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ borderColor: "rgba(244, 128, 32, 0)", borderWidth: 2, borderStyle: 'solid' }}
          animate={isInView ? {
            borderColor: "rgba(244, 128, 32, 0.4)"
          } : {
            borderColor: "rgba(244, 128, 32, 0)"
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-hidden="true"
        />
        
        <div className="relative z-10">
          {/* Simplified icon animation - no infinite loop on mount */}
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f48020] to-[#e67017] flex items-center justify-center text-2xl mb-6 shadow-lg"
            initial={{ scale: 1 }}
            animate={isInView ? {
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 8px 32px rgba(244, 128, 32, 0.3)",
                "0 8px 32px rgba(244, 128, 32, 0.5)",
                "0 8px 32px rgba(244, 128, 32, 0.3)"
              ]
            } : {
              scale: 1
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: 1 // Only repeat once instead of infinite
            }}
            aria-hidden="true"
          >
            <reason.icon className="text-white text-xl filter drop-shadow-sm" />
          </motion.div>

          {/* Removed color animation from title - causes repaints */}
          <h3
            className="text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-orange-400"
            itemProp="name"
          >
            {reason.title}
          </h3>
          
          {/* Simplified text animation */}
          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0.8 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            itemProp="description"
          >
            {reason.description}
          </motion.p>
        </div>

        {/* Simplified decorative elements - less animation */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-[#f48020] rounded-full pointer-events-none"
          animate={isInView ? {
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5]
          } : {
            scale: 1,
            opacity: 0.3
          }}
          transition={{ duration: 1.5, repeat: 1, ease: "easeInOut" }}
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute bottom-6 right-6 w-1 h-1 bg-white rounded-full pointer-events-none"
          animate={isInView ? {
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          } : {
            scale: 1,
            opacity: 0.2
          }}
          transition={{ duration: 1.2, repeat: 1, delay: 0.3, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.article>
  );
});

ReasonCard.displayName = 'ReasonCard';

const WhyUs = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  // Structured data for reasons
  const reasons = [
    {
      id: 1,
      icon: FaBullseye,
      title: "Strategic Vision",
      description: "Your growth begins with a clear roadmap. We align strategies with your goals to ensure every move drives measurable success.",
      position: "left"
    },
    {
      id: 2,
      icon: FaBolt,
      title: "Lightning Fast Delivery",
      description: "You don't have to wait for results. Our efficient workflows bring your projects to life quickly, without compromising quality.",
      position: "right"
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Future-Proof Solutions",
      description: "Your business deserves longevity. We design scalable, adaptable solutions that grow with you and stay ahead of digital trends.",
      position: "left"
    },
    {
      id: 4,
      icon: FaGem,
      title: "Premium Quality",
      description: "You get nothing less than excellence. Every detail is crafted to elevate your brand and exceed expectations.",
      position: "right"
    },
    {
      id: 5,
      icon: FaHandshake,
      title: "Partnership Approach",
      description: "You're not just a client — you're a partner. We collaborate closely, making your vision the foundation of everything we deliver.",
      position: "left"
    }
  ];

  return (
    <section 
      className="w-full flex flex-col items-center overflow-hidden justify-center gap-5 px-5 mb-10 bg-black min-h-screen"
      aria-labelledby="why-choose-us-heading"
      itemScope
    >
      {/* Header */}
      <header className="text-center w-full flex flex-col items-center justify-center gap-5 mb-16">
        <motion.p 
          className="text-xl text-orange-400 font-semibold tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Why Only Us? 
        </motion.p>
        <motion.h2 
          id="why-choose-us-heading"
          className="text-5xl md:w-2/3 lg:w-1/2 capitalize text-white font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          The qualities that make us your <span className="italic text-orange-400">trusted</span> partner.
        </motion.h2>
      </header>

      {/* Main Content */}
      <div 
        ref={containerRef}
        className="w-full max-w-7xl mx-auto relative"
      >
        {/* Desktop Layout with Progress Bar */}
        <div className="hidden lg:block relative">
          {/* Progress Bar Container */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex flex-col items-center z-10 pointer-events-none">
            {/* Background Track */}
            <motion.div
              className="w-1 bg-white/20 relative rounded-full overflow-hidden"
              style={{ height: `${reasons.length * 380}px` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              aria-hidden="true"
            >
              {/* Progress Fill */}
              <motion.div
                className="w-full bg-gradient-to-b from-[#f48020] to-[#e67017] rounded-full origin-top shadow-lg shadow-orange-500/50"
                style={{ height: progressHeight, willChange: 'height' }}
                initial={{ height: "0%" }}
              />
              
              {/* Glowing dot at the end */}
              <motion.div
                className="absolute w-4 h-4 bg-[#f48020] rounded-full shadow-lg shadow-orange-500/50 left-1/2 transform -translate-x-1/2"
                style={{ 
                  top: progressHeight,
                  y: useTransform(progressHeight, (value) => `calc(${value} - 8px)`),
                  willChange: 'transform'
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
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <ReasonCard reason={reason} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <ReasonCard reason={reason} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <motion.div
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#f48020]/50 to-transparent mt-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        aria-hidden="true"
      />
    </section>
  );
};

export default WhyUs;