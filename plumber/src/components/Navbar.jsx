import React, { useState, useEffect } from 'react';
import { ShieldCheck, PhoneCall, ChevronRight, Flame, Wrench, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuote, onOpenEmergency }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0050FF] via-[#00D6FF] to-[#e57c35] p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#08090d] rounded-[11px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#e57c35] group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white font-sans">
                  SANTOS<span className="text-gradient-blue">THERMIQUE</span>
                </span>
                <span className="text-[11px] font-extrabold tracking-widest text-[#e57c35] uppercase font-mono">
                  • HAYANGE
                </span>
              </div>
              <p className="text-[11px] text-white/50 font-medium tracking-wide hidden sm:block">
                Maîtrise Thermique & Plomberie d'Excellence
              </p>
            </div>
          </a>

          {/* Center Navigation Links - Apple Style */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
            <button 
              onClick={() => scrollToSection('canvas-hero')} 
              className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#0050FF]"
            >
              Présentation
            </button>
            <button 
              onClick={() => scrollToSection('component-explorer')} 
              className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#0050FF]"
            >
              Ingénierie PAC
            </button>
            <button 
              onClick={() => scrollToSection('bento-services')} 
              className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#e57c35]"
            >
              Services & Plomberie
            </button>
            <button 
              onClick={() => scrollToSection('savings-calculator')} 
              className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#00D6FF]"
            >
              Simulateur d'Économies
            </button>
            <button 
              onClick={() => scrollToSection('coverage-map')} 
              className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#0050FF]"
            >
              Zone Fensch
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span>Urgence 24/7</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="btn-glow-blue px-4 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg shadow-blue-600/30"
            >
              <span>Devis Gratuit</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white/80"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl flex flex-col gap-4 border border-white/15 animate-fadeIn">
          <button 
            onClick={() => scrollToSection('canvas-hero')} 
            className="text-left text-white/90 text-sm font-medium py-2 border-b border-white/5"
          >
            Présentation Santos Thermique
          </button>
          <button 
            onClick={() => scrollToSection('component-explorer')} 
            className="text-left text-white/90 text-sm font-medium py-2 border-b border-white/5"
          >
            Ingénierie & Pompes à Chaleur
          </button>
          <button 
            onClick={() => scrollToSection('bento-services')} 
            className="text-left text-white/90 text-sm font-medium py-2 border-b border-white/5"
          >
            Plomberie & Chauffage
          </button>
          <button 
            onClick={() => scrollToSection('savings-calculator')} 
            className="text-left text-white/90 text-sm font-medium py-2 border-b border-white/5"
          >
            Simulateur PAC & Subsidies
          </button>
          <button 
            onClick={() => scrollToSection('coverage-map')} 
            className="text-left text-white/90 text-sm font-medium py-2 border-b border-white/5"
          >
            Intervention Hayange & Moselle
          </button>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full btn-glow-blue py-3 rounded-xl text-sm font-semibold text-white text-center"
            >
              Demander un Devis Gratuit
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEmergency(); }}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-red-500/15 text-red-400 border border-red-500/30 text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Urgence Dépannage (03 82 45 12 00)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
