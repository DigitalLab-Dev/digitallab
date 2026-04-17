'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

const ProductsHero = dynamic(() => import('./components/ProductsHero'), { loading: () => null });
const ProductsGrid = dynamic(() => import('./components/ProductsGrid'), { loading: () => null });
const ProductsCTA = dynamic(() => import('./components/ProductsCTA'), { loading: () => null });

export default function ProductsPage() {
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
          style={{ opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none' }}
        >
          <Loader />
        </div>
      )}

      <main
        className={`relative transition-opacity duration-700 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '100vh' }}
      >
        <div className="fixed inset-0 -z-10 bg-black" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-500/10" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          </div>
        </div>

        <ProductsHero />
        <ProductsGrid />
        <ProductsCTA />
      </main>
    </>
  );
}
