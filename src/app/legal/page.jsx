'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldAlt,
  FaFileContract,
  FaGavel,
  FaClipboardCheck,
  FaUndoAlt,
  FaExclamationTriangle,
  FaCookie,
  FaShareAlt,
  FaExchangeAlt,
  FaBalanceScale,
  FaArrowRight,
  FaScroll,
} from 'react-icons/fa';

const LegalPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const legalPages = [
    {
      title: 'Privacy Policy',
      icon: FaShieldAlt,
      description: 'How we collect, use, and protect your personal information and data.',
      href: '/legal/privacy-policy',
      number: '01',
    },
    {
      title: 'Terms of Service',
      icon: FaFileContract,
      description: 'The terms governing the use of our digital services and SaaS products.',
      href: '/legal/terms-of-service',
      number: '02',
    },
    {
      title: 'Terms of Use',
      icon: FaScroll,
      description: 'Rules and guidelines for using our website and online platforms.',
      href: '/legal/terms-of-use',
      number: '03',
    },
    {
      title: 'Terms & Conditions',
      icon: FaBalanceScale,
      description: 'General terms and conditions for all our services and SaaS products.',
      href: '/legal/terms-and-conditions',
      number: '04',
    },
    {
      title: 'Refund Policy',
      icon: FaClipboardCheck,
      description: 'Our transparent refund process including 100% unused SaaS credit refunds.',
      href: '/legal/refund-policy',
      number: '05',
    },
    {
      title: 'Return Policy',
      icon: FaUndoAlt,
      description: 'How returns are handled when services qualify under our refund policy.',
      href: '/legal/return-policy',
      number: '06',
    },
    {
      title: 'Disclaimer',
      icon: FaExclamationTriangle,
      description: 'Important disclaimers regarding our services, content, and liability.',
      href: '/legal/disclaimer',
      number: '07',
    },
    {
      title: 'Cookie Policy',
      icon: FaCookie,
      description: 'How we use cookies and tracking technologies on our website.',
      href: '/legal/cookie-policy',
      number: '08',
    },
    {
      title: 'Data Sharing',
      icon: FaShareAlt,
      description: 'When and how your data may be shared with third parties.',
      href: '/legal/data-sharing',
      number: '09',
    },
    {
      title: 'Exchange Policy',
      icon: FaExchangeAlt,
      description: 'Our policy on digital product exchanges — all products are non-exchangeable.',
      href: '/legal/exchange-policy',
      number: '10',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 102, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 102, 0, 0.15) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
            }}
          />
        </div>
      </div>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6"
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl text-gray-400"
              >
                Loading Legal Center...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6"
            >
              <FaGavel className="text-4xl text-orange-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Transparency & Trust
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Center</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Everything you need to know about our policies, terms, and how we protect your rights. We believe in full transparency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
            >
              <FaShieldAlt className="text-orange-500" />
              10 Policies • Last reviewed: April 2026
            </motion.div>
          </div>
        </section>

        {/* Legal Pages Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalPages.map((page, index) => {
                const isHovered = hoveredIndex === index;
                const Icon = page.icon;

                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="group relative"
                  >
                    <Link href={page.href}>
                      <motion.div
                        className="relative h-full bg-black border-2 border-orange-500/20 rounded-3xl p-8 overflow-hidden cursor-pointer"
                        whileHover={{
                          scale: 1.05,
                          borderColor: 'rgba(255, 102, 0, 0.6)',
                        }}
                        transition={{ duration: 0.3 }}
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
                              {page.number}
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
                              <Icon className="w-7 h-7 text-white" />
                            </motion.div>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                            {page.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-400 leading-relaxed mb-6">
                            {page.description}
                          </p>

                          {/* Read More Link */}
                          <motion.div
                            className="flex items-center text-orange-500 font-semibold"
                            animate={{
                              x: isHovered ? 10 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="mr-2">Read Policy</span>
                            <FaArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl"
            >
              <FaBalanceScale className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Have Questions About Our Policies?</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                If you have any questions, concerns, or need clarification about any of our legal documents, our team is here to help.
              </p>
              <motion.a
                href="mailto:info@digitallabservices.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors duration-300"
              >
                <FaArrowRight />
                Contact Our Team
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default LegalPage;
