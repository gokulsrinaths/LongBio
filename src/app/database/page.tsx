'use client';

import { useState } from 'react';
import { motion as _motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { AirtableEmbed } from '@/components/database/AirtableEmbed';
import { DatabaseNav } from '@/components/database/DatabaseNav';
import { databaseConfig } from '@/config/database';
import type { DatabaseView } from '@/config/database';

export default function DatabasePage(): JSX.Element {
  const [activeView, setActiveView] = useState<DatabaseView>('companies');

  return (
    <PageLayout
      title="LongBio Database"
      subtitle="Comprehensive directory of longevity science and technology."
    >
      {/* Navigation Section */}
      <section className="relative mb-12 pb-8 border-b border-white/10">
        <DatabaseNav
          activeView={activeView}
          onViewChange={setActiveView}
        />
      </section>

      {/* Current View Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">
              {databaseConfig[activeView].label}
            </h2>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
              Live Data
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Powered by Airtable
          </div>
        </div>

        {/* Description */}
        <p className="text-blue-200 mb-6">
          {databaseConfig[activeView].description}
        </p>

        {/* Airtable Embed */}
        <AirtableEmbed url={databaseConfig[activeView].url} />
      </section>
    </PageLayout>
  );
}