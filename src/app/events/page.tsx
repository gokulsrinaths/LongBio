'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

export default function EventsPage() {
  return (
    <PageLayout
      title="Longevity Events"
      subtitle="Stay updated with conferences, meetups, and gatherings in longevity science."
    >
      <section className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-white">
                Upcoming Events
              </h2>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                Live Calendar
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Powered by Airtable
            </div>
          </div>

          <p className="text-blue-200 mb-6">
            Browse and filter upcoming events in the longevity field. From scientific conferences to industry meetups, 
            stay informed about the latest gatherings and networking opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="relative w-full" style={{ height: '700px' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent h-8 z-10" />
            <iframe
              className="airtable-embed w-full h-full"
              src="https://airtable.com/embed/app2ge6qh7frci58c/shrKeVA1M8vAxHmwk?viewControls=on"
              frameBorder="0"
              style={{ background: 'transparent' }}
              allow="fullscreen"
              title="Longevity Events Calendar"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/50 to-transparent h-8 z-10" />
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}