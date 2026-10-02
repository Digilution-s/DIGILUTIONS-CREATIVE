import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
  onOpenOrderModal: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onOpenOrderModal }) => {
  return (
    <section id="pricing" className="py-12 sm:py-20 md:py-24 bg-[#F7F7F4] border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-1.5 sm:mb-2">
            05. TRANSPARENT PRICING
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#111111] tracking-tight">
            SIMPLE SPRINT PRICING.<br />
            ZERO HIDDEN FEES.
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#444440] leading-relaxed">
            Test fresh creative angles with micro-budgets before committing to heavy ad spend. Full commercial rights included on all packages.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch mb-8 sm:mb-12">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isPopular;
            const isSprint = plan.id === 'sprint-2-ads';

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-xl p-5 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'border-2 border-[#111111] shadow-[6px_6px_0px_#111111] lg:scale-[1.02] z-10'
                    : isSprint
                    ? 'border-2 border-[#111111] shadow-[4px_4px_0px_#111111]'
                    : 'border border-[#D4D4CD] hover:border-[#111111]'
                }`}
              >
                {/* Popular or Sprint Banner + 50% Off Tag */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {plan.badge && (
                      <span
                        className={`text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          isFeatured
                            ? 'bg-[#C7FF3D] text-[#111111] border-[#111111]'
                            : 'bg-[#111111] text-white border-[#111111]'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#777770] hidden xs:inline">
                      {plan.deliveryTime}
                    </span>
                  </div>

                  {/* 50% off Pill Tag (Matching 2nd image) */}
                  <span className="px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-[#6D28D9] bg-[#EDE9FE] border border-[#DDD6FE]/60 rounded-full shrink-0">
                    50% off
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight mb-1 sm:mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#555550] leading-normal mb-4 sm:mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-[#E5E5DF]">
                    {/* Strikethrough doubled price before discount */}
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-base sm:text-lg font-semibold text-[#777770] line-through tabular-nums decoration-[#777770]/80">
                        {plan.originalPriceFormatted}
                      </span>
                    </div>

                    {/* Main discounted price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight tabular-nums">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold text-[#666660] uppercase">
                        / {plan.adCount} video ads
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-[#555550] mt-1">
                      ≈ ₹{Math.round(plan.price / plan.adCount).toLocaleString('en-IN')} per finished ad
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm text-[#333330]">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onOpenOrderModal(plan.id)}
                    className={`w-full min-h-[48px] py-3 px-4 text-xs sm:text-sm font-extrabold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 ${
                      isFeatured || isSprint
                        ? 'bg-[#C7FF3D] text-[#111111] border border-[#111111] hover:bg-[#bbf527] shadow-[2px_2px_0px_#111111]'
                        : 'bg-[#111111] text-white hover:bg-[#222220]'
                    }`}
                  >
                    <span>GET {plan.name.toUpperCase()} →</span>
                  </button>

                  <div className="text-center text-[10px] sm:text-[11px] text-[#777770] mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                    <span>100% Brief-Match Guaranteed</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom volume notice */}
        <div className="text-center text-xs text-[#555550] px-4">
          Need 25+ ads per month or enterprise white-labeling for your agency?{' '}
          <a
            href="https://wa.me/916000650701?text=Hi%20Digilutions%20Creative%2C%20we%20need%20custom%20high-volume%20ad%20production%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] font-bold underline hover:text-[#333330] inline-block mt-1 sm:mt-0"
          >
            Chat with our Studio Director on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
