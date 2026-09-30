import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Star } from 'lucide-react';

interface HeroProps {
  onStartTrial: (email: string) => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTrial, onOpenDemo }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubmitting(true);
    setTimeout(() => {
      onStartTrial(email);
      setEmail('');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-zinc-200/40 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Status Release Pill */}
          <div
            id="hero-status-pill"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-800 mb-8 shadow-xs"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-600">Pelayan Malaysia (KL & Cyberjaya)</span>
            <span className="text-zinc-300">|</span>
            <span className="font-semibold text-zinc-900">Kependaman &lt; 5ms</span>
          </div>

          {/* Core Headline */}
          <h1
            id="hero-main-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]"
          >
            Ruang kerja tangkas untuk pasukan teknologi Malaysia
          </h1>

          {/* Subheading */}
          <p
            id="hero-subheading"
            className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl font-normal"
          >
            Satukan roadmap projek, pantau sprint kejuruteraan, dan autokan penghantaran
            perisian anda dalam satu antara muka berprestasi tinggi berharga dalam Ringgit.
          </p>

          {/* Action Email Form */}
          <form
            id="hero-quickstart-form"
            onSubmit={handleSubmit}
            className="mt-9 w-full max-w-md flex flex-col sm:flex-row items-center gap-2.5 p-1.5 bg-white rounded-xl border border-zinc-200 shadow-sm focus-within:border-zinc-400 focus-within:ring-2 focus-within:ring-zinc-900/10 transition-all"
          >
            <input
              id="hero-email-input"
              type="email"
              required
              placeholder="Masukkan e-mel kerja anda..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 bg-transparent focus:outline-hidden"
            />
            <button
              id="hero-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-xs disabled:opacity-70 whitespace-nowrap"
            >
              <span>{isSubmitting ? 'Memproses...' : 'Cuba Percuma'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Secondary reassurance */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700" />
              Percubaan 14 hari percuma
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700" />
              Tiada kad kredit diperlukan
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700" />
              Dilesenkan dalam RM
            </span>
          </div>

          {/* Social Proof Bar */}
          <div
            id="hero-social-proof"
            className="mt-12 pt-8 border-t border-zinc-200/80 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Ahli pasukan Malaysia"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Ahli pasukan Malaysia"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Ahli pasukan Malaysia"
                  referrerPolicy="no-referrer"
                />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-semibold text-white ring-2 ring-white">
                  🇲🇾
                </div>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-zinc-900">4,500+ pembangun & pasukan di Malaysia</p>
                <p className="text-zinc-500">Dari syarikat startup hingga konglomerat tempatan</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-zinc-900">4.9 / 5</span>
                <span className="text-zinc-500 ml-1">penarafan tertinggi industri</span>
              </div>
            </div>

            <button
              id="hero-open-demo-btn"
              onClick={onOpenDemo}
              className="text-xs font-semibold text-zinc-900 hover:text-zinc-700 underline underline-offset-4 flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5 text-zinc-800" />
              <span>Lihat Demo Interaktif</span>
            </button>
          </div>

          {/* Graphic: Hero Product Mockup Graphic */}
          <div className="mt-12 w-full max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none" />
            <div className="relative rounded-2xl bg-zinc-950 p-2 sm:p-3 border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800/80 bg-zinc-900/60 rounded-t-xl mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-[11px] font-mono text-zinc-400 ml-2">workspace.app.internal — live preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SYNCED
                  </span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-zinc-900">
                <img
                  src="/src/assets/images/hero_workspace_preview_1790747862661.jpg"
                  alt="Modern workspace interface showing real-time collaboration canvas and project pipeline"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 rounded-xl px-3.5 py-2 text-left shadow-lg">
                  <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Ultra-fast 28ms latency
                  </p>
                  <p className="text-[10px] text-zinc-400">Zero-configuration distributed sync</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
