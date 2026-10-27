import React from 'react';
import { X, Palette, Type, Box, Sparkles, Copy, Check } from 'lucide-react';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose }) => {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const colors = [
    { name: 'Royal Blue (Primary)', hex: '#0066f5', text: 'text-white' },
    { name: 'Deep Royal', hex: '#0052cc', text: 'text-white' },
    { name: 'Cyan Accent', hex: '#00d2d3', text: 'text-slate-900' },
    { name: 'Cyan Dark', hex: '#00a3a4', text: 'text-white' },
    { name: 'Dark Navy (Footer)', hex: '#121418', text: 'text-white' },
    { name: 'Surface Bright', hex: '#f8f9ff', text: 'text-slate-900' },
    { name: 'Text Heading', hex: '#0f172a', text: 'text-white' },
    { name: 'Text Body', hex: '#475569', text: 'text-white' },
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066f5] to-[#00d2d3] flex items-center justify-center text-white">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Brivora.ai Design System &amp; Brand Standards</h3>
              <p className="text-xs text-slate-400">Design tokens, typography scales, and UI components</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Colors */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Palette className="w-3.5 h-3.5 text-[#0066f5]" />
              <span>Color Palette</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => copyToClipboard(c.hex)}
                  className="p-3 rounded-xl border border-slate-200 text-left transition hover:scale-102 flex flex-col justify-between h-24 cursor-pointer"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className={`text-[11px] font-bold ${c.text}`}>{c.name}</span>
                  <div className={`flex items-center justify-between text-xs font-mono ${c.text}`}>
                    <span>{c.hex}</span>
                    {copiedColor === c.hex ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Type className="w-3.5 h-3.5 text-[#0066f5]" />
              <span>Typography Pairing</span>
            </h4>
            <div className="p-4 bg-slate-50 rounded-xl space-y-3 border border-slate-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Heading Font</span>
                <p className="text-xl font-extrabold text-slate-900 font-sans">
                  Plus Jakarta Sans (800 / 700 / 600)
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Body &amp; Technical Text</span>
                <p className="text-sm text-slate-700 font-normal">
                  Inter (400 / 500) - Optimized for high-density enterprise metrics, data tables, and readable documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Button Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Box className="w-3.5 h-3.5 text-[#0066f5]" />
              <span>Component Standards</span>
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-6 py-2.5 rounded-full bg-[#00d2d3] hover:bg-[#00b5dc] text-slate-950 font-bold text-xs shadow-sm">
                Primary Cyan CTA
              </button>
              <button className="px-6 py-2.5 rounded-full bg-[#0066f5] hover:bg-[#0052cc] text-white font-bold text-xs shadow-sm">
                Primary Blue Button
              </button>
              <button className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50">
                Outline Action
              </button>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                99.99% SLA Active
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">Brivora Design Constitution v2.6</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0066f5] text-white text-xs font-bold hover:bg-[#0052cc] transition cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
