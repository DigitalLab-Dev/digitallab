"use client"
import React, { useState, useRef, useEffect } from 'react';

const CategorySelector = ({ onCategoryChange, selectedCategory = 'All', isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const categories = [
    'All',
    'Technology',
    'Artificial Intelligence',
    'Business',
    'Finance',
    'Marketing',
    'Data Automation'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category) => {
    if (isLoading) return;
    onCategoryChange(category);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (isLoading) return;
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          disabled={isLoading}
          className={`
            flex items-center justify-between min-w-[200px] px-6 py-3 
            bg-black text-white border-b-2 border-orange-500 
           font-medium
            transition-all duration-300 ease-in-out
            ${isLoading 
              ? 'cursor-not-allowed opacity-50' 
              : 'cursor-pointer  hover:shadow-lg hover:scale-[1.02]'
            }
            ${isOpen ? 'border-orange-600 shadow-lg scale-[1.02]' : ''}
          `}
        >
          <span className="truncate">{selectedCategory}</span>
          
          {/* Arrow Icon */}
          <div className={`
            ml-3 transition-transform duration-300 ease-in-out
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}>
            <svg 
              className="w-5 h-5 text-orange-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </button>

        {/* Loading Spinner Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white bg-opacity-80 rounded-lg">
            <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Dropdown Menu */}
        <div className={`
          absolute top-full left-0 right-0 mt-2 z-50
          bg-black text-white border-2 border-orange-500 rounded-lg shadow-xl
          overflow-hidden
          transition-all duration-300 ease-in-out origin-top
          ${isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
          }
        `}>
          {categories.map((category, index) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                px-6 py-3 cursor-pointer
                transition-all duration-200 ease-in-out
                border-b border-gray-100 last:border-b-0
                ${selectedCategory === category
                  ? 'bg-orange-500 text-white font-semibold'
                  : 'bg-white/20 backdrop-blur-2xl text-white hover:bg-orange-50 hover:text-orange-600'
                }
                ${isLoading ? 'pointer-events-none' : ''}
                animate-slide-in
              `}
              style={{
                animationDelay: isOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{category}</span>
                {selectedCategory === category && (
                  <div className="ml-2 animate-bounce-in">
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CategorySelector;