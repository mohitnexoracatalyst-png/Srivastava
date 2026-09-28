import React from 'react';
import { 
  ShieldCheck, 
  Check, 
  X, 
  PhoneCall, 
  Sparkles, 
  ArrowRight, 
  HelpCircle,
  Clock,
  Shield,
  Award,
  Globe2
} from 'lucide-react';
import { PlansSection } from '../components/PlansSection';

interface PlansPageProps {
  onSelectPlan: (planId: string) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onSelectPlan }) => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-3">
              <Globe2 className="w-4 h-4" />
              <span>Standard Market Rates for UP & All Over India</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              Pest Control Packages & Annual Maintenance Contracts (AMC)
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Transparent, competitive Indian market pricing with no hidden charges. Choose single one-time relief or complete 365-day year-round pest defense with free emergency callbacks across Lucknow, Uttar Pradesh, and all over India.
            </p>

            {/* Helpline ribbon */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:9838425271"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0F7A4A]" />
                <span>Primary Helpline: 9838425271</span>
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
        {/* Core Plans Component */}
        <PlansSection onSelectPlan={onSelectPlan} />

        {/* Detailed Plan Comparison Matrix Table */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Detailed Plan Feature Comparison
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Find the perfect defense tier for your flat, independent house, or commercial premises in UP & India.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-gray-700">
                  <th className="py-4 px-4 font-bold">Coverage & Features</th>
                  <th className="py-4 px-4 font-bold text-center">Single Relief Treatment</th>
                  <th className="py-4 px-4 font-bold text-center bg-emerald-50 text-[#0F7A4A]">Quarterly Home Shield (Popular)</th>
                  <th className="py-4 px-4 font-bold text-center">Total Home & Termite AMC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Starting Price</td>
                  <td className="py-3.5 px-4 text-center font-bold text-gray-900">₹799 (1 BHK) / ₹999 (2 BHK)</td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50 font-bold text-[#0F7A4A]">₹1,999 / Year (4 Visits)</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-950">₹3,999 / Year (All Inclusive)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Cockroaches & Ants (100% Odorless Gel)</td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Lizards & Spiders Residual Spray</td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Drainage Barrier & Skirting Spray</td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Rodent / Rat Trap Stations</td>
                  <td className="py-3.5 px-4 text-center"><span className="text-gray-400">Add-on</span></td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-[#0F7A4A] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Anti-Termite Drill-Fill-Seal</td>
                  <td className="py-3.5 px-4 text-center"><span className="text-gray-400">Add-on</span></td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50"><span className="text-gray-400">Add-on</span></td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0F7A4A]">Included (3-5 Yr Warranty)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Free Emergency Callback Visits</td>
                  <td className="py-3.5 px-4 text-center">Within 30 Days</td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50 font-bold text-[#0F7A4A]">100% Free Unlimited</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0F7A4A]">100% Free Unlimited 24/7 Priority</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Scheduled Preventive Visits</td>
                  <td className="py-3.5 px-4 text-center">1 Initial Service</td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50 font-semibold">4 Quarterly Visits</td>
                  <td className="py-3.5 px-4 text-center font-semibold">4 Visits + Termite Infusion</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-gray-800">Warranty Coverage</td>
                  <td className="py-3.5 px-4 text-center">30 Days</td>
                  <td className="py-3.5 px-4 text-center bg-emerald-50/50 font-bold text-[#0F7A4A]">365 Days Rolling</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0F7A4A]">3 to 5 Years on Termite</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-900">Select Plan</td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => onSelectPlan('plan-single')}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold cursor-pointer"
                    >
                      Book ₹799+
                    </button>
                  </td>
                  <td className="py-4 px-4 text-center bg-emerald-50/50">
                    <button
                      onClick={() => onSelectPlan('plan-quarterly')}
                      className="px-4 py-2 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white font-bold shadow-sm cursor-pointer"
                    >
                      Choose ₹1,999 AMC
                    </button>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => onSelectPlan('plan-comprehensive')}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-900 hover:bg-black text-white font-semibold cursor-pointer"
                    >
                      Choose ₹3,999 Total AMC
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Quote Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-emerald-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-lime-300">Need a customized quote for independent villas, bungalows, or commercial warehouses?</h4>
            <p className="text-xs text-emerald-100 mt-1 max-w-xl">
              We offer free on-site property measurements and customized treatment packages across Lucknow, Uttar Pradesh, and all over India.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:9838425271"
              className="px-5 py-3 rounded-xl bg-lime-300 hover:bg-lime-400 text-emerald-950 text-xs font-bold"
            >
              Primary: 9838425271
            </a>
            <a
              href="tel:8299405414"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20"
            >
              Alternative: 8299405414
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
