'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loader from '@/components/Loader';

// Dynamic imports with loading states for better code splitting
const Hero = dynamic(() => import('./home/components/Hero'), {
  loading: () => null,
});
const About = dynamic(() => import('./home/components/About'), {
  loading: () => null,
});
const Services = dynamic(() => import('./home/components/Services'), {
  loading: () => null,
});
const WhyUs = dynamic(() => import('./home/components/WhyUs'), {
  loading: () => null,
});
const Methods = dynamic(() => import('./home/components/Methods'), {
  loading: () => null,
});
const Stats = dynamic(() => import('./home/components/Stats'), {
  loading: () => null,
});
const Testimonials = dynamic(() => import('./home/components/Testimonials'), {
  loading: () => null,
});
const AnimatedCTA = dynamic(() => import('./home/components/AnimatedCTA'), {
  loading: () => null,
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Track when all resources are loaded
    const handleLoad = () => {
      // Give a small delay to ensure all components are mounted
      setTimeout(() => {
        setContentLoaded(true);
        // Add smooth transition before hiding loader
        setTimeout(() => setLoading(false), 300);
      }, 500);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Wait for all resources (images, fonts, etc.) to load
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    // Preload fonts and critical assets here if needed
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Digital Marketing Agency | Expert SEO, PPC & Social Media Services</title>
        <meta 
          name="description" 
          content="Leading digital marketing agency specializing in SEO, PPC, social media marketing, and content strategy. Drive growth with data-driven marketing solutions tailored for your business." 
        />
        <meta name="google-site-verification" content="y11QrZyULvbz1jlhbxTyx6ZOjkXTjbLR47GHCklMfV8" />
        <meta 
          name="keywords" 
          content="digital marketing agency, SEO services, PPC management, social media marketing, content marketing, online marketing, digital strategy, marketing consultation, brand development, lead generation" 
        />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Marketing Agency | Expert Marketing Services" />
        <meta 
          property="og:description" 
          content="Transform your online presence with our comprehensive digital marketing services. Get results-driven SEO, PPC, and social media solutions." 
        />        
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="author" content="Your Agency Name" />
        <link rel="canonical" href="https://digitallabservices.com" />
        
        {/* Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>

      {/* Loader Overlay */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
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

      {/* Main Content - Hidden until loaded */}
      <main
        className={`transition-opacity duration-700 ${
          contentLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ minHeight: '100vh' }}
      >
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Methods />
        <Stats />
        <Testimonials />
        <AnimatedCTA />
      </main>
    </>
  );
}