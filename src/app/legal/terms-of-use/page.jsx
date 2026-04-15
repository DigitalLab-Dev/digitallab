'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaScroll,
  FaUserCheck,
  FaDesktop,
  FaBan,
  FaLink,
  FaSyncAlt,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationCircle,
  FaUserShield
} from 'react-icons/fa';

const TermsOfUse = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 'acceptance',
      icon: FaUserCheck,
      title: 'Acceptance of Terms',
      content: `By accessing and browsing the Digital Lab website (www.digitallabservices.com), you accept and agree to comply with these Terms of Use.

• These terms apply to all visitors, browsers, and users of this website
• By using this website, you confirm that you are at least 18 years of age
• If you disagree with any part of these terms, please discontinue use immediately
• These Terms of Use are separate from our Terms of Service, which govern paid engagements

We may update these terms periodically. Continued use of the website after changes constitutes acceptance of the revised terms.`
    },
    {
      id: 'website-use',
      icon: FaDesktop,
      title: 'Permitted Website Use',
      content: `You may use our website for the following purposes:

Permitted Use:
• Browsing and viewing publicly available content
• Accessing your account dashboard (if registered)
• Submitting inquiries through our contact forms
• Subscribing to our newsletter
• Downloading publicly available resources
• Sharing content via social media with proper attribution

Requirements:
• Use a modern, updated web browser for the best experience
• Maintain the security of any account credentials
• Report any security vulnerabilities you discover
• Comply with all applicable local and international laws`
    },
    {
      id: 'prohibited-use',
      icon: FaBan,
      title: 'Prohibited Activities',
      content: `The following activities are strictly prohibited on our website:

• Copying, reproducing, or redistributing website content without authorization
• Using automated tools (bots, scrapers) to extract data from our website
• Attempting to hack, compromise, or gain unauthorized access to our systems
• Uploading malicious code, viruses, or harmful files
• Impersonating Digital Lab, its employees, or other users
• Interfering with the website's performance or availability
• Using the website for spam, phishing, or fraudulent activities
• Reverse-engineering any part of our website or SaaS products
• Engaging in any activity that violates applicable laws or regulations
• Collecting personal data of other users without consent

Violation of these terms may result in immediate access restriction and potential legal action.`
    },
    {
      id: 'intellectual-property',
      icon: FaScroll,
      title: 'Intellectual Property',
      content: `All content on this website is the property of Digital Lab:

Protected Content Includes:
• Website design, layout, and user interface
• Logos, trademarks, and brand elements
• Written content, blog posts, and articles
• Images, graphics, and visual assets
• Videos and multimedia content
• Software and underlying code
• SaaS product interfaces and functionality

Usage Rights:
• You may view and print pages for personal, non-commercial use
• Any commercial use requires prior written consent from Digital Lab
• Attribution must be provided when referencing our content
• Links to our website are permitted without modification of content`
    },
    {
      id: 'user-content',
      icon: FaUserShield,
      title: 'User-Submitted Content',
      content: `When you submit content through our website (e.g., contact forms, comments):

• You retain ownership of your submitted content
• You grant Digital Lab a non-exclusive license to use submitted information for service delivery
• You represent that your submission does not violate any third-party rights
• We reserve the right to remove any user content that violates these terms
• Personal information submitted is handled according to our Privacy Policy

We do not guarantee that user-submitted content will be published or used. Digital Lab is not responsible for user-submitted content accuracy.`
    },
    {
      id: 'external-links',
      icon: FaLink,
      title: 'External Links & Third-Party Content',
      content: `Our website may contain links to third-party websites:

• External links are provided for convenience and informational purposes only
• Digital Lab does not endorse or control third-party website content
• We are not responsible for the privacy practices of external websites
• Visiting external links is at your own risk
• We recommend reviewing the terms and privacy policies of any third-party site

Third-party content displayed on our website (e.g., social media embeds) is subject to the respective platform's terms.`
    },
    {
      id: 'modifications',
      icon: FaSyncAlt,
      title: 'Website Modifications & Availability',
      content: `We reserve the right to modify our website at any time:

• Website content may be updated, changed, or removed without notice
• Features and functionality may be added, modified, or discontinued
• The website may experience scheduled or unscheduled downtime
• We do not guarantee continuous, uninterrupted access to the website
• We are not liable for any loss arising from website unavailability

Digital Lab reserves the right to restrict or deny access to any user without prior notice if these Terms of Use are violated.`
    },
    {
      id: 'liability',
      icon: FaExclamationCircle,
      title: 'Limitation of Liability',
      content: `Regarding website use:

• The website and its content are provided "as is" without warranties
• Digital Lab is not liable for any damages arising from website use
• We do not guarantee the accuracy, completeness, or timeliness of website content
• We are not responsible for any errors, interruptions, or data loss
• Maximum liability is limited to the extent permitted by applicable law

This limitation applies to all damages of any kind, including direct, indirect, incidental, and consequential damages.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `If you have questions about these Terms of Use:

Company: Digital Lab
Email: info@digitallabservices.com
Phone: +92 326 5929677
Address: Ali Hussain Abad, Lahore, Pakistan

These terms are governed by the laws of Pakistan.

Last Updated: April 2026
Effective Date: April 15, 2026`
    }
  ];

  const tableOfContents = sections.map(section => ({
    id: section.id,
    title: section.title
  }));

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
        />
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
                Loading Terms of Use...
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
              <FaScroll className="text-4xl text-orange-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Terms of <span className="text-orange-500">Use</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              Rules and guidelines for using our website and online platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
            >
              <FaCheckCircle className="text-orange-500" />
              Last updated: April 2026
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tableOfContents.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 rounded-lg text-left transition-all duration-300 group"
                >
                  <span className="text-sm text-gray-300 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-xl mb-6"
                  >
                    <section.icon className="text-2xl text-orange-500" />
                  </motion.div>

                  <h3 className="text-3xl font-bold mb-4 text-white">{section.title}</h3>
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>

                {index < sections.length - 1 && (
                  <div className="mt-12 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
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
              <h3 className="text-3xl font-bold mb-4">Have Questions?</h3>
              <p className="text-gray-400 mb-6">
                If you have any questions about these Terms of Use, please contact us.
              </p>
              <motion.a
                href="mailto:info@digitallabservices.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors duration-300"
              >
                <FaEnvelope />
                Contact Our Team
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default TermsOfUse;
