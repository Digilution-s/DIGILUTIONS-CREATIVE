import React from 'react';
import { ArrowRight, ChevronDown, Zap, Clock, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: (planId?: string) => void;
  onScrollToExamples: () => void;
  onScrollToBrief: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenOrderModal,
  onScrollToExamples,
  onScrollToBrief,
}) => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-kicker */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#666660] mb-4 sm:mb-5">
          <img 
            src="/brand-logo.png" 
            alt="DIGILUTIONS / CREATIVE" 
            className="w-5 h-5 rounded object-contain bg-black/5 p-0.5" 
          />
          <span className="text-[#111111] font-bold">DIGILUTIONS / CREATIVE</span>
          <span aria-hidden="true" className="text-[#B8B8AE]">·</span>
          <span>AI Performance Studio</span>
          <span aria-hidden="true" className="text-[#B8B8AE]">·</span>
          <span className="text-[#111111] font-mono">Meta & TikTok 9:16</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Big Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-[2.35rem] xs:text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.05] mb-4 sm:mb-6 text-balance">
              MORE CREATIVE.<br />
              <span className="bg-gradient-to-r from-[#111111] via-[#222220] to-[#555550] bg-clip-text text-transparent">
                LESS WAITING.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#333330] leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              Creator-style video ads for brands that need fresh creative — without waiting for a shoot or creator.
            </p>

            {/* Micro value proof points - Mobile friendly wrap */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#555550] mb-8 pb-3 border-b border-[#E5E5DF]/80">
              <span className="flex items-center gap-1.5 text-[#111111] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>Same-Day Delivery</span>
              </span>
              <span aria-hidden="true" className="text-[#B8B8AE]">/</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>Zero Product Shipping</span>
              </span>
              <span aria-hidden="true" className="text-[#B8B8AE]">/</span>
              <span className="flex items-center gap-1.5 text-[#111111] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>Brief-Match Guaranteed</span>
              </span>
            </div>

            {/* CTAs - Mobile full width buttons with touch-first padding */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenOrderModal('sprint-2-ads')}
                className="min-h-[50px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-extrabold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg shadow-[3px_3px_0px_#111111] hover:bg-[#b8f72a] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>GET 2 ADS (₹2,499) →</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToExamples}
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#111111] bg-white border border-[#D4D4CD] rounded-lg hover:bg-[#EFEFEA] active:bg-[#E5E5DF] transition-colors cursor-pointer"
              >
                <span>SEE AD EXAMPLES</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact "The 2-Ad Sprint" Offer Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#111111] rounded-xl p-5 sm:p-8 shadow-[5px_5px_0px_#111111] relative">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#E5E5DF] pb-3 sm:pb-4 mb-4 sm:mb-5">
                <div>
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660]">
                    INTRODUCTORY SPRINT
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
                    THE 2-AD SPRINT
                  </h2>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="bg-[#C7FF3D] border border-[#111111] px-2.5 py-1 text-[10px] sm:text-xs font-mono font-bold text-[#111111] uppercase tracking-wider rounded">
                    SAME-DAY
                  </div>
                  <span className="px-2 py-0.5 text-[11px] font-bold text-[#6D28D9] bg-[#EDE9FE] border border-[#DDD6FE]/60 rounded-full">
                    50% off
                  </span>
                </div>
              </div>

              {/* Price & Delivery */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-base sm:text-lg font-semibold text-[#777770] line-through tabular-nums">
                    ₹4,999
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight tabular-nums">
                    ₹2,499
                  </span>
                  <span className="text-xs font-semibold text-[#666660] uppercase">
                    / 2 custom video ads
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1.5 text-xs font-semibold text-[#111111]">
                  <span className="w-2 h-2 rounded-full bg-[#111111] animate-pulse" />
                  <span>Same-day delivery · Produced in &lt;12 hours</span>
                </div>
              </div>

              {/* Offer Details List */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 text-xs sm:text-sm text-[#333330]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>2 distinct creative angles</strong> (e.g., Problem-Solution & Discovery)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>1080x1920 (9:16)</strong> native vertical for Instagram Reels & TikTok</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>Dynamic animated captions</strong> for silent-scroll retention</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>Full commercial ad rights</strong> with zero royalty claims</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>100% Brief-Match Guarantee:</strong> Revise in 4 hours or refund</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                onClick={() => onOpenOrderModal('sprint-2-ads')}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-extrabold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#bcf92b] active:scale-[0.99] transition-all shadow-[2px_2px_0px_#111111] cursor-pointer"
              >
                <span>CLAIM THE 2-AD SPRINT (₹2,499) →</span>
              </button>

              <div className="mt-2.5 text-center text-[10px] sm:text-[11px] text-[#777770]">
                Takes 2 minutes to submit brief · No physical product shipping needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
