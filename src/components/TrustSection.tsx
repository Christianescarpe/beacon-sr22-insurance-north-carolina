import React from 'react';
import Image from 'next/image';
import { Phone, Shield, Check, Award, ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

interface TrustSectionProps {
  badge?: string;
  title: string;
  bodyHtml: string;
  image1?: string;
  image2?: string;
}

export default function TrustSection({
  badge = "Experienced NC High-Risk Agency",
  title,
  bodyHtml,
  image1 = "/images/signing-document.webp",
  image2 = "/images/protection-hands.webp"
}: TrustSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Overlapping Staggered Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Background Image */}
              <div className="relative w-4/5 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-slate-100">
                <Image
                  src={image1}
                  alt="Signing auto insurance document"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 400px"
                />
              </div>

              {/* Secondary Overlapping Foreground Image */}
              <div className="absolute -bottom-8 -right-2 sm:right-4 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <Image
                  src={image2}
                  alt="Protection and insurance concept"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 300px"
                />
              </div>

              {/* Accent Floating Stat Box */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-red-600 text-white rounded-2xl p-4 shadow-xl shadow-red-600/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black leading-none">100%</div>
                  <div className="text-[11px] text-red-100 font-medium mt-0.5">NC DMV Compliant</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>

            {/* Injected HTML Body from sheet */}
            <div 
              className="rich-content space-y-4"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 active:scale-95 transition-all group"
              >
                <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Call {SITE_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
