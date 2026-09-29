import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

interface HeroSectionProps {
  badge?: string;
  title: string;
  leadParagraph: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  trustPoints?: string[];
}

export default function HeroSection({
  badge = "North Carolina SR-22 & DL-123 Specialists",
  title,
  leadParagraph,
  secondaryCtaText = "Coverage Options",
  secondaryCtaLink = "#coverage-options",
  imageSrc = "/images/hero-agent.webp",
  imageAlt = "Beacon SR22 Insurance North Carolina Specialist",
  trustPoints = [
    "Fast NCDMV Direct Filing",
    "Owner & Non-Owner Coverage",
    "Same-Day Proof of Insurance"
  ]
}: HeroSectionProps) {
  // Split title if it contains specific words to create the two-tone red & navy style
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:py-20 border-b border-slate-100">
      
      {/* Background soft red/blue blur circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.15]">
              {title}
            </h1>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {leadParagraph}
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-base text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/25 hover:shadow-red-600/35 active:scale-95 transition-all group animate-pulse-glow"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Call {SITE_INFO.phone}</span>
              </a>

              {secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm active:scale-95 transition-all"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>

            {/* Trust points row */}
            <div className="pt-4 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {trustPoints.map((tp, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{tp}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Image with decorative card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background shape */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 to-rose-400 rounded-3xl opacity-20 blur-xl transform -rotate-1" />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1 (Top Right) */}
              <div className="absolute -top-4 -right-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-black text-lg">
                  NC
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Form DL-123 & SR-22</div>
                  <div className="text-[11px] text-slate-500 font-medium">Direct DMV Verification</div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 bg-[#0d1e38] text-white rounded-2xl shadow-2xl p-3.5 flex items-center gap-3 border border-slate-700">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Same-Day Filing</div>
                  <div className="text-[11px] text-slate-300">Fast license restoration</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
