import React from 'react';

const Navigation = ({ 
  hasNext, 
  hasPrev, 
  onNext, 
  onPrev, 
  currentPage = 1, 
  totalPages = 1,
  isLoading = false 
}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto p-4">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={!hasPrev || isLoading}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 group
          ${hasPrev && !isLoading
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl' 
            : 'bg-gray-500 text-black cursor-not-allowed'
          }
        `}
      >
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${hasPrev && !isLoading ? 'group-hover:-translate-x-1' : ''}`}
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
        {isLoading ? 'Loading...' : 'Prev'}
      </button>

      {/* Page indicator */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="font-medium">{currentPage}</span>
        <span>of</span>
        <span className="font-medium">{totalPages}</span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!hasNext || isLoading}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 group
          ${hasNext && !isLoading
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        {isLoading ? 'Loading...' : 'Next'}
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${hasNext && !isLoading ? 'group-hover:translate-x-1' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navigation;