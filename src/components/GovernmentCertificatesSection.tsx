import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X
} from 'lucide-react';

interface CertificateItem {
  id: string;
  image: string;
  label: string;
}

const CERTIFICATE_SLOTS: CertificateItem[] = [
  {
    id: 'cert_1',
    image: '/images/certificate-1.jpg',
    label: 'Certificate 1'
  },
  {
    id: 'cert_2',
    image: '/images/certificate-2.jpg',
    label: 'Certificate 2'
  },
  {
    id: 'cert_3',
    image: '/images/certificate-3.jpg',
    label: 'Certificate 3'
  }
];

export const GovernmentCertificatesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? CERTIFICATE_SLOTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === CERTIFICATE_SLOTS.length - 1 ? 0 : prev + 1));
  };

  const activeSlot = CERTIFICATE_SLOTS[currentSlide];

  return (
    <section id="certificates" className="py-12 sm:py-16 bg-[#F7F9F8] border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Clean Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 text-[#0F7A4A] text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Government Verified</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            Government Certificates
          </h2>
        </div>

        {/* Slide Selector Buttons & Counter */}
        <div className="flex items-center justify-between mb-4 px-2">
          {/* Slot Tabs */}
          <div className="flex items-center gap-2">
            {CERTIFICATE_SLOTS.map((slot, idx) => (
              <button
                key={slot.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  currentSlide === idx
                    ? 'bg-[#0F7A4A] text-white border-[#0F7A4A] shadow-sm'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {slot.label}
              </button>
            ))}
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 shadow-xs flex items-center justify-center transition-all cursor-pointer hover:border-emerald-400"
              title="Previous Certificate"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-gray-500 px-1 font-mono">
              {currentSlide + 1} / {CERTIFICATE_SLOTS.length}
            </span>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white shadow-xs flex items-center justify-center transition-all cursor-pointer"
              title="Next Certificate"
              aria-label="Next Certificate"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Portrait Slider Viewer */}
        <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-4 sm:p-6 flex flex-col items-center">
          
          {/* Main Portrait Document Container */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-300 bg-slate-100 group">
            <img
              src={activeSlot.image}
              alt={activeSlot.label}
              className="w-full h-full object-contain cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
              onClick={() => setLightboxImage(activeSlot.image)}
              title="Click to view full-size certificate"
            />

            {/* Top Badge: Certificate Number */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-gray-900/85 backdrop-blur-xs text-white text-xs font-bold border border-white/20 shadow-md">
                {activeSlot.label}
              </span>
            </div>

            {/* Bottom Floating Zoom Hint */}
            <button
              onClick={() => setLightboxImage(activeSlot.image)}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-white text-gray-900 text-xs font-bold shadow-lg border border-gray-200 flex items-center gap-1.5 transition-all cursor-pointer hover:shadow-xl"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#0F7A4A]" />
              <span>Full Screen</span>
            </button>

            {/* Left and Right Overlay Slide Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer opacity-80 hover:opacity-100 shadow-md"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer opacity-80 hover:opacity-100 shadow-md"
              title="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500 text-center">
            Click on the certificate to view in high resolution
          </p>

        </div>

      </div>

      {/* Lightbox Modal: High-Resolution View */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-sm cursor-pointer shadow-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <img
                src={lightboxImage}
                alt="Certificate Full View"
                className="w-full h-auto object-contain max-h-[85vh]"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
