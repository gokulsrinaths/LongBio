'use client';

import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { AirtableEmbed } from '@/components/database/AirtableEmbed';
import { DatabaseNav } from '@/components/database/DatabaseNav';
import { databaseConfig, DatabaseView } from '@/config/database';

export default function DatabasePage() {
  // Initialize with a type-safe default value
  const [activeView, setActiveView] = useState<DatabaseView>('companies');

  // Type assertion to ensure TypeScript knows activeView is a valid key
  const currentConfig = databaseConfig[activeView as keyof typeof databaseConfig];

  return (
    <PageLayout
      title="Database"
      subtitle="Explore companies and technologies in longevity science."
    >
      <div className="space-y-8">
        <DatabaseNav activeView={activeView} onViewChange={setActiveView} />
        <AirtableEmbed url={currentConfig.url} />
      </div>
    </PageLayout>
  );
}