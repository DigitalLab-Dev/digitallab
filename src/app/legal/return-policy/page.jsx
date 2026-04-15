'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUndoAlt,
  FaCheckCircle,
  FaClipboardCheck,
  FaInfoCircle,
  FaExclamationCircle,
  FaEnvelope,
  FaHandshake,
  FaLaptopCode,
  FaListAlt
} from 'react-icons/fa';

const ReturnPolicy = () => {
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
      title: 'Return Policy Overview',
      content: `At Digital Lab, we understand that circumstances change. Our Return Policy works in direct coordination with our Refund Policy to ensure a seamless experience.

Key Principle:
Whenever any service or product application qualifies under our Refund Policy, it will be automatically reflected in the Return process. You do not need to submit a separate return request — once a refund is approved, the return is considered processed.

This policy covers:
• Digital agency services (brand building, web development, graphic design, video editing, social media management, SEO, ads management, copywriting)
• SaaS product subscriptions and credits
• Any bundled service packages`
    },
    {
      id: 'digital-services',
      icon: FaClipboardCheck,
      title: 'Returns for Digital Services',
      content: `Since all our services are digital and intangible, traditional physical returns do not apply. Instead, returns are handled as follows:

Automatic Return Processing:
• When a refund is approved under our Refund Policy, the "return" is processed automatically
• No physical items need to be shipped back
• Digital deliverables already shared may be retained by the client at Digital Lab's discretion
• Access to ongoing services is revoked upon return processing

What Happens Upon Return:
• Project access and work-in-progress files are archived
• Any active service subscriptions are paused or cancelled
• Credentials and account access provided for the project are revoked
• The refund amount is processed per the Refund Policy timeline

Non-Returnable Services:
• Services that have been fully delivered and approved by the client
• Third-party purchases made on the client's behalf (domains, hosting, ad spend)
• Consultation sessions that have already been conducted
• Content that has been published or gone live`
    },
    {
      id: 'saas-returns',
      icon: FaLaptopCode,
      title: 'Returns for SaaS Products',
      content: `SaaS Product Credit Returns:

Unused Credits:
• If you have purchased credits and have not used them, a return is automatically eligible
• 100% of unused credits are refundable — no questions asked
• Simply request a refund; the return is processed simultaneously

Subscription Returns:
• SaaS subscription fees are non-returnable once the billing cycle has started
• If you cancel before the next billing cycle, no return is necessary
• Access continues until the end of the current paid period

Data Upon Return:
• You will be given 30 days to export your data before account closure
• After 30 days, all data associated with the account is permanently deleted
• We can provide data export assistance upon request
• Exported data is provided in standard formats (CSV, JSON, PDF)`
    },
    {
      id: 'process',
      icon: FaListAlt,
      title: 'Return Process',
      content: `How Returns Are Handled:

Step 1 – Refund Request Triggers Return
• Submit a refund request as outlined in our Refund Policy
• Email info@digitallabservices.com with subject: "REFUND REQUEST"
• Our team reviews the request within 3 business days

Step 2 – Automatic Return Processing
• Once the refund is approved, the return is automatically initiated
• No additional action is required from the client
• You will receive a confirmation email detailing the return

Step 3 – Service/Access Revocation
• Active service access is revoked or paused as applicable
• SaaS product access is adjusted based on the return type
• Project files are archived for 90 days (available upon request)

Step 4 – Refund Completion
• Refund is processed to the original payment method
• Standard processing time: 7–14 business days
• International transactions may take up to 21 business days`
    },
    {
      id: 'exceptions',
      icon: FaExclamationCircle,
      title: 'Exceptions & Special Cases',
      content: `Certain situations require special handling:

Partial Returns:
• If only part of a service package qualifies for return, only that portion is processed
• The remaining services continue as normal
• Pricing is adjusted proportionally

Bundled Packages:
• Returns for bundled packages are evaluated on a case-by-case basis
• Individual components may have different return eligibility
• The overall package discount may be adjusted upon partial return

Disputed Returns:
• If you disagree with a return decision, you may escalate to senior management
• Provide additional documentation to support your case
• We aim to resolve all disputes within 15 business days

Force Majeure:
• In cases of natural disasters, pandemics, or other extraordinary events
• Full returns are processed for undelivered services
• Flexible alternatives (rescheduling, credits) are offered where possible`
    },
    {
      id: 'important-notes',
      icon: FaInfoCircle,
      title: 'Important Notes',
      content: `Please keep the following in mind:

• Returns and refunds are interconnected — a return is always tied to an approved refund
• You cannot request a return without going through the refund process
• All returns are final once processed
• Digital Lab reserves the right to retain copies of delivered work for portfolio purposes (unless otherwise agreed)
• This Return Policy is subject to change with 30 days notice

For any questions or concerns about returns, please contact us at info@digitallabservices.com.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `For return-related inquiries:

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
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
        />
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6" />
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl text-gray-400">Loading Return Policy...</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }} className="relative z-10">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6">
              <FaUndoAlt className="text-4xl text-orange-500" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Return <span className="text-orange-500">Policy</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8">
              How returns are handled when services qualify under our refund policy.
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
              <h3 className="text-3xl font-bold mb-4">Need Help With a Return?</h3>
              <p className="text-gray-400 mb-6">
                Returns are processed automatically with approved refunds. Contact us if you have questions.
              </p>
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

export default ReturnPolicy;
