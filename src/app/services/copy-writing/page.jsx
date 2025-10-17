// import CopywritingServices from './sections/CopywritingServices';
// import CTASection from './sections/CTASection';
// import CopywritingHero from './sections/Hero';
// import ProcessTimeline from './sections/ProcessTimeline';
// import WhyCopyMatters from './sections/WhyItMatters';

// export default function CopyWriting() {
//   return (
//     <main>
//       <CopywritingHero />
//       <WhyCopyMatters />
//       <CopywritingServices/>
//       <ProcessTimeline/>
//       <CTASection/>
//     </main>
//   );
// }




'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const CopywritingHero = dynamic(() => import('./sections/Hero'), {
  loading: () => null,
});
const WhyCopyMatters = dynamic(() => import('./sections/WhyItMatters'), {
  loading: () => null,
});
const CopywritingServices = dynamic(() => import('./sections/CopywritingServices'), {
  loading: () => null,
});
const ProcessTimeline = dynamic(() => import('./sections/ProcessTimeline'), {
  loading: () => null,
});
const CTASection = dynamic(() => import('./sections/CTASection'), {
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
        <CopywritingHero />
        <WhyCopyMatters />
        <CopywritingServices />
        <ProcessTimeline />
        <CTASection />
      </main>
    </>
  );
};

export default Page;