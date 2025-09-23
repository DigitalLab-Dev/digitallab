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
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const ServicesGrid = () => {
  const services = [
    {
      title: "Content Writing",
      icon: Pen,
      description:
        "Compelling content that converts visitors into customers with persuasive storytelling",
      features: ["SEO-Optimized", "Brand Voice", "Conversion-Focused"],
      link: "/services/copy-writing",
    },
    {
      title: "Video Production",
      icon: Video,
      description:
        "Professional video production that captivates your audience and tells your story",
      features: ["Motion Graphics", "Color Grading", "Audio Enhancement"],
      link: "/services/video-editing",
    },
    {
      title: "Design",
      icon: Palette,
      description:
        "Stunning visual designs that make your brand memorable and impactful",
      features: ["Brand Identity", "Print Design", "Digital Assets"],
      link: "/services/graphic-design",
    },
    {
      title: "Social Media",
      icon: Share2,
      description:
        "Strategic social presence that builds communities and drives engagement",
      features: ["Content Strategy", "Community Management", "Analytics"],
      link: "/services/social-media-management",
    },
    {
      title: "Advertising",
      icon: Megaphone,
      description:
        "Targeted ad campaigns that maximize ROI and reach your ideal customers",
      features: ["PPC Management", "Creative Assets", "Performance Tracking"],
      link: "/services/ads-management",
    },
    {
      title: "Web Development",
      icon: Code,
      description:
        "Custom web applications built with modern technologies and best practices",
      features: ["Full-Stack", "Mobile-First", "Performance Optimized"],
      link: "/services/web-development",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-amber-400 rounded-full blur-3xl opacity-10 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Craft</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Future-ready digital experiences with radiant minimalism
          </p>
        </motion.div>

        {/* Cards wrapper - FLEX instead of grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="w-full sm:w-[45%] lg:w-[30%] xl:w-[28%] 
                         rounded-2xl relative bg-gradient-to-br from-white/10 to-white/5 
                         border border-white/10 shadow-lg shadow-black/40 hover:shadow-orange-500/40 
                         transition-all duration-300 overflow-hidden"
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 hover:opacity-100 blur-2xl transition duration-500"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Icon */}
                <service.icon className="w-14 h-14 text-orange-400 mb-6 transition-transform duration-300 group-hover:scale-110" />

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <Link
                  href={service.link}
                  className="mt-auto flex items-center gap-2 text-orange-400 font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
