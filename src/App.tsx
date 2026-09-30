import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdPortfolio } from './components/AdPortfolio';
import { PerformanceAngle } from './components/PerformanceAngle';
import { CreativeAngles } from './components/CreativeAngles';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { BriefGuarantee } from './components/BriefGuarantee';
import { Faq } from './components/Faq';
import { SendProductBrief } from './components/SendProductBrief';
import { RazorpayModal } from './components/RazorpayModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';
import { CreativeAngleType, BriefFormData } from './types';

export default function App() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('sprint-2-ads');
  const [selectedAngleForBrief, setSelectedAngleForBrief] = useState<CreativeAngleType>('problem-solution');

  const handleOpenOrderModal = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setIsPaymentModalOpen(true);
  };

  const handleScrollToExamples = () => {
    const el = document.getElementById('examples');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBrief = () => {
    const el = document.getElementById('brief');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectAngleForBrief = (angleId: CreativeAngleType) => {
    setSelectedAngleForBrief(angleId);
    handleScrollToBrief();
  };

  const handleSubmitToPayment = (briefData: BriefFormData) => {
    setSelectedPlanId(briefData.packageId);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#111111] font-sans selection:bg-[#C7FF3D] selection:text-[#111111] flex flex-col">
      {/* 1. Header Navigation Bar (Strict 3-zone Top Bar Contract) */}
      <Navbar 
        onOpenOrderModal={handleOpenOrderModal}
        onScrollToBrief={handleScrollToBrief}
      />

      <main className="flex-1">
        {/* 2. Hero Section: "MORE CREATIVE. LESS WAITING." + The 2-Ad Sprint Card */}
        <Hero
          onOpenOrderModal={handleOpenOrderModal}
          onScrollToExamples={handleScrollToExamples}
          onScrollToBrief={handleScrollToBrief}
        />

        {/* 3. Section 1: Vertical Ad-Video Portfolio Immediately Below Hero */}
        <AdPortfolio
          onOpenOrderModal={handleOpenOrderModal}
          onScrollToBrief={handleScrollToBrief}
        />

        {/* 4. Section 2: "Don't just make another ad. Make another angle worth testing." */}
        <PerformanceAngle
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 5. Section 3: Creative Angles (Problem/Solution, Product Discovery, Demo, Objection, Offer) */}
        <CreativeAngles
          onSelectAngleForBrief={handleSelectAngleForBrief}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 6. Section 4: How It Works: Send → Create → Deliver */}
        <HowItWorks
          onScrollToBrief={handleScrollToBrief}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 7. Section 5: Pricing (2 ads ₹2,499 / 5 ads ₹5,999 / 15 ads/month ₹14,999) */}
        <Pricing
          onSelectPlan={(id) => setSelectedPlanId(id)}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 8. Section 6: Brief-Match Guarantee */}
        <BriefGuarantee
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 9. Section 7: Frequently Asked Questions */}
        <Faq />

        {/* 10. Section 8: Final CTA: "SEND US YOUR PRODUCT" Interactive Brief Intake */}
        <SendProductBrief
          initialAngle={selectedAngleForBrief}
          selectedPlanId={selectedPlanId}
          onPlanChange={(id) => setSelectedPlanId(id)}
          onSubmitToPayment={handleSubmitToPayment}
        />
      </main>

      {/* 11. WhatsApp Direct Quick Enquiry Modal */}
      <RazorpayModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedPlanId={selectedPlanId}
      />

      {/* 12. Mobile Sticky Bottom CTA Bar (Height ≤ 15% viewport cap) */}
      <MobileStickyBar
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* 13. Editorial Quiet Footer */}
      <Footer />
    </div>
  );
}
