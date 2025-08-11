'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface FundingSource {
  name: string;
  amount: string;
  type: 'Grant' | 'Partnership' | 'Donation';
  date: string;
  description: string;
}

interface MilestoneUpdate {
  title: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
}

export default function TransparencyPage() {
  const fundingSources: FundingSource[] = [
    {
      name: 'National Science Foundation',
      amount: '$2.5M',
      type: 'Grant',
      date: '2024-01',
      description: 'Research grant for advancing cellular regeneration studies',
    },
    {
      name: 'BioTech Partners',
      amount: '$1.8M',
      type: 'Partnership',
      date: '2023-12',
      description: 'Industry collaboration for drug discovery platform development',
    },
    {
      name: 'Anonymous Donor',
      amount: '$1M',
      type: 'Donation',
      date: '2023-11',
      description: 'Unrestricted funding for longevity research',
    },
  ]

  const milestones: MilestoneUpdate[] = [
    {
      title: 'Launch of AI Drug Discovery Platform',
      date: '2024-Q1',
      status: 'Completed',
      description: 'Successfully deployed ML models for compound screening',
    },
    {
      title: 'Clinical Trial Phase 1',
      date: '2024-Q2',
      status: 'In Progress',
      description: 'Testing cellular regeneration compounds in human subjects',
    },
    {
      title: 'Research Partnership Expansion',
      date: '2024-Q3',
      status: 'Upcoming',
      description: 'Establishing collaborations with 5 new research institutions',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Transparency & Progress
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in full transparency about our funding, research progress,
              and impact. Explore our latest updates and financial information.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Current Funding Sources
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {fundingSources.map((source) => (
              <div
                key={source.name}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {source.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {source.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {source.amount}
                    </p>
                    <p className="text-sm text-gray-500">
                      {source.type} • {source.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Research Milestones
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
              >
                <div
                  className={`absolute left-[-9px] p-1 rounded-full ${
                    milestone.status === 'Completed'
                      ? 'bg-green-500'
                      : milestone.status === 'In Progress'
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}
                />
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {milestone.title}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        milestone.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : milestone.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{milestone.date}</p>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Impact Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-sm font-medium text-gray-500">
                Research Papers Published
              </h3>
              <p className="mt-2 text-4xl font-bold text-gray-900">156</p>
              <p className="mt-1 text-sm text-green-600">+23 this year</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-sm font-medium text-gray-500">
                Active Clinical Trials
              </h3>
              <p className="mt-2 text-4xl font-bold text-gray-900">12</p>
              <p className="mt-1 text-sm text-green-600">+3 this quarter</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-sm font-medium text-gray-500">
                Research Impact Score
              </h3>
              <p className="mt-2 text-4xl font-bold text-gray-900">89.7</p>
              <p className="mt-1 text-sm text-green-600">+5.2 points</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 