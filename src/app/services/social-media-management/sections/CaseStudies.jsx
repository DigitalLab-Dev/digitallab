
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Eye } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Model and Artist',
      description:
      "Elevated Rishi's Instagram presence with custom graphic posts and song posters. Gave his profile a clean, recognizable aesthetic that improved engagement and strengthened his artist brand.",
      image: '/portfolios/social-media/1.png',
      metrics: {
        reach: '500k+',
        growth: '150%',
        platform: 'Instagram',
      },
    },
    {
      title: 'Digital Marketing Agency',
      description:
        'Built Digital Lab Services from zero across social platforms with consistent video editing and graphic design content. Reached 800+ Instagram followers in just 3 months and established a professional brand presence.',
      image: '/portfolios/social-media/2.png',
      metrics: { Projects: '500+', revenue: '$300k+', Clients: '100+' },
    },
    {
      title: 'Travel Agency',
      description:
        'Worked with Tafreehi.Agenda, a travel company with national and international reach, creating visually stunning videos of tourist destinations and monuments that significantly elevated their brand engagement.',
      image: '/portfolios/social-media/3.png',
      metrics: { views: '500k+', platform: 'Instagram' },
    },
    {
      title: 'Social Media Influencer',
      description:
        'Worked with Kevvvads, an influencer focused on Meta Ads, producing high-quality video edits that tripled his views and amplified audience engagement.',
      image: '/portfolios/social-media/4.png',
      metrics: { Growth: '350%', platform: 'Instagram' },
    },
    {
      title: 'Homeware Ecommerce Store',
      description:
        'Partnered with Delujo.uk, an e-commerce brand for household and homeware products, managing their Instagram with daily posts and overseeing their online store to boost brand presence and sales.',
      image: '/portfolios/social-media/5.png',
      metrics: { reach: '100K+', Sales: '200%', platform: 'Multi-platform' },
    },
    {
      title: 'Youtube Channel ',
      description:
        "Managing Treble Health's YouTube channel with 170k followers, producing and editing both long-form and short-form videos to boost engagement and grow their audience.",
      image: '/portfolios/social-media/6.png',
      metrics: { views: '1M+ / Month',  platform: 'Youtube' },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen py-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-orange-200 text-sm font-medium">
              Success Stories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto mb-6">
            <span className="text-white block mb-2">Proven Results</span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              That Speak Volumes
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From viral campaigns to strategic growth, see how we've transformed
            brands across industries
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((caseStudy, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
                variants={itemVariants}
              >
                {/* Image Container */}
                <motion.div
                  className={`relative ${
                    !isEven ? 'lg:col-start-2' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-80 object-contain"
                    />
                  </div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                  className={`space-y-6 ${
                    !isEven ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Case number */}
                  <div className="text-orange-400 text-sm font-bold tracking-wider">
                    CASE STUDY {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {caseStudy.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Metrics cards */}
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(caseStudy.metrics)
                      .slice(0, 2)
                      .map(([key, value], i) => (
                        <div
                          key={i}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3"
                        >
                          <div className="text-orange-400 font-bold text-lg">
                            {value}
                          </div>
                          <div className="text-gray-400 text-sm capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
