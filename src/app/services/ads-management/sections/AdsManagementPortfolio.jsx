"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, Calendar, Award, Eye } from 'lucide-react';

const AdsManagementPortfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Beauty & Fashion Brand",
      category: "Facebook & Instagram Ads",
      image: "/portfolios/ads-management/1.png",
      duration: "Ongoing",
      budget: "Confidential",
      results: {
        ctr: "3.72%",
        leads: "145+",
        cpc: "Rs 3.23",
        reach: "30.5K"
      },
      description: "Generated high-volume direct sales inquiries for a local beauty/fashion brand by utilizing a \"Click-to-Message\" strategy, bypassing website friction to connect customers directly with sales agents.",
      challenges: "High competition in the fashion niche, expensive Cost Per Click (CPC) on standard campaigns, and customers hesitating to buy without asking questions first.",
      solution: "Switched objective to \"Messaging Conversations\" to encourage direct interaction. Utilized high-contrast lifestyle imagery which resulted in a massive 3.72% CTR.",
      metrics: [
        { label: "CTR", value: "3.72%", icon: TrendingUp },
        { label: "New Leads", value: "145+", icon: Target },
        { label: "Cost per Click", value: "Rs 3.23", icon: DollarSign },
        { label: "Reach", value: "30.5K", icon: Users }
      ]
    },
    {
      id: 2,
      title: "Service-Based Lead Generation",
      category: "Facebook & Instagram Ads",
      image: "/portfolios/ads-management/2.jpg",
      duration: "Campaign",
      budget: "Confidential",
      results: {
        ctr: "4.56%",
        inquiries: "60+",
        cpc: "Rs 7.73",
        conversion_cost: "< Rs 70"
      },
      description: "Executed a high-efficiency \"Click-to-Message\" campaign for a service-based client. The campaign focused on driving immediate conversations rather than passive website clicks, resulting in a direct line of communication with potential customers.",
      challenges: "Client needed immediate leads but had a limited budget. Previous campaigns had high impressions but low engagement, failing to connect the business with interested prospects.",
      solution: "We developed a high-intent messaging campaign targeting users likely to engage. By optimizing for \"Conversations\" rather than just \"Clicks,\" we achieved a massive 4.56% CTR and drove 60 qualified inquiries for less than Rs 70 each.",
      metrics: [
        { label: "CTR", value: "4.56%", icon: TrendingUp },
        { label: "New Inquiries", value: "60+", icon: Target },
        { label: "Cost Per Click", value: "Rs 7.73", icon: DollarSign },
        { label: "Cost Per Lead", value: "< Rs 70", icon: Award }
      ]
    },
    {
      id: 3,
      title: "Premium Service / High-Ticket Lead Gen",
      category: "Facebook & Instagram Ads",
      image: "/portfolios/ads-management/3.jpg",
      duration: "Targeted",
      budget: "High Value",
      results: {
        leads: "30",
        reach: "14,400+",
        frequency: "~2.0",
        cpl: "-27%"
      },
      description: "A targeted lead generation campaign for a premium service offering. Unlike mass-market campaigns, this strategy focused on quality over quantity, targeting a specific affluent demographic to drive high-value conversations.",
      challenges: "The client required serious inquiries for a high-ticket offer, needing to filter out \"window shoppers\" who would waste the sales team's time.",
      solution: "We implemented a \"Quality-First\" targeting strategy. By narrowing the audience and using personalized ad sets (A/B testing different personas), we accepted a higher Cost Per Lead to ensure the 30 conversations generated were from genuine, high-intent prospects.",
      metrics: [
        { label: "Qualified Leads", value: "30", icon: Target },
        { label: "Targeted Reach", value: "14,400+", icon: Users },
        { label: "Frequency", value: "~2.0", icon: TrendingUp },
        { label: "Cost Per Lead", value: "-27%", icon: DollarSign }
      ]
    },
    {
      id: 4,
      title: "Brand Awareness & Mass Reach",
      category: "Facebook & Instagram Ads",
      image: "/portfolios/ads-management/4.jpg",
      duration: "High Velocity",
      budget: "Optimized",
      results: {
        reach: "118,500+",
        impressions: "125,000+",
        cpm: "Rs 22",
        frequency: "1.06"
      },
      description: "A high-velocity \"Brand Awareness\" campaign designed to flood the market with visibility. We utilized a reach-optimized strategy to ensure the brand was seen by the maximum number of unique users for the lowest possible cost.",
      challenges: "The brand needed immediate market presence and name recognition but had a limited budget to compete with established players.",
      solution: "We executed a \"Broad Reach\" strategy, bypassing expensive conversion auctions to focus purely on visibility. By optimizing for unique reach, we successfully introduced the brand to nearly 120,000 people for the price of a standard dinner.",
      metrics: [
        { label: "Unique Reach", value: "118,500+", icon: Users },
        { label: "Impressions", value: "125,000+", icon: Eye },
        { label: "Cost Per 1k", value: "Rs 22", icon: DollarSign },
        { label: "Frequency", value: "1.06", icon: TrendingUp }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="w-8 h-8 text-orange-500" />
            <h1 className="text-5xl font-bold">
              Ads Management <span className="text-orange-500">Portfolio</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven results across industries. Our strategic approach to paid advertising 
            delivers measurable growth and exceptional ROI for our clients.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCase(study)}
            >
              <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-12 h-12 text-orange-500" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-orange-500 text-black text-sm font-medium rounded-full">
                    {study.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {study.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-6 line-clamp-2">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-orange-500">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-neutral-700"
        >
          <div className="flex items-center justify-center mb-8">
            <Award className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold">Campaign Performance Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">$83K</div>
              <div className="text-gray-300">Total Ad Spend</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">5.9x</div>
              <div className="text-gray-300">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">7.4M</div>
              <div className="text-gray-300">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">+498%</div>
              <div className="text-gray-300">Avg. Conversion Increase</div>
            </div>
          </div>
        </motion.div>

        {/* Modal for Case Study Details */}
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neutral-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedCase.title}</h2>
                    <span className="px-3 py-1 bg-orange-500 text-black text-sm font-medium rounded-full">
                      {selectedCase.category}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src={selectedCase.image} 
                      alt={selectedCase.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-orange-500">Key Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedCase.metrics.map((metric, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg">
                            <metric.icon className="w-6 h-6 text-orange-500" />
                            <div>
                              <div className="font-bold">{metric.value}</div>
                              <div className="text-sm text-gray-400">{metric.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span>{selectedCase.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-orange-500" />
                        <span>{selectedCase.budget}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-orange-500">Overview</h3>
                    <p className="text-gray-300">{selectedCase.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-orange-500">Challenges</h3>
                    <p className="text-gray-300">{selectedCase.challenges}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-orange-500">Solution</h3>
                    <p className="text-gray-300">{selectedCase.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdsManagementPortfolio;