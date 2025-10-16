
// import Hero from './sections/Hero';
// import ImageSection from './sections/ImageSection';
// import Portfolio from './sections/Portfolio';
// import ServicesSection from './sections/ServicesSection';
// import WebsiteCTA from './sections/WebsiteCTA';
// import WhyNeedThis from './sections/WhyNeedThis';

// export default function WebDevelopment() {
//   return (
//     <main>
//       <Hero />
//       <WhyNeedThis/>
//       <ServicesSection/>
//       <Portfolio/>
//       <WebsiteCTA/>
//     </main>
//   );
// }



'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const Hero = dynamic(() => import('./sections/Hero'), {
  loading: () => null,
});
const WhyNeedThis = dynamic(() => import('./sections/WhyNeedThis'), {
  loading: () => null,
});
const ServicesSection = dynamic(() => import('./sections/ServicesSection'), {
  loading: () => null,
});
const Portfolio = dynamic(() => import('./sections/Portfolio'), {
  loading: () => null,
});
const WebsiteCTA = dynamic(() => import('./sections/WebsiteCTA'), {
  loading: () => null,
});
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setContentLoaded(true);
        setTimeout(() => setLoading(false), 300);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>      {/* Loader Overlay */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500"
          style={{
            opacity: loading ? 1 : 0,
            pointerEvents: loading ? 'auto' : 'none',
          }}
          aria-label="Loading content"
          role="status"
        >
          <Loader />
        </div>
      )}

      {/* Main Content */}
      <main
        className={`relative transition-opacity duration-700 ${
          contentLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ minHeight: '100vh' }}
      >
        {/* Fixed Background Gradient */}
        <div
          className="fixed inset-0 -z-10 bg-gradient-to-br from-black from-50% to-orange-500"
          aria-hidden="true"
        />

        {/* Page Sections */}
        <Hero />
        <WhyNeedThis/>
        <ServicesSection/>
        <Portfolio/>
        <WebsiteCTA/>
        
      </main>
    </>
  );
};

export default Page;