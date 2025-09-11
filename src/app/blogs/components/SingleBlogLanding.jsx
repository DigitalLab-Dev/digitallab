const SingleBlogLoading = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="mb-8">
        <div className="h-10 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* Category Skeleton */}
      <div className="mb-4">
        <div className="h-6 w-32 bg-gray-200 rounded-full"></div>
      </div>

      {/* Title Skeleton */}
      <div className="mb-4">
        <div className="h-12 bg-gray-200 rounded mb-2"></div>
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
      </div>

      {/* Subtitle Skeleton */}
      <div className="mb-8">
        <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
      </div>

      {/* Image Gallery Skeleton */}
      <div className="mb-8">
        <div className="w-full aspect-video bg-gray-200 rounded-xl mb-4"></div>
        <div className="flex gap-2">
          <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      </div>

      {/* Date Skeleton */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="h-4 w-40 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default SingleBlogLoading;