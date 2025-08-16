'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Filter, CompanyType, FundingStage } from '@/types/database';

interface FilterBarProps {
  onFilterChange: (filters: Filter) => void;
  onSearch: (term: string) => void;
  activeFilters: Filter;
}

export function FilterBar({ onFilterChange, onSearch, activeFilters }: FilterBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const companyTypes: CompanyType[] = [
    'Biotech',
    'Technology',
    'Research',
    'AI/ML',
    'Pharma',
    'Diagnostics',
    'Medical Devices',
    'Services',
  ];

  const fundingStages: FundingStage[] = [
    'Pre-seed',
    'Seed',
    'Series A',
    'Series B',
    'Series C',
    'Series D+',
    'Public',
    'Acquired',
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const toggleFilter = (type: keyof Filter, value: CompanyType | FundingStage) => {
    const currentValues = (activeFilters[type] as (CompanyType | FundingStage)[]) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];

    onFilterChange({
      ...activeFilters,
      [type]: newValues.length > 0 ? newValues : undefined,
    });
  };

  const clearFilters = () => {
    onFilterChange({});
    setSearchTerm('');
    onSearch('');
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {/* Search and Advanced Toggle */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search companies, technologies, or locations..."
              className="w-full px-4 py-3 pl-12 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg 
              className="absolute left-4 top-3.5 h-5 w-5 text-blue-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowAdvanced(!showAdvanced)}
            aria-expanded={showAdvanced}
            aria-controls="advanced-filters"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
              />
            </svg>
            Filters
          </Button>
        </div>

        {/* Advanced Filters */}
        <motion.div
          id="advanced-filters"
          initial={false}
          animate={{ height: showAdvanced ? 'auto' : 0, opacity: showAdvanced ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-6">
            {/* Company Types */}
            <div>
              <h3 className="text-sm font-medium text-blue-200 mb-3">Company Type</h3>
              <div className="flex flex-wrap gap-2">
                {companyTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => toggleFilter('type', type)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      activeFilters.type?.includes(type)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-blue-200 hover:bg-white/10'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Funding Stages */}
            <div>
              <h3 className="text-sm font-medium text-blue-200 mb-3">Funding Stage</h3>
              <div className="flex flex-wrap gap-2">
                {fundingStages.map(stage => (
                  <button
                    key={stage}
                    onClick={() => toggleFilter('stage', stage)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      activeFilters.stage?.includes(stage)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-blue-200 hover:bg-white/10'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Funding Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Min Funding (M$)
                </label>
                <input
                  type="number"
                  min="0"
                  value={activeFilters.minFunding || ''}
                  onChange={(e) => onFilterChange({
                    ...activeFilters,
                    minFunding: e.target.value ? Number(e.target.value) : undefined,
                  })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Max Funding (M$)
                </label>
                <input
                  type="number"
                  min="0"
                  value={activeFilters.maxFunding || ''}
                  onChange={(e) => onFilterChange({
                    ...activeFilters,
                    maxFunding: e.target.value ? Number(e.target.value) : undefined,
                  })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Team Size Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Min Team Size
                </label>
                <input
                  type="number"
                  min="0"
                  value={activeFilters.minTeamSize || ''}
                  onChange={(e) => onFilterChange({
                    ...activeFilters,
                    minTeamSize: e.target.value ? Number(e.target.value) : undefined,
                  })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Max Team Size
                </label>
                <input
                  type="number"
                  min="0"
                  value={activeFilters.maxTeamSize || ''}
                  onChange={(e) => onFilterChange({
                    ...activeFilters,
                    maxTeamSize: e.target.value ? Number(e.target.value) : undefined,
                  })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Active Filters */}
        {Object.keys(activeFilters).length > 0 && (
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-blue-200">Active Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-200 hover:text-white"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.type?.map(type => (
                <span
                  key={type}
                  className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-200 text-sm flex items-center gap-2"
                >
                  {type}
                  <button
                    onClick={() => toggleFilter('type', type)}
                    className="hover:text-white"
                    aria-label={`Remove ${type} filter`}
                  >
                    ×
                  </button>
                </span>
              ))}
              {activeFilters.stage?.map(stage => (
                <span
                  key={stage}
                  className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-200 text-sm flex items-center gap-2"
                >
                  {stage}
                  <button
                    onClick={() => toggleFilter('stage', stage)}
                    className="hover:text-white"
                    aria-label={`Remove ${stage} filter`}
                  >
                    ×
                  </button>
                </span>
              ))}
              {activeFilters.minFunding && (
                <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-200 text-sm flex items-center gap-2">
                  Min ${activeFilters.minFunding}M
                  <button
                    onClick={() => onFilterChange({ ...activeFilters, minFunding: undefined })}
                    className="hover:text-white"
                    aria-label="Remove minimum funding filter"
                  >
                    ×
                  </button>
                </span>
              )}
              {activeFilters.maxFunding && (
                <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-200 text-sm flex items-center gap-2">
                  Max ${activeFilters.maxFunding}M
                  <button
                    onClick={() => onFilterChange({ ...activeFilters, maxFunding: undefined })}
                    className="hover:text-white"
                    aria-label="Remove maximum funding filter"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
