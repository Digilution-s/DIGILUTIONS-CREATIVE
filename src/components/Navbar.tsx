import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowRight, MessageCircle, Zap, ChevronRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (planId?: string) => void;
  onScrollToBrief: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onScrollToBrief }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll and handle ESC key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { title: 'Vertical Ad Examples', href: '#examples', num: '01' },
    { title: 'Why Angles Beat Shoots', href: '#why-angles', num: '02' },
    { title: '5 Core Creative Angles', href: '#angles', num: '03' },
    { title: 'How It Works (Send → Deliver)', href: '#how-it-works', num: '04' },
    { title: 'Sprint Pricing (from ₹2,499)', href: '#pricing', num: '05' },
    { title: 'Brief-Match Guarantee', href: '#guarantee', num: '06' },
    { title: 'Frequently Asked Questions', href: '#faq', num: '07' },
    { title: 'Send Us Your Product', href: '#brief', num: '08' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F7F4]/95 backdrop-blur-md border-b border-[#E5E5DF] transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Zone 1: Brand Logo + Wordmark */}
          <a 
            href="#" 
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] shrink-0"
            aria-label="DIGILUTIONS / CREATIVE Home"
          >
            <img 
              src="/brand-logo.png" 
              alt="DIGILUTIONS / CREATIVE" 
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-md"
            />
            <span className="font-extrabold tracking-tighter text-sm xs:text-base sm:text-xl text-[#111111]">
              DIGILUTIONS <span className="text-[#888880] font-normal">/</span> CREATIVE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#C7FF3D] border border-[#111111]/40" />
          </a>

          {/* Zone 2: Desktop clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#444440]" aria-label="Main Navigation">
            <a href="#examples" className="hover:text-[#111111] transition-colors">
              Examples
            </a>
            <a href="#why-angles" className="hover:text-[#111111] transition-colors">
              Why Angles
            </a>
            <a href="#angles" className="hover:text-[#111111] transition-colors">
              5 Angles
            </a>
            <a href="#how-it-works" className="hover:text-[#111111] transition-colors">
              Process
            </a>
            <a href="#pricing" className="hover:text-[#111111] transition-colors">
              Pricing
            </a>
            <a href="#guarantee" className="hover:text-[#111111] transition-colors">
              Guarantee
            </a>
            <a href="#faq" className="hover:text-[#111111] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Direct WhatsApp Quick Chat (hidden on mobile, visible on tablet & desktop) */}
            <a
              href="https://wa.me/916000650701?text=Hi%20Digilutions%20Creative%2C%20I%20want%20to%20get%20started%20with%20The%202-Ad%20Sprint."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="hidden md:inline-flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-xs font-semibold text-[#111111] bg-white border border-[#D4D4CD] rounded-md hover:bg-[#EFEFEA] active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#111111]" />
              <span className="hidden md:inline ml-1.5">WhatsApp</span>
            </a>

            {/* Primary Action Button (hidden on mobile, visible on tablet & desktop) */}
            <button
              onClick={() => onOpenOrderModal('sprint-2-ads')}
              className="hidden md:flex min-h-[44px] px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-extrabold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-md hover:bg-[#bbf32f] active:scale-95 transition-all shadow-[2px_2px_0px_#111111] whitespace-nowrap cursor-pointer items-center gap-1"
            >
              <span>GET 2 ADS</span>
              <span className="hidden sm:inline">→</span>
            </button>

            {/* Mobile menu trigger button with 44px touch hitbox */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-[#111111] bg-white border border-[#D4D4CD] rounded-md hover:bg-[#EFEFEA] active:scale-95 focus:outline-none cursor-pointer"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5 text-[#111111]" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Navigation Drawer rendered via Portal to prevent CSS containing block clipping */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="lg:hidden fixed inset-0 z-[9999] bg-[#F7F7F4] flex flex-col justify-between overflow-hidden"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border-b border-[#E5E5DF] bg-[#F7F7F4] shrink-0">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img 
                src="/brand-logo.png" 
                alt="DIGILUTIONS / CREATIVE" 
                className="w-7 h-7 object-contain rounded-md" 
              />
              <span className="font-extrabold tracking-tighter text-sm xs:text-base text-[#111111]">
                DIGILUTIONS <span className="text-[#888880] font-normal">/</span> CREATIVE
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C7FF3D] border border-[#111111]/40" />
            </a>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#777770] uppercase">
                CLOSE
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[42px] min-w-[42px] flex items-center justify-center p-2 bg-white border border-[#111111] rounded-lg text-[#111111] active:scale-90 hover:bg-[#EFEFEA] transition-all cursor-pointer shadow-xs"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#111111]" />
              </button>
            </div>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-1 divide-y divide-[#E5E5DF]/70">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#777770] px-2 pb-2">
              SECTIONS DIRECTORY
            </div>

            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="w-full flex items-center justify-between min-h-[52px] px-3 py-3 text-left rounded-xl text-sm xs:text-base font-bold text-[#111111] hover:bg-[#EFEFEA] active:bg-[#E5E5DF] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#888880] group-hover:text-[#111111] transition-colors">
                    {item.num}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.title}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#888880] group-hover:text-[#111111] transition-colors" />
              </button>
            ))}
          </div>

          {/* Bottom Action Dock inside Drawer */}
          <div className="p-4 sm:p-6 border-t border-[#E5E5DF] bg-white shrink-0 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal('sprint-2-ads');
              }}
              className="w-full min-h-[50px] flex items-center justify-center gap-2 px-4 py-3 text-xs xs:text-sm font-extrabold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-xl shadow-[3px_3px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer text-center"
            >
              <Zap className="w-4 h-4" />
              <span>CLAIM THE 2-AD SPRINT (₹2,499) →</span>
            </button>

            <a
              href="https://wa.me/916000650701?text=Hi%20Digilutions%20Creative%2C%20I%20want%20to%20get%20started%20with%20The%202-Ad%20Sprint."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[46px] flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-[#111111] bg-[#F7F7F4] border border-[#D4D4CD] rounded-xl hover:bg-[#EFEFEA] active:bg-[#E5E5DF] text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#111111]" />
              <span>Chat with Creative Team on WhatsApp</span>
            </a>

            <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#777770]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
              <span>Same-Day Delivery · 100% Brief-Match Guarantee</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
