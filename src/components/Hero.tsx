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
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0B]">

      {/* Slideshow Background */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover object-center scale-105"
            style={{ transform: i === current ? 'scale(1.05)' : 'scale(1)', transition: 'transform 6s ease-out' }}
          />
        </div>
      ))}

      {/* Dark overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />

      {/* Slide indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all duration-300 ${i === current ? 'w-8 bg-[#EAB308]' : 'w-4 bg-white/30'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-4xl">

          {/* Top badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#EAB308]/40 bg-[#EAB308]/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45 shrink-0" />
            <span className="text-[#EAB308] text-xs font-black uppercase tracking-[0.25em]">
              Ghana's Premier Roofing Specialist
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] uppercase tracking-tight mb-6">
            Built To Last.<br />
            <span className="text-[#EAB308]">Roofed To Protect.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-10">
            Expert roofing for <span className="text-white font-semibold">residential homes</span> and <span className="text-white font-semibold">industrial warehouses</span> across Ghana. Stone-coated shingles, steel trusses, long-span aluminum sheets — engineered for decades of protection.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button
              onClick={onOpenQuoteModal}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl shadow-[#EAB308]/20 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:0578127702"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-[#EAB308] text-white font-bold text-sm uppercase tracking-[0.15em] transition-all"
            >
              <Phone className="w-4 h-4 text-[#EAB308]" />
              <span>057 812 7702</span>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-black text-[#EAB308]">500+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#EAB308]">15+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#EAB308]">50yr</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">Material Warranty</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#EAB308]">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">Leak-Free Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side — service pills (desktop only) */}
      <div className="hidden lg:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2 z-20">
        {[
          { icon: Home, label: 'Residential Roofing' },
          { icon: Warehouse, label: 'Industrial Warehouses' },
          { icon: Hammer, label: 'Roof Trussing' },
          { icon: ShieldCheck, label: 'Waterproofing' },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#EAB308] transition-all group cursor-default"
          >
            <Icon className="w-4 h-4 text-[#EAB308] shrink-0" />
            <span className="text-xs font-bold text-white uppercase tracking-wider whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#EAB308]" />
      </div>

      {/* Bottom trust bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#EAB308] py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4 text-[#0A0A0B]">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Certified Roofing Engineers</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Free Site Measurement</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Call: 057 812 7702 • 054 725 2937</span>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="text-xs font-black uppercase tracking-widest underline underline-offset-2 cursor-pointer hover:no-underline"
          >
            Request Quote →
          </button>
        </div>
      </div>

    </section>
  );
};
