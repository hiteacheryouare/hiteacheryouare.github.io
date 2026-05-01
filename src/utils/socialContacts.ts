import type { Project, SocialLink } from './types';

export const socialLinks: SocialLink[] = [
		{
			href: 'mailto:rpmullin17@gmail.com', 
			icon: 'envelope-fill',
			text: '/rpmullin17@gmail.com'
		},
		{
			href: 'https://linkedin.com/in/ryanpmullin',
			icon: 'linkedin',
			text: 'in/ryanpmullin'
		},
		{
			href: 'https://github.com/hiteacheryouare',
			icon: 'github',
			text: '/hiteacheryouare'
		},
		{
			href: 'https://instagram.com/rpmullin06',
			icon: 'instagram',
			text: '/rpmullin06'
		},
		{
			href: "https://www.facebook.com/rpmullin06/",
			icon: "facebook",
			text: "/rpmullin06"
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
		},
		{
			href: "https://open.spotify.com/user/rpmullin0917?si=d6a45c9fcac44f6f",
			icon: "spotify",
			text: "/rpmullin0917"
		},
		{
			href: "https://www.tiktok.com/@not_ryan_m",
			icon: "tiktok",
			text: "/@not_ryan_m"
		}
	];

  export const projects: Project[] = [
	{
	  title: "ArenaSwap",
	  description: "A browser extension that watches every live game in your tabs and swaps you to whichever one is most exciting, scored by an algorithm I built called PowerScore.",
	  tags: ["React", "TypeScript", "WXT", "TailwindCSS", "Bootstrap"],
	  year: "2026",
	  image: "/arenaswap-promo.png"
	},
	{
	  title: "(de)Motivator",
	  description: "A long-running side project that does exactly one thing: lower your self-esteem on demand. Press the button, get insulted. Now featuring MEGAMODE, accounts, and a mobile build.",
	  tags: ["Svelte", "Vite", "Firebase", "Capacitor", "Turborepo"],
	  year: "2021–present",
	  image: "https://demotivator.web.app/assets/dmv-logo-CraZEmCY.png"
	},
	{
	  title: "The Book Nook Project",
	  description: "Freelance build for a Philadelphia-area nonprofit getting books into the hands of underprivileged kids.",
	  tags: ["Astro", "HTML", "TailwindCSS", "Netlify"],
	  year: "2024",
	  image: "https://thebooknookproject.netlify.app/hero-img.jpg"
	},
	{
	  title: "Tritons Swim",
	  description: "Full team site for the Deerwood Tritons summer swim team — registration, records, roster, news. Now archived after the team folded.",
	  tags: ["Astro", "React", "Svelte", "TailwindCSS"],
	  year: "2023",
	  image: "https://tritons-swim.netlify.app/seahorse.png"
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

