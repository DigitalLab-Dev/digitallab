'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
  Zap,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

const WebsiteCTA = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const ctx = gsap.context(() => {
        // Animate main content
        gsap.fromTo(
          '.cta-main-content',
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.2,
          }
        );

        // Animate feature items
        gsap.fromTo(
          '.feature-item',
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.5,
            ease: 'back.out(1.7)',
          }
        );

        // Animate floating elements
        gsap.fromTo(
          '.floating-element',
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.8,
            ease: 'elastic.out(1, 0.5)',
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [isVisible]);

  const features = [
    { icon: Code2, text: 'Custom Development' },
    { icon: Rocket, text: 'Fast Delivery' },
    { icon: Users, text: '24/7 Support' },
    { icon: CheckCircle, text: '100% Satisfaction' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Floating code symbols */}
        {['</', '{}', '/>', '<>', '()'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-400/20 text-4xl font-mono font-bold floating-element"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle, #fb923c 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="cta-main-content">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/30 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">
                  Ready to Transform?
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Let's Build Your</span>
                <br />
                <span
                  className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Dream Website
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                Transform your vision into a stunning digital reality.
                Professional web development that drives results and captivates
                your audience.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="feature-item flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(251, 146, 60, 0.1)',
                    }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="cta-main-content flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold text-white text-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2">
                    <span>Get Started Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500 to-orange-600 blur-xl opacity-50" />
                </motion.button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="cta-main-content flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>Quick Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Guaranteed Quality</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Card */}
          <motion.div className="cta-main-content" style={{ y }}>
            <div className="relative">
              {/* Main glassmorphic card */}
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-orange-400/50 transition-all duration-500"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

                {/* Content */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="inline-flex p-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 mb-4">
                    <Code2 className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Start Your Project?
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Join 500+ satisfied clients who trust us with their digital
                    presence. Let's create something amazing together.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold text-orange-400">
                        500+
                      </div>
                      <div className="text-sm text-gray-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">
                        98%
                      </div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl" />
              </motion.div>

              {/* Floating elements around the card */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full floating-element"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full floating-element"
                animate={{
                  y: [0, 20, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,120 C150,100 300,120 450,100 C600,80 750,120 900,100 C1050,80 1200,100 1200,100 L1200,120 L0,120 Z"
              fill="url(#orangeGradient)"
            />
            <defs>
              <linearGradient
                id="orangeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(251, 146, 60, 0.3)" />
                <stop offset="50%" stopColor="rgba(234, 88, 12, 0.5)" />
                <stop offset="100%" stopColor="rgba(251, 146, 60, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteCTA;
