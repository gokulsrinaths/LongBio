'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Discussion {
  id: string;
  title: string;
  lastMessage: string;
  participants: string[];
  activity: number;
  lastActive: string;
}

interface StudyGroupsProps {
  discussions: Discussion[];
  onJoinDiscussion: (id: string) => void;
  onStartDiscussion: () => void;
}

export default function StudyGroups({
  discussions,
  onJoinDiscussion,
  onStartDiscussion,
}: StudyGroupsProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Active Discussions</h3>
        <Button variant="secondary" onClick={onStartDiscussion}>
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Start New Discussion
        </Button>
      </div>
      <div className="space-y-4">
        {discussions.map(discussion => (
          <motion.div
            key={discussion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center relative">
                  <span className="text-blue-200">{discussion.participants.length}</span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400/50"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium mb-1 truncate">{discussion.title}</h4>
                <p className="text-blue-200 text-sm mb-2 line-clamp-2">{discussion.lastMessage}</p>
                <div className="flex items-center gap-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {discussion.activity} messages today
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {discussion.lastActive}
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onJoinDiscussion(discussion.id)}
              >
                Join
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
} 