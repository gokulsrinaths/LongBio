'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button as _Button } from '@/components/ui/Button';

interface Collection {
  id: string;
  name: string;
  items: number;
  lastUpdated: string;
  thumbnail: string;
}

interface ResourceCollectionsProps {
  collections: Collection[];
  onCreateCollection: () => void;
  onCollectionClick: (id: string) => void;
}

export default function ResourceCollections({
  collections,
  onCreateCollection,
  onCollectionClick,
}: ResourceCollectionsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Your Collections</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onCollectionClick(collection.id)}
          >
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent z-10" />
              <motion.img
                src={collection.thumbnail}
                alt={collection.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h4 className="text-white font-medium mb-1">{collection.name}</h4>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {collection.items} items
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Last updated {collection.lastUpdated}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="flex items-center justify-center h-40 rounded-lg border-2 border-dashed border-white/10 hover:border-white/20 transition-colors cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={onCreateCollection}
        >
          <div className="text-center">
            <svg className="w-8 h-8 mx-auto mb-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-blue-200">Create New Collection</span>
          </div>
        </motion.div>
      </div>
    </Card>
  );
} 