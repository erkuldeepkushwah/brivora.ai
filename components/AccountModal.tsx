'use client';

import React, { useState } from 'react';
import { X, Lock, Key, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00d2d3]">
              Client Portal
            </span>
            <h3 className="text-lg font-bold mt-0.5">Enterprise Single Sign-On</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-lg text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="p-6 space-y-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              Sign in with your enterprise credentials or SAML/Okta identity provider to view active SLAs, cloud telemetries, and project sprints.
            </p>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Corporate SSO Email
              </label>
              <input
                type="email"
                required
                placeholder="architect@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0066f5]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-800">Security Key / Password</label>
                <a href="#forgot" className="text-[11px] text-[#0066f5] hover:underline">
                  Reset key
                </a>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0066f5]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading || !email || !password}
                className="w-full py-2.5 rounded-full bg-[#0066f5] hover:bg-[#0052cc] text-white text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {loading ? (
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                ) : (
                  <>
                    <span>Authenticate with Okta / SAML</span>
                    <Lock className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="text-[11px] text-slate-400">
                New enterprise customer? Contact your assigned Brivora TAM.
              </span>
            </div>
          </form>
        ) : (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Authenticated: {email}
            </h4>
            <div className="p-3 bg-slate-50 rounded-xl text-xs text-left text-slate-600 space-y-1">
              <div><strong>Role:</strong> Enterprise Sponsor & Technical Lead</div>
              <div><strong>Cluster Status:</strong> 12 Nodes Online (99.999% SLA)</div>
              <div><strong>Active Sprints:</strong> RAG Pipeline v2.4 (Phase 3)</div>
            </div>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                onClose();
              }}
              className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
            >
              Sign Out & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
