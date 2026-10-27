import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8 flex flex-col max-h-[85vh]">
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#00d2d3]" />
            <h3 className="text-lg font-bold">Terms of Service &amp; Enterprise Governance</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-lg text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-4 text-xs text-slate-600 leading-relaxed font-normal">
          <h4 className="font-bold text-slate-900 text-sm">1. Enterprise Confidentiality &amp; NDA</h4>
          <p>
            All architectural consultation, proprietary algorithm specifications, and customer data shared with Brivora AI &amp; IT Solutions are strictly governed under mutual non-disclosure agreements (NDA). We do not use customer proprietary datasets to train publicly accessible foundation models.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">2. Service Level Agreement (SLA) Commitments</h4>
          <p>
            Managed infrastructure and enterprise cloud architectures deployed by Brivora provide guaranteed availability up to 99.999% SLA depending on tier. Scheduled maintenance windows occur solely during pre-arranged low-impact hours.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">3. SOC-2 Compliance &amp; Zero-Trust Policies</h4>
          <p>
            All operational procedures comply with SOC-2 Type II standards, ISO/IEC 27001, and GDPR data residency regulations. Access to production workloads requires multi-factor cryptographic hardware key authentication and temporary just-in-time access elevation.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">4. Intellectual Property</h4>
          <p>
            Client retains 100% intellectual property ownership of all custom models, fine-tuned weights, bespoke microservices, and proprietary domain adapters created during the engagement.
          </p>
        </div>

        <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Effective as of January 2026</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0066f5] hover:bg-[#0052cc] text-white text-xs font-bold transition cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
