'use client';

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { AirtableEmbed } from '@/components/database/AirtableEmbed';
import { databaseConfig, type DatabaseView } from '@/config/database';

interface DatabaseDetailPageProps {
  view: DatabaseView;
  title: string;
  subtitle: string;
  description: string;
}

export function DatabaseDetailPage({
  view,
  title,
  subtitle,
  description,
}: DatabaseDetailPageProps) {
  const config = databaseConfig[view];

  return (
    <PageLayout title={title} subtitle={subtitle}>
      <section className="mb-8">
        <div className="mb-6">
          <Link
            href="/database"
            className="inline-flex items-center text-[0.8rem] uppercase tracking-[0.18em] text-[#6a7e73] transition-colors hover:text-[#39554a]"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to database
          </Link>
        </div>

        <div className="mb-6 flex flex-col gap-4 rounded-[24px] border border-[#dbe7e0] bg-white/88 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl tracking-tight text-[#30453b]">{config.label}</h2>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-[#476556]">
              <span className="signal-dot" />
              Live data
            </span>
          </div>
          <div className="text-[0.8rem] uppercase tracking-[0.16em] text-[#809489]">
            Powered by Airtable
          </div>
        </div>

        <p className="mb-6 max-w-3xl text-sm leading-7 text-[#61766a]">{description}</p>

        <AirtableEmbed url={config.url} title={`${config.label} database`} />
      </section>
    </PageLayout>
  );
}
