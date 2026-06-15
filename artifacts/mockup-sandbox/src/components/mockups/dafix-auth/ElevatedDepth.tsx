import React, { useState } from "react";
import { Check, Globe, Moon, Eye, EyeOff } from "lucide-react";

export function ElevatedDepth() {
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState<"cliente" | "funcionario">("cliente");

  const segBase = "flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ";
  const segActive = "bg-white/10 text-white shadow-sm border border-white/10";
  const segInactive = "text-slate-400 hover:text-slate-200";

  return (
    <div className="min-h-screen w-full bg-[#030712] flex flex-col md:flex-row overflow-hidden text-slate-100" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap');

        .ed-display { font-family: 'Sora', system-ui, sans-serif; }

        @keyframes ed-float1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes ed-float2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(15px) scale(0.95); }
        }
        @keyframes ed-fadeup {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ed-orb1 { animation: ed-float1 8s ease-in-out infinite; }
        .ed-orb2 { animation: ed-float2 11s ease-in-out infinite; }
        .ed-s1 { animation: ed-fadeup 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .ed-s2 { animation: ed-fadeup 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .ed-s3 { animation: ed-fadeup 0.6s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
        .ed-s4 { animation: ed-fadeup 0.6s cubic-bezier(0.16,1,0.3,1) 0.45s both; }

        .ed-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .ed-grad-border {
          position: relative;
        }
        .ed-grad-border::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 2rem;
          background: linear-gradient(135deg, rgba(59,130,246,0.45), rgba(147,51,234,0.35), rgba(255,255,255,0.06));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .ed-stat {
          background: rgba(15,23,42,0.45);
          border: 1px solid rgba(255,255,255,0.04);
          backdrop-filter: blur(10px);
          position: relative;
        }
        .ed-stat::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px rgba(59,130,246,0.18);
          pointer-events: none;
        }
        .ed-input {
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.3s ease;
        }
        .ed-input:focus-within {
          border-color: rgba(96,165,250,0.4);
          box-shadow: 0 0 0 4px rgba(59,130,246,0.1);
        }
        .ed-tab-glow { text-shadow: 0 0 14px rgba(96,165,250,0.7); }
      `}</style>

      {/* Left Panel */}
      <div className="relative hidden md:flex flex-col w-[46%] p-10 lg:p-14 justify-between bg-gradient-to-br from-[#0a1128] via-[#060b19] to-[#020409] border-r border-white/5" style={{ isolation: "isolate" }}>
        <div className="absolute inset-0 ed-grid opacity-40" style={{ zIndex: 0 }} />
        <div className="ed-orb1 absolute top-[-8%] left-[-8%] w-[440px] h-[440px] bg-blue-600/20 rounded-full" style={{ filter: "blur(110px)", zIndex: 0 }} />
        <div className="ed-orb2 absolute bottom-[-8%] right-[-8%] w-[500px] h-[500px] bg-purple-600/15 rounded-full" style={{ filter: "blur(130px)", zIndex: 0 }} />

        {/* Logo */}
        <div className="relative ed-s1 flex items-center gap-3" style={{ zIndex: 1 }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg,#3b82f6,#7c3aed)", boxShadow: "0 8px 20px rgba(59,130,246,0.25)" }}>
            <span className="ed-display font-bold text-xl text-white">D</span>
          </div>
          <span className="ed-display font-bold text-2xl tracking-tight text-white">Dafix</span>
        </div>

        {/* Headline */}
        <div className="relative ed-s2 my-auto mt-16" style={{ zIndex: 1 }}>
          <h1 className="ed-display font-extrabold leading-[1.08] mb-5" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", letterSpacing: "-0.035em", background: "linear-gradient(135deg,#fff 30%,#bfdbfe 70%,#8b5cf6 110%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            A plataforma segura para gerir clientes e equipe.
          </h1>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-md mb-10">
            Tecnologia confiável, experiência impecável. Tudo em um só lugar.
          </p>

          <ul className="space-y-4 mb-12">
            {["Plataforma 100% segura", "Criptografia de ponta a ponta", "Atendimento 24 horas"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                <span className="relative w-5 h-5 flex-none rounded-full flex items-center justify-center" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.28)" }}>
                  <span className="absolute inset-0 rounded-full" style={{ background: "rgba(96,165,250,0.18)", filter: "blur(4px)" }} />
                  <Check className="w-3 h-3 text-blue-400 relative z-10" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="relative ed-s3 grid grid-cols-3 gap-3" style={{ zIndex: 1 }}>
          {[
            { num: "+10.000", label: "usuários ativos" },
            { num: "99,9%", label: "disponibilidade" },
            { num: "24/7", label: "suporte ativo" },
          ].map((s, i) => (
            <div key={i} className="ed-stat rounded-2xl p-4 flex flex-col gap-1">
              <span className="ed-display font-bold text-white" style={{ fontSize: "1.35rem", letterSpacing: "-0.02em" }}>{s.num}</span>
              <span className="text-slate-400 text-xs font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col relative" style={{ background: "radial-gradient(120% 100% at 60% 0%, rgba(59,130,246,0.04) 0%, transparent 50%), #070d1a" }}>
        {/* Topbar */}
        <div className="absolute top-6 right-6 flex items-center gap-2.5 z-20">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-slate-300 transition-all hover:text-white" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}>
            <Globe className="w-3.5 h-3.5" />
            PT
          </button>
          <button className="p-2 rounded-full text-slate-400 hover:text-slate-200 transition-colors" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}>
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-[440px] ed-s4">

            {/* Card */}
            <div className="ed-grad-border rounded-[2rem]" style={{ background: "rgba(14,22,44,0.55)", backdropFilter: "blur(24px)", boxShadow: "0 40px 80px -24px rgba(0,0,0,0.6)" }}>
              <div className="p-8 lg:p-10">

                {/* Tabs */}
                <div className="flex relative mb-8 border-b border-white/10">
                  <button className="flex-1 pb-4 text-center ed-display font-bold text-lg ed-tab-glow text-white relative">
                    Login
                    <div className="absolute bottom-[-1px] left-0 w-full h-[2px] rounded-full" style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)", boxShadow: "0 0 10px rgba(59,130,246,0.5)" }} />
                  </button>
                  <button className="flex-1 pb-4 text-center ed-display font-semibold text-lg text-slate-500 hover:text-slate-300 transition-colors">
                    Cadastro
                  </button>
                </div>

                <div className="mb-7">
                  <h2 className="ed-display font-bold text-white mb-1" style={{ fontSize: "1.55rem", letterSpacing: "-0.025em" }}>Acesse sua conta</h2>
                  <p className="text-slate-400 text-sm">Entre como cliente para continuar na Dafix.</p>
                </div>

                {/* Segmented control */}
                <div className="flex p-1 mb-6 rounded-xl border border-white/5" style={{ background: "rgba(5,10,25,0.6)" }}>
                  <button onClick={() => setProfile("cliente")} className={segBase + (profile === "cliente" ? segActive : segInactive)}>
                    👤 Cliente
                  </button>
                  <button onClick={() => setProfile("funcionario")} className={segBase + (profile === "funcionario" ? segActive : segInactive)}>
                    💼 Funcionário
                  </button>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 tracking-wider uppercase pl-0.5">E-mail</label>
                    <div className="ed-input rounded-xl overflow-hidden flex items-center">
                      <span className="pl-4 pr-2 text-slate-500">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 7L4 6v.01L12 11l8-5V6l-8 5Z"/></svg>
                      </span>
                      <input type="email" placeholder="voce@exemplo.com" className="flex-1 bg-transparent py-3.5 pr-4 text-white text-sm placeholder-slate-600 focus:outline-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between pl-0.5 pr-0.5">
                      <label className="text-xs font-bold text-slate-400 tracking-wider uppercase">Senha</label>
                      <button type="button" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">Esqueci minha senha</button>
                    </div>
                    <div className="ed-input rounded-xl overflow-hidden flex items-center">
                      <span className="pl-4 pr-2 text-slate-500">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm3 8H9V6a3 3 0 0 1 6 0v3Z"/></svg>
                      </span>
                      <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="flex-1 bg-transparent py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none font-mono" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="pr-4 pl-2 text-slate-500 hover:text-slate-300 transition-colors">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="w-full mt-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all flex items-center justify-center gap-2 group" style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", boxShadow: "0 0 20px rgba(59,130,246,0.28)" }}>
                    Entrar
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </form>

                <div className="flex items-center justify-center gap-1.5 mt-6 text-slate-600 text-xs">
                  <svg viewBox="0 0 24 24" width="13" height="13"><path fill="currentColor" d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4Z"/></svg>
                  Seus dados são protegidos e criptografados.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
