import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { Toast } from './components/Toast';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Professional');
  const [selectedBilling, setSelectedBilling] = useState<'monthly' | 'annual'>('annual');
  const [selectedSeats, setSelectedSeats] = useState(5);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenModal = (planName: string = 'Starter') => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const handlePlanSelectFromPricing = (planName: string, billing: 'monthly' | 'annual', seats: number) => {
    setSelectedPlan(planName);
    setSelectedBilling(billing);
    setSelectedSeats(seats);
    setModalOpen(true);
  };

  const handleStartTrialFromHero = (email: string) => {
    showToast(`Welcome! Invitation sent to ${email}. Ready to start.`);
  };

  const handleScrollToDemo = () => {
    const demoEl = document.getElementById('demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribeNewsletter = (email: string) => {
    showToast(`Success! You have registered with ${email}.`);
  };

  const handleModalSuccess = (details: { name: string; email: string; plan: string }) => {
    showToast(`Welcome ${details.name}! Your ${details.plan} workspace is ready.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main content body */}
      <main className="flex-1">
        <Hero
          onStartTrial={handleStartTrialFromHero}
          onOpenDemo={handleScrollToDemo}
        />

        <InteractiveDemo
          onPlanSelect={handleOpenModal}
        />

        <Features />

        <Pricing
          onSelectPlan={handlePlanSelectFromPricing}
        />

        <Testimonials />

        <Faq />

        <CtaSection
          onSubscribe={handleSubscribeNewsletter}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialog */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPlan={selectedPlan}
        defaultBilling={selectedBilling}
        defaultSeats={selectedSeats}
        onSubmitSuccess={handleModalSuccess}
      />

      {/* Global Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
