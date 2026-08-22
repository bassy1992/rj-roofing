import React, { useState, useEffect } from 'react';
import { CompanyLogo } from './CompanyLogo';
import { Phone, Mail, Menu, X, MessageSquare, Calculator, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Sheet Profiles', href: '#roofing-sheets' },
    { name: 'Project Gallery', href: '#gallery' },
    { name: 'Roof Simulator', href: '#visualizer' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner - Phone & Email Hotlines */}
      <div className="bg-[#0A0A0B] text-slate-300 py-2 px-4 text-xs font-semibold border-b border-gray-800 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="mailto:rjsroofingcon43@gmail.com" className="flex items-center gap-1.5 hover:text-[#EAB308] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#EAB308]" />
              <span className="hidden sm:inline text-gray-400">Email:</span> rjsroofingcon43@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
              <span className="text-gray-400 hidden md:inline">Hotlines:</span>
              <a href="tel:0578127702" className="hover:text-[#EAB308] font-bold tracking-tight">057 812 7702</a>
              <span className="text-gray-700">|</span>
              <a href="tel:0547252937" className="hover:text-[#EAB308] font-bold tracking-tight">054 725 2937</a>
              <span className="text-gray-700">|</span>
              <a href="tel:0208376082" className="hover:text-[#EAB308] font-bold tracking-tight">020 837 6082</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden lg:flex items-center gap-1.5 text-gray-400 text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Certified Roofing Contractor • Accra, Ghana</span>
            </span>
            <a
              href="https://wa.me/233578127702?text=Hello%20RJS%20Roofing%2C%20I%20would%20like%20to%20inquire%20about%20a%20roofing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-0.5 bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/30 font-bold hover:bg-[#EAB308] hover:text-[#0A0A0B] transition-all text-[10px] uppercase tracking-widest"
            >
              <MessageSquare className="w-3 h-3 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0B]/95 backdrop-blur-md shadow-2xl border-b border-gray-800 py-3'
            : 'bg-[#0A0A0B]/85 backdrop-blur-sm border-b border-gray-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="RJS Roofing & Construction Ltd"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-300 hover:text-[#EAB308] transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#EAB308] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#estimator"
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#EAB308] border border-gray-700 hover:border-[#EAB308] transition-all flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Estimator</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 text-xs font-black text-[#0A0A0B] bg-[#EAB308] hover:bg-white transition-all uppercase tracking-[0.2em] shadow-lg shadow-[#EAB308]/10 cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-[#EAB308] bg-[#111827] border border-gray-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0B] border-b border-gray-800 px-4 pt-3 pb-6 space-y-2 mt-2 animate-in slide-in-from-top-2">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-[#EAB308] hover:bg-[#111827] transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-xs font-black text-[#0A0A0B] bg-[#EAB308] hover:bg-white uppercase tracking-[0.2em]"
              >
                Request Free Quote
              </button>
              <a
                href="tel:0578127702"
                className="w-full py-2.5 text-center text-xs font-bold text-[#EAB308] bg-[#111827] border border-[#EAB308]/30 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: 057 812 7702</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
