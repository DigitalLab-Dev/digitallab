export const metadata = {
  title: 'Legal Center | Digital Lab',
  description:
    "Digital Lab's legal center - the central index linking to our Privacy Policy, Terms of Service, Refund Policy, and 7 other policies governing our digital services and SaaS products.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal',
    title: 'Legal Center | Digital Lab',
    description:
      "Digital Lab's legal center - the central index linking to our Privacy Policy, Terms of Service, Refund Policy, and 7 other policies governing our digital services and SaaS products.",
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Center | Digital Lab',
    description:
      "Digital Lab's legal center - the central index linking to our Privacy Policy, Terms of Service, Refund Policy, and 7 other policies governing our digital services and SaaS products.",
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal',
  },
};

export default function LegalLayout({ children }) {
  return children;
}
