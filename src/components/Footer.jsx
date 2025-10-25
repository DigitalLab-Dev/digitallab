'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Video Editing', href: '/services/video-editing' },
    { name: 'Graphic Design', href: '/services/graphic-design' },
    {
      name: 'Social Media Marketing',
      href: '/services/social-media-management',
    },
    { name: 'Ads Management', href: '/services/ads-management' },
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'Web Development', href: '/services/web-development' },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/home.of.professionals',
      label: 'Facebook',
      color: 'hover:text-blue-500',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/digitallabservices?igsh=cjNlcXJyYWxybnZq',
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/company/digtal-lab/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-black to-black">
      {/* Animated Background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-15"
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

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 border-2 border-orange-500/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-16 h-16 border-2 border-white/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl  mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info - Spans 4 columns */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  Digital <span className="text-orange-500">Lab</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                 Where creativity meets strategy to build brands that inspire and perform
                </p>

                {/* Contact Info */}
                <address className="space-y-3 not-italic">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <FaMapMarkerAlt className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">
                      Ali Hussain Abad, Bata Factory
                      <br />
                      Multan Road, Lahore, Pakistan
                    </span>
                  </a>

                  <a
                    href="tel:+923265929677"
                    className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <FaPhoneAlt className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">+92 326 5929677</span>
                  </a>

                  <a
                    href="mailto:info@digitallabservices.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <FaEnvelope className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">info@digitallabservices.com</span>
                  </a>
                </address>
              </motion.div>
            </div>

            {/* Quick Links - Spans 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <nav className="space-y-3" aria-label="Quick navigation links">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-gray-400 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Services - Spans 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <nav className="space-y-3" aria-label="Services navigation">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block text-gray-400 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Newsletter - Spans 4 columns */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                Subscribe to our newsletter for the latest updates, tips, and
                exclusive offers.
              </p>

              <div className="relative group">
                <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full border border-white/20 overflow-hidden shadow-lg transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-xl">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
                    aria-label="Email for newsletter"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="p-3 m-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                    aria-label="Subscribe to newsletter"
                  >
                    <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Success Message */}
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-0 flex items-center gap-2 text-green-400 text-sm"
                  >
                    <FaCheckCircle />
                    <span>Successfully subscribed!</span>
                  </motion.div>
                )}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold text-white mb-4">
                  Follow Us
                </h5>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-orange-500/50 hover:shadow-lg`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-5 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} Digital Lab. All rights
                reserved.
              </p>
              <nav className="flex gap-6" aria-label="Legal links">
                <Link
                  href="/privacy"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Sitemap
                </Link>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
