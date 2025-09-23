"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, ArrowUpRight } from 'lucide-react';

const AdsManagementCTA = () => {
  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-500 rounded-full"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10"></div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 rounded-3xl p-12 relative">
            {/* Animated Background Elements */}
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-8 right-8 w-32 h-32 border border-white opacity-20 rounded-full"
            ></motion.div>
            
            <motion.div 
              animate={{ 
                rotate: -360,
                y: [0, -10, 0]
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-8 left-8 w-24 h-24 border-2 border-black opacity-10 rounded-lg"
            ></motion.div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                  Ready to <span className="text-white">10x</span> Your ROI?
                </h2>
                <p className="text-xl md:text-2xl text-black opacity-90 mb-8 max-w-3xl mx-auto">
                  Join 50+ successful businesses who've transformed their advertising performance 
                  with our proven strategies. Your competitors are already ahead – catch up now.
                </p>
              </motion.div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span>Start Your Campaign</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 border-2 border-transparent hover:border-black"
                >
                  View Pricing Plans
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-black text-lg mb-2">30-Day Guarantee</h3>
                  <p className="text-black opacity-80 text-sm">See results or get your money back</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-black text-lg mb-2">5.9x Average ROAS</h3>
                  <p className="text-black opacity-80 text-sm">Proven track record of success</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-black text-lg mb-2">50+ Happy Clients</h3>
                  <p className="text-black opacity-80 text-sm">Trusted by industry leaders</p>
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <p className="text-black opacity-70 text-sm mb-4">Trusted by companies like:</p>
                <div className="flex justify-center items-center gap-8 opacity-60 flex-wrap">
                  <div className="w-20 h-8 bg-black bg-opacity-20 rounded flex items-center justify-center">
                    <span className="font-bold text-xs text-black">BRAND</span>
                  </div>
                  <div className="w-20 h-8 bg-black bg-opacity-20 rounded flex items-center justify-center">
                    <span className="font-bold text-xs text-black">CORP</span>
                  </div>
                  <div className="w-20 h-8 bg-black bg-opacity-20 rounded flex items-center justify-center">
                    <span className="font-bold text-xs text-black">TECH</span>
                  </div>
                  <div className="w-20 h-8 bg-black bg-opacity-20 rounded flex items-center justify-center">
                    <span className="font-bold text-xs text-black">SHOP</span>
                  </div>
                </div>
              </motion.div>

              {/* Urgency Element */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-8 p-4 bg-black bg-opacity-20 rounded-xl inline-block"
              >
                <p className="text-black font-semibold">
                  ⚡ Limited Time: Free strategy audit with every new campaign (Worth $500)
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdsManagementCTA;