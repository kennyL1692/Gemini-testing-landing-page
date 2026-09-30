import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck, CreditCard } from 'lucide-react';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string, billing: 'monthly' | 'annual', seats: number) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [teamSeats, setTeamSeats] = useState<number>(5);

  const plans: Plan[] = [
    {
      id: 'starter',
      name: 'Starter (Percuma)',
      description: 'Alat koordinasi asas untuk pembangun solo dan pasukan permulaan (early startups) di Malaysia.',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Hingga 3 ahli pasukan',
        'Projek aktif tanpa had',
        'Penyegerakan masa-nyata CRDT',
        'Penyambung standard GitHub & Slack',
        'Sokongan komuniti WhatsApp/Discord',
        'Sejarah aktiviti 7 hari',
      ],
      ctaText: 'Mula Percuma',
    },
    {
      id: 'professional',
      name: 'Profesional',
      description: 'Pilihan utama syarikat teknologi tempatan, agensi digital, dan pasukan kejuruteraan pesat.',
      monthlyPrice: 79,
      annualPrice: 65,
      highlighted: true,
      badge: 'Paling Popular di Malaysia',
      features: [
        'Ahli pasukan tanpa had',
        'Automasi alur kerja tanpa had',
        'Analisis halaju sprint & metrik agile',
        'Had webhook & API keutamaan tinggi',
        'Kebenaran berasaskan peranan terperinci',
        'Pelayan serantau kependaman rendah (Cyberjaya/KL)',
        'Sokongan teknikal pantas melalui e-mel & chat',
      ],
      ctaText: 'Cuba Percuma 14 Hari',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Korporat',
      description: 'Prasarana awan khas, pematuhan akta PDPA Malaysia, integrasi keselamatan bank, dan SLA 99.99%.',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Semua ciri dalam Profesional',
        'SSO SAML / OIDC (Okta, Azure AD, Google)',
        'Residensi data tempatan Malaysia (Cyberjaya DC)',
        'Pematuhan PDPA 2010 & Bank Negara RMIT standard',
        'Invois e-Invois LHDN & pembayaran FPX Korporat',
        'Pengurus Akaun Teknikal khas di Kuala Lumpur',
        'Jaminan perjanjian tahap perkhidmatan SLA 99.99%',
      ],
      ctaText: 'Hubungi Pasukan Korporat',
    },
  ];

  const calculateTotal = (basePrice: number) => {
    if (basePrice === 0) return 'RM 0';
    const total = basePrice * teamSeats;
    return `RM ${total.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-zinc-100/60 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-3">
            <span>🇲🇾 Harga Rasmi Malaysia dalam Ringgit (MYR)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Pelan Telus & Berpatutan Untuk Pasukan Tempatan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Dilesenkan dalam Ringgit Malaysia (RM). Tiada yuran tersembunyi, tiada caj penukaran mata wang asing.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-zinc-200/80 rounded-xl border border-zinc-300/70">
            <button
              id="billing-monthly-btn"
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Bayaran Bulanan
            </button>
            <button
              id="billing-annual-btn"
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <span>Bayaran Tahunan</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                Jimat 20%
              </span>
            </button>
          </div>

          {/* Interactive Team Size Calculator Slider */}
          <div className="mt-8 max-w-md mx-auto p-4 bg-white rounded-xl border border-zinc-200 shadow-xs">
            <div className="flex justify-between items-center text-sm font-medium text-zinc-700 mb-2">
              <span>Saiz Pasukan (Pengguna):</span>
              <span className="font-bold text-zinc-900 px-2.5 py-0.5 bg-zinc-100 rounded-md">
                {teamSeats} {teamSeats === 1 ? 'pengguna' : 'pengguna'}
              </span>
            </div>
            <input
              id="team-seat-slider"
              type="range"
              min="1"
              max="50"
              value={teamSeats}
              onChange={(e) => setTeamSeats(parseInt(e.target.value))}
              className="w-full accent-zinc-900 cursor-pointer h-2 bg-zinc-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
              <span>1 pengguna</span>
              <span>25 pengguna</span>
              <span>50+ pengguna</span>
            </div>
          </div>

          {/* Local Malaysian Payment Methods Banner */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500">
            <span className="font-medium text-zinc-700">Kaedah Pembayaran Tempatan Diterima:</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 font-bold text-zinc-800">
              FPX Online Banking
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 font-bold text-pink-700">
              DuitNow QR
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 font-bold text-zinc-800">
              Kad Kredit / Debit Tempatan
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 font-bold text-blue-800">
              Touch 'n Go eWallet
            </span>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                  isHighlighted
                    ? 'bg-zinc-900 text-white border-2 border-zinc-900 shadow-xl shadow-zinc-900/10 -translate-y-1'
                    : 'bg-white text-zinc-900 border border-zinc-200 shadow-xs hover:border-zinc-300'
                }`}
              >
                {/* Badge if highlighted */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-500 text-zinc-950 font-bold text-xs shadow-xs tracking-wide">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`text-xl font-bold ${isHighlighted ? 'text-white' : 'text-zinc-900'}`}>
                      {plan.name}
                    </h3>
                  </div>
                  
                  <p className={`text-sm mb-6 ${isHighlighted ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div className="mb-6 pb-6 border-b border-zinc-200/40">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isHighlighted ? 'text-white' : 'text-zinc-950'}`}>
                        {price === 0 ? 'RM 0' : `RM ${price}`}
                      </span>
                      {price > 0 && (
                        <span className={`text-xs ${isHighlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          /pengguna /bulan
                        </span>
                      )}
                    </div>
                    {price > 0 && (
                      <p className={`text-xs mt-2 font-medium ${isHighlighted ? 'text-emerald-400' : 'text-zinc-600'}`}>
                        Jumlah: {calculateTotal(price)}/bulan untuk {teamSeats} pengguna (dibil secara {billingCycle === 'annual' ? 'tahunan' : 'bulanan'})
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isHighlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Ciri-ciri disertakan:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlighted ? 'text-emerald-400' : 'text-zinc-900'
                          }`}
                        />
                        <span className={isHighlighted ? 'text-zinc-200' : 'text-zinc-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA button */}
                <button
                  id={`select-plan-btn-${plan.id}`}
                  onClick={() => onSelectPlan(plan.name, billingCycle, teamSeats)}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 active:scale-98 ${
                    isHighlighted
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100 shadow-md'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Notice Footer */}
        <div className="mt-12 text-center text-xs text-zinc-500 max-w-xl mx-auto space-y-1">
          <p>
            Memerlukan perolehan korporat tempatan, pesanan belian (PO), atau e-Invois LHDN yang patuh undang-undang Malaysia?{' '}
            <button
              onClick={() => onSelectPlan('Enterprise Custom', billingCycle, teamSeats)}
              className="font-semibold text-zinc-800 underline underline-offset-2"
            >
              Bincang bersama wakil kami di Malaysia
            </button>
          </p>
          <p className="text-[11px] text-zinc-400">
            *Semua harga tertakluk kepada Cukai Perkhidmatan (SST) 8% mengikut Akta Cukai Perkhidmatan Malaysia.
          </p>
        </div>

      </div>
    </section>
  );
};
