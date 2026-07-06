'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
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
const TopRepresentators = dynamic(() => import('./components/TopRepresentators'), {
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

  // Hash scroll effect
  useEffect(() => {
    // Only run after content is loaded and loader is dismissed
    if (!loading && contentLoaded) {
      const hash = window.location.hash;

      if (hash) {
        // Remove the # from hash to get the id
        const elementId = hash.substring(1);

        // Wait a bit for all components to render
        setTimeout(() => {
          const element = document.getElementById(elementId);

          if (element) {
            // Smooth scroll to the element
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 100); // Small delay to ensure all content is rendered
      }
    }
  }, [loading, contentLoaded]);

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
        className={`relative transition-opacity duration-700 ${contentLoaded ? 'opacity-100' : 'opacity-0'
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
        <TopRepresentators />
        <Team />
      </main>
    </>
  );
};

export default Page;