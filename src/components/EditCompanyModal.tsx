import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCompany } from '../context/CompanyContext';
import { X, Save, RotateCcw, Check, Sparkles, Sliders } from 'lucide-react';

export const EditCompanyModal: React.FC = () => {
  const { t, lang } = useLanguage();
  const { companyInfo, updateCompanyInfo, resetCompanyInfo, isEditModalOpen, setIsEditModalOpen } =
    useCompany();

  const [formValues, setFormValues] = useState({
    phone: companyInfo.phone,
    email: companyInfo.email,
    address: companyInfo.address,
    whatsapp: companyInfo.whatsapp,
  });

  const [savedBanner, setSavedBanner] = useState(false);

  if (!isEditModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo(formValues);
    setSavedBanner(true);
    setTimeout(() => {
      setSavedBanner(false);
      setIsEditModalOpen(false);
    }, 600);
  };

  const handleReset = () => {
    resetCompanyInfo();
    setFormValues({
      phone: '+86 (0) 000 0000 0000',
      email: 'contact@zhongluauto.com',
      address: 'International Automotive Trade Center [Editable Address Placeholder]',
      whatsapp: '+8600000000000',
    });
    setSavedBanner(true);
    setTimeout(() => {
      setSavedBanner(false);
    }, 1000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-company-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-amber-400 uppercase mb-1">
              <Sliders className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '信息配置中心' : 'Configuration Deck'}</span>
            </div>
            <h3 id="edit-company-title" className="text-xl font-bold text-white">
              {t.modal.editModalTitle}
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-normal">
              {t.modal.editModalSubtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsEditModalOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close configuration modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          {savedBanner && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{lang === 'zh' ? '信息已实时更新并在本地保存！' : 'Details updated and stored successfully!'}</span>
            </div>
          )}

          <div>
            <label htmlFor="company-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.modal.phoneInputLabel}
            </label>
            <input
              type="text"
              id="company-phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              placeholder="+86 (0) 000 0000 0000"
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500 font-mono"
            />
          </div>

          <div>
            <label htmlFor="company-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.modal.emailInputLabel}
            </label>
            <input
              type="email"
              id="company-email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="contact@zhongluauto.com"
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="company-whatsapp" className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.modal.whatsappInputLabel}
            </label>
            <input
              type="text"
              id="company-whatsapp"
              name="whatsapp"
              value={formValues.whatsapp}
              onChange={handleChange}
              placeholder="+86 138 0000 0000"
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500 font-mono"
            />
          </div>

          <div>
            <label htmlFor="company-address" className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.modal.addressInputLabel}
            </label>
            <textarea
              id="company-address"
              name="address"
              rows={2}
              value={formValues.address}
              onChange={handleChange}
              placeholder="International Automotive Trade Center [Editable Address Placeholder]"
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Official branding protection notice */}
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-300 block mb-0.5">
              {lang === 'zh' ? '官方品牌标识保护' : 'Official Brand Protection'}
            </span>
            <p>
              {lang === 'zh'
                ? '官方企业名称、商标徽标及 Instagram (@zhongluauto1) 受系统保护，保持官方规范。'
                : 'Official company name, brand logo, and Instagram identity (@zhongluauto1) remain fixed to official references.'}
            </p>
          </div>

          {/* Footer Buttons */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.modal.resetDefaultsBtn}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                {t.modal.closeBtn}
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{t.modal.saveChangesBtn}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
