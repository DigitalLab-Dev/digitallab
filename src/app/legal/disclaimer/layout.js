export const metadata = {
  title: 'Disclaimer | Digital Lab',
  description:
    "Important disclaimers regarding Digital Lab's services, including no guarantee of results, testimonials, external links, and limitation of liability.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal/disclaimer',
    title: 'Disclaimer | Digital Lab',
    description:
      "Important disclaimers regarding Digital Lab's services, including no guarantee of results, testimonials, external links, and limitation of liability.",
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer | Digital Lab',
    description:
      "Important disclaimers regarding Digital Lab's services, including no guarantee of results, testimonials, external links, and limitation of liability.",
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal/disclaimer',
  },
};

export default function DisclaimerLayout({ children }) {
  return children;
}
