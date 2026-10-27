import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Shield, Sparkles, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedService, setSelectedService] = useState('Enterprise AI & LLM Systems');
  const [selectedTime, setSelectedTime] = useState('Morning (9 AM - 12 PM EST)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 800);
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0052cc] to-[#0066f5] p-6 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950">
                1 Session in Basket
              </span>
            </div>
            <h3 className="text-xl font-bold mt-1.5">Schedule Executive AI Consultation</h3>
            <p className="text-xs text-white/80 mt-0.5">
              1-on-1 strategic roadmap with a Principal Cloud / AI Architect
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Package details */}
            <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Initial Enterprise Architectural Discovery
                </div>
                <div className="text-[11px] text-slate-500">
                  45-minute comprehensive technical scoping & SLA review
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs line-through text-slate-400 mr-1.5">$750</span>
                <span className="text-sm font-extrabold text-[#0066f5]">Complimentary</span>
              </div>
            </div>

            {/* Service Focus */}
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1.5">
                Target Architecture Scope
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0066f5]"
              >
                <option>Enterprise AI & LLM Systems</option>
                <option>Cloud Infrastructure & Kubernetes</option>
                <option>Managed IT & Zero-Trust Defense</option>
                <option>Multi-Cloud Migration & FinOps</option>
                <option>Full Digital Modernization</option>
              </select>
            </div>

            {/* Preferred Time Window */}
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1.5">
                Preferred Consultation Time Window
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Morning (9 AM - 12 PM EST)',
                  'Afternoon (1 PM - 5 PM EST)',
                  'APAC Hours (UTC+7 / SGT)',
                  'European Hours (BST / CET)',
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`p-2 rounded-lg text-[11px] font-semibold border text-left transition cursor-pointer ${
                      selectedTime === slot
                        ? 'border-[#0066f5] bg-blue-50 text-[#0066f5]'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jessica Sandstone"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0066f5]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Work Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0066f5]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Global Tech Enterprise"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0066f5]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading || !name || !email}
                className="w-full py-3 rounded-full bg-[#0066f5] hover:bg-[#0052cc] disabled:opacity-50 text-white text-xs font-bold transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    <span>Confirming schedule...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Consultation Booking</span>
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Strict enterprise confidentiality & NDA protected</span>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Consultation Scheduled!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. A calendar invite and Google Meet link for <strong>{selectedTime}</strong> has been sent to <strong>{email}</strong>.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl text-left text-xs text-slate-600 space-y-1 max-w-sm mx-auto">
              <div><strong>Topic:</strong> {selectedService}</div>
              <div><strong>Lead Architect:</strong> Jonathan Brown (Chief AI Architect)</div>
              <div><strong>Status:</strong> Confirmed & Assigned</div>
            </div>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#0066f5] text-white text-xs font-bold hover:bg-[#0052cc] transition cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
