import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Compass, Award, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>{t.about.kicker}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{lang === 'zh' ? '中鲁汽车' : 'ZHONGLU AUTO'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {t.about.title}
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>{t.about.cardFoundingTitle}</span>
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.about.cardFoundingDesc}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>{lang === 'zh' ? '商用车出口协作' : 'Automotive Export Logistics'}</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.about.cardFocusTitle}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.about.cardFocusDesc}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{lang === 'zh' ? '重型卡车与专用装备' : 'Heavy Trucks & Equipment'}</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.about.cardVisionTitle}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.about.cardVisionDesc}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{lang === 'zh' ? '透明外贸单证规范' : 'Transparent Documentation'}</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-rose-600/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.about.cardServiceTitle}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.about.cardServiceDesc}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>{lang === 'zh' ? '一对一选型技术对接' : 'Tailored Model Matching'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
