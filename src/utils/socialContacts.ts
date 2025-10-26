import type { Project, SocialLink } from './types';

export const socialLinks: SocialLink[] = [
		{
			href: 'https://github.com/hiteacheryouare',
			icon: 'github',
			text: '/hiteacheryouare'
		},
		{
			href: 'https://linkedin.com/in/rpmullin06',
			icon: 'linkedin',
			text: 'in/rpmullin06'
		},
		{
			href: 'https://instagram.com/rpmullin06',
			icon: 'instagram',
			text: '/rpmullin06'
		},
		{
			href: 'mailto:rpmullin17@gmail.com', 
			icon: 'envelope-fill',
			text: '/rpmullin17@gmail.com'
		},
		{
			href: 'https://www.youtube.com/@ry06',
			icon: 'youtube',
			text: '/@ry06'
		},
		{
			href: 'https://discord.com/users/hiteacheryouare',
			icon: 'discord',
			text: '/hiteacheryouare'
		}
	];

  export const projects: Project[] = [
	{
	  title: "SmartCarbon",
	  description: "An eco-friendly travel carbon calculator that helps travelers make sustainable decisions by calculating and visualizing their carbon footprint with dynamic algorithms and actionable reduction strategies.",
	  tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
	  year: "2024",
	  image: "https://raw.githubusercontent.com/camdencatholic/smartcarbon/main/public/favi-text.png"
	},
	{
	  title: "Tritons Swim",
	  description: "Complete team website solution for Deerwood Tritons swim team featuring integrated registration system, comprehensive record management, and dynamic team roster displays.",
	  tags: ["Astro", "React", "Svelte", "TailwindCSS", "Bootstrap"],
	  year: "2024",
	  image: "https://tritons-swim.netlify.app/seahorse.png"
	},
	{
	  title: "The Book Nook Project",
	  description: "Mission-driven nonprofit website connecting underprivileged youth with books, featuring donation tracking, volunteer coordination, and community impact visualization.",
	  tags: ["Astro", "HTML", "TailwindCSS", "Netlify"],
	  year: "2023",
	  image: "https://thebooknookproject.netlify.app/hero-img.jpg"
	},
	{
	  title: "Launchpad",
	  description: "Modern link-in-bio card generator for personal branding, allowing users to create customizable landing pages with drag-and-drop functionality and real-time preview.",
	  tags: ["Next.js", "React", "TailwindCSS", "Vercel"],
	  year: "2024",
	},
  ];

 export const techStack = [
	"JavaScript", 
	"TypeScript", 
	"React", 
	"Next.js", 
	"Astro", 
	"Svelte",
	"TailwindCSS", 
	"Python"
  ];

