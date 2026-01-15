
import React, { useState } from 'react';
import { ArrowRight, Loader2, User, MessageSquare } from 'lucide-react';

interface LeadFormProps {
  onComplete: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const formatPhone = (val: string) => {
    if (!val) return "";
    let clean = val.replace(/\D/g, "");
    if (clean.length <= 2) return `(${clean}`;
    if (clean.length <= 7) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || phone.length < 10) return;
    
    setLoading(true);
    
    try {
      const webhookUrl = 'https://n8n-n8n-start.kof6cn.easypanel.host/webhook/f5862221-54eb-48f0-a1e7-2d760f3b56f6';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          phone: formatPhone(phone),
          raw_phone: phone,
          source: 'instagram_ad_express_site',
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }

      onComplete();
    } catch (error) {
      console.error('Erro na submissão:', error);
      onComplete();
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Input de Nome */}
      <div className="group relative space-y-2">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
            <User size={10} className="text-cyan-500" />
            Identificação
          </label>
        </div>
        <div className="relative">
          <input
            required
            type="text"
            placeholder="Seu nome ou empresa"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-4 pl-5 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 text-sm shadow-inner group-hover:border-white/10"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-focus-within:via-cyan-500/5 pointer-events-none transition-all duration-500"></div>
        </div>
      </div>

      {/* Input de Telefone */}
      <div className="group relative space-y-2">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
            <MessageSquare size={10} className="text-cyan-500" />
            WhatsApp
          </label>
        </div>
        <div className="relative">
          <input
            required
            type="tel"
            placeholder="(00) 00000-0000"
            value={formatPhone(phone)}
            onChange={handlePhoneChange}
            className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-4 pl-5 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 text-sm shadow-inner group-hover:border-white/10"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-focus-within:via-cyan-500/5 pointer-events-none transition-all duration-500"></div>
        </div>
      </div>

      {/* Botão de Ação */}
      <div className="pt-2">
        <button
          disabled={loading || !name || phone.length < 10}
          type="submit"
          className="relative w-full group overflow-hidden rounded-2xl p-[1px] transition-all active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none"
        >
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] opacity-100"></div>
          
          <div className="relative bg-white text-black py-4 px-6 rounded-[15px] flex items-center justify-center gap-3 transition-colors group-hover:bg-transparent group-hover:text-white">
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span className="font-black text-xs uppercase tracking-tight">Quero meu site em 3 dias</span>
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
              </>
            )}
          </div>
        </button>
      </div>

      {/* Trust Tagline */}
      <div className="flex items-center justify-center gap-4 opacity-30 pt-1">
        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-slate-500"></div>
        <p className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.3em]">
          Especialista disponível agora
        </p>
        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-slate-500"></div>
      </div>
      
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </form>
  );
};

export default LeadForm;
