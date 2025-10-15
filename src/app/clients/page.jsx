'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

// Dynamic imports for better code splitting
const ClientsHeroSection = dynamic(() => import('./sections/ClientsHero'), {
  loading: () => null,
});
const LogoCloudSection = dynamic(() => import('./sections/LogoCloudSection'), {
  loading: () => null,
});
const CaseStudiesSection = dynamic(
  () => import('./sections/CaseStudiesSection'),
  {
    loading: () => null,
  }
);
const InfluencerShowcase = dynamic(
  () => import('./sections/InfluencerShowcase'),
  {
    loading: () => null,
  }
);
const TestimonialCarousel = dynamic(() => import('./sections/Testimonial'), {
  loading: () => null,
});
const CtaSectionAnimated = dynamic(() => import('./sections/ClientCta'), {
  loading: () => null,
});

export default function Clients() {
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
        <ClientsHeroSection />
        {/* Case Studies - Detailed Project Showcases */}
        <CaseStudiesSection />
        {/* Logo Cloud - Client Logos */}
        <LogoCloudSection />

        {/* Influencer Showcase - Featured Clients/Influencers */}
        <InfluencerShowcase />

        {/* Testimonials - Client Reviews */}
        <TestimonialCarousel />
        {/* Call to Action - Contact/Consultation */}
        <CtaSectionAnimated />
        
      </main>
    </>
  );
}
