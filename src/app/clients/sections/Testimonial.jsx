"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, X, MessageCircle, Upload, Loader, CheckCircle, AlertCircle } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    review: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  // API configuration
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.yourdomain.com';

  // Fetch approved reviews from backend
  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  const fetchApprovedReviews = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/review/approved`);
      if (response.ok) {
        const data = await response.json();
        // Transform backend data to match component structure
        const transformedData = data.map(review => ({
          id: review._id,
          name: review.name,
          title: review.role,
          review: review.review,
          image: review.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=ea580c&color=fff&size=150`,
          rating: 5, // Default rating since backend doesn't have rating field
          email: review.email
        }));
        setTestimonials(transformedData);
      } else {
        console.error('Failed to fetch reviews');
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];
    const visible = [];
    const maxVisible = Math.min(5, testimonials.length);
    
    for (let i = -Math.floor(maxVisible/2); i <= Math.floor(maxVisible/2); i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    return visible;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }

      setFormData({ ...formData, image: file });
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async () => {
    // Validation
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!formData.role.trim()) {
      alert('Please enter your role/title');
      return;
    }
    if (!formData.review.trim() || formData.review.trim().length < 10) {
      alert('Please enter a review with at least 10 characters');
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name.trim());
      submitData.append('email', formData.email.trim());
      submitData.append('role', formData.role.trim());
      submitData.append('review', formData.review.trim());
      
      if (formData.image) {
        submitData.append('image', formData.image);
      }

      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', role: '', review: '', image: null });
        setImagePreview(null);
        
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus(null);
    setFormData({ name: '', email: '', role: '', review: '', image: null });
    setImagePreview(null);
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-white/70 text-lg">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section id='testimonials' className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Quote className="w-4 h-4" />
            Client Testimonials
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-white">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Hear from the creators and brands who have transformed their digital presence with our expertise.
          </p>

          {/* Review Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            <MessageCircle className="w-5 h-5" />
            Share Your Experience
          </motion.button>
        </motion.div>

        {/* Testimonials Display */}
        {testimonials.length > 0 ? (
          <div className="relative ">
            {/* Main carousel container */}
            <div className="relative h-96 brder md:h-[400px]  flex items-end justify-center">
              <AnimatePresence mode="popLayout ">
                {getVisibleTestimonials().map((testimonial) => {
                  const { position } = testimonial;
                  const isCenter = position === 0;
                  const angle = position * 25; // degrees
                  const radius = Math.min(200, window.innerWidth * 0.15); // responsive radius
                  const scale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(position) * 0.2);
                  const opacity = Math.max(0.3, 1 - Math.abs(position) * 0.3);
                  
                  // Calculate position on semicircle
                  const x = Math.sin((angle * Math.PI) / 180) * radius;
                  const y = -Math.cos((angle * Math.PI) / 180) * radius * 0.5;

                  return (
                    <motion.div
                      key={`${testimonial.id}-${position}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        x: x,
                        y: y,
                        scale: scale,
                        opacity: opacity,
                        zIndex: isCenter ? 10 : 5 - Math.abs(position)
                      }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute"
                      style={{ transformOrigin: 'center bottom' }}
                    >
                      <div className={`bg-black border-2 ${isCenter ? 'border-orange-500' : 'border-white/20'} rounded-2xl p-6 w-72 md:w-80 text-center transition-all duration-500 shadow-2xl ${isCenter ? 'shadow-orange-500/20' : 'shadow-black/20'}`}>
                        {/* Profile Image */}
                        <div className="relative mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className={`w-16 h-16 rounded-full mx-auto object-cover ring-4 ${isCenter ? 'ring-orange-500/60' : 'ring-white/20'} transition-all duration-500`}
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=ea580c&color=fff&size=150`;
                            }}
                          />
                          {isCenter && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                              <Star className="w-3 h-3 text-black fill-current" />
                            </div>
                          )}
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${isCenter ? 'text-orange-400' : 'text-white/60'} fill-current transition-colors duration-500`} />
                          ))}
                        </div>

                        {/* Review */}
                        <p className={`${isCenter ? 'text-white' : 'text-white/70'} text-sm mb-4 leading-relaxed transition-colors duration-500 line-clamp-4`}>
                          "{testimonial.review}"
                        </p>

                        {/* Name and Title */}
                        <h4 className={`font-bold mb-1 transition-colors duration-500 ${isCenter ? 'text-orange-400' : 'text-white/80'}`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm transition-colors duration-500 ${isCenter ? 'text-white/80' : 'text-white/50'}`}>
                          {testimonial.title}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {testimonials.length > 1 && (
              <div className="flex justify-center gap-4 ">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className="w-12 h-12 bg-white/10 hover:bg-orange-500/20 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300 border border-white/20 hover:border-orange-500/50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="w-12 h-12 bg-white/10 hover:bg-orange-500/20 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300 border border-white/20 hover:border-orange-500/50"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white/70"
            >
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">No testimonials yet</h3>
              <p className="mb-6">Be the first to share your experience with us!</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-black px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
              >
                Write a Review
              </button>
            </motion.div>
          </div>
        )}

        {/* Review Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="bg-black border-2 border-orange-500/30 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Share Your Experience</h3>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Thank you!</h4>
                    <p className="text-white/70">Your review has been submitted and is pending approval.</p>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Oops!</h4>
                    <p className="text-white/70 mb-4">There was an error submitting your review. Please try again.</p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Enter your full name"
                        disabled={submitting}
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="your.email@example.com"
                        disabled={submitting}
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Your Role/Title *</label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="e.g., YouTuber, Influencer, CEO, etc."
                        disabled={submitting}
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Profile Picture (Optional)</label>
                      <div className="flex items-center space-x-4">
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                          />
                        )}
                        <label className="cursor-pointer bg-white/10 border border-white/20 hover:border-orange-500 hover:bg-white/20 rounded-lg px-4 py-2 text-white transition-colors flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Choose Image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            disabled={submitting}
                          />
                        </label>
                      </div>
                      <p className="text-white/50 text-xs mt-1">Max file size: 5MB</p>
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Your Review *</label>
                      <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        placeholder="Tell us about your experience working with us... (minimum 10 characters)"
                        disabled={submitting}
                        minLength={10}
                      />
                      <p className="text-white/50 text-xs mt-1">
                        {formData.review.length}/10 characters minimum
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                      onClick={handleFormSubmit}
                      disabled={submitting}
                      className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Review'
                      )}
                    </motion.button>

                    <p className="text-white/50 text-xs text-center">
                      * Required fields. Your review will be published after admin approval.
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialCarousel;