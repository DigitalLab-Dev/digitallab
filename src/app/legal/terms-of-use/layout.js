export const metadata = {
  title: 'Terms of Use | Digital Lab',
  description:
    'Rules governing visitor use of the Digital Lab website, including permitted and prohibited activities, intellectual property, and website availability.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal/terms-of-use',
    title: 'Terms of Use | Digital Lab',
    description:
      'Rules governing visitor use of the Digital Lab website, including permitted and prohibited activities, intellectual property, and website availability.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Digital Lab',
    description:
      'Rules governing visitor use of the Digital Lab website, including permitted and prohibited activities, intellectual property, and website availability.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal/terms-of-use',
  },
};

export default function TermsOfUseLayout({ children }) {
  return children;
}
