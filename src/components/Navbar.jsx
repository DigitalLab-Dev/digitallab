'use client';
import colorScheme from '@/utils/colors';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');
  const menuRef = useRef(null);
  const buttonsContainerRef = useRef(null);
  const [menuWidth, setMenuWidth] = useState(0);

  const menuLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'BLOGS', href: '/blogs' },
  ];

  useEffect(() => {
    if (buttonsContainerRef.current) {
      setMenuWidth(buttonsContainerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (buttonsContainerRef.current) {
        setMenuWidth(buttonsContainerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (linkName) => {
    if (linkName !== activeLink) {
      setActiveLink(linkName);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className=" w-full fixed top-0 left-0 z-20 rounded-2xl  bg-white/1 backdrop-blur-xs 
     " role="banner">
      <nav
        className="w-full px-4 sm:px-6 lg:px-8 py-4   flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
           <Link href="/" aria-label="Digital Lab Home">
             <Image
               src="/images/logo.png"
               alt="Digital Lab Logo"
               width={150}
               height={40}
               className="h-auto w-full"
             />
           </Link>
        </div>

        {/* Buttons Container */}
        <div
          ref={buttonsContainerRef}
          className="flex items-center justify-center gap-3 sm:gap-5"
        >
          {/* CTA Button */}
          <a
            href="/contact"
            className="group flex items-center justify-between p-2 bg-[#f48020] hover:bg-[#f0750f] sm:p-3 rounded-full cursor-pointer overflow-hidden transition-all duration-500 text-xs sm:text-sm w-24 sm:w-30"
            aria-label="Contact us"
          >
            <FaArrowRight
              className="hidden group-hover:flex text-xs sm:text-sm font-extralight text-white"
              aria-hidden="true"
            />
            <span className="uppercase font-semibold">Let's Talk</span>
            <div
              className="w-1.5 sm:w-2 transition-all duration-500 h-1.5 sm:h-2 group-hover:hidden rounded-full"
              style={{ backgroundColor: colorScheme.heading }}
              aria-hidden="true"
            ></div>
          </a>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="group flex items-center justify-between cursor-pointer hover:bg-neutral-100 bg-neutral-400 text-black font-medium transition-all duration-500 p-2 sm:p-3 rounded-full text-xs sm:text-sm w-18 sm:w-30"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            aria-label="Toggle navigation menu"
          >
            <span className="font-semibold">{isMenuOpen?"ClOSE":"MENU"}</span>
            <div
              className="flex w-fit items-center justify-center gap-1 group-hover:flex-col"
              aria-hidden="true"
            >
              <div
                className="w-2 h-2 bg-black rounded-full transition-transform duration-300"
                
              ></div>
              <div
                className="w-2 h-2 bg-black rounded-full transition-transform duration-300"

              ></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-4 sm:right-6 bg-white/20 border border-white/50 backdrop-blur-xl lg:right-8  top-[80%] mt-2 rounded-2xl shadow-xl overflow-hidden z-50 transform transition-all duration-500 ease-out"
          style={{
            width: `${menuWidth}px`,
            minWidth: '250px',
          }}
          role="menu"
          aria-labelledby="menu-button"
        >
          <div className="py-6 px-4">
            {menuLinks.map((link, index) => (
              <div
                key={link.name}
                className={`relative group text-lg sm:text-xl font-semibold transition-all duration-300 py-3 px-4 rounded-lg mb-2 last:mb-0 ${
                  activeLink === link.name
                    ? 'pointer-events-none'
                    : 'cursor-pointer hover:bg-opacity-10'
                }`}
                style={{
                  color:
                    activeLink === link.name
                      ? colorScheme.link
                      : colorScheme.heading,
                  transitionDelay: `${index * 50}ms`,
                  backgroundColor:
                    activeLink === link.name ? 'transparent' : 'transparent',
                }}
                onClick={() => handleLinkClick(link.name)}
                role="menuitem"
                tabIndex={activeLink === link.name ? -1 : 0}
              >
                {/* Active Link Layout */}
                {activeLink === link.name ? (
                  <div className="flex items-center justify-between w-full">
                    <span>{link.name}</span>
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colorScheme.link }}
                      aria-hidden="true"
                    ></div>
                  </div>
                ) : (
                  /* Animated Text Effect for Non-Active Links */
                  <div className="relative overflow-hidden flex  w-full  justify-between items-center">
                    <div>
                      <div className="group-hover:-translate-y-full transition-transform duration-300 ease-out">
                        {link.name}
                      </div>
                      <div
                        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                        style={{ color: colorScheme.link }}
                      >
                        {link.name}
                      </div>
                    </div>
                    <FaArrowRight className='hidden group-hover:flex transition-all duration-500' />
                  </div>
                )}

                {/* Hover Background Effect */}
                {activeLink !== link.name && (
                  <div
                    className="absolute inset-0 -z-10 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: colorScheme.link }}
                    aria-hidden="true"
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Screen reader only skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-2 rounded"
      >
        Skip to main content
      </a>
    </header>
  );
};

export default Navbar;
