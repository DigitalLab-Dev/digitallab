"use client"
import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Zap, Eye, Star, Users, ThumbsUp, Award, X, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    clientName: "Mrs Akthar",
    clientLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop",
    projectImage: "https://res.cloudinary.com/dt9wziort/image/upload/v1761467419/delujo_iowrle.png",
    industry: "E-commerce",
    projectTitle: "Delujo – From Struggling Store to Growing Brand",
    problem: "Delujo had the vision and quality products but lacked direction. Despite effort and consistency, their social media wasn't driving sales. The brand didn't have a defined identity, and their online store wasn't converting visitors into loyal customers.",
    solution: "We stepped in to rebuild Delujo's story — not just its visuals. Our team shaped a brand identity that spoke to its audience, redesigned the Shopify experience for smoother conversions, and turned social media into a source of trust and engagement. Every post, every campaign, every caption was crafted to connect, not just sell.",
    result: "Within just 3 months, Delujo went from invisible to influential — earning over 100K views in a single month, growing from 0 to 1,000 followers, and achieving 5X faster sales growth. What started as a struggling store is now a thriving brand with a loyal audience and clear identity.",
    metrics: [
      { label: "Monthly Views", value: "100k+", icon: Eye, color: "text-blue-400" },
      { label: "Growth Acceleration", value: "5X", icon: TrendingUp, color: "text-green-400" },
      { label: "Followers in 3 Months", value: "1,000+", icon: Users, color: "text-purple-400" }
    ],
    tags: ["Branding", "Social Media Management", "Store Optimization", "Shopify"]
  },
  {
    id: 2,
    clientName: "Treble Health",
    clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop",
    projectImage: "https://res.cloudinary.com/dt9wziort/image/upload/v1761467668/treble_ttgclk.png",
    industry: "Personal Branding",
    projectTitle: "Treble Health – Reigniting Reach and Relevance",
    problem: "Treble Health had valuable content, but the numbers told another story. Despite consistent uploads, their videos were stuck at the same view count, struggling to break through to new audiences. Engagement had plateaued, and their message wasn't reaching the people who needed it most.",
    solution: "We analyzed audience behavior and reshaped their content strategy with an emotion-first, audience-centric editing approach. By reworking pacing, adding visual storytelling, and optimizing for retention, every video became more engaging, more human, and more watchable. The focus shifted from 'just content' to 'content that connects'.",
    result: "The results came fast — and stayed strong. Treble Health saw an instant 3X boost in views, with higher audience retention and engagement across their videos. Beyond numbers, their content started doing what it was meant to do — inspire, educate, and impact lives.",
    metrics: [
      { label: "Increase in Views", value: "3X", icon: Star, color: "text-yellow-400" },
      { label: "Audience Retention", value: "70%", icon: ThumbsUp, color: "text-pink-400" },
      { label: "Monthly Views", value: "500k+", icon: Eye, color: "text-cyan-400" }
    ],
    tags: ["Video Editing", "Content Strategy", "YouTube Channel Management"]
  },
  {
    id: 3,
    clientName: "Naqvix",
    clientLogo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=150&h=80&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
    industry: "Food & Hospitality",
    projectTitle: "Foodie – A Fresh Look for a Fresh Brand",
    problem: "Foodie — a promising social media app for restaurants — was stuck behind an outdated, lifeless design and an unresponsive website. The layout didn't reflect their dynamic concept, the user experience felt dull, and the platform wasn't built to perform on modern devices.",
    solution: "We rebuilt Foodie's digital presence from scratch — starting with a modern, engaging, and visually rich design that captured the energy of food and community. Our team developed a fully responsive website, optimized for speed, SEO, and mobile performance, ensuring every visitor experienced Foodie at its best.",
    result: "The transformation was instant. Foodie saw a 10X boost in engagement, glowing 5-star client feedback, and a complete 100% redesign that finally aligned their brand's personality with its purpose — deliciously digital and impossible to ignore.",
    metrics: [
      { label: "Website Redesign", value: "100%", icon: Zap, color: "text-orange-400" },
      { label: "Engagement Growth", value: "10X", icon: TrendingUp, color: "text-green-400" },
      { label: "Client Feedback", value: "5★", icon: Award, color: "text-amber-400" }
    ],
    tags: ["Web Design", "Web Development", "SEO Optimization"]
  },
];

const CaseStudyCard = React.memo(({ study, index, hoveredMetric, setHoveredMetric }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      {/* Image Section */}
      <motion.div 
        className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}
        variants={itemVariants}
      >
        <div className="relative overflow-hidden rounded-2xl">
          {/* Main project image with parallax */}
          <motion.img
            src={study.projectImage}
            alt={study.projectTitle}
            className="w-full h-120 object-cover"
            style={{ y: imageY }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/600x400/1a1a1a/ffffff?text=${study.projectTitle}`;
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Floating client logo */}
          <motion.div 
            className="absolute top-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={study.clientLogo}
              alt={study.clientName}
              className="w-16 h-8 object-contain"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/150x80/333/fff?text=${study.clientName}`;
              }}
            />
          </motion.div>
          
          {/* Industry tag */}
          <motion.div 
            className="absolute bottom-6 left-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {study.industry}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-8`}
        variants={itemVariants}
      >
        {/* Header */}
        <div className="space-y-4">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white"
            variants={itemVariants}
          >
            {study.projectTitle}
          </motion.h3>
          <motion.p 
            className="text-orange-400 text-lg font-medium"
            variants={itemVariants}
          >
            {study.clientName}
          </motion.p>
          
          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={itemVariants}
          >
            {study.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm transition-all duration-200 hover:bg-orange-500/10 hover:border-orange-500/30 hover:scale-105"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Problem → Solution → Result */}
        <motion.div className="space-y-6" variants={itemVariants}>
          {/* Problem */}
          <motion.div 
            className="relative pl-8"
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
            <h4 className="text-red-400 font-bold text-lg mb-3 flex items-center">
              <motion.span 
                className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <X size={16} />
              </motion.span>
              Problem
            </h4>
            <p className="text-white/80 leading-relaxed">{study.problem}</p>
          </motion.div>

          {/* Solution */}
          <motion.div 
            className="relative pl-8"
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <h4 className="text-blue-400 font-bold text-lg mb-3 flex items-center">
              <motion.span 
                className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Zap size={16} />
              </motion.span>
              Solution
            </h4>
            <p className="text-white/80 leading-relaxed">{study.solution}</p>
          </motion.div>

          {/* Result */}
          <motion.div 
            className="relative pl-8"
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <h4 className="text-green-400 font-bold text-lg mb-3 flex items-center">
              <motion.span 
                className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle size={16} />
              </motion.span>
              Result
            </h4>
            <p className="text-white/80 leading-relaxed mb-6">{study.result}</p>
          </motion.div>
        </motion.div>

        {/* Metrics Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={itemVariants}
        >
          {study.metrics.map((metric, metricIndex) => {
            const IconComponent = metric.icon;
            const isHovered = hoveredMetric === `${study.id}-${metricIndex}`;
            
            return (
              <motion.div
                key={metricIndex}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center cursor-pointer transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + metricIndex * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05
                }}
                onHoverStart={() => setHoveredMetric(`${study.id}-${metricIndex}`)}
                onHoverEnd={() => setHoveredMetric(null)}
              >
                <motion.div 
                  className={`${metric.color} mb-2 flex justify-center`}
                  animate={isHovered ? { 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1.2, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
                  animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-white/70 text-sm mt-1">{metric.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

CaseStudyCard.displayName = 'CaseStudyCard';

const CaseStudiesSection = () => {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  return (
    <section id='case-studies' className="relative py-10 mb-10 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 ">
        <motion.div 
          className="absolute top-32 left-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.5) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Case <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Studies</span>
          </motion.h2>
          <motion.p 
            className="text-white/70 text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real projects, real results. Discover how we've transformed businesses across industries with innovative solutions.
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              index={index}
              hoveredMetric={hoveredMetric}
              setHoveredMetric={setHoveredMetric}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;