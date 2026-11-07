import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRADE_ROUTES } from '../data/business';
import { Globe, Ship, Compass, ArrowRight, Anchor, Navigation, ShieldCheck } from 'lucide-react';

export const GlobalConnectionsSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeRouteId, setActiveRouteId] = useState<string>(TRADE_ROUTES[0].id);

  const activeRoute = TRADE_ROUTES.find((r) => r.id === activeRouteId) || TRADE_ROUTES[0];

  return (
    <section id="global" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>{t.global.kicker}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{lang === 'zh' ? '国际车辆贸易' : 'INTERNATIONAL TRADE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.global.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.global.subtitle}
          </p>
        </div>

        {/* Global Logistics Visual & Interactive Corridor Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Port & Truck Trade Logistics Visual Banner (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden relative min-h-[400px] lg:min-h-[500px] flex flex-col justify-end p-8 group shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80"
              alt="International deepwater automotive terminal and container freight logistics"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-mono font-medium mb-4 backdrop-blur-md">
                <Ship className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '国际海运与陆运整车联运' : 'Cross-Border Vehicle Multimodal Logistics'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {activeRoute.name[lang]}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                {activeRoute.description[lang]}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mb-0.5">
                    {lang === 'zh' ? '起始口岸' : 'Origin Base'}
                  </span>
                  <span className="text-white font-medium">
                    {activeRoute.origin[lang]}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mb-0.5">
                    {lang === 'zh' ? '目的口岸 / 枢纽' : 'Destination Hub'}
                  </span>
                  <span className="text-red-400 font-semibold">
                    {activeRoute.destination[lang]}
                  </span>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-800 flex items-center justify-between text-slate-300">
                  <span>{activeRoute.transitType[lang]}</span>
                  <span className="font-mono text-amber-400">{activeRoute.leadTime[lang]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Trade Corridor Selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              {TRADE_ROUTES.map((route) => {
                const isSelected = route.id === activeRouteId;
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => setActiveRouteId(route.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex flex-col ${
                      isSelected
                        ? 'bg-slate-950 border-red-500 shadow-xl shadow-red-950/20'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {route.name[lang]}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {route.leadTime[lang]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {route.description[lang]}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Shipping Modalities Info Box */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-start gap-3 mt-2">
              <Anchor className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-200 block mb-1">
                  {lang === 'zh' ? '多元化整车物流方案' : 'Multimodal Transport Modalities'}
                </span>
                <p className="leading-relaxed">
                  {t.global.shippingNotice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
