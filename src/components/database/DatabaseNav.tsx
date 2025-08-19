'use client';

import { motion } from 'framer-motion';
import { databaseConfig } from '@/config/database';
import type { DatabaseView } from '@/config/database';

interface DatabaseButtonProps {
  url: string;
  label: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

function DatabaseButton({ url: _url, label, description, isActive, onClick }: DatabaseButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full px-6 py-4 rounded-xl transition-all duration-200
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-950
        ${isActive 
          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600' 
          : 'bg-white/10 text-blue-100 hover:bg-white/20 hover:text-white'}
      `}
      aria-label={`${label} - ${description}`}
      title={description}
      role="tab"
      aria-selected={isActive}
    >
      <span className="text-lg font-medium">{label}</span>
    </motion.button>
  );
}

interface DatabaseNavProps {
  activeView: DatabaseView;
  onViewChange: (view: DatabaseView) => void;
}

export function DatabaseNav({ activeView, onViewChange }: DatabaseNavProps) {
  const handleClick = (view: DatabaseView) => {
    console.log(`Database navigation: ${view} clicked`);
    onViewChange(view);
  };

  return (
    <div className="p-1">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        role="tablist"
        aria-label="Database categories"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {(Object.entries(databaseConfig) as [DatabaseView, typeof databaseConfig[DatabaseView]][]).map(([key, config]) => (
          <DatabaseButton
            key={key}
            url={config.url}
            label={config.label}
            description={config.description}
            isActive={activeView === key}
            onClick={() => handleClick(key)}
          />
        ))}
      </motion.div>
    </div>
  );
}