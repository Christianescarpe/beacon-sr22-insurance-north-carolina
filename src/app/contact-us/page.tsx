import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_PAGE, SITE_INFO } from '@/data/content';
import HeroSection from '@/components/HeroSection';
import LocationsGrid from '@/components/LocationsGrid';

export const metadata: Metadata = {
  title: CONTACT_PAGE.seoTitle,
  description: CONTACT_PAGE.metaDesc,
};

export default function ContactUsPage() {
  const { h1, introHtml, sections } = CONTACT_PAGE.parsed;

  const cleanLead = introHtml
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badge="Direct DMV Support Line"
        title={h1}
        leadParagraph={cleanLead}
        imageSrc="/images/hero-agent.webp"
        imageAlt="Contact Beacon SR22 Insurance North Carolina"
        secondaryCtaText="Preparation Checklist"
        secondaryCtaLink="#what-to-have-ready"
      />

      {/* Main Direct Callout Card */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Instant Turnaround</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Speak With a Licensed Specialist Now
              </h2>
              <p className="text-red-100 text-sm sm:text-base leading-relaxed">
                No automated menus, no runaround. Call directly to get your quote and have your DL-123 or SR-22 submitted to the NCDMV.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg text-red-600 bg-white hover:bg-slate-100 shadow-xl active:scale-95 transition-all animate-pulse-glow"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>{SITE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Sections from the Sheet (strictly no contact forms) */}
      <section id="what-to-have-ready" className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Office Location Card */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Office Location
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                <strong>Address:</strong><br />
                {SITE_INFO.address}
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Same Day Turnaround Card */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Fast Turnaround
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We prioritize fast turnarounds and can typically get a policy quoted and bound the same day you call.
              </p>
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Statewide Electronic Filing
                </span>
              </div>
            </div>

          </div>

          {/* Render All Content Sections from the Sheet */}
          <div className="space-y-8">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pl-0 sm:pl-3">
                  {sec.title}
                </h2>
                <div
                  className="rich-content pl-0 sm:pl-3"
                  dangerouslySetInnerHTML={{ __html: sec.bodyHtml }}
                />

                <div className="mt-6 pt-4 border-t border-slate-100 sm:ml-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Direct phone quote available now
                  </span>
                  <a
                    href={`tel:${SITE_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs text-white bg-red-600 hover:bg-red-700"
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

      {/* Locations Grid */}
      <LocationsGrid />

    </div>
  );
}
