import React from 'react';
import { Shield, CheckCircle2, ArrowRight, PhoneCall, Sparkles, AlertTriangle, ShieldCheck, Award, MapPin, Clock, Star } from 'lucide-react';
import { METRICS_DATA, CERTIFICATIONS_DATA } from '../data/pestData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenAnalyzer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenAnalyzer }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#EAF7F0]/60 via-[#F7F9F8] to-[#F7F9F8]">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-emerald-200/30 to-lime-200/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Value Proposition & Action CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-[#0F7A4A] text-xs font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#0F7A4A]" />
              <span>CIB&RC Approved • 100% Odorless • Serving UP & All Over India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              Professional Pest Control in Lucknow, UP & All Over India
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0F7A4A] via-emerald-700 to-[#064E3B]">
                100% Odorless & Safe Protection
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-xl">
              Govt-approved odorless herbal cockroach gel, subterranean anti-termite drill-fill-seal barrier, and bed bug elimination for flats, villas, and commercial properties with written warranty and zero utensil shifting.
            </p>

            {/* Quick Feature Bullets */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-gray-700 w-full pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0" />
                <span>Single Service from ₹799 | AMC ₹1,999/yr</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0" />
                <span>3 to 5 Year Warranty on Termites</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0" />
                <span>100% Safe for Infants, Elders & Pets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0" />
                <span>Free On-Site Inspection & Quote</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-sm font-semibold shadow-xl shadow-emerald-900/20 hover:shadow-2xl transition-all active:scale-98 cursor-pointer group"
              >
                <span>Book Free Inspection</span>
                <ArrowRight className="w-4 h-4 text-lime-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAnalyzer}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-[#0F7A4A] border border-emerald-300 text-sm font-semibold shadow-sm transition-all cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4 text-[#0F7A4A]" />
                <span>AI Pest Diagnostic Tool</span>
              </button>
            </div>

            {/* Direct Phone Emergency Line */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-gray-700 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-200/90 shadow-sm w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block text-xs">Need fast assistance or free inspection?</span>
                  <span className="text-[11px] text-gray-500">Instant direct phone dispatch</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
                <a
                  href="tel:9838425271"
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F7A4A] border border-emerald-300 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3 h-3 text-[#0F7A4A]" />
                  <span>Primary: <strong>9838425271</strong></span>
                </a>
                <a
                  href="tel:8299405414"
                  className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3 h-3 text-rose-600" />
                  <span>Alternative: <strong>8299405414</strong></span>
                </a>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-gray-200/80 w-full">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 block mb-2.5">
                Certified Quality & Safety Accreditations
              </span>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-700">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-gray-200 text-gray-800 text-[11px]">
                    <Award className="w-3.5 h-3.5 text-[#0F7A4A]" />
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Clean Premium Protection Showcase Card with Real Action Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-emerald-200 shadow-2xl shadow-emerald-900/10 space-y-5">
              
              {/* Top Banner inside card */}
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-emerald-200 shadow-md flex items-center justify-center p-1.5 overflow-hidden shrink-0 ring-1 ring-emerald-500/20">
                    <img
                      src="/logo.png"
                      alt="Srivastava Pest Control Services"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Srivastava Pest Control</h3>
                    <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Serving Across UP & All Over India
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 text-amber-800 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5.0 Rating</span>
                </div>
              </div>

              {/* Real Technician On-Site Action Photo Spotlight */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="/images/technician-action.jpg"
                  alt="Certified Master Technician In Uniform Conducting Skirting Inspection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                {/* Floating Top Trust Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 text-lime-300 text-[11px] font-bold backdrop-blur-xs border border-emerald-700/60 shadow-xs flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-lime-300" />
                    <span>CIB&RC 100% Odorless</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 text-white text-[11px] font-semibold backdrop-blur-xs border border-white/20">
                    Govt. Trained Team
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white text-xs">
                  <div>
                    <span className="text-[10px] text-lime-300 uppercase tracking-wider font-extrabold block">
                      Live Field Service
                    </span>
                    <strong className="text-sm font-bold text-white drop-shadow-md">
                      Subterranean Termite & Herbal Gel Specialists
                    </strong>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-[10px] font-bold">
                    Lucknow & Pan-India
                  </span>
                </div>
              </div>

              {/* Service Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-4 h-4 text-lime-300" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block leading-tight">Anti-Termite Drill-Fill</span>
                    <span className="text-gray-600 text-[11px]">3 to 5 Year Warranty</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold shrink-0">
                    <Clock className="w-4 h-4 text-lime-300" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block leading-tight">Odorless Herbal Gel</span>
                    <span className="text-gray-600 text-[11px]">Zero Utensil Shifting</span>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="p-3.5 rounded-2xl bg-[#064E3B] text-white space-y-2 relative overflow-hidden">
                <div className="flex items-start gap-2.5 relative z-10">
                  <MapPin className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider block">Registered Office</span>
                    <p className="text-xs font-medium text-white leading-tight mt-0.5">
                      Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028
                    </p>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-emerald-800/80 flex items-center justify-between text-[11px] text-emerald-100 relative z-10">
                  <span>Helpline: <a href="tel:9838425271" className="text-lime-300 font-bold hover:underline">9838425271</a></span>
                  <span>Alt: <a href="tel:8299405414" className="text-lime-300 font-bold hover:underline">8299405414</a></span>
                </div>
              </div>

              {/* Quick Action CTA inside card */}
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Free Inspection Today</span>
                <ArrowRight className="w-4 h-4 text-lime-300" />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xl">
          {METRICS_DATA.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2 border-r last:border-r-0 border-gray-100">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0F7A4A] tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900 mt-0.5">
                {metric.label}
              </span>
              <span className="text-[11px] text-gray-600 mt-0.5">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
