export interface Resource {
  title: string;
  description: string;
  link: string;
  author?: string;
  duration?: string;
  date?: string;
}

export type ResourceType = 'pdfs' | 'videos' | 'courses' | 'talks' | 'podcasts';

export const libraryResources: Record<ResourceType, Resource[]> = {
  pdfs: [
    {
      title: "The Hallmarks of Aging",
      description: "Comprehensive review of the fundamental mechanisms of aging",
      link: "#",
      author: "López-Otín et al.",
      date: "2023"
    },
    {
      title: "Longevity Drug Development",
      description: "Overview of current therapeutic approaches in longevity",
      link: "#",
      author: "Nature Reviews",
      date: "2023"
    }
  ],
  videos: [
    {
      title: "Understanding mTOR Pathways",
      description: "Detailed explanation of mTOR's role in aging",
      link: "#",
      duration: "45 min",
      author: "Dr. David Sabatini"
    },
    {
      title: "Cellular Senescence",
      description: "How senescent cells affect aging and disease",
      link: "#",
      duration: "1 hour",
      author: "Dr. Judith Campisi"
    }
  ],
  courses: [
    {
      title: "Introduction to Longevity Science",
      description: "Comprehensive course covering the basics of aging research",
      link: "#",
      author: "LongBio Institute",
      duration: "8 weeks"
    },
    {
      title: "Advanced Aging Mechanisms",
      description: "Deep dive into molecular and cellular aspects of aging",
      link: "#",
      author: "Buck Institute",
      duration: "12 weeks"
    }
  ],
  talks: [
    {
      title: "The Future of Human Longevity",
      description: "Latest developments in aging research and interventions",
      link: "#",
      author: "Dr. Peter Attia",
      duration: "1.5 hours"
    },
    {
      title: "Epigenetics and Aging",
      description: "Understanding how epigenetic changes influence aging",
      link: "#",
      author: "Dr. Steve Horvath",
      duration: "1 hour"
    }
  ],
  // Empty podcasts array since we're using embeds instead of placeholder cards
  podcasts: []
};