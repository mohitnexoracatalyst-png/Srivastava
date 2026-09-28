import React, { useState } from 'react';
import { ShieldCheck, Check, ArrowRight, Zap, Award, Sparkles, PhoneCall } from 'lucide-react';
import { PLANS_DATA } from '../data/pestData';

interface PlansSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'single' | 'annual'>('annual');

  return (
    <section id="plans" className="py-20 bg-[#F7F9F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#0F7A4A] text-xs font-semibold mb-4">
            <Award className="w-4 h-4 text-[#0F7A4A]" />
            <span>Standard Market Rates for UP & All Over India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Transparent Pest Control Packages & AMC Plans
          </h2>
          <p className="mt-3 text-base text-gray-600 font-normal">
            No hidden charges, no toxic fumes. Choose affordable one-time relief or complete 365-day year-round pest defense with free emergency callbacks across Lucknow, UP & all over India.
          </p>

          {/* Pricing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('single')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'single'
                  ? 'bg-[#0F7A4A] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              1-Time Quick Relief
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#0F7A4A] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Annual AMC Contract (Recommended)</span>
              <span className="px-2 py-0.5 text-[10px] bg-lime-300 text-emerald-950 font-bold rounded-full">
                4 Services / Yr
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan) => {
            const isSingle = plan.id === 'plan-single';
            const price = plan.priceAnnual;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#064E3B] to-[#0F7A4A] text-white shadow-2xl scale-102 border-2 border-lime-400'
                    : 'bg-white text-gray-900 border border-gray-200 hover:border-emerald-300 shadow-xl'
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div className="absolute top-3 right-3 z-20 px-3.5 py-1 rounded-full bg-lime-400 text-emerald-950 text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Best Value in UP & India</span>
                  </div>
                )}

                {/* Relatable Photo Header */}
                {plan.image && (
                  <div className="relative h-44 w-full bg-gray-900 overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-white text-[11px] font-bold drop-shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex-grow flex flex-col justify-between">
                  <div>
                    {!plan.image && (
                      <span className={`text-[11px] font-semibold uppercase tracking-wider block mb-2 ${
                        plan.popular ? 'text-lime-300' : 'text-[#0F7A4A]'
                      }`}>
                        {plan.badge}
                      </span>
                    )}

                    {/* Plan Name */}
                    <h3 className="text-2xl font-black tracking-tight mb-2">
                      {plan.name}
                    </h3>

                    <p className={`text-xs leading-relaxed mb-6 ${
                      plan.popular ? 'text-emerald-100' : 'text-gray-600'
                    }`}>
                      {plan.description}
                    </p>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-200/20">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className={`text-xs font-semibold ${plan.popular ? 'text-emerald-200' : 'text-gray-500'}`}>
                        {isSingle ? '/ one-time service' : '/ annual package'}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 text-xs mb-8">
                      <span className={`font-bold block uppercase tracking-wider text-[10px] ${
                        plan.popular ? 'text-lime-300' : 'text-[#0F7A4A]'
                      }`}>
                        Package Inclusions:
                      </span>

                      {plan.includes.map((inc, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? 'text-lime-300' : 'text-[#0F7A4A]'
                          }`} />
                          <span className={plan.popular ? 'text-emerald-50 font-medium' : 'text-gray-700'}>
                            {inc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Guarantee & CTA */}
                  <div>
                    <div className={`p-3 rounded-xl text-center text-xs font-semibold mb-6 ${
                      plan.popular ? 'bg-white/10 text-lime-200' : 'bg-emerald-50 text-[#0F7A4A]'
                    }`}>
                      🛡️ {plan.guaranteeText}
                    </div>

                    <button
                      onClick={() => onSelectPlan(plan.id)}
                      className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                        plan.popular
                          ? 'bg-lime-400 hover:bg-lime-300 text-emerald-950 hover:shadow-xl'
                          : 'bg-[#0F7A4A] hover:bg-[#064E3B] text-white hover:shadow-xl'
                      }`}
                    >
                      <span>Book {plan.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Rate Card Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-gray-200 text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#0F7A4A] flex items-center justify-center font-bold">
              ₹
            </div>
            <div>
              <strong className="text-gray-900 block">Property-wise customized rates:</strong>
              1 BHK: from ₹799 | 2 BHK: from ₹999 | 3 BHK / Independent House: from ₹1,399 | Anti-Termite: ₹3 - ₹5 / sq. ft.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:9838425271"
              className="px-4 py-2 rounded-xl bg-emerald-50 text-[#0F7A4A] font-bold border border-emerald-200"
            >
              Primary: 9838425271
            </a>
            <a
              href="tel:8299405414"
              className="px-4 py-2 rounded-xl bg-rose-50 text-rose-700 font-bold border border-rose-200"
            >
              Alternative: 8299405414
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
