
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // show/hide the floating para
  const [showPara, setShowPara] = useState(false);
  
  // State for image animation
  const [isHovered, setIsHovered] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);

  // follow-cursor motion values (smoothed with springs)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 30, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.25 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  // Handle hover for images
  useEffect(() => {
    if (isHovered) {
      const showImagesSequentially = () => {
        service.images.forEach((_, index) => {
          setTimeout(() => {
            setVisibleImages(prev => [...prev, index]);
          }, index * 150); // Show each image 150ms apart
        });
      };
      showImagesSequentially();
    } else {
      setVisibleImages([]);
    }
  }, [isHovered, service.images]);

  const handleMouseEnter = () => {
    setShowPara(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setShowPara(false);
    setIsHovered(false);
  };

  // Animation variants for the falling ball effect
  const imageVariants = {
    initial: { 
      opacity: 0, 
      y: -50, 
      scale: 0.8,
      rotate: 0
    },
    animate: { 
      opacity: 1, 
      y: [0, -20, 0], // Goes up then falls down like a ball
      scale: 1,
      rotate: [0, 180, 360], // Rotating while falling
      transition: {
        duration: 0.8,
        ease: "easeOut",
        times: [0, 0.3, 1], // Timing for the y animation keyframes
        rotate: {
          duration: 0.8,
          ease: "linear"
        }
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex items-center justify-between overflow-visible py-5 border-b border-orange-400 group"
    >
      <div className="flex flex-col">
        <h4 className="text-4xl sm:text-5xl uppercase text-neutral-200 group-hover:scale-75 font-bold transition-colors group-hover:text-neutral-500 mb-4">
          {service.heading}
        </h4>
        
        {/* Images container */}
        <div className="group-hover:flex hidden flex-wrap gap-2 min-h-[60px] items-center">
          <AnimatePresence>
            {visibleImages.map((imageIndex,index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative"
                style={{
                  zIndex: service.images.length - imageIndex // Later images appear on top
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 relative bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={service.images[imageIndex]}
                    alt={`${service.heading} tool ${imageIndex + 1}`}
                    fill
                
                    className="object-contain p-1"
                    sizes="(max-width: 640px) 48px, 56px"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Right action button */}
      <Link
        href={service.link}
        className="sm:w-20 sm:h-20 w-10 h-10 rounded-full bg-neutral-500 hover:bg-orange-500 flex items-center justify-center transition-colors flex-shrink-0"
      >
        <MdArrowForward className="text-3xl text-white" />
      </Link>

      {/* Floating glassmorphic paragraph that follows the cursor */}
      <AnimatePresence>
        {showPara && (
          <motion.div
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 25 }}
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl px-4 py-2">
              <p className="text-base md:text-lg text-white/90 whitespace-pre-line max-w-[15rem]">
                {service.para}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;