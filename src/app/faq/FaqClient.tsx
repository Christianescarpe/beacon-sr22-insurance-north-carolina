'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { SITE_INFO, ParsedSection } from '@/data/content';

interface FaqClientProps {
  sections: ParsedSection[];
}

export default function FaqClient({ sections }: FaqClientProps) {
  // Keep first 2 open by default
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="space-y-4">
      {sections.map((sec, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'bg-white border-red-200 shadow-md ring-1 ring-red-100' 
                : 'bg-slate-50/70 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${
                  isOpen ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600'
                }`}>
                  Q{idx + 1}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                  {sec.title}
                </h3>
              </div>

              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                isOpen ? 'rotate-180 bg-red-50 text-red-600' : 'bg-white text-slate-400'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 border-t border-slate-100">
                <div 
                  className="rich-content text-slate-700 pl-11"
                  dangerouslySetInnerHTML={{ __html: sec.bodyHtml }}
                />

                <div className="mt-4 pt-3 border-t border-slate-100 pl-11 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Have more questions about this?
                  </span>
                  <a
                    href={`tel:${SITE_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call {SITE_INFO.phone}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
