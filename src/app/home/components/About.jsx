// 'use client';

// import Image from 'next/image';
// import { MdArrowOutward } from 'react-icons/md';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section className="w-full mt-5 sm:mt-10 px-5">
//       {/* Header */}
//       <header className="text-[12vw] sm:text-[8vw] flex flex-col w-full leading-20 lg:leading-30 overflow-hidden">
//         <motion.h2
//           initial={{ x: -200, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="self-center"
//         >
//           Your{' '}
//           <motion.span
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
//             viewport={{ once: true }}
//             className="italican text-[#f48020] inline-block"
//           >
//             Brand
//           </motion.span>
//         </motion.h2>

//         <motion.h3
//           initial={{ x: 200, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
//           viewport={{ once: true }}
//         >
//           Our{' '}
//           <motion.span
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ delay: 1, duration: 0.6, type: 'spring' }}
//             viewport={{ once: true }}
//             className="italican text-[#f48020] inline-block"
//           >
//             Mission
//           </motion.span>
//         </motion.h3>
//       </header>

//       {/* Content */}
//       <div className="w-full flex flex-col lg:flex-row gap-15 items-center justify-center mt-10 px-5">
//         {/* Image animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//           viewport={{ once: false }}
//         >
//           <Image
//             src="/images/collaboration.webp"
//             width={400}
//             height={400}
//             alt="a team collaboration"
//             className="rounded-md "
//           />
//         </motion.div>

//         {/* Text block */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="lg:w-1/2 w-full relative"
//         >
//           {/* Glow background */}
//           <div className="absolute inset-0 -z-10 flex justify-center">
//             <div className="w-[80%] h-[80%] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 rounded-full blur-3xl opacity-30" />
//           </div>

//           <p className="text-xl text-zinc-300 text-center lg:text-left">
//             We're a team of digital strategists, designers, and developers
//             dedicated to turning your vision into a powerful digital reality.
//             From the first line of code to the final marketing campaign, we
//             handle every aspect of your online presence. Our goal is to help
//             your brand connect with its audience, grow its business, and stand
//             out in a crowded market. We're passionate about partnering with you
//             to achieve your goals.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex bg-[#f48020] mt-5 mx-auto lg:mx-0 text-white font-semibold hover:bg-[#f0750f] cursor-pointer transition-all duration-500 items-center justify-center gap-2 p-2 rounded-full"
//           >
//             ABOUT US
//             <MdArrowOutward className="font-bold" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
'use client';

import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  const imageInView = useInView(imageRef, { once: false, amount: 0.5 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };



  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen h-fit   px-5 pt-20 pb-10 relative overflow-hidden bg-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute  top-20 left-10 w-96 h-96 bg-[#f48020] rounded-full blur-3xl opacity-10"
        />
        <motion.div
          style={{ y: useTransform(parallaxY, [0, 100], [0, -150]) }}
          className="absolute  bottom-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-5"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Revolutionary Header */}
        <motion.header variants={titleVariants} className="text-center mb-20">
          <motion.div variants={itemVariants} className="overflow-hidden">
            <motion.span
              className="text-sm font-semibold text-[#f48020] uppercase tracking-widest block mb-4"
              initial={{ width: 0,opacity:0 }}
               viewport={{ once: true, amount: 0.2 }}
              whileInView={{ width: 'auto',opacity:1 }}
              transition={{ duration: .75, delay: 0.5 }}
            >
              — WHO WE ARE —
            </motion.span>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none text-white mb-6"
          >
            {'CRAFTING'.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block hover:text-[#f48020] transition-colors duration-300 cursor-default"
                whileHover={{ scale: 1.1, rotate: Math.random() * 20 - 10 }}
              >
                {letter}
              </motion.span>
            ))}
            <br />
            <motion.span
              className="text-[#f48020] inline-block"
              variants={letterVariants}
            >
              {'DIGITAL'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <br />
            {'EXCELLENCE'.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block hover:text-[#f48020] transition-colors duration-300 cursor-default"
                whileHover={{ scale: 1.1, rotate: Math.random() * 20 - 10 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center ">
          {/* Image Section with Advanced Animations */}
          <motion.div
            ref={imageRef}
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              style={{ scale, opacity }}
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                animate={imageInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              >
                <Image
                  src="/images/collaboration.webp"
                  width={600}
                  height={600}
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Overlay Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute top-4 right-4 w-16 h-16 border-2 border-[#f48020] rounded-full flex items-center justify-center text-[#f48020] font-bold"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                ⚡
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute  -top-8 -left-8 w-16 h-16 bg-[#f48020] rounded-full flex items-center justify-center text-white font-bold text-xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              }}
            >
              ∞
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="relative">
              <h3 className="text-4xl md:text-5xl font-bold text-white text-center lg:text-left mb-6">
                Transforming Ideas Into
                <motion.span
                  className="text-[#f48020] block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Digital Reality
                </motion.span>
              </h3>

              <motion.p
                className="text-xl text-gray-300 text-center lg:text-left leading-relaxed mb-8"
                variants={itemVariants}
              >
                We're architects of digital experiences, combining strategic
                thinking with innovative design and flawless execution. Every
                pixel, every line of code, every interaction is crafted to
                elevate your brand and captivate your audience.
              </motion.p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(244, 128, 32, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#f48020] to-[#e67017] text-white font-bold py-4 px-8 rounded-full relative overflow-hidden transition-all duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-[#713b0f] transition-colors duration-300">
                  DISCOVER OUR STORY
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MdArrowOutward className="text-xl" />
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
