'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Play,
  Palette,
  Code,
  Share2,
  Search,
  PenTool,
  TrendingUp,
  Target,
} from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const services = {
    left: [
      { name: 'Video Editing', icon: Play, href: '/services/video-editing' },
      {
        name: 'Graphic Design',
        icon: Palette,
        href: '/services/graphic-design',
      },
      {
        name: 'Web Development',
        icon: Code,
        href: '/services/web-development',
      },
      {
        name: 'Social Media Management',
        icon: Share2,
        href: '/services/social-media',
      },
    ],
    right: [
      { name: 'SEO Optimization', icon: Search, href: '/services/seo' },
      {
        name: 'Content Writing',
        icon: PenTool,
        href: '/services/content-writing',
      },
      {
        name: 'Digital Marketing',
        icon: TrendingUp,
        href: '/services/marketing',
      },
      {
        name: 'Brand Strategy',
        icon: Target,
        href: '/services/brand-strategy',
      },
    ],
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Blogs', href: '/blogs' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/services') {
      return pathname.startsWith('/services');
    }
    return pathname === href;
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 
        ${
          isScrolled
            ? ' shadow-lg backdrop-blur-xl'
            : ' backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image
              src="/images/logo.png"
              width={120}
              height={40}
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-8">
              {navLinks.map((item) => (
                <li key={item.name} className="relative">
                  {item.name === 'Services' ? (
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium uppercase tracking-wide relative
                        ${
                          isActive(item.href)
                            ? 'text-orange-400'
                            : 'text-gray-300 hover:text-orange-400'
                        }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {isActive(item.href) && (
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-400 shadow-[0_0_8px_2px_rgba(255,165,0,0.7)] rounded-full"></span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium uppercase tracking-wide relative
                        ${
                          isActive(item.href)
                            ? 'text-orange-400'
                            : 'text-gray-300 hover:text-orange-400'
                        }`}
                    >
                      {item.name}
                      {isActive(item.href) && (
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-400 shadow-[0_0_8px_2px_rgba(255,165,0,0.7)] rounded-full"></span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link href="/contact">
              <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-200 rounded-lg shadow-lg cursor-pointer">
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Services Dropdown - Desktop */}
        {isDropdownOpen && (
          <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-black backdrop-blur-lg border border-white/10 rounded-xl shadow-xl">
            <div className="px-8 py-8 grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Core Services
                </h3>
                <div className="space-y-4">
                  {services.left.map(({ name, icon: Icon, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="flex items-center space-x-4 p-3 hover:bg-white/10 rounded-md transition-colors duration-200 group"
                    >
                      <div className="p-2 bg-orange-100/20 group-hover:bg-orange-500 rounded-md">
                        <Icon className="w-5 h-5 text-orange-400 group-hover:text-white" />
                      </div>
                      <span className="text-gray-200 font-medium group-hover:text-orange-400">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Growth Services
                </h3>
                <div className="space-y-4">
                  {services.right.map(({ name, icon: Icon, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="flex items-center space-x-4 p-3 hover:bg-white/10 rounded-md transition-colors duration-200 group"
                    >
                      <div className="p-2 bg-orange-100/20 group-hover:bg-orange-500 rounded-md">
                        <Icon className="w-5 h-5 text-orange-400 group-hover:text-white" />
                      </div>
                      <span className="text-gray-200 font-medium group-hover:text-orange-400">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg shadow-xl border-t border-gray-800 transition-all duration-300 ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(({ name, href }) => (
              <div key={name}>
                {name === 'Services' ? (
                  <>
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className={`flex items-center justify-between w-full py-3 px-4 font-medium text-sm uppercase tracking-wide transition-colors duration-200 rounded-md
                        ${
                          isActive(href)
                            ? 'text-orange-400'
                            : 'text-gray-200 hover:text-orange-400'
                        }`}
                    >
                      {name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {/* Mobile Services Dropdown */}
                    {isMobileServicesOpen && (
                      <div className="pl-4 space-y-3 mt-2">
                        {[...services.left, ...services.right].map(
                          ({ name, icon: Icon, href }) => (
                            <Link
                              key={name}
                              href={href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center space-x-3 p-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                            >
                              <div className="p-1.5 bg-orange-100/20 rounded-md">
                                <Icon className="w-4 h-4 text-orange-400" />
                              </div>
                              <span className="text-gray-200 font-medium text-sm">
                                {name}
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left py-3 px-4 font-medium text-sm uppercase tracking-wide transition-colors duration-200 rounded-md
                      ${
                        isActive(href)
                          ? 'text-orange-400 bg-white/5'
                          : 'text-gray-200 hover:text-orange-400 hover:bg-white/5'
                      }`}
                  >
                    {name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link href="/contact">
                <button className="w-full flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 font-semibold text-sm uppercase tracking-wide transition-colors duration-200 rounded-lg shadow-md cursor-pointer">
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
