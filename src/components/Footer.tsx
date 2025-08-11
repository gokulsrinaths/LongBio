'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography } from './ui/Typography';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: 'About Us', href: '/about' },
      { label: 'Research', href: '/research' },
      { label: 'Events', href: '/events' },
      { label: 'Blog', href: '/blog' },
    ],
    resources: [
      { label: 'Database', href: '/database' },
      { label: 'Library', href: '/library' },
      { label: 'Transparency', href: '/transparency' },
    ],
    connect: [
      { label: 'Contact', href: 'mailto:contact@longbio.org' },
      { label: 'Twitter', href: 'https://twitter.com/longbio' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/longbio' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Typography variant="h6" className="mb-4">LongBio Institute</Typography>
            <Typography variant="body2" className="text-gray-400">
              Advancing the field of longevity biotechnology through research, collaboration, and innovation.
            </Typography>
          </div>
          
          <div>
            <Typography variant="h6" className="mb-4">About</Typography>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h6" className="mb-4">Resources</Typography>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h6" className="mb-4">Connect</Typography>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Typography variant="caption" className="text-gray-400">
              © {currentYear} LongBio Institute. All rights reserved.
            </Typography>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;