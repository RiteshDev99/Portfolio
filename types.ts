import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  category: 'dev' | 'ai' | 'ops' | 'design';
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}