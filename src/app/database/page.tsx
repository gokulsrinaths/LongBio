'use client';

import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { AirtableEmbed } from '@/components/database/AirtableEmbed';
import { DatabaseNav } from '@/components/database/DatabaseNav';
import { databaseConfig } from '@/config/database';

export default function DatabasePage() {
  const [activeView, setActiveView] = useState('companies');

  return (
    <PageLayout
      title="Database"
      subtitle="Explore companies and technologies in longevity science."
    >
      <div className="space-y-8">
        <DatabaseNav activeView={activeView} onViewChange={setActiveView} />
        <AirtableEmbed url={databaseConfig[activeView].url} />
      </div>
    </PageLayout>
  );
}