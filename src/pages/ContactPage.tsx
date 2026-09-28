import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Globe2,
  AlertCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cityState: 'Lucknow, Uttar Pradesh',
    locality: '',
    pestType: 'Anti-Termite Treatment',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

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
              Contact Srivastava Pest Control Services
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Have an urgent termite infestation, cockroach problem, or require commercial biosecurity? Reach out directly to our headquarters in Lucknow or book inspection services across Uttar Pradesh and major cities all over India.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Registered Office Card with On-Site Dispatch Photo */}
            <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center p-1 shadow-xs overflow-hidden shrink-0">
                  <img
                    src="/logo.png"
                    alt="Srivastava Pest Control Services"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Registered Head Office</h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5">Srivastava Pest Control Services</p>
                </div>
              </div>

              {/* Real Technician Dispatch Photo */}
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-xs group">
                <img
                  src="/images/technician-action.jpg"
                  alt="Srivastava Pest Control Dispatch & Rapid Inspection Unit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-white text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Lucknow Central Dispatch & Mobile Fleet</span>
                </span>
              </div>

              <p className="text-sm font-semibold text-gray-800 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
                Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028, Uttar Pradesh
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <strong>Service Coverage:</strong> Serving Lucknow, all 75 UP districts, and Pan-India network across all major cities in India.
              </div>
            </div>

            {/* Direct Calling Cards */}
            <div className="p-7 rounded-3xl bg-emerald-950 text-white shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400 text-emerald-950 flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Phone Numbers</h3>
                  <p className="text-xs text-emerald-200">Instant connection with technicians</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:9838425271"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="text-[11px] text-emerald-300 block uppercase font-mono tracking-wider">Main Contact</span>
                      <span className="text-sm font-bold text-white">Primary: 9838425271</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-lime-300 group-hover:underline">Call Now →</span>
                </a>

                <a
                  href="tel:8299405414"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                    <div>
                      <span className="text-[11px] text-rose-300 block uppercase font-mono tracking-wider">Technical Line</span>
                      <span className="text-sm font-bold text-white">Alternative: 8299405414</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-lime-300 group-hover:underline">Call Now →</span>
                </a>
              </div>

              <div className="pt-3 border-t border-emerald-800 text-xs text-emerald-200 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-lime-300 shrink-0" />
                  <span>Email: <a href="mailto:srivastavapestcontrol@gmail.com" className="text-white hover:underline font-medium">srivastavapestcontrol@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-lime-300 shrink-0" />
                  <span>24 Hours / 7 Days Active Emergency Support</span>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 text-xs text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span>Zero-obligation initial property inspection</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span>CIB&RC approved child & pet friendly odorless chemicals</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F7A4A] shrink-0 mt-0.5" />
                <span>Written service warranty (up to 5 years for Termites)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#0F7A4A] uppercase tracking-wider block mb-1">
                  Online Inquiry
                </span>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Request Free Inspection or Quote
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your details below and our service coordinator will call you back within 15 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#0F7A4A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Thank You, {formData.name}!</h3>
                  <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                    We have received your inspection request for <strong className="text-gray-900">{formData.locality || formData.cityState}</strong>. Our technician coordinator will call you shortly at <strong className="text-gray-900">{formData.phone}</strong>.
                  </p>
                  <div className="pt-2 text-xs text-gray-500">
                    Need instant answer? Call Primary: <a href="tel:9838425271" className="text-[#0F7A4A] font-bold underline">9838425271</a> | Alternative: <a href="tel:8299405414" className="text-rose-600 font-bold underline">8299405414</a>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        cityState: 'Lucknow, Uttar Pradesh',
                        locality: '',
                        pestType: 'Anti-Termite Treatment',
                        message: ''
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-[#0F7A4A] text-white text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0F7A4A] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0F7A4A] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        City & State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lucknow, Kanpur, Noida, Delhi NCR, Varanasi..."
                        value={formData.cityState}
                        onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0F7A4A] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Area / Society / Colony *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Malhaur, Chinhat, Gomti Nagar, Indira Nagar..."
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0F7A4A] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Pest Problem or Required Service
                    </label>
                    <select
                      value={formData.pestType}
                      onChange={(e) => setFormData({ ...formData, pestType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs bg-white focus:ring-2 focus:ring-[#0F7A4A] focus:outline-hidden"
                    >
                      <option value="Anti-Termite Treatment">Anti-Termite Treatment — ₹3-₹5 / sq ft</option>
                      <option value="Cockroach & Ant Gel Treatment">Cockroach & Ant Gel Treatment — from ₹799</option>
                      <option value="Bed Bug Eradication">Bed Bug Eradication — from ₹1,499</option>
                      <option value="Quarterly Home Shield AMC (1 Year Contract)">Quarterly Home Shield AMC (4 Services/Yr) — ₹1,999/yr</option>
                      <option value="Total Home & Termite AMC Package">Total Home & Termite AMC Package — ₹3,999/yr</option>
                      <option value="Rodent & Rat Management">Rodent & Rat Management</option>
                      <option value="Mosquito Fogging & Larvicide">Mosquito Fogging & Larvicide</option>
                      <option value="Commercial Biosecurity / Office IPM">Commercial Biosecurity / Office IPM (FSSAI Compliant)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Specific Notes or Symptoms
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe where you noticed pests (e.g. wooden door frame, kitchen drawers, false ceiling)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0F7A4A] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0F7A4A] hover:bg-[#064E3B] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-lime-300" />
                    <span>Submit Inspection Request</span>
                  </button>

                  <p className="text-[11px] text-gray-500 text-center">
                    🔒 We respect your privacy. No spam. You will only be contacted regarding this pest inspection request.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
