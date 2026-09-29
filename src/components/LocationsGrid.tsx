import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { LOCATION_PAGES, SITE_INFO } from '@/data/content';

interface LocationsGridProps {
  title?: string;
  subtitle?: string;
}

export default function LocationsGrid({
  title = "Serving Drivers Across North Carolina",
  subtitle = "Beacon SR22 Insurance North Carolina proudly serves drivers throughout the state. No matter where you live in NC, our team can typically get quotes turned around the same day:"
}: LocationsGridProps) {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Statewide North Carolina Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* 10 Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {LOCATION_PAGES.map((loc) => {
            const cityName = loc.page.replace(' (Location Page)', '');
            return (
              <Link
                key={loc.url}
                href={loc.url}
                className="group bg-slate-50 hover:bg-red-50/80 border border-slate-200/80 hover:border-red-300 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-red-600 text-red-600 group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-red-600 text-base leading-snug transition-colors">
                    {cityName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    SR-22 & DL-123
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold text-red-600">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Fast Quote Bar */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Don&apos;t see your specific town listed?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              We file directly with the North Carolina DMV for drivers in all 100 NC counties. Call for an instant quote today.
            </p>
          </div>
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/30 transition-all shrink-0 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call {SITE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
