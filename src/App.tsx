import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectGallery } from './components/ProjectGallery';
import { RoofVisualizer } from './components/RoofVisualizer';
import { CostEstimator } from './components/CostEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RoofingSheets } from './components/RoofingSheets';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefilledQuoteContext, setPrefilledQuoteContext] = useState('');
  const [initialContactEstimate, setInitialContactEstimate] = useState('');

  const handleOpenQuoteModal = (context = '') => {
    setPrefilledQuoteContext(context);
    setQuoteModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    handleOpenQuoteModal(`Interested in Service: ${serviceTitle}`);
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    handleOpenQuoteModal(`Project Inquiry: ${projectTitle}`);
  };

  const handleSelectColorForQuote = (colorName: string, buildingType: string) => {
    handleOpenQuoteModal(`Roof Finish Preference: ${colorName} on ${buildingType}`);
  };

  const handleApplyEstimateToQuote = (estimateSummary: string) => {
    setInitialContactEstimate(estimateSummary);
    // Scroll smoothly to contact form section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Header Navigation */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal('General Inquiry from Hero Section')} />
        
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />
        
        <RoofingSheets onOpenQuoteModal={() => handleOpenQuoteModal('Roofing Sheet Inquiry')} />
        
        <ProjectGallery onSelectProjectForQuote={handleSelectProjectForQuote} />
        
        <RoofVisualizer onSelectColorForQuote={handleSelectColorForQuote} />
        
        <CostEstimator onApplyEstimateToQuote={handleApplyEstimateToQuote} />
        
        <WhyChooseUs />
        
        <Testimonials />
        
        <ContactSection initialServiceOrEstimate={initialContactEstimate} />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal('Footer Quote Request')} />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefilledContext={prefilledQuoteContext}
      />
    </div>
  );
}
