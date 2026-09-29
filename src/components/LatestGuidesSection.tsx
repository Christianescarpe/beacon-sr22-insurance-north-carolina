import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight, Calendar, Phone } from 'lucide-react';
import { ALL_BLOGS, SITE_INFO } from '@/data/content';

interface LatestGuidesSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function LatestGuidesSection({
  title = "Latest North Carolina Insurance Guides",
  subtitle = "Clear, accurate information on North Carolina DMV requirements, license restoration, and insurance filings.",
  limit = 3
}: LatestGuidesSectionProps) {
  // Pick the top blog posts
  const posts = ALL_BLOGS.slice(0, limit);

  const images = [
    "/images/adjuster-damage.webp",
    "/images/man-holding-doc.webp",
    "/images/car-agreement.webp",
    "/images/crash-scene.webp",
    "/images/woman-damage.webp"
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>NC DMV & Insurance Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              {subtitle}
            </p>
          </div>

          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 transition-colors shrink-0 group"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => {
            const img = images[idx % images.length];
            return (
              <article
                key={post.url}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={img}
                      alt={post.page}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      NC Guide
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      <span>Updated 2026</span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                      <Link href={post.url}>
                        {post.page}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.metaDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                  <Link
                    href={post.url}
                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read Full Guide</span>
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
  );
}
