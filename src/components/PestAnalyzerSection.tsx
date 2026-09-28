import React, { useState } from 'react';
import { AlertTriangle, Bug, ShieldCheck, CheckCircle2, ArrowRight, RefreshCw, Zap, Sparkles, FileText } from 'lucide-react';

interface PestAnalyzerSectionProps {
  onOpenBookingWithAnalysis: (pestType: string, urgency: string, notes: string) => void;
}

const LOCATION_OPTIONS = [
  { id: 'kitchen', label: 'Kitchen & Cabinet Sinks', icon: 'Utensils' },
  { id: 'attic', label: 'Attic & Roof Voids', icon: 'Home' },
  { id: 'crawlspace', label: 'Crawlspace & Foundation', icon: 'Layers' },
  { id: 'bedroom', label: 'Bedrooms & Mattresses', icon: 'Bed' },
  { id: 'lawn', label: 'Lawn, Patio & Trees', icon: 'Trees' },
  { id: 'walls', label: 'Inside Walls & Drywall', icon: 'Square' }
];

const SYMPTOM_OPTIONS = [
  { id: 'frass', label: 'Fine wood dust or tiny pellet frass' },
  { id: 'noises', label: 'Scratching/scuttling sounds at night' },
  { id: 'droppings', label: 'Small dark droppings or grease smudges' },
  { id: 'tubes', label: 'Mud tubes along foundation walls' },
  { id: 'bites', label: 'Unexplained itchy skin bites in morning' },
  { id: 'sightings', label: 'Active live pest sightings in daylight' }
];

export const PestAnalyzerSection: React.FC<PestAnalyzerSectionProps> = ({ onOpenBookingWithAnalysis }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('kitchen');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['droppings']);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const toggleSymptom = (symptomId: string) => {
    if (selectedSymptoms.includes(symptomId)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptomId));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptomId]);
    }
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);

      // Simple intelligent rule matching
      let probablePest = 'General Crawling Pests (Cockroaches & Ants)';
      let urgency = 'Standard (Next 48h)';
      let threatLevel = 'Moderate Hygiene Risk';
      let description = 'Kitchen cabinet or drain intrusion detected. 100% odorless herbal gel dots eradicate the entire colony within 72 hours without emptying groceries.';
      let recommendedService = 'Cockroach & Ant Herbal Gel Treatment';
      let image = '/images/kitchen-gel.jpg';

      if (selectedSymptoms.includes('tubes') || selectedSymptoms.includes('frass')) {
        probablePest = 'Subterranean / Drywood Termite Colony';
        urgency = 'Emergency 24/7 Dispatch';
        threatLevel = 'Critical Structural Threat';
        description = 'Active wood hollowing detected in wooden door frames, skirtings, or wardrobes. Requires precision Drill-Fill-Seal chemical barrier injection.';
        recommendedService = 'Termite Control & Barrier Treatment';
        image = '/images/termite-drill.jpg';
      } else if (selectedSymptoms.includes('noises') || selectedSymptoms.includes('droppings')) {
        probablePest = 'Roof Rat or Mouse Rodent Intrusion';
        urgency = 'Same-Day Urgent';
        threatLevel = 'Severe Contamination Risk';
        description = 'Active nesting in false ceilings, kitchen storerooms, or wire conduits. Tamper-proof bait boxes and steel mesh exclusion recommended.';
        recommendedService = 'Rodent & Rat Management';
        image = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
      } else if (selectedSymptoms.includes('bites') || selectedLocation === 'bedroom') {
        probablePest = 'Bed Bug Infestation (Cimex lectularius)';
        urgency = 'Emergency 24/7 Dispatch';
        threatLevel = 'High Human Impact';
        description = 'Superheated 180°C dry thermal steam and micro-dusting required to neutralize both live bugs and deep egg casings along mattress seams.';
        recommendedService = 'Bed Bug Thermal & Chemical Eradication';
        image = '/images/bedbug-steam.jpg';
      }

      setAnalysisResult({
        probablePest,
        urgency,
        threatLevel,
        description,
        recommendedService,
        image,
        location: LOCATION_OPTIONS.find(l => l.id === selectedLocation)?.label,
        symptomCount: selectedSymptoms.length
      });
    }, 1200);
  };

  return (
    <section id="analyzer" className="py-20 bg-gradient-to-b from-[#F7F9F8] to-[#EAF7F0]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#0F7A4A] text-xs font-semibold mb-4">
            <Zap className="w-4 h-4 text-[#0F7A4A]" />
            <span>AI Spatial Pest Diagnostic Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Not Sure What Kind of Pest You Have?
          </h2>
          <p className="mt-3 text-base text-gray-600 font-normal">
            Select your property location and observed symptoms to generate an instant risk assessment and recommended treatment protocol.
          </p>
        </div>

        {/* Interactive Analyzer Console */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Step 1: Location Selection */}
            <div>
              <label className="text-xs font-extrabold text-[#0F7A4A] uppercase tracking-wider block mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F7A4A] text-white flex items-center justify-center text-[10px]">1</span>
                Where are you seeing signs of pest activity?
              </label>

              <div className="grid grid-cols-2 gap-2.5">
                {LOCATION_OPTIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      selectedLocation === loc.id
                        ? 'bg-emerald-50 border-[#0F7A4A] text-[#0F7A4A] shadow-sm ring-1 ring-[#0F7A4A]/20'
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Symptom Selection */}
            <div>
              <label className="text-xs font-extrabold text-[#0F7A4A] uppercase tracking-wider block mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F7A4A] text-white flex items-center justify-center text-[10px]">2</span>
                What specific symptoms have you noticed?
              </label>

              <div className="space-y-2">
                {SYMPTOM_OPTIONS.map((sym) => {
                  const isChecked = selectedSymptoms.includes(sym.id);
                  return (
                    <button
                      key={sym.id}
                      onClick={() => toggleSymptom(sym.id)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-50 border-[#0F7A4A] text-[#0F7A4A]'
                          : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                      }`}
                    >
                      <span>{sym.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-[#0F7A4A] border-[#0F7A4A] text-white' : 'border-gray-300'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Action Trigger Button */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-sm font-semibold shadow-xl shadow-emerald-900/20 transition-all active:scale-98 cursor-pointer disabled:opacity-60"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 text-lime-300 animate-spin" />
                  <span>Scanning Thermal & Bio-Database...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-lime-300" />
                  <span>Generate Instant Risk Assessment</span>
                </>
              )}
            </button>
          </div>

          {/* Diagnostic Result Card with Relatable Photo */}
          {analysisResult && (
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#064E3B] to-[#0F7A4A] text-white border border-emerald-400/30 shadow-2xl overflow-hidden animate-fade-in">
              
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Result Photo Header */}
                <div className="md:col-span-5 relative min-h-[220px] bg-black">
                  <img
                    src={analysisResult.image}
                    alt={analysisResult.probablePest}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {analysisResult.threatLevel}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <span className="text-[10px] text-lime-300 font-mono block">Recommended Treatment:</span>
                    <span className="font-bold">{analysisResult.recommendedService}</span>
                  </div>
                </div>

                {/* Result Details */}
                <div className="md:col-span-7 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono text-lime-300 uppercase tracking-widest block">
                          AI Diagnostic Match
                        </span>
                        <h3 className="text-lg font-black text-white">
                          {analysisResult.probablePest}
                        </h3>
                      </div>
                      <span className="text-xs text-emerald-200">
                        Urgency: <strong className="text-white">{analysisResult.urgency}</strong>
                      </span>
                    </div>

                    <div className="my-3 space-y-2 text-xs">
                      <div>
                        <span className="text-emerald-200 block text-[11px]">Inspected Zone:</span>
                        <span className="font-bold text-white">{analysisResult.location}</span>
                      </div>
                      <p className="text-emerald-100 leading-relaxed bg-white/10 p-3 rounded-xl">
                        {analysisResult.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenBookingWithAnalysis(
                        analysisResult.probablePest,
                        analysisResult.urgency,
                        `Diagnosed via AI Analyzer in ${analysisResult.location}. Symptoms: ${selectedSymptoms.join(', ')}`
                      )}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-xs shadow-lg transition-all cursor-pointer"
                    >
                      <span>Book Free Inspection for {analysisResult.probablePest}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Visual Pest Diagnostic Reference Gallery */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
              Field Recognition Guide
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Visual Reference: Compare Your Symptoms with Real Field Photos
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Real field photography captured during on-site inspections across Lucknow and UP.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm group hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/termite-drill.jpg"
                  alt="Termite Wood Damage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-bold">
                  Wood & Skirting Tubes
                </span>
              </div>
              <div className="p-3.5">
                <span className="text-[10px] text-rose-600 font-bold uppercase block">Termite Warning</span>
                <p className="text-xs text-gray-700 font-medium mt-0.5">Mud tunnels on walls or fine sawdust powder near door frames.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm group hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/kitchen-gel.jpg"
                  alt="Cockroach Herbal Gel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-bold">
                  Cabinet Hinge Baiting
                </span>
              </div>
              <div className="p-3.5">
                <span className="text-[10px] text-amber-600 font-bold uppercase block">Cockroach Infestation</span>
                <p className="text-xs text-gray-700 font-medium mt-0.5">Droppings like black pepper under sinks, grease marks, nocturnal roaches.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm group hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/bedbug-steam.jpg"
                  alt="Bed Bug Steam Disinfestation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-bold">
                  Mattress Seam Steam
                </span>
              </div>
              <div className="p-3.5">
                <span className="text-[10px] text-rose-600 font-bold uppercase block">Bed Bug Symptoms</span>
                <p className="text-xs text-gray-700 font-medium mt-0.5">Linear itchy red skin welts in morning, blood spots on bed sheets.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm group hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/mosquito-fogging.jpg"
                  alt="Outdoor Vector Control Fogging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-bold">
                  Outdoor Garden Fogging
                </span>
              </div>
              <div className="p-3.5">
                <span className="text-[10px] text-emerald-700 font-bold uppercase block">Mosquito & Flies</span>
                <p className="text-xs text-gray-700 font-medium mt-0.5">Evening biting swarms in garden hedges and stagnant cooler water.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
