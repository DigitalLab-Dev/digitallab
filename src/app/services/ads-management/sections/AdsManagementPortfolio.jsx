"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, Calendar, Award } from 'lucide-react';

const AdsManagementPortfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Fashion Brand",
      category: "Facebook & Instagram Ads",
      image: "/portfolios/ads-management/1.png",
      duration: "3 months",
      budget: "$15,000",
      results: {
        roas: "4.2x",
        conversions: "+340%",
        cpc: "-65%",
        reach: "2.1M"
      },
      description: "Transformed a struggling fashion e-commerce store into a profitable business through strategic audience targeting and creative optimization.",
      challenges: "Low conversion rates, high cost per acquisition, poor audience targeting",
      solution: "Implemented lookalike audiences, A/B tested creatives, optimized for conversion events",
      metrics: [
        { label: "ROAS", value: "4.2x", icon: TrendingUp },
        { label: "Conversions", value: "+340%", icon: Target },
        { label: "Cost per Click", value: "-65%", icon: DollarSign },
        { label: "Reach", value: "2.1M", icon: Users }
      ]
    },
    {
      id: 2,
      title: "SaaS Lead Generation",
      category: "Google Ads & LinkedIn",
      image: "/portfolios/ads-management/2.jpg",
      duration: "6 months",
      budget: "$25,000",
      results: {
        roas: "6.8x",
        conversions: "+580%",
        cpc: "-45%",
        reach: "850K"
      },
      description: "Generated high-quality B2B leads for a SaaS platform through targeted Google Search and LinkedIn campaigns.",
      challenges: "High competition, expensive keywords, low-quality leads",
      solution: "Refined keyword strategy, implemented negative keywords, created compelling ad copy with clear CTAs",
      metrics: [
        { label: "ROAS", value: "6.8x", icon: TrendingUp },
        { label: "Lead Quality", value: "+580%", icon: Target },
        { label: "Cost per Lead", value: "-45%", icon: DollarSign },
        { label: "Impressions", value: "850K", icon: Users }
      ]
    },
    {
      id: 3,
      title: "Local Restaurant Chain",
      category: "Facebook & Google Local",
      image: "/portfolios/ads-management/3.jpg",
      duration: "4 months",
      budget: "$8,000",
      results: {
        roas: "5.5x",
        conversions: "+420%",
        cpc: "-55%",
        reach: "1.5M"
      },
      description: "Boosted foot traffic and online orders for a local restaurant chain through location-based advertising.",
      challenges: "Limited local reach, seasonal fluctuations, competition from delivery apps",
      solution: "Geo-targeted campaigns, seasonal promotions, integrated online ordering system",
      metrics: [
        { label: "ROAS", value: "5.5x", icon: TrendingUp },
        { label: "Foot Traffic", value: "+420%", icon: Target },
        { label: "Order Cost", value: "-55%", icon: DollarSign },
        { label: "Local Reach", value: "1.5M", icon: Users }
      ]
    },
    {
      id: 4,
      title: "Tech Startup Launch",
      category: "Multi-Platform Campaign",
      image: "/portfolios/ads-management/4.jpg",
      duration: "5 months",
      budget: "$35,000",
      results: {
        roas: "7.2x",
        conversions: "+650%",
        cpc: "-70%",
        reach: "3.2M"
      },
      description: "Successfully launched a tech startup's product across multiple platforms with comprehensive market penetration.",
      challenges: "Brand awareness from zero, complex product positioning, diverse target audiences",
      solution: "Multi-funnel approach, educational content, retargeting campaigns, influencer partnerships",
      metrics: [
        { label: "ROAS", value: "7.2x", icon: TrendingUp },
        { label: "Signups", value: "+650%", icon: Target },
        { label: "Acquisition Cost", value: "-70%", icon: DollarSign },
        { label: "Brand Reach", value: "3.2M", icon: Users }
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
    <div className="min-h-screen bg-black text-white py-20 px-4">
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
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCase(study)}
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
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
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
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
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
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
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
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