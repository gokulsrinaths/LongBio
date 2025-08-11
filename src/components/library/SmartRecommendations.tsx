'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Recommendation {
  id: string;
  title: string;
  reason: string;
  matchScore: number;
  tags: string[];
}

interface SmartRecommendationsProps {
  recommendations: Recommendation[];
  onRecommendationClick: (id: string) => void;
}

export default function SmartRecommendations({
  recommendations,
  onRecommendationClick,
}: SmartRecommendationsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Recommended for You</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => onRecommendationClick(item.id)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-4 bg-white/5 backdrop-blur-sm rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-blue-300">
                  {item.matchScore}% Match
                </div>
                <div className="relative w-8 h-8">
                  <svg
                    className="w-full h-full text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-400/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
              <h4 className="text-white font-medium mb-2">{item.title}</h4>
              <p className="text-blue-200 text-sm mb-4">{item.reason}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-blue-600/20 text-blue-200 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
} 