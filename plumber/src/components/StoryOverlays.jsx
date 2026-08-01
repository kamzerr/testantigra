import React from 'react';
import { ShieldCheck, Flame, Cpu, Gauge, Zap, CheckCircle2, PhoneCall, ChevronRight, Award, MapPin } from 'lucide-react';

export default function StoryOverlays({ progress, onOpenQuote, onOpenEmergency }) {
  
  // Calculate visibility opacities and translate offsets for 5 beats
  // Beat 1: 0.00 - 0.15
  // Beat 2: 0.18 - 0.38
  // Beat 3: 0.42 - 0.62
  // Beat 4: 0.66 - 0.84
  // Beat 5: 0.86 - 1.00

  const getBeatStyle = (start, peakStart, peakEnd, end) => {
    if (progress < start || progress > end) {
      return { opacity: 0, transform: 'translateY(25px)', pointerEvents: 'none', display: 'none' };
    }
    let opacity = 1;
    if (progress < peakStart) {
      opacity = (progress - start) / (peakStart - start);
    } else if (progress > peakEnd) {
      opacity = 1 - (progress - peakEnd) / (end - peakEnd);
    }
    const translateY = (1 - opacity) * 20;
    return {
      opacity: Math.max(0, Math.min(1, opacity)),
      transform: `translateY(${translateY}px)`,
      pointerEvents: opacity > 0.4 ? 'auto' : 'none',
      transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
    };
  };

  const styleBeat1 = getBeatStyle(0.0, 0.02, 0.13, 0.17);
  const styleBeat2 = getBeatStyle(0.18, 0.23, 0.35, 0.40);
  const styleBeat3 = getBeatStyle(0.42, 0.47, 0.58, 0.63);
  const styleBeat4 = getBeatStyle(0.65, 0.70, 0.81, 0.85);
  const styleBeat5 = getBeatStyle(0.86, 0.90, 0.98, 1.00);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      
      {/* ==================== BEAT 1: HERO OVERLAY (0% - 15%) ==================== */}
      <div 
        style={styleBeat1}
        className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-12 pointer-events-none"
      >
        <div className="w-full max-w-3xl text-center space-y-4 sm:space-y-6 flex flex-col items-center mx-auto pointer-events-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#e57c35]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white/80">
              HAYANGE (57700) • MOSELLE & VALLÉE DE LA FENSCH
            </span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none font-sans">
            SANTOS <span className="text-gradient-blue">THERMIQUE</span>
          </h1>

          <p className="text-lg sm:text-2xl font-light text-white/80 max-w-2xl">
            Silence. Efficacité. Maîtrise Artisanale.
          </p>

          <p className="text-xs sm:text-base text-white/60 max-w-xl leading-relaxed hidden sm:block">
            L'ingénierie thermique réinventée. Installation certifiée de Pompes à Chaleur, Systèmes de Chauffage & Plomberie Haute Précision à Hayange.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <button
              onClick={onOpenQuote}
              className="btn-glow-blue px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-2 shadow-xl"
            >
              <span>Devis Gratuit</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={onOpenEmergency}
              className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              Urgence 24/7 Hayange
            </button>
          </div>

          {/* Badges bar */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 pt-2 sm:pt-4 text-[11px] sm:text-xs font-semibold text-white/60">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#e57c35]" /> Certifié QualiPAC
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0050FF]" /> Garantie Décennale
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Gaz (PG)
            </span>
          </div>
        </div>
      </div>


      {/* ==================== BEAT 2: DISASSEMBLY / INGÉNIERIE (15% - 40%) ==================== */}
      <div 
        style={styleBeat2}
        className="absolute inset-0 flex items-end sm:items-center justify-center p-4 sm:p-6 lg:p-12 pb-14 sm:pb-0 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto flex justify-start items-center">
          <div className="w-full max-w-md sm:max-w-lg bg-black/60 backdrop-blur-xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-4 shadow-2xl border border-white/10 pointer-events-auto">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#00D6FF]">
              <Cpu className="w-3.5 h-3.5" />
              <span>01 • Ingénierie & Modularité</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Precision-engineered pour la Moselle.
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Corps de chauffe titané et composants modulaires démontables calibrés pour résister aux hivers d'Hayange.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-lg sm:text-xl font-extrabold text-[#00D6FF]">COP &gt; 4.8</span>
                <span className="text-[10px] sm:text-[11px] text-white/50">Rendement Énergétique</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-lg sm:text-xl font-extrabold text-[#e57c35]">19 dB</span>
                <span className="text-[10px] sm:text-[11px] text-white/50">Mode Ultra-Silencieux</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ==================== BEAT 3: SMART CONTROL & SAVINGS (40% - 65%) ==================== */}
      <div 
        style={styleBeat3}
        className="absolute inset-0 flex items-end sm:items-center justify-center p-4 sm:p-6 lg:p-12 pb-14 sm:pb-0 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto flex justify-end items-center">
          <div className="w-full max-w-md sm:max-w-lg bg-black/60 backdrop-blur-xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-4 shadow-2xl border border-white/10 pointer-events-auto">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#e57c35]">
              <Zap className="w-3.5 h-3.5" />
              <span>02 • Éco-Régulation Intelligente</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Jusqu'à 45% d'économies d'énergie.
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Microprocesseur IoT et capteurs de débit. Régulation automatique selon la météo locale à Hayange.
            </p>

            <ul className="space-y-1.5 text-[11px] sm:text-xs text-white/80 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0050FF]" />
                <span>Pilotage Smartphone iOS/Android & IoT</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0050FF]" />
                <span>100% Éligible Aides MaPrimeRénov'</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* ==================== BEAT 4: HYDRAULIQUE & PLOMBERIE (65% - 85%) ==================== */}
      <div 
        style={styleBeat4}
        className="absolute inset-0 flex items-end sm:items-center justify-center p-4 sm:p-6 lg:p-12 pb-14 sm:pb-0 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto flex justify-start items-center">
          <div className="w-full max-w-md sm:max-w-lg bg-black/60 backdrop-blur-xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-4 border-l-4 border-l-[#e57c35] shadow-2xl border border-white/10 pointer-events-auto">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#e57c35]">
              <Gauge className="w-3.5 h-3.5" />
              <span>03 • Plomberie & Maîtrise Hydraulique</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              La pureté du geste de l'artisan.
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Brasure cuivre haute température et désembouage magnétique par nos compagnons plombiers de Hayange.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 rounded-full bg-[#0050FF] flex items-center justify-center font-bold text-[10px] text-white">S</div>
                <div className="w-7 h-7 rounded-full bg-[#e57c35] flex items-center justify-center font-bold text-[10px] text-white">T</div>
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-[10px] text-white">57</div>
              </div>
              <p className="text-[11px] sm:text-xs text-white/60 font-medium">
                <span className="font-bold text-white">+500 installations</span> à Hayange et Vallée de la Fensch.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* ==================== BEAT 5: REASSEMBLY & FINAL CTA (85% - 100%) ==================== */}
      <div 
        style={styleBeat5}
        className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-12 pointer-events-none"
      >
        <div className="w-full max-w-2xl text-center space-y-4 sm:space-y-6 flex flex-col items-center bg-black/60 backdrop-blur-xl p-5 sm:p-10 rounded-2xl sm:rounded-3xl mx-auto shadow-2xl border border-white/10 pointer-events-auto">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
            Une Chaleur Parfaite. <br className="hidden sm:block"/>
            <span className="text-gradient-copper">Une Tranquillité Totale.</span>
          </h2>

          <p className="text-xs sm:text-base text-white/70 max-w-lg leading-relaxed">
            Santos Thermique Hayange. Chauffage, pompe à chaleur, climatisation et plomberie sanitaire.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full justify-center">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto btn-glow-blue px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 shadow-2xl"
            >
              <span>Obtenir un Devis Gratuit</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={onOpenEmergency}
              className="w-full sm:w-auto btn-glow-copper px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 shadow-2xl"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>Appeler l'Atelier (03 82 XX XX XX)</span>
            </button>
          </div>

          <p className="text-[10px] sm:text-xs text-white/40 pt-1">
            Intervention rapide : Hayange, Thionville, Metz, Florange, Algrange, Nilvange...
          </p>
        </div>
      </div>

    </div>
  );
}
