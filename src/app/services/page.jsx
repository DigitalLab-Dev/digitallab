'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Marketing Services',
  provider: {
    '@type': 'Organization',
    name: 'Digital Lab',
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Content Marketing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing',
        },
      },
    ],
  },
};

// Dynamic imports for better code splitting and performance
const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => null,
});

const ServicesGrid = dynamic(() => import('./components/ServicesGrid'), {
  loading: () => null,
});

const CTASection = dynamic(() => import('./components/CTASection'), {
  loading: () => null,
});

// Main Services Page Component
export default function ServicesPage() {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Wait for DOM to be ready
      setTimeout(() => {
        setContentLoaded(true);
        // Smooth fade out of loader
        setTimeout(() => setLoading(false), 300);
      }, 500);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Loader Overlay with Fade Animation */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500"
          style={{
            opacity: loading ? 1 : 0,
            pointerEvents: loading ? 'auto' : 'none',
          }}
          aria-label="Loading services content"
          role="status"
          aria-live="polite"
        >
          <Loader />
        </div>
      )}

      {/* Main Content with Fade-in Animation */}
      <main
        className={`relative transition-opacity duration-700 ${contentLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ minHeight: '100vh' }}
      >
        {/* Fixed Background - Black base */}
        <div
          className="fixed inset-0 -z-10 bg-black"
          aria-hidden="true"
        >
          {/* Gradient overlay for visual interest */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-500/10" />

          {/* Animated background effects */}
          <div className="absolute inset-0 opacity-30">
            {/* Radial gradients for depth */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '8s' }}
            />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '10s', animationDelay: '2s' }}
            />
          </div>
        </div>

        {/* Page Sections - Dynamically Loaded */}
        <HeroSection />
        <ServicesGrid />
        <CTASection />

        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
      </main>
    </>
  );
}