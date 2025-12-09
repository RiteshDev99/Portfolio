import { 
  Globe, Smartphone, Layers, Sparkles, Brain, Server, 
  Database, PenTool, Rocket, MessageCircle, Cloud, 
  Scan, Bot, Terminal
} from 'lucide-react';
import { Project, Skill, Testimonial, Stat, TimelineItem } from './types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Full-Stack Web', icon: Globe, description: 'Modern React & Next.js apps', category: 'dev', featured: true },
  { name: 'AI Automation', icon: Sparkles, description: 'LLM-powered workflows', category: 'ai', featured: true },
  { name: 'Intelligent Agents', icon: Brain, description: 'Autonomous reasoning agents', category: 'ai', featured: true },
  { name: 'Backend & APIs', icon: Server, description: 'Node.js, Hono, Nest.js', category: 'dev' },
  { name: 'SaaS Product', icon: Layers, description: 'Idea to Launch', category: 'dev' },
  { name: 'Mobile Apps', icon: Smartphone, description: 'React Native & Expo', category: 'dev' },
  { name: 'BaaS', icon: Database, description: 'Supabase, Firebase', category: 'ops' },
  { name: 'UI/UX Design', icon: PenTool, description: 'Clean design systems', category: 'design' },
  { name: 'MVP Development', icon: Rocket, description: 'Production-ready in weeks', category: 'dev' },
  { name: 'Voice & Chat AI', icon: MessageCircle, description: 'Conversational systems', category: 'ai' },
  { name: 'Cloud Infra', icon: Cloud, description: 'AWS, Vercel, Edge', category: 'ops' },
  { name: 'Web Scraping', icon: Scan, description: 'Data extraction & APIs', category: 'dev' },
  { name: 'Automation', icon: Bot, description: 'Playwright & Selenium', category: 'ops' },
  { name: 'Dev Tools', icon: Terminal, description: 'Git, Linux, CI/CD', category: 'ops' },
];

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Restaurant Management System',
        description:
            'A full-stack restaurant management solution featuring order handling, menu management, table booking, and real-time updates. Built with a unified Appwrite backend powering both the React Native mobile app and the React web admin dashboard.',
        tags: ['React Native', 'Expo', 'React', 'Appwrite', 'Full Stack'],
        role: 'Full-Stack Site & Mobile App',
        image: 'https://www.bdtask.com/blog/uploads/restaurant-management.jpg',
        link: 'https://github.com/RiteshDev99/NavratanAdmin',
    },

    {
        id: '2',
        title: 'Snap Zone',
        description:
            'A secure personal photo storage web application where users can upload, view, and manage their private photo gallery. Built with a full-stack Appwrite backend, Snap Zone features strong authentication, protected storage, and a smooth photo management experience.',
        tags: ['React', 'Redux', 'Tailwind', 'JavaScript', 'Appwrite', 'Vite'],
        role: 'Full-Stack Site',
        image: 'https://img.freepik.com/premium-photo/personal-data-storage-internet-things-concept-with-human-hand-holding-modern-smartphone-with-digital-lock-sign-computer-technology-symbols-abstract-dark-wallpaper_670147-53627.jpg', // Replace with your real screenshot anytime
        link: 'https://github.com/RiteshDev99/Snap_Zone',
    },
    {
        id: '3',
        title: 'Saathi Ride Sharing App',
        description:
            'A cross-platform travel assistance and ride-sharing mobile application designed to help users solve everyday travel problems by finding, sharing, and offering rides. Built with React Native and Expo, powered by a NestJS backend, Saathi focuses on seamless matching, safety, and a smooth real-time user experience.',
        tags: ['React Native', 'Expo', 'NestJS', 'TypeScript', 'Cross-Platform', 'Mobile App'],
        role: 'Full-Stack Mobile App',
        image: 'https://www.appicial.com/blog/images/the-truth-about-ride-hailing-and-ride-sharing.jpg',
        link: 'https://github.com/RiteshDev99/Saathi.git',
    },

];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: '5', suffix: '+' },
  { label: 'Projects Completed', value: '50', suffix: '+' },
  { label: 'Happy Clients', value: '30', suffix: '+' },
  { label: 'Client Satisfaction', value: '99', suffix: '%' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechFlow',
    text: "Ritesh transformed our legacy system into a high-performance modern app. His understanding of both code and product strategy is rare.",
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Founder',
    company: 'StartUp Inc',
    text: "We went from idea to MVP in 4 weeks. The AI automation he built saved us 20 hours a week of manual work immediately.",
    image: 'https://picsum.photos/seed/david/100/100'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    company: 'Enterpriz',
    text: "Professional, communicative, and technically brilliant. The glassmorphic design he implemented blew our stakeholders away.",
    image: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const PROCESS_STEPS = [
  { title: 'Discovery', desc: 'Understanding goals & user needs' },
  { title: 'Strategy', desc: 'Architecture & technical planning' },
  { title: 'Design', desc: 'UI/UX systems & prototypes' },
  { title: 'Development', desc: 'Clean, scalable code implementation' },
  { title: 'Launch', desc: 'Deployment, QA, & monitoring' },
  { title: 'Support', desc: 'Iteration & optimization' },
];