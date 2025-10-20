'use client';
import React, { useState, useCallback } from 'react';
import { debounce } from '@/utils/blogApi';
const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, 500),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="relative flex items-center justify-center gap-3 max-w-md">
      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search blogs..."
          disabled={isLoading}
          className={`
            relative z-10 flex-1 w-full sm:w-[500px] px-4 py-3 dark:text-white border-b border-orange-500  
            focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600 
            transition-all duration-200
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        />

        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
