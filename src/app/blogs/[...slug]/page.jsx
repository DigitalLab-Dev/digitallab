import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogImageGallery from '../components/BlogImageGallery';
import BlogFAQ from '../components/BlogFAQ';
import MarkdownRenderer from '@/utils/MarkdownRenderer';
import { blogApi } from '@/utils/blogApi';
import { organizationSchema, organizationRef } from '@/utils/schema/organization';

const SITE_URL = 'https://www.digitallabservices.com';

// Revalidate a rendered post's cached HTML periodically (ISR) so edits
// made in the CMS show up without a full redeploy.
export const revalidate = 3600;

// Template-level internal linking: rendered around every post based on its
// category, not stored in the DB content field, so it applies to all
// existing and future posts automatically.
const SERVICES = [
  {
    slug: 'web-development',
    name: 'Web Development',
    description: 'Custom websites and web apps built for growth.',
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    description: 'Logos and branding that make your business memorable.',
  },
  {
    slug: 'video-editing',
    name: 'Video Editing',
    description: 'Cinematic video production that captivates audiences.',
  },
  {
    slug: 'copy-writing',
    name: 'Copywriting',
    description: 'Persuasive copy that turns visitors into customers.',
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    description: 'Social strategy and content that builds real engagement.',
  },
  {
    slug: 'ads-management',
    name: 'Ads Management',
    description: 'Google and Meta ad campaigns that convert.',
  },
];

const CATEGORY_SERVICE_MAP = {
  Business: ['web-development', 'ads-management'],
  Marketing: ['social-media-management', 'ads-management', 'copy-writing'],
  'Artificial Intelligence': ['web-development', 'ads-management'],
};

function getRelatedServices(category) {
  const slugs = CATEGORY_SERVICE_MAP[category];
  if (!slugs) {
    // Unmapped category (e.g. a future Technology/Finance/Data Automation
    // post) - fall back to showing all services rather than none.
    return SERVICES;
  }
  return slugs
    .map((slug) => SERVICES.find((service) => service.slug === slug))
    .filter(Boolean);
}

function resolveSlug(slug) {
  return Array.isArray(slug) ? slug[0] : slug;
}

async function getBlog(slug) {
  try {
    return await blogApi.getBlogById(slug);
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const { blogs } = await blogApi.getBlogs({ limit: 1000 });
    if (!Array.isArray(blogs)) return [];
    return blogs
      .filter((blog) => blog.slug)
      .map((blog) => ({ slug: [blog.slug] }));
  } catch (error) {
    console.warn('⚠️ generateStaticParams: failed to fetch blogs, falling back to on-demand rendering.', error.message);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(resolveSlug(slug));

  if (!blog) {
    return {
      title: 'Blog Post Not Found | Digital Lab',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const title = `${blog.title} | Digital Lab Blog`;
  const description = blog.excerpt || blog.title;
  const image = blog.images?.[0]?.url;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: 'DigitalLab Services',
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

async function getOtherPosts(currentSlug) {
  try {
    const { blogs } = await blogApi.getBlogs({ limit: 10 });
    if (!Array.isArray(blogs)) return [];
    return blogs.filter((b) => b.slug !== currentSlug).slice(0, 3);
  } catch (error) {
    return [];
  }
}

const IndividualBlogPage = async ({ params }) => {
  const { slug } = await params;
  const blog = await getBlog(resolveSlug(slug));

  if (!blog) {
    notFound();
  }

  const relatedServices = getRelatedServices(blog.category);
  const otherPosts = await getOtherPosts(blog.slug);

  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: organizationRef,
    publisher: organizationRef,
    ...(blog.images?.length && {
      image: blog.images.map((img) => img.url),
    }),
  };

  const hasFaqs = Array.isArray(blog.faqs) && blog.faqs.length > 0;
  const faqSchema = hasFaqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: blog.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {hasFaqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Back Button */}
      <Link
        href="/blogs"
        className="flex items-center gap-2 mb-8 text-slate-500 hover:text-slate-400 transition-colors group w-fit"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blogs
      </Link>

      {/* Blog Header */}
      <header className="mb-8">
        {/* Category Badge */}
        {blog.category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-orange-700 bg-orange-200 rounded-full">
              {blog.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          className="text-[7vw] text-center lg:text-left md:text-[4.25vw] font-extrabold leading-tight
            bg-gradient-to-r from-neutral-300 via-orange-500 to-orange-700
            bg-clip-text text-transparent
            "
        >
          {blog.title}
        </h1>

        {/* Subtitle */}
        {blog.excerpt && (
          <p className="text-xl lg:text-2xl text-slate-600 font-medium  leading-relaxed mb-6">
            {blog.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-slate-300 mt-2 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Published {formatDate(blog.createdAt)}</span>
          </div>

          {blog.images && blog.images.length > 0 && (
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>
                {blog.images.length} image{blog.images.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Image Gallery */}
      {blog.images && blog.images.length > 0 && (
        <section className="mb-12">
          <BlogImageGallery images={blog.images} title={blog.title} />
        </section>
      )}

      {/* Blog Content */}
      <section className="mb-12 text-neutral-300 reset-tw">
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={blog.content} />
        </div>
      </section>

      {/* FAQ */}
      {hasFaqs && (
        <section className="mb-12" aria-labelledby="blog-faq-heading">
          <h3
            id="blog-faq-heading"
            className="text-2xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </h3>
          <BlogFAQ faqs={blog.faqs} />
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="mb-12" aria-labelledby="related-services-heading">
          <h3
            id="related-services-heading"
            className="text-2xl font-bold text-white mb-6"
          >
            Related Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/50 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="block font-semibold text-white mb-1">
                  {service.name}
                </span>
                <span className="block text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* You Might Also Like */}
      {otherPosts.length > 0 && (
        <section className="mb-12" aria-labelledby="related-posts-heading">
          <h3
            id="related-posts-heading"
            className="text-2xl font-bold text-white mb-6"
          >
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/50 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="block font-semibold text-white mb-1 line-clamp-2">
                  {post.title}
                </span>
                {post.excerpt && (
                  <span className="block text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-slate-500">
            <p>Article published on {formatDate(blog.createdAt)}</p>
            {blog.category && (
              <p>
                Filed under:{' '}
                <span className="font-medium text-white">
                  {blog.category}
                </span>
                {' · '}
                <Link
                  href="/about"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  About Digital Lab
                </Link>
              </p>
            )}
          </div>

          <Link
            href="/blogs"
            className="self-start sm:self-auto px-6 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 cursor-pointer font-medium rounded-lg transition-colors w-fit"
          >
            ← More Articles
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default IndividualBlogPage;
