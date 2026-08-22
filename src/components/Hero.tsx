import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, ChevronDown, Home, Warehouse, Hammer, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const slides = [
  '/gallery/photo_23_2026-08-04_12-54-49.jpg',
  '/gallery/photo_1_2026-08-04_12-54-48.jpg',
  '/gallery/photo_3_2026-08-04_12-54-48.jpg',
  '/gallery/photo_7_2026-08-04_12-54-48.jpg',
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0B]">

      {/* Slideshow */}
      {slides.map((src, i) => (
        <div key={src} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <img src={src} alt="" className="w-full h-full object-cover object-center" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

      {/* Slide dots */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all duration-300 ${i === current ? 'w-8 bg-[#EAB308]' : 'w-3 bg-white/30'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-28 sm:pb-32 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 sm:px-4 py-2 border border-[#EAB308]/40 bg-[#EAB308]/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45 shrink-0" />
            <span className="text-[#EAB308] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
              Ghana's Premier Roofing Specialist
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] uppercase tracking-tight mb-5">
            Built To Last.<br />
            <span className="text-[#EAB308]">Roofed To Protect.</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mb-8">
            Expert roofing for <span className="text-white font-semibold">residential homes</span> and <span className="text-white font-semibold">industrial warehouses</span> across Ghana — stone-coated shingles, steel trusses, and leak-proof aluminum sheets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-10">
            <button
              onClick={onOpenQuoteModal}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs sm:text-sm uppercase tracking-[0.2em] transition-all shadow-2xl shadow-[#EAB308]/20 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:0578127702"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-[#EAB308] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.15em] transition-all"
            >
              <Phone className="w-4 h-4 text-[#EAB308]" />
              <span>057 812 7702</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
            {[
              { val: '500+', label: 'Projects Done' },
              { val: '15+', label: 'Years Experience' },
              { val: '50yr', label: 'Warranty' },
              { val: '100%', label: 'Leak-Free' },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">{val}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop service pills */}
      <div className="hidden xl:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2 z-20">
        {[
          { icon: Home, label: 'Residential Roofing' },
          { icon: Warehouse, label: 'Industrial Warehouses' },
          { icon: Hammer, label: 'Roof Trussing' },
          { icon: ShieldCheck, label: 'Waterproofing' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#EAB308] transition-all">
            <Icon className="w-4 h-4 text-[#EAB308] shrink-0" />
            <span className="text-xs font-bold text-white uppercase tracking-wider whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest hidden sm:block">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#EAB308]" />
      </div>

      {/* Bottom trust bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#EAB308]">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[#0A0A0B]">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider">
            <Star className="w-3 h-3 fill-current shrink-0" />
            <span>Certified Engineers</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 shrink-0" />
            <span>Free Site Visit</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider">
            <Phone className="w-3 h-3 shrink-0" />
            <span>057 812 7702</span>
          </div>
          <button onClick={onOpenQuoteModal} className="text-[10px] sm:text-xs font-black uppercase tracking-widest underline underline-offset-2 cursor-pointer hover:no-underline">
            Get Quote →
          </button>
        </div>
      </div>
    </section>
  );
};
