'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import Script from 'next/script';

interface BlogPost {
  title: string;
  description: string;
  author: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Business of Promoting Longevity and Healthspan",
    description: "A crop of new consumer-facing companies with unconventional data collection",
    author: "Eric Topol",
    link: "https://erictopol.substack.com/p/the-business-of-promoting-longevity"
  },
  {
    title: "The Longevity Balancing Act: From Biohacking to Being Human",
    description: "Why the real biohack isn't another protocol - it's learning to live fully while you optimize for longevity.",
    author: "Ryan Frankel",
    link: "https://ryanfrankel.substack.com/p/the-longevity-balancing-act-from"
  },
  {
    title: "Are Longevity Companies A Good Investment? (Part 2)",
    description: "Zooming in on Longevity M&A Trends",
    author: "Longevity Global",
    link: "https://longevitygl.substack.com/p/are-longevity-companies-a-good-investment-299"
  },
  {
    title: "What We'll Be Exploring in 2025",
    description: "Help Shape What We Explore this Year",
    author: "Longevity Explorers",
    link: "https://techenhancedlife.substack.com/p/what-well-be-exploring-in-2025"
  },
  {
    title: "Coleen Murphy: The Science of Aging and Longevity",
    description: "A leading scientist who has dedicated her career to understand how we age discusses the prospects of modulating the process",
    author: "Eric Topol",
    link: "https://erictopol.substack.com/p/coleen-murphy-the-science-of-aging"
  },
  {
    title: "On Longevity",
    description: "For someone who knows nothing, by someone who knows nothing",
    author: "Andreessen Horowitz",
    link: "https://eriktorenberg.substack.com/p/on-longevity"
  },
  {
    title: "The Longevity Paradox",
    description: "How an obsession with extending life keeps us from living.",
    author: "Vanessa Scaringi, PhD",
    link: "https://vanessascaringiphd.substack.com/p/the-longevity-paradox"
  },
  {
    title: "Natural Habitats for Longevity Communities",
    description: "On and offline opportunities to meet your people",
    author: "LongX - Longevity Xplorer",
    link: "https://longevityxplorer.substack.com/p/natural-habitats-for-longevity-communities"
  },
  {
    title: "Unleash Your Inner Strength - The Benefits of Barbell Training",
    description: "While there are countless tools, the barbell remains one of the most effective and efficient means for building functional strength and slowing age-related physical decline.",
    author: "Pete McCall",
    link: "https://strengthforlongevity.substack.com/p/unleash-your-inner-strength-the-benefits"
  },
  {
    title: "The End of GPs? • Tech for Hot Flashes • NDA+ patches • Why VC-Backed Longevity Startups Are Dying?",
    description: "Issue 55: The front page of longevity medicine - curated by doctors, for doctors.",
    author: "David Luu",
    link: "https://newsletter.longevitydocs.org/p/the-end-of-gps-tech-for-hot-flashes"
  }
];

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all h-full flex flex-col">
        <div className="flex-grow">
          <p className="text-blue-300 text-sm mb-2">{post.author}</p>
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-blue-200 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>
        </div>

        <div className="substack-post-embed mt-auto">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            Read on Substack
            <svg 
              className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  return (
    <PageLayout
      title="LongBio Blog"
      subtitle="Curated insights from leading voices in longevity research"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Substack Script */}
      <Script 
        src="https://substack.com/embedjs/embed.js" 
        strategy="lazyOnload"
      />
    </PageLayout>
  );
}