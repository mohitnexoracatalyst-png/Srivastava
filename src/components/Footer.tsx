import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PhoneCall, Mail, MapPin, CheckCircle2, Award } from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenModal }) => {
  return (
    <footer className="bg-[#064E3B] text-white pt-16 pb-12 border-t border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/60">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 shadow-lg border border-emerald-400/40 overflow-hidden shrink-0 flex items-center justify-center ring-2 ring-lime-400/30 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Srivastava Pest Control Services Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white block leading-tight">
                  SRIVASTAVA
                </span>
                <span className="text-lime-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider block">
                  Pest Control Services
                </span>
              </div>
            </Link>

            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-sm font-normal">
              Dedicated to delivering safe, reliable, and 100% odorless pest protection for homes and businesses. Head office in Lucknow with rapid service networks across Uttar Pradesh and all over India. CIB&RC approved treatments.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-emerald-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028 (Serving UP & All Over India)</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-lime-300 shrink-0" />
                <span>Primary: <a href="tel:9838425271" className="hover:text-lime-300 font-bold text-white underline underline-offset-2">9838425271</a></span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-lime-300 shrink-0" />
                <span>Alternative: <a href="tel:8299405414" className="hover:text-lime-300 font-bold text-white underline underline-offset-2">8299405414</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-300 shrink-0" />
                <span>Email: <a href="mailto:srivastavapestcontrol@gmail.com" className="hover:text-lime-300 font-semibold text-lime-200">srivastavapestcontrol@gmail.com</a></span>
              </div>
            </div>
          </div>

          {/* Col 3: Pest Protocols */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-300 mb-4">
              Pest Services
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/90 font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Termite Treatment</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cockroach Herbal Gel</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Bed Bug Extermination</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Rodent & Rat Management</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mosquito Fogging</Link></li>
              <li><Link to="/commercial" className="hover:text-white transition-colors">Commercial Biosecurity</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-300 mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/90 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/plans" className="hover:text-white transition-colors">Plans & Pricing</Link></li>
              <li><Link to="/commercial" className="hover:text-white transition-colors">Commercial Solutions</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Process & Safety</Link></li>
              <li><Link to="/analyzer" className="hover:text-white transition-colors">AI Pest Analyzer</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us & Coverage</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Office</Link></li>
            </ul>
          </div>

          {/* Col 5: Certifications & Emergency Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-300 mb-4">
              Accreditations
            </h4>
            
            <div className="space-y-2 text-[11px] text-emerald-100">
              <div className="p-2.5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 flex items-center gap-2">
                <Award className="w-4 h-4 text-lime-300 shrink-0" />
                <span>QualityPro Certified Agency</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-300 shrink-0" />
                <span>GreenPro Eco-Designated</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              Book Free Inspection
            </button>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
          <p>© {new Date().getFullYear()} Srivastava Pest Control Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenModal('privacy')} className="hover:text-white cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => onOpenModal('terms')} className="hover:text-white cursor-pointer">Terms of Protection</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
