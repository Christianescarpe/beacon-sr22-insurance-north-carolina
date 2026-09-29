import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { ALL_BLOGS, SITE_INFO } from '@/data/content';
import HeroSection from '@/components/HeroSection';
import LocationsGrid from '@/components/LocationsGrid';

export const metadata: Metadata = {
  title: "North Carolina SR-22 & DL-123 Insurance Guides & Articles",
  description: "Comprehensive guides and breakdown of North Carolina SR-22 and DL-123 filings, DMV license reinstatement, costs, and state requirements.",
};

export default function BlogIndexPage() {
  const images = [
    "/images/adjuster-damage.webp",
    "/images/man-holding-doc.webp",
    "/images/car-agreement.webp",
    "/images/crash-scene.webp",
    "/images/woman-damage.webp",
    "/images/umbrella-protection.webp",
    "/images/family-protection.webp",
    "/images/insurance-form.webp",
    "/images/protection-hands.webp",
    "/images/signing-document.webp"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badge="Official Insurance Guides & NCDMV Walkthroughs"
        title="North Carolina SR-22 & DL-123 Knowledge Base"
        leadParagraph="Clear, expert guides designed to help North Carolina drivers understand state insurance filing requirements, restore suspended licenses, compare owner vs non-owner coverage, and avoid costly penalties."
        imageSrc="/images/adjuster-damage.webp"
        imageAlt="North Carolina SR22 insurance guides"
        secondaryCtaText="Browse All Guides"
        secondaryCtaLink="#guides-grid"
      />

      {/* Guides Grid */}
      <section id="guides-grid" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>10 Detailed NC Guides</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              All North Carolina Filing Resources
            </h2>
            <p className="text-slate-600 text-base">
              Learn about North Carolina DMV rules, license reinstatement fees, DWI requirements, and non-owner policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_BLOGS.map((blog, idx) => {
              const img = images[idx % images.length];
              return (
                <article
                  key={blog.url}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={img}
                        alt={blog.page}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Guide #{idx + 1}
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        <span>NC DMV Verified • 2026</span>
                      </div>

                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                        <Link href={blog.url}>
                          {blog.page}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {blog.metaDesc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={blog.url}
                      className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group-hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={`tel:${SITE_INFO.phoneRaw}`}
                      className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1"
                      title={`Call ${SITE_INFO.phone}`}
                    >
                      <Phone className="w-3 h-3 text-red-500" />
                      <span>Quote</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Locations */}
      <LocationsGrid />

    </div>
  );
}
