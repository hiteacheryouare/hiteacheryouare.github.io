export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  image?: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  text?: string;
}