'use client';
import colorScheme from '@/utils/colors';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaCogs,
  FaEnvelope,
  FaBlog,
  FaArrowRight,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuLinks = [
    { name: 'HOME', href: '/', icon: FaHome },
    { name: 'ABOUT', href: '/about', icon: FaUser },
    { name: 'SERVICES', href: '/services', icon: FaCogs },
    { name: 'CONTACT', href: '/contact', icon: FaEnvelope },
    { name: 'BLOGS', href: '/blogs', icon: FaBlog },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    if (isMobile) setIsExpanded(false);
  };

  return (
    <>
      {/* Desktop: Left Side Vertical Navbar */}
      {/* Desktop: Top Horizontal Navbar */}
      <nav className="hidden md:flex fixed w-full  px-10  items-center justify-between  top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Digital Lab Logo"
            width={200} // adjust size
            height={200} // adjust size
            className="object-contain"
          />
        </Link>
        <div className="flex items-center  bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl px-4 py-3 shadow-xl shadow-orange-500/10 space-x-6">
          {/* Logo */}

          {/* Navigation Links in Row */}
          <div className="flex items-center space-x-4">
            {menuLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`group relative flex items-center rounded-xl px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/30'
                      : 'text-orange-300 hover:text-white hover:bg-orange-500/10'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    } mr-2`}
                  />
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-orange-300 group-hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="ml-auto">
            <Link
              href="/contact"
              onClick={() => handleLinkClick('CONTACT')}
              className="group bg-gradient-to-r w-30  from-orange-500  to-yellow-500 text-white rounded-xl px-4 py-2 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span className="font-semibold flex items-center justify-center w-full">
                Let's Talk{' '}
              </span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile: Top Horizontal Navbar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r  to-black/95 backdrop-blur-xl border-b border-orange-500/20">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Digital Lab Logo"
            width={150} // adjust size
            height={150} // adjust size
            className="object-contain"
          />
        </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-300 hover:text-white transition-colors duration-300"
          >
            <FaBars
              className={`w-5 h-5 transition-all duration-300 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-orange-500/20 bg-black/50">
            {menuLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeLink === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`flex items-center space-x-3 p-4 border-b border-orange-500/10 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                      : 'text-orange-300 hover:text-white hover:bg-orange-500/10'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'scale-110' : ''
                    } transition-transform duration-300`}
                  />
                  <span className="font-medium">{link.name}</span>
                  {!isActive && (
                    <FaArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              );
            })}

            {/* Mobile CTA */}
          </div>
        </div>
      </header>

      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-orange-500 text-white p-3 rounded-lg z-[60] shadow-lg"
      >
        Skip to main content
      </a>
    </>
  );
};

export default Navbar;
