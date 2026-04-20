import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        link: z.string().url().optional(),
        img: image(),
        img_alt: z.string().optional(),
        github: z.string().url().optional(),
      }),
  }),
};
