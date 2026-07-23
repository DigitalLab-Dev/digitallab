export const metadata = {
  title: 'Privacy Policy | Digital Lab',
  description:
    'How Digital Lab collects, uses, and protects your personal information, including data security, cookies, third-party sharing, and your privacy rights.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal/privacy-policy',
    title: 'Privacy Policy | Digital Lab',
    description:
      'How Digital Lab collects, uses, and protects your personal information, including data security, cookies, third-party sharing, and your privacy rights.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Digital Lab',
    description:
      'How Digital Lab collects, uses, and protects your personal information, including data security, cookies, third-party sharing, and your privacy rights.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
