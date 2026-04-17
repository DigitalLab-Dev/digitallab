'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  QrCode,
  ShoppingCart,
  CreditCard,
  Monitor,
  Package,
  Trash2,
  FileText,
  BarChart3,
  Globe,
  Tablet,
} from 'lucide-react';

const features = [
  {
    id: 'qr-menu',
    icon: QrCode,
    title: 'QR Code Digital Menu',
    short: 'Scan. Menu appears. Order done.',
    description:
      'Customers scan. Menu appears. They order. That\'s it. No printed menus. No waiting for a waiter to show up. Your full menu lives in a beautiful, mobile-friendly interface — updated in real time, available in 10+ languages.',
    image: '/images/restcart-qr-menu.webp',
    highlight: '10+ Languages',
  },
  {
    id: 'orders',
    icon: ShoppingCart,
    title: 'Smart Order Management',
    short: 'Direct to kitchen. Zero errors.',
    description:
      'Orders placed by customers go directly to the kitchen display. No middleman. No miscommunication. No "sorry, we didn\'t get that order." Every order is logged, tracked, and timestamped automatically.',
    image: '/images/restcart-orders.webp',
    highlight: 'Zero Errors',
  },
  {
    id: 'payments',
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    short: 'QR, Card, Bank Transfer, Cash.',
    description:
      'Your customers pay however they want: QR Code Payment, Credit/Debit Card, Bank Transfer, Cash via POS. Every transaction is recorded. Every penny is accounted for.',
    image: '/images/restcart-payments.webp',
    highlight: 'All Methods',
  },
  {
    id: 'pos',
    icon: Monitor,
    title: 'Built-In POS System',
    short: 'Powerful. Simple. Zero training.',
    description:
      'A powerful, easy-to-use Point of Sale system that works for your counter, your tables, and your takeaway — all from one screen. Fast, reliable, and requires zero technical training.',
    image: '/images/restcart-pos.webp',
    highlight: 'Zero Training',
  },
  {
    id: 'inventory',
    icon: Package,
    title: 'Intelligent Inventory',
    short: 'Real-time tracking. Smart alerts.',
    description:
      'Never run out of stock mid-service again. Our system tracks every ingredient, every product, every item in real time — and sends you an alert before anything runs out so you can restock in time.',
    image: '/images/restcart-inventory.webp',
    highlight: 'Real-time Alerts',
  },
  {
    id: 'wastage',
    icon: Trash2,
    title: 'Loss & Wastage Tracking',
    short: 'True profit. No inflated numbers.',
    description:
      'Log expired or wasted products directly into the system. RestCart automatically deducts those losses from your revenue reports — giving you a true picture of your profit, not an inflated one.',
    image: '/images/restcart-waste.webp',
    highlight: 'True Profit View',
  },
  {
    id: 'tax',
    icon: FileText,
    title: 'Automated Tax Engine',
    short: 'Set once. Done forever.',
    description:
      'Set your tax rate once. The system handles the rest — forever. Every sale is automatically taxed, every tax amount is separated and logged. No spreadsheets. No accountant headaches. No end-of-month panic.',
    image: '/images/restcart-tax.webp',
    highlight: 'Auto Tax',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Real-Time KPI Dashboard',
    short: 'Data-driven decisions. Always.',
    description:
      'See exactly how your restaurant is performing — right now. Daily, weekly, monthly revenue, best-selling items, peak hours, loss reports, inventory levels. Filter by any time period. Make decisions based on data, not gut feeling.',
    image: '/images/restcart-kpi.webp',
    highlight: 'Live Analytics',
  },
  {
    id: 'languages',
    icon: Globe,
    title: '10+ Languages Supported',
    short: 'English, Arabic, French & more.',
    description:
      'Serving customers from different backgrounds? No problem. RestCart supports 10+ languages including English, Arabic, French, Spanish, Italian, and more — so every customer feels at home.',
    image: '/images/restcart-languages.webp',
    highlight: '10+ Languages',
  },
  {
    id: 'tablet',
    icon: Tablet,
    title: 'Table Tablet Ordering',
    short: 'The future of dining. Here now.',
    description:
      'Place a tablet on every table. Customers browse, order, and pay — all by themselves. The order fires directly to the kitchen. Your only job? Have someone carry the food from the kitchen to the table. That\'s it.',
    image: '/images/restcart-pos.webp',
    highlight: 'Self-Service',
  },
];

export default function RestCartFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="w-full px-5 sm:px-10 py-24" id="features">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-500/10 border border-red-500/20 mb-4">
          <span className="text-xs text-red-400 font-semibold uppercase tracking-widest">Features</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Meet{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            RestCart
          </span>{' '}
          — The Brain Behind Your Restaurant.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Everything your restaurant needs. Nothing it doesn't.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Interactive Feature Selector */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Feature list - left */}
          <div className="lg:col-span-2 space-y-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature.id === feature.id;
              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${isActive
                      ? 'border-red-500/50 bg-red-950/30 shadow-lg shadow-red-900/20'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-red-500/30 border border-red-500/40' : 'bg-white/5 border border-white/10'
                    }`}>
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-red-400' : 'text-gray-500'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {feature.title}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5 truncate">{feature.short}</div>
                  </div>
                  {isActive && (
                    <span className="text-xs font-bold text-red-400 bg-red-500/15 px-2 py-1 rounded-full border border-red-500/20 flex-shrink-0">
                      {feature.highlight}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Feature detail - right */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                {/* Feature image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  {/* Feature badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-red-500/30 rounded-xl px-3 py-1.5">
                    <span className="text-xs font-bold text-red-400">{activeFeature.highlight}</span>
                  </div>
                </div>

                {/* Feature content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {React.createElement(activeFeature.icon, { className: "w-6 h-6 text-red-400" })}
                    <h3 className="text-2xl font-bold text-white">{activeFeature.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-base">{activeFeature.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
