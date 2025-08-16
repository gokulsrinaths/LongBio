'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

interface ReadingItem {
  id: string;
  title: string;
  progress: number;
  lastRead: string;
  timeLeft: string;
}

interface ReadingProgressProps {
  items: ReadingItem[];
}

export default function ReadingProgress({ items }: ReadingProgressProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Your Reading Progress</h3>
      <div className="space-y-6">
        {items.map(item => (
          <div key={item.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-blue-200">{item.title}</span>
              <span className="text-blue-300">{item.progress}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${item.progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-sm text-blue-200">
              <span>Last read: {item.lastRead}</span>
              <span>Estimated time left: {item.timeLeft}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
} 