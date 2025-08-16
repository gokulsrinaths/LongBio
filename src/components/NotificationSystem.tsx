'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss: (id: string) => void;
}

export default function NotificationSystem({ notifications, onDismiss }: NotificationSystemProps): JSX.Element {
  return (
    <div className="fixed top-20 right-6 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-blue-600/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg max-w-sm flex items-center gap-3"
          >
            <span className="text-sm text-white">
              {notification.message}
            </span>
            <button
              onClick={() => onDismiss(notification.id)}
              className="ml-auto text-blue-200 hover:text-white"
            >
              ×
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 