import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onSubscribe: (email: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    onSubscribe(email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-zinc-950 text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-zinc-800/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-zinc-800/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-emerald-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>🇲🇾 Pelayan Tempatan Cyberjaya & Kuala Lumpur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bersedia memacu kepantasan pasukan teknologi anda?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Sertai ribuan jurutera perisian, pengurus produk, dan pereka bentuk di Malaysia yang menggunakan Nexus setiap hari dengan harga telus dalam Ringgit.
            </p>

            {/* Form */}
            {isSubmitted ? (
              <div className="mt-8 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 text-sm font-medium flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5" />
                <span>Terima kasih! Kami telah menghantar pautan pengaktifan ruang kerja ke e-mel anda.</span>
              </div>
            ) : (
              <form
                id="cta-subscribe-form"
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
              >
                <input
                  id="cta-email-input"
                  type="email"
                  required
                  placeholder="Masukkan e-mel syarikat anda..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 text-sm focus:outline-hidden focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400"
                />
                <button
                  id="cta-submit-btn"
                  type="submit"
                  className="shrink-0 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Mula Percuma</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Checklist */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Percubaan 14 hari percuma
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Bayaran FPX / DuitNow / Kad RM
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Patuh e-Invois LHDN & Akta PDPA
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
