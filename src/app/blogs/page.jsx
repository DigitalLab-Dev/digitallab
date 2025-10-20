// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import SearchBar from './components/SearchBar';
// import CategorySelector from './components/CategoryBar';
// import BlogCard from './components/BlogCard';
// import Navigation from './components/Navigation';
// import BlogLoading from './components/BlogLanding';
// import ErrorDisplay from '@/components/ErrorDisplay';
// import { blogApi, transformBlogData } from '@/utils/blogApi';
// import ShinyText from '@/components/ReactBit-Components/ShinyText';

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pagination, setPagination] = useState({
//     page: 1,
//     limit: 6,
//     totalBlogs: 0,
//     totalPages: 1,
//     hasNext: false,
//     hasPrev: false,
//   });

//   // Filter states
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Fetch blogs function
//   const fetchBlogs = useCallback(
//     async (params = {}) => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await blogApi.getBlogs({
//           page: params.page || pagination.page,
//           limit: params.limit || pagination.limit,
//           search: params.search || searchTerm,
//           category: params.category || selectedCategory,
//         });

//         setBlogs(response.blogs.map(transformBlogData));
//         setPagination(response.pagination);
//       } catch (err) {
//         setError(err);
//         console.error('Error fetching blogs:', err);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [pagination.page, pagination.limit, searchTerm, selectedCategory]
//   );

//   // Initial load
//   useEffect(() => {
//     fetchBlogs({ page: 1 });
    
//   }, []);

//   // Handle search
//   const handleSearch = useCallback(
//     (term) => {
//       setSearchTerm(term);
//       fetchBlogs({
//         page: 1,
//         search: term,
//         category: selectedCategory,
//       });
//     },
//     [selectedCategory, fetchBlogs]
//   );

//   // Handle category change
//   const handleCategoryChange = useCallback(
//     (category) => {
//       setSelectedCategory(category);
//       fetchBlogs({
//         page: 1,
//         search: searchTerm,
//         category: category,
//       });
//     },
//     [searchTerm, fetchBlogs]
//   );

//   // Handle pagination
//   const handleNextPage = useCallback(() => {
//     if (pagination.hasNext && !loading) {
//       const nextPage = pagination.page + 1;
//       fetchBlogs({ page: nextPage });
//     }
//   }, [pagination.hasNext, pagination.page, loading, fetchBlogs]);

//   const handlePrevPage = useCallback(() => {
//     if (pagination.hasPrev && !loading) {
//       const prevPage = pagination.page - 1;
//       fetchBlogs({ page: prevPage });
//     }
//   }, [pagination.hasPrev, pagination.page, loading, fetchBlogs]);

//   // Retry function for error handling
//   const handleRetry = useCallback(() => {
//     fetchBlogs();
//   }, [fetchBlogs]);

//   return (
//     <main className="flex flex-col items-center justify-center p-4 w-full gap-5 my:10 lg:my-15">
//       {/* Header Section */}
//       <div className="flex flex-col items-center justify-center gap-5">
//         <h1
//           className="text-[8.5vw] w-[50%] text-center md:text-[4.5vw] font-extrabold leading-tight 
//     "
//         >
//           Ideas That <span className="italican text-orange-500">Inspire</span> .{' '}
//           <span className="italican text-orange-500"> Stories</span> That Sell
//         </h1>

//         <div className="text-center w-full md:w-1/2 px-2 text-gray-600 text-lg font-medium ">
//           <ShinyText
//             text="At Digital Lab , we believe every project is more than just a task — it’s a story waiting to be told. From sleek video edits to stunning designs, innovative development, and marketing strategies that convert, our blogs bring you the latest trends, expert tips, and creative inspiration to help your brand shine."
//             disabled={false}
//             speed={3}
//             className="text-xl  w-full"
//           />
//         </div>
//       </div>

//       <div className="flex w-full px-10 mt-10 items-center justify-between">
//         <SearchBar onSearch={handleSearch} isLoading={loading} />
//         <CategorySelector
//           onCategoryChange={handleCategoryChange}
//           selectedCategory={selectedCategory}
//           isLoading={loading}
//         />
//       </div>

//       {/* Results Info */}
//       {!loading && !error && (
//         <div className="text-sm text-gray-600 text-center">
//           {pagination.totalBlogs > 0 ? (
//             <>
//               {searchTerm && (
//                 <span className="ml-2 font-medium">for "{searchTerm}"</span>
//               )}
//               {selectedCategory !== 'All' && (
//                 <span className="ml-2 font-medium">in {selectedCategory}</span>
//               )}
//             </>
//           ) : (
//             <span>No blogs found</span>
//           )}
//         </div>
//       )}

//       {/* Content Section */}
//       {error ? (
//         <ErrorDisplay error={error} onRetry={handleRetry} />
//       ) : loading ? (
//         <BlogLoading count={pagination.limit} />
//       ) : blogs.length > 0 ? (
//         <>
//           {/* Blog Cards */}
//           <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
//             {blogs.map((blog) => (
//               <BlogCard
//                 key={blog.id}
//                 title={blog.title}
//                 excerpt={blog.excerpt}
//                 slug={blog.slug}
//                 imageUrl={blog.imageUrl}
//                 readingTime={blog.readingTime}
//               />
//             ))}
//           </div>

//           {/* Pagination */}
//           {pagination.totalPages > 1 && (
//             <Navigation
//               hasNext={pagination.hasNext}
//               hasPrev={pagination.hasPrev}
//               onNext={handleNextPage}
//               onPrev={handlePrevPage}
//               currentPage={pagination.page}
//               totalPages={pagination.totalPages}
//               isLoading={loading}
//             />
//           )}
//         </>
//       ) : (
//         /* Empty State */
//         <div className="flex flex-col items-center justify-center py-16">
//           <div className="text-center">
//             <svg
//               className="mx-auto h-16 w-16 text-gray-400 mb-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">
//               No blogs found
//             </h3>
//             <p className="text-gray-600">
//               {searchTerm || selectedCategory !== 'All'
//                 ? 'Try adjusting your search or filter criteria.'
//                 : 'There are no blogs available at the moment.'}
//             </p>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import CategorySelector from './components/CategoryBar';
import BlogCard from './components/BlogCard';
import Navigation from './components/Navigation';
import BlogLoading from './components/BlogLanding';
import ErrorDisplay from '@/components/ErrorDisplay';
import { blogApi, transformBlogData } from '@/utils/blogApi';
import ShinyText from '@/components/ReactBit-Components/ShinyText';

// Full page skeleton loader component
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center p-4 w-full gap-5 my-10 lg:my-15">
    {/* Header Skeleton */}
     <div className="flex flex-col items-center justify-center gap-5 w-full animate-pulse">
      <div className="h-16 bg-gray-200 rounded-lg w-3/4 md:w-1/2"></div>
      <div className="h-24 bg-gray-200 rounded-lg w-full md:w-1/2"></div>
    </div>


    <div className="flex w-full px-10 mt-10 items-center justify-between animate-pulse">
      <div className="h-12 bg-gray-200 rounded-lg w-1/3"></div>
      <div className="h-12 bg-gray-200 rounded-lg w-1/4"></div>
    </div> 


    <BlogLoading count={6} />
  </div>
);

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
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

  // Fetch blogs function with optimization
  const fetchBlogs = useCallback(
    async (params = {}) => {
      try {
        // Use initialLoading only for first load
        if (params.isInitial) {
          setInitialLoading(true);
        } else {
          setLoading(true);
        }
        setError(null);

        const response = await blogApi.getBlogs({
          page: params.page ?? pagination.page,
          limit: params.limit ?? pagination.limit,
          search: params.search ?? searchTerm,
          category: params.category ?? selectedCategory,
        });

        const transformedBlogs = response.blogs.map(transformBlogData);
        setBlogs(transformedBlogs);
        setPagination(response.pagination);
      } catch (err) {
        setError(err);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
        setInitialLoading(false);
      }
    },
    [pagination.page, pagination.limit, searchTerm, selectedCategory]
  );

  // Initial load - only runs once
  useEffect(() => {
    fetchBlogs({ page: 1, isInitial: true });
  }, []); // Empty dependency array - runs only once

  // Handle search with debouncing optimization
  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      setPagination(prev => ({ ...prev, page: 1 }));
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
      setPagination(prev => ({ ...prev, page: 1 }));
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
      setPagination(prev => ({ ...prev, page: nextPage }));
      fetchBlogs({ page: nextPage });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pagination.hasNext, pagination.page, loading, fetchBlogs]);

  const handlePrevPage = useCallback(() => {
    if (pagination.hasPrev && !loading) {
      const prevPage = pagination.page - 1;
      setPagination(prev => ({ ...prev, page: prevPage }));
      fetchBlogs({ page: prevPage });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pagination.hasPrev, pagination.page, loading, fetchBlogs]);

  // Retry function for error handling
  const handleRetry = useCallback(() => {
    fetchBlogs({ page: pagination.page });
  }, [fetchBlogs, pagination.page]);

  // Memoize results info to prevent unnecessary re-renders
  const resultsInfo = useMemo(() => {
    if (loading || error || initialLoading) return null;
    
    if (pagination.totalBlogs === 0) {
      return <span>No blogs found</span>;
    }

    return (
      <>
        <span>Showing {blogs.length} of {pagination.totalBlogs} blogs</span>
        {searchTerm && (
          <span className="ml-2 font-medium">for "{searchTerm}"</span>
        )}
        {selectedCategory !== 'All' && (
          <span className="ml-2 font-medium">in {selectedCategory}</span>
        )}
      </>
    );
  }, [loading, error, initialLoading, pagination.totalBlogs, blogs.length, searchTerm, selectedCategory]);

  // Show full page loader on initial load
  if (initialLoading) {
    return <PageLoader />;
  }

  return (
    <main className="flex flex-col items-center justify-center p-4 w-full gap-5 my-10 lg:my-15">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[8.5vw] w-full md:w-[50%] text-center md:text-[4.5vw] font-extrabold leading-tight">
          Ideas That <span className="italic text-orange-500">Inspire</span>.{' '}
          <span className="italic text-orange-500">Stories</span> That Sell
        </h1>

        <div className="text-center w-full md:w-1/2 px-2 text-gray-600 text-lg font-medium">
          <ShinyText
            text="At Digital Lab, we believe every project is more than just a task — it's a story waiting to be told. From sleek video edits to stunning designs, innovative development, and marketing strategies that convert, our blogs bring you the latest trends, expert tips, and creative inspiration to help your brand shine."
            disabled={false}
            speed={3}
            className="text-xl w-full"
          />
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row w-full px-4 md:px-10 mt-10 items-center justify-between gap-4">
        <SearchBar onSearch={handleSearch} isLoading={loading} />
        <CategorySelector
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          isLoading={loading}
        />
      </div>

      {/* Results Info */}
      {resultsInfo && (
        <div className="text-sm text-gray-600 text-center">
          {resultsInfo}
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4 md:px-10">
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