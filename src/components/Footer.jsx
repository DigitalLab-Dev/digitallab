// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'

// const Footor = () => {
//   return (
//     <footer className='flex p-5 px-10 mt-10 border items-start justify-evenly text-[22px]'>
//        <div className='flex flex-col uppercase'>
//            <p>Street 2</p>
//            <p>Phase 9,Sector 11</p>
//            <p>DHA, Lahore</p>
//            <p>Pakistan</p>
//        </div>
//        <div className='flex flex-col gap-10'>
//           <div className=''>
//              <p>Twitter/X</p>
//              <p>Instagram</p>
//              <p>Linkedin</p>
//           </div>
//           <div className=''>
//              <h5 className='font-semibold text-orange-500'>General Queries</h5>
//              <p>hello@digitallab.com</p>
//           </div>
//           <div className=''>
//              <h5 className='font-semibold text-orange-500'>Business</h5>
//              <p>business@digitallab.com</p>
//           </div>
//        </div>
//        <div className='flex flex-col '>
//         <div>
//          <h5 className='text-4xl font-bold'>
//            Subscribe To
//          </h5>
//          <h4 className='text-4xl font-bold'>
//             Our Newsletter
//          </h4>
//         </div>
//        <div>
//          <input type="text" />
//          <FaArrowRight/>
//        </div>

//        </div>
//     </footer>
//   )
// }

// export default Footor
"use client"
import React, { useState } from 'react'
import { FaArrowRight, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  return (
    <footer className='relative mt-20 overflow-hidden'>
      {/* Animated SVG Background */}
      <div className='absolute inset-0 opacity-20'>
        <svg className='absolute top-10 left-10 w-32 h-32 text-orange-300 animate-pulse' viewBox="0 0 100 100" fill="currentColor">
          <circle cx="20" cy="20" r="3">
            <animate attributeName="r" values="3;8;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="50" cy="15" r="4">
            <animate attributeName="r" values="4;9;4" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="80" cy="25" r="2">
            <animate attributeName="r" values="2;7;2" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="15" cy="60" r="5">
            <animate attributeName="r" values="5;10;5" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="70" cy="70" r="3">
            <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>

        <svg className='absolute bottom-10 right-10 w-40 h-40 text-blue-300 animate-spin' style={{animationDuration: '20s'}} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <polygon points="50,10 90,90 10,90" className="animate-pulse">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 50 50;360 50 50" 
              dur="15s" 
              repeatCount="indefinite"
            />
          </polygon>
          <circle cx="50" cy="50" r="20" className="animate-pulse"/>
          <circle cx="50" cy="50" r="35" className="animate-pulse"/>
        </svg>

        <svg className='absolute top-1/2 left-1/4 w-24 h-24 text-purple-300' viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 L90,50 L50,90 L10,50 Z">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 50 50;360 50 50" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <svg className='absolute bottom-1/4 left-1/2 w-36 h-36 text-green-300' viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="25" y="25" width="50" height="50" rx="10">
            <animate attributeName="rx" values="10;25;10" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </div>

      {/* Glassy Footer Content */}
      <div className='relative backdrop-blur-lg bg-transparent border-t border-white/20 shadow-2xl'>
        <div className='p-6 md:p-10'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between'>
            
            {/* Address Section */}
            <div className='flex flex-col space-y-2 text-gray-800'>
              <h3 className='text-lg font-semibold text-orange-600 mb-3'>Visit Us</h3>
              <div className='text-base md:text-lg space-y-1 uppercase font-medium'>
                <p className='hover:text-orange-600 transition-colors duration-300'>Street 2</p>
                <p className='hover:text-orange-600 transition-colors duration-300'>Phase 9, Sector 11</p>
                <p className='hover:text-orange-600 transition-colors duration-300'>DHA, Lahore</p>
                <p className='hover:text-orange-600 transition-colors duration-300'>Pakistan</p>
              </div>
            </div>

            {/* Social Links & Contact */}
            <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
              {/* Social Media */}
              <div className='space-y-6'>
                <div className='space-y-3'>
                  <h4 className='text-lg font-semibold text-gray-800'>Follow Us</h4>
                  <div className='flex flex-col space-y-2'>
                    <a href="#" className='flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2 group'>
                      <FaTwitter className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
                      <span>Twitter/X</span>
                    </a>
                    <a href="#" className='flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2 group'>
                      <FaInstagram className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
                      <span>Instagram</span>
                    </a>
                    <a href="#" className='flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2 group'>
                      <FaLinkedin className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className='space-y-4'>
                  <div className='p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/30'>
                    <h5 className='font-semibold text-orange-600 mb-2'>General Queries</h5>
                    <a href="mailto:hello@digitallab.com" className='text-gray-700 hover:text-orange-600 transition-colors duration-300'>
                      hello@digitallab.com
                    </a>
                  </div>
                  
                  <div className='p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/30'>
                    <h5 className='font-semibold text-orange-600 mb-2'>Business</h5>
                    <a href="mailto:business@digitallab.com" className='text-gray-700 hover:text-orange-600 transition-colors duration-300'>
                      business@digitallab.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className='flex flex-col space-y-6 min-w-0 lg:min-w-80'>
              <div className='space-y-2'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight'>
                  Subscribe To
                </h3>
                <h4 className='text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 leading-tight'>
                  Our Newsletter
                </h4>
              </div>
              
              <div className='relative group'>
                <div className='flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/40 overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/10'>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className='flex-1 px-4 md:px-6 py-3 md:py-4 bg-transparent text-gray-800 placeholder-gray-600 outline-none text-sm md:text-base'
                  />
                  <button className='p-3 md:p-4  text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'>
                    <FaArrowRight className='w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </button>
                </div>
                
                {/* Animated border */}
                <div className='absolute inset-0 rounded-full border-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className='mt-8 pt-6 border-t border-white/20'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600'>
              <p>&copy; 2025 Digital Lab. All rights reserved.</p>
              <div className='flex gap-6'>
                <a href="#" className='hover:text-orange-600 transition-colors duration-300'>Privacy Policy</a>
                <a href="#" className='hover:text-orange-600 transition-colors duration-300'>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer