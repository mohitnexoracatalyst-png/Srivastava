import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  PhoneCall, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Utensils, 
  Warehouse, 
  Hospital, 
  GraduationCap, 
  Store,
  Mail,
  MapPin
} from 'lucide-react';
import { CommercialSection } from '../components/CommercialSection';

interface CommercialPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-3">
              <Building2 className="w-4 h-4" />
              <span>Enterprise & Institutional Biosecurity</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              Commercial Pest Control Solutions in Lucknow
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Audit-ready Integrated Pest Management (IPM) designed for restaurants, food processing plants, colleges, hospitals, warehouses, and corporate facilities in Lucknow.
            </p>

            {/* Helpline ribbon */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:9838425271"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0F7A4A]" />
                <span>Primary Desk: 9838425271</span>
              </a>
              <a
                href="tel:8299405414"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
                <span>Alternative Desk: 8299405414</span>
              </a>
              <span className="text-xs text-gray-500 font-medium">
                Email: <a href="mailto:srivastavapestcontrol@gmail.com" className="text-[#0F7A4A] underline font-semibold">srivastavapestcontrol@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Commercial Sectors Section */}
        <CommercialSection onOpenBooking={onOpenBooking} />

        {/* Photographic Field Proof for Commercial Clients */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
              Field Operations & Biosecurity Proof
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Commercial IPM Field Execution Across Uttar Pradesh & India
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Every commercial contract is backed by photographic service logs, QR-coded bait station visits, and night servicing so your daytime operations remain 100% normal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col justify-between group shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/restaurant-ipm.jpg"
                  alt="Commercial Restaurant Kitchen IPM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Commercial Kitchen Hygiene
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">FSSAI Certified Food Counters</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bio-enzymatic drain flushing and food-grade bait matrices applied outside business hours with zero smell or toxic residues.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col justify-between group shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Logistics Godown Rodent Exclusion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Logistics & Warehouses
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Tamper-Proof Station Grid</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Numbered, lockable rodent bait stations mapped across warehouse perimeters to protect stored grains and corrugated cartons.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col justify-between group shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/mosquito-fogging.jpg"
                  alt="Campus & University Grounds Fogging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Campuses & Institutions
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Vector Control & Grounds Misting</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Large-scale thermal fogging and larvicide treatments safeguarding hostels, libraries, and hospital compounds from mosquito outbreaks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Compliance & Deliverables */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
              Government & Industry Compliance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Complete Documentation & Audit Support
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Passing food safety and environmental audits requires meticulous reporting. We supply full documentation after every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <FileText className="w-8 h-8 text-[#0F7A4A] mb-3" />
              <h4 className="text-base font-bold text-gray-900 mb-2">FSSAI & HACCP Logs</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Detailed chemical application logs, bait station mapping, catch count records, and compliance certificates for food safety authorities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <ShieldCheck className="w-8 h-8 text-[#0F7A4A] mb-3" />
              <h4 className="text-base font-bold text-gray-900 mb-2">MSDS Chemical Approvals</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full Material Safety Data Sheets (MSDS) with government approved active ingredients, dosage records, and technician certification papers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <Clock className="w-8 h-8 text-[#0F7A4A] mb-3" />
              <h4 className="text-base font-bold text-gray-900 mb-2">2-Hour Emergency SLA</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Commercial contract holders enjoy priority dispatch within 2 hours to contain any unexpected pest sighting before customers or auditors notice.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-emerald-950">Book a Commercial Site Audit</h4>
              <p className="text-xs text-emerald-800">Our senior entomologist will visit your Lucknow premises for an in-depth gap analysis.</p>
            </div>
            <button
              onClick={() => onOpenBooking('Commercial IPM Audit')}
              className="px-5 py-2.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
            >
              Request Free Site Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
