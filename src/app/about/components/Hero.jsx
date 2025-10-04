// "use client"
// import { Mouse } from 'lucide-react';
// import { useState, useEffect } from 'react';

// const Hero = () => {
//   const [mounted, setMounted] = useState(false);
//   const [textVisible, setTextVisible] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const timer = setTimeout(() => {
//       setTextVisible(true);
//     }, 500);
    
//     return () => clearTimeout(timer);
//   }, []);

//   // Split text into words for animation
//   const orangeText = "Collaborating with genuine brands";
//   const whiteText = "that follow their own paths";
  
//   const orangeWords = orangeText.split(' ');
//   const whiteWords = whiteText.split(' ');

//   return (
//     <section className="min-h-screen pt-20 items-center flex-col justify-end px-10 pb-10 flex relative overflow-hidden">
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         {/* Floating Particles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 2}s`
//             }}
//           />
//         ))}
        
//         {/* Gradient Orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" 
//              style={{ animationDuration: '4s' }} />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse" 
//              style={{ animationDuration: '6s', animationDelay: '2s' }} />
//       </div>

//       {/* Main Content */}
//       <div className="flex items-center justify-center relative z-10 w-full">
        
//         {/* Text Content */}
//         <div className="w-2/3 relative">
//           <h1 className="text-6xl leading-tight uppercase text-white overflow-hidden">
            
//             {/* Orange Text Animation */}
//             <span className="font-semibold text-orange-500 block mb-2">
//               {orangeWords.map((word, index) => (
//                 <span
//                   key={index}
//                   className={`inline-block mr-4 transition-all duration-1000 ease-out ${
//                     textVisible 
//                       ? 'opacity-100 translate-y-0 blur-0' 
//                       : 'opacity-0 translate-y-12 blur-sm'
//                   }`}
//                   style={{
//                     transitionDelay: `${index * 0.15}s`,
//                     transform: textVisible ? 'rotateX(0deg)' : 'rotateX(-90deg)'
//                   }}
//                 >
//                   {word}
//                 </span>
//               ))}
//             </span>
            
//             {/* White Text Animation */}
//             <span className="block">
//               {whiteWords.map((word, index) => (
//                 <span
//                   key={index}
//                   className={`inline-block mr-4 transition-all duration-1000 ease-out ${
//                     textVisible 
//                       ? 'opacity-100 translate-y-0 blur-0' 
//                       : 'opacity-0 -translate-y-12 blur-sm'
//                   }`}
//                   style={{
//                     transitionDelay: `${(orangeWords.length + index) * 0.15}s`,
//                     transform: textVisible ? 'rotateX(0deg)' : 'rotateX(90deg)'
//                   }}
//                 >
//                   {word}
//                 </span>
//               ))}
//             </span>
//           </h1>
          
//           {/* Animated Underline */}
//           <div className={`h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-white mt-8 origin-left transition-all duration-1500 ease-out ${
//             textVisible ? 'scale-x-100' : 'scale-x-0'
//           }`} 
//           style={{ transitionDelay: '2s' }} />
//         </div>

//         {/* Image with Advanced Animations */}
//         <div className="absolute right-20 -top-30">
//           <div className={`relative transition-all duration-2000 ease-out ${
//             mounted 
//               ? 'opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100' 
//               : 'opacity-0 translate-x-32 -translate-y-16 rotate-12 scale-75'
//           }`}>
            
//             {/* Glowing Ring Effect */}
//             <div className={`absolute inset-0 rounded-full transition-all duration-3000 ${
//               textVisible ? 'animate-spin' : ''
//             }`} 
//             style={{ animationDuration: '20s' }}>
//               <div className="w-full h-full border-2 border-orange-500/20 rounded-full"></div>
//               <div className="absolute top-0 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-2 shadow-lg shadow-orange-500/50"></div>
//             </div>
            
//             {/* Pulsing Background */}
//             <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-white/5 rounded-full blur-xl transition-all duration-1000 ${
//               textVisible ? 'animate-pulse scale-110' : 'scale-100'
//             }`} />
            
//             {/* Main Image */}
//             <img
//               src="/images/aboutPage.png"
//               width={600}
//               height={600}
//               className={`relative z-10 transition-all duration-1000 hover:scale-105 hover:rotate-1 filter ${
//                 textVisible ? 'drop-shadow-2xl' : 'drop-shadow-lg'
//               }`}
//               alt="About Page"
//               onError={(e) => {
//                 // Fallback to a placeholder if image fails to load
//                 e.target.src = "data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAbout Image%3C/text%3E%3C/svg%3E";
//               }}
//             />
            
//             {/* Floating Elements Around Image */}
//             <div className="absolute -top-8 -left-8 w-6 h-6 bg-white rounded-full animate-bounce" 
//                  style={{ animationDelay: '0s', animationDuration: '3s' }} />
//             <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-orange-500 rounded-full animate-bounce" 
//                  style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
//             <div className="absolute top-1/4 -left-12 w-2 h-2 bg-orange-300 rounded-full animate-ping" 
//                  style={{ animationDelay: '2s' }} />
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator with Advanced Animation */}
//       <div className={`flex items-center justify-center w-full mt-20 relative z-10 transition-all duration-1500 ease-out ${
//         mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`} 
//       style={{ transitionDelay: '2.5s' }}>
        
//         {/* Animated Container */}
//         <div className="relative group cursor-pointer">
          
//           {/* Pulsing Ring */}
//           <div className="absolute inset-0 w-16 h-16 border-2 border-white/20 rounded-full animate-ping"></div>
//           <div className="absolute inset-0 w-12 h-12 border border-orange-500/30 rounded-full animate-pulse transform translate-x-2 translate-y-2"></div>
          
//           {/* Mouse Icon with Custom Animation */}
//           <div className="relative z-10 p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-orange-500 transition-all duration-300 group-hover:bg-orange-500/10">
//             <Mouse 
//               className="text-white group-hover:text-orange-500 transition-all duration-300 animate-bounce" 
//               size={30}
//               style={{ animationDuration: '2s' }}
//             />
//           </div>
          
//           {/* Scroll Text */}
//           <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//             <p className="text-white/60 text-sm uppercase tracking-wider">Scroll</p>
//           </div>
//         </div>
        
//         {/* Animated Scroll Line */}
//         <div className="absolute left-1/2 top-20 w-px h-20 bg-gradient-to-b from-orange-500 via-white to-transparent transform -translate-x-1/2 animate-pulse"></div>
//       </div>

//       {/* Side Decorative Elements - Hidden on Mobile */}
//       <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden md:block">
//         <div className="w-1 h-40 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse"></div>
//       </div>
//       <div className="absolute right-0 top-1/3 transform -translate-y-1/2 opacity-10 hidden md:block">
//         <div className="w-1 h-60 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       {/* Text Reveal Effect Overlay */}
//       <div className={`absolute inset-0 bg-black transition-all duration-2000 ease-out pointer-events-none ${
//         mounted ? 'opacity-0' : 'opacity-100'
//       }`} />
      
//       <style jsx>{`
//         @keyframes textReveal {
//           0% { transform: rotateX(-90deg); opacity: 0; }
//           50% { transform: rotateX(-45deg); opacity: 0.5; }
//           100% { transform: rotateX(0deg); opacity: 1; }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-10px) rotate(1deg); }
//           66% { transform: translateY(5px) rotate(-1deg); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


'use client';
import { Mouse } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Memoized text arrays
  const orangeWords = useMemo(() => "Collaborating with genuine brands".split(' '), []);
  const whiteWords = useMemo(() => "that follow their own paths".split(' '), []);

  // Memoized particles array
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }))
  , []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen pt-20 items-center flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-10 pb-10 flex relative overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        {/* Floating Particles - Reduced for performance */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '4s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-white/3 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '2s' }} 
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center relative z-10 w-full gap-8 lg:gap-0">
        
        {/* Text Content */}
        <div className="w-full lg:w-2/3 relative">
          <h1 
            id="about-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight uppercase text-white overflow-hidden"
          >
            {/* Orange Text Animation */}
            <span className="font-semibold text-orange-500 block mb-2">
              {orangeWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-2 sm:mr-3 md:mr-4 transition-all duration-1000 ease-out ${
                    textVisible 
                      ? 'opacity-100 translate-y-0 blur-0' 
                      : 'opacity-0 translate-y-12 blur-sm'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.15}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
            
            {/* White Text Animation */}
            <span className="block">
              {whiteWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-2 sm:mr-3 md:mr-4 transition-all duration-1000 ease-out ${
                    textVisible 
                      ? 'opacity-100 translate-y-0 blur-0' 
                      : 'opacity-0 -translate-y-12 blur-sm'
                  }`}
                  style={{
                    transitionDelay: `${(orangeWords.length + index) * 0.15}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          
          {/* Animated Underline */}
          <div 
            className={`h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-white mt-6 sm:mt-8 origin-left transition-all duration-1500 ease-out ${
              textVisible ? 'scale-x-100' : 'scale-x-0'
            }`} 
            style={{ transitionDelay: '2s' }}
            aria-hidden="true"
          />
        </div>

        {/* Image with Advanced Animations */}
        <div className="relative lg:absolute lg:right-10 xl:right-20 lg:-top-30 w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 100, y: -50, rotate: 12, scale: 0.75 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0, 
              y: 0, 
              rotate: 0, 
              scale: 1 
            } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glowing Ring Effect */}
            <div 
              className={`absolute inset-0 rounded-full transition-all duration-3000 ${
                textVisible ? 'animate-spin' : ''
              }`} 
              style={{ animationDuration: '20s' }}
              aria-hidden="true"
            >
              <div className="w-full h-full border-2 border-orange-500/20 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-2 shadow-lg shadow-orange-500/50"></div>
            </div>
            
            {/* Pulsing Background */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-white/5 rounded-full blur-xl transition-all duration-1000 ${
                textVisible ? 'animate-pulse scale-110' : 'scale-100'
              }`}
              aria-hidden="true"
            />
            
            {/* Main Image - Using Next.js Image for optimization */}
            <Image
              src="/images/aboutPage.png"
              width={600}
              height={600}
              alt="Collaborative team working on digital marketing strategies and brand development"
              className="relative z-10 transition-all duration-1000 hover:scale-105 hover:rotate-1 drop-shadow-2xl w-full h-auto"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            
            {/* Floating Elements Around Image */}
            <motion.div 
              className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-full" 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-3 sm:w-4 h-3 sm:h-4 bg-orange-500 rounded-full"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute top-1/4 -left-6 sm:-left-12 w-2 h-2 bg-orange-300 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.5, duration: 1 }}
        className="flex items-center justify-center w-full mt-16 sm:mt-20 relative z-10"
      >
        <button
          onClick={handleScrollDown}
          className="relative group cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-500/50 rounded-full p-2"
          aria-label="Scroll down to next section"
        >
          {/* Pulsing Rings */}
          <div className="absolute inset-0 w-16 h-16 border-2 border-white/20 rounded-full animate-ping" aria-hidden="true"></div>
          <div className="absolute inset-0 w-12 h-12 border border-orange-500/30 rounded-full animate-pulse transform translate-x-2 translate-y-2" aria-hidden="true"></div>
          
          {/* Mouse Icon */}
          <div className="relative z-10 p-2 sm:p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-orange-500 transition-all duration-300 group-hover:bg-orange-500/10">
            <Mouse 
              className="text-white group-hover:text-orange-500 transition-all duration-300 animate-bounce" 
              size={24}
              style={{ animationDuration: '2s' }}
            />
          </div>
          
          {/* Scroll Text */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">Scroll</p>
          </div>
        </button>
        
        {/* Animated Scroll Line */}
        <div className="absolute left-1/2 top-16 sm:top-20 w-px h-16 sm:h-20 bg-gradient-to-b from-orange-500 via-white to-transparent transform -translate-x-1/2 animate-pulse" aria-hidden="true"></div>
      </motion.div>

      {/* Side Decorative Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden md:block" aria-hidden="true">
        <div className="w-1 h-40 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse"></div>
      </div>
      <div className="absolute right-0 top-1/3 transform -translate-y-1/2 opacity-10 hidden md:block" aria-hidden="true">
        <div className="w-1 h-60 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;