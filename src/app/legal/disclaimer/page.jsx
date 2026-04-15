'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle,
  FaGlobe,
  FaChartBar,
  FaBullhorn,
  FaBalanceScale,
  FaEnvelope,
  FaLink,
  FaUserMd
} from 'react-icons/fa';

const Disclaimer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 'general',
      icon: FaInfoCircle,
      title: 'General Disclaimer',
      content: `The information provided by Digital Lab ("we," "us," or "our") on our website (www.digitallabservices.com) and through our services is for general informational purposes only.

• All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information
• Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided
• Your use of our website and services and your reliance on any information on the site is solely at your own risk
• This disclaimer applies to both our digital agency services and our SaaS products`
    },
    {
      id: 'no-guarantees',
      icon: FaChartBar,
      title: 'No Guarantee of Results',
      content: `Digital Lab provides digital marketing, design, development, and SaaS services. However:

• We do not guarantee specific results, outcomes, or ROI from our services
• Past performance and case studies do not guarantee future results
• Marketing and SEO results depend on numerous factors outside our control, including market conditions, competition, algorithm changes, and consumer behavior
• Website traffic, search rankings, and conversion rates are influenced by many variables
• Social media growth and engagement depend on content quality, audience, and platform algorithms
• SaaS product outcomes depend on how effectively the tools are utilized

Any projections, estimates, or forecasts provided are based on our professional experience and should be treated as informed estimates, not guarantees.`
    },
    {
      id: 'professional-advice',
      icon: FaUserMd,
      title: 'Not Professional Advice',
      content: `Content on our website and communications should not be construed as:

• Legal advice — Consult a qualified attorney for legal matters
• Financial advice — Consult a certified financial advisor for financial decisions
• Tax advice — Consult a qualified tax professional for tax-related questions
• Medical advice — We do not provide health or medical recommendations
• Investment advice — We do not provide investment recommendations

Our blog posts, case studies, and educational content are intended for informational purposes only. Always seek the advice of qualified professionals for specific matters.`
    },
    {
      id: 'external-links',
      icon: FaLink,
      title: 'External Links Disclaimer',
      content: `Our website may contain links to external websites:

• We do not control the content, privacy policies, or practices of third-party websites
• We are not responsible for the content or accuracy of external websites
• Inclusion of external links does not imply endorsement or recommendation
• We are not liable for any damage or loss caused by visiting external links
• Users should review the terms and privacy policies of any external website they visit

We encourage you to read the terms of service and privacy policies of every website you visit through our links.`
    },
    {
      id: 'testimonials',
      icon: FaBullhorn,
      title: 'Testimonials & Reviews',
      content: `Regarding testimonials and reviews displayed on our website:

• Testimonials reflect the individual experiences of our clients
• Individual results may vary and are not guaranteed
• Testimonials are not indicative of future performance or success
• We may have provided services at different price points or scopes
• Some testimonials may be shortened or edited for clarity while preserving the original message
• We do not pay for testimonials; they are voluntarily provided by our clients

We encourage potential clients to conduct their own due diligence before engaging our services.`
    },
    {
      id: 'website-content',
      icon: FaGlobe,
      title: 'Website Content',
      content: `Regarding the content on our website:

• We strive to keep information accurate and up-to-date
• Content may contain typographical errors or inaccuracies
• We reserve the right to modify content at any time without notice
• Pricing, service descriptions, and availability are subject to change
• Blog posts and articles represent opinions at the time of publication
• Portfolio/case study results may not be replicable in all situations

We make reasonable efforts to ensure accuracy but cannot guarantee that all information is current at all times.`
    },
    {
      id: 'limitation',
      icon: FaBalanceScale,
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law:

• Digital Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages
• This includes but is not limited to: loss of profits, data, use, goodwill, or other intangible losses
• This limitation applies regardless of the legal theory under which damages are sought
• Our total liability shall not exceed the amount paid by you for the specific service in question
• This limitation applies even if we have been advised of the possibility of such damages

Some jurisdictions do not allow the limitation of liability for certain types of damages. In such cases, our liability shall be limited to the maximum extent permitted by law.`
    },
    {
      id: 'changes',
      icon: FaExclamationTriangle,
      title: 'Changes to This Disclaimer',
      content: `We reserve the right to update this disclaimer at any time:

• Changes will be effective immediately upon posting on our website
• Continued use of our website constitutes acceptance of the updated disclaimer
• We recommend reviewing this page periodically for changes
• Material changes will be communicated to active clients via email

If you have any concerns about this disclaimer, please contact us before continuing to use our services.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `For questions about this Disclaimer:

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

      <AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6" />
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl text-gray-400">Loading Disclaimer...</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }} className="relative z-10">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6">
              <FaExclamationTriangle className="text-4xl text-orange-500" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-orange-500">Disclaimer</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8">
              Important disclaimers regarding our services, content, and liability limitations.
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
              <h3 className="text-3xl font-bold mb-4">Have Questions?</h3>
              <p className="text-gray-400 mb-6">If you need clarification about any of our disclaimers, please reach out.</p>
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

export default Disclaimer;
