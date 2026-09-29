import React from 'react';
import type { Metadata } from 'next';
import { getPageByUrl } from '@/data/content';
import PageTemplate from '@/components/PageTemplate';
import { notFound } from 'next/navigation';

const pageData = getPageByUrl('/winston-salem-nc/');

export const metadata: Metadata = {
  title: pageData?.seoTitle || "SR22 Insurance Winston-Salem NC | DL-123 Coverage",
  description: pageData?.metaDesc || "Need SR-22 or DL-123 insurance in Winston-Salem, North Carolina? Get an instant quote from Beacon SR22 Insurance NC.",
};

export default function WinstonSalemPage() {
  if (!pageData) {
    notFound();
  }

  return (
    <PageTemplate
      page={pageData}
      heroImage="/images/protection-hands.webp"
      badge="Local North Carolina Service • Winston-Salem, NC"
    />
  );
}
