import React from 'react';
import { Building2, Utensils, Bed, Activity, Package, CheckCircle2, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMMERCIAL_SECTORS } from '../data/pestData';

interface CommercialSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-5 h-5 text-[#0F7A4A]" />,
  Bed: <Bed className="w-5 h-5 text-[#0F7A4A]" />,
  Activity: <Activity className="w-5 h-5 text-[#0F7A4A]" />,
  Package: <Package className="w-5 h-5 text-[#0F7A4A]" />
};

export const CommercialSection: React.FC<CommercialSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="commercial" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            <span>Audit-Ready Commercial IPM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Enterprise Pest Protection & Compliance Management
          </h2>
          <p className="mt-4 text-base text-gray-600 font-normal">
            Protect your brand reputation, guest trust, and health department inspection audit scores with Srivastava Pest Control digital Integrated Pest Management (IPM).
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {COMMERCIAL_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="rounded-3xl bg-[#F7F9F8] border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300"
            >
              {/* Sector Image */}
              <div className="md:w-5/12 h-48 md:h-auto relative overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  {sector.industry}
                </div>
              </div>

              {/* Sector Content */}
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      {iconMap[sector.iconName] || <Building2 className="w-4 h-4 text-[#0F7A4A]" />}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{sector.title}</h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Audit & Compliance Standards:
                    </span>
                    {sector.complianceStandards.map((std, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0" />
                        <span>{std}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(`Commercial: ${sector.title}`)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>Request Commercial Facility Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Audit Log Feature Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#064E3B] via-[#0F7A4A] to-[#064E3B] text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-lime-300 text-xs font-semibold mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Real-Time Compliance Logging</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Srivastava Digital Audit Portal & Barcode Scanning
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 mt-2 leading-relaxed">
              Our technicians scan barcoded bait stations across your facility in real-time. Every visit generates automated, timestamped PDF reports formatted specifically for FDA, AIB, SQF, and local health department inspections.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Commercial IPM Audit Portal')}
            className="px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-xs shadow-xl transition-all cursor-pointer shrink-0 flex items-center gap-2"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
