'use client';

import React, { useState } from 'react';
import { Send, ArrowUp, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenDesignSystem: () => void;
  onOpenTerms: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDesignSystem,
  onOpenTerms,
  onOpenConsultation,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121418] text-white pt-16 pb-8 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand Info & Support Hotline */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-xl font-bold tracking-tight inline-block text-left cursor-pointer"
            >
              <span className="text-white font-extrabold text-2xl">Brivora</span>
              <span className="text-[#00c9cc] font-extrabold text-2xl">.ai</span>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-normal">
              Enterprise AI transformation, scalable cloud systems, and managed IT services.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Reach us Monday – Friday <br />
              9 am – 6 pm (UTC+7 / EST)
            </p>
            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-0.5">
                ENTERPRISE HOTLINE
              </span>
              <a
                href="tel:1800BRIVORA"
                className="text-xs font-bold text-white tracking-wide hover:text-[#00c9cc] transition-colors"
              >
                Call: <span className="font-semibold text-slate-200">1-800-BRIVORA</span> (274-8672)
              </a>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-block px-5 py-2 rounded-full text-[11px] font-semibold border border-teal-500/60 text-[#00c9cc] hover:bg-teal-500/10 transition-colors cursor-pointer"
              >
                Contact AI Specialists
              </button>
              <a
                href="mailto:contact@brivora.ai"
                className="inline-block px-5 py-2 rounded-full text-[11px] font-semibold bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                contact@brivora.ai
              </a>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Brivora
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Leadership Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Client Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('blog');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tech & AI Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Careers & Culture
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Generative AI & LLMs
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cloud & DevOps Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Enterprise Cybersecurity
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  24/7 Managed IT Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  SOC-2 & Zero-Trust Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Newsletter */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Connect</h4>
              <div className="flex items-center space-x-3.5 text-slate-400">
                {/* LinkedIn */}
                <a
                  aria-label="LinkedIn"
                  className="hover:text-[#00c9cc] transition-colors p-1"
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
                  className="hover:text-[#00c9cc] transition-colors p-1"
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  aria-label="Twitter / X"
                  className="hover:text-[#00c9cc] transition-colors p-1"
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  aria-label="WhatsApp"
                  className="hover:text-[#00c9cc] transition-colors p-1"
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

            {/* Newsletter Subscription */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Tech Briefing
              </span>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email"
                  required
                  className="w-full h-9 pl-3.5 pr-9 rounded-full bg-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-[#00c9cc] border border-white/10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 w-7 h-7 rounded-full bg-[#0066f5] hover:bg-[#0052cc] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-white" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-[#00c9cc]">Subscribed! Welcome aboard.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 Brivora AI & IT Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenDesignSystem}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Demo design system
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & conditions
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => {
                onNavigate('contact');
                scrollToTop();
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="fixed bottom-6 right-6 w-11 h-11 bg-white text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-100 hover:scale-105 transition-all border border-slate-200 z-40 cursor-pointer"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5] text-slate-800" />
      </button>
    </footer>
  );
};
