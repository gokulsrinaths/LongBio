import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';

interface Collection {
  id: string;
  title: string;
  description: string;
  resourceCount: number;
}

const ResourceCollections: React.FC = () => {
  const collections: Collection[] = [
    {
      id: '1',
      title: 'Getting Started with Longevity Research',
      description: 'Essential resources for beginners in the field.',
      resourceCount: 12
    },
    {
      id: '2',
      title: 'Advanced Biotechnology',
      description: 'Deep dives into cutting-edge biotech research.',
      resourceCount: 8
    },
    {
      id: '3',
      title: 'Clinical Studies',
      description: 'Latest clinical trials and research papers.',
      resourceCount: 15
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <motion.div
          key={collection.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="h-full p-6">
            <Typography variant="h4" className="mb-2">
              {collection.title}
            </Typography>
            <Typography variant="body2" className="text-gray-600 mb-4">
              {collection.description}
            </Typography>
            <Typography variant="caption" className="text-blue-600">
              {collection.resourceCount} resources
            </Typography>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ResourceCollections;