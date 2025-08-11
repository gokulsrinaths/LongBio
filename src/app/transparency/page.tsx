'use client';

import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';

const TransparencyPage = () => {
  const transparencyItems = [
    {
      title: 'Financial Transparency',
      content: 'We maintain complete transparency in our financial operations, including funding sources, expenditures, and resource allocation.',
    },
    {
      title: 'Research Methodology',
      content: 'Our research methodologies and protocols are openly documented and available for review.',
    },
    {
      title: 'Data Sharing',
      content: 'We believe in open data sharing to accelerate scientific progress in longevity research.',
    },
    {
      title: 'Collaboration Guidelines',
      content: 'Clear guidelines for research collaborations and partnerships.',
    },
  ];

  return (
    <PageLayout
      title="Transparency"
      subtitle="Our commitment to openness and accountability"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {transparencyItems.map((item) => (
          <Card key={item.title} className="p-6">
            <Typography variant="h3" className="mb-4">
              {item.title}
            </Typography>
            <Typography>
              {item.content}
            </Typography>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

export default TransparencyPage;