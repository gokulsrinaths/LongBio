'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

interface Resource {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: string;
}

interface ResourceExplorerProps {
  resources: Resource[];
}

export default function ResourceExplorer({ resources }: ResourceExplorerProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Card className="p-4 sm:p-6">
      <div className="relative min-h-[400px] sm:min-h-[600px] overflow-hidden">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group touch-manipulation"
              onHoverStart={() => setHoveredId(resource.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === resource.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              
              <div className="relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={resource.thumbnail}
                    alt={resource.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform transition-transform duration-500"
                    style={{
                      transform: hoveredId === resource.id ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    y: hoveredId === resource.id ? -2 : 0,
                    opacity: hoveredId === resource.id ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-blue-200 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300 text-sm">{resource.type}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    >
                      View
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Card>
  );
} 