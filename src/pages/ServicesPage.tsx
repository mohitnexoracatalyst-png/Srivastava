import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  Shield, 
  Check, 
  Bug,
  Home,
  Flame,
  Wind,
  Building2,
  Calendar,
  Globe2
} from 'lucide-react';
import { SERVICES_DATA } from '../data/pestData';
import { PestService } from '../types';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6 text-[#0F7A4A]" />,
  Home: <Home className="w-6 h-6 text-[#0F7A4A]" />,
  Bug: <Bug className="w-6 h-6 text-[#0F7A4A]" />,
  Flame: <Flame className="w-6 h-6 text-[#0F7A4A]" />,
  Wind: <Wind className="w-6 h-6 text-[#0F7A4A]" />,
  Building2: <Building2 className="w-6 h-6 text-[#0F7A4A]" />
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Termite' | 'Cockroach' | 'BedBug' | 'Rodent' | 'Commercial'>('All');
  const [selectedModalService, setSelectedModalService] = useState<PestService | null>(null);

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Termite') return service.id.includes('termite');
    if (activeCategory === 'Cockroach') return service.id.includes('cockroach') || service.id.includes('general');
    if (activeCategory === 'BedBug') return service.id.includes('bedbug');
    if (activeCategory === 'Rodent') return service.id.includes('rodent');
    if (activeCategory === 'Commercial') return service.id.includes('commercial');
    return true;
  });

  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-28 pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-3">
              <Globe2 className="w-4 h-4" />
              <span>Head Office: Lucknow • Services Available All Over India</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              Pest Control & Protection Services
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Targeted, scientific, and 100% odorless pest management protocols for residential, commercial, and industrial properties. Serving Lucknow, all districts of Uttar Pradesh, and all major cities across India.
            </p>

            {/* Quick Contact Ribbon */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:9838425271"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0F7A4A]" />
                <span>Primary: 9838425271</span>
              </a>
              <a
                href="tel:8299405414"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
                <span>Alternative: 8299405414</span>
              </a>
              <span className="text-xs text-gray-500 font-medium">
                📍 Head Office: Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-white p-2 rounded-2xl border border-gray-200 shadow-xs">
          {[
            { id: 'All', label: 'All Services (6)' },
            { id: 'Termite', label: 'Termite Control' },
            { id: 'Cockroach', label: 'Cockroach & Ant Gel' },
            { id: 'BedBug', label: 'Bed Bug Eradication' },
            { id: 'Rodent', label: 'Rodent Management' },
            { id: 'Commercial', label: 'Commercial & Industrial IPM' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0F7A4A] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group flex flex-col justify-between rounded-2xl bg-white border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${
                service.featured
                  ? 'border-emerald-400 ring-2 ring-emerald-500/10'
                  : 'border-gray-200 hover:border-emerald-300'
              }`}
            >
              {/* Photo Header */}
              {service.image && (
                <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 backdrop-blur-xs text-lime-300 text-[11px] font-bold border border-emerald-700/50 shadow-xs">
                      {service.badge || (service.guaranteeDays >= 365 ? `${Math.round(service.guaranteeDays / 365)} Yrs Warranty` : `${service.guaranteeDays} Days Warranty`)}
                    </span>

                    {service.urgencyLevel === 'Emergency' && (
                      <span className="px-2 py-0.5 rounded-lg bg-rose-600/90 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs">
                        <AlertCircle className="w-3 h-3 text-white" />
                        Priority
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xs border border-emerald-100 flex items-center justify-center shadow-md">
                      {iconMap[service.iconName] || <Shield className="w-4 h-4 text-[#0F7A4A]" />}
                    </div>
                    <span className="text-white text-xs font-mono font-medium drop-shadow-md">
                      {service.scientificCategory}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {!service.image && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-xs">
                        {iconMap[service.iconName] || <Shield className="w-5 h-5 text-[#0F7A4A]" />}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#0F7A4A] text-[11px] font-bold">
                        {service.guaranteeDays >= 365 ? `${Math.round(service.guaranteeDays / 365)} Yrs Warranty` : `${service.guaranteeDays} Days Warranty`}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0F7A4A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5 mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="text-xs font-semibold text-gray-600 hover:text-[#0F7A4A] underline cursor-pointer"
                  >
                    View Protocol
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Inspection</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage & Standard Market Rates Guide */}
        <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
              Affordable Pricing In UP & India
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Estimated Rate Chart for Homes & Flats
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Based on standard pest control market benchmarks across Uttar Pradesh and major Indian metros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-28 w-full bg-gray-900 overflow-hidden">
                <img
                  src="/images/kitchen-gel.jpg"
                  alt="1 BHK Flat Herbal Gel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-[11px] font-bold">1 BHK Apartment</span>
              </div>
              <div className="p-4">
                <span className="text-xl font-black text-gray-900 block">₹799 – ₹999</span>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">Herbal cockroach gel + ant skirting spray, 30 days warranty.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-28 w-full bg-gray-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="2 BHK Flat Pest Protection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-[11px] font-bold">2 BHK Apartment</span>
              </div>
              <div className="p-4">
                <span className="text-xl font-black text-gray-900 block">₹999 – ₹1,299</span>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">Kitchen + 2 washrooms + balconies + rooms complete coverage.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-28 w-full bg-gray-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                  alt="3 BHK or Luxury Villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-[11px] font-bold">3 BHK / Villa</span>
              </div>
              <div className="p-4">
                <span className="text-xl font-black text-gray-900 block">₹1,399 – ₹1,999</span>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">Full duplex villa perimeter, drainage, and multi-room coverage.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-50 border border-emerald-300 overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-28 w-full bg-gray-900 overflow-hidden">
                <img
                  src="/images/termite-drill.jpg"
                  alt="Anti-Termite Treatment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2 left-3 text-lime-300 text-[11px] font-bold">Anti-Termite Shield</span>
              </div>
              <div className="p-4">
                <span className="text-xl font-black text-[#0F7A4A] block">₹3 – ₹5 / sq. ft.</span>
                <p className="text-[11px] text-emerald-900 mt-1 leading-relaxed">Drill-Fill-Seal woodwork barrier with 3 to 5 Year Warranty.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Pillars */}
        <div className="mt-12 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0F7A4A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">100% Odorless & Non-Toxic</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Safe for kids, pets, senior citizens, and patients. You do not even have to empty your kitchen cabinets or vacate your home.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0F7A4A]">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">Pan-India & UP Network</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Head office in Lucknow with rapid same-day dispatch, serving Kanpur, Varanasi, Gorakhpur, Prayagraj, Noida, and all major cities in India.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0F7A4A]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">Written Service Warranty</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                If pests recur during your warranty period, our master technician will re-treat free of charge with zero hassle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Detail Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-emerald-900/20 shadow-2xl relative overflow-hidden">
            {/* Modal Photo Header */}
            {selectedModalService.image && (
              <div className="relative h-44 w-full bg-gray-900 overflow-hidden">
                <img
                  src={selectedModalService.image}
                  alt={selectedModalService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-950/90 text-lime-300 text-[10px] font-bold border border-emerald-700/50 shadow-xs">
                  {selectedModalService.badge || (selectedModalService.guaranteeDays >= 365 ? `${Math.round(selectedModalService.guaranteeDays / 365)} Yrs Warranty` : `${selectedModalService.guaranteeDays} Days Warranty`)}
                </span>
                <span className="absolute bottom-2.5 left-4 text-white text-xs font-mono drop-shadow-md">
                  {selectedModalService.scientificCategory}
                </span>
              </div>
            )}

            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-sm cursor-pointer shadow-md"
            >
              ✕
            </button>

            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  {iconMap[selectedModalService.iconName] || <Shield className="w-5 h-5 text-[#0F7A4A]" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedModalService.title}</h3>
                  <p className="text-xs text-emerald-700 font-semibold">{selectedModalService.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mb-4 leading-relaxed">{selectedModalService.description}</p>

              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 text-xs space-y-2 mb-6">
                <div>
                  <span className="font-bold text-[#0F7A4A] block">Treatment Method:</span>
                  <span className="text-gray-700">{selectedModalService.treatmentMethod}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0F7A4A] block">Target Pest Species:</span>
                  <span className="text-gray-700">{selectedModalService.targetPests.join(', ')}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0F7A4A] block">Protection Guarantee:</span>
                  <span className="text-gray-700">
                    {selectedModalService.guaranteeDays >= 365
                      ? `${Math.round(selectedModalService.guaranteeDays / 365)} Years Written Guarantee + Free Re-Treatments`
                      : `${selectedModalService.guaranteeDays} Days Full Coverage + Free Re-Treatments`}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedModalService.title;
                    setSelectedModalService(null);
                    onOpenBooking(title);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0F7A4A] text-white text-xs font-semibold shadow-md hover:bg-[#064E3B] cursor-pointer"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
