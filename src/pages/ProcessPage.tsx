import React from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FileCheck, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { ProtectionProcessSection } from '../components/ProtectionProcessSection';
import { GovernmentCertificatesSection } from '../components/GovernmentCertificatesSection';
import { PhotoShowcaseSection } from '../components/PhotoShowcaseSection';

interface ProcessPageProps {
  onOpenBooking: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Scientific Precision & Health Standards</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              Our 4-Step Treatment Process & Safety Guarantee
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              We practice Integrated Pest Management (IPM) that targets pest biology at its root. Learn how we eliminate infestations while keeping your family, pets, and food prep areas 100% secure.
            </p>

            {/* Helpline ribbon */}
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
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Protection Process */}
        <ProtectionProcessSection onOpenBooking={onOpenBooking} />

        {/* 3 Official Government Certificates & Verification (Portrait) */}
        <div className="mt-16 rounded-3xl overflow-hidden">
          <GovernmentCertificatesSection />
        </div>

        {/* Pre-Treatment & Post-Treatment Checklist */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0F7A4A] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Pre-Treatment Checklist</h3>
                <p className="text-xs text-gray-500">Quick steps before our technician arrives</p>
              </div>
            </div>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>Kitchen Food Items:</strong> Cover open food, cooked meals, drinking water, and sensitive cooking utensils.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>Cabinets & Skirting:</strong> For severe cockroach infestations, keep under-sink spaces accessible.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>Pets & Aquariums:</strong> Keep birds, dogs, or cats in a separate ventilated room during any residual spraying.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>No Need to Empty Kitchen for Gel:</strong> Our herbal cockroach gel dots require zero clearing of crockery!</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime-100 text-emerald-950 flex items-center justify-center font-bold">
                ★
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Post-Treatment Care & Warranty</h3>
                <p className="text-xs text-gray-500">Ensuring maximum longevity and protection</p>
              </div>
            </div>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>Ventilation:</strong> For spray treatments, keep room ventilated for 60 to 90 minutes before prolonged stay.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>Do Not Wash Gel Dots:</strong> Leave the tiny herbal dots in cupboard hinges for at least 15 days so foraging roaches ingest them.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>72-Hour Cascade Effect:</strong> Gel poisons transfer from roach to roach inside their nests, eliminating the colony completely.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span><strong>Warranty Guarantee:</strong> If you see surviving pests after 14 days, call our helpline for a free booster visit.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-[#064E3B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-lime-300">Have questions about chemical allergies or safe re-entry?</h4>
            <p className="text-xs text-emerald-100 mt-1 max-w-xl">
              Talk directly with our senior technician at Lucknow before any treatment commences. We customize chemicals according to your health requirements.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:9838425271"
              className="px-5 py-2.5 rounded-xl bg-lime-300 text-emerald-950 font-bold text-xs hover:bg-lime-400"
            >
              Primary: 9838425271
            </a>
            <a
              href="tel:8299405414"
              className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs border border-white/20 hover:bg-white/20"
            >
              Alternative: 8299405414
            </a>
          </div>
        </div>

        {/* On-Site Photo Proof in Action */}
        <div className="mt-16">
          <PhotoShowcaseSection onOpenBooking={() => onOpenBooking()} />
        </div>
      </div>
    </div>
  );
};
