'use client';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const ImageComponent = ({ imageUrl, isFullWidth = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isOpen, setIsOpen] = useState(false);

  // Fade-in animation
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* Thumbnail */}
      <motion.div
        ref={ref}
        className={`w-full cursor-pointer ${
          isFullWidth
            ? 'max-w-4xl mx-auto'
            : 'h-auto'
        }`}
        variants={fadeInVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <div className="transform transition-transform duration-300 ease-out group-hover:scale-105">
            <Image
              src={imageUrl}
              alt="Image"
              layout="responsive"
              width={isFullWidth ? 1200 : 700}
              height={isFullWidth ? 300 : 475}
              className={`w-full object-cover rounded-lg transition-all duration-300 group-hover:brightness-110 ${
                isFullWidth
                  ? 'h-[300px] sm:h-[400px] md:h-[300px] '
                  : 'h-[200px] sm:h-[250px] md:h-[300px]'
              }`}
            />
          </div>
          
          {/* Hover overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-300 rounded-lg"></div>
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm -z-10"></div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            {/* Blurred Background */}
            <div className="absolute inset-0">
              <Image
                src={imageUrl}
                alt="Blurred Background"
                fill
                className="object-cover blur-2xl scale-110 opacity-60"
              />
            </div>

            {/* Enlarged Image */}
            <motion.div
              className="relative z-10 w-[90%] md:w-[70%] lg:w-[50%] rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={imageUrl}
                alt="Full Image"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageComponent;