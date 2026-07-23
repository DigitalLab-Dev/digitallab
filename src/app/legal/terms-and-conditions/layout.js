export const metadata = {
  title: 'Terms & Conditions | Digital Lab',
  description:
    "General terms and conditions for Digital Lab's digital services and SaaS products, covering service engagement, billing, client responsibilities, and cancellation.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal/terms-and-conditions',
    title: 'Terms & Conditions | Digital Lab',
    description:
      "General terms and conditions for Digital Lab's digital services and SaaS products, covering service engagement, billing, client responsibilities, and cancellation.",
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Digital Lab',
    description:
      "General terms and conditions for Digital Lab's digital services and SaaS products, covering service engagement, billing, client responsibilities, and cancellation.",
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal/terms-and-conditions',
  },
};

export default function TermsAndConditionsLayout({ children }) {
  return children;
}
