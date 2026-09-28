import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Award, 
  Users, 
  HeartHandshake, 
  CheckCircle2, 
  Clock, 
  Building2,
  Sparkles,
  Globe2
} from 'lucide-react';
import { GovernmentCertificatesSection } from '../components/GovernmentCertificatesSection';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-3">
              <Globe2 className="w-4 h-4" />
              <span>Head Office: Lucknow • Services Available All Over India</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              About Srivastava Pest Control Services
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Founded on the principles of health safety, scientific pest biology, and transparent pricing, Srivastava Pest Control is India's trusted provider of residential, commercial, and industrial pest management solutions.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Mission & Story Card */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block">
                Our Story & Pan-India Reach
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Pest-Free Living With 100% Odorless & Safe Formulations
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Traditional pest control forced families to vacate their homes and empty kitchen utensils for days due to toxic smells. Srivastava Pest Control Services revolutionized this with advanced Integrated Pest Management (IPM).
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Led by <strong>Aman Srivastava</strong> and our certified technician team, we deploy odorless herbal cockroach gels, sub-soil anti-termite drill-fill reticulation, cold ULV fogging, and humane rodent exclusions. Today, we proudly serve homeowners and businesses across Lucknow, all 75 districts of Uttar Pradesh, and major commercial hubs all over India.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-2xl font-black text-[#0F7A4A] block">25,000+</span>
                  <span className="text-xs text-gray-600 font-medium">Inspections Completed</span>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-2xl font-black text-[#0F7A4A] block">Pan-India</span>
                  <span className="text-xs text-gray-600 font-medium">Service Coverage Across India</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-emerald-950 p-8 rounded-3xl text-white space-y-6">
              <div className="flex items-center gap-3.5 pb-3 border-b border-emerald-800/80">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1.5 shadow-lg overflow-hidden shrink-0 flex items-center justify-center ring-2 ring-lime-400/30">
                  <img
                    src="/logo.png"
                    alt="Srivastava Pest Control Services Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Srivastava Pest Control</h3>
                  <span className="text-xs text-lime-300 font-semibold">Registered Office & Helpline</span>
                </div>
              </div>
              <div className="space-y-4 text-xs text-emerald-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lime-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Headquarters</strong>
                    Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028, Uttar Pradesh
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-lime-300 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Direct Helpline</strong>
                    Primary: <a href="tel:9838425271" className="text-lime-300 font-bold underline">9838425271</a><br />
                    Alternative: <a href="tel:8299405414" className="text-lime-300 font-bold underline">8299405414</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-lime-300 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Email Support</strong>
                    <a href="mailto:srivastavapestcontrol@gmail.com" className="text-lime-200 underline">
                      srivastavapestcontrol@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-lime-300 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Service Hours</strong>
                    Monday – Sunday: 24/7 Priority Emergency Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photographic Field Proof & Specialized Equipment */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
              Field Operations & Precision Chemistry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Our Certified Technicians & Specialized Equipment in Action
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Every Srivastava Pest Control applicator undergoes rigorous government and IPCA standard training. We arrive in complete protective gear, equipped with calibrated German injection pumps, ultrasonic acoustic monitors, and 100% odorless herbal formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col justify-between group shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/technician-action.jpg"
                  alt="Certified Master Technician in Action"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  On-Site Vulnerability Mapping
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Government Trained Applicators</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Certified technicians trained in structural entomology, safe chemical handling, and precise non-staining micro-spray techniques.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col justify-between group shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/termite-drill.jpg"
                  alt="Precision Anti-Termite Woodwork Injection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  12mm Precision Drill-Fill
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Woodwork & Skirting Preservation</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-pressure liquid termiticide barrier injected directly to the wood-brick junction to eradicate termite queen colonies with zero structural scars.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col justify-between group shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src="/images/kitchen-gel.jpg"
                  alt="Modular Kitchen Odorless Cockroach Gel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  100% Odorless Food-Safe Gel
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Zero Kitchen Emptying Required</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Botanical bait matrices placed in hidden hinges and motor voids. Complete nest collapse with zero toxic fumes and zero utensil shifting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Official Government Certificates & Verification (Portrait) */}
        <div className="rounded-3xl overflow-hidden">
          <GovernmentCertificatesSection />
        </div>

        {/* Coverage Network: Lucknow, UP & All Over India */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
              Nationwide & Regional Reach
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Service Locations Across Lucknow, UP & All Over India
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Whether you are located near our Malhaur headquarters or anywhere across Uttar Pradesh and major Indian metros, our mobile technician network is ready for rapid on-site dispatch.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                1. Lucknow City & Local Hubs:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 text-xs text-gray-700">
                {[
                  'Malhaur & Amity University',
                  'Chinhat & Faizabad Road',
                  'Gomti Nagar & Vibhuti Khand',
                  'Gomti Nagar Extension',
                  'Indira Nagar & Munshipulia',
                  'Hazratganj & Mahanagar',
                  'Aliganj & Jankipuram',
                  'Shaheed Path & Sushant Golf City',
                  'Ashiyana & Alambagh',
                  'Charbagh & Transport Nagar',
                  'Vikas Nagar & Tedhi Pulia',
                  'Kamta, Matiyari & BBD Area'
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                2. Uttar Pradesh Districts & Pan-India Network:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 text-xs text-gray-700">
                {[
                  'Kanpur & Unnao',
                  'Varanasi (Kashi)',
                  'Prayagraj (Allahabad)',
                  'Gorakhpur & Basti',
                  'Ayodhya & Barabanki',
                  'Noida & Greater Noida',
                  'Ghaziabad & Delhi NCR',
                  'Agra & Mathura',
                  'Bareilly & Moradabad',
                  'Meerut & Aligarh',
                  'Jhansi & Bundelkhand',
                  'All Major Cities in India'
                ].map((city, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                    <Globe2 className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0" />
                    <span className="font-semibold">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#0F7A4A] mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">CIB&RC Registered</h4>
            <p className="text-xs text-gray-600">100% government approved, child and pet-safe chemical formulations.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Sparkles className="w-8 h-8 text-[#0F7A4A] mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">Zero-Odor Herbal Gel</h4>
            <p className="text-xs text-gray-600">No need to empty kitchen crockery, groceries, or relocate patients.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Award className="w-8 h-8 text-[#0F7A4A] mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">3 to 5 Year Warranty</h4>
            <p className="text-xs text-gray-600">Written warranty on termite treatments with free recall re-treatments.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Clock className="w-8 h-8 text-[#0F7A4A] mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">Same-Day Dispatch</h4>
            <p className="text-xs text-gray-600">Fast 2-hour priority response across Lucknow and prompt dispatch pan-India.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">Need expert pest consultation?</h4>
            <p className="text-xs text-gray-600 mt-1">Book a free inspection or speak directly with Aman Srivastava and the team right now.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-bold shadow-md cursor-pointer"
            >
              Book Free Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
