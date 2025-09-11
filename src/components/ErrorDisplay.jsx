import React, { useState, useEffect } from 'react';

const ErrorDisplay = ({ error, onRetry }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getErrorMessage = (error) => {
    if (error.status === 0) {
      return {
        title: "Connection Error",
        message: "Unable to connect to the server. Please check your internet connection.",
        suggestion: "Try refreshing the page or check if the server is running.",
        icon: "connection"
      };
    }
        
    if (error.status >= 500) {
      return {
        title: "Server Error",
        message: "Something went wrong on our end.",
        suggestion: "Please try again in a moment.",
        icon: "server"
      };
    }
        
    if (error.status === 404) {
      return {
        title: "Not Found",
        message: "The requested resource could not be found.",
        suggestion: "Please check the URL or try again later.",
        icon: "notFound"
      };
    }
        
    return {
      title: "Something went wrong",
      message: error.message || "An unexpected error occurred.",
      suggestion: "Please try again.",
      icon: "generic"
    };
  };

  const handleRetry = async () => {
    if (!onRetry) return;
    
    setIsRetrying(true);
    try {
      await onRetry();
    } finally {
      setTimeout(() => setIsRetrying(false), 1000);
    }
  };

  const getErrorIcon = (iconType) => {
    const iconProps = "h-12 w-12 text-orange-500";
    
    switch (iconType) {
      case "connection":
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        );
      case "server":
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case "notFound":
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      default:
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
    }
  };

  const errorInfo = getErrorMessage(error);

  return (
    <div className="min-h-[400px] bg-black flex items-center justify-center p-8">
      <div className={`
        max-w-lg w-full text-center transform transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
      `}>
        
        {/* Animated Background Glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-500/10 rounded-3xl blur-xl animate-pulse"></div>
          
          {/* Main Error Card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-3xl p-8 shadow-2xl">
            
            {/* Floating Error Icon */}
            <div className="relative mx-auto mb-8">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500/30 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center animate-bounce">
                {getErrorIcon(errorInfo.icon)}
              </div>
            </div>

            {/* Error Content */}
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {errorInfo.title}
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {errorInfo.message}
              </p>
              
              <p className="text-sm text-orange-400 font-medium">
                {errorInfo.suggestion}
              </p>
            </div>

            {/* Retry Button */}
            {onRetry && (
              <div className="flex justify-center">
                <button
                  onClick={handleRetry}
                  disabled={isRetrying}
                  className={`
                    group relative inline-flex items-center px-8 py-4
                    bg-gradient-to-r from-orange-500 to-orange-600
                    hover:from-orange-600 hover:to-orange-700
                    text-black font-semibold text-lg rounded-2xl
                    transform transition-all duration-300 ease-out
                    hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25
                    focus:outline-none focus:ring-4 focus:ring-orange-500/50
                    disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed disabled:hover:scale-100
                    ${isRetrying ? 'animate-pulse' : ''}
                  `}
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center space-x-3">
                    {isRetrying ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )}
                    <span>{isRetrying ? 'Retrying...' : 'Try Again'}</span>
                  </div>
                </button>
              </div>
            )}

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Status Code Display (if available) */}
        {error.status && (
          <div className={`
            mt-6 text-6xl font-black text-orange-500/20 tracking-wider
            transform transition-all duration-1000 delay-300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            {error.status}
          </div>
        )}
      </div>

      {/* Background Pattern */}

    </div>
  );
};

export default ErrorDisplay;