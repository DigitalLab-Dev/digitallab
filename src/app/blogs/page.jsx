'use client';

import { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import CategorySelector from './components/CategoryBar';
import BlogCard from './components/BlogCard';
import Navigation from './components/Navigation';
import BlogLoading from './components/BlogLanding';
import ErrorDisplay from '@/components/ErrorDisplay';
import { blogApi, transformBlogData } from '@/utils/blogApi';
import ShinyText from '@/components/ReactBit-Components/ShinyText';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    totalBlogs: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  });

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch blogs function
  const fetchBlogs = useCallback(
    async (params = {}) => {
      try {
        setLoading(true);
        setError(null);

        const response = await blogApi.getBlogs({
          page: params.page || pagination.page,
          limit: params.limit || pagination.limit,
          search: params.search || searchTerm,
          category: params.category || selectedCategory,
        });

        setBlogs(response.blogs.map(transformBlogData));
        setPagination(response.pagination);
      } catch (err) {
        setError(err);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    },
    [pagination.page, pagination.limit, searchTerm, selectedCategory]
  );

  // Initial load
  useEffect(() => {
    fetchBlogs({ page: 1 });
    
  }, []);

  // Handle search
  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      fetchBlogs({
        page: 1,
        search: term,
        category: selectedCategory,
      });
    },
    [selectedCategory, fetchBlogs]
  );

  // Handle category change
  const handleCategoryChange = useCallback(
    (category) => {
      setSelectedCategory(category);
      fetchBlogs({
        page: 1,
        search: searchTerm,
        category: category,
      });
    },
    [searchTerm, fetchBlogs]
  );

  // Handle pagination
  const handleNextPage = useCallback(() => {
    if (pagination.hasNext && !loading) {
      const nextPage = pagination.page + 1;
      fetchBlogs({ page: nextPage });
    }
  }, [pagination.hasNext, pagination.page, loading, fetchBlogs]);

  const handlePrevPage = useCallback(() => {
    if (pagination.hasPrev && !loading) {
      const prevPage = pagination.page - 1;
      fetchBlogs({ page: prevPage });
    }
  }, [pagination.hasPrev, pagination.page, loading, fetchBlogs]);

  // Retry function for error handling
  const handleRetry = useCallback(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <main className="flex flex-col items-center justify-center p-4 w-full gap-5 my:10 lg:my-15">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1
          className="text-[8.5vw] w-[50%] text-center md:text-[4.5vw] font-extrabold leading-tight 
    "
        >
          Ideas That <span className="italican text-orange-500">Inspire</span> .{' '}
          <span className="italican text-orange-500"> Stories</span> That Sell
        </h1>

        <div className="text-center w-full md:w-1/2 px-2 text-gray-600 text-lg font-medium ">
          <ShinyText
            text="At Digital Lab , we believe every project is more than just a task — it’s a story waiting to be told. From sleek video edits to stunning designs, innovative development, and marketing strategies that convert, our blogs bring you the latest trends, expert tips, and creative inspiration to help your brand shine."
            disabled={false}
            speed={3}
            className="text-xl  w-full"
          />
        </div>
      </div>

      <div className="flex w-full px-10 mt-10 items-center justify-between">
        <SearchBar onSearch={handleSearch} isLoading={loading} />
        <CategorySelector
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          isLoading={loading}
        />
      </div>

      {/* Results Info */}
      {!loading && !error && (
        <div className="text-sm text-gray-600 text-center">
          {pagination.totalBlogs > 0 ? (
            <>
              {searchTerm && (
                <span className="ml-2 font-medium">for "{searchTerm}"</span>
              )}
              {selectedCategory !== 'All' && (
                <span className="ml-2 font-medium">in {selectedCategory}</span>
              )}
            </>
          ) : (
            <span>No blogs found</span>
          )}
        </div>
      )}

      {/* Content Section */}
      {error ? (
        <ErrorDisplay error={error} onRetry={handleRetry} />
      ) : loading ? (
        <BlogLoading count={pagination.limit} />
      ) : blogs.length > 0 ? (
        <>
          {/* Blog Cards */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                slug={blog.slug}
                imageUrl={blog.imageUrl}
                readingTime={blog.readingTime}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <Navigation
              hasNext={pagination.hasNext}
              hasPrev={pagination.hasPrev}
              onNext={handleNextPage}
              onPrev={handlePrevPage}
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              isLoading={loading}
            />
          )}
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No blogs found
            </h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'All'
                ? 'Try adjusting your search or filter criteria.'
                : 'There are no blogs available at the moment.'}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
