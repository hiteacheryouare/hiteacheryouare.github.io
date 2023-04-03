import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().default("Ryan Mullin"),
    description: z.string(),
    pubDate: z.string(),
    heroImage: z.object({
        src: z.string().default("/FullColor.svg"),
        alt: z.string().default("The Ryan Enterprises Logo"),
    }).optional(),
    urlBase: z.string().optional()
  }),
});
export const collections = { blog };