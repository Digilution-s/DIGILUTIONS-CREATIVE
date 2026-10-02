import React from 'react';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenOrderModal }) => {
  return (
    <aside 
      aria-label="Quick order action"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111111] text-white border-t border-[#2A2A28] px-3.5 py-2 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.15)] h-14"
      style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom, 8px))' }}
    >
      <div className="flex flex-col justify-center pr-2">
        <div className="text-[9px] font-mono text-[#C7FF3D] uppercase tracking-wider leading-tight flex items-center gap-1.5 font-bold">
          <span>THE 2-AD SPRINT</span>
          <span className="text-[9px] text-[#6D28D9] bg-[#EDE9FE] px-1.5 py-0.2 rounded-full font-extrabold">50% off</span>
        </div>
        <div className="text-xs xs:text-sm font-extrabold text-white leading-tight flex items-center gap-1.5">
          <span className="text-[11px] text-white/50 line-through tabular-nums">₹4,999</span>
          <span>₹2,499</span>
          <span className="text-[10px] font-normal text-white/70">· &lt;12h</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://wa.me/916000650701?text=Hi%20Digilutions%20Creative%2C%20I%20want%20to%20get%20started%20with%20The%202-Ad%20Sprint."
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 text-white bg-white/10 hover:bg-white/20 active:scale-90 rounded-lg border border-white/20 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#C7FF3D]" />
        </a>

        <button
          onClick={() => onOpenOrderModal('sprint-2-ads')}
          className="min-h-[40px] px-3.5 py-1.5 text-xs font-black text-[#111111] bg-[#C7FF3D] rounded-lg border border-[#C7FF3D] hover:bg-[#bbf527] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm"
        >
          <span>GET 2 ADS</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
