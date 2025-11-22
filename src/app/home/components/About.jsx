'use client';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);


  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });


  const imageScale = useTransform(
    imageScrollProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1.1, 1.1, 0.9]
  );

  const imageOpacity = useTransform(
    imageScrollProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5]
  );

  // Check if sections are in view
  const imageInView = useInView(imageRef, { once: false, amount: 0.3 });
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Smooth container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smoothness
      },
    },
  };

  // Simplified heading animation - removed glitchy 3D rotation
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Reduced for smoother flow
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen h-fit px-5 py-10  relative overflow-hidden bg-black"
      aria-labelledby="about-heading"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <motion.header
          variants={itemVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            className="text-xs md:text-sm font-semibold text-[#f48020] uppercase tracking-[0.3em] block mb-6"
            variants={itemVariants}
          >
            WHO WE ARE
          </motion.span>

          <motion.h2
            id="about-heading"
            variants={titleVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] text-white mb-6"
          >
            {/* First Line - CRAFTING */}
            <motion.span className="block mb-2">
              {'CRAFTING'.split('').map((letter, i) => (
                <motion.span
                  key={`craft-${i}`}
                  variants={letterVariants}
                  className="inline-block transition-colors duration-300 cursor-default hover:text-[#f48020]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.span>

            {/* Second Line - DIGITAL */}
            <motion.span className="block mb-2 text-[#f48020]">
              {'DIGITAL'.split('').map((letter, i) => (
                <motion.span
                  key={`digital-${i}`}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

            {/* Third Line - EXCELLENCE */}
            <motion.span className="block">
              {'EXCELLENCE'.split('').map((letter, i) => (
                <motion.span
                  key={`excel-${i}`}
                  variants={letterVariants}
                  className="inline-block transition-colors duration-300 cursor-default hover:text-[#f48020]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section with Scroll-Based Zoom */}
          <motion.div
            ref={imageContainerRef}
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              ref={imageRef}
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                // src="/images/about.webp"
                src="https://res.cloudinary.com/dt9wziort/image/upload/v1761451560/about_msfcxd.webp"
                width={700}
                height={700}
                alt="Digital marketing team collaborating on creative strategies and innovative solutions"
                className="w-full h-auto object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
              />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Decorative Badge */}
              <motion.div
                className="absolute top-6 right-6 w-16 h-16 border-2 border-[#f48020] rounded-full flex items-center justify-center text-[#f48020] text-2xl font-bold bg-black/50 backdrop-blur-sm"
                initial={{ scale: 0, rotate: -180 }}
                animate={
                  imageInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -180 }
                }
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.15, rotate: 90 }}
                aria-hidden="true"
              >
                ⚡
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.article variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl sm:text-5xl uppercase md:text-5xl font-bold text-white text-center lg:text-left mb-6 leading-tight">
                <motion.span
                  className="text-[#f48020] "
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Relax{' '}
                </motion.span>
                Digital Lab is with you
              </h3>

              <motion.p
                className="text-md sm:text-xl text-gray-300 text-center lg:text-left leading-relaxed mb-8"
                variants={itemVariants}
              >
                We’re architects of digital experiences, trusted by 100+ clients
                over 2+ years, combining strategic thinking with innovative
                design and flawless execution. Every pixel, every line of code,
                every interaction is crafted to elevate your brand and captivate
                your audience.
              </motion.p>

              <Link
                href="/about"
                className="inline-block"
                aria-label="Learn more about our agency and team"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(244, 128, 32, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-[#f48020] to-[#e67017] text-white font-bold py-4 px-8 rounded-full relative overflow-hidden transition-all duration-300 cursor-pointer focus:outline-none "
                >
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                    DISCOVER OUR STORY
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <MdArrowOutward className="text-xl" />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
