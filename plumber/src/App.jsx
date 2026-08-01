import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ScrollyCanvas from './components/ScrollyCanvas';
import StoryOverlays from './components/StoryOverlays';
import SavingsCalculator from './components/SavingsCalculator';
import BentoServices from './components/BentoServices';
import ComponentExplorer from './components/ComponentExplorer';
import CoverageMap from './components/CoverageMap';
import QuoteModal from './components/QuoteModal';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [modalMode, setModalMode] = useState('quote'); // 'quote' | 'emergency'

  const handleOpenQuote = () => {
    setModalMode('quote');
    setIsQuoteOpen(true);
  };

  const handleOpenEmergency = () => {
    setModalMode('emergency');
    setIsQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#040404] text-white selection:bg-[#0050FF]/30 font-sans">
      
      {/* Top Glassmorphism Navigation Bar */}
      <Navbar 
        onOpenQuote={handleOpenQuote} 
        onOpenEmergency={handleOpenEmergency} 
      />

      {/* 240-Frame Interactive Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas onScrollProgress={setScrollProgress} />
        <StoryOverlays 
          progress={scrollProgress} 
          onOpenQuote={handleOpenQuote}
          onOpenEmergency={handleOpenEmergency}
        />
      </div>

      {/* Additional High-End Storytelling & Interactive Sections */}
      <main className="relative z-20 bg-[#040404]">
        
        {/* Component Anatomical Explorer */}
        <ComponentExplorer />

        {/* Heat Pump Savings Calculator */}
        <SavingsCalculator onOpenQuote={handleOpenQuote} />

        {/* Bento Grid Services Showcase */}
        <BentoServices 
          onOpenQuote={handleOpenQuote}
          onOpenEmergency={handleOpenEmergency}
        />

        {/* Local Coverage & Intervention Radius in Hayange */}
        <CoverageMap 
          onOpenQuote={handleOpenQuote}
          onOpenEmergency={handleOpenEmergency}
        />

      </main>

      {/* Corporate Dark Footer */}
      <Footer 
        onOpenQuote={handleOpenQuote}
        onOpenEmergency={handleOpenEmergency}
      />

      {/* Interactive Booking & Emergency Call Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        mode={modalMode}
      />

    </div>
  );
}
