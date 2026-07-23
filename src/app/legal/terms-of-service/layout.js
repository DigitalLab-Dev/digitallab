export const metadata = {
  title: 'Terms of Service | Digital Lab',
  description:
    "The terms governing Digital Lab's paid digital services and SaaS products, covering service scope, SaaS credits, payment, intellectual property, and liability.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal/terms-of-service',
    title: 'Terms of Service | Digital Lab',
    description:
      "The terms governing Digital Lab's paid digital services and SaaS products, covering service scope, SaaS credits, payment, intellectual property, and liability.",
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Digital Lab',
    description:
      "The terms governing Digital Lab's paid digital services and SaaS products, covering service scope, SaaS credits, payment, intellectual property, and liability.",
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal/terms-of-service',
  },
};

export default function TermsOfServiceLayout({ children }) {
  return children;
}
