'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExchangeAlt,
  FaCheckCircle,
  FaBan,
  FaInfoCircle,
  FaLaptopCode,
  FaHandshake,
  FaQuestionCircle,
  FaEnvelope,
  FaExclamationCircle
} from 'react-icons/fa';

const ExchangePolicy = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 'overview',
      icon: FaInfoCircle,
      title: 'Exchange Policy Overview',
      content: `At Digital Lab, all our products and services are digital in nature. This includes our digital agency services (brand building, web development, graphic design, video editing, social media management, SEO, ads management, copywriting) and our proprietary SaaS products.

Important:
All Digital Lab products are digital and NON-EXCHANGEABLE.

Due to the intangible nature of digital products and services, traditional product exchanges are not applicable. Once a digital product or service has been delivered, it cannot be exchanged for a different product or service.

This policy exists to set clear expectations and maintain fairness for all our clients.`
    },
    {
      id: 'why-non-exchangeable',
      icon: FaBan,
      title: 'Why Our Products Are Non-Exchangeable',
      content: `Digital products differ fundamentally from physical goods:

Nature of Digital Products:
• Digital services are customized to each client's specific requirements
• Once delivered, digital work (designs, code, content, strategies) cannot be "returned" in the traditional sense
• The time, expertise, and resources invested in creating digital deliverables are consumed during the process
• Digital products are instantly accessible upon delivery — they cannot be "undelivered"

SaaS Products:
• SaaS product features are standardized and clearly described before purchase
• Access to SaaS tools is granted immediately upon subscription
• Credits purchased for SaaS products represent pre-paid usage rights
• The digital nature of SaaS makes exchanges impractical

Industry Standard:
• Non-exchangeability of digital products is standard practice across the digital industry
• This policy aligns with international e-commerce practices for digital goods`
    },
    {
      id: 'digital-services',
      icon: FaHandshake,
      title: 'Digital Services — What You Can Do Instead',
      content: `While exchanges are not available, we offer several alternatives:

Scope Adjustments (Before 25% Completion):
• Modify the scope of your project before significant progress has been made
• Adjust deliverable formats, platforms, or strategies
• Redirect resources to a different aspect of the same project
• These adjustments are subject to pricing and timeline changes

Service Upgrades:
• Upgrade your service package at any time by paying the price difference
• Add additional services to your existing project
• Extend the scope or duration of ongoing services

Revisions:
• Request revisions within the scope defined in your project agreement
• Additional revision rounds may be available at an extra cost
• We work closely with you to ensure deliverables meet your expectations

If you are unsatisfied with the quality of work, please refer to our Refund Policy for eligible remedies.`
    },
    {
      id: 'saas-alternatives',
      icon: FaLaptopCode,
      title: 'SaaS Products — Available Alternatives',
      content: `For SaaS product subscribers, the following options are available:

Plan Changes:
• Upgrade to a higher plan at any time (price difference applies)
• Downgrade to a lower plan at the next billing cycle
• Switch between monthly and annual billing
• Plan changes take effect immediately (upgrades) or at the next cycle (downgrades)

Credit Management:
• Unused credits are eligible for a 100% refund (see Refund Policy)
• Credits cannot be exchanged for a different product or service
• Credits cannot be transferred to another user's account
• Additional credits can be purchased at any time

Subscription Cancellation:
• Cancel your subscription at any time
• Access continues until the end of the current billing period
• Unused credits can be refunded before account closure
• Data export is available for 30 days after cancellation`
    },
    {
      id: 'exceptions',
      icon: FaExclamationCircle,
      title: 'Exceptions & Special Circumstances',
      content: `In rare cases, we may consider special arrangements:

When We May Make Exceptions:
• If a service was incorrectly delivered due to our error
• If a technical issue on our end prevented proper delivery
• If both parties mutually agree to modify the engagement
• Force majeure events that prevent service delivery

How to Request an Exception:
1. Contact us at info@digitallabservices.com
2. Use subject line: "EXCHANGE EXCEPTION REQUEST"
3. Provide detailed explanation of your situation
4. Include all relevant documentation and references
5. Our team will review within 5 business days

Important Notes:
• Exception requests are evaluated on a case-by-case basis
• Approval of an exception is not guaranteed
• The decision of Digital Lab's management is final
• Exceptions do not set precedent for future cases`
    },
    {
      id: 'faq',
      icon: FaQuestionCircle,
      title: 'Frequently Asked Questions',
      content: `Q: Can I exchange one service for another?
A: No, services cannot be exchanged once the project has started. However, scope adjustments may be possible before 25% completion.

Q: Can I exchange SaaS credits for a different product?
A: No, credits are product-specific and non-transferable. You can request a refund for unused credits instead.

Q: What if I bought the wrong plan?
A: You can upgrade or downgrade your plan. Contact us within 24 hours of purchase for immediate assistance.

Q: Can I exchange a completed project for a new one?
A: No, completed projects are final. If unsatisfied with quality, please refer to our Refund Policy.

Q: What if Digital Lab made an error?
A: If we made a verifiable error, we will correct it at no additional cost. Contact our support team immediately.

Q: Can I transfer my subscription to someone else?
A: Subscriptions are non-transferable. The new user must create their own account and subscription.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `For questions about our Exchange Policy:

Company: Digital Lab
Email: info@digitallabservices.com
Phone: +92 326 5929677
Address: Ali Hussain Abad, Lahore, Pakistan
Working Hours: Monday – Friday, 9:00 AM – 6:00 PM (PKT)

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
          className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6" />
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl text-gray-400">Loading Exchange Policy...</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }} className="relative z-10">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6">
              <FaExchangeAlt className="text-4xl text-orange-500" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Exchange <span className="text-orange-500">Policy</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8">
              All Digital Lab products are digital and non-exchangeable. Learn about your alternatives.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
              <FaCheckCircle className="text-orange-500" />
              Last updated: April 2026
            </motion.div>
          </div>
        </section>

        {/* Non-Exchangeable Banner */}
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-orange-500/10 border-2 border-orange-500/30 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <FaBan className="text-3xl text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Digital Products — Non-Exchangeable</h3>
                  <p className="text-gray-300">
                    All products and services offered by Digital Lab are digital in nature and cannot be exchanged.
                    Please review our Refund Policy for available remedies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tableOfContents.map((item, index) => (
                <motion.button key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }} onClick={() => scrollToSection(item.id)}
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
              <h3 className="text-3xl font-bold mb-4">Need Assistance?</h3>
              <p className="text-gray-400 mb-6">If you have questions about our exchange policy or need help with alternatives, we're here for you.</p>
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

export default ExchangePolicy;
