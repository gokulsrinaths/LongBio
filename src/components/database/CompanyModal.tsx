'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Company } from '@/types/database';
import { companyTypeColors, fundingStageColors } from '@/utils/database';

interface CompanyModalProps {
  company: Company;
  onClose: () => void;
}

export function CompanyModal({ company, onClose }: CompanyModalProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="w-full max-w-2xl"
        onClick={e => e.stopPropagation()}
      >
        <Card className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl text-white font-bold"
                style={{ backgroundColor: companyTypeColors[company.type] }}
              >
                {company.name[0]}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{company.name}</h2>
                <p className="text-blue-200">{company.location}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-blue-200 hover:text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-blue-200 mb-1">Type</div>
                <div 
                  className="px-2 py-1 rounded-lg text-sm inline-block"
                  style={{ 
                    backgroundColor: `${companyTypeColors[company.type]}20`,
                    color: companyTypeColors[company.type],
                  }}
                >
                  {company.type}
                </div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">Stage</div>
                <div 
                  className="px-2 py-1 rounded-lg text-sm inline-block"
                  style={{ 
                    backgroundColor: `${fundingStageColors[company.stage]}20`,
                    color: fundingStageColors[company.stage],
                  }}
                >
                  {company.stage}
                </div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">Team Size</div>
                <div className="text-white">{company.teamSize} employees</div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">Funding</div>
                <div className="text-white">${company.funding}M</div>
              </div>
            </div>

            {/* Focus Areas */}
            <div>
              <div className="text-sm text-blue-200 mb-2">Focus Areas</div>
              <div className="flex flex-wrap gap-2">
                {company.focus.map(area => (
                  <span 
                    key={area}
                    className="px-2 py-1 rounded-lg bg-blue-600/20 text-blue-200 text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            {company.description && (
              <div>
                <div className="text-sm text-blue-200 mb-2">About</div>
                <p className="text-white">{company.description}</p>
              </div>
            )}

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              {company.foundedYear && (
                <div>
                  <div className="text-sm text-blue-200 mb-1">Founded</div>
                  <div className="text-white">{company.foundedYear}</div>
                </div>
              )}
              {company.website && (
                <div>
                  <div className="text-sm text-blue-200 mb-1">Website</div>
                  <a 
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Visit Website →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
            {company.contactEmail && (
              <a
                href={`mailto:${company.contactEmail}`}
                className="text-blue-400 hover:text-blue-300"
              >
                {company.contactEmail}
              </a>
            )}
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button>
                Contact Company
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
