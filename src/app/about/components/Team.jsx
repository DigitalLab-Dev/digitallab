'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState({});
  const sectionRef = useRef(null);
  
  // Simple intersection observer instead of framer-motion's useInView
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3, rootMargin: '-100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mock data fallback for testing
  const mockTeamMembers = [
    {
      id: 1,
      name: "John Smith",
      designation: "CEO & Founder",
      description: "Visionary leader with over 15 years of experience in technology and innovation. Passionate about building products that make a difference.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      designation: "CTO",
      description: "Technical expert specializing in scalable architecture and modern web technologies. Leads our engineering team with expertise and vision.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c2a0aa8f?w=400&h=400&fit=crop&crop=faces"
    },
    {
      id: 3,
      name: "Michael Chen",
      designation: "Lead Designer",
      description: "Creative professional focused on user experience and interface design. Transforms complex ideas into intuitive, beautiful solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
    }
  ];

  // Fetch team members with detailed debugging
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '';
        const apiUrl = `${backendUrl}/api/team`;
        
        setDebugInfo(prev => ({
          ...prev,
          backendUrl,
          apiUrl,
          fetchAttempted: true,
          fetchTime: new Date().toISOString()
        }));

        console.log('Attempting to fetch from:', apiUrl);
        
        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const res = await fetch(apiUrl, {
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        clearTimeout(timeoutId);
        
        setDebugInfo(prev => ({
          ...prev,
          responseStatus: res.status,
          responseOk: res.ok,
          responseHeaders: Object.fromEntries(res.headers.entries())
        }));

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        console.log('API Response:', data);
        
        setDebugInfo(prev => ({
          ...prev,
          rawApiResponse: data,
          dataType: typeof data,
          isArray: Array.isArray(data)
        }));

        // Handle different response structures
        let members = [];
        if (Array.isArray(data)) {
          members = data;
        } else if (data && Array.isArray(data.data)) {
          members = data.data;
        } else if (data && Array.isArray(data.members)) {
          members = data.members;
        } else if (data && typeof data === 'object') {
          members = [data];
        }

        setDebugInfo(prev => ({
          ...prev,
          processedMembers: members,
          membersCount: members.length
        }));

        if (members.length === 0) {
          console.log('No members found in API response, using mock data');
          members = mockTeamMembers;
          setDebugInfo(prev => ({
            ...prev,
            usingMockData: true
          }));
        }

        setTeamMembers(members);
      } catch (err) {
        console.error('Error fetching team:', err);
        setError(err.message);
        
        // Use mock data on error
        console.log('Using mock data due to fetch error');
        setTeamMembers(mockTeamMembers);
        setDebugInfo(prev => ({
          ...prev,
          fetchError: err.message,
          usingMockDataDueToError: true
        }));
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  // Reset index when new data arrives
  useEffect(() => {
    if (teamMembers.length > 0) {
      setCurrentIndex(0);
    }
  }, [teamMembers]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView && !isTransitioning && teamMembers.length > 1) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isInView, isTransitioning, teamMembers.length]);

  const handleNext = () => {
    if (isTransitioning || teamMembers.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    if (isTransitioning || teamMembers.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
      );
      setIsTransitioning(false);
    }, 150);
  };

  // Loading state
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading team members...</p>
          <div className="mt-4 text-xs text-gray-500 max-w-md">
            <p>Debug Info:</p>
            <pre className="text-left bg-gray-800 p-2 rounded mt-2">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        </div>
      </section>
    );
  }

  // Error state with debug info
  if (error && teamMembers.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center max-w-2xl">
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-6">
            <h3 className="text-red-400 text-lg font-semibold mb-2">Error Loading Team</h3>
            <p className="text-gray-300 text-sm mb-4">{error}</p>
            <div className="text-xs text-gray-400">
              <p className="mb-2">Debug Information:</p>
              <pre className="text-left bg-gray-800 p-3 rounded overflow-auto max-h-40">
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // No team members (shouldn't happen due to fallback)
  if (teamMembers.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <p className="text-gray-400 text-lg">No team members found.</p>
          <div className="mt-4 text-xs text-gray-500">
            <p>Debug Info:</p>
            <pre className="text-left bg-gray-800 p-2 rounded mt-2">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        </div>
      </section>
    );
  }

  const currentMember = teamMembers[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Debug Panel - Remove in production */}
        {/* <div className="mb-8 bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h4 className="text-orange-500 font-semibold mb-2">Debug Information:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <p><strong>Members Count:</strong> {teamMembers.length}</p>
              <p><strong>Current Index:</strong> {currentIndex}</p>
              <p><strong>Is In View:</strong> {isInView.toString()}</p>
              <p><strong>Is Transitioning:</strong> {isTransitioning.toString()}</p>
            </div>
            <div>
              <p><strong>API URL:</strong> {debugInfo.apiUrl || 'Not set'}</p>
              <p><strong>Response Status:</strong> {debugInfo.responseStatus || 'N/A'}</p>
              <p><strong>Using Mock Data:</strong> {(debugInfo.usingMockData || debugInfo.usingMockDataDueToError) ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p><strong>Current Member:</strong> {currentMember?.name || 'None'}</p>
              <p><strong>Member Role:</strong> {currentMember?.designation || 'None'}</p>
              <p><strong>Has Image:</strong> {currentMember?.image ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div> */}

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Team Member Card */}
        <div className="relative">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image Section */}
              <div className="relative flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-orange-500/30">
                    <img
                      src={currentMember.image}
                      alt={currentMember.name}
                      className="w-full h-full  object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        console.log('Image failed to load:', currentMember.image);
                        e.target.src = `https://via.placeholder.com/400x400/1f2937/ffffff?text=${encodeURIComponent(currentMember.name
                          .split(' ')
                          .map((n) => n[0])
                          .join(''))}`;
                      }}
                      onLoad={() => console.log('Image loaded successfully:', currentMember.image)}
                    />
                  </div>
                  {/* Floating accents */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {currentMember.name}
                </h3>
                <p className="text-orange-500 text-xl md:text-2xl font-semibold mb-6 uppercase tracking-wide">
                  {currentMember.designation}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  {currentMember.description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Only show if more than 1 member */}
          {teamMembers.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <button
                onClick={handlePrev}
                disabled={isTransitioning}
                className="pointer-events-auto bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-full border border-gray-700 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                disabled={isTransitioning}
                className="pointer-events-auto bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-full border border-gray-700 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Indicators - Only show if more than 1 member */}
        {/* {teamMembers.length > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 150);
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentIndex
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500 w-3'
                }`}
              />
            ))}
          </div>
        )} */}

        {/* Member Counter */}
        {/* {teamMembers.length > 1 && (
          <div className="text-center mt-6">
            <p className="text-gray-400 text-lg">
              <span className="text-orange-500 font-bold">{currentIndex + 1}</span>
              <span className="mx-2">/</span>
              <span>{teamMembers.length}</span>
            </p>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Team;