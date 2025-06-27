import { Skill, WorkExperience } from './types';
import { Project } from './types';
import { Content } from './types';

export const skills: Skill[] = [
  { id: '1', name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
  { id: '2', name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg' },
  { id: '3', name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
  { id: '4', name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg' },
  { id: '5', name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg' },
  { id: '6', name: 'Flutter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg' },
  { id: '7', name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
  { id: '8', name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg' },
  { id: '9', name: 'Supabase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg' },
  { id: '10', name: 'Dart', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dart.svg' },
  { id: '11', name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg' },
  { id: '12', name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Task Manager App',
    description: 'A web app to manage tasks with real-time updates.',
    thumbnail: '/images/project-thumbnails/task-manager.jpg',
    techStack: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/task-manager',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    thumbnail: '/images/project-thumbnails/portfolio.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/your-username/portfolio',
  },
  {
    id: '3',
    title: 'E-Commerce Store',
    description: 'An online store with product listings and cart functionality.',
    thumbnail: '/images/project-thumbnails/ecommerce.jpg',
    techStack: ['Next.js', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
  },
];

export const contentItems: Content[] = [
  {
    id: '1',
    title: 'How to Build a Next.js Portfolio',
    type: 'blog',
    thumbnail: '/images/content-thumbnails/blog1.jpg',
    url: 'https://your-blog.com/nextjs-portfolio',
  },
  {
    id: '2',
    title: 'React Hooks Tutorial',
    type: 'video',
    thumbnail: '/images/content-thumbnails/video1.jpg',
    url: 'https://youtube.com/your-video',
  },
  {
    id: '3',
    title: 'TypeScript Tips for Beginners',
    type: 'blog',
    thumbnail: '/images/content-thumbnails/blog2.jpg',
    url: 'https://your-blog.com/typescript-tips',
  },
];

export const workExperiences: WorkExperience[] = [
      {
      id: '1',
      title: 'Full Stack Developer',
      company: 'Adavii Tech (Pvt) Ltd',
      location: 'Colombo, Sri Lanka',
      period: 'May 2024 - June 2025',
      type: 'Full-time'
    },
    {
      id: '2',
      title: 'Intern Full Stack Developer',
      company: 'Falconet Ltd',
      location: 'Colombo, Sri Lanka',
      period: 'Oct 2023 - Jan 2024',
      type: 'Internship'
    }
];