import React from 'react';
import { AlertCircle, Check, X, Flame, BarChart3, Clock, DollarSign, RefreshCw, Zap } from 'lucide-react';

interface PerformanceAngleProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const PerformanceAngle: React.FC<PerformanceAngleProps> = ({ onOpenOrderModal }) => {
  const comparisonItems = [
    {
      metric: 'Turnaround Speed',
      traditional: '14 to 28 days (sample shipping + edits)',
      digilutions: 'Same-day (<12 hours) or 24 hours',
      highlight: true
    },
    {
      metric: 'Initial Cost Barrier',
      traditional: '₹20,000 – ₹60,000 minimum per creator',
      digilutions: 'From ₹2,499 for 2 complete video ads',
      highlight: true
    },
    {
      metric: 'Physical Product Shipping',
      traditional: 'Required (lost stock, couriers & wait times)',
      digilutions: 'Zero shipping — just send product URL & USPs',
      highlight: false
    },
    {
      metric: 'Angle Testing Capacity',
      traditional: '1 single angle; creator often goes off-script',
      digilutions: '2 to 5 distinct psychological angles tested simultaneously',
      highlight: true
    },
    {
      metric: 'Brief-Match Guarantee',
      traditional: 'No refunds; paid revisions take weeks',
      digilutions: '100% Brief-Match: 4h fix or full refund',
      highlight: true
    },
    {
      metric: 'Format & Animated Captions',
      traditional: 'Raw video files; you edit and time captions yourself',
      digilutions: 'Finished 9:16 MP4 with high-retention animated captions',
      highlight: false
    }
  ];

  return (
    <section id="why-angles" className="py-12 sm:py-20 md:py-24 bg-[#EFEFEA] border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-1.5 sm:mb-2">
            02. PERFORMANCE LOGIC
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight">
            “DON’T JUST MAKE ANOTHER AD.<br />
            MAKE ANOTHER ANGLE WORTH TESTING.”
          </h2>
          <p className="mt-3 text-xs sm:text-lg text-[#333330] leading-relaxed">
            Every media buyer knows the painful cycle: you spend weeks organizing a creator shoot, get 2 videos back, launch them, and frequency burns them out in 9 days. Your CPMs skyrocket and your blended ROAS collapses.
          </p>
        </div>

        {/* 3 Core Performance Truths Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="bg-white border border-[#D4D4CD] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-[11px] font-mono font-bold text-[#111111] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#111111]" />
                01. Creative Fatigue Is Real
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-1.5">
                CPMs rise 30–70% once creative burns out.
              </h3>
              <p className="text-xs sm:text-sm text-[#555550] leading-normal">
                Meta’s algorithm penalizes repeated hooks. When audiences scroll past your first 2 seconds, ad delivery gets exponentially more expensive.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E5E5DF] text-[11px] font-mono text-[#111111] font-semibold">
              Solution: Inject 2–5 fresh hooks weekly.
            </div>
          </div>

          <div className="bg-white border border-[#D4D4CD] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-[11px] font-mono font-bold text-[#111111] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-[#111111]" />
                02. Angle Diversity &gt; Shoots
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-1.5">
                Different buyers convert on different triggers.
              </h3>
              <p className="text-xs sm:text-sm text-[#555550] leading-normal">
                One buyer converts on acute pain. Another converts on price objection. Another needs to see an unboxing. 1 polished video only speaks to 20% of your TAM.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E5E5DF] text-[11px] font-mono text-[#111111] font-semibold">
              Solution: Attack 5 unique psychological triggers.
            </div>
          </div>

          <div className="bg-white border border-[#D4D4CD] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-[11px] font-mono font-bold text-[#111111] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-[#111111]" />
                03. Velocity Wins the Auction
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-1.5">
                Test for ₹2,499 today vs ₹30,000 next month.
              </h3>
              <p className="text-xs sm:text-sm text-[#555550] leading-normal">
                Winning accounts don't guess in brainstorm meetings. They test 2–5 low-friction sprint angles simultaneously, find the winner, and put 80% of budget behind proven retention.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E5E5DF] text-[11px] font-mono text-[#111111] font-semibold">
              Solution: Turnaround in &lt;12 hours.
            </div>
          </div>
        </div>

        {/* Head-to-Head Comparison: Adaptive for Mobile and Desktop */}
        <div className="bg-white border-2 border-[#111111] rounded-xl overflow-hidden shadow-[5px_5px_0px_#111111]">
          <div className="p-4 sm:p-6 bg-[#111111] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#C7FF3D]">
                HEAD-TO-HEAD MATRIX
              </div>
              <h3 className="text-lg sm:text-xl font-black">
                Traditional Creator Shoot vs. DIGILUTIONS
              </h3>
            </div>
            <div className="text-[11px] text-[#AAAAA0]">
              Built for performance marketers who track ROAS daily.
            </div>
          </div>

          {/* Mobile Card-by-Card Comparison Stack (Shown on small screens) */}
          <div className="md:hidden divide-y divide-[#E5E5DF] p-3 space-y-3">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="pt-3 first:pt-0 space-y-2">
                <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                  {item.metric}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* Traditional */}
                  <div className="p-2.5 bg-[#F7F7F4] border border-[#D4D4CD] rounded-lg">
                    <div className="text-[10px] font-mono text-[#777770] uppercase mb-1">
                      Traditional
                    </div>
                    <div className="text-[#666660] text-[11px] leading-snug">
                      {item.traditional}
                    </div>
                  </div>

                  {/* DIGILUTIONS */}
                  <div className="p-2.5 bg-[#C7FF3D]/15 border border-[#111111] rounded-lg">
                    <div className="text-[10px] font-mono font-bold text-[#111111] uppercase mb-1 flex items-center gap-1">
                      <img src="/brand-logo.png" alt="" className="w-3.5 h-3.5 object-contain rounded-xs" />
                      <span>DIGILUTIONS</span>
                      <Zap className="w-2.5 h-2.5 fill-current" />
                    </div>
                    <div className="text-[#111111] font-bold text-[11px] leading-snug">
                      {item.digilutions}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View (Shown on md+ screens) */}
          <div className="hidden md:block divide-y divide-[#E5E5DF] overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F7F7F4] text-[#666660] font-mono uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-6 font-semibold">Evaluation Metric</th>
                  <th className="py-3 px-6 font-semibold text-[#888880]">Traditional Creator / Shoot</th>
                  <th className="py-3 px-6 font-semibold text-[#111111] bg-[#C7FF3D]/20">
                    <div className="flex items-center gap-1.5">
                      <img src="/brand-logo.png" alt="" className="w-4 h-4 object-contain rounded-xs" />
                      <span>DIGILUTIONS / CREATIVE</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5DF] text-[#333330]">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-4 px-6 font-bold text-[#111111]">{item.metric}</td>
                    <td className="py-4 px-6 text-[#777770]">{item.traditional}</td>
                    <td className="py-4 px-6 font-bold text-[#111111] bg-[#C7FF3D]/10">
                      {item.digilutions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-6 bg-[#F7F7F4] border-t border-[#E5E5DF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs text-[#555550]">
              Don't wait another month to see if an ad will work. Test 2 angles today.
            </div>
            <button
              onClick={() => onOpenOrderModal('sprint-2-ads')}
              className="min-h-[46px] w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#bbf32f] active:scale-95 transition-all shadow-[2px_2px_0px_#111111] cursor-pointer text-center"
            >
              Start 2-Ad Sprint (₹2,499) →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
