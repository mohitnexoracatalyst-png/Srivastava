import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  AlertTriangle, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { PestAnalyzerSection } from '../components/PestAnalyzerSection';

interface AnalyzerPageProps {
  onOpenBookingWithAnalysis: (pestType: string, urgency: string, notes: string) => void;
}

export const AnalyzerPage: React.FC<AnalyzerPageProps> = ({ onOpenBookingWithAnalysis }) => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-[#0F7A4A]" />
              <span>Interactive Diagnostic Studio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              AI Pest Identification & Diagnosis
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Upload a photo of any insect, droppings, or damaged wood, or describe what you observed. Our diagnostic system identifies the species, assesses severity, and suggests the exact treatment protocol.
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
        {/* Core Analyzer Tool Component */}
        <PestAnalyzerSection onOpenBookingWithAnalysis={onOpenBookingWithAnalysis} />

        {/* Common Lucknow Pests Identification Quick Guide */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
              Field Guide
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Most Common Household Pests in Lucknow & UP
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Quick identification clues based on hundreds of local Lucknow inspections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-40 w-full bg-gray-900 overflow-hidden">
                <img
                  src="/images/termite-drill.jpg"
                  alt="Termite woodwork damage and drill treatment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-bold uppercase shadow-xs">
                  Critical Threat
                </span>
                <span className="absolute bottom-2.5 left-2.5 text-white text-xs font-bold">
                  Wood & Door Frames
                </span>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900">Subterranean Termites</h4>
                  <p className="text-xs text-gray-600 mt-1 mb-3 leading-relaxed">
                    Builds hollow mud shelter tubes along walls, skirtings, and door frames. Leaves hollow wood and sawdust-like frass.
                  </p>
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  Treatment: Drill-Fill-Seal chemical barrier injection.
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-40 w-full bg-gray-900 overflow-hidden">
                <img
                  src="/images/kitchen-gel.jpg"
                  alt="German cockroach in modular kitchen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-amber-600 text-white text-[10px] font-bold uppercase shadow-xs">
                  Severe Hygiene Risk
                </span>
                <span className="absolute bottom-2.5 left-2.5 text-white text-xs font-bold">
                  Kitchens & Electronics
                </span>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900">German Cockroach</h4>
                  <p className="text-xs text-gray-600 mt-1 mb-3 leading-relaxed">
                    Small light brown roaches with two dark parallel stripes. Found in kitchen cabinets, microwave vents, and warm electronics.
                  </p>
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  Treatment: Odorless Herbal Gel baiting with nest cascade elimination.
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-40 w-full bg-gray-900 overflow-hidden">
                <img
                  src="/images/bedbug-steam.jpg"
                  alt="Bed bugs on mattress seams"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-bold uppercase shadow-xs">
                  High Distress
                </span>
                <span className="absolute bottom-2.5 left-2.5 text-white text-xs font-bold">
                  Mattress & Bedding
                </span>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900">Bed Bugs</h4>
                  <p className="text-xs text-gray-600 mt-1 mb-3 leading-relaxed">
                    Oval, flat reddish-brown insects hiding in mattress seams, bed frames, and sofa crevices. Causes itchy clustered bites.
                  </p>
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  Treatment: Dual-phase thermal steam + residual micro-dusting.
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
              <div className="relative h-40 w-full bg-gray-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Rodent and rat exclusion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-amber-600 text-white text-[10px] font-bold uppercase shadow-xs">
                  Property Damage
                </span>
                <span className="absolute bottom-2.5 left-2.5 text-white text-xs font-bold">
                  Ceilings & Cables
                </span>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900">Roof & Sewer Rats</h4>
                  <p className="text-xs text-gray-600 mt-1 mb-3 leading-relaxed">
                    Aggressive gnawers attacking false ceiling wiring, pantry items, and AC ducts. Leaves spindle-shaped droppings.
                  </p>
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  Treatment: Tamper-proof bait boxes + physical cable mesh exclusion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
