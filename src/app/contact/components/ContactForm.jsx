import React from 'react'

const ContactForm = () => {
  return (
    <form className="w-full  rounded-xl  flex flex-col items-center gap-6 py-10 ">
      
      {/* Name Field */}
      <div className="w-full flex flex-col items-start">
        <label htmlFor="name" className="text-orange-500 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder='Enter your name'
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
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
          placeholder='Enter your email'
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
        />
      </div>

      {/* Dropdown Field */}
      <div className="w-full flex flex-col items-start">
        <label htmlFor="service" className="text-orange-500 font-medium mb-1">
          What you need from us?
        </label>
        <select
          id="service"
          placeholder='Select a service'
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent"
        >
          <option value="">Select a Service</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile App Development</option>
          <option value="seo">SEO Optimization</option>
          <option value="design">UI/UX Design</option>
          <option value="marketing">Digital Marketing</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="w-full flex flex-col items-start">
        <label htmlFor="message" className="text-orange-500 font-medium mb-1">
          Project Details
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder='Describe your project...'
          className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2 bg-transparent resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-8 w-full py-3 mt-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 active:translate-y-1 active:shadow-inner transition-all"
      >
        Send Now !
      </button>
    </form>
  )
}

export default ContactForm
