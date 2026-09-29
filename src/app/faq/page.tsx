import React from 'react';
import type { Metadata } from 'next';
import { FAQ_PAGE, SITE_INFO } from '@/data/content';
import HeroSection from '@/components/HeroSection';
import FaqClient from './FaqClient';
import CoverageCardsSection from '@/components/CoverageCardsSection';
import LocationsGrid from '@/components/LocationsGrid';
import { HelpCircle, Phone, FileQuestion } from 'lucide-react';

export const metadata: Metadata = {
  title: FAQ_PAGE.seoTitle,
  description: FAQ_PAGE.metaDesc,
};

export default function FaqPage() {
  const { h1, introHtml, sections } = FAQ_PAGE.parsed;

  const cleanLead = introHtml
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero matching design template */}
      <HeroSection
        badge="Official FAQ & Answers"
        title={h1}
        leadParagraph={cleanLead}
        imageSrc="/images/insurance-form.webp"
        imageAlt="North Carolina SR22 Insurance FAQ"
        secondaryCtaText="Browse Questions"
        secondaryCtaLink="#faq-accordion"
      />

      {/* Accordion Questions Section */}
      <section id="faq-accordion" className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
              <FileQuestion className="w-3.5 h-3.5" />
              <span>North Carolina DMV Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Common Questions About DL-123 & SR-22 Filings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click any question below to see state filing rules, cost details, and requirements.
            </p>
          </div>

          <FaqClient sections={sections} />

          {/* Bottom Help Box */}
          <div className="mt-12 bg-[#0d1e38] rounded-3xl p-8 text-white text-center space-y-4 shadow-xl border border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold">
              Still Have Questions About Your Specific Driving Record?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Our North Carolina insurance specialists can look up your NCDMV requirements in minutes and find you the lowest legal rate.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-black text-base text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/30 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Coverage Cards */}
      <CoverageCardsSection />

      {/* Locations */}
      <LocationsGrid />

    </div>
  );
}
