import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  longDescription?: string;
  equipment?: string[];
  standards?: string[];
  applications?: string[];
}

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}
