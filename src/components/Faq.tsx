import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'general',
      question: 'Di manakah data kami disimpan dan adakah kependaman internet pantas di Malaysia?',
      answer:
        'Data organisasi anda dihoskan di pusat data berstatus Tier-3 di Lembah Klang / Cyberjaya, Malaysia. Ini memberikan kependaman ping tempatan serendah 2ms hingga 8ms bagi pengguna di seluruh Semenanjung dan Sabah & Sarawak.',
    },
    {
      id: 'faq-2',
      category: 'pricing',
      question: 'Adakah harga dibil dalam Ringgit Malaysia (RM) dan bagaimana dengan invois SST?',
      answer:
        'Ya! Semua langganan dikenakan caj tepat dalam Ringgit Malaysia (RM) tanpa fi penukaran mata wang asing bank (FX fee). Kami mengeluarkan invois rasmi berformat e-Invois LHDN lengkap dengan nombor SST berdaftar.',
    },
    {
      id: 'faq-3',
      category: 'pricing',
      question: 'Bolehkah syarikat kami membayar melalui perbankan internet FPX atau DuitNow?',
      answer:
        'Ya, kami menyokong pembayaran kad kredit/debit tempatan (Visa, MasterCard), FPX perbankan peribadi dan korporat (Maybank2u, CIMB Clicks, RHB, Public Bank, dll.), DuitNow QR, serta pemindahan bank terus berserta Pesanan Belian (PO) untuk pelan Enterprise.',
    },
    {
      id: 'faq-4',
      category: 'security',
      question: 'Adakah Nexus mematuhi Akta Perlindungan Data Peribadi (PDPA 2010) Malaysia?',
      answer:
        'Ya, sepenuhnya. Infrastruktur kami mematuhi Akta PDPA 2010 dan garis panduan pengurusan risiko teknologi (RMIT) Bank Negara Malaysia, dengan penyulitan AES-256 dan kunci keselamatan yang dikawal oleh pihak organisasi anda.',
    },
    {
      id: 'faq-5',
      category: 'integration',
      question: 'Apakah integrasi sistem yang disokong untuk pembangun Malaysia?',
      answer:
        'Nexus menyokong sambungan sedia ada ke GitHub, GitLab, Bitbucket, Jira, Slack, Telegram bot, dan WhatsApp Webhook API untuk makluman terus ke peranti pasukan anda.',
    },
    {
      id: 'faq-6',
      category: 'general',
      question: 'Adakah terdapat pasukan sokongan teknikal dalam zon waktu Malaysia (GMT+8)?',
      answer:
        'Pasti! Pasukan sokongan teknikal dan kejuruteraan kami berpusat di Kuala Lumpur dan bersedia membantu anda pada waktu pejabat (9:00 pagi – 6:00 petang GMT+8) serta sokongan kecemasan 24/7 untuk pelan Enterprise.',
    },
  ];

  const filteredFaqs = faqItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600">
            Everything you need to know about our product, pricing, and integrations.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-1.5 p-1 bg-zinc-200/70 rounded-xl max-w-md mx-auto">
            {(['all', 'general', 'pricing', 'integration', 'security'] as const).map((cat) => (
              <button
                key={cat}
                id={`faq-category-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'bg-white border-zinc-300 shadow-xs' : 'bg-white/70 border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-zinc-900 focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-600">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-100 border border-zinc-200 text-center">
          <h3 className="text-base font-bold text-zinc-900">Still have a question?</h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1">
            Can't find what you're looking for? Our engineering support team is ready to help.
          </p>
          <a
            href="mailto:support@nexus-workspace.internal"
            className="inline-block mt-4 text-xs font-semibold px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Contact Support Team
          </a>
        </div>

      </div>
    </section>
  );
};
