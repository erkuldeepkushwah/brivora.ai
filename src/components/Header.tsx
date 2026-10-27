import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
  onOpenAccount: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenSearch,
  onOpenConsultation,
  onOpenAccount,
  cartCount = 1,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left flex items-center gap-1.5 focus:outline-none group cursor-pointer"
          aria-label="Brivora AI Home"
        >
          <span className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
            <span className="text-slate-900 font-extrabold">Brivora</span>
            <span className="text-[#00c9cc] font-black">.ai</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center text-[13.5px] font-semibold text-slate-600 gap-10">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative pb-1 transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'text-slate-900 font-bold border-b-2 border-[#0066f5]'
                    : 'text-slate-600 hover:text-slate-900 hover:text-[#0066f5]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Utility / Quick Actions */}
        <div className="flex items-center space-x-3 sm:space-x-5 text-slate-700">
          {/* Quick Book Consultation CTA on larger screens */}
          <button
            onClick={onOpenConsultation}
            className="hidden xl:inline-flex items-center justify-center bg-[#0066f5] hover:bg-[#0052cc] text-white rounded-full px-5 py-2 text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 mr-1.5" />
            Book a Consultation
          </button>

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2 text-slate-600 hover:text-[#0066f5] hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
            type="button"
          >
            <Search className="w-5 h-5 stroke-[2]" />
          </button>

          {/* User Account Login */}
          <button
            onClick={onOpenAccount}
            aria-label="Account Login"
            className="p-2 text-slate-600 hover:text-[#0066f5] hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
            type="button"
          >
            <User className="w-5 h-5 stroke-[2]" />
          </button>

          {/* Shopping Cart / Consultation Basket */}
          <button
            onClick={onOpenConsultation}
            aria-label="Consultation Basket"
            className="p-2 text-slate-600 hover:text-[#0066f5] hover:bg-slate-50 rounded-full transition-colors relative cursor-pointer"
            type="button"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
            {cartCount > 0 && (
              <span className="absolute 1 top-1 right-1 bg-[#00c9cc] text-slate-950 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 shadow-xl transition-all">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-[#0066f5]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0066f5]" />}
                </button>
              );
            })}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenConsultation();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-full bg-[#0066f5] text-white text-xs font-bold text-center shadow-sm"
              >
                Book Enterprise Consultation
              </button>
              <div className="text-center text-xs text-slate-500 py-1 font-medium">
                Call Toll-Free: 1-800-BRIVORA
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
