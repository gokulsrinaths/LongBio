import React from 'react';
import Link from 'next/link';

export default function TypologyPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <Link
              href="/database"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Database
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            LongBio Typology
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Classification and categorization of legitimate longevity biotech approaches
          </p>
        </div>
      </section>

      {/* Airtable Embed */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              className="airtable-embed w-full"
              src="https://airtable.com/embed/app2ge6qh7frci58c/shr52yN1NPoJeNX7q?layout=card&viewControls=on"
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

      {/* Additional Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About This Database
            </h2>
            <p className="text-gray-600">
              The LongBio Typology provides a comprehensive classification system for
              longevity biotechnology approaches. This framework helps researchers,
              investors, and enthusiasts understand the different methodologies,
              their scientific basis, and potential impact on human longevity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 