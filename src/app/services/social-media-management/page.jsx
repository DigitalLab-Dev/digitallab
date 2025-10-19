// import CaseStudies from './sections/CaseStudies';
// import FinalCTA from './sections/FinalCta';
// import PhilosophySection from './sections/PhilosphySection';
// import HeroSection from './sections/SocialMediaHero';

// export default function SocialMediaManagement() {
// return(
//   <main>
//     <HeroSection />;
//     <PhilosophySection/>
//     <CaseStudies/>
//     <FinalCTA/>
//   </main>)
//   ;
// }




'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const HeroSection = dynamic(() => import('./sections/SocialMediaHero'), {
  loading: () => null,
});
const PhilosophySection = dynamic(() => import('./sections/PhilosphySection'), {
  loading: () => null,
});
const CaseStudies = dynamic(() => import('./sections/CaseStudies'), {
  loading: () => null,
});
const FinalCta = dynamic(() => import('./sections/FinalCta'), {
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
    <>


      {/* Loader Overlay */}
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
        <HeroSection />
        <PhilosophySection />
        <CaseStudies />
        <FinalCta />

      </main>
    </>
  );
};

export default Page;