import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCompany } from '../context/CompanyContext';
import { BUSINESS_CATEGORIES } from '../data/business';
import { Instagram, Mail, Phone, MapPin, ExternalLink, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, lang, setLang } = useLanguage();
  const { companyInfo } = useCompany();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="h-11 w-auto bg-white p-1 rounded-md flex items-center justify-center border border-slate-200">
                <img
                  src={companyInfo.logoUrl}
                  alt="ZHONGLU Logo"
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://i.ibb.co/S71my0ZL/file-00000000a31c8211b61a27ad4fe69073.png';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-wider">
                  ZHONGLU
                </span>
                <span className="text-[10px] tracking-widest text-slate-500 uppercase font-medium">
                  {lang === 'zh' ? '汽车 · 国际贸易' : 'AUTO · INTERNATIONAL'}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Official Instagram Button */}
            <div className="pt-2">
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors group"
              >
                <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <span>Instagram: @zhongluauto1</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-red-400 transition-colors">
                  {t.nav.business}
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-red-400 transition-colors">
                  {t.nav.vehicles}
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-red-400 transition-colors">
                  {t.nav.whyChoose}
                </a>
              </li>
              <li>
                <a href="#global" className="hover:text-red-400 transition-colors">
                  {t.nav.global}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Sectors (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.businessCategories}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {BUSINESS_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#business" className="hover:text-red-400 transition-colors">
                    {cat.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.contact.companyDirectTitle}
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="font-mono text-slate-300">{companyInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 break-all">{companyInfo.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-normal">{companyInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 pt-8 border-t border-slate-900">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <p className="text-slate-500">
              © {new Date().getFullYear()} ZHONGLU AUTO. {t.footer.copyright}
            </p>
          </div>

          {/* Language Switcher in Footer */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '语言:' : 'Language:'}</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`hover:text-white ${lang === 'en' ? 'text-red-400 font-bold' : ''}`}
              >
                English
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => setLang('zh')}
                className={`hover:text-white ${lang === 'zh' ? 'text-red-400 font-bold' : ''}`}
              >
                简体中文
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
