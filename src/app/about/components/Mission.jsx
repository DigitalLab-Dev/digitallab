'use client';
import React from 'react';
import { motion } from 'framer-motion';

// UHeading Component with semantic HTML
const UHeading = ({ text1, text2, level = 2, id }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag 
      id={id}
      className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase"
    >
      <span className="text-white mr-4">{text1}</span>
      <span
        className="text-orange-500"
        style={{
          textShadow:
            '3px 3px 0px rgba(0, 0, 0, 0.8), 6px 6px 0px rgba(255, 165, 0, 0.3)',
        }}
      >
        {text2}
      </span>
    </HeadingTag>
  );
};

const Mission = () => {
  const missions = [
    {
      id: 'vision',
      text1: 'Our',
      text2: 'vision',
      content:
        'We envision a world where innovative technology seamlessly integrates with human creativity to solve complex challenges. Our vision is to be the leading catalyst for digital transformation, empowering businesses and individuals to achieve extraordinary results through cutting-edge solutions and sustainable practices.',
      ariaLabel: 'Our vision for the future',
    },
    {
      id: 'mission',
      text1: 'Our',
      text2: 'mission',
      content:
        "Our mission is to deliver exceptional digital experiences that drive meaningful impact. We are committed to creating solutions that not only meet our clients' needs but exceed their expectations. Through collaboration, innovation, and relentless pursuit of excellence, we transform ideas into reality.",
      ariaLabel: 'Our mission statement',
    },
    {
      id: 'journey',
      text1: 'Our',
      text2: 'journey',
      content:
        'Founded on the principles of innovation and integrity, our journey began with a simple belief: that technology should serve humanity. Over the years, we have grown from a small team of passionate individuals to a trusted partner for businesses worldwide, always staying true to our core values and commitment to excellence.',
      ariaLabel: 'Our journey and history',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textContainerVariants = (isEven) => ({
    hidden: {
      opacity: 0,
      x: isEven ? -50 : 50,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  });

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const circleVariants = (isEven) => ({
    hidden: {
      opacity: 0,
      scale: 0.75,
      rotate: isEven ? 12 : -12,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  });

  const dividerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.3,
      scaleX: 1,
      transition: {
        duration: 1,
        delay: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const floatingDotVariants = (delay) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  const rotatingRingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const particleVariants = (delay, duration) => ({
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  const orbVariants = (duration, delay) => ({
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.05, 0.08, 0.05],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  return (
    <section 
      className="w-full pt-10   flex flex-col gap-16  items-center justify-center px-4 md:px-10 bg-black relative overflow-hidden"
      aria-label="Our Vision, Mission, and Journey"
    >
      {/* Decorative background - hidden from screen readers */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants(Math.random() * 3, 2 + Math.random() * 2)}
            animate="animate"
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          variants={orbVariants(6, 0)}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"
          variants={orbVariants(8, 3)}
          animate="animate"
        />
      </div>

      {missions.map((mission, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.article
            key={mission.id}
            className="w-full flex flex-col  items-center justify-center relative"
            aria-labelledby={`${mission.id}-heading`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: '-50px 0px' }}
            variants={containerVariants}
          >
            {/* Mission Content */}
            <div
              className={`w-full max-w-4xl flex flex-col lg:flex-row items-center  justify-center gap-8 lg:gap-16 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Text Content */}
              <motion.div
                className="flex-1 flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left"
                variants={textContainerVariants(isEven)}
              >
                {/* Animated Heading */}
                <motion.div variants={headingVariants}>
                  <UHeading 
                    text1={mission.text1} 
                    text2={mission.text2}
                    level={2}
                    id={`${mission.id}-heading`}
                  />
                </motion.div>

                {/* Animated Underline - decorative only */}
                <motion.div
                  className="h-1 w-24 bg-gradient-to-r from-orange-500 to-white origin-center"
                  variants={underlineVariants}
                  aria-hidden="true"
                />

                {/* Animated Paragraph */}
                <motion.p
                  className="text-md md:text-xl text-neutral-300 leading-relaxed max-w-2xl"
                  variants={paragraphVariants}
                >
                  {mission.content}
                </motion.p>
              </motion.div>

              {/* Decorative Visual Element */}
              <motion.figure
                className="flex-shrink-0"
                variants={circleVariants(isEven)}
                aria-hidden="true"
              >
                <div className="relative">
                  {/* Main Circle */}
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-white/5 border-2 border-orange-500/30 flex items-center justify-center backdrop-blur-sm">
                    {/* Inner Content */}
                    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-black/80 border border-white/20 flex items-center justify-center">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full"
                    variants={floatingDotVariants(index * 0.5)}
                    animate="animate"
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full"
                    variants={floatingDotVariants(index * 0.5 + 1)}
                    animate="animate"
                  />

                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/40"
                    variants={rotatingRingVariants}
                    animate="animate"
                  />
                </div>
              </motion.figure>
            </div>

            {/* Section Divider (except last) - decorative only */}
            {index < missions.length - 1 && (
              <motion.div
                className="mt-16 md:mt-20 lg:mt-24"
                variants={dividerVariants}
                aria-hidden="true"
              >
                <div className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                <div className="flex justify-center mt-2">
                  <motion.div 
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            )}
          </motion.article>
        );
      })}

      {/* Bottom Decorative Element - hidden from screen readers */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        aria-hidden="true"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-500" />
          <motion.div 
            className="w-3 h-3 bg-orange-500 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;