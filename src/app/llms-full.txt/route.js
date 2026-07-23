import { blogApi } from '@/utils/blogApi';
import { SERVICES } from '@/data/services';

const SITE_URL = 'https://www.digitallabservices.com';

// Regenerate periodically so new/edited blog posts show up without a full
// redeploy, while keeping the batched `full=true` blog fetch (and its
// underlying DB load) bounded to roughly once an hour rather than once
// per crawler request.
export const revalidate = 3600;

const LEGAL_PAGES = [
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

const PRODUCTS = [
  {
    slug: 'restcart',
    name: 'RestCart',
    tagline: 'The All-in-One Restaurant Operating System',
    description:
      'Replace your entire front-of-house staff with one smart system. QR menus, order management, POS, inventory, taxes, and real-time KPIs, all automated.',
  },
];

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toISOString().slice(0, 10);
}

function renderFaqs(faqs) {
  if (!faqs || faqs.length === 0) return '';
  const items = faqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join('\n\n');
  return `\nFAQs:\n\n${items}\n`;
}

async function getBlogSection() {
  try {
    const { blogs } = await blogApi.getBlogs({ limit: 1000, full: true });
    if (!blogs || blogs.length === 0) {
      return '(No blog posts published yet.)';
    }
    return blogs
      .map((blog) => {
        const url = `${SITE_URL}/blogs/${blog.slug}`;
        return [
          `### ${blog.title}`,
          `URL: ${url}`,
          `Category: ${blog.category} | Published: ${formatDate(blog.createdAt)} | Updated: ${formatDate(blog.updatedAt)}`,
          '',
          blog.excerpt,
          '',
          blog.content || '',
          renderFaqs(blog.faqs),
        ].join('\n');
      })
      .join('\n\n---\n\n');
  } catch (error) {
    console.warn('⚠️ llms-full.txt: failed to fetch blog posts.', error.message);
    return '(Blog posts unavailable - failed to reach the blog API.)';
  }
}

export async function GET() {
  const blogSection = await getBlogSection();

  const lines = [
    '# Digital Lab',
    '',
    '> Digital Lab is a full-service digital agency based in Lahore, Pakistan, providing web development, graphic design, video editing, copywriting, social media management, and ads management, alongside in-house SaaS products.',
    '',
    `Website: ${SITE_URL}`,
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Services',
    '',
    ...SERVICES.map(
      (service) =>
        `- [${service.name}](${SITE_URL}/services/${service.slug}): ${service.description}`
    ),
    '',
    '## Products',
    '',
    ...PRODUCTS.map(
      (product) =>
        `- [${product.name}](${SITE_URL}/products/${product.slug}): ${product.tagline}. ${product.description}`
    ),
    '',
    '## Legal',
    '',
    ...LEGAL_PAGES.map(
      (page) => `- [${page.title}](${SITE_URL}/legal/${page.slug}): ${page.description}`
    ),
    '',
    '## Blog Posts',
    '',
    'Full content for every published post follows, so this file stays current as posts are added or edited.',
    '',
    blogSection,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
