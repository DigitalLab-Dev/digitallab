import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footor from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'DigitalLab',
  description: 'DigitalLab - A service providing agency',
  other: {
    'rel': 'preconnect',
    'href': 'https://www.youtube.com',
  },
  other: { // You'll need to find the right way to add multiple "other" tags
    'rel': 'preconnect',
    'href': 'https://img.youtube.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar />
        {children}
        <ScrollToTop/>
        <Footor />
       {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  );
}
