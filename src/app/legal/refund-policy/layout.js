export const metadata = {
  title: 'Refund Policy | Digital Lab',
  description:
    "Digital Lab's refund policy, including 100% refunds on unused SaaS credits, service-specific refund eligibility, and how to request a refund.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitallabservices.com/legal/refund-policy',
    title: 'Refund Policy | Digital Lab',
    description:
      "Digital Lab's refund policy, including 100% refunds on unused SaaS credits, service-specific refund eligibility, and how to request a refund.",
    siteName: 'DigitalLab Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | Digital Lab',
    description:
      "Digital Lab's refund policy, including 100% refunds on unused SaaS credits, service-specific refund eligibility, and how to request a refund.",
  },
  alternates: {
    canonical: 'https://www.digitallabservices.com/legal/refund-policy',
  },
};

export default function RefundPolicyLayout({ children }) {
  return children;
}
