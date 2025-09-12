"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const Gallery = () => {
  const designs = [
    "/portfolios/graphic-design/1.png",
    "/portfolios/graphic-design/2.png",
    "/portfolios/graphic-design/3.png",
    "/portfolios/graphic-design/4.png",
    "/portfolios/graphic-design/5.jpg",
    "/portfolios/graphic-design/6.jpg",
    "/portfolios/graphic-design/7.png",
    "/portfolios/graphic-design/8.png",
    "/portfolios/graphic-design/9.png",
    "/portfolios/graphic-design/10.jpg",
    "/portfolios/graphic-design/11.png",
    "/portfolios/graphic-design/12.png",
    "/portfolios/graphic-design/13.png",
    "/portfolios/graphic-design/14.png",
    "/portfolios/graphic-design/15.jpg",
    "/portfolios/graphic-design/16.png",
    "/portfolios/graphic-design/17.png",
    "/portfolios/graphic-design/18.png",
    "/portfolios/graphic-design/19.png",
    "/portfolios/graphic-design/20.png",
    "/portfolios/graphic-design/21.png",
    "/portfolios/graphic-design/22.png",
    "/portfolios/graphic-design/23.png",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState({});
  const galleryRef = useRef(null);

  // Animate gallery items on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = galleryRef.current?.querySelectorAll(".gallery-item");
    galleryItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") {
          setSelectedImage(null);
        } else if (e.key === "ArrowLeft") {
          navigateImage("prev");
        } else if (e.key === "ArrowRight") {
          navigateImage("next");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const openLightbox = (index) => {
    setSelectedImage(designs[index]);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % designs.length
        : currentIndex === 0
        ? designs.length - 1
        : currentIndex - 1;

    setCurrentIndex(newIndex);
    setSelectedImage(designs[newIndex]);
  };

  const handleImageLoad = (index) => {
    setIsLoaded((prev) => ({ ...prev, [index]: true }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lightboxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 tracking-tight">
            Design Gallery
          </h1>
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive collection of graphic design works
          </p>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        ref={galleryRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12"
      >
        {/* ✅ only 2 columns max, even on large screens */}
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="gallery-item group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
              onClick={() => openLightbox(index)}
              whileHover={{
                y: -6, // smooth float
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              {/* Loading placeholder */}
              {/* {!isLoaded[index] && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )} */}

              {/* Image */}
              <img
                src={design}
                alt={`Design ${index + 1}`}
                className={`w-full h-auto object-contain transition-all duration-500 ${
                  isLoaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
                >
                  <ZoomIn className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Image number */}
              <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              {currentIndex + 1} / {designs.length}
            </div>

            {/* Main image */}
            <motion.div
              variants={lightboxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={`Design ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            {designs.length} designs • Interactive gallery with keyboard
            navigation
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Use arrow keys to navigate • Press ESC to close lightbox
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
