import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#0A0A0B] text-gray-400 border-t border-gray-800">

      {/* CTA Band */}
      <div className="bg-[#111827] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Ready to Start Your <span className="text-[#EAB308]">Roofing Project?</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">Free site visit · Detailed estimate · No obligation</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/233578127702"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-gray-700 hover:border-[#EAB308] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#EAB308]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

          {/* Brand col */}
          <div className="lg:col-span-1 space-y-5">
            <img src="/logo.jpeg" alt="RJS Roofing & Construction" className="h-16 w-auto object-contain" />
            <p className="text-gray-400 text-xs leading-relaxed">
              Ghana's trusted roofing specialists for residential homes, industrial warehouses, and everything in between. Engineered for tropical climates.
            </p>
            <div className="flex items-center gap-2 text-[#EAB308] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Licensed & Certified Contractor</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-5">Quick Links</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-wider">
              {[
                ['Home', '#hero'],
                ['Services', '#services'],
                ['Sheet Profiles', '#roofing-sheets'],
                ['Project Gallery', '#gallery'],
                ['Roof Visualizer', '#visualizer'],
                ['Cost Estimator', '#estimator'],
                ['Why Choose Us', '#why-us'],
                ['Contact', '#contact'],
              ].map(([name, href]) => (
                <li key={name}>
                  <a href={href} className="hover:text-[#EAB308] transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 bg-gray-700 group-hover:bg-[#EAB308] rotate-45 shrink-0 transition-colors" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-5">Our Services</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-wider text-gray-400">
              {[
                'Residential Building Roofing',
                'Industrial Warehouse Roofs',
                'Stone-Coated Metal Shingles',
                'Timber & Steel Roof Trusses',
                'Roof Renovation & Re-Roofing',
                'Gutters & Fascia Boarding',
                'Waterproofing & Leak Repair',
              ].map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#EAB308] rotate-45 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-5">Contact Us</h4>
            <div className="space-y-4 text-xs">
              <a href="tel:0578127702" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-[#111827] border border-gray-800 group-hover:border-[#EAB308] flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Primary</p>
                  <p className="text-white font-bold font-mono group-hover:text-[#EAB308] transition-colors">057 812 7702</p>
                </div>
              </a>
              <a href="tel:0547252937" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-[#111827] border border-gray-800 group-hover:border-[#EAB308] flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Sales</p>
                  <p className="text-white font-bold font-mono group-hover:text-[#EAB308] transition-colors">054 725 2937</p>
                </div>
              </a>
              <a href="tel:0208376082" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-[#111827] border border-gray-800 group-hover:border-[#EAB308] flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Warehouse</p>
                  <p className="text-white font-bold font-mono group-hover:text-[#EAB308] transition-colors">020 837 6082</p>
                </div>
              </a>
              <a href="mailto:rjsroofingcon43@gmail.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-[#111827] border border-gray-800 group-hover:border-[#EAB308] flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#EAB308]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-bold group-hover:text-[#EAB308] transition-colors break-all">rjsroofingcon43@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-wider text-gray-600">
          <p>© {new Date().getFullYear()} RJS Roofing & Construction Limited. All Rights Reserved.</p>
          <p>Accra, Ghana · Serving All Regions</p>
        </div>
      </div>
    </footer>
  );
};
