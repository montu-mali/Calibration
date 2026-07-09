export interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  iconId: string;
  longDescription: string;
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  equipment: string[];
  standards: string[];
  applications: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Industry {
  id: string;
  name: string;
  iconId: string;
  description: string;
  keyServices: string[];
  compliance: string;
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
