"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Code, ShoppingCart, Smartphone, RefreshCw, FileEdit } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: 'Custom Website Development',
      description: 'Tailored web solutions built from scratch to meet your unique business requirements and brand identity.',
      icon: Code,
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Complete online store development with Shopify, WooCommerce, and custom platforms for seamless shopping experiences.',
      icon: ShoppingCart,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web App Development',
      description: 'Dynamic and interactive web applications with modern frameworks and cutting-edge technologies.',
      icon: Smartphone,
      gradient: 'from-orange-400 to-yellow-500'
    },
    {
      title: 'Website Redesign & Optimization',
      description: 'Transform your existing website with modern design principles and performance optimization techniques.',
      icon: RefreshCw,
      gradient: 'from-orange-600 to-pink-500'
    },
    {
      title: 'CMS Development',
      description: 'Content management systems with WordPress, Webflow, and custom solutions for easy content control.',
      icon: FileEdit,
      gradient: 'from-orange-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading and subheading on load
      gsap.fromTo('.main-heading', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.sub-heading', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      // Animate cards in sequence
      gsap.fromTo('.service-card', 
        { opacity: 0, y: 100, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.15,
          delay: 0.6,
          ease: 'power3.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (centerX - e.clientX) / 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <section ref={sectionRef} className="min-h-screen mt-10 pt-20 py-10 px-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="main-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            // style={{
            //   background: 'linear-gradient(135deg, #ffffff 0%, #fb923c 50%, #ea580c 100%)',
            //   WebkitBackgroundClip: 'text',
            //   WebkitTextFillColor: 'transparent',
            //   backgroundClip: 'text',
            //   textShadow: '0 0 50px rgba(251, 146, 60, 0.3)'
            // }}
          >
            Services Offered
          </motion.h2>
          <motion.p 
            className="sub-heading text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your digital presence with our comprehensive web development solutions, 
            crafted with precision and powered by cutting-edge technology
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="service-card w-full md:w-[40%] group cursor-pointer"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-full p-8 rounded-2xl overflow-hidden">
                  {/* Glassmorphic background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:border-orange-400/50 transition-all duration-300"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: 'linear-gradient(45deg, transparent, rgba(251, 146, 60, 0.3), transparent)',
                         padding: '2px',
                       }}>
                    <div className="w-full h-full bg-black rounded-2xl"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;