'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative  text-white py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-orange-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-500 rounded-full opacity-10"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-500 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="z-10 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Main Heading */}
              <motion.h4
                className="text-4xl md:text-5xl  font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Let's Create
                <span className="block text-orange-500">Something Amazing</span>
                <span className="block">Together</span>
              </motion.h4>

              {/* Description */}
              <motion.p
                className="text-lg md:text-md text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Ready to elevate your brand with stunning graphic design? Let's
                bring your vision to life with creativity that captivates and
                converts.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 cursor-pointer rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>

                <motion.button
                  className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-4 py-3 cursor-pointer rounded-full transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Portfolio
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative lg:block hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black z-10 rounded-2xl"></div>

            {/* Decorative Border */}
            <div className="absolute -inset-4 border border-orange-500/20 rounded-2xl"></div>
            <div className="absolute -inset-8 border border-white/5 rounded-2xl"></div>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/portfolios/graphic-design/5.png"
                  alt="Featured Design Work"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover opacity-70 hover:opacity-85 transition-opacity duration-300"
                />
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            ></motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-white rounded-full opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Image */}
      <motion.div
        className="lg:hidden mt-12 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden rounded-2xl mx-auto max-w-md">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <Image
            src="/portfolios/graphic-design/5.png"
            alt="Featured Design Work"
            width={400}
            height={500}
            className="w-full h-auto object-cover opacity-60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
