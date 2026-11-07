import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCompany } from '../context/CompanyContext';
import { VEHICLES } from '../data/vehicles';
import { Vehicle } from '../types';
import { MessageSquare, Gauge, Cog, Zap, Weight, Shield, Info, ArrowRight } from 'lucide-react';

export const VehiclesSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const { openInquiryModalForVehicle } = useCompany();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: t.vehicles.filterAll },
    { id: 'tractor', label: t.vehicles.filterTractor },
    { id: 'tipper', label: t.vehicles.filterTipper },
    { id: 'cargo', label: t.vehicles.filterCargo },
    { id: 'specialized', label: t.vehicles.filterSpecialized },
    { id: 'electric', label: t.vehicles.filterElectric },
  ];

  const filteredVehicles = useMemo(() => {
    if (selectedFilter === 'all') return VEHICLES;
    return VEHICLES.filter((v) => v.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="vehicles" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>{t.vehicles.kicker}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{t.vehicles.kickerSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.vehicles.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            {t.vehicles.subtitle}
          </p>

          {/* Sample inventory notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{t.vehicles.sampleNotice}</span>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill: Clean segmented buttons with active states) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none" role="tablist">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-950/50'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredVehicles.map((vehicle: Vehicle) => (
            <div
              key={vehicle.id}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Vehicle Photograph Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} - ${vehicle.model[lang]}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Sample Specification Watermark Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/85 text-[11px] font-mono text-amber-400 border border-amber-500/30 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {t.vehicles.sampleTag}
                  </span>
                </div>

                {/* Drive Type Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded bg-slate-900/90 text-[11px] font-mono font-bold text-white border border-slate-700 backdrop-blur-md">
                    {vehicle.specs.drive[lang]}
                  </span>
                </div>

                {/* Model Title Overlay at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-red-400 font-medium">
                    {vehicle.model[lang]}
                  </p>
                </div>
              </div>

              {/* Vehicle Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "{vehicle.tagline[lang]}"
                  </p>

                  {/* Technical Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-6 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                        {t.vehicles.specEngine}
                      </span>
                      <span className="text-slate-200 font-medium line-clamp-1">
                        {vehicle.specs.engine[lang]}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                        {t.vehicles.specPower}
                      </span>
                      <span className="text-slate-200 font-semibold text-red-400">
                        {vehicle.specs.power[lang]}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                        {t.vehicles.specTransmission}
                      </span>
                      <span className="text-slate-200 font-medium line-clamp-1">
                        {vehicle.specs.transmission[lang]}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                        {t.vehicles.specEmission}
                      </span>
                      <span className="text-slate-200 font-medium">
                        {vehicle.specs.emission[lang]}
                      </span>
                    </div>

                    <div className="col-span-2 pt-2 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        {vehicle.specs.gvw[lang]}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {vehicle.specs.fuelCapacity[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {vehicle.highlights[lang].slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vehicle Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openInquiryModalForVehicle(vehicle)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md shadow-red-950/40 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.vehicles.inquireBtn}</span>
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                  >
                    <span>{t.nav.contact}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
