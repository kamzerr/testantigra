import React, { useState } from 'react';
import { Calculator, Zap, Flame, Euro, ArrowRight, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export default function SavingsCalculator({ onOpenQuote }) {
  const [heatingType, setHeatingType] = useState('fioul'); // fioul, gaz, electric
  const [surface, setSurface] = useState(130);
  const [insulation, setInsulation] = useState('medium'); // poor, medium, good

  // Calculation logic
  let baseCostPerM2 = 22; // Fioul default
  let savingsRatio = 0.55;

  if (heatingType === 'gaz') {
    baseCostPerM2 = 18;
    savingsRatio = 0.42;
  } else if (heatingType === 'electric') {
    baseCostPerM2 = 24;
    savingsRatio = 0.52;
  }

  let insulationMult = 1.0;
  if (insulation === 'poor') insulationMult = 1.3;
  if (insulation === 'good') insulationMult = 0.8;

  const currentAnnualBill = Math.round(surface * baseCostPerM2 * insulationMult);
  const estimatedPacBill = Math.round(currentAnnualBill * (1 - savingsRatio));
  const annualSavings = currentAnnualBill - estimatedPacBill;
  const tenYearsSavings = annualSavings * 10;

  // Estimated Subsidies (MaPrimeRénov' + CEE)
  let estimatedSubsidies = 9500;
  if (surface > 150) estimatedSubsidies = 11000;
  if (surface < 90) estimatedSubsidies = 6500;

  return (
    <section id="savings-calculator" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06070a] border-t border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0050FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0050FF]/10 border border-[#0050FF]/20 text-[#00D6FF] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Simulateur d'Économies PAC Hayange</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculez Vos Économies avec une <span className="text-gradient-blue">Pompe à Chaleur</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Estimez immédiatement vos réductions de facture de chauffage et vos aides de l'État (MaPrimeRénov' & CEE) pour votre domicile à Hayange.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-8 border border-white/10 flex flex-col justify-between">
            
            {/* Input 1: Heating Type */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70">
                1. Mode de Chauffage Actuel
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setHeatingType('fioul')}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    heatingType === 'fioul'
                      ? 'bg-[#e57c35]/20 border-[#e57c35] text-white shadow-lg shadow-orange-500/20'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
                >
                  <Flame className="w-6 h-6 mx-auto mb-2 text-[#e57c35]" />
                  <span className="block text-xs font-bold">Fioul</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHeatingType('gaz')}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    heatingType === 'gaz'
                      ? 'bg-[#0050FF]/20 border-[#0050FF] text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
                >
                  <Zap className="w-6 h-6 mx-auto mb-2 text-[#00D6FF]" />
                  <span className="block text-xs font-bold">Gaz Naturel</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHeatingType('electric')}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    heatingType === 'electric'
                      ? 'bg-[#00D6FF]/20 border-[#00D6FF] text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
                >
                  <Sparkles className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <span className="block text-xs font-bold">Électrique</span>
                </button>
              </div>
            </div>

            {/* Input 2: Surface Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-white/70">
                  2. Surface de la Maison
                </label>
                <span className="text-xl font-extrabold text-[#00D6FF] font-mono">
                  {surface} m²
                </span>
              </div>
              <input
                type="range"
                min="70"
                max="300"
                step="5"
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0050FF]"
              />
              <div className="flex justify-between text-[11px] text-white/40">
                <span>70 m² (Appartement)</span>
                <span>180 m² (Maison Standard)</span>
                <span>300 m² (Grande Propriété)</span>
              </div>
            </div>

            {/* Input 3: Insulation */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70">
                3. Niveau d'Isolation
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'poor', label: 'Ancienne (< 1990)' },
                  { id: 'medium', label: 'Standard (1990-2010)' },
                  { id: 'good', label: 'Excellente (> 2010)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setInsulation(item.id)}
                    className={`py-2.5 px-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                      insulation === item.id
                        ? 'bg-white/15 border-white/30 text-white'
                        : 'bg-white/5 border-white/5 text-white/50 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <p className="text-xs text-white/70">
                <strong className="text-white">Santos Thermique</strong> est certifié RGE QualiPAC à Hayange, ce qui vous donne droit aux aides d'État maximales sans démarche complexe.
              </p>
            </div>

          </div>

          {/* Right Results Panel */}
          <div className="lg:col-span-5 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-[#0050FF]/30 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00D6FF] mb-4">
                <Euro className="w-4 h-4" />
                <span>Résultats de la Simulation</span>
              </div>

              {/* Major Saving Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0050FF]/20 to-[#e57c35]/20 border border-white/10 space-y-2 mb-6">
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                  Économie Annuelle Estimée
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  ~{annualSavings.toLocaleString('fr-FR')} <span className="text-[#00D6FF]">€ / an</span>
                </div>
                <p className="text-xs text-white/60">
                  Soit <strong className="text-emerald-400">~{tenYearsSavings.toLocaleString('fr-FR')} €</strong> économisés sur 10 ans.
                </p>
              </div>

              {/* Detailed Numbers */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 text-sm">
                  <span className="text-white/60">Facture Actuelle Estimée</span>
                  <span className="font-bold text-red-400 font-mono">{currentAnnualBill} € / an</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 text-sm">
                  <span className="text-white/60">Facture avec PAC Santos</span>
                  <span className="font-bold text-emerald-400 font-mono">{estimatedPacBill} € / an</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-[#0050FF]/15 border border-[#0050FF]/30 text-sm">
                  <span className="text-white font-medium">Aides de l'État Cumulables</span>
                  <span className="font-extrabold text-[#00D6FF] font-mono">Jusqu'à {estimatedSubsidies.toLocaleString('fr-FR')} €</span>
                </div>
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full btn-glow-blue py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Bloquer mes Aides & Devis Gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-white/40 mt-2">
                Sans engagement • Étude thermique gratuite à Hayange
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
