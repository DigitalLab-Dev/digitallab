'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';
import { LanguageProvider } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const RestCartHero        = dynamic(() => import('./sections/RestCartHero'),        { loading: () => null });
const RestCartPain        = dynamic(() => import('./sections/RestCartPain'),        { loading: () => null });
const RestCartFeatures    = dynamic(() => import('./sections/RestCartFeatures'),    { loading: () => null });
const RestCartMath        = dynamic(() => import('./sections/RestCartMath'),        { loading: () => null });
const RestCartPricing     = dynamic(() => import('./sections/RestCartPricing'),     { loading: () => null });
const RestCartHowItWorks  = dynamic(() => import('./sections/RestCartHowItWorks'),  { loading: () => null });
const RestCartTestimonials= dynamic(() => import('./sections/RestCartTestimonials'),{ loading: () => null });
const RestCartFAQ         = dynamic(() => import('./sections/RestCartFAQ'),         { loading: () => null });
const RestCartFinalCTA    = dynamic(() => import('./sections/RestCartFinalCTA'),    { loading: () => null });

export default function RestCartPage() {
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
    <LanguageProvider>
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500"
          style={{ opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none' }}
        >
          <Loader />
        </div>
      )}

      <main
        className={`relative transition-opacity duration-700 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '100vh' }}
      >
        {/* Deep dark background */}
        <div className="fixed inset-0 -z-10 bg-black" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-red-950/20" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
          </div>
        </div>

        <RestCartHero />
        <RestCartPain />
        <RestCartFeatures />
        <RestCartMath />
        <RestCartPricing />
        <RestCartHowItWorks />
        <RestCartTestimonials />
        <RestCartFAQ />
        <RestCartFinalCTA />

        {/* Floating language switcher */}
        <LanguageSwitcher />
      </main>
    </LanguageProvider>
  );
}
