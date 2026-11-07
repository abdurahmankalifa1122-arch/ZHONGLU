import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronDown, ShieldCheck, Globe, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* High-Resolution Commercial Heavy Truck Background with Agency Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85"
          alt="Modern heavy-duty commercial truck on open highway"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
        />
        {/* Luxury Automotive Navy & Slate Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        {/* Subtle geometric grid accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-6 font-sans">
            {t.hero.headlineFirst} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-200">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal mb-8">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#business"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-xl shadow-red-950/50 transition-all duration-200 hover:translate-y-[-2px]"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 rounded-lg backdrop-blur-md transition-all duration-200"
            >
              <span>{t.hero.contactBtn}</span>
            </a>
          </div>

          {/* Value Badges Strip (Zero-Pill Discipline: Unboxed clean metadata with subtle border) */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-red-600/10 text-red-500 border border-red-500/20 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.hero.statCategories}</p>
                <p className="text-xs text-slate-400 leading-tight">{t.hero.statCategoriesSub}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.hero.statTrading}</p>
                <p className="text-xs text-slate-400 leading-tight">{t.hero.statTradingSub}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.hero.statNetwork}</p>
                <p className="text-xs text-slate-400 leading-tight">{t.hero.statNetworkSub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Downward indicator anchor */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-400 hover:text-white transition-colors duration-200 animate-bounce p-2"
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
