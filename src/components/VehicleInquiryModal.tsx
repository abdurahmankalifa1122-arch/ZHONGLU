import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCompany } from '../context/CompanyContext';
import { validateInquiry, saveInquiry } from '../utils/storage';
import { InquiryFormData } from '../types';
import { X, Send, CheckCircle, AlertCircle, FileText, Check } from 'lucide-react';

export const VehicleInquiryModal: React.FC = () => {
  const { t, lang } = useLanguage();
  const { selectedVehicleForInquiry, closeInquiryModal } = useCompany();

  const [formData, setFormData] = useState<Partial<InquiryFormData>>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    vehicleInterest: selectedVehicleForInquiry ? `${selectedVehicleForInquiry.name} (${selectedVehicleForInquiry.model[lang]})` : '',
    quantity: '1 - 5 units',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!selectedVehicleForInquiry) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      vehicleInterest: `${selectedVehicleForInquiry.name} (${selectedVehicleForInquiry.model[lang]})`,
    };
    const validation = validateInquiry(submissionData, lang);
    if (!validation.valid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      saveInquiry(submissionData as InquiryFormData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vehicle-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
          <div className="pr-6">
            <span className="text-[11px] font-mono font-bold tracking-widest text-red-500 uppercase block mb-1">
              {t.modal.inquireTitle}
            </span>
            <h3 id="vehicle-modal-title" className="text-xl font-bold text-white">
              {selectedVehicleForInquiry.name}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {selectedVehicleForInquiry.model[lang]} · {selectedVehicleForInquiry.specs.drive[lang]}
            </p>
          </div>
          <button
            type="button"
            onClick={closeInquiryModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close vehicle inquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {t.contact.successTitle}
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mb-6 leading-relaxed">
                {t.contact.successMsg}
              </p>
              <button
                type="button"
                onClick={closeInquiryModal}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md"
              >
                {t.modal.closeBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Vehicle Quick Specs Strip */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedVehicleForInquiry.image}
                    alt=""
                    className="w-12 h-10 object-cover rounded border border-slate-700"
                  />
                  <div>
                    <span className="font-semibold text-white block">
                      {selectedVehicleForInquiry.specs.power[lang]}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {selectedVehicleForInquiry.specs.engine[lang]}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {t.vehicles.sampleTag}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-fullName"
                    name="fullName"
                    value={formData.fullName || ''}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full px-3.5 py-2 bg-slate-950 border ${
                      errors.fullName ? 'border-red-500' : 'border-slate-800'
                    } rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.emailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className={`w-full px-3.5 py-2 bg-slate-950 border ${
                      errors.email ? 'border-red-500' : 'border-slate-800'
                    } rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="text"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="modal-country" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.countryLabel}
                  </label>
                  <input
                    type="text"
                    id="modal-country"
                    name="country"
                    value={formData.country || ''}
                    onChange={handleChange}
                    placeholder={t.contact.countryPlaceholder}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.messageLabel} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message || ''}
                  onChange={handleChange}
                  placeholder={
                    lang === 'zh'
                      ? '请填写您需要的采购台数、配置偏好及期望交车港口...'
                      : 'Please specify required quantity, target delivery port, or technical preferences...'
                  }
                  className={`w-full px-3.5 py-2 bg-slate-950 border ${
                    errors.message ? 'border-red-500' : 'border-slate-800'
                  } rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500`}
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeInquiryModal}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {t.modal.closeBtn}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded-lg shadow-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
