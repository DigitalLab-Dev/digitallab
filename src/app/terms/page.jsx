'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFileContract, 
  FaHandshake, 
  FaExclamationCircle,
  FaCreditCard,
  FaBan,
  FaBalanceScale,
  FaUserShield,
  FaGavel,
  FaCheckCircle
} from 'react-icons/fa';

const TermsOfService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 'acceptance',
      icon: FaHandshake,
      title: 'Acceptance of Terms',
      content: `By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

• You must be at least 18 years old to use our services
• You represent that you have the authority to enter into this agreement
• If using on behalf of a company, you have authority to bind that entity
• These terms constitute a legally binding agreement between you and our agency

If you do not agree to these terms, you must not access or use our services. We reserve the right to modify these terms at any time, and continued use constitutes acceptance of modified terms.`
    },
    {
      id: 'services',
      icon: FaFileContract,
      title: 'Services Description',
      content: `We provide a range of digital marketing and creative services:

• Video Editing and Production
• Web Development and Design
• Graphic Design and Branding
• Copywriting and Content Creation
• Social Media Management
• Advertisement Campaign Management
• SEO Optimization Services

Service specifications, deliverables, and timelines are defined in individual project agreements or statements of work. We reserve the right to modify or discontinue services with reasonable notice.`
    },
    {
      id: 'user-obligations',
      icon: FaUserShield,
      title: 'User Obligations',
      content: `As a user of our services, you agree to:

• Provide accurate and complete information
• Maintain the confidentiality of your account credentials
• Notify us immediately of any unauthorized access
• Use services only for lawful purposes
• Not interfere with or disrupt our services
• Not attempt to gain unauthorized access to our systems
• Respect intellectual property rights
• Comply with all applicable laws and regulations

Violation of these obligations may result in suspension or termination of services without refund.`
    },
    {
      id: 'payment',
      icon: FaCreditCard,
      title: 'Payment Terms',
      content: `All fees and payment terms are as follows:

• Prices are quoted in USD unless otherwise specified
• Payment is due according to the invoice terms (typically net 15 or 30 days)
• Late payments may incur interest charges of 1.5% per month
• We accept major credit cards, PayPal, and bank transfers
• All fees are non-refundable unless stated otherwise
• Prices are subject to change with 30 days notice
• Taxes are additional and will be charged as applicable

For project-based work, we typically require 50% upfront and 50% upon completion. Monthly retainers are billed in advance.`
    },
    {
      id: 'intellectual-property',
      icon: FaBalanceScale,
      title: 'Intellectual Property Rights',
      content: `Ownership and usage rights are defined as follows:

Client Ownership:
• Final deliverables become client property upon full payment
• Includes agreed-upon source files and assets
• Limited to the scope defined in the project agreement

Agency Ownership:
• We retain rights to pre-existing materials, tools, and methodologies
• Portfolio usage rights for completed work
• Templates, frameworks, and proprietary processes

Third-Party Assets:
• Stock photos, fonts, and licensed materials require separate licensing
• Client is responsible for obtaining necessary rights and permissions
• We will specify third-party dependencies in project agreements`
    },
    {
      id: 'confidentiality',
      icon: FaUserShield,
      title: 'Confidentiality',
      content: `We are committed to protecting confidential information:

• We will not disclose client confidential information to third parties
• Exception: Information necessary for service providers under NDA
• Confidentiality obligations survive termination of services
• We implement reasonable security measures to protect information

Non-Confidential Information:
• Information already in the public domain
• Information independently developed by us
• Information received from third parties without restriction
• Information required to be disclosed by law

Clients should mark confidential materials as "Confidential" for clear identification.`
    },
    {
      id: 'warranties',
      icon: FaExclamationCircle,
      title: 'Warranties & Disclaimers',
      content: `Our warranties and disclaimers:

We Warrant:
• Services will be performed with professional skill and care
• Work will substantially conform to agreed specifications
• We have the right to provide the services offered

Disclaimer:
• Services are provided "as is" without additional warranties
• We do not guarantee specific business results or outcomes
• No warranty for third-party products or services
• No warranty for interruption-free or error-free services

Your sole remedy for breach of warranty is re-performance of services or refund of fees paid for the deficient services (at our discretion).`
    },
    {
      id: 'limitation',
      icon: FaBan,
      title: 'Limitation of Liability',
      content: `Our liability is limited as follows:

Maximum Liability:
• Our total liability shall not exceed fees paid for the specific service
• Applies to all claims, whether in contract, tort, or otherwise

Excluded Damages:
• No liability for indirect, incidental, or consequential damages
• No liability for lost profits, revenue, or business opportunities
• No liability for data loss or corruption
• No liability for third-party claims

Exceptions:
• Liability for gross negligence or willful misconduct
• Liability that cannot be excluded by law
• Liability for personal injury or death

This limitation applies to the maximum extent permitted by law.`
    },
    {
      id: 'termination',
      icon: FaBan,
      title: 'Termination',
      content: `Services may be terminated under these conditions:

By Client:
• 30 days written notice for ongoing services
• Immediate for project-based work with payment for completed work
• No refund for prepaid services

By Agency:
• 30 days written notice without cause
• Immediate for breach of terms, non-payment, or illegal activity
• Immediate if continued services are not feasible

Upon Termination:
• All outstanding fees become immediately due
• We will deliver completed work upon payment
• Client must cease using our services and materials
• Confidentiality obligations continue

Effect of Termination:
• All licenses granted to client are revoked unless paid in full
• Any disputed amounts must be resolved before delivery of final materials`
    },
    {
      id: 'dispute',
      icon: FaGavel,
      title: 'Dispute Resolution',
      content: `Disputes will be resolved through the following process:

Step 1 - Negotiation:
• Good faith negotiations for 30 days
• Senior management from both parties will meet

Step 2 - Mediation:
• Non-binding mediation if negotiation fails
• Neutral mediator mutually agreed upon
• Each party bears own costs

Step 3 - Arbitration:
• Binding arbitration under AAA rules
• One arbitrator mutually selected
• Location: [Your City, State]
• Costs split equally

Governing Law:
• These terms are governed by [State] law
• Federal arbitration law applies
• No class actions permitted

Injunctive Relief:
• Either party may seek injunctive relief in court for IP infringement or confidentiality breaches`
    },
    {
      id: 'general',
      icon: FaFileContract,
      title: 'General Provisions',
      content: `Additional terms and conditions:

Entire Agreement:
• These terms constitute the entire agreement
• Supersedes all prior agreements and understandings
• Amendments must be in writing and signed by both parties

Assignment:
• You may not assign these terms without our consent
• We may assign to affiliates or in connection with a merger/acquisition

Force Majeure:
• Neither party liable for delays due to circumstances beyond reasonable control
• Includes natural disasters, war, pandemic, government actions

Severability:
• Invalid provisions will be modified to be enforceable
• Remaining provisions remain in full effect

Notices:
• Email: legal@youragency.com
• Mail: 123 Agency Street, Suite 100, City, State 12345
• Notices effective upon receipt

Last Updated: January 2025
Effective Date: January 1, 2025`
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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
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
                Loading Terms of Service...
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
              <FaFileContract className="text-4xl text-orange-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Terms of <span className="text-orange-500">Service</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
            >
              <FaCheckCircle className="text-orange-500" />
              Last updated: January 2025
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Navigation</h2>
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
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-xl mb-6"
                  >
                    <section.icon className="text-2xl text-orange-500" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {section.title}
                  </h3>

                  {/* Content */}
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>

                {/* Decorative line */}
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

        {/* Important Notice */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-orange-500/10 border-2 border-orange-500/30 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FaExclamationCircle className="text-3xl text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Important Notice</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms of Service constitute a legally binding agreement. By using our services, 
                    you acknowledge that you have read, understood, and agree to be bound by these terms. 
                    If you do not agree with any part of these terms, you must not use our services. 
                    We recommend consulting with legal counsel if you have questions about these terms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl"
              >
                <FaHandshake className="text-4xl text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Questions About Terms?</h3>
                <p className="text-gray-400 mb-6">
                  If you have any questions or concerns about our Terms of Service, please contact our legal team.
                </p>
                <motion.a
                  href="mailto:legal@youragency.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors duration-300"
                >
                  Contact Legal Team
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl"
              >
                <FaBalanceScale className="text-4xl text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Related Documents</h3>
                <p className="text-gray-400 mb-6">
                  Learn more about how we protect your data and respect your privacy.
                </p>
                <motion.a
                  href="/privacy-policy"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Privacy Policy
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Your Agency. All rights reserved. 
                These terms were last updated on January 1, 2025.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                123 Agency Street, Suite 100, City, State 12345 | legal@youragency.com
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default TermsOfService;