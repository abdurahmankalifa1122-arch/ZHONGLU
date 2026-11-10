import { CompanyInfo, InquiryFormData } from '../types';

export const DEFAULT_COMPANY_INFO: CompanyInfo = {
  name: 'ZHONGLU',
  brandTagline: {
    en: 'Driving Global Connections',
    zh: '驰骋全球 · 连接无限',
  },
  logoUrl: './zhonglu-logo.png',
  instagramUrl: 'https://www.instagram.com/zhongluauto1/',
  phone: '+86 (0) 532 8888 6666',
  email: 'trade@zhongluauto.com',
  address: 'International Automotive Logistics Center, Port Free Trade Zone',
  whatsapp: '+8618800008888',
  isPlaceholderPhone: false,
  isPlaceholderEmail: false,
  isPlaceholderAddress: false,
};

const COMPANY_STORAGE_KEY = 'zhonglu_company_info_v1';
const INQUIRIES_STORAGE_KEY = 'zhonglu_inquiries_v1';

export function getStoredCompanyInfo(storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null): CompanyInfo {
  if (!storage) {
    return { ...DEFAULT_COMPANY_INFO };
  }
  try {
    const raw = storage.getItem(COMPANY_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_COMPANY_INFO };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_COMPANY_INFO,
      ...parsed,
      logoUrl: DEFAULT_COMPANY_INFO.logoUrl, // preserve official logo identity
      instagramUrl: DEFAULT_COMPANY_INFO.instagramUrl, // preserve official Instagram
      isPlaceholderPhone: false,
      isPlaceholderEmail: false,
      isPlaceholderAddress: false,
    };
  } catch {
    return { ...DEFAULT_COMPANY_INFO };
  }
}

export function saveCompanyInfo(
  info: Partial<CompanyInfo>,
  storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null
): CompanyInfo {
  const current = getStoredCompanyInfo(storage);
  const updated: CompanyInfo = {
    ...current,
    ...info,
    // Never allow overwriting the official logo or Instagram URL
    name: DEFAULT_COMPANY_INFO.name,
    logoUrl: DEFAULT_COMPANY_INFO.logoUrl,
    instagramUrl: DEFAULT_COMPANY_INFO.instagramUrl,
    isPlaceholderPhone: false,
    isPlaceholderEmail: false,
    isPlaceholderAddress: false,
  };

  if (storage) {
    try {
      storage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // fallback in restricted storage
    }
  }
  return updated;
}

export function resetCompanyInfo(storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null): CompanyInfo {
  if (storage) {
    try {
      storage.removeItem(COMPANY_STORAGE_KEY);
    } catch {
      // ignore
    }
  }
  return { ...DEFAULT_COMPANY_INFO };
}

export interface ValidationResult {
  valid: boolean;
  errors: {
    fullName?: string;
    email?: string;
    message?: string;
  };
}

export function validateInquiry(data: Partial<InquiryFormData>, lang: 'en' | 'zh' = 'en'): ValidationResult {
  const errors: { fullName?: string; email?: string; message?: string } = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = lang === 'zh' ? '请输入姓名（至少2个字符）' : 'Full name is required (at least 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = lang === 'zh' ? '请输入有效的电子邮件地址' : 'Please provide a valid email address';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = lang === 'zh' ? '请输入咨询内容或车辆需求（至少5个字符）' : 'Please enter your message or vehicle requirement (at least 5 characters)';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function saveInquiry(
  inquiry: InquiryFormData,
  storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null
): InquiryFormData[] {
  const newRecord: InquiryFormData = {
    ...inquiry,
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    createdAt: new Date().toISOString(),
  };

  let list: InquiryFormData[] = [];
  if (storage) {
    try {
      const raw = storage.getItem(INQUIRIES_STORAGE_KEY);
      if (raw) list = JSON.parse(raw);
    } catch {
      list = [];
    }
    list = [newRecord, ...list].slice(0, 50);
    try {
      storage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(list));
    } catch {
      // ignore
    }
  }
  return list;
}

export function getStoredInquiries(storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null): InquiryFormData[] {
  if (!storage) return [];
  try {
    const raw = storage.getItem(INQUIRIES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
