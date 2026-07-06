export const metadata = {
  title: 'Digital Marketing & Web Services | Digital Lab',
  description:
    "Explore Digital Lab's full range of services: SEO, web development, graphic design, video editing, copywriting, social media, and ads management.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/services',
    title: 'Digital Marketing & Web Services | Digital Lab',
    description:
      "Explore Digital Lab's full range of services: SEO, web development, graphic design, video editing, copywriting, social media, and ads management.",
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & Web Services | Digital Lab',
    description:
      "Explore Digital Lab's full range of services: SEO, web development, graphic design, video editing, copywriting, social media, and ads management.",
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/services',
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
