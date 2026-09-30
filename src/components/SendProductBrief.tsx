import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  CreditCard, 
  ShieldCheck, 
  Layers, 
  Check
} from 'lucide-react';
import { CREATIVE_ANGLES, PRICING_PLANS } from '../data/content';
import { CreativeAngleType, BriefFormData } from '../types';

interface SendProductBriefProps {
  initialAngle?: CreativeAngleType;
  selectedPlanId: string;
  onPlanChange: (planId: string) => void;
  onSubmitToPayment: (data: BriefFormData) => void;
}

export const SendProductBrief: React.FC<SendProductBriefProps> = ({
  initialAngle = 'problem-solution',
  selectedPlanId,
  onPlanChange,
  onSubmitToPayment,
}) => {
  const [formData, setFormData] = useState<BriefFormData>({
    productName: '',
    websiteUrl: '',
    niche: 'D2C Skincare & Beauty',
    targetAngles: [initialAngle, 'product-discovery'],
    packageId: selectedPlanId || 'sprint-2-ads',
    brandUsp: '',
    specialOffer: '',
    creatorStyle: 'Modern Young Professional',
    contactEmail: '',
    contactPhone: '',
  });

  const [validationError, setValidationError] = useState('');

  const currentPlan = PRICING_PLANS.find(p => p.id === formData.packageId) || PRICING_PLANS[0];

  const handleAngleToggle = (angleId: CreativeAngleType) => {
    setFormData(prev => {
      const exists = prev.targetAngles.includes(angleId);
      if (exists) {
        if (prev.targetAngles.length === 1) return prev;
        return { ...prev, targetAngles: prev.targetAngles.filter(id => id !== angleId) };
      } else {
        return { ...prev, targetAngles: [...prev.targetAngles, angleId] };
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.productName.trim() || !formData.websiteUrl.trim() || !formData.contactEmail.trim()) {
      setValidationError('Please provide your Product Name, Website URL, and Delivery Email.');
      return;
    }
    onSubmitToPayment(formData);
  };

  const handleWhatsAppSend = () => {
    if (!formData.productName.trim() && !formData.websiteUrl.trim()) {
      setValidationError('Please enter at least your Product Name or Website URL.');
      return;
    }

    const angleLabels = formData.targetAngles
      .map(id => CREATIVE_ANGLES.find(a => a.id === id)?.title)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `*🚀 Ad Sprint Brief — Digilutions Creative*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 *Package:* ${currentPlan.name} (${currentPlan.priceFormatted} / ${currentPlan.adCount} ads)\n🛍️ *Product:* ${formData.productName || 'N/A'}\n🌐 *URL:* ${formData.websiteUrl || 'N/A'}\n🎯 *Selected Angles:* ${angleLabels}\n✨ *Key USPs:* ${formData.brandUsp || 'Will provide on call'}\n🎁 *Offer / Discount:* ${formData.specialOffer || 'Standard'}\n👤 *Creator Style:* ${formData.creatorStyle}\n📧 *Contact Email/Phone:* ${formData.contactEmail || 'N/A'}\n━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 *Hi team, I submitted this brief and want to discuss angles & payment directly here on WhatsApp!*`
    );

    window.open(`https://wa.me/916000650701?text=${text}`, '_blank');
  };

  return (
    <section id="brief" className="py-12 sm:py-20 md:py-24 bg-[#F7F7F4] border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-1.5 sm:mb-2">
            08. GET STARTED IN 2 MINUTES
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-6xl font-black text-[#111111] tracking-tight">
            SEND US YOUR PRODUCT
          </h2>
          <p className="mt-2 text-xs sm:text-lg text-[#333330] leading-relaxed">
            Fill in your product details below. Our performance team will review your angle opportunities and deliver your completed 9:16 ads today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column: Interactive Intake Form */}
          <div className="lg:col-span-7 bg-white border-2 border-[#111111] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-[5px_5px_0px_#111111]">
            <form onSubmit={handleSubmitForm} className="space-y-4 sm:space-y-6">
              {validationError && (
                <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-xs rounded-lg">
                  {validationError}
                </div>
              )}

              {/* 1. Package Selection */}
              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-2">
                  1. Select Production Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PRICING_PLANS.map((plan) => {
                    const isSelected = formData.packageId === plan.id;
                    return (
                      <button
                        type="button"
                        key={plan.id}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, packageId: plan.id }));
                          onPlanChange(plan.id);
                        }}
                        className={`min-h-[56px] p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#111111] text-white border-[#111111] shadow-[2px_2px_0px_#C7FF3D]'
                            : 'bg-[#F7F7F4] text-[#111111] border-[#D4D4CD] hover:border-[#111111]'
                        }`}
                      >
                        <div className="font-bold">{plan.name}</div>
                        <div className={`font-mono text-sm font-black ${isSelected ? 'text-[#C7FF3D]' : 'text-[#111111]'}`}>
                          {plan.priceFormatted}
                        </div>
                        <div className={`text-[10px] ${isSelected ? 'text-white/70' : 'text-[#777770]'}`}>
                          {plan.deliveryTime}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Product Name & URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="productName" className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    required
                    placeholder="e.g. Ceramide Barrier Dropper"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className="w-full min-h-[46px] px-3.5 py-2.5 text-base sm:text-sm bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg focus:bg-white focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                    Website or Amazon URL *
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    required
                    placeholder="https://yourbrand.com/products/item"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="w-full min-h-[46px] px-3.5 py-2.5 text-base sm:text-sm bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg focus:bg-white focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              {/* 3. Product Niche & Creator Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="niche" className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                    Category / Niche
                  </label>
                  <select
                    id="niche"
                    name="niche"
                    value={formData.niche}
                    onChange={handleInputChange}
                    className="w-full min-h-[46px] px-3.5 py-2.5 text-base sm:text-sm bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg focus:bg-white focus:outline-none focus:border-[#111111]"
                  >
                    <option>D2C Skincare & Beauty</option>
                    <option>Consumer Tech & Gadgets</option>
                    <option>Health & Fitness Supplements</option>
                    <option>Apparel & Footwear</option>
                    <option>Food & Specialty Beverage</option>
                    <option>Home & Kitchenware</option>
                    <option>B2B / SaaS Product</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="creatorStyle" className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                    Creator Persona Preference
                  </label>
                  <select
                    id="creatorStyle"
                    name="creatorStyle"
                    value={formData.creatorStyle}
                    onChange={handleInputChange}
                    className="w-full min-h-[46px] px-3.5 py-2.5 text-base sm:text-sm bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg focus:bg-white focus:outline-none focus:border-[#111111]"
                  >
                    <option>Modern Young Professional (24–32)</option>
                    <option>Gen-Z Trendy UGC (19–24)</option>
                    <option>Athletic & Energetic Fitness (22–35)</option>
                    <option>Sophisticated Aesthetic & Warm</option>
                    <option>Tech Reviewer Studio Style</option>
                  </select>
                </div>
              </div>

              {/* 4. Target Angles To Test */}
              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1.5">
                  Target Angles To Test (Tap to toggle)
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {CREATIVE_ANGLES.map((angle) => {
                    const isChecked = formData.targetAngles.includes(angle.id);
                    return (
                      <button
                        type="button"
                        key={angle.id}
                        onClick={() => handleAngleToggle(angle.id)}
                        className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                          isChecked
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-white text-[#555550] border-[#D4D4CD] hover:border-[#111111]'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${isChecked ? 'bg-[#C7FF3D] text-[#111111]' : 'border border-[#D4D4CD]'}`}>
                          {isChecked && '✓'}
                        </span>
                        <span>{angle.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Key USPs & Customer Friction */}
              <div>
                <label htmlFor="brandUsp" className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                  Top Product USP or Friction It Solves
                </label>
                <textarea
                  id="brandUsp"
                  name="brandUsp"
                  rows={2}
                  placeholder="e.g. Calms redness in 6 days, no perfume, doesn't pill under sunscreen."
                  value={formData.brandUsp}
                  onChange={handleInputChange}
                  className="w-full p-3 text-base sm:text-sm bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg focus:bg-white focus:outline-none focus:border-[#111111]"
                />
              </div>

              {/* 6. Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="contactEmail" className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                    Delivery Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    required
                    placeholder="founder@yourbrand.com"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full min-h-[46px] px-3.5 py-2.5 text-base sm:text-sm bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg focus:bg-white focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                    WhatsApp Phone (Optional updates)
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    placeholder="+91 98765 43210"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full min-h-[46px] px-3.5 py-2.5 text-base sm:text-sm bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg focus:bg-white focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full min-h-[50px] py-3.5 px-6 text-sm font-black text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg shadow-[3px_3px_0px_#111111] hover:bg-[#bcf92b] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>QUICK ENQUIRE FOR {currentPlan.name.toUpperCase()} ({currentPlan.priceFormatted}) →</span>
                </button>

                <div className="text-center text-[10px] text-[#888880]">— OR —</div>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full min-h-[48px] py-3 px-6 text-xs sm:text-sm font-bold text-[#111111] bg-white border border-[#111111] rounded-lg hover:bg-[#F7F7F4] active:bg-[#EFEFEA] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#111111]" />
                  <span>SEND BRIEF TO WHATSAPP (+91 6000650701) →</span>
                </button>
              </div>

              <div className="text-center text-[10px] sm:text-[11px] text-[#777770] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                <span>Payment handled directly on WhatsApp · Protected by 100% Brief-Match Guarantee</span>
              </div>
            </form>
          </div>

          {/* Right Column: Live Campaign Blueprint Preview */}
          <div className="lg:col-span-5 bg-white border-2 border-[#111111] rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-[5px_5px_0px_#111111] space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5E5DF] pb-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#777770]">
                  LIVE GENERATED SUMMARY
                </div>
                <div className="text-sm sm:text-base font-black text-[#111111]">
                  Campaign Blueprint
                </div>
              </div>

              <div className="text-[10px] sm:text-xs font-mono font-bold bg-[#C7FF3D] px-2 py-0.5 rounded border border-[#111111]">
                {currentPlan.deliveryTime}
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg">
                <div className="text-[10px] font-mono text-[#777770] uppercase">Selected Tier:</div>
                <div className="font-extrabold text-xs sm:text-sm text-[#111111]">{currentPlan.name} · {currentPlan.priceFormatted}</div>
                <div className="text-[11px] text-[#555550]">{currentPlan.adCount} vertical creator ads (9:16)</div>
              </div>

              <div className="p-3 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg">
                <div className="text-[10px] font-mono text-[#777770] uppercase">Product:</div>
                <div className="font-bold text-[#111111]">
                  {formData.productName || 'Your Product Title'}
                </div>
                <div className="text-[11px] text-[#555550] truncate">
                  {formData.websiteUrl || 'https://yourwebsite.com'}
                </div>
              </div>

              <div className="p-3 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg">
                <div className="text-[10px] font-mono text-[#777770] uppercase">Active Angles Selected:</div>
                <div className="font-medium text-[#111111] mt-1 flex flex-wrap gap-1">
                  {formData.targetAngles.map(id => {
                    const angle = CREATIVE_ANGLES.find(a => a.id === id);
                    return (
                      <span key={id} className="bg-white border border-[#D4D4CD] px-2 py-0.5 rounded text-[10px] sm:text-[11px]">
                        {angle?.title}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg">
                <div className="text-[10px] font-mono text-[#777770] uppercase">Delivery Guarantee:</div>
                <div className="font-semibold text-[#111111] text-[11px]">
                  ✓ 1080x1920 MP4 files for Meta & TikTok<br />
                  ✓ High-retention burned-in animated captions<br />
                  ✓ 100% Brief-Match: 4-hour revision or full refund
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E5E5DF] text-center">
              <span className="text-[11px] text-[#666660]">
                Payment links powered by <strong>Razorpay</strong>. Instant receipt and order dashboard.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
