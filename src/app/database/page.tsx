import React from 'react'
import Link from 'next/link'

const categories = [
  {
    title: 'People',
    description: 'Leading researchers, founders, and experts in longevity biotech',
    href: '/database/people',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Companies',
    description: 'Innovative companies developing longevity technologies and therapies',
    href: '/database/companies',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Investors',
    description: 'VCs, angel investors, and funds focused on longevity investments',
    href: '/database/investors',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'LongBio Typology',
    description: 'Classification and categorization of legitimate longevity biotech approaches',
    href: '/database/typology',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
]

export default function DatabasePage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            LongBio Institute Database
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive database of key players and approaches in the longevity biotech field
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{category.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="text-blue-600 font-medium hover:text-blue-700">
                  Explore {category.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Database Access Coming Soon
          </h2>
          <p className="text-gray-600">
            We're currently curating and organizing our database. Sign up for updates to be notified when it launches.
          </p>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Notified
          </button>
        </div>
      </section>
    </main>
  )
} 