import React, { useState } from 'react';
import { X, CheckCircle, PhoneCall, Send, ShieldCheck, Flame, Droplets, Wrench, Sparkles } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, mode = 'quote' }) {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState(mode === 'emergency' ? 'depannage' : 'pac');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Hayange');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      
      <div className="relative w-full max-w-xl glass-panel-glow p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white/80">
                {mode === 'emergency' ? (
                  <>
                    <PhoneCall className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                    <span className="text-red-400">Urgence Dépannage 24/7</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#00D6FF]" />
                    <span className="text-[#00D6FF]">Demande de Devis Gratuit</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {mode === 'emergency' 
                  ? "Assistance Technique Immédiate à Hayange"
                  : "Votre Projet Thermique Sur-Mesure"}
              </h3>

              <p className="text-xs sm:text-sm text-white/60">
                {mode === 'emergency'
                  ? "Appelez directement notre atelier d'astreinte ou laissez vos coordonnées pour un rappel sous 5 minutes."
                  : "Réponse garantie en moins de 24h par notre maître artisan de Hayange."}
              </p>
            </div>

            {/* Direct Call Banner for Emergency */}
            {mode === 'emergency' && (
              <div className="p-4 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-red-300">Ligne Directe Astreinte 24h/7j</span>
                  <a href="tel:0382000000" className="text-xl font-extrabold text-white font-mono hover:underline">
                    03 82 45 12 00
                  </a>
                </div>
                <a
                  href="tel:0382000000"
                  className="px-4 py-2.5 rounded-xl bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-red-500/40"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Appeler</span>
                </a>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Choice */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white/70">
                  Type d'Intervention
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setServiceType('pac')}
                    className={`p-3 rounded-xl border font-semibold flex items-center gap-2 transition-all ${
                      serviceType === 'pac'
                        ? 'bg-[#0050FF]/25 border-[#0050FF] text-white'
                        : 'bg-white/5 border-white/10 text-white/60'
                    }`}
                  >
                    <Flame className="w-4 h-4 text-[#00D6FF]" />
                    <span>Pompe à Chaleur / PAC</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('plomberie')}
                    className={`p-3 rounded-xl border font-semibold flex items-center gap-2 transition-all ${
                      serviceType === 'plomberie'
                        ? 'bg-[#e57c35]/25 border-[#e57c35] text-white'
                        : 'bg-white/5 border-white/10 text-white/60'
                    }`}
                  >
                    <Droplets className="w-4 h-4 text-[#e57c35]" />
                    <span>Plomberie & Sanitaire</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('chaudiere')}
                    className={`p-3 rounded-xl border font-semibold flex items-center gap-2 transition-all ${
                      serviceType === 'chaudiere'
                        ? 'bg-purple-500/25 border-purple-500 text-white'
                        : 'bg-white/5 border-white/10 text-white/60'
                    }`}
                  >
                    <Wrench className="w-4 h-4 text-purple-400" />
                    <span>Entretien & Chaudière</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('depannage')}
                    className={`p-3 rounded-xl border font-semibold flex items-center gap-2 transition-all ${
                      serviceType === 'depannage'
                        ? 'bg-red-500/25 border-red-500 text-white'
                        : 'bg-white/5 border-white/10 text-white/60'
                    }`}
                  >
                    <PhoneCall className="w-4 h-4 text-red-400" />
                    <span>Dépannage Urgent</span>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1">Nom Complet *</label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Jean Dupont"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#0050FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#0050FF]"
                  />
                </div>
              </div>

              {/* City & Message */}
              <div>
                <label className="block text-xs font-bold text-white/70 mb-1">Ville d'Intervention</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Hayange, Thionville, Metz..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#0050FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 mb-1">Description du besoin (Optionnel)</label>
                <textarea
                  rows="2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Précisez votre projet ou le problème rencontré..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#0050FF]"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full btn-glow-blue py-3.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-xl"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer ma Demande</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-white/40 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Données confidentielles • Réponse sous 24h</span>
              </div>

            </form>

          </div>
        ) : (
          /* Confirmation View */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Demande Transmise avec Succès !</h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto">
                Merci <strong className="text-white">{name}</strong>. Un technicien qualifié de <strong className="text-[#00D6FF]">Santos Thermique Hayange</strong> étudie votre dossier et vous recontacte au <span className="font-mono text-white">{phone}</span>.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold text-xs border border-white/10 hover:bg-white/20 transition-all"
            >
              Fermer la fenêtre
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
