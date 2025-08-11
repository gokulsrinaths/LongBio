import React from 'react';
import { Button } from '../ui/Button';

interface Filter {
  field: string;
  value: string;
}

interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

interface FilterBarProps {
  onFilterChange: (filters: Filter[]) => void;
  onSortChange: (sort: SortOption) => void;
  onSearch: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  onSortChange,
  onSearch
}) => {
  const handleFilterChange = (field: string, value: string) => {
    onFilterChange([{ field, value }]);
  };

  const handleSortChange = (field: string, direction: 'asc' | 'desc') => {
    onSortChange({ field, direction });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        className="flex-1 min-w-[200px] px-4 py-2 border rounded-lg"
      />
      <select
        onChange={(e) => handleFilterChange('type', e.target.value)}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="">All Types</option>
        <option value="startup">Startup</option>
        <option value="research">Research</option>
        <option value="corporate">Corporate</option>
      </select>
      <select
        onChange={(e) => handleSortChange('name', e.target.value as 'asc' | 'desc')}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <Button onClick={() => onFilterChange([])}>
        Clear Filters
      </Button>
    </div>
  );
};

export default FilterBar;