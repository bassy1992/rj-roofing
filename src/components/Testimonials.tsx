import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Dr. Kwabena Mensah',
      role: 'Property Owner, East Legon Estate',
      text: 'RJS Roofing handled the timber trusses and stone-coated shingle tiles for my 5-bedroom duplex. Their team worked cleanly and finished within 12 days. Zero leaks even during the heavy May rainstorms!',
      rating: 5,
      project: 'Charcoal Stone Shingles',
    },
    {
      id: 2,
      name: 'Ing. Seth Osei-Tutu',
      role: 'Project Director, Ghana Apex Logistics',
      text: 'We contracted RJS Roofing & Construction Ltd for our 2,800 sq. meter storage warehouse in Tema. Their structural steel I-beam roof trussing and long-span aluminum installation were flawless.',
      rating: 5,
      project: 'Warehouse Steel Roof',
    },
    {
      id: 3,
      name: 'Mrs. Rebecca Addison',
      role: 'Homeowner, Cantonments',
      text: 'The royal navy blue roofing shingles transformed the look of our home. They provided a detailed estimate beforehand, and there were no hidden extra costs. Highly recommended!',
      rating: 5,
      project: 'Navy Blue Shingle Roof',
    },
  ];

  return (
    <section className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            What Building Owners <span className="text-[#EAB308]">Say About Us</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Read feedback from satisfied residential property owners, commercial estate developers, and industrial plant managers across Ghana.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#111827] p-6 sm:p-8 border border-gray-800 flex flex-col justify-between relative group hover:border-[#EAB308] transition-all shadow-xl"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#EAB308]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308]" />
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">{rev.role}</p>
                </div>
                <span className="text-[9px] font-bold text-[#EAB308] bg-[#0A0A0B] px-2 py-1 border border-[#EAB308]/30 uppercase tracking-wider">
                  {rev.project}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
