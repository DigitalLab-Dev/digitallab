"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { MdArrowForward } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

const ServiceCard = ({ icon: Icon, heading, para, link, index }) => {
  const glowRef = useRef(null);
  const cardRef = useRef(null);
  const controls = useAnimation();

  // Tilt + glow effect
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // glow
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(251,191,36,0.2), transparent 40%)`;
    }

    // tilt
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.background = "transparent";
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full sm:w-[350px] h-[400px] flex flex-col items-start justify-between p-6 rounded-xl overflow-hidden border border-white/20 backdrop-blur-xl bg-black/10 shadow-xl transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Glow Effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition duration-300"
      />

      {/* Icon */}
      <Icon className="text-6xl text-orange-400 relative z-10" />

      {/* Content */}
      <div className="flex flex-col items-start justify-start gap-4 relative z-10">
        <h3 className="text-3xl mb-3 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          {heading}
        </h3>
        <p className="text-zinc-300">{para}</p>
        <Link
          href={link}
          className="flex gap-2 items-center justify-center text-orange-400 hover:text-orange-500 transition"
        >
          Learn More <MdArrowForward />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
