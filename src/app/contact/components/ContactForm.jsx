"use client"
import React, { useState } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success / error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: "Message has been sent successfully!" });
        setFormData({ name: "", email: "", service: "", message: "" }); // clear fields
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again!" });
    } finally {
      setLoading(false);
    }
  };

  const closeStatus = () => {
    setStatus(null);
  };

  return (
    <div className="w-full">
      <form
        className="w-full rounded-xl flex flex-col items-center gap-6 py-10"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <div className="w-full flex flex-col items-start">
          <label htmlFor="name" className="text-orange-500 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent transition-colors"
            required
          />
        </div>

        {/* Email Field */}
        <div className="w-full flex flex-col items-start">
          <label htmlFor="email" className="text-orange-500 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent transition-colors"
            required
          />
        </div>

        {/* Dropdown Field */}
        <div className="w-full flex flex-col items-start">
          <label htmlFor="service" className="text-orange-500 font-medium mb-1">
            What you need from us?
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent transition-colors appearance-none cursor-pointer text-gray-700 dark:text-gray-300"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23f97316' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              paddingRight: '2rem'
            }}
            required
          >
            <option value="" className="bg-white dark:bg-gray-800 text-gray-500">
              Select a Service
            </option>
            <option value="Web Development" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3">
               Web Development
            </option>
            <option value="Mobile App Development" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3">
               Mobile App Development
            </option>
            <option value="SEO Optimization" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3">
               SEO Optimization
            </option>
            <option value="UI/UX Design" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3">
               UI/UX Design
            </option>
            <option value="Digital Marketing" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3">
               Digital Marketing
            </option>
            <option value="Digital Marketing" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3">
                Other Services
            </option>
          </select>
        </div>

        {/* Message Field */}
        <div className="w-full flex flex-col items-start">
          <label htmlFor="message" className="text-orange-500 font-medium mb-1">
            Project Details
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Describe your project..."
            className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent resize-none transition-colors"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`px-8 w-full py-3 mt-4 font-semibold rounded-lg shadow-lg transition-all ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600 active:translate-y-1 active:shadow-inner"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Now !"
          )}
        </button>
      </form>

      {/* Status Message - Toast Style */}
      {status && (
        <div
          className={`fixed bottom-4 right-4 z-50 min-w-[320px] max-w-md rounded-xl shadow-2xl p-4 backdrop-blur-md border-2 transition-all duration-300 animate-slide-in ${
            status.type === "success"
              ? "bg-green-50/90 dark:bg-green-900/90 border-green-500 text-green-800 dark:text-green-100"
              : "bg-red-50/90 dark:bg-red-900/90 border-red-500 text-red-800 dark:text-red-100"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              {status.type === "success" ? (
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">
                {status.type === "success" ? "Success!" : "Error"}
              </h3>
              <p className="text-sm opacity-90">{status.message}</p>
            </div>
            <button
              onClick={closeStatus}
              className="flex-shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Close notification"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                status.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
              style={{
                animation: "progress 3s linear forwards"
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;