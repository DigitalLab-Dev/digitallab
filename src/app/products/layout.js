export const metadata = {
  title: 'Digital Lab Products | In-House SaaS Solutions',
  description:
    "Explore Digital Lab's own SaaS products, including RestCart — a complete restaurant operating system built for modern food businesses.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/products',
    title: 'Digital Lab Products | In-House SaaS Solutions',
    description:
      "Explore Digital Lab's own SaaS products, including RestCart — a complete restaurant operating system built for modern food businesses.",
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Lab Products | In-House SaaS Solutions',
    description:
      "Explore Digital Lab's own SaaS products, including RestCart — a complete restaurant operating system built for modern food businesses.",
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/products',
  },
};

export default function ProductsLayout({ children }) {
  return children;
}
