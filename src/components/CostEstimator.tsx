import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Check, Sparkles, Building, Info } from 'lucide-react';

interface CostEstimatorProps {
  onApplyEstimateToQuote: (estimateSummary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyEstimateToQuote }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'warehouse' | 'commercial'>('residential');
  const [areaSqM, setAreaSqM] = useState<number>(350);
  const [material, setMaterial] = useState<'stone_shingle' | 'aluminum_longspan' | 'sandwich_panel'>('stone_shingle');
  const [includeTrusses, setIncludeTrusses] = useState<boolean>(true);
  const [includeGutters, setIncludeGutters] = useState<boolean>(true);
  const [oldRoofRemoval, setOldRoofRemoval] = useState<boolean>(false);

  // Approximate material rates in GHS per sq. meter for estimation guidance
  const materialRates = {
    stone_shingle: 180, // GHS / sq.m
    aluminum_longspan: 120,
    sandwich_panel: 220,
  };

  const trussRate = includeTrusses ? 90 : 0; // GHS / sq.m
  const gutterRate = includeGutters ? 35 : 0; // GHS / sq.m
  const removalRate = oldRoofRemoval ? 25 : 0; // GHS / sq.m

  const baseMaterialCost = areaSqM * materialRates[material];
  const trussCost = areaSqM * trussRate;
  const gutterCost = areaSqM * gutterRate;
  const removalCost = areaSqM * removalRate;
  const laborEstimate = (baseMaterialCost + trussCost) * 0.22; // 22% labor & installation factor

  const totalEstimatedCost = Math.round(baseMaterialCost + trussCost + gutterCost + removalCost + laborEstimate);
  const estimatedDays = Math.max(3, Math.ceil(areaSqM / 80));

  const materialNames = {
    stone_shingle: 'Stone-Coated Metal Shingles (50-Yr Warranty)',
    aluminum_longspan: 'Aluminum Long-Span Decking Sheets',
    sandwich_panel: 'Insulated Industrial Sandwich Panels',
  };

  const handleApply = () => {
    const summary = `${areaSqM} m² ${propertyType.toUpperCase()} roofing project using ${materialNames[material]}. Includes: ${includeTrusses ? 'Trusses, ' : ''}${includeGutters ? 'Rainwater Gutters, ' : ''}${oldRoofRemoval ? 'Old Roof Removal' : ''}. Estimated Budget: GHS ${totalEstimatedCost.toLocaleString()}`;
    onApplyEstimateToQuote(summary);
  };

  return (
    <section id="estimator" className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Instant Budget Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Roofing Cost <span className="text-[#EAB308]">Estimator</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Get an instant budget projection for your building or industrial warehouse project based on coverage area, truss framing, and premium material options.
          </p>
        </div>

        {/* Calculator Workspace */}
        <div className="bg-[#111827] border border-gray-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                  1. Property Classification
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setPropertyType('residential')}
                    className={`py-3 px-3 border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      propertyType === 'residential'
                        ? 'bg-[#EAB308] text-[#0A0A0B] border-[#EAB308]'
                        : 'bg-[#0A0A0B] text-gray-400 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    Residential Villa
                  </button>
                  <button
                    onClick={() => setPropertyType('warehouse')}
                    className={`py-3 px-3 border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      propertyType === 'warehouse'
                        ? 'bg-[#EAB308] text-[#0A0A0B] border-[#EAB308]'
                        : 'bg-[#0A0A0B] text-gray-400 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    Industrial Warehouse
                  </button>
                  <button
                    onClick={() => setPropertyType('commercial')}
                    className={`py-3 px-3 border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      propertyType === 'commercial'
                        ? 'bg-[#EAB308] text-[#0A0A0B] border-[#EAB308]'
                        : 'bg-[#0A0A0B] text-gray-400 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    Commercial Property
                  </button>
                </div>
              </div>

              {/* Roof Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                    2. Estimated Surface Area (Sq. Meters)
                  </label>
                  <span className="font-mono text-base font-black text-[#EAB308]">
                    {areaSqM} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3500"
                  step="25"
                  value={areaSqM}
                  onChange={(e) => setAreaSqM(Number(e.target.value))}
                  className="w-full h-2 bg-[#0A0A0B] appearance-none cursor-pointer accent-[#EAB308]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-mono">
                  <span>100 m² (Small Home)</span>
                  <span>1,000 m² (Large Estate)</span>
                  <span>3,500 m² (Industrial Hub)</span>
                </div>
              </div>

              {/* Roofing Material */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                  3. Select Roofing Material
                </label>
                <div className="space-y-2">
                  <label
                    onClick={() => setMaterial('stone_shingle')}
                    className={`p-3 border flex items-center justify-between cursor-pointer transition-all ${
                      material === 'stone_shingle'
                        ? 'bg-[#0A0A0B] border-[#EAB308] text-[#EAB308]'
                        : 'bg-[#0A0A0B]/40 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${material === 'stone_shingle' ? 'border-[#EAB308] bg-[#EAB308]' : 'border-gray-600'}`}>
                        {material === 'stone_shingle' && <div className="w-1.5 h-1.5 bg-[#0A0A0B] rounded-full" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider">Stone-Coated Metal Shingles (Gerard Style)</p>
                        <p className="text-[10px] text-gray-400">Noise dampening, anti-rust ceramic granule tiles</p>
                      </div>
                    </div>
                  </label>

                  <label
                    onClick={() => setMaterial('aluminum_longspan')}
                    className={`p-3 border flex items-center justify-between cursor-pointer transition-all ${
                      material === 'aluminum_longspan'
                        ? 'bg-[#0A0A0B] border-[#EAB308] text-[#EAB308]'
                        : 'bg-[#0A0A0B]/40 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${material === 'aluminum_longspan' ? 'border-[#EAB308] bg-[#EAB308]' : 'border-gray-600'}`}>
                        {material === 'aluminum_longspan' && <div className="w-1.5 h-1.5 bg-[#0A0A0B] rounded-full" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider">Aluminum Long-Span Decking Sheets</p>
                        <p className="text-[10px] text-gray-400">High durability corrugated & trapezoidal roof sheets</p>
                      </div>
                    </div>
                  </label>

                  <label
                    onClick={() => setMaterial('sandwich_panel')}
                    className={`p-3 border flex items-center justify-between cursor-pointer transition-all ${
                      material === 'sandwich_panel'
                        ? 'bg-[#0A0A0B] border-[#EAB308] text-[#EAB308]'
                        : 'bg-[#0A0A0B]/40 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${material === 'sandwich_panel' ? 'border-[#EAB308] bg-[#EAB308]' : 'border-gray-600'}`}>
                        {material === 'sandwich_panel' && <div className="w-1.5 h-1.5 bg-[#0A0A0B] rounded-full" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider">Insulated Industrial Sandwich Panels</p>
                        <p className="text-[10px] text-gray-400">Optimal thermal insulation for warehouses & factories</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Add-ons Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                  4. Additional Scope & Add-Ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setIncludeTrusses(!includeTrusses)}
                    className={`p-3 border text-left text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      includeTrusses ? 'bg-[#0A0A0B] border-[#EAB308] text-[#EAB308]' : 'bg-[#0A0A0B] border-gray-800 text-gray-400'
                    }`}
                  >
                    <p className="font-bold flex items-center gap-1.5">
                      {includeTrusses ? <Check className="w-3.5 h-3.5 text-[#EAB308]" /> : null}
                      <span>Truss Framing</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">Timber or steel trusses</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIncludeGutters(!includeGutters)}
                    className={`p-3 border text-left text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      includeGutters ? 'bg-[#0A0A0B] border-[#EAB308] text-[#EAB308]' : 'bg-[#0A0A0B] border-gray-800 text-gray-400'
                    }`}
                  >
                    <p className="font-bold flex items-center gap-1.5">
                      {includeGutters ? <Check className="w-3.5 h-3.5 text-[#EAB308]" /> : null}
                      <span>Rainwater Gutters</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">PVC/Aluminum gutters</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOldRoofRemoval(!oldRoofRemoval)}
                    className={`p-3 border text-left text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      oldRoofRemoval ? 'bg-[#0A0A0B] border-[#EAB308] text-[#EAB308]' : 'bg-[#0A0A0B] border-gray-800 text-gray-400'
                    }`}
                  >
                    <p className="font-bold flex items-center gap-1.5">
                      {oldRoofRemoval ? <Check className="w-3.5 h-3.5 text-[#EAB308]" /> : null}
                      <span>Old Roof Removal</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">Dismantling old roof</p>
                  </button>
                </div>
              </div>

            </div>

            {/* Output Calculation Column */}
            <div className="lg:col-span-5 bg-[#0A0A0B] p-6 sm:p-8 border border-gray-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Project Budget Estimate</span>
                  <span className="text-[10px] font-bold text-[#EAB308] bg-[#111827] px-2 py-0.5 border border-[#EAB308]/30 uppercase tracking-wider">
                    Time: ~{estimatedDays} Days
                  </span>
                </div>

                {/* Total Display */}
                <div className="my-6 text-center">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Approximate Total Cost Range:</p>
                  <p className="text-3xl sm:text-4xl font-black text-[#EAB308] font-mono mt-1">
                    GHS {totalEstimatedCost.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    *Subject to exact site inspection & pitch measurement
                  </p>
                </div>

                {/* Itemized Breakdown */}
                <div className="space-y-2 text-xs border-t border-b border-gray-800 py-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Roofing Material:</span>
                    <span className="font-mono font-bold text-white">GHS {baseMaterialCost.toLocaleString()}</span>
                  </div>
                  {includeTrusses && (
                    <div className="flex justify-between text-gray-300">
                      <span>Roof Truss Structure:</span>
                      <span className="font-mono font-bold text-white">GHS {trussCost.toLocaleString()}</span>
                    </div>
                  )}
                  {includeGutters && (
                    <div className="flex justify-between text-gray-300">
                      <span>Gutter & Drainage System:</span>
                      <span className="font-mono font-bold text-white">GHS {gutterCost.toLocaleString()}</span>
                    </div>
                  )}
                  {oldRoofRemoval && (
                    <div className="flex justify-between text-gray-300">
                      <span>Old Roof Dismantling:</span>
                      <span className="font-mono font-bold text-white">GHS {removalCost.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-300 pt-2 border-t border-gray-800">
                    <span>Installation & Labor:</span>
                    <span className="font-mono font-bold text-[#EAB308]">GHS {Math.round(laborEstimate).toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#111827] border border-gray-800 text-[11px] text-gray-300 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>Includes free site measurement, technical CAD drawings, and leak-proof installation warranty by RJS Roofing & Construction Limited.</span>
                </div>
              </div>

              {/* Submit Estimate to Quote Form */}
              <button
                onClick={handleApply}
                className="w-full py-4 px-6 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Attach Estimate & Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
