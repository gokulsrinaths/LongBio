'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Database', href: '/database' },
    { name: 'Library', href: '/library' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-950/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
      initial={shouldReduceMotion ? {} : { y: -100 }}
      animate={shouldReduceMotion ? {} : { y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div 
            className="flex-shrink-0"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <Link 
              href="/" 
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 rounded-xl"
              aria-label="LongBio Institute (LBI) - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-950 font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                LBI
              </div>
              <motion.span 
                className="ml-3 text-xl font-semibold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                LongBio Institute
              </motion.span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = item.href === '/' 
                ? pathname === '/'
                : pathname.startsWith(item.href);

              return (
                <motion.div
                  key={item.name}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 rounded-lg"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={`relative z-10 text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-lg"
                        layoutId="navbar-active"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            className="md:hidden relative w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group rounded-lg"
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 w-6 h-6 m-auto">
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 group-hover:bg-blue-200 ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
              }`} />
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 group-hover:bg-blue-200 ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
              }`} />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-950/95 backdrop-blur-lg rounded-b-xl border-t border-white/10">
            {navItems.map((item) => {
              const isActive = item.href === '/' 
                ? pathname === '/'
                : pathname.startsWith(item.href);

              return (
                <motion.div
                  key={item.name}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}