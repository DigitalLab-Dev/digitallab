"use client"
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function VideoServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

const services = [
  {
    id: 1,
    title: "Short-Form Content (Reels/Shorts/TikToks)",
    description: "Viral-ready vertical content optimized for maximum engagement. We create fast-paced edits with trending effects and perfect timing to capture attention in the first 3 seconds.",
    tools: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"],
    image: "/images/short.png",
    imageAlt: "A person creating vertical video content on a smartphone"
  },
  {
    id: 2,
    title: "Long-Form Content (YouTube & Podcasts)",
    description: "Transforming raw footage into engaging stories that boost audience retention. We handle everything from multi-cam editing and color grading to professional sound design.",
    tools: ["Premiere Pro", "DaVinci Resolve", "Adobe Audition", "Final Cut Pro"],
    image: "/images/long.png",
    imageAlt: "A professional video editing setup displaying a timeline"
  },
  {
    id: 3,
    title: "Documentary-Style Editing",
    description: "Crafting compelling narratives by weaving together interviews, B-roll, and archival footage. Our focus is on authentic storytelling that creates a deep emotional impact.",
    tools: ["DaVinci Resolve", "Premiere Pro", "Avid Media Composer", "Adobe Audition"],
    image: "/images/documentry.png",
    imageAlt: "A professional film camera on a production set"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Bringing your brand and data to life with eye-catching animations. We specialize in logo reveals, explainer videos, animated infographics, and stylish lower thirds.",
    tools: ["After Effects", "Cinema 4D", "Adobe Illustrator", "Blender"],
    image: "/images/motion.png",
    imageAlt: "A designer working on motion graphics on a computer"
  },
  {
    id: 5,
    title: "2D & 3D Animation",
    description: "From concept to final render, we create stunning animations that tell your story. Services include character animation, product visualizations, and building entire animated worlds.",
    tools: ["Blender", "Autodesk Maya", "Cinema 4D", "Toon Boom Harmony"],
    image: "https://images.unsplash.com/photo-1593312241592-28e44b9a18d2?w=800&q=80",
    imageAlt: "A 3D character model being animated in software"
  },
  {
    id: 6,
    title: "Cinematic Editing",
    description: "Achieving a Hollywood-level aesthetic with dramatic pacing, advanced color grading, and immersive sound design. We turn your footage into a cinematic experience.",
    tools: ["DaVinci Resolve", "Premiere Pro", "Final Cut Pro", "After Effects"],
    image: "/images/cinematic.png",
    imageAlt: "A dramatic, cinematic shot of a person against a scenic background"
  }
];

  const ServiceRow = ({ service, index }) => {
    const rowRef = useRef(null);
    const rowInView = useInView(rowRef, { once: true, margin: "-100px" });
    const isImageLeft = index % 2 === 0;

    return (
      <motion.article
        ref={rowRef}
        initial={{ opacity: 0, y: 60 }}
        animate={rowInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
          !isImageLeft ? 'lg:grid-flow-dense' : ''
        }`}
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: isImageLeft ? -60 : 60 }}
          animate={rowInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className={`relative group ${!isImageLeft ? 'lg:col-start-2' : ''}`}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-2xl aspect-video">
            <motion.img
              src={service.image}
              alt={service.imageAlt}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Number badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={rowInView ? { scale: 1 } : {}}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl shadow-orange-500/50"
          >
            0{service.id}
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: isImageLeft ? 60 : -60 }}
          animate={rowInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          className={!isImageLeft ? 'lg:col-start-1 lg:row-start-1' : ''}
        >
          {/* Title */}
          <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            {service.description}
          </p>

          {/* Tools section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-orange-500 rounded-full" />
              <span className="text-sm uppercase tracking-wider text-orange-500 font-semibold">
                Tools We Use
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {service.tools.map((tool, toolIndex) => (
                <motion.span
                  key={toolIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={rowInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + toolIndex * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-white font-medium hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.article>
    );
  };

  return (
    <section  ref={sectionRef} className="relative bg-black py-10 px-6 overflow-hidden">
      {/* SEO */}
      <div className="sr-only">
        <h2>Professional Video Editing Services - YouTube, Social Media, Commercials, Motion Graphics & VFX</h2>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 mb-4 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              What We Do
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight max-w-4xl">
            Services That Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Your Vision
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            From concept to final cut, we deliver professional video editing services that elevate your content and engage your audience
          </p>
        </motion.div>

        {/* Services rows */}
        <div>
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}