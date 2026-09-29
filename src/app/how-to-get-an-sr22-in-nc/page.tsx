import React from 'react';
import type { Metadata } from 'next';
import { getPageByUrl } from '@/data/content';
import PageTemplate from '@/components/PageTemplate';
import { notFound } from 'next/navigation';

const pageData = getPageByUrl('/how-to-get-an-sr22-in-nc/');

export const metadata: Metadata = {
  title: pageData?.seoTitle || "How to Get SR-22 and DL-123 Insurance in NC",
  description: pageData?.metaDesc || "Step-by-step guide to obtaining an SR-22 or DL-123 in North Carolina.",
};

export default function HowToGetSR22NCPage() {
  if (!pageData) {
    notFound();
  }

  return (
    <PageTemplate
      page={pageData}
      heroImage="/images/man-holding-doc.webp"
      badge="Step-by-Step North Carolina DMV Filing Guide"
    />
  );
}
