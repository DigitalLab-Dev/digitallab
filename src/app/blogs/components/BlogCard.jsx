'use client';

import Link from 'next/link';

const BlogCard = ({ title, excerpt, imageUrl, slug, readingTime }) => {
  return (
    <Link href={`/blogs/${slug}`} className="group block h-full">
      <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-orange-500/40 hover:bg-white/10 transition-all duration-300">
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={imageUrl || '/api/placeholder/320/192'}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-bold text-white leading-snug line-clamp-2">
              {title}
            </h3>
            <span className="shrink-0 bg-orange-500 px-3 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap">
              {readingTime} min
            </span>
          </div>

          {excerpt && (
            <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
