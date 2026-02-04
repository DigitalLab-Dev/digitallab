import Hero from './home/components/Hero';
import About from './home/components/About';
import Services from './home/components/Services';
import WhyUs from './home/components/WhyUs';
import Methods from './home/components/Methods';
import Stats from './home/components/Stats';
import Testimonials from './home/components/Testimonials';
import AnimatedCTA from './home/components/AnimatedCTA';

// Proper metadata export for Next.js App Router
export const metadata = {
  title: 'Digital Marketing Agency | Expert SEO, PPC & Social Media Services',
  description: 'Leading digital marketing agency specializing in SEO, PPC, social media marketing, and content strategy. Drive growth with data-driven marketing solutions tailored for your business.',
  keywords: 'digital marketing agency, SEO services, PPC management, social media marketing, content marketing, online marketing, digital strategy, marketing consultation, brand development, lead generation',
  authors: [{ name: 'DigitalLab' }],
  creator: 'DigitalLab',
  publisher: 'DigitalLab',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/',
    title: 'Digital Marketing Agency | Expert Marketing Services',
    description: 'Transform your online presence with our comprehensive digital marketing services. Get results-driven SEO, PPC, and social media solutions.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency | Expert Marketing Services',
    description: 'Transform your online presence with our comprehensive digital marketing services.',
  },
  verification: {
    google: 'y11QrZyULvbz1jlhbxTyx6ZOjkXTjbLR47GHCklMfV8',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/',
  },
};

// Server Component - no 'use client' needed
export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Methods />
      <Stats />
      <Testimonials />
      <AnimatedCTA />
    </main>
  );
}