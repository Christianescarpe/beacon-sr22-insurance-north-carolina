import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_INFO, SERVICE_PAGES, LOCATION_PAGES } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#0b1325] text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Need SR-22 or DL-123 Insurance in North Carolina?
            </h3>
            <p className="text-red-100 text-sm max-w-xl">
              Get an affordable quote and fast NCDMV filings directly with licensed North Carolina specialists.
            </p>
          </div>
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-base text-red-600 bg-white hover:bg-slate-100 transition-all shadow-lg active:scale-95 shrink-0"
            aria-label={`Call ${SITE_INFO.phone}`}
          >
            <Phone className="w-5 h-5" />
            <span>Call {SITE_INFO.phone}</span>
          </a>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-black text-lg tracking-tight text-white leading-none">
                  Beacon <span className="text-red-500">SR22</span>
                </span>
                <span className="block text-[11px] font-medium tracking-wider text-slate-400 uppercase mt-0.5">
                  North Carolina
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Specialized North Carolina high-risk insurance agency helping drivers obtain affordable SR-22 and DL-123 certificates with fast, direct NCDMV filings statewide.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>{SITE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-white hover:text-red-400 font-semibold transition-colors">
                  {SITE_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/30 text-xs font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct DMV Line: {SITE_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: SR22 Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              SR22 Insurance
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_PAGES.map((svc) => (
                <li key={svc.url}>
                  <Link
                    href={svc.url}
                    className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{svc.page}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq/"
                  className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                  <span>North Carolina SR-22 FAQ</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us/"
                  className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Contact Information</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: NC Locations */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              NC Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
              {LOCATION_PAGES.map((loc) => {
                const cityName = loc.page.replace(' (Location Page)', '');
                return (
                  <Link
                    key={loc.url}
                    href={loc.url}
                    className="text-slate-300 hover:text-red-400 transition-colors py-1 flex items-center gap-1 group"
                  >
                    <MapPin className="w-3 h-3 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{cityName}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Col 4: Google Map visible embed (strictly requested by user) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 border-l-2 border-red-500 pl-2.5">
              Location Map
            </h4>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700 bg-slate-900 aspect-video w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208642.91751902233!2d-80.82216090000001!3d35.20533345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84829a0b2131d583%3A0x640b8943de13b967!2sBeacon%20SR22%20Insurance%20North%20Carolina!5e0!3m2!1sen!2sph!4v1790686307039!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Beacon SR22 Insurance North Carolina Location Map"
                className="w-full h-full min-h-[200px]"
              />
            </div>
            <p className="text-xs text-slate-400">
              Serving Charlotte, Raleigh, Greensboro, and drivers statewide in North Carolina.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Beacon SR22 Insurance North Carolina. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/what-is-sr22/" className="hover:text-white transition-colors">SR22 Insurance</Link>
            <Link href="/faq/" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact-us/" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
