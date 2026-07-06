export const metadata = {
  title: 'Contact Digital Lab | Get a Free Quote',
  description:
    'Ready to start your project? Contact Digital Lab for a free consultation on SEO, web development, design, or digital marketing services.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/contact',
    title: 'Contact Digital Lab | Get a Free Quote',
    description:
      'Ready to start your project? Contact Digital Lab for a free consultation on SEO, web development, design, or digital marketing services.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Digital Lab | Get a Free Quote',
    description:
      'Ready to start your project? Contact Digital Lab for a free consultation on SEO, web development, design, or digital marketing services.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/contact',
  },
};

export default function ContactLayout({ children }) {
  return children;
}
