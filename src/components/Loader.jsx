'use client';

import FuzzyText from "./ReactBit-Components/FuzzyText";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={5}
        enableHover={true}
      >
        DIGITAL LAB
      </FuzzyText>
    </div>
  );
};

export default Loader;
// "use client"
// import React, { useEffect, useState } from 'react';

// // Lightweight Loader Component
// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
//       {/* Animated Dots */}
//       <div className="flex space-x-1 mb-8">
//         {[0, 1, 2].map((index) => (
//           <div
//             key={index}
//             className="w-3 h-3 bg-white rounded-full animate-pulse"
//             style={{
//               animationDelay: `${index * 0.2}s`,
//               animationDuration: '1s'
//             }}
//           />
//         ))}
//       </div>
      
//       {/* Pulsing Text */}
//       <div className="text-white text-2xl font-light tracking-[0.2em] animate-pulse">
//         DIGITAL LAB
//       </div>
      
//       {/* Loading Bar */}
//       <div className="w-64 h-0.5 bg-gray-800 mt-8 overflow-hidden">
//         <div 
//           className="h-full bg-white origin-left transform animate-pulse"
//           style={{
//             animation: 'loadingBar 2s ease-in-out infinite'
//           }}
//         />
//       </div>
      
//       <style jsx>{`
//         @keyframes loadingBar {
//           0% { transform: scaleX(0); }
//           50% { transform: scaleX(0.7); }
//           100% { transform: scaleX(1); opacity: 0; }
//         }
//       `}</style>
//     </div>
//   );
// };
// export default Loader;