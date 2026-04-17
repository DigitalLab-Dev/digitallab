'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  QrCode,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Package,
  Globe,
  Star,
  Zap,
  Lock,
} from 'lucide-react';

const products = [
  {
    id: 'restcart',
    name: 'RestCart',
    tagline: 'The All-in-One Restaurant Operating System',
    description:
      'Replace your entire front-of-house staff with one smart system. QR menus, order management, POS, inventory, taxes, and real-time KPIs — all automated.',
    href: '/products/restcart',
    status: 'live',
    badge: 'Restaurant Tech',
    color: 'from-red-600 to-orange-500',
    accentColor: '#ef4444',
    image: '/images/restcart-hero.png',
    features: ['QR Digital Menu', 'Smart Orders', 'POS System', 'Inventory Mgmt', 'Auto Tax Engine', '10+ Languages'],
    stats: [
      { label: 'Cost Reduction', value: 'Up to 80%' },
      { label: 'Setup Time', value: '< 24hrs' },
      { label: 'Countries', value: '10+' },
    ],
    icons: [QrCode, ShoppingCart, CreditCard, BarChart3, Package, Globe],
  },
];

const comingSoon = [
  {
    name: 'Coming Soon',
    description: 'We are actively building new SaaS products for more industries. Stay tuned.',
    icon: Lock,
  },
  {
    name: 'Coming Soon',
    description: 'More innovative solutions in the pipeline. Join our waitlist to be the first to know.',
    icon: Zap,
  },
];

export default function ProductsGrid() {
  return (
    <section className="w-full px-5 sm:px-10 py-20 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 mb-4">
          <Star className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-xs text-orange-400 font-semibold uppercase tracking-widest">Live Products</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Products Available <span className="text-orange-400">Today</span>
        </h2>
      </motion.div>

      {/* Main product cards */}
      <div className="space-y-8 mb-20">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <Link href={product.href} className="group block">
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${product.color}`} />

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left – content */}
                  <div className="p-8 sm:p-12 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/20">
                          {product.badge}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Live
                        </span>
                      </div>

                      <h3 className="text-4xl sm:text-5xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-orange-400 font-medium text-lg mb-5">{product.tagline}</p>
                      <p className="text-gray-400 text-base leading-relaxed mb-8">{product.description}</p>

                      {/* Features */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                        {product.features.map((feature, i) => {
                          const Icon = product.icons[i];
                          return (
                            <div
                              key={feature}
                              className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5 border border-white/5"
                            >
                              <Icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                              <span className="text-xs text-gray-300 font-medium">{feature}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Stats + CTA */}
                    <div>
                      <div className="flex gap-6 mb-8">
                        {product.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-xl font-bold text-orange-400">{stat.value}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300 group-hover:gap-4">
                        Explore RestCart
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Right – image */}
                  <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10 lg:block hidden" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 z-20 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 text-center">
                      <div className="text-2xl font-black text-white">80%</div>
                      <div className="text-xs text-gray-400">Cost Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/5 border border-white/10 mb-4">
          <Zap className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">In Development</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          More Products <span className="text-gray-500">Coming Soon</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {comingSoon.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-gray-600" />
              </div>
              <h3 className="text-gray-500 font-bold text-xl mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
