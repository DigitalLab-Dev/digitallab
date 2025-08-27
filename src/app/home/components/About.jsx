'use client';

import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="w-full mt-5 sm:mt-10 px-5">
      {/* Header */}
      <header className="text-[12vw] sm:text-[8vw] flex flex-col w-full leading-20 lg:leading-30 overflow-hidden">
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="self-center"
        >
          Your{' '}
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="italican text-[#f48020] inline-block"
          >
            Brand
          </motion.span>
        </motion.h2>

        <motion.h3
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Our{' '}
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="italican text-[#f48020] inline-block"
          >
            Mission
          </motion.span>
        </motion.h3>
      </header>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row gap-15 items-center justify-center mt-10 px-5">
        {/* Image animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <Image
            src="/images/collaboration.webp"
            width={400}
            height={400}
            alt="a team collaboration"
            className="rounded-md "
          />
        </motion.div>

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-[80%] h-[80%] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 rounded-full blur-3xl opacity-30" />
          </div>

          <p className="text-xl text-zinc-300 text-center lg:text-left">
            We're a team of digital strategists, designers, and developers
            dedicated to turning your vision into a powerful digital reality.
            From the first line of code to the final marketing campaign, we
            handle every aspect of your online presence. Our goal is to help
            your brand connect with its audience, grow its business, and stand
            out in a crowded market. We're passionate about partnering with you
            to achieve your goals.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex bg-[#f48020] mt-5 mx-auto lg:mx-0 text-white font-semibold hover:bg-[#f0750f] cursor-pointer transition-all duration-500 items-center justify-center gap-2 p-2 rounded-full"
          >
            ABOUT US
            <MdArrowOutward className="font-bold" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
