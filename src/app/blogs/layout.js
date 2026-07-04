export const metadata = {
  title: 'Blog | Insights on AI, Marketing, Business & Technology – Digital Lab',
  description:
    'Articles and insights on AI, digital marketing, business growth, finance, and automation from the Digital Lab team.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/blogs',
    title: 'Blog | Insights on AI, Marketing, Business & Technology – Digital Lab',
    description:
      'Articles and insights on AI, digital marketing, business growth, finance, and automation from the Digital Lab team.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Insights on AI, Marketing, Business & Technology – Digital Lab',
    description:
      'Articles and insights on AI, digital marketing, business growth, finance, and automation from the Digital Lab team.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/blogs',
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
