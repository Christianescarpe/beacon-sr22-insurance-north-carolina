import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, ArrowRight, BookOpen, ShieldCheck, ArrowLeft } from 'lucide-react';
import { ALL_BLOGS, getBlogBySlug, SITE_INFO } from '@/data/content';
import HeroSection from '@/components/HeroSection';
import LocationsGrid from '@/components/LocationsGrid';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_BLOGS.map((blog) => {
    // extract slug from URL e.g. /blog/north-carolina-sr22-insurance-cost/ -> north-carolina-sr22-insurance-cost
    const slug = blog.url.replace('/blog/', '').replace('/', '');
    return { slug };
  });
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: blog.seoTitle,
    description: blog.metaDesc,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { h1, introHtml, sections } = blog.parsed;

  const cleanLead = introHtml
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const otherBlogs = ALL_BLOGS.filter(b => b.url !== blog.url).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero */}
      <HeroSection
        badge="North Carolina DMV Guide"
        title={h1 || blog.page}
        leadParagraph={cleanLead}
        imageSrc="/images/adjuster-damage.webp"
        imageAlt={blog.page}
        secondaryCtaText="Read Guide"
        secondaryCtaLink="#article-content"
      />

      {/* Article Content Area */}
      <div id="article-content" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-red-600 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-slate-900 truncate max-w-xs">{blog.page}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Article Sections */}
            <main className="lg:col-span-8 space-y-10">
              
              {sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pl-0 sm:pl-3">
                    {sec.title}
                  </h2>
                  <div
                    className="rich-content pl-0 sm:pl-3"
                    dangerouslySetInnerHTML={{ __html: sec.bodyHtml }}
                  />

                  {/* Immediate Phone CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 sm:ml-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">
                      Need immediate DMV paperwork filing?
                    </span>
                    <a
                      href={`tel:${SITE_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs text-white bg-red-600 hover:bg-red-700 transition-all shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {SITE_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              ))}

              {/* Back to Guides */}
              <div className="pt-6">
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-red-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all NC Insurance Guides</span>
                </Link>
              </div>

            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Phone CTA Card (strictly phone button CTA) */}
              <div className="bg-[#0d1e38] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4 border border-slate-800 sticky top-24">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  Need an SR-22 Quote?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Call our North Carolina specialists directly. We submit DL-123 certificates and SR-22 filings electronically to the NCDMV.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${SITE_INFO.phoneRaw}`}
                    className="w-full py-3.5 rounded-xl font-black text-sm text-white bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {SITE_INFO.phone}</span>
                  </a>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 text-center">
                  Fast same-day electronic filing statewide
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 space-y-4">
                <h4 className="font-bold text-base text-slate-900 border-l-2 border-red-600 pl-2.5">
                  Related NC Guides
                </h4>
                <div className="space-y-3">
                  {otherBlogs.map((b) => (
                    <Link
                      key={b.url}
                      href={b.url}
                      className="block p-3 rounded-xl bg-white border border-slate-100 hover:border-red-200 hover:shadow-xs transition-all group"
                    >
                      <h5 className="font-bold text-xs text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2">
                        {b.page}
                      </h5>
                      <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>

        </div>
      </div>

      {/* Locations */}
      <LocationsGrid />

    </div>
  );
}
