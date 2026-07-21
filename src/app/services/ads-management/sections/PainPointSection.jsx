"use client"
import React, { useState } from 'react';
import {
  AlertTriangle, Target, TrendingDown, DollarSign,
  CheckCircle, ArrowRight, BarChart3, Eye, Lightbulb, RefreshCw
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const PainPointSection = () => {
  const [activeView, setActiveView] = useState('problems'); // 'problems' or 'solutions'
  const [hoveredItem, setHoveredItem] = useState(null);

  const problems = [
    {
      id: 1,
      icon: DollarSign,
      title: 'Wasted Ad Budget',
      description: 'Money goes to clicks that never convert due to loose targeting or weak keyword match types.',
      color: 'from-red-500 via-orange-600 to-red-700'
    },
    {
      id: 2,
      icon: Target,
      title: 'Wrong Targeting',
      description: 'Ads reach people well outside your customer base just to hit a broad audience.',
      color: 'from-orange-500 via-red-500 to-orange-700'
    },
    {
      id: 3,
      icon: TrendingDown,
      title: 'Low ROI Performance',
      description: 'Campaigns get plenty of clicks but very little actual revenue because the wrong metrics are tracked.',
      color: 'from-red-600 via-orange-500 to-red-800'
    },
    {
      id: 4,
      icon: Eye,
      title: 'Poor Creative Performance',
      description: 'Ad creative gets scrolled past because it was never tested or updated as performance dropped.',
      color: 'from-orange-600 via-red-600 to-orange-800'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Target,
      title: 'Laser-Sharp Targeting',
      description: 'We look at intent signals, past behavior, and platform data to target people most likely to buy.',
      color: 'from-orange-400 via-orange-500 to-orange-600'
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Creative Testing',
      description: 'We constantly test multiple ad variations to find what works best today, beating ad fatigue before it starts.',
      color: 'from-orange-500 via-yellow-500 to-orange-600'
    },
    {
      id: 3,
      icon: RefreshCw,
      title: 'Continuous Optimization',
      description: 'Your campaigns improve week after week based on live data, not "set-and-forget" settings.',
      color: 'from-green-500 via-orange-500 to-orange-600'
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Clear reporting tied to real business outcomes, so you see revenue instead of just clicks and impressions.',
      color: 'from-blue-500 via-orange-500 to-orange-600'
    }
  ];

  const currentItems = activeView === 'problems' ? problems : solutions;
  const isProblems = activeView === 'problems';

  return (
    <motion.section
      id="pain-point-section"
      className="relative min-h-screen bg-black py-10 overflow-x-hidden"
      aria-label="Ads Problems and Solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

        {/* Corrected gradient side background */}
        <div
          className={`absolute top-0 w-1/2 h-full transition-all duration-1000
          ${isProblems ? 'left-0 bg-gradient-to-r from-red-900/20 via-orange-900/15 to-transparent'
              : 'right-0 bg-gradient-to-l from-orange-900/20 via-orange-800/15 to-transparent'}`}
        />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30 animate-pulse transition-colors duration-1000"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-6 lg:mb-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 ">
            Stop Losing Money on
            <span className={`flex items-center justify-center py-4 bg-gradient-to-r ${isProblems
              ? 'from-red-400 via-orange-400 to-red-600'
              : 'from-orange-400 via-orange-500 to-orange-600'} 
              bg-clip-text text-transparent  transition-all duration-1000`}>
              {isProblems ? 'Failed Ads' : 'Winning Ads'}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Most failed ad campaigns drop the ball because of the same
            simple mistakes. Here is what typically goes wrong, and how our
            ads management fixes it.
          </p>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            {isProblems
              ? "Most businesses waste thousands on ineffective ad campaigns. Here's what's going wrong."
              : 'Transform your ad performance with our proven strategies that deliver real results.'}
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative w-fit bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full p-2">
            <div
              className={`absolute top-2 w-[45%] h-12 rounded-full transition-all duration-500 ease-out transform
              ${activeView === 'solutions' ? 'translate-x-full' : 'translate-x-0'}
              ${isProblems
                  ? 'bg-gradient-to-r from-red-500 via-orange-500 to-red-600'
                  : 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600'}`}
            />

            <div className="relative z-10 flex">
              <button
                onClick={() => setActiveView('problems')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeView === 'problems'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
                aria-pressed={activeView === 'problems'}
              >
                <AlertTriangle className="w-5 h-5 inline-block mr-2" />
                Problems
              </button>

              <button
                onClick={() => setActiveView('solutions')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeView === 'solutions'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
                aria-pressed={activeView === 'solutions'}
              >
                <CheckCircle className="w-5 h-5 inline-block mr-2" />
                Solutions
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Column */}
            <div className="space-y-6 lg:space-y-8">
              {currentItems.slice(0, 2).map((item, index) => (
                <motion.div
                  key={`${activeView}-${item.id}`}
                  className={`group relative p-6 lg:p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                  backdrop-blur-sm border transition-all duration-700 rounded-2xl hover:scale-105 transform
                  border-orange-500/20 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              {currentItems.slice(2, 4).map((item, index) => (
                <motion.div
                  key={`${activeView}-${item.id}`}
                  className={`group relative p-6 lg:p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                  backdrop-blur-sm border transition-all duration-700 rounded-2xl hover:scale-105 transform
                  border-orange-500/20 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {hoveredItem === item.id && !isProblems && (
                      <motion.div
                        className="absolute top-1/2 right-6 transform -translate-y-1/2 text-orange-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ArrowRight className="w-6 h-6" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <AnimatePresence>
          {!isProblems && (
            <motion.div
              className="text-center mt-16 lg:mt-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="https://calendly.com/syed-ali-turab/30min" target="_blank">
                <motion.button
                  className="group inline-flex items-center px-8 py-4 lg:px-12 lg:py-6 text-lg lg:text-xl font-bold text-black 
                bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full 
                hover:from-orange-300 hover:via-orange-400 hover:to-orange-500 transition-all duration-300 
                transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 
                focus:outline-none focus:ring-4 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Fix Your Ads Together
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </motion.div>
                </motion.button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default PainPointSection;
