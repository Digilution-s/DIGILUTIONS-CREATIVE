import React from 'react';
import { ArrowUp, MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-12 sm:pt-16 pb-28 md:pb-16 border-t border-[#222220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#2A2A28]">
          {/* Col 1: Brand Logo, Wordmark & Studio Manifesto */}
          <div className="md:col-span-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/brand-logo.png" 
                alt="DIGILUTIONS / CREATIVE" 
                className="w-8 h-8 rounded object-contain bg-white/10 p-0.5 border border-white/20 shrink-0" 
              />
              <span className="text-lg sm:text-xl font-black tracking-tighter text-white">
                DIGILUTIONS <span className="text-[#888880] font-normal">/</span> CREATIVE
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C7FF3D]" />
            </div>

            <p className="text-xs sm:text-sm text-[#AAAAA0] max-w-md leading-relaxed">
              A specialized creative sprint studio by Digilutions. We build high-retention AI creator video ads for brands that need rapid angle testing without the 3-week creator bottleneck.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#C7FF3D] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#C7FF3D] shrink-0" />
              <span>100% Brief-Match Guarantee on Every Order</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#777770]">
              NAVIGATE
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-1 text-xs font-medium text-[#CCCCCC]">
              <li>
                <a href="#examples" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  Ad Examples
                </a>
              </li>
              <li>
                <a href="#why-angles" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  Why Angles Win
                </a>
              </li>
              <li>
                <a href="#angles" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  5 Frameworks
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  Sprint Pricing
                </a>
              </li>
              <li>
                <a href="#guarantee" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  Guarantee
                </a>
              </li>
              <li>
                <a href="#faq" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#brief" className="inline-block py-1 hover:text-[#C7FF3D] transition-colors">
                  Send Brief
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & WhatsApp */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#777770]">
              DIRECT LINE
            </div>
            <p className="text-xs text-[#AAAAA0]">
              Speak directly with our Creative Director for high-volume retainers or custom brief requests.
            </p>
            <a
              href="https://wa.me/916000650701?text=Hi%20Digilutions%20Creative%2C%20I%20have%20an%20urgent%20ad%20creative%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-[#111111] bg-[#C7FF3D] rounded-lg border border-[#C7FF3D] hover:bg-[#bbf32f] active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#111111]" />
              <span>WhatsApp: +91 6000650701</span>
            </a>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#777770]">
          <div className="text-center sm:text-left text-[11px] sm:text-xs">
            © {new Date().getFullYear()} DIGILUTIONS / CREATIVE. All rights reserved. Meta, Instagram, and TikTok are trademarks of their respective owners.
          </div>

          <button
            onClick={scrollToTop}
            className="min-h-[40px] flex items-center gap-1.5 text-xs text-[#CCCCCC] hover:text-[#C7FF3D] transition-colors cursor-pointer py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
