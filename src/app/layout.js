import { Poppins } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footor from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CanonicalTag from '@/components/CanonicalTag';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  metadataBase: new URL('https://www.digitallabservices.com'),
  title: 'DigitalLab',
  description: 'DigitalLab - A service providing agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Italican.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FP5LSNLNBS"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FP5LSNLNBS');
          `}
        </Script>
        <CanonicalTag />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footor />
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  );
}
