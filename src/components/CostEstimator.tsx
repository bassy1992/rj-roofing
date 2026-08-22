import React, { useState } from 'react';
import { ArrowRight, Check, Info } from 'lucide-react';

interface CostEstimatorProps {
  onApplyEstimateToQuote: (estimateSummary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyEstimateToQuote }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'warehouse' | 'commercial'>('residential');
  const [areaSqM, setAreaSqM] = useState<number>(350);
  const [material, setMaterial] = useState<'stone_shingle' | 'aluminum_longspan' | 'sandwich_panel'>('stone_shingle');
  const [includeTrusses, setIncludeTrusses] = useState(true);
  const [includeGutters, setIncludeGutters] = useState(true);
  const [oldRoofRemoval, setOldRoofRemoval] = useState(false);

  const materialRates = { stone_shingle: 180, aluminum_longspan: 120, sandwich_panel: 220 };
  const trussRate = includeTrusses ? 90 : 0;
  const gutterRate = includeGutters ? 35 : 0;
  const removalRate = oldRoofRemoval ? 25 : 0;
  const baseMaterialCost = areaSqM * materialRates[material];
  const trussCost = areaSqM * trussRate;
  const gutterCost = areaSqM * gutterRate;
  const removalCost = areaSqM * removalRate;
  const laborEstimate = (baseMaterialCost + trussCost) * 0.22;
  const totalEstimatedCost = Math.round(baseMaterialCost + trussCost + gutterCost + removalCost + laborEstimate);
  const estimatedDays = Math.max(3, Math.ceil(areaSqM / 80));

  const materialNames = {
    stone_shingle: 'Stone-Coated Metal Shingles',
    aluminum_longspan: 'Aluminum Long-Span Sheets',
    sandwich_panel: 'Insulated Sandwich Panels',
  };

  const handleApply = () => {
    const summary = `${areaSqM}m² ${propertyType} roofing — ${materialNames[material]}. ${includeTrusses ? 'Trusses, ' : ''}${includeGutters ? 'Gutters, ' : ''}${oldRoofRemoval ? 'Old Roof Removal. ' : ''}Est: GHS ${totalEstimatedCost.toLocaleString()}`;
    onApplyEstimateToQuote(summary);
  };

  const btnClass = (active: boolean) =>
    `py-2.5 px-3 border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
      active ? 'bg-[#EAB308] text-[#0A0A0B] border-[#EAB308]' : 'bg-[#0A0A0B] text-gray-400 border-gray-800 hover:border-gray-700'
    }`;

  return (
    <section id="estimator" className="py-16 sm:py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Instant Budget Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Roofing Cost <span className="text-[#EAB308]">Estimator</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Get an instant budget projection based on your roof area, material, and add-ons.
          </p>
        </div>

        <div className="bg-[#111827] border border-gray-800 p-5 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Inputs */}
            <div className="lg:col-span-7 space-y-6">

              {/* Property type */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">1. Property Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button onClick={() => setPropertyType('residential')} className={btnClass(propertyType === 'residential')}>Residential</button>
                  <button onClick={() => setPropertyType('warehouse')} className={btnClass(propertyType === 'warehouse')}>Warehouse</button>
                  <button onClick={() => setPropertyType('commercial')} className={btnClass(propertyType === 'commercial')}>Commercial</button>
                </div>
              </div>

              {/* Area slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">2. Roof Area</label>
                  <span className="font-mono text-lg font-black text-[#EAB308]">{areaSqM} m²</span>
                </div>
                <input
                  type="range" min="100" max="3500" step="25" value={areaSqM}
                  onChange={(e) => setAreaSqM(Number(e.target.value))}
                  className="w-full h-2 bg-[#0A0A0B] appearance-none cursor-pointer accent-[#EAB308]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>100m²</span><span>1,800m²</span><span>3,500m²</span>
                </div>
              </div>

              {/* Material */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">3. Roofing Material</label>
                <div className="space-y-2">
                  {[
                    { id: 'stone_shingle', title: 'Stone-Coated Metal Shingles', sub: 'Noise dampening, 50-yr warranty ceramic granule tiles' },
                    { id: 'aluminum_longspan', title: 'Aluminum Long-Span Sheets', sub: 'High-durability corrugated & trapezoidal sheets' },
                    { id: 'sandwich_panel', title: 'Insulated Sandwich Panels', sub: 'Thermal insulation for warehouses & factories' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMaterial(m.id as any)}
                      className={`w-full p-3 border text-left transition-all cursor-pointer flex items-start gap-3 ${
                        material === m.id ? 'bg-[#0A0A0B] border-[#EAB308]' : 'bg-[#0A0A0B]/40 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${material === m.id ? 'border-[#EAB308] bg-[#EAB308]' : 'border-gray-600'}`}>
                        {material === m.id && <div className="w-1.5 h-1.5 bg-[#0A0A0B] rounded-full" />}
                      </div>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${material === m.id ? 'text-[#EAB308]' : 'text-gray-300'}`}>{m.title}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{m.sub}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">4. Add-Ons</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { active: includeTrusses, toggle: () => setIncludeTrusses(!includeTrusses), label: 'Truss Framing', sub: 'Timber or steel' },
                    { active: includeGutters, toggle: () => setIncludeGutters(!includeGutters), label: 'Gutters', sub: 'PVC / Aluminum' },
                    { active: oldRoofRemoval, toggle: () => setOldRoofRemoval(!oldRoofRemoval), label: 'Old Roof Removal', sub: 'Dismantling' },
                  ].map((addon) => (
                    <button
                      key={addon.label}
                      onClick={addon.toggle}
                      className={`p-3 border text-left text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        addon.active ? 'bg-[#0A0A0B] border-[#EAB308] text-[#EAB308]' : 'bg-[#0A0A0B] border-gray-800 text-gray-400'
                      }`}
                    >
                      <p className="font-bold flex items-center gap-1.5">
                        {addon.active && <Check className="w-3.5 h-3.5" />}
                        {addon.label}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{addon.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result panel */}
            <div className="lg:col-span-5 bg-[#0A0A0B] p-5 sm:p-6 border border-gray-800 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Budget Estimate</span>
                  <span className="text-[10px] font-bold text-[#EAB308] bg-[#111827] px-2 py-0.5 border border-[#EAB308]/30 uppercase">~{estimatedDays} Days</span>
                </div>

                <div className="my-5 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Approximate Total</p>
                  <p className="text-3xl sm:text-4xl font-black text-[#EAB308] font-mono mt-1">
                    GHS {totalEstimatedCost.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1">*Subject to site inspection</p>
                </div>

                <div className="space-y-2 text-xs border-t border-b border-gray-800 py-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Material:</span>
                    <span className="font-mono font-bold text-white">GHS {baseMaterialCost.toLocaleString()}</span>
                  </div>
                  {includeTrusses && (
                    <div className="flex justify-between text-gray-300">
                      <span>Trusses:</span>
                      <span className="font-mono font-bold text-white">GHS {trussCost.toLocaleString()}</span>
                    </div>
                  )}
                  {includeGutters && (
                    <div className="flex justify-between text-gray-300">
                      <span>Gutters:</span>
                      <span className="font-mono font-bold text-white">GHS {gutterCost.toLocaleString()}</span>
                    </div>
                  )}
                  {oldRoofRemoval && (
                    <div className="flex justify-between text-gray-300">
                      <span>Removal:</span>
                      <span className="font-mono font-bold text-white">GHS {removalCost.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-300 pt-2 border-t border-gray-800">
                    <span>Labor & Install:</span>
                    <span className="font-mono font-bold text-[#EAB308]">GHS {Math.round(laborEstimate).toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#111827] border border-gray-800 text-[11px] text-gray-300 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>Includes free site measurement, CAD drawings, and leak-proof installation warranty.</span>
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full py-4 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
