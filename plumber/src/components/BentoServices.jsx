import React from 'react';
import { Flame, Droplets, Wrench, ShieldCheck, ArrowUpRight, Sparkles, Activity, Clock } from 'lucide-react';

export default function BentoServices({ onOpenQuote, onOpenEmergency }) {
  return (
    <section id="bento-services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#040404] border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#e57c35]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#e57c35]" />
            <span>Nos Domaines d'Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ingénierie Thermique & <span className="text-gradient-copper">Plomberie d'Artisan</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Santos Thermique déploie son savoir-faire certifié RGE à Hayange pour tous vos travaux de chauffage, climatisation, plomberie sanitaire et dépannage d'urgence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Pompes à Chaleur (Large Span 2) */}
          <div className="md:col-span-2 glass-panel p-8 sm:p-10 rounded-3xl space-y-6 relative overflow-hidden group hover:border-[#0050FF]/40 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0050FF]/15 rounded-full blur-3xl group-hover:scale-125 transition-transform" />

            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#0050FF]/15 border border-[#0050FF]/30 flex items-center justify-center text-[#00D6FF]">
                <Flame className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 text-xs font-bold bg-[#0050FF]/20 text-[#00D6FF] rounded-full border border-[#0050FF]/30">
                Certifié RGE QualiPAC
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Pompes à Chaleur Air/Eau & Air/Air
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Remplacement de chaudières fioul ou gaz par des systèmes thermodynamiques haute performance. Équilibre parfait entre confort d'hiver, rafraîchissement d'été et factures d'énergie divisées par 3.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-sm font-bold text-white">Dimensionnement Sur-Mesure</span>
                <span className="text-[11px] text-white/50">Étude thermique Hayange</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-sm font-bold text-white">Pilotage IoT / Wi-Fi</span>
                <span className="text-[11px] text-white/50">Contrôle smartphone</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-sm font-bold text-white">Éligible MaPrimeRénov'</span>
                <span className="text-[11px] text-white/50">Jusqu'à 11 000€ d'aides</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={onOpenQuote}
                className="text-xs font-bold text-[#00D6FF] flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                <span>Découvrir nos installations PAC</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Plomberie & Salles de Bains */}
          <div className="glass-panel p-8 rounded-3xl space-y-6 relative overflow-hidden group hover:border-[#e57c35]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#e57c35]/15 border border-[#e57c35]/30 flex items-center justify-center text-[#e57c35]">
              <Droplets className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Plomberie & Salles de Bains Modernes
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Création et rénovation complète de salles de bains sur-mesure à Hayange. Douches à l'italienne, tuyauterie cuivre façonnée à la main, adoucisseurs d'eau et robinetterie haut de gamme.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e57c35]" />
                <span>Réseaux d'eau chaude & froide sanitaire</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e57c35]" />
                <span>Rénovation globale clé en main</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e57c35]" />
                <span>Filtration & adoucisseur anti-calcaire</span>
              </li>
            </ul>

            <button
              onClick={onOpenQuote}
              className="text-xs font-bold text-[#e57c35] flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Étude de projet sanitaire</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Dépannage Urgent 24/7 */}
          <div className="glass-panel p-8 rounded-3xl space-y-6 relative overflow-hidden group border-red-500/20 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <span className="px-2.5 py-1 text-[11px] font-bold bg-red-500/20 text-red-400 rounded-full border border-red-500/30">
                Intervention 30-45 min
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Urgence Plomberie & Chauffage 24h/7j
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Panne de chaudière, fuite d'eau encastrée, canalisation bouchée ou radiateur froid à Hayange ? Notre équipe d'astreinte intervient 7j/7.
              </p>
            </div>

            <button
              onClick={onOpenEmergency}
              className="w-full py-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold text-center flex items-center justify-center gap-2 hover:bg-red-500/30 transition-all"
            >
              <span>Appeler le Service Dépannage</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Entretien & Diagnostic (Span 2) */}
          <div className="md:col-span-2 glass-panel p-8 sm:p-10 rounded-3xl space-y-6 relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Activity className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                Entretien Réglementaire
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Maintenance & Inspection Thermographique
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Contrats d'entretien annuels obligatoires pour PAC et chaudières. Analyse par caméra thermique infrarouge pour identifier les déperditions de chaleur invisibles.
                </p>
              </div>

              <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="block text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Contrat Sérénité Santos
                </span>
                <p className="text-xs text-white/70">
                  Inclut la visite annuelle, le désembouage préventif du circuit et la priorité absolue en cas de dépannage d'hiver.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-bold text-white flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <span>Souscrire un contrat d'entretien</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
