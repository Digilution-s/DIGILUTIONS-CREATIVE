import React from 'react';
import { Send, Wand2, Download, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onScrollToBrief: () => void;
  onOpenOrderModal: (planId?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onScrollToBrief, onOpenOrderModal }) => {
  return (
    <section id="how-it-works" className="py-12 sm:py-20 md:py-24 bg-[#EFEFEA] border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-1.5 sm:mb-2">
            04. THE WORKFLOW
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#111111] tracking-tight">
            HOW IT WORKS: SEND → CREATE → DELIVER
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#444440] leading-relaxed">
            No shipping courier boxes. No 3-week creator delays. No endless contracts. Just pure performance creative delivered directly to your inbox.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative mb-8 sm:mb-12">
          {/* Step 1 */}
          <div className="bg-white border-2 border-[#111111] rounded-xl p-5 sm:p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] sm:text-xs font-mono font-black text-[#111111] bg-[#C7FF3D] px-2.5 py-1 rounded">
                  STEP 01
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#888880]">2 MINUTES</span>
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg flex items-center justify-center mb-3">
                <Send className="w-5 h-5 text-[#111111]" />
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#111111] mb-1.5">
                SEND
              </h3>
              <p className="text-xs sm:text-sm text-[#444440] leading-relaxed mb-4">
                Paste your product URL, 2–3 key benefits, and select your preferred angles. You do not need to send physical stock.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E5E5DF] text-[11px] font-mono text-[#555550] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0" />
              <span>Zero sample shipping needed</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border-2 border-[#111111] rounded-xl p-5 sm:p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] sm:text-xs font-mono font-black text-[#111111] bg-[#C7FF3D] px-2.5 py-1 rounded">
                  STEP 02
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#888880]">WE HANDLE ALL</span>
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg flex items-center justify-center mb-3">
                <Wand2 className="w-5 h-5 text-[#111111]" />
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#111111] mb-1.5">
                CREATE
              </h3>
              <p className="text-xs sm:text-sm text-[#444440] leading-relaxed mb-4">
                Our performance copywriters engineer high-hook scripts, generate authentic AI creator avatars, match studio lighting, and burn in dynamic subtitles.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E5E5DF] text-[11px] font-mono text-[#555550] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0" />
              <span>Native UGC creator pacing</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border-2 border-[#111111] rounded-xl p-5 sm:p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] sm:text-xs font-mono font-black text-[#111111] bg-[#C7FF3D] px-2.5 py-1 rounded">
                  STEP 03
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#888880]">SAME-DAY / 24H</span>
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg flex items-center justify-center mb-3">
                <Download className="w-5 h-5 text-[#111111]" />
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#111111] mb-1.5">
                DELIVER
              </h3>
              <p className="text-xs sm:text-sm text-[#444440] leading-relaxed mb-4">
                Download 1080x1920 (9:16) MP4 files ready to upload straight into Meta Ads Manager, TikTok Ads, or Shorts. Protected by our 100% Brief-Match Guarantee.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E5E5DF] text-[11px] font-mono text-[#555550] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0" />
              <span>Full commercial rights included</span>
            </div>
          </div>
        </div>

        {/* Workflow Speed Banner */}
        <div className="p-4 sm:p-6 bg-white border border-[#111111] rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-xs sm:text-sm font-black text-[#111111]">
              Submit by 4:00 PM IST → Ads in your inbox tonight by 10:00 PM IST
            </div>
            <div className="text-[11px] sm:text-xs text-[#555550]">
              The 2-Ad Sprint is designed specifically for fast testing loops. No back-and-forth email tag.
            </div>
          </div>

          <button
            onClick={() => onOpenOrderModal('sprint-2-ads')}
            className="min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-extrabold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] hover:bg-[#bcf92b] active:scale-95 transition-all cursor-pointer whitespace-nowrap text-center"
          >
            <span>START SPRINT (₹2,499) →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
