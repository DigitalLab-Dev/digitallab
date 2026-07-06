export const metadata = {
  title: 'Restaurant Management Software | RestCart',
  description:
    'RestCart is all-in-one restaurant management software with QR digital menus, order management, POS, inventory tracking, and automated tax handling.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/products/restcart',
    title: 'Restaurant Management Software | RestCart',
    description:
      'RestCart is all-in-one restaurant management software with QR digital menus, order management, POS, inventory tracking, and automated tax handling.',
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Management Software | RestCart',
    description:
      'RestCart is all-in-one restaurant management software with QR digital menus, order management, POS, inventory tracking, and automated tax handling.',
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/products/restcart',
  },
};

export default function RestCartLayout({ children }) {
  return children;
}
