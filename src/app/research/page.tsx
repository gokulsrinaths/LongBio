'use client';

import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/Card';

export default function ResearchPage() {
  return (
    <PageLayout
      title="Research"
      subtitle="Our latest research and publications in longevity science."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h3>Research Content</h3>
          <p>Coming soon...</p>
        </Card>
      </div>
    </PageLayout>
  );
}