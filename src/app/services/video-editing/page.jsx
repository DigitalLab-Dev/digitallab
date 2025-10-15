// import React from 'react'
// import VideoAgencyHero from './sections/Hero'
// import VideoServicesSection from './sections/VideoServicesSection'
// import ShowcasePortfolio from './sections/ShortForm'
// import LongFormShowcase from './sections/LongFormShowcase'

// const page = () => {
//   return (
//    <main>
//     <VideoAgencyHero/>
//     <VideoServicesSection/>
//     <ShowcasePortfolio/>
//     <LongFormShowcase/>
//    </main>
//   )
// }

// export default page

'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const VideoAgencyHero = dynamic(() => import('./sections/Hero'), {
  loading: () => null,
});
const VideoServicesSection = dynamic(
  () => import('./sections/VideoServicesSection'),
  {
    loading: () => null,
  }
);
const ShowcasePortfolio = dynamic(
  () => import('./sections/ShortForm'),
  {
    loading: () => null,
  }
);
const LongFormShowcase = dynamic(() => import('./sections/LongFormShowcase'), {
  loading: () => null,
});
export default function VideoPage() {
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
        {/* Hero Section */}
        <VideoAgencyHero />
        {/* Case Studies - Detailed Project Showcases */}
        <VideoServicesSection />
        {/* Logo Cloud - Client Logos */}
        <ShowcasePortfolio />

        {/* Influencer Showcase - Featured Clients/Influencers */}
        <LongFormShowcase />
      </main>
    </>
  );
}
