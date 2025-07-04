'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const resources = [
    {
      title: 'LongBio Institute Database',
      description: 'Comprehensive database of People, Companies, and Investors in the longevity space',
      href: '/database',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15h6" />
        </svg>
      ),
    },
    {
      title: 'Library',
      description: 'Access to papers, books, courses, videos, podcasts, and journals',
      href: '/library',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Events',
      description: 'Conferences and gatherings in the longevity biotech space',
      href: '/events',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const sponsors = [
    { tier: 'Platinum', logos: ['GCLS'] },
    { tier: 'Gold', logos: ['LBF'] },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Advancing the field of{' '}
              <span className="text-blue-600">Longevity Biotech</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Connecting researchers, companies, and investors to accelerate breakthroughs 
              in longevity science and bring effective therapies to market faster.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/database"
                className="rounded-md bg-blue-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Explore Our Database
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-12">
            Our Sponsors & Collaborators
          </h2>
          
          {/* Platinum Tier */}
          <div className="mb-16">
            <h3 className="text-center text-lg text-gray-600 mb-8">Platinum Partners</h3>
            <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 max-w-4xl">
              {[1, 2, 3].map((i) => (
                <div key={`platinum-${i}`} className="bg-gray-100 aspect-[3/2] rounded-lg flex items-center justify-center p-6">
                  <div className="text-gray-400 text-xl font-semibold">Platinum {i}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div className="mb-16">
            <h3 className="text-center text-lg text-gray-600 mb-8">Gold Partners</h3>
            <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 max-w-5xl">
              {[1, 2, 3, 4].map((i) => (
                <div key={`gold-${i}`} className="bg-gray-100 aspect-[3/2] rounded-lg flex items-center justify-center p-4">
                  <div className="text-gray-400 text-lg font-semibold">Gold {i}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Collaborators */}
          <div>
            <h3 className="text-center text-lg text-gray-600 mb-8">Institutional Collaborators</h3>
            <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 max-w-6xl">
              {['GCLS', 'LBF', 'Institute 3', 'Institute 4', 'Institute 5'].map((name, i) => (
                <div key={`inst-${i}`} className="bg-gray-100 aspect-[3/2] rounded-lg flex items-center justify-center p-4">
                  <div className="text-gray-400 text-lg font-semibold">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join the LongBio Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Support our mission and get access to exclusive resources, events,
            and networking opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/about#membership"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/blog"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 