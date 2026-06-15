import React, { useState } from "react";
import { ArrowRight, Mail, Lock, ShieldCheck, Globe } from "lucide-react";

export function StructuredClarity() {
  const [activeTab, setActiveTab] = useState<"login" | "cadastro">("login");
  const [activeProfile, setActiveProfile] = useState<"cliente" | "funcionario">("cliente");

  const tabBase = "flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ";
  const tabActive = "bg-slate-800 text-white shadow-sm";
  const tabInactive = "text-slate-500 hover:text-slate-700";

  const profileBase = "flex-1 py-3 px-4 rounded-xl text-sm font-bold border transition-all duration-200 ";
  const profileActive = "bg-blue-600 border-blue-600 text-white shadow-md";
  const profileInactive = "bg-transparent border-slate-200 text-slate-600 hover:border-slate-300";

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", background: "#f8fafc" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap');
        .sc-display { font-family: 'Sora', system-ui, sans-serif; }
        @keyframes sc-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-22px) scale(1.04); }
        }
        @keyframes sc-fadeup {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sc-orb1 { animation: sc-float 8s ease-in-out infinite; }
        .sc-orb2 { animation: sc-float 6.5s ease-in-out infinite reverse; }
        .sc-s1 { animation: sc-fadeup 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .sc-s2 { animation: sc-fadeup 0.7s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .sc-s3 { animation: sc-fadeup 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        .sc-s4 { animation: sc-fadeup 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
        .sc-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .sc-input:focus-within { box-shadow: 0 0 0 3px rgba(37,99,235,0.15); border-color: #2563eb; }
      `}</style>

      {/* Left Panel */}
      <div className="relative w-full lg:w-[46%] overflow-hidden flex flex-col p-10 lg:p-16 text-white" style={{ background: "#0a1128", zIndex: 0 }}>
        <div className="absolute inset-0 sc-grid opacity-25 pointer-events-none" />
        <div className="sc-orb1 absolute rounded-full pointer-events-none" style={{ top: "-20%", left: "-10%", width: "65%", height: "65%", background: "rgba(37,99,235,0.28)", filter: "blur(110px)" }} />
        <div className="sc-orb2 absolute rounded-full pointer-events-none" style={{ bottom: "-20%", right: "-10%", width: "55%", height: "55%", background: "rgba(67,56,202,0.18)", filter: "blur(100px)" }} />

        {/* Logo */}
        <div className="sc-s1 relative flex items-center gap-3 mb-16" style={{ zIndex: 1 }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3b82f6,#4338ca)", boxShadow: "0 8px 20px rgba(59,130,246,0.3)" }}>
            <span className="sc-display font-bold text-2xl text-white">D</span>
          </div>
          <span className="sc-display font-bold text-2xl tracking-tight">Dafix</span>
        </div>

        {/* Content */}
        <div className="sc-s2 relative flex-1 flex flex-col justify-center max-w-xl" style={{ zIndex: 1 }}>
          <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-5">Gestão Inteligente</p>
          <h1 className="sc-display font-extrabold leading-[1.08] mb-10" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", letterSpacing: "-0.04em", background: "linear-gradient(135deg,#fff 40%,#bfdbfe 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Sua operação,<br />no controle.
          </h1>

          <div className="space-y-7 mb-12">
            {[
              { num: "01", title: "Plataforma 100% segura", desc: "Controle todos os chamados e serviços em uma única plataforma confiável." },
              { num: "02", title: "Criptografia de ponta a ponta", desc: "Visibilidade total do status e andamento de cada solicitação com segurança." },
              { num: "03", title: "Atendimento 24 horas", desc: "Suporte ativo a qualquer hora para clientes e funcionários." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <span className="sc-display font-bold text-2xl xl:text-3xl leading-none mt-1 transition-colors" style={{ color: "rgba(59,130,246,0.35)" }}>{item.num}</span>
                <div>
                  <h3 className="sc-display font-bold text-base text-slate-100 mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="sc-s3 relative flex items-center border-t pt-8" style={{ borderColor: "rgba(148,163,184,0.12)", zIndex: 1 }}>
          <div className="flex-1 pr-6">
            <p className="sc-display font-bold text-3xl text-white mb-1">+10k</p>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Usuários Ativos</p>
          </div>
          <div className="w-px h-12 mx-2" style={{ background: "rgba(148,163,184,0.15)" }} />
          <div className="flex-1 px-6">
            <p className="sc-display font-bold text-3xl text-white mb-1">99,9%</p>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Disponibilidade</p>
          </div>
          <div className="w-px h-12 mx-2" style={{ background: "rgba(148,163,184,0.15)" }} />
          <div className="flex-1 pl-6">
            <p className="sc-display font-bold text-3xl text-white mb-1">24/7</p>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Suporte</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 relative flex flex-col justify-center items-center p-6 lg:p-12" style={{ background: "#f1f5f9", zIndex: 10 }}>
        {/* Topbar */}
        <div className="absolute top-6 right-8 flex items-center gap-6 text-sm font-semibold text-slate-500">
          <a href="#" className="hover:text-slate-800 transition-colors">Ajuda</a>
          <div className="flex items-center gap-1.5 text-slate-800">
            <Globe className="w-4 h-4 text-blue-600" />
            <span style={{ borderBottom: "2px solid #2563eb", paddingBottom: "1px" }}>PT</span>
          </div>
        </div>

        <div className="sc-s4 w-full max-w-md">
          {/* Auth Card */}
          <div className="rounded-[2rem] p-8 lg:p-10" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 20px 60px -16px rgba(15,23,42,0.14), 0 0 0 1px rgba(255,255,255,0.5)" }}>

            {/* Tabs */}
            <div className="flex p-1 rounded-2xl mb-8" style={{ background: "rgba(226,232,240,0.7)" }}>
              <button
                className={tabBase + (activeTab === "login" ? tabActive : tabInactive)}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={tabBase + (activeTab === "cadastro" ? tabActive : tabInactive)}
                onClick={() => setActiveTab("cadastro")}
              >
                Cadastro
              </button>
            </div>

            <div className="mb-7">
              <h2 className="sc-display font-bold text-slate-900 mb-2" style={{ fontSize: "1.75rem", letterSpacing: "-0.03em" }}>Bem-vindo de volta</h2>
              <p className="text-slate-500 text-sm">Insira suas credenciais para acessar sua conta.</p>
            </div>

            {/* Profile Toggle */}
            <div className="flex gap-3 mb-7">
              <button
                className={profileBase + (activeProfile === "cliente" ? profileActive : profileInactive)}
                onClick={() => setActiveProfile("cliente")}
                style={activeProfile === "cliente" ? { boxShadow: "0 4px 14px rgba(37,99,235,0.22)" } : {}}
              >
                Cliente
              </button>
              <button
                className={profileBase + (activeProfile === "funcionario" ? profileActive : profileInactive)}
                onClick={() => setActiveProfile("funcionario")}
                style={activeProfile === "funcionario" ? { boxShadow: "0 4px 14px rgba(37,99,235,0.22)" } : {}}
              >
                Funcionário
              </button>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 block ml-1">Email</label>
                <div className="relative group sc-input rounded-xl border transition-all" style={{ border: "1.5px solid #e2e8f0", background: "rgba(248,250,252,0.6)" }}>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                  </div>
                  <input
                    type="email"
                    placeholder="voce@exemplo.com"
                    className="w-full pl-11 pr-4 py-3.5 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-bold text-slate-700">Senha</label>
                  <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">Esqueci minha senha</a>
                </div>
                <div className="relative group sc-input rounded-xl border transition-all" style={{ border: "1.5px solid #e2e8f0", background: "rgba(248,250,252,0.6)" }}>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-[18px] h-[18px]" />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3.5 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
                  />
                </div>
              </div>

              <button type="submit" className="w-full mt-2 group relative overflow-hidden rounded-xl py-3.5 flex items-center justify-center gap-2 font-bold text-white text-sm transition-all" style={{ background: "linear-gradient(135deg,#4338ca,#2563eb)", boxShadow: "0 6px 20px rgba(37,99,235,0.28)" }}>
                <span className="sc-display">Entrar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {/* Footer */}
            <div className="mt-7 flex items-center justify-center gap-2 text-slate-400 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Seus dados são protegidos e criptografados.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
