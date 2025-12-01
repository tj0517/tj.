export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image:string;
  link:string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}