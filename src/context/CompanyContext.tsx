import React, { createContext, useContext, useState } from 'react';
import { CompanyInfo, Vehicle } from '../types';
import {
  DEFAULT_COMPANY_INFO,
  getStoredCompanyInfo,
  saveCompanyInfo as persistCompanyInfo,
  resetCompanyInfo as restoreDefaultCompanyInfo,
} from '../utils/storage';

interface CompanyContextType {
  companyInfo: CompanyInfo;
  updateCompanyInfo: (updates: Partial<CompanyInfo>) => void;
  resetCompanyInfo: () => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  selectedVehicleForInquiry: Vehicle | null;
  openInquiryModalForVehicle: (vehicle: Vehicle) => void;
  closeInquiryModal: () => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    return getStoredCompanyInfo();
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedVehicleForInquiry, setSelectedVehicleForInquiry] = useState<Vehicle | null>(null);

  const updateCompanyInfo = (updates: Partial<CompanyInfo>) => {
    const updated = persistCompanyInfo(updates);
    setCompanyInfo(updated);
  };

  const resetCompanyInfo = () => {
    const defaults = restoreDefaultCompanyInfo();
    setCompanyInfo(defaults);
  };

  const openInquiryModalForVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleForInquiry(vehicle);
  };

  const closeInquiryModal = () => {
    setSelectedVehicleForInquiry(null);
  };

  return (
    <CompanyContext.Provider
      value={{
        companyInfo,
        updateCompanyInfo,
        resetCompanyInfo,
        isEditModalOpen,
        setIsEditModalOpen,
        selectedVehicleForInquiry,
        openInquiryModalForVehicle,
        closeInquiryModal,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = (): CompanyContextType => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
};
