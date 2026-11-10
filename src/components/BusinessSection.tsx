import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_CATEGORIES } from '../data/business';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const BusinessSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="business" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>{t.business.kicker}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{lang === 'zh' ? '中鲁汽车' : 'ZHONGLU AUTO'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.business.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.business.subtitle}
          </p>
        </div>

        {/* 4 Business Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-lg"
            >
              {/* Category Image Header */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={category.image}
                  alt={category.title[lang]}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                {/* Clean Category Subtitle Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-950/85 text-slate-200 border border-slate-700/80 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {category.subtitle[lang]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {category.title[lang]}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {category.description[lang]}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-8">
                    {category.capabilities[lang].map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-red-400 transition-colors"
                  >
                    <span>{t.business.exploreCategoryBtn}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>

                  <span className="text-xs text-slate-500 font-mono">
                    {lang === 'zh' ? '中鲁' : 'ZHONGLU'} · {category.title[lang]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
