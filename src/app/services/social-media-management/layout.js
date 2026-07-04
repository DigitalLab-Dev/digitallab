export const metadata = {
  title: 'Social Media Marketing Agency | Digital Lab',
  description:
    'A social media marketing agency that builds real engagement, not vanity metrics. Strategy, content, and community management tailored to your brand.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/services/social-media-management',
    title: 'Social Media Marketing Agency | Digital Lab',
    description:
      'A social media marketing agency that builds real engagement, not vanity metrics. Strategy, content, and community management tailored to your brand.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency | Digital Lab',
    description:
      'A social media marketing agency that builds real engagement, not vanity metrics. Strategy, content, and community management tailored to your brand.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/services/social-media-management',
  },
};

export default function SocialMediaManagementLayout({ children }) {
  return children;
}
