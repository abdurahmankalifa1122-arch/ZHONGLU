import React, { useState, useEffect } from 'react';
import { useCompany } from '../context/CompanyContext';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { companyInfo } = useCompany();
  const { lang } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanWhatsApp = companyInfo.whatsapp.replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 shadow-xl backdrop-blur-md transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
          'Hello ZHONGLU AUTO, I would like to inquire about commercial vehicles.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Contact ZHONGLU AUTO on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          {lang === 'zh' ? 'WhatsApp 快速沟通' : 'Chat on WhatsApp'}
        </span>
      </a>
    </div>
  );
};
