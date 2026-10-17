'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Globe2,
} from 'lucide-react';

interface ContactViewProps {
  onOpenTerms: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenTerms }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    service: 'enterprise-ai',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.message || !formData.consent) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        company: '',
        service: 'enterprise-ai',
        message: '',
        consent: false,
      });
    }, 1000);
  };

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen">
      {/* Immersive Sub-Header Hero Banner */}
      <section className="relative w-full overflow-hidden bg-[#0052e0] text-white">
        {/* Fluid layered curved wave backgrounds */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-[#0066ff] opacity-60 blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-20 w-[650px] h-[650px] rounded-full bg-[#0040c0] opacity-75 blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#1a75ff] opacity-40 blur-[90px]"></div>

          <svg
            className="absolute inset-0 w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-100,180 C180,60 320,290 640,160 C960,30 1180,260 1540,140 L1540,-50 L-100,-50 Z"
              fill="#0047cc"
              opacity="0.55"
            ></path>
            <path
              d="M-80,260 C240,140 460,330 820,190 C1140,70 1320,220 1520,180 L1520,-50 L-80,-50 Z"
              fill="#005cf5"
              opacity="0.4"
            ></path>
            <path
              d="M-120,40 C120,90 260,280 20,380 C-80,360 -180,240 -120,40 Z"
              fill="#003eb8"
              opacity="0.5"
            ></path>
            <path
              d="M0,280 C360,230 720,310 1080,260 C1260,235 1380,250 1440,255 L1440,320 L0,320 Z"
              fill="#003fa8"
              opacity="0.3"
            ></path>
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight">
            Contact
          </h1>
          <p className="text-base md:text-lg text-[#e3e6ff] max-w-2xl mt-3 mx-auto font-medium">
            Partner with Brivora&apos;s senior AI architects and enterprise IT consultants to modernize high-scale infrastructure.
          </p>
        </div>
      </section>

      {/* Main Content 2-Column Split Section */}
      <section className="w-full bg-[#f8f9ff] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Detailed Contact Information */}
            <div className="lg:col-span-5 flex flex-col pt-2">
              {/* Kicker Eyebrow */}
              <span className="text-xs uppercase text-[#0055ff] tracking-widest font-extrabold mb-2 block">
                Get In Touch
              </span>

              {/* Prominent Heading matching prompt */}
              <h2 className="text-3xl md:text-[38px] md:leading-[46px] text-slate-900 font-extrabold tracking-tight mb-8">
                Let&apos;s choose the best AI &amp; IT solution for your business!
              </h2>

              {/* Contact items with clean vertical rhythm */}
              <div className="flex flex-col gap-6 mb-8">
                {/* Call Us item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white transition-colors flex-shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-[#0055ff] font-bold">
                      Call our Enterprise Hotline
                    </span>
                    <a
                      href="tel:1800BRIVORA"
                      className="text-base text-slate-900 font-semibold hover:text-[#0055ff] transition-colors mt-0.5"
                    >
                      1-800-BRIVORA <span className="text-xs font-normal text-slate-500">(274-8672)</span>
                    </a>
                  </div>
                </div>

                {/* Email Inquiries item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-[#0055ff] font-bold">
                      Direct Inquiries &amp; RFPs
                    </span>
                    <a
                      className="text-base text-slate-900 font-semibold hover:text-[#0055ff] transition-colors mt-0.5"
                      href="mailto:contact@brivora.ai"
                    >
                      contact@brivora.ai
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white transition-colors flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-[#0055ff] font-bold">
                      Headquarters Location
                    </span>
                    <p className="text-sm text-slate-900 font-semibold mt-0.5">
                      500 Howard Street, Suite 400, San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                {/* Business Hours item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white transition-colors flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-[#0055ff] font-bold">
                      Enterprise Business Hours
                    </span>
                    <p className="text-sm text-slate-900 font-semibold mt-0.5">
                      Monday to Friday: 9 am – 6 pm (EST / UTC+7)
                    </p>
                    <p className="text-xs text-emerald-600 font-medium">
                      24/7/365 Tier-1 Critical Incident Response for SLA Clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons in vibrant circular buttons matching reference */}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/80">
                <span className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
                  Connect across channels
                </span>
                <div className="flex items-center gap-3 mt-1">
                  {/* X / Twitter */}
                  <a
                    aria-label="X Twitter"
                    className="w-10 h-10 rounded-full bg-[#0066f5] flex items-center justify-center text-white hover:bg-[#0052cc] hover:scale-105 transition-all shadow-sm"
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-xs font-black">𝕏</span>
                  </a>
                  {/* LinkedIn */}
                  <a
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#0066f5] flex items-center justify-center text-white hover:bg-[#0052cc] hover:scale-105 transition-all shadow-sm"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-[#0066f5] flex items-center justify-center text-white hover:bg-[#0052cc] hover:scale-105 transition-all shadow-sm"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-[#0066f5] flex items-center justify-center text-white hover:bg-[#0052cc] hover:scale-105 transition-all shadow-sm"
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Need Consultation? Floating Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-100">
                {/* Card Header */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Need consultation?
                  </h3>
                </div>

                {/* Interactive Consultation Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Full Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-900 tracking-wide" htmlFor="contact-fullname">
                      Full name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-fullname"
                      required
                      type="text"
                      value={formData.fullname}
                      onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0055ff] focus:ring-2 focus:ring-[#0055ff]/10 transition-all"
                    />
                  </div>

                  {/* Two Column Fields: Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-900 tracking-wide" htmlFor="contact-email">
                        Email address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0055ff] focus:ring-2 focus:ring-[#0055ff]/10 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-900 tracking-wide" htmlFor="contact-phone">
                        Phone number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0055ff] focus:ring-2 focus:ring-[#0055ff]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company / Business Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-900 tracking-wide" htmlFor="contact-company">
                      Company / business name
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0055ff] focus:ring-2 focus:ring-[#0055ff]/10 transition-all"
                    />
                  </div>

                  {/* Service of Interest Radio Pills */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-900 tracking-wide">
                      Primary area of interest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <label
                        className={`cursor-pointer relative flex items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all text-center select-none shadow-xs ${
                          formData.service === 'enterprise-ai'
                            ? 'bg-[#0055ff] text-white border-[#0055ff]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="enterprise-ai"
                          checked={formData.service === 'enterprise-ai'}
                          onChange={() => setFormData({ ...formData, service: 'enterprise-ai' })}
                          className="sr-only"
                        />
                        <span>Enterprise AI &amp; LLMs</span>
                      </label>

                      <label
                        className={`cursor-pointer relative flex items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all text-center select-none shadow-xs ${
                          formData.service === 'cloud-devops'
                            ? 'bg-[#0055ff] text-white border-[#0055ff]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="cloud-devops"
                          checked={formData.service === 'cloud-devops'}
                          onChange={() => setFormData({ ...formData, service: 'cloud-devops' })}
                          className="sr-only"
                        />
                        <span>Cloud &amp; DevOps</span>
                      </label>

                      <label
                        className={`cursor-pointer relative flex items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all text-center select-none shadow-xs ${
                          formData.service === 'managed-it'
                            ? 'bg-[#0055ff] text-white border-[#0055ff]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value="managed-it"
                          checked={formData.service === 'managed-it'}
                          onChange={() => setFormData({ ...formData, service: 'managed-it' })}
                          className="sr-only"
                        />
                        <span>Managed IT &amp; Cyber</span>
                      </label>
                    </div>
                  </div>

                  {/* Message / Project Scope Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-900 tracking-wide" htmlFor="contact-message">
                        Your message <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {formData.message.length} chars (minimum 20)
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0055ff] focus:ring-2 focus:ring-[#0055ff]/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Checkbox Agreement */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="privacy-consent"
                      required
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 mt-1 rounded text-[#0055ff] focus:ring-0 cursor-pointer accent-[#0055ff]"
                    />
                    <label htmlFor="privacy-consent" className="text-xs text-slate-600 cursor-pointer select-none leading-relaxed">
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-[#0055ff] hover:underline font-semibold"
                      >
                        privacy policy
                      </button>{' '}
                      and{' '}
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-[#0055ff] hover:underline font-semibold"
                      >
                        terms of service
                      </button>
                      , including confidential processing under standard NDA terms.
                    </label>
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    disabled={isSubmitting || !formData.consent || formData.message.length < 20}
                    className="w-full h-12 mt-1 rounded-full bg-[#0055ff] hover:bg-[#0044dd] disabled:opacity-50 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        <span>Routing to architect...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <span>Inquiry Sent!</span>
                        <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Live Submission Feedback Toast Box */}
                  {isSubmitted && (
                    <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 flex items-start gap-3 animate-fadeIn">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">Inquiry Dispatched Successfully!</span>
                        <span className="text-xs text-teal-700 mt-0.5">
                          A senior technical lead from Brivora will review your requirements and reach out within 2 hours.
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Regional Offices Section */}
      <section className="w-full bg-slate-100/70 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0055ff] block mb-1">
              Global Footprint
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Regional Engineering Hubs
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0055ff] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">San Francisco (HQ)</h4>
              <p className="text-xs text-slate-500 mt-1">500 Howard St, Suite 400</p>
              <p className="text-xs text-slate-500">San Francisco, CA 94105</p>
              <span className="inline-block mt-3 text-[11px] font-bold text-[#0055ff]">
                +1 (800) 274-8672
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0055ff] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Singapore (APAC Hub)</h4>
              <p className="text-xs text-slate-500 mt-1">1 Raffles Place, Level 28</p>
              <p className="text-xs text-slate-500">Singapore 048616</p>
              <span className="inline-block mt-3 text-[11px] font-bold text-[#0055ff]">
                +65 6712 9000
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0055ff] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">London (EMEA)</h4>
              <p className="text-xs text-slate-500 mt-1">100 Bishopsgate, Level 19</p>
              <p className="text-xs text-slate-500">London EC2N 4AG, UK</p>
              <span className="inline-block mt-3 text-[11px] font-bold text-[#0055ff]">
                +44 20 7946 0991
              </span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0055ff] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Tokyo (Japan)</h4>
              <p className="text-xs text-slate-500 mt-1">Roppongi Hills Mori Tower</p>
              <p className="text-xs text-slate-500">Minato-ku, Tokyo 106-6108</p>
              <span className="inline-block mt-3 text-[11px] font-bold text-[#0055ff]">
                +81 3 5555 0143
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
