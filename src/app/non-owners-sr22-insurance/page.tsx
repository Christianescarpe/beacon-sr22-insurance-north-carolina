import React from 'react';
import type { Metadata } from 'next';
import { getPageByUrl } from '@/data/content';
import PageTemplate from '@/components/PageTemplate';
import { notFound } from 'next/navigation';

const pageData = getPageByUrl('/non-owners-sr22-insurance/');

export const metadata: Metadata = {
  title: pageData?.seoTitle || "Non-Owner SR22 Insurance North Carolina | NC Non-Owner Policy",
  description: pageData?.metaDesc || "Need an SR-22 in North Carolina but do not own a vehicle? Learn about non-owner SR-22 policies.",
};

export default function NonOwnersSR22Page() {
  if (!pageData) {
    notFound();
  }

  return (
    <PageTemplate
      page={pageData}
      heroImage="/images/car-agreement.webp"
      badge="Affordable Non-Owner Auto Liability Solution"
    />
  );
}
