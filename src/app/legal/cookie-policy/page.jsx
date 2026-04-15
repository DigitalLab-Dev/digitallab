'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCookie,
  FaCheckCircle,
  FaCog,
  FaChartBar,
  FaBullseye,
  FaShieldAlt,
  FaDesktop,
  FaSyncAlt,
  FaEnvelope,
  FaInfoCircle
} from 'react-icons/fa';

const CookiePolicy = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 'what-are-cookies',
      icon: FaInfoCircle,
      title: 'What Are Cookies?',
      content: `Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. They allow our website to recognize your device and remember certain information about your visit.

Cookies serve various purposes:
• They help our website function properly
• They improve your browsing experience
• They help us understand how visitors use our website
• They allow us to personalize content and ads
• They enable social media features

Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remain on your device until they expire or you delete them).`
    },
    {
      id: 'essential-cookies',
      icon: FaCog,
      title: 'Essential Cookies',
      content: `These cookies are necessary for the website to function and cannot be switched off:

Cookies We Use:
• Session Management: Maintain your session as you navigate our website
• Security: Protect against cross-site request forgery and other security threats
• Load Balancing: Distribute traffic across our servers for optimal performance
• Cookie Consent: Remember your cookie preferences

Technical Details:
• These cookies do not store personal identification information
• They are typically deleted when you close your browser
• Disabling essential cookies may prevent the website from functioning correctly
• No consent is required for essential cookies as they are strictly necessary`
    },
    {
      id: 'performance-cookies',
      icon: FaChartBar,
      title: 'Performance & Analytics Cookies',
      content: `These cookies help us understand how visitors interact with our website:

Tools We Use:
• Google Analytics (G-FP5LSNLNBS): Tracks page views, session duration, bounce rates, and user demographics
• Vercel Speed Insights: Monitors our website performance and loading times

Data Collected:
• Pages visited and time spent on each page
• How you arrived at our website (referral source)
• Your approximate geographic location (country/city level)
• Device type, browser, and operating system
• Click patterns and scroll behavior

Purpose:
• Improve website usability and content
• Identify and fix performance issues
• Understand which pages are most popular
• Optimize our marketing efforts

These cookies collect aggregated, anonymous data. They do not identify you personally.`
    },
    {
      id: 'functional-cookies',
      icon: FaDesktop,
      title: 'Functional Cookies',
      content: `These cookies enable enhanced functionality and personalization:

What They Do:
• Remember your language and region preferences
• Store your display preferences (dark mode, font size)
• Remember form data to save you time on repeat visits
• Maintain your login status on our SaaS products
• Remember your cookie consent choices

Data Stored:
• User preferences and settings
• Form auto-fill data (name, email — if you choose to save)
• UI configuration choices

These cookies improve your experience but are not strictly necessary. If disabled, some features may not work as expected.`
    },
    {
      id: 'marketing-cookies',
      icon: FaBullseye,
      title: 'Marketing & Advertising Cookies',
      content: `These cookies track your activity for targeted advertising:

Platforms That May Set Cookies:
• Google Ads: For remarketing and conversion tracking
• Facebook Pixel: For social media advertising
• LinkedIn Insight Tag: For B2B advertising
• Other advertising networks as applicable

Purpose:
• Show you relevant ads based on your interests
• Measure the effectiveness of our advertising campaigns
• Limit the number of times you see an ad
• Help us reach people who are most likely to benefit from our services

Data Collected:
• Browsing behavior across websites
• Interaction with our ads
• Conversion actions (form submissions, sign-ups)

You can opt out of targeted advertising through your browser settings or the advertising platform's opt-out tools.`
    },
    {
      id: 'third-party-cookies',
      icon: FaShieldAlt,
      title: 'Third-Party Cookies',
      content: `Some cookies on our website are set by third parties:

Third-Party Services:
• Calendly: For booking consultation calls
• Cloudinary: For optimized image delivery
• Social media embeds (Facebook, Instagram, LinkedIn)
• Payment processors (if applicable)
• Live chat or support widgets

Important Notes:
• We do not control third-party cookies
• Third-party cookies are governed by the respective company's privacy policy
• We recommend reviewing the cookie policies of these services
• You can block third-party cookies through your browser settings

We carefully select our third-party partners and ensure they comply with applicable privacy regulations.`
    },
    {
      id: 'managing-cookies',
      icon: FaCog,
      title: 'Managing Your Cookie Preferences',
      content: `You have control over how cookies are used:

Browser Settings:
• Most browsers allow you to block or delete cookies
• You can set your browser to notify you when cookies are being set
• Private/incognito browsing modes limit cookie storage

Popular Browser Cookie Settings:
• Chrome: Settings → Privacy and Security → Cookies
• Firefox: Settings → Privacy & Security → Cookies
• Safari: Preferences → Privacy → Cookies
• Edge: Settings → Privacy → Cookies

Opt-Out Tools:
• Google Analytics Opt-out: tools.google.com/dlpage/gaoptout
• Network Advertising Initiative: optout.networkadvertising.org
• Digital Advertising Alliance: optout.aboutads.info

Impact of Disabling Cookies:
• Essential functionality may be affected
• Personalization features will be limited
• Analytics will not track your visits
• Advertising will be less relevant (but not eliminated)`
    },
    {
      id: 'updates',
      icon: FaSyncAlt,
      title: 'Updates to This Policy',
      content: `We may update this Cookie Policy from time to time:

• Changes will be reflected on this page with an updated "Last Updated" date
• Material changes will be communicated to users via website banner or email
• Continued use of our website after changes constitutes acceptance
• We recommend reviewing this policy periodically

If you have questions about specific cookies used on our website, please contact us.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `For questions about our Cookie Policy:

Company: Digital Lab
Email: info@digitallabservices.com
Phone: +92 326 5929677
Address: Ali Hussain Abad, Lahore, Pakistan

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
      <div className="fixed inset-0 pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6" />
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl text-gray-400">Loading Cookie Policy...</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }} className="relative z-10">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6">
              <FaCookie className="text-4xl text-orange-500" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Cookie <span className="text-orange-500">Policy</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8">
              How we use cookies and tracking technologies on our website.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
              <FaCheckCircle className="text-orange-500" />
              Last updated: April 2026
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tableOfContents.map((item, index) => (
                <motion.button key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }} onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 rounded-lg text-left transition-all duration-300 group">
                  <span className="text-sm text-gray-300 group-hover:text-orange-400 transition-colors">{item.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div key={section.id} id={section.id} initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-xl mb-6">
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

        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Questions About Cookies?</h3>
              <p className="text-gray-400 mb-6">If you need help managing your cookie preferences or have questions, contact us.</p>
              <motion.a href="https://calendly.com/syed-ali-turab/30min" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors duration-300">
                <FaEnvelope />
                Book Appointment
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default CookiePolicy;
