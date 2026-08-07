import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';
import { Eye, X, MapPin, Calendar, Maximize2, ShieldCheck, Check, Phone, ArrowRight } from 'lucide-react';

interface ProjectGalleryProps {
  onSelectProjectForQuote: (projectTitle: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Buildings' },
    { id: 'industrial', label: 'Industrial Warehouses' },
    { id: 'shingle', label: 'Stone-Coated Shingles' },
    { id: 'trussing', label: 'Roof Trussing & Framing' },
    { id: 'repair', label: 'Roof Repairs & Overhauls' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Gallery of Completed <span className="text-[#EAB308]">Roofing Projects</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Explore our real-world craftsmanship across residential estates, multi-gable executive villas, stone-coated shingle installations, and industrial warehouses in Ghana.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#EAB308] text-[#0A0A0B] shadow-lg shadow-[#EAB308]/10 font-black'
                    : 'bg-[#111827] text-gray-300 border border-gray-800 hover:border-[#EAB308]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#111827] border border-gray-800 overflow-hidden cursor-pointer hover:border-[#EAB308] transition-all duration-300 flex flex-col"
            >
              {/* Image Thumbnail Container */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0A0A0B] px-3 py-1 border border-gray-800 text-[10px] font-bold text-[#EAB308] uppercase tracking-[0.2em]">
                  {project.categoryLabel}
                </div>

                {/* Hover Quick Zoom Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-[2px]">
                  <span className="px-4 py-2.5 bg-[#EAB308] text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                    <span>View Specs</span>
                  </span>
                </div>
              </div>

              {/* Project Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-black text-white group-hover:text-[#EAB308] transition-colors uppercase tracking-wider line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Metadata Pills */}
                <div className="pt-3 border-t border-gray-800 flex flex-wrap items-center justify-between text-[11px] text-gray-400 font-medium gap-2">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono font-bold text-[#EAB308]">
                    <span>{project.sizeSqM} m²</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Full Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#111827] border border-gray-800 overflow-hidden shadow-2xl my-8">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 bg-[#0A0A0B] text-gray-300 hover:text-[#EAB308] border border-gray-800 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Modal Left Column: Large Image */}
              <div className="md:col-span-7 relative h-72 sm:h-96 md:h-full min-h-[300px] bg-black">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent md:hidden" />
              </div>

              {/* Modal Right Column: Technical Details & CTA */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#0A0A0B] border border-[#EAB308]/30 text-[#EAB308] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                    {selectedProject.categoryLabel}
                  </div>
                  <h3 className="text-lg font-black text-white leading-snug uppercase tracking-wider">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Specification Table */}
                  <div className="mt-6 space-y-2.5 text-xs bg-[#0A0A0B] p-4 border border-gray-800">
                    <div className="flex justify-between border-b border-gray-800 pb-1.5">
                      <span className="text-gray-400">Roofing Material:</span>
                      <span className="font-bold text-[#EAB308]">{selectedProject.roofType}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-1.5">
                      <span className="text-gray-400">Finish Color:</span>
                      <span className="font-bold text-white">{selectedProject.roofColor}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-1.5">
                      <span className="text-gray-400">Location:</span>
                      <span className="font-bold text-gray-200">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-1.5">
                      <span className="text-gray-400">Coverage Area:</span>
                      <span className="font-mono font-bold text-[#EAB308]">{selectedProject.sizeSqM} sq. meters</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client Sector:</span>
                      <span className="font-bold text-gray-200">{selectedProject.clientType}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.features.map((feat, i) => (
                        <span key={i} className="px-2.5 py-1 bg-[#0A0A0B] border border-gray-800 text-[11px] font-medium text-gray-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="pt-4 border-t border-gray-800 space-y-2">
                  <button
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onSelectProjectForQuote(`Similar project to: ${title}`);
                    }}
                    className="w-full py-3.5 px-4 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Request Quote For Similar Roof</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:0578127702"
                    className="w-full py-2.5 px-4 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] text-[#EAB308] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Engineer: 057 812 7702</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
