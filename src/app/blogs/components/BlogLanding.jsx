// src/components/BlogLoading.jsx
const BlogCardSkeleton = () => {
  return (
    <div className="w-80 h-96 bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-200"></div>
      
      {/* Content skeleton */}
      <div className="p-5 h-48 flex flex-col justify-between">
        <div className="flex-1">
          {/* Title skeleton */}
          <div className="h-5 bg-gray-200 rounded mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          
          {/* Subtitle skeleton */}
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
          
          {/* Description skeleton */}
          <div className="space-y-2 mb-3">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
        
        {/* Read more skeleton */}
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
    </div>
  );
};

const BlogLoading = ({ count = 6 }) => {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default BlogLoading;