import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';

interface Recommendation {
  id: string;
  title: string;
  type: string;
  relevanceScore: number;
  description: string;
}

const SmartRecommendations: React.FC = () => {
  const recommendations: Recommendation[] = [
    {
      id: '1',
      title: 'Latest Advances in Aging Research',
      type: 'Research Paper',
      relevanceScore: 0.95,
      description: 'A comprehensive review of recent breakthroughs.'
    },
    {
      id: '2',
      title: 'Understanding Cellular Aging',
      type: 'Course',
      relevanceScore: 0.88,
      description: 'In-depth course on cellular biology and aging mechanisms.'
    },
    {
      id: '3',
      title: 'Biotech Innovation Trends',
      type: 'Report',
      relevanceScore: 0.82,
      description: 'Analysis of emerging biotechnology trends.'
    }
  ];

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <motion.div
          key={rec.id}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <Typography variant="h5" className="mb-1">
                  {rec.title}
                </Typography>
                <Typography variant="caption" className="text-gray-600">
                  {rec.type} • {Math.round(rec.relevanceScore * 100)}% relevant
                </Typography>
                <Typography variant="body2" className="mt-2">
                  {rec.description}
                </Typography>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default SmartRecommendations;