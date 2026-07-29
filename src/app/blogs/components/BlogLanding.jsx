// src/components/BlogLoading.jsx
const BlogCardSkeleton = () => {
  return (
    <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden animate-pulse">
      <div className="w-full aspect-video bg-white/10"></div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="h-5 bg-white/10 rounded w-4/5"></div>
        <div className="space-y-2">
          <div className="h-3 bg-white/10 rounded"></div>
          <div className="h-3 bg-white/10 rounded"></div>
          <div className="h-3 bg-white/10 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

const BlogLoading = ({ count = 10 }) => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {Array.from({ length: count }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default BlogLoading;
