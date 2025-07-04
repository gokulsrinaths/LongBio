'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Database
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/database/people" className="text-base text-gray-500 hover:text-gray-900">
                  People
                </a>
              </li>
              <li>
                <a href="/database/companies" className="text-base text-gray-500 hover:text-gray-900">
                  Companies
                </a>
              </li>
              <li>
                <a href="/database/investors" className="text-base text-gray-500 hover:text-gray-900">
                  Investors
                </a>
              </li>
              <li>
                <a href="/database/typology" className="text-base text-gray-500 hover:text-gray-900">
                  Typology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/library" className="text-base text-gray-500 hover:text-gray-900">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="/library#videos" className="text-base text-gray-500 hover:text-gray-900">
                  Video Content
                </a>
              </li>
              <li>
                <a href="/library#courses" className="text-base text-gray-500 hover:text-gray-900">
                  Courses
                </a>
              </li>
              <li>
                <a href="/library#podcasts" className="text-base text-gray-500 hover:text-gray-900">
                  Podcasts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Community
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/events" className="text-base text-gray-500 hover:text-gray-900">
                  Events
                </a>
              </li>
              <li>
                <a href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="/research" className="text-base text-gray-500 hover:text-gray-900">
                  Research
                </a>
              </li>
              <li>
                <a href="/transparency" className="text-base text-gray-500 hover:text-gray-900">
                  Transparency
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:hello@longbio.org" className="text-base text-gray-500 hover:text-gray-900">
                  hello@longbio.org
                </a>
              </li>
              <li>
                <a href="https://twitter.com/longbioinst" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/longbioinstitute" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/longbioinstitute" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} LongBio Institute. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Advancing longevity biotechnology through open research and collaboration.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 