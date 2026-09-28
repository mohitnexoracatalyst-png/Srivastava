import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Shield, PhoneCall, Calendar, Menu, X, Sparkles, Mail, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/plans', label: 'Plans & Pricing' },
    { to: '/commercial', label: 'Commercial' },
    { to: '/process', label: 'Process & Safety' },
    { to: '/analyzer', label: 'AI Analyzer' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-emerald-900/10'
          : 'bg-white/90 backdrop-blur-xs py-3 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-white border border-emerald-900/15 shadow-sm flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform shrink-0 overflow-hidden ring-1 ring-emerald-500/20">
            <img
              src="/logo.png"
              alt="Srivastava Pest Control Services"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-[#111827] group-hover:text-[#0F7A4A] transition-colors leading-tight">
              Srivastava Pest Control
            </span>
            <span className="text-[11px] sm:text-xs text-emerald-700 font-bold tracking-wide uppercase leading-tight">
              Services &bull; Lucknow & India
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-gray-700">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors px-2 py-1 rounded-lg ${
                  isActive
                    ? 'text-[#0F7A4A] font-bold bg-emerald-50'
                    : 'text-gray-700 hover:text-[#0F7A4A] hover:bg-gray-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons & Quick Call Numbers */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Quick Call Numbers Pill */}
          <div className="flex items-center gap-1.5 bg-emerald-50/90 border border-emerald-200/90 rounded-xl p-1 text-xs">
            <a
              href="tel:9838425271"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-100 text-gray-800 hover:text-emerald-900 border border-emerald-100 font-semibold transition-all shadow-xs"
              title="Call Primary Phone"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <PhoneCall className="w-3 h-3 text-[#0F7A4A]" />
              <span>Primary: <strong>9838425271</strong></span>
            </a>

            <a
              href="tel:8299405414"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-semibold transition-all shadow-xs"
              title="Call Alternative Phone"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <PhoneCall className="w-3 h-3 text-rose-600" />
              <span>Alternative: <strong>8299405414</strong></span>
            </a>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-semibold shadow-lg shadow-emerald-900/20 transition-all hover:shadow-xl active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-lime-300" />
            <span>Book Free Inspection</span>
          </button>
        </div>

        {/* Mobile Hamburger Button & Quick Call */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="tel:9838425271"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-[#0F7A4A] border border-emerald-200 text-xs font-bold"
            title="Call Primary Phone"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 rounded-lg bg-[#0F7A4A] text-white text-xs font-semibold"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#0F7A4A] text-white font-bold shadow-xs'
                      : 'bg-gray-50 text-gray-800 hover:bg-emerald-50 hover:text-[#0F7A4A]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Contact Details Card in Mobile Drawer */}
          <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 text-xs space-y-2">
            <div className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
              <span className="leading-snug">Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-4 h-4 text-[#0F7A4A] shrink-0" />
              <a href="mailto:srivastavapestcontrol@gmail.com" className="text-[#0F7A4A] font-medium break-all">
                srivastavapestcontrol@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:9838425271"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold"
            >
              <PhoneCall className="w-4 h-4 text-[#0F7A4A]" />
              <span>Primary: 9838425271</span>
            </a>

            <a
              href="tel:8299405414"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold"
            >
              <PhoneCall className="w-4 h-4 text-rose-600" />
              <span>Alternative: 8299405414</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0F7A4A] text-white text-xs font-semibold shadow-md"
            >
              <Calendar className="w-4 h-4 text-lime-300" />
              <span>Schedule Free Inspection</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
