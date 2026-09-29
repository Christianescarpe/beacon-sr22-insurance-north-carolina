'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, X, Shield, MapPin, FileText, CheckCircle2 } from 'lucide-react';
import { SITE_INFO, SERVICE_PAGES, LOCATION_PAGES } from '@/data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${scrolled ? 'shadow-md py-2.5' : 'py-3.5 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-black text-xl tracking-tight text-slate-900 leading-none">
                Beacon <span className="text-red-600">SR22</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wider text-slate-500 uppercase mt-0.5">
                North Carolina
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link 
              href="/" 
              className="text-[15px] font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              Home
            </Link>

            {/* SR22 Insurance Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 text-[15px] font-semibold text-slate-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>SR22 Insurance</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 animate-fade-in-up">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Coverage & Filing Services
                  </div>
                  {SERVICE_PAGES.map((svc) => (
                    <Link
                      key={svc.url}
                      href={svc.url}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-50/70 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-100/70 text-red-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors leading-snug">
                          {svc.page}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {svc.metaDesc.slice(0, 55)}...
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 text-[15px] font-semibold text-slate-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsDropdownOpen ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
              </button>

              {locationsDropdownOpen && (
                <div className="absolute top-full -left-20 w-[420px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-fade-in-up">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 mb-2">
                    North Carolina Service Areas
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {LOCATION_PAGES.map((loc) => {
                      const cityName = loc.page.replace(' (Location Page)', '');
                      return (
                        <Link
                          key={loc.url}
                          href={loc.url}
                          onClick={() => setLocationsDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{cityName}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/blog/" 
              className="text-[15px] font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              Blogs
            </Link>

            <Link 
              href="/faq/" 
              className="text-[15px] font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              FAQ
            </Link>

            <Link 
              href="/contact-us/" 
              className="text-[15px] font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Phone Button */}
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-sm text-white bg-red-600 hover:bg-red-700 transition-all shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/40 active:scale-95 animate-pulse-glow"
              aria-label={`Call ${SITE_INFO.phone}`}
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="tracking-wide">{SITE_INFO.phone}</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-red-600"
          >
            Home
          </Link>

          {/* Mobile SR22 Insurance */}
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-slate-400 py-1">
              SR22 Insurance
            </div>
            <div className="pl-3 space-y-1 mt-1 border-l-2 border-red-200">
              {SERVICE_PAGES.map((svc) => (
                <Link
                  key={svc.url}
                  href={svc.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm font-semibold text-slate-700 hover:text-red-600"
                >
                  {svc.page}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Locations */}
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-slate-400 py-1">
              NC Locations
            </div>
            <div className="grid grid-cols-2 gap-1 pl-3 mt-1 border-l-2 border-slate-200">
              {LOCATION_PAGES.map((loc) => {
                const cityName = loc.page.replace(' (Location Page)', '');
                return (
                  <Link
                    key={loc.url}
                    href={loc.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 text-xs font-medium text-slate-700 hover:text-red-600"
                  >
                    {cityName}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link 
            href="/blog/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-red-600"
          >
            Blogs
          </Link>

          <Link 
            href="/faq/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-red-600"
          >
            FAQ
          </Link>

          <Link 
            href="/contact-us/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-red-600"
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <a 
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl font-bold text-base text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/30"
            >
              <Phone className="w-4 h-4" />
              <span>Call {SITE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
