"use client";

import ShinyText from "@/components/ReactBit-Components/ShinyText";
import TextType from "@/components/ReactBit-Components/TextType";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {

  return (
    <motion.section
      className="w-full relative min-h-[90vh] flex mt-10 sm:mt-20 justify-center items-center flex-col px-5 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-label="Hero section - Digital marketing agency introduction"
    >
      {/* Premium Black Background with Orange Dots */}
      <div
        className="absolute inset-0 -z-10 bg-black"
        aria-hidden="true"
      >
        {/* Animated Orange Dots */}
        <div className="absolute inset-0">
          {/* Large dots */}
          <div className="absolute top-[10%] left-[15%] w-3 h-3 rounded-full bg-[#f48020]/40 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-[20%] right-[20%] w-2 h-2 rounded-full bg-[#f48020]/30 animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          <div className="absolute top-[60%] left-[10%] w-4 h-4 rounded-full bg-[#f48020]/50 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
          <div className="absolute top-[80%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#f48020]/35 animate-pulse" style={{ animationDuration: '3.5s' }} />

          {/* Medium dots */}
          <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#f48020]/25 animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.3s' }} />
          <div className="absolute top-[45%] right-[30%] w-3.5 h-3.5 rounded-full bg-[#f48020]/45 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
          <div className="absolute top-[70%] left-[40%] w-2 h-2 rounded-full bg-[#f48020]/20 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute top-[15%] right-[40%] w-1 h-1 rounded-full bg-[#f48020]/30 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />

          {/* Small dots */}
          <div className="absolute top-[25%] left-[50%] w-1 h-1 rounded-full bg-[#f48020]/20 animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.8s' }} />
          <div className="absolute top-[55%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#f48020]/35 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-[85%] left-[30%] w-1 h-1 rounded-full bg-[#f48020]/25 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.2s' }} />
          <div className="absolute top-[40%] right-[45%] w-2 h-2 rounded-full bg-[#f48020]/40 animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          <div className="absolute top-[10%] left-[60%] w-1.5 h-1.5 rounded-full bg-[#f48020]/30 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.8s' }} />
          <div className="absolute top-[65%] right-[10%] w-1 h-1 rounded-full bg-[#f48020]/20 animate-pulse" style={{ animationDuration: '4.5s' }} />

          {/* Extra ambient dots */}
          <div className="absolute top-[5%] left-[70%] w-2 h-2 rounded-full bg-[#f48020]/15 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2.5s' }} />
          <div className="absolute top-[50%] left-[80%] w-1 h-1 rounded-full bg-[#f48020]/25 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.2s' }} />
          <div className="absolute top-[75%] right-[35%] w-1.5 h-1.5 rounded-full bg-[#f48020]/30 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-[35%] left-[5%] w-2.5 h-2.5 rounded-full bg-[#f48020]/40 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        </div>

        {/* Subtle radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,128,32,0.05),transparent_60%)]" />
      </div>

      {/* Foreground Content */}
      <div
        className="flex flex-col w-fit items-center justify-center text-center gap-5 relative z-10"
        style={{ pointerEvents: "none" }}
      >
        <motion.header
          className="flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="flex items-center gap-2 rounded-full px-5 py-1 bg-white/10 border border-white/20 shadow-lg shadow-black/30 backdrop-blur-md ring-1 ring-white/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="w-3 h-3 rounded-full bg-[#f48020] animate-pulse" />
            <p className="text-sm sm:text-base tracking-wide text-[#EBE9E4]">
              Welcome to Your Growth Playground
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-[13vw] sm:text-[15vw] md:text-[9vw] tracking-tight font-bold leading-tight sm:leading-[1] text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            We turn{" "}
            <span className="inline-block rounded-2xl">
              <span className="hidden sm:block">
                <TextType
                  text={["vision", "ideas", "aims", "goals", "designs"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter=""
                />
              </span>
              <span className="sm:hidden text-[#f48020]">visions</span>
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">
              into digital realities
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-4xl"
          >
            <ShinyText
              text="Trusted by brands that demand more than services, we deliver strategy, creativity, and technology that turn digital challenges into lasting growth"
              speed={3}
              className="text-base sm:text-xl md:w-3/4 w-full mx-auto leading-relaxed"
            />
          </motion.div>
        </motion.header>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          style={{ pointerEvents: "auto" }}
          className="mt-5"
        >
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-[#f48020] text-white transition-all duration-500 hover:gap-3 hover:bg-[#f0750f] hover:shadow-lg hover:shadow-[#f48020]/50 active:scale-95"
          >
            VIEW OUR RESULTS
            <MdArrowOutward size={25} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
