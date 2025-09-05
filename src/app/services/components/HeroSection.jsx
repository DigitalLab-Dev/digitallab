"use client";
import gsap from "gsap";
import { motion, cubicBezier } from "framer-motion";
import React, { useEffect, useRef } from "react";

// --- Animated SVG Icons ---
const CircleSvg = React.forwardRef(function CircleSvg({ className }, ref) {
  return (
    <svg
      ref={ref}
      className={className}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" stroke="#F97316" strokeWidth="4" />
    </svg>
  );
});

const PlusSvg = React.forwardRef(function PlusSvg({ className }, ref) {
  return (
    <svg
      ref={ref}
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 0V80" stroke="#F97316" strokeWidth="4" />
      <path d="M0 40H80" stroke="#F97316" strokeWidth="4" />
    </svg>
  );
});

const TriangleSvg = React.forwardRef(function TriangleSvg({ className }, ref) {
  return (
    <svg
      ref={ref}
      className={className}
      width="90"
      height="80"
      viewBox="0 0 90 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M45 0L89.3013 75H0.69873L45 0Z" stroke="#F97316" strokeWidth="4" />
    </svg>
  );
});

// --- Main Hero Section Component ---
export default function App() {
  const heroRef = useRef(null);
  const circleRef = useRef(null);
  const plusRef = useRef(null);
  const triangleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(plusRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none",
      });

      gsap.to(triangleRef.current, {
        y: 15,
        x: -10,
        rotation: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // --- Framer Motion Variants ---
  const easing = cubicBezier(0.6, 0.05, -0.01, 0.9);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3, ease: easing },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, ease: easing },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: easing },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden font-sans p-8"
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div className="text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight"
              variants={itemVariants}
            >
              Where <span className="text-orange-500">Vision</span> Meets{" "}
              <span className="text-orange-500">Innovation</span>.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              We are a full-service digital agency crafting stunning websites,
              powerful brands, and results-driven marketing strategies that
              elevate your business.
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#EA580C" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
              aria-label="Explore our services"
            >
              Explore Our Services
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative flex justify-center items-center h-96 md:h-auto"
            variants={imageVariants}
          >
            <CircleSvg
              ref={circleRef}
              className="absolute -top-10 -left-10 w-24 h-24 opacity-50"
            />
            <PlusSvg
              ref={plusRef}
              className="absolute -bottom-8 -right-8 w-20 h-20 opacity-40"
            />
            <TriangleSvg
              ref={triangleRef}
              className="absolute top-1/2 -right-12 w-20 h-20 opacity-30"
            />

            {/* Image */}
            <div className="relative w-[00px] h-[400px] lg:w-[550px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10">
              <img
                src="/images/services.jpg"
                alt="Digital Agency Team Collaboration"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/350x480/000000/F97316?text=Image+Error";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
}
