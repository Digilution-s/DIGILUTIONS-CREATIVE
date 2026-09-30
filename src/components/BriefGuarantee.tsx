import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BriefGuaranteeProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const BriefGuarantee: React.FC<BriefGuaranteeProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="guarantee" className="py-12 sm:py-20 md:py-24 bg-[#EFEFEA] border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#111111] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 shadow-[5px_5px_0px_#111111] relative overflow-hidden">
          {/* Subtle electric lime top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-[#C7FF3D]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-2 sm:mb-3">
                <span>06. IRONCLAD RISK REVERSAL</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#111111] font-bold">ZERO SKEPTICISM</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-3 sm:mb-4">
                THE 100% BRIEF-MATCH GUARANTEE
              </h2>

              <p className="text-xs sm:text-base md:text-lg text-[#333330] leading-relaxed mb-4 sm:mb-6 font-normal">
                If the delivered video ads do not strictly honor your submitted product claims, target angle, or brand tone — we will revise them within <strong>4 hours</strong> at zero cost. If they still do not match your brief, we issue an immediate <strong>100% refund</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-[#E5E5DF] text-xs sm:text-sm text-[#333330]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>4-Hour Express Revision</strong> if anything deviates from brief</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>Full 100% Refund</strong> if you are not completely satisfied</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span><strong>Zero Awkward Calls:</strong> Instant payout back to your account</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 sm:p-6 bg-[#F7F7F4] border border-[#D4D4CD] rounded-xl text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#C7FF3D] border-2 border-[#111111] flex items-center justify-center mb-2.5 shadow-[2px_2px_0px_#111111]">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#111111]" />
              </div>
              <div className="text-sm sm:text-base font-black text-[#111111] tracking-tight mb-1">
                Zero Risk on Your Test
              </div>
              <div className="text-[11px] sm:text-xs text-[#555550] mb-3 sm:mb-4">
                Test 2 fresh creative angles for ₹2,499 today with total peace of mind.
              </div>
              <button
                onClick={() => onOpenOrderModal('sprint-2-ads')}
                className="min-h-[46px] w-full py-2.5 px-4 text-xs font-bold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#bcf92b] active:scale-98 transition-all shadow-[2px_2px_0px_#111111] cursor-pointer text-center"
              >
                TEST 2 ADS RISK-FREE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
