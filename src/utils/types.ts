export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
}

export interface SocialLink {
  href: string;
  icon: string;
}