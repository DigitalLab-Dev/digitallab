'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBalanceScale,
  FaHandshake,
  FaCreditCard,
  FaLaptopCode,
  FaUserShield,
  FaBan,
  FaGavel,
  FaSyncAlt,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const TermsAndConditions = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 'introduction',
      icon: FaHandshake,
      title: 'Introduction & Agreement',
      content: `These Terms and Conditions ("Terms") govern your use of Digital Lab's digital services and SaaS products. By engaging with Digital Lab, you agree to be bound by these Terms.

• These Terms apply to all clients, subscribers, and users
• They supplement any specific project agreements or statements of work
• In case of conflicts, the specific project agreement shall prevail
• Digital Lab reserves the right to update these Terms with 30 days notice

"Services" refers to both our digital agency services (brand building, web development, graphic design, video editing, social media management, SEO, ads management, copywriting, business automation) and our proprietary SaaS products.`
    },
    {
      id: 'service-engagement',
      icon: FaBalanceScale,
      title: 'Service Engagement & Scope',
      content: `Engagement Process:
• All projects begin with a consultation and scope definition
• A detailed proposal or statement of work (SOW) is provided before commencement
• Work begins only after client approval and initial payment (where applicable)
• Scope changes require written agreement and may affect pricing and timelines

Project Deliverables:
• Deliverables are defined in the SOW and must be mutually agreed upon
• Quality standards are maintained by Digital Lab's internal review process
• Revision rounds are specified in the SOW; additional revisions may incur extra charges
• Final delivery format and handover process are defined at project initiation

Timeline & Milestones:
• Project timelines are provided as estimates and may vary
• Milestones and deadlines are mutually agreed upon
• Delays caused by client-side issues (late feedback, incomplete assets) may extend timelines
• Force majeure events are handled per our force majeure clause`
    },
    {
      id: 'saas-terms',
      icon: FaLaptopCode,
      title: 'SaaS Product Terms',
      content: `Digital Lab offers proprietary SaaS products alongside our digital services.

Subscription & Access:
• SaaS products are offered on subscription-based plans
• Plans may include monthly or annual billing cycles
• Each subscription grants access to specified features and credit allocations
• Upgrades and downgrades can be made at any billing cycle

Credit System:
• SaaS products operate on a credit-based usage model
• Credits are allocated based on your subscription plan
• Additional credits can be purchased separately
• Unused credits are eligible for 100% refund (see Refund Policy)
• Credits are non-transferable between accounts unless authorized
• Credit expiration policies are specified in your subscription plan

Data & Content:
• Content created using our SaaS products belongs to you
• We retain no ownership over your generated content
• You are responsible for backing up your data
• Data export is available in standard formats upon request`
    },
    {
      id: 'payment-billing',
      icon: FaCreditCard,
      title: 'Payment & Billing',
      content: `Payment Terms:
• Invoices are issued according to the agreed schedule
• Payment is due within the period specified on the invoice
• Accepted payment methods: bank transfer, credit/debit cards, PayPal
• All prices are exclusive of applicable taxes unless stated otherwise

Late Payments:
• Payments overdue by 7 days will receive a reminder notice
• Payments overdue by 15 days may incur a 1.5% monthly interest charge
• Payments overdue by 30 days may result in service suspension
• Digital Lab reserves the right to withhold deliverables until full payment

SaaS Billing:
• Subscription fees are charged at the beginning of each billing cycle
• Auto-renewal is enabled by default and can be disabled in your account settings
• Cancellation before the next billing cycle prevents future charges
• Prorated refunds are not provided for mid-cycle cancellations unless specified`
    },
    {
      id: 'client-responsibilities',
      icon: FaUserShield,
      title: 'Client Responsibilities',
      content: `As a client of Digital Lab, you agree to:

Cooperation & Communication:
• Provide timely feedback and approvals as required
• Supply necessary materials, assets, and information for project execution
• Designate a single point of contact for project communications
• Respond to critical queries within 48 business hours

Content & Materials:
• Ensure all provided materials are legally owned or licensed by you
• Obtain necessary permissions for third-party content shared with us
• Inform us of any restrictions or guidelines related to materials
• Be responsible for the accuracy of provided information

Account Security (SaaS):
• Maintain the confidentiality of your login credentials
• Notify us immediately of any unauthorized access
• Do not share account access without authorization
• Comply with our acceptable use policies`
    },
    {
      id: 'cancellation',
      icon: FaBan,
      title: 'Cancellation & Termination',
      content: `Service Cancellation:
• Either party may cancel services with 30 days written notice
• Early termination fees may apply for fixed-term contracts
• Work completed up to cancellation date will be invoiced
• Prepaid amounts for undelivered work are subject to our Refund Policy

SaaS Subscription Cancellation:
• You may cancel your subscription at any time through your account
• Cancellation takes effect at the end of the current billing cycle
• Access continues until the end of the paid period
• Unused credits can be refunded per our Refund Policy

Termination for Cause:
• Either party may terminate immediately for material breach
• Non-payment for 30+ days constitutes material breach
• Violation of acceptable use policies results in immediate termination
• Fraudulent or illegal activity results in immediate termination without refund`
    },
    {
      id: 'dispute-resolution',
      icon: FaGavel,
      title: 'Dispute Resolution',
      content: `We strive to resolve disputes amicably:

Resolution Process:
1. Direct Communication: Contact us to discuss the issue informally
2. Escalation: If unresolved, escalate to senior management within 15 days
3. Mediation: Non-binding mediation through a mutually agreed mediator
4. Arbitration: Binding arbitration as a last resort

Governing Law:
• These Terms are governed by the laws of Pakistan
• Any legal proceedings shall be held in Lahore, Pakistan
• Both parties agree to submit to the jurisdiction of Lahore courts

Time Limitations:
• Claims must be raised within 90 days of the incident
• Failure to raise a claim within this period waives the right to dispute`
    },
    {
      id: 'changes',
      icon: FaSyncAlt,
      title: 'Changes to These Terms',
      content: `Digital Lab reserves the right to modify these Terms:

• Changes will be communicated via email to all active clients
• A 30-day notice period is provided before changes take effect
• Continued use of services after changes constitutes acceptance
• Material changes will require explicit re-acceptance for SaaS subscribers
• Previous versions of these Terms are available upon request

If you disagree with any changes, you may terminate your engagement before the changes take effect.`
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      title: 'Contact Information',
      content: `For questions about these Terms and Conditions:

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
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
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
                Loading Terms & Conditions...
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
              <FaBalanceScale className="text-4xl text-orange-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Terms & <span className="text-orange-500">Conditions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              General terms governing our digital services and SaaS products.
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

        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-400 mb-6">
                If you have any questions about these Terms & Conditions, please don't hesitate to reach out.
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

export default TermsAndConditions;
