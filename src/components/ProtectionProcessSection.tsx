import React from 'react';
import { Scan, Sparkles, Lock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROTECTION_STEPS } from '../data/pestData';

interface ProtectionProcessSectionProps {
  onOpenBooking: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Scan: <Scan className="w-6 h-6 text-[#0F7A4A]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#0F7A4A]" />,
  Lock: <Lock className="w-6 h-6 text-[#0F7A4A]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0F7A4A]" />
};

export const ProtectionProcessSection: React.FC<ProtectionProcessSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>The Srivastava 360° Defense Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            How Our 360° Defense Protocol Keeps Your Property Pest-Free
          </h2>
          <p className="mt-4 text-base text-gray-600 font-normal">
            Traditional pest control relies on reactive spraying. Srivastava Pest Control Services engineers an active perimeter protection buffer around your home that repels pests before they ever step foot inside.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {PROTECTION_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-[#F7F9F8] border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden group"
            >
              {/* Step Image */}
              {step.image && (
                <div className="relative h-44 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Floating Step Number */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-lime-300 font-mono text-xs font-bold border border-white/20">
                    STEP {step.number}
                  </span>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs border border-emerald-100 flex items-center justify-center shadow-md">
                    {iconMap[step.icon]}
                  </div>
                </div>
              )}

              {/* Step Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#111827] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#0F7A4A] block mb-3">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-gray-600 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-gray-200/80 text-xs">
                  {step.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Call to action bar */}
        <div className="mt-16 bg-gradient-to-r from-[#064E3B] to-[#0F7A4A] rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-extrabold text-white">
              Ready to Fortify Your Home with 360° Perimeter Protection?
            </h3>
            <p className="text-sm text-emerald-100 mt-2">
              Get a certified master technician on-site for a complimentary thermal scan and vulnerability assessment.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-xs shadow-xl transition-all hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule Free On-Site Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
