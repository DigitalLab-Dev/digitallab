'use client';

import Link from 'next/link';

const BlogCard = ({ title, excerpt, imageUrl, slug, readingTime }) => {
  // Truncate description to show only first 120 characters
  const truncateText = (text, maxLength = 120) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Link href={`/blogs/${slug}`} passHref>
      <div className="w-140 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
        {/* Image Section */}
        <div className="w-full h-120 overflow-hidden">
          <img
            src={imageUrl || '/api/placeholder/320/192'}
            alt={title}
            className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="w-full mt-2 flex items-center justify-between">
          <div className="w-[80%] text-xl">
            <h3>{title}</h3>
          </div>
          <div className="bg-orange-400 px-3 py-2 rounded-full text-white text-sm">
            <p className="text-sm">{readingTime} min read</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
