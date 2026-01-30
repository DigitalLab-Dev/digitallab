"use client";

import ShinyText from "@/components/ReactBit-Components/ShinyText";
import TextType from "@/components/ReactBit-Components/TextType";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  return (
    <motion.section
      className="w-full relative min-h-[90vh] flex mt-10 sm:mt-20 justify-center items-center flex-col px-5 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-label="Hero section - Digital marketing agency introduction"
    >
      {/* Background Spline (non-blocking) */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="w-full h-full scale-100 sm:scale-125 md:scale-125 -translate-y-10 md:-translate-y-10">
          <Spline
            scene="https://prod.spline.design/7fTn8KMQWLjD9qLo/scene.splinecode"
            onLoad={() => setSplineLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              opacity: splineLoaded ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
            }}
          />
        </div>
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
