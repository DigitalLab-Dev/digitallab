export const metadata = {
  title: 'Our Clients | Digital Lab Case Studies & Success Stories',
  description:
    'See the brands Digital Lab has partnered with and the results delivered across web development, marketing, and design projects.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/clients',
    title: 'Our Clients | Digital Lab Case Studies & Success Stories',
    description:
      'See the brands Digital Lab has partnered with and the results delivered across web development, marketing, and design projects.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients | Digital Lab Case Studies & Success Stories',
    description:
      'See the brands Digital Lab has partnered with and the results delivered across web development, marketing, and design projects.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/clients',
  },
};

export default function ClientsLayout({ children }) {
  return children;
}
