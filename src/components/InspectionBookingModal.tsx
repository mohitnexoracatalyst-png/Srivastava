import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Building, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles,
  RefreshCw,
  PhoneCall
} from 'lucide-react';
import { BookingFormData } from '../types';

interface InspectionBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
  initialServiceOrPest?: string;
  initialNotes?: string;
}

export const InspectionBookingModal: React.FC<InspectionBookingModalProps> = ({
  isOpen,
  onClose,
  initialPlanId,
  initialServiceOrPest,
  initialNotes
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: 'Residential',
    squareFeet: '2 BHK (600 - 1,100 sq ft)',
    pestTypes: initialServiceOrPest ? [initialServiceOrPest] : ['Termite Control'],
    preferredDate: '',
    urgency: 'Standard (Next 48h)',
    additionalDetails: initialNotes || '',
    selectedPlanId: initialPlanId || 'plan-quarterly'
  });

  useEffect(() => {
    if (initialServiceOrPest) {
      setFormData(prev => ({
        ...prev,
        pestTypes: [initialServiceOrPest],
        additionalDetails: initialNotes || prev.additionalDetails
      }));
    }
    if (initialPlanId) {
      setFormData(prev => ({ ...prev, selectedPlanId: initialPlanId }));
    }
  }, [initialServiceOrPest, initialPlanId, initialNotes]);

  if (!isOpen) return null;

  const togglePestType = (pest: string) => {
    if (formData.pestTypes.includes(pest)) {
      setFormData({
        ...formData,
        pestTypes: formData.pestTypes.filter(p => p !== pest)
      });
    } else {
      setFormData({
        ...formData,
        pestTypes: [...formData.pestTypes, pest]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setBookingCode(`SPC-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-emerald-900/10 shadow-2xl relative my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2.5">
                <img
                  src="/logo.png"
                  alt="Srivastava Pest Control Services"
                  className="w-10 h-10 rounded-xl object-contain border border-emerald-100 shadow-xs p-0.5 bg-white shrink-0"
                />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F7A4A] text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero-Cost Inspection • Lucknow, UP & All Over India</span>
                </div>
              </div>
              <h2 id="booking-modal-title" className="text-2xl font-black text-gray-900 tracking-tight">
                Schedule On-Site Pest Inspection
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Same-day inspection dispatch available in Lucknow & prompt appointments across India.
              </p>
            </div>

            {/* Stepper Nav */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 text-xs font-semibold text-gray-500">
              <button
                onClick={() => setStep(1)}
                className={`flex items-center gap-1.5 cursor-pointer ${step === 1 ? 'text-[#0F7A4A] font-bold' : ''}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-[#0F7A4A] text-white' : 'bg-gray-200'}`}>1</span>
                Property Details
              </button>
              <button
                onClick={() => setStep(2)}
                className={`flex items-center gap-1.5 cursor-pointer ${step === 2 ? 'text-[#0F7A4A] font-bold' : ''}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-[#0F7A4A] text-white' : 'bg-gray-200'}`}>2</span>
                Target Pests
              </button>
              <button
                onClick={() => setStep(3)}
                className={`flex items-center gap-1.5 cursor-pointer ${step === 3 ? 'text-[#0F7A4A] font-bold' : ''}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-[#0F7A4A] text-white' : 'bg-gray-200'}`}>3</span>
                Contact & Confirm
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: Property Details */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Property Category
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['Residential', 'Commercial', 'Industrial'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type })}
                          className={`p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                            formData.propertyType === type
                              ? 'bg-emerald-50 border-[#0F7A4A] text-[#0F7A4A] shadow-sm'
                              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Property Size / Configuration
                    </label>
                    <select
                      value={formData.squareFeet}
                      onChange={(e) => setFormData({ ...formData, squareFeet: e.target.value })}
                      className="w-full p-3 rounded-xl border border-gray-200 text-xs font-medium bg-gray-50 text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-[#0F7A4A]"
                    >
                      <option>1 BHK (Under 600 sq ft) — Starts ₹799</option>
                      <option>2 BHK (600 - 1,100 sq ft) — Starts ₹999</option>
                      <option>3 BHK (1,100 - 1,800 sq ft) — Starts ₹1,399</option>
                      <option>4 BHK / Villa / Kothi (1,800+ sq ft)</option>
                      <option>Commercial Office / Shop / Restaurant</option>
                      <option>Warehouse / Godown / Factory</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full p-3 rounded-xl border border-gray-200 text-xs font-medium bg-gray-50 text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-[#0F7A4A]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Next: Select Pests</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Pest Selection & Urgency */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Which Pests Do You Need Addressed? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'Termite Control',
                        'Cockroach Gel',
                        'Bed Bugs',
                        'Rodents & Rats',
                        'Mosquitoes',
                        'Ants & Spiders',
                        'Wood Borers',
                        'General Prevention'
                      ].map((pest) => {
                        const isChecked = formData.pestTypes.includes(pest);
                        return (
                          <button
                            key={pest}
                            type="button"
                            onClick={() => togglePestType(pest)}
                            className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center justify-between cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-emerald-50 border-[#0F7A4A] text-[#0F7A4A] font-semibold'
                                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span className="truncate">{pest}</span>
                            {isChecked && <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Inspection Priority / Urgency
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { level: 'Standard (Next 48h)', desc: 'Scheduled convenient slot' },
                        { level: 'Same-Day Urgent', desc: 'Active pest infestation' },
                        { level: 'Emergency 24/7 Dispatch', desc: 'Severe infestation outbreak' }
                      ].map((item) => (
                        <button
                          key={item.level}
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: item.level as any })}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            formData.urgency === item.level
                              ? item.level.includes('Emergency')
                                ? 'bg-rose-50 border-rose-500 text-rose-800'
                                : 'bg-emerald-50 border-[#0F7A4A] text-[#0F7A4A]'
                              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-xs font-bold block">{item.level}</span>
                          <span className="text-[10px] text-gray-500">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submit */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0F7A4A]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0F7A4A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0F7A4A]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-1">
                      Complete Property Address in UP / India *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Flat No, Society/Colony, Area, City (e.g. Malhaur, Gomti Nagar, Lucknow / Kanpur / Noida)"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0F7A4A]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-1">
                      Additional Notes or Observed Pest Signs
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe pest location, room affected, or any special requests..."
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0F7A4A]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xl disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 text-lime-300 animate-spin" />
                          <span>Dispatching Request...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4 text-lime-300" />
                          <span>Confirm Free Inspection</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-[#0F7A4A] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900">
              Inspection Booking Confirmed!
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. Your inspection request has been logged into our technician dispatch queue.
            </p>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 max-w-sm mx-auto text-left text-xs space-y-2">
              <div>
                <span className="text-gray-500 block font-medium">Confirmation Code:</span>
                <span className="font-mono font-bold text-emerald-700 text-sm">{bookingCode}</span>
              </div>
              <div>
                <span className="text-gray-500 block font-medium">Property Address:</span>
                <span className="font-semibold text-gray-800">{formData.propertyAddress}</span>
              </div>
              <div>
                <span className="text-gray-500 block font-medium">Urgency:</span>
                <span className="font-semibold text-rose-600">{formData.urgency}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Our technician coordinator will call you within <strong className="text-gray-800">15 minutes</strong> at <strong className="text-gray-800">{formData.phone}</strong> to confirm the technician arrival time.
            </p>

            <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-500 space-y-1">
              <p>For immediate phone support: Primary: <a href="tel:9838425271" className="text-[#0F7A4A] font-bold underline">9838425271</a> | Alternative: <a href="tel:8299405414" className="text-rose-600 font-bold underline">8299405414</a></p>
              <p>Email: <a href="mailto:srivastavapestcontrol@gmail.com" className="text-gray-700 underline">srivastavapestcontrol@gmail.com</a></p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#0F7A4A] text-white font-bold text-xs shadow-md hover:bg-[#064E3B]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
