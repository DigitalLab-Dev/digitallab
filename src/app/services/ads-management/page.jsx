




'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Loader from '@/components/Loader';
import { organizationSchema, organizationRef } from '@/utils/schema/organization';

const adsManagementServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management Services',
  serviceType: 'Ads Management',
  provider: organizationRef,
  description:
    'Google Ads management services that turn clicks into customers. We also manage Facebook and Instagram campaigns with proven ROI and continuous optimization.',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://www.digitallabservices.com/services/ads-management',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.digitallabservices.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.digitallabservices.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Ads Management',
      item: 'https://www.digitallabservices.com/services/ads-management',
    },
  ],
};

// Dynamic imports for better code splitting
const AdsHero = dynamic(() => import('./sections/AdsHero'), {
  loading: () => null,
});
const PainPointSection = dynamic(() => import('./sections/PainPointSection'), {
  loading: () => null,
});
const ServicesSection = dynamic(() => import('./sections/AdsServices'), {
  loading: () => null,
});
const AdsManagementPortfolio = dynamic(() => import('./sections/AdsManagementPortfolio'), {
  loading: () => null,
});
const FAQSection = dynamic(() => import('./sections/FAQSection'), {
  loading: () => null,
});
const AdsManagementCta = dynamic(() => import('./sections/AdsManagementCta'), {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(adsManagementServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

        <AdsHero />
        <PainPointSection />
        <ServicesSection />
        <AdsManagementPortfolio />
        <FAQSection />
        <AdsManagementCta />

      </main>
    </>
  );
};

export default Page;
