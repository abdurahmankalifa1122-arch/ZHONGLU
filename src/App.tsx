import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CompanyProvider } from './context/CompanyContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BusinessSection } from './components/BusinessSection';
import { VehiclesSection } from './components/VehiclesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GlobalConnectionsSection } from './components/GlobalConnectionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VehicleInquiryModal } from './components/VehicleInquiryModal';
import { EditCompanyModal } from './components/EditCompanyModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <LanguageProvider>
      <CompanyProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-red-600 selection:text-white flex flex-col font-sans">
          {/* Main Top Navigation */}
          <Navbar />

          {/* Core Page Content */}
          <main className="flex-1">
            <Hero />
            <AboutSection />
            <BusinessSection />
            <VehiclesSection />
            <WhyChooseSection />
            <GlobalConnectionsSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Modals & Overlays */}
          <VehicleInquiryModal />
          <EditCompanyModal />
          <FloatingActions />
        </div>
      </CompanyProvider>
    </LanguageProvider>
  );
}
