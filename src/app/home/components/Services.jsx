"use client";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import {
  FaVideo,
  FaPaintBrush,
  FaSearch,
  FaUsers,
  FaBullhorn,
  FaRegCopy,
} from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      heading: "Video Editing",
      para: "Professional video editing with effects, transitions, and motion graphics.",
      link: "/services/video-editing",
      icon: FaVideo,
    },
    {
      heading: "Graphic Designing",
      para: "Creative graphics, branding, and visuals that stand out.",
      link: "/services/graphic-designing",
      icon: FaPaintBrush,
    },
    {
      heading: "SEO Optimization",
      para: "Rank higher on Google and boost website visibility.",
      link: "/services/seo",
      icon: FaSearch,
    },
    {
      heading: "Affiliate Marketing",
      para: "Grow revenue through targeted affiliate campaigns.",
      link: "/services/affiliate-marketing",
      icon: MdAttachMoney,
    },
    {
      heading: "Social Media Marketing",
      para: "Engage your audience with tailored social strategies.",
      link: "/services/social-media-marketing",
      icon: FaUsers,
    },
    {
      heading: "Ads Management",
      para: "Google, Facebook & Instagram Ads that convert.",
      link: "/services/ads",
      icon: FaBullhorn,
    },
    {
      heading: "Copywriting",
      para: "Powerful words that sell, engage, and inspire action.",
      link: "/services/copywriting",
      icon: FaRegCopy,
    },
  ];

  return (
    <section className="w-full mt-20 flex flex-col items-center justify-center px-10 mb-10">
      {/* Animated Heading */}
      <motion.h2
        className="text-center text-[10vw] sm:text-right sm:text-[8vw] lg:text-[6vw] w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        What We Are{" "}
        <span className="italican text-[#f0750f]">Offering</span>
      </motion.h2>

      {/* Subheading + Link */}
      <motion.div
        className="flex flex-col sm:justify-start justify-center mt-5 lg:mt-0 sm:items-start items-center w-full text-left mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl text-center sm:text-left">
          What we can do effectively <br /> and best of all
        </h3>
        <Link
          href="/services"
          className="mt-3 flex gap-2 items-center justify-center text-orange-400 hover:underline transition-all duration-500"
        >
          VIEW ALL SERVICES <MdArrowOutward />
        </Link>
      </motion.div>

      {/* Grid Animation (container only, not individual cards) */}
      <motion.div
        className="w-full flex flex-wrap items-center justify-center gap-5 mb-16"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} index={idx} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
