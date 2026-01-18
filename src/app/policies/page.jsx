'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaCookie,
  FaDatabase,
  FaExclamationTriangle,
  FaEnvelope,
  FaCheckCircle
} from 'react-icons/fa';

const PrivacyPolicy = () => {
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
      id: 'information-collection',
      icon: FaDatabase,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
      
• Personal identification information (name, email address, phone number)
• Business information (company name, industry, website URL)
• Payment and billing information
• Communication preferences and marketing data
• Technical data (IP address, browser type, device information)
• Usage data and analytics from our website and services

We collect this information when you fill out forms, subscribe to our services, communicate with us, or interact with our website.`
    },
    {
      id: 'how-we-use',
      icon: FaCheckCircle,
      title: 'How We Use Your Information',
      content: `We use the collected information for various purposes:

• To provide, maintain, and improve our services
• To process transactions and send related information
• To communicate with you about services, updates, and promotional offers
• To respond to your inquiries and provide customer support
• To analyze usage patterns and optimize user experience
• To detect, prevent, and address technical issues and fraud
• To comply with legal obligations and enforce our terms
• To personalize content and marketing communications

We will never sell your personal information to third parties.`
    },
    {
      id: 'data-protection',
      icon: FaLock,
      title: 'Data Protection & Security',
      content: `We implement robust security measures to protect your data:

• Industry-standard encryption (SSL/TLS) for data transmission
• Secure servers with restricted access controls
• Regular security audits and vulnerability assessments
• Employee training on data protection best practices
• Secure backup systems and disaster recovery plans
• Multi-factor authentication for sensitive systems

While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but continuously work to enhance our security measures.`
    },
    {
      id: 'cookies',
      icon: FaCookie,
      title: 'Cookies & Tracking',
      content: `Our website uses cookies and similar tracking technologies:

• Essential cookies: Required for website functionality
• Performance cookies: Help us understand how visitors use our site
• Functional cookies: Remember your preferences and settings
• Marketing cookies: Track your activity for targeted advertising

You can control cookie preferences through your browser settings. Disabling certain cookies may limit website functionality. We also use analytics tools like Google Analytics to understand user behavior and improve our services.`
    },
    {
      id: 'third-party',
      icon: FaUserSecret,
      title: 'Third-Party Services',
      content: `We may share your information with trusted third-party service providers:

• Payment processors (Stripe, PayPal)
• Email marketing platforms (Mailchimp, SendGrid)
• Analytics services (Google Analytics, Hotjar)
• Cloud hosting providers (AWS, Google Cloud)
• CRM systems and project management tools

These providers are contractually obligated to protect your data and use it only for specified purposes. We carefully vet all third-party partners for security and privacy compliance.`
    },
    {
      id: 'your-rights',
      icon: FaShieldAlt,
      title: 'Your Privacy Rights',
      content: `You have the following rights regarding your personal data:

• Right to access: Request copies of your personal data
• Right to rectification: Request corrections to inaccurate data
• Right to erasure: Request deletion of your personal data
• Right to restrict processing: Limit how we use your data
• Right to data portability: Receive your data in a structured format
• Right to object: Object to certain types of processing
• Right to withdraw consent: Withdraw previously given consent

To exercise these rights, please contact us at support@digitallabservices.com. We will respond within 30 days.`
    },
    {
      id: 'data-retention',
      icon: FaExclamationTriangle,
      title: 'Data Retention',
      content: `We retain your personal information for as long as necessary:

• Active customers: Duration of service plus legal retention period
• Inactive accounts: Up to 3 years after last activity
• Marketing data: Until you unsubscribe or request deletion
• Legal requirements: As mandated by applicable laws

When data is no longer needed, we securely delete or anonymize it. You can request early deletion by contacting our privacy team.`
    },
    {
      id: 'team-policy',
      icon: FaUserSecret,
      title: 'Team Policies & Code of Conduct',
      content: `This Team Policy outlines the expectations, responsibilities, and rules for all team members working with Digital Lab Services. These policies are designed to maintain professionalism, accountability, and smooth collaboration within the agency.

By working with the agency, you agree to follow the rules mentioned below.

1. Work Discipline & Consistency

• Every team member is required to work daily during their assigned working hours.
• All assigned tasks must be completed within the given deadline.
• Consistency in work performance is mandatory and non-negotiable.

Penalty:
If a team member fails to complete assigned tasks on time without a valid reason, a PKR 1,000 fine will be applied.

2. Attendance & Leave Policy

• Only Sunday is considered an official off day.
• Any leave other than Sunday must be approved in advance by the management.
• Leaving work, disappearing, or going inactive without informing the agency is strictly prohibited.

Penalty:
If a team member leaves or remains absent without prior notice, PKR 2,000 will be deducted from their salary.

3. Ownership of Work & Files

• All project files, designs, source files, documents, data, and work created during your time with the agency are sole property of Digital Lab Services.
• No team member is allowed to delete, modify, move, or share any project files without prior approval.
• Unauthorized deletion or misuse of agency property will be treated as a serious violation.

4. Exit & Project Handover Policy

• In case of resignation, termination, or any dispute between the agency and the team member:
  ○ The team member is fully responsible for delivering all project files, assets, and credentials related to assigned work.
  ○ Project handover must be completed before officially leaving the agency.
• Leaving the agency without delivering project files will be considered a breach of trust.

Legal Action:
If project files are not delivered, damaged, or misused, the agency reserves the right to take legal and government action as per applicable laws.

5. Professional Behavior & Conduct

• All team members must maintain professional behavior, respect deadlines, and communicate clearly.
• Creating conflicts, spreading misinformation, damaging agency reputation, or internal politics will not be tolerated.
• Confidential agency and client information must never be shared externally.

6. Confidentiality & Data Protection

• Client data, internal strategies, pricing, and processes are strictly confidential.
• Any misuse or leakage of confidential information will result in immediate action, including termination and legal consequences.

7. Policy Acceptance & Updates

• These policies apply to all employees, interns, freelancers, and contractors working with the agency.
• The agency reserves the right to update or modify policies at any time.
• Continued work with the agency implies acceptance of all updated policies.

Final Note:
These policies are created to ensure fairness, discipline, and long-term growth for both the agency and its team members. Cooperation and responsibility are expected from everyone.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `If you have questions or concerns about this Privacy Policy:

Email: support@digitallabservices.com
Phone: +92 326 5929677
Address: Ali Hussain Abad, Lahore, Pakistan

Data Protection Officer: support@digitallabservices.com

We will respond to all inquiries within 48 hours during business days.

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
                Loading Privacy Policy...
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
              <FaShieldAlt className="text-4xl text-orange-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Privacy <span className="text-orange-500">Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
            <h2 className="text-2xl font-bold mb-6 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                If you have any questions about our Privacy Policy, please don't hesitate to contact us.
              </p>
              <motion.a
                href="mailto:support@digitallabservices.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors duration-300"
              >
                <FaEnvelope />
                Contact Privacy Team
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;