import type { Company, Filter, SortOption } from '@/types/database';

export function filterCompanies(companies: Company[], filters: Filter): Company[] {
  return companies.filter(company => {
    if (filters.type?.length && !filters.type.includes(company.type)) {
      return false;
    }
    if (filters.stage?.length && !filters.stage.includes(company.stage)) {
      return false;
    }
    if (filters.location?.length && !filters.location.includes(company.location)) {
      return false;
    }
    if (filters.minFunding && company.funding < filters.minFunding) {
      return false;
    }
    if (filters.maxFunding && company.funding > filters.maxFunding) {
      return false;
    }
    if (filters.minTeamSize && company.teamSize < filters.minTeamSize) {
      return false;
    }
    if (filters.maxTeamSize && company.teamSize > filters.maxTeamSize) {
      return false;
    }
    if (filters.focus?.length && !filters.focus.some(f => company.focus.includes(f))) {
      return false;
    }
    return true;
  });
}

export function searchCompanies(companies: Company[], searchTerm: string): Company[] {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return companies;

  return companies.filter(company => {
    return (
      company.name.toLowerCase().includes(term) ||
      company.type.toLowerCase().includes(term) ||
      company.location.toLowerCase().includes(term) ||
      company.focus.some(f => f.toLowerCase().includes(term))
    );
  });
}

export function sortCompanies(companies: Company[], sort: SortOption): Company[] {
  return [...companies].sort((a, b) => {
    const aValue = a[sort.field];
    const bValue = b[sort.field];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sort.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sort.direction === 'asc'
        ? aValue - bValue
        : bValue - aValue;
    }

    return 0;
  });
}

export function paginateCompanies(
  companies: Company[],
  page: number,
  pageSize: number
): { data: Company[]; total: number; totalPages: number } {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = companies.slice(start, end);
  const total = companies.length;
  const totalPages = Math.ceil(total / pageSize);

  return { data, total, totalPages };
}

export function getLocationStats(companies: Company[]): { [key: string]: number } {
  return companies.reduce((acc, company) => {
    acc[company.location] = (acc[company.location] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
}

export function getFundingStats(companies: Company[]): { [key: string]: number } {
  return companies.reduce((acc, company) => {
    acc[company.stage] = (acc[company.stage] || 0) + company.funding;
    return acc;
  }, {} as { [key: string]: number });
}

export function getFocusAreaStats(companies: Company[]): { [key: string]: number } {
  return companies.reduce((acc, company) => {
    company.focus.forEach(focus => {
      acc[focus] = (acc[focus] || 0) + 1;
    });
    return acc;
  }, {} as { [key: string]: number });
}

export function getTeamSizeStats(companies: Company[]): {
  total: number;
  average: number;
  min: number;
  max: number;
} {
  const sizes = companies.map(c => c.teamSize);
  return {
    total: sizes.reduce((a, b) => a + b, 0),
    average: Math.round(sizes.reduce((a, b) => a + b, 0) / companies.length),
    min: Math.min(...sizes),
    max: Math.max(...sizes),
  };
}

export function getTotalFunding(companies: Company[]): number {
  return companies.reduce((total, company) => total + company.funding, 0);
}

export const companyTypeColors: Record<string, string> = {
  Biotech: '#3B82F6',
  Technology: '#22C55E',
  Research: '#A855F7',
  'AI/ML': '#EC4899',
  Pharma: '#F59E0B',
  Diagnostics: '#64748B',
  'Medical Devices': '#06B6D4',
  Services: '#94A3B8',
};

export const fundingStageColors: Record<string, string> = {
  'Pre-seed': '#94A3B8',
  Seed: '#F59E0B',
  'Series A': '#3B82F6',
  'Series B': '#22C55E',
  'Series C': '#A855F7',
  'Series D+': '#EC4899',
  Public: '#06B6D4',
  Acquired: '#64748B',
};
