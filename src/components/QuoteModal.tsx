import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledContext?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledContext = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [buildingType, setBuildingType] = useState('residential');
  const [message, setMessage] = useState(prefilledContext);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'RJS-QUOTE-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(randomRef);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111827] border border-[#EAB308] p-5 sm:p-8 shadow-2xl mt-4 mb-4 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#0A0A0B] text-gray-400 hover:text-white border border-gray-800 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 bg-[#0A0A0B] border border-gray-800 text-[#EAB308] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black uppercase text-white tracking-wider">Quote Request Received!</h3>
            <p className="text-xs text-gray-300">
              Reference Code: <strong className="font-mono text-[#EAB308] text-sm">{submittedRef}</strong>
            </p>
            <p className="text-xs text-gray-400">
              Our site engineers will contact you at <strong className="text-white">{phone}</strong> shortly to confirm your location and site survey details.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/233578127702?text=Hello%20RJS%20Roofing%2C%20I%20requested%20a%20quote%20(${submittedRef})%20for%20a%20${buildingType}%20roofing%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Confirmation</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-[#0A0A0B] border border-gray-800 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0B] border border-[#EAB308]/30 text-[#EAB308] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
              <span className="w-1.5 h-1.5 bg-[#EAB308] rotate-45" />
              <span>Direct Site Quote Request</span>
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-1">
              Request Free Roofing Quote
            </h3>
            <p className="text-xs text-gray-300 mb-6">
              Get an accurate estimate for stone-coated shingles, roof trusses, or warehouse roofing in Ghana.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 057 812 7702"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Building Location</label>
                <input
                  type="text"
                  placeholder="e.g. East Legon, Accra"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Building Scope</label>
                <select
                  value={buildingType}
                  onChange={(e) => setBuildingType(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] cursor-pointer"
                >
                  <option value="Residential Building">Residential Building / Mansion</option>
                  <option value="Industrial Warehouse">Industrial Warehouse / Plant</option>
                  <option value="Roof Truss Framing">Roof Timber / Steel Trussing</option>
                  <option value="Roof Renovation">Roof Renovation & Repair</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Project Details / Material</label>
                <textarea
                  rows={2}
                  placeholder="Enter details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
