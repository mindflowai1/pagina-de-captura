
import React, { useState } from 'react';
import { ArrowRight, Loader2, Phone, User } from 'lucide-react';

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
        throw new Error('Erro ao enviar dados para o webhook');
      }

      onComplete();
    } catch (error) {
      console.error('Erro na submissão:', error);
      // Mesmo com erro, chamamos o onComplete para não quebrar a experiência do usuário
      // em um cenário de captura de lead, ou poderíamos exibir um feedback de erro amigável.
      onComplete();
    } finally {
      setLoading(false);
    }
  };

  // Simple phone mask simulation for (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Nome Completo</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            required
            type="text"
            placeholder="Como podemos te chamar?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">WhatsApp</label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            required
            type="tel"
            placeholder="(00) 00000-0000"
            value={formatPhone(phone)}
            onChange={handlePhoneChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          />
        </div>
      </div>

      <button
        disabled={loading || !name || phone.length < 10}
        type="submit"
        className="group w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold py-5 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:hover:shadow-none disabled:active:scale-100"
      >
        <div className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              QUERO MEU SITE EM 3 DIAS
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </>
          )}
        </div>
        <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>

      <p className="text-[10px] text-center text-slate-500 leading-tight">
        Ao clicar, você concorda em receber o contato de um de nossos especialistas em desenvolvimento ágil via WhatsApp.
      </p>
    </form>
  );
};

export default LeadForm;
