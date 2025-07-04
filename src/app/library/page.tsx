import React from 'react'
import Link from 'next/link'
import VideoCard from '@/components/VideoCard'

const resources = [
  {
    title: 'Research Papers',
    description: 'Access to peer-reviewed papers and scientific publications',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Video Content',
    description: 'Curated collection of lectures, presentations, and research talks',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Recommended Courses',
    description: 'Online courses and educational resources in longevity science',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'YouTube Playlist',
    description: 'Curated collection of research talks and presentations',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Recommended Podcasts',
    description: 'Essential podcasts covering longevity research and biotech',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
]

const featuredCourses = [
  {
    title: 'Introduction to Longevity Science',
    instructor: 'Dr. Sarah Chen',
    duration: '6 weeks',
    level: 'Beginner',
    image: '/courses/intro-longevity.jpg',
  },
  {
    title: 'Advanced Biotechnology Methods',
    instructor: 'Prof. Michael Roberts',
    duration: '8 weeks',
    level: 'Advanced',
    image: '/courses/biotech-methods.jpg',
  },
  {
    title: 'The Biology of Aging',
    instructor: 'Dr. Emily Thompson',
    duration: '10 weeks',
    level: 'Intermediate',
    image: '/courses/biology-aging.jpg',
  },
]

const videos = [
  {
    title: 'ImmuneAge Bio + Vitalism',
    speaker: 'Sebastian A Brunemeier',
    date: 'Sep 3, 2024',
    description: 'ImmuneAGE Bio (ImmuneAGE.Bio) is a certified Vitalist organization!',
    url: 'https://www.youtube.com/watch?v=x1pHy4thiCs',
  },
  {
    title: 'ImmuneAGE Bio - Vitalia 2',
    speaker: 'Sebastian A Brunemeier',
    date: 'March 2024',
    description: 'Presentation on ImmuneAGE Bio at Vitalia 2',
    url: 'https://www.youtube.com/watch?v=FBogmihjRWo',
  },
  {
    title: 'EARD 2022 Presentation',
    speaker: 'Sebastian A Brunemeier',
    date: '2022',
    description: 'Longevity Biotech presentation at EARD 2022',
    url: 'https://www.youtube.com/watch?v=l0Wk8Ic5Nws',
  },
]

export default function LibraryPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            LongBio Institute Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our curated collection of research papers, educational content, and multimedia resources
          </p>
        </div>
      </section>

      {/* PDFs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Papers</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              className="airtable-embed w-full"
              src="https://airtable.com/embed/app2ge6qh7frci58c/shrOqjN3a9rzqKO7g?viewControls=on"
              frameBorder="0"
              width="100%"
              height="800"
              style={{
                background: 'transparent',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div className="mt-8 bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              About Our Research Collection
            </h3>
            <p className="text-gray-600">
              Access our curated collection of peer-reviewed papers, scientific publications, 
              and research materials focused on longevity biotechnology. These resources 
              are carefully selected to provide comprehensive insights into the field.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter/Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Newsletter</h2>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5H5C4.44772 5 4 5.44772 4 6V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V6C20 5.44772 19.5523 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Subscribe to Our Substack
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Stay updated with the latest insights in longevity biotechnology. 
                Join our growing community of researchers, entrepreneurs, and enthusiasts.
              </p>
              <a
                href="https://longbio.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Read on Substack
                <svg
                  className="w-5 h-5 ml-2"
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
          </div>
        </div>
      </section>

      {/* Video Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Video Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Introduction to Longevity Science',
                provider: 'MIT OpenCourseWare',
                level: 'Beginner',
                duration: '6 weeks',
                url: '#',
              },
              {
                title: 'Advanced Biotechnology Methods',
                provider: 'Stanford Online',
                level: 'Advanced',
                duration: '8 weeks',
                url: '#',
              },
              {
                title: 'The Biology of Aging',
                provider: 'Harvard Extension',
                level: 'Intermediate',
                duration: '10 weeks',
                url: '#',
              },
            ].map((course) => (
              <div key={course.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600">Provider: {course.provider}</p>
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <a
                  href={course.url}
                  className="mt-4 block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Playlist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">YouTube Playlist</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/videoseries?list=PLllUANZc4t_BdISxxtngFByiRJHyIoAju"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Watch our curated collection of talks and presentations about longevity research and biotechnology.
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PLllUANZc4t_BdISxxtngFByiRJHyIoAju"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <span>View Full Playlist on YouTube</span>
              <svg
                className="w-5 h-5 ml-2"
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
        </div>
      </section>

      {/* Recommended Podcasts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Podcasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Longevity Research Today',
                host: 'Dr. James Wilson',
                platform: 'Spotify',
                url: '#',
                description: 'Weekly discussions with leading researchers in the field of longevity science.',
              },
              {
                title: 'The Aging Science Podcast',
                host: 'Dr. Maria Garcia',
                platform: 'Apple Podcasts',
                url: '#',
                description: 'Deep dives into the latest breakthroughs in aging research and biotechnology.',
              },
              {
                title: 'Future of Longevity',
                host: 'Alex Thompson',
                platform: 'Google Podcasts',
                url: '#',
                description: 'Exploring the intersection of technology, medicine, and longevity research.',
              },
              {
                title: 'Biotech Innovation Hour',
                host: 'Dr. Sarah Chen',
                platform: 'Spotify',
                url: '#',
                description: 'Conversations with biotech entrepreneurs and researchers about the future of longevity.',
              },
            ].map((podcast) => (
              <div key={podcast.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">{podcast.title}</h3>
                <p className="mt-2 text-sm text-gray-600">Host: {podcast.host}</p>
                <p className="mt-1 text-sm text-gray-600">Available on: {podcast.platform}</p>
                <p className="mt-3 text-gray-600">{podcast.description}</p>
                <a
                  href={podcast.url}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-700"
                >
                  Listen Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Courses
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Start learning from our curated selection of courses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="h-48 bg-gray-200" /> {/* Placeholder for course image */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Instructor: {course.instructor}
                  </p>
                  <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <Link
                    href={`/library/courses/${course.title.toLowerCase().replace(/ /g, '-')}`}
                    className="mt-4 block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Library Access Coming Soon
          </h2>
          <p className="text-gray-600">
            We're currently organizing our library resources. Sign up for updates to be notified when it launches.
          </p>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Notified
          </button>
        </div>
      </section>
    </main>
  )
} 