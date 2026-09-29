import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, ShieldCheck, MapPin, ArrowRight, FileText, AlertCircle } from 'lucide-react';
import { SitePage, SITE_INFO } from '@/data/content';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import QuoteSection from '@/components/QuoteSection';
import CoverageCardsSection from '@/components/CoverageCardsSection';
import LocationsGrid from '@/components/LocationsGrid';
import LatestGuidesSection from '@/components/LatestGuidesSection';

interface PageTemplateProps {
  page: SitePage;
  heroImage?: string;
  badge?: string;
  showLocationsGrid?: boolean;
  showCoverageCards?: boolean;
  showLatestGuides?: boolean;
}

export default function PageTemplate({
  page,
  heroImage = "/images/hero-agent.webp",
  badge,
  showLocationsGrid = true,
  showCoverageCards = true,
  showLatestGuides = true
}: PageTemplateProps) {
  const { h1, introHtml, sections } = page.parsed;

  // Extract clean plain text for lead paragraph from introHtml
  const cleanLeadParagraph = introHtml
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // First section for Trust section
  const firstSection = sections[0];
  // Remaining sections
  const remainingSections = sections.slice(1);

  // Generate dynamic badge
  const pageBadge = badge || (page.url.includes('-nc/') 
    ? `North Carolina DMV Filing • ${page.page.replace(' (Location Page)', '')}` 
    : "North Carolina SR-22 & DL-123 Coverage");

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Section matching template top */}
      <HeroSection
        badge={pageBadge}
        title={h1 || page.seoTitle}
        leadParagraph={cleanLeadParagraph}
        imageSrc={heroImage}
        imageAlt={page.page}
        secondaryCtaText="Explore Options"
        secondaryCtaLink="#detailed-guide"
      />

      {/* 2. Trust Section matching template 2nd section */}
      {firstSection && (
        <TrustSection
          title={firstSection.title}
          bodyHtml={firstSection.bodyHtml}
          image1="/images/signing-document.webp"
          image2="/images/protection-hands.webp"
        />
      )}

      {/* 3. Quote Section */}
      <QuoteSection />

      {/* 4. Coverage Options Cards Section */}
      {showCoverageCards && (
        <CoverageCardsSection />
      )}

      {/* 5. Detailed Page Content Sections (from sheet) */}
      {remainingSections.length > 0 && (
        <section id="detailed-guide" className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="space-y-12">
              {remainingSections.map((sec, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                      {sec.title}
                    </h2>
                  </div>

                  <div 
                    className="rich-content pl-0 sm:pl-11"
                    dangerouslySetInnerHTML={{ __html: sec.bodyHtml }}
                  />

                  {/* Immediate Phone CTA (No contact form, strictly phone) */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 sm:ml-11 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Need help with this step?
                    </span>
                    <a
                      href={`tel:${SITE_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 shadow-sm active:scale-95 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {SITE_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 6. NC Locations Grid */}
      {showLocationsGrid && (
        <LocationsGrid />
      )}

      {/* 7. Latest Guides */}
      {showLatestGuides && (
        <LatestGuidesSection />
      )}

    </div>
  );
}
