import React from 'react';
import type { Metadata } from 'next';
import { getPageByUrl } from '@/data/content';
import PageTemplate from '@/components/PageTemplate';
import { notFound } from 'next/navigation';

const pageData = getPageByUrl('/what-is-sr22/');

export const metadata: Metadata = {
  title: pageData?.seoTitle || "What Is SR-22 and DL-123 Insurance in NC?",
  description: pageData?.metaDesc || "Everything you need to know about North Carolina SR-22 and DL-123 filings.",
};

export default function WhatIsSR22Page() {
  if (!pageData) {
    notFound();
  }

  return (
    <PageTemplate
      page={pageData}
      heroImage="/images/umbrella-protection.webp"
      badge="North Carolina Certificate of Financial Responsibility"
    />
  );
}
