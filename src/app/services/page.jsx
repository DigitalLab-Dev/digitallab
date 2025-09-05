'use client';

import { Loader } from 'lucide-react';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import ServicesGrid from './components/ServicesGrid';
import StatsSection from './components/StatsSection';
import { useEffect, useState } from 'react';

// Main Page Component
export default function ServicesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="bg-black min-h-screen">
      {/* SEO Meta Tags would go in Head component in actual Next.js */}
      <HeroSection />
      <ServicesGrid />



      <CTASection />
    </main>
  );
}
