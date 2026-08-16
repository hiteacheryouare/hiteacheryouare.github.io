import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const schema = z;

// `voice` decides attribution: 'first' is Ryan writing, 'third' is someone
// writing about him.
const press = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/press" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("Ryan Mullin"),
    description: z.string(),
    pubDate: z.string(),
    voice: z.enum(['first', 'third']).default('first'),
    dateline: z.string().default('Boston, Mass.'),
    heroImage: z.object({
        src: z.string().default("/waves.png"),
        alt: z.string().default("multicolored waves"),
        // Taller than it is wide, so the 16:9 plate would crop the subject out.
        portrait: z.boolean().default(false),
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
        src: schema.string().default("/waves.png"),
        alt: schema.string().default("multicolored waves"),
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

export const collections = { press, portfolio, research };
