export interface Skill {
  id: string;
  name: string;
  icon: string; // URL or path to icon (e.g., from a CDN or local assets)
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Path to thumbnail in /public/images/project-thumbnails
  techStack: string[];
  liveUrl?: string; // Optional link to live demo
  repoUrl?: string; // Optional link to GitHub repository
}

export interface Content {
  id: string;
  title: string;
  type: string;
  url: string;
}

export interface WorkExperience {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    type: 'Full-time' | 'Part-time' | 'Internship';
}