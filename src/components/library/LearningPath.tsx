'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  resources: string[];
}

interface LearningPathProps {
  milestones: Milestone[];
}

export default function LearningPath({ milestones }: LearningPathProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Learning Path</h3>
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
        
        {/* Milestones */}
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-12 pb-8 last:pb-0"
          >
            {/* Milestone Dot */}
            <motion.div
              className={`absolute left-2 top-2 w-4 h-4 rounded-full ${
                milestone.completed ? 'bg-blue-500' : 'bg-white/20'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {milestone.completed && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/50"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{milestone.title}</h4>
                <span className={`text-sm ${
                  milestone.completed ? 'text-blue-300' : 'text-blue-500'
                }`}>
                  {milestone.completed ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <p className="text-blue-200 text-sm mb-4">{milestone.description}</p>
              <div className="flex flex-wrap gap-2">
                {milestone.resources.map(resource => (
                  <motion.span
                    key={resource}
                    className="px-2 py-1 rounded-full bg-blue-600/20 text-blue-200 text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {resource}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
} 