export interface PestService {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  scientificCategory: string;
  urgencyLevel: 'Low' | 'Moderate' | 'High' | 'Emergency';
  targetPests: string[];
  treatmentMethod: string;
  guaranteeDays: number;
  featured: boolean;
  image?: string;
  badge?: string;
}

export interface PhotoShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'termite' | 'kitchen' | 'bedbug' | 'commercial' | 'before_after';
  location: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  problemIdentified: string;
  treatmentDone: string;
  resultAchieved: string;
  warranty: string;
  badge: string;
  serviceName: string;
}

export interface ProtectionPlan {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  includes: string[];
  guaranteeText: string;
  recommendedFor: string;
  popular?: boolean;
  image?: string;
}

export interface PestTarget3D {
  id: string;
  name: string;
  latinName: string;
  threatLevel: 'Mild' | 'Severe' | 'Critical';
  habit: string;
  icon: string;
  repelledState: boolean;
}

export interface ProtectionStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  image?: string;
}

export interface GovernmentCertificate {
  id: string;
  title: string;
  badge: string;
  category: string;
  issuer: string;
  regNumber: string;
  legalAct: string;
  validityText: string;
  image: string;
  description: string;
  authorizedScope: string[];
}

export interface CommercialSector {
  id: string;
  title: string;
  industry: string;
  iconName: string;
  description: string;
  complianceStandards: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  propertyType: 'Residential Home' | 'Commercial Office' | 'Hotel Resort' | 'Restaurant Chain' | 'Industrial Park';
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  verifiedCustomer: boolean;
  serviceType: string;
  propertyImage?: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Safety & Eco' | 'Pricing & Plans' | 'Commercial';
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial';
  squareFeet: string;
  pestTypes: string[];
  preferredDate: string;
  urgency: 'Standard (Next 48h)' | 'Same-Day Urgent' | 'Emergency 24/7 Dispatch';
  additionalDetails: string;
  selectedPlanId?: string;
}

export interface QuoteEstimate {
  estimatedMonthly: number;
  estimatedInitial: number;
  suggestedPlan: string;
  includedFeatures: string[];
}

export type ModalType = 'booking' | 'pestAnalyzer' | 'privacy' | 'terms' | null;

