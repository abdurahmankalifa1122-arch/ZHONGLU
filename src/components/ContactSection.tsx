import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCompany } from '../context/CompanyContext';
import { VEHICLES } from '../data/vehicles';
import { validateInquiry, saveInquiry } from '../utils/storage';
import { InquiryFormData } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Edit2,
  ExternalLink,
  Building,
  Globe,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const { companyInfo, setIsEditModalOpen } = useCompany();

  const [formData, setFormData] = useState<Partial<InquiryFormData>>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    vehicleInterest: VEHICLES[0].name,
    quantity: '1 - 5 units',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

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
    const validation = validateInquiry(formData, lang);
    if (!validation.valid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      saveInquiry(formData as InquiryFormData);
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      vehicleInterest: VEHICLES[0].name,
      quantity: '1 - 5 units',
      message: '',
    });
    setErrors({});
  };

  // Clean WhatsApp number format
  const cleanWhatsApp = companyInfo.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>{t.contact.kicker}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{lang === 'zh' ? '连接中鲁汽车' : 'CONNECT WITH ZHONGLU'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-7 sm:p-10 shadow-xl">
            {submittedSuccess ? (
              <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.contact.successTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                  {t.contact.successMsg}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  {t.contact.submitAnotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h3 className="text-xl font-bold text-white">
                    {t.contact.formTitle}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    {lang === 'zh' ? '中英双语快速对接' : 'International Inquiry Desk'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-2">
                      {t.contact.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName || ''}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full px-4 py-2.5 bg-slate-950 border ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-red-500'
                      } rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">
                      {t.contact.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className={`w-full px-4 py-2.5 bg-slate-950 border ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-red-500'
                      } rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone / WhatsApp */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-2">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleChange}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-300 mb-2">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company || ''}
                      onChange={handleChange}
                      placeholder={t.contact.companyPlaceholder}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Vehicle Interest */}
                  <div>
                    <label htmlFor="vehicleInterest" className="block text-xs font-semibold text-slate-300 mb-2">
                      {t.contact.vehicleInterestLabel}
                    </label>
                    <select
                      id="vehicleInterest"
                      name="vehicleInterest"
                      value={formData.vehicleInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name} ({v.model[lang]})
                        </option>
                      ))}
                      <option value="Custom Commercial Vehicle Sourcing">
                        {lang === 'zh' ? '其他定制商用车采购咨询' : 'Other / Custom Vehicle Sourcing'}
                      </option>
                      <option value="General Vehicle Trading Partnership">
                        {lang === 'zh' ? '车辆贸易合作洽谈' : 'Vehicle Trading Partnership'}
                      </option>
                    </select>
                  </div>

                  {/* Quantity & Country */}
                  <div>
                    <label htmlFor="country" className="block text-xs font-semibold text-slate-300 mb-2">
                      {t.contact.countryLabel}
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country || ''}
                      onChange={handleChange}
                      placeholder={t.contact.countryPlaceholder}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
                    {t.contact.messageLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message || ''}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className={`w-full px-4 py-2.5 bg-slate-950 border ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-red-500'
                    } rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded-lg shadow-lg shadow-red-950/50 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Channels & Editable Coordinates (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t.contact.companyDirectTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {t.contact.companyDirectSub}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(true)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                  title={t.contact.editDetailsBtn}
                >
                  <Edit2 className="w-4 h-4 text-red-400" />
                </button>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-5">
                {/* Official Instagram */}
                <a
                  href={companyInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-950/40 via-pink-950/30 to-red-950/20 border border-pink-500/30 hover:border-pink-500/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-600/20 border border-pink-500/30 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                        {t.contact.officialInstagram}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-300" />
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      @zhongluauto1
                    </p>
                    <p className="text-[11px] text-pink-400/80 mt-1">
                      {t.contact.officialInstagramDesc}
                    </p>
                  </div>
                </a>

                {/* WhatsApp Direct Chat Button */}
                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
                    'Hello ZHONGLU AUTO, I am inquiring about commercial vehicle opportunities.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {t.contact.chatOnWhatsapp}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-300" />
                    </div>
                    <p className="text-xs text-emerald-400/90 font-mono mt-0.5">
                      {companyInfo.whatsapp}
                    </p>
                  </div>
                </a>

                {/* Editable Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        {lang === 'zh' ? '电话号码' : 'Phone Contact'}
                      </span>
                      {companyInfo.isPlaceholderPhone && (
                        <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded">
                          {t.contact.phonePlaceholderNote}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-white mt-1 font-mono">
                      {companyInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Editable Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        {lang === 'zh' ? '电子邮箱' : 'Email Address'}
                      </span>
                      {companyInfo.isPlaceholderEmail && (
                        <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded">
                          {t.contact.emailPlaceholderNote}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-white mt-1 break-all">
                      {companyInfo.email}
                    </p>
                  </div>
                </div>

                {/* Editable Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        {lang === 'zh' ? '商业地址' : 'Business Address'}
                      </span>
                      {companyInfo.isPlaceholderAddress && (
                        <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded">
                          {t.contact.addressPlaceholderNote}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Edit Details Prompt Button */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(true)}
                  className="w-full py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Edit2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.contact.editDetailsBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
