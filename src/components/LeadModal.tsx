import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
  defaultBilling?: 'monthly' | 'annual';
  defaultSeats?: number;
  onSubmitSuccess: (details: { name: string; email: string; plan: string }) => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = 'Professional',
  defaultBilling = 'annual',
  defaultSeats = 5,
  onSubmitSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState(defaultPlan);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultPlan) {
      setPlan(defaultPlan);
    }
  }, [defaultPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess({ name, email, plan });
      setName('');
      setEmail('');
      onClose();
    }, 500);
  };

  return (
    <div
      id="lead-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="lead-modal-container"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900">
                {plan === 'Login' ? 'Sign in to Workspace' : `Get Started with ${plan}`}
              </h3>
              <p className="text-xs text-zinc-500">
                {plan === 'Login' ? 'Access your cloud workspace' : '14-day free trial, no credit card required'}
              </p>
            </div>
          </div>

          <button
            id="close-lead-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              id="modal-name-input"
              type="text"
              required
              placeholder="Alex Morgan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
              Work Email
            </label>
            <input
              id="modal-email-input"
              type="email"
              required
              placeholder="alex@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
            />
          </div>

          {plan !== 'Login' && (
            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Selected Plan
              </label>
              <select
                id="modal-plan-select"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-sm text-zinc-900 bg-white focus:outline-hidden focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
              >
                <option value="Starter (Percuma)">Starter (Percuma / RM 0)</option>
                <option value="Profesional">Profesional (RM 65/pengguna/bln tahunan)</option>
                <option value="Enterprise Korporat">Enterprise Korporat (RM 159/pengguna/bln)</option>
                <option value="Enterprise Custom">Enterprise Khas Malaysia (Invois PO & SST)</option>
              </select>
            </div>
          )}

          <div className="pt-2">
            <button
              id="modal-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-60"
            >
              <span>{isSubmitting ? 'Creating workspace...' : plan === 'Login' ? 'Continue to Workspace' : 'Create Free Workspace'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-bit SSL encrypted • Instant provision</span>
          </div>
        </form>
      </div>
    </div>
  );
};
