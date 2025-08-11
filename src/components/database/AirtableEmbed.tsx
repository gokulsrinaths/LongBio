'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AirtableEmbedProps {
  url: string;
}

export function AirtableEmbed({ url }: AirtableEmbedProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={url}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
      >
        <div className="relative w-full" style={{ height: '700px' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent h-8 z-10" />
          <iframe
            className="airtable-embed w-full h-full"
            src={url}
            frameBorder="0"
            style={{ background: 'transparent' }}
            allow="fullscreen"
            title="Longevity Database"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/50 to-transparent h-8 z-10" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}