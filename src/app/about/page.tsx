'use client';

import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function AboutPage(): JSX.Element {
  const stripeSupportUrl = process.env.NEXT_PUBLIC_STRIPE_DONATE_URL;
  return (
    <PageLayout
      title="About Us & Support"
      subtitle="About LongBio Institute and how you can contribute to advancing longevity research."
    >
      {/* Mission Section */}
      <section className="mb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About LongBio Institute
            </motion.h2>
            <motion.p
              className="text-blue-100 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              LongBio Institute advances longevity biotechnology through rigorous research, open collaboration, and modern engineering practices. We build trustworthy resources like the LongBio Database and Library, connect researchers and builders through events, and support translational work that can meaningfully extend healthy human lifespan.
            </motion.p>
            {/* Removed CTA per request */}
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/30 blur-3xl rounded-full" />
            <motion.div
              className="relative rounded-2xl p-10 bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              aria-label="LongBio Institute Logo"
              role="img"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white flex items-center justify-center text-blue-950 font-bold text-4xl md:text-5xl">
                LBI
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our Core Values
        </motion.h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {values.map((value, index) => (
            <Card
              key={value.title}
              variant="glass"
              padding="lg"
              hover="lift"
              isInteractive
              className="group border border-white/10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
              >
                <div className="mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600/25 to-blue-400/20 flex items-center justify-center ring-1 ring-white/10 shadow-inner">
                    <value.icon className="h-6 w-6 text-blue-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {value.title}
                </h3>
                <div className="h-px w-10 bg-white/20 mb-3" />
                <p className="text-blue-100/90 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </Card>
           ))}
         </div>
      </section>

      {/* Support Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Support Our Work</h2>
            <p className="text-blue-100 mb-6">
              Your support helps us maintain open resources, run community programs, and fund high-impact longevity research. Contribute securely via Stripe, or reach out to discuss sponsorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={() => {
                  if (stripeSupportUrl) {
                    window.open(stripeSupportUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    alert('Contribution link is not configured yet. Please contact us at hello@longbio.org');
                  }
                }}
              >
                Contribute via Stripe
              </Button>
              <a
                href="mailto:hello@longbio.org?subject=LongBio%20Sponsorship"
                className="inline-flex items-center justify-center rounded-md border-2 border-white/20 text-white px-6 py-3 text-base font-medium transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-950"
              >
                Sponsor or Partner
              </a>
            </div>
            {!stripeSupportUrl && (
              <p className="text-blue-300 text-sm mt-4">
                Admin note: Set NEXT_PUBLIC_STRIPE_DONATE_URL to enable the Stripe contribution button.
              </p>
            )}
          </Card>
        </motion.div>
      </section>

      {/* Team Section removed per request */}
    </PageLayout>
  );
}

const values = [
  {
    title: 'Scientific Excellence',
    description: 'Committed to rigorous research methodologies and evidence-based approaches.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Global Collaboration',
    description: 'Building worldwide partnerships to accelerate scientific discoveries.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovation Focus',
    description: 'Pushing boundaries with cutting-edge technologies and novel approaches.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Team section removed