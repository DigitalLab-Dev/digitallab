import { blogApi } from '@/utils/blogApi';

// Without this, sitemap.js is generated once at build time and cached
// indefinitely at the edge - new/edited posts never show up until the
// next deploy. Matches the same revalidate window already used by the
// blog post template and the llms-full.txt route.
export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = 'https://www.digitallabservices.com';

  // Static routes
  const routes = [
    '',
    '/about',
    '/blogs',
    '/clients',
    '/contact',
    '/legal',
    '/legal/privacy-policy',
    '/legal/terms-of-service',
    '/legal/terms-of-use',
    '/legal/terms-and-conditions',
    '/legal/refund-policy',
    '/legal/return-policy',
    '/legal/disclaimer',
    '/legal/cookie-policy',
    '/legal/data-sharing',
    '/legal/exchange-policy',
    '/services',
    '/services/ads-management',
    '/services/copy-writing',
    '/services/graphic-design',
    '/services/social-media-management',
    '/services/video-editing',
    '/services/web-development',
    '/products',
    '/products/restcart',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  let blogRoutes = [];
  try {
    const { blogs } = await blogApi.getBlogs({ limit: 1000 });
    if (blogs && Array.isArray(blogs)) {
      blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug || blog._id}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.warn('⚠️ Warning: Failed to fetch blogs for sitemap. Generating sitemap with static pages only.', error.message);
    // Continue with static routes if blog fetch fails
  }

  return [...routes, ...blogRoutes];
}
