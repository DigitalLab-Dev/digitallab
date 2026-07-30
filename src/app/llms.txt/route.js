import { blogApi } from '@/utils/blogApi';
import { SERVICES } from '@/data/services';
import { LEGAL_PAGES, PRODUCTS } from '@/data/llmsStaticSections';

const SITE_URL = 'https://www.digitallabservices.com';

// Same reasoning as llms-full.txt: without this, blog posts here would
// only ever reflect whatever existed at the last deploy.
export const revalidate = 3600;

async function getBlogLinks() {
  try {
    const { blogs } = await blogApi.getBlogs({ limit: 1000 });
    if (!blogs || blogs.length === 0) {
      return ['(No blog posts published yet.)'];
    }
    return blogs.map(
      (blog) => `- [${blog.title}](${SITE_URL}/blogs/${blog.slug}): ${blog.excerpt}`
    );
  } catch (error) {
    console.warn('⚠️ llms.txt: failed to fetch blog posts.', error.message);
    return ['(Blog posts unavailable - failed to reach the blog API.)'];
  }
}

export async function GET() {
  const blogLinks = await getBlogLinks();

  const lines = [
    '# Digital Lab',
    '',
    '> Digital Lab is a digital agency offering web development, graphic design, video editing, copywriting, social media management, and paid ads management, alongside its own in-house SaaS products for businesses that want an integrated team rather than separate vendors for each service.',
    '',
    'Digital Lab works with local and international businesses, combining marketing execution (content, ads, social) with technical delivery (custom web development, software products) under one team. The company also builds and sells its own software, starting with RestCart, a restaurant operations platform.',
    '',
    '## Services',
    '',
    ...SERVICES.map(
      (service) => `- [${service.name}](${SITE_URL}/services/${service.slug}): ${service.description}`
    ),
    `- [All Services](${SITE_URL}/services): Overview of Digital Lab's full service range.`,
    '',
    '## Products',
    '',
    ...PRODUCTS.map(
      (product) => `- [${product.name}](${SITE_URL}/products/${product.slug}): ${product.tagline}. ${product.description}`
    ),
    `- [Products Overview](${SITE_URL}/products): Digital Lab's in-house SaaS products.`,
    '',
    '## Company',
    '',
    `- [About](${SITE_URL}/about): Digital Lab's story, mission, and leadership team.`,
    `- [Clients](${SITE_URL}/clients): Brands Digital Lab has partnered with and case studies of results delivered.`,
    `- [Contact](${SITE_URL}/contact): Get a free consultation or quote for a project.`,
    '',
    '## Blog',
    '',
    ...blogLinks,
    `- [Blog Index](${SITE_URL}/blogs): All articles on AI, marketing, business growth, and automation.`,
    '',
    '## Optional',
    '',
    `- [Sitemap](${SITE_URL}/sitemap.xml): Full list of indexed pages.`,
    ...LEGAL_PAGES.slice(0, 2).map((page) => `- [${page.title}](${SITE_URL}/legal/${page.slug})`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
