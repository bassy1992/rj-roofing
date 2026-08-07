import React from 'react';
import { ShieldCheck, Award, ArrowRight, Phone, Calculator, CheckCircle2, Warehouse, Home, Hammer } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 bg-[#0A0A0B] text-white overflow-hidden border-b border-gray-800">
      {/* Background Graphic & Artistic Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gallery/photo_23_2026-08-04_12-54-49.jpg"
          alt="Modern Stone Coated Roofing"
          className="w-full h-full object-cover object-center opacity-20 filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/90 to-[#0A0A0B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
        
        {/* Artistic Background Geometry Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Artistic Badge with Diamond Accent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111827] border border-[#EAB308]/40 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-[#EAB308] rotate-45 inline-block" />
              <span>RJS ROOFING & CONSTRUCTION LIMITED</span>
            </div>

            {/* Main Headline with Dramatic Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase">
              Building <span className="text-[#EAB308]">Roofing Excellence</span> That Endures Generations
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Ghana's premier specialists in <strong className="text-white font-semibold">Residential Building Roofing</strong> and <strong className="text-white font-semibold">Industrial Warehouses</strong>. Engineered timber & steel trusses, stone-coated metal shingles, aluminum long-span sheets, and leak-proof installations.
            </p>

            {/* Core Capability Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-bold uppercase tracking-wider text-gray-300">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-[#111827] border border-gray-800">
                <Home className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Residential Roofing</span>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-[#111827] border border-gray-800">
                <Warehouse className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Industrial Warehouses</span>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-[#111827] border border-gray-800">
                <Hammer className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Structural Roof Trusses</span>
              </span>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 text-xs font-black text-[#0A0A0B] bg-[#EAB308] hover:bg-white transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em] shadow-xl shadow-[#EAB308]/10 cursor-pointer"
              >
                <span>Request Free Site Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto px-6 py-4 text-xs font-bold text-gray-200 bg-[#111827] hover:bg-gray-800 border border-gray-700 hover:border-[#EAB308] transition-all flex items-center justify-center gap-2 uppercase tracking-[0.18em]"
              >
                <Calculator className="w-4 h-4 text-[#EAB308]" />
                <span>Calculate Cost</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-gray-800 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-black text-[#EAB308]">500+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Projects Done</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-black text-[#EAB308]">50 Yrs</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Warranty</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-black text-[#EAB308]">100%</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Storm Seal</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Card & Hotline Spotlight */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#111827]/90 border border-gray-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              {/* Card Ribbon */}
              <div className="absolute -top-3 right-6 bg-[#EAB308] text-[#0A0A0B] text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-md">
                Fast Response
              </div>

              <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">
                Talk Direct to a Master Roofer
              </h3>
              <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                Need immediate pricing or expert roof inspection advice? Call our engineers now or send a direct project message.
              </p>

              {/* Direct Call Hotlines */}
              <div className="space-y-2.5 mb-6">
                <a
                  href="tel:0578127702"
                  className="flex items-center justify-between p-3.5 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#111827] border border-gray-800 flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0A0A0B] transition-all">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Primary Hotline</p>
                      <p className="text-xs font-black text-white tracking-wide font-mono">057 812 7702</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#EAB308] group-hover:translate-x-1 transition-transform uppercase tracking-wider">Call &rarr;</span>
                </a>

                <a
                  href="tel:0547252937"
                  className="flex items-center justify-between p-3.5 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#111827] border border-gray-800 flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0A0A0B] transition-all">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Sales & Quotes</p>
                      <p className="text-xs font-black text-white tracking-wide font-mono">054 725 2937</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#EAB308] group-hover:translate-x-1 transition-transform uppercase tracking-wider">Call &rarr;</span>
                </a>

                <a
                  href="tel:0208376082"
                  className="flex items-center justify-between p-3.5 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#111827] border border-gray-800 flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0A0A0B] transition-all">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Warehouse Line</p>
                      <p className="text-xs font-black text-white tracking-wide font-mono">020 837 6082</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#EAB308] group-hover:translate-x-1 transition-transform uppercase tracking-wider">Call &rarr;</span>
                </a>
              </div>

              {/* Guarantees Checklist */}
              <div className="space-y-2 pt-2 border-t border-gray-800 text-xs text-gray-300 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45 shrink-0" />
                  <span>Free site measurement & technical estimate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45 shrink-0" />
                  <span>Certified anti-leak stone granule roofing tiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45 shrink-0" />
                  <span>Heavy industrial warehouse steel trussing</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
