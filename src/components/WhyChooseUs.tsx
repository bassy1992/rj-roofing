import React from 'react';
import { ShieldCheck, Award, Zap, Clock, Users, Wrench, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: '50-Year Material Warranty',
      description: 'Our stone-coated shingle tiles and high-tensile aluminum sheets carry long-term warranties against corrosion, color fading, and leaks.',
    },
    {
      icon: Award,
      title: 'Master Certified Roof Installers',
      description: 'Every project is supervised by qualified structural engineers and experienced roofer artisans ensuring strict adherence to building codes.',
    },
    {
      icon: Zap,
      title: 'Rapid Project Execution',
      description: 'We deploy specialized crews with high-grade machinery to ensure rapid roof enclosure and keep your building protected from weather.',
    },
    {
      icon: Wrench,
      title: 'Precision Truss Engineering',
      description: 'Custom-calculated timber and steel roof trusses treated against termites and fungal attack to safely support heavy tile loads.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Free Site Survey',
      desc: 'Our roofer engineers visit your building site in Ghana, measure exact roof dimensions, and assess truss load requirements.',
    },
    {
      num: '02',
      title: 'Detailed Itemized Estimate',
      desc: 'Receive a transparent cost quotation covering materials, timber/steel trusses, gutters, transport, and expert labor.',
    },
    {
      num: '03',
      title: 'Truss Fabrication & Tile Laying',
      desc: 'Precision erection of roof trusses, waterproof underlayment installation, and laying of stone-coated shingles or industrial sheets.',
    },
    {
      num: '04',
      title: 'Final Quality Audit & Warranty',
      desc: 'Thorough leak test, gutter alignment check, site clean-up, and issuance of official RJS Roofing Guarantee certificate.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>The RJS Roofing Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Why Property Developers <span className="text-[#EAB308]">Trust RJS</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We don't just lay roofing sheets — we engineer complete shelter systems engineered for tropical rainstorms, high heat, and decades of durability.
          </p>
        </div>

        {/* 4 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {points.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#111827] border border-gray-800 hover:border-[#EAB308] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0A0A0B] border border-gray-800 text-[#EAB308] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider mb-2">{p.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Process Section */}
        <div className="bg-[#111827] border border-gray-800 p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider">
              Our 4-Step Roofing Workflow
            </h3>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">From initial blueprint review to final handed-over roof</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative p-5 bg-[#0A0A0B] border border-gray-800 space-y-3">
                <span className="text-3xl font-black text-[#EAB308]/40 font-mono block">
                  {s.num}
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">{s.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
