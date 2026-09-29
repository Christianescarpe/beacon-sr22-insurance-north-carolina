import React from 'react';
import type { Metadata } from 'next';
import { getPageByUrl } from '@/data/content';
import PageTemplate from '@/components/PageTemplate';
import { notFound } from 'next/navigation';

const pageData = getPageByUrl('/high-point-nc/');

export const metadata: Metadata = {
  title: pageData?.seoTitle || "SR22 Insurance High Point NC | DL-123 Coverage",
  description: pageData?.metaDesc || "Need SR-22 or DL-123 insurance in High Point, North Carolina? Get an instant quote from Beacon SR22 Insurance NC.",
};

export default function HighPointPage() {
  if (!pageData) {
    notFound();
  }

  return (
    <PageTemplate
      page={pageData}
      heroImage="/images/signing-document.webp"
      badge="Local North Carolina Service • High Point, NC"
    />
  );
}
