import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, MessageSquare, Calculator, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Sheet Profiles', href: '#roofing-sheets' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visualizer', href: '#visualizer' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar — hidden on very small screens */}
      <div className="hidden sm:block bg-[#0A0A0B] border-b border-gray-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-gray-400 truncate">
            <a href="mailto:rjsroofingcon43@gmail.com" className="flex items-center gap-1.5 hover:text-[#EAB308] transition-colors shrink-0">
              <Mail className="w-3 h-3 text-[#EAB308]" />
              <span className="hidden md:inline">rjsroofingcon43@gmail.com</span>
            </a>
            <div className="flex items-center gap-1.5 shrink-0">
              <Phone className="w-3 h-3 text-[#EAB308]" />
              <a href="tel:0578127702" className="hover:text-[#EAB308] font-bold">057 812 7702</a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a href="tel:0547252937" className="hover:text-[#EAB308] font-bold hidden md:inline">054 725 2937</a>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden lg:flex items-center gap-1 text-gray-500 text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-[#EAB308]" />
              Certified · Accra, Ghana
            </span>
            <a
              href="https://wa.me/233578127702"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/30 font-bold hover:bg-[#EAB308] hover:text-[#0A0A0B] transition-all text-[10px] uppercase tracking-widest"
            >
              <MessageSquare className="w-3 h-3 fill-current" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/97 backdrop-blur-md shadow-2xl border-b border-gray-800'
          : 'bg-[#0A0A0B]/90 backdrop-blur-sm border-b border-gray-800/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center shrink-0">
            <img src="/logo.jpeg" alt="RJS Roofing" className="h-11 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-[#EAB308] transition-all relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EAB308] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2 text-xs font-black text-[#0A0A0B] bg-[#EAB308] hover:bg-white transition-all uppercase tracking-[0.18em] cursor-pointer whitespace-nowrap"
            >
              Free Quote
            </button>
          </div>

          {/* Mobile right: call + menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0578127702"
              className="flex items-center gap-1.5 px-3 py-2 bg-[#EAB308]/10 border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-[#EAB308] bg-[#111827] border border-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0B] border-t border-gray-800">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-300 hover:text-[#EAB308] hover:bg-[#111827] transition-all border-b border-gray-800/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="px-4 pb-4 pt-2 flex flex-col gap-2 border-t border-gray-800">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
                className="w-full py-3.5 text-xs font-black text-[#0A0A0B] bg-[#EAB308] uppercase tracking-[0.2em]"
              >
                Request Free Quote
              </button>
              <a
                href="https://wa.me/233578127702"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-bold text-[#EAB308] bg-[#111827] border border-[#EAB308]/30 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
