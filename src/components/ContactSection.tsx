import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CompanyLogo } from './CompanyLogo';
import { QuoteFormData } from '../types';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

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
      alert('Please fill in your name and phone number so our team can reach you.');
      return;
    }

    setSubmitting(true);

    // Simulate inquiry recording
    setTimeout(() => {
      setSubmitting(false);
      const randomRef = 'RJS-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(randomRef);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello RJS Roofing & Construction Ltd,\nI have submitted an inquiry on your website.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nProperty: ${formData.projectType.toUpperCase()}\nService: ${formData.serviceNeeded}\nLocation: ${formData.location || 'Accra'}\nMessage: ${formData.message || 'I need a roofing quote.'}`;
    return `https://wa.me/233578127702?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0B] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111827] border border-[#EAB308]/30 text-[#EAB308] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#EAB308] rotate-45" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Get In Touch With <span className="text-[#EAB308]">RJS Roofing</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Ready to roof your building or industrial warehouse? Contact our master engineers today for a free site survey, blueprint evaluation, and cost estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Company Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Logo Branding Badge */}
            <CompanyLogo variant="badge" showContactInfo={true} />

            {/* Direct Hotlines Card */}
            <div className="bg-[#111827] p-6 border border-gray-800 space-y-4 shadow-xl">
              <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <span>Direct Hotline Numbers</span>
              </h3>

              <div className="space-y-3 text-xs">
                <a
                  href="tel:0578127702"
                  className="flex items-center justify-between p-3 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] transition-all group"
                >
                  <div>
                    <p className="text-gray-400 font-medium uppercase text-[10px] tracking-wider">Primary Office Line</p>
                    <p className="text-sm font-black text-[#EAB308] font-mono">057 812 7702</p>
                  </div>
                  <span className="text-[11px] font-bold text-gray-300 group-hover:text-[#EAB308] uppercase tracking-wider">Call Now &rarr;</span>
                </a>

                <a
                  href="tel:0547252937"
                  className="flex items-center justify-between p-3 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] transition-all group"
                >
                  <div>
                    <p className="text-gray-400 font-medium uppercase text-[10px] tracking-wider">Sales & Technical Quotes</p>
                    <p className="text-sm font-black text-[#EAB308] font-mono">054 725 2937</p>
                  </div>
                  <span className="text-[11px] font-bold text-gray-300 group-hover:text-[#EAB308] uppercase tracking-wider">Call Now &rarr;</span>
                </a>

                <a
                  href="tel:0208376082"
                  className="flex items-center justify-between p-3 bg-[#0A0A0B] border border-gray-800 hover:border-[#EAB308] transition-all group"
                >
                  <div>
                    <p className="text-gray-400 font-medium uppercase text-[10px] tracking-wider">Warehouse & Logistics</p>
                    <p className="text-sm font-black text-[#EAB308] font-mono">020 837 6082</p>
                  </div>
                  <span className="text-[11px] font-bold text-gray-300 group-hover:text-[#EAB308] uppercase tracking-wider">Call Now &rarr;</span>
                </a>
              </div>
            </div>

            {/* Email & Location Card */}
            <div className="bg-[#111827] p-6 border border-gray-800 space-y-3 text-xs shadow-xl">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#0A0A0B] text-[#EAB308] border border-gray-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-gray-400 uppercase text-[10px] tracking-wider">Official Email Address</p>
                  <a href="mailto:rjsroofingcon43@gmail.com" className="text-xs font-bold text-white hover:text-[#EAB308] transition-colors uppercase tracking-wider">
                    rjsroofingcon43@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-800">
                <div className="p-2.5 bg-[#0A0A0B] text-[#EAB308] border border-gray-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-gray-400 uppercase text-[10px] tracking-wider">Head Office & Operations</p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Accra, Ghana (Servicing All Regions)</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Monday - Saturday: 7:30 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111827] p-6 sm:p-10 border border-gray-800 shadow-2xl relative">
              
              <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">
                Send A Project Inquiry
              </h3>
              <p className="text-xs text-gray-300 mb-6">
                Fill out the form below and an engineer will get back to you within 2 hours with an estimate or site visit schedule.
              </p>

              {submittedRef ? (
                /* Submission Success Banner */
                <div className="p-6 bg-[#0A0A0B] border border-[#EAB308] text-center space-y-4">
                  <div className="w-16 h-16 bg-[#111827] text-[#EAB308] border border-gray-800 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-white uppercase tracking-wider">Inquiry Submitted Successfully!</p>
                    <p className="text-xs text-gray-300 mt-1">
                      Your inquiry reference number is <strong className="font-mono text-[#EAB308]">{submittedRef}</strong>.
                    </p>
                  </div>
                  <p className="text-xs text-gray-300">
                    Our technical manager has received your request and will contact you via {formData.preferredContact}.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-[#EAB308] text-[#0A0A0B] font-black text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 hover:bg-white transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          projectType: 'residential',
                          serviceNeeded: 'Stone-Coated Shingle Roofing',
                          roofMaterial: 'Stone-Coated Shingle',
                          estimatedAreaSqM: '350',
                          location: '',
                          message: '',
                          preferredContact: 'phone',
                        });
                      }}
                      className="py-3 px-4 bg-[#0A0A0B] border border-gray-800 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-wider"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-[#EAB308]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Amankwah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number <span className="text-[#EAB308]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 024 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Building Site Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. East Legon / Kumasi / Takoradi"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Property Type & Service Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors cursor-pointer"
                      >
                        <option value="residential">Residential Building (Home/Villa)</option>
                        <option value="warehouse">Industrial Warehouse / Plant</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="renovation">Roof Renovation / Re-Roofing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                        Primary Roofing Service
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors cursor-pointer"
                      >
                        <option value="Stone-Coated Shingle Roofing">Stone-Coated Shingle Tiles</option>
                        <option value="Industrial Warehouse Roofing">Industrial Warehouse Roofing</option>
                        <option value="Timber & Steel Roof Trusses">Timber & Steel Roof Trusses</option>
                        <option value="Aluminum Long-Span Decking">Aluminum Long-Span Sheets</option>
                        <option value="Rainwater Gutters & Fascia">Rainwater Gutters & Fascia</option>
                        <option value="Roof Leak Repair & Waterproofing">Roof Leak Repair & Waterproofing</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Additional Details */}
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Project Details & Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your building roof dimensions, preferred tile color, or site survey date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#EAB308] transition-colors"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Preferred Response Method
                    </label>
                    <div className="flex gap-4 text-xs text-gray-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                          className="accent-[#EAB308]"
                        />
                        <span className="uppercase tracking-wider text-[11px]">Phone Call</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                          className="accent-[#EAB308]"
                        />
                        <span className="uppercase tracking-wider text-[11px]">WhatsApp Message</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                          className="accent-[#EAB308]"
                        />
                        <span className="uppercase tracking-wider text-[11px]">Email</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 bg-[#EAB308] hover:bg-white text-[#0A0A0B] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Sending Request...' : 'Submit Inquiry For Free Site Survey'}</span>
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
