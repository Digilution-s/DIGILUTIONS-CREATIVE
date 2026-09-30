import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 md:py-24 bg-[#F7F7F4] border-b border-[#E5E5DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-1.5 sm:mb-2">
            07. COMMON QUESTIONS
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#111111] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#444440]">
            Everything performance marketers ask before starting their first sprint.
          </p>
        </div>

        {/* FAQ Accordion List with 48px+ touch targets */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#D4D4CD] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left min-h-[52px] py-3.5 px-4 sm:px-6 flex items-center justify-between gap-3 cursor-pointer hover:bg-[#FAF9F6] active:bg-[#EFEFEA] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base font-bold text-[#111111] leading-snug">
                    {faq.question}
                  </span>
                  <span className="min-h-[32px] min-w-[32px] p-1.5 rounded-md bg-[#F7F7F4] text-[#111111] shrink-0 border border-[#D4D4CD] flex items-center justify-center">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-[#444440] leading-relaxed border-t border-[#E5E5DF]/60 bg-[#FAF9F6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Footnote */}
        <div className="mt-6 sm:mt-8 text-center text-xs text-[#666660]">
          Have a unique angle or technical question?{' '}
          <a
            href="https://wa.me/916000650701?text=Hi%20Digilutions%20Creative%2C%20I%20have%20a%20question%20about%20your%20creative%20pipeline."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] font-bold underline inline-block mt-1 sm:mt-0"
          >
            Message our creative team on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
