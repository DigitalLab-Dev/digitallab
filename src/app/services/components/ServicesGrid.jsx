"use client";
import { motion } from "framer-motion";
import {
  Pen,
  Video,
  Palette,
  Share2,
  Megaphone,
  Code,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const ServicesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Content Writing",
      icon: Pen,
      description: "Compelling content that converts visitors into customers with strategic storytelling",
      link: "/services/copy-writing",
      number: "01",
    },
    {
      title: "Video Production",
      icon: Video,
      description: "Professional video production that captivates your audience and drives engagement",
      link: "/services/video-editing",
      number: "02",
    },
    {
      title: "Design",
      icon: Palette,
      description: "Stunning visual designs that make your brand memorable and impactful",
      link: "/services/graphic-design",
      number: "03",
    },
    {
      title: "Social Media",
      icon: Share2,
      description: "Strategic social presence that builds thriving communities around your brand",
      link: "/services/social-media-management",
      number: "04",
    },
    {
      title: "Advertising",
      icon: Megaphone,
      description: "Targeted ad campaigns that maximize ROI and reach your ideal customers",
      link: "/services/ads-management",
      number: "05",
    },
    {
      title: "Web Development",
      icon: Code,
      description: "Custom web applications built with cutting-edge technologies and best practices",
      link: "/services/web-development",
      number: "06",
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 102, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 102, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-semibold uppercase tracking-wider">
              What We Do
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Services</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital excellence with cutting-edge solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const Icon = service.icon;
            
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card Container */}
                <motion.div
                  className="relative h-full bg-black border-2 border-orange-500/20 rounded-3xl p-8 overflow-hidden cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(255, 102, 0, 0.6)",
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => window.location.href = service.link}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 opacity-0"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-6xl font-black text-orange-500/20">
                        {service.number}
                      </span>
                      
                      {/* Icon Container */}
                      <motion.div
                        className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl"
                        animate={{
                          rotate: isHovered ? 360 : 0,
                          scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center text-orange-500 font-semibold"
                      animate={{
                        x: isHovered ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;