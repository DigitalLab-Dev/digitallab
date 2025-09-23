'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Eye } from 'lucide-react';

const CaseStudies = () => {
  const [hoveredCase, setHoveredCase] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const caseStudies = [
    {
      title: 'Fashion Brand Viral Campaign',
      description:
        'Transformed a struggling fashion startup into a viral sensation with 2.5M+ reach across Instagram and TikTok. Our strategic content mix increased sales by 340% in just 3 months.',
      image: '/portfolios/social-media/1.png',
      link: '/case-study/fashion-viral',
      metrics: {
        reach: '2.5M+',
        growth: '340%',
        platform: 'Instagram & TikTok',
      },
    },
    {
      title: 'Tech Startup LinkedIn Success',
      description:
        'Positioned a B2B SaaS company as industry thought leaders through strategic LinkedIn content. Generated 150+ qualified leads and secured $2M in new contracts.',
      image: '/portfolios/social-media/2.png',
      link: '/case-study/tech-linkedin',
      metrics: { leads: '150+', revenue: '$2M', platform: 'LinkedIn' },
    },
    {
      title: 'Restaurant Chain TikTok Boom',
      description:
        'Created a viral TikTok strategy for a regional restaurant chain, resulting in 50M+ views and 200% increase in foot traffic across all locations.',
      image: '/portfolios/social-media/3.png',
      link: '/case-study/restaurant-tiktok',
      metrics: { views: '50M+', traffic: '200%', platform: 'TikTok' },
    },
    {
      title: 'E-commerce YouTube Growth',
      description:
        'Built a comprehensive YouTube strategy for an e-commerce brand, growing from 5K to 500K subscribers and generating $1.5M in direct sales through video content.',
      image: '/portfolios/social-media/4.png',
      link: '/case-study/ecommerce-youtube',
      metrics: { subscribers: '500K', sales: '$1.5M', platform: 'YouTube' },
    },
    {
      title: 'Healthcare Brand Awareness',
      description:
        'Developed a multi-platform awareness campaign for a healthcare provider, reaching 5M+ people and increasing appointment bookings by 180%.',
      image: '/portfolios/social-media/5.png',
      link: '/case-study/healthcare-awareness',
      metrics: { reach: '5M+', bookings: '180%', platform: 'Multi-platform' },
    },
    {
      title: 'Real Estate Facebook Success',
      description:
        "Transformed a real estate agency's Facebook presence, generating 300+ qualified leads and closing $15M in property sales within 6 months.",
      image: '/portfolios/social-media/6.png',
      link: '/case-study/realestate-facebook',
      metrics: { leads: '300+', sales: '$15M', platform: 'Facebook' },
    },
    {
      title: 'Beauty Brand Instagram Influence',
      description:
        'Launched a beauty brand to Instagram stardom with influencer partnerships and UGC campaigns, achieving 1M followers and $800K in monthly revenue.',
      image: '/portfolios/social-media/7.jpg',
      link: '/case-study/beauty-instagram',
      metrics: { followers: '1M', revenue: '$800K/mo', platform: 'Instagram' },
    },
    {
      title: 'Fitness App Multi-Platform Launch',
      description:
        'Orchestrated a cross-platform launch campaign for a fitness app, resulting in 250K downloads and 40K active subscribers within the first month.',
      image: '/portfolios/social-media/8.png',
      link: '/case-study/fitness-multiplatform',
      metrics: {
        downloads: '250K',
        subscribers: '40K',
        platform: 'Cross-platform',
      },
    },
    {
      title: 'Local Business Community Building',
      description:
        'Helped a local coffee shop build a strong community presence across social platforms, increasing daily customers by 120% and creating a loyal fanbase.',
      image: '/portfolios/social-media/9.png',
      link: '/case-study/local-community',
      metrics: {
        customers: '120%',
        engagement: '450%',
        platform: 'Multi-platform',
      },
    },
    {
      title: 'Non-Profit Awareness Campaign',
      description:
        'Created an impactful awareness campaign for a non-profit organization, reaching 10M+ people and increasing donations by 300% during their annual fundraiser.',
      image: '/portfolios/social-media/10.png',
      link: '/case-study/nonprofit-awareness',
      metrics: { reach: '10M+', donations: '300%', platform: 'Multi-platform' },
    },
    {
      title: 'Automotive Brand Engagement',
      description:
        "Revitalized an automotive brand's social presence with immersive content and AR experiences, leading to 500% increase in test drive bookings.",
      image: '/portfolios/social-media/11.png',
      link: '/case-study/automotive-engagement',
      metrics: {
        bookings: '500%',
        engagement: '280%',
        platform: 'Instagram & Facebook',
      },
    },
  ];

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

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
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Custom cursor */}
      {hoveredCase !== null && (
        <motion.div
          className="fixed top-0 left-0 w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xs z-50 pointer-events-none"
          style={{
            x: cursorPosition.x - 40,
            y: cursorPosition.y - 40,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          VIEW
        </motion.div>
      )}

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
          className="space-y-32"
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
                  className={`relative group ${
                    !isEven ? 'lg:col-start-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredCase(index)}
                  onMouseLeave={() => setHoveredCase(null)}
                  onMouseMove={handleMouseMove}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing background */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Static glow behind image */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl blur-lg"></div>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-80 object-contain transition-transform duration-500 group-hover:scale-110 cursor-none"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Metrics overlay */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                        <div className="grid grid-cols-3 gap-4 text-white text-sm">
                          <div className="text-center">
                            <div className="font-bold text-orange-400">
                              {Object.values(caseStudy.metrics)[0]}
                            </div>
                            <div className="text-xs opacity-80">
                              {Object.keys(caseStudy.metrics)[0]}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-amber-400">
                              {Object.values(caseStudy.metrics)[1]}
                            </div>
                            <div className="text-xs opacity-80">
                              {Object.keys(caseStudy.metrics)[1]}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-white">
                              {caseStudy.metrics.platform}
                            </div>
                            <div className="text-xs opacity-80">Platform</div>
                          </div>
                        </div>
                      </div>
                    </div>
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

                  {/* CTA Button */}
                  <motion.a
                    href={caseStudy.link}
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold px-6 py-3 rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
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
