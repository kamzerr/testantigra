import React, { useState } from 'react';
import { Cpu, Gauge, ShieldCheck, Flame, Zap, ArrowRight, Layers, Sparkles } from 'lucide-react';

export default function ComponentExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  const componentsData = [
    {
      id: 0,
      title: "Module Hydraulique Inox & Cuivre",
      badge: "Cœur Hydraulique",
      icon: Gauge,
      accent: "#0050FF",
      description: "Fabriqué avec des collecteurs en cuivre brasé et un circulateur haute efficacité à vitesse variable. Il régule la pression d'eau chaude instantanément à travers les radiateurs ou le plancher chauffant.",
      specs: [
        { label: "Pression Max", value: "6.0 Bar" },
        { label: "Circulateur", value: "Inverter A++" },
        { label: "Matériau", value: "Cuivre & Inox 316L" }
      ],
      highlight: "Conçu pour absorber le calcaire et résister aux variations thermiques extrêmes."
    },
    {
      id: 1,
      title: "Processeur IoT & Régulation Inverter",
      badge: "Cerveau Numérique",
      icon: Cpu,
      accent: "#00D6FF",
      description: "Module électronique de contrôle temps réel avec algorithme prédictif. Ajuste le régime du compresseur selon les conditions météorologiques extérieures de Hayange et l'inertie thermique de votre bâtiment.",
      specs: [
        { label: "Fréquence Échantillonnage", value: "100 Hz" },
        { label: "Module IoT", value: "Wi-Fi / Modbus" },
        { label: "Protection", value: "Anti-gel jusqu'à -25°C" }
      ],
      highlight: "Optimise la consommation électrique milliseconde par milliseconde."
    },
    {
      id: 2,
      title: "Échangeur Thermique en Titanated Inox",
      badge: "Transfert Thermique",
      icon: Flame,
      accent: "#e57c35",
      description: "Plaques brasées à haut rendement offrant une surface d'échange thermique maximale. Transfère les calories captées dans l'air extérieur directement dans le système de chauffage central.",
      specs: [
        { label: "Rendement COP", value: "4.85" },
        { label: "Technologie", value: "Triple Micro-Canaux" },
        { label: "Garantie Pièce", value: "10 Ans" }
      ],
      highlight: "Maximise la récupération de chaleur même lors des hivers les plus froids en Moselle."
    },
    {
      id: 3,
      title: "Double Filtration & Désembouage Magnétique",
      badge: "Protection Puriste",
      icon: ShieldCheck,
      accent: "#10b981",
      description: "Filtre à tamis inox avec barreau magnétique néodyme puissant. Piège 99.8% des boues, particules métalliques et résidus pour maintenir le circuit à son niveau d'usine.",
      specs: [
        { label: "Puissance Aimant", value: "12 000 Gauss" },
        { label: "Filtration", value: "50 Microns" },
        { label: "Vidange", value: "Action Rapide" }
      ],
      highlight: "Évite l'encrassement des circulateurs et prolonge la durée de vie du réseau de 15 ans."
    }
  ];

  const activeComp = componentsData[activeTab];
  const IconComponent = activeComp.icon;

  return (
    <section id="component-explorer" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-white/5">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0050FF]/10 border border-[#0050FF]/20 text-[#00D6FF] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Exploration Technique des Composants</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Anatomie d'un <span className="text-gradient-blue">Système Thermique Parfait</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Chaque module interne sélectionné par Santos Thermique répond à un cahier des charges strict pour garantir robustesse, silence et rendement énergétique optimal.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {componentsData.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                  isActive
                    ? 'bg-white/10 border-[#0050FF] shadow-lg shadow-blue-500/20 text-white'
                    : 'bg-white/5 border-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <TabIcon className="w-5 h-5" style={{ color: isActive ? tab.accent : undefined }} />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">0{tab.id + 1}</span>
                </div>
                <span className="text-xs font-bold leading-tight">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Display Panel */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl border border-white/10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: `${activeComp.accent}20`, border: `1px solid ${activeComp.accent}40` }}
              >
                <IconComponent className="w-5 h-5" style={{ color: activeComp.accent }} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">{activeComp.badge}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{activeComp.title}</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {activeComp.description}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-white/80 font-medium">
                {activeComp.highlight}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white/50 pb-1 border-b border-white/10">
              Spécifications Techniques
            </div>
            {activeComp.specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-xs text-white/60">{spec.label}</span>
                <span className="text-sm font-bold text-white font-mono">{spec.value}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
