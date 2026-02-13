import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    role: z.string(),
    impact: z.string(),
    date: z.date(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  writing,
  work,
};
