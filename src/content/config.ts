import { defineCollection, z } from 'astro:content';
const schema = z;
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

const portfolio = defineCollection({
  schema: schema.object({
    name: schema.string(),
    description: schema.string(),
    date: schema.string(),
    freelance: schema.boolean().default(false),
    heroImage: schema.object({
        src: schema.string().default("/FullColor.svg"),
        alt: schema.string().default("The Ryan Enterprises Logo"),
    }).optional(),
    tags: schema.array(schema.string()).optional()
  }),
});

export const collections = { blog, portfolio };