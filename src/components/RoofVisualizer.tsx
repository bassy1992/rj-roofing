import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Check, ArrowRight, Layers, Home, Warehouse } from 'lucide-react';

interface RoofVisualizerProps {
  onSelectColorForQuote: (colorName: string, buildingType: string) => void;
}

export const RoofVisualizer: React.FC<RoofVisualizerProps> = ({ onSelectColorForQuote }) => {
  const [activeBuilding, setActiveBuilding] = useState<'mansion' | 'warehouse' | 'villa'>('mansion');
  const [selectedColor, setSelectedColor] = useState<string>('navy');

  const buildings = [
    {
      id: 'mansion',
      title: 'Executive Multi-Gable Residence',
      subtitle: 'High-Pitch Stone-Coated Shingles',
      icon: Home,
    },
    {
      id: 'warehouse',
      title: 'Industrial Logistics Warehouse',
      subtitle: 'Heavy Structural Steel Roofing',
      icon: Warehouse,
    },
    {
      id: 'villa',
      title: 'Suburban Family Villa',
      subtitle: 'Roman Curve Tile Design',
      icon: Home,
    },
  ];

  const colors = [
    {
      id: 'navy',
      name: 'Royal Navy Blue',
      hex: '#1E293B',
      accentHex: '#2563EB',
      badgeBg: 'bg-blue-600',
      description: 'Elegant deep blue shade, highly popular for modern executive homes and tropical estates.',
      image: '/gallery/photo_24_2026-08-04_12-54-49.jpg',
      uvRating: 'A+',
      heatReflection: '88%',
    },
    {
      id: 'charcoal',
      name: 'Charcoal Black',
      hex: '#0F172A',
      accentHex: '#475569',
      badgeBg: 'bg-slate-800',
      description: 'Timeless dark stone finish with high architectural impact and anti-fade ceramic granules.',
      image: '/gallery/photo_25_2026-08-04_12-54-49.jpg',
      uvRating: 'A+',
      heatReflection: '85%',
    },
    {
      id: 'red',
      name: 'Terracotta Red',
      hex: '#991B1B',
      accentHex: '#DC2626',
      badgeBg: 'bg-red-700',
      description: 'Vibrant Mediterranean style red stone shingles offering classic warmth and charm.',
      image: '/gallery/photo_27_2026-08-04_12-54-49.jpg',
      uvRating: 'A+',
      heatReflection: '92%',
    },
    {
      id: 'green',
      name: 'Forest Emerald Green',
      hex: '#064E3B',
      accentHex: '#059669',
      badgeBg: 'bg-emerald-800',
      description: 'Natural lush green hue that blends beautifully with landscaped gardens and hillside properties.',
      image: '/gallery/photo_28_2026-08-04_12-54-49.jpg',
      uvRating: 'A+',
      heatReflection: '89%',
    },
  ];

  const currentColorObj = colors.find((c) => c.id === selectedColor) || colors[0];
  const currentBuildingObj = buildings.find((b) => b.id === activeBuilding) || buildings[0];

  return (
    <section id="visualizer" className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Interactive Design Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Roof Color & Material <span className="text-[#EAB308]">Visualizer</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Preview different stone-coated shingle colors and roof styles before making your investment decision.
          </p>
        </div>

        {/* Visualizer Workspace */}
        <div className="bg-[#111827] border border-gray-800 p-6 sm:p-8 shadow-2xl overflow-hidden">
          
          {/* Top Building Type Selector */}
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 text-center sm:text-left">
              Step 1: Select Building Type
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {buildings.map((b) => {
                const IconComponent = b.icon;
                return (
                  <button
                    key={b.id}
                    onClick={() => setActiveBuilding(b.id as any)}
                    className={`p-4 border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                      activeBuilding === b.id
                        ? 'bg-[#0A0A0B] border-[#EAB308] text-white shadow-lg'
                        : 'bg-[#0A0A0B]/60 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200'
                    }`}
                  >
                    <div className={`p-2.5 ${activeBuilding === b.id ? 'bg-[#EAB308] text-[#0A0A0B]' : 'bg-[#111827] text-[#EAB308]'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider">{b.title}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{b.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Interactive Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Stage Left: Simulated Image Preview */}
            <div className="lg:col-span-7 relative overflow-hidden bg-black h-72 sm:h-96 border border-gray-800 shadow-inner group">
              <img
                src={currentColorObj.image}
                alt={currentColorObj.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter contrast-110"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#0A0A0B] px-3.5 py-1.5 border border-gray-800 flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-full ${currentColorObj.badgeBg} ring-1 ring-white/20`} />
                <span className="text-xs font-bold text-white uppercase tracking-wider">{currentColorObj.name}</span>
              </div>

              {/* Specs Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0B] p-3.5 border border-gray-800 flex justify-between items-center text-xs">
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Material Guarantee</p>
                  <p className="font-bold text-[#EAB308]">50-Year Warranty</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Thermal Index</p>
                  <p className="font-mono font-bold text-[#EAB308]">{currentColorObj.heatReflection} Reflection</p>
                </div>
              </div>
            </div>

            {/* Stage Right: Color Swatches & Material Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                  Step 2: Choose Roof Finish Color
                </p>

                {/* Color Swatch Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedColor(c.id)}
                      className={`p-3 border flex items-center gap-3 transition-all cursor-pointer ${
                        selectedColor === c.id
                          ? 'bg-[#0A0A0B] border-[#EAB308]'
                          : 'bg-[#0A0A0B]/60 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full ${c.badgeBg} shrink-0 ring-1 ring-white/20`} />
                      <span className={`text-xs font-bold uppercase tracking-wider ${selectedColor === c.id ? 'text-[#EAB308]' : 'text-gray-300'}`}>
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Description */}
              <div className="p-4 bg-[#0A0A0B] border border-gray-800 text-xs space-y-2">
                <p className="font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#EAB308]" />
                  <span>{currentColorObj.name} Finish Profile</span>
                </p>
                <p className="text-gray-300 leading-relaxed text-[11px]">
                  {currentColorObj.description}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => onSelectColorForQuote(currentColorObj.name, currentBuildingObj.title)}
                className="w-full py-4 px-6 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Request Quote For {currentColorObj.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
