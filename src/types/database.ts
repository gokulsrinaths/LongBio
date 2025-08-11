export interface Company {
  id: string;
  name: string;
  type: CompanyType;
  location: string;
  funding: number;
  teamSize: number;
  stage: FundingStage;
  focus: string[];
  description?: string;
  foundedYear?: number;
  website?: string;
  contactEmail?: string;
}

export type CompanyType = 
  | 'Biotech'
  | 'Technology'
  | 'Research'
  | 'AI/ML'
  | 'Pharma'
  | 'Diagnostics'
  | 'Medical Devices'
  | 'Services';

export type FundingStage = 
  | 'Pre-seed'
  | 'Seed'
  | 'Series A'
  | 'Series B'
  | 'Series C'
  | 'Series D+'
  | 'Public'
  | 'Acquired';

export interface NetworkNode {
  id: string;
  type: 'company' | 'researcher' | 'technology';
  name: string;
  description?: string;
  image?: string;
}

export interface NetworkEdge {
  source: string;
  target: string;
  type?: 'investment' | 'collaboration' | 'research' | 'technology';
  strength?: number;
}

export interface ChartData {
  label: string;
  value: number;
  color: string;
}

export interface Filter {
  type?: CompanyType[];
  stage?: FundingStage[];
  location?: string[];
  minFunding?: number;
  maxFunding?: number;
  minTeamSize?: number;
  maxTeamSize?: number;
  focus?: string[];
}

export interface SortOption {
  field: keyof Company;
  direction: 'asc' | 'desc';
}
