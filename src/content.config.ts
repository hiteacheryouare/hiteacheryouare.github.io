import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const schema = z;
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("Ryan Mullin"),
    description: z.string(),
    pubDate: z.string(),
    heroImage: z.object({
        src: z.string().default("/FullColor.svg"),
        alt: z.string().default("The Ryan Enterprises Logo"),
    }).optional(),
    urlBase: z.string().url().optional()
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/portfolio" }),
  schema: schema.object({
    name: schema.string(),
    description: schema.string(),
    date: schema.string(),
    url: schema.string().url(),
    freelance: schema.boolean().default(false),
    heroImage: schema.object({
        src: schema.string().default("/FullColor.svg"),
        alt: schema.string().default("The Ryan Enterprises Logo"),
    }).optional(),
    tags: schema.array(schema.string()).optional()
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/research" }),
  schema: schema.object({
    title: schema.string(),
    auhtor: schema.string().default("Ryan Mullin"),
    publishDate: schema.string(),
    type: schema.string().regex(/\b(IRR|IWA|Research)\b/),
    wordCount: schema.number()
  })
})

export const collections = { blog, portfolio, research };