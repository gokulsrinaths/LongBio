'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function ExternalLinkIcon({ className = "h-4 w-4" }: { className?: string }): JSX.Element {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
      />
    </svg>
  );
}

function NewsletterForm(): JSX.Element {
  return (
    <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Email address for newsletter"
        />
        <motion.button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-950"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Subscribe
        </motion.button>
      </div>
      <p className="mt-2 text-sm text-blue-200/60">
        Join our community of longevity researchers and enthusiasts.
      </p>
    </form>
  );
}

function FooterSection({
  title, 
  links 
}: { 
  title: string; 
  links: { href: string; text: string; external?: boolean }[] 
}) {
  const _shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
        {title}
      </h3>
      <ul className="space-y-3" role="list">
        {links.map((link) => (
          <motion.li
            key={link.text}
            whileHover={shouldReduceMotion ? {} : { x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href={link.href}
              className="inline-flex items-center text-blue-200/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg px-2 py-1 -mx-2"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={`${link.text}${link.external ? ' (opens in new tab)' : ''}`}
            >
              {link.text}
              {link.external && (
                <ExternalLinkIcon className="ml-1 h-4 w-4 opacity-75" />
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function SocialLinks(): JSX.Element {
  const _shouldReduceMotion = useReducedMotion();
  
  const socialLinks = [
    { href: 'https://twitter.com/longbioinst', icon: 'twitter', label: 'Twitter' },
    { href: 'https://linkedin.com/company/longbioinstitute', icon: 'linkedin', label: 'LinkedIn' },
    { href: 'https://github.com/longbioinstitute', icon: 'github', label: 'GitHub' },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, icon, label }) => (
        <motion.a
          key={icon}
          href={href}
          className="text-blue-200/70 hover:text-white transition-colors p-2 -m-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in new tab)`}
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        >
          <span className="sr-only">{label}</span>
          {icon === 'twitter' && (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          )}
          {icon === 'linkedin' && (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          )}
          {icon === 'github' && (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          )}
        </motion.a>
      ))}
    </div>
  );
}

export default function Footer(): JSX.Element {
  const _shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Research',
      links: [
        { href: '/database/people', text: 'Researchers' },
        { href: '/database/companies', text: 'Companies' },
        { href: '/database/investors', text: 'Investors' },
        { href: '/database/typology', text: 'Research Areas' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '/library', text: 'Research Papers' },
        { href: '/library#videos', text: 'Video Content' },
        { href: '/library#courses', text: 'Courses' },
        { href: '/library#podcasts', text: 'Podcasts' },
      ],
    },
    {
      title: 'Community',
      links: [
        { href: '/events', text: 'Events' },
        { href: '/blog', text: 'Blog' },
        { href: '/research', text: 'Research' },
        { href: '/transparency', text: 'Transparency' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', text: 'About Us' },
        { href: '/membership', text: 'Membership' },
        { href: '/privacy', text: 'Privacy Policy' },
        { href: '/terms', text: 'Terms of Service' },
      ],
    },
  ];

  return (
    <footer 
      className="bg-blue-950 border-t border-white/10"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-6 xl:gap-8">
          {/* Logo and Newsletter Section */}
          <div className="space-y-8 xl:col-span-2">
            <Link 
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-950 font-bold text-xl">
                LBI
              </div>
              <span className="ml-3 text-xl font-semibold text-white">
                LongBio Institute
              </span>
            </Link>
            <motion.p 
              className="text-blue-200/70 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Advancing longevity biotechnology through open research and collaboration. Join us in extending the boundaries of human healthspan.
            </motion.p>
            <NewsletterForm />
          </div>

          {/* Navigation Sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection {...footerSections[0]} />
              <FooterSection {...footerSections[1]} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection {...footerSections[2]} />
              <FooterSection {...footerSections[3]} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-blue-200/60">
              <p>© {currentYear} LongBio Institute</p>
              <div className="hidden md:block">•</div>
              <p>All rights reserved</p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}