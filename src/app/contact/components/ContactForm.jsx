// import React from 'react'

// const ContactForm = () => {
//   return (
//     <form className="w-full  rounded-xl  flex flex-col items-center gap-6 py-10 ">
      
//       {/* Name Field */}
//       <div className="w-full flex flex-col items-start">
//         <label htmlFor="name" className="text-orange-500 font-medium mb-1">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           placeholder='Enter your name'
//           className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
//         />
//       </div>

//       {/* Email Field */}
//       <div className="w-full flex flex-col items-start">
//         <label htmlFor="email" className="text-orange-500 font-medium mb-1">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           placeholder='Enter your email'
//           className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
//         />
//       </div>

//       {/* Dropdown Field */}
//       <div className="w-full flex flex-col items-start">
//         <label htmlFor="service" className="text-orange-500 font-medium mb-1">
//           What you need from us?
//         </label>
//         <select
//           id="service"
//           placeholder='Select a service'
//           className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
//         >
//           <option value="">Select a Service</option>
//           <option value="web">Web Development</option>
//           <option value="mobile">Mobile App Development</option>
//           <option value="seo">SEO Optimization</option>
//           <option value="design">UI/UX Design</option>
//           <option value="marketing">Digital Marketing</option>
//         </select>
//       </div>

//       {/* Message Field */}
//       <div className="w-full flex flex-col items-start">
//         <label htmlFor="message" className="text-orange-500 font-medium mb-1">
//           Project Details
//         </label>
//         <textarea
//           id="message"
//           rows="4"
//           placeholder='Describe your project...'
//           className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent resize-none"
//         ></textarea>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="px-8 w-full py-3 mt-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 active:translate-y-1 active:shadow-inner transition-all"
//       >
//         Send Now !
//       </button>
//     </form>
//   )
// }

// export default ContactForm
"use client"
import React, { useState } from "react";

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
        setStatus({ type: "success", message: "Message has been sent ✅" });
        setFormData({ name: "", email: "", service: "", message: "" }); // clear fields
      } else {
        setStatus({ type: "error", message: "Failed to send message ❌" });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Try again!" });
    } finally {
      setLoading(false);
    }
  };

  return (
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
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
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
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
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
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
          required
        >
          <option value="">Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="SEO Optimization">SEO Optimization</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
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
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent resize-none"
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
        {loading ? "Sending..." : "Send Now !"}
      </button>

      {/* Status Message */}
      {status && (
        <p
          className={`mt-4 text-center ${
            status.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
