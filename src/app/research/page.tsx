'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface ResearchMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

interface ResearchProject {
  title: string;
  lead: string;
  status: string;
  progress: number;
  tags: string[];
  collaborators: number;
}

export default function ResearchHub() {
  const metrics: ResearchMetric[] = [
    {
      label: 'Active Research Projects',
      value: '42',
      change: '+8 this quarter',
      trend: 'up',
    },
    {
      label: 'Published Papers',
      value: '156',
      change: '+23 this year',
      trend: 'up',
    },
    {
      label: 'Research Partners',
      value: '28',
      change: '+5 this month',
      trend: 'up',
    },
    {
      label: 'Total Citations',
      value: '2,847',
      change: '+312 this quarter',
      trend: 'up',
    },
  ]

  const featuredProjects: ResearchProject[] = [
    {
      title: 'Cellular Regeneration Pathways',
      lead: 'Dr. Sarah Chen',
      status: 'Active',
      progress: 75,
      tags: ['Cellular Biology', 'Regeneration', 'Longevity'],
      collaborators: 8,
    },
    {
      title: 'AI-Driven Drug Discovery',
      lead: 'Prof. Michael Roberts',
      status: 'Active',
      progress: 60,
      tags: ['AI/ML', 'Drug Discovery', 'Automation'],
      collaborators: 12,
    },
    {
      title: 'Aging Biomarkers Study',
      lead: 'Dr. Emily Thompson',
      status: 'Active',
      progress: 40,
      tags: ['Biomarkers', 'Clinical Research', 'Diagnostics'],
      collaborators: 6,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Research Hub
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing research projects, publications, and opportunities
              for collaboration in longevity science.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold text-gray-900">{metric.value}</p>
                  <p className={`ml-2 text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Research Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    {project.collaborators} collaborators
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Led by {project.lead}
                </p>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          Progress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                      <div
                        style={{ width: `${project.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href={`/research/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Join Our Research Community
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Collaborate with leading researchers and contribute to groundbreaking
            discoveries in longevity science.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/research/collaborate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Collaborating
            </Link>
            <Link
              href="/research/grants"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Apply for Grants
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 