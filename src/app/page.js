'use client';
import { AnimatePresence } from 'framer-motion';
import About from './home/components/About';
import Hero from './home/components/Hero';
import Services from './home/components/Services';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';
import WhyUs from './home/components/WhyUs';
import Stats from './home/components/Stats';

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Better loading detection - fires when DOM is ready, not waiting for all resources
    const handleDOMReady = () => {
      // Add a minimum display time for better UX
      setTimeout(() => setLoading(false), 1000);
    };

    if (
      document.readyState === 'interactive' ||
      document.readyState === 'complete'
    ) {
      handleDOMReady();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMReady);
      return () =>
        document.removeEventListener('DOMContentLoaded', handleDOMReady);
    }
  }, []);
  return (
    <>
      {loading && (
        <div
          className={`transition-opacity duration-500 ${
            loading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Loader />
        </div>
      )}

      {!loading && (
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Stats />
        </main>
      )}
    </>
  );
}
