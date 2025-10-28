'use client';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback, memo } from 'react';
const fadeInVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// FIX 1 & 2: Fixed ImageComponent with proper aspect ratios and accessibility
const ImageComponent = memo(
  ({ imageUrl, isFullWidth = false, alt = 'Design showcase image' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);

    return (
      <>
        {/* FIX 2: Changed div to button for accessibility */}
        <motion.button
          ref={ref}
          type="button"
          className={`w-full cursor-pointer bg-transparent border-0 p-0 ${
            isFullWidth ? 'max-w-4xl mx-auto' : ''
          }`}
          variants={fadeInVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          onClick={handleOpen}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          aria-label={`View ${alt} in fullscreen`}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            {/* FIX 1: Force consistent aspect ratio using container */}
            <div
              className={`relative w-full ${
                isFullWidth
                  ? 'h-[250px] sm:h-[350px] md:h-[450px] lg:h-[70vh]'
                  : 'aspect-[16/9]'
              }`}
            >
              {/* FIX 1: Use fill prop with modern Next.js Image */}
              <Image
                src={imageUrl}
                alt={alt}
                fill
                sizes={
                  isFullWidth
                    ? '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
                }
                className="object-cover rounded-lg transition-all duration-300 group-hover:brightness-110"
              />
            </div>

            {/* Hover overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:via-amber-500/5 group-hover:to-orange-600/10 transition-all duration-300 rounded-lg" />

            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm -z-10" />
          </div>
        </motion.button>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              role="dialog"
              aria-modal="true"
              aria-label="Image preview modal"
            >
              {/* FIX 3: Blurred Background with proper aria */}
              <div className="absolute inset-0" aria-hidden="true">
                <Image
                  src={imageUrl}
                  alt=""
                  fill
                  className="object-cover blur-2xl scale-110 opacity-40"
                />
              </div>

              {/* Close button for accessibility */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Enlarged Image */}
              <motion.div
                className="relative z-10 w-[90%] md:w-[80%] lg:w-[70%] max-h-[90vh] rounded-lg overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={imageUrl}
                    alt={alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg max-h-[90vh]"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
);

ImageComponent.displayName = 'ImageComponent';

export default ImageComponent;
