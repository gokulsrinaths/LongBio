import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const featuredPosts = [
    {
      title: 'The Future of Aging: A Comprehensive Review',
      author: 'Dr. Sarah Chen',
      date: 'March 15, 2024',
      excerpt: 'An in-depth look at the current state of longevity research and what the future holds for human lifespan extension.',
      image: '/blog/aging-future.jpg',
      readTime: '12 min read',
      category: 'Research',
    },
    {
      title: 'Breakthrough in Cellular Regeneration',
      author: 'Prof. Michael Roberts',
      date: 'March 10, 2024',
      excerpt: 'New research reveals promising pathways for cellular regeneration and tissue repair.',
      image: '/blog/cellular-regen.jpg',
      readTime: '8 min read',
      category: 'Science',
    },
    {
      title: 'The Ethics of Life Extension',
      author: 'Dr. Emily Thompson',
      date: 'March 5, 2024',
      excerpt: 'Exploring the ethical implications and societal impact of radical life extension technologies.',
      image: '/blog/ethics.jpg',
      readTime: '15 min read',
      category: 'Ethics',
    },
  ]

  const categories = [
    'All',
    'Research',
    'Science',
    'Ethics',
    'Technology',
    'Industry',
    'Policy',
  ]

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            LongBio Institute Letter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest developments in longevity biotech through our weekly newsletter
          </p>
          <a
            href="https://longbio.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read on Substack
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Featured Posts Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-100 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Coming Soon
                </h3>
                <p className="text-gray-600 mb-4">
                  Our latest insights and analysis will be available here soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get weekly updates on longevity research, biotech developments, and industry news.
          </p>
          <a
            href="https://longbio.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe on Substack
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
} 