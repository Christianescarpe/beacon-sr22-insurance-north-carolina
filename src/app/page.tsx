import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Shield, CheckCircle, ArrowRight, FileText, Clock, AlertCircle } from 'lucide-react';
import { HOME_PAGE, SITE_INFO } from '@/data/content';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import HighlightCardsSection from '@/components/HighlightCardsSection';
import QuoteSection from '@/components/QuoteSection';
import CoverageCardsSection from '@/components/CoverageCardsSection';
import LocationsGrid from '@/components/LocationsGrid';
import LatestGuidesSection from '@/components/LatestGuidesSection';

export const metadata: Metadata = {
  title: HOME_PAGE.seoTitle,
  description: HOME_PAGE.metaDesc,
};

export default function HomePage() {
  const { h1, introHtml, sections } = HOME_PAGE.parsed;

  // Extract clean text for lead
  const cleanLead = introHtml
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Section 1: "Why Drivers Across North Carolina Choose Beacon"
  const secWhyBeacon = sections.find(s => s.title.includes("Why Drivers")) || sections[0];
  
  // Section 2: "Fast, Accurate NCDMV Filings"
  const secFastFilings = sections.find(s => s.title.includes("Fast, Accurate")) || sections[2];
  
  // Section 3: "What Makes Beacon Different"
  const secWhatMakesDiff = sections.find(s => s.title.includes("What Makes Beacon Different")) || sections[5];

  // Section 4: "Questions? We're Here to Help"
  const secQuestions = sections.find(s => s.title.includes("Questions?")) || sections[4];

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Section matching template top */}
      <HeroSection
        badge="Official North Carolina SR-22 & DL-123 Agency"
        title={h1}
        leadParagraph={cleanLead}
        imageSrc="/images/hero-agent.webp"
        imageAlt="Beacon SR22 Insurance Specialist"
        secondaryCtaText="View Coverage Options"
        secondaryCtaLink="#coverage-options"
      />

      {/* 2. Trust Section matching template section 2 (30 Years of Successful Business Consulting) */}
      {secWhyBeacon && (
        <TrustSection
          badge="Trusted NC Insurance Agency"
          title={secWhyBeacon.title}
          bodyHtml={secWhyBeacon.bodyHtml}
          image1="/images/signing-document.webp"
          image2="/images/protection-hands.webp"
        />
      )}

      {/* 3. Highlight Cards matching template section 3 (Our Industry dark blue banner with cards) */}
      <HighlightCardsSection
        title="Who Needs an SR-22 or DL-123 in North Carolina"
        subtitle="North Carolina generally requires proof of liability insurance via Form DL-123 or an SR-22 filing after specific driving violations, including:"
      />

      {/* 4. Quote Section matching template section 4 (2000+ Happy Client) */}
      <QuoteSection />

      {/* 5. Coverage Plans Cards matching template section 5 (Our Pricing 3 cards with red buttons) */}
      <CoverageCardsSection
        title="Coverage Options for Every Situation"
        subtitle="Not everyone needing an SR-22 or DL-123 owns a car. If you don't currently own a vehicle but still need to satisfy North Carolina's filing requirement, we have options that fit your budget:"
      />

      {/* 6. In-Depth Features & Compliance: Fast Accurate Filings & What Makes Beacon Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: What Makes Beacon Different */}
            <div className="lg:col-span-7 space-y-6">
              {secWhatMakesDiff && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Specialized Experience</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    {secWhatMakesDiff.title}
                  </h2>

                  <div 
                    className="rich-content space-y-4"
                    dangerouslySetInnerHTML={{ __html: secWhatMakesDiff.bodyHtml }}
                  />
                </>
              )}

              {/* Fast Filings Box */}
              {secFastFilings && (
                <div className="mt-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span>{secFastFilings.title}</span>
                  </h3>
                  <div 
                    className="rich-content text-sm"
                    dangerouslySetInnerHTML={{ __html: secFastFilings.bodyHtml }}
                  />
                </div>
              )}

              {/* Action Phone CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-base text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/30 active:scale-95 transition-all group"
                >
                  <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                  <span>Call {SITE_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Graphic / Form Showcase Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
                <Image
                  src="/images/insurance-form.webp"
                  alt="Car insurance filing and DMV form"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Additional Question Card */}
              {secQuestions && (
                <div className="bg-[#0d1e38] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {secQuestions.title}
                  </h3>
                  <div 
                    className="text-slate-300 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: secQuestions.bodyHtml }}
                  />
                  <div className="pt-2">
                    <a
                      href={`tel:${SITE_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Speak with a Specialist: {SITE_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 7. NC Locations Grid */}
      <LocationsGrid />

      {/* 8. Latest Guides matching template section 8 (Latest News) */}
      <LatestGuidesSection />

    </div>
  );
}
