import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCompany } from '../context/CompanyContext';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const { companyInfo } = useCompany();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#business', label: t.nav.business },
    { href: '#vehicles', label: t.nav.vehicles },
    { href: '#why-choose', label: t.nav.whyChoose },
    { href: '#global', label: t.nav.global },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/40 py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-4'
      }`}
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between flex-nowrap gap-4 lg:gap-8 xl:gap-12">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
            aria-label="ZHONGLU Home"
          >
            <div className="relative h-11 sm:h-12 w-auto flex items-center justify-center p-1 rounded-md bg-white shadow-sm border border-slate-200">
              <img
                src={companyInfo.logoUrl}
                alt="ZHONGLU Official Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if local image load fails
                  (e.target as HTMLImageElement).src =
                    'https://i.ibb.co/S71my0ZL/file-00000000a31c8211b61a27ad4fe69073.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white font-sans whitespace-nowrap">
                ZHONGLU
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium whitespace-nowrap">
                {lang === 'zh' ? '汽车 · 全球贸易' : 'AUTO · GLOBAL TRADING'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-6 lg:gap-2.5 xl:gap-5 2xl:gap-7 flex-nowrap"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-md hover:bg-slate-900/60 whitespace-nowrap after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Controls: Language Switcher & Request Quote CTA */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700/80 rounded-lg p-0.5 text-xs font-semibold shadow-inner">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-slate-600 px-0.5">|</span>
              <button
                type="button"
                onClick={() => setLang('zh')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'zh'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="切换至中文 (Switch to Chinese)"
              >
                中文
              </button>
            </div>

            {/* Request Quote Primary Action */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md shadow-red-900/30 transition-all duration-200 hover:shadow-red-900/50 hover:translate-y-[-1px]"
            >
              <span>{t.nav.inquireNow}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger & Language Selector */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-md p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded text-xs ${
                  lang === 'en' ? 'bg-red-600 text-white' : 'text-slate-400'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('zh')}
                className={`px-2 py-1 rounded text-xs ${
                  lang === 'zh' ? 'bg-red-600 text-white' : 'text-slate-400'
                }`}
              >
                中文
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-red-500 py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md"
              >
                <span>{t.nav.inquireNow}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
