import React from 'react';
import { Flame, ShieldCheck, MapPin, Phone, Mail, Clock, Award, ChevronUp } from 'lucide-react';

export default function Footer({ onOpenQuote, onOpenEmergency }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020203] text-white/60 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#e57c35] p-[1px]">
                <div className="w-full h-full bg-[#08090d] rounded-[11px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#e57c35]" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SANTOS<span className="text-[#0050FF]">THERMIQUE</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Savoir-faire artisanal et ingénierie thermique de précision à Hayange (57700). Spécialiste certifié RGE en Pompes à Chaleur, Chauffage & Plomberie sanitaire.
            </p>

            {/* Certifications badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-white/80 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#e57c35]" /> RGE QualiPAC
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-white/80 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0050FF]" /> Handibat 57
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-white/80 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Professionnel Gaz
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <span className="block font-bold uppercase tracking-wider text-white">Navigation</span>
            <ul className="space-y-2">
              <li><a href="#canvas-hero" className="hover:text-white transition-colors">Présentation 3D</a></li>
              <li><a href="#component-explorer" className="hover:text-white transition-colors">Ingénierie & PAC</a></li>
              <li><a href="#bento-services" className="hover:text-white transition-colors">Plomberie & Chauffage</a></li>
              <li><a href="#savings-calculator" className="hover:text-white transition-colors">Simulateur Économies</a></li>
              <li><a href="#coverage-map" className="hover:text-white transition-colors">Zone Hayange & Moselle</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 text-xs">
            <span className="block font-bold uppercase tracking-wider text-white">Nos Prestations</span>
            <ul className="space-y-2">
              <li><button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">Pompe à Chaleur Air/Eau</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">Remplacement Chaudière</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">Création Salle de Bains</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">Désembouage Réseau</button></li>
              <li><button onClick={onOpenEmergency} className="text-red-400 hover:underline text-left font-semibold">Dépannage Urgent 24/7</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs">
            <span className="block font-bold uppercase tracking-wider text-white">Atelier Hayange</span>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e57c35] flex-shrink-0 mt-0.5" />
                <span>Atelier Santos Thermique<br/>57700 Hayange, Moselle</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0050FF] flex-shrink-0" />
                <a href="tel:0382000000" className="text-white font-mono hover:underline">03 82 45 12 00</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00D6FF] flex-shrink-0" />
                <span>contact@santos-thermique-hayange.fr</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Astreinte 24h/7j active</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Santos Thermique Hayange. Tous droits réservés. SIRET certifié.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 transition-all flex items-center gap-1"
            >
              <span>Haut de page</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
