

'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const Hero = dynamic(() => import('./components/Hero'), {
  loading: () => null,
});
const VideoSection = dynamic(() => import('./components/VideoSection'), {
  loading: () => null,
});
const Para = dynamic(() => import('./components/Para'), {
  loading: () => null,
});
const Mission = dynamic(() => import('./components/Mission'), {
  loading: () => null,
});
const Leadership = dynamic(() => import('./components/Leadership'), {
  loading: () => null,
});
const Team = dynamic(() => import('./components/Team'), {
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
      <Head>
        {/* SEO Meta Tags */}
        <title>About Us | Digital Lab - Your Digital Marketing Partner</title>
        <meta
          name="description"
          content="Discover Digital Lab's story, mission, and the passionate team behind innovative digital marketing solutions. Learn how we transform businesses through creative strategies and cutting-edge technology."
        />
        <meta
          name="keywords"
          content="about digital lab, digital marketing team, marketing agency story, our mission, company values, marketing experts, agency leadership, creative team"
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Digital Lab | Our Story & Mission" />
        <meta
          property="og:description"
          content="Meet the team behind Digital Lab. Discover our mission to transform businesses through innovative digital marketing strategies."
        />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:image" content="https://yourwebsite.com/about-og-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Digital Lab | Our Story & Mission" />
        <meta
          name="twitter:description"
          content="Meet the team behind Digital Lab and discover our mission."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/about-twitter-image.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Head>

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
        <Hero />
        <VideoSection />
        <Para />
        <Mission />
        <Leadership />
        <Team />
      </main>
    </>
  );
};

export default Page;