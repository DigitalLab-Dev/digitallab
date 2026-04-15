'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaClipboardCheck,
  FaHandshake,
  FaCheckCircle,
  FaGem,
  FaHistory,
  FaExchangeAlt,
  FaQuestionCircle,
  FaInfoCircle,
  FaExclamationCircle,
  FaHeadset,
  FaEnvelope,
  FaLaptopCode
} from 'react-icons/fa';

const RefundPolicy = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 'commitment',
      icon: FaHandshake,
      title: 'Our Refund Commitment',
      content: `At Digital Lab, we stand behind the quality of our digital solutions, including brand building, social media management, web development, business automation, video editing, SEO, paid advertising, and complete digital marketing services.

We are committed to delivering measurable results and ensuring client satisfaction through fair and transparent refund policies.

This policy outlines the conditions for refunds, returns, exchanges, and the mandatory turnaround times for processing refund requests to ensure clarity and trust.`
    },
    {
      id: 'saas-credits',
      icon: FaLaptopCode,
      title: 'SaaS Product Credit Refunds',
      content: `Digital Lab SaaS Products — Credit Refund Policy:

100% Credit Refund Guarantee:
• If you have purchased credits for any of our SaaS products and have NOT used them, you are eligible for a full 100% refund
• No questions asked — unused credits are fully refundable
• Refund requests for unused credits are processed within 7 business days

Partial Credit Usage:
• If some credits have been used, only the unused portion is eligible for refund
• Used credits are non-refundable as the service has been consumed
• Credit usage history is available in your dashboard for transparency

How to Claim SaaS Credit Refund:
1. Log into your Digital Lab SaaS account
2. Navigate to Billing → Credit History
3. Email info@digitallabservices.com with subject: "CREDIT REFUND REQUEST"
4. Include your account email and credit purchase reference
5. Refund will be processed to your original payment method

Note: This refund policy applies to credits only. SaaS subscription fees are governed by the cancellation terms in our Terms & Conditions.`
    },
    {
      id: 'eligibility',
      icon: FaClipboardCheck,
      title: 'Refund Eligibility — Digital Services',
      content: `Eligible for Full Refund
Before Service Commencement
• Cancellation 48+ hours before the agreed start date
• Service not yet initiated or delivered
• No resources allocated to the project
• Client-initiated cancellation requests

Service Quality Issues
• Deliverables not meeting agreed specifications
• Service quality significantly below professional standards
• Failure to deliver within agreed timelines (without valid reason)
• Technical or execution issues preventing delivery

Eligible for Partial Refund
Timeline-Based Refunds
• 75% refund: 24–48 hours before start
• 50% refund: Less than 24 hours before start
• 25% refund: After service commencement
• Pro-rated refunds for ongoing services

Project-Based Refunds
• Milestone-based refund calculation
• Refund for undelivered project phases
• Partial completion compensation
• Scope reduction adjustments

Non-Refundable Services
• Consultation sessions already delivered
• Custom design, development, or automation work already completed
• Marketing campaigns already launched
• Content (graphics, videos, copy) already delivered
• Strategy documents already shared
• Third-party tools, domains, hosting, or software purchases
• Services terminated due to client-side breach or non-cooperation`
    },
    {
      id: 'service-specific',
      icon: FaGem,
      title: 'Service-Specific Refund Policies',
      content: `Brand Building & Social Media Management
• Setup Phase: Full refund if cancelled before onboarding
• Ongoing Management: 30-day notice with pro-rated refunds
• Performance Issues: Service revisions or partial refunds
• Content Delivery: Refund for undelivered content only

Video Editing & Content Creation
• Concept Phase: Full refund if not approved
• Editing Phase: Refund for incomplete or undelivered work
• Revisions: Free revisions within agreed scope
• Delivery: No refund after final approved delivery

Web Development & Automation
• Planning Phase: Full refund if project is cancelled early
• Development Phase: Refund for incomplete modules
• Testing Phase: Refund if critical issues remain unresolved
• Deployment: Refund for major deployment failures

Marketing & Paid Advertising
• Strategy Development: Full refund if not approved
• Campaign Management: Refund for unused service period
• Ad Spend: Not refundable (paid directly to platforms)
• Performance Marketing: Case-based evaluation

SEO & Growth Strategy
• Initial Audit: Refund if not delivered
• Ongoing SEO: Pro-rated refunds based on duration
• Strategy Services: Refund if deliverables are not provided`
    },
    {
      id: 'timeline',
      icon: FaHistory,
      title: 'Refund Processing Timeline',
      content: `Guaranteed Processing Times
• 24 Hours – Request acknowledgment
• 3 Days – Initial review and eligibility check
• 7 Days – Decision communication
• 10 Days – Refund initiation
• 14 Days – Maximum completion timeline
• 21 Days – Complex or international cases

Guarantee: All eligible refunds will be processed within 14 business days. Delays (if any) will be communicated transparently.`
    },
    {
      id: 'returns-exchanges',
      icon: FaExchangeAlt,
      title: 'Returns and Exchanges',
      content: `Service Returns
Since our services are intangible, traditional returns do not apply. However, we offer:
• Free revisions for deliverables not meeting expectations
• Alternative solutions if initial execution fails
• Service credits for future work
• Early termination with pro-rated refunds

Service Exchanges
Eligible for Exchange
• Service scope adjustments before delivery
• Platform or strategy changes
• Service upgrades or downgrades
• Timeline modifications

Exchange Conditions
• Request before 25% project completion
• Price difference adjustment
• Revised timeline agreement
• Written confirmation required

Note: Whenever any application is eligible for a refund under this policy, it will automatically be reflected in our Return Policy as well.`
    },
    {
      id: 'how-to-request',
      icon: FaQuestionCircle,
      title: 'How to Request a Refund',
      content: `1. Submit Request: Email us at info@digitallabservices.com with subject: "REFUND REQUEST"
2. Provide Details: Include service details, reason, and supporting information
3. Review Process: Our team reviews within 3 business days
4. Decision & Processing: Refund processed within 7–14 business days if approved`
    },
    {
      id: 'required-info',
      icon: FaInfoCircle,
      title: 'Required Information',
      content: `Account Information
• Full name and contact details
• Invoice or project reference
• Payment method details

Refund Details
• Service description
• Reason for refund
• Supporting proof (if any)`
    },
    {
      id: 'special-circumstances',
      icon: FaExclamationCircle,
      title: 'Special Circumstances',
      content: `Force Majeure Events
• Full refunds for undelivered services
• Flexible rescheduling
• Service credits for delays

International Clients
• Currency conversion based on current rates
• Possible deduction of transaction fees
• Processing time up to 21 business days

Dispute Resolution
If you disagree with a decision:
• Escalate via info@digitallabservices.com
• Provide additional documentation
• Request internal review`
    },
    {
      id: 'contact',
      icon: FaHeadset,
      title: 'Contact Information',
      content: `Company: Digital Lab
Email: info@digitallabservices.com
Phone: +92 326 5929677
Location: Ali Hussain Abad, Lahore, Pakistan
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
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
        />
      </div>

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
                Loading Refund Policy...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6"
            >
              <FaClipboardCheck className="text-4xl text-orange-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Refund <span className="text-orange-500">Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              Transparent refund, return, and exchange conditions for all our services and SaaS products.
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
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content.split('\n').map((line, i) => {
                       if (line.startsWith('### ')) {
                         return <h4 key={i} className="text-2xl font-semibold text-white mt-6 mb-3">{line.replace('### ', '')}</h4>;
                       }
                       if (line.startsWith('**') && line.endsWith('**')) {
                         return <strong key={i} className="block text-white mt-4 mb-2">{line.replace(/\*\*/g, '')}</strong>;
                       }
                       return <p key={i} className="mb-2">{line}</p>;
                    })}
                  </div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">Need a Refund?</h3>
              <p className="text-gray-400 mb-6">
                If you have any questions or would like to request a refund, please contact our support team.
              </p>
              <motion.a
                href="https://calendly.com/syed-ali-turab/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors duration-300"
              >
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

export default RefundPolicy;
