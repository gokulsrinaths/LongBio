'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { libraryResources } from '@/data/library';

export default function LibraryPage() {
  return (
    <PageLayout
      title="Knowledge Library"
      subtitle="Curated resources for longevity research and education"
    >
      {/* Previous sections remain the same */}
      <Section title="Research Papers & PDFs">
        <ResourceGrid>
          {libraryResources.pdfs.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </ResourceGrid>
      </Section>

      <Section title="Video Library">
        <ResourceGrid>
          {libraryResources.videos.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </ResourceGrid>
      </Section>

      <Section title="Recommended Courses">
        <ResourceGrid>
          {libraryResources.courses.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </ResourceGrid>
      </Section>

      <Section title="YouTube Talks">
        <ResourceGrid>
          {libraryResources.talks.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </ResourceGrid>
      </Section>

      {/* Updated Podcasts Section - Removed placeholder cards */}
      <Section title="Recommended Podcasts">
        <div className="space-y-12">
          {/* Longevity by Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Longevity by Design with Dr. Gil Blander</h3>
              <iframe 
                src="https://www.listennotes.com/podcasts/longevity-by-design-gil-blander-phd-JAMrgVnSv89/embed/" 
                height="600" 
                style={{
                  width: '100%',
                  minWidth: '100%',
                  borderRadius: '10px'
                }}
                loading="lazy" 
                frameBorder="0" 
                scrolling="no"
              />
            </div>
          </motion.div>

          {/* Found My Fitness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Found My Fitness with Dr. Rhonda Patrick</h3>
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/show/7bAIJCVgnquxXZuQCdZyTi?utm_source=generator" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
}

// Components remain the same
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>
        <div className="h-px flex-grow bg-white/10" />
      </div>
      {children}
    </motion.section>
  );
}

function ResourceGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  );
}

function ResourceCard({ resource }: { resource: typeof libraryResources.pdfs[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {resource.title}
        </h3>
        
        <p className="text-blue-200 mb-4 flex-grow">
          {resource.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-blue-300">
          {resource.author && (
            <span className="flex items-center">
              <span className="mr-2">👤</span>
              {resource.author}
            </span>
          )}
          {resource.duration && (
            <span className="flex items-center">
              <span className="mr-2">⏱️</span>
              {resource.duration}
            </span>
          )}
          {resource.date && (
            <span className="flex items-center">
              <span className="mr-2">📅</span>
              {resource.date}
            </span>
          )}
        </div>

        <motion.a
          href={resource.link}
          className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          whileHover={{ x: 5 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resource
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}