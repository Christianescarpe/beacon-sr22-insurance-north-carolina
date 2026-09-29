import React from 'react';
import Link from 'next/link';
import { Check, Phone, ShieldCheck, Car, UserCheck, Bike } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

interface CoverageCardsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CoverageCardsSection({
  title = "Coverage Options for Every Situation",
  subtitle = "Not everyone needing an SR-22 or DL-123 owns a car. We match high-risk North Carolina drivers with coverage that meets state requirements without overpaying:"
}: CoverageCardsSectionProps) {
  const plans = [
    {
      name: "Non-Owner SR-22 Policy",
      tagline: "Driver-Only Coverage • Most Affordable",
      badge: "Cheapest Option",
      icon: <UserCheck className="w-6 h-6 text-red-600" />,
      description: "If you do not currently own a car but need to reinstate your North Carolina driver license, this policy satisfies state requirements at a fraction of the cost.",
      features: [
        "Satisfies NCDMV filing mandates",
        "Significantly lower monthly premiums",
        "Covers you when driving borrowed or rented cars",
        "Fast DL-123 form issuance",
        "Easily upgradeable if you purchase a vehicle later"
      ],
      linkText: "Learn About Non-Owner Policies",
      linkHref: "/non-owners-sr22-insurance/",
      highlight: false
    },
    {
      name: "Vehicle Owner SR-22 Policy",
      tagline: "Full Vehicle Protection & DMV Filing",
      badge: "Most Common",
      icon: <Car className="w-6 h-6 text-red-600" />,
      description: "For vehicle owners who need proof of financial responsibility to restore driving privileges, register a vehicle, or clear a suspension.",
      features: [
        "Meets or exceeds NC 30/60/25 liability laws",
        "Direct electronic submission to NCDMV",
        "Same-day proof of coverage (DL-123)",
        "Optional collision & comprehensive add-ons",
        "Flexible monthly payment plans"
      ],
      linkText: "How to Get an SR-22 in NC",
      linkHref: "/how-to-get-an-sr22-in-nc/",
      highlight: true
    },
    {
      name: "Motorcycle & Specialty Filings",
      tagline: "Riders & Specialized Driving Situations",
      badge: "Specialized Coverage",
      icon: <Bike className="w-6 h-6 text-red-600" />,
      description: "We work with motorcycle riders, owner-operators, and drivers who need coverage on vehicles they do not personally own.",
      features: [
        "Motorcycle DL-123 filings with the NCDMV",
        "Solutions for commercial or owner-operator needs",
        "Coverage for borrowed or employer-provided vehicles",
        "Direct support for license hearings & court dates",
        "Competitive high-risk carrier rates"
      ],
      linkText: "Motorcycle Filing Guide",
      linkHref: "/blog/motorcycle-sr22-insurance-nc/",
      highlight: false
    }
  ];

  return (
    <section id="coverage-options" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>North Carolina Filing Options</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? 'bg-white shadow-2xl ring-2 ring-red-600 -translate-y-2'
                  : 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                    {plan.icon}
                  </div>
                  {!plan.highlight && (
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-3">
                  {plan.tagline}
                </p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Phone CTA Button (strictly phone button) */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95 ${
                    plan.highlight
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-red-600/30'
                      : 'bg-slate-900 text-white hover:bg-red-600 hover:shadow-red-600/20'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_INFO.phone}</span>
                </a>

                {plan.linkHref && (
                  <Link
                    href={plan.linkHref}
                    className="block text-center text-xs font-bold text-slate-500 hover:text-red-600 transition-colors"
                  >
                    {plan.linkText} →
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
