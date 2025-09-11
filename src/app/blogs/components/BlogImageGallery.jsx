'use client';

import React, { useState } from 'react';

const BlogImageGallery = ({ images = [], title = '' }) => {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  // Dynamic grid layout based on image count
  const getGridClass = () => {
    switch (images.length) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-2 lg:grid-cols-4';
    }
  };

  // Special layout for 3 images (larger first image)
  const getImageClass = (index) => {
    if (images.length === 3 && index === 0) {
      return 'sm:col-span-2 lg:col-span-1';
    }
    return '';
  };

  // Dynamic aspect ratio for single image
  const getAspectClass = () => {
    if (images.length === 1) {
      return 'aspect-video'; // 16:9 ratio for single image
    }
    return 'aspect-square'; // Square for multiple images
  };

  return (
    <>
      {/* Image Grid */}
      <div className={`grid gap-3 ${getGridClass()}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              relative group rounded-xl overflow-hidden bg-gray-100
              ${getAspectClass()} hover:shadow-lg transition-all duration-300
              ${getImageClass(index)}
            `}
          >
            <img
              src={image.url || '/api/placeholder/400/400'}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Image number indicator for multiple images */}
            {images.length > 1 && (
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                {index + 1}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image count */}
      {images.length > 1 && (
        <div className="mt-3 text-center text-sm text-gray-600">
          {images.length} image{images.length > 1 ? 's' : ''}
        </div>
      )}
    </>
  );
};





export default BlogImageGallery;