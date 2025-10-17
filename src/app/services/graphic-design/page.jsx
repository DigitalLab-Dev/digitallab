'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const Hero = dynamic(() => import('./components/Hero'), {
  loading: () => null,
});
const DesignMattersComponent = dynamic(
  () => import('./components/WhyItMatters'),
  {
    loading: () => null,
  }
);
const Gallery = dynamic(() => import('./components/Gallery'), {
  loading: () => null,
});
const CTASection = dynamic(() => import('./components/CTASection'), {
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

      <main
        className={`relative transition-opacity duration-700 ${
          contentLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ minHeight: '100vh' }}
      >
        {/* Background */}
        <div className="fixed inset-0 -z-5 ">
          {/* Glow bulb in top-left */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-500 blur-[250px] opacity-40" />
          {/* Inner stronger glow */}
          <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-orange-400 blur-[120px] opacity-60" />
        </div>

        <Hero />
        <DesignMattersComponent />
        <Gallery />
        <CTASection />
      </main>
    </>
  );
};

export default Page;
