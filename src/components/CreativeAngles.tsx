import React, { useState } from 'react';
import { 
  Zap, 
  Eye, 
  ShieldAlert, 
  Gift, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { CREATIVE_ANGLES } from '../data/content';
import { CreativeAngleType } from '../types';

interface CreativeAnglesProps {
  onSelectAngleForBrief: (angleId: CreativeAngleType) => void;
  onOpenOrderModal: (planId?: string) => void;
}

export const CreativeAngles: React.FC<CreativeAnglesProps> = ({ 
  onSelectAngleForBrief, 
  onOpenOrderModal 
}) => {
  const [activeAngleId, setActiveAngleId] = useState<CreativeAngleType>('problem-solution');

  const activeAngle = CREATIVE_ANGLES.find(a => a.id === activeAngleId) || CREATIVE_ANGLES[0];

  const getAngleIcon = (id: CreativeAngleType) => {
    switch (id) {
      case 'problem-solution':
        return <Zap className="w-4 h-4" />;
      case 'product-discovery':
        return <Eye className="w-4 h-4" />;
      case 'live-demo':
        return <Layers className="w-4 h-4" />;
      case 'objection-buster':
        return <ShieldAlert className="w-4 h-4" />;
      case 'irresistible-offer':
        return <Gift className="w-4 h-4" />;
    }
  };

  return (
    <section id="angles" className="py-12 sm:py-20 md:py-24 bg-[#F7F7F4] border-b border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-1.5 sm:mb-2">
            03. CREATIVE FRAMEWORKS
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#111111] tracking-tight">
            THE 5 ANGLES THAT SCALE ACCOUNTS
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#444440] leading-relaxed">
            We don’t write generic ads. We deploy 5 battle-tested psychological angles proven across thousands of Meta, Reels, and TikTok ad accounts.
          </p>
        </div>

        {/* Mobile Horizontal Snap Tabs / Desktop Grid */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {CREATIVE_ANGLES.map((angle) => {
            const isSelected = activeAngleId === angle.id;
            return (
              <button
                key={angle.id}
                onClick={() => setActiveAngleId(angle.id)}
                className={`min-h-[58px] min-w-[170px] sm:min-w-0 p-3 sm:p-4 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between shrink-0 ${
                  isSelected
                    ? 'bg-[#111111] text-white border-[#111111] shadow-[3px_3px_0px_#C7FF3D]'
                    : 'bg-white text-[#111111] border-[#D4D4CD] hover:border-[#111111]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className={`p-1.5 rounded ${isSelected ? 'bg-white/10 text-[#C7FF3D]' : 'bg-[#EFEFEA] text-[#111111]'}`}>
                    {getAngleIcon(angle.id)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#C7FF3D]' : 'text-[#777770]'}`}>
                    {angle.avgHookRate}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold leading-tight">
                  {angle.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Angle Deep Dive Panel */}
        <div className="bg-white border-2 border-[#111111] rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-[5px_5px_0px_#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#111111] bg-[#C7FF3D] px-2 py-0.5 rounded">
                    ANGLE 0{CREATIVE_ANGLES.findIndex(a => a.id === activeAngle.id) + 1}
                  </span>
                  <span className="text-xs text-[#777770]">·</span>
                  <span className="text-xs font-mono font-semibold text-[#111111]">
                    {activeAngle.avgHookRate}
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-[#111111] tracking-tight">
                  {activeAngle.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-base text-[#444440] font-medium leading-relaxed">
                  {activeAngle.tagline}
                </p>
              </div>

              {/* Angle Specs */}
              <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-[#E5E5DF] text-xs sm:text-sm">
                <div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-[#666660] uppercase tracking-wider mb-1">
                    Psychological Driver:
                  </div>
                  <p className="text-[#222220]">
                    {activeAngle.psychology}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-[#666660] uppercase tracking-wider mb-1">
                    Ideal Media Buying Funnel Stage:
                  </div>
                  <p className="text-[#222220]">
                    {activeAngle.idealFor}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-[#666660] uppercase tracking-wider mb-1">
                    Visual Retention Technique:
                  </div>
                  <p className="text-[#222220]">
                    {activeAngle.retentionTactic}
                  </p>
                </div>
              </div>
            </div>

            {/* Script Hook Card & Action */}
            <div className="lg:col-span-5 bg-[#F7F7F4] border border-[#D4D4CD] rounded-xl p-4 sm:p-6 flex flex-col justify-between h-full">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#666660] mb-2">
                  ACTUAL 3-SECOND HOOK SCRIPT
                </div>

                <div className="bg-white border-l-4 border-[#C7FF3D] border-y border-r border-[#D4D4CD] p-3.5 sm:p-4 rounded-r-lg text-xs sm:text-base font-extrabold text-[#111111] leading-snug mb-3 sm:mb-4">
                  {activeAngle.scriptHook}
                </div>

                <div className="text-[11px] sm:text-xs text-[#555550] leading-relaxed mb-4 sm:mb-6">
                  When you submit your product, our creative team customizes this framework with your real customer reviews, top product claims, and competitor counter-arguments.
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-[#E5E5DF]">
                <button
                  onClick={() => onSelectAngleForBrief(activeAngle.id)}
                  className="min-h-[46px] w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#baf527] active:scale-98 transition-all shadow-[2px_2px_0px_#111111] cursor-pointer text-center"
                >
                  <span>Select &ldquo;{activeAngle.title}&rdquo; for Brief →</span>
                </button>
                <div className="text-center text-[10px] sm:text-[11px] text-[#777770]">
                  Included in The 2-Ad Sprint (₹2,499) and 5-Ad Growth Pack
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
