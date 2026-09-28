import React from 'react';
import { X, Shield } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalsProps {
  modalType: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ modalType, onClose }) => {
  if (modalType !== 'privacy' && modalType !== 'terms') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-emerald-900/20 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#0F7A4A] text-white flex items-center justify-center shadow-md">
            <Shield className="w-5 h-5 text-lime-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            {modalType === 'privacy' ? 'Privacy Policy & Data Security' : 'Terms of Protection Service'}
          </h3>
        </div>

        <div className="text-xs sm:text-sm text-gray-600 space-y-4 leading-relaxed">
          {modalType === 'privacy' ? (
            <>
              <p>
                Srivastava Pest Control Services values your privacy. This policy explains how we handle customer inspection records, property addresses, and contact communications.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">1. Property & Inspection Data Collection</h4>
              <p>
                We collect property information, square footage estimates, and pest activity logs strictly to deliver targeted pest elimination treatments and generate digital compliance audit reports.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">2. Non-Disclosure & Confidentiality</h4>
              <p>
                Srivastava Pest Control Services never sells, rents, or shares commercial or residential customer data with third parties. Unmarked service vehicles are available upon request to maintain complete discretion.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">3. Eco Safety Formulations</h4>
              <p>
                All treatment active ingredients used by Srivastava Pest Control Services are registered with environmental protection standards and applied strictly in accordance with Master Entomologist guidelines.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">4. Contact & Inquiries</h4>
              <p className="text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-200">
                <strong>Srivastava Pest Control Services</strong><br />
                Address: Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028<br />
                Primary: <a href="tel:9838425271" className="text-[#0F7A4A] font-bold">9838425271</a> | Alternative: <a href="tel:8299405414" className="text-[#0F7A4A] font-bold">8299405414</a><br />
                Email: <a href="mailto:srivastavapestcontrol@gmail.com" className="text-[#0F7A4A] font-semibold">srivastavapestcontrol@gmail.com</a>
              </p>
            </>
          ) : (
            <>
              <p>
                These Terms govern all residential and commercial pest control protection plans, free inspection bookings, and zero-pest guarantees provided by Srivastava Pest Control Services.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">1. 365-Day Zero-Pest Guarantee</h4>
              <p>
                Subscribers to Srivastava Total Protection™ and Estate Premier plans receive unlimited complimentary re-services between scheduled visits if covered pests reappear.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">2. Free Inspection Policy</h4>
              <p>
                Initial on-site thermal scans and moisture vulnerability assessments are provided 100% free with zero obligation to purchase a protection plan.
              </p>
              <h4 className="font-bold text-[#111827] text-sm">3. Emergency Dispatch Response</h4>
              <p>
                Emergency response times (&lt; 2 hours) are subject to weather conditions and local technician availability in your geographical region.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#0F7A4A] text-white font-bold text-xs shadow-md cursor-pointer hover:bg-[#064E3B]"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
