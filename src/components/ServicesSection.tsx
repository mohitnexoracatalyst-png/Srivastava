import React, { useState } from 'react';
import { Shield, Home, Bug, Flame, Wind, Building2, Check, ArrowRight, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/pestData';
import { PestService } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: (serviceName?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6 text-[#0F7A4A]" />,
  Home: <Home className="w-6 h-6 text-[#0F7A4A]" />,
  Bug: <Bug className="w-6 h-6 text-[#0F7A4A]" />,
  Flame: <Flame className="w-6 h-6 text-[#0F7A4A]" />,
  Wind: <Wind className="w-6 h-6 text-[#0F7A4A]" />,
  Building2: <Building2 className="w-6 h-6 text-[#0F7A4A]" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Emergency' | 'Residential' | 'Commercial'>('All');
  const [selectedModalService, setSelectedModalService] = useState<PestService | null>(null);

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeTab === 'Emergency') return service.urgencyLevel === 'Emergency' || service.urgencyLevel === 'High';
    if (activeTab === 'Commercial') return service.id === 'commercial-biosecurity';
    if (activeTab === 'Residential') return service.id !== 'commercial-biosecurity';
    return true;
  });

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Targeted Scientific Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Comprehensive Pest Control & Environmental Protection
          </h2>
          <p className="mt-4 text-base text-gray-600 font-normal">
            Whether eradicating drywood termites, excluding rodents, or securing a commercial facility, our treatments combine eco-friendly chemistry with physical architectural barriers.
          </p>

          {/* Filter Category Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200/80 gap-1">
            {(['All', 'Residential', 'Emergency', 'Commercial'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#0F7A4A] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {tab === 'All' && 'All Protection Services'}
                {tab === 'Residential' && 'Residential Services'}
                {tab === 'Emergency' && '24/7 Emergency Response'}
                {tab === 'Commercial' && 'Commercial IPM'}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-2xl bg-[#F7F9F8] border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${
                service.featured
                  ? 'border-emerald-300 ring-1 ring-emerald-500/20'
                  : 'border-gray-200 hover:border-emerald-300'
              }`}
            >
              {/* Service Photo Header */}
              {service.image && (
                <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 backdrop-blur-xs text-lime-300 text-[11px] font-bold border border-emerald-700/50 shadow-xs">
                      {service.badge || `${service.guaranteeDays}-Day Guarantee`}
                    </span>

                    {service.urgencyLevel === 'Emergency' && (
                      <span className="px-2 py-0.5 rounded-lg bg-rose-600/90 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs">
                        <AlertCircle className="w-3 h-3 text-white" />
                        24/7 Rapid
                      </span>
                    )}
                  </div>

                  {/* Bottom Icon Overlay */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xs border border-emerald-100 flex items-center justify-center shadow-md">
                      {iconMap[service.iconName] || <Shield className="w-4 h-4 text-[#0F7A4A]" />}
                    </div>
                    <span className="text-white text-xs font-mono font-medium drop-shadow-md">
                      {service.scientificCategory}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {!service.image && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-sm">
                        {iconMap[service.iconName] || <Shield className="w-5 h-5 text-[#0F7A4A]" />}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#0F7A4A] text-[11px] font-bold">
                        {service.guaranteeDays}-Day Guarantee
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#0F7A4A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5 mb-3">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Bullet List */}
                  <div className="space-y-2 border-t border-gray-200/80 pt-4 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#0F7A4A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="text-xs font-semibold text-gray-600 hover:text-[#0F7A4A] underline underline-offset-4 cursor-pointer"
                  >
                    View Protocol
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm group-hover:shadow-md"
                  >
                    <span>Book Inspection</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Protocol Detail Modal */}
        {selectedModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-emerald-900/20 shadow-2xl relative">
              <button
                onClick={() => setSelectedModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  {iconMap[selectedModalService.iconName] || <Shield className="w-5 h-5 text-[#0F7A4A]" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedModalService.title}</h3>
                  <p className="text-xs text-emerald-700 font-mono">{selectedModalService.scientificCategory}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{selectedModalService.description}</p>

              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 text-xs space-y-2 mb-6">
                <div>
                  <span className="font-bold text-[#0F7A4A] block">Treatment Method:</span>
                  <span className="text-gray-700">{selectedModalService.treatmentMethod}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0F7A4A] block">Target Pest Species:</span>
                  <span className="text-gray-700">{selectedModalService.targetPests.join(', ')}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0F7A4A] block">Protection Guarantee:</span>
                  <span className="text-gray-700">{selectedModalService.guaranteeDays} Days Full Coverage + Unlimited Re-Treatments</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedModalService.title;
                    setSelectedModalService(null);
                    onOpenBooking(title);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0F7A4A] text-white text-xs font-semibold shadow-md hover:bg-[#064E3B]"
                >
                  Book Free Inspection
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
