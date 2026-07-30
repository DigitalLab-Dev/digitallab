// Shared between /llms.txt and /llms-full.txt - these sections change
// only on code deploys, unlike blog posts, so they're plain data rather
// than fetched at request time.
export const LEGAL_PAGES = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description:
      'How Digital Lab collects, uses, and protects your personal information, including data security, cookies, third-party sharing, and your privacy rights.',
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    description:
      "The terms governing Digital Lab's paid digital services and SaaS products, covering service scope, SaaS credits, payment, intellectual property, and liability.",
  },
  {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    description:
      'Rules governing visitor use of the Digital Lab website, including permitted and prohibited activities, intellectual property, and website availability.',
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    description:
      "General terms and conditions for Digital Lab's digital services and SaaS products, covering service engagement, billing, client responsibilities, and cancellation.",
  },
  {
    slug: 'refund-policy',
    title: 'Refund Policy',
    description:
      "Digital Lab's refund policy, including 100% refunds on unused SaaS credits, service-specific refund eligibility, and how to request a refund.",
  },
  {
    slug: 'return-policy',
    title: 'Return Policy',
    description:
      "How returns are handled for Digital Lab's digital services and SaaS products, since traditional physical returns do not apply to intangible deliverables.",
  },
  {
    slug: 'exchange-policy',
    title: 'Exchange Policy',
    description:
      "Digital Lab's policy on digital product exchanges, including why SaaS products are non-exchangeable and the alternatives available instead.",
  },
  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    description:
      "Important disclaimers regarding Digital Lab's services, including no guarantee of results, testimonials, external links, and limitation of liability.",
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    description:
      'How Digital Lab uses cookies and tracking technologies, including essential, performance, functional, and marketing cookies, and how to manage your preferences.',
  },
  {
    slug: 'data-sharing',
    title: 'Data Sharing Policy',
    description:
      'When and how Digital Lab shares your data with service providers and partners, legal and regulatory bodies, and international transfers, plus what we never share.',
  },
];

export const PRODUCTS = [
  {
    slug: 'restcart',
    name: 'RestCart',
    tagline: 'The All-in-One Restaurant Operating System',
    description:
      'Replace your entire front-of-house staff with one smart system. QR menus, order management, POS, inventory, taxes, and real-time KPIs, all automated.',
  },
];
