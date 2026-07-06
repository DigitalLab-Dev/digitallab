import BlogsClient from './components/BlogsClient';
import { blogApi, transformBlogData } from '@/utils/blogApi';

// Revalidate the server-rendered first page periodically (ISR) so new
// posts show up without a full redeploy, while still SSR-ing real content.
export const revalidate = 3600;

const DEFAULT_PAGINATION = {
  page: 1,
  limit: 6,
  totalBlogs: 0,
  totalPages: 1,
  hasNext: false,
  hasPrev: false,
};

export default async function Blogs() {
  let initialBlogs = [];
  let initialPagination = DEFAULT_PAGINATION;

  try {
    const response = await blogApi.getBlogs({ page: 1, limit: 6 });
    initialBlogs = response.blogs.map(transformBlogData);
    initialPagination = response.pagination;
  } catch (error) {
    console.warn('⚠️ Failed to fetch initial blogs for SSR:', error.message);
  }

  return (
    <BlogsClient initialBlogs={initialBlogs} initialPagination={initialPagination} />
  );
}
