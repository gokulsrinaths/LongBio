import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AirtableEmbedProps {
  url: string;
}

export const AirtableEmbed: React.FC<AirtableEmbedProps> = ({ url }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={url}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full h-[80vh] rounded-lg overflow-hidden"
      >
        <iframe
          className="airtable-embed w-full h-full"
          src={url}
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AirtableEmbed;