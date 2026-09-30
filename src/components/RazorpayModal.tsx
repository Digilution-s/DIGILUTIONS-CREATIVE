import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  CheckCircle2, 
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Globe,
  ShoppingBag,
  FileText,
  User,
  Phone
} from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId: string;
}

export const RazorpayModal: React.FC<RazorpayModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId,
}) => {
  const plan = PRICING_PLANS.find(p => p.id === selectedPlanId) || PRICING_PLANS[0];

  const [brandName, setBrandName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('Cold Traffic / Hook Testing');
  const [customNotes, setCustomNotes] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState('');

  // Reset errors when modal opens
  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
      setIsSubmitted(false);
    }
  }, [isOpen, selectedPlanId]);

  if (!isOpen) return null;

  const quickGoals = [
    'Cold Traffic / Hook Testing',
    'Feature & Live Demo',
    'Objection Buster',
    'Offer / BOGO Sprint'
  ];

  const handleQuickEnquire = (e: React.FormEvent) => {
    e.preventDefault();

    if (!brandName.trim()) {
      setErrorMessage('Please enter your brand or business name.');
      return;
    }
    if (!productDetails.trim()) {
      setErrorMessage('Please describe what product you sell.');
      return;
    }

    setErrorMessage('');

    // Construct structured WhatsApp message
    const lines = [
      `*🚀 New Ad Sprint Enquiry — Digilutions Creative*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📦 *Package:* ${plan.name} (${plan.priceFormatted} / ${plan.adCount} ads)`,
      `🏢 *Brand:* ${brandName.trim()}`,
      `🌐 *Website / IG:* ${websiteUrl.trim() || 'Will share in chat'}`,
      `🛍️ *Product / Niche:* ${productDetails.trim()}`,
      `🎯 *Creative Focus:* ${selectedGoal}`,
      ...(customNotes.trim() ? [`📝 *Notes:* ${customNotes.trim()}`] : []),
      `👤 *Contact:* ${contactName.trim() || 'Founder'} ${contactPhone.trim() ? `(${contactPhone.trim()})` : ''}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💬 *Hi! I want to get started with this sprint. Please share available production slots and payment details directly here on WhatsApp.*`
    ];

    const message = lines.join('\n');
    const waUrl = `https://wa.me/916000650701?text=${encodeURIComponent(message)}`;
    setLastGeneratedUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab / app
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white border-t-2 sm:border-2 border-[#111111] rounded-t-2xl sm:rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Mobile Drag Handle */}
        <div className="w-10 h-1 bg-[#D4D4CD] rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Modal Header with Provided Logo */}
        <div className="bg-[#111111] text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <img 
              src="/brand-logo.png" 
              alt="DIGILUTIONS / CREATIVE" 
              className="w-8 h-8 rounded object-contain bg-white/10 p-0.5 border border-white/20 shrink-0" 
            />
            <div>
              <div className="text-[10px] font-mono tracking-wider text-[#C7FF3D] uppercase">
                DIGILUTIONS / CREATIVE
              </div>
              <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5 text-white">
                <span>{plan.name}</span>
                <span className="text-[#888880]">·</span>
                <span className="text-[#C7FF3D] font-mono">{plan.priceFormatted}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 text-[#888880] hover:text-white rounded-md hover:bg-white/10 cursor-pointer transition-colors"
            aria-label="Close Enquiry Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          {isSubmitted ? (
            /* Success State after Quick Enquire */
            <div className="text-center space-y-4 py-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C7FF3D] border-2 border-[#111111] flex items-center justify-center mx-auto shadow-[3px_3px_0px_#111111]">
                <CheckCircle2 className="w-8 h-8 text-[#111111]" />
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase text-[#777770]">
                  ENQUIRY GENERATED
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#111111]">
                  WhatsApp Chat Opened!
                </h3>
                <p className="text-xs text-[#555550] max-w-sm mx-auto">
                  Your enquiry details for <strong>{brandName}</strong> have been forwarded to our WhatsApp number (+91 6000650701).
                </p>
              </div>

              <div className="p-3.5 bg-[#F7F7F4] border border-[#D4D4CD] rounded-xl text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#777770]">Selected Plan:</span>
                  <span className="font-bold text-[#111111]">{plan.name} ({plan.priceFormatted})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777770]">Payment Method:</span>
                  <span className="font-bold text-[#111111]">Direct on WhatsApp (UPI / Invoice)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777770]">Delivery ETA:</span>
                  <span className="font-bold text-[#111111]">{plan.deliveryTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777770]">Guarantee:</span>
                  <span className="font-bold text-[#111111]">100% Brief-Match (4h Revision)</span>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <a
                  href={lastGeneratedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] w-full py-3 px-4 text-xs sm:text-sm font-extrabold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#bcf92b] active:scale-98 transition-all shadow-[2px_2px_0px_#111111] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#111111]" />
                  <span>RE-OPEN WHATSAPP CHAT (+91 6000650701) →</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-[44px] w-full py-2.5 px-4 text-xs font-semibold text-[#555550] hover:text-[#111111] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Enquiry Form */
            <form onSubmit={handleQuickEnquire} className="space-y-4">
              {/* WhatsApp Notice Banner */}
              <div className="bg-[#EFEFEA] border border-[#D4D4CD] rounded-lg p-3 text-xs flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#111111] text-[#C7FF3D] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-3 h-3" />
                </div>
                <div>
                  <div className="font-bold text-[#111111]">
                    Payment handled directly on WhatsApp (+91 6000650701)
                  </div>
                  <div className="text-[11px] text-[#555550] mt-0.5 leading-snug">
                    Zero payment gateway fees. Enter your brand details below to enquire — our creative team will immediately share custom hooks and UPI/invoice payment on WhatsApp.
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md font-medium">
                  {errorMessage}
                </div>
              )}

              {/* 1. Brand Name */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#555550]" />
                  <span>Brand or Business Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g., Kiro Beauty, CMF Tech, SleepWell D2C"
                  className="w-full text-xs sm:text-sm bg-white border border-[#D4D4CD] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] rounded-lg px-3 py-2.5 text-[#111111] outline-none"
                />
              </div>

              {/* 2. Website or Instagram URL */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#555550]" />
                  <span>Website or Instagram Profile</span>
                </label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="e.g., yourbrand.com or @yourbrand"
                  className="w-full text-xs sm:text-sm bg-white border border-[#D4D4CD] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] rounded-lg px-3 py-2.5 text-[#111111] outline-none"
                />
              </div>

              {/* 3. Product / What You Sell */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#555550]" />
                  <span>What product do you sell? <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  value={productDetails}
                  onChange={(e) => setProductDetails(e.target.value)}
                  placeholder="e.g., Anti-ageing serum, ANC headphones, electrolyte powder, gymwear"
                  className="w-full text-xs sm:text-sm bg-white border border-[#D4D4CD] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] rounded-lg px-3 py-2.5 text-[#111111] outline-none"
                />
              </div>

              {/* 4. Creative Angle / Primary Goal */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1.5">
                  Primary Ad Goal / Preferred Angle
                </label>
                <div className="grid grid-cols-2 gap-1.5 mb-2">
                  {quickGoals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setSelectedGoal(goal)}
                      className={`text-left text-[11px] p-2 rounded-md border transition-all cursor-pointer ${
                        selectedGoal === goal
                          ? 'bg-[#111111] text-white border-[#111111] font-bold'
                          : 'bg-[#F7F7F4] text-[#444440] border-[#E5E5DF] hover:border-[#111111]'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Optional: Mention any hook idea, USP, or target audience..."
                  className="w-full text-xs bg-white border border-[#D4D4CD] focus:border-[#111111] rounded-lg px-3 py-2 text-[#111111] outline-none"
                />
              </div>

              {/* 5. Contact Name & Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#555550]" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Arjun"
                    className="w-full text-xs sm:text-sm bg-white border border-[#D4D4CD] focus:border-[#111111] rounded-lg px-3 py-2 text-[#111111] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#555550]" />
                    <span>Your WhatsApp No.</span>
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs sm:text-sm bg-white border border-[#D4D4CD] focus:border-[#111111] rounded-lg px-3 py-2 text-[#111111] outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="min-h-[50px] w-full py-3.5 px-4 text-xs sm:text-sm font-black text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#bcf92b] active:scale-98 transition-all shadow-[3px_3px_0px_#111111] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#111111]" />
                  <span>QUICK ENQUIRE VIA WHATSAPP →</span>
                </button>

                <div className="text-center text-[10px] sm:text-[11px] text-[#666660] mt-2.5 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Connects to official WhatsApp: +91 6000650701 · Zero payment gateway required</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
