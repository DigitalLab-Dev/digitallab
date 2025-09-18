"use client"
import React, { useEffect, useState } from 'react';
import { Pen, Target, Mail, MousePointer, MessageCircle, ShoppingBag, Search } from 'lucide-react';

const CopywritingServices = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Pen className="w-8 h-8" />,
      title: "Website Copy",
      description: "Compelling homepage and landing page content that converts visitors into customers"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sales Pages & Landing Pages",
      description: "High-converting sales copy designed to maximize your conversion rates"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Campaigns",
      description: "Engaging email sequences that nurture leads and drive sales"
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Ad Copy",
      description: "Performance-driven ads for Google, Facebook, LinkedIn and other platforms"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Social Media Captions",
      description: "Scroll-stopping social content that builds your brand and engages audiences"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Product Descriptions",
      description: "Persuasive e-commerce copy that highlights benefits and drives purchases"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Blog Writing",
      description: "Search-optimized articles that rank high and establish your expertise"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20 px-4">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
            }}
          />
        ))}
      </div>

      {/* Background Gradient Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
            Our Copywriting Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 content-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                  {service.icon}
                </div>
                {/* Icon Glow */}
                <div className="absolute inset-0 w-16 h-16 bg-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 cursor-pointer">
            <span className="mr-2">Ready to Transform Your Copy?</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopywritingServices;