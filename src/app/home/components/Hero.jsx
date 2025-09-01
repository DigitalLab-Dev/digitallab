'use client';
import ShinyText from '@/components/ReactBit-Components/ShinyText';
import TextType from '@/components/ReactBit-Components/TextType';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <motion.section
      className="w-full relative h-[70vh]   sm:min-h-screen flex  mt-15  justify-center items-center flex-col px-5 overflow-hidden"
      initial={{ opacity: 0, y: 50 }} // start state
      animate={{ opacity: 1, y: 0 }} // end state
      transition={{ duration: 0.8, ease: 'easeOut' }} // timing
    >
      <div className="absolute inset-0 hidden md:block -z-10">
        <div className="w-full h-full scale-125 -translate-y-10">
          <Spline scene="https://prod.spline.design/7fTn8KMQWLjD9qLo/scene.splinecode" />
        </div>
      </div>
      <motion.header
        className="flex flex-col w-fit  items-center justify-center text-center gap-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Top pill */}
        <motion.div
          className={
            'flex items-center justify-center gap-2 rounded-full px-5 py-1 ' +
            'bg-white/10 border border-white/20 shadow-lg shadow-black/30 ' +
            'backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md ' +
            'ring-1 ring-white/10 '
          }
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-3 h-3 rounded-full bg-[#f48020]"></div>
          <p className="text-sm sm:text-base z-20 tracking-wide text-[#EBE9E4]">
            Pixel-perfect. Performance-driven
          </p>
        </motion.div>
        {/* Main title */}
        <motion.h1
          className="text-[11vw] sm:text-[9vw] tracking-tight font-bold  leading-18 sm:leading-23 lg:leading-32 capitalize text-[#FFFFFF]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          We <span className="z-5">turn</span>{' '}
          <span className="italican lowercase text-[#BED3CC] rounded-2xl">
            <TextType
              text={['vision', 'ideas', 'aims', 'goals', 'designs']}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter=""
            />
          </span>{' '}
          <br /> into digital realities
        </motion.h1>
        {/* Shiny text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ShinyText
            text="We believe in combining innovative design, sustainable practices, and
            exceptional craftsmanship to bring your vision to life."
            disabled={false}
            speed={3}
            className="text-xl md:w-1/2 w-full"
          />
        </motion.div>
      </motion.header>
      {/* Button */}
      <motion.button
        className="w-50 transition-all  duration-500 mt-5 rounded-full font-semibold py-3 hover:gap-3 hover:bg-[#f0750f] cursor-pointer mx-auto bg-[#f48020] text-white flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>VIEW PROTFOLIOS</span>
        <MdArrowOutward size={25} />
      </motion.button>
    </motion.section>
  );
};

export default Hero;
