import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { GovernmentCertificatesSection } from '../components/GovernmentCertificatesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Clock, 
  Award, 
  Zap, 
  Sparkles,
  Building2,
  Check,
  MapPin,
  Leaf,
  Scan,
  Lock,
  Utensils,
  Hotel,
  Shield,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA, PHOTO_SHOWCASE_DATA, PROTECTION_STEPS, COMMERCIAL_SECTORS } from '../data/pestData';

interface HomePageProps {
  onOpenBooking: (serviceOrPlan?: string) => void;
}

const stepIcons: Record<string, React.ReactNode> = {
  Scan: <Scan className="w-5 h-5 text-[#0F7A4A]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#0F7A4A]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0F7A4A]" />,
  Lock: <Lock className="w-5 h-5 text-[#0F7A4A]" />
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  // Top 3 featured services for clean, focused presentation
  const featuredServices = SERVICES_DATA.slice(0, 3);
  // Top 3 real operations photos without interactive compare
  const featuredOperations = PHOTO_SHOWCASE_DATA.slice(0, 3);
  // Top 3 commercial sectors preview
  const featuredCommercial = COMMERCIAL_SECTORS.slice(0, 3);

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (Value Proposition, Emergency CTA, Stats)
         ───────────────────────────────────────────────────────────── */}
      <HeroSection
        onOpenBooking={() => onOpenBooking()}
        onOpenAnalyzer={() => {}}
      />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: OFFICIAL GOVERNMENT LICENSES & REGISTRATIONS
         ───────────────────────────────────────────────────────────── */}
      <GovernmentCertificatesSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: PERFORMANCE & TRUST METRICS STRIP
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-emerald-950 text-white py-6 border-y border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800/80">
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-lime-300 block tracking-tight">25,000+</span>
              <span className="text-[11px] sm:text-xs text-emerald-200 uppercase tracking-wider font-semibold">Properties Protected</span>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-lime-300 block tracking-tight">100%</span>
              <span className="text-[11px] sm:text-xs text-emerald-200 uppercase tracking-wider font-semibold">CIB&RC Odorless Chemistry</span>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-lime-300 block tracking-tight">5 Years</span>
              <span className="text-[11px] sm:text-xs text-emerald-200 uppercase tracking-wider font-semibold">Written Warranty Available</span>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-lime-300 block tracking-tight">&lt; 2 Hours</span>
              <span className="text-[11px] sm:text-xs text-emerald-200 uppercase tracking-wider font-semibold">Rapid Dispatch in UP</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CORE PEST TREATMENTS (What We Treat)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-100 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-bold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Specialized Pest Biosecurity</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                Our Core Pest Treatments
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 max-w-xl">
                CIB&RC approved odorless chemistry. Child-safe, pet-safe, and zero damage to woodwork or kitchen items.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F7A4A] border border-emerald-200 text-xs font-bold transition-all shrink-0"
            >
              <span>Explore All 8+ Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-[#F7F9F8] border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {service.image && (
                  <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-950/90 text-lime-300 text-[11px] font-bold border border-emerald-700/50 shadow-xs">
                      {service.badge || `${service.guaranteeDays} Days Warranty`}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                      {service.scientificCategory}
                    </span>
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0F7A4A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{service.subtitle}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-gray-600 hover:text-[#0F7A4A] underline underline-offset-2"
                    >
                      Protocol & Details
                    </Link>
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="px-4 py-2 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-semibold cursor-pointer shadow-xs transition-colors"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: HOW IT WORKS (4-Step Scientific Treatment Process)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F7F9F8] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-gray-200/80 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0F7A4A] text-xs font-bold mb-2">
                <Scan className="w-3.5 h-3.5" />
                <span>The Scientific Methodology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                How Our 4-Step Treatment Process Works
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 max-w-xl">
                Systematic Integrated Pest Management (IPM). From root-cause diagnostic scan to long-term perimeter defense.
              </p>
            </div>

            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 text-xs font-bold transition-all shadow-xs shrink-0"
            >
              <span>View Full Safety Protocols</span>
              <ArrowRight className="w-4 h-4 text-[#0F7A4A]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROTECTION_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {step.image && (
                  <div className="relative h-40 w-full bg-gray-900 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs text-lime-300 font-mono text-[11px] font-bold border border-white/20">
                      STEP {step.number}
                    </span>
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-white/95 flex items-center justify-center shadow-md">
                      {stepIcons[step.icon] || <ShieldCheck className="w-4 h-4 text-[#0F7A4A]" />}
                    </div>
                  </div>
                )}

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#0F7A4A] transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#0F7A4A] block mb-2">
                      {step.subtitle}
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-gray-100 text-xs">
                    {step.highlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0" />
                        <span className="text-[11px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: WHY CHOOSE US (The 4 Distinct Value Pillars)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0F7A4A] text-xs font-bold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>The Srivastava Standard</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Why Homeowners & Businesses Trust Us
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              Clean science, zero hazardous fumes, and guaranteed eradication backed by government certified standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F9F8] border border-gray-200 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F7A4A] flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">100% Odorless Chemistry</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Zero pungent smoke. Safe for infants, pregnant mothers, elders, and pets. No need to clear kitchen utensils.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9F8] border border-gray-200 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F7A4A] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Up to 5-Yr Warranty</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Written digital service warranty certificate with free callback visits if pests ever reappear during the contract period.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9F8] border border-gray-200 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F7A4A] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">2-Hour Rapid Dispatch</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated technician fleet stationed across Lucknow (Malhaur, Gomti Nagar, Indira Nagar, Aliganj) & major UP hubs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9F8] border border-gray-200 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F7A4A] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Govt. Certified Technicians</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every technician is background-verified, trained under CIB&RC protocol, and wears sanitized uniform kits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: COMMERCIAL & ENTERPRISE BIOSECURITY SPOTLIGHT
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F7F9F8] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-950 via-[#064E3B] to-emerald-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="px-3 py-1 rounded-full bg-white/10 text-lime-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-white/15 mb-3">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Commercial & Enterprise Biosecurity</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Audit-Ready Pest Compliance for Businesses & Institutions
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 mt-2 max-w-xl leading-relaxed">
                  Protect your reputation, pass FSSAI audits with 100% compliance, and ensure zero contamination across restaurants, banquet halls, hospitals, food processing factories, and cold storages.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <strong className="text-lime-300 block mb-0.5">FSSAI & ISO</strong>
                    <span className="text-emerald-100 text-[11px]">Audit documentation & station logs</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <strong className="text-lime-300 block mb-0.5">After-Hours Service</strong>
                    <span className="text-emerald-100 text-[11px]">Zero operational disruption to guests</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <strong className="text-lime-300 block mb-0.5">Custom AMC</strong>
                    <span className="text-emerald-100 text-[11px]">Monthly/Quarterly biosecurity checks</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3 justify-center items-stretch sm:items-start lg:items-end">
                <Link
                  to="/commercial"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-xs text-center shadow-lg transition-all"
                >
                  Explore Commercial Solutions
                </Link>
                <button
                  onClick={() => onOpenBooking('Commercial & Industrial IPM')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold text-center transition-all cursor-pointer"
                >
                  Request Corporate Site Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: REAL FIELD WORK IN ACTION (Live Photo Proof)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-100 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Field Execution Proof</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                Real On-Site Operations in Lucknow
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 max-w-xl">
                Authentic field photographs from residential villas, modular kitchens, and commercial sites.
              </p>
            </div>

            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-all shrink-0"
            >
              <span>See Our Scientific Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredOperations.map((item) => (
              <div
                key={item.id}
                className="bg-[#F7F9F8] rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-950/90 text-lime-300 text-[11px] font-bold border border-emerald-700/50 shadow-xs">
                    {item.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-lime-300" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{item.subtitle}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.warranty}
                    </span>
                    <button
                      onClick={() => onOpenBooking(item.serviceName)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#0F7A4A] text-white text-xs font-semibold hover:bg-[#064E3B] cursor-pointer transition-colors"
                    >
                      Book This
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: VERIFIED CUSTOMER TESTIMONIALS & RATINGS
         ───────────────────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
         ───────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: FINAL CONVERSION & EMERGENCY CONTACT BANNER
         ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950 via-[#064E3B] to-emerald-900 text-white relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <span className="px-3 py-1 rounded-full bg-white/10 text-lime-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-white/15 mb-3">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Head Office: Lucknow • Pan-India Coverage</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Have a pest issue? Speak directly with our senior technician.
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 mt-2 max-w-xl leading-relaxed">
                  Call now for zero-cost consultation and same-day dispatch. 
                  Address: <strong>Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028</strong>.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold">
                  <a
                    href="tel:9838425271"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-lime-400 text-emerald-950 hover:bg-lime-300 transition-colors shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-900" />
                    <span>Primary: 9838425271</span>
                  </a>
                  <a
                    href="tel:8299405414"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-lime-300" />
                    <span>Alternative: 8299405414</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-gray-100 text-emerald-950 text-xs font-black text-center shadow-lg transition-all cursor-pointer"
                >
                  Book Free On-Site Inspection
                </button>
                <Link
                  to="/plans"
                  className="w-full py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold text-center transition-all"
                >
                  View Annual AMC Plans
                </Link>
                <Link
                  to="/contact"
                  className="w-full py-2.5 text-xs text-emerald-200 hover:text-white text-center underline underline-offset-4 font-semibold"
                >
                  Visit Contact & Directions Page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
