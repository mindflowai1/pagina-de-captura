
import React, { useState } from 'react';
import { Zap, Clock, ShieldCheck, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import LeadForm from './LeadForm';

const LandingPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wide animate-pulse">
            <Zap size={14} fill="currentColor" />
            VAGAS PRIORITÁRIAS PARA HOJE
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Seu Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Profissional</span> <br />
            Pronto em 72h.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Pare de perder clientes no Instagram por não ter um ecossistema de vendas. Construímos sua vitrine digital de alta performance com <span className="text-white font-semibold italic underline decoration-cyan-500">velocidade máxima e design de elite.</span>
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-1 rounded-full bg-cyan-500/20">
                <CheckCircle2 size={18} className="text-cyan-400" />
              </div>
              <span>Design Exclusivo e Mobile-First</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-1 rounded-full bg-cyan-500/20">
                <CheckCircle2 size={18} className="text-cyan-400" />
              </div>
              <span>Otimizado para Conversão de Leads</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-1 rounded-full bg-cyan-500/20">
                <CheckCircle2 size={18} className="text-cyan-400" />
              </div>
              <span>Estrutura Pronta em 3 Dias Úteis</span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Prazo Garantido</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>Pagamento Seguro</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass p-8 rounded-2xl border-white/10 shadow-2xl">
            {!submitted ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2 italic">Acelere seu negócio</h2>
                  <p className="text-slate-400 text-sm">Preencha os dados e um especialista entrará em contato agora mesmo via WhatsApp.</p>
                </div>
                <LeadForm onComplete={() => setSubmitted(true)} />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-2">
                  <CheckCircle2 size={40} className="text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Solicitação Recebida!</h2>
                <p className="text-slate-400">Seu cronômetro de 72h está prestes a começar. Fique atento ao seu WhatsApp, nosso especialista já está te chamando.</p>
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-xs text-slate-500">
                    <MessageSquare size={14} />
                    Tempo médio de resposta: 5 min
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-16 text-slate-600 text-xs tracking-widest uppercase">
        © 2024 TechExpress - Soluções Digitais de Alta Performance
      </footer>
    </main>
  );
};

export default LandingPage;
