import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquareText, Handshake, Globe2, Headphones, ShieldCheck, CheckCircle } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const { t, lang } = useLanguage();

  const reasons = [
    {
      icon: Headphones,
      title: t.whyChoose.point1Title,
      description: t.whyChoose.point1Desc,
      color: 'text-red-500',
      bg: 'bg-red-500/10 border-red-500/20',
    },
    {
      icon: MessageSquareText,
      title: t.whyChoose.point2Title,
      description: t.whyChoose.point2Desc,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Handshake,
      title: t.whyChoose.point3Title,
      description: t.whyChoose.point3Desc,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Globe2,
      title: t.whyChoose.point4Title,
      description: t.whyChoose.point4Desc,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>{t.whyChoose.kicker}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{lang === 'zh' ? '中鲁核心价值' : 'ZHONGLU VALUES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.whyChoose.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className={`w-14 h-14 rounded-xl ${reason.bg} border ${reason.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle className="w-4 h-4 text-red-500/70" />
                  <span>{lang === 'zh' ? '中鲁准则 0' : 'ZHONGLU Standard 0'}{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
