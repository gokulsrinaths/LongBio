import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const upcomingEvents = [
  {
    name: 'LongBio Institute Summit 2024',
    date: 'June 15-17, 2024',
    location: 'San Francisco, CA',
    description: 'Annual gathering of longevity biotech researchers, founders, and investors',
    status: 'Coming Soon',
  },
  {
    name: 'Aging Research Conference',
    date: 'September 8-10, 2024',
    location: 'Boston, MA',
    description: 'Leading conference on the latest developments in aging research',
    status: 'Registration Open',
  },
  {
    name: 'Longevity Therapeutics Forum',
    date: 'October 20-22, 2024',
    location: 'London, UK',
    description: 'Focus on translating research into therapeutic applications',
    status: 'Call for Papers',
  },
]

const pastEvents = [
  {
    name: 'Biotech Innovation Symposium',
    date: 'November 15-17, 2023',
    location: 'Virtual Event',
    description: 'Exploring breakthrough technologies in longevity research',
    recordings: true,
  },
  {
    name: 'Aging Mechanisms Workshop',
    date: 'September 5-7, 2023',
    location: 'Tokyo, Japan',
    description: 'Deep dive into cellular aging mechanisms and interventions',
    recordings: true,
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            LongBio Institute Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the longevity biotech community at conferences and gatherings worldwide
          </p>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Events
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              className="airtable-embed w-full"
              src="https://airtable.com/embed/app2ge6qh7frci58c/shrKeVA1M8vAxHmwk?viewControls=on"
              frameBorder="0"
              width="100%"
              height="800"
              style={{
                background: 'transparent',
                border: '1px solid #ccc',
              }}
            />
          </div>
        </div>
      </section>

      {/* Submit Event Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Submit Your Event
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Are you organizing a conference or event in the longevity biotech space?
                We'd love to feature it in our calendar.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                Submit Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Want to Stay Updated?
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events
            and recordings from past events.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Subscribe to Updates
          </button>
        </div>
      </section>
    </main>
  )
} 