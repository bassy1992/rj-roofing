export type ProjectCategory = 'all' | 'residential' | 'industrial' | 'shingle' | 'trussing' | 'repair';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  imageUrl: string;
  roofType: string;
  roofColor: string;
  location: string;
  sizeSqM: number;
  completedYear: number;
  clientType: 'Residential' | 'Industrial Warehouse' | 'Commercial' | 'Estate Developer';
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  suitableFor: string[];
  imageUrl: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  projectType: 'residential' | 'warehouse' | 'commercial' | 'renovation';
  serviceNeeded: string;
  roofMaterial: string;
  estimatedAreaSqM: string;
  location: string;
  message: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
}

export interface EstimatorResult {
  materialCost: number;
  laborCost: number;
  trussCost: number;
  guttersCost: number;
  totalEstimated: number;
  estimatedDurationDays: number;
}

export interface RoofColorOption {
  id: string;
  name: string;
  hexCode: string;
  bgClass: string;
  description: string;
  imageOverlay: string;
}
