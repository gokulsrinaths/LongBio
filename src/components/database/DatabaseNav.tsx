'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { databaseConfig } from '@/config/database';

interface DatabaseNavProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const DatabaseButton: React.FC<{
  view: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {label}
  </motion.button>
);

export const DatabaseNav: React.FC<DatabaseNavProps> = ({
  activeView,
  onViewChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(databaseConfig).map(([view, { label }]) => (
        <DatabaseButton
          key={view}
          view={view}
          label={label}
          isActive={activeView === view}
          onClick={() => onViewChange(view)}
        />
      ))}
    </div>
  );
};

export default DatabaseNav;