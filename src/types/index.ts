export type Language = 'en' | 'zh';

export interface VehicleSpecs {
  engine: { en: string; zh: string };
  power: { en: string; zh: string };
  transmission: { en: string; zh: string };
  drive: { en: string; zh: string };
  gvw: { en: string; zh: string };
  emission: { en: string; zh: string };
  wheelbase: { en: string; zh: string };
  fuelCapacity: { en: string; zh: string };
}

export interface Vehicle {
  id: string;
  name: string;
  model: { en: string; zh: string };
  category: 'tractor' | 'tipper' | 'cargo' | 'specialized' | 'electric';
  tagline: { en: string; zh: string };
  image: string;
  specs: VehicleSpecs;
  highlights: { en: string[]; zh: string[] };
  isSample: boolean;
}

export interface BusinessCategory {
  id: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  description: { en: string; zh: string };
  image: string;
  capabilities: { en: string[]; zh: string[] };
  isEditable: boolean;
}

export interface CompanyInfo {
  name: string;
  brandTagline: { en: string; zh: string };
  logoUrl: string;
  instagramUrl: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  isPlaceholderPhone: boolean;
  isPlaceholderEmail: boolean;
  isPlaceholderAddress: boolean;
}

export interface InquiryFormData {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  vehicleInterest: string;
  quantity: string;
  message: string;
  createdAt?: string;
}

export interface TradeRoute {
  id: string;
  name: { en: string; zh: string };
  origin: { en: string; zh: string };
  destination: { en: string; zh: string };
  transitType: { en: string; zh: string };
  leadTime: { en: string; zh: string };
  description: { en: string; zh: string };
}
