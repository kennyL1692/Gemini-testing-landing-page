import React, { useState } from 'react';
import { Star, Quote, Building2, TrendingUp } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'engineering' | 'product'>('all');

  const testimonials: (Testimonial & { category: 'engineering' | 'product' })[] = [
    {
      id: '1',
      category: 'engineering',
      quote:
        'Nexus menggantikan pelbagai alat pengurusan kami. Dengan penjimatan harga dalam Ringgit dan pelayan awan tempatan di Cyberjaya, kependaman sprint kami bertambah baik sebanyak 40%.',
      author: 'Marcus Vance Razali',
      role: 'VP of Engineering',
      company: 'Kinetic Tech Malaysia (Bangsar South)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      metrics: '38% pecutan sprint mingguan',
    },
    {
      id: '2',
      category: 'product',
      quote:
        'Sangat mudah untuk pasukan reka bentuk UI/UX dan jurutera kami di KL Sentral dan Pulau Pinang bekerjasama serentak tanpa sebarang ralat percanggahan versi fail.',
      author: 'Nur Claire Chen',
      role: 'Head of Product Design',
      company: 'Veloce SEA (Kuala Lumpur)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      metrics: '4x penghantaran spesifikasi produk',
    },
    {
      id: '3',
      category: 'engineering',
      quote:
        'Pematuhan akta PDPA dan kebolehan membayar bil melalui perbankan korporat FPX dan e-Invois LHDN menjadikannya platform paling lancar untuk diluluskan oleh bahagian kewangan kami.',
      author: 'Devon Patel Suresh',
      role: 'Principal Cloud Architect',
      company: 'AuraPay FinTech (Cyberjaya)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      metrics: '99.99% pematuhan SLA BNM RMIT',
    },
  ];

  const filteredList = testimonials.filter((t) => {
    if (filter === 'all') return true;
    return t.category === filter;
  });

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 block">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Trusted by teams delivering at scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            See how engineering and product leaders accelerate their release cycles.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 bg-zinc-100 rounded-lg border border-zinc-200">
            {(['all', 'engineering', 'product'] as const).map((cat) => (
              <button
                key={cat}
                id={`testimonial-filter-${cat}`}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-colors ${
                  filter === cat
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {cat === 'all' ? 'All Roles' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredList.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="p-7 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all"
            >
              <div>
                {/* Metric Badge */}
                {item.metrics && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metrics}</span>
                  </div>
                )}

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/60">
                <img
                  src={item.avatar}
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-300"
                />
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">{item.author}</h4>
                  <p className="text-xs text-zinc-500">
                    {item.role}, <span className="font-medium text-zinc-700">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Row */}
        <div className="mt-16 pt-12 border-t border-zinc-200/70 text-center">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-6">
            Digunakan oleh pasukan kejuruteraan terkemuka di Lembah Klang & seluruh Malaysia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            {['KINETIC.MY', 'VELOCE KL', 'MYPAYTECH', 'CYBERHUB', 'PETRONAS DIGITAL ALUMNI', 'MDEC TECH ACCELERATOR'].map((brand) => (
              <span key={brand} className="text-xs sm:text-sm font-black tracking-wider text-zinc-800 font-mono">
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
