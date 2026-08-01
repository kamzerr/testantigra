import React, { useState } from 'react';
import { MapPin, Navigation, PhoneCall, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CoverageMap({ onOpenQuote, onOpenEmergency }) {
  const [selectedCity, setSelectedCity] = useState("Hayange");

  const cities = [
    { name: "Hayange (Siège)", zip: "57700", time: "15 min", main: true },
    { name: "Thionville", zip: "57100", time: "20 min", main: false },
    { name: "Florange", zip: "57190", time: "15 min", main: false },
    { name: "Algrange", zip: "57440", time: "10 min", main: false },
    { name: "Nilvange", zip: "57240", time: "10 min", main: false },
    { name: "Knutange", zip: "57240", time: "10 min", main: false },
    { name: "Serémange-Erzange", zip: "57290", time: "12 min", main: false },
    { name: "Fameck", zip: "57290", time: "15 min", main: false },
    { name: "Yutz", zip: "57970", time: "25 min", main: false },
    { name: "Metz & Agglo", zip: "57000", time: "30 min", main: false },
    { name: "Uckange", zip: "57270", time: "20 min", main: false },
    { name: "Fontoy", zip: "57650", time: "18 min", main: false }
  ];

  return (
    <section id="coverage-map" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#040404] border-t border-white/5">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e57c35]/10 border border-[#e57c35]/20 text-[#e57c35] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Zone d'Intervention Moselle & Vallée de la Fensch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Implanté à <span className="text-gradient-copper">Hayange</span>, Présent Partout en Moselle
          </h2>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Notre atelier basé à Hayange déploie ses techniciens qualifiés sur tout le secteur de la Fensch, du Pays Thionvillois et de la métropole messine.
          </p>
        </div>

        {/* Cities Grid & Hotline Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Cities Pills */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                Communes Desservies en Urgence & Sur Rendez-Vous
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Équipes en Patrouille 57
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCity(city.name)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    selectedCity === city.name
                      ? 'bg-[#0050FF]/20 border-[#0050FF] text-white shadow-lg shadow-blue-500/20'
                      : city.main
                      ? 'bg-[#e57c35]/15 border-[#e57c35]/40 text-white'
                      : 'bg-white/5 border-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{city.name}</span>
                    {city.main && <span className="w-2 h-2 rounded-full bg-[#e57c35] animate-ping" />}
                  </div>
                  <div className="flex items-center justify-between text-[11px] opacity-70 mt-2">
                    <span>{city.zip}</span>
                    <span className="font-mono">{city.time}</span>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-xs text-white/40 italic">
              Vous êtes situé dans une commune limitrophe ? Contactez-nous, nous intervenons dans un rayon de 40 km autour de Hayange.
            </p>
          </div>

          {/* Location Focus Card */}
          <div className="lg:col-span-5 glass-panel-glow p-8 rounded-3xl space-y-6 border border-[#0050FF]/30 text-center flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0050FF] to-[#e57c35] p-[1px] mx-auto shadow-xl">
                <div className="w-full h-full bg-[#08090d] rounded-[15px] flex items-center justify-center">
                  <Navigation className="w-8 h-8 text-[#00D6FF] animate-pulse" />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Siège & Atelier Central</span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">SANTOS THERMIQUE HAYANGE</h3>
                <p className="text-xs text-white/60 mt-1">
                  Hayange (57700) • Moselle, France
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/60">Délai d'intervention local :</span>
                  <span className="font-bold text-emerald-400">15 - 30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Horaires Atelier :</span>
                  <span className="font-bold text-white">Lun - Sam : 7h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Astreinte Urgence :</span>
                  <span className="font-bold text-red-400">24h / 24 • 7j / 7</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full btn-glow-blue py-3.5 rounded-xl text-xs font-bold text-white"
              >
                Planifier un RDV à {selectedCity}
              </button>
              <button
                onClick={onOpenEmergency}
                className="w-full py-3.5 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 text-xs font-bold flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Urgence Hayange : 03 82 XX XX XX</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
