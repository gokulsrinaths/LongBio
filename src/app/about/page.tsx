'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface MembershipTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
}

export default function AboutPage() {
  const team: TeamMember[] = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Director of Research',
      image: '/team/sarah.jpg',
      bio: 'Leading expert in cellular regeneration with over 15 years of research experience.',
    },
    {
      name: 'Prof. Michael Roberts',
      role: 'Head of AI Research',
      image: '/team/michael.jpg',
      bio: 'Pioneer in applying machine learning to drug discovery and longevity research.',
    },
    {
      name: 'Dr. Emily Thompson',
      role: 'Clinical Research Director',
      image: '/team/emily.jpg',
      bio: 'Specialist in translating longevity research into clinical applications.',
    },
  ]

  const membershipTiers: MembershipTier[] = [
    {
      name: 'Individual',
      price: '$99',
      period: 'year',
      features: [
        'Access to LongBio Database',
        'Digital Library Access',
        'Monthly Research Updates',
        'Community Forum Access',
        'Discounted Event Tickets',
      ],
      buttonText: 'Contact for Individual Membership',
    },
    {
      name: 'Organization',
      price: '$499',
      period: 'year',
      features: [
        'All Individual Benefits',
        'API Access to Database',
        'Priority Support',
        'Team Collaboration Tools',
        'Custom Research Reports',
        'Private Events Access',
      ],
      buttonText: 'Contact for Organization Membership',
    },
  ]

  const handleContactClick = (tierName: string) => {
    window.location.href = `mailto:contact@longbio.institute?subject=Membership Inquiry - ${tierName}`
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About LongBio Institute
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to advancing longevity research through collaboration,
            innovation, and open science.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <div className="aspect-w-1 aspect-h-1 mb-6">
                  <div className="w-[200px] h-[200px] rounded-full mx-auto bg-blue-100 flex items-center justify-center">
                    <span className="text-4xl text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join LongBio Institute
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us to learn more about our membership options and join our
              community of researchers and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleContactClick(tier.name)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that by bringing together the brightest minds in
                longevity research and providing them with the right tools and
                resources, we can accelerate the pace of discoveries in the field.
              </p>
              <p className="text-lg text-gray-600">
                Our institute focuses on fostering collaboration, supporting
                innovative research, and making knowledge accessible to advance
                the field of longevity biotechnology.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Researchers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Published Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$2B+</div>
                  <div className="text-gray-600">Research Funding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 