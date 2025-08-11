import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface SearchFilters {
  type: string;
  topic: string;
  date: string;
}

const AdvancedSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    type: '',
    topic: '',
    date: '',
  });

  const handleSearch = () => {
    // Implement search functionality
    console.log('Search:', searchTerm, filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Types</option>
            <option value="paper">Papers</option>
            <option value="video">Videos</option>
            <option value="course">Courses</option>
          </select>
          <select
            value={filters.topic}
            onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Topics</option>
            <option value="aging">Aging</option>
            <option value="biotech">Biotech</option>
            <option value="medicine">Medicine</option>
          </select>
          <select
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">Any Date</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
          </select>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button onClick={handleSearch} className="w-full">
            Search
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedSearch;