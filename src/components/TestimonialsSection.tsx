import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/pestData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F9F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#0F7A4A] text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-[#0F7A4A]" />
            <span>5,800+ Verified 5-Star Reviews in UP & India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Trusted by Homeowners & Business Leaders
          </h2>
          <p className="mt-3 text-base text-gray-600 font-normal">
            Read verified customer experiences from families, restaurant owners, and corporate facility directors protected by Srivastava Pest Control Services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="rounded-3xl bg-white border border-gray-200/90 shadow-lg flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Property Photo Header */}
              {test.propertyImage && (
                <div className="relative h-36 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={test.propertyImage}
                    alt={`${test.author}'s Protected Property`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-white text-[10px] font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Protected Property: {test.location.split(',')[0]}
                  </span>
                </div>
              )}

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-700 leading-relaxed italic mb-5 relative z-10">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author Footer */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-gray-100">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-200 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-gray-900 truncate">{test.author}</span>
                      <CheckCircle2 className="w-3 h-3 text-[#0F7A4A] shrink-0" />
                    </div>
                    <span className="text-[11px] text-gray-500 block truncate">{test.role}</span>
                    <span className="text-[10px] font-semibold text-[#0F7A4A] bg-emerald-50 px-1.5 py-0.5 rounded inline-block mt-0.5 truncate">
                      {test.serviceType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
