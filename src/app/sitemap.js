import { blogApi } from '@/utils/blogApi';

export default async function sitemap() {
  const baseUrl = 'https://www.digitallabservices.com';

  // Static routes
  const routes = [
    '',
    '/about',
    '/blogs',
    '/clients',
    '/contact',
    '/privacy',
    '/services',
    '/services/ads-management',
    '/services/copy-writing',
    '/services/graphic-design',
    '/services/seo',
    '/services/social-media-management',
    '/services/video-editing',
    '/services/web-development',
    '/terms',
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
