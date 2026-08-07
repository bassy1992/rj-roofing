import React, { useState } from 'react';
import { X, ZoomIn, ArrowLeft, ArrowRight, ArrowRight as QuoteArrow } from 'lucide-react';

interface RoofingSheetsProps {
  onOpenQuoteModal: () => void;
}

const TOTAL = 17;

const sheets = Array.from({ length: TOTAL }, (_, i) => ({
  id: i + 1,
  src: `/sheets/${i + 1}.jpg`,
  label: `Roofing Sheet Style ${i + 1}`,
}));

export const RoofingSheets: React.FC<RoofingSheetsProps> = ({ onOpenQuoteModal }) => {
  const [lightbox, setLightbox] = useState<number | null>(null); // index into sheets[]

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const prev = () =>
    setLightbox((l) => (l !== null ? (l - 1 + TOTAL) % TOTAL : 0));
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % TOTAL : 0));

  // close on backdrop click
  const onBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  // keyboard nav
  React.useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  return (
    <section id="roofing-sheets" className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Materials Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Our Roofing <span className="text-[#EAB308]">Sheet Profiles</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Browse our full range of roofing sheet styles — from stone-coated shingles and long-span aluminum to corrugated and sandwich panels. Click any image to view full size.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {sheets.map((sheet, idx) => (
            <button
              key={sheet.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square overflow-hidden bg-[#111827] border border-gray-800 hover:border-[#EAB308] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#EAB308]"
              aria-label={`View ${sheet.label}`}
            >
              <img
                src={sheet.src}
                alt={sheet.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter contrast-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-[#EAB308]" />
              </div>
              {/* Number badge */}
              <div className="absolute top-1.5 left-1.5 bg-[#0A0A0B]/80 text-[#EAB308] text-[10px] font-black px-1.5 py-0.5 border border-[#EAB308]/30">
                {String(sheet.id).padStart(2, '0')}
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl cursor-pointer"
          >
            <span>Request a Quote for Any Sheet</span>
            <QuoteArrow className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={sheets[lightbox].label}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2.5 bg-[#111827] border border-gray-700 text-gray-300 hover:text-[#EAB308] hover:border-[#EAB308] transition-all z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#111827] border border-gray-700 text-gray-300 hover:text-[#EAB308] hover:border-[#EAB308] transition-all z-10"
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={sheets[lightbox].src}
              alt={sheets[lightbox].label}
              className="max-h-[75vh] w-auto object-contain border border-gray-800 shadow-2xl"
            />
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xs font-bold text-[#EAB308] uppercase tracking-widest">
                Sheet {String(sheets[lightbox].id).padStart(2, '0')}
              </span>
              <span className="text-gray-600 text-xs">—</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {lightbox + 1} / {TOTAL}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#111827] border border-gray-700 text-gray-300 hover:text-[#EAB308] hover:border-[#EAB308] transition-all z-10"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};
