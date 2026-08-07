import React from 'react';
import { CompanyLogo } from './CompanyLogo';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#0A0A0B] text-gray-400 border-t border-gray-800 pt-16 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <CompanyLogo variant="compact" />
            <p className="text-gray-300 text-xs leading-relaxed max-w-sm">
              RJS Roofing & Construction Limited is a certified master roofing contractor in Ghana specializing in residential building roofing, industrial warehouses, stone-coated metal shingles, timber truss framing, and rainwater systems.
            </p>
            <div className="flex items-center gap-2 text-[#EAB308] font-bold text-xs pt-1 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered & Licensed Roofing Engineers</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 uppercase text-[11px] tracking-wider">
              <li><a href="#hero" className="hover:text-[#EAB308] transition-colors">Home Page</a></li>
              <li><a href="#services" className="hover:text-[#EAB308] transition-colors">Services Catalog</a></li>
              <li><a href="#gallery" className="hover:text-[#EAB308] transition-colors">Completed Projects Gallery</a></li>
              <li><a href="#visualizer" className="hover:text-[#EAB308] transition-colors">Roof Color Simulator</a></li>
              <li><a href="#estimator" className="hover:text-[#EAB308] transition-colors">Cost Estimator</a></li>
              <li><a href="#why-us" className="hover:text-[#EAB308] transition-colors">Why Choose RJS</a></li>
              <li><a href="#contact" className="hover:text-[#EAB308] transition-colors">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4">Core Capabilities</h4>
            <ul className="space-y-2.5 text-gray-300 uppercase text-[11px] tracking-wider">
              <li>Residential Building Roofing</li>
              <li>Industrial Warehouse Steel Roofs</li>
              <li>Stone-Coated Metal Shingles</li>
              <li>Hardwood & Steel Roof Trusses</li>
              <li>Roof Renovation & Overhauls</li>
              <li>Seamless Rainwater Systems</li>
              <li>Roof Waterproofing & Sealant</li>
            </ul>
          </div>

          {/* Col 5: Contact Hotlines */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4">Contact Hotlines</h4>
            <div className="space-y-3 font-mono">
              <div className="space-y-1">
                <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider">Office Line:</p>
                <a href="tel:0578127702" className="text-[#EAB308] font-bold hover:underline block">057 812 7702</a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider">Sales & Estimates:</p>
                <a href="tel:0547252937" className="text-[#EAB308] font-bold hover:underline block">054 725 2937</a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider">Warehouse Direct:</p>
                <a href="tel:0208376082" className="text-[#EAB308] font-bold hover:underline block">020 837 6082</a>
              </div>
              <div className="pt-2 font-sans text-gray-300 text-[11px]">
                <a href="mailto:rjsroofingcon43@gmail.com" className="text-[#EAB308] hover:underline uppercase tracking-wider">rjsroofingcon43@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px] uppercase tracking-wider">
          <p>© {new Date().getFullYear()} RJS Roofing & Construction Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for Ghana's finest residential homes and industrial warehouses</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
