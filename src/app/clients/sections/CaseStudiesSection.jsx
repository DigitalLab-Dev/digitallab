"use client"
import React, { useState, useRef, useEffect } from 'react';

const CaseStudiesSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  // Dummy case studies data
  const caseStudies = [
    {
      id: 1,
      clientName: "TechFlow Solutions",
      clientLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop",
      projectImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      industry: "Technology",
      projectTitle: "AI-Powered Dashboard Redesign",
      problem: "TechFlow's existing analytics platform had a 68% user abandonment rate due to complex navigation and overwhelming data visualization. Users couldn't quickly access critical insights.",
      solution: "We redesigned the entire UX with AI-powered personalized dashboards, implementing smart data filtering, intuitive navigation patterns, and real-time collaborative features.",
      result: "Achieved 85% reduction in user abandonment rate, 3.2x increase in daily active users, and 45% improvement in task completion time. Revenue increased by 127% within 6 months.",
      metrics: [
        { label: "User Retention", value: "+85%", icon: "↗" },
        { label: "Revenue Growth", value: "+127%", icon: "💰" },
        { label: "Task Completion", value: "+45%", icon: "⚡" }
      ],
      tags: ["UX/UI Design", "AI Integration", "Dashboard", "Analytics"]
    },
    {
      id: 2,
      clientName: "FinanceMax",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop",
      projectImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      industry: "Financial Services",
      projectTitle: "Mobile Banking App Revolution",
      problem: "Legacy mobile banking app with 2.1 star rating, high customer churn, and outdated security measures. Customers were switching to competitor apps at an alarming rate.",
      solution: "Complete mobile app rebuild with biometric authentication, AI-powered expense tracking, seamless money transfers, and personalized financial insights with gamification elements.",
      result: "App rating jumped to 4.8 stars, customer churn reduced by 73%, and mobile transaction volume increased by 245%. Won 'Best Banking App' industry award.",
      metrics: [
        { label: "App Rating", value: "4.8★", icon: "⭐" },
        { label: "Churn Reduction", value: "-73%", icon: "📉" },
        { label: "Transactions", value: "+245%", icon: "📱" }
      ],
      tags: ["Mobile App", "Fintech", "Security", "UX Design"]
    },
    {
      id: 3,
      clientName: "EcoGreen Energy",
      clientLogo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=150&h=80&fit=crop",
      projectImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
      industry: "Renewable Energy",
      projectTitle: "Smart Energy Management Platform",
      problem: "Clients couldn't effectively monitor their solar energy systems, leading to 30% efficiency losses and poor ROI visibility. Manual reporting was time-consuming and error-prone.",
      solution: "Developed an IoT-integrated platform with real-time energy monitoring, predictive maintenance alerts, automated reporting, and AR visualization for system diagnostics.",
      result: "Energy efficiency improved by 35%, maintenance costs reduced by 60%, and customer satisfaction scores increased to 94%. Platform now serves 10,000+ installations.",
      metrics: [
        { label: "Efficiency Gain", value: "+35%", icon: "⚡" },
        { label: "Cost Reduction", value: "-60%", icon: "💡" },
        { label: "Satisfaction", value: "94%", icon: "😊" }
      ],
      tags: ["IoT Platform", "Energy Management", "AR/VR", "Analytics"]
    },
    {
      id: 4,
      clientName: "MediCare Plus",
      clientLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=150&h=80&fit=crop",
      projectImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      industry: "Healthcare",
      projectTitle: "Telemedicine Platform Development",
      problem: "Healthcare provider struggled with patient engagement and appointment no-shows (42% rate). Existing systems couldn't handle the surge in telemedicine demand during the pandemic.",
      solution: "Built a comprehensive telemedicine platform with AI-powered symptom checker, virtual waiting rooms, automated appointment reminders, and integrated prescription management.",
      result: "No-show rates dropped to 8%, patient satisfaction increased by 78%, and the platform handled 500% increase in consultations. Reduced operational costs by 40%.",
      metrics: [
        { label: "No-Show Rate", value: "-42%→8%", icon: "📅" },
        { label: "Satisfaction", value: "+78%", icon: "❤️" },
        { label: "Capacity", value: "+500%", icon: "🏥" }
      ],
      tags: ["Healthcare", "Telemedicine", "AI Integration", "Patient Portal"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .float-element {
          animation: float 6s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .metric-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .metric-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .problem-solution-result {
          position: relative;
        }
        
        .problem-solution-result::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #f97316, #f59e0b, #eab308);
          border-radius: 2px;
        }
      `}</style>
      
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl float-element"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl float-element" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.5) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Case <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Studies</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Real projects, real results. Discover how we've transformed businesses across industries with innovative solutions.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Case Studies */}
          <div className="space-y-32">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleItems.has(index);
              
              return (
                <div
                  key={study.id}
                  ref={el => itemRefs.current[index] = el}
                  data-index={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isVisible ? (isEven ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-0'
                  }`}
                >
                  {/* Image Section */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      
                      {/* Main project image */}
                      <img
                        src={study.projectImage}
                        alt={study.projectTitle}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/600x400/1a1a1a/ffffff?text=${study.projectTitle}`;
                        }}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating client logo */}
                      <div className="absolute top-6 right-6 glass-morphism rounded-xl p-3 float-element">
                        <img
                          src={study.clientLogo}
                          alt={study.clientName}
                          className="w-16 h-8 object-contain"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/150x80/333/fff?text=${study.clientName}`;
                          }}
                        />
                      </div>
                      
                      {/* Industry tag */}
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
                    {/* Header */}
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {study.projectTitle}
                      </h3>
                      <p className="text-orange-400 text-lg font-medium">{study.clientName}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Problem → Solution → Result */}
                    <div className="space-y-6">
                      {/* Problem */}
                      <div className="problem-solution-result pl-8">
                        <h4 className="text-red-400 font-bold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 text-sm">❌</span>
                          Problem
                        </h4>
                        <p className="text-white/80 leading-relaxed">{study.problem}</p>
                      </div>

                      {/* Solution */}
                      <div className="problem-solution-result pl-8">
                        <h4 className="text-blue-400 font-bold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 text-sm">⚡</span>
                          Solution
                        </h4>
                        <p className="text-white/80 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Result */}
                      <div className="problem-solution-result pl-8">
                        <h4 className="text-green-400 font-bold text-lg mb-3 flex items-center">
                          <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3 text-sm">✅</span>
                          Result
                        </h4>
                        <p className="text-white/80 leading-relaxed mb-6">{study.result}</p>
                      </div>
                    </div>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {study.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className={`metric-card glass-morphism rounded-xl p-4 text-center ${
                            isVisible ? 'animate-scale-in' : ''
                          }`}
                          style={{animationDelay: `${metricIndex * 0.1}s`}}
                        >
                          <div className="text-2xl mb-2">{metric.icon}</div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            {metric.value}
                          </div>
                          <div className="text-white/70 text-sm">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-24">
            <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to be our next success story?
              </h3>
              <p className="text-white/70 mb-6">
                Let's discuss how we can transform your business with innovative solutions.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesSection;