import { blogApi } from '@/utils/blogApi';
import { SERVICES } from '@/data/services';
import { LEGAL_PAGES, PRODUCTS } from '@/data/llmsStaticSections';

const SITE_URL = 'https://www.digitallabservices.com';

// Regenerate periodically so new/edited blog posts show up without a full
// redeploy, while keeping the batched `full=true` blog fetch (and its
// underlying DB load) bounded to roughly once an hour rather than once
// per crawler request.
export const revalidate = 3600;

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
