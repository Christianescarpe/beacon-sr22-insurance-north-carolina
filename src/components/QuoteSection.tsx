import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

interface QuoteSectionProps {
  quoteText?: string;
  authorTitle?: string;
}

export default function QuoteSection({
  quoteText = "We specialize in one thing: helping high-risk drivers across North Carolina find affordable SR-22 and DL-123 coverage and get their filings submitted correctly the first time. Whether you're a vehicle owner, a non-owner, or an owner-operator, our team knows exactly what North Carolina requires and how to get you moving again without overpaying.",
  authorTitle = "Beacon SR22 Insurance North Carolina Specialists"
}: QuoteSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Red Quote Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-100 text-red-600 shadow-sm">
          <Quote className="w-8 h-8" />
        </div>

        {/* Quote text from sheet */}
        <blockquote className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight italic">
          &ldquo;{quoteText}&rdquo;
        </blockquote>

        {/* 5 Stars Rating */}
        <div className="flex items-center justify-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>

        {/* Attribution / Trust Badge */}
        <div className="pt-2">
          <div className="font-bold text-slate-900 text-base">
            {authorTitle}
          </div>
          <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-0.5">
            Direct NCDMV Paperwork & Verification Specialists
          </div>
        </div>

      </div>
    </section>
  );
}
