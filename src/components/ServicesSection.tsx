import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { Home, Warehouse, Hammer, RefreshCw, Droplets, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'residential' | 'warehouse'>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedCategory === 'residential') return service.suitableFor.some(s => s.toLowerCase().includes('residential') || s.toLowerCase().includes('mansion') || s.toLowerCase().includes('villa'));
    if (selectedCategory === 'warehouse') return service.suitableFor.some(s => s.toLowerCase().includes('warehouse') || s.toLowerCase().includes('plant') || s.toLowerCase().includes('commercial'));
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5 text-[#EAB308]" />;
      case 'Warehouse': return <Warehouse className="w-5 h-5 text-[#EAB308]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-[#EAB308]" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-[#EAB308]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-[#EAB308]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#EAB308]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Expert Roofing Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Comprehensive <span className="text-[#EAB308]">Roofing & Construction</span> Solutions
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            From luxury residential villas to heavy-span industrial warehouses, RJS Roofing & Construction Limited delivers end-to-end roof engineering, truss framing, and premium tile installations.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#EAB308] text-[#0A0A0B] shadow-lg shadow-[#EAB308]/10'
                  : 'bg-[#111827] text-gray-300 border border-gray-800 hover:border-[#EAB308]'
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('residential')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all cursor-pointer ${
                selectedCategory === 'residential'
                  ? 'bg-[#EAB308] text-[#0A0A0B] shadow-lg shadow-[#EAB308]/10'
                  : 'bg-[#111827] text-gray-300 border border-gray-800 hover:border-[#EAB308]'
              }`}
            >
              Residential Roofing
            </button>
            <button
              onClick={() => setSelectedCategory('warehouse')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all cursor-pointer ${
                selectedCategory === 'warehouse'
                  ? 'bg-[#EAB308] text-[#0A0A0B] shadow-lg shadow-[#EAB308]/10'
                  : 'bg-[#111827] text-gray-300 border border-gray-800 hover:border-[#EAB308]'
              }`}
            >
              Industrial & Warehouses
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#111827] border border-gray-800 hover:border-[#EAB308] transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110 opacity-75 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#0A0A0B] border border-gray-800 flex items-center justify-center shadow-lg">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-[#EAB308] transition-colors uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Key Features Checklist */}
                  <div className="mt-4 pt-4 border-t border-gray-800 space-y-2">
                    <p className="text-[10px] font-bold text-[#EAB308] uppercase tracking-[0.2em]">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45 shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Footer CTA */}
                <div className="pt-4 border-t border-gray-800">
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="w-full py-3 px-4 bg-[#0A0A0B] hover:bg-[#EAB308] hover:text-[#0A0A0B] text-[#EAB308] border border-gray-800 hover:border-[#EAB308] text-xs font-bold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
