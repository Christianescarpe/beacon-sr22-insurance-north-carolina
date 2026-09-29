import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, Car, ShieldAlert, FileClock, ArrowRight, Phone } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface HighlightCardsSectionProps {
  title?: string;
  subtitle?: string;
  cards?: CardItem[];
}

export default function HighlightCardsSection({
  title = "Who Needs an SR-22 or DL-123 in North Carolina",
  subtitle = "North Carolina law requires proof of liability insurance (DL-123 or SR-22) after specific driving convictions to restore driving privileges:",
  cards
}: HighlightCardsSectionProps) {
  const defaultCards: CardItem[] = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      title: "Driving While Impaired (DWI)",
      description: "A DWI or DUI conviction in North Carolina triggers mandatory proof of continuous liability insurance via Form DL-123 or SR-22 before license restoration.",
      linkText: "NC DWI Guide",
      linkHref: "/blog/nc-dwi-sr22-insurance/"
    },
    {
      icon: <Car className="w-6 h-6 text-red-600" />,
      title: "Crash While Uninsured",
      description: "Involvement in an automobile crash without verified liability coverage requires immediate state filing and certificate verification.",
      linkText: "Uninsured Crash Guide",
      linkHref: "/blog/insurance-uninsured-accident-nc/"
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
      title: "License Points & Suspensions",
      description: "Multiple serious moving violations, point accumulation, or driving with a revoked license require strict proof of financial responsibility.",
      linkText: "License Reinstatement",
      linkHref: "/how-to-get-an-sr22-in-nc/"
    },
    {
      icon: <FileClock className="w-6 h-6 text-red-600" />,
      title: "Limited Driving Privilege",
      description: "When applying for limited driving privileges with a NC court or during license restoration hearings, an active DL-123 filing is mandatory.",
      linkText: "Limited Privilege Guide",
      linkHref: "/blog/nc-limited-driving-privilege-guide/"
    }
  ];

  const displayCards = cards || defaultCards;

  return (
    <section className="relative py-20 bg-[#0d1e38] text-white overflow-hidden">
      {/* Background Subtle Image with Deep Navy Gradient */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/images/car-agreement.webp"
          alt="Insurance background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1e38]/90 via-[#0d1e38] to-[#0d1e38]/95 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span>Mandatory NCDMV Requirements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-slate-800 shadow-xl border-t-4 border-red-600 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {card.linkHref && (
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={card.linkHref}
                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group-hover:underline"
                  >
                    <span>{card.linkText || "Learn More"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`tel:${SITE_INFO.phoneRaw}`}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1"
                    title={`Call ${SITE_INFO.phone}`}
                  >
                    <Phone className="w-3 h-3 text-red-500" />
                    <span>Call Now</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
