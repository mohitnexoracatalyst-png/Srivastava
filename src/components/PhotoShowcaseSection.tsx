import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  X, 
  Maximize2,
  ChevronRight
} from 'lucide-react';
import { PHOTO_SHOWCASE_DATA } from '../data/pestData';
import { PhotoShowcaseItem } from '../types';

interface PhotoShowcaseSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PhotoShowcaseSection: React.FC<PhotoShowcaseSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'termite' | 'kitchen' | 'bedbug' | 'commercial'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoShowcaseItem | null>(null);

  const filteredItems = PHOTO_SHOWCASE_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gray-50/80 border-t border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Real Field Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              On-Site Work In Action & Photo Proof
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl">
              Authentic on-site photography from our daily pest control operations across Lucknow, Uttar Pradesh, and India. Certified technicians, professional equipment, and guaranteed eradication.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>Schedule Inspection</span>
              <ArrowRight className="w-4 h-4 text-lime-300" />
            </button>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {[
            { id: 'all', label: 'All Operations' },
            { id: 'termite', label: '🪵 Termite Woodwork' },
            { id: 'kitchen', label: '🍳 Modular Kitchen Gel' },
            { id: 'bedbug', label: '🛏️ Bed Bug Eradication' },
            { id: 'commercial', label: '🏢 Commercial & F&B' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-emerald-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:text-emerald-900 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo + Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container with Badges */}
              <div 
                className="relative aspect-4/3 w-full bg-gray-900 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPhoto(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-900/90 text-lime-300 text-[11px] font-bold backdrop-blur-xs border border-emerald-700/50 shadow-xs">
                    {item.badge}
                  </span>

                  {/* Quick Enlarge Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(item);
                    }}
                    aria-label="View photo in high resolution"
                    className="w-8 h-8 rounded-lg bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Location Tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold drop-shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-lime-300" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0F7A4A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mt-1 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Operational Details Card */}
                  <div className="space-y-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs mb-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 font-semibold block text-[11px] uppercase tracking-wider">Problem Found:</strong>
                        <span className="text-gray-600 text-[11px]">{item.problemIdentified}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 border-t border-gray-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 font-semibold block text-[11px] uppercase tracking-wider">Solution:</strong>
                        <span className="text-gray-600 text-[11px]">{item.treatmentDone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Action */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {item.warranty}
                  </span>

                  <button
                    onClick={() => onOpenBooking(item.serviceName)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Enlarged Photo & Case Study Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#0F7A4A] text-xs font-bold">
                  {selectedPhoto.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  {selectedPhoto.location}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-5">
              <div className="rounded-2xl overflow-hidden bg-black max-h-80 flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover max-h-80"
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs font-medium text-emerald-700 mt-1">
                  {selectedPhoto.subtitle}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mt-2.5">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100 space-y-1">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                    Problem Found
                  </span>
                  <p className="text-amber-950 leading-relaxed text-xs">
                    {selectedPhoto.problemIdentified}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 space-y-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                    Solution & Result
                  </span>
                  <p className="text-emerald-950 leading-relaxed text-xs">
                    {selectedPhoto.resultAchieved}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-gray-100 flex items-center justify-between bg-gray-50">
              <span className="text-xs font-bold text-emerald-800">
                Warranty: {selectedPhoto.warranty}
              </span>
              <button
                onClick={() => {
                  const service = selectedPhoto.serviceName;
                  setSelectedPhoto(null);
                  onOpenBooking(service);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                Schedule Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
