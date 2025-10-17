// import AdsHero from './sections/AdsHero';
// import AdsManagementCTA from './sections/AdsManagementCta';
// import AdsManagementPortfolio from './sections/AdsManagementPortfolio';
// import ServicesSection from './sections/AdsServices';
// import PainPointSection from './sections/PainPointSection';

// export default function AdsManagement() {
//   return (
//     <main>
//       <AdsHero />
//       <PainPointSection />
//       <ServicesSection/>
//       <AdsManagementPortfolio/>
//       <AdsManagementCTA/>
//     </main>
//   );
// }




'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const AdsHero = dynamic(() => import('./sections/AdsHero'), {
  loading: () => null,
});
const PainPointSection = dynamic(() => import('./sections/PainPointSection'), {
  loading: () => null,
});
const ServicesSection = dynamic(() => import('./sections/AdsServices'), {
  loading: () => null,
});
const AdsManagementPortfolio = dynamic(() => import('./sections/AdsManagementPortfolio'), {
  loading: () => null,
});
const AdsManagementCTA = dynamic(() => import('./sections/AdsManagementCTA'), {
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

        <AdsHero />
        <PainPointSection />
        <ServicesSection />
        <AdsManagementPortfolio />
        <AdsManagementCTA />

      </main>
    </>
  );
};

export default Page;
