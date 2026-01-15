import React, { useState } from 'react';
import { Zap, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import LeadForm from './LeadForm';

const LandingPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center bg-[#020617] text-white overflow-hidden selection:bg-cyan-500/30 py-8 px-4">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Glow Gradients */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen opacity-40"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-cyan-500/05 border border-cyan-500/10 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-indigo-500/05 border border-indigo-500/10 rounded-full animate-float blur-3xl" style={{ animationDelay: '-3s' }}></div>
        
        {/* Animated Particles/Orbs */}
        <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-cyan-400 rounded-full animate-orbit opacity-40"></div>
        <div className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 bg-indigo-400 rounded-full animate-orbit opacity-30" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.015]"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="text-center space-y-6 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-[10px] font-black tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Impacto Digital Total
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1] md:leading-[1]">
              <span className="block text-slate-200">Domine o</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400">
                Digital Agora.
              </span>
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-white">Em 72 Horas.</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-500/30 blur-[2px]"></span>
              </span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm mx-auto font-medium">
              Abandone o comum. Imponha uma <span className="text-white">presença digital impactante</span> que projeta sua marca como autoridade máxima.
            </p>
          </div>
        </div>

        {/* Form Container - Enhanced Realce */}
        <div className="w-full max-w-[400px] mx-auto relative group">
           {/* Subtle Glow Behind Form */}
           <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
           
           <div className="relative glass rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl">
              {!submitted ? (
                <div className="space-y-8">
                  <div className="text-center space-y-3">
                    <h3 className="text-white font-black text-2xl tracking-tight uppercase">Assuma o controle</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      Preencha agora. Um especialista entrará em contato <span className="text-cyan-400 font-bold underline decoration-cyan-400/30 underline-offset-4">via WhatsApp</span> em poucos minutos.
                    </p>
                  </div>
                  
                  <LeadForm onComplete={() => setSubmitted(true)} />
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center text-center space-y-5 animate-in fade-in zoom-in duration-700">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                    <CheckCircle2 size={36} className="text-cyan-400" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Sinal Recebido</h2>
                    <p className="text-slate-400 text-sm font-medium">
                      Sua presença de impacto começa agora. <br/>Verifique suas notificações.
                    </p>
                  </div>
                </div>
              )}
           </div>
        </div>

        {/* Trust Footer */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-40">
          <div className="flex items-center gap-2 text-[10px] text-slate-300 uppercase tracking-[0.25em] font-black">
            <CheckCircle2 size={12} className="text-cyan-500" />
            Impacto Brutal
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-300 uppercase tracking-[0.25em] font-black">
             <Clock size={12} className="text-cyan-500" />
            Express Launch
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-300 uppercase tracking-[0.25em] font-black">
             <ShieldCheck size={12} className="text-cyan-500" />
            Design Elite
          </div>
        </div>

        <footer className="text-center mt-4">
           <p className="text-[10px] text-slate-800 uppercase tracking-[0.5em] font-black">
            TechExpress Architecture &bull; Domination
          </p>
        </footer>

      </div>
    </main>
  );
};

export default LandingPage;