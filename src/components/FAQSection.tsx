import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall, Award, MapPin } from 'lucide-react';
import { FAQS_DATA } from '../data/pestData';

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'General' | 'Safety & Eco' | 'Pricing & Plans' | 'Commercial'>('All');
  const [openId, setOpenId] = useState<string>('faq-1');

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Clear Answers Before You Book</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-gray-600 font-normal">
            Everything you need to know about our safety protocols, odorless formulations, warranty policies, and 2-hour rapid dispatch.
          </p>
        </div>

        {/* 2-Column Split: Relatable Photo Sidebar + Accordion FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Relatable Technician & Guarantee Photo Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-emerald-950 text-white overflow-hidden shadow-xl border border-emerald-800">
              <div className="relative h-56 w-full bg-gray-900 overflow-hidden">
                <img
                  src="/images/technician-action.jpg"
                  alt="Certified Master Technician Ready to Answer Questions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-lime-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-lime-300" />
                  <span>Certified Entomologist Guidance</span>
                </span>
              </div>

              <div className="p-6 space-y-4 text-xs">
                <h3 className="text-lg font-bold text-white">Have a specific pest query?</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Call our senior field supervisor directly. We assess your property over the phone or dispatch a technician for a free on-site check in Lucknow.
                </p>

                <div className="space-y-2 pt-2 border-t border-emerald-800/80">
                  <a
                    href="tel:9838425271"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-lime-300" />
                      <span>Primary: 9838425271</span>
                    </span>
                    <span className="text-[10px] text-lime-300 font-bold">Call Now</span>
                  </a>

                  <a
                    href="tel:8299405414"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-rose-300" />
                      <span>Alt: 8299405414</span>
                    </span>
                    <span className="text-[10px] text-rose-300 font-bold">24/7 Desk</span>
                  </a>
                </div>

                <div className="pt-2 flex items-start gap-2 text-emerald-200 text-[11px]">
                  <MapPin className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                  <span>Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Category Tabs + Accordion Items */}
          <div className="lg:col-span-8 space-y-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['All', 'General', 'Safety & Eco', 'Pricing & Plans', 'Commercial'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0F7A4A] text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion FAQ Items */}
            <div className="space-y-3.5">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[#F7F9F8] border border-gray-200/90 overflow-hidden transition-all duration-200 shadow-xs"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? '' : faq.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#0F7A4A] cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center border border-gray-200 shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-emerald-50 border-emerald-300' : ''}`}>
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/50 pt-3.5 bg-white/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
