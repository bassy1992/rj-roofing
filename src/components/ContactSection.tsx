import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CompanyLogo } from './CompanyLogo';
import { QuoteFormData } from '../types';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  initialServiceOrEstimate?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceOrEstimate = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'residential',
    serviceNeeded: 'Stone-Coated Shingle Roofing',
    roofMaterial: 'Stone-Coated Shingle',
    estimatedAreaSqM: '350',
    location: '',
    message: initialServiceOrEstimate ? `Details: ${initialServiceOrEstimate}` : '',
    preferredContact: 'phone',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const ref = 'RJS-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(ref);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }, 800);
  };

  const whatsappLink = () => {
    const text = `Hello RJS Roofing,\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.serviceNeeded}\nLocation: ${formData.location || 'Accra'}\n${formData.message}`;
    return `https://wa.me/233578127702?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Get In Touch With <span className="text-[#EAB308]">RJS Roofing</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Ready to roof your building? Contact our engineers for a free site survey and cost estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left: contact info */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo badge */}
            <div className="bg-[#111827] border border-gray-800 p-5 flex justify-center">
              <img src="/logo.jpeg" alt="RJS Roofing" className="h-28 w-auto object-contain" />
            </div>

            {/* Hotlines */}
            <div className="bg-[#111827] p-5 border border-gray-800 space-y-3">
              <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EAB308]" />Direct Hotlines
              </h3>
              {[
                { label: 'Primary Office', num: '057 812 7702', tel: '0578127702' },
                { label: 'Sales & Quotes', num: '054 725 2937', tel: '0547252937' },
                { label: 'Warehouse', num: '020 837 6082', tel: '0208376082' },
              ].map((h) => (
                <a key={h.tel} href={`tel:${h.tel}`}
                  className="flex items-center justify-between p-3 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] transition-all group"
                >
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{h.label}</p>
                    <p className="text-sm font-black text-[#EAB308] font-mono">{h.num}</p>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 group-hover:text-[#EAB308] uppercase">Call →</span>
                </a>
              ))}
            </div>

            {/* Email & location */}
            <div className="bg-[#111827] p-5 border border-gray-800 space-y-3 text-xs">
              <a href="mailto:rjsroofingcon43@gmail.com" className="flex items-start gap-3 group">
                <div className="p-2 bg-[#0A0A0B] text-[#EAB308] border border-gray-800 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-white font-bold group-hover:text-[#EAB308] transition-colors break-all">rjsroofingcon43@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-3 pt-3 border-t border-gray-800">
                <div className="p-2 bg-[#0A0A0B] text-[#EAB308] border border-gray-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-white font-bold">Accra, Ghana · All Regions</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">Mon–Sat: 7:30 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            <div className="bg-[#111827] p-5 sm:p-8 border border-gray-800 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider mb-1">Send A Project Inquiry</h3>
              <p className="text-xs text-gray-400 mb-6">An engineer will contact you within 2 hours with an estimate or site visit schedule.</p>

              {submittedRef ? (
                <div className="p-6 bg-[#0A0A0B] border border-[#EAB308] text-center space-y-4">
                  <div className="w-14 h-14 bg-[#111827] text-[#EAB308] border border-gray-800 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <p className="text-lg font-black text-white uppercase">Inquiry Submitted!</p>
                  <p className="text-xs text-gray-300">
                    Reference: <strong className="font-mono text-[#EAB308]">{submittedRef}</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
                      className="flex-1 py-3 bg-[#EAB308] text-[#0A0A0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />WhatsApp Now
                    </a>
                    <button
                      onClick={() => { setSubmittedRef(null); setFormData({ ...formData, name: '', phone: '', message: '' }); }}
                      className="py-3 px-4 bg-[#0A0A0B] border border-gray-800 text-gray-300 text-xs font-bold uppercase hover:text-white"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Full Name *</label>
                      <input type="text" required placeholder="Samuel Amankwah" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="024 123 4567" value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email (Optional)</label>
                      <input type="email" placeholder="name@example.com" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Site Location</label>
                      <input type="text" placeholder="East Legon / Kumasi" value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Property Type</label>
                      <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] cursor-pointer"
                      >
                        <option value="residential">Residential (Home / Villa)</option>
                        <option value="warehouse">Industrial Warehouse</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="renovation">Roof Renovation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Service Needed</label>
                      <select value={formData.serviceNeeded} onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] cursor-pointer"
                      >
                        <option>Stone-Coated Shingle Roofing</option>
                        <option>Industrial Warehouse Roofing</option>
                        <option>Timber & Steel Roof Trusses</option>
                        <option>Aluminum Long-Span Sheets</option>
                        <option>Rainwater Gutters & Fascia</option>
                        <option>Roof Leak Repair & Waterproofing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Project Details</label>
                    <textarea rows={3} placeholder="Describe your roof dimensions, preferred color, or any other details..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Response</label>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                      {['phone', 'whatsapp', 'email'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="contact" value={method}
                            checked={formData.preferredContact === method}
                            onChange={() => setFormData({ ...formData, preferredContact: method as any })}
                            className="accent-[#EAB308]"
                          />
                          <span className="uppercase tracking-wider text-[11px] capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full py-4 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending...' : 'Submit For Free Site Survey'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
