declare module 'next/link'
declare module 'next/image'

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface MembershipTier {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}

interface BlogPost {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
}

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  recordingUrl?: string;
} 