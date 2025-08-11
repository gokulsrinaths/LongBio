'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Company, SortOption } from '@/types/database';
import { companyTypeColors, fundingStageColors } from '@/utils/database';

interface CompanyGridProps {
  companies: Company[];
  onCompanyClick: (company: Company) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalCompanies: number;
}

export function CompanyGrid({
  companies,
  onCompanyClick,
  currentPage,
  totalPages,
  onPageChange,
  sortOption,
  onSortChange,
  totalCompanies,
}: CompanyGridProps) {
  const sortableFields: Array<{ field: keyof Company; label: string }> = [
    { field: 'name', label: 'Name' },
    { field: 'type', label: 'Type' },
    { field: 'location', label: 'Location' },
    { field: 'funding', label: 'Funding' },
    { field: 'teamSize', label: 'Team Size' },
    { field: 'stage', label: 'Stage' },
  ];

  const handleSort = (field: keyof Company) => {
    if (sortOption.field === field) {
      onSortChange({
        field,
        direction: sortOption.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      onSortChange({ field, direction: 'asc' });
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {sortableFields.map(({ field, label }) => (
                <th
                  key={field}
                  className="text-left py-3 px-4"
                >
                  <button
                    className="text-blue-200 font-medium hover:text-white flex items-center gap-1"
                    onClick={() => handleSort(field)}
                  >
                    {label}
                    {sortOption.field === field && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {sortOption.direction === 'asc' ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        )}
                      </svg>
                    )}
                  </button>
                </th>
              ))}
              <th className="w-20"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {companies.map(company => (
              <motion.tr
                key={company.id}
                className="group hover:bg-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-medium"
                      style={{ backgroundColor: companyTypeColors[company.type] }}
                    >
                      {company.name[0]}
                    </div>
                    <div className="text-white font-medium">{company.name}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span 
                    className="px-2 py-1 rounded-lg text-sm"
                    style={{ 
                      backgroundColor: `${companyTypeColors[company.type]}20`,
                      color: companyTypeColors[company.type],
                    }}
                  >
                    {company.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-blue-200">{company.location}</td>
                <td className="py-3 px-4 text-blue-200">${company.funding}M</td>
                <td className="py-3 px-4 text-blue-200">{company.teamSize}</td>
                <td className="py-3 px-4">
                  <span 
                    className="px-2 py-1 rounded-lg text-sm"
                    style={{ 
                      backgroundColor: `${fundingStageColors[company.stage]}20`,
                      color: fundingStageColors[company.stage],
                    }}
                  >
                    {company.stage}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCompanyClick(company)}
                  >
                    View →
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-4 py-3 border-t border-white/10 flex justify-between items-center">
        <span className="text-sm text-blue-200">
          Showing {companies.length} of {totalCompanies} companies
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-8 h-8 rounded flex items-center justify-center text-sm transition-colors ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-200 hover:bg-white/10'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
