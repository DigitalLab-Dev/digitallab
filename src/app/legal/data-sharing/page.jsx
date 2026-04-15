'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShareAlt,
  FaCheckCircle,
  FaHandshake,
  FaServer,
  FaGlobe,
  FaUserShield,
  FaDatabase,
  FaBan,
  FaEnvelope,
  FaSyncAlt
} from 'react-icons/fa';

const DataSharing = () => {
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
      icon: FaHandshake,
      title: 'Data Sharing Overview',
      content: `Digital Lab values your trust and is committed to transparency about how your data is shared. This policy explains when, why, and with whom your personal and business data may be shared.

Core Principles:
• We only share data when necessary for service delivery or legal compliance
• We never sell your personal data to third parties
• All data sharing partners are bound by contractual obligations to protect your data
• You have the right to know who has access to your data
• We minimize data sharing to the absolute minimum required

This policy applies to all data collected through our website, digital services, and SaaS products.`
    },
    {
      id: 'service-providers',
      icon: FaServer,
      title: 'Service Providers & Partners',
      content: `We share data with trusted service providers who assist in our operations:

Cloud & Infrastructure:
• Hosting providers (Vercel, cloud platforms) — website and SaaS hosting
• CDN providers (Cloudinary) — image and media delivery
• Database providers — secure data storage

Communication & Marketing:
• Email service providers — for newsletters and transactional emails
• CRM platforms — for managing client relationships
• Marketing automation tools — for campaign management

Payment Processing:
• Payment gateways — for processing transactions securely
• Accounting software — for invoice and billing management

Analytics & Performance:
• Google Analytics — website usage analytics
• Performance monitoring tools — website speed and uptime

All service providers:
• Are contractually bound to protect your data
• Can only use your data for the specified purpose
• Must comply with applicable data protection regulations
• Are regularly reviewed for security compliance`
    },
    {
      id: 'client-data',
      icon: FaDatabase,
      title: 'Client Project Data',
      content: `When you engage Digital Lab for services, certain data may be shared:

Within Our Team:
• Project managers, designers, developers, and strategists working on your project
• Only team members assigned to your project have access
• All team members are bound by our confidentiality and data protection policies

With Sub-Contractors:
• Specialized freelancers may be engaged for specific project tasks
• Sub-contractors sign NDAs before accessing any client data
• Access is limited to the specific deliverables they are working on
• Sub-contractor access is revoked upon task completion

With Third-Party Platforms:
• Social media platforms (for social media management services)
• Advertising platforms (for ads management services)
• Web hosting and domain registrars (for web development services)
• SEO tools and analytics platforms (for SEO services)

We always inform you before sharing your data with any new third party not listed in our standard service delivery process.`
    },
    {
      id: 'legal-requirements',
      icon: FaUserShield,
      title: 'Legal & Regulatory Sharing',
      content: `We may share your data when required by law:

Legal Obligations:
• Court orders, subpoenas, or legal proceedings
• Government or regulatory agency requests
• Law enforcement investigations
• Tax and financial regulatory compliance

Business Transfers:
• In the event of a merger, acquisition, or sale of assets
• Data may be transferred as part of the business transaction
• You will be notified of any change in data ownership
• Existing privacy protections will continue to apply

Rights Protection:
• To enforce our Terms of Service or other agreements
• To protect the rights, property, or safety of Digital Lab
• To protect the rights, property, or safety of our clients or the public
• To investigate potential violations of our policies`
    },
    {
      id: 'international',
      icon: FaGlobe,
      title: 'International Data Transfers',
      content: `As a global service provider, your data may be transferred internationally:

Where Data May Be Stored:
• Pakistan (our primary operating location)
• United States (cloud hosting and service providers)
• European Union (certain service providers)
• Other regions where our cloud providers have data centers

Safeguards for International Transfers:
• We use service providers that comply with international data protection standards
• Contractual clauses ensure adequate data protection
• We assess the data protection laws of recipient countries
• Encryption is used for data in transit and at rest

Your Rights:
• You can request information about where your data is stored
• You can request that your data be processed only in specific regions (subject to feasibility)
• We will inform you if data transfer practices change significantly`
    },
    {
      id: 'what-we-dont-share',
      icon: FaBan,
      title: 'What We Never Share',
      content: `Digital Lab will never share the following:

• Your personal data with third parties for their marketing purposes
• Your financial information (credit card numbers, bank details) with non-payment entities
• Your passwords or security credentials with anyone
• Client business strategies or confidential project details with competitors
• Your contact information for spam or unsolicited communications
• Internal project data between different clients
• SaaS product usage data for profiling or selling to data brokers

Your Trust Matters:
We consider the protection of your data a fundamental part of our business relationship. Any violation of these principles would be treated as a serious internal matter.`
    },
    {
      id: 'your-control',
      icon: FaUserShield,
      title: 'Your Control Over Data Sharing',
      content: `You have control over how your data is shared:

Opt-Out Options:
• Marketing communications: Unsubscribe at any time via email links
• Analytics tracking: Use browser privacy settings or opt-out tools
• Third-party advertising: Opt out through advertising platform settings
• Cookie tracking: Manage via your browser or our cookie settings

Data Requests:
• Request a list of all third parties with whom your data has been shared
• Request restriction of data sharing to essential services only
• Request deletion of your data from our systems and third-party services
• Request a copy of all data we hold about you

How to Exercise Your Rights:
• Email: info@digitallabservices.com
• Subject: "DATA SHARING REQUEST"
• We will respond within 30 days
• No fee is charged for standard data requests`
    },
    {
      id: 'updates',
      icon: FaSyncAlt,
      title: 'Updates to This Policy',
      content: `We may update this Data Sharing Policy:

• Changes will be posted on this page with an updated date
• Material changes will be communicated via email to active clients
• Continued use of our services constitutes acceptance of updated terms
• Previous versions are available upon request

We recommend reviewing this policy periodically to stay informed about our data sharing practices.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `For questions about our Data Sharing practices:

Company: Digital Lab
Email: info@digitallabservices.com
Phone: +92 326 5929677
Address: Ali Hussain Abad, Lahore, Pakistan

Data Protection Officer: info@digitallabservices.com

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
          className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6" />
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl text-gray-400">Loading Data Sharing Policy...</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }} className="relative z-10">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6">
              <FaShareAlt className="text-4xl text-orange-500" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Data <span className="text-orange-500">Sharing</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8">
              Transparency about when and how your data may be shared with third parties.
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
              <h3 className="text-3xl font-bold mb-4">Data Sharing Questions?</h3>
              <p className="text-gray-400 mb-6">Want to know exactly who has access to your data? Contact us for a full disclosure.</p>
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

export default DataSharing;
