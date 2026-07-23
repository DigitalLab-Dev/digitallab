export const metadata = {
  title: 'Cookie Policy | Digital Lab',
  description:
    'How Digital Lab uses cookies and tracking technologies, including essential, performance, functional, and marketing cookies, and how to manage your preferences.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal/cookie-policy',
    title: 'Cookie Policy | Digital Lab',
    description:
      'How Digital Lab uses cookies and tracking technologies, including essential, performance, functional, and marketing cookies, and how to manage your preferences.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Digital Lab',
    description:
      'How Digital Lab uses cookies and tracking technologies, including essential, performance, functional, and marketing cookies, and how to manage your preferences.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal/cookie-policy',
  },
};

export default function CookiePolicyLayout({ children }) {
  return children;
}
