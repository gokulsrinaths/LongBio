'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography } from '@/styles/theme';

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Database',
    href: '/database',
    children: [
      { name: 'People', href: '/database/people' },
      { name: 'Companies', href: '/database/companies' },
      { name: 'Investors', href: '/database/investors' },
      { name: 'Typology', href: '/database/typology' },
    ],
  },
  { name: 'Library', href: '/library' },
  { name: 'Events', href: '/events' },
  { name: 'LongBio Letter', href: '/blog' },
  { name: 'About & Membership', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (href: string) => {
    setOpenDropdown(href);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary-navy-800 flex items-center justify-center">
                <span className={`text-xl font-bold text-white ${typography.fontFamily.serif}`}>
                  LB
                </span>
              </div>
              <span className="ml-3 text-xl font-semibold text-primary-navy-900 hidden sm:block">
                LongBio Institute
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.href)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative group ${
                    pathname.startsWith(item.href)
                      ? 'text-primary-navy-900'
                      : 'text-primary-navy-600 hover:text-primary-navy-900'
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <motion.span
                      className="inline-block ml-1"
                      animate={{ rotate: openDropdown === item.href ? 180 : 0 }}
                    >
                      ▼
                    </motion.span>
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-gold-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: pathname.startsWith(item.href) ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1" role="menu">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block px-4 py-2 text-sm ${
                                pathname === child.href
                                  ? 'bg-primary-navy-50 text-primary-navy-900'
                                  : 'text-primary-navy-600 hover:bg-primary-navy-50'
                              }`}
                              role="menuitem"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Support Us Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-6 px-4 py-2 rounded-md bg-primary-gold-500 text-white font-medium text-sm hover:bg-primary-gold-600 transition-colors"
            >
              Support Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 w-6 h-6 m-auto">
              <span
                className={`absolute h-0.5 w-6 bg-primary-navy-900 transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-primary-navy-900 transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname.startsWith(item.href)
                          ? 'bg-primary-navy-50 text-primary-navy-900'
                          : 'text-primary-navy-600 hover:bg-primary-navy-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-3 py-2 rounded-md text-sm font-medium ${
                              pathname === child.href
                                ? 'bg-primary-navy-50 text-primary-navy-900'
                                : 'text-primary-navy-500 hover:bg-primary-navy-50'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="w-full mt-4 px-4 py-2 rounded-md bg-primary-gold-500 text-white font-medium text-base hover:bg-primary-gold-600 transition-colors">
                  Support Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
